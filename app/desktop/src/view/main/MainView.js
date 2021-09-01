Ext.define('Financial.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    layout: 'fit',
    items: [{
        xtype: 'main-header',
        docked: 'top',
        reference: 'headerview'
    }, {
        xtype: 'nav-panel',
        docked: 'left',
        width: 250,
        reference: 'navigationview'
    }, {
        xtype: 'center-container',
        reference: 'centerview'
    }]
})
