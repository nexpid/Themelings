// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function UnconnectedYouScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var40 = var1.user;
            var19 = var1.navigateToSettings;
            var _closure2_slot0 = var19;
            var32 = var1.navigateToPremium;
            var31 = var1.navigateToShop;
            var _closure2_slot1 = var31;
            var35 = var1.navigateToProfileCustomization;
            var34 = var1.navigateToCustomStatus;
            var33 = var1.navigateToFriends;
            var30 = var1.initialTab;
            var4 = undefined;
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
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 20;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var42 = var1.bind(var4)();
            var _closure2_slot2 = var42;
            var1 = _closure1_slot16;
            var26 = var42 * var1;
            var _closure2_slot3 = var26;
            var9 = _closure1_slot0;
            var1 = 21;
            var1 = var13[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useYouBarEnabled;
            var7 = 'YouScreen';
            var5 = var1.bind(var2)(var7);
            var1 = _closure1_slot11;
            var1 = var1.bind(var4)(var7);
            var2 = _closure1_slot28;
            var36 = var2.bind(var4)(var42, var1);
            var2 = 22;
            var2 = var13[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var6 = 23;
            var10 = var13[var6];
            var10 = var9.bind(var4)(var10);
            var10 = var10.ImpressionTypes;
            var10 = var10.VIEW;
            var2['type'] = var10;
            var6 = var13[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.ImpressionNames;
            var6 = var6.USER_YOU_SCREEN;
            var2['name'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = 24;
            var2 = var13[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var40.id;
            var12 = var3.bind(var4)(var2);
            var2 = 25;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var _closure2_slot4 = var6;
            var2 = 26;
            var2 = var13[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var2['user'] = var40;
            var2['displayProfile'] = var12;
            var2 = var3.bind(var4)(var2);
            var21 = var2.theme;
            var14 = var2.primaryColor;
            var10 = var2.secondaryColor;
            var2 = 27;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var39 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var17 = null;
            var38 = var2.bind(var3)(var17);
            var27 = 15;
            var2 = var13[var27];
            var11 = var9.bind(var4)(var2);
            var2 = var11.useSharedValue;
            var3 = 0;
            var18 = var2.bind(var11)(var3);
            var _closure2_slot5 = var18;
            var2 = var13[var27];
            var16 = var9.bind(var4)(var2);
            var11 = var16.useAnimatedScrollHandler;
            var2 = function K(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var18;
            var2['__closure'] = var20;
            var20 = 952837799380.0;
            var2['__workletHash'] = var20;
            var20 = _closure1_slot30;
            var2['__initData'] = var20;
            var28 = var11.bind(var16)(var2);
            var20 = _closure1_slot4;
            var16 = var20.useMemo;
            var11 = new Array(1);
            var11[0] = var42;
            var2 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var29 = var16.bind(var20)(var2, var11);
            var _closure2_slot6 = var29;
            var2 = var13[var27];
            var16 = var9.bind(var4)(var2);
            var11 = var16.useDerivedValue;
            var2 = function Z() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var18;
            var2['__closure'] = var20;
            var20 = 588222792165.0;
            var2['__workletHash'] = var20;
            var20 = _closure1_slot31;
            var2['__initData'] = var20;
            var23 = var11.bind(var16)(var2);
            var _closure2_slot7 = var23;
            var2 = 28;
            var2 = var13[var2];
            var22 = var9.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var2;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot13;
case 2:
                    return var1;
                }
            };
            var2 = new Array(0);
            var20 = var20.bind(var22)(var16, var11, var2);
            var _closure2_slot8 = var20;
            var11 = _closure1_slot4;
            var2 = var11.useState;
            var11 = var2.bind(var11)(var3);
            var2 = _closure1_slot3;
            var41 = 2;
            var2 = var2.bind(var4)(var11, var41);
            var11 = var2[var3];
            var47 = 1;
            var2 = var2[var47];
            var _closure2_slot9 = var2;
            var24 = _closure1_slot4;
            var22 = var24.useCallback;
            var16 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var25 = var22.bind(var24)(var16, var2);
            var2 = var13[var27];
            var22 = var9.bind(var4)(var2);
            var16 = var22.useAnimatedStyle;
            var2 = function q() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 15;
                    var1 = var9[var4];
                    var6 = undefined;
                    var13 = var7.bind(var6)(var1);
                    var12 = var13.interpolate;
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var11 = var1.bind(var5)();
                    var1 = _closure2_slot6;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var8 = 0;
                    var10[1] = var8;
                    var14 = _closure1_slot12;
                    var3 = new Array(2);
                    var3[0] = var14;
                    var14 = 1;
                    var3[1] = var14;
                    var3 = var12.bind(var13)(var11, var10, var3);
                    var4 = var9[var4];
                    var7 = var7.bind(var6)(var4);
                    var6 = var7.interpolate;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot3;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = new Array(0);
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
case 6:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var24 = {};
            var37 = var13[var27];
            var37 = var9.bind(var4)(var37);
            var37 = var37.interpolate;
            var24['interpolate'] = var37;
            var24['scrollPosition'] = var18;
            var24['minScrollPosition'] = var29;
            var29 = _closure1_slot12;
            var24['SCALE_FACTOR'] = var29;
            var24['translateOnScale'] = var26;
            var24['isNegativeScrollPosition'] = var23;
            var2['__closure'] = var24;
            var24 = 5882939038632.0;
            var2['__workletHash'] = var24;
            var24 = _closure1_slot32;
            var2['__initData'] = var24;
            var55 = var16.bind(var22)(var2);
            var2 = var13[var27];
            var22 = var9.bind(var4)(var2);
            var16 = var22.useAnimatedStyle;
            var2 = function Q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var2 = new Array(0);
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var4 = {};
                    var5 = _closure2_slot5;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 9:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var24 = {};
            var24['isNegativeScrollPosition'] = var23;
            var24['scrollPosition'] = var18;
            var2['__closure'] = var24;
            var24 = 17425045144242.0;
            var2['__workletHash'] = var24;
            var24 = _closure1_slot33;
            var2['__initData'] = var24;
            var44 = var16.bind(var22)(var2);
            var2 = var13[var27];
            var16 = var9.bind(var4)(var2);
            var9 = var16.useAnimatedStyle;
            var2 = function $() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                    var2 = new Array(0);
                    _fun0005_ip = 10; continue _fun0005;
case 7:
                    var4 = {};
                    var6 = _closure2_slot5;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = _closure2_slot8;
                    var3 = 1;
                    var3 = var3 / var6;
                    var3 = var5 * var3;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 10:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['isNegativeScrollPosition'] = var23;
            var22['scrollPosition'] = var18;
            var22['coefficient'] = var20;
            var2['__closure'] = var22;
            var22 = 9336428823274.0;
            var2['__workletHash'] = var22;
            var22 = _closure1_slot34;
            var2['__initData'] = var22;
            var37 = var9.bind(var16)(var2);
            var2 = 29;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var9 = var2.isChatBesideChannelList;
            var2 = 30;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.width;
            var50 = var2.height;
            var _closure2_slot10 = var50;
            var2 = var6.right;
            var8 = var8 - var2;
            var2 = var6.left;
            var8 = var8 - var2;
            var2 = 0;
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = 16;
case 11:
            var9 = var8 - var2;
            var23 = var9;
            if(!(var11 > var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = global;
            var8 = var2.Math;
            var2 = var8.min;
            var23 = var2.bind(var8)(var9, var11);
case 13:
            _closure2_slot11 = var23;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var27];
            var13 = var9.bind(var4)(var2);
            var8 = var13.useAnimatedProps;
            var2 = function ee() {
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 15;
                var5 = var7[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var5);
                var5 = var6.clamp;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.interpolate;
                var4 = _closure2_slot5;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot10;
                var3 = -var3;
                var2 = _closure2_slot8;
                var2 = var3 * var2;
                var3 = [0];
                var3[1] = var2;
                var2 = [0, 1];
                var4 = var7.bind(var8)(var4, var3, var2);
                var3 = 0;
                var2 = 1;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['blurAmount'] = var2;
                return var1;
            };
            var16 = {};
            var22 = var11[var27];
            var22 = var9.bind(var4)(var22);
            var22 = var22.clamp;
            var16['clamp'] = var22;
            var22 = var11[var27];
            var22 = var9.bind(var4)(var22);
            var22 = var22.interpolate;
            var16['interpolate'] = var22;
            var16['scrollPosition'] = var18;
            var16['windowHeight'] = var50;
            var16['coefficient'] = var20;
            var2['__closure'] = var16;
            var16 = 2402745247838.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot35;
            var2['__initData'] = var16;
            var57 = var8.bind(var13)(var2);
            var13 = _closure1_slot4;
            var8 = var13.useState;
            var2 = var18.get;
            var2 = var2.bind(var18)();
            var2 = var2 < var3;
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var41);
            var54 = var2[var3];
            var20 = var2[var47];
            _closure2_slot12 = var20;
            var2 = var11[var27];
            var16 = var9.bind(var4)(var2);
            var13 = var16.useAnimatedReaction;
            var8 = function oe() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var2 = {};
            var2['scrollPosition'] = var18;
            var8['__closure'] = var2;
            var2 = 1515709080541.0;
            var8['__workletHash'] = var2;
            var2 = _closure1_slot36;
            var8['__initData'] = var2;
            var2 = function te(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot12;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 15:
                    return var1;
                }
            };
            var18 = {};
            var22 = var11[var27];
            var22 = var9.bind(var4)(var22);
            var22 = var22.runOnJS;
            var18['runOnJS'] = var22;
            var18['setShowBlur'] = var20;
            var2['__closure'] = var18;
            var18 = 11057160578223.0;
            var2['__workletHash'] = var18;
            var18 = _closure1_slot37;
            var2['__initData'] = var18;
            var2 = var13.bind(var16)(var8, var2);
            var13 = _closure1_slot4;
            var8 = var13.useState;
            var2 = false;
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var8 = var2.bind(var4)(var8, var41);
            var2 = var8[var3];
            _closure2_slot13 = var2;
            var8 = var8[var47];
            _closure2_slot14 = var8;
            var8 = 31;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.GifAutoPlay;
            var8 = var9.getSetting;
            var60 = var8.bind(var9)();
            if(var60) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var60 = var2;
case 17:
            var2 = var17 == var12;
            var13 = undefined;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var12.getBannerURL;
            var2 = {};
            var2['canAnimate'] = var60;
            var2['size'] = var23;
            var13 = var8.bind(var12)(var2);
case 19:
            var2 = var17 != var13;
            var63 = null;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 32;
            var2 = var9[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.makeSource;
            var63 = var2.bind(var8)(var13);
case 21:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 32;
            var2 = var9[var2];
            var11 = var8.bind(var4)(var2);
            var2 = var11.isAnimatedImageURL;
            var51 = var2.bind(var11)(var13);
            var48 = 33;
            var2 = var9[var48];
            var2 = var8.bind(var4)(var2);
            var16 = var2.intl;
            var13 = var16.formatToPlainString;
            var2 = var9[var48];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var11 = var2.gVn4uJ;
            var2 = {};
            var18 = var40.username;
            var2['username'] = var18;
            var64 = var13.bind(var16)(var11, var2);
            var2 = 34;
            var2 = var9[var2];
            var9 = var8.bind(var4)(var2);
            var8 = var9.useUserProfileBannerBackgroundColor;
            var2 = {};
            var2['user'] = var40;
            var2['displayProfile'] = var12;
            var59 = var8.bind(var9)(var2);
            var22 = var17 == var12;
            if(var22) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = var12.isLoaded;
            var22 = !var2;
case 23:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 35;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = _closure1_slot4;
            var11 = var13.useMemo;
            var9 = new Array(3);
            var9[0] = var42;
            var9[1] = var23;
            var8 = var6.bottom;
            var9[2] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var2 = {};
                    var4 = _closure2_slot11;
                    var2['width'] = var4;
                    var4 = _closure2_slot2;
                    var2['height'] = var4;
                    var1['dimensionStyle'] = var2;
                    var2 = {};
                    var3 = _closure2_slot4;
                    var4 = var3.bottom;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 36;
                    var3 = var7[var3];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.isYouNavFloating;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.spacing;
                    var3 = var5.PX_64;
case 25:
                    var3 = var4 + var3;
                    var2['paddingBottom'] = var3;
                    var1['contentContainerStyle'] = var2;
                    return var1;
                }
            };
            var8 = var11.bind(var13)(var8, var9);
            var66 = var8.dimensionStyle;
            var29 = var8.contentContainerStyle;
            var43 = var2;
            if(var43) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var43 = var5;
case 27:
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var52 = var6.top;
            _fun0001_ip = 32; continue _fun0001;
case 29:
            var52 = _closure1_slot14;
case 32:
            var1 = var17 == var12;
            var45 = undefined;
            if(var1) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = var12.profileEffect;
            var2 = var17 == var1;
            var45 = undefined;
            if(var2) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var45 = var1.skuId;
case 33:
            var26 = var17 != var45;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 37;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var5 = var17 == var12;
            var1 = undefined;
            if(var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var5 = var12.profileFrame;
            var8 = var17 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var1 = var5.skuId;
case 36:
            var24 = var2.bind(var4)(var1, var7);
            _closure2_slot15 = var24;
            var8 = _closure1_slot4;
            var5 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var24;
            var2[1] = var23;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0008_ip = 39; continue _fun0008 }
case 16:
                    var1 = undefined;
                    return var1;
case 39:
                    var1 = {};
                    var3 = _closure1_slot23;
                    var5 = _closure2_slot11;
                    var6 = _closure1_slot22;
                    var4 = 2;
                    var4 = var4 * var6;
                    var4 = var5 + var4;
                    var2 = _closure1_slot21;
                    var2 = var4 / var2;
                    var2 = var3 * var2;
                    var1['marginTop'] = var2;
                    var2 = 'visible';
                    var1['overflow'] = var2;
                    return var1;
                }
            };
            var20 = var5.bind(var8)(var1, var2);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 38;
            var1 = var8[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useMobileWishlistOwnerExperiment;
            var2 = var1.bind(var2)(var7);
            _closure2_slot16 = var2;
            var11 = _closure1_slot4;
            var9 = var11.useMemo;
            var1 = var2.enabled;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0009_ip = 8; continue _fun0009 }
case 40:
                    var1 = new Array(0);
                    _fun0009_ip = 41; continue _fun0009;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 41:
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var1, var7);
            var1 = 40;
            var1 = var8[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useSelectedDismissibleContent;
            var5 = var1.bind(var5)(var7);
            var1 = _closure1_slot3;
            var5 = var1.bind(var4)(var5, var41);
            var1 = var5[var3];
            var67 = var5[var47];
            var65 = var2.enabled;
            if(!var65) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var65 = var17 != var1;
case 42:
            _closure2_slot17 = var65;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var65;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var1 = null;
                    if(!var2) { _fun0010_ip = 44; continue _fun0010 }
case 40:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 33;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.epBu6F;
                    var4 = var5.bind(var9)(var4);
                    var2['title'] = var4;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.o8+3AX;
                    var3 = var4.bind(var5)(var3);
                    var2['description'] = var3;
                    var3 = {};
                    var2['avatarSrc'] = var3;
                    var3 = '';
                    var2['decorationAsset'] = var3;
                    var3 = function renderImgComponent() {
                        var4 = _closure1_slot25;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 41;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = {};
                        var6 = 'https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png';
                        var5['uri'] = var6;
                        var1['source'] = var5;
                        var5 = {'width': 80, 'height': 80};
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['renderImgComponent'] = var3;
                    var1 = var2;
case 44:
                    return var1;
                }
            };
            var62 = var5.bind(var7)(var1, var2);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var8 = var1.bind(var2)(var17);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var7 = var1.bind(var2)(var17);
            _closure2_slot18 = var67;
            var9 = _closure1_slot4;
            var5 = var9.useCallback;
            var2 = new Array(2);
            var2[0] = var67;
            var2[1] = var31;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot18;
                var2 = _closure1_slot24;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var5.bind(var9)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 42;
            var5 = var1[var13];
            var16 = var2.bind(var4)(var5);
            var11 = var16.useCreateUserProfileAnalyticsContext;
            var5 = {};
            var18 = 'YOU_SCREEN';
            var5['layout'] = var18;
            var18 = var40.id;
            var5['userId'] = var18;
            var11 = var11.bind(var16)(var5);
            var53 = var17 != var62;
            var61 = 43;
            var1 = var1[var61];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useYouSettingsCoachmark;
            var1 = {};
            var1['disabled'] = var53;
            var1 = var2.bind(var5)(var1);
            _closure2_slot19 = var1;
            var49 = var17 != var1;
            var2 = var53;
            if(var53) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var2 = var49;
