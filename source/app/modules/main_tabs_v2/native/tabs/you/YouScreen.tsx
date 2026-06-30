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
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = 0;
            var2 = var1.bind(var2)(var3);
            var1 = _closure1_slot3;
            var44 = 2;
            var1 = var1.bind(var4)(var2, var44);
            var8 = var1[var3];
            var47 = 1;
            var1 = var1[var47];
            var _closure2_slot2 = var1;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var25 = var5.bind(var6)(var2, var1);
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var5 = var8 > var3;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8;
case 2:
            var43 = var2.bind(var4)(var1);
            _closure2_slot3 = var43;
            var1 = _closure1_slot11;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot23;
            var37 = var1.bind(var4)(var43, var5);
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 20;
            var1 = var9[var1];
            var6 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var10 = 21;
            var11 = var9[var10];
            var11 = var7.bind(var4)(var11);
            var11 = var11.ImpressionTypes;
            var11 = var11.VIEW;
            var1['type'] = var11;
            var10 = var9[var10];
            var10 = var7.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.USER_YOU_SCREEN;
            var1['name'] = var10;
            var1 = var6.bind(var4)(var1);
            var1 = 22;
            var1 = var9[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var41.id;
            var12 = var6.bind(var4)(var1);
            var1 = 23;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)();
            _closure2_slot4 = var6;
            var1 = 24;
            var1 = var9[var1];
            var10 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var41;
            var1['displayProfile'] = var12;
            var1 = var10.bind(var4)(var1);
            var22 = var1.theme;
            var21 = var1.primaryColor;
            var10 = var1.secondaryColor;
            var1 = 25;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var40 = var1.bind(var4)();
            var11 = _closure1_slot4;
            var1 = var11.useRef;
            var17 = null;
            var39 = var1.bind(var11)(var17);
            var27 = 14;
            var1 = var9[var27];
            var11 = var7.bind(var4)(var1);
            var1 = var11.useSharedValue;
            var11 = var1.bind(var11)(var3);
            _closure2_slot5 = var11;
            var1 = var9[var27];
            var13 = var7.bind(var4)(var1);
            var7 = var13.useAnimatedScrollHandler;
            var1 = function H(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = {};
            var14['scrollPosition'] = var11;
            var1['__closure'] = var14;
            var14 = 952837799380.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot25;
            var1['__initData'] = var14;
            var28 = var7.bind(var13)(var1);
            var1 = 26;
            var1 = var9[var1];
            var7 = var2.bind(var4)(var1);
            var1 = {};
            var1['scrollPosition'] = var11;
            var1['bannerHeight'] = var43;
            var1 = var7.bind(var4)(var1);
            var45 = var1.bannerAnimatedStyle;
            var53 = var1.bannerImageAnimatedStyle;
            var38 = var1.contentAnimatedStyle;
            var57 = var1.blurAnimatedProps;
            var54 = var1.showBlur;
            var1 = 27;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.isChatBesideChannelList;
            var1 = 28;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.width;
            var50 = var1.height;
            var1 = var6.right;
            var2 = var2 - var1;
            var1 = var6.left;
            var2 = var2 - var1;
            var1 = 0;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 16;
case 4:
            var7 = var2 - var1;
            var23 = var7;
            if(!(var8 > var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.min;
            var23 = var1.bind(var2)(var7, var8);
case 6:
            _closure2_slot6 = var23;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var13 = false;
            var2 = var1.bind(var2)(var13);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var44);
            var2 = var1[var3];
            _closure2_slot7 = var2;
            var1 = var1[var47];
            _closure2_slot8 = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 29;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var7 = var1.GifAutoPlay;
            var1 = var7.getSetting;
            var7 = var1.bind(var7)();
            var1 = 30;
            var1 = var9[var1];
            var11 = var8.bind(var4)(var1);
            var1 = var11.useIsFocused;
            var14 = var1.bind(var11)();
            var1 = 31;
            var1 = var9[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.useIsProfileModalTransitioning;
            var1 = var1.bind(var8)();
            var30 = !var14;
            if(!var30) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var30 = !var1;
case 8:
            var11 = _closure1_slot4;
            var9 = var11.useRef;
            var1 = global;
            var16 = var1.Date;
            var8 = var16.now;
            var8 = var8.bind(var16)();
            var11 = var9.bind(var11)(var8);
            var9 = _closure1_slot4;
            var8 = var9.useRef;
            var9 = var8.bind(var9)(var4);
            var16 = _closure1_slot4;
            var8 = var16.useRef;
            var8 = var8.bind(var16)(var13);
            if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var8.current;
            if(var16) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var16 = true;
            var8['current'] = var16;
            var18 = var1.Date;
            var16 = var18.now;
            var16 = var16.bind(var18)();
            var9['current'] = var16;
            _fun0001_ip = 13; continue _fun0001;
case 10:
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8['current'] = var13;
case 13:
            var61 = var7;
            if(var61) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var61 = var2;
case 15:
            var2 = var17 == var12;
            var14 = undefined;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = var12.getBannerURL;
            var2 = {};
            var2['canAnimate'] = var61;
            var2['size'] = var23;
            var14 = var7.bind(var12)(var2);
case 17:
            var2 = var17 != var14;
            var64 = null;
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 32;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.makeSource;
            var64 = var2.bind(var7)(var14);
case 19:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 32;
            var2 = var8[var2];
            var13 = var7.bind(var4)(var2);
            var2 = var13.isAnimatedImageURL;
            var55 = var2.bind(var13)(var14);
            var49 = 33;
            var2 = var8[var49];
            var2 = var7.bind(var4)(var2);
            var16 = var2.intl;
            var14 = var16.formatToPlainString;
            var2 = var8[var49];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var13 = var2.gVn4uJ;
            var2 = {};
            var18 = var41.username;
            var2['username'] = var18;
            var65 = var14.bind(var16)(var13, var2);
            var2 = 34;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.useUserProfileBannerBackgroundColor;
            var2 = {};
            var2['user'] = var41;
            var2['displayProfile'] = var12;
            var63 = var7.bind(var8)(var2);
            var42 = var17 == var12;
            if(var42) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var12.isLoaded;
            var42 = !var2;
case 21:
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 35;
            var2 = var16[var2];
            var2 = var8.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var18 = _closure1_slot4;
            var14 = var18.useMemo;
            var13 = new Array(3);
            var13[0] = var43;
            var13[1] = var23;
            var2 = var6.bottom;
            var13[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = {};
                    var4 = _closure2_slot6;
                    var2['width'] = var4;
                    var4 = _closure2_slot3;
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
                    if(!var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 17;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.space;
                    var3 = var5.PX_64;
case 23:
                    var3 = var4 + var3;
                    var2['paddingBottom'] = var3;
                    var1['contentContainerStyle'] = var2;
                    return var1;
                }
            };
            var2 = var14.bind(var18)(var2, var13);
            var67 = var2.dimensionStyle;
            var29 = var2.contentContainerStyle;
            var18 = _closure1_slot0;
            var14 = 37;
            var2 = var16[var14];
            var20 = var18.bind(var4)(var2);
            var13 = var20.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var24 = 'YOU_SCREEN';
            var2['layout'] = var24;
            var24 = var41.id;
            var2['userId'] = var24;
            var13 = var13.bind(var20)(var2);
            var2 = 38;
            var2 = var16[var2];
            var18 = var18.bind(var4)(var2);
            var2 = var18.useIsScreenLandscape;
            var18 = var2.bind(var18)();
            var2 = 39;
            var2 = var16[var2];
            var16 = var8.bind(var4)(var2);
            var8 = undefined;
            if(var18) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var2 = var17 == var12;
            var8 = undefined;
            if(var2) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var2 = var12.profileFrame;
            var20 = var17 == var2;
            var8 = undefined;
            if(var20) { _fun0001_ip = 25; continue _fun0001 }
case 28:
            var8 = var2.skuId;
case 25:
            var2 = 'YouScreen';
            var24 = var16.bind(var4)(var8, var2);
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 40;
            var2 = var16[var2];
            var8 = var8.bind(var4)(var2);
            var2 = {};
            var16 = undefined;
            if(var18) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var18 = var17 == var12;
            var16 = undefined;
            if(var18) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var18 = var12.profileFrame;
            var20 = var17 == var18;
            var16 = undefined;
            if(var20) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var16 = var18.skuId;
case 29:
            var2['skuId'] = var16;
            var9 = var9.current;
            var2['openedAt'] = var9;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 41;
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
            if(!var8) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 42;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.bind(var4)(var24, var23);
            var2 = var8.overflowTop;
case 33:
            _closure2_slot9 = var2;
            var18 = _closure1_slot4;
            var16 = var18.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var2 = {};
                    var3 = _closure2_slot9;
                    var2['marginTop'] = var3;
                    var1 = var2;
case 35:
                    return var1;
                }
            };
            var20 = var16.bind(var18)(var8, var9);
            if(var7) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 39:
            var7 = var1.Math;
            var5 = var7.max;
            var1 = var6.top;
            var2 = var1 - var2;
            var1 = _closure1_slot12;
            var52 = var5.bind(var7)(var2, var1);
            _fun0001_ip = 40; continue _fun0001;
case 37:
            var52 = _closure1_slot12;
case 40:
            var1 = var17 == var12;
            var46 = undefined;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var1 = var12.profileEffect;
            var2 = var17 == var1;
            var46 = undefined;
            if(var2) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var46 = var1.skuId;
case 41:
            var26 = var17 != var46;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 43;
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
            var5 = 44;
            var5 = var1[var5];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useSelectedDismissibleContent;
            var7 = var5.bind(var7)(var8);
            var5 = _closure1_slot3;
            var7 = var5.bind(var4)(var7, var44);
            var5 = var7[var3];
            var68 = var7[var47];
            var66 = var17 != var5;
            _closure2_slot10 = var66;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var66;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
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
                        var4 = _closure1_slot20;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 45;
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
            var62 = var8.bind(var9)(var5, var7);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var8 = var5.bind(var7)(var17);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var7 = var5.bind(var7)(var17);
            _closure2_slot11 = var68;
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var9 = new Array(2);
            var9[0] = var68;
            var9[1] = var32;
            var5 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot11;
                var2 = _closure1_slot18;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var16.bind(var18)(var5, var9);
            var56 = var17 != var62;
            var60 = 46;
            var1 = var1[var60];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useYouSettingsCoachmark;
            var1 = {};
            var1['disabled'] = var56;
            var1 = var2.bind(var5)(var1);
            _closure2_slot12 = var1;
            var51 = var17 != var1;
            var2 = var56;
            if(var56) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var2 = var51;
case 46:
            _closure2_slot13 = var2;
            var58 = _closure1_slot4;
            var16 = var58.useState;
            var59 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 36;
            var5 = var5[var18];
            var59 = var59.bind(var4)(var5);
            var5 = var59.isYouNavFloating;
            var5 = var5.bind(var59)();
            var5 = !var5;
            var16 = var16.bind(var58)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var16, var44);
            var3 = var5[var3];
            var5 = var5[var47];
            _closure2_slot14 = var5;
            var16 = null;
            if(!var2) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var16 = null;
            if(!var3) { _fun0001_ip = 48; continue _fun0001 }
