<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
      <label> האם ברצונך שהמערכת תסייע לך מה לעשות עם הכסף שברשותך ? </label>
      <br>
        <b-button variant="success" v-on:click='onClick()'>מאשר</b-button>
          <b-button variant="danger" v-on:click='onClick()'>לא מעוניין</b-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>