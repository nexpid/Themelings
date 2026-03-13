// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function UnconnectedYouScreen(arg1) {
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
            var2 = var2.initialTab;
            var4 = undefined;
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
            var20 = global;
            var12 = var20.Date;
            var9 = var12.now;
            var9 = var9.bind(var12)();
            var11 = var10.bind(var11)(var9);
            var24 = _closure1_slot1;
            var31 = _closure1_slot2;
            var9 = 20;
            var9 = var31[var9];
            var9 = var24.bind(var4)(var9);
            var17 = var9.bind(var4)();
            var _closure2_slot2 = var17;
            var9 = _closure1_slot17;
            var42 = var17 * var9;
            var _closure2_slot3 = var42;
            var9 = _closure1_slot26;
            var41 = var9.bind(var4)(var17);
            var9 = 21;
            var9 = var31[var9];
            var10 = var24.bind(var4)(var9);
            var9 = {};
            var23 = _closure1_slot0;
            var12 = 22;
            var13 = var31[var12];
            var13 = var23.bind(var4)(var13);
            var13 = var13.ImpressionTypes;
            var13 = var13.VIEW;
            var9['type'] = var13;
            var12 = var31[var12];
            var12 = var23.bind(var4)(var12);
            var12 = var12.ImpressionNames;
            var12 = var12.USER_YOU_SCREEN;
            var9['name'] = var12;
            var9 = var10.bind(var4)(var9);
            var9 = 23;
            var9 = var31[var9];
            var10 = var24.bind(var4)(var9);
            var9 = var6.id;
            var12 = var10.bind(var4)(var9);
            var9 = 24;
            var9 = var31[var9];
            var9 = var24.bind(var4)(var9);
            var14 = var9.bind(var4)();
            var9 = 25;
            var9 = var31[var9];
            var10 = var24.bind(var4)(var9);
            var9 = {};
            var9['user'] = var6;
            var9['displayProfile'] = var12;
            var9 = var10.bind(var4)(var9);
            var16 = var9.theme;
            var15 = var9.primaryColor;
            var10 = var9.secondaryColor;
            var9 = 26;
            var9 = var31[var9];
            var9 = var24.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var18 = _closure1_slot4;
            var13 = var18.useRef;
            var26 = null;
            var25 = var13.bind(var18)(var26);
            var21 = 15;
            var13 = var31[var21];
            var18 = var23.bind(var4)(var13);
            var13 = var18.useSharedValue;
            var30 = 0;
            var32 = var13.bind(var18)(var30);
            var _closure2_slot4 = var32;
            var13 = var31[var21];
            var22 = var23.bind(var4)(var13);
            var18 = var22.useAnimatedScrollHandler;
            var13 = function j(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var27 = {};
            var27['scrollPosition'] = var32;
            var13['__closure'] = var27;
            var27 = 952837799380.0;
            var13['__workletHash'] = var27;
            var27 = _closure1_slot28;
            var13['__initData'] = var27;
            var22 = var18.bind(var22)(var13);
            var28 = _closure1_slot4;
            var27 = var28.useMemo;
            var18 = new Array(1);
            var18[0] = var17;
            var13 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var43 = var27.bind(var28)(var13, var18);
            var _closure2_slot5 = var43;
            var13 = var31[var21];
            var27 = var23.bind(var4)(var13);
            var18 = var27.useDerivedValue;
            var13 = function J() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var28 = {};
            var28['scrollPosition'] = var32;
            var13['__closure'] = var28;
            var28 = 588222792165.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot29;
            var13['__initData'] = var28;
            var39 = var18.bind(var27)(var13);
            var _closure2_slot6 = var39;
            var28 = 27;
            var13 = var31[var28];
            var33 = var23.bind(var4)(var13);
            var29 = var33.useStateFromStores;
            var13 = _closure1_slot6;
            var27 = new Array(1);
            var27[0] = var13;
            var18 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot14;
case 2:
                    return var1;
                }
            };
            var13 = new Array(0);
            var35 = var29.bind(var33)(var27, var18, var13);
            var _closure2_slot7 = var35;
            var18 = _closure1_slot4;
            var13 = var18.useState;
            var18 = var13.bind(var18)(var30);
            var13 = _closure1_slot3;
            var33 = 2;
            var13 = var13.bind(var4)(var18, var33);
            var27 = var13[var30];
            var40 = 1;
            var13 = var13[var40];
            var _closure2_slot8 = var13;
            var36 = _closure1_slot4;
            var29 = var36.useCallback;
            var18 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var13 = new Array(0);
            var18 = var29.bind(var36)(var18, var13);
            var13 = var31[var21];
            var36 = var23.bind(var4)(var13);
            var29 = var36.useAnimatedStyle;
            var13 = function X() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 15;
                    var1 = var9[var4];
                    var6 = undefined;
                    var13 = var7.bind(var6)(var1);
                    var12 = var13.interpolate;
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var11 = var1.bind(var5)();
                    var1 = _closure2_slot5;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var8 = 0;
                    var10[1] = var8;
                    var14 = _closure1_slot13;
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
                    var4 = _closure2_slot6;
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
            var38 = {};
            var44 = var31[var21];
            var44 = var23.bind(var4)(var44);
            var44 = var44.interpolate;
            var38['interpolate'] = var44;
            var38['scrollPosition'] = var32;
            var38['minScrollPosition'] = var43;
            var43 = _closure1_slot13;
            var38['SCALE_FACTOR'] = var43;
            var38['translateOnScale'] = var42;
            var38['isNegativeScrollPosition'] = var39;
            var13['__closure'] = var38;
            var38 = 5882939038632.0;
            var13['__workletHash'] = var38;
            var38 = _closure1_slot30;
            var13['__initData'] = var38;
            var48 = var29.bind(var36)(var13);
            var13 = var31[var21];
            var36 = var23.bind(var4)(var13);
            var29 = var36.useAnimatedStyle;
            var13 = function K() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var2 = new Array(0);
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var4 = {};
                    var5 = _closure2_slot4;
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
            var38 = {};
            var38['isNegativeScrollPosition'] = var39;
            var38['scrollPosition'] = var32;
            var13['__closure'] = var38;
            var38 = 17425045144242.0;
            var13['__workletHash'] = var38;
            var38 = _closure1_slot31;
            var13['__initData'] = var38;
            var36 = var29.bind(var36)(var13);
            var13 = var31[var21];
            var29 = var23.bind(var4)(var13);
            var23 = var29.useAnimatedStyle;
            var13 = function q() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                    var2 = new Array(0);
                    _fun0005_ip = 10; continue _fun0005;
