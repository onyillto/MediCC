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
        <h1 class="text-3xl font-bold text-gray-800">
          🎉 Mediterranean Recreational Center End-Of-Year Party 🎉
        </h1>
      </div>
      <div class="lg:w-[954px] signup-page">
        <p class="text-gray-600 mt-4 lg:text-[19px]">
          Join Us As We Celebrate The Achievements Of The Year With An Evening Of Fun, Laughter, And Camaraderie! Enjoy Great Food, Music, And Entertainment As We Reflect On A Fantastic Year And Look Forward To An Even Brighter One Ahead.
        </p>
      </div>
      <div>
        <h2 class="mt-8 text-3xl font-semibold text-gray-800 signup-page">RSVP Section</h2>
      </div>
      <div class="flex justify-center">
        <div class="lg:w-[698px]">
          <hr class="h-[1px] bg-black border-0 my-4">
        </div>
      </div>
    </div>

    <div class="bg-white shadow-lg shadow-gray-800 rounded-lg p-6 mt-8 w-full max-w-md lg:w-[700px]">
      <h3 class="text-lg font-[28px] font-semibold text-gray-800 mb-4">Personal data</h3>
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
        <div class="mb-4">
          <p class="text-sm font-[19px] text-indigo-700">Would you like to bring a plus one?<span class="text-red-500">*</span></p>
          <div class="flex items-center space-x-4 mt-2">
            <label class="flex items-center">
              <input
                type="radio"
                v-model="form.plusOne"
                value="yes"
                class="appearance-none w-4 h-4 border-2 border-gray-300 checked:bg-indigo-600 focus:ring-0 rounded-none"
                required
              />
              <span class="ml-2 text-sm text-gray-600">YES</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="form.plusOne"
                value="no"
                class="appearance-none w-4 h-4 border-2 border-gray-300 checked:bg-indigo-600 focus:ring-0 rounded-none"
                required
              />
              <span class="ml-2 text-sm text-gray-600">NO</span>
            </label>
          </div>
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
        plusOne: "",
      },
    };
  },
  methods: {
    // Handle the form submission
    async handleSubmit() {
      console.log("RSVP Submitted", this.form);

      // Prepare the RSVP data
      const rsvpData = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        phone: this.form.phone,
      };

      // If 'plusOne' is 'yes', include plusOne data
      if (this.form.plusOne === "yes") {
        // Add plusOne details (can be updated later)
        rsvpData.plusOne = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        };
      }

      // Save the RSVP data to localStorage
      localStorage.setItem("rsvpData", JSON.stringify(rsvpData));

      // If 'plusOne' is 'no', directly submit to the backend endpoint
      if (this.form.plusOne === "no") {
        await this.submitRSVP(rsvpData);
      } else {
        // If 'plusOne' is 'yes', navigate to the add-plus-one page
        this.$router.push("/add-plus-one");
      }
    },

    // Function to handle the submission of RSVP data to the backend
   async submitRSVP(rsvpData) {
  try {
    const response = await axios.post(
      "medi-cc-backend.vercel.app/rsvp", 
      rsvpData
    );
    console.log("RSVP Success:", response.data);
    this.$router.push("/success");  // Redirect to success page
  } catch (error) {
    console.error("RSVP Error:", error);
  }
}

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

