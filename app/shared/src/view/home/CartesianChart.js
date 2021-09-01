Ext.define('Financial.view.home.CartesianChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.yearlybillschart',
    requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.series.Line'
    ],

    legend: {
        docked: 'bottom'
    },

    store: {
        autoLoad: true,
        fields: ['month_short_name', 'total_paid', 'total_to_pay'],
        proxy: {
            type: 'ajax',
            url: 'http://localhost:3333/api/v1/yearly_paid_bills',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    },

    axes: [{
        type: 'numeric',

        position: 'left'
    }, {
        type: 'category',
        position: 'bottom'
    }],
    series: [{
        type: 'bar',
        title: 'Contas Pagas',
        xField: 'month_short_name',
        yField: 'total_paid'
    }, {
        type: 'line',
        title: 'Contas a Pagar',
        xField: 'month_short_name',
        yField: 'total_to_pay'
    }]
});