case 7:
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
case 10:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var38 = {};
            var38['isNegativeScrollPosition'] = var39;
            var38['scrollPosition'] = var32;
            var38['coefficient'] = var35;
            var13['__closure'] = var38;
            var38 = 9336428823274.0;
            var13['__workletHash'] = var38;
            var38 = _closure1_slot32;
            var13['__initData'] = var38;
            var13 = var23.bind(var29)(var13);
            var23 = 28;
            var23 = var31[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.bind(var4)();
            var29 = var23.isChatBesideChannelList;
            var23 = 29;
            var23 = var31[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.bind(var4)();
            var24 = var23.width;
            var43 = var23.height;
            var _closure2_slot9 = var43;
            var23 = var14.right;
            var24 = var24 - var23;
            var23 = var14.left;
            var24 = var24 - var23;
            var23 = 0;
            if(!var29) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var23 = 16;
case 11:
            var24 = var24 - var23;
            var44 = var24;
            if(!(var27 > var30)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var23 = var20.Math;
            var20 = var23.min;
            var44 = var20.bind(var23)(var24, var27);
case 13:
            _closure2_slot10 = var44;
            var24 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = var27[var21];
            var29 = var24.bind(var4)(var20);
            var23 = var29.useAnimatedProps;
            var20 = function Z() {
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
            var31 = {};
            var38 = var27[var21];
            var38 = var24.bind(var4)(var38);
            var38 = var38.clamp;
            var31['clamp'] = var38;
            var38 = var27[var21];
            var38 = var24.bind(var4)(var38);
            var38 = var38.interpolate;
            var31['interpolate'] = var38;
            var31['scrollPosition'] = var32;
            var31['windowHeight'] = var43;
            var31['coefficient'] = var35;
            var20['__closure'] = var31;
            var31 = 2402745247838.0;
            var20['__workletHash'] = var31;
            var31 = _closure1_slot33;
            var20['__initData'] = var31;
            var50 = var23.bind(var29)(var20);
            var29 = _closure1_slot4;
            var23 = var29.useState;
            var20 = var32.get;
            var20 = var20.bind(var32)();
            var20 = var20 < var30;
            var23 = var23.bind(var29)(var20);
            var20 = _closure1_slot3;
            var20 = var20.bind(var4)(var23, var33);
            var47 = var20[var30];
            var35 = var20[var40];
            _closure2_slot11 = var35;
            var20 = var27[var21];
            var31 = var24.bind(var4)(var20);
            var29 = var31.useAnimatedReaction;
            var23 = function $() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var32;
            var23['__closure'] = var20;
            var20 = 1515709080541.0;
            var23['__workletHash'] = var20;
            var20 = _closure1_slot34;
            var23['__initData'] = var20;
            var20 = function Q(arg1, arg2) {
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
                    var2 = _closure2_slot11;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 15:
                    return var1;
                }
            };
            var32 = {};
            var38 = var27[var21];
            var38 = var24.bind(var4)(var38);
            var38 = var38.runOnJS;
            var32['runOnJS'] = var38;
            var32['setShowBlur'] = var35;
            var20['__closure'] = var32;
            var32 = 11057160578223.0;
            var20['__workletHash'] = var32;
            var32 = _closure1_slot35;
            var20['__initData'] = var32;
            var20 = var29.bind(var31)(var23, var20);
            var29 = _closure1_slot4;
            var23 = var29.useState;
            var20 = false;
            var23 = var23.bind(var29)(var20);
            var20 = _closure1_slot3;
            var23 = var20.bind(var4)(var23, var33);
            var20 = var23[var30];
            _closure2_slot12 = var20;
            var23 = var23[var40];
            _closure2_slot13 = var23;
            var23 = 30;
            var23 = var27[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.GifAutoPlay;
            var23 = var24.getSetting;
            var53 = var23.bind(var24)();
            if(var53) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var53 = var20;
case 17:
            var20 = var26 == var12;
            var29 = undefined;
            if(var20) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var23 = var12.getBannerURL;
            var20 = {};
            var20['canAnimate'] = var53;
            var20['size'] = var44;
            var29 = var23.bind(var12)(var20);
case 19:
            var20 = var26 != var29;
            var56 = null;
            if(!var20) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 31;
            var20 = var24[var20];
            var23 = var23.bind(var4)(var20);
            var20 = var23.makeSource;
            var56 = var20.bind(var23)(var29);
case 21:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 31;
            var20 = var24[var20];
            var27 = var23.bind(var4)(var20);
            var20 = var27.isAnimatedImageURL;
            var45 = var20.bind(var27)(var29);
            var39 = 32;
            var20 = var24[var39];
            var20 = var23.bind(var4)(var20);
            var31 = var20.intl;
            var29 = var31.formatToPlainString;
            var20 = var24[var39];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var27 = var20.gVn4uJ;
            var20 = {};
            var32 = var6.username;
            var20['username'] = var32;
            var57 = var29.bind(var31)(var27, var20);
            var20 = 33;
            var20 = var24[var20];
            var24 = var23.bind(var4)(var20);
            var23 = var24.useUserProfileBannerBackgroundColor;
            var20 = {};
            var20['user'] = var6;
            var20['displayProfile'] = var12;
            var52 = var23.bind(var24)(var20);
            var35 = var26 == var12;
            if(var35) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var20 = var12.isLoaded;
            var35 = !var20;
case 23:
            var23 = _closure1_slot1;
            var27 = _closure1_slot2;
            var20 = 34;
            var20 = var27[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.bind(var4)();
            var31 = _closure1_slot4;
            var29 = var31.useMemo;
            var24 = new Array(2);
            var24[0] = var17;
            var24[1] = var44;
            var23 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['height'] = var2;
                return var1;
            };
            var59 = var29.bind(var31)(var23, var24);
            var24 = _closure1_slot0;
            var23 = 35;
            var23 = var27[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.useYouBarEnabled;
            var42 = 'YouScreen';
            var24 = var23.bind(var24)(var42);
            var23 = _closure1_slot12;
            var23 = var23.bind(var4)(var42);
            var27 = var20;
            if(var27) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var27 = var24;
case 25:
            if(var20) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var23) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var29 = var14.top;
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var29 = _closure1_slot15;
case 30:
            var14 = var26 == var12;
            var38 = undefined;
            if(var14) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = var12.profileEffect;
            var20 = var26 == var14;
            var38 = undefined;
            if(var20) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var38 = var14.skuId;
case 31:
            var20 = var26 != var38;
            var24 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var28];
            var31 = var24.bind(var4)(var14);
            var28 = var31.useStateFromStores;
            var14 = _closure1_slot7;
            var24 = new Array(1);
            var24[0] = var14;
            var14 = function() {
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
            var51 = var28.bind(var31)(var24, var14);
            _closure2_slot14 = var51;
            var14 = var26 == var51;
            var28 = undefined;
            if(var14) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var28 = var51.dismissibleContent;
case 34:
            var31 = _closure1_slot0;
            var14 = _closure1_slot2;
            var55 = 37;
            var24 = var14[var55];
            var24 = var31.bind(var4)(var24);
            var24 = var24.DismissibleContent;
            var24 = var24.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var28 = var28 === var24;
            _closure2_slot15 = var28;
            var24 = 38;
            var24 = var14[var24];
            var32 = var31.bind(var4)(var24);
            var24 = var32.useMobileWishlistOwnerExperiment;
            var24 = var24.bind(var32)(var42);
            _closure2_slot16 = var24;
            var49 = _closure1_slot4;
            var46 = var49.useMemo;
            var32 = var24.enabled;
            var42 = new Array(1);
            var42[0] = var32;
            var32 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0007_ip = 8; continue _fun0007 }
case 36:
                    var1 = new Array(0);
                    _fun0007_ip = 37; continue _fun0007;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 37;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 37:
                    return var1;
                }
            };
            var32 = var46.bind(var49)(var32, var42);
            var42 = 39;
            var14 = var14[var42];
            var31 = var31.bind(var4)(var14);
            var14 = var31.useSelectedDismissibleContent;
            var31 = var14.bind(var31)(var32);
            var14 = _closure1_slot3;
            var31 = var14.bind(var4)(var31, var33);
            var14 = var31[var30];
            var61 = var31[var40];
            var32 = var24.enabled;
            if(!var32) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var32 = var26 != var14;
case 38:
            _closure2_slot17 = var32;
            var46 = _closure1_slot4;
            var31 = var46.useMemo;
            var24 = new Array(3);
            var24[0] = var32;
            var24[1] = var28;
            var24[2] = var51;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 7:
                    var1 = _closure2_slot14;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0008_ip = 43; continue _fun0008;
case 40:
                    var1 = new Array(0);
case 43:
                    return var1;
                }
            };
            var49 = var31.bind(var46)(var14, var24);
            var46 = _closure1_slot4;
            var31 = var46.useMemo;
            var24 = new Array(2);
            var24[0] = var32;
            var24[1] = var51;
            var14 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 16:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var1 = _closure2_slot14;
                    var5 = var1.type;
