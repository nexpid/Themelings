// discord_common/js/packages/tokens/transforms.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = function interpolate(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg3;
            var4 = arg1;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var2 = var4().value;
            var3 = var1;
            var10 = undefined;
            var3 = var3 === var10;
            var5 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2;
case 2:
            var2 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var4().value;
            var4 = var1;
            var4 = var4 === var10;
            var2 = undefined;
            var3 = var4;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var7;
            var3 = var4;
case 4:
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1.return();
case 7:
            var8 = arg2;
            var1 = var8[Symbol.iterator];
            var8 = var1().next;
            var7 = var8().value;
            var3 = var1;
            var3 = var3 === var10;
            var4 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var7;
case 9:
            var7 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var8().value;
            var8 = var1;
            var8 = var8 === var10;
            var7 = undefined;
            var3 = var8;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var7 = var9;
            var3 = var8;
case 11:
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1.return();
case 14:
            var3 = var5 + var2;
            var1 = 2;
            var3 = var3 / var1;
            var1 = var3;
            if(!(var6 !== var1)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!(!(var6 < var3))) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var6 - var3;
            var2 = var2 - var3;
            var7 = var7 - var3;
            var2 = var8 / var2;
            var2 = var2 * var7;
            var2 = var3 + var2;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var6 = var6 - var5;
            var5 = var3 - var5;
            var5 = var6 / var5;
            var3 = var3 - var4;
            var3 = var5 * var3;
            var2 = var4 + var3;
