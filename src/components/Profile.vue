<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { OktaAuth } from '@okta/okta-auth-js'
import { useRouter } from 'vue-router'

const router = useRouter()
const userInfo = ref(null)

onMounted(async () => {
  const oktaAuth = new OktaAuth({
    issuer: `https://${localStorage.getItem('oktaDomain')}/oauth2/default`,
    clientId: localStorage.getItem('clientId') || "",
    redirectUri: `${window.location.origin}/login/callback`
  })

  try {
    await oktaAuth.handleLoginRedirect()
    const token = await oktaAuth.getAccessToken()
    const idtoken = await oktaAuth.getIdToken()
    const user = await oktaAuth.getUser()    
    //userInfo.value = user
    userInfo.value = { ...user, ...{idtoken: idtoken}, ...{accesstoken: token} }
  } catch (error) {
    console.error('Error handling login:', error)
    router.push('/')
  }
})

const logout = async () => {
  localStorage.removeItem('oktaDomain')
  localStorage.removeItem('clientId')
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div v-if="userInfo">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {{ userInfo.name }}!
        </h2>
        <div class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <p><strong>Email:</strong> {{ userInfo.email }}</p>
            <p><strong>Username:</strong> {{ userInfo.preferred_username }}</p>
            <p><strong>Access Token:</strong> {{ userInfo.accesstoken }}</p>
            <p><strong>Id Token:</strong> {{ userInfo.idtoken }}</p>
          </div>
          <div>
            <button @click="logout"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">Loading user information...</p>
      </div>
    </div>
  </div>
</template>