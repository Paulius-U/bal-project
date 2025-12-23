<script setup>
  import { defineProps, defineEmits, computed } from 'vue'

  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      required: true // 'income' | 'expense'
    },
    placeholder: String
  })

  const emit = defineEmits(['update:modelValue', 'save'])

  const inputValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })

  function save() {
    if (!Number.isFinite(inputValue.value) || inputValue.value <= 0) {
      alert('Please enter a valid positive amount.')
      return
    }

    emit('save', {
      amount: inputValue.value,
      type: props.type
    })

    emit('update:modelValue', 0)
  }
</script>

<template>
    <div class="controls">
        <input
          class="equal-size"
          type="number"
          v-model.number="inputValue"
          min="0"
          step="0.01"
          :placeholder="placeholder"
        />
        </br>
        <button class="equal-size" 
          @click="save">
          Save
        </button>
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