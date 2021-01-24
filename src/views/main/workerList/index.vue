<template>
  <div id="student-list">
    <worker-table/>
    <transition>
      <show-modal v-if="show"/>
    </transition>
    <turn-page :totalPage="totalPage" :nowPage="nowPage"
    @current-page="cpage"></turn-page>
  </div>
</template>

<script>
import workerTable from '@/components/workerList/workerTable.vue';
import showModal from '@/components/workerList/showModal.vue';
import turnPage from '@/components/workerList/turnPage.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    workerTable,
    showModal,
    turnPage,
  },
  methods: {
    ...mapActions(['getWorkList']),
    cpage(i) {
      this.getWorkList(i);
    },
  },
  created() {
    this.getWorkList(1);
  },
  computed: {
    ...mapState(['show', 'nowPage', 'totalPage']),
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
