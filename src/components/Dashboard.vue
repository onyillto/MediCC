<template>
  
  <div class="min-h-screen bg-gray-100 flex">
      <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col ">
      <div class="p-4 flex items-center space-x-3 my-10">
        <img src="/public/logo1.png" alt="Logo" class="h-10 w-10 object-cover" />
        <h1 class="text-lg font-bold">Mediterranean Recreational Center</h1>
      </div>
      <nav class="flex flex-col gap-4 mt-8 px-4">
        <router-link to="/dashboard" class="flex items-center gap-3 text-gray-300 hover:text-white bg-white">
          <img src="/icob.png" alt="Manage" class="h-10 w-10 object-cover" />
          <p class="text-black">Members List</p>
        </router-link>
        <router-link to="/dashboard/verify-guest" class="flex items-center text-black gap-3 bg-white hover:text-white">
          <img src="/ion_person-outline.png" alt="List" class="h-10 w-10 object-cover filter invert" />
          <p class="text-black">Guest List</p>
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
    <main class="flex-1 p-8">
      <header class="flex items-center justify-between my-10">
        <h1 class="text-2xl font-bold">Members List</h1>
        <div class="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            v-model="searchQuery"
            class="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        
        </div>
      </header>

<table class="w-full mt-8 bg-white shadow-md rounded-lg overflow-hidden">
  <thead class="bg-gray-100">
    <tr>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">S/N</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Names of Members</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Phone Number</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(appointment, index) in filteredAppointments" :key="index" class="border-b">
      <td class="px-4 py-2">{{ index + 1 }}</td> <!-- Serial Number -->
      <td class="px-4 py-2">{{ appointment["NAMES OF MEMBERS"] }}</td> <!-- Names of Members -->
      <td class="px-4 py-2">{{ appointment["PHONE MUMBER"] }}</td> <!-- Phone Number -->
      <td class="px-4 py-2">{{ appointment["EMAIL ADDRESS"] }}</td> <!-- Email Address -->
    </tr>
  </tbody>
</table>

    </main>
  </div>
</template>

<script>
import * as XLSX from "xlsx";

export default {
  data() {
    return {
      appointments: [], // Parsed data from Excel
      searchQuery: "", // User input for filtering
    };
  },
   beforeCreate() {
    // Check if the user is logged in
    const isLogged = localStorage.getItem("isLogged") === "true";

    if (!isLogged) {
      // Redirect to the login page if not logged in
      this.$router.push("/login");
    }
  },
  computed: {
    filteredAppointments() {
      return this.appointments.filter((appointment) =>
        Object.values(appointment).some((value) =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
  },
  mounted() {
    this.loadExcelData();
  },
  methods: {
async loadExcelData() {
  const response = await fetch("/Datasheet/RUTH_DATASHEET.xlsx");
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Clean the headers by trimming spaces
  const appointments = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  const cleanedAppointments = appointments.map((row, index) => {
    if (index === 0) {
      // Clean the header row by trimming spaces
      return row.map(header => header.trim());
    }
    return row;
  });

  // Convert the cleaned rows back to an object format
  this.appointments = cleanedAppointments.slice(1).map(row => {
    const rowObject = {};
    cleanedAppointments[0].forEach((header, idx) => {
      rowObject[header] = row[idx];
    });
    return rowObject;
  });

  console.log(this.appointments);  // Log the cleaned data
}
,
  },
};
</script>





