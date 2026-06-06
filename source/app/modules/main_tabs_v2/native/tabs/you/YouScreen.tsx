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
            var41 = var1.user;
            var19 = var1.navigateToSettings;
            var _closure2_slot0 = var19;
            var33 = var1.navigateToPremium;
            var32 = var1.navigateToShop;
            var _closure2_slot1 = var32;
            var36 = var1.navigateToProfileCustomization;
            var35 = var1.navigateToCustomStatus;
            var34 = var1.navigateToFriends;
            var31 = var1.initialTab;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
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
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var1 = global;
            var6 = var1.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var11 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var3 = 0;
            var5 = var2.bind(var5)(var3);
            var2 = _closure1_slot3;
            var48 = 2;
            var2 = var2.bind(var4)(var5, var48);
            var13 = var2[var3];
            var50 = 1;
            var2 = var2[var50];
            var _closure2_slot2 = var2;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var25 = var6.bind(var7)(var5, var2);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var6 = var13 > var3;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var13;
case 2:
            var43 = var5.bind(var4)(var2);
            _closure2_slot3 = var43;
            var2 = _closure1_slot16;
            var30 = var43 * var2;
            _closure2_slot4 = var30;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 21;
            var2 = var14[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useYouBarEnabled;
            var9 = 'YouScreen';
            var18 = var2.bind(var5)(var9);
            var2 = _closure1_slot11;
            var5 = var2.bind(var4)(var9);
            var2 = _closure1_slot26;
            var37 = var2.bind(var4)(var43, var5);
            var7 = _closure1_slot1;
            var2 = 22;
            var2 = var14[var2];
            var6 = var7.bind(var4)(var2);
            var2 = {};
            var10 = 23;
            var12 = var14[var10];
            var12 = var8.bind(var4)(var12);
            var12 = var12.ImpressionTypes;
            var12 = var12.VIEW;
            var2['type'] = var12;
            var10 = var14[var10];
            var10 = var8.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.USER_YOU_SCREEN;
            var2['name'] = var10;
            var2 = var6.bind(var4)(var2);
            var2 = 24;
            var2 = var14[var2];
            var6 = var7.bind(var4)(var2);
            var2 = var41.id;
            var12 = var6.bind(var4)(var2);
            var2 = 25;
            var2 = var14[var2];
            var2 = var7.bind(var4)(var2);
            var6 = var2.bind(var4)();
            _closure2_slot5 = var6;
            var2 = 26;
            var2 = var14[var2];
            var10 = var7.bind(var4)(var2);
            var2 = {};
            var2['user'] = var41;
            var2['displayProfile'] = var12;
            var2 = var10.bind(var4)(var2);
            var22 = var2.theme;
            var21 = var2.primaryColor;
            var10 = var2.secondaryColor;
            var2 = 27;
            var2 = var14[var2];
            var2 = var7.bind(var4)(var2);
            var40 = var2.bind(var4)();
            var16 = _closure1_slot4;
            var2 = var16.useRef;
            var17 = null;
            var39 = var2.bind(var16)(var17);
            var27 = 15;
            var2 = var14[var27];
            var16 = var8.bind(var4)(var2);
            var2 = var16.useSharedValue;
            var20 = var2.bind(var16)(var3);
            _closure2_slot6 = var20;
            var2 = var14[var27];
            var23 = var8.bind(var4)(var2);
            var16 = var23.useAnimatedScrollHandler;
            var2 = function ee(arg1) {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var24 = {};
            var24['scrollPosition'] = var20;
            var2['__closure'] = var24;
            var24 = 952837799380.0;
            var2['__workletHash'] = var24;
            var24 = _closure1_slot28;
            var2['__initData'] = var24;
            var28 = var16.bind(var23)(var2);
            var24 = _closure1_slot4;
            var23 = var24.useMemo;
            var16 = new Array(1);
            var16[0] = var43;
            var2 = function() {
                var2 = _closure2_slot3;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var38 = var23.bind(var24)(var2, var16);
            _closure2_slot7 = var38;
            var2 = var14[var27];
            var23 = var8.bind(var4)(var2);
            var16 = var23.useDerivedValue;
            var2 = function te() {
                var2 = _closure2_slot6;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var24 = {};
            var24['scrollPosition'] = var20;
            var2['__closure'] = var24;
            var24 = 588222792165.0;
            var2['__workletHash'] = var24;
            var24 = _closure1_slot29;
            var2['__initData'] = var24;
            var26 = var16.bind(var23)(var2);
            _closure2_slot8 = var26;
            var2 = 28;
            var2 = var14[var2];
            var29 = var8.bind(var4)(var2);
            var24 = var29.useStateFromStores;
            var2 = _closure1_slot6;
            var23 = new Array(1);
            var23[0] = var2;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure1_slot13;
case 4:
                    return var1;
                }
            };
            var2 = new Array(0);
            var24 = var24.bind(var29)(var23, var16, var2);
            _closure2_slot9 = var24;
            var2 = var14[var27];
            var23 = var8.bind(var4)(var2);
            var16 = var23.useAnimatedStyle;
            var2 = function oe() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var4 = undefined;
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var8 = _closure2_slot6;
                    var7 = var8.get;
                    var9 = var7.bind(var8)();
                    var8 = _closure2_slot7;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = 0;
                    var7[1] = var8;
                    var12 = _closure1_slot12;
                    var3 = new Array(2);
                    var3[0] = var12;
                    var12 = 1;
                    var3[1] = var12;
                    var3 = var10.bind(var11)(var9, var7, var3);
                    var1 = var6[var1];
                    var7 = var5.bind(var4)(var1);
                    var6 = var7.interpolate;
                    var4 = _closure2_slot6;
                    var1 = var4.get;
                    var5 = var1.bind(var4)();
                    var1 = _closure2_slot7;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot4;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot8;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = new Array(0);
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
case 8:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var29 = {};
            var42 = var14[var27];
            var42 = var8.bind(var4)(var42);
            var42 = var42.interpolate;
            var29['interpolate'] = var42;
            var29['scrollPosition'] = var20;
            var29['minScrollPosition'] = var38;
            var38 = _closure1_slot12;
            var29['SCALE_FACTOR'] = var38;
            var29['translateOnScale'] = var30;
            var29['isNegativeScrollPosition'] = var26;
            var2['__closure'] = var29;
            var29 = 5882939038632.0;
            var2['__workletHash'] = var29;
            var29 = _closure1_slot30;
            var2['__initData'] = var29;
            var56 = var16.bind(var23)(var2);
            var2 = var14[var27];
            var23 = var8.bind(var4)(var2);
            var16 = var23.useAnimatedStyle;
            var2 = function ie() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot8;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var2 = new Array(0);
                    _fun0004_ip = 11; continue _fun0004;
case 9:
                    var4 = {};
                    var5 = _closure2_slot6;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 11:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var29 = {};
            var29['isNegativeScrollPosition'] = var26;
            var29['scrollPosition'] = var20;
            var2['__closure'] = var29;
            var29 = 17425045144242.0;
            var2['__workletHash'] = var29;
            var29 = _closure1_slot31;
            var2['__initData'] = var29;
            var45 = var16.bind(var23)(var2);
            var2 = var14[var27];
            var16 = var8.bind(var4)(var2);
            var8 = var16.useAnimatedStyle;
            var2 = function ne() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot8;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var2 = new Array(0);
                    _fun0005_ip = 12; continue _fun0005;
case 9:
                    var4 = {};
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = _closure2_slot9;
                    var3 = 1;
                    var3 = var3 / var6;
                    var3 = var5 * var3;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 12:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var23 = {};
            var23['isNegativeScrollPosition'] = var26;
            var23['scrollPosition'] = var20;
            var23['coefficient'] = var24;
            var2['__closure'] = var23;
            var23 = 9336428823274.0;
            var2['__workletHash'] = var23;
            var23 = _closure1_slot32;
            var2['__initData'] = var23;
            var38 = var8.bind(var16)(var2);
            var2 = 29;
            var2 = var14[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.isChatBesideChannelList;
            var2 = 30;
            var2 = var14[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.width;
            var51 = var2.height;
            _closure2_slot10 = var51;
            var2 = var6.right;
            var7 = var7 - var2;
            var2 = var6.left;
            var7 = var7 - var2;
            var2 = 0;
            if(!var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = 16;
case 13:
            var8 = var7 - var2;
            var23 = var8;
            if(!(var13 > var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = var1.Math;
            var2 = var7.min;
            var23 = var2.bind(var7)(var8, var13);
case 15:
            _closure2_slot11 = var23;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = var16[var27];
            var8 = var14.bind(var4)(var2);
            var7 = var8.useAnimatedProps;
            var2 = function se() {
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
                var4 = _closure2_slot6;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot10;
                var3 = -var3;
                var2 = _closure2_slot9;
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
            var13 = {};
            var26 = var16[var27];
            var26 = var14.bind(var4)(var26);
            var26 = var26.clamp;
            var13['clamp'] = var26;
            var26 = var16[var27];
            var26 = var14.bind(var4)(var26);
            var26 = var26.interpolate;
            var13['interpolate'] = var26;
            var13['scrollPosition'] = var20;
            var13['windowHeight'] = var51;
            var13['coefficient'] = var24;
            var2['__closure'] = var13;
            var13 = 2402745247838.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot33;
            var2['__initData'] = var13;
            var58 = var7.bind(var8)(var2);
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var2 = var20.get;
            var2 = var2.bind(var20)();
            var2 = var2 < var3;
            var7 = var7.bind(var8)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var7, var48);
            var55 = var2[var3];
            var24 = var2[var50];
            _closure2_slot12 = var24;
            var2 = var16[var27];
            var13 = var14.bind(var4)(var2);
            var8 = var13.useAnimatedReaction;
            var7 = function le() {
                var2 = _closure2_slot6;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var2 = {};
            var2['scrollPosition'] = var20;
            var7['__closure'] = var2;
            var2 = 1515709080541.0;
            var7['__workletHash'] = var2;
            var2 = _closure1_slot34;
            var7['__initData'] = var2;
            var2 = function ae(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
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
case 17:
                    return var1;
                }
            };
            var20 = {};
            var26 = var16[var27];
            var26 = var14.bind(var4)(var26);
            var26 = var26.runOnJS;
            var20['runOnJS'] = var26;
            var20['setShowBlur'] = var24;
            var2['__closure'] = var20;
            var20 = 11057160578223.0;
            var2['__workletHash'] = var20;
            var20 = _closure1_slot35;
            var2['__initData'] = var20;
            var2 = var8.bind(var13)(var7, var2);
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var2 = false;
            var7 = var7.bind(var8)(var2);
            var2 = _closure1_slot3;
            var7 = var2.bind(var4)(var7, var48);
            var2 = var7[var3];
            _closure2_slot13 = var2;
            var7 = var7[var50];
            _closure2_slot14 = var7;
            var7 = 31;
            var7 = var16[var7];
            var7 = var14.bind(var4)(var7);
            var8 = var7.GifAutoPlay;
            var7 = var8.getSetting;
            var7 = var7.bind(var8)();
            var8 = 32;
            var8 = var16[var8];
            var13 = var14.bind(var4)(var8);
            var8 = var13.useIsFocused;
            var13 = var8.bind(var13)();
            var8 = 33;
            var8 = var16[var8];
            var14 = var14.bind(var4)(var8);
            var8 = var14.useIsProfileModalTransitioning;
            var8 = var8.bind(var14)();
            var30 = !var13;
            if(!var30) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var30 = !var8;
case 19:
            var61 = var7;
            if(var61) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var61 = var2;
case 21:
            var2 = var17 == var12;
            var14 = undefined;
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = var12.getBannerURL;
            var2 = {};
            var2['canAnimate'] = var61;
            var2['size'] = var23;
            var14 = var7.bind(var12)(var2);
case 23:
            var2 = var17 != var14;
            var64 = null;
            if(!var2) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 34;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.makeSource;
            var64 = var2.bind(var7)(var14);
case 25:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 34;
            var2 = var8[var2];
            var13 = var7.bind(var4)(var2);
            var2 = var13.isAnimatedImageURL;
            var52 = var2.bind(var13)(var14);
            var49 = 35;
            var2 = var8[var49];
            var2 = var7.bind(var4)(var2);
            var16 = var2.intl;
            var14 = var16.formatToPlainString;
            var2 = var8[var49];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var13 = var2.gVn4uJ;
            var2 = {};
            var20 = var41.username;
            var2['username'] = var20;
            var65 = var14.bind(var16)(var13, var2);
            var2 = 36;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.useUserProfileBannerBackgroundColor;
            var2 = {};
            var2['user'] = var41;
            var2['displayProfile'] = var12;
            var60 = var7.bind(var8)(var2);
            var42 = var17 == var12;
            if(var42) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var2 = var12.isLoaded;
            var42 = !var2;
case 27:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 37;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var8 = new Array(3);
            var8[0] = var43;
            var8[1] = var23;
            var2 = var6.bottom;
            var8[2] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var2 = {};
                    var4 = _closure2_slot11;
                    var2['width'] = var4;
                    var4 = _closure2_slot3;
                    var2['height'] = var4;
                    var1['dimensionStyle'] = var2;
                    var2 = {};
                    var3 = _closure2_slot5;
                    var4 = var3.bottom;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 38;
                    var3 = var7[var3];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.isYouNavFloating;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.spacing;
                    var3 = var5.PX_64;
case 29:
                    var3 = var4 + var3;
                    var2['paddingBottom'] = var3;
                    var1['contentContainerStyle'] = var2;
                    return var1;
                }
            };
            var2 = var13.bind(var14)(var2, var8);
            var67 = var2.dimensionStyle;
            var29 = var2.contentContainerStyle;
            var44 = var7;
            if(var44) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var44 = var18;
case 31:
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 39;
            var2 = var20[var14];
            var16 = var8.bind(var4)(var2);
            var13 = var16.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var24 = 'YOU_SCREEN';
            var2['layout'] = var24;
            var24 = var41.id;
            var2['userId'] = var24;
            var13 = var13.bind(var16)(var2);
            var2 = 40;
            var2 = var20[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.useIsScreenLandscape;
            var16 = var2.bind(var8)();
            var8 = _closure1_slot1;
            var2 = 41;
            var2 = var20[var2];
            var8 = var8.bind(var4)(var2);
            var2 = undefined;
            if(!var18) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var2 = undefined;
            if(var16) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var24 = var17 == var12;
            var20 = undefined;
            if(var24) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var24 = var12.profileFrame;
            var26 = var17 == var24;
            var20 = undefined;
            if(var26) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var20 = var24.skuId;
case 36:
            var2 = var20;
case 33:
            var24 = var8.bind(var4)(var2, var9);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 42;
            var2 = var9[var2];
            var8 = var8.bind(var4)(var2);
            var2 = {};
            var9 = undefined;
            if(!var18) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var9 = undefined;
            if(var16) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var18 = var17 == var12;
            var16 = undefined;
            if(var18) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var18 = var12.profileFrame;
            var20 = var17 == var18;
            var16 = undefined;
            if(var20) { _fun0001_ip = 42; continue _fun0001 }
case 44:
            var16 = var18.skuId;
case 42:
            var9 = var16;
case 39:
            var2['skuId'] = var9;
            var9 = var11.current;
            var2['openedAt'] = var9;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 43;
            var9 = var18[var9];
            var9 = var16.bind(var4)(var9);
            var16 = var9.YOU_SCREEN;
            var9 = new Array(1);
            var9[0] = var16;
            var2['analyticsLocations'] = var9;
            var2['context'] = var13;
            var2 = var8.bind(var4)(var2);
            var8 = var17 != var24;
            var2 = 0;
            if(!var8) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 44;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.bind(var4)(var24, var23);
            var2 = var8.overflowTop;
case 45:
            _closure2_slot15 = var2;
            var18 = _closure1_slot4;
            var16 = var18.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var2 = {};
                    var3 = _closure2_slot15;
                    var2['marginTop'] = var3;
                    var1 = var2;
case 47:
                    return var1;
                }
            };
            var20 = var16.bind(var18)(var8, var9);
            if(var7) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            if(var5) { _fun0001_ip = 49; continue _fun0001 }
case 51:
            var7 = var1.Math;
            var5 = var7.max;
            var1 = var6.top;
            var2 = var1 - var2;
            var1 = _closure1_slot14;
            var53 = var5.bind(var7)(var2, var1);
            _fun0001_ip = 52; continue _fun0001;
case 49:
            var53 = _closure1_slot14;
case 52:
            var1 = var17 == var12;
            var46 = undefined;
            if(var1) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var1 = var12.profileEffect;
            var2 = var17 == var1;
            var46 = undefined;
            if(var2) { _fun0001_ip = 53; continue _fun0001 }
case 55:
            var46 = var1.skuId;
case 53:
            var26 = var17 != var46;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DismissibleContent;
                var2 = var1.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var1 = new Array(0);
            var8 = var5.bind(var7)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 46;
            var5 = var1[var5];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useSelectedDismissibleContent;
            var7 = var5.bind(var7)(var8);
            var5 = _closure1_slot3;
            var7 = var5.bind(var4)(var7, var48);
            var5 = var7[var3];
            var69 = var7[var50];
            var68 = var17 != var5;
            _closure2_slot16 = var68;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var68;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 35;
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
                        var4 = _closure1_slot23;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 47;
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
case 56:
                    return var1;
                }
            };
            var66 = var8.bind(var9)(var5, var7);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var8 = var5.bind(var7)(var17);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var7 = var5.bind(var7)(var17);
            _closure2_slot17 = var69;
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var9 = new Array(2);
            var9[0] = var69;
            var9[1] = var32;
            var5 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot17;
                var2 = _closure1_slot21;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var16.bind(var18)(var5, var9);
            var57 = var17 != var66;
            var63 = 48;
            var1 = var1[var63];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useYouSettingsCoachmark;
            var1 = {};
            var1['disabled'] = var57;
            var1 = var2.bind(var5)(var1);
            _closure2_slot18 = var1;
            var54 = var17 != var1;
            var2 = var57;
            if(var57) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var2 = var54;
case 58:
            _closure2_slot19 = var2;
            var59 = _closure1_slot4;
            var16 = var59.useState;
            var62 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 38;
            var5 = var5[var18];
            var62 = var62.bind(var4)(var5);
            var5 = var62.isYouNavFloating;
            var5 = var5.bind(var62)();
            var5 = !var5;
            var16 = var16.bind(var59)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var16, var48);
            var3 = var5[var3];
            var5 = var5[var50];
            _closure2_slot20 = var5;
            var16 = null;
            if(!var2) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var16 = null;
            if(!var3) { _fun0001_ip = 60; continue _fun0001 }
case 62:
            var48 = _closure1_slot24;
            var5 = _closure1_slot0;
            var59 = _closure1_slot2;
            var3 = 49;
            var3 = var59[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.LayerScope;
            var3 = {};
            var3['zIndex'] = var50;
            if(!var57) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var62 = _closure1_slot23;
            var59 = _closure1_slot1;
            var70 = _closure1_slot2;
            var50 = 50;
            var50 = var70[var50];
            var59 = var59.bind(var4)(var50);
            var50 = {};
            var50['buttonRef'] = var8;
            var50['markAsDismissed'] = var69;
            var50['visible'] = var68;
            var68 = var66.title;
            var50['title'] = var68;
            var68 = var66.description;
            var50['description'] = var68;
            var68 = var66.avatarSrc;
            var50['avatarSrc'] = var68;
            var68 = var66.decorationAsset;
            var50['decorationAsset'] = var68;
            var66 = var66.renderImgComponent;
            var50['renderImgComponent'] = var66;
            var50['navigateToShop'] = var9;
            var57 = var62.bind(var4)(var59, var50);
case 63:
            var50 = new Array(2);
            var50[0] = var57;
            if(!var54) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var62 = _closure1_slot23;
            var59 = _closure1_slot1;
            var57 = _closure1_slot2;
            var57 = var57[var63];
            var59 = var59.bind(var4)(var57);
            var57 = {};
            var57['buttonRef'] = var7;
            var72 = var1.props;
            var73 = var57;
            var63 = copyDataProperties(var73, var72);
            var54 = var62.bind(var4)(var59, var57);
case 65:
            var50[1] = var54;
            var3['children'] = var50;
            var16 = var48.bind(var4)(var5, var3);
case 60:
            var48 = _closure1_slot4;
            var5 = var48.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot19;
                    if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 38;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isYouNavFloating;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0010_ip = 69; continue _fun0010 }
case 67:
                    var2 = undefined;
                    return var2;
case 69:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot20;
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
            var2 = var5.bind(var48)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot18;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var3 = _closure2_slot18;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 70:
                    if(var2) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var3 = _closure2_slot18;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 72:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 51;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var42;
            var1['navigateToPremium'] = var33;
            var1['navigateToSettings'] = var19;
            var1['navigateToShop'] = var9;
            var1['shopButtonRef'] = var8;
            var1['settingsButtonRef'] = var7;
            var1['paddingTop'] = var53;
            var7 = _closure1_slot0;
            var5 = var5[var18];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isYouNavFloating;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var5 = var6.bottom;
case 74:
            var1['paddingBottom'] = var5;
            var19 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot23;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 49;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot23;
            var5 = 52;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var22;
            var5['primaryColor'] = var21;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot23;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var11 = var12.fetchStartedAt;
case 76:
            var8['fetchStartedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var11 = var12.fetchEndedAt;
case 78:
            var8['fetchEndedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var11 = var12.isLoaded;
case 80:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot24;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 53;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var21 = var37.container;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var20;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var20 = var17 != var24;
            if(!var20) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var22 = _closure1_slot23;
            var21 = _closure1_slot1;
            var50 = _closure1_slot2;
            var14 = 54;
            var14 = var50[var14];
            var21 = var21.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var24;
            var42 = _closure1_slot22;
            var42 = var42.YOU_SCREEN;
            var14['profileThemeType'] = var42;
            var48 = _closure1_slot0;
            var42 = 55;
            var42 = var50[var42];
            var42 = var48.bind(var4)(var42);
            var42 = var42.ProfileFrameLayerOrder;
            var42 = var42.BACK;
            var14['frameOrder'] = var42;
            var14['containerWidth'] = var23;
            var20 = var22.bind(var4)(var21, var14);
case 82:
            var14 = new Array(7);
            var14[0] = var20;
            var42 = _closure1_slot23;
            var22 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 56;
            var21 = var20[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['gradientHeight'] = var51;
            var21['bannerHeight'] = var43;
            var43 = var37.background;
            var21['style'] = var43;
            var21 = var42.bind(var4)(var22, var21);
            var14[1] = var21;
            var21 = _closure1_slot0;
            var20 = var20[var18];
            var21 = var21.bind(var4)(var20);
            var20 = var21.isYouNavFloating;
            var20 = var20.bind(var21)();
            var20 = !var20;
            if(!var20) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var20 = var16;
case 84:
            var14[2] = var20;
            var22 = _closure1_slot24;
            var21 = _closure1_slot27;
            var20 = {};
            var20['contentContainerStyle'] = var29;
            var20['ref'] = var39;
            var20['onScroll'] = var28;
            var20['onLayout'] = var25;
            var25 = _closure1_slot18;
            var20['scrollEventThrottle'] = var25;
            var25 = var37.scrollView;
            var20['style'] = var25;
            var29 = _closure1_slot24;
            var28 = _closure1_slot1;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var28.bind(var4)(var25);
            var28 = var25.View;
            var25 = {};
            var43 = var37.banner;
            var42 = new Array(2);
            var42[0] = var43;
            var42[1] = var45;
            var25['style'] = var42;
            var43 = null;
            if(!var44) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var43 = null;
            if(var26) { _fun0001_ip = 86; continue _fun0001 }
case 88:
            var50 = _closure1_slot23;
            var57 = _closure1_slot0;
            var62 = _closure1_slot2;
            var42 = 57;
            var42 = var62[var42];
            var42 = var57.bind(var4)(var42);
            var48 = var42.PressableOpacity;
            var42 = {};
            var59 = var37.backButton;
            var54 = new Array(2);
            var54[0] = var59;
            var59 = {};
            var59['top'] = var53;
            var54[1] = var59;
            var42['style'] = var54;
            var54 = var62[var49];
            var54 = var57.bind(var4)(var54);
            var63 = var54.intl;
            var59 = var63.string;
            var54 = var62[var49];
            var54 = var57.bind(var4)(var54);
            var54 = var54.t;
            var54 = var54["13/7kX"];
            var54 = var59.bind(var63)(var54);
            var42['accessibilityLabel'] = var54;
            var54 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 58;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 91; continue _fun0012 }
case 69:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 89; continue _fun0012;
case 91:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 89:
                    return var1;
                }
            };
            var42['onPress'] = var54;
            var59 = _closure1_slot23;
            var54 = 59;
            var54 = var62[var54];
            var54 = var57.bind(var4)(var54);
            var57 = var54.CloseIconWithBadgeOnSide;
            var54 = {};
            var54 = var59.bind(var4)(var57, var54);
            var42['children'] = var54;
            var43 = var50.bind(var4)(var48, var42);
case 86:
            var42 = new Array(3);
            var42[0] = var43;
            var43 = !var26;
            if(var26) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var50 = _closure1_slot0;
            var48 = _closure1_slot2;
            var48 = var48[var18];
            var50 = var50.bind(var4)(var48);
            var48 = var50.isYouNavFloating;
            var48 = var48.bind(var50)();
            var43 = !var48;
case 92:
            if(!var43) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var43 = var19;
case 94:
            var42[1] = var43;
            var50 = _closure1_slot24;
            var48 = _closure1_slot1;
            var62 = _closure1_slot2;
            var43 = var62[var27];
            var43 = var48.bind(var4)(var43);
            var48 = var43.View;
            var43 = {};
            var57 = {};
            var59 = _closure1_slot0;
            var54 = 60;
            var54 = var62[var54];
            var59 = var59.bind(var4)(var54);
            var54 = var59.int2hex;
            var54 = var54.bind(var59)(var60);
            var57['backgroundColor'] = var54;
            var54 = new Array(3);
            var54[0] = var57;
            var54[1] = var67;
            var54[2] = var56;
            var43['style'] = var54;
            var54 = var17 != var64;
            if(!var54) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            if(var52) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var57 = _closure1_slot23;
            var56 = _closure1_slot1;
            var59 = _closure1_slot2;
            var52 = 47;
            var52 = var59[var52];
            var56 = var56.bind(var4)(var52);
            var52 = {};
            var52['style'] = var67;
            var59 = 'image';
            var52['accessibilityRole'] = var59;
            var52['accessibilityLabel'] = var65;
            var52['source'] = var64;
            var52['paused'] = var30;
            var52 = var57.bind(var4)(var56, var52);
            _fun0001_ip = 100; continue _fun0001;
case 98:
            var59 = _closure1_slot24;
            var69 = _closure1_slot0;
            var68 = _closure1_slot2;
            var56 = 57;
            var56 = var68[var56];
            var56 = var69.bind(var4)(var56);
            var57 = var56.PressableOpacity;
            var56 = {};
            var60 = function onPress() {
                var3 = _closure2_slot14;
                var1 = _closure2_slot13;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var56['onPress'] = var60;
            var66 = 'image';
            var56['accessibilityRole'] = var66;
            var60 = var68[var49];
            var60 = var69.bind(var4)(var60);
            var63 = var60.intl;
            var62 = var63.string;
            var60 = var68[var49];
            var60 = var69.bind(var4)(var60);
            var60 = var60.t;
            var60 = var60["3fzj/l"];
            var60 = var62.bind(var63)(var60);
            var56['accessibilityLabel'] = var60;
            var63 = _closure1_slot23;
            var62 = _closure1_slot1;
            var60 = 47;
            var60 = var68[var60];
            var62 = var62.bind(var4)(var60);
            var60 = {};
            var60['style'] = var67;
            var60['accessibilityRole'] = var66;
            var60['accessibilityLabel'] = var65;
            var60['source'] = var64;
            var60['paused'] = var30;
            var62 = var63.bind(var4)(var62, var60);
            var60 = new Array(2);
            var60[0] = var62;
            var61 = !var61;
            if(!var61) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var64 = _closure1_slot23;
            var68 = _closure1_slot0;
            var65 = _closure1_slot2;
            var62 = 61;
            var62 = var65[var62];
            var62 = var68.bind(var4)(var62);
            var63 = var62.Caption;
            var62 = {};
            var66 = var65[var49];
            var66 = var68.bind(var4)(var66);
            var67 = var66.intl;
            var66 = var67.string;
            var65 = var65[var49];
            var65 = var68.bind(var4)(var65);
            var65 = var65.t;
            var65 = var65.I5gL2H;
            var65 = var66.bind(var67)(var65);
            var62['label'] = var65;
            var66 = var37.gifTag;
            var65 = new Array(2);
            var65[0] = var66;
            var66 = {};
            var66['top'] = var53;
            var65[1] = var66;
            var62['style'] = var65;
            var65 = var37.gifTagText;
            var62['textStyle'] = var65;
            var61 = var64.bind(var4)(var63, var62);
case 101:
            var60[1] = var61;
            var56['children'] = var60;
            var52 = var59.bind(var4)(var57, var56);
case 100:
            var54 = var52;
case 96:
            var52 = new Array(2);
            var52[0] = var54;
            var56 = _closure1_slot0;
            var57 = _closure1_slot2;
            var54 = 62;
            var54 = var57[var54];
            var56 = var56.bind(var4)(var54);
            var54 = var56.isIOS;
            var54 = var54.bind(var56)();
            if(!var54) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var54 = var55;
case 103:
            if(!var54) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var57 = _closure1_slot23;
            var56 = _closure1_slot25;
            var55 = {};
            var55['animatedProps'] = var58;
            var58 = _closure1_slot5;
            var58 = var58.absoluteFillObject;
            var55['style'] = var58;
            var54 = var57.bind(var4)(var56, var55);
case 105:
            var52[1] = var54;
            var43['children'] = var52;
            var43 = var50.bind(var4)(var48, var43);
            var42[2] = var43;
            var25['children'] = var42;
            var28 = var29.bind(var4)(var28, var25);
            var25 = new Array(4);
            var25[0] = var28;
            if(!var26) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var29 = _closure1_slot24;
            var43 = _closure1_slot1;
            var48 = _closure1_slot2;
            var27 = var48[var27];
            var27 = var43.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var42 = 'box-none';
            var27['pointerEvents'] = var42;
            var50 = var37.profileEffectLayer;
            var42 = new Array(3);
            var42[0] = var50;
            var50 = {};
            var50['width'] = var23;
            var50['height'] = var51;
            var42[1] = var50;
            var42[2] = var45;
            var27['style'] = var42;
            var45 = _closure1_slot23;
            var42 = 63;
            var42 = var48[var42];
            var43 = var43.bind(var4)(var42);
            var42 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var42['skuId'] = var46;
            var42['paused'] = var30;
            var43 = var45.bind(var4)(var43, var42);
            var42 = new Array(3);
            var42[0] = var43;
            var43 = null;
            if(!var44) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var46 = _closure1_slot23;
            var48 = _closure1_slot0;
            var50 = _closure1_slot2;
            var44 = 57;
            var44 = var50[var44];
            var44 = var48.bind(var4)(var44);
            var45 = var44.PressableOpacity;
            var44 = {};
            var52 = var37.backButton;
            var51 = new Array(2);
            var51[0] = var52;
            var52 = {};
            var52['top'] = var53;
            var51[1] = var52;
            var44['style'] = var51;
            var51 = var50[var49];
            var51 = var48.bind(var4)(var51);
            var52 = var51.intl;
            var51 = var52.string;
            var49 = var50[var49];
            var49 = var48.bind(var4)(var49);
            var49 = var49.t;
            var49 = var49["13/7kX"];
            var49 = var51.bind(var52)(var49);
            var44['accessibilityLabel'] = var49;
            var47 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 58;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 91; continue _fun0013 }
case 69:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 89; continue _fun0013;
case 91:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 89:
                    return var1;
                }
            };
            var44['onPress'] = var47;
            var49 = _closure1_slot23;
            var47 = 59;
            var47 = var50[var47];
            var47 = var48.bind(var4)(var47);
            var48 = var47.CloseIconWithBadgeOnSide;
            var47 = {};
            var47 = var49.bind(var4)(var48, var47);
            var44['children'] = var47;
            var43 = var46.bind(var4)(var45, var44);
