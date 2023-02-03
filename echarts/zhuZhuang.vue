<template>
  <div>
    <div :id="eId" class="container"></div>
  </div>
</template>

<script>
//引入uuid文件
import { uuid } from 'vue-uuid'
import echarts from "echarts";
export default {
  name: "zhuZhuang",
  data() {
    return {
      eId:''  ,
    }
  },
  props:{
    xAxisData: {
      type: Array,
      default:() => [],
    },
    firstData: {
      type: Array,
      default:() => [],
    },
    secondData: {
      type: Array,
      default:() => [],
    },
    thirdData: {
      type: Array,
      default:() => [],
    },
    fourthData: {
      type: Array,
      default:() => [],
    },
    yAxisName: {
      type: String,
      default:() => [],
    },
    xAxisName: {
      type: String,
      default:() => [],
    },
  },
  created() {
    this.eId = uuid.v1()
  },
  mounted() {
    console.log('数据有吗',this.firstData,this.secondData)
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      const myCharts = echarts.init(document.getElementById(this.eId))
      let seriesData1 = []
      let seriesData2 = []
      let seriesData3 = []
      let seriesData4 = []
      let seriesData = []
      let legendList = []
      if (this.firstData.length) {
        this.firstData.forEach(item => {
          seriesData1.push(item.count)
        })
        legendList.push(this.firstData[0].seriesName)
        seriesData.push({
          name: this.firstData[0].seriesName,
          type: this.firstData[0].type,
          data: seriesData1,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        })
      }
      if (this.secondData.length) {
        this.secondData.forEach(item => {
          seriesData2.push(item.count)
        })
        legendList.push(this.secondData[0].seriesName)
        seriesData.push({
          name: this.secondData[0].seriesName,
          type: this.secondData[0].type,
          data: seriesData2,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        })
      }
      if (this.thirdData.length) {
        this.thirdData.forEach(item => {
          seriesData3.push(item.count)
        })
        legendList.push(this.thirdData[0].seriesName)
        seriesData.push({
          name: this.thirdData[0].seriesName,
          type: this.thirdData[0].type,
          data: seriesData3,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        })
      }
      if (this.fourthData.length) {
        this.fourthData.forEach(item => {
          seriesData4.push(item.count)
        })
        legendList.push(this.fourthData[0].seriesName)
        seriesData.push({
          name: this.fourthData[0].seriesName,
          type: this.fourthData[0].type,
          data: seriesData4,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        })
      }
      myCharts.setOption({
        // title: {
        //   text: 'Rainfall vs Evaporation',
        //   subtext: 'Fake Data'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendList
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: this.xAxisData,
            name: this.xAxisName
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: this.yAxisName
          }
        ],
        series:seriesData,
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: calc(100%);
  height: 400px;
}
</style>