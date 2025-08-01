// app/records/SubscriptionInvoiceRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function SubscriptionInvoiceRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.invoiceItems;
                var1['invoiceItems'] = var3;
                var3 = var2.total;
                var1['total'] = var3;
                var3 = var2.subtotal;
                var1['subtotal'] = var3;
                var3 = var2.currency;
                var1['currency'] = var3;
                var3 = var2.tax;
                var1['tax'] = var3;
                var3 = var2.taxInclusive;
                var1['taxInclusive'] = var3;
                var3 = var2.subscriptionPeriodStart;
                var1['subscriptionPeriodStart'] = var3;
                var3 = var2.subscriptionPeriodEnd;
                var1['subscriptionPeriodEnd'] = var3;
                var2 = var2.status;
                var1['status'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'createInvoiceFromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var7 = var2.invoice_items;
                var4 = null;
                var5 = var4 == var7;
                var9 = undefined;
                var4 = undefined;
                if(var5) { _fun0003_ip = 81; continue _fun0003 }
 42:
                var6 = var7.map;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 6;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.createInvoiceItemFromServer;
                var4 = var6.bind(var7)(var5);
 81:
                var1['invoiceItems'] = var4;
                var4 = var2.total;
                var1['total'] = var4;
                var4 = var2.subtotal;
                var1['subtotal'] = var4;
                var4 = var2.currency;
                var1['currency'] = var4;
                var4 = var2.tax;
                var1['tax'] = var4;
                var4 = var2.tax_inclusive;
                var1['taxInclusive'] = var4;
                var4 = global;
                var7 = var4.Date;
                var11 = var2.subscription_period_start;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var12 = var6;
                var5 = new var12[var7](var11, var10);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['subscriptionPeriodStart'] = var5;
                var6 = var4.Date;
                var11 = var2.subscription_period_end;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var12 = var5;
                var4 = new var12[var6](var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['subscriptionPeriodEnd'] = var4;
                var2 = var2.status;
                var1['status'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/SubscriptionInvoiceRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();