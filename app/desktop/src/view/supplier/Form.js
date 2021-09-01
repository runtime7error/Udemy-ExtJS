Ext.define('Financial.view.supplier.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.supplier-form',
    modelValidation: true,
    requires:[
        'Ext.field.Container',
        'Ext.field.trigger.Search'
    ],
    items: [{
        xtype: 'textfield',
        label: 'Nome',
        bind:{
            value: '{record.name}'
        }
    }, {
        xtype: 'fieldcontainer',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            label: 'Telefone',
            margin: '0 5 0 0',
            bind:{
                value: '{record.phone}'
            }
        }, {
            xtype: 'textfield',
            label: 'Email',
            bind:{
                value: '{record.email}'
            }
        }]
    }, {
        xtype: 'fieldcontainer',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            label: 'CNPJ/CPF',
            margin: '0 5 0 0',
            bind:{
                value: '{record.cnpj_cpf}'
            }
        }, {
            xtype: 'textfield',
            label: 'IE/RG',
            bind:{
                value: '{record.rg_ie}'
            }
        }]
    }, {
        xtype: 'textfield',
        label: 'CEP',
        width: '35%',
        triggers: [{
            type: 'search',
            handler: 'onSearchCep'
        }],
        bind:{
            value: '{record.address_postal_code}'
        }
    }, {
        xtype: 'fieldcontainer',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            label: 'Endereço',
            margin: '0 5 0 0',
            bind:{
                value: '{record.address}'
            }
        }, {
            xtype: 'textfield',
            label: 'Complemento',
            bind:{
                value: '{record.address_complement}'
            }
        }]
    }, {
        xtype: 'fieldcontainer',
        items: [{
            xtype: 'textfield',
            width: 80,
            label: 'Número',
            bind:{
                value: '{record.address_number}'
            }
        }, {
            xtype: 'textfield',
            flex: 1,
            label: 'Bairro',
            bind:{
                value: '{record.address_neighborhood}'
            }
        }]
    }, {
        xtype: 'fieldcontainer',
        items: [{
            xtype: 'textfield',
            label: 'UF',
            flex: 1,
            margin: '0 5 0 0',
            bind:{
                value: '{record.address_state}'
            }
        }, {
            xtype: 'textfield',
            flex: 2,
            label: 'Cidade',
            bind:{
                value: '{record.address_city}'
            }
        }]
    }]
});