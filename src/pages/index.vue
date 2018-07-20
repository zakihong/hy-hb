<template>
  <div class="index pb pt">
    <mt-header title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button>关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">分享</mt-button>
    </mt-header>
    <div class="content">
      <ve-pie :data="chartData"></ve-pie>
      <p>this is a vue mobile template, includes:</p>
      <ve-bmap :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip">
      </ve-bmap>
      <img src="~assets/common/icon_aipay.png" />
      <img src="~assets/common/icon_wechat.png" />
      <v-test-list :list="list"></v-test-list>
    </div>
    <div class="footer">
      <mt-button type="primary">固定在底部</mt-button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import MintUI from 'mint-ui';

  export default {
    mixins: [],
    props: [],
    data() {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 1,
          roam: true,
          mapStyle: {}
        }
      };
      this.chartTooltip = { show: true };
      return {
        list: [],
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // 经度，维度，value，...
            ]
          }
        ]
      };
    },
    created() {
      console.log('created');
      this.getDeviceInfo();
      for(let i = 0; i < 100; i++) {
        this.list.push(i);
      }
    },
    methods: {
      ...mapActions(['ajax']),
      getDeviceInfo() {
        let req1 = this.ajax({
          name: 'getDeviceInfo',
          method: 'get',
          options: {
            name: 1
          },
          lalla: 22
        });

        req1.then(res => {
          console.log('getDeviceInfo success', res);
        }).catch(err => {
          MintUI.Toast('哈哈哈哈');
          console.log('getDeviceInfo catch', err);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .index {
      img {
          width: 100px;
          height: 100px;
      }
  }
</style>
