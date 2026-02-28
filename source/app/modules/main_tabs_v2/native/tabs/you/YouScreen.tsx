// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function UnconnectedYouScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.user;
            var5 = var1.navigateToSettings;
            var _closure2_slot0 = var5;
            var34 = var1.navigateToPremium;
            var7 = var1.navigateToShop;
            var _closure2_slot1 = var7;
            var13 = var1.navigateToProfileCustomization;
            var9 = var1.navigateToCustomStatus;
            var8 = var1.navigateToFriends;
            var3 = var1.style;
            var47 = var1.inBottomSheet;
            var _closure2_slot2 = var47;
            var6 = var1.initialTab;
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
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var10 = _closure1_slot4;
            var2 = var10.useRef;
            var23 = global;
            var11 = var23.Date;
            var1 = var11.now;
            var1 = var1.bind(var11)();
            var11 = var2.bind(var10)(var1);
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 20;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            if(!var47) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot20;
case 2:
            var22 = var2.bind(var4)(var1);
            _closure2_slot3 = var22;
            var1 = _closure1_slot16;
            var37 = var22 * var1;
            _closure2_slot4 = var37;
            var1 = _closure1_slot26;
            var25 = var1.bind(var4)(var22);
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var1 = 21;
            var1 = var28[var1];
            var2 = var27.bind(var4)(var1);
            var1 = {};
            var24 = _closure1_slot0;
            var10 = 22;
            var12 = var28[var10];
            var12 = var24.bind(var4)(var12);
            var12 = var12.ImpressionTypes;
            var12 = var12.VIEW;
            var1['type'] = var12;
            var10 = var28[var10];
            var10 = var24.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.USER_YOU_SCREEN;
            var1['name'] = var10;
            var1 = var2.bind(var4)(var1);
            var1 = 23;
            var1 = var28[var1];
            var2 = var27.bind(var4)(var1);
            var1 = var17.id;
            var12 = var2.bind(var4)(var1);
            var1 = 24;
            var1 = var28[var1];
            var1 = var27.bind(var4)(var1);
            var20 = var1.bind(var4)();
            var1 = 25;
            var1 = var28[var1];
            var2 = var27.bind(var4)(var1);
            var1 = {};
            var1['user'] = var17;
            var1['displayProfile'] = var12;
            var1 = var2.bind(var4)(var1);
            var16 = var1.theme;
            var15 = var1.primaryColor;
            var10 = var1.secondaryColor;
            var1 = 26;
            var1 = var28[var1];
            var1 = var27.bind(var4)(var1);
            var14 = var1.bind(var4)();
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var42 = null;
            var2 = var1.bind(var2)(var42);
            var21 = 15;
            var1 = var28[var21];
            var19 = var24.bind(var4)(var1);
            var1 = var19.useSharedValue;
            var30 = 0;
            var35 = var1.bind(var19)(var30);
            _closure2_slot5 = var35;
            var1 = var28[var21];
            var26 = var24.bind(var4)(var1);
            var19 = var26.useAnimatedScrollHandler;
            var1 = function K(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var29 = {};
            var29['scrollPosition'] = var35;
            var1['__closure'] = var29;
            var29 = 952837799380.0;
            var1['__workletHash'] = var29;
            var29 = _closure1_slot28;
            var1['__initData'] = var29;
            var1 = var19.bind(var26)(var1);
            var31 = _closure1_slot4;
            var29 = var31.useMemo;
            var26 = new Array(1);
            var26[0] = var22;
            var19 = function() {
                var2 = _closure2_slot3;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var38 = var29.bind(var31)(var19, var26);
            _closure2_slot6 = var38;
            var19 = var28[var21];
            var29 = var24.bind(var4)(var19);
            var26 = var29.useDerivedValue;
            var19 = function X() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var31 = {};
            var31['scrollPosition'] = var35;
            var19['__closure'] = var31;
            var31 = 588222792165.0;
            var19['__workletHash'] = var31;
            var31 = _closure1_slot29;
            var19['__initData'] = var31;
            var36 = var26.bind(var29)(var19);
            _closure2_slot7 = var36;
            var31 = 27;
            var19 = var28[var31];
            var33 = var24.bind(var4)(var19);
            var32 = var33.useStateFromStores;
            var19 = _closure1_slot6;
            var29 = new Array(1);
            var29[0] = var19;
            var26 = function() {
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
            var19 = new Array(0);
            var33 = var32.bind(var33)(var29, var26, var19);
            _closure2_slot8 = var33;
            var19 = var28[var21];
            var29 = var24.bind(var4)(var19);
            var26 = var29.useAnimatedStyle;
            var19 = function q() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var4 = undefined;
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var8 = _closure2_slot5;
                    var7 = var8.get;
                    var9 = var7.bind(var8)();
                    var8 = _closure2_slot6;
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
                    var4 = _closure2_slot5;
                    var1 = var4.get;
                    var5 = var1.bind(var4)();
                    var1 = _closure2_slot6;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot4;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot7;
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
            var32 = {};
            var39 = var28[var21];
            var39 = var24.bind(var4)(var39);
            var39 = var39.interpolate;
            var32['interpolate'] = var39;
            var32['scrollPosition'] = var35;
            var32['minScrollPosition'] = var38;
            var38 = _closure1_slot12;
            var32['SCALE_FACTOR'] = var38;
            var32['translateOnScale'] = var37;
            var32['isNegativeScrollPosition'] = var36;
            var19['__closure'] = var32;
            var32 = 5882939038632.0;
            var19['__workletHash'] = var32;
            var32 = _closure1_slot30;
            var19['__initData'] = var32;
            var45 = var26.bind(var29)(var19);
            var19 = var28[var21];
            var29 = var24.bind(var4)(var19);
            var26 = var29.useAnimatedStyle;
            var19 = function Z() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var2 = new Array(0);
                    _fun0004_ip = 11; continue _fun0004;
case 9:
                    var4 = {};
                    var5 = _closure2_slot5;
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
            var32 = {};
            var32['isNegativeScrollPosition'] = var36;
            var32['scrollPosition'] = var35;
            var19['__closure'] = var32;
            var32 = 17425045144242.0;
            var19['__workletHash'] = var32;
            var32 = _closure1_slot31;
            var19['__initData'] = var32;
            var26 = var26.bind(var29)(var19);
            var19 = var28[var21];
            var29 = var24.bind(var4)(var19);
            var24 = var29.useAnimatedStyle;
            var19 = function Q() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var2 = new Array(0);
                    _fun0005_ip = 12; continue _fun0005;
case 9:
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
case 12:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['isNegativeScrollPosition'] = var36;
            var32['scrollPosition'] = var35;
            var32['coefficient'] = var33;
            var19['__closure'] = var32;
            var32 = 9336428823274.0;
            var19['__workletHash'] = var32;
            var32 = _closure1_slot32;
            var19['__initData'] = var32;
            var19 = var24.bind(var29)(var19);
            var24 = 28;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var27 = var24.bind(var4)();
            var24 = var27.width;
            var38 = var27.height;
            _closure2_slot9 = var38;
            if(var47) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var27 = var20.right;
            var28 = var24 - var27;
            var27 = var20.left;
            var39 = var28 - var27;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var28 = var23.Math;
            var27 = var28.min;
            var23 = var20.right;
            var24 = var24 - var23;
            var23 = var20.left;
            var24 = var24 - var23;
            var23 = _closure1_slot20;
            var39 = var27.bind(var28)(var24, var23);
case 15:
            _closure2_slot10 = var39;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var21];
            var28 = var27.bind(var4)(var23);
            var24 = var28.useAnimatedProps;
            var23 = function $() {
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
                var3 = _closure2_slot9;
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
            var32 = {};
            var36 = var29[var21];
            var36 = var27.bind(var4)(var36);
            var36 = var36.clamp;
            var32['clamp'] = var36;
            var36 = var29[var21];
            var36 = var27.bind(var4)(var36);
            var36 = var36.interpolate;
            var32['interpolate'] = var36;
            var32['scrollPosition'] = var35;
            var32['windowHeight'] = var38;
            var32['coefficient'] = var33;
            var23['__closure'] = var32;
            var32 = 2402745247838.0;
            var23['__workletHash'] = var32;
            var32 = _closure1_slot33;
            var23['__initData'] = var32;
            var46 = var24.bind(var28)(var23);
            var28 = _closure1_slot4;
            var24 = var28.useState;
            var23 = var35.get;
            var23 = var23.bind(var35)();
            var23 = var23 < var30;
            var24 = var24.bind(var28)(var23);
            var23 = _closure1_slot3;
            var36 = 2;
            var23 = var23.bind(var4)(var24, var36);
            var43 = var23[var30];
            var28 = 1;
            var37 = var23[var28];
            _closure2_slot11 = var37;
            var23 = var29[var21];
            var33 = var27.bind(var4)(var23);
            var32 = var33.useAnimatedReaction;
            var24 = function te() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var23 = {};
            var23['scrollPosition'] = var35;
            var24['__closure'] = var23;
            var23 = 1515709080541.0;
            var24['__workletHash'] = var23;
            var23 = _closure1_slot34;
            var24['__initData'] = var23;
            var23 = function ee(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot11;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 16:
                    return var1;
                }
            };
            var35 = {};
            var40 = var29[var21];
            var40 = var27.bind(var4)(var40);
            var40 = var40.runOnJS;
            var35['runOnJS'] = var40;
            var35['setShowBlur'] = var37;
            var23['__closure'] = var35;
            var35 = 11057160578223.0;
            var23['__workletHash'] = var35;
            var35 = _closure1_slot35;
            var23['__initData'] = var35;
            var23 = var32.bind(var33)(var24, var23);
            var32 = _closure1_slot4;
            var24 = var32.useState;
            var23 = false;
            var24 = var24.bind(var32)(var23);
            var23 = _closure1_slot3;
            var24 = var23.bind(var4)(var24, var36);
            var23 = var24[var30];
            _closure2_slot12 = var23;
            var24 = var24[var28];
            _closure2_slot13 = var24;
            var24 = 29;
            var24 = var29[var24];
            var24 = var27.bind(var4)(var24);
            var27 = var24.GifAutoPlay;
            var24 = var27.getSetting;
            var49 = var24.bind(var27)();
            if(var49) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var49 = var23;
case 18:
            var23 = var42 == var12;
            var32 = undefined;
            if(var23) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var24 = var12.getBannerURL;
            var23 = {};
            var23['canAnimate'] = var49;
            var23['size'] = var39;
            var32 = var24.bind(var12)(var23);
case 20:
            var23 = var42 != var32;
            var52 = null;
            if(!var23) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var24 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 30;
            var23 = var27[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.makeSource;
            var52 = var23.bind(var24)(var32);
case 22:
            var24 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 30;
            var23 = var27[var23];
            var29 = var24.bind(var4)(var23);
            var23 = var29.isAnimatedImageURL;
            var41 = var23.bind(var29)(var32);
            var57 = 31;
            var23 = var27[var57];
            var23 = var24.bind(var4)(var23);
            var33 = var23.intl;
            var32 = var33.formatToPlainString;
            var23 = var27[var57];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var29 = var23.gVn4uJ;
            var23 = {};
            var35 = var17.username;
            var23['username'] = var35;
            var53 = var32.bind(var33)(var29, var23);
            var23 = 32;
            var23 = var27[var23];
            var27 = var24.bind(var4)(var23);
            var24 = var27.useUserProfileBannerBackgroundColor;
            var23 = {};
            var23['user'] = var17;
            var23['displayProfile'] = var12;
            var51 = var24.bind(var27)(var23);
            var35 = var42 == var12;
            if(var35) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var23 = var12.isLoaded;
            var35 = !var23;
case 24:
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 33;
            var23 = var27[var23];
            var23 = var24.bind(var4)(var23);
            var27 = var23.bind(var4)();
            var32 = _closure1_slot4;
            var29 = var32.useMemo;
            var24 = new Array(2);
            var24[0] = var22;
            var24[1] = var39;
            var23 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var1['width'] = var3;
                var2 = _closure2_slot3;
                var1['height'] = var2;
                return var1;
            };
            var55 = var29.bind(var32)(var23, var24);
            if(var27) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(var47) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var29 = var20.top;
            _fun0001_ip = 29; continue _fun0001;
case 26:
            var29 = _closure1_slot14;
case 29:
            var20 = var42 == var12;
            var37 = undefined;
            if(var20) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var20 = var12.profileEffect;
            var23 = var42 == var20;
            var37 = undefined;
            if(var23) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var37 = var20.skuId;
case 30:
            var20 = var42 != var37;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var31];
            var32 = var24.bind(var4)(var23);
            var31 = var32.useStateFromStores;
            var23 = _closure1_slot7;
            var24 = new Array(1);
            var24[0] = var23;
            var23 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 34;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var54 = var31.bind(var32)(var24, var23);
            _closure2_slot14 = var54;
            var23 = var42 == var54;
            var32 = undefined;
            if(var23) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var32 = var54.dismissibleContent;
case 33:
            var31 = _closure1_slot0;
            var23 = _closure1_slot2;
            var59 = 35;
            var24 = var23[var59];
            var24 = var31.bind(var4)(var24);
            var24 = var24.DismissibleContent;
            var24 = var24.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var32 = var32 === var24;
            _closure2_slot15 = var32;
            var24 = 36;
            var24 = var23[var24];
            var40 = var31.bind(var4)(var24);
            var33 = var40.useMobileWishlistOwnerExperiment;
            var24 = 'YouScreen';
            var24 = var33.bind(var40)(var24);
            _closure2_slot16 = var24;
            var50 = _closure1_slot4;
            var44 = var50.useMemo;
            var33 = var24.enabled;
            var40 = new Array(1);
            var40[0] = var33;
            var33 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0007_ip = 10; continue _fun0007 }
