// app/modules/wishlists/records/WishlistRecommendationRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
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
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var5 = var7.bind(var1)(var2);
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = 'WISHLIST';
    var2['WISHLIST'] = var7;
    var7 = 'RECOMMENDATION';
    var2['RECOMMENDATION'] = var7;
    var4 = function(arg1) {
        var5 = function WishlistRecommendationRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var6 = this;
                var1 = _closure1_slot0;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot3;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var6 = var3.skus;
                var5 = var6.map;
                var4 = function(arg1) {
                    var3 = _closure1_slot6;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['skus'] = var4;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.fromEntries;
                var8 = var4.Object;
                var7 = var8.entries;
                var4 = var3.skus_to_user_and_reason;
                var8 = var7.bind(var8)(var4);
                var7 = var8.map;
                var4 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var2 = var5().value;
                        var3 = var1;
                        var7 = undefined;
                        var4 = var3 === var7;
                        var3 = undefined;
                        if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = var2;
case 9:
                        var2 = undefined;
                        if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var2 = undefined;
                        var4 = var5;
                        if(var5) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                        var2 = var6;
                        var4 = var5;
case 11:
                        if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var1.return();
case 14:
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4);
                var4 = var5.bind(var6)(var4);
                var1['skusToUserAndReason'] = var4;
                var4 = var3.applications;
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
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
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
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
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/wishlists/records/WishlistRecommendationRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['WishlistRecommendationReason'] = var2;
    return var1;
})();