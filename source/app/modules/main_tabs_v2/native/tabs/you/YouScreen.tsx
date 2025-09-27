// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var2 = function UnconnectedYouScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = var4.user;
            var1 = var4.navigateToSettings;
            var _closure2_slot0 = var1;
            var34 = var4.navigateToPremium;
            var2 = var4.navigateToShop;
            var _closure2_slot1 = var2;
            var7 = var4.navigateToProfileCustomization;
            var5 = var4.navigateToCustomStatus;
            var3 = var4.navigateToFriends;
            var23 = var4.style;
            var27 = var4.inNestedNavigator;
            var4 = undefined;
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
            var10 = _closure1_slot4;
            var9 = var10.useRef;
            var8 = global;
            var11 = var8.Date;
            var8 = var11.now;
            var8 = var8.bind(var11)();
            var11 = var9.bind(var10)(var8);
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = 18;
            var8 = var20[var8];
            var8 = var18.bind(var4)(var8);
            var32 = var8.bind(var4)();
            var _closure2_slot2 = var32;
            var8 = _closure1_slot17;
            var28 = var32 * var8;
            var _closure2_slot3 = var28;
            var8 = _closure1_slot27;
            var25 = var8.bind(var4)(var32);
            var8 = 19;
            var8 = var20[var8];
            var9 = var18.bind(var4)(var8);
            var8 = {};
            var14 = _closure1_slot0;
            var10 = 20;
            var12 = var20[var10];
            var12 = var14.bind(var4)(var12);
            var12 = var12.ImpressionTypes;
            var12 = var12.VIEW;
            var8['type'] = var12;
            var10 = var20[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.USER_YOU_SCREEN;
            var8['name'] = var10;
            var8 = var9.bind(var4)(var8);
            var8 = 21;
            var8 = var20[var8];
            var9 = var18.bind(var4)(var8);
            var8 = var6.id;
            var12 = var9.bind(var4)(var8);
            var8 = 22;
            var8 = var20[var8];
            var8 = var18.bind(var4)(var8);
            var13 = var8.bind(var4)();
            var8 = 23;
            var8 = var20[var8];
            var9 = var18.bind(var4)(var8);
            var8 = {};
            var8['user'] = var6;
            var8['displayProfile'] = var12;
            var8 = var9.bind(var4)(var8);
            var16 = var8.theme;
            var15 = var8.primaryColor;
            var10 = var8.secondaryColor;
            var8 = 24;
            var8 = var20[var8];
            var8 = var18.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var9 = 25;
            var9 = var20[var9];
            var17 = var14.bind(var4)(var9);
            var9 = var17.useProfileThemeValues;
            var21 = var9.bind(var17)(var16);
            var9 = 26;
            var9 = var20[var9];
            var17 = var14.bind(var4)(var9);
            var14 = var17.useToken;
            var9 = 17;
            var9 = var20[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.ACTION_SHEET_GRADIENT_BG;
            var38 = var14.bind(var17)(var9, var8);
            var40 = null;
            if(!(var40 != var10)) { _fun0001_ip = 536; continue _fun0001 }
 466:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 27;
            var9 = var20[var9];
            var17 = var18.bind(var4)(var9);
            var14 = var17.int2hex;
            var9 = 28;
            var9 = var20[var9];
            var20 = var18.bind(var4)(var9);
            var18 = var20.calculateOverlayedColor;
            var22 = var40 == var21;
            var9 = undefined;
            if(var22) { _fun0001_ip = 525; continue _fun0001 }
 519:
            var9 = var21.overlay;
 525:
            var9 = var18.bind(var20)(var10, var9);
            var38 = var14.bind(var17)(var9);
 536:
            var14 = _closure1_slot4;
            var9 = var14.useRef;
            var22 = var9.bind(var14)(var40);
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 13;
            var9 = var31[var21];
            var14 = var29.bind(var4)(var9);
            var9 = var14.useSharedValue;
            var17 = 0;
            var37 = var9.bind(var14)(var17);
            _closure2_slot4 = var37;
            var9 = var31[var21];
            var18 = var29.bind(var4)(var9);
            var14 = var18.useAnimatedScrollHandler;
            var9 = function J(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var37;
            var9['__closure'] = var20;
            var20 = 952837799380.0;
            var9['__workletHash'] = var20;
            var20 = _closure1_slot29;
            var9['__initData'] = var20;
            var18 = var14.bind(var18)(var9);
            var24 = _closure1_slot4;
            var20 = var24.useMemo;
            var14 = new Array(1);
            var14[0] = var32;
            var9 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var33 = var20.bind(var24)(var9, var14);
            _closure2_slot5 = var33;
            var9 = var31[var21];
            var20 = var29.bind(var4)(var9);
            var14 = var20.useDerivedValue;
            var9 = function K() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var24 = {};
            var24['scrollPosition'] = var37;
            var9['__closure'] = var24;
            var24 = 588222792165.0;
            var9['__workletHash'] = var24;
            var24 = _closure1_slot30;
            var9['__initData'] = var24;
            var30 = var14.bind(var20)(var9);
            _closure2_slot6 = var30;
            var24 = 29;
            var9 = var31[var24];
            var35 = var29.bind(var4)(var9);
            var26 = var35.useStateFromStores;
            var9 = _closure1_slot6;
            var20 = new Array(1);
            var20[0] = var9;
            var14 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 23; continue _fun0002 }
 19:
                    var1 = _closure1_slot13;
 23:
                    return var1;
                }
            };
            var9 = new Array(0);
            var35 = var26.bind(var35)(var20, var14, var9);
            _closure2_slot7 = var35;
            var9 = var31[var21];
            var20 = var29.bind(var4)(var9);
            var14 = var20.useAnimatedStyle;
            var9 = function W() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var2 = var6[var1];
                    var4 = undefined;
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var8 = _closure2_slot4;
                    var7 = var8.get;
                    var9 = var7.bind(var8)();
                    var8 = _closure2_slot5;
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
                    var4 = _closure2_slot4;
                    var1 = var4.get;
                    var5 = var1.bind(var4)();
                    var1 = _closure2_slot5;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot3;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 182; continue _fun0003 }
 176:
                    var2 = new Array(0);
                    _fun0003_ip = 211; continue _fun0003;
 182:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
 211:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var36 = var31[var21];
            var36 = var29.bind(var4)(var36);
            var36 = var36.interpolate;
            var26['interpolate'] = var36;
            var26['scrollPosition'] = var37;
            var26['minScrollPosition'] = var33;
            var33 = _closure1_slot12;
            var26['SCALE_FACTOR'] = var33;
            var26['translateOnScale'] = var28;
            var26['isNegativeScrollPosition'] = var30;
            var9['__closure'] = var26;
            var26 = 5882939038632.0;
            var9['__workletHash'] = var26;
            var26 = _closure1_slot31;
            var9['__initData'] = var26;
            var43 = var14.bind(var20)(var9);
            var9 = var31[var21];
            var20 = var29.bind(var4)(var9);
            var14 = var20.useAnimatedStyle;
            var9 = function Z() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
 21:
                    var2 = new Array(0);
                    _fun0004_ip = 58; continue _fun0004;
 27:
                    var4 = {};
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
 58:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var26['isNegativeScrollPosition'] = var30;
            var26['scrollPosition'] = var37;
            var9['__closure'] = var26;
            var26 = 17425045144242.0;
            var9['__workletHash'] = var26;
            var26 = _closure1_slot32;
            var9['__initData'] = var26;
            var26 = var14.bind(var20)(var9);
            var9 = var31[var21];
            var20 = var29.bind(var4)(var9);
            var14 = var20.useAnimatedStyle;
            var9 = function X() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 27; continue _fun0005 }
 21:
                    var2 = new Array(0);
                    _fun0005_ip = 73; continue _fun0005;
 27:
                    var4 = {};
                    var6 = _closure2_slot4;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = _closure2_slot7;
                    var3 = 1;
                    var3 = var3 / var6;
                    var3 = var5 * var3;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
 73:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var28['isNegativeScrollPosition'] = var30;
            var28['scrollPosition'] = var37;
            var28['coefficient'] = var35;
            var9['__closure'] = var28;
            var28 = 9336428823274.0;
            var9['__workletHash'] = var28;
            var28 = _closure1_slot33;
            var9['__initData'] = var28;
            var9 = var14.bind(var20)(var9);
            var20 = _closure1_slot1;
            var14 = 30;
            var14 = var31[var14];
            var14 = var20.bind(var4)(var14);
            var20 = var14.bind(var4)();
            var14 = var20.width;
            _closure2_slot8 = var14;
            var36 = var20.height;
            _closure2_slot9 = var36;
            var20 = var31[var21];
            var30 = var29.bind(var4)(var20);
            var28 = var30.useAnimatedProps;
            var20 = function Q() {
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var5 = var7[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var5);
                var5 = var6.clamp;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.interpolate;
                var4 = _closure2_slot4;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot9;
                var3 = -var3;
                var2 = _closure2_slot7;
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
            var33 = {};
            var39 = var31[var21];
            var39 = var29.bind(var4)(var39);
            var39 = var39.clamp;
            var33['clamp'] = var39;
            var39 = var31[var21];
            var39 = var29.bind(var4)(var39);
            var39 = var39.interpolate;
            var33['interpolate'] = var39;
            var33['scrollPosition'] = var37;
            var33['windowHeight'] = var36;
            var33['coefficient'] = var35;
            var20['__closure'] = var33;
            var33 = 2402745247838.0;
            var20['__workletHash'] = var33;
            var33 = _closure1_slot34;
            var20['__initData'] = var33;
            var44 = var28.bind(var30)(var20);
            var30 = _closure1_slot4;
            var28 = var30.useState;
            var20 = var37.get;
            var20 = var20.bind(var37)();
            var20 = var20 < var17;
            var28 = var28.bind(var30)(var20);
            var20 = _closure1_slot3;
            var30 = 2;
            var20 = var20.bind(var4)(var28, var30);
            var41 = var20[var17];
            var36 = 1;
            var39 = var20[var36];
            _closure2_slot10 = var39;
            var20 = var31[var21];
            var35 = var29.bind(var4)(var20);
            var33 = var35.useAnimatedReaction;
            var28 = function $() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var37;
            var28['__closure'] = var20;
            var20 = 1515709080541.0;
            var28['__workletHash'] = var20;
            var20 = _closure1_slot35;
            var28['__initData'] = var20;
            var20 = function q(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 60; continue _fun0006 }
 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot10;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
 60:
                    return var1;
                }
            };
            var37 = {};
            var42 = var31[var21];
            var42 = var29.bind(var4)(var42);
            var42 = var42.runOnJS;
            var37['runOnJS'] = var42;
            var37['setShowBlur'] = var39;
            var20['__closure'] = var37;
            var37 = 11057160578223.0;
            var20['__workletHash'] = var37;
            var37 = _closure1_slot36;
            var20['__initData'] = var37;
            var20 = var33.bind(var35)(var28, var20);
            var33 = _closure1_slot4;
            var28 = var33.useState;
            var20 = false;
            var28 = var28.bind(var33)(var20);
            var20 = _closure1_slot3;
            var28 = var20.bind(var4)(var28, var30);
            var20 = var28[var17];
            _closure2_slot11 = var20;
            var28 = var28[var36];
            _closure2_slot12 = var28;
            var28 = 31;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.GifAutoPlay;
            var28 = var29.getSetting;
            var47 = var28.bind(var29)();
            if(var47) { _fun0001_ip = 1486; continue _fun0001 }
 1483:
            var47 = var20;
 1486:
            var20 = var40 == var12;
            var33 = undefined;
            if(var20) { _fun0001_ip = 1517; continue _fun0001 }
 1495:
            var28 = var12.getBannerURL;
            var20 = {};
            var20['canAnimate'] = var47;
            var20['size'] = var14;
            var33 = var28.bind(var12)(var20);
 1517:
            var20 = var40 != var33;
            var50 = null;
            if(!var20) { _fun0001_ip = 1557; continue _fun0001 }
 1526:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 32;
            var20 = var29[var20];
            var28 = var28.bind(var4)(var20);
            var20 = var28.makeSource;
            var50 = var20.bind(var28)(var33);
 1557:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 32;
            var20 = var29[var20];
            var31 = var28.bind(var4)(var20);
            var20 = var31.isAnimatedImageURL;
            var39 = var20.bind(var31)(var33);
            var55 = 33;
            var20 = var29[var55];
            var20 = var28.bind(var4)(var20);
            var35 = var20.intl;
            var33 = var35.formatToPlainString;
            var20 = var29[var55];
            var20 = var28.bind(var4)(var20);
            var20 = var20.t;
            var31 = var20.gVn4uL;
            var20 = {};
            var37 = var6.username;
            var20['username'] = var37;
            var51 = var33.bind(var35)(var31, var20);
            var20 = 34;
            var20 = var29[var20];
            var29 = var28.bind(var4)(var20);
            var28 = var29.useUserProfileBannerBackgroundColor;
            var20 = {};
            var20['user'] = var6;
            var20['displayProfile'] = var12;
            var49 = var28.bind(var29)(var20);
            var35 = var40 == var12;
            if(var35) { _fun0001_ip = 1699; continue _fun0001 }
 1690:
            var20 = var12.isLoaded;
            var35 = !var20;
 1699:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 35;
            var20 = var29[var20];
            var20 = var28.bind(var4)(var20);
            var28 = var20.bind(var4)();
            var31 = _closure1_slot4;
            var29 = var31.useMemo;
            var20 = new Array(2);
            var20[0] = var32;
            var20[1] = var14;
            var14 = function() {
                var1 = {};
                var3 = _closure2_slot8;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['height'] = var2;
                return var1;
            };
            var53 = var29.bind(var31)(var14, var20);
            if(var28) { _fun0001_ip = 1767; continue _fun0001 }
 1760:
            var29 = var13.top;
            _fun0001_ip = 1771; continue _fun0001;
 1767:
            var29 = _closure1_slot14;
 1771:
            var13 = var40 == var12;
            var37 = undefined;
            if(var13) { _fun0001_ip = 1800; continue _fun0001 }
 1780:
            var13 = var12.profileEffect;
            var14 = var40 == var13;
            var37 = undefined;
            if(var14) { _fun0001_ip = 1800; continue _fun0001 }
 1795:
            var37 = var13.id;
 1800:
            var20 = var40 != var37;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var24];
            var31 = var14.bind(var4)(var13);
            var24 = var31.useStateFromStores;
            var13 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 36;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var42 = var24.bind(var31)(var14, var13);
            _closure2_slot13 = var42;
            var13 = var40 == var42;
            var14 = undefined;
            if(var13) { _fun0001_ip = 1870; continue _fun0001 }
 1864:
            var14 = var42.dismissibleContent;
 1870:
            var24 = _closure1_slot0;
            var31 = _closure1_slot2;
            var48 = 37;
            var13 = var31[var48];
            var13 = var24.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var13 = var13.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var14 = var14 === var13;
            _closure2_slot14 = var14;
            var45 = _closure1_slot4;
            var33 = var45.useMemo;
            var32 = new Array(2);
            var32[0] = var14;
            var32[1] = var42;
            var13 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 40; continue _fun0007 }
 13:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0007_ip = 40; continue _fun0007 }
 20:
                    var1 = _closure2_slot13;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0007_ip = 44; continue _fun0007;
 40:
                    var1 = new Array(0);
 44:
                    return var1;
                }
            };
            var45 = var33.bind(var45)(var13, var32);
            var52 = _closure1_slot4;
            var33 = var52.useMemo;
            var32 = new Array(1);
            var32[0] = var42;
            var13 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot13;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0008_ip = 29; continue _fun0008 }
 20:
                    var1 = _closure2_slot13;
                    var5 = var1.type;
 29:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 38;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0008_ip = 157; continue _fun0008 }
 70:
                    var2 = {};
                    var5 = _closure2_slot13;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot13;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0008_ip = 108; continue _fun0008 }
 105:
                    var4 = var5;
 108:
                    var2['description'] = var4;
                    var4 = {};
                    var5 = _closure2_slot13;
                    var5 = var5.avatar;
                    var4['uri'] = var5;
                    var2['avatarSrc'] = var4;
                    var3 = _closure2_slot13;
                    var4 = var3.decorations;
                    var3 = 0;
                    var3 = var4[var3];
                    var2['decorationAsset'] = var3;
                    var1 = var2;
 157:
                    return var1;
                }
            };
            var57 = var33.bind(var52)(var13, var32);
            _closure2_slot15 = var57;
            var13 = 39;
            var32 = var31[var13];
            var33 = var24.bind(var4)(var32);
            var32 = var33.useSelectedDismissibleContent;
            var33 = var32.bind(var33)(var45);
            var32 = _closure1_slot3;
            var33 = var32.bind(var4)(var33, var30);
            var32 = var33[var17];
            _closure2_slot16 = var32;
            var59 = var33[var36];
            var13 = var31[var13];
            var33 = var24.bind(var4)(var13);
            var31 = var33.useSelectedVersionedDismissibleContent;
            var24 = null;
            if(!var14) { _fun0001_ip = 2124; continue _fun0001 }
 2043:
            var13 = var40 == var42;
            var45 = undefined;
            if(var13) { _fun0001_ip = 2057; continue _fun0001 }
 2052:
            var45 = var42.type;
 2057:
            var52 = _closure1_slot0;
            var54 = _closure1_slot2;
            var13 = 38;
            var13 = var54[var13];
            var13 = var52.bind(var4)(var13);
            var13 = var13.CollectiblesMarketingType;
            var13 = var13.COACHTIP;
            var24 = null;
            if(!(var45 === var13)) { _fun0001_ip = 2124; continue _fun0001 }
 2095:
            var45 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var48];
            var13 = var45.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var24 = var13.COLLECTIBLES_SHOP_ENTRY_MARKETING;
 2124:
            var13 = var40 == var42;
            var45 = undefined;
            if(var13) { _fun0001_ip = 2139; continue _fun0001 }
 2133:
            var45 = var42.version;
 2139:
            var48 = var40 != var45;
            var13 = 0;
            if(!var48) { _fun0001_ip = 2151; continue _fun0001 }
 2148:
            var13 = var45;
 2151:
            var24 = var31.bind(var33)(var24, var13);
            var13 = _closure1_slot3;
            var13 = var13.bind(var4)(var24, var30);
            var17 = var13[var17];
            _closure2_slot17 = var17;
            var13 = var13[var36];
            var31 = _closure1_slot4;
            var30 = var31.useMemo;
            var24 = new Array(4);
            var24[0] = var57;
            var45 = var40 == var42;
            var33 = undefined;
            if(var45) { _fun0001_ip = 2210; continue _fun0001 }
 2205:
            var33 = var42.type;
 2210:
            var24[1] = var33;
            var24[2] = var32;
            var24[3] = var17;
            var17 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot16;
                    var5 = null;
                    var1 = var5 != var1;
                    if(var1) { _fun0009_ip = 24; continue _fun0009 }
 16:
                    var2 = _closure2_slot17;
                    var1 = var5 != var2;
 24:
                    if(!var1) { _fun0009_ip = 104; continue _fun0009 }
 27:
                    var2 = _closure2_slot15;
                    var2 = var5 != var2;
                    if(!var2) { _fun0009_ip = 101; continue _fun0009 }
 38:
                    var4 = _closure2_slot13;
                    var5 = var5 == var4;
                    var6 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0009_ip = 62; continue _fun0009 }
 53:
                    var3 = _closure2_slot13;
                    var4 = var3.type;
 62:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 38;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesMarketingType;
                    var3 = var3.COACHTIP;
                    var2 = var4 === var3;
 101:
                    var1 = var2;
 104:
                    return var1;
                }
            };
            var58 = var30.bind(var31)(var17, var24);
            var24 = _closure1_slot4;
            var17 = var24.useRef;
            var31 = var17.bind(var24)(var40);
            var24 = _closure1_slot4;
            var17 = var24.useRef;
            var30 = var17.bind(var24)(var40);
            if(!var14) { _fun0001_ip = 2269; continue _fun0001 }
 2266:
            var59 = var13;
 2269:
            _closure2_slot18 = var59;
            var24 = _closure1_slot4;
            var17 = var24.useCallback;
            var14 = new Array(2);
            var14[0] = var59;
            var14[1] = var2;
            var13 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot18;
                var2 = _closure1_slot23;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var17.bind(var24)(var13, var14);
            var24 = {};
            var24['user'] = var6;
            var24['userTheme'] = var8;
            var24['scrollViewRef'] = var22;
            var13 = var25.content;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var9;
            var24['style'] = var8;
            var24['navigateToProfileCustomization'] = var7;
            var24['navigateToCustomStatus'] = var5;
            var24['navigateToFriends'] = var3;
            var24['navigateToPremium'] = var34;
            var24['navigateToShop'] = var2;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 40;
            var2 = var14[var8];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var7 = 'YOU_SCREEN';
            var2['layout'] = var7;
            var6 = var6.id;
            var2['userId'] = var6;
            var13 = var3.bind(var5)(var2);
            var45 = var40 != var57;
            var56 = 41;
            var2 = var14[var56];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useYouSettingsCoachmark;
            var2 = {};
            var2['disabled'] = var45;
            var54 = var3.bind(var5)(var2);
            _closure2_slot19 = var54;
            var42 = var40 != var54;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var54;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot19;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0010_ip = 30; continue _fun0010 }
 16:
                    var3 = _closure2_slot19;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
 30:
                    if(var2) { _fun0010_ip = 47; continue _fun0010 }
 33:
                    var3 = _closure2_slot19;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
 47:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var33 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot24;
            var48 = 42;
            var1 = var14[var48];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot24;
            var5 = 43;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var16;
            var5['primaryColor'] = var15;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot24;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var40 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 2608; continue _fun0001 }
 2602:
            var11 = var12.fetchStartedAt;
 2608:
            var8['fetchStartedAt'] = var11;
            var13 = var40 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 2628; continue _fun0001 }
 2622:
            var11 = var12.fetchEndedAt;
 2628:
            var8['fetchEndedAt'] = var11;
            var13 = var40 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 2648; continue _fun0001 }
 2642:
            var11 = var12.isLoaded;
 2648:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot25;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 44;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var14 = var25.container;
            var11['style'] = var14;
            var14 = _closure1_slot19;
            var11['nativeID'] = var14;
            var15 = var45;
            if(var45) { _fun0001_ip = 2706; continue _fun0001 }
 2703:
            var15 = var42;
 2706:
            if(!var15) { _fun0001_ip = 2912; continue _fun0001 }
 2712:
            var17 = _closure1_slot25;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var48];
            var14 = var16.bind(var4)(var14);
            var16 = var14.LayerScope;
            var14 = {};
            var14['zIndex'] = var36;
            if(!var45) { _fun0001_ip = 2841; continue _fun0001 }
 2749:
            var52 = _closure1_slot24;
            var48 = _closure1_slot1;
            var60 = _closure1_slot2;
            var36 = 45;
            var36 = var60[var36];
            var48 = var48.bind(var4)(var36);
            var36 = {};
            var36['buttonRef'] = var31;
            var36['markAsDismissed'] = var59;
            var36['visible'] = var58;
            var58 = var57.title;
            var36['title'] = var58;
            var58 = var57.description;
            var36['description'] = var58;
            var58 = var57.avatarSrc;
            var36['avatarSrc'] = var58;
            var57 = var57.decorationAsset;
            var36['decorationAsset'] = var57;
            var36['navigateToShop'] = var32;
            var45 = var52.bind(var4)(var48, var36);
 2841:
            var36 = new Array(2);
            var36[0] = var45;
            if(!var42) { _fun0001_ip = 2898; continue _fun0001 }
 2852:
            var52 = _closure1_slot24;
            var48 = _closure1_slot1;
            var45 = _closure1_slot2;
            var45 = var45[var56];
            var48 = var48.bind(var4)(var45);
            var45 = {};
            var45['buttonRef'] = var30;
            var62 = var54.props;
            var63 = var45;
            var54 = copyDataProperties(var63, var62);
            var42 = var52.bind(var4)(var48, var45);
 2898:
            var36[1] = var42;
            var14['children'] = var36;
            var15 = var17.bind(var4)(var16, var14);
 2912:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot25;
            var16 = _closure1_slot28;
            var15 = {};
            var15['ref'] = var22;
            var22 = _closure1_slot20;
            var15['scrollEventThrottle'] = var22;
            var36 = var25.scrollView;
            var22 = new Array(3);
            var22[0] = var36;
            var36 = {};
            var36['backgroundColor'] = var38;
            var22[1] = var36;
            var22[2] = var23;
            var15['style'] = var22;
            var15['onScroll'] = var18;
            var23 = _closure1_slot25;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var38 = var25.banner;
            var36 = new Array(2);
            var36[0] = var38;
            var36[1] = var26;
            var18['style'] = var36;
            if(var28) { _fun0001_ip = 3041; continue _fun0001 }
 3033:
            var28 = null;
            if(!var27) { _fun0001_ip = 3200; continue _fun0001 }
 3041:
            var38 = _closure1_slot24;
            var45 = _closure1_slot0;
            var52 = _closure1_slot2;
            var27 = 46;
            var27 = var52[var27];
            var27 = var45.bind(var4)(var27);
            var36 = var27.PressableOpacity;
            var27 = {};
            var48 = var25.backButton;
            var42 = new Array(2);
            var42[0] = var48;
            var48 = {};
            var48['top'] = var29;
            var42[1] = var48;
            var27['style'] = var42;
            var42 = var52[var55];
            var42 = var45.bind(var4)(var42);
            var54 = var42.intl;
            var48 = var54.string;
            var42 = var52[var55];
            var42 = var45.bind(var4)(var42);
            var42 = var42.t;
            var42 = var42.13/7kZ;
            var42 = var48.bind(var54)(var42);
            var27['accessibilityLabel'] = var42;
            var42 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 47;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 51; continue _fun0011 }
 41:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
 51:
                    return var1;
                }
            };
            var27['onPress'] = var42;
            var48 = _closure1_slot24;
            var42 = 48;
            var42 = var52[var42];
            var42 = var45.bind(var4)(var42);
            var45 = var42.BackIconWithBadgeOnSide;
            var42 = {};
            var42 = var48.bind(var4)(var45, var42);
            var27['children'] = var42;
            var28 = var38.bind(var4)(var36, var27);
 3200:
            var27 = new Array(3);
            var27[0] = var28;
            var28 = !var20;
            if(var20) { _fun0001_ip = 3281; continue _fun0001 }
 3214:
            var42 = _closure1_slot24;
            var38 = _closure1_slot1;
            var45 = _closure1_slot2;
            var36 = 49;
            var36 = var45[var36];
            var38 = var38.bind(var4)(var36);
            var36 = {};
            var36['isLoading'] = var35;
            var36['navigateToPremium'] = var34;
            var36['navigateToSettings'] = var33;
            var36['navigateToShop'] = var32;
            var36['shopButtonRef'] = var31;
            var36['settingsButtonRef'] = var30;
            var36['paddingTop'] = var29;
            var28 = var42.bind(var4)(var38, var36);
 3281:
            var27[1] = var28;
            var38 = _closure1_slot25;
            var36 = _closure1_slot1;
            var52 = _closure1_slot2;
            var28 = var52[var21];
            var28 = var36.bind(var4)(var28);
            var36 = var28.View;
            var28 = {};
            var45 = {};
            var48 = _closure1_slot0;
            var42 = 27;
            var42 = var52[var42];
            var48 = var48.bind(var4)(var42);
            var42 = var48.int2hex;
            var42 = var42.bind(var48)(var49);
            var45['backgroundColor'] = var42;
            var42 = new Array(3);
            var42[0] = var45;
            var42[1] = var53;
            var42[2] = var43;
            var28['style'] = var42;
            var40 = var40 != var50;
            if(!var40) { _fun0001_ip = 3738; continue _fun0001 }
 3376:
            if(var39) { _fun0001_ip = 3436; continue _fun0001 }
 3379:
            var43 = _closure1_slot24;
            var42 = _closure1_slot1;
            var45 = _closure1_slot2;
            var39 = 50;
            var39 = var45[var39];
            var42 = var42.bind(var4)(var39);
            var39 = {};
            var39['style'] = var53;
            var45 = 'image';
            var39['accessibilityRole'] = var45;
            var39['accessibilityLabel'] = var51;
            var39['source'] = var50;
            var39 = var43.bind(var4)(var42, var39);
            _fun0001_ip = 3735; continue _fun0001;
 3436:
            var45 = _closure1_slot25;
            var56 = _closure1_slot0;
            var54 = _closure1_slot2;
            var42 = 46;
            var42 = var54[var42];
            var42 = var56.bind(var4)(var42);
            var43 = var42.PressableOpacity;
            var42 = {};
            var46 = function onPress() {
                var3 = _closure2_slot12;
                var1 = _closure2_slot11;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var42['onPress'] = var46;
            var52 = 'image';
            var42['accessibilityRole'] = var52;
            var46 = var54[var55];
            var46 = var56.bind(var4)(var46);
            var49 = var46.intl;
            var48 = var49.string;
            var46 = var54[var55];
            var46 = var56.bind(var4)(var46);
            var46 = var46.t;
            var46 = var46.3fzj/v;
            var46 = var48.bind(var49)(var46);
            var42['accessibilityLabel'] = var46;
            var49 = _closure1_slot24;
            var48 = _closure1_slot1;
            var46 = 50;
            var46 = var54[var46];
            var48 = var48.bind(var4)(var46);
            var46 = {};
            var46['style'] = var53;
            var46['accessibilityRole'] = var52;
            var46['accessibilityLabel'] = var51;
            var46['source'] = var50;
            var48 = var49.bind(var4)(var48, var46);
            var46 = new Array(2);
            var46[0] = var48;
            var47 = !var47;
            if(!var47) { _fun0001_ip = 3721; continue _fun0001 }
 3596:
            var50 = _closure1_slot24;
            var54 = _closure1_slot0;
            var51 = _closure1_slot2;
            var48 = 51;
            var48 = var51[var48];
            var48 = var54.bind(var4)(var48);
            var49 = var48.Caption;
            var48 = {};
            var52 = var51[var55];
            var52 = var54.bind(var4)(var52);
            var53 = var52.intl;
            var52 = var53.string;
            var51 = var51[var55];
            var51 = var54.bind(var4)(var51);
            var51 = var51.t;
            var51 = var51.I5gL2N;
            var51 = var52.bind(var53)(var51);
            var48['label'] = var51;
            var52 = var25.gifTag;
            var51 = new Array(2);
            var51[0] = var52;
            var52 = {};
            var52['top'] = var29;
            var51[1] = var52;
            var48['style'] = var51;
            var51 = var25.gifTagText;
            var48['textStyle'] = var51;
            var47 = var50.bind(var4)(var49, var48);
 3721:
            var46[1] = var47;
            var42['children'] = var46;
            var39 = var45.bind(var4)(var43, var42);
 3735:
            var40 = var39;
 3738:
            var39 = new Array(2);
            var39[0] = var40;
            var42 = _closure1_slot0;
            var43 = _closure1_slot2;
            var40 = 52;
            var40 = var43[var40];
            var42 = var42.bind(var4)(var40);
            var40 = var42.isIOS;
            var40 = var40.bind(var42)();
            if(!var40) { _fun0001_ip = 3782; continue _fun0001 }
 3779:
            var40 = var41;
 3782:
            if(!var40) { _fun0001_ip = 3820; continue _fun0001 }
 3785:
            var43 = _closure1_slot24;
            var42 = _closure1_slot26;
            var41 = {};
            var41['animatedProps'] = var44;
            var44 = _closure1_slot5;
            var44 = var44.absoluteFillObject;
            var41['style'] = var44;
            var40 = var43.bind(var4)(var42, var41);
 3820:
            var39[1] = var40;
            var28['children'] = var39;
            var28 = var38.bind(var4)(var36, var28);
            var27[2] = var28;
            var18['children'] = var27;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 4035; continue _fun0001 }
 3862:
            var23 = _closure1_slot25;
            var27 = _closure1_slot1;
            var36 = _closure1_slot2;
            var21 = var36[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var28 = var25.profileEffectLayer;
            var25 = new Array(2);
            var25[0] = var28;
            var25[1] = var26;
            var21['style'] = var25;
            var28 = _closure1_slot24;
            var25 = 53;
            var25 = var36[var25];
            var26 = var27.bind(var4)(var25);
            var25 = {'profileEffectId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['profileEffectId'] = var37;
            var26 = var28.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot24;
            var26 = 49;
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
 4035:
            var18[1] = var20;
            var23 = _closure1_slot24;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 54;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var63 = var20;
            var62 = var24;
            var24 = copyDataProperties(var63, var62);
            var20 = var23.bind(var4)(var21, var20);
            var18[2] = var20;
            var21 = _closure1_slot24;
            var20 = _closure1_slot0;
            var19 = 55;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TTIFirstContentfulPaint;
            var19 = {};
            var22 = 'you_screen';
            var19['label'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[3] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
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
    var _closure1_slot37 = var2;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Platform;
    var10 = var5.StyleSheet;
    var _closure1_slot5 = var10;
    var10 = var5.ScrollView;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.setIsSettingSearchActive;
    var _closure1_slot9 = var11;
    var5 = var5.setSettingSearchQuery;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.SCALE_FACTOR;
    var _closure1_slot12 = var11;
    var11 = var5.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var11;
    var11 = var5.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var11;
    var11 = var5.YOU_AVATAR_PADDING;
    var _closure1_slot15 = var11;
    var11 = var5.YOU_AVATAR_SIZE;
    var _closure1_slot16 = var11;
    var11 = var5.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot17 = var11;
    var11 = var5.YOU_CARD_BORDER_RADIUS;
    var _closure1_slot18 = var11;
    var11 = var5.YOU_SCREEN_ID;
    var _closure1_slot19 = var11;
    var5 = var5.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot20 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserSettingsSections;
    var _closure1_slot21 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot22 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot23 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot24 = var11;
    var5 = var5.jsxs;
    var _closure1_slot25 = var5;
    var5 = 13;
    var11 = var7[var5];
    var13 = var9.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 14;
    var11 = var7[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot26 = var11;
    var11 = 15;
    var11 = var7[var11];
    var13 = var6.bind(var1)(var11);
    var12 = var13.createStyles;
    var11 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var5 = 1;
        var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative'};
        var1['container'] = var2;
        var2 = {};
        var2['flex'] = var5;
        var1['scrollView'] = var2;
        var2 = {};
        var2['flexGrow'] = var5;
        var1['scrollViewContent'] = var2;
        var3 = 16;
        var4 = 20;
        var2 = {'flexGrow': 1, 'paddingHorizontal': 16, 'marginBottom': 20};
        var1['profile'] = var2;
        var2 = {};
        var2['zIndex'] = var5;
        var1['profileEffectLayer'] = var2;
        var2 = {};
        var2['gap'] = var4;
        var1['cards'] = var2;
        var2 = {'minHeight': 64, 'alignItems': 'flex-end', 'justifyContent': 'center'};
        var1['badgesCardContainer'] = var2;
        var2 = {'paddingVertical': 5, 'paddingHorizontal': 8, 'borderRadius': null, 'overflow': 'hidden'};
        var5 = _closure1_slot18;
        var2['borderRadius'] = var5;
        var1['badgesContent'] = var2;
        var2 = {'position': 'absolute', 'top': null, 'left': 16, 'zIndex': 10};
        var8 = _closure1_slot16;
        var5 = _closure1_slot15;
        var6 = 2;
        var5 = var6 * var5;
        var5 = var8 + var5;
        var5 = -var5;
        var6 = var5 / var6;
        var5 = 6;
        var5 = var6 + var5;
        var2['top'] = var5;
        var1['avatar'] = var2;
        var2 = {};
        var2['marginBottom'] = var3;
        var1['marginBottom16'] = var2;
        var2 = {};
        var5 = 24;
        var2['marginBottom'] = var5;
        var1['marginBottom24'] = var2;
        var2 = {};
        var6 = 32;
        var2['marginBottom'] = var6;
        var1['marginBottom32'] = var2;
        var2 = {};
        var2['marginTop'] = var5;
        var1['marginTop24'] = var2;
        var2 = {'minHeight': null, 'position': 'absolute', 'top': 0, 'maxWidth': '100%'};
        var2['minHeight'] = var7;
        var1['banner'] = var2;
        var2 = {'position': 'absolute', 'left': 16, 'right': 'auto', 'bottom': 'auto', 'marginTop': 8};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var3 = 17;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.WHITE_500;
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
        var3 = var3.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
        var2['backgroundColor'] = var3;
        var1['backButton'] = var2;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot27 = var11;
    var5 = var7[var5];
    var9 = var9.bind(var1)(var5);
    var5 = var9.createAnimatedComponent;
    var5 = var5.bind(var9)(var10);
    var _closure1_slot28 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var5['code'] = var9;
    var _closure1_slot29 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var5['code'] = var9;
    var _closure1_slot30 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var5['code'] = var9;
    var _closure1_slot31 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var5['code'] = var9;
    var _closure1_slot32 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var5['code'] = var9;
    var _closure1_slot33 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var5['code'] = var9;
    var _closure1_slot34 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var5['code'] = var9;
    var _closure1_slot35 = var5;
    var5 = {};
    var9 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var5['code'] = var9;
    var _closure1_slot36 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var6 = var1.inNestedNavigator;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 29;
            var7 = var4[var1];
            var10 = var3.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var10)(var8, var7);
            var _closure2_slot0 = var13;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.locale;
                return var1;
            };
            var3 = var4.bind(var7)(var3, var1);
            var1 = null;
            var4 = var1 == var13;
            var10 = undefined;
            if(var4) { _fun0012_ip = 137; continue _fun0012 }
 132:
            var10 = var13.id;
 137:
            _closure2_slot1 = var10;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var13;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 41; continue _fun0013 }
 18:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot16;
                    var1 = var3.bind(var4)(var5, var2);
 41:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var4, var7);
            _closure2_slot2 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useLayoutEffect;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var3;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0014_ip = 24; continue _fun0014 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0014_ip = 79; continue _fun0014 }
 27:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 56;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 47;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0015_ip = 95; continue _fun0015 }
 41:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0015_ip = 95; continue _fun0015 }
 54:
                    var5 = _closure1_slot10;
                    var3 = '';
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot9;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
 95:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var12 = var7.bind(var8)(var4, var3);
            _closure2_slot3 = var12;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 47;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0016_ip = 89; continue _fun0016 }
 41:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0016_ip = 89; continue _fun0016 }
 54:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot21;
                    var2 = var2.PREMIUM;
                    var3['screen'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
 89:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var11 = var7.bind(var8)(var4, var3);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 57;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 58;
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
                var5 = _closure1_slot22;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var7 = var7.bind(var8)(var4, var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var4 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 47;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0017_ip = 104; continue _fun0017 }
 41:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0017_ip = 104; continue _fun0017 }
 54:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot21;
                    var2 = var2.PROFILE_CUSTOMIZATION;
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = arg1;
                    var2['autoFocusElement'] = var6;
                    var3['params'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
 104:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var10 = var8.bind(var9)(var4, var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var4 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 59;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = 'YouScreen';
                var2['location'] = var6;
                var6 = _closure1_slot1;
                var5 = 58;
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
            var9 = var8.bind(var9)(var4, var3);
            var14 = _closure1_slot4;
            var8 = var14.useCallback;
            var4 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 47;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0018_ip = 71; continue _fun0018 }
 41:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0018_ip = 71; continue _fun0018 }
 54:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
 71:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var8.bind(var14)(var4, var3);
            var15 = _closure1_slot4;
            var14 = var15.useLayoutEffect;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 60;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var14.bind(var15)(var4, var3);
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 61;
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
            if(var3) { _fun0012_ip = 524; continue _fun0012 }
 469:
            var4 = _closure1_slot24;
            var3 = _closure1_slot37;
            var2 = {};
            var2['user'] = var13;
            var2['navigateToSettings'] = var12;
            var2['navigateToPremium'] = var11;
            var2['navigateToProfileCustomization'] = var10;
            var2['navigateToCustomStatus'] = var9;
            var2['navigateToFriends'] = var8;
            var2['navigateToShop'] = var7;
            var2['inNestedNavigator'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 524:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 62;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['UnconnectedYouScreen'] = var2;
    return var1;
})();