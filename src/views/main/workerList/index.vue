<template>
  <div id="student-list">
    <worker-table/>
    <transition>
      <show-modal v-if="show"/>
    </transition>
    <turn-page/>
  </div>
</template>

<script>
import workerTable from '@/components/workerList/workerTable.vue';
import showModal from '@/components/workerList/showModal.vue';
import turnPage from '@/components/workerList/turnPage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    workerTable,
    showModal,
    turnPage,
  },
  computed: {
    ...mapState(['show']),
  },
};
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
  transition: all .8s;
}
</style>