case 35:
                    var1 = new Array(0);
                    _fun0007_ip = 36; continue _fun0007;
case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            var33 = var44.bind(var50)(var33, var40);
            var40 = 37;
            var23 = var23[var40];
            var31 = var31.bind(var4)(var23);
            var23 = var31.useSelectedDismissibleContent;
            var31 = var23.bind(var31)(var33);
            var23 = _closure1_slot3;
            var31 = var23.bind(var4)(var31, var36);
            var23 = var31[var30];
            var60 = var31[var28];
            var33 = var24.enabled;
            if(!var33) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var33 = var42 != var23;
case 37:
            _closure2_slot17 = var33;
            var44 = _closure1_slot4;
            var31 = var44.useMemo;
            var24 = new Array(3);
            var24[0] = var33;
            var24[1] = var32;
            var24[2] = var54;
            var23 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 39; continue _fun0008 }
case 41:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 9:
                    var1 = _closure2_slot14;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0008_ip = 42; continue _fun0008;
case 39:
                    var1 = new Array(0);
case 42:
                    return var1;
                }
            };
            var50 = var31.bind(var44)(var23, var24);
            var44 = _closure1_slot4;
            var31 = var44.useMemo;
            var24 = new Array(2);
            var24[0] = var33;
            var24[1] = var54;
            var23 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 17:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var1 = _closure2_slot14;
                    var5 = var1.type;
