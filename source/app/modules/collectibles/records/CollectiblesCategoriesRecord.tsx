// app/modules/collectibles/records/CollectiblesCategoriesRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesUserDiscountRecord;
    var _closure1_slot3 = var4;
    var2 = function() {
        var5 = function CollectiblesCategoriesRecord(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot0;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var7 = var2.categories;
                var6 = var7.map;
                var5 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = var3.fromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var3['categories'] = var5;
                var6 = var2.user_discounts;
                var2 = null;
                var5 = var2 == var6;
                var2 = undefined;
                if(var5) { _fun0001_ip = 89; continue _fun0001 }
 74:
                var5 = var6.map;
                var4 = function(arg1) {
                    var3 = _closure1_slot3;
                    var2 = var3.fromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var5.bind(var6)(var4);
 89:
                var3['userDiscounts'] = var2;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesCategoriesRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CollectiblesCategoriesRecord'] = var2;
    return var1;
})();