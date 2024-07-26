<script setup>
import "quasar/dist/quasar.sass";
import { Quasar } from "quasar";
import Card from "./components/card.vue";
import Feature from "./components/Feature.vue";
// const painPoints1 = require("@/assets/painPoints1.png");
</script>

<template>
  <div class="column">
    <!-- nav bar -->
    <div
      class="q-pt-lg q-pb-lg q-pl-lg q-pr-lg flex row inline no-wrap items-start justify-start"
      style="width: 100%"
    >
      <q-img
        src="src/assets/logo1.png"
        style="height: 100%; max-width: 120px"
      />
      <div class="q-pl-lg">
        <h5 class="text-weight-bold text-color responsive-h5">
          全方位資訊整合平台
        </h5>
      </div>
    </div>
    <!--banner-->
    <div class="q-pa-md bg-image flex flex-col items-center justify-start">
      <div class="q-pa-xl items-center justify-center">
        <div class="row justify-start">
          <h2 class="text-weight-bold responsive-h2">簡單步驟，</h2>
        </div>
        <div class="row justify-start q-pt-xs">
          <h2 class="text-weight-bold responsive-h2">解決你的紙張魔咒</h2>
          <br />
        </div>
        <div class="row justify-start q-pt-md">
          <q-btn
            unelevated
            rounded
            label="立即註冊"
            class="q-mb-md card-btn-blue"
            href="https://loco.com.tw/#/register"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <!--痛點 -->
    <div>
      <div class="row justify-center items-center q-pa-xl">
        <h3 class="text-center text-weight-bold responsive-h3">
          你是否有遇到以下資料管理問題?
        </h3>
      </div>
      <div class="q-px-xl responsive-margin">
        <div>
          <!-- 1 -->
          <div class="row justify-center items-center">
            <div class="col-xs-12 col-md-6 q-pb-md responsive-order">
              <h4 class="text-weight-bold responsive-h4">
                你的資料散亂在不同工具嗎?
              </h4>
              <h6 class="q-pt-md">
                LOCO提供一站式整合服務，整合你手邊的紙本資料、電腦內的Excel資料、線上問卷的填答資料等至Loco資料庫系統，即可與多人一起查看、編輯並追蹤最新資料!
              </h6>
            </div>
            <div class="col-xs-12 col-md-6">
              <q-img
                src="src/assets/painPoints1.png"
                fit="contain"
                spinner-color="white"
              />
            </div>
          </div>
          <!-- 2 -->
          <div class="row q-pt-xl justify-center items-center">
            <div class="col-xs-12 col-md-6 q-pb-md">
              <q-img
                src="src/assets/painPoints2.png"
                fit="contain"
                spinner-color="white"
              />
            </div>
            <div class="col-xs-12 col-md-6">
              <h4 class="text-weight-bold responsive-h4">
                分析資料對你來說很困擾嗎?
              </h4>
              <h6 class="q-pt-md">
                LOCO分析工具提供簡易的拖拉式操作介面，讓你不再煩惱需要輸出的圖表樣式，系統可AI化自動生成合適的圖表，以及中文語意分析結果!
              </h6>
            </div>
          </div>
          <!-- 3 -->
          <div class="row q-pt-xl justify-center items-center">
            <div class="col-xs-12 col-md-6 q-pb-md responsive-order">
              <h4 class="text-weight-bold responsive-h4">
                還在花大錢建置系統嗎？
              </h4>
              <h6 class="q-pt-md">
                LOCO以月訂閱方式提供你實惠的價格，可以彈性化設計資料庫規格、模組化系統功能讓你自由搭配，你無需再找套裝軟體或開發客製資訊系統!
              </h6>
            </div>
            <div class="col-xs-12 col-md-6">
              <q-img
                src="src/assets/painPoints3.png"
                fit="contain"
                spinner-color="white"
              />
            </div>
          </div>
          <!-- 4 -->
          <div class="row q-pt-xl q-pb-xl">
            <q-img
              src="src/assets/featureLong.png"
              fit="contain"
              spinner-color="white"
            />
          </div>

          <div class="row justify-center q-pt-md">
            <q-btn
              unelevated
              rounded
              label="免費試用"
              class="q-mb-md card-btn-blue"
              href="https://loco.com.tw/#/register"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 產品特色 -->
    <div class="feature q-pa-xl">
      <div class="row justify-center q-pt-xl">
        <h3 class="text-weight-bold responsive-h3">產品特色</h3>
      </div>
      <div class="row justify-center q-pt-md q-pb-md">
        <h4 class="text-weight-bold text-center responsive-h4">
          『啟動數位化引擎，推動企業內部效率革新』
        </h4>
      </div>
      <div class="q-pt-xl responsive-margin">
        <div class="example-row-equal-width">
          <!-- 上排 -->
          <div class="row">
            <div
              class="col-xs-12 col-md-4 q-pr-md q-pb-md text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/feature1.png"
                fit="contain"
                spinner-color="white"
                style="height: 250px"
              />
              <div class="column">
                <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
                  無程式碼DIY專屬系統
                </h5>
                <div class="text-left" style="margin: auto">
                  <ul class="left-align">
                    <li>
                      <span
                        class="text-h6 text-weight-medium text-subtitle1 text-start"
                      >
                        系統欄位彈性擴充，像編輯 Excel般容易
                      </span>
                    </li>
                    <li>
                      <span
                        class="text-h6 text-weight-medium text-subtitle1 text-start"
                      >
                        一般企業員工，也能打造資訊系統
                      </span>
                    </li>
                    <li>
                      <span
                        class="text-h6 text-weight-medium text-subtitle1 text-start"
                      >
                        系統功能模組化，任你搭配使用
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-md-4 q-pr-md q-pb-md text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/feature2.png"
                fit="contain"
                spinner-color="white"
                style="height: 250px"
              />
              <div class="column">
                <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
                  一站式整合服務
                </h5>
                <div class="text-left" style="margin: auto">
                  <ul class="left-align">
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        整合電子試算表、線上問卷、電子表單、分析統計模組等多項服務
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        從資料收集、整併、計算、分析，讓你不用再切換視窗
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-md-4 text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/feature3.png"
                fit="contain"
                spinner-color="white"
                style="height: 250px"
              />
              <div class="column">
                <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
                  VIP控管資料存取
                </h5>
                <div class="text-left" style="margin: auto">
                  <ul class="left-align">
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        精準控管每張資料表的存取權限
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        自訂專屬身分標籤
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        群組化管理部門權限
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        保存操作紀錄，免擔心資料竄改
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 下排 -->
          <div class="row">
            <div class="col-xs-12 col-md-6 q-pr-md q-pb-md text-center">
              <q-img
                src="src/assets/feature4.png"
                fit="contain"
                spinner-color="white"
                style="height: 250px"
              />
              <div class="column">
                <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
                  商業智慧視覺化分析
                </h5>
                <div class="text-left" style="margin: auto">
                  <ul class="left-align">
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        指引式操作流程，協助篩選出想要分析的資料
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        遊戲式介面設計，滑鼠拖拉即可繪出統計圖表
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        直譯式分析說明，免花時間揣測圖表意涵
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6 text-center">
              <q-img
                src="src/assets/feature5.png"
                fit="contain"
                spinner-color="white"
                style="height: 250px"
              />
              <div class="column">
                <h5 class="text-weight-bold q-pt-lg q-pb-lg text-center">
                  雲端資訊安全有保障
                </h5>
                <div class="text-left" style="margin: auto">
                  <ul class="left-align">
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        雲端託管服務，7×24監控主機安全
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        HTTPS/SSL傳輸加密、資料儲存加密保護
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        每日自動備份，確保資料萬無一失
                      </span>
                    </li>
                    <li>
                      <span class="text-h6 text-weight-medium text-subtitle1">
                        定時資安掃描，弱點補強
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用情境 -->
    <div class="q-pa-xl">
      <div class="row justify-center q-pt-xl">
        <h3 class="text-weight-bold responsive-h3">使用情境</h3>
      </div>
      <div class="row justify-center q-pt-md q-pb-md">
        <h4 class="text-weight-bold text-center responsive-h4">
          『LOCO讓你在數位浪潮中乘風破浪』
        </h4>
      </div>
      <div class="q-pt-xl responsive-margin">
        <div class="example-row-equal-width">
          <div class="column">
            <div
              class="col-12 q-pr-md q-pb-md text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/situation1.png"
                fit="contain"
                spinner-color="white"
                class="responsive-img"
              />
            </div>
            <div
              class="col-12 q-pr-md q-pb-md text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/situation2.png"
                fit="contain"
                spinner-color="white"
                class="responsive-img"
              />
            </div>
            <div
              class="col-12 q-pr-md q-pb-md text-center flex flex-col items-center justify-center"
            >
              <q-img
                src="src/assets/situation3.png"
                fit="contain"
                spinner-color="white"
                class="responsive-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center q-pa-xl">
      <div class="col-xs-12 col-md-3 col-lg-3 flex justify-center items-center q-pr-sm">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3 flex justify-center items-center q-pr-sm">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3 flex justify-center items-center q-pr-sm">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3 flex justify-center items-center q-pr-sm">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- 價格卡片 -->
    <div>
      <div class="q-px-xl">
        <div class="row justify-center">
          <h3 class="text-weight-bold responsive-h3">雲端方案介紹</h3>
        </div>
        <div class="row justify-center q-pt-md q-pb-md">
          <h4 class="text-weight-bold text-center responsive-h4">
            『多樣選擇，彈性打造最適辦公環境』
          </h4>
        </div>
      </div>

      <div class="row q-px-xl q-pb-xl justify-center responsive-margin">
        <div
          class="col-12 col-md-6 col-lg-3 q-pt-xl flex column justify-between items-stretch"
        >
          <Card
            cardTitle="免費版"
            imageSrc="src/assets/card1.png"
            price="0"
            text="永久免費"
            account="3個使用者帳號"
            spreadSheetNum="3個"
            materialCapacity="50MB"
            fileCapacity="1GB"
          />
          <div class="row justify-center q-pt-lg">
            <q-btn
              unelevated
              outline
              rounded
              label="開始試用"
              class="button q-mb-md q-mr-lg q-ml-lg card-btn-borded"
            />
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-3 q-pt-xl flex column justify-between items-stretch"
        >
          <Card
            cardTitle="簡易版"
            imageSrc="src/assets/card2.png"
            price="700"
            text="月"
            account="1個使用者帳號"
            spreadSheetNum="20個"
            materialCapacity="5GB"
            fileCapacity="10GB"
          />
          <div class="row justify-center q-pt-lg">
            <q-btn
              unelevated
              outline
              rounded
              label="立即加入"
              class="button q-mb-md q-mr-lg q-ml-lg card-btn-borded"
            />
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-3 q-pt-xl flex column justify-between items-stretch"
        >
          <div class="row justify-center recommend">
            <q-btn
              unelevated
              rounded
              label="最推薦使用"
              class="recommend-card"
            />
          </div>
          <Card
            cardTitle="標準版"
            imageSrc="src/assets/card3.png"
            price="850"
            text="月"
            account="1個使用者帳號"
            spreadSheetNum="無上限"
            materialCapacity="5GB"
            fileCapacity="10GB"
          />
          <div class="row justify-center q-pt-md">
            <q-btn
              unelevated
              rounded
              label="立即加入"
              class="q-mb-md card-btn-blue"
            />
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-3 q-pt-xl flex column justify-between items-stretch"
        >
          <div class="row justify-center">
            <q-card class="my-card">
              <q-card-section class="crad-section">
                <div
                  class="column justify-center items-center q-gutter-sm q-mt-md q-mb-md"
                >
                  <div
                    class="text-h4 justify-center items-center q-gutter-sm text-weight-bolder"
                  >
                    企業版
                  </div>

                  <div
                    style="height: 200px; width: 190px"
                    class="flex items-center"
                  >
                    <q-img src="src/assets/card4.png" spinner-color="white" />
                  </div>

                  <div class="row justify-center items-end q-gutter-sm">
                    <div class="text-h4 text-weight-bold">聯絡我們</div>
                  </div>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions vertical>
                <q-list
                  class="row justify-start items-center q-mb-md q-mt-md q-mr-md q-ml-md"
                >
                  <q-item class="row justify-start items-center q-gutter-sm">
                    <li>
                      <span class="text-h6 text-weight-medium"
                        >資料表總數量
                      </span>
                      <span class="text-h6 text-weight-bold">無上限</span>
                    </li>
                  </q-item>
                  <q-item class="row justify-start items-center q-gutter-sm">
                    <li>
                      <span class="text-h6 text-weight-medium">資料容量 </span>
                      <span class="text-h6 text-weight-bold">無上限</span>
                    </li>
                  </q-item>
                  <q-item class="row justify-start items-center q-gutter-sm">
                    <li>
                      <span class="text-h6 text-weight-medium">檔案容量 </span>
                      <span class="text-h6 text-weight-bold">無上限</span>
                    </li>
                  </q-item>
                </q-list>
              </q-card-actions>
            </q-card>
          </div>

          <div class="row justify-center q-pt-lg">
            <q-btn
              unelevated
              outline
              rounded
              label="專業諮詢洽談"
              class="button q-mb-md q-mr-lg q-ml-lg card-btn-borded"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- slogan -->
    <div class="q-pb-xl q-px-xl responsive-margin">
      <div class="row">
        <div class="col-xs-12 col-md-6 column justify-center">
          <h4 class="text-weight-bold q-pt-lg q-pb-lg text-start responsive-h4">
            LOCO解決你的工作日常
          </h4>
          <h6 class="text-weight-bold responsive-h6">
            迄今已協助超過 500+
            用戶數位轉型，我們提供全方位的雲端資料管理與辦公協作系統，滿足各行各業的日常作業需求!
            若有興趣了解更多，歡迎加入右方Line官方帳號!
          </h6>
        </div>
        <div class="col-xs-12 col-md-6">
          <q-img
            src="src/assets/lineQRCode.png"
            fit="contain"
            spinner-color="white"
          />
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer q-py-xl">
      <div class="text-center">
        <h6 class="text-weight-bold">全方位資訊整合平台</h6>
        <h6 class="q-mt-sm">簡單步驟，解救你的紙張魔咒!</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-color {
  color: #637e99;
}
.bg-image {
  background-image: url(src/assets/banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 650px;
}
@media (min-width: 1440px) {
  .responsive-margin {
    margin-right: 80px;
    margin-left: 80px;
  }
}
@media (max-width: 600px) {
  .responsive-h2 {
    font-size: 40px;
  }
  .responsive-h3 {
    font-size: 32px; /* h5 的大小 */
  }
  .responsive-h4 {
    font-size: 22px;
  }
  .responsive-h5 {
    font-size: 20px;
  }
  .responsive-order {
    order: 2;
  }
}
.feature {
  background-color: #f7f9fd;
}
.responsive-img {
  height: 350px;
}

@media (max-width: 767px) {
  .responsive-img {
    width: 100%;
    height: 100px;
  }
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
}
.my-card {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}
.crad-section {
  height: 426px;
  background-color: #ffd98c;
}
.card-btn-blue {
  width: 250px;
  background-color: #637e99;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  border-width: 10px;
  border: 2px solid;
}

.card-btn-borded {
  width: 250px;
  background-color: #ffffff;
  color: #637e99;
  font-size: 24px;
  font-weight: 900;
  border-width: 10px;
}
.recommend {
  position: relative;
}
.recommend-card {
  position: absolute;
  top: -20px;
  z-index: 100;
  width: 150px;
  background-color: #ffffff;
  color: #e08d7b;
  font-size: 20px;
  font-weight: 900;
  border-width: 10px;
  border: 3px solid #e08d7b;
}

.footer {
  background-color: #ffd98c;
}
</style>
