<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 class="text-2xl font-bold mb-4">User Information</h1>
        <div class="space-y-4">
          <div class="flex justify-between">
            <span class="font-semibold">Sub:</span>
            <span>{{ jsonData.sub }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Name:</span>
            <span>{{ jsonData.name }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Locale:</span>
            <span>{{ jsonData.locale }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Email:</span>
            <span>{{ jsonData.email }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Preferred Username:</span>
            <span>{{ jsonData.preferred_username }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Given Name:</span>
            <span>{{ jsonData.given_name }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Family Name:</span>
            <span>{{ jsonData.family_name }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Zone Info:</span>
            <span>{{ jsonData.zoneinfo }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Email Verified:</span>
            <span>{{ jsonData.email_verified }}</span>
          </div>
  
          <!-- Headers Section -->
          <div>
            <h2 class="text-xl font-semibold mt-6 mb-2">Headers</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div v-for="(value, key) in jsonData.headers" :key="key" class="flex justify-between">
                <span class="font-medium">{{ key }}:</span>
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
  
          <!-- ID Token Section with Copy Button -->
        <div>
          <h2 class="text-xl font-semibold mt-6 mb-2">ID Token</h2>
          <div class="relative">
            <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto">{{ jsonData.idtoken }}</pre>
            <button 
              @click="copyToClipboard(jsonData.idtoken)" 
              class="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Copy
            </button>
          </div>
        </div>

        <!-- ID Token Section with Copy Button -->
        <div>
          <h2 class="text-xl font-semibold mt-6 mb-2">accesstoken Token</h2>
          <div class="relative">
            <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto">{{ jsonData.accesstoken }}</pre>
            <button 
              @click="copyToClipboard(jsonData.accesstoken)" 
              class="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Copy
            </button>
          </div>
        </div>
  
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "JsonRenderer",
    data() {
      return {
        jsonData: {
          "sub": "00ufcjdtuwvupAXHH5d7",
          "name": "admin user",
          "locale": "en_US",
          "email": "admin@user.com",
          "preferred_username": "admin@user.com",
          "given_name": "admin",
          "family_name": "user",
          "zoneinfo": "America/Los_Angeles",
          "email_verified": true,
          "headers": {
            "cache-control": "no-cache, no-store",
            "content-type": "application/json",
            "date": "Wed, 09 Oct 2024 15:17:47 GMT",
            "expires": "0",
            "pragma": "no-cache",
            "x-okta-request-id": "1a599ca3f8187aade085ebdb9ad0eef5",
            "x-rate-limit-limit": "150",
            "x-rate-limit-remaining": "149",
            "x-rate-limit-reset": "1728487127"
          },
          "idtoken": "eyJraWQiOiI4QXZEZDF5MGcwZUdZYmM0R29NNGR5M3RSOE0ydzZpcHl1dXpvak84YWhZIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVmY2pkdHV3dnVwQVhISDVkNyIsIm5hbWUiOiJhZG1pbiB1c2VyIiwiZW1haWwiOiJhZG1pbkB1c2VyLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtMjQzNTAyNjEub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiIwb2FrOWNyNmpseUVIYWs1MDVkNyIsImlhdCI6MTcyODQ4NjU0OCwiZXhwIjoxNzI4NDkwMTQ4LCJqdGkiOiJJRC4tZ3E1ZFJ0eTlKNVB0LUE5N3hHeWp4eXhOWXMwZmlNeXpMVkZUbXFwdGMwIiwiYW1yIjpbInB3ZCJdLCJpZHAiOiIwMG9mOXBycDEwcktZRVliODVkNyIsIm5vbmNlIjoiMUYwU25Da3F1dEFpMTgyOHcxOVd2NUxldGxEaVFPYnJaZDJ5VndTMkRGbEU1eGxHYzloaEZqaVZLY1dQYlZBZCIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluQHVzZXIuY29tIiwiYXV0aF90aW1lIjoxNzI4NDg0Nzc1LCJhdF9oYXNoIjoiU2tLQzJWNDBfSTRBRzVaRU4wYTRHZyJ9.T0doSdUG5QYS_2O9xB0wmSAky7ChZnHCJc5GtvlRyrDvanYzLB-YJhyE-yvyGD-3w19DT8svIlnjj27VUhGmVIG9l5PykvFddSTdNToXgc2Y3csSpU7x_XzeqCY1-N_DrtPU_917YyHWvtfMY3DOaqhwfrYF2vDnMV7PGF8pLrQYQQ2AMs7_T2GVb0venffgZ8wqxqrmIIYCv8br9aRamXsyWXmavM8shBzh6AJMttnEkKKB66kvkh6yrGoM7luB3RLP7At_-Z1LAdhC3u4HsUoCP9YpSKrGBmVESpCL0a-qCBfGIN7XxnXrHXw55IWZyfUxxWpKDN_yxpAhX_KSAw",
          "accesstoken": "eyJraWQiOiI4QXZEZDF5MGcwZUdZYmM0R29NNGR5M3RSOE0ydzZpcHl1dXpvak84YWhZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlVLZHJXd3FvU3hxNTVFdjU2S1NwY2RTY05vN0Rvb3g3QXVoazU1ck5CcUUiLCJpc3MiOiJodHRwczovL2Rldi0yNDM1MDI2MS5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3Mjg0ODY1NDgsImV4cCI6MTcyODQ5MDE0OCwiY2lkIjoiMG9hazljcjZqbHlFSGFrNTA1ZDciLCJ1aWQiOiIwMHVmY2pkdHV3dnVwQVhISDVkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNzI4NDg0Nzc1LCJzdWIiOiJhZG1pbkB1c2VyLmNvbSJ9.FW_ZkxlUDSO7JjL7eKfMZlLnqHLkAfAEIvhnmNObj9kDGE_nVAQLzXMlBqTfDz1O8pEjgYlw3Bq-WWpwf7T5tO0pMxK1HTaWQaRjVY_jBbHmIDJvqn2Yf_nxj39gZVZfIgCuCZVqRDxwE0jAyZ9aecK4t7RYO-MKrUCmiJ5gIOcZTDuu1VrHRdxgZfnpJaHK1j1mucBw9emRkJqdrv7y0QEe0aVoUP2wdGThZJ7DVOp6NHbFV4EQQwDpqT7I8O5eBHDl-ax6ccjnVNjuPdNr6LEDOELPzG955-OZNlratlFdnLIzes59Ga7XRk-pcmt1UkfBk6vhOqbbct571DZnjQ"
        }
      };
    },
    methods: {
            copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert("ID Token copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy!", err);
            });
            }
        },
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  