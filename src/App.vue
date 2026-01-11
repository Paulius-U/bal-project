<script setup>
import { ref, computed  } from 'vue'
import BalanceWindow from './components/BalanceWindow.vue'
import BalanceInput from './components/BalanceInput.vue'
import PurchaseHistory from './components/PurchaseHistory.vue'

const incomeAmount = ref(0)
const expenseAmount = ref(0)

const history = ref([])

const balance = computed(() => {
  return history.value.reduce((total, item) => {
    return item.type === 'income'
      ? total + item.value
      : total - item.value
  }, 0)
})

function handleSave({ amount, type }) {
  history.value.push({
    value: amount,
    type: type,
    timestamp: new Date().toLocaleString()
  })

  
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