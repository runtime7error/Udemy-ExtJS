Ext.define('Financial.view.billtopay.Dialog', {
    extend: 'Ext.Dialog',
    controller: 'billtopaydialogcontroller',
    layout: 'fit',
    width: 750,
    height: 650,
    title: 'Cadastrar Conta a Pagar',
    closable: true,
    maximizable: true,
    items: [{
        xtype: 'billtopay-form',
        reference: 'form'
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        layout: {
            layout: 'hbox',
            pack: 'end'
        },
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-trash',
            handler: 'onDeleteHandler'
        }, {
            xtype: 'spacer',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Salvar',
            handler: 'onSaveHandler'
        }]
    }]
})