case 45:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 41;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot14;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var4 = var5;
case 49:
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
case 47:
                    _fun0009_ip = 51; continue _fun0009;
case 44:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 32;
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
                        var1 = 40;
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
case 51:
                    return var1;
                }
            };
            var58 = var31.bind(var46)(var14, var24);
            _closure2_slot18 = var58;
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = var24[var42];
            var46 = var31.bind(var4)(var14);
            var14 = var46.useSelectedDismissibleContent;
            var46 = var14.bind(var46)(var49);
            var14 = _closure1_slot3;
            var14 = var14.bind(var4)(var46, var33);
            var46 = var14[var30];
            _closure2_slot19 = var46;
            var14 = var14[var40];
            var24 = var24[var42];
            var49 = var31.bind(var4)(var24);
            var42 = var49.useSelectedVersionedDismissibleContent;
            var31 = null;
            if(var32) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var31 = null;
            if(!var28) { _fun0001_ip = 52; continue _fun0001 }
case 54:
            var24 = var26 == var51;
            var54 = undefined;
            if(var24) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var54 = var51.type;
case 55:
            var60 = _closure1_slot0;
            var62 = _closure1_slot2;
            var24 = 41;
            var24 = var62[var24];
            var24 = var60.bind(var4)(var24);
            var24 = var24.CollectiblesMarketingType;
            var24 = var24.COACHTIP;
            var31 = null;
            if(!(var54 === var24)) { _fun0001_ip = 52; continue _fun0001 }
