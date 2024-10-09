<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl w-full space-y-8">
      <div v-if="userInfo" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {{ userInfo.name }}!
        </h2>
        <!-- JsonRenderer Component -->
        <div class="mt-8">
          <JsonRenderer :jsonString="userJson" />
          <div>
            <button @click="logout"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Logout
            </button>
          </div>
        </div>

        <!-- <div class="mt-8 space-y-6">
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
        </div> -->
        
      </div>
      <div v-else>
        <p class="text-center text-xl">Loading user information...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { OktaAuth } from '@okta/okta-auth-js'
import { useRouter } from 'vue-router'
import JsonRenderer from './JsonRender.vue' // Adjust the path based on your project structure

const router = useRouter()
const userInfo = ref(null)

// Computed property to serialize userInfo as JSON string
const userJson = computed(() => {
  return userInfo.value ? JSON.stringify(userInfo.value, null, 2) : '{}'
})

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
    // Merge tokens into userInfo
    userInfo.value = { ...user, idtoken, accesstoken: token }
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

<style scoped>
/* Add any page-specific styles here */
</style>