case 20:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = {};
    var5 = '*0.975';
    var1['BACKGROUND_LIGHTNESS_LIGHT_THEME'] = var5;
    var5 = '*1.6';
    var1['BACKGROUND_LIGHTNESS_DARK_THEME'] = var5;
    var5 = '*0.8';
    var1['BACKGROUND_SATURATION'] = var5;
    var5 = '*1.05';
    var1['TEXT_LIGHTNESS_LIGHT_THEME'] = var5;
    var6 = 0.85;
    var1['TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME'] = var6;
    var5 = 'TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME';
    var1[var6] = var5;
    var6 = 0.6;
    var1['TEXT_LIGHTNESS_MAX_DARK_THEME'] = var6;
    var5 = 'TEXT_LIGHTNESS_MAX_DARK_THEME';
    var1[var6] = var5;
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = 0.3;
    var1['BORDER_MIN_OPACITY'] = var6;
    var5 = 'BORDER_MIN_OPACITY';
    var1[var6] = var5;
    var5 = '*0.6';
    var1['TEXT_LIGHTNESS_LIGHT_THEME'] = var5;
    var5 = '*1.5';
    var1['TEXT_LIGHTNESS_DARK_THEME'] = var5;
    var5 = '*2';
    var1['TEXT_SATURATION'] = var5;
    var5 = '*0.9';
    var1['BACKGROUND_LIGHTNESS_DARK_THEME'] = var5;
    var _closure1_slot3 = var1;
    var1 = [0, 2];
    var _closure1_slot4 = var1;
    var1 = [1.3, 0.7];
    var _closure1_slot5 = var1;
    var1 = [0.98, 1];
    var _closure1_slot6 = var1;
    var1 = [0.75, 1.5];
    var _closure1_slot7 = var1;
    var1 = [1.45, 0.45];
    var _closure1_slot8 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/tokens/transforms.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function transformColorForReducedContrast(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var3 = arg3;
            var1 = 'background';
            if(!(var1 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = 'border';
            if(!(var1 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            return var5;
case 24:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var6 = var1.bind(var2)(var5);
            var1 = var6.get;
            var4 = 'hsl.l';
            var11 = var1.bind(var6)(var4);
            var2 = var6.set;
            var1 = 'light';
            if(!(var1 !== var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var1 = global;
            var10 = var1.Math;
            var9 = var10.max;
            var1 = _closure1_slot2;
            var8 = var1.TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME;
            var8 = var11 * var8;
            var1 = var1.TEXT_LIGHTNESS_MAX_DARK_THEME;
            var1 = var9.bind(var10)(var8, var1);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var7 = _closure1_slot2;
            var1 = var7.TEXT_LIGHTNESS_LIGHT_THEME;
case 28:
            var2 = var2.bind(var6)(var4, var1);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
case 21:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var5 = var2.bind(var4)(var5);
            var4 = var5.set;
            var2 = 'light';
            if(!(var2 !== var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = _closure1_slot2;
            var3 = var2.BACKGROUND_LIGHTNESS_LIGHT_THEME;
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var2 = _closure1_slot2;
            var3 = var2.BACKGROUND_LIGHTNESS_DARK_THEME;
case 31:
            var2 = 'hsl.l';
            var4 = var4.bind(var5)(var2, var3);
            var3 = var4.set;
            var1 = _closure1_slot2;
            var2 = var1.BACKGROUND_SATURATION;
            var1 = 'hsl.s';
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['transformColorForReducedContrast'] = var4;
    var4 = function transformColorForIncreasedContrast(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = arg3;
            var6 = arg4;
            var1 = 'border';
            if(!(var1 !== var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
case 23:
            var1 = 'background';
            if(!(var1 === var2)) { _fun0003_ip = 35; continue _fun0003 }
case 25:
            var1 = 'light';
            if(!(var1 === var6)) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var4;
            _fun0003_ip = 37; continue _fun0003;
case 36:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 0;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var8 = var5.bind(var7)(var3);
            var7 = var8.set;
            var2 = _closure1_slot3;
            var5 = var2.BACKGROUND_LIGHTNESS_DARK_THEME;
            var2 = 'hsl.l';
            var5 = var7.bind(var8)(var2, var5);
            var2 = var5.hex;
            var5 = var2.bind(var5)();
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var4;
            var1 = var2;
case 37:
            _fun0003_ip = 38; continue _fun0003;
case 34:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 0;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var8 = var5.bind(var7)(var3);
            var7 = var8.set;
            var5 = 'light';
            if(!(var5 !== var6)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var5 = _closure1_slot3;
            var6 = var5.TEXT_LIGHTNESS_DARK_THEME;
            _fun0003_ip = 41; continue _fun0003;
case 39:
            var5 = _closure1_slot3;
            var6 = var5.TEXT_LIGHTNESS_LIGHT_THEME;
case 41:
            var5 = 'hsl.l';
            var7 = var7.bind(var8)(var5, var6);
            var6 = var7.set;
            var2 = _closure1_slot3;
            var5 = var2.TEXT_SATURATION;
            var2 = 'hsl.s';
            var5 = var6.bind(var7)(var2, var5);
            var2 = var5.hex;
            var5 = var2.bind(var5)();
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var4;
            var1 = var2;
case 38:
            _fun0003_ip = 42; continue _fun0003;
case 32:
            var2 = new Array(2);
            var2[0] = var3;
            var3 = _closure1_slot3;
            var3 = var3.BORDER_MIN_OPACITY;
            var3 = var3 + var4;
            var2[1] = var3;
            var1 = var2;
case 42:
            return var1;
        }
    };
    var3['transformColorForIncreasedContrast'] = var4;
    var4 = function transformColorForReducedSaturation(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var1 = var3[var1];
            var11 = undefined;
            var2 = var2.bind(var11)(var1);
            var1 = arg1;
            var4 = var2.bind(var11)(var1);
            var2 = 'background';
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0004_ip = 12; continue _fun0004 }
case 43:
            var3 = var4.set;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '*';
            var2 = var2.bind(var1)(var5);
            var1 = 'hsl.s';
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
case 12:
            var7 = [0, 1];
            var1 = var7[Symbol.iterator];
            var7 = var1().next;
            var3 = var7().value;
            var2 = var1;
            var2 = var2 === var11;
            var6 = undefined;
            if(var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var6 = var3;
case 44:
            var3 = undefined;
            if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var8 = var7().value;
            var7 = var1;
            var7 = var7 === var11;
            var3 = undefined;
            var2 = var7;
            if(var7) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            var3 = var8;
            var2 = var7;
case 46:
            if(var2) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var1.return();
case 49:
            var9 = [0.25, 1];
            var7 = var9[Symbol.iterator];
            var9 = var7().next;
            var1 = var9().value;
            var2 = var7;
            var8 = var2 === var11;
            var2 = undefined;
            if(var8) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = var1;
case 51:
            var1 = undefined;
            if(var8) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var10 = var9().value;
            var9 = var7;
            var9 = var9 === var11;
            var1 = undefined;
            var8 = var9;
            if(var9) { _fun0004_ip = 53; continue _fun0004 }
case 55:
            var1 = var10;
            var8 = var9;
case 53:
            if(var8) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var7.return();
case 56:
            var5 = var5 - var6;
            var3 = var3 - var6;
            var3 = var5 / var3;
            var1 = var1 - var2;
            var1 = var3 * var1;
            var5 = var2 + var1;
            var3 = var4.set;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '*';
            var2 = var2.bind(var1)(var5);
            var1 = 'hsl.s';
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['transformColorForReducedSaturation'] = var4;
    var2 = function transformColorContrast(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var9 = arg3;
            var7 = arg4;
            var1 = 'background';
            if(!(var1 !== var3)) { _fun0005_ip = 58; continue _fun0005 }
case 33:
            var1 = 'border';
            if(!(var1 !== var3)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var1 = 'text';
            if(!(var1 !== var3)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            return var2;
case 60:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var8 = undefined;
            var1 = var3.bind(var8)(var1);
            var5 = var1.bind(var8)(var2);
            var4 = var5.set;
            var6 = _closure1_slot9;
            var3 = _closure1_slot4;
            var1 = 'light';
            if(!(var1 !== var9)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var1 = _closure1_slot7;
            _fun0005_ip = 64; continue _fun0005;
case 62:
            var1 = _closure1_slot8;
case 64:
            var6 = var6.bind(var8)(var3, var1, var7);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '*';
            var3 = var3.bind(var1)(var6);
            var1 = 'hsl.l';
            var3 = var4.bind(var5)(var1, var3);
            var1 = var3.hex;
            var1 = var1.bind(var3)();
            return var1;
case 58:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var4 = var1.bind(var6)(var2);
            var3 = var4.set;
            var5 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = 'light';
            if(!(var1 !== var9)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var1 = _closure1_slot5;
            _fun0005_ip = 67; continue _fun0005;
case 65:
            var1 = _closure1_slot6;
case 67:
            var5 = var5.bind(var6)(var2, var1, var7);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '*';
            var2 = var2.bind(var1)(var5);
            var1 = 'hsl.l';
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['transformColorContrast'] = var2;
    return var1;
})();