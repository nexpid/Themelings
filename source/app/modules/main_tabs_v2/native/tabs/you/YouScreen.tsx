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
            var2 = arg1;
            var6 = var2.user;
            var1 = var2.navigateToSettings;
            var _closure2_slot0 = var1;
            var34 = var2.navigateToPremium;
            var3 = var2.navigateToShop;
            var _closure2_slot1 = var3;
            var8 = var2.navigateToProfileCustomization;
            var7 = var2.navigateToCustomStatus;
            var5 = var2.navigateToFriends;
            var23 = var2.style;
            var27 = var2.inBottomSheet;
            var _closure2_slot2 = var27;
            var2 = var2.initialTab;
            var4 = undefined;
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
            var11 = _closure1_slot4;
            var10 = var11.useRef;
            var9 = global;
            var12 = var9.Date;
            var9 = var12.now;
            var9 = var9.bind(var12)();
            var11 = var10.bind(var11)(var9);
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var9 = 19;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var17 = var9.bind(var4)();
            var _closure2_slot3 = var17;
            var9 = _closure1_slot16;
            var32 = var17 * var9;
            var _closure2_slot4 = var32;
            var9 = _closure1_slot25;
            var25 = var9.bind(var4)(var17);
            var9 = 20;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var18 = _closure1_slot0;
            var12 = 21;
            var13 = var22[var12];
            var13 = var18.bind(var4)(var13);
            var13 = var13.ImpressionTypes;
            var13 = var13.VIEW;
            var9['type'] = var13;
            var12 = var22[var12];
            var12 = var18.bind(var4)(var12);
            var12 = var12.ImpressionNames;
            var12 = var12.USER_YOU_SCREEN;
            var9['name'] = var12;
            var9 = var10.bind(var4)(var9);
            var9 = 22;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = var6.id;
            var12 = var10.bind(var4)(var9);
            var9 = 23;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var14 = var9.bind(var4)();
            var9 = 24;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var9['user'] = var6;
            var9['displayProfile'] = var12;
            var9 = var10.bind(var4)(var9);
            var16 = var9.theme;
            var15 = var9.primaryColor;
            var10 = var9.secondaryColor;
            var9 = 25;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var13 = 26;
            var13 = var22[var13];
            var20 = var18.bind(var4)(var13);
            var13 = var20.useProfileThemeValues;
            var24 = var13.bind(var20)(var16);
            var13 = 27;
            var13 = var22[var13];
            var20 = var18.bind(var4)(var13);
            var18 = var20.useToken;
            var13 = 18;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
            var40 = var18.bind(var20)(var13, var9);
            var42 = null;
            if(!(var42 != var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 28;
            var13 = var22[var13];
            var20 = var21.bind(var4)(var13);
            var18 = var20.int2hex;
            var13 = 29;
            var13 = var22[var13];
            var22 = var21.bind(var4)(var13);
            var21 = var22.calculateOverlayedColor;
            var26 = var42 == var24;
            var13 = undefined;
            if(var26) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var24.overlay;
case 4:
            var13 = var21.bind(var22)(var10, var13);
            var40 = var18.bind(var20)(var13);
case 2:
            var18 = _closure1_slot4;
            var13 = var18.useRef;
            var22 = var13.bind(var18)(var42);
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 14;
            var13 = var31[var21];
            var18 = var29.bind(var4)(var13);
            var13 = var18.useSharedValue;
            var30 = 0;
            var37 = var13.bind(var18)(var30);
            _closure2_slot5 = var37;
            var13 = var31[var21];
            var20 = var29.bind(var4)(var13);
            var18 = var20.useAnimatedScrollHandler;
            var13 = function J(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var24 = {};
            var24['scrollPosition'] = var37;
            var13['__closure'] = var24;
            var24 = 952837799380.0;
            var13['__workletHash'] = var24;
            var24 = _closure1_slot27;
            var13['__initData'] = var24;
            var18 = var18.bind(var20)(var13);
            var26 = _closure1_slot4;
            var24 = var26.useMemo;
            var20 = new Array(1);
            var20[0] = var17;
            var13 = function() {
                var2 = _closure2_slot3;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var36 = var24.bind(var26)(var13, var20);
            _closure2_slot6 = var36;
            var13 = var31[var21];
            var24 = var29.bind(var4)(var13);
            var20 = var24.useDerivedValue;
            var13 = function K() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var26 = {};
            var26['scrollPosition'] = var37;
            var13['__closure'] = var26;
            var26 = 588222792165.0;
            var13['__workletHash'] = var26;
            var26 = _closure1_slot28;
            var13['__initData'] = var26;
            var33 = var20.bind(var24)(var13);
            _closure2_slot7 = var33;
            var24 = 30;
            var13 = var31[var24];
            var35 = var29.bind(var4)(var13);
            var28 = var35.useStateFromStores;
            var13 = _closure1_slot6;
            var26 = new Array(1);
            var26[0] = var13;
            var20 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure1_slot13;
case 6:
                    return var1;
                }
            };
            var13 = new Array(0);
            var35 = var28.bind(var35)(var26, var20, var13);
            _closure2_slot8 = var35;
            var13 = var31[var21];
            var26 = var29.bind(var4)(var13);
            var20 = var26.useAnimatedStyle;
            var13 = function X() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 14;
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
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = new Array(0);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
case 10:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var38 = var31[var21];
            var38 = var29.bind(var4)(var38);
            var38 = var38.interpolate;
            var28['interpolate'] = var38;
            var28['scrollPosition'] = var37;
            var28['minScrollPosition'] = var36;
            var36 = _closure1_slot12;
            var28['SCALE_FACTOR'] = var36;
            var28['translateOnScale'] = var32;
            var28['isNegativeScrollPosition'] = var33;
            var13['__closure'] = var28;
            var28 = 5882939038632.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot29;
            var13['__initData'] = var28;
            var45 = var20.bind(var26)(var13);
            var13 = var31[var21];
            var26 = var29.bind(var4)(var13);
            var20 = var26.useAnimatedStyle;
            var13 = function q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = new Array(0);
                    _fun0004_ip = 13; continue _fun0004;
case 11:
                    var4 = {};
                    var5 = _closure2_slot5;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 13:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var28['isNegativeScrollPosition'] = var33;
            var28['scrollPosition'] = var37;
            var13['__closure'] = var28;
            var28 = 17425045144242.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot30;
            var13['__initData'] = var28;
            var26 = var20.bind(var26)(var13);
            var13 = var31[var21];
            var28 = var29.bind(var4)(var13);
            var20 = var28.useAnimatedStyle;
            var13 = function Z() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var2 = new Array(0);
                    _fun0005_ip = 14; continue _fun0005;
case 11:
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
case 14:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['isNegativeScrollPosition'] = var33;
            var32['scrollPosition'] = var37;
            var32['coefficient'] = var35;
            var13['__closure'] = var32;
            var32 = 9336428823274.0;
            var13['__workletHash'] = var32;
            var32 = _closure1_slot31;
            var13['__initData'] = var32;
            var13 = var20.bind(var28)(var13);
            var28 = _closure1_slot1;
            var20 = 31;
            var20 = var31[var20];
            var20 = var28.bind(var4)(var20);
            var20 = var20.bind(var4)();
            var39 = var20.width;
            _closure2_slot9 = var39;
            var38 = var20.height;
            _closure2_slot10 = var38;
            var20 = var31[var21];
            var32 = var29.bind(var4)(var20);
            var28 = var32.useAnimatedProps;
            var20 = function Q() {
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 14;
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
            var33 = {};
            var36 = var31[var21];
            var36 = var29.bind(var4)(var36);
            var36 = var36.clamp;
            var33['clamp'] = var36;
            var36 = var31[var21];
            var36 = var29.bind(var4)(var36);
            var36 = var36.interpolate;
            var33['interpolate'] = var36;
            var33['scrollPosition'] = var37;
            var33['windowHeight'] = var38;
            var33['coefficient'] = var35;
            var20['__closure'] = var33;
            var33 = 2402745247838.0;
            var20['__workletHash'] = var33;
            var33 = _closure1_slot32;
            var20['__initData'] = var33;
            var46 = var28.bind(var32)(var20);
            var32 = _closure1_slot4;
            var28 = var32.useState;
            var20 = var37.get;
            var20 = var20.bind(var37)();
            var20 = var20 < var30;
            var28 = var28.bind(var32)(var20);
            var20 = _closure1_slot3;
            var33 = 2;
            var20 = var20.bind(var4)(var28, var33);
            var43 = var20[var30];
            var36 = 1;
            var41 = var20[var36];
            _closure2_slot11 = var41;
            var20 = var31[var21];
            var35 = var29.bind(var4)(var20);
            var32 = var35.useAnimatedReaction;
            var28 = function ee() {
                var2 = _closure2_slot5;
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
            var20 = _closure1_slot33;
            var28['__initData'] = var20;
            var20 = function $(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot11;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 15:
                    return var1;
                }
            };
            var37 = {};
            var44 = var31[var21];
            var44 = var29.bind(var4)(var44);
            var44 = var44.runOnJS;
            var37['runOnJS'] = var44;
            var37['setShowBlur'] = var41;
            var20['__closure'] = var37;
            var37 = 11057160578223.0;
            var20['__workletHash'] = var37;
            var37 = _closure1_slot34;
            var20['__initData'] = var37;
            var20 = var32.bind(var35)(var28, var20);
            var32 = _closure1_slot4;
            var28 = var32.useState;
            var20 = false;
            var28 = var28.bind(var32)(var20);
            var20 = _closure1_slot3;
            var28 = var20.bind(var4)(var28, var33);
            var20 = var28[var30];
            _closure2_slot12 = var20;
            var28 = var28[var36];
            _closure2_slot13 = var28;
            var28 = 32;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.GifAutoPlay;
            var28 = var29.getSetting;
            var49 = var28.bind(var29)();
            if(var49) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var49 = var20;
case 17:
            var20 = var42 == var12;
            var32 = undefined;
            if(var20) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var28 = var12.getBannerURL;
            var20 = {};
            var20['canAnimate'] = var49;
            var20['size'] = var39;
            var32 = var28.bind(var12)(var20);
case 19:
            var20 = var42 != var32;
            var52 = null;
            if(!var20) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 33;
            var20 = var29[var20];
            var28 = var28.bind(var4)(var20);
            var20 = var28.makeSource;
            var52 = var20.bind(var28)(var32);
case 21:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 33;
            var20 = var29[var20];
            var31 = var28.bind(var4)(var20);
            var20 = var31.isAnimatedImageURL;
            var41 = var20.bind(var31)(var32);
            var57 = 34;
            var20 = var29[var57];
            var20 = var28.bind(var4)(var20);
            var35 = var20.intl;
            var32 = var35.formatToPlainString;
            var20 = var29[var57];
            var20 = var28.bind(var4)(var20);
            var20 = var20.t;
            var31 = var20.gVn4uJ;
            var20 = {};
            var37 = var6.username;
            var20['username'] = var37;
            var53 = var32.bind(var35)(var31, var20);
            var20 = 35;
            var20 = var29[var20];
            var29 = var28.bind(var4)(var20);
            var28 = var29.useUserProfileBannerBackgroundColor;
            var20 = {};
            var20['user'] = var6;
            var20['displayProfile'] = var12;
            var51 = var28.bind(var29)(var20);
            var35 = var42 == var12;
            if(var35) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var20 = var12.isLoaded;
            var35 = !var20;
case 23:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 36;
            var20 = var29[var20];
            var20 = var28.bind(var4)(var20);
            var28 = var20.bind(var4)();
            var31 = _closure1_slot4;
            var29 = var31.useMemo;
            var20 = new Array(2);
            var20[0] = var17;
            var20[1] = var39;
            var17 = function() {
                var1 = {};
                var3 = _closure2_slot9;
                var1['width'] = var3;
                var2 = _closure2_slot3;
                var1['height'] = var2;
                return var1;
            };
            var55 = var29.bind(var31)(var17, var20);
            if(var28) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(var27) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var29 = var14.top;
            _fun0001_ip = 28; continue _fun0001;
case 25:
            var29 = _closure1_slot14;
case 28:
            var14 = var42 == var12;
            var37 = undefined;
            if(var14) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var14 = var12.profileEffect;
            var17 = var42 == var14;
            var37 = undefined;
            if(var17) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var37 = var14.skuId;
case 29:
            var20 = var42 != var37;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var24];
            var31 = var17.bind(var4)(var14);
            var24 = var31.useStateFromStores;
            var14 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 37;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var54 = var24.bind(var31)(var17, var14);
            _closure2_slot14 = var54;
            var14 = var42 == var54;
            var24 = undefined;
            if(var14) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var24 = var54.dismissibleContent;
case 32:
            var31 = _closure1_slot0;
            var14 = _closure1_slot2;
            var58 = 38;
            var17 = var14[var58];
            var17 = var31.bind(var4)(var17);
            var17 = var17.DismissibleContent;
            var17 = var17.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var24 = var24 === var17;
            _closure2_slot15 = var24;
            var17 = 39;
            var17 = var14[var17];
            var44 = var31.bind(var4)(var17);
            var32 = var44.useMobileWishlistOwnerExperiment;
            var17 = 'YouScreen';
            var17 = var32.bind(var44)(var17);
            _closure2_slot16 = var17;
            var50 = _closure1_slot4;
            var47 = var50.useMemo;
            var32 = var17.enabled;
            var44 = new Array(1);
            var44[0] = var32;
            var32 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0007_ip = 12; continue _fun0007 }
case 34:
                    var1 = new Array(0);
                    _fun0007_ip = 35; continue _fun0007;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 38;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 35:
                    return var1;
                }
            };
            var32 = var47.bind(var50)(var32, var44);
            var44 = 40;
            var14 = var14[var44];
            var31 = var31.bind(var4)(var14);
            var14 = var31.useSelectedDismissibleContent;
            var31 = var14.bind(var31)(var32);
            var14 = _closure1_slot3;
            var31 = var14.bind(var4)(var31, var33);
            var14 = var31[var30];
            var61 = var31[var36];
            var32 = var17.enabled;
            if(!var32) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var32 = var42 != var14;
