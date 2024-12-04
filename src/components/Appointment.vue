<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <div class="p-4 flex items-center space-x-3 my-10">
        <img src="/public/logo1.png" alt="Logo" class="h-10 w-10 object-cover" />
        <h1 class="text-lg font-bold">Mediterranean Recreational Center</h1>
      </div>
      <nav class="flex flex-col gap-4 mt-8 px-4">
        <router-link to="/dashboard" class="flex items-center gap-3 text-gray-300 hover:text-white bg-white">
          <img src="/icob.png" alt="Manage" class="h-10 w-10 object-cover" />
          <p class="text-black">Manage Appointment</p>
        </router-link>
        <router-link to="/dashboard/verify-guest" class="flex items-center text-black gap-3 bg-white hover:text-white">
          <img src="/ion_person-outline.png" alt="List" class="h-10 w-10 object-cover filter invert" />
          <p class="text-black">Appointment List</p>
        </router-link>
      </nav>
      <div class="mt-auto px-4 py-6 border-t border-gray-700">
        <div class="flex items-center gap-4">
          <img src="/public/profile.png" alt="Receptionist" class="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 class="font-bold">Receptionist</h2>
            <p class="text-sm text-gray-400">recep@example.com</p>
          </div>
        </div>
        <button class="mt-4 w-full bg-red-500 py-2 px-4 text-white rounded hover:bg-red-600">Log out</button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <header class="flex items-center justify-between my-10">
        <h1 class="text-2xl font-bold">Manage Appointments</h1>
        <div class="flex items-center space-x-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      </header>

      <table class="w-full mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">First Name</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Last Name</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Phone Number</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Plus One</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appointment, index) in appointments" :key="index" class="border-b">
            <td class="px-4 py-2">{{ appointment.firstname }}</td>
            <td class="px-4 py-2">{{ appointment.lastname }}</td>
            <td class="px-4 py-2">{{ appointment.phone }}</td>
            <td class="px-4 py-2">{{ appointment.email }}</td>
            <td class="px-4 py-2">
              <table v-if="appointment.plusOne" class="w-full bg-gray-50 rounded-lg shadow">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-2 py-1 text-left text-xs font-medium text-gray-700">First Name</th>
                    <th class="px-2 py-1 text-left text-xs font-medium text-gray-700">Last Name</th>
                    <th class="px-2 py-1 text-left text-xs font-medium text-gray-700">Phone Number</th>
                    <th class="px-2 py-1 text-left text-xs font-medium text-gray-700">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-2 py-1">{{ appointment.plusOne.firstname }}</td>
                    <td class="px-2 py-1">{{ appointment.plusOne.lastname }}</td>
                    <td class="px-2 py-1">{{ appointment.plusOne.phone }}</td>
                    <td class="px-2 py-1">{{ appointment.plusOne.email }}</td>
                  </tr>
                </tbody>
              </table>
              <p v-else>No Plus One</p>
            </td>
            <td class="px-4 py-2">
              <button class="text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: [], // Stores appointments
      searchQuery: "", // Input for search
      typingTimeout: null, // To debounce API calls
    };
  },
  mounted() {
    this.fetchAppointments();
  },
  watch: {
    searchQuery(newValue) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = setTimeout(() => {
        if (newValue.trim() === "") {
          this.fetchAppointments(); // Fetch all appointments if search is cleared
        } else {
          this.searchAppointments(newValue); // Fetch filtered results
        }
      }, 300); // Debounce delay
    },
  },
  methods: {
    async fetchAppointments() {
      try {
        const response = await fetch("http://localhost:9000/api/v1/user/rsvps");
        const data = await response.json();

        if (data.message === "RSVP records retrieved successfully") {
          this.appointments = data.data;
        } else {
          console.error("Failed to fetch appointments:", data.message);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    },
    async searchAppointments(query) {
      try {
        const response = await fetch(
          `http://localhost:9000/api/v1/user/search?firstname=${query}`
        );
        const data = await response.json();

        if (response.ok) {
          this.appointments = data.data;
        } else {
          console.error("Search failed:", data.message);
        }
      } catch (error) {
        console.error("Error searching appointments:", error);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>

