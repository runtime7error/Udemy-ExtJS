Ext.define('Financial.view.supplier.Dialog', {
    extend: 'Ext.Dialog',
    controller: 'supplierdialog',
    layout: 'fit',
    width: 750,
    height: 580,
    title: 'Cadastro de Fornecedor',
    closable: true,
    maximizable: true,
    items: [{
        xtype: 'supplier-form',
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
        },{
            xtype: 'spacer',
            flex: 1
        },{
            xtype: 'button',
            text: 'Salvar',
            handler: 'onSaveHandler'
        }]
    }]
});