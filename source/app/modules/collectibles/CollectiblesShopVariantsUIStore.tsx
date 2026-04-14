// app/modules/collectibles/CollectiblesShopVariantsUIStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createWithEqualityFn;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.shallow;
    var4 = function() {
        var1 = {};
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['selectionStates'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4, var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesShopVariantsUIStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var5.bind(var4)(var1);
            var1 = var5.useDefaultVariantIndex;
            var1 = var1.bind(var5)(var6);
            var3 = _closure1_slot2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.getIsVariantProduct;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var1 = null;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = arg1;
                    var6 = var5.selectionStates;
                    var5 = var6.get;
                    var3 = _closure2_slot0;
                    var3 = var3.storeListingId;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = var3.selectedVariantIndex;
case 5:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = 0;
            var1 = var3.bind(var4)(var2, var5);
case 7:
            return var1;
        }
    };
    var3['useSelectedVariantIndex'] = var4;
    var2 = function(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var4 = var3.selectionStates;
                var2 = var4.get;
                var1 = _closure2_slot0;
                var1 = var1.storeListingId;
                var1 = var2.bind(var4)(var1);
                var2 = null;
                var2 = var2 == var1;
                var4 = undefined;
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = var1.selectedVariantIndex;
case 9:
                var2 = _closure2_slot1;
                var1 = var3;
                if(!(var4 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = {};
                var4 = global;
                var5 = var4.Map;
                var9 = var3.selectionStates;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var10 = var4;
                var3 = new var10[var5](var9, var8);
                var6 = var3 instanceof Object ? var3 : var4;
                var5 = var6.set;
                var3 = _closure2_slot0;
                var4 = var3.storeListingId;
                var3 = {};
                var7 = _closure2_slot1;
                var3['selectedVariantIndex'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2['selectionStates'] = var3;
                var1 = var2;
case 11:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['setSelectedVariantIndex'] = var2;
    return var1;
})();