Ext.define('Financial.view.billcategory.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.billcategoryview',

    stores: {
        categories: {
            model: 'Financial.model.BillCategory',
            autoLoad: true
        }
    }
})