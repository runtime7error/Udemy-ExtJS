Ext.define('Financial.view.billtopay.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.billtopayview',
    controller: 'billtopaymainview',
    viewModel:{
        type: 'billtopayviewmodel'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'billtopaygrid',
        reference: 'billToPayGrid',
        shadow: true,
        margin: 5,
        bind: {
            store: '{bills}'
        },
        flex: 1
    }]
})