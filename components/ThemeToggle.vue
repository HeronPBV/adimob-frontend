<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === 'dark');

const iconName = computed<string>(() =>
  isDark.value ? 'lucide-sun' : 'lucide-moon'
);

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark';
}
</script>

<template>
  <NuxtClientOnly>
    <UButton
      class="u-btn"
      variant="outline"
      color="neutral"
      size="sm"
      :icon="iconName"
      @click="toggleTheme"
    >
    </UButton>
  </NuxtClientOnly>
</template>

<style scoped>
.u-btn {
  border-radius: 50%;
  color: var(--color-outline-primary);
  background-color: var(--color-background-primary);
  transition: all 0.5s ease;
}
</style>
