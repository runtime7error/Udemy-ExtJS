Ext.define('Financial.view.billtopay.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaymainview',


    onNovoButtonTap: function (button) {
        //TODO abrir a modal para cadastro
        var me = this;

        me.openEditDialog({
            viewModel: {
                data: {
                    record: Ext.create('Financial.model.BillToPay'),
                    gridView: me.lookup('billToPayGrid')
                }
            }
        });
    },

    onEditButtonTap: function (button) {
        //TODO pegar o registro selecionado
        var me = this,
            gridView = me.lookup('billToPayGrid'),
            selected = gridView.getSelection();

        if (gridView.getSelected().getCount() === 1) {
            me.openEditDialog({
                title: 'Editando Conta a Pagar',
                viewModel: {
                    data: {
                        record: selected,
                        gridView: gridView
                    }
                }
            });
        } else {
            Ext.Msg.alert('Aviso', 'Favor selecionar apenas um registro para edição!');
        }
    },

    openEditDialog: function (config) {
        var me = this,
            wizardDialog = Ext.create('Financial.view.billtopay.Dialog', Ext.apply({}, config));

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
            grid = me.lookup('billToPayGrid'),
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
    },

    onExportButtonTap: function (button) {
        this.lookup('billToPayGrid').saveDocumentAs({
            title: 'Contas a Pagar',
            type: 'excel',
            fileName: 'relatorio.xlsx'
        });
    }
})