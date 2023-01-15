<template>
  <div class="container">
    <transition name="fade">
      <div v-if="isAuth" class="wrapper">
        <Navbar :user="CurrentUser" @exit="logout"></Navbar>
        <Table :orders="orders"></Table>
      </div>
      <Login @data="auth" v-else></Login
    ></transition>
  </div>
</template>

<script setup>
import data from "@/data.json";
import Swal from "sweetalert2";
import Login from "@/components/login.vue";
import { ref } from "vue";
import Table from "@/components/table.vue";
import Navbar from "@/components/navbar.vue";
let isAuth = ref(false);
let CurrentUser = ref({});
let users = ref(data.users);
let orders = ref(data.orders);
if (
  localStorage.getItem("user") &&
  Object.entries(JSON.parse(localStorage.getItem("user"))).length > 0
) {
  isAuth.value = true;
  CurrentUser.value = JSON.parse(localStorage.getItem("user"));
} else isAuth.value = false;

let auth = (data) => {
  let user = users.value.find(
    (p) => p.email === data.email && p.password === data.password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    CurrentUser.value = user;
    isAuth.value = true;
  } else {
    Swal.fire({
      title: "Ошибка",
      text: "Не верный емейл или пароль",
      icon: "error",
      confirmButtonText: "Хорошо",
    });
  }
};
let logout = () => {
  localStorage.setItem("user", JSON.stringify(""));
  isAuth.value = false;
  CurrentUser.value = false;
};
</script>

<style lang="less">
@import "@/assets/styles/_var.less";
@import "modern-normalize/modern-normalize.css";
html {
  font-size: 16px;
}
body {
  font-family: "Inter", sans-serif;
  background: @light_gray;
  overflow-x: hidden;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  padding: 0;
  margin: 0;
}
.container {
  padding: 0 7.813em;
  width: 100%;
  @media @xxl {
    padding: 0 6.25em;
  }
  @media @lg {
    padding: 0 4.375em;
  }
  @media @md {
    padding: 0 1.875em;
  }
  @media @xs {
    padding: 0 10px;
  }
}
.wrapper {
  margin: 1em 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
