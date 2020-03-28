<template>
<div class="col-sn-6 col-nd-4 col-lg-3">
  <div class="panel panel-default">
    <div class="panel-body quote">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
}
</script>

<style>
.panel-body{
  font-family: 'Arizonia', cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote{
  cursor: pointer;
}
.quote:hover{
  background-color: #ff2e2e;
}

</style>