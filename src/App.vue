<template>
  <div class="container">
    <div v-if="isAuth" class="wrapper">
      <Navbar :user="user" @exit="logout"></Navbar>
      <Table :orders="orders"></Table>
    </div>
    <Login @data="auth" v-else></Login>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import Login from "@/components/login.vue";
import { ref } from "vue";
import Table from "@/components/table.vue";
import Navbar from "@/components/navbar.vue";
let isAuth = ref(false);
let user = ref({});

if (localStorage.getItem("user")) {
  isAuth.value = true;
  user.value = JSON.parse(localStorage.getItem("user"));
} else isAuth.value = false;

//console.log(isAuth.value);

let users = [
  {
    email: "admin@example.com",
    password: "admin",
    name: "Администратор",
  },
  {
    email: "manager@example.com",
    password: "manager",
    name: "Менеджер",
  },
];
let orders = [
  {
    id: 1,
    email: "client1@example.com",
    amount: 100,
    date: "2022-05-15",
  },
  {
    id: 2,
    email: "client2@example.com",
    amount: 250,
    date: "2022-05-16",
  },
  {
    id: 3,
    email: "client3@example.com",
    amount: 800,
    date: "2022-05-16",
  },
  {
    id: 4,
    email: "client4@example.com",
    amount: 120,
    date: "2022-05-20",
  },
  {
    id: 5,
    email: "client5@example.com",
    amount: 600,
    date: "2022-05-25",
  },
  {
    id: 6,
    email: "client6@example.com",
    amount: 100,
    date: "2022-05-25",
  },
  {
    id: 7,
    email: "client7@example.com",
    amount: 140,
    date: "2022-05-29",
  },
  {
    id: 8,
    email: "client8@example.com",
    amount: 650,
    date: "2022-06-01",
  },
  {
    id: 9,
    email: "client9@example.com",
    amount: 1000,
    date: "2022-06-05",
  },
  {
    id: 10,
    email: "client10@example.com",
    amount: 100,
    date: "2022-06-12",
  },
  {
    id: 11,
    email: "client11@example.com",
    amount: 150,
    date: "2022-06-15",
  },
  {
    id: 12,
    email: "client12@example.com",
    amount: 180,
    date: "2022-06-16",
  },
  {
    id: 13,
    email: "client13@example.com",
    amount: 200,
    date: "2022-06-16",
  },
  {
    id: 14,
    email: "client14@example.com",
    amount: 360,
    date: "2022-06-20",
  },
  {
    id: 15,
    email: "client15@example.com",
    amount: 90,
    date: "2022-06-25",
  },
];
let auth = (data) => {
  let user = users.find(
    (p) => p.email === data.email && p.password === data.password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
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
  user.value = false;
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
.wrapper{
  margin: 1em 0;
}
</style>
