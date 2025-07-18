// discord_common/js/packages/tokens/transforms.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = function interpolate(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg3;
            var4 = arg1;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var2 = var4().value;
            var3 = var1;
            var10 = undefined;
            var3 = var3 === var10;
            var5 = undefined;
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
 27:
            var5 = var2;
 30:
            var2 = undefined;
            if(var3) { _fun0001_ip = 60; continue _fun0001 }
 35:
            var7 = var4().value;
            var4 = var1;
            var4 = var4 === var10;
            var2 = undefined;
            var3 = var4;
            if(var4) { _fun0001_ip = 60; continue _fun0001 }
 54:
            var2 = var7;
            var3 = var4;
 60:
            if(var3) { _fun0001_ip = 66; continue _fun0001 }
 63:
            var1.return();
 66:
            var8 = arg2;
            var1 = var8[Symbol.iterator];
            var8 = var1().next;
            var7 = var8().value;
            var3 = var1;
            var3 = var3 === var10;
            var4 = undefined;
            if(var3) { _fun0001_ip = 91; continue _fun0001 }
 88:
            var4 = var7;
 91:
            var7 = undefined;
            if(var3) { _fun0001_ip = 121; continue _fun0001 }
 96:
            var9 = var8().value;
            var8 = var1;
            var8 = var8 === var10;
            var7 = undefined;
            var3 = var8;
            if(var8) { _fun0001_ip = 121; continue _fun0001 }
 115:
            var7 = var9;
            var3 = var8;
 121:
            if(var3) { _fun0001_ip = 127; continue _fun0001 }
 124:
            var1.return();
 127:
            var3 = var5 + var2;
            var1 = 2;
            var3 = var3 / var1;
            var1 = var3;
            if(!(var6 !== var1)) { _fun0001_ip = 202; continue _fun0001 }
 145:
            if(!(!(var6 < var3))) { _fun0001_ip = 175; continue _fun0001 }
 149:
            var8 = var6 - var3;
            var2 = var2 - var3;
            var7 = var7 - var3;
            var2 = var8 / var2;
            var2 = var2 * var7;
            var2 = var3 + var2;
            _fun0001_ip = 199; continue _fun0001;
 175:
            var6 = var6 - var5;
            var5 = var3 - var5;
            var5 = var6 / var5;
            var3 = var3 - var4;
            var3 = var5 * var3;
            var2 = var4 + var3;
 199:
            var1 = var2;
 202:
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
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/tokens/transforms.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function transformColorForReducedContrast(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = arg2;
            var3 = arg3;
            var1 = 'background';
            if(!(var1 !== var2)) { _fun0002_ip = 167; continue _fun0002 }
 20:
            var1 = 'border';
            if(!(var1 !== var2)) { _fun0002_ip = 167; continue _fun0002 }
 31:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0002_ip = 41; continue _fun0002 }
 39:
            return var5;
 41:
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
            if(!(var1 !== var3)) { _fun0002_ip = 140; continue _fun0002 }
 99:
            var1 = global;
            var10 = var1.Math;
            var9 = var10.max;
            var1 = _closure1_slot2;
            var8 = var1.TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME;
            var8 = var11 * var8;
            var1 = var1.TEXT_LIGHTNESS_MAX_DARK_THEME;
            var1 = var9.bind(var10)(var8, var1);
            _fun0002_ip = 150; continue _fun0002;
 140:
            var7 = _closure1_slot2;
            var1 = var7.TEXT_LIGHTNESS_LIGHT_THEME;
 150:
            var2 = var2.bind(var6)(var4, var1);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
 167:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var5 = var2.bind(var4)(var5);
            var4 = var5.set;
            var2 = 'light';
            if(!(var2 !== var3)) { _fun0002_ip = 221; continue _fun0002 }
 209:
            var2 = _closure1_slot2;
            var3 = var2.BACKGROUND_LIGHTNESS_LIGHT_THEME;
            _fun0002_ip = 231; continue _fun0002;
 221:
            var2 = _closure1_slot2;
            var3 = var2.BACKGROUND_LIGHTNESS_DARK_THEME;
 231:
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
 0:
            var3 = arg1;
            var4 = arg2;
            var2 = arg3;
            var6 = arg4;
            var1 = 'border';
            if(!(var1 !== var2)) { _fun0003_ip = 275; continue _fun0003 }
 23:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0003_ip = 146; continue _fun0003 }
 31:
            var1 = 'background';
            if(!(var1 === var2)) { _fun0003_ip = 47; continue _fun0003 }
 39:
            var1 = 'light';
            if(!(var1 === var6)) { _fun0003_ip = 61; continue _fun0003 }
 47:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var4;
            _fun0003_ip = 141; continue _fun0003;
 61:
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
 141:
            _fun0003_ip = 273; continue _fun0003;
 146:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 0;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var8 = var5.bind(var7)(var3);
            var7 = var8.set;
            var5 = 'light';
            if(!(var5 !== var6)) { _fun0003_ip = 200; continue _fun0003 }
 188:
            var5 = _closure1_slot3;
            var6 = var5.TEXT_LIGHTNESS_DARK_THEME;
            _fun0003_ip = 210; continue _fun0003;
 200:
            var5 = _closure1_slot3;
            var6 = var5.TEXT_LIGHTNESS_LIGHT_THEME;
 210:
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
 273:
            _fun0003_ip = 307; continue _fun0003;
 275:
            var2 = new Array(2);
            var2[0] = var3;
            var3 = _closure1_slot3;
            var3 = var3.BORDER_MIN_OPACITY;
            var3 = var3 + var4;
            var2[1] = var3;
            var1 = var2;
 307:
            return var1;
        }
    };
    var3['transformColorForIncreasedContrast'] = var4;
    var4 = function transformColorForReducedSaturation(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!(var2 !== var1)) { _fun0004_ip = 96; continue _fun0004 }
 46:
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
 96:
            var7 = [0, 1];
            var1 = var7[Symbol.iterator];
            var7 = var1().next;
            var3 = var7().value;
            var2 = var1;
            var2 = var2 === var11;
            var6 = undefined;
            if(var2) { _fun0004_ip = 128; continue _fun0004 }
 125:
            var6 = var3;
 128:
            var3 = undefined;
            if(var2) { _fun0004_ip = 158; continue _fun0004 }
 133:
            var8 = var7().value;
            var7 = var1;
            var7 = var7 === var11;
            var3 = undefined;
            var2 = var7;
            if(var7) { _fun0004_ip = 158; continue _fun0004 }
 152:
            var3 = var8;
            var2 = var7;
 158:
            if(var2) { _fun0004_ip = 164; continue _fun0004 }
 161:
            var1.return();
 164:
            var9 = [0.25, 1];
            var7 = var9[Symbol.iterator];
            var9 = var7().next;
            var1 = var9().value;
            var2 = var7;
            var8 = var2 === var11;
            var2 = undefined;
            if(var8) { _fun0004_ip = 196; continue _fun0004 }
 193:
            var2 = var1;
 196:
            var1 = undefined;
            if(var8) { _fun0004_ip = 226; continue _fun0004 }
 201:
            var10 = var9().value;
            var9 = var7;
            var9 = var9 === var11;
            var1 = undefined;
            var8 = var9;
            if(var9) { _fun0004_ip = 226; continue _fun0004 }
 220:
            var1 = var10;
            var8 = var9;
 226:
            if(var8) { _fun0004_ip = 232; continue _fun0004 }
 229:
            var7.return();
 232:
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
 0:
            var2 = arg1;
            var3 = arg2;
            var9 = arg3;
            var7 = arg4;
            var1 = 'background';
            if(!(var1 !== var3)) { _fun0005_ip = 156; continue _fun0005 }
 23:
            var1 = 'border';
            if(!(var1 !== var3)) { _fun0005_ip = 156; continue _fun0005 }
 34:
            var1 = 'text';
            if(!(var1 !== var3)) { _fun0005_ip = 44; continue _fun0005 }
 42:
            return var2;
 44:
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
            if(!(var1 !== var9)) { _fun0005_ip = 100; continue _fun0005 }
 94:
            var1 = _closure1_slot7;
            _fun0005_ip = 104; continue _fun0005;
 100:
            var1 = _closure1_slot8;
 104:
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
 156:
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
            if(!(var1 !== var9)) { _fun0005_ip = 212; continue _fun0005 }
 206:
            var1 = _closure1_slot5;
            _fun0005_ip = 216; continue _fun0005;
 212:
            var1 = _closure1_slot6;
 216:
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