<template>
    <div class="parent">
        <OurMenu />
        <img src="/static/ble.png" loading="lazy" alt="." />
        <div class="body-text">
            <span class="title">Mission</span>
            <span class="txt">Igisata c'ivugabutumwa n'ijanabutumwa co mw'ishengero MINEVAM Kigobe</span>
            <div class="contact">Tel: <a :href="'tel:' +25768704523"><span>+25768704523</span></a></div>
        </div>
    </div>
    <div class="slogan">
        <span class="ogi">Mission Gukunda Imana yaremye ijuru n'isi, gukunda abantu bayo, guhindura amahanga.</span>
    </div>
    
</template>

<script>
import OurMenu from '@/components/OurMenu.vue'

export default {
    name: 'HomeView',
    components: {
        OurMenu
    }
}
</script>

<style></style>