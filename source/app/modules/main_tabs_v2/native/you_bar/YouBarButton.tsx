// app/modules/main_tabs_v2/native/you_bar/YouBarButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function YouBarButtonIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.icon;
            var6 = var2.hasBadge;
            var _closure2_slot0 = var6;
            var10 = var2.badgeStyle;
            var3 = {'size': null, 'badgeRadius': 4, 'borderWidth': 2};
            var2 = _closure1_slot6;
            var3['size'] = var2;
            var2 = function useIconBadgeCutout(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = 0;
case 2:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = 0;
case 4:
                    var _closure3_slot2 = var6;
                    var10 = var2.badgeRadius;
                    var _closure3_slot3 = var10;
                    var5 = var2.badgeWidth;
                    var _closure3_slot4 = var5;
                    var9 = var2.borderWidth;
                    var _closure3_slot5 = var9;
                    var4 = _closure1_slot3;
                    var3 = var4.useMemo;
                    var2 = new Array(6);
                    var2[0] = var10;
                    var2[1] = var9;
                    var2[2] = var8;
                    var2[3] = var7;
                    var2[4] = var6;
                    var2[5] = var5;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
case 6:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 6;
                            var8 = var8[var3];
                            var3 = undefined;
                            var3 = var9.bind(var3)(var8);
                            var3 = var3.CutoutShape;
                            var3 = var3.RoundedRect;
                            var1['shape'] = var3;
                            var3 = _closure3_slot0;
                            var8 = _closure3_slot5;
                            var9 = var4 - var8;
                            var10 = var3 - var9;
                            var9 = _closure3_slot1;
                            var9 = var10 + var9;
                            var1['x'] = var9;
                            var8 = var4 - var8;
                            var8 = var3 - var8;
                            var5 = _closure3_slot2;
                            var5 = var8 + var5;
                            var1['y'] = var5;
                            var1['width'] = var2;
                            var1['height'] = var4;
                            var4 = global;
                            var5 = var4.Math;
                            var4 = var5.min;
                            var3 = var3 / var7;
                            var2 = var2 / var7;
                            var2 = var4.bind(var5)(var6, var3, var2);
                            var1['cornerRadius'] = var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var4 = undefined;
            var8 = var2.bind(var4)(var3);
            var _closure2_slot1 = var8;
            var3 = {};
            var2 = _closure1_slot6;
            var3['size'] = var2;
            var11 = 8;
            var3['badgeSize'] = var11;
            var2 = function useIconContentStyle(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var5 = 0;
case 8:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var6 = 0;
case 10:
                    var _closure3_slot3 = var6;
                    var4 = _closure1_slot3;
                    var3 = var4.useMemo;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        var1 = {};
                        var2 = 'absolute';
                        var1['position'] = var2;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var6 = var4 - var3;
                        var5 = _closure3_slot2;
                        var5 = var6 + var5;
                        var1['left'] = var5;
                        var3 = var4 - var3;
                        var2 = _closure3_slot3;
                        var2 = var3 + var2;
                        var1['top'] = var2;
                        var2 = undefined;
                        var1['right'] = var2;
                        var1['bottom'] = var2;
                        var1['padding'] = var2;
                        var1['minWidth'] = var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var12 = var2.bind(var4)(var3);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var1 = new Array(0);
                    _fun0005_ip = 14; continue _fun0005;
case 12:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = {};
            var8 = 'relative';
            var5['position'] = var8;
            var8 = _closure1_slot6;
            var5['height'] = var8;
            var8 = _closure1_slot6;
            var5['width'] = var8;
            var1['style'] = var5;
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 6;
            var5 = var15[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['cutouts'] = var14;
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 7;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['style'] = var12;
            var7['size'] = var11;
            var7['badgeStyle'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function YouBarButtonContainer(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot9;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.buttonContainer;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var2;
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
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.YOU_BAR_BUTTON_HIT_SLOP;
    var _closure1_slot5 = var9;
    var5 = var5.YOU_BAR_BUTTON_ICON_SIZE;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot7 = var9;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var12 = 5;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.modules;
    var12 = var12.button;
    var12 = var12.BORDER_RADIUS;
    var11['borderRadius'] = var12;
    var5['buttonContainer'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var5 = var8.memo;
    var4 = function YouBarButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var11 = var1.hasNameplate;
            var15 = var1.icon;
            var13 = var1.hasBadge;
            var14 = var1.badgeStyle;
            var9 = var1.onPress;
            var8 = var1.onLongPress;
            var10 = var1.accessibilityLabel;
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var10;
            var10 = 'tertiary';
            if(!var11) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var10 = 'secondary-overlay';
case 17:
            var5['variant'] = var10;
            var10 = 'sm';
            var5['size'] = var10;
            var12 = _closure1_slot7;
            var11 = _closure1_slot10;
            var10 = {};
            var10['icon'] = var15;
            var10['badgeStyle'] = var14;
            var10['hasBadge'] = var13;
            var10 = var12.bind(var1)(var11, var10);
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var5['onLongPress'] = var8;
            var7 = _closure1_slot5;
            var5['hitSlop'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/you_bar/YouBarButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['YouBarButtonContainer'] = var2;
    return var1;
})();