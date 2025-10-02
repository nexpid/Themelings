// app/modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function processColorStringsInternal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot6;
            var3 = var2.theme;
            var2 = _closure1_slot7;
            var2 = var2.LIGHT;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var8 = var3.bind(var5)(var4);
            var3 = var8.hsl;
            var9 = var3.bind(var8)();
            var8 = _closure1_slot3;
            var3 = 3;
            var10 = var8.bind(var5)(var9, var3);
            var3 = 0;
            var9 = var10[var3];
            var3 = 1;
            var8 = var10[var3];
            var3 = 2;
            var10 = var10[var3];
            var3 = _closure1_slot5;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.hsl;
            var2 = 0.85;
            var2 = var2 * var10;
            var6 = var6.bind(var7)(var9, var8, var2);
            var2 = var6.hex;
            var2 = var2.bind(var6)();
            var2 = var3.bind(var5)(var2);
            return var2;
case 2:
            var3 = _closure1_slot5;
            var1 = null;
            var5 = var1 != var4;
            var2 = undefined;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var4;
case 5:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var5 = function processColorStrings(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = undefined;
            return var1;
case 7:
            var1 = {};
            var4 = _closure1_slot8;
            var5 = var2.primaryColor;
            var3 = undefined;
            var5 = var4.bind(var3)(var5);
            var1['primaryColor'] = var5;
            var5 = var2.secondaryColor;
            var5 = var4.bind(var3)(var5);
            var1['secondaryColor'] = var5;
            var2 = var2.tertiaryColor;
            var2 = var4.bind(var3)(var2);
            var1['tertiaryColor'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function processColorStringsArray(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 8:
            var2 = _closure1_slot9;
            var5 = undefined;
            var2 = var2.bind(var5)(var3);
            var4 = var2.primaryColor;
            var3 = new Array(3);
            var3[0] = var4;
            var4 = var2.secondaryColor;
            var3[1] = var4;
            var2 = var2.tertiaryColor;
            var3[2] = var2;
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
case 9:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.processColor;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot7 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['processColorStrings'] = var5;
    var3['processColorStringsArray'] = var4;
    var4 = function useProcessColorStringsArray(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var7 = null;
            var2 = var7 == var6;
            var8 = undefined;
            if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var8 = var6.primaryColor;
case 10:
            var2 = new Array(3);
            var2[0] = var8;
            var9 = var7 == var6;
            var8 = undefined;
            if(var9) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var8 = var6.secondaryColor;
case 12:
            var2[1] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var5 = var6.tertiaryColor;
case 14:
            var2[2] = var5;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useProcessColorStringsArray'] = var4;
    var4 = function isNativeMessageEligibleForEnhancedRoleColors(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getHasEnhancedRoleColors;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var3 = 'hidden';
            var2 = arg3;
            var1 = var3 !== var2;
case 16:
            return var1;
        }
    };
    var3['isNativeMessageEligibleForEnhancedRoleColors'] = var4;
    var2 = function useIsRoleStyleAndRoleColorsEligibleForERC(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            if(!var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var3 = 'hidden';
            var2 = arg3;
            var1 = var3 !== var2;
case 18:
            if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var2 = arg4;
            var3 = var2.length;
            var2 = 1;
            var1 = var3 > var2;
case 20:
            return var1;
        }
    };
    var3['useIsRoleStyleAndRoleColorsEligibleForERC'] = var2;
    return var1;
})();