case 36:
            _closure2_slot17 = var32;
            var47 = _closure1_slot4;
            var31 = var47.useMemo;
            var17 = new Array(3);
            var17[0] = var32;
            var17[1] = var24;
            var17[2] = var54;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 38; continue _fun0008 }
case 40:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
case 11:
                    var1 = _closure2_slot14;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0008_ip = 41; continue _fun0008;
case 38:
                    var1 = new Array(0);
case 41:
                    return var1;
                }
            };
            var50 = var31.bind(var47)(var14, var17);
            var47 = _closure1_slot4;
            var31 = var47.useMemo;
            var17 = new Array(2);
            var17[0] = var32;
            var17[1] = var54;
            var14 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 42; continue _fun0009 }
case 16:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var1 = _closure2_slot14;
                    var5 = var1.type;
case 43:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 42;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot14;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var4 = var5;
case 47:
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
case 45:
                    _fun0009_ip = 49; continue _fun0009;
case 42:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 34;
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
                        var4 = _closure1_slot22;
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
case 49:
                    return var1;
                }
            };
            var59 = var31.bind(var47)(var14, var17);
            _closure2_slot18 = var59;
            var31 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = var17[var44];
            var47 = var31.bind(var4)(var14);
            var14 = var47.useSelectedDismissibleContent;
            var47 = var14.bind(var47)(var50);
            var14 = _closure1_slot3;
            var14 = var14.bind(var4)(var47, var33);
            var47 = var14[var30];
            _closure2_slot19 = var47;
            var14 = var14[var36];
            var17 = var17[var44];
            var50 = var31.bind(var4)(var17);
            var44 = var50.useSelectedVersionedDismissibleContent;
            var31 = null;
            if(var32) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var31 = null;
            if(!var24) { _fun0001_ip = 50; continue _fun0001 }
