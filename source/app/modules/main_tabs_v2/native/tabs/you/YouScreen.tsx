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
            var24 = var2.style;
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
            var11 = _closure1_slot4;
            var10 = var11.useRef;
            var9 = global;
            var12 = var9.Date;
            var9 = var12.now;
            var9 = var9.bind(var12)();
            var11 = var10.bind(var11)(var9);
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var9 = 21;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var17 = var9.bind(var4)();
            var _closure2_slot3 = var17;
            var9 = _closure1_slot16;
            var31 = var17 * var9;
            var _closure2_slot4 = var31;
            var9 = _closure1_slot25;
            var25 = var9.bind(var4)(var17);
            var9 = 22;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var18 = _closure1_slot0;
            var12 = 23;
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
            var9 = 24;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = var6.id;
            var12 = var10.bind(var4)(var9);
            var9 = 25;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var14 = var9.bind(var4)();
            var9 = 26;
            var9 = var22[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var9['user'] = var6;
            var9['displayProfile'] = var12;
            var9 = var10.bind(var4)(var9);
            var16 = var9.theme;
            var15 = var9.primaryColor;
            var10 = var9.secondaryColor;
            var9 = 27;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var13 = 28;
            var13 = var22[var13];
            var20 = var18.bind(var4)(var13);
            var13 = var20.useProfileThemeValues;
            var23 = var13.bind(var20)(var16);
            var13 = 29;
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
            var13 = 30;
            var13 = var22[var13];
            var20 = var21.bind(var4)(var13);
            var18 = var20.int2hex;
            var13 = 31;
            var13 = var22[var13];
            var22 = var21.bind(var4)(var13);
            var21 = var22.calculateOverlayedColor;
            var26 = var42 == var23;
            var13 = undefined;
            if(var26) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var23.overlay;
case 4:
            var13 = var21.bind(var22)(var10, var13);
            var40 = var18.bind(var20)(var13);
case 2:
            var18 = _closure1_slot4;
            var13 = var18.useRef;
            var22 = var13.bind(var18)(var42);
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var21 = 14;
            var13 = var32[var21];
            var18 = var29.bind(var4)(var13);
            var13 = var18.useSharedValue;
            var23 = 0;
            var37 = var13.bind(var18)(var23);
            _closure2_slot5 = var37;
            var13 = var32[var21];
            var20 = var29.bind(var4)(var13);
            var18 = var20.useAnimatedScrollHandler;
            var13 = function X(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var26 = {};
            var26['scrollPosition'] = var37;
            var13['__closure'] = var26;
            var26 = 952837799380.0;
            var13['__workletHash'] = var26;
            var26 = _closure1_slot27;
            var13['__initData'] = var26;
            var18 = var18.bind(var20)(var13);
            var28 = _closure1_slot4;
            var26 = var28.useMemo;
            var20 = new Array(1);
            var20[0] = var17;
            var13 = function() {
                var2 = _closure2_slot3;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var36 = var26.bind(var28)(var13, var20);
            _closure2_slot6 = var36;
            var13 = var32[var21];
            var26 = var29.bind(var4)(var13);
            var20 = var26.useDerivedValue;
            var13 = function q() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var28 = {};
            var28['scrollPosition'] = var37;
            var13['__closure'] = var28;
            var28 = 588222792165.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot28;
            var13['__initData'] = var28;
            var33 = var20.bind(var26)(var13);
            _closure2_slot7 = var33;
            var30 = 32;
            var13 = var32[var30];
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
            var13 = var32[var21];
            var26 = var29.bind(var4)(var13);
            var20 = var26.useAnimatedStyle;
            var13 = function Z() {
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
            var38 = var32[var21];
            var38 = var29.bind(var4)(var38);
            var38 = var38.interpolate;
            var28['interpolate'] = var38;
            var28['scrollPosition'] = var37;
            var28['minScrollPosition'] = var36;
            var36 = _closure1_slot12;
            var28['SCALE_FACTOR'] = var36;
            var28['translateOnScale'] = var31;
            var28['isNegativeScrollPosition'] = var33;
            var13['__closure'] = var28;
            var28 = 5882939038632.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot29;
            var13['__initData'] = var28;
            var45 = var20.bind(var26)(var13);
            var13 = var32[var21];
            var26 = var29.bind(var4)(var13);
            var20 = var26.useAnimatedStyle;
            var13 = function Q() {
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
            var13 = var32[var21];
            var28 = var29.bind(var4)(var13);
            var20 = var28.useAnimatedStyle;
            var13 = function $() {
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
            var31 = {};
            var31['isNegativeScrollPosition'] = var33;
            var31['scrollPosition'] = var37;
            var31['coefficient'] = var35;
            var13['__closure'] = var31;
            var31 = 9336428823274.0;
            var13['__workletHash'] = var31;
            var31 = _closure1_slot31;
            var13['__initData'] = var31;
            var13 = var20.bind(var28)(var13);
            var28 = _closure1_slot1;
            var20 = 33;
            var20 = var32[var20];
            var20 = var28.bind(var4)(var20);
            var20 = var20.bind(var4)();
            var39 = var20.width;
            _closure2_slot9 = var39;
            var38 = var20.height;
            _closure2_slot10 = var38;
            var20 = var32[var21];
            var31 = var29.bind(var4)(var20);
            var28 = var31.useAnimatedProps;
            var20 = function ee() {
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
            var36 = var32[var21];
            var36 = var29.bind(var4)(var36);
            var36 = var36.clamp;
            var33['clamp'] = var36;
            var36 = var32[var21];
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
            var46 = var28.bind(var31)(var20);
            var31 = _closure1_slot4;
            var28 = var31.useState;
            var20 = var37.get;
            var20 = var20.bind(var37)();
            var20 = var20 < var23;
            var28 = var28.bind(var31)(var20);
            var20 = _closure1_slot3;
            var31 = 2;
            var20 = var20.bind(var4)(var28, var31);
            var43 = var20[var23];
            var36 = 1;
            var41 = var20[var36];
            _closure2_slot11 = var41;
            var20 = var32[var21];
            var35 = var29.bind(var4)(var20);
            var33 = var35.useAnimatedReaction;
            var28 = function oe() {
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
            var20 = function te(arg1, arg2) {
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
            var44 = var32[var21];
            var44 = var29.bind(var4)(var44);
            var44 = var44.runOnJS;
            var37['runOnJS'] = var44;
            var37['setShowBlur'] = var41;
            var20['__closure'] = var37;
            var37 = 11057160578223.0;
            var20['__workletHash'] = var37;
            var37 = _closure1_slot34;
            var20['__initData'] = var37;
            var20 = var33.bind(var35)(var28, var20);
            var33 = _closure1_slot4;
            var28 = var33.useState;
            var20 = false;
            var28 = var28.bind(var33)(var20);
            var20 = _closure1_slot3;
            var28 = var20.bind(var4)(var28, var31);
            var20 = var28[var23];
            _closure2_slot12 = var20;
            var28 = var28[var36];
            _closure2_slot13 = var28;
            var28 = 34;
            var28 = var32[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.GifAutoPlay;
            var28 = var29.getSetting;
            var49 = var28.bind(var29)();
            if(var49) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var49 = var20;
case 17:
            var20 = var42 == var12;
            var33 = undefined;
            if(var20) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var28 = var12.getBannerURL;
            var20 = {};
            var20['canAnimate'] = var49;
            var20['size'] = var39;
            var33 = var28.bind(var12)(var20);
case 19:
            var20 = var42 != var33;
            var52 = null;
            if(!var20) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 35;
            var20 = var29[var20];
            var28 = var28.bind(var4)(var20);
            var20 = var28.makeSource;
            var52 = var20.bind(var28)(var33);
case 21:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 35;
            var20 = var29[var20];
            var32 = var28.bind(var4)(var20);
            var20 = var32.isAnimatedImageURL;
            var41 = var20.bind(var32)(var33);
            var57 = 36;
            var20 = var29[var57];
            var20 = var28.bind(var4)(var20);
            var35 = var20.intl;
            var33 = var35.formatToPlainString;
            var20 = var29[var57];
            var20 = var28.bind(var4)(var20);
            var20 = var20.t;
            var32 = var20.gVn4uJ;
            var20 = {};
            var37 = var6.username;
            var20['username'] = var37;
            var53 = var33.bind(var35)(var32, var20);
            var20 = 37;
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
            var20 = 38;
            var20 = var29[var20];
            var20 = var28.bind(var4)(var20);
            var28 = var20.bind(var4)();
            var32 = _closure1_slot4;
            var29 = var32.useMemo;
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
            var55 = var29.bind(var32)(var17, var20);
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
            var14 = var14[var30];
            var32 = var17.bind(var4)(var14);
            var30 = var32.useStateFromStores;
            var14 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 39;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var47 = var30.bind(var32)(var17, var14);
            _closure2_slot14 = var47;
            var14 = var42 == var47;
            var17 = undefined;
            if(var14) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var17 = var47.dismissibleContent;
case 32:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var54 = 40;
            var14 = var32[var54];
            var14 = var30.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var14 = var14.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var17 = var17 === var14;
            _closure2_slot15 = var17;
            var50 = _closure1_slot4;
            var44 = var50.useMemo;
            var33 = new Array(2);
            var33[0] = var17;
            var33[1] = var47;
            var14 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 34; continue _fun0007 }
case 16:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var1 = _closure2_slot14;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0007_ip = 36; continue _fun0007;
case 34:
                    var1 = new Array(0);
case 36:
                    return var1;
                }
            };
            var50 = var44.bind(var50)(var14, var33);
            var56 = _closure1_slot4;
            var44 = var56.useMemo;
            var33 = new Array(1);
            var33[0] = var47;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0008_ip = 37; continue _fun0008 }
case 35:
                    var1 = _closure2_slot14;
                    var5 = var1.type;
case 37:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 41;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot14;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var4 = var5;
case 40:
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
case 38:
                    return var1;
                }
            };
            var59 = var44.bind(var56)(var14, var33);
            _closure2_slot16 = var59;
            var14 = 42;
            var33 = var32[var14];
            var44 = var30.bind(var4)(var33);
            var33 = var44.useSelectedDismissibleContent;
            var44 = var33.bind(var44)(var50);
            var33 = _closure1_slot3;
            var44 = var33.bind(var4)(var44, var31);
            var33 = var44[var23];
            _closure2_slot17 = var33;
            var61 = var44[var36];
            var14 = var32[var14];
            var44 = var30.bind(var4)(var14);
            var32 = var44.useSelectedVersionedDismissibleContent;
            var30 = null;
            if(!var17) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = var42 == var47;
            var50 = undefined;
            if(var14) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var50 = var47.type;
case 44:
            var56 = _closure1_slot0;
            var58 = _closure1_slot2;
            var14 = 41;
            var14 = var58[var14];
            var14 = var56.bind(var4)(var14);
            var14 = var14.CollectiblesMarketingType;
            var14 = var14.COACHTIP;
            var30 = null;
            if(!(var50 === var14)) { _fun0001_ip = 42; continue _fun0001 }
case 46:
            var50 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var54];
            var14 = var50.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var30 = var14.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 42:
            var14 = var42 == var47;
            var50 = undefined;
            if(var14) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var50 = var47.version;
case 47:
            var54 = var42 != var50;
            var14 = 0;
            if(!var54) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var14 = var50;
case 49:
            var30 = var32.bind(var44)(var30, var14);
            var14 = _closure1_slot3;
            var14 = var14.bind(var4)(var30, var31);
            var23 = var14[var23];
            _closure2_slot18 = var23;
            var14 = var14[var36];
            var32 = _closure1_slot4;
            var31 = var32.useMemo;
            var30 = new Array(4);
            var30[0] = var59;
            var50 = var42 == var47;
            var44 = undefined;
            if(var50) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var44 = var47.type;
case 51:
            var30[1] = var44;
            var30[2] = var33;
            var30[3] = var23;
            var23 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot17;
                    var5 = null;
                    var1 = var5 != var1;
                    if(var1) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var2 = _closure2_slot18;
                    var1 = var5 != var2;
case 53:
                    if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 11:
                    var2 = _closure2_slot16;
                    var2 = var5 != var2;
                    if(!var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var4 = _closure2_slot14;
                    var5 = var5 == var4;
                    var6 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = _closure2_slot14;
                    var4 = var3.type;
case 58:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 41;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.CollectiblesMarketingType;
                    var3 = var3.COACHTIP;
                    var2 = var4 === var3;
case 56:
                    var1 = var2;
case 55:
                    return var1;
                }
            };
            var60 = var31.bind(var32)(var23, var30);
            var30 = _closure1_slot4;
            var23 = var30.useRef;
            var31 = var23.bind(var30)(var42);
            var30 = _closure1_slot4;
            var23 = var30.useRef;
            var30 = var23.bind(var30)(var42);
            if(!var17) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var61 = var14;
case 60:
            _closure2_slot19 = var61;
            var32 = _closure1_slot4;
            var23 = var32.useCallback;
            var17 = new Array(2);
            var17[0] = var61;
            var17[1] = var3;
            var14 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot19;
                var2 = _closure1_slot21;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var23.bind(var32)(var14, var17);
            var23 = {};
            var23['user'] = var6;
            var23['userTheme'] = var9;
            var23['scrollViewRef'] = var22;
            var14 = var25.content;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var13;
            var23['style'] = var9;
            var23['navigateToProfileCustomization'] = var8;
            var23['navigateToCustomStatus'] = var7;
            var23['navigateToFriends'] = var5;
            var23['navigateToPremium'] = var34;
            var23['navigateToShop'] = var3;
            var23['initialTab'] = var2;
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
            _closure2_slot20 = var56;
            var44 = var42 != var56;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var56;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0010_ip = 62; continue _fun0010 }
case 54:
                    var3 = _closure2_slot20;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 62:
                    if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var3 = _closure2_slot20;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 63:
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
            if(var13) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var11 = var12.fetchStartedAt;
case 65:
            var8['fetchStartedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var11 = var12.fetchEndedAt;
case 67:
            var8['fetchEndedAt'] = var11;
            var13 = var42 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var11 = var12.isLoaded;
case 69:
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
            if(var47) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var15 = var44;
case 71:
            if(!var15) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var17 = _closure1_slot23;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var50];
            var14 = var16.bind(var4)(var14);
            var16 = var14.LayerScope;
            var14 = {};
            var14['zIndex'] = var36;
            if(!var47) { _fun0001_ip = 75; continue _fun0001 }
case 76:
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
            var59 = var59.decorationAsset;
            var36['decorationAsset'] = var59;
            var36['navigateToShop'] = var32;
            var47 = var54.bind(var4)(var50, var36);
case 75:
            var36 = new Array(2);
            var36[0] = var47;
            if(!var44) { _fun0001_ip = 77; continue _fun0001 }
case 78:
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
case 77:
            var36[1] = var44;
            var14['children'] = var36;
            var15 = var17.bind(var4)(var16, var14);
case 73:
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
            var22[2] = var24;
            var15['style'] = var22;
            var15['onScroll'] = var18;
            var24 = _closure1_slot23;
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
            if(var28) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var28 = null;
            if(!var27) { _fun0001_ip = 81; continue _fun0001 }
case 79:
            var40 = _closure1_slot22;
            var54 = _closure1_slot0;
            var44 = _closure1_slot2;
            var27 = 49;
            var27 = var44[var27];
            var27 = var54.bind(var4)(var27);
            var36 = var27.PressableOpacity;
            var27 = {};
            var50 = var25.backButton;
            var47 = new Array(2);
            var47[0] = var50;
            var50 = {};
            var50['top'] = var29;
            var47[1] = var50;
            var27['style'] = var47;
            var47 = var44[var57];
            var47 = var54.bind(var4)(var47);
            var50 = var47.intl;
            var47 = var50.string;
            var44 = var44[var57];
            var44 = var54.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.13/7kX;
            var44 = var47.bind(var50)(var44);
            var27['accessibilityLabel'] = var44;
            var44 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0011_ip = 82; continue _fun0011 }
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
                    if(!(var2 != var3)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    _fun0011_ip = 83; continue _fun0011;
case 82:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var27['onPress'] = var44;
            var44 = _closure1_slot35;
            var27['children'] = var44;
            var28 = var40.bind(var4)(var36, var27);
case 81:
            var27 = new Array(3);
            var27[0] = var28;
            var28 = !var20;
            if(var20) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var44 = _closure1_slot22;
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
case 85:
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
            var44 = 30;
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
            if(!var42) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            if(var41) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var45 = _closure1_slot22;
            var44 = _closure1_slot1;
            var47 = _closure1_slot2;
            var41 = 53;
            var41 = var47[var41];
            var44 = var44.bind(var4)(var41);
            var41 = {};
            var41['style'] = var55;
            var47 = 'image';
            var41['accessibilityRole'] = var47;
            var41['accessibilityLabel'] = var53;
            var41['source'] = var52;
            var41 = var45.bind(var4)(var44, var41);
            _fun0001_ip = 91; continue _fun0001;
case 89:
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
            var48 = 53;
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
            if(!var49) { _fun0001_ip = 92; continue _fun0001 }
case 93:
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
case 92:
            var48[1] = var49;
            var44['children'] = var48;
            var41 = var47.bind(var4)(var45, var44);
case 91:
            var42 = var41;
case 87:
            var41 = new Array(2);
            var41[0] = var42;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var42 = 55;
            var42 = var45[var42];
            var44 = var44.bind(var4)(var42);
            var42 = var44.isIOS;
            var42 = var42.bind(var44)();
            if(!var42) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var42 = var43;
case 94:
            if(!var42) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var45 = _closure1_slot22;
            var44 = _closure1_slot24;
            var43 = {};
            var43['animatedProps'] = var46;
            var46 = _closure1_slot5;
            var46 = var46.absoluteFillObject;
            var43['style'] = var46;
            var42 = var45.bind(var4)(var44, var43);
case 96:
            var41[1] = var42;
            var28['children'] = var41;
            var28 = var40.bind(var4)(var36, var28);
            var27[2] = var28;
            var18['children'] = var27;
            var22 = var24.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var24 = _closure1_slot23;
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
            var20 = var24.bind(var4)(var22, var21);
case 98:
            var18[1] = var20;
            var22 = _closure1_slot22;
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var20 = 57;
            var20 = var24[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var65 = var20;
            var64 = var23;
            var23 = copyDataProperties(var65, var64);
            var20 = var22.bind(var4)(var21, var20);
            var18[2] = var20;
            var19 = _closure1_slot36;
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
    var _closure1_slot38 = var4;
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
    var11 = var2.ScrollView;
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
    var10 = var2.SCALE_FACTOR;
    var _closure1_slot12 = var10;
    var10 = var2.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var10;
    var10 = var2.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var10;
    var10 = var2.YOU_AVATAR_SIZE;
    var _closure1_slot15 = var10;
    var10 = var2.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot16 = var10;
    var10 = var2.YOU_SCREEN_ID;
    var _closure1_slot17 = var10;
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
    var10 = var2.jsx;
    var _closure1_slot22 = var10;
    var2 = var2.jsxs;
    var _closure1_slot23 = var2;
    var2 = 14;
    var12 = var8[var2];
    var14 = var6.bind(var1)(var12);
    var13 = var14.createAnimatedComponent;
    var12 = 15;
    var12 = var8[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var13.bind(var14)(var12);
    var _closure1_slot24 = var12;
    var12 = 16;
    var12 = var8[var12];
    var14 = var7.bind(var1)(var12);
    var13 = var14.createStyles;
    var12 = function(arg1) {
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
    var12 = var13.bind(var14)(var12);
    var _closure1_slot25 = var12;
    var2 = var8[var2];
    var6 = var6.bind(var1)(var2);
    var2 = var6.createAnimatedComponent;
    var2 = var2.bind(var6)(var11);
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
    var2 = 19;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.DownArrowIconWithBadgeOnSide;
    var2 = {};
    var2 = var10.bind(var1)(var6, var2);
    var _closure1_slot35 = var2;
    var2 = 20;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.TTIFirstContentfulPaint;
    var2 = {};
    var11 = 'you_screen';
    var2['label'] = var11;
    var2 = var10.bind(var1)(var6, var2);
    var _closure1_slot36 = var2;
    var6 = var9.memo;
    var2 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            var4 = 32;
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
            if(var8) { _fun0012_ip = 100; continue _fun0012 }
case 101:
            var10 = var14.id;
case 100:
            _closure2_slot2 = var10;
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var14;
            var8 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 102; continue _fun0013 }
case 103:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 102:
                    return var1;
                }
            };
            var16 = var12.bind(var13)(var8, var9);
            _closure2_slot3 = var16;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = 58;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0014_ip = 53; continue _fun0014 }
