import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueAxios from "vue-axios";
import { CHART_DATA } from "../api/namespaces";
import { IChartData } from '@/interfaces/shared';

Vue.use(Vuex);
Vue.use(VueAxios, Axios);

interface IStoreRoot {
    chart: IChartData[];
}

export const store = new Vuex.Store<IStoreRoot>({
    state: {
        chart: [],
    },
    mutations: {
        setChartData(state, payload: IChartData[]) {
            state.chart = [...payload];
        },
    },
    actions: {
        getChartData: ({ commit }) => {
            Vue.axios.get(CHART_DATA).then((response) => {
                commit("setChartData", response.data);
            });
        },
    },
    modules: {},
});
