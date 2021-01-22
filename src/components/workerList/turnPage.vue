<template>
  <div class="turn-page">

    <div class="prev-page" @click="turnPage('prev')"
    :class="prevClass">&lt;</div>
    <div v-for="i in totalPage" :key="i"
    :class="{active: i === noePage}">{{i}}</div>
    <div class="next-page" @click="turnPage('next')"
    :class="nextClass">&gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowPage: 1,
      totalPage: 5,
    };
  },
  methods: {
    turnPage(page) {
      if (page === 'prev') {
        if (this.nowPage > 1) {
          this.nowPage -= 1;
        }
      } else if (page == 'next') {
        if (this.nowPage < this.totalPage) {
          this.nowPage += 1;
        }
      } else {
        this.nowPage = page;
      }
    },
  },
  computed: {
    prevClass() {
      if (this.nowPage === 1) {
        return 'not-allow';
      }
      return '';
    },
    nextClass() {
      if (this.nowPage === this.totalPage) {
        return 'not-allow';
      }
      return '';
    },
  },
};
</script>

<style scoped>
  .turn-page {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    user-select: none;
  }
  .turn-page > div {
    padding: 0 4px;
    /* background: #fff; */
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    margin: 0;
    font-weight: 600;
  }
  .turn-page > div:hover {
    color: #409eff;
  }
  .turn-page > .active {
    color: #409eff;
    cursor: default;
  }
  .not-allow {
    cursor: not-allowed!important;
  }
  .not-allow:hover {
    color: black!important;
  }
</style>
