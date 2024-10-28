<template>
  <h1>List Users</h1>
  <v-table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.accessorKey">{{ column.header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td v-for="cell in row.getVisibleCells()" :key="cell.id">{{ cell.getValue() }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-model="currentPage" :length="totalPages" @update:model-value="onPageChange" />
</template>

<script>
import axios from 'axios';
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";

export default {
  data() {
    return {
      users: [],
      totalUsers: 0,
      loading: false,
      columns: [
        { accessorKey: "id", header: "ID" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "username", header: "Username" },
        { accessorKey: "email", header: "Email" },
      ],
      currentPage: 1,
      pageSize: 10,
      totalPages: 1,
    };
  },
  computed: {
    table() {
      return useVueTable({
        data: this.users,
        columns: this.columns,
        getCoreRowModel: getCoreRowModel(),
      })
    }
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
          _page: this.currentPage,
          _limit: this.pageSize,
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.auth.token}`,
        },
      });
      this.users = response.data;
      this.totalUsers = 100;  // assuming a fixed count for demo
      this.totalPages = Math.ceil(100 / this.pageSize);
      this.loading = false;
    },
    onPageChange(page) {
      this.currentPage = page;
      this.fetchUsers();
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>
