<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API_BASE from '../config'; // hoặc '../config.js' nếu cần

const truyens = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get(`${API_BASE}/truyen`);
    truyens.value = res.data;
  } catch (err) {
    console.error('Lỗi tải truyện:', err);
  }
});
</script>
