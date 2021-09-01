/*
{
            "id": 1,
            "supplier_id": 1,
            "bill_category_id": 1,
            "description": "Jantar na Pizzaria",
            "installment": 1,
            "total_installments": 1,
            "due_date": "2020-08-25 00:00:00",
            "amount": 60.9,
            "paid_date": null,
            "discounts": null,
            "interests_and_fine": null,
            "paid_amount": null,
            "competence": null,
            "reference_code": null,
            "notes": null,
            "created_at": "2020-08-25 17:15:35",
            "updated_at": "2020-08-25 17:15:35",
            "deleted_at": null,
            "bill_category": {
                "id": 1,
                "description": "Lazer teste alterado",
                "parent_id": null,
                "type": "P",
                "created_at": "2020-08-25 17:12:07",
                "updated_at": "2020-08-26 17:13:06"
            },
            "supplier": null
        }
 */

Ext.define('Financial.model.BillToPay', {
    extend: 'Financial.model.Base',
    idProperty: 'id',

    requires:[
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.validator.Presence'
    ],

    fields: [
        {name: 'id', type: 'int'},
        //FK
        {name: 'supplier_id', type: 'int'},
        //FK
        {name: 'bill_category_id', type: 'int'},
        {name: 'bill_category_description', mapping: 'bill_category.description', persist: false},
        {name: 'supplier_name', mapping: 'supplier.name', persist: false},
        {name: 'installment', type: 'int', defaultValue: 1},
        {name: 'total_installments', type: 'int', defaultValue: 1},
        {name: 'due_date', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'paid_date', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'amount', type: 'float'},
        {name: 'discounts', type: 'float'},
        {name: 'interests_and_fine', type: 'float'},
        {name: 'paid_amount', type: 'float'},
        {name: 'competence', type: 'string'},
        {name: 'reference_code', type: 'int'},
        {name: 'notes', type: 'string'},
        {name: 'created_at', type: 'date', dateFormat: 'Y-m-d H:i:s', persist: false},
        {name: 'updated_at', type: 'date', dateFormat: 'Y-m-d H:i:s', persist: false}
    ],

    validators: {
        bill_category_id: 'presence',
        supplier_id: 'presence',
        installment: 'presence',
        total_installments: 'presence',
        due_date: 'presence',
        amount: 'presence'
    },

    proxy:{
        type: 'rest',
        url: 'http://localhost:3333/api/v1/bill_to_pay',
        reader:{
            type: 'json',
            rootProperty: 'data'
        },
        writer:{
            type: 'json'
        }
    }
});