case 44:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 39;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot14;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var4 = var5;
case 48:
                    var2['description'] = var4;
                    var4 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.avatar;
                    var4['uri'] = var5;
                    var2['avatarSrc'] = var4;
                    var3 = _closure2_slot14;
                    var4 = var3.decorations;
                    var3 = 0;
                    var3 = var4[var3];
                    var2['decorationAsset'] = var3;
                    var1 = var2;
case 46:
                    _fun0009_ip = 50; continue _fun0009;
case 43:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 31;
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
                        var1 = 38;
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
case 50:
                    return var1;
                }
            };
            var58 = var31.bind(var44)(var23, var24);
            _closure2_slot18 = var58;
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var23 = var24[var40];
            var44 = var31.bind(var4)(var23);
            var23 = var44.useSelectedDismissibleContent;
            var44 = var23.bind(var44)(var50);
            var23 = _closure1_slot3;
            var23 = var23.bind(var4)(var44, var36);
            var44 = var23[var30];
            _closure2_slot19 = var44;
            var23 = var23[var28];
            var24 = var24[var40];
            var50 = var31.bind(var4)(var24);
            var40 = var50.useSelectedVersionedDismissibleContent;
            var31 = null;
            if(var33) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var31 = null;
            if(!var32) { _fun0001_ip = 51; continue _fun0001 }