case 45:
            _closure2_slot20 = var2;
            var56 = _closure1_slot4;
            var16 = var56.useState;
            var58 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 36;
            var5 = var5[var18];
            var58 = var58.bind(var4)(var5);
            var5 = var58.isYouNavFloating;
            var5 = var5.bind(var58)();
            var5 = !var5;
            var16 = var16.bind(var56)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var16, var41);
            var3 = var5[var3];
            var5 = var5[var47];
            _closure2_slot21 = var5;
            var16 = null;
            if(!var2) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var16 = null;
            if(!var3) { _fun0001_ip = 47; continue _fun0001 }
case 49:
            var41 = _closure1_slot26;
            var5 = _closure1_slot0;
            var56 = _closure1_slot2;
            var3 = 44;
            var3 = var56[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.LayerScope;
            var3 = {};
            var3['zIndex'] = var47;
            if(!var53) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var58 = _closure1_slot25;
            var56 = _closure1_slot1;
            var68 = _closure1_slot2;
            var47 = 45;
            var47 = var68[var47];
            var56 = var56.bind(var4)(var47);
            var47 = {};
            var47['buttonRef'] = var8;
            var47['markAsDismissed'] = var67;
            var47['visible'] = var65;
            var65 = var62.title;
            var47['title'] = var65;
            var65 = var62.description;
            var47['description'] = var65;
            var65 = var62.avatarSrc;
            var47['avatarSrc'] = var65;
            var65 = var62.decorationAsset;
            var47['decorationAsset'] = var65;
            var62 = var62.renderImgComponent;
            var47['renderImgComponent'] = var62;
            var47['navigateToShop'] = var9;
            var53 = var58.bind(var4)(var56, var47);
case 50:
            var47 = new Array(2);
            var47[0] = var53;
            if(!var49) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var58 = _closure1_slot25;
            var56 = _closure1_slot1;
            var53 = _closure1_slot2;
            var53 = var53[var61];
            var56 = var56.bind(var4)(var53);
            var53 = {};
            var53['buttonRef'] = var7;
            var70 = var1.props;
            var71 = var53;
            var61 = copyDataProperties(var71, var70);
            var49 = var58.bind(var4)(var56, var53);
case 52:
            var47[1] = var49;
            var3['children'] = var47;
            var16 = var41.bind(var4)(var5, var3);
case 47:
            var41 = _closure1_slot4;
            var5 = var41.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot20;
                    if(!var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 36;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isYouNavFloating;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 54:
                    var2 = undefined;
                    return var2;
case 56:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot21;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var5.bind(var41)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 58:
                    var3 = _closure2_slot19;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 57:
                    if(var2) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                    var3 = _closure2_slot19;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 59:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 46;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var22;
            var1['navigateToPremium'] = var32;
            var1['navigateToSettings'] = var19;
            var1['navigateToShop'] = var9;
            var1['shopButtonRef'] = var8;
            var1['settingsButtonRef'] = var7;
            var1['paddingTop'] = var52;
            var7 = _closure1_slot0;
            var5 = var5[var18];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isYouNavFloating;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var5 = var6.bottom;
case 61:
            var1['paddingBottom'] = var5;
            var19 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot25;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 44;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot25;
            var5 = 47;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var21;
            var5['primaryColor'] = var14;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot25;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var11 = var12.isLoaded;
case 63:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot26;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 48;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var21 = var36.container;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var20;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var20 = var17 != var24;
            if(!var20) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var22 = _closure1_slot25;
            var21 = _closure1_slot1;
            var41 = _closure1_slot2;
            var14 = 49;
            var14 = var41[var14];
            var21 = var21.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var24;
            var14['containerWidth'] = var23;
            var20 = var22.bind(var4)(var21, var14);
case 65:
            var14 = new Array(7);
            var14[0] = var20;
            var41 = _closure1_slot25;
            var22 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 50;
            var21 = var20[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['gradientHeight'] = var50;
            var21['bannerHeight'] = var42;
            var42 = var36.borderRadius;
            var21['style'] = var42;
            var21 = var41.bind(var4)(var22, var21);
            var14[1] = var21;
            var21 = _closure1_slot0;
            var20 = var20[var18];
            var21 = var21.bind(var4)(var20);
            var20 = var21.isYouNavFloating;
            var20 = var20.bind(var21)();
            var20 = !var20;
            if(!var20) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var20 = var16;
case 67:
            var14[2] = var20;
            var22 = _closure1_slot26;
            var21 = _closure1_slot29;
            var20 = {};
            var20['contentContainerStyle'] = var29;
            var20['ref'] = var38;
            var20['onScroll'] = var28;
            var20['onLayout'] = var25;
            var25 = _closure1_slot18;
            var20['scrollEventThrottle'] = var25;
            var25 = var36.scrollView;
            var20['style'] = var25;
            var29 = _closure1_slot26;
            var28 = _closure1_slot1;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var28.bind(var4)(var25);
            var28 = var25.View;
            var25 = {};
            var42 = var36.banner;
            var41 = new Array(2);
            var41[0] = var42;
            var41[1] = var44;
            var25['style'] = var41;
            var42 = null;
            if(!var43) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var42 = null;
            if(var26) { _fun0001_ip = 69; continue _fun0001 }
case 71:
            var49 = _closure1_slot25;
            var56 = _closure1_slot0;
            var61 = _closure1_slot2;
            var41 = 51;
            var41 = var61[var41];
            var41 = var56.bind(var4)(var41);
            var47 = var41.PressableOpacity;
            var41 = {};
            var58 = var36.backButton;
            var53 = new Array(2);
            var53[0] = var58;
            var58 = {};
            var58['top'] = var52;
            var53[1] = var58;
            var41['style'] = var53;
            var53 = var61[var48];
            var53 = var56.bind(var4)(var53);
            var62 = var53.intl;
            var58 = var62.string;
            var53 = var61[var48];
            var53 = var56.bind(var4)(var53);
            var53 = var53.t;
            var53 = var53["13/7kX"];
            var53 = var58.bind(var62)(var53);
            var41['accessibilityLabel'] = var53;
            var53 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 52;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 74; continue _fun0013 }
case 56:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 72; continue _fun0013;
case 74:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 72:
                    return var1;
                }
            };
            var41['onPress'] = var53;
            var58 = _closure1_slot25;
            var53 = 53;
            var53 = var61[var53];
            var53 = var56.bind(var4)(var53);
            var56 = var53.CloseIconWithBadgeOnSide;
            var53 = {};
            var53 = var58.bind(var4)(var56, var53);
            var41['children'] = var53;
            var42 = var49.bind(var4)(var47, var41);
