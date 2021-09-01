/*
 "data": [
        {
            "id": 1,
            "name": "Enel",
            "phone": null,
            "address": null,
            "address_complement": null,
            "address_reference": null,
            "address_number": "sn",
            "address_neighborhood": null,
            "address_state": null,
            "address_city": null,
            "address_postal_code": null,
            "email": null,
            "cnpj_cpf": null,
            "rg_ie": null,
            "created_at": "2020-08-25 17:10:48",
            "updated_at": "2020-08-25 17:10:48",
            "deleted_at": null
        }
    ]
 */


Ext.define('Financial.model.Supplier', {
    extend: 'Financial.model.Base',
    requires:[
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.validator.Presence'
    ],
    idProperty: 'id',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/supplier',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    },
    validators: {
        name: 'presence'
    },
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name'
    }, {
        name: 'phone'
    }, {
        name: 'email'
    }, {
        name: 'cnpj_cpf'
    }, {
        name: 'rg_ie'
    }, {
        name: 'address'
    }, {
        name: 'address_complement'
    }, {
        name: 'address_reference'
    }, {
        name: 'address_number'
    }, {
        name: 'address_neighborhood'
    }, {
        name: 'address_state'
    }, {
        name: 'address_city'
    }, {
        name: 'address_postal_code'
    }, {
        name: 'created_at',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'updated_at',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }]
})