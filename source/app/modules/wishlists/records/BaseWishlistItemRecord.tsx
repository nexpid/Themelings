// app/modules/wishlists/records/BaseWishlistItemRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var2 = function(arg1) {
        var5 = function BaseWishlistItemRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.sku_id;
                var1['skuId'] = var3;
                var3 = var2.sku_product_line;
                var1['skuProductLine'] = var3;
                var3 = var2.sku_name;
                var1['skuName'] = var3;
                var3 = var2.is_owned;
                var1['isOwned'] = var3;
                var3 = var2.gifter_user_id;
                var1['gifterUserId'] = var3;
                var2 = var2.sku;
                var1['sku'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var10 = var4.sku_id;
                var9 = var4.sku_product_line;
                var8 = var4.sku_name;
                var7 = var4.is_owned;
                var5 = var4.gifter_user_id;
                var6 = var4.sku;
                var3 = {'sku_id': 0, 'sku_product_line': 0, 'sku_name': 0, 'is_owned': 0, 'gifter_user_id': 0, 'sku': 0};
                var2 = null;
                var13 = var3;
                var12 = null;
                var1 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var4;
                var11 = var3;
                var12 = copyDataProperties(var13, var12, var11);
                var3 = _closure2_slot0;
                var1 = {};
                var13 = var1;
                var4 = copyDataProperties(var13, var12);
                var4 = 'sku_id';
                var1[3] = var10;
                var4 = 'sku_product_line';
                var1[3] = var9;
                var4 = 'sku_name';
                var1[3] = var8;
                var4 = 'is_owned';
                var1[3] = var7;
                var4 = 'gifter_user_id';
                var1[3] = var5;
                var2 = var2 != var6;
                var4 = undefined;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = _closure1_slot5;
                var2 = var5.createFromServer;
                var4 = var2.bind(var5)(var6);
case 9:
                var2 = 'sku';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var14 = var2;
                var13 = var1;
                var1 = new var14[var3](var13, var12);
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
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/records/BaseWishlistItemRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();