case 50:
            var44 = _closure1_slot21;
            var5 = _closure1_slot0;
            var58 = _closure1_slot2;
            var3 = 47;
            var3 = var58[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.LayerScope;
            var3 = {};
            var3['zIndex'] = var47;
            if(!var56) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var59 = _closure1_slot20;
            var58 = _closure1_slot1;
            var69 = _closure1_slot2;
            var47 = 48;
            var47 = var69[var47];
            var58 = var58.bind(var4)(var47);
            var47 = {};
            var47['buttonRef'] = var8;
            var47['markAsDismissed'] = var68;
            var47['visible'] = var66;
            var66 = var62.title;
            var47['title'] = var66;
            var66 = var62.description;
            var47['description'] = var66;
            var66 = var62.avatarSrc;
            var47['avatarSrc'] = var66;
            var66 = var62.decorationAsset;
            var47['decorationAsset'] = var66;
            var62 = var62.renderImgComponent;
            var47['renderImgComponent'] = var62;
            var47['navigateToShop'] = var9;
            var56 = var59.bind(var4)(var58, var47);
case 51:
            var47 = new Array(2);
            var47[0] = var56;
            if(!var51) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var59 = _closure1_slot20;
            var58 = _closure1_slot1;
            var56 = _closure1_slot2;
            var56 = var56[var60];
            var58 = var58.bind(var4)(var56);
            var56 = {};
            var56['buttonRef'] = var7;
            var70 = var1.props;
            var71 = var56;
            var60 = copyDataProperties(var71, var70);
            var51 = var59.bind(var4)(var58, var56);
case 53:
            var47[1] = var51;
            var3['children'] = var47;
            var16 = var44.bind(var4)(var5, var3);
case 48:
            var44 = _closure1_slot4;
            var5 = var44.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot13;
                    if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 36;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isYouNavFloating;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0005_ip = 57; continue _fun0005 }
