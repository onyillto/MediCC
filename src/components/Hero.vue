<template>
  <header class="relative w-full h-screen overflow-hidden"> <!-- Set to full viewport height -->
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/hero-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="flex flex-col items-center justify-center w-full h-full bg-black/60"> <!-- Darker overlay for visibility -->
      <div class="text-center z-10"> <!-- Ensure text is above the video -->
        <h5 class="custom-heading text-white">Allure Corporate Events</h5>
        <h1 class="text-3xl font-semibold text-white lg:text-4xl">
          <span class="text-white br">UNIQUE</span>
          <span class="text--##f22282"> CREATIVE EXTRAORDINARY</span>
        </h1>
      </div>
      <router-link to="/products" class="mt-4"> <!-- Added margin to separate button from text -->
        <button class="w-full px-5 py-2 sm:w-[30%] text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#f22282] rounded-md lg:w-auto md:w-1/2 hover:bg-red-700 focus:outline-none focus:bg-red-700 md:text-base md:px-4 md:py-3">
          Contact Us
        </button>
      </router-link>
    </div>
  </header>
</template>
<style scoped>
/* Video styling */
video {
  position: absolute; /* Position video absolutely to cover header */
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  object-fit: cover; /* Ensure video covers area without stretching */
}

/* Overlay for darkening the video */
.header-overlay {
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
}

/* Ensure the text and button are centered in the header */
header {
  height: 100vh; /* Take full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  align-items: center; /* Horizontally center the content */
}
</style>

