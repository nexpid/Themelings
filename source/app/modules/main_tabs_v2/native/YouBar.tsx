// app/modules/main_tabs_v2/native/YouBar.tsx
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
    var16 = 1;
    var4 = var6[var16];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var15 = 2;
    var7 = var6[var15];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useYouBarBottomMargin;
    var _closure1_slot12 = var8;
    var8 = var4.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot13 = var8;
    var14 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot14 = var14;
    var17 = var4.YOU_BAR_MARGIN;
    var _closure1_slot15 = var17;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot16 = var8;
    var8 = var4.CUSTOM_THEME_COLORS;
    var _closure1_slot17 = var8;
    var4 = var4.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot18 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot19 = var8;
    var8 = var4.jsxs;
    var _closure1_slot20 = var8;
    var4 = var4.Fragment;
    var _closure1_slot21 = var4;
    var4 = {};
    var11 = 10;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['top'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['bottom'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['left'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['right'] = var8;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var12.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 12;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot23 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'overflow': 'hidden'};
    var13 = 'row';
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_SURFACE_OVERLAY;
    var10['backgroundColor'] = var18;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.shadows;
    var20 = var18.SHADOW_TOP_HIGH;
    var21 = var10;
    var18 = copyDataProperties(var21, var20);
    var4['youRow'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var17;
    var10['borderWidth'] = var16;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_FAINT;
    var10['borderColor'] = var17;
    var17 = var14 / var15;
    var10['borderRadius'] = var17;
    var4['youRowFloating'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var10;
    var10 = {};
    var10['flex'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var10['marginRight'] = var16;
    var16 = var14 / var15;
    var10['borderRadius'] = var16;
    var4['youPressable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var14 / var15;
    var10['borderRadius'] = var14;
    var4['youButton'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'column', 'marginLeft': null, 'marginRight': null, 'justifyContent': 'center', 'height': '100%'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['marginLeft'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var10['marginRight'] = var14;
    var4['userText'] = var10;
    var10 = {};
    var10['flexDirection'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['statusRow'] = var10;
    var10 = {'width': 16, 'height': 16};
    var4['statusEmoji'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['usernameRow'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var4['youRowClientTheme'] = var10;
    var10 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['buttonContainer'] = var10;
    var10 = {'width': 20, 'height': 20};
    var4['largeButtonIcon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_DANGER;
    var10['backgroundColor'] = var13;
    var4['settingsBadge'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BRAND;
    var10['backgroundColor'] = var11;
    var4['icymiBadge'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var4['floatingShade'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot24 = var4;
    var4 = {'damping': 10, 'stiffness': 300, 'mass': 1, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot25 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.size;
            var2 = _closure1_slot24;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 15;
            var5 = var11[var2];
            var8 = var3.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var8)(var6, var5);
            var5 = var11[var2];
            var8 = var3.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var8)(var6, var5);
            var6 = _closure1_slot1;
            var19 = 16;
            var5 = var11[var19];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useName;
            var21 = var5.bind(var7)(var10);
            var5 = 17;
            var5 = var11[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useCustomStatusActivity;
            var20 = var5.bind(var7)();
            var5 = 18;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var23 = var5.bind(var4)(var20);
            var2 = var11[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var22.youButton;
            var1['style'] = var5;
            var7 = _closure1_slot19;
            var5 = 19;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['user'] = var10;
            var5['guildId'] = var4;
            var5['size'] = var9;
            var8 = !var8;
            var5['animate'] = var8;
            var8 = true;
            var5['needsOffscreenAlphaCompositing'] = var8;
            var17 = null;
            var11 = var17 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 299; continue _fun0001 }
 293:
            var9 = var10.avatarDecoration;
 299:
            var5['avatarDecoration'] = var9;
            var5['status'] = var18;
            var5['autoStatusCutout'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var22.userText;
            var6['style'] = var9;
            var9 = {};
            var10 = var22.usernameRow;
            var9['style'] = var10;
            var13 = _closure1_slot19;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 20;
            var10 = var14[var15];
            var10 = var12.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-md/bold', 'color': 'header-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75};
            var10['children'] = var21;
            var11 = var13.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 21;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ChevronSmallRightIcon;
            var21 = 'xs';
            var11 = {'size': 'xs', 'color': 'header-secondary'};
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var9['children'] = var10;
            var10 = var8.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = var22.statusRow;
            var10['style'] = var11;
            var11 = var17 != var23;
            var12 = null;
            if(!var11) { _fun0001_ip = 545; continue _fun0001 }
 505:
            var14 = _closure1_slot19;
            var13 = _closure1_slot1;
            var24 = _closure1_slot2;
            var11 = 22;
            var11 = var24[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var11['label'] = var23;
            var11['size'] = var21;
            var12 = var14.bind(var4)(var13, var11);
 545:
            var11 = new Array(3);
            var11[0] = var12;
            var13 = var17 == var20;
            var12 = undefined;
            if(var13) { _fun0001_ip = 568; continue _fun0001 }
 562:
            var12 = var20.emoji;
 568:
            var13 = var17 != var12;
            var12 = null;
            if(!var13) { _fun0001_ip = 634; continue _fun0001 }
 577:
            var21 = _closure1_slot19;
            var14 = _closure1_slot1;
            var23 = _closure1_slot2;
            var13 = 23;
            var13 = var23[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['size'] = var19;
            var22 = var22.statusEmoji;
            var13['style'] = var22;
            var22 = var20.emoji;
            var13['emoji'] = var22;
            var12 = var21.bind(var4)(var14, var13);
 634:
            var11[1] = var12;
            var14 = _closure1_slot19;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-xs/medium', 'color': 'text-normal', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var21 = var17 == var20;
            var15 = undefined;
            if(var21) { _fun0001_ip = 692; continue _fun0001 }
 687:
            var15 = var20.state;
 692:
            if(!(var17 == var15)) { _fun0001_ip = 724; continue _fun0001 }
 696:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var17 = var17.bind(var4)(var16);
            var16 = var17.humanizeStatus;
            var15 = var16.bind(var17)(var18);
 724:
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[2] = var12;
            var10['children'] = var11;
            var10 = var8.bind(var4)(var7, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var11 = var2.hasNameplate;
            var14 = var2.icon;
            var9 = var2.hasBadge;
            var _closure2_slot0 = var9;
            var15 = var2.badgeStyle;
            var8 = var2.onPress;
            var10 = var2.a11yLabel;
            var2 = _closure1_slot24;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0003_ip = 28; continue _fun0003 }
 26:
                    var7 = 0;
 28:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0003_ip = 44; continue _fun0003 }
 42:
                    var6 = 0;
 44:
                    var _closure3_slot2 = var6;
                    var10 = var2.badgeRadius;
                    var _closure3_slot3 = var10;
                    var5 = var2.badgeWidth;
                    var _closure3_slot4 = var5;
                    var9 = var2.borderWidth;
                    var _closure3_slot5 = var9;
                    var4 = _closure1_slot5;
                    var3 = var4.useMemo;
                    var2 = new Array(6);
                    var2[0] = var10;
                    var2[1] = var9;
                    var2[2] = var8;
                    var2[3] = var7;
                    var2[4] = var6;
                    var2[5] = var5;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0004_ip = 51; continue _fun0004 }
 35:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
 51:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 14;
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
            var2 = {'size': 20, 'badgeRadius': 4, 'borderWidth': 2};
            var12 = var3.bind(var4)(var2);
            var _closure2_slot1 = var12;
            var16 = 8;
            var3 = function useIconContentStyle(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0005_ip = 38; continue _fun0005 }
 36:
                    var5 = 0;
 38:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0005_ip = 54; continue _fun0005 }
 52:
                    var6 = 0;
 54:
                    var _closure3_slot3 = var6;
                    var4 = _closure1_slot5;
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
            var2 = {'size': 20, 'badgeSize': 8};
            var17 = var3.bind(var4)(var2);
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0006_ip = 16; continue _fun0006 }
 10:
                    var1 = new Array(0);
                    _fun0006_ip = 31; continue _fun0006;
 16:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 31:
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot20;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 20, 'width': 20};
            var1['style'] = var6;
            var13 = _closure1_slot19;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 14;
            var6 = var19[var6];
            var12 = var12.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var18;
            var6['children'] = var14;
            var12 = var13.bind(var4)(var12, var6);
            var6 = new Array(2);
            var6[0] = var12;
            if(!var9) { _fun0002_ip = 274; continue _fun0002 }
 229:
            var14 = _closure1_slot19;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 24;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['style'] = var17;
            var12['size'] = var16;
            var12['badgeStyle'] = var15;
            var9 = var14.bind(var4)(var13, var12);
 274:
            var6[1] = var9;
            var1['children'] = var6;
            var9 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 25;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var10;
            var10 = 'tertiary';
            if(!var11) { _fun0002_ip = 355; continue _fun0002 }
 349:
            var10 = 'secondary-overlay';
 355:
            var5['variant'] = var10;
            var10 = 'md';
            var5['size'] = var10;
            var5['icon'] = var9;
            var5['onPress'] = var8;
            var7 = _closure1_slot22;
            var5['hitSlop'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot27 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var11 = var1.hasNameplate;
            var1 = _closure1_slot24;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 26;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['hasNameplate'] = var11;
            var9 = _closure1_slot0;
            var8 = 27;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var10 = 'custom';
            var8['size'] = var10;
            var10 = var6.largeButtonIcon;
            var8['style'] = var10;
            var10 = undefined;
            if(!var11) { _fun0007_ip = 118; continue _fun0007 }
 114:
            var10 = 'white';
 118:
            var8['color'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0008_ip = 128; continue _fun0008 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'icymi-screen';
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = true;
                    var2['inNestedNavigator'] = var6;
                    var3['params'] = var2;
                    var2 = 'icymi';
                    var2 = var4.bind(var5)(var2, var3);
 128:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 30;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.SY4sdX;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var19 = var1.hasNameplate;
            var1 = _closure1_slot24;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 31;
            var1 = var14[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var18 = var1.value;
            var _closure2_slot0 = var18;
            var12 = _closure1_slot0;
            var13 = 11;
            var1 = var14[var13];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function o() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 32;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0010_ip = 55; continue _fun0010 }
 52:
                    var9 = 1;
 55:
                    var3 = _closure1_slot25;
                    var3 = var10.bind(var11)(var9, var3);
                    var4['scaleX'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withSpring;
                    var3 = _closure2_slot0;
                    var3 = var3 > var5;
                    var4 = 0;
                    if(!var3) { _fun0010_ip = 148; continue _fun0010 }
 117:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 10;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.spacing;
                    var4 = var3.PX_4;
 148:
                    var3 = _closure1_slot25;
                    var3 = var9.bind(var10)(var4, var3);
                    var1['marginLeft'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withSpring;
                    var6 = _closure2_slot0;
                    var6 = var6 > var5;
                    var5 = 0;
                    if(!var6) { _fun0010_ip = 201; continue _fun0010 }
 198:
                    var5 = 1;
 201:
                    var2 = _closure1_slot25;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var6 = 32;
            var6 = var14[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.withSpring;
            var5['withSpring'] = var6;
            var5['badgeCount'] = var18;
            var6 = _closure1_slot25;
            var5['SPRING_CONFIG'] = var6;
            var6 = 10;
            var6 = var14[var6];
            var6 = var9.bind(var4)(var6);
            var5['tokens'] = var6;
            var1['__closure'] = var5;
            var5 = 1585764461309.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot29;
            var1['__initData'] = var5;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var17.buttonContainer;
            var1['style'] = var5;
            var5 = 25;
            var5 = var14[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var9 = 30;
            var10 = var14[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.HcoRu7;
            var9 = var10.bind(var11)(var9);
            var5['accessibilityLabel'] = var9;
            var9 = 'tertiary';
            if(!var19) { _fun0009_ip = 283; continue _fun0009 }
 277:
            var9 = 'secondary-overlay';
 283:
            var5['variant'] = var9;
            var9 = 'md';
            var5['size'] = var9;
            var11 = _closure1_slot20;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var9['style'] = var12;
            var15 = _closure1_slot19;
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 33;
            var12 = var20[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.BellIcon;
            var12 = {};
            var20 = 'custom';
            var12['size'] = var20;
            var17 = var17.largeButtonIcon;
            var12['style'] = var17;
            var17 = undefined;
            if(!var19) { _fun0009_ip = 382; continue _fun0009 }
 378:
            var17 = 'white';
 382:
            var12['color'] = var17;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot19;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = var19[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var13['style'] = var16;
            var16 = 34;
            var16 = var19[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['value'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5['icon'] = var9;
            var8 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 110; continue _fun0011 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
 110:
                    return var1;
                }
            };
            var5['onPress'] = var8;
            var7 = _closure1_slot22;
            var5['hitSlop'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var11 = var1.hasNameplate;
            var1 = _closure1_slot24;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 35;
            var1 = var10[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useHasSettingsBadge;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['hasNameplate'] = var11;
            var8 = 36;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.SettingsIcon;
            var8 = {};
            var10 = 'custom';
            var8['size'] = var10;
            var10 = var6.largeButtonIcon;
            var8['style'] = var10;
            var10 = undefined;
            if(!var11) { _fun0012_ip = 114; continue _fun0012 }
 110:
            var10 = 'white';
 114:
            var8['color'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.settingsBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0013_ip = 100; continue _fun0013 }
 85:
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
 100:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 30;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.3D5yo6;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(){const{withSpring,isPressed,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed?0.98:1,SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = _closure1_slot24;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var _closure2_slot0 = var11;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 37;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.width;
            var3 = _closure1_slot0;
            var1 = 38;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useDrawerWidth;
            var3 = var1.bind(var3)();
            var1 = 39;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.isChatBesideChannelList;
            var1 = _closure1_slot15;
            var6 = 2;
            var1 = var6 * var1;
            if(var7) { _fun0014_ip = 116; continue _fun0014 }
 110:
            var22 = var5 - var1;
            _fun0014_ip = 120; continue _fun0014;
 116:
            var22 = var3 - var1;
 120:
            var _closure2_slot1 = var22;
            var1 = _closure1_slot12;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var7 = _closure1_slot5;
            var8 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var22;
            var5[1] = var1;
            var5[2] = var11;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var6 = var3.youRow;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var6 = var3.youRowFloating;
                var7 = var1;
                var3 = copyDataProperties(var7, var6);
                var5 = _closure1_slot14;
                var4 = 'height';
                var1[var4] = var5;
                var5 = _closure2_slot2;
                var4 = 'marginBottom';
                var1[var4] = var5;
                var4 = _closure1_slot16;
                var3 = 1;
                var4 = var4 - var3;
                var3 = 'padding';
                var1[var3] = var4;
                var3 = _closure2_slot1;
                var2 = 'width';
                var1[var2] = var3;
                return var1;
            };
            var19 = var8.bind(var7)(var3, var5);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 40;
            var3 = var17[var3];
            var8 = var16.bind(var4)(var3);
            var5 = var8.useICYMIExperiment;
            var3 = 'TabsNavigator';
            var14 = var5.bind(var8)(var3);
            var18 = _closure1_slot1;
            var3 = 41;
            var3 = var17[var3];
            var5 = var18.bind(var4)(var3);
            var3 = 'hide_icymi_tab';
            var9 = var5.bind(var4)(var3);
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setTabsHeight;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.layout;
                var5 = var2.height;
                var2 = _closure2_slot2;
                var2 = var5 + var2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var5.bind(var7)(var1, var3);
            var1 = 15;
            var3 = var17[var1];
            var12 = var16.bind(var4)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var8.bind(var12)(var7, var3);
            var3 = 43;
            var3 = var17[var3];
            var8 = var16.bind(var4)(var3);
            var7 = var8.useNameplate;
            var3 = {};
            var3['user'] = var12;
            var20 = var7.bind(var8)(var3);
            var12 = null;
            var13 = var12 != var20;
            var3 = 44;
            var3 = var17[var3];
            var3 = var18.bind(var4)(var3);
            var15 = var3.bind(var4)();
            var3 = 10;
            var7 = var17[var3];
            var7 = var18.bind(var4)(var7);
            var8 = var7.internal;
            var7 = var8.resolveSemanticColor;
            var3 = var17[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_SURFACE_OVERLAY;
            var3 = var7.bind(var8)(var15, var3);
            var1 = var17[var1];
            var15 = var16.bind(var4)(var1);
            var8 = var15.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var8.bind(var15)(var7, var1);
            var7 = 45;
            var8 = var17[var7];
            var15 = var16.bind(var4)(var8);
            var8 = var15.useGradientValue;
            var7 = var17[var7];
            var7 = var16.bind(var4)(var7);
            var7 = var7.GradientPercentage;
            var7 = var7.END;
            var18 = var8.bind(var15)(var7);
            if(var13) { _fun0014_ip = 529; continue _fun0014 }
 493:
            if(!(var12 != var1)) { _fun0014_ip = 529; continue _fun0014 }
 497:
            var8 = _closure1_slot17;
            var7 = var1.id;
            var7 = var8[var7];
            if(!(var12 != var7)) { _fun0014_ip = 529; continue _fun0014 }
 514:
            var7 = _closure1_slot17;
            var1 = var1.id;
            var21 = var7[var1];
            _fun0014_ip = 631; continue _fun0014;
 529:
            var21 = var3;
            if(var13) { _fun0014_ip = 631; continue _fun0014 }
 535:
            var1 = var12 != var18;
            var21 = undefined;
            if(!var1) { _fun0014_ip = 631; continue _fun0014 }
 544:
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 46;
            var8 = var17[var1];
            var16 = var7.bind(var4)(var8);
            var15 = var16.mix;
            var8 = var17[var1];
            var8 = var7.bind(var4)(var8);
            var8 = var8.bind(var4)(var18);
            var1 = var17[var1];
            var1 = var7.bind(var4)(var1);
            var27 = var1.bind(var4)(var3);
            var26 = 0.8;
            var25 = 'hsl';
            var29 = var16;
            var28 = var8;
            var3 = var29[var15](var28, var27, var26, var25, var24);
            var1 = var3.hex;
            var21 = var1.bind(var3)();
 631:
            var23 = _closure1_slot5;
            var1 = var23.useState;
            var7 = false;
            var3 = var1.bind(var23)(var7);
            var1 = _closure1_slot4;
            var3 = var1.bind(var4)(var3, var6);
            var1 = 0;
            var17 = var3[var1];
            var _closure2_slot3 = var17;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot4 = var1;
            var24 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var3 = var6[var1];
            var15 = var24.bind(var4)(var3);
            var8 = var15.useAnimatedStyle;
            var3 = function j() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 32;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot3;
                    var4 = 1;
                    if(!var7) { _fun0015_ip = 57; continue _fun0015 }
 47:
                    var4 = 0.98;
 57:
                    var2 = _closure1_slot25;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var18 = 32;
            var18 = var6[var18];
            var18 = var24.bind(var4)(var18);
            var18 = var18.withSpring;
            var16['withSpring'] = var18;
            var16['isPressed'] = var17;
            var17 = _closure1_slot25;
            var16['SPRING_CONFIG'] = var17;
            var3['__closure'] = var16;
            var16 = 2297288852804.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot32;
            var3['__initData'] = var16;
            var8 = var8.bind(var15)(var3);
            var16 = var23.useCallback;
            var15 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_MEDIUM;
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0016_ip = 124; continue _fun0016 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'you';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure2_slot4;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
 124:
                    return var1;
                }
            };
            var3 = new Array(0);
            var16 = var16.bind(var23)(var15, var3);
            var17 = var23.useCallback;
            var15 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 137; continue _fun0017 }
 10:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 28;
                        var6 = var2[var4];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var2[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.IMPACT_LIGHT;
                        var4 = var6.bind(var7)(var4);
                        var4 = 48;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 47;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=101);
 99:
                        return var2;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0017_ip = 134; continue _fun0017 }
 107:
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 134:
                        return var2;
 137:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var3);
            var3 = new Array(0);
            var15 = var17.bind(var23)(var15, var3);
            var18 = var23.useCallback;
            var17 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var18 = var18.bind(var23)(var17, var3);
            var17 = var23.useCallback;
            var3 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var17 = var17.bind(var23)(var3, var2);
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = new Array(3);
            var6[0] = var19;
            var6[1] = var8;
            var19 = var12 != var21;
            var8 = null;
            if(!var19) { _fun0014_ip = 936; continue _fun0014 }
 927:
            var19 = {};
            var19['backgroundColor'] = var21;
            var8 = var19;
 936:
            var6[2] = var8;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var8 = _closure1_slot19;
            var6 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 49;
            var5 = var19[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var21 = {};
            var21['width'] = var22;
            var22 = -1;
            var21['left'] = var22;
            var23 = _closure1_slot14;
            var21['height'] = var23;
            var21['top'] = var22;
            var5['style'] = var21;
            var5['nameplate'] = var20;
            var20 = true;
            var5['isFocused'] = var20;
            var5['animate'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var7 = _closure1_slot7;
            var6 = {};
            var20 = var11.youPressable;
            var6['style'] = var20;
            var20 = {};
            var21 = 'transparent';
            var20['color'] = var21;
            var6['android_ripple'] = var20;
            var6['onPressIn'] = var18;
            var6['onPressOut'] = var17;
            var6['onPress'] = var16;
            var6['onLongPress'] = var15;
            var15 = _closure1_slot22;
            var6['hitSlop'] = var15;
            var16 = _closure1_slot26;
            var15 = {};
            var18 = _closure1_slot0;
            var17 = 19;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.NORMAL;
            var15['size'] = var17;
            var15 = var8.bind(var4)(var16, var15);
            var6['children'] = var15;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var11.youRowRight;
            var6['style'] = var11;
            var11 = null;
            if(!var14) { _fun0014_ip = 1206; continue _fun0014 }
 1180:
            var11 = null;
            if(var9) { _fun0014_ip = 1206; continue _fun0014 }
 1185:
            var14 = _closure1_slot19;
            var12 = _closure1_slot28;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
 1206:
            var9 = new Array(3);
            var9[0] = var11;
            var12 = _closure1_slot19;
            var14 = _closure1_slot30;
            var11 = {};
            var11['hasNameplate'] = var13;
            var11 = var12.bind(var4)(var14, var11);
            var9[1] = var11;
            var11 = _closure1_slot31;
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function YouBarTsx3(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = _closure1_slot24;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot12;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot13;
            var2 = var3 + var2;
            var13 = var2 + var17;
            var _closure2_slot0 = var13;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 37;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.width;
            var _closure2_slot1 = var12;
            var5 = _closure1_slot0;
            var2 = 11;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function n() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['height'] = var3;
                var3 = 1;
                var1['opacity'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            };
            var11 = {};
            var11['gradientHeight'] = var13;
            var11['drawerWidth'] = var12;
            var2['__closure'] = var11;
            var11 = 3050704425104.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot34;
            var2['__initData'] = var11;
            var12 = var3.bind(var7)(var2);
            var2 = 15;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var11 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var2 = 45;
            var3 = var10[var2];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useGradientValue;
            var2 = var10[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GradientPercentage;
            var2 = var2.END;
            var3 = var3.bind(var7)(var2);
            var2 = 50;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var5 = var7.useToken;
            var2 = 10;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BG_BASE_TERTIARY;
            var5 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var1)) { _fun0018_ip = 311; continue _fun0018 }
 294:
            var8 = _closure1_slot18;
            var7 = var1.id;
            var7 = var8[var7];
            if(!(var2 == var7)) { _fun0018_ip = 323; continue _fun0018 }
 311:
            var8 = var5;
            if(!(var2 != var3)) { _fun0018_ip = 336; continue _fun0018 }
 318:
            var8 = var3;
            _fun0018_ip = 336; continue _fun0018;
 323:
            var3 = _closure1_slot18;
            var1 = var1.id;
            var8 = var3[var1];
 336:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 51;
            var1 = var1[var7];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0.97;
            var1 = var3.bind(var5)(var8, var1);
            var5 = var2 != var1;
            var11 = 'transparent';
            var3 = var11;
            if(!var5) { _fun0018_ip = 395; continue _fun0018 }
 392:
            var3 = var1;
 395:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var5)(var3, var15);
            var2 = var2 != var1;
            var10 = var3;
            if(!var2) { _fun0018_ip = 439; continue _fun0018 }
 436:
            var11 = var1;
 439:
            var3 = _closure1_slot20;
            var2 = _closure1_slot21;
            var1 = {};
            var8 = _closure1_slot19;
            var7 = _closure1_slot6;
            var5 = {};
            var14 = var9.floatingShade;
            var13 = new Array(3);
            var13[0] = var14;
            var13[1] = var12;
            var14 = {};
            var16 = _closure1_slot14;
            var16 = var16 + var17;
            var14['height'] = var16;
            var14['opacity'] = var15;
            var13[2] = var14;
            var5['style'] = var13;
            var13 = 'box-only';
            var5['pointerEvents'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot23;
            var6 = {};
            var13 = var9.floatingShade;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var12;
            var6['style'] = var9;
            var9 = new Array(3);
            var9[0] = var11;
            var9[1] = var10;
            var9[2] = var10;
            var6['colors'] = var9;
            var9 = {'x': 0, 'y': 0};
            var6['start'] = var9;
            var9 = {'x': 0, 'y': 1};
            var6['end'] = var9;
            var9 = [0, 0.7, 1];
            var6['locations'] = var9;
            var9 = 'none';
            var6['pointerEvents'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot35 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 15;
        var1 = var7[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var1);
        var5 = var8.useStateFromStores;
        var1 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot9;
            var1 = var1.gradientPreset;
            return var1;
        };
        var5 = var5.bind(var8)(var3, var1);
        var3 = _closure1_slot20;
        var1 = 52;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot19;
        var7 = _closure1_slot35;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot33;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ThemedYouBar'] = var2;
    return var1;
})();