case 55:
                    var2 = undefined;
                    return var2;
case 57:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot14;
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
            var2 = var5.bind(var44)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var3 = _closure2_slot12;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 58:
                    if(var2) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var3 = _closure2_slot12;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 60:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 49;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var42;
            var1['navigateToPremium'] = var33;
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
            if(!var7) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var5 = var6.bottom;
case 62:
            var1['paddingBottom'] = var5;
            var19 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot20;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 47;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot20;
            var5 = 50;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var22;
            var5['primaryColor'] = var21;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot20;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var11 = var12.fetchStartedAt;
case 64:
            var8['fetchStartedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var11 = var12.fetchEndedAt;
case 66:
            var8['fetchEndedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var11 = var12.isLoaded;
case 68:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot21;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 51;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var21 = var37.container;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var20;
            var11['style'] = var14;
            var14 = _closure1_slot14;
            var11['nativeID'] = var14;
            var20 = var17 != var24;
            if(!var20) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var22 = _closure1_slot20;
            var21 = _closure1_slot1;
            var47 = _closure1_slot2;
            var14 = 52;
            var14 = var47[var14];
            var21 = var21.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var24;
            var42 = _closure1_slot19;
            var42 = var42.YOU_SCREEN;
            var14['profileThemeType'] = var42;
            var44 = _closure1_slot0;
            var42 = 53;
            var42 = var47[var42];
            var42 = var44.bind(var4)(var42);
            var42 = var42.ProfileFrameLayerOrder;
            var42 = var42.BACK;
            var14['frameOrder'] = var42;
            var14['containerWidth'] = var23;
            var20 = var22.bind(var4)(var21, var14);
case 70:
            var14 = new Array(7);
            var14[0] = var20;
            var42 = _closure1_slot20;
            var22 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 54;
            var21 = var20[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['gradientHeight'] = var50;
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
            if(!var20) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var20 = var16;
case 72:
            var14[2] = var20;
            var22 = _closure1_slot21;
            var21 = _closure1_slot24;
            var20 = {};
            var20['contentContainerStyle'] = var29;
            var20['ref'] = var39;
            var20['onScroll'] = var28;
            var20['onLayout'] = var25;
            var25 = _closure1_slot15;
            var20['scrollEventThrottle'] = var25;
            var25 = var37.scrollView;
            var20['style'] = var25;
            var29 = _closure1_slot21;
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
            if(var26) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var47 = _closure1_slot20;
            var56 = _closure1_slot0;
            var59 = _closure1_slot2;
            var42 = 55;
            var42 = var59[var42];
            var42 = var56.bind(var4)(var42);
            var44 = var42.PressableOpacity;
            var42 = {};
            var58 = var37.backButton;
            var51 = new Array(2);
            var51[0] = var58;
            var58 = {};
            var58['top'] = var52;
            var51[1] = var58;
            var42['style'] = var51;
            var51 = 'button';
            var42['accessibilityRole'] = var51;
            var51 = var59[var49];
            var51 = var56.bind(var4)(var51);
            var60 = var51.intl;
            var58 = var60.string;
            var51 = var59[var49];
            var51 = var56.bind(var4)(var51);
            var51 = var51.t;
            var51 = var51["13/7kX"];
            var51 = var58.bind(var60)(var51);
            var42['accessibilityLabel'] = var51;
            var51 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 56;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 78; continue _fun0007 }
case 57:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 76; continue _fun0007;
case 78:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 76:
                    return var1;
                }
            };
            var42['onPress'] = var51;
            var58 = _closure1_slot20;
            var51 = 57;
            var51 = var59[var51];
            var51 = var56.bind(var4)(var51);
            var56 = var51.CloseIconWithBadgeOnSide;
            var51 = {};
            var51 = var58.bind(var4)(var56, var51);
            var42['children'] = var51;
            var43 = var47.bind(var4)(var44, var42);
