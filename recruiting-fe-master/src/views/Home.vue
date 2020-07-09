<template>
	<b-container class="mt-5">
		<b-row>
			<b-col>
				<rf-chart v-if="chartData.length" :data="chartData"></rf-chart>
				<b-alert :show="!chartData.length" variant="danger">ChartData is empty. Fill it correctly!</b-alert>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RfChart from "@/components/RfChart.vue";
import { IChartData } from "@/interfaces/shared";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3456";
var cMonths:any[] = [];
var cItems:any[] = [];
var cItemData:any[] = [];
const array_column = (array = [], column_name = '') => array.map((item, index) => item[column_name]);

@Component({
	components: {
		RfChart
	}
})
export default class App extends Vue {
	// chartData: IChartData = [["CRP1", 100, 300, 0, 5],["CRP2", 200, 150, 5, 6],["CRP3", 200, 350, 5, 6]];
	chartData: IChartData = [];
	mounted () {
		axios
		.get(API_URL+'/rest/chart-data')
		.then(response => {
			cMonths = response.data.data.reduce((seed:any, current:any) => {
				return Object.assign(seed, {
					[current.date.monthValue]: current.date.month
				});
			}, {});
			cItems = response.data.data.reduce((seed:any, current:any) => {
				return Object.assign(seed, {
					[current.itemID]: current.itemID
				});
			}, {});
			var dtitem:any = [];
			var val:any = [];
			Object.entries(cItems).forEach(([i_key, item])=> ( //crp1
				dtitem = [item],
				Object.entries(cMonths).map(function(month:any, key:any) {
					val = response.data.data.filter((elem: any)=> {
						if(elem.itemID == item && elem.date.month == month[1]){
							return elem
						}
					});
					if(val.length){
						dtitem.push(val[0].value);
					}
					else{
						dtitem.push(0);
					}
				}),
				this.chartData.push(dtitem)
			));
		})
	}
}
</script>

<style></style>
