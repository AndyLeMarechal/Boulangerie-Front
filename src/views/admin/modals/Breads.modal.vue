<template>
    <div class="container" id="app">
  <div id="image-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
     <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger">Delete</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
    </div>
    <button id="image-modal-close" class="modal-close"></button>
  </div>
  <br>
    <button class="button" id="showModal">Show</button>
</div>

</template>

<script>
export default {
    name: 'BreadsModal',
}
</script>