case 69:
            var41 = new Array(3);
            var41[0] = var42;
            var42 = !var26;
            if(var26) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var49 = _closure1_slot0;
            var47 = _closure1_slot2;
            var47 = var47[var18];
            var49 = var49.bind(var4)(var47);
            var47 = var49.isYouNavFloating;
            var47 = var47.bind(var49)();
            var42 = !var47;
case 75:
            if(!var42) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var42 = var19;
case 77:
            var41[1] = var42;
            var49 = _closure1_slot26;
            var47 = _closure1_slot1;
            var61 = _closure1_slot2;
            var42 = var61[var27];
            var42 = var47.bind(var4)(var42);
            var47 = var42.View;
            var42 = {};
            var56 = {};
            var58 = _closure1_slot0;
            var53 = 54;
            var53 = var61[var53];
            var58 = var58.bind(var4)(var53);
            var53 = var58.int2hex;
            var53 = var53.bind(var58)(var59);
            var56['backgroundColor'] = var53;
            var53 = new Array(3);
            var53[0] = var56;
            var53[1] = var66;
            var53[2] = var55;
            var42['style'] = var53;
            var53 = var17 != var63;
            if(!var53) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            if(var51) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var56 = _closure1_slot25;
            var55 = _closure1_slot1;
            var58 = _closure1_slot2;
            var51 = 41;
            var51 = var58[var51];
            var55 = var55.bind(var4)(var51);
            var51 = {};
            var51['style'] = var66;
            var58 = 'image';
            var51['accessibilityRole'] = var58;
            var51['accessibilityLabel'] = var64;
            var51['source'] = var63;
            var51 = var56.bind(var4)(var55, var51);
            _fun0001_ip = 83; continue _fun0001;
