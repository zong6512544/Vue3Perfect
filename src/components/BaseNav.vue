<!--
 * @Description: 
 * @Author: shizhe
 * @Date: 2022-10-14 10:17:29
 * @LastEditTime: 2022-10-14 15:36:32
 * @LastEditors: shizhe
 * @Reference: 
-->
<template>
  <div :class="className"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ column: string | boolean }>(), {
  column: false
})

const className = computed({
  get: () => {
    let str = 'd-flex'
    if ((typeof props.column === 'boolean' && props.column === true) || props.column === 'column') {
      str = 'flex-col'
    }
    return str
  },
  set: val => {
    return val
  }
})
</script>

<style scoped lang="scss"></style>