case 57:
            var54 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var55];
            var24 = var54.bind(var4)(var24);
            var24 = var24.DismissibleContent;
            var31 = var24.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 52:
            var24 = var26 == var51;
            var54 = undefined;
            if(var24) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var54 = var51.version;
case 58:
            var55 = var26 != var54;
            var24 = 0;
            if(!var55) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var24 = var54;
case 60:
            var31 = var42.bind(var49)(var31, var24);
            var24 = _closure1_slot3;
            var24 = var24.bind(var4)(var31, var33);
            var30 = var24[var30];
            _closure2_slot20 = var30;
            var24 = var24[var40];
            var42 = _closure1_slot4;
            var33 = var42.useMemo;
            var31 = new Array(5);
            var31[0] = var32;
            var31[1] = var58;
            var54 = var26 == var51;
            var49 = undefined;
            if(var54) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var49 = var51.type;
case 62:
            var31[2] = var49;
            var31[3] = var46;
            var31[4] = var30;
            var30 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot17;
                    var2 = !var1;
                    var1 = !var2;
                    if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var2 = _closure2_slot19;
                    var6 = null;
                    var2 = var6 != var2;
                    if(var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure2_slot20;
                    var2 = var6 != var3;
case 66:
                    if(!var2) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var3 = _closure2_slot18;
                    var3 = var6 != var3;
                    if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 43:
                    var5 = _closure2_slot14;
                    var6 = var6 == var5;
                    var7 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var4 = _closure2_slot14;
                    var5 = var4.type;
case 71:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 41;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.CollectiblesMarketingType;
                    var4 = var4.COACHTIP;
                    var3 = var5 === var4;
case 70:
                    var2 = var3;
case 68:
                    var1 = var2;
case 64:
                    return var1;
                }
            };
            var60 = var33.bind(var42)(var30, var31);
            var31 = _closure1_slot4;
            var30 = var31.useRef;
            var31 = var30.bind(var31)(var26);
            var33 = _closure1_slot4;
            var30 = var33.useRef;
            var30 = var30.bind(var33)(var26);
            if(var32) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            if(!var28) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var14 = var24;
case 75:
            var61 = var14;
case 73:
            _closure2_slot21 = var61;
            var32 = _closure1_slot4;
            var28 = var32.useCallback;
            var24 = new Array(2);
            var24[0] = var61;
            var24[1] = var3;
            var14 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot21;
                var2 = _closure1_slot22;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var28.bind(var32)(var14, var24);
            var24 = {};
            var24['user'] = var6;
            var24['userTheme'] = var9;
            var24['scrollViewRef'] = var25;
            var14 = var41.content;
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
            var8 = 42;
            var2 = var14[var8];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var7 = 'YOU_SCREEN';
            var2['layout'] = var7;
            var6 = var6.id;
            var2['userId'] = var6;
            var13 = var3.bind(var5)(var2);
            var46 = var26 != var58;
            var55 = 43;
            var2 = var14[var55];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useYouSettingsCoachmark;
            var2 = {};
            var2['disabled'] = var46;
            var54 = var3.bind(var5)(var2);
            _closure2_slot22 = var54;
            var42 = var26 != var54;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var54;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot22;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 65:
                    var3 = _closure2_slot22;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 46:
                    if(var2) { _fun0011_ip = 40; continue _fun0011 }
