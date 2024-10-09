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
            <button 
              @click="copyToClipboard(jsonData.idtoken)" 
              class="absolute top-2 right-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show
            </button>
          </div>
        </div>

        <!-- ID Token Section with Copy Button -->
        <div>
          <h2 class="text-xl font-semibold mt-6 mb-2">Access Token</h2>
          <div class="relative">
            <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto">{{ jsonData.accesstoken }}</pre>
            <button 
              @click="copyToClipboard(jsonData.accesstoken)" 
              class="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Copy
            </button>
            <button 
              @click="copyToClipboard(jsonData.accesstoken)" 
              class="absolute top-2 right-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show
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
    props: {
    jsonString: {
      type: String,
      required: true,
    },
  },
    data() {
    return {
      jsonData: JSON.parse(this.jsonString),
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
  