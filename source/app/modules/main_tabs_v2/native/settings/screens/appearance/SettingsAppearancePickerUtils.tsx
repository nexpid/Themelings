// app/modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = function getMaxColors() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot11;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var9 = undefined;
            var3 = var3.bind(var9)(var1);
            var1 = var3.getAllMobileThemes;
            var1 = var1.bind(var3)();
            var8 = var2.bind(var9)(var1);
            var3 = var8.bind(var9)();
            var2 = var3.done;
            var7 = global;
            var6 = 1;
            var5 = 3;
            var4 = var3;
            var3 = 0;
            var1 = 0;
            if(var2) { _fun0004_ip = 304; continue _fun0004 }
 74:
            var2 = var4.value;
            var12 = var2.type;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var5];
            var11 = var13.bind(var9)(var11);
            var11 = var11.ClientThemeType;
            var11 = var11.STANDARD_BACKGROUND_THEME;
            if(!(var12 !== var11)) { _fun0004_ip = 263; continue _fun0004 }
 120:
            var12 = var2.type;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var5];
            var11 = var13.bind(var9)(var11);
            var11 = var11.ClientThemeType;
            var11 = var11.BACKGROUND_GRADIENT_PRESET;
            if(!(var12 !== var11)) { _fun0004_ip = 234; continue _fun0004 }
 158:
            var13 = var2.type;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var5];
            var11 = var12.bind(var9)(var11);
            var11 = var11.ClientThemeType;
            var12 = var11.CUSTOM_BACKGROUND_GRADIENT;
            var11 = var3;
            if(!(var13 === var12)) { _fun0004_ip = 280; continue _fun0004 }
 199:
            var14 = var7.Math;
            var13 = var14.max;
            var12 = var2.customThemeSettings;
            var12 = var12.colors;
            var12 = var12.length;
            var11 = var13.bind(var14)(var12, var3);
            _fun0004_ip = 280; continue _fun0004;
 234:
            var13 = var7.Math;
            var12 = var13.max;
            var2 = var2.colors;
            var2 = var2.length;
            var11 = var12.bind(var13)(var2, var3);
            _fun0004_ip = 280; continue _fun0004;
 263:
            var12 = var7.Math;
            var2 = var12.max;
            var11 = var2.bind(var12)(var6, var3);
 280:
            var12 = var8.bind(var9)();
            var2 = var12.done;
            var3 = var11;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0004_ip = 74; continue _fun0004 }
 304:
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
            var11 = 4;
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
            var2 = 5;
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
            if(!var7) { _fun0007_ip = 69; continue _fun0007 }
 66:
            var5 = var6;
 69:
            var1['midpointPercentage'] = var5;
            var5 = var4.angle;
            var6 = var2 != var5;
            var2 = 0;
            if(!var6) { _fun0007_ip = 92; continue _fun0007 }
 89:
            var2 = var5;
 92:
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
                var4 = 6;
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
            if(!(var3 !== var5)) { _fun0008_ip = 91; continue _fun0008 }
 32:
            var3 = _closure1_slot4;
            var3 = var3.DARK;
            var6 = 'darker';
            var7 = var6;
            if(!(var3 !== var5)) { _fun0008_ip = 91; continue _fun0008 }
 53:
            var3 = _closure1_slot4;
            var3 = var3.DARKER;
            var7 = var6;
            if(!(var3 !== var5)) { _fun0008_ip = 91; continue _fun0008 }
 70:
            var3 = _closure1_slot4;
            var3 = var3.MIDNIGHT;
            var7 = 'midnight';
            if(!(var3 !== var5)) { _fun0008_ip = 91; continue _fun0008 }
 88:
            var7 = var1;
 91:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
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
    var4 = function convertCustomBackgroundGradientToAnimatedTheme(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            var2 = 50;
            var1['midpointPercentage'] = var2;
            var2 = var4.customThemeSettings;
            var5 = var2.gradientAngle;
            var2 = null;
            var6 = var2 != var5;
            var2 = 0;
            if(!var6) { _fun0009_ip = 82; continue _fun0009 }
 79:
            var2 = var5;
 82:
            var1['angle'] = var2;
            var5 = _closure1_slot7;
            var4 = var4.customThemeSettings;
            var6 = var4.colors;
            var4 = var6.map;
            var3 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var9 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var13 = var2.theme;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var14 = undefined;
                    var12 = arg1;
                    var4 = var14[var9](var13, var12, var11, var10, var9);
                    var1['hex'] = var4;
                    var2 = var2.customThemeSettings;
                    var2 = var2.colors;
                    var2 = var2.length;
                    var4 = 1;
                    var5 = var2 > var4;
                    var2 = 0;
                    if(!var5) { _fun0010_ip = 108; continue _fun0010 }
 70:
                    var3 = _closure2_slot0;
                    var3 = var3.customThemeSettings;
                    var3 = var3.colors;
                    var3 = var3.length;
                    var5 = var3 - var4;
                    var4 = arg2;
                    var3 = 100;
                    var3 = var3 / var5;
                    var2 = var4 * var3;
 108:
                    var1['stop'] = var2;
                    return var1;
                }
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
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var9 = arguments[1];
            var8 = arguments[2];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0011_ip = 22; continue _fun0011 }
 12:
            var9 = 0.7;
 22:
            if(!(var8 === var7)) { _fun0011_ip = 36; continue _fun0011 }
 26:
            var8 = 0.8;
 36:
            var1 = new Array(0);
            var3 = _closure1_slot11;
            var2 = arg1;
            var5 = var3.bind(var7)(var2);
            var3 = var5.bind(var7)();
            var2 = var3.done;
            var4 = 3;
            if(var2) { _fun0011_ip = 278; continue _fun0011 }
 73:
            var11 = var3.value;
            var10 = var11.type;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var12.bind(var7)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.STANDARD_BACKGROUND_THEME;
            if(!(var10 !== var2)) { _fun0011_ip = 241; continue _fun0011 }
 119:
            var10 = var11.type;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var12.bind(var7)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.BACKGROUND_GRADIENT_PRESET;
            if(!(var10 !== var2)) { _fun0011_ip = 218; continue _fun0011 }
 157:
            var10 = var11.type;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var12.bind(var7)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var10 === var2)) { _fun0011_ip = 260; continue _fun0011 }
 195:
            var10 = var1.push;
            var2 = _closure1_slot10;
            var2 = var2.bind(var7)(var11, var9, var8);
            var2 = var10.bind(var1)(var2);
            _fun0011_ip = 260; continue _fun0011;
 218:
            var10 = var1.push;
            var2 = _closure1_slot8;
            var2 = var2.bind(var7)(var11, var9, var8);
            var2 = var10.bind(var1)(var2);
            _fun0011_ip = 260; continue _fun0011;
 241:
            var10 = var1.push;
            var2 = _closure1_slot9;
            var2 = var2.bind(var7)(var11);
            var2 = var10.bind(var1)(var2);
 260:
            var10 = var5.bind(var7)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0011_ip = 73; continue _fun0011 }
 278:
            return var1;
        }
    };
    var3['convertThemesToAnimatedThemes'] = var4;
    var2 = function() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var4 = var3.bind(var8)();
            var3 = _closure1_slot4;
            var3 = var3.LIGHT;
            if(!(var4 !== var3)) { _fun0012_ip = 57; continue _fun0012 }
 45:
            var3 = _closure1_slot4;
            var6 = var3.DARKER;
            _fun0012_ip = 67; continue _fun0012;
 57:
            var3 = _closure1_slot4;
            var6 = var3.LIGHT;
 67:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var5 = var4.bind(var8)(var3);
            var4 = var5.useToken;
            var7 = _closure1_slot1;
            var3 = 7;
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
                var3 = 10;
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