case 52:
            var17 = var42 == var54;
            var56 = undefined;
            if(var17) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var56 = var54.type;
case 53:
            var60 = _closure1_slot0;
            var62 = _closure1_slot2;
            var17 = 42;
            var17 = var62[var17];
            var17 = var60.bind(var4)(var17);
            var17 = var17.CollectiblesMarketingType;
            var17 = var17.COACHTIP;
            var31 = null;
            if(!(var56 === var17)) { _fun0001_ip = 50; continue _fun0001 }
case 55:
            var56 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var58];
            var17 = var56.bind(var4)(var17);
            var17 = var17.DismissibleContent;
            var31 = var17.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 50:
            var17 = var42 == var54;
            var56 = undefined;
            if(var17) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var56 = var54.version;
case 56:
            var58 = var42 != var56;
            var17 = 0;
            if(!var58) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var17 = var56;
case 58:
            var31 = var44.bind(var50)(var31, var17);
            var17 = _closure1_slot3;
            var17 = var17.bind(var4)(var31, var33);
            var30 = var17[var30];
            _closure2_slot20 = var30;
            var17 = var17[var36];
            var44 = _closure1_slot4;
            var33 = var44.useMemo;
            var31 = new Array(5);
            var31[0] = var32;
            var31[1] = var59;
            var56 = var42 == var54;
            var50 = undefined;
            if(var56) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var50 = var54.type;
