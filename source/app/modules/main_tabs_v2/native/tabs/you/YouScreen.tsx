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
            var34 = var1.user;
            var9 = var1.navigateToSettings;
            var _closure2_slot0 = var9;
            var26 = var1.navigateToPremium;
            var25 = var1.navigateToShop;
            var _closure2_slot1 = var25;
            var29 = var1.navigateToProfileCustomization;
            var28 = var1.navigateToCustomStatus;
            var27 = var1.navigateToFriends;
            var24 = var1.initialTab;
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
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 20;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var45 = var1.bind(var4)();
            var _closure2_slot2 = var45;
            var1 = _closure1_slot16;
            var40 = var45 * var1;
            var _closure2_slot3 = var40;
            var13 = _closure1_slot0;
            var1 = 21;
            var1 = var16[var1];
            var2 = var13.bind(var4)(var1);
            var1 = var2.useYouBarEnabled;
            var7 = 'YouScreen';
            var8 = var1.bind(var2)(var7);
            var1 = _closure1_slot11;
            var3 = var1.bind(var4)(var7);
            var1 = _closure1_slot28;
            var30 = var1.bind(var4)(var45, var3);
            var1 = 22;
            var1 = var16[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var5 = 23;
            var6 = var16[var5];
            var6 = var13.bind(var4)(var6);
            var6 = var6.ImpressionTypes;
            var6 = var6.VIEW;
            var1['type'] = var6;
            var5 = var16[var5];
            var5 = var13.bind(var4)(var5);
            var5 = var5.ImpressionNames;
            var5 = var5.USER_YOU_SCREEN;
            var1['name'] = var5;
            var1 = var2.bind(var4)(var1);
            var1 = 24;
            var1 = var16[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var34.id;
            var12 = var2.bind(var4)(var1);
            var1 = 25;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.bind(var4)();
            var _closure2_slot4 = var2;
            var1 = 26;
            var1 = var16[var1];
            var5 = var11.bind(var4)(var1);
            var1 = {};
            var1['user'] = var34;
            var1['displayProfile'] = var12;
            var1 = var5.bind(var4)(var1);
            var17 = var1.theme;
            var14 = var1.primaryColor;
            var10 = var1.secondaryColor;
            var1 = 27;
            var1 = var16[var1];
            var1 = var11.bind(var4)(var1);
            var33 = var1.bind(var4)();
            var5 = _closure1_slot4;
            var1 = var5.useRef;
            var37 = null;
            var32 = var1.bind(var5)(var37);
            var21 = 15;
            var1 = var16[var21];
            var6 = var13.bind(var4)(var1);
            var5 = var6.useSharedValue;
            var1 = 0;
            var20 = var5.bind(var6)(var1);
            var _closure2_slot5 = var20;
            var5 = var16[var21];
            var15 = var13.bind(var4)(var5);
            var6 = var15.useAnimatedScrollHandler;
            var5 = function K(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var18 = {};
            var18['scrollPosition'] = var20;
            var5['__closure'] = var18;
            var18 = 952837799380.0;
            var5['__workletHash'] = var18;
            var18 = _closure1_slot30;
            var5['__initData'] = var18;
            var35 = var6.bind(var15)(var5);
            var18 = _closure1_slot4;
            var15 = var18.useMemo;
            var6 = new Array(1);
            var6[0] = var45;
            var5 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var42 = var15.bind(var18)(var5, var6);
            var _closure2_slot6 = var42;
            var5 = var16[var21];
            var15 = var13.bind(var4)(var5);
            var6 = var15.useDerivedValue;
            var5 = function Z() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var18 = {};
            var18['scrollPosition'] = var20;
            var5['__closure'] = var18;
            var18 = 588222792165.0;
            var5['__workletHash'] = var18;
            var18 = _closure1_slot31;
            var5['__initData'] = var18;
            var38 = var6.bind(var15)(var5);
            var _closure2_slot7 = var38;
            var5 = 28;
            var5 = var16[var5];
            var22 = var13.bind(var4)(var5);
            var18 = var22.useStateFromStores;
            var5 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var5;
            var6 = function() {
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
            var5 = new Array(0);
            var36 = var18.bind(var22)(var15, var6, var5);
            var _closure2_slot8 = var36;
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var15 = var5.bind(var6)(var1);
            var5 = _closure1_slot3;
            var6 = 2;
            var5 = var5.bind(var4)(var15, var6);
            var15 = var5[var1];
            var22 = 1;
            var5 = var5[var22];
            var _closure2_slot9 = var5;
            var31 = _closure1_slot4;
            var23 = var31.useCallback;
            var18 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var5 = new Array(0);
            var23 = var23.bind(var31)(var18, var5);
            var5 = var16[var21];
            var31 = var13.bind(var4)(var5);
            var18 = var31.useAnimatedStyle;
            var5 = function q() {
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
            var39 = {};
            var43 = var16[var21];
            var43 = var13.bind(var4)(var43);
            var43 = var43.interpolate;
            var39['interpolate'] = var43;
            var39['scrollPosition'] = var20;
            var39['minScrollPosition'] = var42;
            var42 = _closure1_slot12;
            var39['SCALE_FACTOR'] = var42;
            var39['translateOnScale'] = var40;
            var39['isNegativeScrollPosition'] = var38;
            var5['__closure'] = var39;
            var39 = 5882939038632.0;
            var5['__workletHash'] = var39;
            var39 = _closure1_slot32;
            var5['__initData'] = var39;
            var53 = var18.bind(var31)(var5);
            var5 = var16[var21];
            var31 = var13.bind(var4)(var5);
            var18 = var31.useAnimatedStyle;
            var5 = function Q() {
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
            var39 = {};
            var39['isNegativeScrollPosition'] = var38;
            var39['scrollPosition'] = var20;
            var5['__closure'] = var39;
            var39 = 17425045144242.0;
            var5['__workletHash'] = var39;
            var39 = _closure1_slot33;
            var5['__initData'] = var39;
            var40 = var18.bind(var31)(var5);
            var5 = var16[var21];
            var18 = var13.bind(var4)(var5);
            var13 = var18.useAnimatedStyle;
            var5 = function $() {
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
            var31 = {};
            var31['isNegativeScrollPosition'] = var38;
            var31['scrollPosition'] = var20;
            var31['coefficient'] = var36;
            var5['__closure'] = var31;
            var31 = 9336428823274.0;
            var5['__workletHash'] = var31;
            var31 = _closure1_slot34;
            var5['__initData'] = var31;
            var31 = var13.bind(var18)(var5);
            var5 = 29;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var13 = var5.isChatBesideChannelList;
            var5 = 30;
            var5 = var16[var5];
            var5 = var11.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var11 = var5.width;
            var46 = var5.height;
            var _closure2_slot10 = var46;
            var5 = var2.right;
            var11 = var11 - var5;
            var5 = var2.left;
            var11 = var11 - var5;
            var5 = 0;
            if(!var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = 16;
case 11:
            var13 = var11 - var5;
            var48 = var13;
            if(!(var15 > var1)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = global;
            var11 = var5.Math;
            var5 = var11.min;
            var48 = var5.bind(var11)(var13, var15);
case 13:
            _closure2_slot11 = var48;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = var15[var21];
            var16 = var13.bind(var4)(var5);
            var11 = var16.useAnimatedProps;
            var5 = function ee() {
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
            var18 = {};
            var38 = var15[var21];
            var38 = var13.bind(var4)(var38);
            var38 = var38.clamp;
            var18['clamp'] = var38;
            var38 = var15[var21];
            var38 = var13.bind(var4)(var38);
            var38 = var38.interpolate;
            var18['interpolate'] = var38;
            var18['scrollPosition'] = var20;
            var18['windowHeight'] = var46;
            var18['coefficient'] = var36;
            var5['__closure'] = var18;
            var18 = 2402745247838.0;
            var5['__workletHash'] = var18;
            var18 = _closure1_slot35;
            var5['__initData'] = var18;
            var55 = var11.bind(var16)(var5);
            var16 = _closure1_slot4;
            var11 = var16.useState;
            var5 = var20.get;
            var5 = var5.bind(var20)();
            var5 = var5 < var1;
            var11 = var11.bind(var16)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var11, var6);
            var52 = var5[var1];
            var36 = var5[var22];
            _closure2_slot12 = var36;
            var5 = var15[var21];
            var18 = var13.bind(var4)(var5);
            var16 = var18.useAnimatedReaction;
            var11 = function oe() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var5 = {};
            var5['scrollPosition'] = var20;
            var11['__closure'] = var5;
            var5 = 1515709080541.0;
            var11['__workletHash'] = var5;
            var5 = _closure1_slot36;
            var11['__initData'] = var5;
            var5 = function te(arg1, arg2) {
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
            var20 = {};
            var38 = var15[var21];
            var38 = var13.bind(var4)(var38);
            var38 = var38.runOnJS;
            var20['runOnJS'] = var38;
            var20['setShowBlur'] = var36;
            var5['__closure'] = var20;
            var20 = 11057160578223.0;
            var5['__workletHash'] = var20;
            var20 = _closure1_slot37;
            var5['__initData'] = var20;
            var5 = var16.bind(var18)(var11, var5);
            var16 = _closure1_slot4;
            var11 = var16.useState;
            var5 = false;
            var11 = var11.bind(var16)(var5);
            var5 = _closure1_slot3;
            var11 = var5.bind(var4)(var11, var6);
            var5 = var11[var1];
            _closure2_slot13 = var5;
            var11 = var11[var22];
            _closure2_slot14 = var11;
            var11 = 31;
            var11 = var15[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.GifAutoPlay;
            var11 = var13.getSetting;
            var58 = var11.bind(var13)();
            if(var58) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var58 = var5;
case 17:
            var5 = var37 == var12;
            var16 = undefined;
            if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var12.getBannerURL;
            var5 = {};
            var5['canAnimate'] = var58;
            var5['size'] = var48;
            var16 = var11.bind(var12)(var5);
case 19:
            var5 = var37 != var16;
            var61 = null;
            if(!var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 32;
            var5 = var13[var5];
            var11 = var11.bind(var4)(var5);
            var5 = var11.makeSource;
            var61 = var5.bind(var11)(var16);
case 21:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 32;
            var5 = var13[var5];
            var15 = var11.bind(var4)(var5);
            var5 = var15.isAnimatedImageURL;
            var49 = var5.bind(var15)(var16);
            var43 = 33;
            var5 = var13[var43];
            var5 = var11.bind(var4)(var5);
            var18 = var5.intl;
            var16 = var18.formatToPlainString;
            var5 = var13[var43];
            var5 = var11.bind(var4)(var5);
            var5 = var5.t;
            var15 = var5.gVn4uJ;
            var5 = {};
            var20 = var34.username;
            var5['username'] = var20;
            var62 = var16.bind(var18)(var15, var5);
            var5 = 34;
            var5 = var13[var5];
            var13 = var11.bind(var4)(var5);
            var11 = var13.useUserProfileBannerBackgroundColor;
            var5 = {};
            var5['user'] = var34;
            var5['displayProfile'] = var12;
            var57 = var11.bind(var13)(var5);
            var18 = var37 == var12;
            if(var18) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var12.isLoaded;
            var18 = !var5;
case 23:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 35;
            var5 = var13[var5];
            var5 = var11.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var13 = new Array(3);
            var13[0] = var45;
            var13[1] = var48;
            var11 = var2.bottom;
            var13[2] = var11;
            var11 = function() {
                var1 = {};
                var2 = {};
                var4 = _closure2_slot11;
                var2['width'] = var4;
                var4 = _closure2_slot2;
                var2['height'] = var4;
                var1['dimensionStyle'] = var2;
                var2 = {};
                var3 = _closure2_slot4;
                var3 = var3.bottom;
                var2['paddingBottom'] = var3;
                var1['contentContainerStyle'] = var2;
                return var1;
            };
            var11 = var15.bind(var16)(var11, var13);
            var64 = var11.dimensionStyle;
            var39 = var11.contentContainerStyle;
            var38 = var5;
            if(var38) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var38 = var8;
case 25:
            if(var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var3) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var47 = var2.top;
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var47 = _closure1_slot14;
case 30:
            var2 = var37 == var12;
            var42 = undefined;
            if(var2) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var2 = var12.profileEffect;
            var3 = var37 == var2;
            var42 = undefined;
            if(var3) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var42 = var2.skuId;
case 31:
            var20 = var37 != var42;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 36;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var5 = var37 == var12;
            var2 = undefined;
            if(var5) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var5 = var12.profileFrame;
            var8 = var37 == var5;
            var2 = undefined;
            if(var8) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var2 = var5.skuId;
case 34:
            var50 = var3.bind(var4)(var2, var7);
            _closure2_slot15 = var50;
            var8 = _closure1_slot4;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var50;
            var3[1] = var48;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0007_ip = 37; continue _fun0007 }
case 16:
                    var1 = undefined;
                    return var1;
case 37:
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
            var16 = var5.bind(var8)(var2, var3);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 37;
            var2 = var8[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useMobileWishlistOwnerExperiment;
            var2 = var2.bind(var3)(var7);
            _closure2_slot16 = var2;
            var13 = _closure1_slot4;
            var11 = var13.useMemo;
            var3 = var2.enabled;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0008_ip = 8; continue _fun0008 }
case 38:
                    var1 = new Array(0);
                    _fun0008_ip = 39; continue _fun0008;
case 8:
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
case 39:
                    return var1;
                }
            };
            var7 = var11.bind(var13)(var3, var7);
            var3 = 39;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSelectedDismissibleContent;
            var5 = var3.bind(var5)(var7);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var5, var6);
            var1 = var3[var1];
            var63 = var3[var22];
            var60 = var2.enabled;
            if(!var60) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var60 = var37 != var1;
case 40:
            _closure2_slot17 = var60;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var60;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 42; continue _fun0009 }
case 38:
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
case 42:
                    return var1;
                }
            };
            var59 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var6 = var1.bind(var2)(var37);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var5 = var1.bind(var2)(var37);
            _closure2_slot18 = var63;
            var7 = _closure1_slot4;
            var3 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var63;
            var2[1] = var25;
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
            var7 = var3.bind(var7)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 41;
            var3 = var1[var13];
            var11 = var2.bind(var4)(var3);
            var8 = var11.useCreateUserProfileAnalyticsContext;
            var3 = {};
            var15 = 'YOU_SCREEN';
            var3['layout'] = var15;
            var15 = var34.id;
            var3['userId'] = var15;
            var11 = var8.bind(var11)(var3);
            var44 = var37 != var59;
            var56 = 42;
            var1 = var1[var56];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useYouSettingsCoachmark;
            var1 = {};
            var1['disabled'] = var44;
            var1 = var2.bind(var3)(var1);
            _closure2_slot19 = var1;
            var36 = var37 != var1;
            if(var44) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var15 = null;
            if(!var36) { _fun0001_ip = 45; continue _fun0001 }
case 43:
            var8 = _closure1_slot26;
            var3 = _closure1_slot0;
            var51 = _closure1_slot2;
            var2 = 43;
            var2 = var51[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.LayerScope;
            var2 = {};
            var2['zIndex'] = var22;
            if(!var44) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var54 = _closure1_slot25;
            var51 = _closure1_slot1;
            var65 = _closure1_slot2;
            var22 = 44;
            var22 = var65[var22];
            var51 = var51.bind(var4)(var22);
            var22 = {};
            var22['buttonRef'] = var6;
            var22['markAsDismissed'] = var63;
            var22['visible'] = var60;
            var60 = var59.title;
            var22['title'] = var60;
            var60 = var59.description;
            var22['description'] = var60;
            var60 = var59.avatarSrc;
            var22['avatarSrc'] = var60;
            var60 = var59.decorationAsset;
            var22['decorationAsset'] = var60;
            var59 = var59.renderImgComponent;
            var22['renderImgComponent'] = var59;
            var22['navigateToShop'] = var7;
            var44 = var54.bind(var4)(var51, var22);
case 46:
            var22 = new Array(2);
            var22[0] = var44;
            if(!var36) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var54 = _closure1_slot25;
            var51 = _closure1_slot1;
            var44 = _closure1_slot2;
            var44 = var44[var56];
            var51 = var51.bind(var4)(var44);
            var44 = {};
            var44['buttonRef'] = var5;
            var68 = var1.props;
            var69 = var44;
            var56 = copyDataProperties(var69, var68);
            var36 = var54.bind(var4)(var51, var44);
case 48:
            var22[1] = var36;
            var2['children'] = var22;
            var15 = var8.bind(var4)(var3, var2);
case 45:
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var3 = _closure2_slot19;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 50:
                    if(var2) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                    var3 = _closure2_slot19;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 52:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var9 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 45;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var18;
            var1['navigateToPremium'] = var26;
            var1['navigateToSettings'] = var9;
            var1['navigateToShop'] = var7;
            var1['shopButtonRef'] = var6;
            var1['settingsButtonRef'] = var5;
            var1['paddingTop'] = var47;
            var36 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot25;
            var9 = _closure1_slot0;
            var1 = 43;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot25;
            var5 = 46;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var17;
            var5['primaryColor'] = var14;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot25;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var11;
            var13 = var37 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var11 = var12.isLoaded;
case 54:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot26;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 47;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var17 = var30.container;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var16;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var16 = var37 != var50;
            if(!var16) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var18 = _closure1_slot25;
            var17 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 48;
            var14 = var22[var14];
            var17 = var17.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var50;
            var14['containerWidth'] = var48;
            var16 = var18.bind(var4)(var17, var14);
case 56:
            var14 = new Array(4);
            var14[0] = var16;
            var44 = _closure1_slot25;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 49;
            var16 = var18[var16];
            var17 = var22.bind(var4)(var16);
            var16 = {};
            var16['gradientHeight'] = var46;
            var16['bannerHeight'] = var45;
            var45 = var30.borderRadius;
            var16['style'] = var45;
            var16 = var44.bind(var4)(var17, var16);
            var14[1] = var16;
            var14[2] = var15;
            var17 = _closure1_slot26;
            var16 = _closure1_slot29;
            var15 = {};
            var15['contentContainerStyle'] = var39;
            var15['ref'] = var32;
            var15['onScroll'] = var35;
            var15['onLayout'] = var23;
            var23 = _closure1_slot18;
            var15['scrollEventThrottle'] = var23;
            var23 = var30.scrollView;
            var15['style'] = var23;
            var23 = _closure1_slot26;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var39 = var30.banner;
            var35 = new Array(2);
            var35[0] = var39;
            var35[1] = var40;
            var18['style'] = var35;
            var39 = null;
            if(!var38) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var39 = null;
            if(var20) { _fun0001_ip = 58; continue _fun0001 }
case 60:
            var45 = _closure1_slot25;
            var54 = _closure1_slot0;
            var59 = _closure1_slot2;
            var35 = 50;
            var35 = var59[var35];
            var35 = var54.bind(var4)(var35);
            var44 = var35.PressableOpacity;
            var35 = {};
            var56 = var30.backButton;
            var51 = new Array(2);
            var51[0] = var56;
            var56 = {};
            var56['top'] = var47;
            var51[1] = var56;
            var35['style'] = var51;
            var51 = var59[var43];
            var51 = var54.bind(var4)(var51);
            var60 = var51.intl;
            var56 = var60.string;
            var51 = var59[var43];
            var51 = var54.bind(var4)(var51);
            var51 = var51.t;
            var51 = var51["13/7kX"];
            var51 = var56.bind(var60)(var51);
            var35['accessibilityLabel'] = var51;
            var51 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0011_ip = 61; continue _fun0011;
case 63:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 61:
                    return var1;
                }
            };
            var35['onPress'] = var51;
            var56 = _closure1_slot25;
            var51 = 52;
            var51 = var59[var51];
            var51 = var54.bind(var4)(var51);
            var54 = var51.CloseIconWithBadgeOnSide;
            var51 = {};
            var51 = var56.bind(var4)(var54, var51);
            var35['children'] = var51;
            var39 = var45.bind(var4)(var44, var35);
case 58:
            var35 = new Array(4);
            var35[0] = var39;
            var39 = !var20;
            if(var20) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var39 = var36;
case 65:
            var35[1] = var39;
            var45 = _closure1_slot26;
            var44 = _closure1_slot1;
            var59 = _closure1_slot2;
            var39 = var59[var21];
            var39 = var44.bind(var4)(var39);
            var44 = var39.View;
            var39 = {};
            var54 = {};
            var56 = _closure1_slot0;
            var51 = 53;
            var51 = var59[var51];
            var56 = var56.bind(var4)(var51);
            var51 = var56.int2hex;
            var51 = var51.bind(var56)(var57);
            var54['backgroundColor'] = var51;
            var51 = new Array(3);
            var51[0] = var54;
            var51[1] = var64;
            var51[2] = var53;
            var39['style'] = var51;
            var51 = var37 != var61;
            if(!var51) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            if(var49) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var54 = _closure1_slot25;
            var53 = _closure1_slot1;
            var56 = _closure1_slot2;
            var49 = 40;
            var49 = var56[var49];
            var53 = var53.bind(var4)(var49);
            var49 = {};
            var49['style'] = var64;
            var56 = 'image';
            var49['accessibilityRole'] = var56;
            var49['accessibilityLabel'] = var62;
            var49['source'] = var61;
            var49 = var54.bind(var4)(var53, var49);
            _fun0001_ip = 71; continue _fun0001;
case 69:
            var56 = _closure1_slot26;
            var66 = _closure1_slot0;
            var65 = _closure1_slot2;
            var53 = 50;
            var53 = var65[var53];
            var53 = var66.bind(var4)(var53);
            var54 = var53.PressableOpacity;
            var53 = {};
            var57 = function onPress() {
                var3 = _closure2_slot14;
                var1 = _closure2_slot13;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var53['onPress'] = var57;
            var63 = 'image';
            var53['accessibilityRole'] = var63;
            var57 = var65[var43];
            var57 = var66.bind(var4)(var57);
            var60 = var57.intl;
            var59 = var60.string;
            var57 = var65[var43];
            var57 = var66.bind(var4)(var57);
            var57 = var57.t;
            var57 = var57["3fzj/l"];
            var57 = var59.bind(var60)(var57);
            var53['accessibilityLabel'] = var57;
            var60 = _closure1_slot25;
            var59 = _closure1_slot1;
            var57 = 40;
            var57 = var65[var57];
            var59 = var59.bind(var4)(var57);
            var57 = {};
            var57['style'] = var64;
            var57['accessibilityRole'] = var63;
            var57['accessibilityLabel'] = var62;
            var57['source'] = var61;
            var59 = var60.bind(var4)(var59, var57);
            var57 = new Array(2);
            var57[0] = var59;
            var58 = !var58;
            if(!var58) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var61 = _closure1_slot25;
            var65 = _closure1_slot0;
            var62 = _closure1_slot2;
            var59 = 54;
            var59 = var62[var59];
            var59 = var65.bind(var4)(var59);
            var60 = var59.Caption;
            var59 = {};
            var63 = var62[var43];
            var63 = var65.bind(var4)(var63);
            var64 = var63.intl;
            var63 = var64.string;
            var62 = var62[var43];
            var62 = var65.bind(var4)(var62);
            var62 = var62.t;
            var62 = var62.I5gL2H;
            var62 = var63.bind(var64)(var62);
            var59['label'] = var62;
            var63 = var30.gifTag;
            var62 = new Array(2);
            var62[0] = var63;
            var63 = {};
            var63['top'] = var47;
            var62[1] = var63;
            var59['style'] = var62;
            var62 = var30.gifTagText;
            var59['textStyle'] = var62;
            var58 = var61.bind(var4)(var60, var59);
case 72:
            var57[1] = var58;
            var53['children'] = var57;
            var49 = var56.bind(var4)(var54, var53);
case 71:
            var51 = var49;
case 67:
            var49 = new Array(2);
            var49[0] = var51;
            var53 = _closure1_slot0;
            var54 = _closure1_slot2;
            var51 = 55;
            var51 = var54[var51];
            var53 = var53.bind(var4)(var51);
            var51 = var53.isIOS;
            var51 = var51.bind(var53)();
            if(!var51) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var51 = var52;
case 74:
            if(!var51) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var54 = _closure1_slot25;
            var53 = _closure1_slot27;
            var52 = {};
            var52['animatedProps'] = var55;
            var55 = _closure1_slot5;
            var55 = var55.absoluteFillObject;
            var52['style'] = var55;
            var51 = var54.bind(var4)(var53, var52);
case 76:
            var49[1] = var51;
            var39['children'] = var49;
            var39 = var45.bind(var4)(var44, var39);
            var35[2] = var39;
            var39 = var37 != var50;
            if(!var39) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var49 = _closure1_slot25;
            var45 = _closure1_slot1;
            var51 = _closure1_slot2;
            var44 = 56;
            var44 = var51[var44];
            var45 = var45.bind(var4)(var44);
            var44 = {};
            var44['frame'] = var50;
            var44['containerWidth'] = var48;
            var39 = var49.bind(var4)(var45, var44);
case 78:
            var35[3] = var39;
            var18['children'] = var35;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var23 = _closure1_slot26;
            var39 = _closure1_slot1;
            var44 = _closure1_slot2;
            var21 = var44[var21];
            var21 = var39.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var35 = 'box-none';
            var21['pointerEvents'] = var35;
            var45 = var30.profileEffectLayer;
            var35 = new Array(3);
            var35[0] = var45;
            var45 = {};
            var45['width'] = var48;
            var45['height'] = var46;
            var35[1] = var45;
            var35[2] = var40;
            var21['style'] = var35;
            var40 = _closure1_slot25;
            var35 = 57;
            var35 = var44[var35];
            var39 = var39.bind(var4)(var35);
            var35 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var35['skuId'] = var42;
            var39 = var40.bind(var4)(var39, var35);
            var35 = new Array(3);
            var35[0] = var39;
            var37 = null;
            if(!var38) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var40 = _closure1_slot25;
            var42 = _closure1_slot0;
            var44 = _closure1_slot2;
            var38 = 50;
            var38 = var44[var38];
            var38 = var42.bind(var4)(var38);
            var39 = var38.PressableOpacity;
            var38 = {};
            var46 = var30.backButton;
            var45 = new Array(2);
            var45[0] = var46;
            var46 = {};
            var46['top'] = var47;
            var45[1] = var46;
            var38['style'] = var45;
            var45 = var44[var43];
            var45 = var42.bind(var4)(var45);
            var46 = var45.intl;
            var45 = var46.string;
            var43 = var44[var43];
            var43 = var42.bind(var4)(var43);
            var43 = var43.t;
            var43 = var43["13/7kX"];
            var43 = var45.bind(var46)(var43);
            var38['accessibilityLabel'] = var43;
            var41 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 61; continue _fun0012;
case 63:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 61:
                    return var1;
                }
            };
            var38['onPress'] = var41;
            var43 = _closure1_slot25;
            var41 = 52;
            var41 = var44[var41];
            var41 = var42.bind(var4)(var41);
            var42 = var41.CloseIconWithBadgeOnSide;
            var41 = {};
            var41 = var43.bind(var4)(var42, var41);
            var38['children'] = var41;
            var37 = var40.bind(var4)(var39, var38);
case 82:
            var35[1] = var37;
            var35[2] = var36;
            var21['children'] = var35;
            var20 = var23.bind(var4)(var22, var21);
case 80:
            var18[1] = var20;
            var23 = _closure1_slot25;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 58;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['user'] = var34;
            var20['userTheme'] = var33;
            var20['scrollViewRef'] = var32;
            var32 = var30.content;
            var30 = new Array(2);
            var30[0] = var32;
            var30[1] = var31;
            var20['style'] = var30;
            var20['navigateToProfileCustomization'] = var29;
            var20['navigateToCustomStatus'] = var28;
            var20['navigateToFriends'] = var27;
            var20['navigateToPremium'] = var26;
            var20['navigateToShop'] = var25;
            var20['initialTab'] = var24;
            var20 = var23.bind(var4)(var21, var20);
            var18[2] = var20;
            var21 = _closure1_slot25;
            var20 = _closure1_slot0;
            var19 = 59;
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
            var14[3] = var15;
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
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var3 = {};
            var5 = undefined;
            var1 = undefined;
            if(!var2) { _fun0013_ip = 84; continue _fun0013 }
case 38:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.radii;
            var1 = var4.xl;
case 84:
            var3['borderTopLeftRadius'] = var1;
            var1 = undefined;
            if(!var2) { _fun0013_ip = 85; continue _fun0013 }
case 86:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.radii;
            var1 = var2.xl;
case 85:
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
    var4 = 68;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreen(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
            if(var4) { _fun0014_ip = 87; continue _fun0014 }
case 88:
            var9 = var13.id;
case 87:
            _closure2_slot1 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var4 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 62; continue _fun0015 }
case 89:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 62:
                    return var1;
                }
            };
            var12 = var10.bind(var11)(var4, var8);
            _closure2_slot2 = var12;
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 37;
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0016_ip = 90; continue _fun0016 }
case 51:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 90:
                    if(!var2) { _fun0016_ip = 91; continue _fun0016 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 60;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 91:
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
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 64; continue _fun0017 }
case 3:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 64; continue _fun0017 }
case 92:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 64:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var3);
            var3 = 61;
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
                var1 = 62;
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
                var1 = 62;
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
                var1 = 63;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 64;
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
                var1 = 62;
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
                var1 = 65;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 64;
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
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                    if(!(var2 != var4)) { _fun0018_ip = 63; continue _fun0018 }
case 62:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0018_ip = 63; continue _fun0018 }
case 64:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 63:
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
                var1 = 66;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var16.bind(var18)(var15, var3);
            var3 = 67;
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
            if(var3) { _fun0014_ip = 93; continue _fun0014 }
case 94:
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
case 93:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();