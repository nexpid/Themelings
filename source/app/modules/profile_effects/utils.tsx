// app/modules/profile_effects/utils.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/utils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = null;
            var4 = var5 == var1;
            var2 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.collectibles;
            var1 = var5 == var6;
            var3 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var6.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var6)(var1);
case 2:
            if(!(var5 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            return var2;
case 5:
            var1 = {};
            var4 = var3.sku_id;
            var1['skuId'] = var4;
            var4 = var3.expires_at;
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = global;
            var5 = var6.Math;
            var4 = var5.floor;
            var7 = var6.Date;
            var8 = var3.expires_at;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var3 = new var9[var7](var8, var7);
            var6 = var3 instanceof Object ? var3 : var6;
            var3 = var6.getTime;
            var6 = var3.bind(var6)();
            var3 = 1000;
            var3 = var6 / var3;
            var2 = var4.bind(var5)(var3);
case 7:
            var1['expiresAt'] = var2;
            return var1;
        }
    };
    var3['parseUserProfileEffect'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = var1.zIndex;
                var4 = null;
                var5 = var4 != var3;
                var1 = 0;
                if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = var3;
case 9:
                var3 = arg2;
                var3 = var3.zIndex;
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var2 = var3;
case 11:
                var1 = var1 - var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortEffectLayers'] = var4;
    var2 = function(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.cloneDeep;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                var6 = var2.effects;
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var6 = arg1;
                        var1 = arg2;
                        var3 = var1.randomizedSources;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 9:
                        var1 = var3.length;
case 15:
                        var2 = var2 != var1;
                        var3 = 0;
                        var5 = 0;
                        if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var5 = var1;
case 16:
                        var1 = var6;
                        if(!(var5 > var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var2 = var5;
                        if(!(var3 !== var6)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.min;
                        var2 = var3.bind(var4)(var6, var5);
case 20:
                        var1 = var2;
case 18:
                        return var1;
                    }
                };
                var7 = 0;
                var4 = var5.bind(var6)(var4, var7);
                var9 = 1;
                var4 = var4 - var9;
                var8 = global;
                var6 = var8.Math;
                var5 = var6.floor;
                var10 = var8.Math;
                var8 = var10.random;
                var8 = var8.bind(var10)();
                var4 = var4 - var7;
                var4 = var4 + var9;
                var4 = var8 * var4;
                var4 = var4 + var7;
                var4 = var5.bind(var6)(var4);
                var _closure3_slot0 = var4;
                var5 = var2.effects;
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.randomizedSources;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 14:
                        var3 = var1.randomizedSources;
                        var4 = var3.length;
                        var3 = 0;
                        var2 = var4 > var3;
case 22:
                        if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var3 = var1.randomizedSources;
                        var2 = _closure3_slot0;
                        var2 = var3[var2];
                        var2 = var2.src;
                        var1['src'] = var2;
case 23:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2['effects'] = var3;
                return var2;
case 13:
                var1 = _closure2_slot0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePotentiallyRandomizedConfig'] = var2;
    return var1;
})();