case 74:
            var42 = new Array(3);
            var42[0] = var43;
            var43 = !var26;
            if(var26) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var47 = _closure1_slot0;
            var44 = _closure1_slot2;
            var44 = var44[var18];
            var47 = var47.bind(var4)(var44);
            var44 = var47.isYouNavFloating;
            var44 = var44.bind(var47)();
            var43 = !var44;
case 79:
            if(!var43) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var43 = var19;
case 81:
            var42[1] = var43;
            var47 = _closure1_slot21;
            var44 = _closure1_slot1;
            var66 = _closure1_slot2;
            var43 = var66[var27];
            var43 = var44.bind(var4)(var43);
            var44 = var43.View;
            var43 = {};
            var51 = new Array(2);
            var51[0] = var67;
            var51[1] = var53;
            var43['style'] = var51;
            var56 = _closure1_slot20;
            var53 = _closure1_slot6;
            var51 = {};
            var58 = _closure1_slot5;
            var59 = var58.absoluteFill;
            var58 = new Array(2);
            var58[0] = var59;
            var59 = {};
            var62 = _closure1_slot0;
            var60 = 58;
            var60 = var66[var60];
            var62 = var62.bind(var4)(var60);
            var60 = var62.int2hex;
            var60 = var60.bind(var62)(var63);
            var59['backgroundColor'] = var60;
            var58[1] = var59;
            var51['style'] = var58;
            var53 = var56.bind(var4)(var53, var51);
            var51 = new Array(3);
            var51[0] = var53;
            var53 = var17 != var64;
            if(!var53) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            if(var55) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var58 = _closure1_slot20;
            var56 = _closure1_slot1;
            var59 = _closure1_slot2;
            var55 = 45;
            var55 = var59[var55];
            var56 = var56.bind(var4)(var55);
            var55 = {};
            var55['style'] = var67;
            var59 = 'image';
            var55['accessibilityRole'] = var59;
            var55['accessibilityLabel'] = var65;
            var55['source'] = var64;
            var55['paused'] = var30;
            var55 = var58.bind(var4)(var56, var55);
            _fun0001_ip = 87; continue _fun0001;
