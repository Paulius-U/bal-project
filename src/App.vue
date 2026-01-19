<script setup>
import { ref } from 'vue'
import BalanceWindow from './components/BalanceWindow.vue'
import BalanceInput from './components/BalanceInput.vue'
import PurchaseHistory from './components/PurchaseHistory.vue'
import { useTransactions } from './composable/useTransactions.js'

const incomeAmount = ref(0)
const expenseAmount = ref(0)

const { history, balance, addTransaction, deleteTransaction } = useTransactions()

function handleSave({ amount, type }) {
  addTransaction({ amount, type })

  if (type === 'income') incomeAmount.value = 0
  if (type === 'expense') expenseAmount.value = 0
}

</script>

<template>
  <div class="background">
    <BalanceWindow :balance="balance"/>
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
    <PurchaseHistory 
      class="history-window" 
      :history="history"
      @delete="deleteTransaction"
    />
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