case 77:
                    var3 = _closure2_slot22;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 40:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var33 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var49 = 44;
            var1 = var14[var49];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot23;
            var5 = 45;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var16;
            var5['primaryColor'] = var15;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot23;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var26 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var11 = var12.fetchStartedAt;
case 78:
            var8['fetchStartedAt'] = var11;
            var13 = var26 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var11 = var12.fetchEndedAt;
case 80:
            var8['fetchEndedAt'] = var11;
            var13 = var26 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var11 = var12.isLoaded;
case 82:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot24;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 46;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var15 = var41.container;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = null;
            if(!var23) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var16 = {};
            var51 = _closure1_slot1;
            var62 = _closure1_slot2;
            var28 = 19;
            var63 = var62[var28];
            var63 = var51.bind(var4)(var63);
            var63 = var63.radii;
            var63 = var63.xl;
            var16['borderTopLeftRadius'] = var63;
            var28 = var62[var28];
            var28 = var51.bind(var4)(var28);
            var28 = var28.radii;
            var28 = var28.xl;
            var16['borderTopRightRadius'] = var28;
            var15 = var16;
case 84:
            var14[1] = var15;
            var11['style'] = var14;
            var14 = _closure1_slot18;
            var11['nativeID'] = var14;
            var16 = _closure1_slot23;
            var15 = _closure1_slot1;
            var28 = _closure1_slot2;
            var14 = 47;
            var14 = var28[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['gradientHeight'] = var43;
            var14['bannerHeight'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var15 = var46;
            if(var46) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var15 = var42;
case 86:
            if(!var15) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var28 = _closure1_slot24;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var49];
            var16 = var17.bind(var4)(var16);
            var17 = var16.LayerScope;
            var16 = {};
            var16['zIndex'] = var40;
            if(!var46) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var51 = _closure1_slot23;
            var49 = _closure1_slot1;
            var62 = _closure1_slot2;
            var40 = 48;
            var40 = var62[var40];
            var49 = var49.bind(var4)(var40);
            var40 = {};
            var40['buttonRef'] = var31;
            var40['markAsDismissed'] = var61;
            var40['visible'] = var60;
            var60 = var58.title;
            var40['title'] = var60;
            var60 = var58.description;
            var40['description'] = var60;
            var60 = var58.avatarSrc;
            var40['avatarSrc'] = var60;
            var60 = var58.decorationAsset;
            var40['decorationAsset'] = var60;
            var58 = var58.renderImgComponent;
            var40['renderImgComponent'] = var58;
            var40['navigateToShop'] = var32;
            var46 = var51.bind(var4)(var49, var40);
case 90:
            var40 = new Array(2);
            var40[0] = var46;
            if(!var42) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var51 = _closure1_slot23;
            var49 = _closure1_slot1;
            var46 = _closure1_slot2;
            var46 = var46[var55];
            var49 = var49.bind(var4)(var46);
            var46 = {};
            var46['buttonRef'] = var30;
            var65 = var54.props;
            var66 = var46;
            var54 = copyDataProperties(var66, var65);
            var42 = var51.bind(var4)(var49, var46);
case 92:
            var40[1] = var42;
            var16['children'] = var40;
            var15 = var28.bind(var4)(var17, var16);
case 88:
            var14[1] = var15;
            var17 = _closure1_slot24;
            var16 = _closure1_slot27;
            var15 = {};
            var15['ref'] = var25;
            var15['onScroll'] = var22;
            var15['onLayout'] = var18;
            var18 = _closure1_slot19;
            var15['scrollEventThrottle'] = var18;
            var22 = var41.scrollView;
            var18 = new Array(2);
            var18[0] = var22;
            var22 = null;
            if(!var23) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var23 = {};
            var28 = _closure1_slot1;
            var40 = _closure1_slot2;
            var25 = 19;
            var42 = var40[var25];
            var42 = var28.bind(var4)(var42);
            var42 = var42.radii;
            var42 = var42.xl;
            var23['borderTopLeftRadius'] = var42;
            var25 = var40[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.radii;
            var25 = var25.xl;
            var23['borderTopRightRadius'] = var25;
            var22 = var23;
case 94:
            var18[1] = var22;
            var15['style'] = var18;
            var23 = _closure1_slot24;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var28 = var41.banner;
            var25 = new Array(2);
            var25[0] = var28;
            var25[1] = var36;
            var18['style'] = var25;
            var28 = null;
            if(!var27) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var28 = null;
            if(var20) { _fun0001_ip = 96; continue _fun0001 }
case 98:
            var42 = _closure1_slot23;
            var49 = _closure1_slot0;
            var54 = _closure1_slot2;
            var25 = 49;
            var25 = var54[var25];
            var25 = var49.bind(var4)(var25);
            var40 = var25.PressableOpacity;
            var25 = {};
            var51 = var41.backButton;
            var46 = new Array(2);
            var46[0] = var51;
            var51 = {};
            var51['top'] = var29;
            var46[1] = var51;
            var25['style'] = var46;
            var46 = var54[var39];
            var46 = var49.bind(var4)(var46);
            var55 = var46.intl;
            var51 = var55.string;
            var46 = var54[var39];
            var46 = var49.bind(var4)(var46);
            var46 = var46.t;
            var46 = var46.13/7kX;
            var46 = var51.bind(var55)(var46);
            var25['accessibilityLabel'] = var46;
            var46 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 99; continue _fun0012;
case 101:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 99:
                    return var1;
                }
            };
            var25['onPress'] = var46;
            var51 = _closure1_slot23;
            var46 = 51;
            var46 = var54[var46];
            var46 = var49.bind(var4)(var46);
            var49 = var46.DownArrowIconWithBadgeOnSide;
            var46 = {};
            var46 = var51.bind(var4)(var49, var46);
            var25['children'] = var46;
            var28 = var42.bind(var4)(var40, var25);
