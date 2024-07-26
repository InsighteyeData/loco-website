<template>
  <q-img
    src="https://picsum.photos/500/300"
    spinner-color="white"
    style="height: 250px"
  />
  <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
    {{ featureTitle }}
  </h5>
  <li>
    <span class="text-h6 text-weight-medium">
      {{ span1 }}
    </span>
  </li>
  <li>
    <span class="text-h6 text-weight-medium">
      {{ span2 }}
    </span>
  </li>
  <li>
    <span class="text-h6 text-weight-medium">
      {{ span3 }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    featureTitle: {
      type: String,
    },
    span1: {
      type: String,
    },
    span2: {
      type: String,
    },
    span3: {
      type: String,
    },
  }
};
</script>

<style></style>
