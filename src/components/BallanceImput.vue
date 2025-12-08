<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Add income...' }
})

const emit = defineEmits(['update:modelValue', 'save'])

const input = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

function save() {
  if(input.value > 0) {
    localStorage.setItem('savedTextarea', input.value)
    emit('save', { value: input.value, placeholder: props.placeholder })    
  } else {
    alert('Please enter a valid positive number.')
  }
}
</script>

<template>
    <div class="controls">
        <input class="equal-size" type="text" v-model="input" :placeholder="placeholder">
        </br>
        <button class="equal-size" @click="save">Save</button>
    </div>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.equal-size {
  height: 40px;        
  width: 320px;         
  font-size: 16px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
}

button.equal-size {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #3b82f6;
  color: white;
  border: 1px solid rgba(0,0,0,0.08);
}

button.equal-size:active { transform: translateY(1px); }
</style>