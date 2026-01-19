import { ref, computed } from 'vue'

export function useTransactions() {
  const history = ref([])
  const savedHistory = localStorage.getItem('transactionHistory')
  
  if (savedHistory) {
    history.value = JSON.parse(savedHistory)
  }

  const balance = computed(() =>
    history.value.reduce((total, item) =>
      item.type === 'income'
        ? total + item.value
        : total - item.value
    , 0)
  )

  function addTransaction({ amount, type }) {
    history.value.push({
      value: amount,
      type: type,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('transactionHistory', JSON.stringify(history.value))
  }

  function deleteTransaction(index) {
    history.value.splice(index, 1)
    localStorage.setItem('transactionHistory', JSON.stringify(history.value))
  }

  return {
    history,
    balance,
    addTransaction,
    deleteTransaction
  }
}