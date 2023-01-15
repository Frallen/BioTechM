<template>
  <button class="button"><slot></slot></button>
</template>

<script></script>

<style scoped lang="less">
.button {
  font-weight: 700;
  font-size: 2em;
  line-height: 39px;
  text-align: center;
  .br(10px);
  color: #ffffff;
  background: @green;
  .trs();
  border:none;
  outline: none;
  display: block;
  cursor: pointer;
  padding: 12px 0;
  @media @md{
    font-size: 1em;
    padding: 8px 0;
  }
}
.button:hover {
  .trs();
  background: @dark_green;
}
</style>
