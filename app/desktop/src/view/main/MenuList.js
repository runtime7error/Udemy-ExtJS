Ext.define('Financial.view.main.MenuList',{
    extend: 'Ext.list.Tree',
    alias: 'widget.menulist',
    ui: 'nav',
    scrollable: true,
    bind:{
        store: '{menu}'
    }
})