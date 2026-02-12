// app/modules/main_tabs_v2/native/YouBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function UsernameAnimated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.userId;
            var9 = var1.username;
            var16 = var1.transitionState;
            var _closure2_slot0 = var16;
            var15 = var1.onCleanup;
            var _closure2_slot1 = var15;
            var1 = _closure1_slot27;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 14;
            var3 = var14[var1];
            var7 = var13.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var11 = 0;
            var12 = var3.bind(var7)(var11);
            var _closure2_slot2 = var12;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var16;
            var3[1] = var12;
            var3[2] = var15;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 20;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot28;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var7 = 14;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['onCleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 15382259463637.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot30;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 5; continue _fun0002;
case 2:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot29;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot23;
            var7 = _closure1_slot1;
            var1 = var14[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var5.usernameRow;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = {};
            var8['opacity'] = var12;
            var5[1] = var8;
            var1['style'] = var5;
            var8 = _closure1_slot22;
            var5 = 21;
            var5 = var14[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'userId': null, 'userName': null, 'defaultColor': 'mobile-text-heading-primary', 'variant': 'heading-md/bold', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var5['userId'] = var10;
            var5['userName'] = var9;
            var10 = 1;
            var9 = {};
            var12 = 22;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = 2;
case 7:
            var9['paddingBottom'] = var11;
            var9['flexShrink'] = var10;
            var5['style'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = _closure1_slot31;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function YouAvatarAnimated(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var17 = var2.selectedGuildId;
            var10 = var2.transitionState;
            var _closure2_slot0 = var10;
            var12 = var2.cleanup;
            var _closure2_slot1 = var12;
            var2 = _closure1_slot27;
            var5 = undefined;
            var9 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 23;
            var6 = var4[var2];
            var11 = var3.bind(var5)(var6);
            var8 = var11.useStateFromStores;
            var6 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var8.bind(var11)(var7, var6);
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var8)(var6, var2);
            var2 = 14;
            var6 = var4[var2];
            var8 = var3.bind(var5)(var6);
            var7 = var8.useSharedValue;
            var6 = 0;
            var6 = var7.bind(var8)(var6);
            var _closure2_slot2 = var6;
            var11 = _closure1_slot5;
            var8 = var11.useEffect;
            var7 = new Array(3);
            var7[0] = var10;
            var7[1] = var6;
            var7[2] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0004_ip = 2; continue _fun0004 }
case 4:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0004_ip = 5; continue _fun0004 }
case 6:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 20;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot28;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var7 = 14;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['cleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 16071268952598.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot32;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 5; continue _fun0004;
case 2:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot29;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var1 = var8.bind(var11)(var1, var7);
            var1 = 24;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useAvatarDecoration;
            var16 = null;
            var7 = var16 != var17;
            var1 = undefined;
            if(!var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var17;
case 9:
            var15 = var3.bind(var4)(var18, var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var19 = 25;
            var1 = var1[var19];
            var1 = var3.bind(var5)(var1);
            var1 = var1.AvatarSizes;
            var12 = var1.XLARGE_72;
            var3 = var16 == var18;
            var1 = null;
            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot22;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var7 = {};
            var8 = _closure1_slot0;
            var20 = 26;
            var21 = var11[var20];
            var21 = var8.bind(var5)(var21);
            var22 = var21.AVATAR_SIZE_MAP;
            var21 = var11[var19];
            var21 = var8.bind(var5)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.NORMAL;
            var21 = var22[var21];
            var7['height'] = var21;
            var21 = var11[var20];
            var21 = var8.bind(var5)(var21);
            var22 = var21.AVATAR_SIZE_MAP;
            var21 = var11[var19];
            var21 = var8.bind(var5)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.NORMAL;
            var21 = var22[var21];
            var7['width'] = var21;
            var7['opacity'] = var6;
            var6 = 19;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.TransitionStates;
            var8 = var6.YEETED;
            var6 = 'relative';
            if(!(var10 === var8)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = 'absolute';
case 13:
            var7['position'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.avatarShadow;
            var10 = new Array(2);
            var10[0] = var9;
            var11 = {};
            var9 = 'absolute';
            var11['position'] = var9;
            var24 = _closure1_slot0;
            var9 = _closure1_slot2;
            var21 = var9[var20];
            var21 = var24.bind(var5)(var21);
            var21 = var21.AVATAR_SIZE_MAP;
            var21 = var21[var12];
            var22 = 2;
            var21 = var21 + var22;
            var11['width'] = var21;
            var21 = var9[var20];
            var21 = var24.bind(var5)(var21);
            var21 = var21.AVATAR_SIZE_MAP;
            var21 = var21[var12];
            var21 = var21 + var22;
            var11['height'] = var21;
            var21 = _closure1_slot16;
            var22 = -var21;
            var21 = 1;
            var22 = var22 - var21;
            var11['left'] = var22;
            var22 = _closure1_slot16;
            var22 = -var22;
            var20 = var9[var20];
            var20 = var24.bind(var5)(var20);
            var23 = var20.AVATAR_SIZE_MAP;
            var20 = var9[var19];
            var20 = var24.bind(var5)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XLARGE_72;
            var23 = var23[var20];
            var20 = _closure1_slot15;
            var20 = var23 - var20;
            var20 = var22 - var20;
            var20 = var20 - var21;
            var11['top'] = var20;
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot22;
            var10 = _closure1_slot1;
            var9 = var9[var19];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['user'] = var18;
            var18 = var16 != var17;
            var16 = undefined;
            if(!var18) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var16 = var17;
case 15:
            var9['guildId'] = var16;
            var9['size'] = var12;
            var12 = false;
            var9['animate'] = var12;
            var12 = true;
            var9['needsOffscreenAlphaCompositing'] = var12;
            var9['avatarDecoration'] = var15;
            var15 = _closure1_slot20;
            var15 = var15.UNKNOWN;
            if(!(var13 === var15)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var14 = _closure1_slot20;
            var13 = var14.OFFLINE;
case 17:
            var9['status'] = var13;
            var9['autoStatusCutout'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var14 = 1;
    var4 = var6[var14];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var18 = 2;
    var7 = var6[var18];
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useYouBarBottomMargin;
    var _closure1_slot13 = var8;
    var8 = var4.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot14 = var8;
    var17 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var17;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot16 = var8;
    var8 = var4.CUSTOM_THEME_COLORS;
    var _closure1_slot17 = var8;
    var8 = var4.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot18 = var8;
    var4 = var4.useYouBarHorizontalMargin;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_PADDING;
    var _closure1_slot21 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot22 = var9;
    var8 = var4.jsxs;
    var _closure1_slot23 = var8;
    var4 = var4.Fragment;
    var _closure1_slot24 = var4;
    var4 = {};
    var12 = 13;
    var8 = var6[var12];
    var8 = var13.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['top'] = var8;
    var8 = var6[var12];
    var8 = var13.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['bottom'] = var8;
    var8 = var6[var12];
    var8 = var13.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['left'] = var8;
    var8 = var6[var12];
    var8 = var13.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['right'] = var8;
    var _closure1_slot25 = var4;
    var4 = 14;
    var4 = var6[var4];
    var10 = var13.bind(var1)(var4);
    var8 = var10.createAnimatedComponent;
    var4 = 15;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var8.bind(var10)(var4);
    var _closure1_slot26 = var4;
    var15 = 16;
    var4 = var6[var15];
    var10 = var5.bind(var1)(var4);
    var8 = var10.createStyles;
    var4 = {};
    var11 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var16 = 'row';
    var19 = var6[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.shadows;
    var21 = var19.SHADOW_TOP_HIGH;
    var22 = var11;
    var19 = copyDataProperties(var22, var21);
    var4['youRow'] = var11;
    var11 = {};
    var11['borderWidth'] = var14;
    var19 = var6[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BORDER_MUTED;
    var11['borderColor'] = var19;
    var19 = var17 / var18;
    var11['borderRadius'] = var19;
    var4['youRowFloating'] = var11;
    var11 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var11;
    var11 = {};
    var11['flex'] = var14;
    var19 = var6[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var11['marginRight'] = var19;
    var19 = var17 / var18;
    var11['borderRadius'] = var19;
    var4['youPressable'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'borderRadius': null, 'gap': 32};
    var17 = var17 / var18;
    var11['borderRadius'] = var17;
    var4['youButton'] = var11;
    var11 = {'flex': 1, 'flexDirection': 'column', 'justifyContent': 'center', 'height': '100%', 'gap': 2};
    var4['userText'] = var11;
    var11 = {'position': 'relative', 'overflow': 'hidden'};
    var4['usernameContainer'] = var11;
    var11 = {};
    var11['flexDirection'] = var16;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11['gap'] = var16;
    var4['statusRow'] = var11;
    var11 = {'width': 16, 'height': 16};
    var4['statusEmoji'] = var11;
    var11 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['usernameRow'] = var11;
    var11 = {};
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_MUTED;
    var11['backgroundColor'] = var16;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var11['borderRadius'] = var16;
    var11['height'] = var15;
    var15 = 80;
    var11['width'] = var15;
    var4['placeholder'] = var11;
    var11 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11['borderRadius'] = var15;
    var4['buttonContainer'] = var11;
    var11 = {'width': 20, 'height': 20};
    var4['largeButtonIcon'] = var11;
    var11 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var11['backgroundColor'] = var15;
    var4['icymiBadge'] = var11;
    var11 = {};
    var11['borderWidth'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11['borderColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.shadows;
    var21 = var14.SHADOW_MEDIUM;
    var22 = var11;
    var14 = copyDataProperties(var22, var21);
    var4['avatarShadow'] = var11;
    var11 = {'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11['borderColor'] = var12;
    var4['placeholderAvatar'] = var11;
    var11 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var4['floatingShade'] = var11;
    var4 = var8.bind(var10)(var4);
    var _closure1_slot27 = var4;
    var4 = {'damping': 10, 'stiffness': 300, 'mass': 1, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot28 = var4;
    var4 = {'damping': 20, 'stiffness': 200, 'mass': 1, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChevronSmallRightIcon;
    var4 = {'size': 'xs', 'color': 'text-default'};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var8 = function YouName() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot27;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 27;
            var1 = var2[var1];
            var1 = var6.bind(var4)(var1);
            var5 = var1.YouBarExperiment;
            var3 = var5.useConfig;
            var1 = {};
            var7 = 'YouBar';
            var1['location'] = var7;
            var1 = var3.bind(var5)(var1);
            var3 = var1.animateBetweenServers;
            var5 = 23;
            var1 = var2[var5];
            var9 = var6.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var _closure2_slot0 = var1;
            var7 = var2[var5];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var9.bind(var10)(var8, var7);
            var7 = var2[var5];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var8, var7);
            var _closure2_slot1 = var7;
            var5 = var2[var5];
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                    var4 = _closure1_slot9;
                    var3 = var4.getSelfMember;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var5);
            var6 = _closure1_slot1;
            var17 = 28;
            var2 = var2[var17];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useName;
            var7 = var2.bind(var6)(var1);
            var2 = var7;
            if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var3 = null;
            var8 = var3 == var5;
            var6 = undefined;
            if(var8) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var6 = var5.nick;
case 24:
            var2 = var7;
            if(!(var3 != var6)) { _fun0005_ip = 22; continue _fun0005 }
case 26:
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var3 = var5.nick;
case 27:
            var2 = var3;
case 22:
            var _closure2_slot2 = var2;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var1 = new Array(0);
                    _fun0007_ip = 31; continue _fun0007;
case 29:
                    var3 = _closure2_slot2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var21 = var5.bind(var6)(var2, var3);
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 29;
            var2 = var25[var2];
            var3 = var24.bind(var4)(var2);
            var2 = var3.useCustomStatusActivity;
            var18 = var2.bind(var3)();
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var6 = _closure1_slot22;
                    var5 = _closure1_slot43;
                    var4 = {};
                    var3 = arg2;
                    var4['username'] = var3;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var4['userId'] = var2;
                    var2 = arg3;
                    var4['transitionState'] = var2;
                    var2 = arg4;
                    var4['onCleanup'] = var2;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = var6.bind(var3)(var5, var4, var2);
case 32:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var20.userText;
            var1['style'] = var5;
            var7 = _closure1_slot23;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var20.usernameContainer;
            var5['style'] = var8;
            var11 = _closure1_slot22;
            var10 = 30;
            var8 = var25[var10];
            var8 = var24.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'heading-md/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': 'Disquird'};
            var19 = 1;
            var12 = {};
            var22 = 0;
            var12['opacity'] = var22;
            var23 = 22;
            var23 = var25[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.isAndroid;
            var23 = var23.bind(var24)();
            if(!var23) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var22 = 2;
case 34:
            var12['paddingBottom'] = var22;
            var8['style'] = var12;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var12 = _closure1_slot22;
            var11 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 19;
            var9 = var22[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.TransitionGroup;
            var9 = {};
            var9['items'] = var21;
            var15 = function getItemKey(arg1) {
                var1 = arg1;
                return var1;
            };
            var9['getItemKey'] = var15;
            var9['renderItem'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var20.statusRow;
            var6['style'] = var9;
            var15 = null;
            var11 = var15 == var18;
            var9 = undefined;
            if(var11) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var9 = var18.emoji;
case 36:
            var9 = var15 != var9;
            var11 = null;
            if(!var9) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var13 = _closure1_slot22;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = 31;
            var9 = var21[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var21 = 16;
            var9['size'] = var21;
            var20 = var20.statusEmoji;
            var9['style'] = var20;
            var20 = var18.emoji;
            var9['emoji'] = var20;
            var11 = var13.bind(var4)(var12, var9);
case 38:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot22;
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = var13[var10];
            var10 = var20.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-default', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'accessibilityHint': null, 'maxFontSizeMultiplier': 1.75};
            var13 = var13[var17];
            var20 = var20.bind(var4)(var13);
            var13 = var20.humanizeStatus;
            var13 = var13.bind(var20)(var16);
            var10['accessibilityHint'] = var13;
            var13 = {};
            var13['flexShrink'] = var19;
            var10['style'] = var13;
            var19 = var15 == var18;
            var13 = undefined;
            if(var19) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var13 = var18.state;
case 40:
            if(!(var15 == var13)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.humanizeStatus;
            var13 = var14.bind(var15)(var16);
case 42:
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot33 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot27;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 27;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var3 = var1.YouBarExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var6 = 'YouBar';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var10 = var1.animateBetweenServers;
            var _closure2_slot0 = var10;
            var1 = 23;
            var2 = var8[var1];
            var7 = var5.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var6.bind(var7)(var3, var2);
            var _closure2_slot1 = var2;
            var1 = var8[var1];
            var7 = var5.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var3, var1);
            var _closure2_slot2 = var1;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = new Array(1);
                    if(var1) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                    var1 = undefined;
                    var2[0] = var1;
                    var1 = var2;
                    _fun0010_ip = 46; continue _fun0010;
case 44:
                    var3 = _closure2_slot2;
                    var2[0] = var3;
                    var1 = var2;
case 46:
                    return var1;
                }
            };
            var13 = var6.bind(var7)(var1, var3);
            var7 = _closure1_slot1;
            var1 = 28;
            var1 = var8[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useName;
            var1 = var1.bind(var3)(var2);
            var27 = 26;
            var3 = var8[var27];
            var3 = var5.bind(var4)(var3);
            var6 = var3.AVATAR_SIZE_MAP;
            var26 = 25;
            var3 = var8[var26];
            var3 = var5.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var3 = var3.XLARGE_72;
            var25 = var6[var3];
            var14 = _closure1_slot5;
            var10 = var14.useCallback;
            var6 = function(arg1, arg2, arg3, arg4) {
                var5 = _closure1_slot22;
                var4 = _closure1_slot44;
                var3 = {};
                var1 = arg2;
                var3['selectedGuildId'] = var1;
                var1 = arg3;
                var3['transitionState'] = var1;
                var1 = arg4;
                var3['cleanup'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var3 = new Array(0);
            var10 = var10.bind(var14)(var6, var3);
            var3 = 32;
            var3 = var8[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useToken;
            var3 = 13;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_SURFACE_HIGHEST;
            var24 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            if(!(var3 != var1)) { _fun0009_ip = 47; continue _fun0009 }
case 49:
            var5 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var12.youButton;
            var1['style'] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 19;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TransitionGroup;
            var6 = {};
            var6['items'] = var13;
            var11 = function getItemKey(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 == var3;
                    var3 = undefined;
                    if(var2) { _fun0011_ip = 50; continue _fun0011 }
case 20:
                    var6 = _closure2_slot1;
                    var5 = var6.getAvatarURL;
                    var10 = arg1;
                    var9 = 16;
                    var11 = var6;
                    var8 = false;
                    var7 = false;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
case 50:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var6['getItemKey'] = var11;
            var6['renderItem'] = var10;
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = _closure1_slot33;
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var5.bind(var4)(var2, var1);
            return var1;
case 47:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var26];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XLARGE_72;
            var1 = var1[var26];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getStatusSize;
            var1 = var1.bind(var5)(var2);
            var3 = var3 != var1;
            var17 = 0;
            if(!var3) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var17 = var1;
case 34:
            var28 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = var18[var27];
            var1 = var28.bind(var4)(var1);
            var1 = var1.AVATAR_SIZE_MAP;
            var3 = var1[var2];
            var2 = 2;
            var5 = var17 / var2;
            var1 = _closure1_slot21;
            var1 = var5 + var1;
            var5 = var3 - var1;
            var3 = 4;
            var3 = var17 / var3;
            var3 = var3 * var2;
            var3 = var5 - var3;
            var20 = {};
            var13 = 17;
            var5 = var18[var13];
            var5 = var28.bind(var4)(var5);
            var5 = var5.CutoutShape;
            var5 = var5.Circle;
            var20['shape'] = var5;
            var20['x'] = var3;
            var20['y'] = var3;
            var1 = var2 * var1;
            var20['size'] = var1;
            var3 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var12.youButton;
            var1['style'] = var5;
            var7 = _closure1_slot22;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = {};
            var10 = var18[var27];
            var10 = var28.bind(var4)(var10);
            var11 = var10.AVATAR_SIZE_MAP;
            var10 = var18[var26];
            var10 = var28.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.NORMAL;
            var10 = var11[var10];
            var8['height'] = var10;
            var10 = var18[var27];
            var10 = var28.bind(var4)(var10);
            var11 = var10.AVATAR_SIZE_MAP;
            var10 = var18[var26];
            var10 = var28.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.NORMAL;
            var10 = var11[var10];
            var8['width'] = var10;
            var10 = 'relative';
            var8['position'] = var10;
            var5['style'] = var8;
            var11 = _closure1_slot23;
            var10 = _closure1_slot6;
            var8 = {};
            var14 = {};
            var15 = 'absolute';
            var14['position'] = var15;
            var14['width'] = var25;
            var14['height'] = var25;
            var15 = _closure1_slot16;
            var16 = -var15;
            var15 = var18[var27];
            var15 = var28.bind(var4)(var15);
            var19 = var15.AVATAR_SIZE_MAP;
            var15 = var18[var26];
            var15 = var28.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.XLARGE_72;
            var19 = var19[var15];
            var15 = _closure1_slot15;
            var15 = var19 - var15;
            var15 = var16 - var15;
            var14['top'] = var15;
            var15 = _closure1_slot16;
            var15 = -var15;
            var14['left'] = var15;
            var8['style'] = var14;
            var16 = _closure1_slot22;
            var15 = _closure1_slot1;
            var13 = var18[var13];
            var14 = var15.bind(var4)(var13);
            var13 = {};
            var19 = new Array(1);
            var19[0] = var20;
            var13['cutouts'] = var19;
            var21 = _closure1_slot22;
            var20 = _closure1_slot6;
            var19 = {};
            var23 = var12.placeholderAvatar;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = {};
            var23['width'] = var25;
            var23['height'] = var25;
            var23['backgroundColor'] = var24;
            var22[1] = var23;
            var19['style'] = var22;
            var24 = _closure1_slot22;
            var22 = 33;
            var22 = var18[var22];
            var22 = var28.bind(var4)(var22);
            var23 = var22.ReactionIcon;
            var22 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var25 = {};
            var29 = var18[var27];
            var29 = var28.bind(var4)(var29);
            var30 = var29.AVATAR_SIZE_MAP;
            var29 = var18[var26];
            var29 = var28.bind(var4)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.NORMAL;
            var29 = var30[var29];
            var25['width'] = var29;
            var27 = var18[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.AVATAR_SIZE_MAP;
            var26 = var18[var26];
            var26 = var28.bind(var4)(var26);
            var26 = var26.AvatarSizes;
            var26 = var26.NORMAL;
            var26 = var27[var26];
            var25['height'] = var26;
            var22['style'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var13['children'] = var19;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot22;
            var14 = 34;
            var14 = var18[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
            var14['size'] = var17;
            var17 = _closure1_slot20;
            var17 = var17.OFFLINE;
            var14['status'] = var17;
            var17 = {'position': 'absolute', 'right': 4294967293, 'bottom': 4294967293};
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var8 = var11.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var12.userText;
            var6['style'] = var10;
            var11 = _closure1_slot22;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var12.placeholder;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var8.bind(var7)(var4);
    var10 = var7.memo;
    var4 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var12 = var2.hasNameplate;
            var14 = var2.icon;
            var7 = var2.hasBadge;
            var _closure2_slot0 = var7;
            var15 = var2.badgeStyle;
            var9 = var2.onPress;
            var11 = var2.a11yLabel;
            var2 = _closure1_slot27;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0013_ip = 51; continue _fun0013 }
case 52:
                    var7 = 0;
case 51:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0013_ip = 53; continue _fun0013 }
case 54:
                    var6 = 0;
case 53:
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
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0014_ip = 3; continue _fun0014 }
case 55:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
case 3:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 17;
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
            var10 = var3.bind(var4)(var2);
            var _closure2_slot1 = var10;
            var16 = 8;
            var3 = function useIconContentStyle(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0015_ip = 56; continue _fun0015 }
case 46:
                    var5 = 0;
case 56:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0015_ip = 57; continue _fun0015 }
case 58:
                    var6 = 0;
case 57:
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
            var2[0] = var10;
            var2[1] = var7;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0016_ip = 33; continue _fun0016 }
case 59:
                    var1 = new Array(0);
                    _fun0016_ip = 21; continue _fun0016;
case 33:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 21:
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 20, 'width': 20};
            var1['style'] = var6;
            var13 = _closure1_slot22;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 17;
            var6 = var19[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var18;
            var6['children'] = var14;
            var10 = var13.bind(var4)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0012_ip = 60; continue _fun0012 }
case 10:
            var14 = _closure1_slot22;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 35;
            var10 = var18[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['style'] = var17;
            var10['size'] = var16;
            var10['badgeStyle'] = var15;
            var7 = var14.bind(var4)(var13, var10);
case 60:
            var6[1] = var7;
            var1['children'] = var6;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot22;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot22;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 36;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var11;
            var11 = 'tertiary';
            if(!var12) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var11 = 'secondary-overlay';
case 61:
            var5['variant'] = var11;
            var11 = 'md';
            var5['size'] = var11;
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var8 = _closure1_slot25;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var10.bind(var7)(var4);
    var _closure1_slot34 = var4;
    var10 = var7.memo;
    var4 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot27;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 37;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot22;
            var2 = _closure1_slot34;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot22;
            var9 = _closure1_slot0;
            var8 = 38;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0017_ip = 63; continue _fun0017 }
case 64:
            var11 = 'white';
case 63:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 40;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0018_ip = 65; continue _fun0018 }
case 66:
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
case 65:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 41;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.SY4sdZ;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var10.bind(var7)(var4);
    var _closure1_slot35 = var4;
    var4 = {};
    var10 = 'function YouBarTsx3(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var4['code'] = var10;
    var _closure1_slot36 = var4;
    var10 = var7.memo;
    var4 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var19 = var1.hasNameplate;
            var1 = _closure1_slot27;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 42;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var20 = var1.value;
            var _closure2_slot0 = var20;
            var13 = _closure1_slot0;
            var14 = 14;
            var1 = var15[var14];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function o() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 20;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0020_ip = 67; continue _fun0020 }
case 58:
                    var9 = 1;
case 67:
                    var3 = _closure1_slot28;
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
                    if(!var3) { _fun0020_ip = 68; continue _fun0020 }
case 69:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 13;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.spacing;
                    var4 = var3.PX_4;
case 68:
                    var3 = _closure1_slot28;
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
                    if(!var6) { _fun0020_ip = 70; continue _fun0020 }
case 71:
                    var5 = 1;
case 70:
                    var2 = _closure1_slot28;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var6 = 20;
            var6 = var15[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.withSpring;
            var5['withSpring'] = var6;
            var5['badgeCount'] = var20;
            var6 = _closure1_slot28;
            var5['SPRING_CONFIG'] = var6;
            var6 = 13;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var5['tokens'] = var6;
            var1['__closure'] = var5;
            var5 = 6363196903679.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot36;
            var1['__initData'] = var5;
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot22;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var18.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot22;
            var5 = 36;
            var5 = var15[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var10 = 41;
            var11 = var15[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.HcoRu0;
            var10 = var11.bind(var12)(var10);
            var5['accessibilityLabel'] = var10;
            var10 = 'tertiary';
            if(!var19) { _fun0019_ip = 72; continue _fun0019 }
case 73:
            var10 = 'secondary-overlay';
case 72:
            var5['variant'] = var10;
            var10 = 'md';
            var5['size'] = var10;
            var12 = _closure1_slot23;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var10['style'] = var13;
            var16 = _closure1_slot22;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 43;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.BellIcon;
            var13 = {};
            var21 = 'custom';
            var13['size'] = var21;
            var18 = var18.largeButtonIcon;
            var13['style'] = var18;
            var18 = undefined;
            if(!var19) { _fun0019_ip = 74; continue _fun0019 }
case 75:
            var18 = 'white';
case 74:
            var13['color'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot22;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = var21[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var17;
            var19 = _closure1_slot22;
            var17 = 44;
            var17 = var21[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['value'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['icon'] = var10;
            var9 = function onPress() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 40;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0021_ip = 76; continue _fun0021 }
case 66:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
case 76:
                    return var1;
                }
            };
            var5['onPress'] = var9;
            var8 = _closure1_slot25;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var10.bind(var7)(var4);
    var _closure1_slot37 = var4;
    var4 = {};
    var10 = 'function YouBarTsx4(){const{withSpring,isPressed,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed?0.98:1,SPRING_CONFIG)}]};}';
    var4['code'] = var10;
    var _closure1_slot38 = var4;
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot39 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = _closure1_slot27;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 49;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var6 = var1.width;
            var5 = _closure1_slot0;
            var1 = 50;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useDrawerWidth;
            var5 = var1.bind(var5)();
            var1 = 51;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.isChatBesideChannelList;
            var1 = _closure1_slot19;
            var1 = var1.bind(var4)();
            var _closure2_slot0 = var1;
            var25 = 2;
            var3 = var25 * var1;
            if(var7) { _fun0022_ip = 77; continue _fun0022 }
case 78:
            var30 = var6 - var3;
            _fun0022_ip = 79; continue _fun0022;
case 77:
            var30 = var5 - var3;
case 79:
            var _closure2_slot1 = var30;
            var3 = _closure1_slot13;
            var7 = var3.bind(var4)();
            var _closure2_slot2 = var7;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var30;
            var3[1] = var7;
            var3[2] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['marginHorizontal'] = var3;
                var4 = _closure1_slot15;
                var1['height'] = var4;
                var4 = _closure2_slot2;
                var1['marginBottom'] = var4;
                var4 = _closure1_slot16;
                var3 = 1;
                var3 = var4 - var3;
                var1['padding'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            };
            var7 = var5.bind(var6)(var1, var3);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 52;
            var1 = var6[var1];
            var8 = var5.bind(var4)(var1);
            var3 = var8.useICYMIEnabled;
            var1 = 'TabsNavigator';
            var9 = var3.bind(var8)(var1);
            var1 = 27;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var8 = var1.YouBarExperiment;
            var3 = var8.useConfig;
            var1 = {};
            var11 = 'YouBar';
            var1['location'] = var11;
            var1 = var3.bind(var8)(var1);
            var3 = var1.animateBetweenServers;
            var1 = 23;
            var8 = var6[var1];
            var14 = var5.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var13.bind(var14)(var11, var8);
            var1 = var6[var1];
            var14 = var5.bind(var4)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var14)(var11, var1);
            var1 = 47;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useNameplate;
            var1 = {};
            var1['user'] = var8;
            var8 = undefined;
            if(!var3) { _fun0022_ip = 80; continue _fun0022 }
case 81:
            var13 = null;
            var13 = var13 != var11;
            var8 = undefined;
            if(!var13) { _fun0022_ip = 80; continue _fun0022 }
case 82:
            var8 = var11;
case 80:
            var1['guildId'] = var8;
            var22 = var5.bind(var6)(var1);
            var11 = null;
            var13 = var11 != var22;
            var1 = function useBGColor(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 45;
                    var2 = var5[var2];
                    var7 = undefined;
                    var2 = var10.bind(var7)(var2);
                    var9 = var2.bind(var7)();
                    var8 = 13;
                    var2 = var5[var8];
                    var2 = var10.bind(var7)(var2);
                    var4 = var2.internal;
                    var3 = var4.resolveSemanticColor;
                    var2 = var5[var8];
                    var2 = var10.bind(var7)(var2);
                    var2 = var2.colors;
                    var2 = var2.BACKGROUND_SURFACE_HIGHEST;
                    var4 = var3.bind(var4)(var9, var2);
                    var3 = _closure1_slot0;
                    var10 = 23;
                    var2 = var5[var10];
                    var12 = var3.bind(var7)(var2);
                    var11 = var12.useStateFromStores;
                    var2 = _closure1_slot8;
                    var9 = new Array(1);
                    var9[0] = var2;
                    var2 = function() {
                        var1 = _closure1_slot8;
                        var1 = var1.gradientPreset;
                        return var1;
                    };
                    var2 = var11.bind(var12)(var9, var2);
                    var9 = 46;
                    var11 = var5[var9];
                    var12 = var3.bind(var7)(var11);
                    var11 = var12.useGradientValue;
                    var9 = var5[var9];
                    var9 = var3.bind(var7)(var9);
                    var9 = var9.GradientPercentage;
                    var9 = var9.END;
                    var13 = var11.bind(var12)(var9);
                    var9 = var5[var10];
                    var14 = var3.bind(var7)(var9);
                    var12 = var14.useStateFromStores;
                    var9 = _closure1_slot12;
                    var11 = new Array(1);
                    var11[0] = var9;
                    var9 = function() {
                        var2 = _closure1_slot12;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var9 = var12.bind(var14)(var11, var9);
                    var10 = var5[var10];
                    var12 = var3.bind(var7)(var10);
                    var11 = var12.useStateFromStores;
                    var14 = _closure1_slot10;
                    var10 = new Array(1);
                    var10[0] = var14;
                    var1 = function() {
                        var2 = _closure1_slot10;
                        var1 = var2.getGuildId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10, var1);
                    var1 = 47;
                    var1 = var5[var1];
                    var5 = var3.bind(var7)(var1);
                    var3 = var5.useNameplate;
                    var1 = {};
                    var1['user'] = var9;
                    var11 = arg1;
                    var9 = undefined;
                    if(!var11) { _fun0023_ip = 83; continue _fun0023 }
case 25:
                    var11 = null;
                    var11 = var11 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0023_ip = 83; continue _fun0023 }
case 84:
                    var9 = var10;
case 83:
                    var1['guildId'] = var9;
                    var1 = var3.bind(var5)(var1);
                    var3 = null;
                    var1 = var3 != var1;
                    if(var1) { _fun0023_ip = 85; continue _fun0023 }
case 86:
                    if(!(var3 != var2)) { _fun0023_ip = 85; continue _fun0023 }
case 87:
                    var9 = _closure1_slot17;
                    var5 = var2.id;
                    var5 = var9[var5];
                    if(!(var3 != var5)) { _fun0023_ip = 85; continue _fun0023 }
case 88:
                    var5 = _closure1_slot17;
                    var2 = var2.id;
                    var2 = var5[var2];
                    _fun0023_ip = 89; continue _fun0023;
case 85:
                    var2 = var4;
                    if(var1) { _fun0023_ip = 89; continue _fun0023 }
case 90:
                    var1 = var3 != var13;
                    var2 = undefined;
                    if(!var1) { _fun0023_ip = 89; continue _fun0023 }
case 91:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 48;
                    var9 = var12[var1];
                    var11 = var5.bind(var7)(var9);
                    var10 = var11.mix;
                    var9 = var12[var1];
                    var9 = var5.bind(var7)(var9);
                    var9 = var9.bind(var7)(var13);
                    var1 = var12[var1];
                    var1 = var5.bind(var7)(var1);
                    var17 = var1.bind(var7)(var4);
                    var16 = 0.8;
                    var15 = 'hsl';
                    var19 = var11;
                    var18 = var9;
                    var4 = var19[var10](var18, var17, var16, var15, var14);
                    var1 = var4.hex;
                    var2 = var1.bind(var4)();
case 89:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 32;
                    var4 = var1[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.useToken;
                    var6 = _closure1_slot1;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.colors;
                    var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                    var1 = var4.bind(var5)(var1);
                    if(!(var3 != var2)) { _fun0023_ip = 92; continue _fun0023 }
case 93:
                    var1 = var2;
case 92:
                    return var1;
                }
            };
            var29 = var1.bind(var4)(var3);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var1 = false;
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var25);
            var35 = 0;
            var15 = var1[var35];
            var _closure2_slot3 = var15;
            var37 = 1;
            var1 = var1[var37];
            var _closure2_slot4 = var1;
            var5 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 14;
            var3 = var23[var1];
            var8 = var5.bind(var4)(var3);
            var6 = var8.useAnimatedStyle;
            var3 = function s() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 20;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot3;
                    var4 = 1;
                    if(!var7) { _fun0024_ip = 94; continue _fun0024 }
case 95:
                    var4 = 0.98;
case 94:
                    var2 = _closure1_slot28;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var16 = 20;
            var16 = var23[var16];
            var16 = var5.bind(var4)(var16);
            var16 = var16.withSpring;
            var14['withSpring'] = var16;
            var14['isPressed'] = var15;
            var15 = _closure1_slot28;
            var14['SPRING_CONFIG'] = var15;
            var3['__closure'] = var14;
            var14 = 15247686261570.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot38;
            var3['__initData'] = var14;
            var6 = var6.bind(var8)(var3);
            var15 = _closure1_slot5;
            var14 = var15.useCallback;
            var8 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 39;
                var6 = var2[var5];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var2[var5];
                var5 = var4.bind(var1)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.SOFT;
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot1;
                var3 = 53;
                var3 = var2[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.openLazy;
                var3 = 55;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 54;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = true;
                var3['disableHapticOnOpen'] = var2;
                var2 = 'YouBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                var3 = _closure2_slot4;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var15 = var14.bind(var15)(var8, var3);
            var16 = _closure1_slot5;
            var14 = var16.useCallback;
            var8 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0025_ip = 96; continue _fun0025 }
case 97:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 55;
                        var4 = var2[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = 56;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=54);
case 58:
                        return var2;
case 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0025_ip = 98; continue _fun0025 }
case 99:
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 98:
                        return var2;
case 96:
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var8.bind(var4)(var3);
            var3 = new Array(0);
            var14 = var14.bind(var16)(var8, var3);
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var8 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var17 = var16.bind(var17)(var8, var3);
            var16 = _closure1_slot5;
            var8 = var16.useCallback;
            var3 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var16 = var8.bind(var16)(var3, var2);
            var2 = 26;
            var2 = var23[var2];
            var2 = var5.bind(var4)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = 25;
            var2 = var23[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.XLARGE_72;
            var24 = var3[var2];
            var3 = _closure1_slot23;
            var20 = _closure1_slot1;
            var1 = var23[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var12.youRow;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot22;
            var5 = 57;
            var5 = var23[var5];
            var6 = var20.bind(var4)(var5);
            var5 = {};
            var8 = {};
            var34 = 'absolute';
            var8['position'] = var34;
            var5['style'] = var8;
            var26 = _closure1_slot23;
            var21 = _closure1_slot6;
            var8 = {};
            var18 = {};
            var18['width'] = var30;
            var19 = _closure1_slot15;
            var18['height'] = var19;
            var19 = 'transparent';
            var18['backgroundColor'] = var19;
            var8['style'] = var18;
            var28 = _closure1_slot22;
            var27 = _closure1_slot6;
            var18 = {};
            var31 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': null, 'backgroundColor': 'black'};
            var32 = _closure1_slot15;
            var32 = var32 / var25;
            var31['bottom'] = var32;
            var18['style'] = var31;
            var18 = var28.bind(var4)(var27, var18);
            var27 = new Array(3);
            var27[0] = var18;
            var31 = _closure1_slot22;
            var28 = _closure1_slot6;
            var18 = {};
            var32 = {'position': 'absolute', 'top': null, 'left': null, 'right': 0, 'bottom': 0, 'backgroundColor': 'black'};
            var33 = _closure1_slot15;
            var33 = var33 / var25;
            var32['top'] = var33;
            var33 = 8;
            var36 = var24 + var33;
            var36 = var36 - var37;
            var32['left'] = var36;
            var18['style'] = var32;
            var18 = var31.bind(var4)(var28, var18);
            var27[1] = var18;
            var32 = _closure1_slot22;
            var31 = _closure1_slot26;
            var28 = {};
            var18 = {};
            var18['position'] = var34;
            var34 = _closure1_slot15;
            var34 = var34 / var25;
            var18['top'] = var34;
            var33 = var24 + var33;
            var18['width'] = var33;
            var18['left'] = var35;
            var33 = _closure1_slot15;
            var33 = var33 / var25;
            var18['height'] = var33;
            var28['style'] = var18;
            var18 = 48;
            var18 = var23[var18];
            var18 = var20.bind(var4)(var18);
            var33 = '#000000';
            var34 = var18.bind(var4)(var33);
            var18 = var34.alpha;
            var34 = var18.bind(var34)(var35);
            var18 = var34.hex;
            var34 = var18.bind(var34)();
            var18 = new Array(2);
            var18[0] = var34;
            var18[1] = var33;
            var28['colors'] = var18;
            var18 = {'x': 0, 'y': 0};
            var28['start'] = var18;
            var18 = {'x': 1, 'y': 0};
            var28['end'] = var18;
            var18 = [0.73, 0.88];
            var28['locations'] = var18;
            var18 = 'none';
            var28['pointerEvents'] = var18;
            var28 = var32.bind(var4)(var31, var28);
            var27[2] = var28;
            var8['children'] = var27;
            var8 = var26.bind(var4)(var21, var8);
            var5['maskElement'] = var8;
            var26 = _closure1_slot22;
            var21 = _closure1_slot6;
            var8 = {};
            var28 = var12.youRowFloating;
            var27 = new Array(2);
            var27[0] = var28;
            var28 = {};
            var28['width'] = var30;
            var30 = _closure1_slot15;
            var28['height'] = var30;
            var28['backgroundColor'] = var29;
            var27[1] = var28;
            var8['style'] = var27;
            var8 = var26.bind(var4)(var21, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot6;
            var6 = {};
            var21 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderBottomRightRadius': null, 'overflow': 'hidden'};
            var21['left'] = var24;
            var24 = _closure1_slot15;
            var24 = var24 / var25;
            var21['borderTopRightRadius'] = var24;
            var24 = _closure1_slot15;
            var24 = var24 / var25;
            var21['borderBottomRightRadius'] = var24;
            var6['style'] = var21;
            var6['pointerEvents'] = var18;
            var21 = _closure1_slot22;
            var18 = 58;
            var18 = var23[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var18['nameplate'] = var22;
            var18 = var21.bind(var4)(var20, var18);
            var6['children'] = var18;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot7;
            var6 = {};
            var18 = var12.youPressable;
            var6['style'] = var18;
            var18 = {};
            var18['color'] = var19;
            var6['android_ripple'] = var18;
            var6['onPressIn'] = var17;
            var6['onPressOut'] = var16;
            var6['onPress'] = var15;
            var6['onLongPress'] = var14;
            var14 = _closure1_slot25;
            var6['hitSlop'] = var14;
            var14 = _closure1_slot39;
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            if(!var9) { _fun0022_ip = 100; continue _fun0022 }
case 101:
            var14 = _closure1_slot22;
            var12 = _closure1_slot35;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 100:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot22;
            var11 = _closure1_slot37;
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var8.bind(var7)(var4);
    var4 = {};
    var10 = 'function YouBarTsx5(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var4['code'] = var10;
    var _closure1_slot40 = var4;
    var10 = var7.memo;
    var4 = function() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = _closure1_slot27;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot13;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var2 = var3 + var2;
            var13 = var2 + var17;
            var _closure2_slot0 = var13;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 49;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.width;
            var _closure2_slot1 = var12;
            var5 = _closure1_slot0;
            var2 = 14;
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
            var11 = 7452657346454.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot40;
            var2['__initData'] = var11;
            var12 = var3.bind(var7)(var2);
            var2 = 23;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var11 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var2 = 46;
            var3 = var10[var2];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useGradientValue;
            var2 = var10[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GradientPercentage;
            var2 = var2.END;
            var3 = var3.bind(var7)(var2);
            var2 = 32;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var5 = var7.useToken;
            var2 = 13;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOWER;
            var5 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var1)) { _fun0026_ip = 102; continue _fun0026 }
case 26:
            var8 = _closure1_slot18;
            var7 = var1.id;
            var7 = var8[var7];
            if(!(var2 == var7)) { _fun0026_ip = 103; continue _fun0026 }
case 102:
            var8 = var5;
            if(!(var2 != var3)) { _fun0026_ip = 104; continue _fun0026 }
case 105:
            var8 = var3;
            _fun0026_ip = 104; continue _fun0026;
case 103:
            var3 = _closure1_slot18;
            var1 = var1.id;
            var8 = var3[var1];
case 104:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 59;
            var1 = var1[var7];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0.97;
            var1 = var3.bind(var5)(var8, var1);
            var5 = var2 != var1;
            var11 = 'transparent';
            var3 = var11;
            if(!var5) { _fun0026_ip = 106; continue _fun0026 }
case 107:
            var3 = var1;
case 106:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var5)(var3, var15);
            var2 = var2 != var1;
            var10 = var3;
            if(!var2) { _fun0026_ip = 108; continue _fun0026 }
case 109:
            var11 = var1;
case 108:
            var3 = _closure1_slot23;
            var2 = _closure1_slot24;
            var1 = {};
            var8 = _closure1_slot22;
            var7 = _closure1_slot6;
            var5 = {};
            var14 = var9.floatingShade;
            var13 = new Array(3);
            var13[0] = var14;
            var13[1] = var12;
            var14 = {};
            var16 = _closure1_slot15;
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
            var8 = _closure1_slot22;
            var7 = _closure1_slot26;
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
    var10 = var10.bind(var7)(var4);
    var4 = {};
    var4 = var9.bind(var1)(var10, var4);
    var _closure1_slot41 = var4;
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot42 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 23;
        var1 = var7[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var1);
        var5 = var8.useStateFromStores;
        var1 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot8;
            var1 = var1.gradientPreset;
            return var1;
        };
        var5 = var5.bind(var8)(var3, var1);
        var3 = _closure1_slot23;
        var1 = 60;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var7 = _closure1_slot41;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = _closure1_slot42;
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 61;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ThemedYouBar'] = var2;
    return var1;
})();