<template>
  <div class="bg-neutral-50 min-h-screen flex flex-col items-center justify-center px-4 relative">
    <div class="flex items-center gap-4 my-8">
      <div class="w-25 h-25">
        <img
          src="/logo.png" 
          alt="Mediterranean Logo"
          class="object-contain"
        />
      </div>
      <div>
        <h1 class="text-xl font-bold">Mediterranean</h1>
        <p class="text-xl font-bold">Recreational Center</p>
      </div>
    </div>

    <div class="text-center">
      <div class="signup-page">
        <img
        src="/public/success.png"  
        alt="Registration Successful"
        class="mx-auto mb-4"
        style="max-width: 300px; height: auto;" 
      />
        <h1 class="text-xl font-bold text-gray-800">
          🎉 Registration Successful 🎉
        </h1>
      </div>
    
      <div class="lg:w-[954px] signup-page">
        <p class="text-gray-800 mt-4 lg:text-[19px] italic">
          Thank you for RSVPing to the Mediterranean Recreational Center End-of-Year Party!   </p>
      </div>
     
    </div>

    <!-- Form Container (Flexbox for large screens) -->
  

  </div>
</template>


<script>

</script>

<style scoped>
/* Import the Google Font */
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* Apply the font to the entire page */
.signup-page {
  font-family: 'Lato', sans-serif;
}

/* Background Image and Opacity */
.bg-neutral-50 {
  position: relative;
}
.bg-neutral-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/public/pngtree-contemporary-fitness-center-interior-featuring-state-of-the-art-gym-equipment-picture-image_.png');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}
</style>
