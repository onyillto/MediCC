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
        <h1 class="text-xl font-bold text-gray-800">
          🎉 Login to Mediterranean Recreational Center 🎉
        </h1>
      </div>
    </div>



    <!-- Login Form Container -->
    <div class="flex flex-col lg:flex-row gap-8 justify-center w-full max-w-[1200px]">

      <!-- Login Form -->
      <div class="bg-white shadow-md rounded-lg p-6 mt-8 w-full max-w-md lg:w-[700px]">
       
        <p class="text-sm font-[16px] text-gray-500 mb-6">Enter your email and password to login</p>
        <form @submit.prevent="handleLoginSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-[19px] text-gray-700">Email Address<span class="text-red-500">*</span></label>
            <input
              id="email"
              v-model="loginData.email"
              type="email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="smith@example.com"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-[19px] text-gray-700">Password<span class="text-red-500">*</span></label>
            <input
              id="password"
              v-model="loginData.password"
              type="password"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="••••••••"
              required
            />
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLoginSubmit() {
      console.log("Login Submitted", this.loginData);
      alert("Login successful!");
    },
  },
};
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


