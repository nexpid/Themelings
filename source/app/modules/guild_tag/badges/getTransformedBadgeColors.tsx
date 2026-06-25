// app/modules/guild_tag/badges/getTransformedBadgeColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = function transformGuildBadgeColors(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 0;
            var6 = var4[var7];
            var4 = undefined;
            var8 = var8.bind(var4)(var6);
            var6 = var8.valid;
            var6 = var6.bind(var8)(var5);
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var3.map;
            var6 = function() {
                var1 = '#000000';
                return var1;
            };
            var6 = var8.bind(var3)(var6);
            return var6;
case 2:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var4 = var2.bind(var4)(var5);
            var _closure2_slot1 = var4;
            var2 = var4.luminance;
            var2 = var2.bind(var4)();
            var _closure2_slot2 = var2;
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                var6 = arg2;
                var3 = _closure2_slot1;
                var2 = var3.luminance;
                var1 = _closure2_slot0;
                var5 = var1[var6];
                var7 = var5.base;
                var5 = arg1;
                var5 = var5 * var7;
                var7 = _closure2_slot2;
                var4 = var1[var6];
                var4 = var4.tint;
                var4 = var7 * var4;
                var4 = var5 + var4;
                var5 = var1[var6];
                var5 = var5.base;
                var1 = var1[var6];
                var1 = var1.tint;
                var1 = var5 + var1;
                var1 = var4 / var1;
                var2 = var2.bind(var3)(var1);
                var1 = var2.hex;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/badges/getTransformedBadgeColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTransformedBadgeColors(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.primaryBaseColors;
            var11 = var2.primaryTintColor;
            var10 = var2.primaryTintLuminances;
            var9 = var2.primaryLuminanceWeights;
            var1 = var2.secondaryBaseColors;
            var8 = var2.secondaryTintColor;
            var7 = var2.secondaryTintLuminances;
            var6 = var2.secondaryLuminanceWeights;
            var4 = null;
            if(!(var4 != var11)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot2;
            var2 = undefined;
            var3 = var5.bind(var2)(var10, var11, var9);
case 4:
            var2 = new Array(0);
            var5 = var4 != var1;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var4 != var7;
case 6:
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var4 != var6;
case 8:
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(!(var4 != var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot2;
            var4 = undefined;
            var1 = var5.bind(var4)(var7, var8, var6);
case 12:
            var2 = var1;
case 10:
            var1 = {};
            var1['primaryColorsTransformed'] = var3;
            var1['secondaryColorsTransformed'] = var2;
            return var1;
        }
    };
    var3['getTransformedBadgeColors'] = var2;
    return var1;
})();