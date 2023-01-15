<template>
  <div class="navbar">
    <div class="navbar-user">
      <div class="navbar-user-img"><img src="@/assets/img/Ellipse.png" /></div>
      <div class="navbar-user-info">
        <span class="name">{{ user.name }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
    </div>
    <div class="navbar-exit" @click="emit('exit')">Выход</div>
  </div>
</template>

<script setup>
let props = defineProps({
  user: {
    type: Object,
  },
});
let emit = defineEmits(["exit"]);
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .br(10px);
  &-exit {
    color: @dark_gray;
    padding: 4px 13px;
    background: @light_gray;
    .br(10px);
    cursor: pointer;
    .trs();
  }
  &-exit:hover {
    color: @light_gray;
    background: @dark_gray;
    .trs();
  }
  &-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-img {
      margin-right: 15px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-info {
      .name {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #000000;
      }
      .email {
        color: @medium_gray;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
      }
      span {
        display: block;
      }
    }
  }
}
</style>
