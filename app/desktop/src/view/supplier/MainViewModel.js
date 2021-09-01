Ext.define('Financial.view.supplier.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supplierview',

    stores: {
        suppliers: {
            model: 'Financial.model.Supplier',
            autoLoad: true
        }
    }
})