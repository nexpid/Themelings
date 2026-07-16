// app/modules/calls/native/useVideoTileGradientColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function rgbToHex(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = var7[Symbol.iterator];
            var7 = var1().next;
            var2 = var7().value;
            var4 = var1;
            var3 = undefined;
            var6 = var4 === var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2;
case 2:
            var4 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var7().value;
            var2 = var1;
            var2 = var2 === var3;
            var4 = undefined;
            var6 = var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var8;
            var6 = var2;
case 4:
            var2 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var7().value;
            var7 = var1;
            var7 = var7 === var3;
            var2 = undefined;
            var6 = var7;
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var2 = var8;
            var6 = var7;
case 7:
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1.return();
case 10:
            var1 = function toHex(arg1) {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.max;
                var6 = var1.Math;
                var5 = var6.min;
                var2 = 255;
                var1 = arg1;
                var2 = var5.bind(var6)(var2, var1);
                var1 = 0;
                var3 = var3.bind(var4)(var1, var2);
                var2 = var3.toString;
                var1 = 16;
                var4 = var2.bind(var3)(var1);
                var3 = var4.padStart;
                var2 = 2;
                var1 = '0';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var1.bind(var3)(var5);
            var4 = var1.bind(var3)(var4);
            var3 = var1.bind(var3)(var2);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var1 = var2.bind(var1)(var5, var4, var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var4 = function computeVideoTileGradientStops(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var9 = arg2;
            var1 = null;
            if(!(var1 != var11)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(!(var1 != var9)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 2;
            var2 = var2[var10];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.getProfileTheme;
            var14 = var2.bind(var4)(var11);
            if(!(var1 == var14)) { _fun0002_ip = 15; continue _fun0002 }
case 8:
            var2 = _closure1_slot3;
            var14 = var2.DARK;
case 15:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var2 = var7[var4];
            var12 = var8.bind(var5)(var2);
            var6 = var12.int2rgbArray;
            var2 = var7[var10];
            var13 = var8.bind(var5)(var2);
            var2 = var13.calculateModalV2BackgroundColor;
            var2 = var2.bind(var13)(var11, var9, var14);
            var12 = var6.bind(var12)(var2);
            var2 = var7[var4];
            var6 = var8.bind(var5)(var2);
            var2 = var6.int2rgbArray;
            var2 = var2.bind(var6)(var11);
            var4 = var7[var4];
            var6 = var8.bind(var5)(var4);
            var4 = var6.int2rgbArray;
            var4 = var4.bind(var6)(var9);
            var6 = var7[var10];
            var15 = var8.bind(var5)(var6);
            var14 = var15.getValueInColorGradientByPercentage;
            var6 = 0;
            var9 = var12[var6];
            var13 = new Array(3);
            var13[0] = var9;
            var11 = 1;
            var9 = var12[var11];
            var13[1] = var9;
            var9 = var12[var10];
            var13[2] = var9;
            var16 = var2[var6];
            var9 = new Array(3);
            var9[0] = var16;
            var16 = var2[var11];
            var9[1] = var16;
            var2 = var2[var10];
            var9[2] = var2;
            var2 = 20;
            var2 = var14.bind(var15)(var13, var9, var2);
            var7 = var7[var10];
            var9 = var8.bind(var5)(var7);
            var8 = var9.getValueInColorGradientByPercentage;
            var13 = var12[var6];
            var7 = new Array(3);
            var7[0] = var13;
            var13 = var12[var11];
            var7[1] = var13;
            var12 = var12[var10];
            var7[2] = var12;
            var12 = var4[var6];
            var6 = new Array(3);
            var6[0] = var12;
            var11 = var4[var11];
            var6[1] = var11;
            var4 = var4[var10];
            var6[2] = var4;
            var4 = 60;
            var4 = var8.bind(var9)(var7, var6, var4);
            var3 = _closure1_slot4;
            var6 = var3.bind(var5)(var2);
            var2 = new Array(2);
            var2[0] = var6;
            var3 = var3.bind(var5)(var4);
            var2[1] = var3;
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/native/useVideoTileGradientColors.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeVideoTileGradientStops'] = var4;
    var2 = function useVideoTileGradientColors(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useVideoTileGradientColors'] = var2;
    return var1;
})();