case 96:
            var25 = new Array(3);
            var25[0] = var28;
            var28 = !var20;
            if(var20) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var46 = _closure1_slot23;
            var42 = _closure1_slot1;
            var49 = _closure1_slot2;
            var40 = 52;
            var40 = var49[var40];
            var42 = var42.bind(var4)(var40);
            var40 = {};
            var40['isLoading'] = var35;
            var40['navigateToPremium'] = var34;
            var40['navigateToSettings'] = var33;
            var40['navigateToShop'] = var32;
            var40['shopButtonRef'] = var31;
            var40['settingsButtonRef'] = var30;
            var40['paddingTop'] = var29;
            var28 = var46.bind(var4)(var42, var40);
case 103:
            var25[1] = var28;
            var42 = _closure1_slot24;
            var40 = _closure1_slot1;
            var54 = _closure1_slot2;
            var28 = var54[var21];
            var28 = var40.bind(var4)(var28);
            var40 = var28.View;
            var28 = {};
            var49 = {};
            var51 = _closure1_slot0;
            var46 = 53;
            var46 = var54[var46];
            var51 = var51.bind(var4)(var46);
            var46 = var51.int2hex;
            var46 = var46.bind(var51)(var52);
            var49['backgroundColor'] = var46;
            var46 = new Array(3);
            var46[0] = var49;
            var46[1] = var59;
            var46[2] = var48;
            var28['style'] = var46;
            var46 = var26 != var56;
            if(!var46) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            if(var45) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var49 = _closure1_slot23;
            var48 = _closure1_slot1;
            var51 = _closure1_slot2;
            var45 = 40;
            var45 = var51[var45];
            var48 = var48.bind(var4)(var45);
            var45 = {};
            var45['style'] = var59;
            var51 = 'image';
            var45['accessibilityRole'] = var51;
            var45['accessibilityLabel'] = var57;
            var45['source'] = var56;
            var45 = var49.bind(var4)(var48, var45);
            _fun0001_ip = 109; continue _fun0001;