case 60:
            var31[2] = var50;
            var31[3] = var47;
            var31[4] = var30;
            var30 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot17;
                    var2 = !var1;
                    var1 = !var2;
                    if(!var2) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var2 = _closure2_slot19;
                    var6 = null;
                    var2 = var6 != var2;
                    if(var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var3 = _closure2_slot20;
                    var2 = var6 != var3;
case 64:
                    if(!var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure2_slot18;
                    var3 = var6 != var3;
                    if(!var3) { _fun0010_ip = 68; continue _fun0010 }
case 41:
                    var5 = _closure2_slot14;
                    var6 = var6 == var5;
                    var7 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var4 = _closure2_slot14;
                    var5 = var4.type;
case 69:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 42;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.CollectiblesMarketingType;
                    var4 = var4.COACHTIP;
                    var3 = var5 === var4;
case 68:
                    var2 = var3;
case 66:
                    var1 = var2;
case 62:
                    return var1;
                }
            };
            var60 = var33.bind(var44)(var30, var31);
            var31 = _closure1_slot4;
            var30 = var31.useRef;
            var31 = var30.bind(var31)(var42);
            var33 = _closure1_slot4;
            var30 = var33.useRef;
            var30 = var30.bind(var33)(var42);
            if(var32) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            if(!var24) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var14 = var17;
