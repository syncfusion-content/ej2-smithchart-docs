

import { Smithchart } from '@syncfusion/ej2-charts';

let smithchart: Smithchart = new Smithchart({
    title : {
        enableTrim: true,
        maximumWidth: 70,
        textAlignment: 'Center',
        visible: true,
        text: 'Impedance Transmission',
        subtitle: {
            text: 'Transmission',
            visible: true,
            textAlignment: 'Far',
            enableTrim: true,
            maximumWidth: 40
        }
    },
    series: [
        {
            points: [
                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ],
        }
    ],
});

smithchart.appendTo('#container');