case 85:
            var59 = _closure1_slot21;
            var69 = _closure1_slot0;
            var68 = _closure1_slot2;
            var56 = 55;
            var56 = var68[var56];
            var56 = var69.bind(var4)(var56);
            var58 = var56.PressableOpacity;
            var56 = {};
            var60 = function onPress() {
                var3 = _closure2_slot8;
                var1 = _closure2_slot7;
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
            var63 = _closure1_slot20;
            var62 = _closure1_slot1;
            var60 = 45;
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
            if(!var61) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var64 = _closure1_slot20;
            var68 = _closure1_slot0;
            var65 = _closure1_slot2;
            var62 = 59;
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
            var66['top'] = var52;
            var65[1] = var66;
            var62['style'] = var65;
            var65 = var37.gifTagText;
            var62['textStyle'] = var65;
            var61 = var64.bind(var4)(var63, var62);
case 88:
            var60[1] = var61;
            var56['children'] = var60;
            var55 = var59.bind(var4)(var58, var56);
case 87:
            var53 = var55;
case 83:
            var51[1] = var53;
            var55 = _closure1_slot0;
            var56 = _closure1_slot2;
            var53 = 60;
            var53 = var56[var53];
            var55 = var55.bind(var4)(var53);
            var53 = var55.isIOS;
            var53 = var53.bind(var55)();
            if(!var53) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var53 = var54;
case 90:
            if(!var53) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var56 = _closure1_slot20;
            var55 = _closure1_slot22;
            var54 = {};
            var54['animatedProps'] = var57;
            var57 = _closure1_slot5;
            var57 = var57.absoluteFillObject;
            var54['style'] = var57;
            var53 = var56.bind(var4)(var55, var54);
case 92:
            var51[2] = var53;
            var43['children'] = var51;
            var43 = var47.bind(var4)(var44, var43);
            var42[2] = var43;
            var25['children'] = var42;
            var28 = var29.bind(var4)(var28, var25);
            var25 = new Array(4);
            var25[0] = var28;
            if(!var26) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var29 = _closure1_slot21;
            var44 = _closure1_slot1;
            var43 = _closure1_slot2;
            var27 = var43[var27];
            var27 = var44.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var42 = 'box-none';
            var27['pointerEvents'] = var42;
            var47 = var37.profileEffectLayer;
            var42 = new Array(3);
            var42[0] = var47;
            var47 = {};
            var47['width'] = var23;
            var47['height'] = var50;
            var42[1] = var47;
            var42[2] = var45;
            var27['style'] = var42;
            var45 = _closure1_slot20;
            var42 = 61;
            var42 = var43[var42];
            var44 = var44.bind(var4)(var42);
            var42 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var42['skuId'] = var46;
            var42['paused'] = var30;
            var44 = var45.bind(var4)(var44, var42);
            var42 = new Array(3);
            var42[0] = var44;
            var47 = _closure1_slot20;
            var44 = _closure1_slot0;
            var45 = 55;
            var45 = var43[var45];
            var45 = var44.bind(var4)(var45);
            var46 = var45.PressableOpacity;
            var45 = {};
            var51 = var37.backButton;
            var50 = new Array(2);
            var50[0] = var51;
            var51 = {};
            var51['top'] = var52;
            var50[1] = var51;
            var45['style'] = var50;
            var50 = 'button';
            var45['accessibilityRole'] = var50;
            var50 = var43[var49];
            var50 = var44.bind(var4)(var50);
            var51 = var50.intl;
            var50 = var51.string;
            var49 = var43[var49];
            var49 = var44.bind(var4)(var49);
            var49 = var49.t;
            var49 = var49["13/7kX"];
            var49 = var50.bind(var51)(var49);
            var45['accessibilityLabel'] = var49;
            var48 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 56;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0008_ip = 78; continue _fun0008 }
