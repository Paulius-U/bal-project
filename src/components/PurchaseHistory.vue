<script setup>
import { toRef } from 'vue'

const props = defineProps({
  history: { type: Array, default: () => [] }
})

const historyRef = toRef(props, 'history')
</script>

<template>
  <section class="history-window">
    <h3>Purchase History</h3>
    
    <div v-if="historyRef.length === 0" class="empty">
      No transactions yet
    </div>

    <div v-else class="history-list">
      <div v-for="(item, index) in historyRef" :key="index" class="history-item">
        <span class="type" :class="item.type.toLowerCase()">{{ item.type }}</span>
        <span class="value">{{ item.value.toFixed(2) }} €</span>
        <span class="time">{{ item.timestamp }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-window { margin: 16px 0; padding: 12px; border: 1px solid #ccc; border-radius: 6px; }
h3 { margin-top: 0; }
.empty { color: #e61010; font-size: 0.9rem; }

.history-list { display: flex; flex-direction: column; gap: 8px; }
.history-item {
  display: flex;
  gap: 12px;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 0.9rem;
}

.type {
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  min-width: 70px;
  text-align: center;
}

.type.income {
  background: #d4edda;
  color: #155724;
}

.type.expense {
  background: #f8d7da;
  color: #721c24;
}

.value { font-weight: 600; flex: 1; }
.time { color: #666; font-size: 0.8rem; }
</style>