case 73:
            var61 = var14;
case 71:
            _closure2_slot21 = var61;
            var32 = _closure1_slot4;
            var24 = var32.useCallback;
            var17 = new Array(2);
            var17[0] = var61;
            var17[1] = var3;
            var14 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot21;
                var2 = _closure1_slot21;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var24.bind(var32)(var14, var17);
            var24 = {};
            var24['user'] = var6;
            var24['userTheme'] = var9;
            var24['scrollViewRef'] = var22;
            var14 = var25.content;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var13;
            var24['style'] = var9;
            var24['navigateToProfileCustomization'] = var8;
            var24['navigateToCustomStatus'] = var7;
            var24['navigateToFriends'] = var5;
            var24['navigateToPremium'] = var34;
            var24['navigateToShop'] = var3;
            var24['initialTab'] = var2;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 43;
            var2 = var14[var8];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var7 = 'YOU_SCREEN';
            var2['layout'] = var7;
            var6 = var6.id;
            var2['userId'] = var6;
            var13 = var3.bind(var5)(var2);
            var47 = var42 != var59;
            var58 = 44;
            var2 = var14[var58];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useYouSettingsCoachmark;
            var2 = {};
            var2['disabled'] = var47;
            var56 = var3.bind(var5)(var2);
            _closure2_slot22 = var56;
            var44 = var42 != var56;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var56;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot22;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 44; continue _fun0011 }
case 63:
                    var3 = _closure2_slot22;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 44:
                    if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 75:
                    var3 = _closure2_slot22;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 38:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var33 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot22;
            var50 = 45;
            var1 = var14[var50];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot22;
            var5 = 46;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var16;
            var5['primaryColor'] = var15;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot22;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var11 = var12.fetchStartedAt;
