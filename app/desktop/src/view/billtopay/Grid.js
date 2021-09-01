Ext.define('Financial.view.billtopay.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.billtopaygrid',
    requires:[
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.PagingToolbar'

    ],
    selectable: {
        checkbox: true
    },
    plugins: {
        pagingtoolbar: true,
        gridexporter: true
    },
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
            bind: {
                disabled: '{!billToPayGrid.selection}'
            },
            tooltip: 'Clique para editar um novo selecionado',
            listeners: {
                tap: 'onEditButtonTap'
            }
        }, {
            xtype: 'button',
            text: 'Excluir',
            disabled: true,
            bind: {
                disabled: '{!billToPayGrid.selection}'
            },
            tooltip: 'Clique para escluir os registros selecionados',
            listeners: {
                tap: 'onDeleteButtonTap'
            }
        }, {
            xtype: 'spacer',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Exportar',
            iconCls: 'x-fa fa-file-excel',
            handler: 'onExportButtonTap'
        }]
    }],
    columns: [{
        text: 'Vencimento',
        dataIndex: 'due_date',
        formatter: 'date("d/m/Y")',
        align: 'center',
        width: 110
    }, {
        text: 'Categoria',
        dataIndex: 'bill_category_description',
        width: 130,
    }, {
        text: 'Descrição',
        dataIndex: 'description',
        flex: 1
    }, {
        text: 'Fornecedor',
        dataIndex: 'supplier_name',
        width: 130,
    }, {
        text: 'Valor Previsto',
        formatter: 'brMoney',
        dataIndex: 'amount',
        alight: 'right',
        width: 120
    }, {
        text: 'Valor Pago',
        formatter: 'brMoney',
        dataIndex: 'paid_amount',
        alight: 'right',
        width: 120
    }, {
        hidden: true,
        text: 'Data do Pagamento',
        dataIndex: 'paid_date',
        align: 'center',
        formatter: 'date("d/m/Y")',
        width: 110
    }, {
        text: 'Status',
        align: 'center',
        width: 120,
        exportRenderer: true,
        renderer: function (value, record, dataIndex, cell, column) {
            if (record.get('paid_amount') && record.get('paid_date')) {
                return 'Pago';
            } else {

                return 'Aberto';
            }
        }
        // renderer: function (value, record, dataIndex, cell, column) {
        //     if (record.get('paid_amount') && record.get('paid_date')) {
        //         cell.addCls('text-green');
        //         return 'Pago';
        //     } else {
        //         if (record.get('due_date').getTime() < new Date().getTime()) {
        //             cell.addCls('text-red');
        //         }
        //         return 'Aberto';
        //     }
        // }
    }]
});