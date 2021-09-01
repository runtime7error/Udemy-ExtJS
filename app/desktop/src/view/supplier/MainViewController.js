Ext.define('Financial.view.supplier.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.suppliermainview',

    onNovoButtonTap: function (button) {
        //TODO abrir a modal para cadastro
        var me = this;

        me.openEditDialog({
            viewModel: {
                data: {
                    record: Ext.create('Financial.model.Supplier'),
                    gridView: me.lookup('supplierGrid')
                }
            }
        });
    },

    onEditButtonTap: function (button) {
        //TODO pegar o registro selecionado
        var me = this,
            gridView = me.lookup('supplierGrid'),
            selected = gridView.getSelection();

        if (gridView.getSelected().getCount() === 1) {
            me.openEditDialog({
                title: 'Editando fornecedor',
                viewModel: {
                    data: {
                        record: selected,
                        gridView: me.lookup('supplierGrid')
                    }
                }
            });
        } else {
            Ext.Msg.alert('Aviso', 'Favor selecionar apenas um registro para edição!');
        }
    },

    openEditDialog: function (config) {
        var me = this,
            wizardDialog = Ext.create('Financial.view.supplier.Dialog', Ext.apply({}, config));

        wizardDialog.show();
        return wizardDialog;
    },

    onDeleteButtonTap: function (button) {
        /*
        Exibir mensagem de cofirmação,
        Excluir os registros
        Mostrar alerta que registros foram excluidos
        Reload no store
         */
        var me = this,
            grid = me.lookup('supplierGrid'),
            selection = grid.getSelected(),
            store = grid.getStore(),
            count = selection.getCount();

        Ext.Msg.confirm('Confirmação', 'Deseja realmente excluir?', function (option) {
            if (option === 'yes') {
                grid.mask(Ext.String.format('Excluindo {0}, aguarde...', Ext.util.Format.plural(count, 'registro')));
                store.remove(selection.items);
                store.sync({
                    callback: function (batch) {
                        grid.unmask();
                        if (batch.complete) {
                            Ext.toast('Exclusão realizada com sucesso!', 4000);
                            store.reload();
                        } else {
                            store.rejectChanges();
                        }
                    }
                })
            }
        });


    }

})