case 53:
            var24 = var42 == var54;
            var56 = undefined;
            if(var24) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var56 = var54.type;
case 54:
            var61 = _closure1_slot0;
            var62 = _closure1_slot2;
            var24 = 39;
            var24 = var62[var24];
            var24 = var61.bind(var4)(var24);
            var24 = var24.CollectiblesMarketingType;
            var24 = var24.COACHTIP;
            var31 = null;
            if(!(var56 === var24)) { _fun0001_ip = 51; continue _fun0001 }
case 56:
            var56 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var59];
            var24 = var56.bind(var4)(var24);
            var24 = var24.DismissibleContent;
            var31 = var24.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 51:
            var24 = var42 == var54;
            var56 = undefined;
            if(var24) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var56 = var54.version;
case 57:
            var59 = var42 != var56;
            var24 = 0;
            if(!var59) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var24 = var56;
case 59:
            var31 = var40.bind(var50)(var31, var24);
            var24 = _closure1_slot3;
            var24 = var24.bind(var4)(var31, var36);
            var30 = var24[var30];
            _closure2_slot20 = var30;
            var24 = var24[var28];
            var40 = _closure1_slot4;
            var36 = var40.useMemo;
            var31 = new Array(5);
            var31[0] = var33;
            var31[1] = var58;
            var56 = var42 == var54;
            var50 = undefined;
            if(var56) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var50 = var54.type;
case 61:
            var31[2] = var50;
            var31[3] = var44;
            var31[4] = var30;
            var30 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot17;
                    var2 = !var1;
                    var1 = !var2;
                    if(!var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var2 = _closure2_slot19;
                    var6 = null;
                    var2 = var6 != var2;
                    if(var2) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var3 = _closure2_slot20;
                    var2 = var6 != var3;
case 65:
                    if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var3 = _closure2_slot18;
                    var3 = var6 != var3;
                    if(!var3) { _fun0010_ip = 69; continue _fun0010 }
case 42:
                    var5 = _closure2_slot14;
                    var6 = var6 == var5;
                    var7 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var4 = _closure2_slot14;
                    var5 = var4.type;
case 70:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 39;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.CollectiblesMarketingType;
                    var4 = var4.COACHTIP;
                    var3 = var5 === var4;
case 69:
                    var2 = var3;
case 67:
                    var1 = var2;
case 63:
                    return var1;
                }
            };
            var59 = var36.bind(var40)(var30, var31);
            var31 = _closure1_slot4;
            var30 = var31.useRef;
            var31 = var30.bind(var31)(var42);
            var36 = _closure1_slot4;
            var30 = var36.useRef;
            var30 = var30.bind(var36)(var42);
            if(var33) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            if(!var32) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var23 = var24;
case 74:
            var60 = var23;
case 72:
            _closure2_slot21 = var60;
            var33 = _closure1_slot4;
            var32 = var33.useCallback;
            var24 = new Array(2);
            var24[0] = var60;
            var24[1] = var7;
            var23 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot21;
                var2 = _closure1_slot22;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var32.bind(var33)(var23, var24);
            var24 = {};
            var24['user'] = var17;
            var24['userTheme'] = var14;
            var24['scrollViewRef'] = var2;
            var23 = var25.content;
            var14 = new Array(2);
            var14[0] = var23;
            var14[1] = var19;
            var24['style'] = var14;
            var24['navigateToProfileCustomization'] = var13;
            var24['navigateToCustomStatus'] = var9;
            var24['navigateToFriends'] = var8;
            var24['navigateToPremium'] = var34;
            var24['navigateToShop'] = var7;
            var24['initialTab'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = 40;
            var8 = var6[var14];
            var13 = var7.bind(var4)(var8);
            var9 = var13.useCreateUserProfileAnalyticsContext;
            var8 = {};
            var19 = 'YOU_SCREEN';
            var8['layout'] = var19;
            var17 = var17.id;
            var8['userId'] = var17;
            var13 = var9.bind(var13)(var8);
            var40 = var42 != var58;
            var56 = 41;
            var6 = var6[var56];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useYouSettingsCoachmark;
            var6 = {};
            var6['disabled'] = var40;
            var54 = var7.bind(var8)(var6);
            _closure2_slot22 = var54;
            var36 = var42 != var54;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = new Array(2);
            var6[0] = var5;
            var6[1] = var54;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot22;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 45; continue _fun0011 }
case 64:
                    var3 = _closure2_slot22;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 45:
                    if(var2) { _fun0011_ip = 39; continue _fun0011 }
case 76:
                    var3 = _closure2_slot22;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 39:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var33 = var7.bind(var8)(var5, var6);
            if(var47) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var17 = _closure1_slot27;
            _fun0001_ip = 79; continue _fun0001;
case 77:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 42;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var17 = var5.BottomSheetScrollView;
case 79:
            if(var47) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var19 = {};
            var19['ref'] = var2;
            var19['onScroll'] = var1;
            var1 = _closure1_slot18;
            var19['scrollEventThrottle'] = var1;
            var2 = var25.scrollView;
            var1 = new Array(2);
            var1[0] = var2;
            var1[1] = var3;
            var19['style'] = var1;
            _fun0001_ip = 82; continue _fun0001;
