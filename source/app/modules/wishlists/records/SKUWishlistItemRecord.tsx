// app/modules/wishlists/records/SKUWishlistItemRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var5 = function SKUWishlistItemRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var10 = new Array(1);
                var10[0] = var2;
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.sku;
                var3 = var3.productLine;
                var1['skuProductLine'] = var3;
                var2 = var2.sku;
                var1['sku'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot1;
        var1 = {};
        var2 = 'fromServer';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.createFromServer;
                var1 = var2.sku;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure2_slot0;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var2 = copyDataProperties(var6, var5);
                var2 = 'sku';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var7 = var2;
                var6 = var1;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
case 9:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var6 = 'SKU not found';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var7 = 'fromSKU';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var4 = _closure2_slot0;
                var2 = {};
                var5 = var3.id;
                var2['sku_id'] = var5;
                var5 = var3.productLine;
                var2['sku_product_line'] = var5;
                var5 = var3.name;
                var2['sku_name'] = var5;
                var2['sku'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var7 = var3;
                var6 = var2;
                var2 = new var7[var4](var6, var5);
                var1 = var2 instanceof Object ? var2 : var3;
case 11:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var _closure1_slot6 = var4;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/wishlists/records/SKUWishlistItemRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1) {
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var1 instanceof var2;
        return var1;
    };
    var3['isSKUWishlistItemRecord'] = var2;
    return var1;
})();