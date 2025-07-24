// app/modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = function getMaxColors() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var9 = undefined;
            var3 = var3.bind(var9)(var1);
            var1 = var3.getMobileThemesPresets;
            var1 = var1.bind(var3)();
            var8 = var2.bind(var9)(var1);
            var3 = var8.bind(var9)();
            var2 = var3.done;
            var7 = global;
            var6 = 1;
            var5 = null;
            var4 = var3;
            var3 = 0;
            var1 = 0;
            if(var2) { _fun0004_ip = 151; continue _fun0004 }
 70:
            var2 = var4.value;
            var10 = var2.colors;
            if(!(var5 != var10)) { _fun0004_ip = 113; continue _fun0004 }
 84:
            var11 = var7.Math;
            var10 = var11.max;
            var2 = var2.colors;
            var2 = var2.length;
            var10 = var10.bind(var11)(var2, var3);
            _fun0004_ip = 130; continue _fun0004;
 113:
            var11 = var7.Math;
            var2 = var11.max;
            var10 = var2.bind(var11)(var6, var3);
 130:
            var11 = var8.bind(var9)();
            var2 = var11.done;
            var3 = var10;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0004_ip = 70; continue _fun0004 }
 151:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = function mix(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = 'light';
            var1 = arg1;
            var1 = var2 !== var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var11 = 3;
            var2 = var2[var11];
            var10 = undefined;
            var7 = var3.bind(var10)(var2);
            var2 = var7.prototype;
            var3 = Object.create(var2, {constructor: {value: var7}});
            if(var1) { _fun0005_ip = 76; continue _fun0005 }
 48:
            var4 = 255;
            var12 = arg4;
            var16 = var3;
            var15 = var4;
            var14 = var4;
            var13 = var4;
            var2 = new var16[var7](var15, var14, var13, var12, var11);
            var4 = var2 instanceof Object ? var2 : var3;
            _fun0005_ip = 96; continue _fun0005;
 76:
            var12 = arg3;
            var16 = var3;
            var15 = 0;
            var14 = 0;
            var13 = 0;
            var2 = new var16[var7](var15, var14, var13, var12, var11);
            var4 = var2 instanceof Object ? var2 : var3;
 96:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var7 = var6.bind(var10)(var3);
            var6 = var7.hexToRgb;
            var3 = arg2;
            var3 = var6.bind(var7)(var3);
            var9 = var3.r;
            var8 = var3.g;
            var7 = var3.b;
            var6 = 0.2;
            if(!var1) { _fun0005_ip = 169; continue _fun0005 }
 159:
            var6 = 0.3;
 169:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var2];
            var3 = var3.bind(var10)(var2);
            var2 = var3.mixColors;
            var5 = _closure1_slot1;
            var1 = var1[var11];
            var1 = var5.bind(var10)(var1);
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var16 = var5;
            var15 = var9;
            var14 = var8;
            var13 = var7;
            var12 = var6;
            var1 = new var16[var1](var15, var14, var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var5;
            var2 = var2.bind(var3)(var4, var1);
            var1 = var2.toHexString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function padWithLast(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 15; continue _fun0006 }
 12:
            var5 = 5;
 15:
            var1 = new Array(0);
            var4 = 0;
            var7 = var4 < var5;
            var3 = 1;
            var2 = 100;
            if(!var7) { _fun0006_ip = 105; continue _fun0006 }
 34:
            var7 = var6.length;
            if(!(!(var4 < var7))) { _fun0006_ip = 84; continue _fun0006 }
 43:
            var7 = var6.length;
            var7 = var7 - var3;
            var9 = var6[var7];
            var8 = var1.push;
            var7 = {};
            var9 = var9.hex;
            var7['hex'] = var9;
            var7['stop'] = var2;
            var7 = var8.bind(var1)(var7);
            _fun0006_ip = 98; continue _fun0006;
 84:
            var8 = var1.push;
            var7 = var6[var4];
            var7 = var8.bind(var1)(var7);
 98:
            var4 = var4 + 1;
            if(var4 < var5) { _fun0006_ip = 34; continue _fun0006 }
 105:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function convertBackgroundGradientToAnimatedTheme(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var1 = {};
            var2 = var4.theme;
            var1['theme'] = var2;
            var2 = var4.getName;
            var2 = var2.bind(var4)();
            var1['name'] = var2;
            var6 = var4.midpointPercentage;
            var2 = null;
            var7 = var2 != var6;
            var5 = 50;
            if(!var7) { _fun0007_ip = 71; continue _fun0007 }
 68:
            var5 = var6;
 71:
            var1['midpointPercentage'] = var5;
            var5 = var4.angle;
            var6 = var2 != var5;
            var2 = 0;
            if(!var6) { _fun0007_ip = 94; continue _fun0007 }
 91:
            var2 = var5;
 94:
            var1['angle'] = var2;
            var5 = _closure1_slot7;
            var6 = var4.colors;
            var4 = var6.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var8 = _closure1_slot6;
                var5 = _closure2_slot0;
                var7 = var5.theme;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var6 = undefined;
                var4 = var5.bind(var6)(var4);
                var5 = var4.ColorDetails;
                var4 = var2.token;
                var4 = var5[var4];
                var11 = var4.hex;
                var10 = _closure2_slot1;
                var9 = _closure2_slot2;
                var13 = undefined;
                var12 = var7;
                var3 = var13[var8](var12, var11, var10, var9, var8);
                var1['hex'] = var3;
                var2 = var2.stop;
                var1['stop'] = var2;
                return var1;
            };
            var4 = var4.bind(var6)(var3);
            var2 = _closure1_slot5;
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = var5.bind(var3)(var4, var2);
            var1['colors'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function convertStandardThemeToAnimatedTheme(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var5 = var4.theme;
            var1 = _closure1_slot4;
            var3 = var1.LIGHT;
            var1 = 'light';
            var7 = var1;
            if(!(var3 !== var5)) { _fun0008_ip = 92; continue _fun0008 }
 33:
            var3 = _closure1_slot4;
            var3 = var3.DARK;
            var6 = 'darker';
            var7 = var6;
            if(!(var3 !== var5)) { _fun0008_ip = 92; continue _fun0008 }
 54:
            var3 = _closure1_slot4;
            var3 = var3.DARKER;
            var7 = var6;
            if(!(var3 !== var5)) { _fun0008_ip = 92; continue _fun0008 }
 71:
            var3 = _closure1_slot4;
            var3 = var3.MIDNIGHT;
            var7 = 'midnight';
            if(!(var3 !== var5)) { _fun0008_ip = 92; continue _fun0008 }
 89:
            var7 = var1;
 92:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 6;
            var3 = var9[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var6 = var3.internal;
            var3 = var6.resolveSemanticColor;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BG_BASE_PRIMARY;
            var7 = var3.bind(var6)(var7, var1);
            var1 = {};
            var3 = var4.theme;
            var1['theme'] = var3;
            var3 = var4.getName;
            var3 = var3.bind(var4)();
            var1['name'] = var3;
            var3 = 50;
            var1['midpointPercentage'] = var3;
            var3 = 0;
            var1['angle'] = var3;
            var4 = _closure1_slot7;
            var6 = {};
            var6['hex'] = var7;
            var3 = 20;
            var6['stop'] = var3;
            var3 = new Array(5);
            var3[0] = var6;
            var6 = {};
            var6['hex'] = var7;
            var8 = 40;
            var6['stop'] = var8;
            var3[1] = var6;
            var6 = {};
            var6['hex'] = var7;
            var8 = 60;
            var6['stop'] = var8;
            var3[2] = var6;
            var6 = {};
            var6['hex'] = var7;
            var8 = 80;
            var6['stop'] = var8;
            var3[3] = var6;
            var6 = {};
            var6['hex'] = var7;
            var7 = 100;
            var6['stop'] = var7;
            var3[4] = var6;
            var2 = _closure1_slot5;
            var2 = var2.bind(var5)();
            var2 = var4.bind(var5)(var3, var2);
            var1['colors'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arguments[1];
            var8 = arguments[2];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0009_ip = 22; continue _fun0009 }
 12:
            var9 = 0.7;
 22:
            if(!(var8 === var7)) { _fun0009_ip = 36; continue _fun0009 }
 26:
            var8 = 0.8;
 36:
            var1 = new Array(0);
            var3 = _closure1_slot10;
            var2 = arg1;
            var5 = var3.bind(var7)(var2);
            var3 = var5.bind(var7)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0009_ip = 140; continue _fun0009 }
 69:
            var11 = var3.value;
            var2 = var11.colors;
            if(!(var4 != var2)) { _fun0009_ip = 106; continue _fun0009 }
 83:
            var10 = var1.push;
            var2 = _closure1_slot8;
            var2 = var2.bind(var7)(var11, var9, var8);
            var2 = var10.bind(var1)(var2);
            _fun0009_ip = 125; continue _fun0009;
 106:
            var10 = var1.push;
            var2 = _closure1_slot9;
            var2 = var2.bind(var7)(var11);
            var2 = var10.bind(var1)(var2);
 125:
            var10 = var5.bind(var7)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0009_ip = 69; continue _fun0009 }
 140:
            return var1;
        }
    };
    var3['convertThemesToAnimatedThemes'] = var4;
    var2 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var4 = var3.bind(var8)();
            var3 = _closure1_slot4;
            var3 = var3.LIGHT;
            if(!(var4 !== var3)) { _fun0010_ip = 57; continue _fun0010 }
 45:
            var3 = _closure1_slot4;
            var6 = var3.DARKER;
            _fun0010_ip = 67; continue _fun0010;
 57:
            var3 = _closure1_slot4;
            var6 = var3.LIGHT;
 67:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var5 = var4.bind(var8)(var3);
            var4 = var5.useToken;
            var7 = _closure1_slot1;
            var3 = 6;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BASE_PRIMARY;
            var5 = var4.bind(var5)(var3, var6);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {'theme': 'system', 'name': null, 'midpointPercentage': 50, 'angle': 0};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 9;
                var4 = var8[var3];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.zlvNOj;
                var3 = var4.bind(var6)(var3);
                var1['name'] = var3;
                var4 = _closure1_slot7;
                var6 = {};
                var3 = _closure2_slot0;
                var6['hex'] = var3;
                var3 = 20;
                var6['stop'] = var3;
                var3 = new Array(5);
                var3[0] = var6;
                var6 = {};
                var8 = _closure2_slot0;
                var6['hex'] = var8;
                var8 = 40;
                var6['stop'] = var8;
                var3[1] = var6;
                var6 = {};
                var8 = _closure2_slot0;
                var6['hex'] = var8;
                var8 = 60;
                var6['stop'] = var8;
                var3[2] = var6;
                var6 = {};
                var8 = _closure2_slot0;
                var6['hex'] = var8;
                var8 = 80;
                var6['stop'] = var8;
                var3[3] = var6;
                var6 = {};
                var7 = _closure2_slot0;
                var6['hex'] = var7;
                var7 = 100;
                var6['stop'] = var7;
                var3[4] = var6;
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var5)(var3, var2);
                var1['colors'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useLaunchWelcomeSystemTheme'] = var2;
    return var1;
})();