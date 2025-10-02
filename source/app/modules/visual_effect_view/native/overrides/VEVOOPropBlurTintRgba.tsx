// app/modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.getVisualEffectViewOverrides;
    var _closure1_slot6 = var8;
    var4 = var4.setVisualEffectViewOverides;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.Fragment;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var10['width'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var10['height'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_700;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var4['tintColor'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function VEVOOPropBlurTintRgba() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot11;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useVisualEffectViewOverrideSharedStyles;
            var14 = var1.bind(var2)();
            var8 = _closure1_slot4;
            var2 = var8.useState;
            var1 = false;
            var2 = var2.bind(var8)(var1);
            var1 = _closure1_slot3;
            var9 = 2;
            var1 = var1.bind(var4)(var2, var9);
            var3 = 0;
            var6 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot0 = var1;
            var7 = var8.useState;
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)();
            var10 = var1.blurTintRgbaOverrideHex;
            var15 = null;
            var11 = var15 != var10;
            var1 = 'black';
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var10;
case 2:
            var1 = var7.bind(var8)(var1);
            var8 = _closure1_slot3;
            var1 = var8.bind(var4)(var1, var9);
            var24 = var1[var3];
            var _closure2_slot1 = var24;
            var1 = var1[var2];
            var _closure2_slot2 = var1;
            var7 = _closure1_slot4;
            var10 = var7.useState;
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)();
            var1 = var1.blurTintRgbaOverrideOpacity;
            var1 = var10.bind(var7)(var1);
            var1 = var8.bind(var4)(var1, var9);
            var19 = var1[var3];
            var _closure2_slot3 = var19;
            var1 = var1[var2];
            var _closure2_slot4 = var1;
            var1 = var7.useRef;
            var16 = var1.bind(var7)(var19);
            var3 = var7.useCallback;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var8 = arg1;
                    var9 = arg2;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var8);
case 4:
                    if(!(var7 != var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var9);
case 6:
                    var3 = var7 != var8;
                    var1 = undefined;
                    var4 = undefined;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var7 != var9;
                    var4 = undefined;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hexToRgbaString;
                    var4 = var3.bind(var5)(var8, var9);
case 8:
                    var5 = {};
                    var6 = _closure1_slot6;
                    var10 = var6.bind(var1)();
                    var11 = var5;
                    var6 = copyDataProperties(var11, var10);
                    var6 = 'blurTintRgbaOverrideOpacity';
                    var5[var6] = var9;
                    var6 = 'blurTintRgbaOverrideHex';
                    var5[var6] = var8;
                    var6 = 'blurTintRgbaOverride';
                    var5[var6] = var4;
                    var _closure3_slot0 = var5;
                    if(!(var7 != var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var1)(var5);
                    _fun0002_ip = 13; continue _fun0002;
case 11:
                    var4 = _closure1_slot7;
                    var3 = {};
                    var11 = var3;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    var5 = 'rgba(0, 0, 0, 0)';
                    var3[var6] = var5;
                    var3 = var4.bind(var1)(var3);
                    var3 = global;
                    var3 = var3.setTimeout;
                    var2 = function() {
                        var3 = _closure1_slot7;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
case 13:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var7)(var2, var1);
            var _closure2_slot5 = var1;
            var3 = _closure1_slot8;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 9;
            var1 = var17[var11];
            var1 = var12.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var8 = var14.zeroPaddingVertical;
            var7 = new Array(1);
            var7[0] = var8;
            var1['style'] = var7;
            var7 = var14.zeroHeight;
            var1['labelStyle'] = var7;
            var7 = var14.enabledSwitchStyle;
            var1['leadingStyle'] = var7;
            var7 = 10;
            var7 = var17[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.FormSwitch;
            var7 = {};
            var7['value'] = var6;
            var9 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var4 = _closure2_slot5;
                    if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 14:
                    var3 = var4.bind(var1)(var1, var1);
                    _fun0003_ip = 6; continue _fun0003;
case 7:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var1)(var3, var2);
case 6:
                    return var1;
                }
            };
            var7['onValueChange'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var1['leading'] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot9;
            var7 = {};
            var10 = var17[var11];
            var10 = var12.bind(var4)(var10);
            var18 = var10.FormRow;
            var10 = {};
            var20 = var14.zeroPadding;
            var10['style'] = var20;
            var20 = 'Blur Tint';
            var10['label'] = var20;
            var21 = _closure1_slot5;
            var20 = {};
            var23 = var22.tintColor;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = {};
            var23['backgroundColor'] = var24;
            var22[1] = var23;
            var20['style'] = var22;
            var20 = var3.bind(var4)(var21, var20);
            var10['trailing'] = var20;
            var18 = var3.bind(var4)(var18, var10);
            var10 = new Array(2);
            var10[0] = var18;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.FormRow;
            var11 = {};
            var14 = var14.zeroPaddingHorizontal;
            var11['style'] = var14;
            var14 = !var6;
            var11['disabled'] = var14;
            var17 = var15 == var19;
            var14 = undefined;
            if(var17) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = var19.toFixed;
            var17 = 3;
            var14 = var18.bind(var19)(var17);
case 15:
            var15 = var15 != var14;
            var17 = '';
            if(!var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var17 = var14;
case 17:
            var14 = global;
            var14 = var14.HermesInternal;
            var15 = var14.concat;
            var14 = 'Blur Tint Opacity ';
            var14 = var15.bind(var14)(var17);
            var11['label'] = var14;
            var15 = _closure1_slot8;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 11;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var17 = !var6;
            var13['disabled'] = var17;
            var13['initialValue'] = var16;
            var16 = function onValueChange(arg1) {
                var4 = _closure2_slot5;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13['onValueChange'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var11['subLabel'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['subLabel'] = var7;
            var6 = !var6;
            var1['disabled'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure1_slot0;
                var4 = 13;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.hex2int;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                var2['color'] = var4;
                var4 = function onSelect(arg1) {
                    var4 = _closure2_slot5;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.int2hex;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3);
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2['onSelect'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();