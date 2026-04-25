<script setup lang="ts">
import { ref, onMounted } from 'vue'

const today = ref('')

onMounted(() => {
  today.value = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
})
</script>

<template>
  <div class="today-date">
    <span>{{ today }}</span>
  </div>
</template>

<style scoped>
.today-date {
  text-align: center;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-top: 1rem;
}
</style>
