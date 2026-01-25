<script setup>
import PurchaseHistory from '../components/PurchaseHistory.vue'
import { useTransactions } from '../composable/useTransactions.js'

const { history, deleteTransaction } = useTransactions()
</script>

<template>
  <div class="background">
    <PurchaseHistory 
      class="history-window" 
      :history="history"
      @delete="deleteTransaction"
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