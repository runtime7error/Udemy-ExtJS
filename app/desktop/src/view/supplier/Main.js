Ext.define('Financial.view.supplier.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.suppliersview',
    bodyPadding: 0,
    controller: 'suppliermainview',
    viewModel: {
        type: 'supplierview'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'suppliergrid',
        reference: 'supplierGrid',
        flex: 1,
        margin: 10,
        shadow: true,
        bind: {
            store: '{suppliers}'
        }
    }]
})