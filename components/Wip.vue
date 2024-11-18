// Work in Progress tag to show that the feature is not yet complete.
// Usage: <Wip />
<template>
  <div class="wip">
    <span class="wip-bar">/ / /</span>
    <span class="wip-text">Work in Progress</span>
    <span class="wip-bar">\ \ \</span>
  </div>
</template>

<script>
export default {
  name: "Wip",
};
</script>

<style scoped>
.wip {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1em 0.3em;
  background-color: #ffcc00;
  color: #000;
  border-radius: 0.25em;
  font-size: 0.75em;
  font-weight: bold;
  margin-top: 0.25em;
  position: relative;
}

.wip-bar {
  display: inline-block;
  margin: 0 5px;
}

.wip-text {
  display: inline-block;
}
</style>