case 54:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
case 53:
                    if(!var2) { _fun0014_ip = 104; continue _fun0014 }
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
case 104:
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
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 105; continue _fun0015 }
case 7:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 105:
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                    if(!(var3 != var4)) { _fun0016_ip = 107; continue _fun0016 }
case 102:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0016_ip = 107; continue _fun0016 }
case 105:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 107:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var13 = var9.bind(var10)(var8, var4);
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
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0017_ip = 108; continue _fun0017 }
case 102:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0017_ip = 108; continue _fun0017 }
case 105:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot19;
                    var2 = var2.PREMIUM;
                    var3['screen'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 108:
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
                    if(!(var3 != var5)) { _fun0018_ip = 55; continue _fun0018 }
case 102:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0018_ip = 55; continue _fun0018 }
case 105:
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
case 55:
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
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                    if(!(var2 != var4)) { _fun0019_ip = 109; continue _fun0019 }
case 102:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0019_ip = 109; continue _fun0019 }
case 105:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 109:
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
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                    if(!(var3 == var5)) { _fun0020_ip = 110; continue _fun0020 }
case 111:
                    return var2;
case 110:
                    var4 = var5.addListener;
                    var3 = 'state';
                    var2 = function() {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var1 = _closure2_slot0;
                            if(!var1) { _fun0021_ip = 110; continue _fun0021 }
case 112:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 50;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
case 110:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0022_ip = 6; continue _fun0022 }
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
            if(var3) { _fun0012_ip = 113; continue _fun0012 }
case 114:
            var4 = _closure1_slot22;
            var3 = _closure1_slot38;
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
case 113:
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var _closure1_slot37 = var2;
    var6 = 66;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ConnectedYouScreen(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var6 = var1.inBottomSheet;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0023_ip = 7; continue _fun0023 }
case 115:
            var6 = false;
case 7:
            var5 = var1.initialTab;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var3 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
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
                    if(!(var3 != var4)) { _fun0024_ip = 107; continue _fun0024 }
case 102:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0024_ip = 107; continue _fun0024 }
case 105:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 107:
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
            var2 = _closure1_slot37;
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