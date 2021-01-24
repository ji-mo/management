<template>
  <div class="turn-page" v-if="totalPage > 1">
    <div class="prev-page" @click="turnPage('prev')" :class="prevClass">
      &lt;
    </div>
    <!-- 总页数小于7页时 -->
    <template v-if="totalPage <= 7">
      <div
        v-for="i in totalPage"
        :key="i"
        :class="{ active: i === nowPage }"
        @click="turnPage(i)"
      >
        {{ i }}
      </div>
    </template>
    <template v-else>
      <!-- 总页数大于7页但当前页小于4 -->
      <template v-if="nowPage <= 4">
        <div
          v-for="i in 6"
          :key="i"
          :class="{ active: i === nowPage }"
          @click="turnPage(i)"
        >
          {{ i }}
        </div>
      </template>
      <!-- 总页数大于7页但当前页大于4 -->
      <template v-if="nowPage > 4">
        <div @click="turnPage(1)">1</div>
        <div @click="turnPage(nowPage - 5 > 1 ? nowPage - 5 : 1)">...</div>
      </template>
      <!-- 当前页在5到totalPage-4之间 -->
      <template v-if="nowPage > 4">
        <div
          v-for="i in 5"
          :key="nowPage - 3 + i"
          :class="{ active: i = 3 }"
          @click="turnPage(nowPage - 3 + i)"
        >
          {{ nowPage - 3 + i }}
        </div>
      </template>
      <!-- 小于total-4 -->
      <template v-if="nowPage <= totalPage - 4">
        <div
          @click="turnPage(nowPage + 5 > totalPage ? totalPage : nowPage + 5)"
        >
          ...
        </div>
        <div @click="turnPage(totalPage)">{{ totalPage }}</div>
      </template>
      <!-- 大于total-4 -->
      <template v-if="nowPage > totalPage - 4">
        <div
          v-for="i in 6"
          :key="totalPage - 6 + i"
          :class="{ active: totalPage - 6 + i === nowPage }"
          @click="turnPage(totalPage - 6 + i)"
        >
          {{ totalPage - 6 + i }}
        </div>
      </template>
    </template>

    <div class="next-page" @click="turnPage('next')" :class="nextClass">
      &gt;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default: 99,
    },
    nowPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    turnPage(page) {
      let np = null;
      if (page === 'prev') {
        if (this.nowPage > 1) {
          np = this.nowPage - 1;
        }
      } else if (page === 'next') {
        if (this.nowPage < this.totalPage) {
          np = this.nowPage + 1;
        }
      } else {
        np = page;
      }
      this.$emit('current-page', np);
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
  cursor: not-allowed !important;
}
.not-allow:hover {
  color: black !important;
}
</style>