case 76:
            var8['fetchStartedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var11 = var12.fetchEndedAt;
case 78:
            var8['fetchEndedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var11 = var12.isLoaded;
case 80:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot23;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 47;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var14 = var25.container;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var15 = var47;
            if(var47) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var15 = var44;
case 82:
            if(!var15) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var17 = _closure1_slot23;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var50];
            var14 = var16.bind(var4)(var14);
            var16 = var14.LayerScope;
            var14 = {};
            var14['zIndex'] = var36;
            if(!var47) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var54 = _closure1_slot22;
            var50 = _closure1_slot1;
            var62 = _closure1_slot2;
            var36 = 48;
            var36 = var62[var36];
            var50 = var50.bind(var4)(var36);
            var36 = {};
            var36['buttonRef'] = var31;
            var36['markAsDismissed'] = var61;
            var36['visible'] = var60;
            var60 = var59.title;
            var36['title'] = var60;
            var60 = var59.description;
            var36['description'] = var60;
            var60 = var59.avatarSrc;
            var36['avatarSrc'] = var60;
            var60 = var59.decorationAsset;
            var36['decorationAsset'] = var60;
            var59 = var59.renderImgComponent;
            var36['renderImgComponent'] = var59;
            var36['navigateToShop'] = var32;
            var47 = var54.bind(var4)(var50, var36);
case 86:
            var36 = new Array(2);
            var36[0] = var47;
            if(!var44) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var54 = _closure1_slot22;
            var50 = _closure1_slot1;
            var47 = _closure1_slot2;
            var47 = var47[var58];
            var50 = var50.bind(var4)(var47);
            var47 = {};
            var47['buttonRef'] = var30;
            var64 = var56.props;
            var65 = var47;
            var56 = copyDataProperties(var65, var64);
            var44 = var54.bind(var4)(var50, var47);
case 88:
            var36[1] = var44;
            var14['children'] = var36;
            var15 = var17.bind(var4)(var16, var14);
case 84:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot23;
            var16 = _closure1_slot26;
            var15 = {};
            var15['ref'] = var22;
            var22 = _closure1_slot18;
            var15['scrollEventThrottle'] = var22;
            var36 = var25.scrollView;
            var22 = new Array(3);
            var22[0] = var36;
            var36 = {};
            var36['backgroundColor'] = var40;
            var22[1] = var36;
            var22[2] = var23;
            var15['style'] = var22;
            var15['onScroll'] = var18;
            var23 = _closure1_slot23;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var40 = var25.banner;
            var36 = new Array(2);
            var36[0] = var40;
            var36[1] = var26;
            var18['style'] = var36;
            if(var28) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var28 = null;
            if(!var27) { _fun0001_ip = 92; continue _fun0001 }
case 90:
            var40 = _closure1_slot22;
            var47 = _closure1_slot0;
            var54 = _closure1_slot2;
            var27 = 49;
            var27 = var54[var27];
            var27 = var47.bind(var4)(var27);
            var36 = var27.PressableOpacity;
            var27 = {};
            var50 = var25.backButton;
            var44 = new Array(2);
            var44[0] = var50;
            var50 = {};
            var50['top'] = var29;
            var44[1] = var50;
            var27['style'] = var44;
            var44 = var54[var57];
            var44 = var47.bind(var4)(var44);
            var56 = var44.intl;
            var50 = var56.string;
            var44 = var54[var57];
            var44 = var47.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.13/7kX;
            var44 = var50.bind(var56)(var44);
            var27['accessibilityLabel'] = var44;
            var44 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0012_ip = 93; continue _fun0012 }
case 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 51;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 94; continue _fun0012 }
case 41:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    _fun0012_ip = 94; continue _fun0012;
case 93:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var27['onPress'] = var44;
            var50 = _closure1_slot22;
            var44 = 52;
            var44 = var54[var44];
            var44 = var47.bind(var4)(var44);
            var47 = var44.DownArrowIconWithBadgeOnSide;
            var44 = {};
            var44 = var50.bind(var4)(var47, var44);
            var27['children'] = var44;
            var28 = var40.bind(var4)(var36, var27);
