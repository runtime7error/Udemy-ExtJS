Ext.define('Financial.view.home.PieChart', {
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.billbycategorychart',
    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.interactions.ItemHighlight'
    ],
    legend: {
        docked: 'right'
    },
    innerPadding: 25,
    interactions: ['rotate', 'itemhighlight'],
    store: {
        autoLoad: true,
        fields: ['description', 'total'],
        proxy: {
            type: 'ajax',
            url: 'http://localhost:3333/api/v1/paid_bills_by_category',
            reader: {
                rootProperty: 'data'
            }
        }
    },
    series: [{
        type: 'pie',
        xField: 'total',
        radiusField: 'description',
        donut: 30,
        label: {
            field: 'description',
            display: 'outside'
        }
    }]
});