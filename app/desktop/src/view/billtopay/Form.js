Ext.define('Financial.view.billtopay.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.billtopay-form',
    modelValidation: true,
    items: [{
        xtype: 'fieldset',
        title: 'Dados principais',
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'fieldcontainer',
            items: [{
                xtype: 'combobox',
                label: 'Categoria',
                margin: '0 5 0 0',
                flex: 2,
                valueField: 'id',
                displayField: 'description',
                autoLoadOnValue: true,
                store: {
                    model: 'Financial.model.BillCategory'
                },
                bind: {
                    value: '{record.bill_category_id}'
                }
            }, {
                xtype: 'datefield',
                label: 'Vencimento',
                flex: 1,
                bind: {
                    value: '{record.due_date}'
                }
            }]
        }, {
            xtype: 'fieldcontainer',
            items: [{
                xtype: 'combobox',
                autoLoadOnValue: true,
                label: 'Fonecedor',
                margin: '0 5 0 0',
                flex: 2,
                valueField: 'id',
                displayField: 'name',
                store: {
                    model: 'Financial.model.Supplier'
                },
                bind: {
                    value: '{record.supplier_id}'
                }
            }, {
                xtype: 'numberfield',
                label: 'Valor',
                flex: 1,
                bind: {
                    value: '{record.amount}'
                }
            }]
        }, {
            xtype: 'textfield',
            label: 'Descrição',
            bind: {
                value: '{record.description}'
            }
        }, {
            xtype: 'textareafield',
            label: 'Observação',
            height: 120,
            bind: {
                value: '{record.notes}'
            }
        }]
    }, {
        xtype: 'checkboxfield',
        reference: 'checkContaPaga',
        boxLabel: 'Conta paga'
    },
        {
            xtype: 'fieldset',
            disabled: true,
            bind: {
                disabled: '{!checkContaPaga.checked}'
            },
            title: 'Informações do Pagamento',
            items: [{
                xtype: 'fieldcontainer',
                defaults: {
                    flex: 1
                },
                items: [{
                    xtype: 'datefield',
                    label: 'Data Pgto.',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.paid_date}'
                    }
                }, {
                    xtype: 'numberfield',
                    label: 'Valor Pago',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.paid_amount}'
                    }
                }, {
                    xtype: 'numberfield',
                    label: 'Juros e Multa',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.interests_and_fine}'
                    }
                }, {
                    xtype: 'numberfield',
                    label: 'Descontos',
                    bind: {
                        value: '{record.discounts}'
                    }
                }]
            }]
        }]
});