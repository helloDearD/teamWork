<template>
  <div class="layout-page">
      <aside>
          <MenuList />
      </aside>
      <main>
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList/index.vue"
export default {
    components:{
        MenuList
    }
}
</script>

<style scoped lang="scss">
.layout-page{
    height: 100%;
}
aside{
    width: 200px;
    float: left;
    height: 100%;
}
main{
    padding-left:200px;
    height: 100%;
}
</style>