case 80:
            var1 = {};
            var5 = var25.scrollView;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var3;
            var1['style'] = var2;
            var19 = var1;
case 82:
            var3 = _closure1_slot23;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var44 = 43;
            var1 = var8[var44];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot23;
            var5 = 44;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var16;
            var5['primaryColor'] = var15;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot23;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var11 = var12.fetchStartedAt;
case 83:
            var8['fetchStartedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var11 = var12.fetchEndedAt;
case 85:
            var8['fetchEndedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var11 = var12.isLoaded;
case 87:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot24;
            var15 = _closure1_slot1;
            var23 = _closure1_slot2;
            var11 = 45;
            var11 = var23[var11];
            var12 = var15.bind(var4)(var11);
            var11 = {};
            var14 = var25.container;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var16 = _closure1_slot23;
            var14 = 46;
            var14 = var23[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['gradientHeight'] = var38;
            var14['bannerHeight'] = var22;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var15 = var40;
            if(var40) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var15 = var36;
case 89:
            if(!var15) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var23 = _closure1_slot24;
            var22 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var44];
            var16 = var22.bind(var4)(var16);
            var22 = var16.LayerScope;
            var16 = {};
            var16['zIndex'] = var28;
            if(!var40) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var50 = _closure1_slot23;
            var44 = _closure1_slot1;
            var61 = _closure1_slot2;
            var28 = 47;
            var28 = var61[var28];
            var44 = var44.bind(var4)(var28);
            var28 = {};
            var28['buttonRef'] = var31;
            var28['markAsDismissed'] = var60;
            var28['visible'] = var59;
            var59 = var58.title;
            var28['title'] = var59;
            var59 = var58.description;
            var28['description'] = var59;
            var59 = var58.avatarSrc;
            var28['avatarSrc'] = var59;
            var59 = var58.decorationAsset;
            var28['decorationAsset'] = var59;
            var58 = var58.renderImgComponent;
            var28['renderImgComponent'] = var58;
            var28['navigateToShop'] = var32;
            var40 = var50.bind(var4)(var44, var28);
case 93:
            var28 = new Array(2);
            var28[0] = var40;
            if(!var36) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var50 = _closure1_slot23;
            var44 = _closure1_slot1;
            var40 = _closure1_slot2;
            var40 = var40[var56];
            var44 = var44.bind(var4)(var40);
            var40 = {};
            var40['buttonRef'] = var30;
            var64 = var54.props;
            var65 = var40;
            var54 = copyDataProperties(var65, var64);
            var36 = var50.bind(var4)(var44, var40);
case 95:
            var28[1] = var36;
            var16['children'] = var28;
            var15 = var23.bind(var4)(var22, var16);
case 91:
            var14[1] = var15;
            var16 = _closure1_slot24;
            var15 = {};
            var65 = var15;
            var64 = var19;
            var19 = copyDataProperties(var65, var64);
            var23 = _closure1_slot24;
            var22 = _closure1_slot1;
            var19 = _closure1_slot2;
            var19 = var19[var21];
            var19 = var22.bind(var4)(var19);
            var22 = var19.View;
            var19 = {};
            var36 = var25.banner;
            var28 = new Array(2);
            var28[0] = var36;
            var28[1] = var26;
            var19['style'] = var28;
            if(var27) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var28 = null;
            if(!var47) { _fun0001_ip = 99; continue _fun0001 }
case 97:
            var40 = _closure1_slot23;
            var56 = _closure1_slot0;
            var44 = _closure1_slot2;
            var27 = 48;
            var27 = var44[var27];
            var27 = var56.bind(var4)(var27);
            var36 = var27.PressableOpacity;
            var27 = {};
            var54 = var25.backButton;
            var50 = new Array(2);
            var50[0] = var54;
            var54 = {};
            var54['top'] = var29;
            var50[1] = var54;
            var27['style'] = var50;
            var50 = var44[var57];
            var50 = var56.bind(var4)(var50);
            var54 = var50.intl;
            var50 = var54.string;
            var44 = var44[var57];
            var44 = var56.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.13/7kX;
            var44 = var50.bind(var54)(var44);
            var27['accessibilityLabel'] = var44;
            var44 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0012_ip = 100; continue _fun0012 }
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 50;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 101; continue _fun0012 }
case 42:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    _fun0012_ip = 101; continue _fun0012;
case 100:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 49;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var27['onPress'] = var44;
            var50 = _closure1_slot23;
            var54 = _closure1_slot0;
            var56 = _closure1_slot2;
            var44 = 51;
            var44 = var56[var44];
            var44 = var54.bind(var4)(var44);
            if(var47) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var47 = var44.BackIconWithBadgeOnSide;
            _fun0001_ip = 104; continue _fun0001;
case 102:
            var47 = var44.DownArrowIconWithBadgeOnSide;
case 104:
            var44 = {};
            var44 = var50.bind(var4)(var47, var44);
            var27['children'] = var44;
            var28 = var40.bind(var4)(var36, var27);
case 99:
            var27 = new Array(3);
            var27[0] = var28;
            var28 = !var20;
            if(var20) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var44 = _closure1_slot23;
            var40 = _closure1_slot1;
            var47 = _closure1_slot2;
            var36 = 52;
            var36 = var47[var36];
            var40 = var40.bind(var4)(var36);
            var36 = {};
            var36['isLoading'] = var35;
            var36['navigateToPremium'] = var34;
            var36['navigateToSettings'] = var33;
            var36['navigateToShop'] = var32;
            var36['shopButtonRef'] = var31;
            var36['settingsButtonRef'] = var30;
            var36['paddingTop'] = var29;
            var28 = var44.bind(var4)(var40, var36);