case 81:
            var58 = _closure1_slot26;
            var68 = _closure1_slot0;
            var67 = _closure1_slot2;
            var55 = 51;
            var55 = var67[var55];
            var55 = var68.bind(var4)(var55);
            var56 = var55.PressableOpacity;
            var55 = {};
            var59 = function onPress() {
                var3 = _closure2_slot14;
                var1 = _closure2_slot13;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var55['onPress'] = var59;
            var65 = 'image';
            var55['accessibilityRole'] = var65;
            var59 = var67[var48];
            var59 = var68.bind(var4)(var59);
            var62 = var59.intl;
            var61 = var62.string;
            var59 = var67[var48];
            var59 = var68.bind(var4)(var59);
            var59 = var59.t;
            var59 = var59["3fzj/l"];
            var59 = var61.bind(var62)(var59);
            var55['accessibilityLabel'] = var59;
            var62 = _closure1_slot25;
            var61 = _closure1_slot1;
            var59 = 41;
            var59 = var67[var59];
            var61 = var61.bind(var4)(var59);
            var59 = {};
            var59['style'] = var66;
            var59['accessibilityRole'] = var65;
            var59['accessibilityLabel'] = var64;
            var59['source'] = var63;
            var61 = var62.bind(var4)(var61, var59);
            var59 = new Array(2);
            var59[0] = var61;
            var60 = !var60;
            if(!var60) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var63 = _closure1_slot25;
            var67 = _closure1_slot0;
            var64 = _closure1_slot2;
            var61 = 55;
            var61 = var64[var61];
            var61 = var67.bind(var4)(var61);
            var62 = var61.Caption;
            var61 = {};
            var65 = var64[var48];
            var65 = var67.bind(var4)(var65);
            var66 = var65.intl;
            var65 = var66.string;
            var64 = var64[var48];
            var64 = var67.bind(var4)(var64);
            var64 = var64.t;
            var64 = var64.I5gL2H;
            var64 = var65.bind(var66)(var64);
            var61['label'] = var64;
            var65 = var36.gifTag;
            var64 = new Array(2);
            var64[0] = var65;
            var65 = {};
            var65['top'] = var52;
            var64[1] = var65;
            var61['style'] = var64;
            var64 = var36.gifTagText;
            var61['textStyle'] = var64;
            var60 = var63.bind(var4)(var62, var61);
case 84:
            var59[1] = var60;
            var55['children'] = var59;
            var51 = var58.bind(var4)(var56, var55);
case 83:
            var53 = var51;
case 79:
            var51 = new Array(2);
            var51[0] = var53;
            var55 = _closure1_slot0;
            var56 = _closure1_slot2;
            var53 = 56;
            var53 = var56[var53];
            var55 = var55.bind(var4)(var53);
            var53 = var55.isIOS;
            var53 = var53.bind(var55)();
            if(!var53) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var53 = var54;
case 86:
            if(!var53) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var56 = _closure1_slot25;
            var55 = _closure1_slot27;
            var54 = {};
            var54['animatedProps'] = var57;
            var57 = _closure1_slot5;
            var57 = var57.absoluteFillObject;
            var54['style'] = var57;
            var53 = var56.bind(var4)(var55, var54);
case 88:
            var51[1] = var53;
            var42['children'] = var51;
            var42 = var49.bind(var4)(var47, var42);
            var41[2] = var42;
            var25['children'] = var41;
            var28 = var29.bind(var4)(var28, var25);
            var25 = new Array(4);
            var25[0] = var28;
            if(!var26) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var29 = _closure1_slot26;
            var42 = _closure1_slot1;
            var47 = _closure1_slot2;
            var27 = var47[var27];
            var27 = var42.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var41 = 'box-none';
            var27['pointerEvents'] = var41;
            var49 = var36.profileEffectLayer;
            var41 = new Array(3);
            var41[0] = var49;
            var49 = {};
            var49['width'] = var23;
            var49['height'] = var50;
            var41[1] = var49;
            var41[2] = var44;
            var27['style'] = var41;
            var44 = _closure1_slot25;
            var41 = 57;
            var41 = var47[var41];
            var42 = var42.bind(var4)(var41);
            var41 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var41['skuId'] = var45;
            var42 = var44.bind(var4)(var42, var41);
            var41 = new Array(3);
            var41[0] = var42;
            var42 = null;
            if(!var43) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var45 = _closure1_slot25;
            var47 = _closure1_slot0;
            var49 = _closure1_slot2;
            var43 = 51;
            var43 = var49[var43];
            var43 = var47.bind(var4)(var43);
            var44 = var43.PressableOpacity;
            var43 = {};
            var51 = var36.backButton;
            var50 = new Array(2);
            var50[0] = var51;
            var51 = {};
            var51['top'] = var52;
            var50[1] = var51;
            var43['style'] = var50;
            var50 = var49[var48];
            var50 = var47.bind(var4)(var50);
            var51 = var50.intl;
            var50 = var51.string;
            var48 = var49[var48];
            var48 = var47.bind(var4)(var48);
            var48 = var48.t;
            var48 = var48["13/7kX"];
            var48 = var50.bind(var51)(var48);
            var43['accessibilityLabel'] = var48;
            var46 = function onPress() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 52;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 72; continue _fun0014 }
