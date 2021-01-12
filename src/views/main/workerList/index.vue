<template>
  <div id="student-list">
    <worker-table/>
    <show-modal/>
    <turn-page/>
  </div>
</template>

<script>
import workerTable from '@/components/workerList/workerTable.vue';
import showModal from '@/components/workerList/showModal.vue';
import turnPage from '@/components/workerList/turnPage.vue';

export default {
  components: {
    workerTable,
    showModal,
    turnPage,
  },
};
</script>

<style>
</style>
