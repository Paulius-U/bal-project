<script setup>
import { ref } from 'vue'
import BalanceWindow from '../components/BalanceWindow.vue'
import BalanceInput from '../components/BalanceInput.vue'
import { useTransactionsStore } from '../stores/transactions.js'

const incomeAmount = ref(0)
const expenseAmount = ref(0)

const transactionsStore = useTransactionsStore()

function handleSave({ amount, type }) {
  transactionsStore.addTransaction({ amount, type })

  if (type === 'income') incomeAmount.value = 0
  if (type === 'expense') expenseAmount.value = 0
}
</script>

<template>
  <div class="background">
    <BalanceWindow :balance="transactionsStore.balance"/>
    </br>
    <BalanceInput 
      v-model="incomeAmount"
      type="income" 
      placeholder="Enter income..."
      @save="handleSave"
    />
    <BalanceInput 
      v-model="expenseAmount"
      type="expense" 
      placeholder="Enter expense..."
      @save="handleSave"
    />
    <router-link to="/history">View History</router-link>
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