case 92:
            var27 = new Array(3);
            var27[0] = var28;
            var28 = !var20;
            if(var20) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var44 = _closure1_slot22;
            var40 = _closure1_slot1;
            var47 = _closure1_slot2;
            var36 = 53;
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
case 95:
            var27[1] = var28;
            var40 = _closure1_slot23;
            var36 = _closure1_slot1;
            var54 = _closure1_slot2;
            var28 = var54[var21];
            var28 = var36.bind(var4)(var28);
            var36 = var28.View;
            var28 = {};
            var47 = {};
            var50 = _closure1_slot0;
            var44 = 28;
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
            if(!var42) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            if(var41) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var45 = _closure1_slot22;
            var44 = _closure1_slot1;
            var47 = _closure1_slot2;
            var41 = 41;
            var41 = var47[var41];
            var44 = var44.bind(var4)(var41);
            var41 = {};
            var41['style'] = var55;
            var47 = 'image';
            var41['accessibilityRole'] = var47;
            var41['accessibilityLabel'] = var53;
            var41['source'] = var52;
            var41 = var45.bind(var4)(var44, var41);
            _fun0001_ip = 101; continue _fun0001;
case 99:
            var47 = _closure1_slot23;
            var58 = _closure1_slot0;
            var56 = _closure1_slot2;
            var44 = 49;
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
            var51 = _closure1_slot22;
            var50 = _closure1_slot1;
            var48 = 41;
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
            if(!var49) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var52 = _closure1_slot22;
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
case 102:
            var48[1] = var49;
            var44['children'] = var48;
            var41 = var47.bind(var4)(var45, var44);
case 101:
            var42 = var41;
case 97:
            var41 = new Array(2);
            var41[0] = var42;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var42 = 55;
            var42 = var45[var42];
            var44 = var44.bind(var4)(var42);
            var42 = var44.isIOS;
            var42 = var42.bind(var44)();
            if(!var42) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var42 = var43;
case 104:
            if(!var42) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var45 = _closure1_slot22;
            var44 = _closure1_slot24;
            var43 = {};
            var43['animatedProps'] = var46;
            var46 = _closure1_slot5;
            var46 = var46.absoluteFillObject;
            var43['style'] = var46;
            var42 = var45.bind(var4)(var44, var43);
case 106:
            var41[1] = var42;
            var28['children'] = var41;
            var28 = var40.bind(var4)(var36, var28);
            var27[2] = var28;
            var18['children'] = var27;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var23 = _closure1_slot23;
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
            var28 = _closure1_slot22;
            var25 = 56;
            var25 = var36[var25];
            var26 = var27.bind(var4)(var25);
            var25 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['skuId'] = var37;
            var26 = var28.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot22;
            var26 = 53;
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
case 108:
            var18[1] = var20;
            var23 = _closure1_slot22;
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
            var18[2] = var20;
            var21 = _closure1_slot22;
            var20 = _closure1_slot0;
            var19 = 58;
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
    var _closure1_slot36 = var4;
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
    var2 = var2.CollectiblesMobileShopScreen;
    var _closure1_slot20 = var2;
    var2 = 12;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot21 = var2;
    var2 = 13;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var11 = var2.jsx;
    var _closure1_slot22 = var11;
    var2 = var2.jsxs;
    var _closure1_slot23 = var2;
    var2 = 14;
    var11 = var8[var2];
    var13 = var6.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 15;
    var11 = var8[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot24 = var11;
    var11 = 16;
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
        var3 = 17;
        var3 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var3 = 18;
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
    var _closure1_slot25 = var11;
    var2 = var8[var2];
    var6 = var6.bind(var1)(var2);
    var2 = var6.createAnimatedComponent;
    var2 = var2.bind(var6)(var10);
    var _closure1_slot26 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var2['code'] = var6;
    var _closure1_slot27 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var2['code'] = var6;
    var _closure1_slot28 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot29 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot30 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var2['code'] = var6;
    var _closure1_slot31 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var2['code'] = var6;
    var _closure1_slot32 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var2['code'] = var6;
    var _closure1_slot33 = var2;
    var2 = {};
    var6 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var2['code'] = var6;
    var _closure1_slot34 = var2;
    var6 = var9.memo;
    var2 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = var1.inBottomSheet;
            var _closure2_slot0 = var7;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 30;
            var9 = var1[var4];
            var12 = var8.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var11.bind(var12)(var10, var9);
            var _closure2_slot1 = var14;
            var1 = var1[var4];
            var10 = var8.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var11 = var9.bind(var10)(var8, var1);
            var1 = null;
            var8 = var1 == var14;
            var10 = undefined;
            if(var8) { _fun0013_ip = 110; continue _fun0013 }
case 111:
            var10 = var14.id;
case 110:
            _closure2_slot2 = var10;
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var14;
            var8 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0014_ip = 112; continue _fun0014 }
