import { ref, Ref, onMounted, onUnmounted } from 'vue'
const useClickOutside = (elementRef: Ref) => {
  const isClickOutsidde = ref(false)
  const closeDropDown = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutsidde.value = false
      } else {
        isClickOutsidde.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', closeDropDown)
  })
  onUnmounted(() => {
    document.removeEventListener('click', closeDropDown)
  })
  return isClickOutsidde
}
export default useClickOutside
