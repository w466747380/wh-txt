<template>
  <div class="wrap">
      <HeaderBar></HeaderBar> 
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>December</mu-sub-header>
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img :src="tile.image" >
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
    components: {
        HeaderBar
    },
    data () {
        return {
            list: [{
                    image: '',
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: '',
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    image: '',
                    title: 'Camera',
                    author: 'ruolin'
                }]
        }
    },
    methods: {

    }
}
</script>

<style>
.gridlist-demo{
    width: 100%;
    overflow-y: auto;
}
</style>
