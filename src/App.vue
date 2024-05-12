<template>
<div>
  <h1>Primer API en vue.js</h1>
  <FilterByStatus/>
  <ListCharacter/>
</div>
</template>

<script>
import ListCharacter from '@/components/ListCharacter'
import FilterByStatus from '@/components/FilterByStatus'

export default {
  name: 'App',
  components: {
    ListCharacter,
    FilterByStatus
    
  }
}
</script>

<style lang="scss">
:root{
  --background-body:#24282f;
  --background-card:#3C3e44;
  --text-white:#fff;
  --text-gray:#c0c0c0;
  --text-orange:#ff9800;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1{
  margin-bottom: 3rem;
  text-align: center;
}
.container{
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img{
  width: 100%;
}
</style>
