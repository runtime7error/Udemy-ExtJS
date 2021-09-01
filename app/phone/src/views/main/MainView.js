Ext.define('Financial.view.main.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',
    controller: 'mainviewcontroller',
    id: 'main-view',
    initialize: function () {
        Ext.Viewport.setMenu({
            xtype: 'menuview'
        }, {
            side: 'left',
            cover: true
        })

    },

    config:{
        layout:{
            type: 'card'
        },
        items:[{
            xtype: 'toolbar',
            reference: 'mainToolbar',
            id: 'main-toolbar',
            docked: 'top',
            title: 'Home',
            items:[{
                xtype: 'button',
                iconCls: 'x-fa fa-bars',
                margin: 0,
                handler: function(){
                    Ext.Viewport.toggleMenu('left');
                }
            }]
        }]
    }
});