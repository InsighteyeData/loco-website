<template>
  <div class="row justify-center">
    <q-card class="my-card">
      <q-card-section class="card-section">
        <div class="column justify-center items-center q-gutter-sm q-my-md">
          <div class="text-h4 justify-center items-center q-gutter-sm text-weight-bolder">
            {{ cardTitle }}
          </div>
          <!-- 使用v-bind綁定src屬性 -->
          <div class="flex items-center feature-img">
            <q-img :src="imageSrc" spinner-color="white" />
          </div>

          <div class="row justify-center items-end q-gutter-sm">
            <div class="text-h4 text-weight-bold">{{ priceTag.price }}</div>
            <div class="text-h5 text-weight-medium">{{ priceTag.text }}</div>
          </div>
          <hr />
          <div class="text-h6 text-weight-medium">{{ priceTag.account }}</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-list class="row justify-start items-center q-ma-md">
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">資料表總數量 </span>
              <span class="text-h6 text-weight-bolder">{{ content.spreadSheetNum }}</span>
            </li>
          </q-item>
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">資料容量 </span>
              <span class="text-h6 text-weight-bolder">{{ content.materialCapacity }}</span>
            </li>
          </q-item>
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">檔案容量 </span>
              <span class="text-h6 text-weight-bolder">{{ content.fileCapacity }}</span>
            </li>
          </q-item>
        </q-list>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      default: '免費版',
    },
    imageSrc: {
      type: String,
    },
    priceTag: {
      type: Object,
      default: () => ({ price: 0, text: '', account: '' }),
    },
    content: {
      type: Object,
      default: () => ({ spreadSheetNum: '', materialCapacity: '', fileCapacity: '' }),
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 10px;
  max-width: 290px;
}
.card-section {
  background-color: #ffd98c;
  height: 425px;
}
.feature-img {
  height: 200px;
  width: 190px;
}
.card-btn {
  color: #637e99;
  border-width: 10px;
}
</style>
