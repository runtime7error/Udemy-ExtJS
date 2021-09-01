Ext.define('Financial.view.main.ManuView', {
    extend: 'Ext.Sheet',
    alias: 'widget.menuview',
    controller: 'mainviewcontroller',
    layout: 'vbox',
    width: 180,
    items: [{
        xtype: 'image',
        src: 'resources/shared/images/SenchaLeaf.jpeg',
        height: 180
    }, {
        xtype: 'container',
        layout: 'vbox',
        flex: 1,
        defaults: {
            xtype: 'button',
            handler: 'onMenuClick'
        },
        items: [{
            text: 'Dashboard',
            tag: 'homeview'
        }, {
            text: 'Contas a Pagar',
            tag: 'billtopaylist'
        }]
    }]
})