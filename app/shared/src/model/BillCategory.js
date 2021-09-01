/*
 {
            "id": 1,
            "description": "Lazer",
            "parent_id": null,
            "type": "P",
            "created_at": "2020-08-25 17:12:07",
            "updated_at": "2020-08-25 17:12:07"
        },
 */
Ext.define('Financial.model.BillCategory', {
    extend: 'Financial.model.Base',
    idProperty: 'id',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.validator.Presence'
    ],

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'type',
        defaultValue: 'P'
    }],
    validators: {
        description: 'presence'
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/bill_category',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});