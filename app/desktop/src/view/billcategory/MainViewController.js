Ext.define('Financial.view.billcategory.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billcategoryview',

    onNovoButtonTap: function (button) {
        var me = this,
            grid = me.lookup('billCategoryGrid'),
            record = grid.getStore().insert(0, {});

        grid.findPlugin('rowedit').startEdit(record[0]);
    },

    onGridRowEdit: function (grid, location) {
        //TODO salvar o model recem editado

        location.record.save({
            callback: function () {
                Ext.toast('Registro salvo!!', 4000);
            }
        });

    },

    onDeleteToolHandler: function (grid, location) {
        var me = this,
            grid = me.lookup('billCategoryGrid'),
            store = grid.getStore();

        Ext.Msg.confirm('Confirmação', 'Deseja excluir?', function (option) {
            if (option === 'yes') {
                grid.mask('Excluindo, aguarde...');
                location.record.erase({
                    callback: function (batch) {
                        grid.unmask();
                        Ext.toast('Exclusão realizada com sucesso!', 4000);
                        store.reload();
                    }
                })
            }
        });
    }
});