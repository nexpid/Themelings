// app/modules/wishlists/records/WishlistRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.SKUProductLines;
    var _closure1_slot10 = var7;
    var2 = function(arg1) {
        var5 = function WishlistRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var4 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var5, var4);
                var1 = _closure1_slot3;
                var10 = var1.bind(var2)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var2);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var2)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var4.bind(var2)(var5, var1);
                var4 = var3.id;
                var1['id'] = var4;
                var4 = var3.userId;
                var1['userId'] = var4;
                var4 = var3.items;
                var1['items'] = var4;
                var3 = var3.applications;
                var4 = null;
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var2 = var3;
case 9:
                var1['applications'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var6 = {};
        var2 = 'getSkuIds';
        var6['key'] = var2;
        var2 = function value() {
            var1 = this;
            var3 = var1.items;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.skuId;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = {};
        var7 = 'hasSkuId';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = this;
            var3 = var2.items;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'getProductLines';
        var6['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Set;
            var1 = this;
            var4 = var1.items;
            var2 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.skuProductLine;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'fromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var8 = var3.user_id;
                var4 = var3.wishlist_items;
                var5 = null;
                var2 = Object.create(var5);
                var1 = 0;
                var2['user_id'] = var1;
                var2['wishlist_items'] = var1;
                var11 = {};
                var10 = var3;
                var9 = var2;
                var2 = copyDataProperties(var11, var10, var9);
                var3 = var4.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.sku_product_line;
                        var2 = _closure1_slot10;
                        var2 = var2.COLLECTIBLES;
                        if(!(var2 !== var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2 = _closure1_slot10;
                        var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                        if(!(var2 !== var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var2 = _closure1_slot10;
                        var2 = var2.PREMIUM;
                        if(!(var2 !== var4)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var4 = _closure1_slot6;
                        var2 = var4.fromServer;
                        var2 = var2.bind(var4)(var3);
                        return var2;
case 15:
                        var4 = _closure1_slot8;
                        var2 = var4.fromServer;
                        var2 = var2.bind(var4)(var3);
                        return var2;
case 13:
                        var4 = _closure1_slot9;
                        var2 = var4.fromServer;
                        var2 = var2.bind(var4)(var3);
                        return var2;
case 11:
                        var2 = _closure1_slot7;
                        var1 = var2.fromServer;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var7 = var3.bind(var4)(var1);
                var3 = _closure2_slot0;
                var1 = {};
                var11 = var1;
                var10 = var2;
                var4 = copyDataProperties(var11, var10);
                var4 = 'userId';
                var1[var4] = var8;
                var4 = 'items';
                var1[var4] = var7;
                var8 = var2.applications;
                var7 = var5 == var8;
                var2 = undefined;
                if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var7 = var8.map;
                var6 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var7.bind(var8)(var6);
case 17:
                var5 = var5 != var2;
                var4 = undefined;
                if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var4 = var2;
case 19:
                var2 = 'applications';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/records/WishlistRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();