<template>
  <section class="overflow-hidden">
    <!-- Navbar -->
    <nav class="flex items-center justify-between px-5 py-4 bg-white shadow-md">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold">
        <span class="text-[#f22282]">Allure</span><span class="text-black">Event</span>
      </a>

      <!-- Desktop Menu Links -->
      <div class="hidden lg:flex space-x-8">
        <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Features</a>
        <a href="#" class="font-medium text-gray-700 hover:text-gray-900">About</a>
        <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Gallery</a>
        <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Pricing</a>
      </div>

      <!-- Contact Button (Desktop) -->
      <div class="hidden lg:flex">
        <button class="py-2 px-5 font-semibold text-white bg-[#f22282] hover:bg-red-700 rounded-xl transition ease-in-out duration-200">
          Contact Us
        </button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="toggleMobileNav" class="lg:hidden text-[#f22282]">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileNavOpen" class="fixed inset-0 z-50 bg-white p-8 lg:hidden">
      <!-- Close Button -->
      <div class="flex items-center justify-between mb-8">
        <a href="#" class="text-2xl font-bold">
          <span class="text-[#f22282]">Allure</span><span class="text-black">Event</span>
        </a>
        <button @click="toggleMobileNav" class="text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Links -->
      <div class="space-y-6">
        <a href="#" class="block font-medium text-gray-700 hover:text-gray-900">Features</a>
        <a href="#" class="block font-medium text-gray-700 hover:text-gray-900">About</a>
        <a href="#" class="block font-medium text-gray-700 hover:text-gray-900">Gallery</a>
        <a href="#" class="block font-medium text-gray-700 hover:text-gray-900">Pricing</a>
      </div>

      <!-- Contact Button (Mobile) -->
      <div class="mt-10">
        <button class="w-full py-3 font-semibold text-white bg-[#f22282] hover:bg-red-700 rounded-xl transition ease-in-out duration-200">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
};
</script>

<style scoped>
/* Scoped styles if needed */
nav {
  position: relative;
}

button {
  cursor: pointer;
}

svg {
  width: 24px;
  height: 24px;
}
</style>



