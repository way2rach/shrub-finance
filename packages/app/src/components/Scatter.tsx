import React from 'react';
import { Scatter } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
    datasets: [
        {
            label: 'Current LP Position',
            data: [{"x":2048,"y":59444.68870060032},{"x":2088,"y":60605.717776783924},{"x":2128,"y":61766.746852967524},{"x":2168,"y":62927.775929151125},{"x":2208,"y":64088.805005334725},{"x":2248,"y":65249.83408151832},{"x":2288,"y":66410.86315770193},{"x":2328,"y":67571.89223388552},{"x":2368,"y":68732.92131006913},{"x":2408,"y":69893.95038625272},{"x":2448,"y":71054.97946243633},{"x":2488,"y":72216.00853861992},{"x":2528,"y":73377.03761480353},{"x":2568,"y":74538.06669098712},{"x":2608,"y":75699.09576717071},{"x":2648,"y":76860.12484335432},{"x":2688,"y":78021.15391953792},{"x":2728,"y":79182.18299572152},{"x":2768,"y":80343.21207190513},{"x":2808,"y":81504.24114808872},{"x":2848,"y":82665.27022427233},{"x":2888,"y":83826.29930045592},{"x":2928,"y":84987.32837663952},{"x":2968,"y":86148.35745282313},{"x":3008,"y":87308.23259520586},{"x":3048,"y":88429.1481029451},{"x":3088,"y":89493.64632427864},{"x":3128,"y":90502.81996911146},{"x":3168,"y":91457.726922974},{"x":3208,"y":92359.3917812758},{"x":3248,"y":93208.80729773067},{"x":3288,"y":94006.93575274898},{"x":3328,"y":94754.71024713766},{"x":3368,"y":95453.03592603242},{"x":3408,"y":96102.7911376024},{"x":3448,"y":96704.82853073138},{"x":3488,"y":97259.97609555363},{"x":3528,"y":97769.03815044287},{"x":3568,"y":98232.79627878075},{"x":3608,"y":98652.0102185962},{"x":3648,"y":99027.41870793935},{"x":3688,"y":99359.74028865319},{"x":3728,"y":99649.67407102048},{"x":3768,"y":99897.90046158289},{"x":3808,"y":100105.08185628631},{"x":3848,"y":100271.86330093972},{"x":3888,"y":100398.87312086183},{"x":3928,"y":100486.72352144693},{"x":3968,"y":100536.01116127816},{"x":4008,"y":100548.06745073765},{"x":4048,"y":100548.06745073765},{"x":4088,"y":100548.06745073765},{"x":4128,"y":100548.06745073765},{"x":4168,"y":100548.06745073765},{"x":4208,"y":100548.06745073765},{"x":4248,"y":100548.06745073765},{"x":4288,"y":100548.06745073765},{"x":4328,"y":100548.06745073765},{"x":4368,"y":100548.06745073765},{"x":4408,"y":100548.06745073765},{"x":4448,"y":100548.06745073765},{"x":4488,"y":100548.06745073765},{"x":4528,"y":100548.06745073765},{"x":4568,"y":100548.06745073765},{"x":4608,"y":100548.06745073765},{"x":4648,"y":100548.06745073765},{"x":4688,"y":100548.06745073765},{"x":4728,"y":100548.06745073765},{"x":4768,"y":100548.06745073765},{"x":4808,"y":100548.06745073765},{"x":4848,"y":100548.06745073765},{"x":4888,"y":100548.06745073765},{"x":4928,"y":100548.06745073765},{"x":4968,"y":100548.06745073765},{"x":5008,"y":100548.06745073765}],
            backgroundColor: '#e2e8f0',
            showLine: true,
            borderColor: '#e2e8f0',
            pointRadius: 0,
            borderWidth: 5
        },
        {
            label: 'With Insurance',
            data: [{"x":2048,"y":85858.23259520586},{"x":2088,"y":85858.23259520586},{"x":2128,"y":85858.23259520586},{"x":2168,"y":85858.23259520586},{"x":2208,"y":85858.23259520586},{"x":2248,"y":85858.23259520586},{"x":2288,"y":85858.23259520586},{"x":2328,"y":85858.23259520586},{"x":2368,"y":85858.23259520586},{"x":2408,"y":85858.23259520586},{"x":2448,"y":85858.23259520586},{"x":2488,"y":85858.23259520586},{"x":2528,"y":85858.23259520586},{"x":2568,"y":85858.23259520586},{"x":2608,"y":85858.23259520586},{"x":2648,"y":85858.23259520586},{"x":2688,"y":85858.23259520586},{"x":2728,"y":85858.23259520586},{"x":2768,"y":85858.23259520586},{"x":2808,"y":85858.23259520586},{"x":2848,"y":85858.23259520586},{"x":2888,"y":85858.23259520586},{"x":2928,"y":85858.23259520586},{"x":2968,"y":85858.23259520586},{"x":3008,"y":85858.23259520586},{"x":3048,"y":86979.1481029451},{"x":3088,"y":88043.64632427864},{"x":3128,"y":89052.81996911146},{"x":3168,"y":90007.726922974},{"x":3208,"y":90909.3917812758},{"x":3248,"y":91758.80729773067},{"x":3288,"y":92556.93575274898},{"x":3328,"y":93304.71024713766},{"x":3368,"y":94003.03592603242},{"x":3408,"y":94652.7911376024},{"x":3448,"y":95254.82853073138},{"x":3488,"y":95809.97609555363},{"x":3528,"y":96319.03815044287},{"x":3568,"y":96782.79627878075},{"x":3608,"y":97202.0102185962},{"x":3648,"y":97577.41870793935},{"x":3688,"y":97909.74028865319},{"x":3728,"y":98199.67407102048},{"x":3768,"y":98447.90046158289},{"x":3808,"y":98655.08185628631},{"x":3848,"y":98821.86330093972},{"x":3888,"y":98948.87312086183},{"x":3928,"y":99036.72352144693},{"x":3968,"y":99086.01116127816},{"x":4008,"y":99098.06745073765},{"x":4048,"y":99098.06745073765},{"x":4088,"y":99098.06745073765},{"x":4128,"y":99098.06745073765},{"x":4168,"y":99098.06745073765},{"x":4208,"y":99098.06745073765},{"x":4248,"y":99098.06745073765},{"x":4288,"y":99098.06745073765},{"x":4328,"y":99098.06745073765},{"x":4368,"y":99098.06745073765},{"x":4408,"y":99098.06745073765},{"x":4448,"y":99098.06745073765},{"x":4488,"y":99098.06745073765},{"x":4528,"y":99098.06745073765},{"x":4568,"y":99098.06745073765},{"x":4608,"y":99098.06745073765},{"x":4648,"y":99098.06745073765},{"x":4688,"y":99098.06745073765},{"x":4728,"y":99098.06745073765},{"x":4768,"y":99098.06745073765},{"x":4808,"y":99098.06745073765},{"x":4848,"y":99098.06745073765},{"x":4888,"y":99098.06745073765},{"x":4928,"y":99098.06745073765},{"x":4968,"y":99098.06745073765},{"x":5008,"y":99098.06745073765}],
            backgroundColor: 'rgb(46,147,111)',
            showLine: true,
            borderColor: 'rgb(46,147,111)',
            borderWidth: 5,
            pointRadius:0,

        }
    ],


};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};



const ScatterChart = () => (
    <>
        <div>
            {/*<h1>Spread</h1>*/}
        </div>
        <Scatter data={data}
            // @ts-ignore
                 options={options} />
    </>
);

export default ScatterChart;