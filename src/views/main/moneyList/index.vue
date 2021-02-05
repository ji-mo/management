<template>
  <div id="student-list">
    <worker-table/>
    <transition>
      <show-modal v-if="show"/>
    </transition>
    <!-- <turn-page :totalPage="totalPage" :nowPage="nowPage"
    @current-page="cpage"></turn-page> -->
  </div>
</template>

<script>
import workerTable from '@/components/moneyList/workerTable.vue';
import showModal from '@/components/moneyList/showModal.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    workerTable,
    showModal,
  },
  methods: {
    ...mapActions(['getMoneyList']),
  },
  created() {
    this.getMoneyList();
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
