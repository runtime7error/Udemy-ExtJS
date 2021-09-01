Ext.define('Financial.view.billcategory.Main',{
    extend: 'Ext.Panel',
    alias: 'widget.billcategoryview',
    bodyPadding: 0,
    controller: 'billcategoryview',
    viewModel: {
        type: 'billcategoryview'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'billcategorygrid',
        reference: 'billCategoryGrid',
        flex: 1,
        margin: 10,
        shadow: true,
        bind: {
            store: '{categories}'
        }
    }]
});