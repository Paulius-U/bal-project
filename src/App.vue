<script setup>
import { ref } from 'vue'
import BallanceWindow from './components/BallanceWindow.vue'
import BallanceImput from './components/BallanceImput.vue'
import PurchaseHistory from './components/PurchaseHistory.vue'

const text1 = ref('')
const text2 = ref('')
const placeholder1 = ref('Enter your Income here...');
const placeholder2 = ref('Enter your Expense here...');
const balance = ref(0)

const history = ref([])

function handleSave(payload) {
  const amount = parseFloat(payload?.value) || 0
  let type = 'Income'
  
  if (payload?.placeholder === placeholder2.value) {
    balance.value -= amount
    type = 'Expense'
  } else {
    balance.value += amount
    type = 'Income'
  }
  
  history.value.push({
    value: amount,
    type: type,
    timestamp: new Date().toLocaleString()
  })
}

</script>

<template>
  <body class="baground">
    <div>
      <BallanceWindow :balance="balance"/>
      </br>
      <BallanceImput v-model="text1" :placeholder="placeholder1" @save="handleSave"/>
      </br>
      <BallanceImput v-model="text2" :placeholder="placeholder2" @save="handleSave"/>
      </br>
      <PurchaseHistory class="history-window" :history="history"/>
    </div>
  </body>
</template>

<style scoped>
  .baground {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: rgb(146, 66, 212);
  }  
  .history-window {
    background-color: rgb(81, 196, 224);
  }
</style>