Ext.define('Financial.view.home.Main', {
    extend: 'Ext.Container',
    alias: 'widget.homeview',
    scrollable: true,

    items: [{
        xtype: 'billbycategorychart',
        shadow: true,
        margin: 15,
        height: 350
    }, {
        xtype: 'yearlybillschart',
        shadow: true,
        margin: 15,
        height: 400
    }]
});