<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <div class="p-4 flex items-center space-x-3 my-10">
        <img src="/public/logo1.png" alt="Logo" class="h-10 w-10 object-cover" />
        <h1 class="text-lg font-bold">Mediterranean Recreational Center</h1>
      </div>
      <nav class="flex flex-col gap-4 mt-8 px-4">
        <a href="#" class="flex items-center gap-3 text-gray-300 hover:text-white bg-white">
          <img src="/public/icob.png" alt="Logo" class="h-10 w-10 object-cover" />
<p class="text-black">Manage Appointment</p> 
        </a>
        <!-- <a href="#" class="flex items-center text-black gap-3 bg-white hover:text-white">
           <img
  src="/public/ion_person-outline.png"
  alt="Logo"
  class="h-10 w-10 object-cover filter invert"
/>

         <p class="text-black">Appointment List</p> 
        </a> -->
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
            placeholder="Search"
            class="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button class="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <span>Add Appointment</span>
          </button>
        </div>
      </header>

      <table class="w-full mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">First Name</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Last Name</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Phone Number</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
             <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appointment, index) in appointments" :key="index" class="border-b">
            <td class="px-4 py-2">{{ appointment.firstName }}</td>
            <td class="px-4 py-2">{{ appointment.lastName }}</td>
            <td class="px-4 py-2">{{ appointment.phone }}</td>
            <td class="px-4 py-2">{{ appointment.email }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-green-100 text-green-700 px-3 py-1 rounded-full': appointment.status === 'Present',
                  'bg-red-100 text-red-700 px-3 py-1 rounded-full': appointment.status === 'Absent',
                }"
              >
                {{ appointment.status }}
              </span>
            </td>
                        <td class="px-4 py-2"><img
        src="/bin-icon.png"
        alt="Delete"
        class="h-6 w-6 cursor-pointer hover:opacity-80"
       
      />
</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex items-center justify-end mt-4">
        <button class="bg-gray-200 py-2 px-4 rounded-l hover:bg-gray-300">Previous</button>
        <button class="bg-gray-200 py-2 px-4 hover:bg-gray-300">1</button>
        <button class="bg-gray-200 py-2 px-4 hover:bg-gray-300">2</button>
        <button class="bg-gray-200 py-2 px-4 hover:bg-gray-300">3</button>
        <button class="bg-gray-200 py-2 px-4 rounded-r hover:bg-gray-300">Next</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      appointments: [
        {
          firstName: "Jane",
          lastName: "Cooper",
          phone: "+91 9876543210",
          email: "onyinye@gmail.com",
          status: "Present",
        },
        {
          firstName: "Jane",
          lastName: "Cooper",
          phone: "+91 9876543210",
          email: "onyinye@gmail.com",
          status: "Present",
        },
      ],
    };
    
  },
  
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