case 105:
            var27[1] = var28;
            var40 = _closure1_slot24;
            var36 = _closure1_slot1;
            var54 = _closure1_slot2;
            var28 = var54[var21];
            var28 = var36.bind(var4)(var28);
            var36 = var28.View;
            var28 = {};
            var47 = {};
            var50 = _closure1_slot0;
            var44 = 53;
            var44 = var54[var44];
            var50 = var50.bind(var4)(var44);
            var44 = var50.int2hex;
            var44 = var44.bind(var50)(var51);
            var47['backgroundColor'] = var44;
            var44 = new Array(3);
            var44[0] = var47;
            var44[1] = var55;
            var44[2] = var45;
            var28['style'] = var44;
            var42 = var42 != var52;
            if(!var42) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            if(var41) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var45 = _closure1_slot23;
            var44 = _closure1_slot1;
            var47 = _closure1_slot2;
            var41 = 38;
            var41 = var47[var41];
            var44 = var44.bind(var4)(var41);
            var41 = {};
            var41['style'] = var55;
            var47 = 'image';
            var41['accessibilityRole'] = var47;
            var41['accessibilityLabel'] = var53;
            var41['source'] = var52;
            var41 = var45.bind(var4)(var44, var41);
            _fun0001_ip = 111; continue _fun0001;
