<template>
  <div class="row justify-center">
    <q-card class="my-card">
      <q-card-section class="crad-section">
        <!-- FIXME: q-mt-md q-mb-md > q-my-md -->
        <div
          class="column justify-center items-center q-gutter-sm q-mt-md q-mb-md"
        >
          <div
            class="text-h4 justify-center items-center q-gutter-sm text-weight-bolder"
          >
            {{ cardTitle }}
          </div>
          <!-- 使用v-bind綁定src屬性 -->
          <!-- FIXME: style > class -->
          <div style="height: 200px; width: 190px" class="flex items-center">
            <q-img :src="imageSrc" spinner-color="white" />
          </div>

          <div class="row justify-center items-end q-gutter-sm">
            <div class="text-h4 text-weight-bold">$ {{ price }}</div>
            <div class="text-h5 text-weight-medium">/{{ text }}</div>
          </div>
          <hr />
          <div class="text-h6 text-weight-medium">{{ account }}</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <!-- FIXME: q-mb-md q-mt-md q-mr-md q-ml-md > q-ma-md -->
        <q-list
          class="row justify-start items-center q-mb-md q-mt-md q-mr-md q-ml-md"
        >
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">資料表總數量 </span>
              <span class="text-h6 text-weight-bold">{{ spreadSheetNum }}</span>
            </li>
          </q-item>
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">資料容量 </span>
              <span class="text-h6 text-weight-bold">{{
                materialCapacity
              }}</span>
            </li>
          </q-item>
          <q-item class="row justify-start items-center q-gutter-sm">
            <li>
              <span class="text-h6 text-weight-medium">檔案容量 </span>
              <span class="text-h6 text-weight-bold">{{ fileCapacity }}</span>
            </li>
          </q-item>
        </q-list>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
/* FIXME: 目前專案習慣上字串會使用 單引號 （js 部分） */
export default {
  name: "Card",
  props: {
    cardTitle: {
      type: String,
      default: "免費版",
    },
    imageSrc: {
      type: String,
    },
    // FIXME: 這邊的type應該是String 或者傳入的應該要是數字
    price: {
      type: Number,
      default: "0",
    },
    text: {
      type: String,
      default: "永久免費",
    },
    account: {
      type: String,
      default: "3個使用者帳號",
    },
    // FIXME: 這邊的type應該是String 或者傳入的應該要是數字
    spreadSheetNum: {
      type: Number,
      default: "3個",
    },
    // FIXME: 這邊的type應該是String 或者傳入的應該要是數字
    materialCapacity: {
      type: Number,
      default: "50MB",
    },
    // FIXME: 這邊的type應該是String 或者傳入的應該要是數字
    fileCapacity: {
      type: Number,
      default: "1GB",
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 10px;
  max-width: 290px;
}
/* FIXME: 拼錯字 */
.crad-section {
  background-color: #ffd98c;
}
.card-btn {
  color: #637e99;
  border-width: 10px;
}
</style>
