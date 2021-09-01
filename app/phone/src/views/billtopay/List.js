Ext.define('Financial.view.billtopay.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.billtopaylist',
    requires: [
        'Ext.dataview.plugin.ListPaging',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh'
    ],
    controller: 'billtopaylistcontroller',
    store: {
        model: 'Financial.model.BillToPay',
        autoLoad: true,
        pageSize: 10
    },
    plugins: {
        listpaging: {
            autoPaging: true
        },
        pullrefresh: true,
        listswiper: {
            left: [{
                iconCls: 'x-fa fa-trash',
                ui: 'action',
                text: 'Excluir',
                commit: 'onExcluirSwiperHandler'
            }]
        }
    },
    itemTpl: new Ext.XTemplate(`
        <div class="testview" style="width: 100%;border: 0px solid green;">
            <table style="width: 100%;border: 0px solid green;" >
                <tr>
                    <td style="font-size: 16px;">
                        <div style="line-height: 20px; font-weight: bold;" class="xitem-title">{description}</div>
                        <div style="line-height: 20px;" class="xitem-caption">{amount:brMoney()}</div>
                        <div style="line-height: 20px;" class="xitem-caption">{due_date:date("d/m/Y")}</div>
                    </td>
                </tr>
            </table>
        </div>         
    `)
})