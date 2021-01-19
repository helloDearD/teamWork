<template>
  <div class="left-menu">
    <img src="./head.png" alt="" />
    <ul>
      <li @click="pageGo(item)" v-for="item in menu" :key="item.id" :class="{
          active:$route.path == item.path
      }">
        <!-- <router-link :to="item.path"> -->
          <i :class="item.icon"></i> {{ item.name }}
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import menu from "./index";
export default {
  data() {
    return {
      menu,
    };
  },
  methods: {
      pageGo(item){
          this.$router.push({
              path:item.path
          })
      }
  },
};
</script>

<style lang="scss" scoped>
.left-menu {
  height: 100%;
  background: linear-gradient(#f06b35, #f3a646);
  overflow: hidden;
  img {
    width: 70px;
    height: 70px;
    margin: 3rem auto;
    display: inherit;
    border-radius: 100%;
  }
  ul {
    color: #fff;
    text-align: center;
    line-height: 40px;
    width: 80%;
    margin: 0 auto;
    li{
        cursor: pointer;
    }
    .active{
            background: #e8e4e475;
    border-radius: 5px;
    }
  }
}
</style>