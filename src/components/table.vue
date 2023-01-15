<template>
  <div class="table">
    <div class="table-heading">
      <h3>Заказы</h3>
      <v-select
        class="select"
        v-model="sortStatus"
        :options="['Номер заказа', 'email', 'Сумма', 'Дата']"
      ></v-select>
    </div>
    <div class="table-wrapper">
      <div class="table-header">
        <div class="table-header-item">Номер заказа</div>
        <div class="table-header-item">Email</div>
        <div class="table-header-item">Сумма</div>
        <div class="table-header-item">Дата</div>
      </div>
      <div class="table-body">
        <div class="table-body-item" v-for="item in sortedData" :key="item.id">
          <div class="table-item">
            {{ item.id }}
          </div>
          <div class="table-item">{{ item.email }}</div>
          <div class="table-item">{{ item.amount }}</div>
          <div class="table-item">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <DefaultButton @click="loadMore" class="button"
      >Показать еще...</DefaultButton
    >
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import DefaultButton from "@/components/DefaultButton.vue";

let props = defineProps({
  orders: {
    type: Array,
  },
});
let sortStatus = ref("Номер заказа");
let arr = ref([]);
arr.value = [...props.orders.slice(0, 4)];

let loadMore = () => {
  arr.value.push(
    ...props.orders
      .filter((p) => (arr.value.some((z) => z.id === p.id) ? "" : p))
      .slice(0, 4)
  );
};

let sortedData = computed(() => {
  //Math.ceil(props.orders.length/5)

  if (arr.value.length) {
    switch (sortStatus.value) {
      case "Номер заказа": {
        return arr.value.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      case "email": {
        return arr.value.sort((a, b) => (a.email > b.email ? 1 : -1));
      }
      case "Сумма": {
        return arr.value.sort((a, b) => (a.amount > b.amount ? 1 : -1));
      }
      case "Дата": {
        return arr.value.sort((a, b) => (a.date > b.date ? 1 : -1));
      }
    }
  }
});
</script>

<style scoped lang="less">
.table {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px 0;
  flex: 1 0 100%;
  width: 100%;
  .br(10px);
  background: #fff;
  overflow-x: auto;
  min-width: 500px;
  white-space: nowrap;
  &-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media @md {
      align-items: flex-start;
      flex-direction: column;
    }
    h3 {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
    }
    .select {
      min-width: 228px;
      cursor: pointer;
      @media @md {
        margin-top: 15px;
      }
    }
  }
  &-wrapper {
  }
  &-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 10px;
    border: 1px solid #ebebeb;
    padding: 10px;
    .br(10px);
    &-item {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  }

  &-body {
    &-item {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      background: #ffffff;
      border: 1px solid #ebebeb;
      .br(10px);
      padding: 10px;
      margin-top: 20px;
      .table-item {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  .button {
    margin: 20px auto 0;
    max-width: 254px;
    background: @light_gray;
    padding: 11px 62px;
    font-size: 16px;
    color: @dark_gray;
  }
}
</style>
