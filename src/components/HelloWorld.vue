<!--
 * @FileDescription: 
 * @Author: 李永创
 * @Date: 2021-09-17 17:44:57
 * @LastEditors: 李永创
 * @LastEditTime: 2021-09-17 18:06:55
-->
<template>
  <div>
    <el-button type="primary" size="mini">确定</el-button>
    <div>{{ name }}</div>
    <el-checkbox label="nic" checked></el-checkbox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private name = "";

  created(): void {
    this.name = "99999999";
    console.log("hahah", this.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
