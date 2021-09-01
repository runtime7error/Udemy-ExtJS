Ext.define('Financial.view.billtopay.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.billtopayviewmodel',

    stores: {
        bills: {
            model: 'Financial.model.BillToPay',
            autoLoad: true
        }
    }
})