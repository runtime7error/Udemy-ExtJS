Ext.define('Financial.view.supplier.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.suppliergrid',
    requires: [
        'Ext.dataview.plugin.ListPaging',
        'Ext.grid.plugin.Editable'
    ],
    plugins: {
        listpaging: {
            autoPaging: true
        },
        grideditable: true
    },
    selectable:{
        checkbox: true
    },
    emptyText: true,
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        layout: {
            type: 'hbox',

        },
        items: [{
            xtype: 'button',
            ui: 'action',
            text: 'Novo',
            tooltip: 'Clique para cadastrar um novo registro',
            listeners: {
                tap: 'onNovoButtonTap'
            }
        }, {
            xtype: 'button',
            text: 'Editar',
            disabled: true,
            bind:{
                disabled: '{!supplierGrid.selection}'
            },
            tooltip: 'Clique para editar um novo selecionado',
            listeners: {
                tap: 'onEditButtonTap'
            }
        }, {
            xtype: 'button',
            text: 'Excluir',
            disabled: true,
            bind:{
                disabled: '{!supplierGrid.selection}'
            },
            tooltip: 'Clique para escluir os registros selecionados',
            listeners: {
                tap: 'onDeleteButtonTap'
            }
        }]
    }],

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 50
    }, {
        text: 'Nome',
        editable: true,
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Telefone',
        editable: true,
        dataIndex: 'phone',
        width: 130
    }, {
        text: 'Email',
        editable: true,
        dataIndex: 'email',
        flex: 1
    }]
})