case 57:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0008_ip = 76; continue _fun0008;
case 78:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 76:
                    return var1;
                }
            };
            var45['onPress'] = var48;
            var50 = _closure1_slot20;
            var48 = 57;
            var48 = var43[var48];
            var48 = var44.bind(var4)(var48);
            var49 = var48.CloseIconWithBadgeOnSide;
            var48 = {};
            var48 = var50.bind(var4)(var49, var48);
            var45['children'] = var48;
            var45 = var47.bind(var4)(var46, var45);
            var42[1] = var45;
            var43 = var43[var18];
            var44 = var44.bind(var4)(var43);
            var43 = var44.isYouNavFloating;
            var43 = var43.bind(var44)();
            var43 = !var43;
            if(!var43) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var43 = var19;
case 96:
            var42[2] = var43;
            var27['children'] = var42;
            var26 = var29.bind(var4)(var28, var27);
case 94:
            var25[1] = var26;
            var28 = _closure1_slot20;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 62;
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
            var28 = _closure1_slot20;
            var27 = _closure1_slot0;
            var26 = 63;
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
            if(!var17) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var22 = _closure1_slot20;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 52;
            var20 = var26[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['frame'] = var24;
            var24 = _closure1_slot19;
            var24 = var24.YOU_SCREEN;
            var20['profileThemeType'] = var24;
            var25 = _closure1_slot0;
            var24 = 53;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.ProfileFrameLayerOrder;
            var24 = var24.FRONT;
            var20['frameOrder'] = var24;
            var20['containerWidth'] = var23;
            var17 = var22.bind(var4)(var21, var20);
case 98:
            var14[4] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var18];
            var20 = var20.bind(var4)(var17);
            var17 = var20.isYouNavFloating;
            var17 = var17.bind(var20)();
            if(!var17) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var17 = var19;
