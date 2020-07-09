<template>
	<div class="chart-wrapper">
		<vue-c3 :handler="handler"></vue-c3>
	</div>
</template>

<script lang="ts">
const VueC3 = require("vue-c3");

import { Component, Vue, Prop } from "vue-property-decorator";
import { IChartData } from "../interfaces/shared";

@Component({ components: { VueC3 } })
export default class Chart extends Vue {
	@Prop() private data!: IChartData;

	handler = new Vue();

	mounted() {
		this.handler.$emit("init", {
			data: {
				columns: this.data,
				type: "bar",
				groups: [this.data.map(d => d[0])]
			}
		});
	}

	destroyed() {
		this.handler.$emit("destroy");
	}
}
</script>
