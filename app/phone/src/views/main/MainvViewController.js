Ext.define('Financial.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',

    routes: {
        ':xtype': {
            action: 'mainRoute'
        }
    },

    init: function () {
        this.redirectTo('homeview', true)
    },

    onMenuClick: function (button) {
        Ext.Viewport.toggleMenu('left');
        Ext.getCmp('main-toolbar').setTitle(button.getText());
        this.redirectTo(button.tag);
    },

    mainRoute: function (xtype) {
        var exists = Ext.ClassManager.getByAlias('widget.' + xtype);

        if (exists === undefined) {
            console.log(xtype + ' não existe.')
            return;
        }

        var centerView = Ext.getCmp('main-view');
        if (!centerView.getComponent(xtype)) {
            centerView.add({xtype: xtype})
        }
        centerView.setActiveItem(xtype);
    }
});