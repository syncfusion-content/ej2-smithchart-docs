

import { Smithchart, SmithchartLegend, TooltipRender} from '@syncfusion/ej2-charts';

Smithchart.Inject(SmithchartLegend, TooltipRender);

let smithchart: Smithchart = new Smithchart({
    title: { text: 'Transmission lines applied for both impedance and admittance'},
    legendSettings: {
        visible: true
    },
    series: [
        {
            dataSource: [
                { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
                { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
                { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
                { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
                { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
                { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
                { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
                { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
                { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
                { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
                { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
            ],
            name: 'Transmission1',
            reactance: 'reactance', resistance: 'resistance',
            tooltip: {
                visible: true
            },
            marker: {
                visible: true,
                dataLabel: {
                    visible: true
                }
            }
        },
        {
            points: [{ resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }],
            name: 'Transmission2',
            tooltip: {
                visible: true
            }
        }
    ]
});
smithchart.appendTo('#container');