case 107:
            var51 = _closure1_slot24;
            var61 = _closure1_slot0;
            var60 = _closure1_slot2;
            var48 = 49;
            var48 = var60[var48];
            var48 = var61.bind(var4)(var48);
            var49 = var48.PressableOpacity;
            var48 = {};
            var52 = function onPress() {
                var3 = _closure2_slot13;
                var1 = _closure2_slot12;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var48['onPress'] = var52;
            var58 = 'image';
            var48['accessibilityRole'] = var58;
            var52 = var60[var39];
            var52 = var61.bind(var4)(var52);
            var55 = var52.intl;
            var54 = var55.string;
            var52 = var60[var39];
            var52 = var61.bind(var4)(var52);
            var52 = var52.t;
            var52 = var52.3fzj/l;
            var52 = var54.bind(var55)(var52);
            var48['accessibilityLabel'] = var52;
            var55 = _closure1_slot23;
            var54 = _closure1_slot1;
            var52 = 40;
            var52 = var60[var52];
            var54 = var54.bind(var4)(var52);
            var52 = {};
            var52['style'] = var59;
            var52['accessibilityRole'] = var58;
            var52['accessibilityLabel'] = var57;
            var52['source'] = var56;
            var54 = var55.bind(var4)(var54, var52);
            var52 = new Array(2);
            var52[0] = var54;
            var53 = !var53;
            if(!var53) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var56 = _closure1_slot23;
            var60 = _closure1_slot0;
            var57 = _closure1_slot2;
            var54 = 54;
            var54 = var57[var54];
            var54 = var60.bind(var4)(var54);
            var55 = var54.Caption;
            var54 = {};
            var58 = var57[var39];
            var58 = var60.bind(var4)(var58);
            var59 = var58.intl;
            var58 = var59.string;
            var57 = var57[var39];
            var57 = var60.bind(var4)(var57);
            var57 = var57.t;
            var57 = var57.I5gL2H;
            var57 = var58.bind(var59)(var57);
            var54['label'] = var57;
            var58 = var41.gifTag;
            var57 = new Array(2);
            var57[0] = var58;
            var58 = {};
            var58['top'] = var29;
            var57[1] = var58;
            var54['style'] = var57;
            var57 = var41.gifTagText;
            var54['textStyle'] = var57;
            var53 = var56.bind(var4)(var55, var54);
case 110:
            var52[1] = var53;
            var48['children'] = var52;
            var45 = var51.bind(var4)(var49, var48);
case 109:
            var46 = var45;
case 105:
            var45 = new Array(2);
            var45[0] = var46;
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var46 = 55;
            var46 = var49[var46];
            var48 = var48.bind(var4)(var46);
            var46 = var48.isIOS;
            var46 = var46.bind(var48)();
            if(!var46) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var46 = var47;
case 112:
            if(!var46) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var49 = _closure1_slot23;
            var48 = _closure1_slot25;
            var47 = {};
            var47['animatedProps'] = var50;
            var50 = _closure1_slot5;
            var50 = var50.absoluteFillObject;
            var47['style'] = var50;
            var46 = var49.bind(var4)(var48, var47);
case 114:
            var45[1] = var46;
            var28['children'] = var45;
            var28 = var42.bind(var4)(var40, var28);
            var25[2] = var28;
            var18['children'] = var25;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var23 = _closure1_slot24;
            var28 = _closure1_slot1;
            var40 = _closure1_slot2;
            var21 = var40[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var25 = 'box-none';
            var21['pointerEvents'] = var25;
            var42 = var41.profileEffectLayer;
            var25 = new Array(3);
            var25[0] = var42;
            var42 = {};
            var42['width'] = var44;
            var42['height'] = var43;
            var25[1] = var42;
            var25[2] = var36;
            var21['style'] = var25;
            var36 = _closure1_slot23;
            var25 = 56;
            var25 = var40[var25];
            var28 = var28.bind(var4)(var25);
            var25 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['skuId'] = var38;
            var28 = var36.bind(var4)(var28, var25);
            var25 = new Array(3);
            var25[0] = var28;
            var26 = null;
            if(!var27) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            var36 = _closure1_slot23;
            var38 = _closure1_slot0;
            var40 = _closure1_slot2;
            var27 = 49;
            var27 = var40[var27];
            var27 = var38.bind(var4)(var27);
            var28 = var27.PressableOpacity;
            var27 = {};
            var42 = var41.backButton;
            var41 = new Array(2);
            var41[0] = var42;
            var42 = {};
            var42['top'] = var29;
            var41[1] = var42;
            var27['style'] = var41;
            var41 = var40[var39];
            var41 = var38.bind(var4)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var39 = var40[var39];
            var39 = var38.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.13/7kX;
            var39 = var41.bind(var42)(var39);
            var27['accessibilityLabel'] = var39;
            var37 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 99; continue _fun0013;
case 101:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 99:
                    return var1;
                }
            };
            var27['onPress'] = var37;
            var39 = _closure1_slot23;
            var37 = 51;
            var37 = var40[var37];
            var37 = var38.bind(var4)(var37);
            var38 = var37.DownArrowIconWithBadgeOnSide;
            var37 = {};
            var37 = var39.bind(var4)(var38, var37);
            var27['children'] = var37;
            var26 = var36.bind(var4)(var28, var27);
case 118:
            var25[1] = var26;
            var28 = _closure1_slot23;
            var27 = _closure1_slot1;
            var36 = _closure1_slot2;
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
            var25[2] = var26;
            var21['children'] = var25;
            var20 = var23.bind(var4)(var22, var21);
case 116:
            var18[1] = var20;
            var23 = _closure1_slot23;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 57;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var66 = var20;
            var65 = var24;
            var24 = copyDataProperties(var66, var65);
            var20 = var23.bind(var4)(var21, var20);
            var18[2] = var20;
            var21 = _closure1_slot23;
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
    var _closure1_slot37 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.StyleSheet;
    var _closure1_slot5 = var10;
    var10 = var5.ScrollView;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useYouBarIOSModalPresentation;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.SCALE_FACTOR;
    var _closure1_slot13 = var11;
    var11 = var5.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot14 = var11;
    var11 = var5.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot15 = var11;
    var11 = var5.YOU_AVATAR_SIZE;
    var _closure1_slot16 = var11;
    var11 = var5.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot17 = var11;
    var11 = var5.YOU_SCREEN_ID;
    var _closure1_slot18 = var11;
    var5 = var5.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserSettingsSections;
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot21 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot22 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot23 = var11;
    var5 = var5.jsxs;
    var _closure1_slot24 = var5;
    var5 = 15;
    var11 = var7[var5];
    var13 = var8.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 16;
    var11 = var7[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot25 = var11;
    var11 = 17;
    var11 = var7[var11];
    var13 = var6.bind(var1)(var11);
    var12 = var13.createStyles;
    var11 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var3 = 1;
        var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative', 'overflow': 'hidden'};
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
        var2 = {'position': 'absolute', 'marginTop': null, 'left': null, 'zIndex': 99, 'alignItems': 'center', 'justifyContent': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['marginTop'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['left'] = var3;
        var1['backButton'] = var2;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot26 = var11;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var10);
    var _closure1_slot27 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var5['code'] = var8;
    var _closure1_slot28 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var5['code'] = var8;
    var _closure1_slot29 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot30 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot31 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot32 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var5['code'] = var8;
    var _closure1_slot33 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var5['code'] = var8;
    var _closure1_slot34 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var5['code'] = var8;
    var _closure1_slot35 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 27;
            var8 = var1[var4];
            var11 = var7.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var10.bind(var11)(var9, var8);
            var _closure2_slot0 = var13;
            var1 = var1[var4];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var10 = var8.bind(var9)(var7, var1);
            var1 = null;
            var7 = var1 == var13;
            var9 = undefined;
            if(var7) { _fun0014_ip = 120; continue _fun0014 }
case 121:
            var9 = var13.id;
case 120:
            _closure2_slot1 = var9;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 100; continue _fun0015 }
case 122:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot16;
                    var1 = var3.bind(var4)(var5, var2);
case 100:
                    return var1;
                }
            };
            var15 = var11.bind(var12)(var7, var8);
            _closure2_slot2 = var15;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 38;
            var11 = var8[var11];
            var14 = var7.bind(var5)(var11);
            var12 = var14.useMobileWishlistOwnerExperiment;
            var11 = 'YouScreen';
            var11 = var12.bind(var14)(var11);
            _closure2_slot3 = var11;
            var14 = _closure1_slot4;
            var12 = var14.useLayoutEffect;
            var11 = new Array(3);
            var11[0] = var9;
            var11[1] = var15;
            var11[2] = var10;
            var10 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0016_ip = 123; continue _fun0016 }
