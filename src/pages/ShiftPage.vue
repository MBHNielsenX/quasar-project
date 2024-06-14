<template>
  <q-page class="q-pa-md">
    <div class="text-h2 text-center">Shifts</div>
    <q-table
      v-if="shifts.length"
      :rows="shifts"
      :columns="columns"
      row-key="id"
      class="q-mt-md"
    >
      <template v-slot:body-cell-date="props">
        {{ formatDate(props.row.date) }}
      </template>
      <template v-slot:body-cell-employee="props">
        {{ props.row.employee.name }}
      </template>
    </q-table>
    <q-spinner v-else size="lg" color="primary" class="q-mt-md" />
  </q-page>
</template>

<script>
export default {
  name: 'ShiftPage',
  data() {
    return {
      shifts: [],
      columns: [
        { name: 'date', label: 'Date', align: 'left', field: 'date', format: val => this.formatDate(val) },
        { name: 'shiftStart', label: 'Start Time', align: 'left', field: 'shiftStart' },
        { name: 'shiftEnd', label: 'End Time', align: 'left', field: 'shiftEnd' },
        { name: 'employee', label: 'Employee', align: 'left', field: 'employee.name' },
      ]
    }
  },
  methods: {
    async fetchShifts() {
      try {
        const response = await this.$axios.get('/shifts');
        this.shifts = response.data;
      } catch (error) {
        console.error('Error fetching shifts', error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  },
  mounted() {
    this.fetchShifts();
  }
}
</script>