case 109:
            var47 = _closure1_slot24;
            var58 = _closure1_slot0;
            var56 = _closure1_slot2;
            var44 = 48;
            var44 = var56[var44];
            var44 = var58.bind(var4)(var44);
            var45 = var44.PressableOpacity;
            var44 = {};
            var48 = function onPress() {
                var3 = _closure2_slot13;
                var1 = _closure2_slot12;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var44['onPress'] = var48;
            var54 = 'image';
            var44['accessibilityRole'] = var54;
            var48 = var56[var57];
            var48 = var58.bind(var4)(var48);
            var51 = var48.intl;
            var50 = var51.string;
            var48 = var56[var57];
            var48 = var58.bind(var4)(var48);
            var48 = var48.t;
            var48 = var48.3fzj/l;
            var48 = var50.bind(var51)(var48);
            var44['accessibilityLabel'] = var48;
            var51 = _closure1_slot23;
            var50 = _closure1_slot1;
            var48 = 38;
            var48 = var56[var48];
            var50 = var50.bind(var4)(var48);
            var48 = {};
            var48['style'] = var55;
            var48['accessibilityRole'] = var54;
            var48['accessibilityLabel'] = var53;
            var48['source'] = var52;
            var50 = var51.bind(var4)(var50, var48);
            var48 = new Array(2);
            var48[0] = var50;
            var49 = !var49;
            if(!var49) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var52 = _closure1_slot23;
            var56 = _closure1_slot0;
            var53 = _closure1_slot2;
            var50 = 54;
            var50 = var53[var50];
            var50 = var56.bind(var4)(var50);
            var51 = var50.Caption;
            var50 = {};
            var54 = var53[var57];
            var54 = var56.bind(var4)(var54);
            var55 = var54.intl;
            var54 = var55.string;
            var53 = var53[var57];
            var53 = var56.bind(var4)(var53);
            var53 = var53.t;
            var53 = var53.I5gL2H;
            var53 = var54.bind(var55)(var53);
            var50['label'] = var53;
            var54 = var25.gifTag;
            var53 = new Array(2);
            var53[0] = var54;
            var54 = {};
            var54['top'] = var29;
            var53[1] = var54;
            var50['style'] = var53;
            var53 = var25.gifTagText;
            var50['textStyle'] = var53;
            var49 = var52.bind(var4)(var51, var50);
case 112:
            var48[1] = var49;
            var44['children'] = var48;
            var41 = var47.bind(var4)(var45, var44);
case 111:
            var42 = var41;
case 107:
            var41 = new Array(2);
            var41[0] = var42;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var42 = 55;
            var42 = var45[var42];
            var44 = var44.bind(var4)(var42);
            var42 = var44.isIOS;
            var42 = var42.bind(var44)();
            if(!var42) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var42 = var43;
case 114:
            if(!var42) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var45 = _closure1_slot23;
            var44 = _closure1_slot25;
            var43 = {};
            var43['animatedProps'] = var46;
            var46 = _closure1_slot5;
            var46 = var46.absoluteFillObject;
            var43['style'] = var46;
            var42 = var45.bind(var4)(var44, var43);
case 116:
            var41[1] = var42;
            var28['children'] = var41;
            var28 = var40.bind(var4)(var36, var28);
            var27[2] = var28;
            var19['children'] = var27;
            var22 = var23.bind(var4)(var22, var19);
            var19 = new Array(4);
            var19[0] = var22;
            if(!var20) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            var23 = _closure1_slot24;
            var27 = _closure1_slot1;
            var36 = _closure1_slot2;
            var21 = var36[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var28 = 'box-none';
            var21['pointerEvents'] = var28;
            var28 = var25.profileEffectLayer;
            var25 = new Array(3);
            var25[0] = var28;
            var28 = {};
            var28['width'] = var39;
            var28['height'] = var38;
            var25[1] = var28;
            var25[2] = var26;
            var21['style'] = var25;
            var28 = _closure1_slot23;
            var25 = 56;
            var25 = var36[var25];
            var26 = var27.bind(var4)(var25);
            var25 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['skuId'] = var37;
            var26 = var28.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot23;
            var26 = 52;
            var26 = var36[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var26['isLoading'] = var35;
            var26['navigateToPremium'] = var34;
            var26['navigateToSettings'] = var33;
            var26['navigateToShop'] = var32;
            var26['shopButtonRef'] = var31;
            var26['settingsButtonRef'] = var30;
            var26['paddingTop'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var21['children'] = var25;
            var20 = var23.bind(var4)(var22, var21);
case 118:
            var19[1] = var20;
            var23 = _closure1_slot23;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 57;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var65 = var20;
            var64 = var24;
            var24 = copyDataProperties(var65, var64);
            var20 = var23.bind(var4)(var21, var20);
            var19[2] = var20;
            var21 = _closure1_slot23;
            var20 = _closure1_slot0;
            var18 = 58;
            var18 = var22[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.TTIFirstContentfulPaint;
            var18 = {};
            var22 = 'you_screen';
            var18['label'] = var22;
            var18 = var21.bind(var4)(var20, var18);
            var19[3] = var18;
            var18 = 'children';
            var15[var18] = var19;
            var15 = var16.bind(var4)(var17, var15);
            var14[2] = var15;
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
    var _closure1_slot37 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var9 = var8[var2];
    var2 = metroImportAll;
    var9 = var2.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var10 = var2.StyleSheet;
    var _closure1_slot5 = var10;
    var10 = var2.ScrollView;
    var2 = 3;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var11 = var2.SCALE_FACTOR;
    var _closure1_slot12 = var11;
    var11 = var2.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var11;
    var11 = var2.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var11;
    var11 = var2.YOU_AVATAR_SIZE;
    var _closure1_slot15 = var11;
    var11 = var2.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot16 = var11;
    var11 = var2.YOU_SCREEN_ID;
    var _closure1_slot17 = var11;
    var2 = var2.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot18 = var2;
    var2 = 10;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.UserSettingsSections;
    var _closure1_slot19 = var2;
    var2 = 11;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot20 = var2;
    var2 = 12;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.CollectiblesMobileShopScreen;
    var _closure1_slot21 = var2;
    var2 = 13;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot22 = var2;
    var2 = 14;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var11 = var2.jsx;
    var _closure1_slot23 = var11;
    var2 = var2.jsxs;
    var _closure1_slot24 = var2;
    var2 = 15;
    var11 = var8[var2];
    var13 = var6.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 16;
    var11 = var8[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot25 = var11;
    var11 = 17;
    var11 = var8[var11];
    var13 = var7.bind(var1)(var11);
    var12 = var13.createStyles;
    var11 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var3 = 1;
        var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative'};
        var1['container'] = var2;
        var2 = {};
        var2['flex'] = var3;
        var1['scrollView'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'zIndex': 1};
        var1['profileEffectLayer'] = var2;
        var2 = {'minHeight': null, 'position': 'absolute', 'top': 0, 'maxWidth': '100%'};
        var2['minHeight'] = var7;
        var1['banner'] = var2;
        var2 = {'position': 'absolute', 'left': 16, 'right': 'auto', 'bottom': 'auto', 'marginTop': 8};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 18;
        var3 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var3 = 19;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.WHITE;
        var10 = var9.bind(var4)(var8);
        var9 = var10.alpha;
        var8 = 0.9;
        var9 = var9.bind(var10)(var8);
        var8 = var9.css;
        var8 = var8.bind(var9)();
        var2['backgroundColor'] = var8;
        var1['gifTag'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.PRIMARY_800;
        var2['color'] = var8;
        var8 = 14;
        var2['fontSize'] = var8;
        var1['gifTagText'] = var2;
        var2 = {'marginTop': null, 'flex': 1, 'flexGrow': 1};
        var2['marginTop'] = var7;
        var1['content'] = var2;
        var2 = {'position': 'absolute', 'marginTop': null, 'left': null, 'zIndex': 99, 'padding': 7, 'alignItems': 'center', 'justifyContent': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['marginTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['left'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var2['backgroundColor'] = var3;
        var1['backButton'] = var2;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot26 = var11;
    var2 = var8[var2];
    var6 = var6.bind(var1)(var2);
    var2 = var6.createAnimatedComponent;
    var2 = var2.bind(var6)(var10);
    var _closure1_slot27 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var2['code'] = var6;
    var _closure1_slot28 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var2['code'] = var6;
    var _closure1_slot29 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot30 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot31 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot32 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var2['code'] = var6;
    var _closure1_slot33 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var2['code'] = var6;
    var _closure1_slot34 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var2['code'] = var6;
    var _closure1_slot35 = var2;
    var6 = var9.memo;
    var2 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var10 = var1.inBottomSheet;
            var _closure2_slot0 = var10;
            var9 = var1.initialTab;
            var7 = var1.showOrbsBadgeCoachmark;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 27;
            var8 = var1[var3];
            var13 = var4.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var12.bind(var13)(var11, var8);
            var _closure2_slot1 = var17;
            var1 = var1[var3];
            var11 = var4.bind(var5)(var1);
            var8 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var12 = var8.bind(var11)(var4, var1);
            var1 = null;
            var4 = var1 == var17;
            var11 = undefined;
            if(var4) { _fun0013_ip = 120; continue _fun0013 }
case 121:
            var11 = var17.id;
case 120:
            _closure2_slot2 = var11;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var8 = new Array(1);
            var8[0] = var17;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 122:
                    return var1;
                }
            };
            var16 = var13.bind(var14)(var4, var8);
            _closure2_slot3 = var16;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var13 = 36;
            var13 = var8[var13];
            var15 = var4.bind(var5)(var13);
            var14 = var15.useMobileWishlistOwnerExperiment;
            var13 = 'YouScreen';
            var13 = var14.bind(var15)(var13);
            _closure2_slot4 = var13;
            var15 = _closure1_slot4;
            var14 = var15.useLayoutEffect;
            var13 = new Array(3);
            var13[0] = var11;
            var13[1] = var16;
            var13[2] = var12;
            var12 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0015_ip = 124; continue _fun0015 }
case 64:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
case 124:
                    if(!var2) { _fun0015_ip = 125; continue _fun0015 }
case 9:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 59;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12, var13);
            var3 = var8[var3];
            var14 = var4.bind(var5)(var3);
            var13 = var14.useStateFromStores;
            var3 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var3;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0016_ip = 126; continue _fun0016 }
case 5:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0016_ip = 126; continue _fun0016 }
case 127:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 126:
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12, var3);
            var3 = 60;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var12;
            var3['userId'] = var11;
            var3 = var4.bind(var8)(var3);
            var11 = _closure1_slot4;
            var8 = var11.useCallback;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 50;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0017_ip = 128; continue _fun0017 }
case 122:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0017_ip = 128; continue _fun0017 }
case 126:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 128:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var16 = var8.bind(var11)(var4, var3);
            var11 = _closure1_slot4;
            var8 = var11.useCallback;
            var4 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 50;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0018_ip = 129; continue _fun0018 }