case 109:
            var42[1] = var43;
            var44 = _closure1_slot0;
            var43 = _closure1_slot2;
            var43 = var43[var18];
            var44 = var44.bind(var4)(var43);
            var43 = var44.isYouNavFloating;
            var43 = var43.bind(var44)();
            var43 = !var43;
            if(!var43) { _fun0001_ip = 111; continue _fun0001 }
case 112:
            var43 = var19;
case 111:
            var42[2] = var43;
            var27['children'] = var42;
            var26 = var29.bind(var4)(var28, var27);
case 107:
            var25[1] = var26;
            var28 = _closure1_slot23;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 64;
            var26 = var29[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var26['user'] = var41;
            var26['userTheme'] = var40;
            var26['scrollViewRef'] = var39;
            var39 = var37.content;
            var37 = new Array(2);
            var37[0] = var39;
            var37[1] = var38;
            var26['style'] = var37;
            var26['navigateToProfileCustomization'] = var36;
            var26['navigateToCustomStatus'] = var35;
            var26['navigateToFriends'] = var34;
            var26['navigateToPremium'] = var33;
            var26['navigateToShop'] = var32;
            var26['initialTab'] = var31;
            var30 = !var30;
            var26['animateAvatar'] = var30;
            var26 = var28.bind(var4)(var27, var26);
            var25[2] = var26;
            var28 = _closure1_slot23;
            var27 = _closure1_slot0;
            var26 = 65;
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
            if(!var17) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var22 = _closure1_slot23;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 54;
            var20 = var26[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['frame'] = var24;
            var24 = _closure1_slot22;
            var24 = var24.YOU_SCREEN;
            var20['profileThemeType'] = var24;
            var25 = _closure1_slot0;
            var24 = 55;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.ProfileFrameLayerOrder;
            var24 = var24.FRONT;
            var20['frameOrder'] = var24;
            var20['containerWidth'] = var23;
            var17 = var22.bind(var4)(var21, var20);
case 113:
            var14[4] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var18];
            var20 = var20.bind(var4)(var17);
            var17 = var20.isYouNavFloating;
            var17 = var17.bind(var20)();
            if(!var17) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var17 = var19;
case 115:
            var14[5] = var17;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isYouNavFloating;
            var15 = var15.bind(var17)();
            if(!var15) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var15 = var16;
case 117:
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
    var _closure1_slot36 = var1;
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
    var4 = var4.ContentDismissActionType;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot23 = var9;
    var4 = var4.jsxs;
    var _closure1_slot24 = var4;
    var4 = 15;
    var9 = var6[var4];
    var11 = var7.bind(var1)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 16;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var10.bind(var11)(var9);
    var _closure1_slot25 = var9;
    var9 = 17;
    var9 = var6[var9];
    var11 = var5.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var3 = {};
            var5 = undefined;
            var1 = undefined;
            if(!var2) { _fun0014_ip = 119; continue _fun0014 }
case 57:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.radii;
            var1 = var4.xl;
case 119:
            var3['borderTopLeftRadius'] = var1;
            var1 = undefined;
            if(!var2) { _fun0014_ip = 120; continue _fun0014 }
case 121:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.radii;
            var1 = var2.xl;
case 120:
            var3['borderTopRightRadius'] = var1;
            var1 = {};
            var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative'};
            var4 = 1;
            var12 = var2;
            var11 = var3;
            var6 = copyDataProperties(var12, var11);
            var1['container'] = var2;
            var2 = {};
            var6 = 'hidden';
            var2['overflow'] = var6;
            var12 = var2;
            var11 = var3;
            var6 = copyDataProperties(var12, var11);
            var1['background'] = var2;
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
    var _closure1_slot26 = var9;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = 72;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreen(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
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
            var4 = var7.bind(var8)(var4, var1);
            var1 = null;
            var7 = var1 == var13;
            var9 = undefined;
            if(var7) { _fun0015_ip = 122; continue _fun0015 }
case 123:
            var9 = var13.id;
case 122:
            _closure2_slot1 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0016_ip = 90; continue _fun0016 }
case 48:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 90:
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var7, var8);
            _closure2_slot2 = var11;
            var10 = _closure1_slot4;
            var8 = var10.useLayoutEffect;
            var7 = new Array(3);
            var7[0] = var9;
            var7[1] = var11;
            var7[2] = var4;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0017_ip = 124; continue _fun0017 }