case 73:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0014_ip = 74; continue _fun0014 }
case 56:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0014_ip = 72; continue _fun0014;
case 74:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 72:
                    return var1;
                }
            };
            var43['onPress'] = var46;
            var48 = _closure1_slot25;
            var46 = 53;
            var46 = var49[var46];
            var46 = var47.bind(var4)(var46);
            var47 = var46.CloseIconWithBadgeOnSide;
            var46 = {};
            var46 = var48.bind(var4)(var47, var46);
            var43['children'] = var46;
            var42 = var45.bind(var4)(var44, var43);
case 92:
            var41[1] = var42;
            var43 = _closure1_slot0;
            var42 = _closure1_slot2;
            var42 = var42[var18];
            var43 = var43.bind(var4)(var42);
            var42 = var43.isYouNavFloating;
            var42 = var42.bind(var43)();
            var42 = !var42;
            if(!var42) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var42 = var19;
case 94:
            var41[2] = var42;
            var27['children'] = var41;
            var26 = var29.bind(var4)(var28, var27);
case 90:
            var25[1] = var26;
            var28 = _closure1_slot25;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 58;
            var26 = var29[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var26['user'] = var40;
            var26['userTheme'] = var39;
            var26['scrollViewRef'] = var38;
            var38 = var36.content;
            var36 = new Array(2);
            var36[0] = var38;
            var36[1] = var37;
            var26['style'] = var36;
            var26['navigateToProfileCustomization'] = var35;
            var26['navigateToCustomStatus'] = var34;
            var26['navigateToFriends'] = var33;
            var26['navigateToPremium'] = var32;
            var26['navigateToShop'] = var31;
            var26['initialTab'] = var30;
            var26 = var28.bind(var4)(var27, var26);
            var25[2] = var26;
            var28 = _closure1_slot25;
            var27 = _closure1_slot0;
            var26 = 59;
            var26 = var29[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.TTIFirstContentfulPaint;
            var26 = {};
            var29 = 'you_screen';
            var26['label'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[3] = var26;
            var20['children'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var14[3] = var20;
            var17 = var17 != var24;
            if(!var17) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var22 = _closure1_slot25;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var20 = 60;
            var20 = var25[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['frame'] = var24;
            var20['containerWidth'] = var23;
            var17 = var22.bind(var4)(var21, var20);
case 96:
            var14[4] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var18];
            var20 = var20.bind(var4)(var17);
            var17 = var20.isYouNavFloating;
            var17 = var17.bind(var20)();
            if(!var17) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var17 = var19;
case 98:
            var14[5] = var17;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isYouNavFloating;
            var15 = var15.bind(var17)();
            if(!var15) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var15 = var16;
case 100:
            var14[6] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var8 = var4.ScrollView;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarIOSModalPresentation;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.SCALE_FACTOR;
    var _closure1_slot12 = var9;
    var9 = var4.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var9;
    var9 = var4.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var9;
    var9 = var4.YOU_AVATAR_SIZE;
    var _closure1_slot15 = var9;
    var9 = var4.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot16 = var9;
    var9 = var4.YOU_SCREEN_ID;
    var _closure1_slot17 = var9;
    var4 = var4.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PROFILE_FRAME_LAYER_WIDTH;
    var _closure1_slot21 = var9;
    var9 = var4.PROFILE_FRAME_OVERFLOW_LEFT;
    var _closure1_slot22 = var9;
    var4 = var4.PROFILE_FRAME_OVERFLOW_TOP;
    var _closure1_slot23 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot24 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot25 = var9;
    var4 = var4.jsxs;
    var _closure1_slot26 = var4;
    var4 = 15;
    var9 = var6[var4];
    var11 = var7.bind(var1)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 16;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var10.bind(var11)(var9);
    var _closure1_slot27 = var9;
    var9 = 17;
    var9 = var6[var9];
    var11 = var5.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var3 = {};
            var5 = undefined;
            var1 = undefined;
            if(!var2) { _fun0015_ip = 102; continue _fun0015 }
case 40:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.radii;
            var1 = var4.xl;
case 102:
            var3['borderTopLeftRadius'] = var1;
            var1 = undefined;
            if(!var2) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.radii;
            var1 = var2.xl;
case 103:
            var3['borderTopRightRadius'] = var1;
            var1 = {};
            var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative', 'overflow': 'hidden'};
            var4 = 1;
            var12 = var2;
            var11 = var3;
            var6 = copyDataProperties(var12, var11);
            var1['container'] = var2;
            var1['borderRadius'] = var3;
            var2 = {};
            var2['flex'] = var4;
            var12 = var2;
            var11 = var3;
            var3 = copyDataProperties(var12, var11);
            var1['scrollView'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'zIndex': 1};
            var1['profileEffectLayer'] = var2;
            var2 = {'minHeight': null, 'position': 'absolute', 'top': 0, 'maxWidth': '100%'};
            var2['minHeight'] = var7;
            var1['banner'] = var2;
            var2 = {'position': 'absolute', 'left': 16, 'right': 'auto', 'bottom': 'auto', 'marginTop': 8};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 19;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var3 = 18;
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.WHITE;
            var10 = var9.bind(var5)(var8);
            var9 = var10.alpha;
            var8 = 0.9;
            var9 = var9.bind(var10)(var8);
            var8 = var9.css;
            var8 = var8.bind(var9)();
            var2['backgroundColor'] = var8;
            var1['gifTag'] = var2;
            var2 = {};
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.PRIMARY_800;
            var2['color'] = var8;
            var8 = 14;
            var2['fontSize'] = var8;
            var1['gifTagText'] = var2;
            var2 = {'marginTop': null, 'flex': 1, 'flexGrow': 1};
            var2['marginTop'] = var7;
            var1['content'] = var2;
            var2 = {'position': 'absolute', 'marginTop': null, 'left': null, 'zIndex': 99, 'alignItems': 'center', 'justifyContent': 'center'};
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_4;
            var2['marginTop'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['left'] = var3;
            var1['backButton'] = var2;
            return var1;
        }
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot28 = var9;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var4['code'] = var7;
    var _closure1_slot36 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var4['code'] = var7;
    var _closure1_slot37 = var4;
    var4 = 69;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreen(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 28;
            var7 = var1[var3];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var10)(var8, var7);
            var _closure2_slot0 = var13;
            var1 = var1[var3];
            var8 = var4.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.locale;
                return var1;
            };
            var7 = var7.bind(var8)(var4, var1);
            var1 = null;
            var4 = var1 == var13;
            var9 = undefined;
            if(var4) { _fun0016_ip = 105; continue _fun0016 }
case 106:
            var9 = var13.id;
case 105:
            _closure2_slot1 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0017_ip = 73; continue _fun0017 }
case 107:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 73:
                    return var1;
                }
            };
            var12 = var10.bind(var11)(var4, var8);
            _closure2_slot2 = var12;
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 38;
            var8 = var14[var8];
            var11 = var4.bind(var5)(var8);
            var10 = var11.useMobileWishlistOwnerExperiment;
            var8 = 'YouScreen';
            var8 = var10.bind(var11)(var8);
            _closure2_slot3 = var8;
            var11 = _closure1_slot4;
            var10 = var11.useLayoutEffect;
            var8 = new Array(3);
            var8[0] = var9;
            var8[1] = var12;
            var8[2] = var7;
            var7 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0018_ip = 108; continue _fun0018 }