case 122:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0018_ip = 129; continue _fun0018 }
case 126:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot19;
                    var2 = var2.PREMIUM;
                    var3['screen'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 129:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var15 = var8.bind(var11)(var4, var3);
            var11 = _closure1_slot4;
            var8 = var11.useCallback;
            var4 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 61;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 62;
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
                var5 = _closure1_slot21;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var11 = var8.bind(var11)(var4, var3);
            var12 = _closure1_slot4;
            var8 = var12.useCallback;
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 50;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0019_ip = 130; continue _fun0019 }
case 122:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0019_ip = 130; continue _fun0019 }
case 126:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot19;
                    var2 = var2.PROFILE_CUSTOMIZATION;
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = arg1;
                    var2['autoFocusElement'] = var6;
                    var3['params'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 130:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var14 = var8.bind(var12)(var4, var3);
            var12 = _closure1_slot4;
            var8 = var12.useCallback;
            var4 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 63;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = 'YouScreen';
                var2['location'] = var6;
                var6 = _closure1_slot1;
                var5 = 62;
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
            var13 = var8.bind(var12)(var4, var3);
            var12 = _closure1_slot4;
            var8 = var12.useCallback;
            var4 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0020_ip = 131; continue _fun0020 }
case 122:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0020_ip = 131; continue _fun0020 }
case 126:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 131:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var12 = var8.bind(var12)(var4, var3);
            var8 = _closure1_slot4;
            var4 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 50;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 == var5)) { _fun0021_ip = 132; continue _fun0021 }
case 133:
                    return var2;
case 132:
                    var4 = var5.addListener;
                    var3 = 'state';
                    var2 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var1 = _closure2_slot0;
                            if(!var1) { _fun0022_ip = 132; continue _fun0022 }
case 40:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 49;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
case 132:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0023_ip = 4; continue _fun0023 }
case 17:
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 4:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            var2 = var1 == var17;
            var1 = null;
            if(var2) { _fun0013_ip = 134; continue _fun0013 }
case 135:
            var4 = _closure1_slot23;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 64;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.YouScreenContextProvider;
            var2 = {};
            var2['showOrbsBadgeCoachmark'] = var7;
            var8 = _closure1_slot23;
            var7 = _closure1_slot37;
            var6 = {};
            var6['user'] = var17;
            var6['navigateToSettings'] = var16;
            var6['navigateToPremium'] = var15;
            var6['navigateToProfileCustomization'] = var14;
            var6['navigateToCustomStatus'] = var13;
            var6['navigateToFriends'] = var12;
            var6['navigateToShop'] = var11;
            var6['inBottomSheet'] = var10;
            var6['initialTab'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 134:
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var _closure1_slot36 = var2;
    var6 = 67;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ConnectedYouScreen(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var6 = var1.inBottomSheet;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0024_ip = 5; continue _fun0024 }
case 136:
            var6 = false;
case 5:
            var5 = var1.initialTab;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var3 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 50;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0025_ip = 128; continue _fun0025 }
case 122:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0025_ip = 128; continue _fun0025 }
case 126:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 128:
                    var1 = false;
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            _closure2_slot0 = var2;
            var8 = _closure1_slot4;
            var7 = var8.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 65;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 66;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useScrollToTop;
            var9 = _closure1_slot4;
            var8 = var9.useRef;
            var2 = {};
            var10 = function scrollToTop() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2['scrollToTop'] = var10;
            var2 = var8.bind(var9)(var2);
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot36;
            var1 = {};
            var1['inBottomSheet'] = var6;
            var1['initialTab'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['UnconnectedYouScreen'] = var4;
    var3['StandaloneConnectedYouScreen'] = var2;
    return var1;
})();