<template>
  <div class="modal">
    <Form :validation-schema="schema" class="form" @submit="onSubmit">
      <label for="email" class="form-item">
        <Field
          name="email"
          id="email"
          class="input"
          type="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" class="error" />
      </label>
      <label for="password" class="form-item">
        <Field
          name="password"
          id="password"
          class="input"
          type="password"
          placeholder="Пароль"
        />
        <ErrorMessage name="password" class="error" />
      </label>
      <DefaultButton class="button">Войти</DefaultButton>
      <div class="form-state">Забыли пароль?</div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import DefaultButton from "@/components/DefaultButton.vue";
import { computed } from "vue";
let schema = computed(() => {
  return yup.object({
    email: yup
      .string()
      .email(() => email())
      .required(() => required()),
    password: yup.string().required(() => required()),
  });
});
let emit = defineEmits(["data"]);
let email = () => {
  return "Не является почтой";
};
let required = () => {
  return "Это обязательное поле";
};
let onSubmit = (data) => {
  emit("data", data);
};
</script>

<style scoped lang="less">
.modal {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .br(10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 443px;
  @media @md {
    padding: 14px;
  }
  &-item {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    input {
      background: #fafafa;
      border: 1px solid #d9d9d9;
      .br(10px);
      padding: 18px 22px;
      color: #c1c0c0;
      font-weight: 700;
      font-size: 1.5em;
      line-height: 29px;
      outline: none;
      @media @md {
        font-size: 1em;
        padding: 13px 12px;
      }
    }
  }
  &-item:first-child {
    margin-top: 0;
  }
  .button {
    margin-top: 20px;
  }
  .error {
    color: red;
  }
  &-state {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #a2a3a7;
    @media @md {
      font-size: 1em;
    }
  }
}
</style>