case 65:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 123:
                    if(!var2) { _fun0016_ip = 124; continue _fun0016 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 59;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 124:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var10, var11);
            var4 = var8[var4];
            var12 = var7.bind(var5)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 102; continue _fun0017 }
case 3:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 102; continue _fun0017 }
case 125:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 102:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10, var4);
            var4 = 60;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useFetchWishlist;
            var4 = {};
            var4['wishlistId'] = var10;
            var4['userId'] = var9;
            var4 = var7.bind(var8)(var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                    if(!(var3 != var4)) { _fun0018_ip = 126; continue _fun0018 }
case 100:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0018_ip = 126; continue _fun0018 }
case 102:
                    var5 = _closure1_slot10;
                    var3 = var5.setState;
                    var2 = {'query': '', 'isActive': false};
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 126:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var12 = var8.bind(var9)(var7, var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
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
                    if(!(var3 != var5)) { _fun0019_ip = 127; continue _fun0019 }
case 100:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0019_ip = 127; continue _fun0019 }
case 102:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot20;
                    var2 = var2.PREMIUM;
                    var3['screen'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 127:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var11 = var8.bind(var9)(var7, var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
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
            var4 = new Array(0);
            var7 = var8.bind(var9)(var7, var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                    if(!(var3 != var5)) { _fun0020_ip = 128; continue _fun0020 }
case 100:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0020_ip = 128; continue _fun0020 }
case 102:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot20;
                    var2 = var2.PROFILE_CUSTOMIZATION;
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = arg1;
                    var2['autoFocusElement'] = var6;
                    var3['params'] = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
case 128:
                    var1 = false;
                    return var1;
                }
            };
            var4 = new Array(0);
            var10 = var9.bind(var10)(var8, var4);
            var14 = _closure1_slot4;
            var9 = var14.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 63;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
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
            var9 = var9.bind(var14)(var8, var4);
            var14 = _closure1_slot4;
            var8 = var14.useCallback;
            var4 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
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
                    if(!(var2 != var4)) { _fun0021_ip = 101; continue _fun0021 }
case 100:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0021_ip = 101; continue _fun0021 }
case 102:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 101:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var8.bind(var14)(var4, var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0014_ip = 129; continue _fun0014 }
case 130:
            var4 = _closure1_slot23;
            var3 = _closure1_slot37;
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
case 129:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot36 = var5;
    var5 = 66;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedYouScreen(arg1) {
        var1 = arg1;
        var5 = var1.initialTab;
        var6 = _closure1_slot4;
        var4 = var6.useCallback;
        var3 = function() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
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
                if(!(var3 != var4)) { _fun0022_ip = 126; continue _fun0022 }
case 100:
                var3 = var4.isReady;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0022_ip = 126; continue _fun0022 }
case 102:
                var5 = _closure1_slot10;
                var3 = var5.setState;
                var2 = {'query': '', 'isActive': false};
                var2 = var3.bind(var5)(var2);
                var3 = var4.navigate;
                var2 = 'settings';
                var2 = var3.bind(var4)(var2);
                return var1;
case 126:
                var1 = false;
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var _closure2_slot0 = var2;
        var6 = _closure1_slot4;
        var4 = var6.useLayoutEffect;
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
        var2 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 65;
        var2 = var4[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var3 = var6.useScrollToTop;
        var8 = _closure1_slot4;
        var7 = var8.useRef;
        var2 = {};
        var9 = function scrollToTop() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2['scrollToTop'] = var9;
        var2 = var7.bind(var8)(var2);
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot23;
        var2 = _closure1_slot36;
        var1 = {};
        var1['initialTab'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['UnconnectedYouScreen'] = var2;
    return var1;
})();