case 58:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 108:
                    if(!var2) { _fun0018_ip = 26; continue _fun0018 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 61;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var7, var8);
            var3 = var14[var3];
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 56; continue _fun0019 }
case 3:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 56; continue _fun0019 }
case 109:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 56:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var3);
            var3 = 62;
            var3 = var14[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var10;
            var3['userId'] = var9;
            var3 = var7.bind(var8)(var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var4 = _closure1_slot9;
                var3 = var4.setState;
                var2 = {'query': '', 'isActive': false};
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 63;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openUserSettings;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var12 = var8.bind(var9)(var7, var3);
            _closure2_slot4 = var12;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 63;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot19;
                var5 = var5.PREMIUM;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var11 = var8.bind(var9)(var7, var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 64;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 65;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var9 = var9.YOU_SCREEN;
                var2['analyticsSource'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.YOU_SCREEN;
                var6 = new Array(1);
                var6[0] = var7;
                var2['analyticsLocations'] = var6;
                var5 = _closure1_slot20;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var7 = var8.bind(var9)(var7, var3);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 63;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot19;
                var5 = var5.PROFILE_CUSTOMIZATION;
                var2['screen'] = var5;
                var5 = {};
                var6 = arg1;
                var5['autoFocusElement'] = var6;
                var2['params'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var10 = var9.bind(var10)(var8, var3);
            var15 = _closure1_slot4;
            var9 = var15.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 66;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 65;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.YOU_SCREEN;
                var5 = new Array(1);
                var5[0] = var6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var9 = var9.bind(var15)(var8, var3);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var8 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 52;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0020_ip = 74; continue _fun0020 }
case 73:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0020_ip = 74; continue _fun0020 }
case 56:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 74:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var15.bind(var16)(var8, var3);
            var18 = _closure1_slot4;
            var16 = var18.useLayoutEffect;
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 67;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var16.bind(var18)(var15, var3);
            var3 = 68;
            var3 = var14[var3];
            var14 = var4.bind(var5)(var3);
            var4 = var14.useScrollToTop;
            var16 = _closure1_slot4;
            var15 = var16.useRef;
            var3 = {};
            var17 = function scrollToTop() {
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3['scrollToTop'] = var17;
            var3 = var15.bind(var16)(var3);
            var3 = var4.bind(var14)(var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0016_ip = 110; continue _fun0016 }
case 111:
            var4 = _closure1_slot25;
            var3 = _closure1_slot38;
            var2 = {};
            var2['user'] = var13;
            var2['navigateToSettings'] = var12;
            var2['navigateToPremium'] = var11;
            var2['navigateToProfileCustomization'] = var10;
            var2['navigateToCustomStatus'] = var9;
            var2['navigateToFriends'] = var8;
            var2['navigateToShop'] = var7;
            var2['initialTab'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 110:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();