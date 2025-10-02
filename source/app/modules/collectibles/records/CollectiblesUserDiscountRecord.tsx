// app/modules/collectibles/records/CollectiblesUserDiscountRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var5 = function CollectiblesUserDiscountRecord(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var5 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var3, var2);
                var2 = var4.discount_id;
                var3['discountId'] = var2;
                var2 = var4.amount;
                var3['amount'] = var2;
                var5 = var4.expires_at;
                var2 = null;
                var5 = var2 != var5;
                var2 = undefined;
                if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = global;
                var6 = var5.Date;
                var8 = var4.expires_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var2 = var4 instanceof Object ? var4 : var5;
case 2:
                var3['expiresAt'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var3 = 'fromServer';
        var1['key'] = var3;
        var2 = function value(arg1) {
            var3 = _closure2_slot0;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesUserDiscountRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CollectiblesUserDiscountRecord'] = var2;
    return var1;
})();