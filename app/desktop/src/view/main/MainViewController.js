Ext.define('Financial.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',

    routes: {
        ':xtype': {
            action: 'mainRoute'
        }
    },

    mainRoute: function (xtype) {
        console.log('MainRoute - Procurar pelo componente >>>>' + xtype);
        /**
         * Procurar se existe o componente e exibir no center panel
         */
        var centerView = this.lookup('centerview'),
            navigationview = this.lookup('navigationview'),
            menuList = this.lookup('menuList'),
            exists = Ext.ClassManager.getByAlias('widget.' + xtype),
            node;

        //Verificar se a classe solicitada existe
        if (exists === undefined) {
            console.log(xtype + ' Não existe')
            return;
        }

        //Verificar se o store está disponivel
        if (!menuList.getStore()) {
            console.log('Não existe store para o menu list')
            return;
        }

        node = menuList.getStore().findNode('xtype', xtype);

        if (node == null) {
            console.log('Rota não existe para : ' + xtype)
            return;
        }

        if (!centerView.getComponent(xtype)) {
            centerView.add({
                xtype: xtype,
                itemId: xtype
            });
        }
        centerView.setActiveItem(xtype);
        menuList.setSelection(node);

    },


    onMenuSelectionChange: function (tree, node) {
        console.log('Item cliente foi > ' + node.get('text'));


        this.redirectTo(node.get('xtype'));

    }


})
