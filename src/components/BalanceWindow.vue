<script setup>
import { toRef, computed } from 'vue'

const props = defineProps({
  balance: { type: Number, default: 0.00 },
  lastSaved: { type: Object, default: () => ({ value: '', placeholder: '' }) }
})

const balanceRef = toRef(props, 'balance')
const lastSavedRef = toRef(props, 'lastSaved')

const formattedBalance = computed(() => {
  const n = Number(balanceRef.value)
  return Number.isFinite(n) ? n.toFixed(2) : '0.00'
})
</script>

<template>
  <section class="balance-window">
    <h3>Balance</h3>
    <div class="amount">{{ formattedBalance }} €</div>
  </section>
</template>

<style scoped>
.balance-window { margin: 8px 0; }
.amount { font-size: 1.5rem; font-weight: 600; }
.last-saved { margin-top: 8px; color: #444; font-size: 0.9rem; }
</style>