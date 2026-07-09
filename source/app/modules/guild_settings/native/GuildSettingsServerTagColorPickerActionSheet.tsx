// app/modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS;
    var _closure1_slot6 = var8;
    var8 = var4.GUILD_TAG_BADGE_PALETTE_PRESETS;
    var _closure1_slot7 = var8;
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_16;
    var _closure1_slot11 = var4;
    var4 = {'leading': true, 'trailing': true};
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var4 = _closure1_slot11;
        var2['paddingHorizontal'] = var4;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_16;
        var2['paddingBottom'] = var7;
        var1['container'] = var2;
        var2 = {'alignItems': 'center', 'justifyContent': 'center'};
        var7 = 'center';
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.space;
        var9 = var9.PX_24;
        var2['paddingHorizontal'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.space;
        var9 = var9.PX_12;
        var2['paddingVertical'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.radii;
        var9 = var9.sm;
        var2['borderRadius'] = var9;
        var9 = 1;
        var2['borderWidth'] = var9;
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.BORDER_MUTED;
        var2['borderColor'] = var10;
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_MOD_SUBTLE;
        var2['backgroundColor'] = var10;
        var1['preview'] = var2;
        var2 = {'backgroundColor': 'transparent', 'paddingHorizontal': 0, 'paddingVertical': 0};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.space;
        var10 = var10.PX_8;
        var2['columnGap'] = var10;
        var1['previewChiplet'] = var2;
        var2 = {};
        var2['alignSelf'] = var7;
        var2['width'] = var8;
        var1['colorTabs'] = var2;
        var2 = {};
        var2['alignSelf'] = var7;
        var1['saturationValuePicker'] = var2;
        var2 = {};
        var2['borderWidth'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.BORDER_SUBTLE;
        var2['borderColor'] = var9;
        var1['saturationValueColorBox'] = var2;
        var2 = {};
        var2['width'] = var8;
        var2['minWidth'] = var8;
        var9 = 160;
        var2['height'] = var9;
        var2['minHeight'] = var9;
        var1['saturationValueColorBoxInner'] = var2;
        var2 = {'width': 16, 'height': 16};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.radii;
        var9 = var9.round;
        var2['borderRadius'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.unsafe_rawColors;
        var9 = var9.WHITE;
        var2['borderColor'] = var9;
        var1['selector'] = var2;
        var2 = {};
        var2['alignSelf'] = var7;
        var1['huePicker'] = var2;
        var2 = {};
        var2['width'] = var8;
        var2['minWidth'] = var8;
        var8 = 24;
        var2['height'] = var8;
        var1['hueColorBarInner'] = var2;
        var2 = {'height': 48, 'borderRadius': null, 'borderWidth': 1};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.sm;
        var2['borderRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.INPUT_BORDER_DEFAULT;
        var2['borderColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.INPUT_BACKGROUND_DEFAULT;
        var2['backgroundColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_12;
        var2['paddingHorizontal'] = var8;
        var2['textAlign'] = var7;
        var1['hexInput'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
        var3 = var3.PX_24;
        var2['marginTop'] = var3;
        var1['buttonGroup'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsServerTagColorPickerActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.tag;
            var33 = var1.badge;
            var13 = var1.primaryColor;
            var _closure2_slot0 = var13;
            var5 = var1.secondaryColor;
            var _closure2_slot1 = var5;
            var8 = var1.onSelectColor;
            var _closure2_slot2 = var8;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var6 = var1.width;
            var1 = global;
            var9 = var1.Math;
            var7 = var9.max;
            var12 = var1.Math;
            var11 = var12.min;
            var1 = _closure1_slot11;
            var16 = 2;
            var1 = var16 * var1;
            var6 = var6 - var1;
            var1 = 358;
            var6 = var11.bind(var12)(var6, var1);
            var1 = 240;
            var17 = var7.bind(var9)(var1, var6);
            var1 = _closure1_slot13;
            var12 = var1.bind(var4)(var17);
            var1 = _closure1_slot6;
            var1 = var1[var33];
            var14 = var1 >= var16;
            var _closure2_slot3 = var14;
            var1 = _closure1_slot7;
            var9 = 0;
            var30 = var1[var9];
            var _closure2_slot4 = var30;
            var15 = _closure1_slot4;
            var1 = var15.useState;
            var6 = var1.bind(var15)(var13);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var6, var16);
            var35 = var1[var9];
            var _closure2_slot5 = var35;
            var7 = 1;
            var1 = var1[var7];
            var _closure2_slot6 = var1;
            var6 = var15.useState;
            var11 = null;
            var1 = null;
            if(!var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var5;
case 2:
            var1 = var6.bind(var15)(var1);
            var6 = _closure1_slot3;
            var1 = var6.bind(var4)(var1, var16);
            var34 = var1[var9];
            _closure2_slot7 = var34;
            var1 = var1[var7];
            _closure2_slot8 = var1;
            var15 = _closure1_slot4;
            var18 = var15.useState;
            var1 = 'primary';
            var1 = var18.bind(var15)(var1);
            var1 = var6.bind(var4)(var1, var16);
            var21 = var1[var9];
            _closure2_slot9 = var21;
            var1 = var1[var7];
            _closure2_slot10 = var1;
            var6 = var15.useRef;
            var1 = false;
            var1 = var6.bind(var15)(var1);
            _closure2_slot11 = var1;
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var6 = var6[var1];
            var18 = var15.bind(var4)(var6);
            var15 = var18.hex2rgb2hsv;
            var6 = var35;
            if(!(var11 == var35)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var30.primary;
case 4:
            var6 = var15.bind(var18)(var6);
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var20 = 10;
            var15 = var15[var20];
            var19 = var18.bind(var4)(var15);
            var18 = var19.useSharedValue;
            var15 = var11 == var6;
            var22 = undefined;
            if(var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var22 = var6.h;
case 6:
            var23 = var11 != var22;
            var15 = 0;
            if(!var23) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var22;
case 8:
            var29 = var18.bind(var19)(var15);
            _closure2_slot12 = var29;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var22 = var18.bind(var4)(var15);
            var18 = var22.useSharedValue;
            var15 = var11 == var6;
            var23 = undefined;
            if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var23 = var6.s;
case 10:
            var24 = var11 != var23;
            var19 = 100;
            var15 = var19;
            if(!var24) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = var23;
case 12:
            var15 = var15 / var19;
            var28 = var18.bind(var22)(var15);
            _closure2_slot13 = var28;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var18 = var18.bind(var4)(var15);
            var15 = var18.useSharedValue;
            var22 = var11 == var6;
            var20 = undefined;
            if(var22) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var20 = var6.v;
case 14:
            var22 = var11 != var20;
            var6 = var19;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var20;
case 16:
            var6 = var6 / var19;
            var27 = var15.bind(var18)(var6);
            _closure2_slot14 = var27;
            var18 = _closure1_slot4;
            var15 = var18.useState;
            var19 = var35;
            if(!(var11 == var35)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = var30.primary;
case 18:
            var6 = var19.toUpperCase;
            var6 = var6.bind(var19)();
            var15 = var15.bind(var18)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var15, var16);
            var25 = var6[var9];
            _closure2_slot15 = var25;
            var6 = var6[var7];
            _closure2_slot16 = var6;
            var16 = var35;
            if(!(var11 == var35)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var30.primary;
case 20:
            _closure2_slot17 = var16;
            var6 = null;
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var34;
            if(!(var11 == var34)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var30.secondary;
case 24:
            var6 = var7;
case 22:
            _closure2_slot18 = var6;
            var7 = _closure1_slot4;
            var15 = var7.useCallback;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var6;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = 'primary';
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var3 = _closure2_slot18;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = _closure2_slot17;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var1 = _closure2_slot18;
case 30:
                    _fun0002_ip = 31; continue _fun0002;
case 26:
                    var1 = _closure2_slot17;
case 31:
                    return var1;
                }
            };
            var20 = var15.bind(var7)(var6, var9);
            _closure2_slot19 = var20;
            var9 = var7.useCallback;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var5;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = 'primary';
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0003_ip = 32; continue _fun0003 }
case 27:
                    var1 = _closure2_slot1;
                    _fun0003_ip = 33; continue _fun0003;
case 32:
                    var1 = _closure2_slot0;
case 33:
                    return var1;
                }
            };
            var22 = var9.bind(var7)(var5, var6);
            _closure2_slot20 = var22;
            var9 = var7.useCallback;
            var6 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg2;
                    var3 = null;
                    var4 = var3 == var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var4 = var5.toUpperCase;
                    var2 = var4.bind(var5)();
case 34:
                    var4 = var3 != var2;
                    var3 = null;
                    if(!var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var3 = var2;
case 36:
                    var4 = 'primary';
                    var2 = arg1;
                    if(!(var4 !== var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var2 = _closure2_slot8;
                    var2 = var2.bind(var1)(var3);
                    _fun0004_ip = 40; continue _fun0004;
case 38:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)(var3);
case 40:
                    return var1;
                }
            };
            var5 = new Array(0);
            var15 = var9.bind(var7)(var6, var5);
            _closure2_slot21 = var15;
            var9 = var7.useCallback;
            var6 = new Array(3);
            var6[0] = var29;
            var6[1] = var28;
            var6[2] = var27;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hex2rgb2hsv;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var6 = _closure2_slot12;
                    var5 = var6.set;
                    var4 = var2.h;
                    var4 = var5.bind(var6)(var4);
                    var7 = _closure2_slot13;
                    var6 = var7.set;
                    var4 = var2.s;
                    var5 = 100;
                    var4 = var4 / var5;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot14;
                    var3 = var4.set;
                    var2 = var2.v;
                    var2 = var2 / var5;
                    var2 = var3.bind(var4)(var2);
case 41:
                    return var1;
                }
            };
            var5 = var9.bind(var7)(var5, var6);
            _closure2_slot22 = var5;
            var13 = var7.useCallback;
            var9 = new Array(4);
            var9[0] = var29;
            var9[1] = var28;
            var9[2] = var15;
            var9[3] = var27;
            var6 = function(arg1) {
                var3 = arg1;
                var2 = {};
                var5 = _closure2_slot12;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2['h'] = var4;
                var5 = _closure2_slot13;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2['s'] = var4;
                var5 = _closure2_slot14;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2['v'] = var4;
                var11 = var2.h;
                var10 = var2.s;
                var9 = var2.v;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var4 = undefined;
                var8 = var5.bind(var4)(var2);
                var7 = var8.hsvToRgbWorklet;
                var2 = {};
                var2['h'] = var11;
                var2['s'] = var10;
                var2['v'] = var9;
                var9 = var7.bind(var8)(var2);
                var2 = 8;
                var2 = var6[var2];
                var8 = var5.bind(var4)(var2);
                var7 = var8.rgbToHex;
                var2 = 0;
                var6 = var9[var2];
                var2 = 1;
                var5 = var9[var2];
                var2 = 2;
                var2 = var9[var2];
                var5 = var7.bind(var8)(var6, var5, var2);
                var2 = var5.toUpperCase;
                var2 = var2.bind(var5)();
                var5 = _closure2_slot16;
                var5 = var5.bind(var4)(var2);
                var1 = _closure2_slot21;
                var1 = var1.bind(var4)(var3, var2);
                var1 = {};
                var1['colorChannel'] = var3;
                var1['hex'] = var2;
                return var1;
            };
            var16 = var13.bind(var7)(var6, var9);
            _closure2_slot23 = var16;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 11;
            var9 = var13[var9];
            var24 = var6.bind(var4)(var9);
            var23 = var24.useThrottledFunction;
            var19 = new Array(1);
            var19[0] = var16;
            var40 = _closure1_slot12;
            var42 = 32;
            var44 = var24;
            var43 = var16;
            var41 = var19;
            var19 = var44[var23](var43, var42, var41, var40, var39);
            _closure2_slot24 = var19;
            var23 = var7.useCallback;
            var18 = new Array(1);
            var18[0] = var19;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot11;
                    var1 = var1.current;
                    var3 = null;
                    if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    return var3;
case 43:
                    var4 = _closure2_slot24;
                    var1 = var4.flush;
                    var4 = var1.bind(var4)();
                    var5 = var3 != var4;
                    var1 = null;
                    if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 45:
                    var1 = var4;
case 42:
                    if(!(var3 != var1)) { _fun0006_ip = 46; continue _fun0006 }
case 39:
                    var3 = _closure2_slot11;
                    var2 = false;
                    var3['current'] = var2;
case 46:
                    return var1;
                }
            };
            var9 = var23.bind(var7)(var9, var18);
            _closure2_slot25 = var9;
            var24 = var7.useCallback;
            var23 = new Array(2);
            var23[0] = var21;
            var23[1] = var19;
            var18 = function() {
                var3 = _closure2_slot11;
                var2 = true;
                var3['current'] = var2;
                var3 = _closure2_slot24;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var24.bind(var7)(var18, var23);
            var24 = var7.useEffect;
            var23 = new Array(1);
            var23[0] = var19;
            var18 = function() {
                var1 = function() {
                    var2 = _closure2_slot24;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var18 = var24.bind(var7)(var18, var23);
            var23 = var7.useCallback;
            var18 = new Array(3);
            var18[0] = var21;
            var18[1] = var19;
            var18[2] = var16;
            var16 = function() {
                var3 = _closure2_slot24;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot11;
                var2 = false;
                var3['current'] = var2;
                var3 = _closure2_slot23;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var23.bind(var7)(var16, var18);
            var24 = var7.useCallback;
            var18 = new Array(4);
            var18[0] = var21;
            var18[1] = var15;
            var18[2] = var19;
            var18[3] = var5;
            var16 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.length;
                    var3 = 0;
                    if(!(var1 > var3)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var1 = var2.charAt;
                    var1 = var1.bind(var2)(var3);
                    var4 = '#';
                    if(!(var4 === var1)) { _fun0007_ip = 42; continue _fun0007 }
case 47:
                    var1 = var2.toUpperCase;
                    var3 = var1.bind(var2)();
                    _fun0007_ip = 49; continue _fun0007;
case 42:
                    var1 = var2.toUpperCase;
                    var2 = var1.bind(var2)();
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var1 = var1.concat;
                    var3 = var1.bind(var4)(var2);
case 49:
                    var4 = _closure2_slot11;
                    var1 = false;
                    var4['current'] = var1;
                    var4 = _closure2_slot24;
                    var1 = var4.cancel;
                    var1 = var1.bind(var4)();
                    var4 = _closure2_slot16;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hex2rgb2hsv;
                    var5 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var5 = _closure2_slot21;
                    var4 = _closure2_slot9;
                    var4 = var5.bind(var1)(var4, var3);
                    var2 = _closure2_slot22;
                    var2 = var2.bind(var1)(var3);
case 50:
                    return var1;
                }
            };
            var24 = var24.bind(var7)(var16, var18);
            var18 = var7.useCallback;
            var16 = new Array(6);
            var16[0] = var21;
            var16[1] = var30;
            var16[2] = var22;
            var16[3] = var15;
            var16[4] = var19;
            var16[5] = var5;
            var15 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot20;
                    var3 = _closure2_slot9;
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = _closure2_slot9;
                    var3 = 'primary';
                    if(!(var3 !== var4)) { _fun0008_ip = 45; continue _fun0008 }
case 28:
                    var3 = _closure2_slot4;
                    var3 = var3.secondary;
                    _fun0008_ip = 52; continue _fun0008;
case 45:
                    var4 = _closure2_slot4;
                    var3 = var4.primary;
case 52:
                    var4 = null;
                    if(!(var4 != var6)) { _fun0008_ip = 46; continue _fun0008 }
case 53:
                    var3 = var6;
case 46:
                    var5 = _closure2_slot11;
                    var4 = false;
                    var5['current'] = var4;
                    var5 = _closure2_slot24;
                    var4 = var5.cancel;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot16;
                    var4 = var3.toUpperCase;
                    var4 = var4.bind(var3)();
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot21;
                    var4 = _closure2_slot9;
                    var4 = var5.bind(var1)(var4, var6);
                    var2 = _closure2_slot22;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var16 = var18.bind(var7)(var15, var16);
            var18 = var7.useCallback;
            var15 = new Array(5);
            var15[0] = var21;
            var15[1] = var9;
            var15[2] = var20;
            var15[3] = var19;
            var15[4] = var5;
            var5 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = 'secondary';
                    var2 = 0;
                    var1 = arg1;
                    if(!(var2 === var1)) { _fun0009_ip = 44; continue _fun0009 }
case 54:
                    var4 = 'primary';
case 44:
                    var2 = _closure2_slot9;
                    if(!(var4 !== var2)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var2 = _closure2_slot25;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var5 = _closure2_slot24;
                    var2 = var5.cancel;
                    var2 = var2.bind(var5)();
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot19;
                    var4 = var2.bind(var3)(var4);
                    var2 = var4.toUpperCase;
                    var2 = var2.bind(var4)();
                    var4 = _closure2_slot16;
                    var4 = var4.bind(var3)(var2);
                    var1 = _closure2_slot22;
                    var1 = var1.bind(var3)(var2);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var18.bind(var7)(var5, var15);
            var19 = var7.useMemo;
            var18 = function() {
                var2 = {'id': 'primary', 'label': null, 'page': null};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 12;
                var1 = var8[var3];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var5 = var1.intl;
                var4 = var5.string;
                var1 = var8[var3];
                var1 = var7.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.PHT1N2;
                var1 = var4.bind(var5)(var1);
                var2['label'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {'id': 'secondary', 'label': null, 'page': null};
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["9/wzjF"];
                var3 = var4.bind(var5)(var3);
                var2['label'] = var3;
                var1[1] = var2;
                return var1;
            };
            var5 = new Array(0);
            var18 = var19.bind(var7)(var18, var5);
            var5 = 13;
            var5 = var13[var5];
            var13 = var6.bind(var4)(var5);
            var6 = var13.useSegmentedControlState;
            var5 = {};
            var5['items'] = var18;
            var5['pageWidth'] = var17;
            var5['onSetActiveIndex'] = var15;
            var31 = var6.bind(var13)(var5);
            var6 = var7.useCallback;
            var5 = new Array(6);
            var5[0] = var35;
            var5[1] = var34;
            var5[2] = var9;
            var5[3] = var14;
            var5[4] = var25;
            var5[5] = var8;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.hex2rgb2hsv;
                    var4 = _closure2_slot15;
                    var4 = var5.bind(var6)(var4);
                    var8 = null;
                    if(!(var8 != var4)) { _fun0010_ip = 57; continue _fun0010 }
case 52:
                    var4 = _closure2_slot25;
                    var4 = var4.bind(var1)();
                    var5 = var8 == var4;
                    var6 = undefined;
                    if(var5) { _fun0010_ip = 40; continue _fun0010 }
case 58:
                    var6 = var4.colorChannel;
case 40:
                    var5 = 'primary';
                    if(!(var5 !== var6)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var7 = _closure2_slot5;
                    _fun0010_ip = 61; continue _fun0010;
case 59:
                    var7 = var4.hex;
case 61:
                    var5 = var8 == var4;
                    var6 = undefined;
                    if(var5) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var6 = var4.colorChannel;
case 62:
                    var5 = 'secondary';
                    if(!(var5 !== var6)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var9 = _closure2_slot7;
                    _fun0010_ip = 66; continue _fun0010;
case 64:
                    var9 = var4.hex;
case 66:
                    var5 = _closure2_slot2;
                    var4 = var8 == var7;
                    var6 = undefined;
                    if(var4) { _fun0010_ip = 51; continue _fun0010 }
case 67:
                    var4 = var7.toLowerCase;
                    var6 = var4.bind(var7)();
case 51:
                    var7 = var8 != var6;
                    var4 = null;
                    if(!var7) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var4 = var6;
case 68:
                    var6 = _closure2_slot3;
                    var3 = null;
                    if(!var6) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var7 = var8 == var9;
                    var6 = undefined;
                    if(var7) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var7 = var9.toLowerCase;
                    var6 = var7.bind(var9)();
case 72:
                    var7 = var8 != var6;
                    var3 = null;
                    if(!var7) { _fun0010_ip = 70; continue _fun0010 }
case 74:
                    var3 = var6;
case 70:
                    var3 = var5.bind(var1)(var4, var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
case 57:
                    return var1;
                }
            };
            var19 = var6.bind(var7)(var3, var5);
            var30 = 'WUMP';
            var3 = '';
            if(!(var3 !== var2)) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var30 = var2;
case 75:
            var32 = _closure1_slot0;
            var36 = _closure1_slot2;
            var1 = var36[var1];
            var2 = var32.bind(var4)(var1);
            var1 = var2.hex2rgb2hsv;
            var1 = var1.bind(var2)(var25);
            var18 = var11 == var1;
            var3 = _closure1_slot9;
            var1 = 15;
            var1 = var36[var1];
            var1 = var32.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'startExpanded': true, 'keyboardShouldPersistTaps': 'handled'};
            var22 = true;
            var5 = 16;
            var5 = var36[var5];
            var5 = var32.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var21 = 12;
            var7 = var36[var21];
            var7 = var32.bind(var4)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var36[var21];
            var7 = var32.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.T1IxYH;
            var7 = var8.bind(var9)(var7);
            var5['title'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot10;
            var9 = 17;
            var5 = var36[var9];
            var5 = var32.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var15 = _closure1_slot1;
            var13 = 5;
            var8 = var36[var13];
            var8 = var15.bind(var4)(var8);
            var8 = var8.space;
            var8 = var8.PX_8;
            var5['spacing'] = var8;
            var8 = var12.container;
            var5['style'] = var8;
            var15 = _closure1_slot5;
            var8 = {};
            var8['accessible'] = var22;
            var17 = var36[var21];
            var17 = var32.bind(var4)(var17);
            var38 = var17.intl;
            var37 = var38.formatToPlainString;
            var17 = var36[var21];
            var17 = var32.bind(var4)(var17);
            var17 = var17.t;
            var20 = var17.R1AXap;
            var17 = {};
            var17['tag'] = var30;
            var17 = var37.bind(var38)(var20, var17);
            var8['accessibilityLabel'] = var17;
            var17 = var12.preview;
            var8['style'] = var17;
            var17 = 18;
            var17 = var36[var17];
            var17 = var32.bind(var4)(var17);
            var20 = var17.BaseGuildTagChiplet;
            var17 = {};
            var17['guildTag'] = var30;
            var30 = 19;
            var30 = var36[var30];
            var30 = var32.bind(var4)(var30);
            var32 = var30.GuildBadge;
            var30 = {};
            var30['badge'] = var33;
            var33 = _closure1_slot8;
            var36 = var33.SIZE_36;
            var30['width'] = var36;
            var33 = var33.SIZE_36;
            var30['height'] = var33;
            var36 = var11 != var35;
            var33 = undefined;
            if(!var36) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var33 = var35;
case 77:
            var30['primaryTintColor'] = var33;
            var33 = undefined;
            if(!var14) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var35 = var11 != var34;
            var33 = undefined;
            if(!var35) { _fun0001_ip = 79; continue _fun0001 }
case 81:
            var33 = var34;
case 79:
            var30['secondaryTintColor'] = var33;
            var30 = var3.bind(var4)(var32, var30);
            var17['guildBadge'] = var30;
            var30 = 'heading-xxl/semibold';
            var17['textVariant'] = var30;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var30 = 20;
            var30 = var33[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.TextStyleSheet;
            var30 = var30.heading-xxl/semibold;
            var17['textStyle'] = var30;
            var30 = _closure1_slot8;
            var30 = var30.SIZE_36;
            var17['badgeSize'] = var30;
            var30 = var12.previewChiplet;
            var17['containerStyles'] = var30;
            var17 = var3.bind(var4)(var20, var17);
            var8['children'] = var17;
            var15 = var3.bind(var4)(var15, var8);
            var8 = new Array(5);
            var8[0] = var15;
            var11 = null;
            if(!var14) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var17 = _closure1_slot9;
            var15 = _closure1_slot5;
            var14 = {};
            var20 = var12.colorTabs;
            var14['style'] = var20;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = 21;
            var20 = var32[var20];
            var20 = var30.bind(var4)(var20);
            var30 = var20.SegmentedControl;
            var20 = {'state': null, 'variant': 'experimental_Large', 'keyboardShouldPersistTaps': 'handled'};
            var20['state'] = var31;
            var20 = var17.bind(var4)(var30, var20);
            var14['children'] = var20;
            var11 = var17.bind(var4)(var15, var14);
case 82:
            var8[1] = var11;
            var15 = _closure1_slot9;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 22;
            var11 = var17[var11];
            var20 = var14.bind(var4)(var11);
            var11 = {};
            var11['hue'] = var29;
            var11['saturation'] = var28;
            var11['value'] = var27;
            var27 = var12.saturationValuePicker;
            var11['saturationValuePickerStyle'] = var27;
            var27 = var12.saturationValueColorBox;
            var11['saturationValueColorBoxStyle'] = var27;
            var27 = var12.saturationValueColorBoxInner;
            var11['saturationValueColorBoxInnerStyle'] = var27;
            var27 = var12.selector;
            var11['saturationValueSelectorStyle'] = var27;
            var27 = var12.huePicker;
            var11['huePickerStyle'] = var27;
            var27 = var12.hueColorBarInner;
            var11['hueColorBarInnerStyle'] = var27;
            var27 = var12.selector;
            var11['hueSliderStyle'] = var27;
            var11['onPanUpdate'] = var26;
            var11['onPanFinalize'] = var23;
            var11 = var15.bind(var4)(var20, var11);
            var8[2] = var11;
            var20 = _closure1_slot0;
            var11 = 23;
            var11 = var17[var11];
            var11 = var20.bind(var4)(var11);
            var23 = var11.BottomSheetTextInput;
            var11 = {'accessibilityLabel': null, 'value': null, 'onChangeText': null, 'maxLength': 7, 'autoCapitalize': 'characters', 'autoCorrect': false};
            var26 = var17[var21];
            var26 = var20.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var17[var21];
            var26 = var20.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.ozfa/h;
            var26 = var27.bind(var28)(var26);
            var11['accessibilityLabel'] = var26;
            var11['value'] = var25;
            var11['onChangeText'] = var24;
            var24 = var12.hexInput;
            var11['style'] = var24;
            var11 = var15.bind(var4)(var23, var11);
            var8[3] = var11;
            var11 = _closure1_slot10;
            var9 = var17[var9];
            var9 = var20.bind(var4)(var9);
            var10 = var9.Stack;
            var9 = {};
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.space;
            var13 = var13.PX_8;
            var9['spacing'] = var13;
            var12 = var12.buttonGroup;
            var9['style'] = var12;
            var13 = 24;
            var12 = var17[var13];
            var12 = var20.bind(var4)(var12);
            var14 = var12.Button;
            var12 = {};
            var12['grow'] = var22;
            var22 = var17[var21];
            var22 = var20.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var17[var21];
            var22 = var20.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.R3BPH+;
            var22 = var23.bind(var24)(var22);
            var12['text'] = var22;
            var12['onPress'] = var19;
            var12['disabled'] = var18;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var13 = var17[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {'grow': true, 'variant': 'secondary'};
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.yBZMsQ;
            var17 = var18.bind(var19)(var17);
            var13['text'] = var17;
            var13['onPress'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[4] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();