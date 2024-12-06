<template>
  <div class="bg-neutral-50 min-h-screen flex flex-col items-center justify-center px-4 relative">
    <div class="flex items-center gap-4 my-8">
      <div class="w-25 h-25">
        <img src="/logo.png" alt="Mediterranean Logo" class="object-contain" />
      </div>
      <div>
        <h1 class="text-xl font-bold">Mediterranean</h1>
        <p class="text-xl font-bold">Recreational Center</p>
      </div>
    </div>

    <div class="text-center">
      <div class="signup-page">
        <h1 class="text-xl font-bold text-gray-800">
          🎉 Mediterranean Recreational Center End-Of-Year Party 🎉
        </h1>
      </div>

      <div>
        <h2 class="mt-8 text-xl font-semibold text-gray-800 signup-page">RSVP Committee Member Plus Section</h2>
      </div>
      <div class="flex justify-center">
        <div class="lg:w-[698px]">
          <hr class="h-[1px] bg-black border-0 my-4">
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 justify-center w-full max-w-[1200px]">

      <!-- First Invite Form -->
      <div class="bg-white shadow-lg rounded-lg p-6 mt-8 w-full max-w-md lg:w-[700px]">
        <h3 class="text-lg font-[28px] font-semibold text-gray-800 mb-4">First Invite: Plus One Data</h3>
        <p class="text-sm font-[16px] text-gray-500 mb-6">Specify exactly as in your passport or National Identification</p>
        <form @submit.prevent="handleRSVPSubmit">
          <div class="mb-4">
            <label for="first-name" class="block text-sm font-[19px] text-gray-700">First name<span class="text-red-500">*</span></label>
            <input
              id="first-name"
              v-model="firstInvite.firstName"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="Alexander"
              required
            />
          </div>
          <div class="mb-4">
            <label for="last-name" class="block text-sm font-[19px] text-gray-700">Last name<span class="text-red-500">*</span></label>
            <input
              id="last-name"
              v-model="firstInvite.lastName"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="Smith"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-[19px] text-gray-700">Email Address<span class="text-red-500">*</span></label>
            <input
              id="email"
              v-model="firstInvite.email"
              type="email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="Smith@gmail.com"
              required
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-[19px] text-gray-700">Phone Number<span class="text-red-500">*</span></label>
            <input
              id="phone"
              v-model="firstInvite.phone"
              type="tel"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
              placeholder="070x xxx xxxx"
              required
            />
          </div>
        </form>
      </div>

      <!-- Second Invite Form -->
     <!-- Second Invite Form -->
<div class="bg-white shadow-md rounded-lg p-6 mt-8 w-full max-w-md lg:w-[700px]">
  <h3 class="text-lg font-[28px] font-semibold text-gray-800 mb-4">Second Invite: Plus Two Data</h3>
  <p class="text-sm font-[16px] text-gray-500 mb-6">Specify exactly as in your passport or National Identification</p>
  <form @submit.prevent="handleRSVPSubmit">
    <div class="mb-4">
      <label for="first-name" class="block text-sm font-[19px] text-gray-700">First name<span class="text-red-500">*</span></label>
      <input
        id="first-name"
        v-model="secondInvite.firstName"
        type="text"
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
        placeholder="Alexander"
        required
      />
    </div>
    <div class="mb-4">
      <label for="last-name" class="block text-sm font-[19px] text-gray-700">Last name<span class="text-red-500">*</span></label>
      <input
        id="last-name"
        v-model="secondInvite.lastName"
        type="text"
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
        placeholder="Smith"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-[19px] text-gray-700">Email Address<span class="text-red-500">*</span></label>
      <input
        id="email"
        v-model="secondInvite.email"
        type="email"
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
        placeholder="Smith@gmail.com"
        required
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-sm font-[19px] text-gray-700">Phone Number<span class="text-red-500">*</span></label>
      <input
        id="phone"
        v-model="secondInvite.phone"
        type="tel"
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[28px]"
        placeholder="070x xxx xxxx"
        required
      />
    </div>
  
    <div class="mt-6">
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit RSVP
      </button>
    </div>
  </form>
</div>

    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      firstInvite: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      secondInvite: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    async handleRSVPSubmit() {
      try {
        // Retrieve RSVP data from localStorage (if available)
        const rsvpData = JSON.parse(localStorage.getItem("rsvpData"));

        // If no RSVP data is found, alert the user and exit
        if (!rsvpData) {
          alert("No RSVP data found. Please fill out the RSVP form first.");
          return;
        }

        // Combine RSVP data with Plus One and Plus Two form data
        const dataToSubmit = {
          ...rsvpData, // Merge RSVP data from localStorage
          plusOne: { ...this.firstInvite }, // First Invite data
          plusTwo: { ...this.secondInvite }, // Second Invite data
        };

        // Send the data to the backend API
        const response = await axios.post(
          "https://invite-fbvc.onrender.com/api/v1/user/plus-two",
          dataToSubmit
        );

        // Handle successful response
        if (response.status === 200) {
          this.$router.push("/success"); // Redirect or show a success page
        }
      } catch (error) {
        console.error("Error submitting RSVP data:", error);
        alert(
          "There was an error submitting your RSVP details. Please try again."
        );
      }
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
  opacity: 0.1;
  z-index: 0;
  pointer-events: none; /* Prevents the overlay from blocking clicks */
}
</style>


