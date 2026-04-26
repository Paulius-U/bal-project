<script setup>
import PurchaseHistory from '../components/PurchaseHistory.vue'
import { useTransactionsStore } from '../stores/transactions.js'

const transactionsStore = useTransactionsStore()
</script>

<template>
  <div class="background">
    <PurchaseHistory 
      class="history-window" 
      :history="transactionsStore.history"
      @delete="transactionsStore.deleteTransaction"
    />
    <router-link to="/">Back to Balance Page</router-link>
  </div>
</template>

<style scoped>
  .background {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: rgba(146, 66, 212, 0.425);
  }
  .history-window {
    background-color: rgb(81, 196, 224);
  }
</style>