case 113:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 112:
                    return var1;
                }
            };
            var16 = var12.bind(var13)(var8, var9);
            _closure2_slot3 = var16;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = 39;
            var12 = var9[var12];
            var15 = var8.bind(var5)(var12);
            var13 = var15.useMobileWishlistOwnerExperiment;
            var12 = 'YouScreen';
            var12 = var13.bind(var15)(var12);
            _closure2_slot4 = var12;
            var15 = _closure1_slot4;
            var13 = var15.useLayoutEffect;
            var12 = new Array(3);
            var12[0] = var10;
            var12[1] = var16;
            var12[2] = var11;
            var11 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0015_ip = 114; continue _fun0015 }
case 63:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
case 114:
                    if(!var2) { _fun0015_ip = 115; continue _fun0015 }
case 11:
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
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var13.bind(var15)(var11, var12);
            var4 = var9[var4];
            var13 = var8.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0016_ip = 116; continue _fun0016 }
case 7:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 116:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var11, var4);
            var4 = 60;
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useFetchWishlist;
            var4 = {};
            var4['wishlistId'] = var11;
            var4['userId'] = var10;
            var4 = var8.bind(var9)(var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0017_ip = 118; continue _fun0017 }
case 112:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0017_ip = 118; continue _fun0017 }
case 116:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 118:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var13 = var9.bind(var10)(var8, var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0018_ip = 119; continue _fun0018 }
case 112:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0018_ip = 119; continue _fun0018 }
case 116:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot19;
                    var2 = var2.PREMIUM;
                    var3['screen'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 119:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var12 = var9.bind(var10)(var8, var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function() {
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
                var5 = _closure1_slot20;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var8 = var9.bind(var10)(var8, var4);
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var9 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0019_ip = 120; continue _fun0019 }
case 112:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0019_ip = 120; continue _fun0019 }
case 116:
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
case 120:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var11 = var10.bind(var11)(var9, var4);
            var15 = _closure1_slot4;
            var10 = var15.useCallback;
            var9 = function() {
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
            var4 = new Array(0);
            var10 = var10.bind(var15)(var9, var4);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var9 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0020_ip = 121; continue _fun0020 }
case 112:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0020_ip = 121; continue _fun0020 }
case 116:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 121:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var9 = var15.bind(var16)(var9, var4);
            var16 = _closure1_slot4;
            var15 = var16.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 51;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 == var5)) { _fun0021_ip = 122; continue _fun0021 }
case 123:
                    return var2;
case 122:
                    var4 = var5.addListener;
                    var3 = 'state';
                    var2 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var1 = _closure2_slot0;
                            if(!var1) { _fun0022_ip = 122; continue _fun0022 }
case 39:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 50;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
case 122:
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
                            if(!(var2 != var3)) { _fun0023_ip = 6; continue _fun0023 }
case 16:
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 6:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var3 = var15.bind(var16)(var3, var4);
            var3 = var1 == var14;
            var1 = null;
            if(var3) { _fun0013_ip = 124; continue _fun0013 }
case 125:
            var4 = _closure1_slot22;
            var3 = _closure1_slot36;
            var2 = {};
            var2['user'] = var14;
            var2['navigateToSettings'] = var13;
            var2['navigateToPremium'] = var12;
            var2['navigateToProfileCustomization'] = var11;
            var2['navigateToCustomStatus'] = var10;
            var2['navigateToFriends'] = var9;
            var2['navigateToShop'] = var8;
            var2['inBottomSheet'] = var7;
            var2['initialTab'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 124:
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var _closure1_slot35 = var2;
    var6 = 66;
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
            if(!(var6 === var4)) { _fun0024_ip = 7; continue _fun0024 }
case 126:
            var6 = false;
case 7:
            var5 = var1.initialTab;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var3 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0025_ip = 118; continue _fun0025 }
case 112:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0025_ip = 118; continue _fun0025 }
case 116:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 118:
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
                var1 = 64;
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
            var2 = 65;
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
            var3 = _closure1_slot22;
            var2 = _closure1_slot35;
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