case 100:
            var14[5] = var17;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isYouNavFloating;
            var15 = var15.bind(var17)();
            if(!var15) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var15 = var16;
case 102:
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
    var _closure1_slot26 = var1;
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarIOSModalPresentation;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot12 = var9;
    var9 = var4.YOU_AVATAR_SIZE;
    var _closure1_slot13 = var9;
    var9 = var4.YOU_SCREEN_ID;
    var _closure1_slot14 = var9;
    var4 = var4.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot20 = var9;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = 14;
    var9 = var6[var4];
    var11 = var7.bind(var1)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 15;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var10.bind(var11)(var9);
    var _closure1_slot22 = var9;
    var9 = 16;
    var9 = var6[var9];
    var11 = var5.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var3 = {};
            var5 = undefined;
            var1 = undefined;
            if(!var2) { _fun0009_ip = 104; continue _fun0009 }
case 45:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 17;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.radii;
            var1 = var4.xl;
case 104:
            var3['borderTopLeftRadius'] = var1;
            var1 = undefined;
            if(!var2) { _fun0009_ip = 105; continue _fun0009 }
case 106:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 17;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.radii;
            var1 = var2.xl;
case 105:
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
            var3 = 18;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var3 = 17;
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
            var7 = var7.space;
            var7 = var7.PX_4;
            var2['marginTop'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.space;
            var3 = var3.PX_16;
            var2['left'] = var3;
            var1['backButton'] = var2;
            return var1;
        }
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot23 = var9;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = 71;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreen(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 64;
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
            if(var7) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var9 = var13.id;
case 107:
            _closure2_slot1 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0011_ip = 77; continue _fun0011 }
case 36:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot13;
                    var1 = var3.bind(var4)(var5, var2);
case 77:
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0012_ip = 109; continue _fun0012 }
case 59:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 109:
                    if(!var2) { _fun0012_ip = 24; continue _fun0012 }
case 110:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 65;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 24:
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
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0013_ip = 111; continue _fun0013 }
case 59:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 111:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var3);
            var3 = 66;
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
                var1 = 67;
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
                var1 = 67;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot16;
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
                var1 = 68;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 41;
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
                var5 = _closure1_slot17;
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
                var1 = 67;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot16;
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
                var1 = 69;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 41;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 56;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0014_ip = 78; continue _fun0014 }
case 77:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0014_ip = 78; continue _fun0014 }
case 57:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 78:
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
                var1 = 70;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var16.bind(var18)(var15, var3);
            var3 = 30;
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
            if(var3) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var4 = _closure1_slot20;
            var3 = _closure1_slot26;
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
case 112:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();