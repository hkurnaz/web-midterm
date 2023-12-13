<template>
  <div class="image-container" style="position: relative; margin-left: 550px; margin-top: 100px;">

    <img style="width: 93px;height: 131px; " src="https://r.resimlink.com/ICt47O.jpg" alt="Resim açıklaması">
  </div>
  <div class="q-pa-md row items-start q-gutter-md">


    <q-card flat bordered class="my-card text-white" style="width: 980px; height: 176px;margin-top: -40px; margin-left: 120px;z-index: -1; background: 
        radial-gradient(circle at 50% 0%, #00acdf 22%, transparent 0%, transparent 230px),
        radial-gradient(circle at 50% 0%, #00a4db 35%, transparent 0%, transparent 370px),
        radial-gradient(circle at 50% 0%, #009ed8 49%, transparent 0%, transparent 510px),
        radial-gradient(circle at 50% 0%, #009ed8 100%, transparent 0%, transparent 980px);">
      <q-card-section class="text-center">
        <div>
          <div>
            <div>

              <h5 style="margin-top: 60px;">Sepetinizde ürün bulunmamaktadır.</h5>
              <p style="margin-top: -30px;">Turkcell'in avantajlı dünyasından faydalanmak için hemen alışverişe
                başlayabilirsiniz.</p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script setup lang="ts">



export interface TheComp5Props {
  id?: string;
}
withDefaults(defineProps<TheComp5Props>(), {
  id: '77'
});




</script>
<style lang="sass" scoped>


</style>