case 71:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 124:
                    if(!var2) { _fun0017_ip = 30; continue _fun0017 }
case 9:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 66;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var10)(var4, var7);
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = var14[var3];
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0018_ip = 125; continue _fun0018 }
case 71:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 125:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var3);
            var3 = 67;
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
                var1 = 68;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openUserSettings;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var12 = var8.bind(var9)(var7, var3);
            _closure2_slot3 = var12;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 68;
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
                var1 = 69;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 43;
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
                var1 = 68;
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
                var1 = 70;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 43;
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
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 58;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0019_ip = 91; continue _fun0019 }
case 90:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0019_ip = 91; continue _fun0019 }
case 69:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 91:
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
                var1 = 71;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var16.bind(var18)(var15, var3);
            var3 = 32;
            var3 = var14[var3];
            var14 = var4.bind(var5)(var3);
            var4 = var14.useScrollToTop;
            var16 = _closure1_slot4;
            var15 = var16.useRef;
            var3 = {};
            var17 = function scrollToTop() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3['scrollToTop'] = var17;
            var3 = var15.bind(var16)(var3);
            var3 = var4.bind(var14)(var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0015_ip = 126; continue _fun0015 }
case 127:
            var4 = _closure1_slot23;
            var3 = _closure1_slot36;
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
case 126:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();