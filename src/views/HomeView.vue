<template>
  <div class="home">
    {{ courses }}
  </div>
</template>

<script>
import { supabase } from '@/supabase'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},

  data() {
    return {
      courses: [],
    } 
  },

  mounted() {
    this.getAllCourses();
  },

  methods: {
    async getAllCourses() {
      const {data, error} = await this.$supabase.from("courses").select();
      if(data) {
        this.courses = data;
      } else {
        console.log(error)
      }
    }
  }
}
</script>
