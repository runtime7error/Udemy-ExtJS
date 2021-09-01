Ext.define('Financial.view.billcategory.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.billcategorygrid',
    requires:[
        'Ext.grid.plugin.PagingToolbar',
        'Ext.grid.rowedit.Plugin'
    ],

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'button',
            ui: 'action',
            text: 'Novo',
            tooltip: 'Clique para adicionar um novo registro',
            handler: 'onNovoButtonTap'
        }]
    }],

    plugins: {
        rowedit: true,
        pagingtoolbar: true
    },

    listeners: {
        edit: 'onGridRowEdit'
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 60,
        hidden: true
    }, {
        text: 'Descrição',
        dataIndex: 'description',
        editable: true,
        flex: 1
    }, {
        align: 'center',
        width: 40,
        cell: {
            tools: {
                remove: {
                    iconCls: 'x-fa fa-trash',
                    handler: 'onDeleteToolHandler'
                }
            }
        }
    }]
})