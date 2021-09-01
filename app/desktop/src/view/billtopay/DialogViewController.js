Ext.define('Financial.view.billtopay.DialogViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaydialogcontroller',


    onSaveHandler: function (button) {
        /**
         * Validar o formulário, Salvar o registro, recarregar so store da grid se ouver e fechar a janela
         */
        var me = this,
            form = me.lookup('form'),
            dialog = me.getView(),
            vm = me.getViewModel(),
            gridView = vm.get('gridView'),
            record = vm.get('record');

        if (record.isValid()) {
            dialog.mask('Salvando, aguarde...');
            record.save({
                callback: function (record) {
                    dialog.unmask();
                    if (gridView) {
                        gridView.getStore().reload();
                        Ext.toast('Registro salvo com sucesso!!', 4000);
                        dialog.close();
                    }
                }
            });
        } else {
            form.validate();
        }
    },

    onDeleteHandler: function (button) {
        var me = this,
            vm = me.getViewModel(),
            dialog = me.getView(),
            record = vm.get('record');

        Ext.Msg.confirm('Confirmação', 'Deseja realmente excluir?', function (option) {
            if (option === 'yes') {
                dialog.mask('Excluindo, aguarde...');
                record.erase({
                    callback: function (record) {
                        dialog.unmask();
                        if (record.dropped) {
                            Ext.toast('Exclusão realizada com sucesso!', 4000);
                            dialog.close();
                        } else {
                            record.reject();
                        }
                    }
                });
            }
        });
    }
})