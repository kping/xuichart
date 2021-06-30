<template>
  <div style="width: 440px;height: 370px;">
    <div class="kuangchan">
      <div class="item item1"><img :src="img1" class="">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">铀</p>
          <p class="item-title"><span> 誉为“中国铀都” </span></p></div>
      </div>
      <div class="item select item2"><img :src="img2"
                                          class="activeImg">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">铜</p>
          <p class="item-title"><span> 储量占全国
近40% </span></p></div>
      </div>
      <div class="item item3"><img :src="img3" class="">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">钨</p>
          <p class="item-title"><span> 誉为“世界钨都” </span></p></div>
      </div>
      <div class="item item4"><img :src="img4" class=""/>
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">稀土</p>
          <p class="item-title"><span> 誉为“稀土王国” </span></p></div>
      </div>
      <div class="item item5"><img :src="img5" class="">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">钽铌</p>
          <p class="item-title"><span> 资源储量
居全国第一 </span></p></div>
      </div>
      <div class="item item6"><img :src="img6" class="">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">金</p>
          <p class="item-title"><span> 探明储量居全国第二 </span></p></div>
      </div>
      <div class="item item7"><img :src="img7" class="">
        <div class="line">
          <div>
            <div class="br"></div>
          </div>
          <p class="qdjh-name">银</p>
          <p class="item-title"><span> 探明储量居全国第一 </span></p></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'coolSimple',
    data() {
      return {
        img1: require('@/assets/img/k1.74b8cf94.png'),
        img2: require('@/assets/img/k2-a.2388307c.png'),
        img3: require('@/assets/img/k3.f9637ed5.png'),
        img4: require('@/assets/img/k4.203f6be3.png'),
        img5: require('@/assets/img/k5.0bbbd814.png'),
        img6: require('@/assets/img/k6.991afeb4.png'),
        img7: require('@/assets/img/k7.be0b0ae2.png'),
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="scss">
  .kuangchan {
    display: flex;
    height: calc(100% - 60px);
    width: 100%;
    background: url(../../assets/img/kc-bg.9d6f8d2c.png) no-repeat center 76px;
    background-size: 100% auto
  }

  .kuangchan .item {
    position: relative
  }

  .kuangchan .item img {
    display: block;
    position: absolute;
    bottom: 160px;
    left: -10%;
    width: 120%;
    z-index: 120
  }

  .kuangchan .item .activeImg {
    transition: all 1s ease-out;
    transform: scale(1.3);
    z-index: 200
  }

  .kuangchan .item .line {
    z-index: 100;
    position: absolute;
    bottom: 0;
    width: 100%
  }

  .kuangchan .item .line .qdjh-name {
    font-size: 14px;
    margin-bottom: 6px
  }

  .kuangchan .item .line p {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
    word-wrap: break-word;
    word-break: normal;
    margin: 0
  }

  .kuangchan .item .line .item-title {
    position: relative
  }

  .kuangchan .item .line .br {
    width: 50%;
    border-right: 2px dashed hsla(0,0%,100%,.54);
    vertical-align: middle;
    display: inline-block;
    margin-top: 15px
  }

  .kuangchan .item1 {
    width: 62px
  }

  .kuangchan .item1 img {
    bottom: 208px
  }

  .kuangchan .item1 .line {
    bottom: 10px
  }

  .kuangchan .item1 .br {
    height: 165px
  }

  .kuangchan .item1 span {
    white-space: nowrap;
    margin-left: -10px
  }

  .kuangchan .item2 {
    width: 44px
  }

  .kuangchan .item2 img {
    bottom: 190px
  }

  .kuangchan .item2 .line {
    bottom: 60px
  }

  .kuangchan .item2 .br {
    height: 91px
  }

  .kuangchan .item2 span {
    display: inline-block;
    width: 79px;
    margin-left: -16px
  }

  .kuangchan .item3 {
    width: 108px
  }

  .kuangchan .item3 img {
    bottom: 170px
  }

  .kuangchan .item3 .line {
    bottom: 10px
  }

  .kuangchan .item3 .br {
    height: 139px
  }

  .kuangchan .item4 {
    width: 50px
  }

  .kuangchan .item4 img {
    bottom: 170px
  }

  .kuangchan .item4 .line {
    bottom: 60px
  }

  .kuangchan .item4 .br {
    height: 75px
  }

  .kuangchan .item4 span {
    display: inline-block;
    width: 99px;
    margin-left: -30px
  }

  .kuangchan .item5 {
    width: 52px
  }

  .kuangchan .item5 img {
    bottom: 200px
  }

  .kuangchan .item5 .line {
    bottom: 10px
  }

  .kuangchan .item5 .br {
    height: 156px
  }

  .kuangchan .item5 span {
    white-space: nowrap;
    margin-left: -40px
  }

  .kuangchan .item6 {
    width: 46px
  }

  .kuangchan .item6 img {
    bottom: 190px
  }

  .kuangchan .item6 .line {
    bottom: 60px
  }

  .kuangchan .item6 .br {
    height: 88px
  }

  .kuangchan .item6 span {
    display: inline-block;
    width: 66px;
    margin-left: -10px
  }

  .kuangchan .item7 {
    width: 74px
  }

  .kuangchan .item7 img {
    bottom: 200px
  }

  .kuangchan .item7 .line {
    bottom: 10px
  }

  .kuangchan .item7 .br {
    height: 150px
  }

  .kuangchan .item7 span {
    white-space: nowrap
  }

  .kuangchan .select .line .br {
    border-color: #78ffd4
  }

  .kuangchan .select .line p {
    color: #78ffd4
  }

</style>
