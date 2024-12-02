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
          🎉 Mediterranean Recreational Center End-Of-Year Party 🎉
        </h1>
      </div>
    
      <div>
        <h2 class="mt-8 text-xl font-semibold text-gray-800 signup-page">RSVP Plus 1 Section</h2>
      </div>
      <div class="flex justify-center">
        <div class="lg:w-[698px]">
          <hr class="h-[1px] bg-black border-0 my-4">
        </div>
      </div>
    </div>

    <div class="bg-white shadow-lg shadow-gray-800 rounded-lg p-6 mt-8 w-full max-w-md lg:w-[700px]">
      <h3 class="text-lg font-[28px] font-semibold text-gray-800 mb-4">Plus One Data</h3>
      <p class="text-sm font-[16px] text-gray-500 mb-6">Specify exactly as in your passport or National Identification</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="first-name" class="block text-sm font-[19px] text-gray-700">First name<span class="text-red-500">*</span></label>
          <input
            id="first-name"
            v-model="form.firstName"
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
            v-model="form.lastName"
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
            v-model="form.email"
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
            v-model="form.phone"
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
            Submit Plus One
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Retrieve the RSVP data from localStorage (if available)
        const rsvpData = JSON.parse(localStorage.getItem('rsvpData'));

        // If no RSVP data is found, alert the user and exit
        if (!rsvpData) {
          alert('No RSVP data found. Please fill out the RSVP form first.');
          return;
        }

        // Combine the RSVP data and Plus One form data
        const dataToSubmit = {
          ...rsvpData,  // Merge RSVP data from localStorage
          plusOne: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            phone: this.form.phone,
          }
        };

        // Send the data to the backend API
        const response = await axios.post('http://localhost:9000/api/v1/user/rsvp', dataToSubmit);

        // Handle successful response
        if (response.status === 200) {
          alert('RSVP and Plus One details submitted successfully!');
          this.$router.push('/success'); // Redirect or show a success page
        }
      } catch (error) {
        console.error('Error submitting RSVP data:', error);
        alert('There was an error submitting your RSVP and Plus One details. Please try again.');
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

