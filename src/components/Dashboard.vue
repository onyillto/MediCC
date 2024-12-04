<template>
  <div class="min-h-screen bg-gray-100 flex">
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





