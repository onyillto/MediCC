<template>
  <div class="min-h-screen bg-gray-100 flex">
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

      <!-- Loading Indicator -->
      <div v-if="isLoading" class="text-center text-gray-500">Loading...</div>

      <!-- Appointments Table -->
      <table v-else class="w-full mt-8 bg-white shadow-md rounded-lg overflow-hidden">
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
              <button
                class="text-white"
                :class="getActionClass(appointment.action)"
                @click="updateRSVP(appointment._id, appointment.action)"
              >
                {{ appointment.action }}
              </button>
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
      isLoading: false, // To show loading indicator
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
      this.isLoading = true; // Set loading to true when fetching data
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
      } finally {
        this.isLoading = false; // Set loading to false once done
      }
    },
    async searchAppointments(query) {
      this.isLoading = true; // Set loading to true when searching
      try {
        const response = await fetch(`http://localhost:9000/api/v1/user/search?firstname=${query}`);
        const data = await response.json();
        if (response.ok) {
          this.appointments = data.data;
        } else {
          console.error("Search failed:", data.message);
        }
      } catch (error) {
        console.error("Error searching appointments:", error);
      } finally {
        this.isLoading = false; // Set loading to false once done
      }
    },
    async updateRSVP(userId, currentAction) {
      try {
        const newAction = currentAction === "pending" ? "verified" : "pending";

        const response = await fetch(`http://localhost:9000/api/v1/user/rsvp/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: newAction }),
        });

        const data = await response.json();

        if (data.message === "RSVP updated successfully") {
          const updatedAppointment = this.appointments.find((app) => app._id === userId);
          if (updatedAppointment) {
            updatedAppointment.action = newAction;

            // Show a success alert instead of a toast
            window.alert("User verified successfully!");

            // Reload the page after a short delay
            setTimeout(() => {
              location.reload(); // Reload the page
            }, 1000);
          }
        } else {
          console.error("Failed to update RSVP:", data.message);
        }
      } catch (error) {
        console.error("Error updating RSVP:", error);
      }
    },
    getActionClass(action) {
      if (action === "pending") {
        return "bg-yellow-500 hover:bg-yellow-600";
      } else if (action === "verified") {
        return "bg-green-500 hover:bg-green-600";
      }
      return "";
    },
  },
};
</script>

<style scoped>
/* Custom styling for the component */
</style>



