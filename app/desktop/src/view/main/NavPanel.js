Ext.define('Financial.view.main.NavPanel',{
    extend: 'Ext.Panel',
    alias: 'widget.nav-panel',
    title: 'Financial 1.0.0',
    shadow: true,
    margin: '0 5 0 0',
    layout: 'fit',
    items:[{
        xtype: 'menulist',
        reference: 'menuList',
        listeners:{
            selectionchange: 'onMenuSelectionChange'
        }
    }]
})