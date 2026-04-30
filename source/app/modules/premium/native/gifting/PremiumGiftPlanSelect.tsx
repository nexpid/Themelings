// app/modules/premium/native/gifting/PremiumGiftPlanSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var8 = var4.Pressable;
    var _closure1_slot6 = var8;
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.jsxs;
    var _closure1_slot13 = var8;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var8 = var7.TIER_2;
    var4 = new Array(2);
    var4[0] = var8;
    var7 = var7.TIER_0;
    var4[1] = var7;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        var7 = arg1;
        var9 = arg2;
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var8;
        var1['container'] = var2;
        var2 = {};
        var10 = 'absolute';
        var2['position'] = var10;
        var2['width'] = var7;
        var11 = 0.1;
        var8 = var11 * var9;
        var2['height'] = var8;
        var8 = 1.75;
        var12 = var9 / var8;
        var11 = var11 * var9;
        var11 = var12 - var11;
        var2['top'] = var11;
        var1['headerBackground'] = var2;
        var2 = {};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.colors;
        var11 = var11.BACKGROUND_BASE_LOW;
        var2['color'] = var11;
        var1['headerBackgroundColor'] = var2;
        var2 = {};
        var2['position'] = var10;
        var2['width'] = var7;
        var8 = var9 / var8;
        var2['height'] = var8;
        var1['headerImageContainer'] = var2;
        var2 = {};
        var2['width'] = var7;
        var1['headerImage'] = var2;
        var2 = {};
        var2['width'] = var7;
        var7 = 10;
        var7 = var6[var7];
        var8 = var5.bind(var4)(var7);
        var7 = '#000000';
        var9 = var8.bind(var4)(var7);
        var8 = var9.alpha;
        var7 = 0.8;
        var8 = var8.bind(var9)(var7);
        var7 = var8.hex;
        var7 = var7.bind(var8)();
        var2['backgroundColor'] = var7;
        var1['headerOverlay'] = var2;
        var2 = {};
        var7 = 'center';
        var2['alignSelf'] = var7;
        var1['avatar'] = var2;
        var2 = {};
        var2['textAlign'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['marginTop'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginHorizontal'] = var8;
        var1['title'] = var2;
        var2 = {};
        var2['textAlign'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['marginTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_24;
        var2['marginHorizontal'] = var7;
        var1['description'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var2['marginTop'] = var7;
        var1['carousel'] = var2;
        var2 = {};
        var7 = 0;
        var2['marginBottom'] = var7;
        var1['pagination'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_48;
        var2['paddingBottom'] = var7;
        var1['dmGiftingContent'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var1['loadingContainer'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
        var1['closeButtonContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['padding'] = var7;
        var1['closeButton'] = var2;
        var2 = {'width': 24, 'height': 24, 'tintColor': 'white'};
        var1['closeButtonIcon'] = var2;
        var2 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['paddingHorizontal'] = var3;
        var1['giftBadgeBannerContainer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function PremiumGiftPlanSelectTsx2(value,index){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftPlanSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.shouldUseDMWishlistGiftingDesign;
            var2 = var2.isLoadingWishlist;
            var5 = undefined;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useNavigation;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var9 = _closure1_slot1;
            var4 = 12;
            var4 = var12[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var37 = var4.top;
            var18 = var4.bottom;
            var4 = 13;
            var4 = var12[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var31 = var4.width;
            var7 = var4.height;
            var4 = 14;
            var4 = var12[var4];
            var8 = var11.bind(var5)(var4);
            var4 = var8.useNativeGiftContext;
            var4 = var4.bind(var8)();
            var20 = var4.recipientUser;
            var21 = var4.claimableRewards;
            var _closure2_slot1 = var21;
            var13 = var4.onClose;
            var _closure2_slot2 = var13;
            var4 = 15;
            var4 = var12[var4];
            var8 = var11.bind(var5)(var4);
            var4 = var8.useIsScreenReaderEnabled;
            var19 = var4.bind(var8)();
            var34 = 16;
            var4 = var12[var34];
            var10 = var11.bind(var5)(var4);
            var8 = var10.useNavigatorBackPressHandler;
            var4 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var4 = var8.bind(var10)(var4);
            var4 = 17;
            var8 = var12[var4];
            var15 = var11.bind(var5)(var8);
            var14 = var15.useStateFromStoresArray;
            var8 = _closure1_slot10;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGiftPromotionRewardSkuIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var14.bind(var15)(var10, var8);
            var8 = 18;
            var8 = var12[var8];
            var10 = var11.bind(var5)(var8);
            var8 = var10.useSelectPremiumGift;
            var15 = 'PremiumGiftPlanSelect';
            var33 = var8.bind(var10)(var15);
            var _closure2_slot3 = var33;
            var8 = 19;
            var8 = var12[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.useConfig;
            var8 = {};
            var8['location'] = var15;
            var8 = var9.bind(var10)(var8);
            var9 = var8.enabled;
            var4 = var12[var4];
            var15 = var11.bind(var5)(var4);
            var10 = var15.useStateFromStoresObject;
            var4 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var8 = var4.getNextTier;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 20;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.BadgeId;
                var3 = var3.GIFTING;
                var3 = var8.bind(var4)(var3);
                var1['nextTier'] = var3;
                var3 = var4.getRemainingToNextTier;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.BadgeId;
                var2 = var2.GIFTING;
                var2 = var3.bind(var4)(var2);
                var1['giftsToNextTier'] = var2;
                return var1;
            };
            var4 = var10.bind(var15)(var8, var4);
            var15 = var4.nextTier;
            var17 = var4.giftsToNextTier;
            var4 = _closure1_slot16;
            var8 = var4.bind(var5)(var31, var7);
            var _closure2_slot4 = var8;
            var30 = _closure1_slot4;
            var4 = var30.useState;
            var23 = 0;
            var7 = var4.bind(var30)(var23);
            var4 = _closure1_slot3;
            var29 = 2;
            var7 = var4.bind(var5)(var7, var29);
            var43 = var7[var23];
            var _closure2_slot5 = var43;
            var28 = 1;
            var22 = var7[var28];
            var7 = var30.useState;
            var26 = false;
            var7 = var7.bind(var30)(var26);
            var10 = var4.bind(var5)(var7, var29);
            var7 = var10[var23];
            var10 = var10[var28];
            var _closure2_slot6 = var10;
            var16 = var30.useEffect;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var5 = _closure2_slot0;
                var4 = var5.addListener;
                var3 = 'state';
                var2 = function() {
                    var3 = _closure2_slot0;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var3 = var1.routes;
                    var1 = var1.index;
                    var1 = var3[var1];
                    var3 = _closure2_slot6;
                    var4 = var1.name;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.PremiumGiftScreens;
                    var2 = var2.PLAN_SELECT;
                    var2 = var4 === var2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var4 = _closure2_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot0;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = var16.bind(var30)(var3, var10);
            var3 = var30.useState;
            var16 = null;
            var3 = var3.bind(var30)(var16);
            var3 = var4.bind(var5)(var3, var29);
            var27 = var3[var23];
            var _closure2_slot7 = var27;
            var3 = var3[var28];
            var _closure2_slot8 = var3;
            var10 = var30.useRef;
            var4 = new Array(0);
            var32 = var10.bind(var30)(var4);
            var _closure2_slot9 = var32;
            var25 = var30.useEffect;
            var10 = new Array(1);
            var10[0] = var1;
            var4 = function() {
                var3 = _closure2_slot9;
                var2 = new Array(0);
                var3['current'] = var2;
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var25.bind(var30)(var4, var10);
            var10 = var30.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure1_slot15;
                    var2 = var2.length;
                    if(!(var3 >= var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var3 = _closure2_slot9;
                    var9 = var3.current;
                    var3 = new Array(0);
                    var8 = 0;
                    var10 = var3;
                    var6 = arraySpread(var10, var9, var8);
                    var10 = var4;
                    var9 = var3;
                    var8 = var5;
                    var3 = apply(var10, var9, var8);
                    var4 = var2.Number;
                    var2 = var4.isNaN;
                    var2 = var2.bind(var4)(var3);
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var10.bind(var30)(var3, var4);
            var _closure2_slot10 = var4;
            var3 = 0.86;
            var3 = var3 * var31;
            var _closure2_slot11 = var3;
            var25 = var30.useCallback;
            var10 = new Array(7);
            var10[0] = var33;
            var10[1] = var3;
            var10[2] = var32;
            var10[3] = var4;
            var10[4] = var27;
            var10[5] = var43;
            var10[6] = var21;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arguments[1];
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var3 = {};
                    var4 = false;
                    var3['forScreenReader'] = var4;
                    var2 = var3;
case 5:
                    var2 = var2.forScreenReader;
                    var _closure3_slot1 = var2;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var9 = var1.item;
                            var _closure4_slot0 = var9;
                            var8 = var1.index;
                            var _closure4_slot1 = var8;
                            var4 = _closure1_slot12;
                            var1 = _closure3_slot1;
                            if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                            var3 = _closure1_slot7;
                            _fun0004_ip = 9; continue _fun0004;
case 7:
                            var3 = _closure1_slot6;
case 9:
                            var2 = {};
                            var1 = _closure3_slot1;
                            if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                            var1 = undefined;
case 10:
                            var2['accessible'] = var1;
                            var7 = _closure3_slot1;
                            var1 = undefined;
                            var6 = undefined;
                            if(!var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                            var6 = 'button';
case 12:
                            var2['accessibilityRole'] = var6;
                            var7 = _closure3_slot1;
                            var6 = undefined;
                            if(!var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                            var6 = function() {
                                var3 = _closure2_slot3;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
case 14:
                            var2['onPress'] = var6;
                            var7 = {};
                            var6 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var13 = 9;
                            var13 = var11[var13];
                            var13 = var6.bind(var1)(var13);
                            var13 = var13.spacing;
                            var13 = var13.PX_8;
                            var7['paddingVertical'] = var13;
                            var2['style'] = var7;
                            var7 = _closure1_slot12;
                            var5 = 22;
                            var5 = var11[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = {};
                            var5['premiumType'] = var9;
                            var9 = _closure3_slot0;
                            var5['variant'] = var9;
                            var9 = function onPress() {
                                var3 = _closure2_slot3;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var5['onPress'] = var9;
                            var11 = {};
                            var14 = _closure2_slot7;
                            var13 = null;
                            var14 = var13 != var14;
                            var13 = undefined;
                            if(!var14) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var13 = _closure2_slot7;
case 16:
                            var11['height'] = var13;
                            var13 = _closure2_slot11;
                            var11['width'] = var13;
                            var14 = _closure3_slot0;
                            var13 = 'default';
                            var12 = undefined;
                            if(!(var13 === var14)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var12 = 'center';
case 18:
                            var11['alignSelf'] = var12;
                            var5['style'] = var11;
                            var10 = function onLayout(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var1 = arg1;
                                    var1 = var1.nativeEvent;
                                    var1 = var1.layout;
                                    var7 = var1.height;
                                    var6 = 0;
                                    if(!(var7 > var6)) { _fun0005_ip = 4; continue _fun0005 }
case 20:
                                    var8 = _closure2_slot9;
                                    var4 = var8.current;
                                    var3 = _closure4_slot1;
                                    var2 = global;
                                    var5 = var2.Math;
                                    var2 = var5.max;
                                    var8 = var8.current;
                                    var8 = var8[var3];
                                    var9 = null;
                                    var9 = var9 != var8;
                                    var6 = 0;
                                    if(!var9) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                    var6 = var8;
case 21:
                                    var2 = var2.bind(var5)(var7, var6);
                                    var4[var3] = var2;
                                    var2 = _closure2_slot10;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 4:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var5['onLayout'] = var10;
                            var10 = _closure2_slot1;
                            var5['claimableRewards'] = var10;
                            var9 = _closure2_slot5;
                            var9 = var9 === var8;
                            var5['isSelected'] = var9;
                            var5 = var7.bind(var1)(var6, var5, var8);
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var4 = var25.bind(var30)(var4, var10);
            var _closure2_slot12 = var4;
            var10 = 23;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.useIsWindowSmall;
            var10 = var10.bind(var11)();
            var11 = var16 != var21;
            if(!var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = var21.length;
            var11 = var12 > var23;
case 23:
            if(var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var10 = 'compact';
            if(!var11) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            var10 = 'smallCompact';
case 27:
            _closure2_slot13 = var10;
            var11 = _closure1_slot4;
            var25 = var11.useMemo;
            var12 = new Array(2);
            var12[0] = var4;
            var12[1] = var10;
            var10 = function() {
                var3 = _closure2_slot12;
                var2 = _closure2_slot13;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var25.bind(var11)(var10, var12);
            var12 = var11.useMemo;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                var3 = _closure2_slot12;
                var2 = undefined;
                var1 = 'default';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var42 = var12.bind(var11)(var4, var10);
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var4 = 24;
            var10 = var36[var4];
            var12 = var35.bind(var5)(var10);
            var10 = var12.useSharedValue;
            var30 = var10.bind(var12)(var26);
            _closure2_slot14 = var30;
            var25 = var11.useEffect;
            var12 = new Array(2);
            var12[0] = var30;
            var12[1] = var27;
            var10 = function() {
                var3 = _closure2_slot14;
                var2 = var3.set;
                var4 = _closure2_slot7;
                var1 = null;
                var1 = var1 != var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var10 = var25.bind(var11)(var10, var12);
            var4 = var36[var4];
            var12 = var35.bind(var5)(var4);
            var10 = var12.useAnimatedStyle;
            var4 = function he() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var1 = var2[var1];
                    var8 = undefined;
                    var1 = var3.bind(var8)(var1);
                    var1 = var1.STANDARD_EASING;
                    var6['easing'] = var1;
                    var1 = 500;
                    var6['duration'] = var1;
                    var1 = {};
                    var9 = 26;
                    var2 = var2[var9];
                    var10 = var3.bind(var8)(var2);
                    var5 = var10.withTiming;
                    var7 = _closure2_slot14;
                    var3 = var7.get;
                    var11 = var3.bind(var7)();
                    var3 = 0;
                    if(!var11) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var3 = 1;
case 28:
                    var3 = var5.bind(var10)(var3, var6);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.withTiming;
                    var8 = _closure2_slot14;
                    var2 = var8.get;
                    var8 = var2.bind(var8)();
                    var2 = 100;
                    if(!var8) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var2 = 0;
case 30:
                    var2 = var4.bind(var5)(var2, var6);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var25 = {};
            var44 = 25;
            var33 = var36[var44];
            var33 = var35.bind(var5)(var33);
            var33 = var33.STANDARD_EASING;
            var25['STANDARD_EASING'] = var33;
            var33 = 26;
            var33 = var36[var33];
            var33 = var35.bind(var5)(var33);
            var33 = var33.withTiming;
            var25['withTiming'] = var33;
            var25['carouselVisibility'] = var30;
            var4['__closure'] = var25;
            var25 = 2946262965957.0;
            var4['__workletHash'] = var25;
            var25 = _closure1_slot17;
            var4['__initData'] = var25;
            var30 = var10.bind(var12)(var4);
            var12 = var11.useMemo;
            var10 = new Array(1);
            var10[0] = var8;
            var4 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var1 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var1);
                var2 = _closure2_slot4;
                var1 = var2.headerBackgroundColor;
                var1 = var1.color;
                var8 = var7.bind(var4)(var1);
                var7 = var8.alpha;
                var1 = 0;
                var7 = var7.bind(var8)(var1);
                var1 = var7.hex;
                var7 = var1.bind(var7)();
                var1 = new Array(2);
                var1[0] = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = var2.headerBackgroundColor;
                var2 = var2.color;
                var4 = var3.bind(var4)(var2);
                var3 = var4.alpha;
                var2 = 1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.hex;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var12 = var12.bind(var11)(var4, var10);
            var36 = var3 + var34;
            _closure2_slot15 = var36;
            var4 = _closure1_slot15;
            var4 = var4.length;
            var35 = var4 - var28;
            _closure2_slot16 = var35;
            var4 = var31 - var3;
            var33 = var4 / var29;
            _closure2_slot17 = var33;
            var3 = var31 - var3;
            var25 = var3 - var34;
            _closure2_slot18 = var25;
            var10 = var11.useCallback;
            var4 = function fe(arg1, arg2) {
                var4 = arg1;
                var1 = arg2;
                var11 = var1 - var4;
                var1 = global;
                var5 = var1.Math;
                var3 = var5.max;
                var6 = var1.Math;
                var2 = var6.min;
                var10 = 1;
                var2 = var2.bind(var6)(var10, var11);
                var6 = 0;
                var8 = var3.bind(var5)(var6, var2);
                var3 = var1.Math;
                var2 = var3.max;
                var9 = var1.Math;
                var7 = var9.min;
                var1 = _closure2_slot16;
                var1 = var1 - var10;
                var1 = var11 - var1;
                var1 = var7.bind(var9)(var10, var1);
                var7 = var2.bind(var3)(var6, var1);
                var1 = {};
                var3 = {};
                var2 = _closure2_slot15;
                var4 = var4 * var2;
                var2 = _closure2_slot17;
                var6 = 16;
                var2 = var2 - var6;
                var2 = var8 * var2;
                var8 = _closure2_slot18;
                var5 = _closure2_slot17;
                var5 = var8 - var5;
                var5 = var7 * var5;
                var2 = var6 + var2;
                var2 = var2 + var5;
                var2 = var4 + var2;
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var3 = {};
            var3['lastItemIndex'] = var35;
            var3['leftOffset'] = var34;
            var3['centerOffset'] = var33;
            var3['rightOffset'] = var25;
            var3['carouselStep'] = var36;
            var4['__closure'] = var3;
            var3 = 8954351954675.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var4['__initData'] = var3;
            var3 = new Array(5);
            var3[0] = var36;
            var3[1] = var35;
            var3[2] = var34;
            var3[3] = var33;
            var3[4] = var25;
            var25 = var10.bind(var11)(var4, var3);
            if(var2) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var4 = _closure1_slot13;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = _closure1_slot14;
            var1 = {};
            if(!var7) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = _closure1_slot12;
            var10 = _closure1_slot1;
            var33 = _closure1_slot2;
            var3 = 30;
            var3 = var33[var3];
            var10 = var10.bind(var5)(var3);
            var3 = {'animated': true, 'barStyle': 'light-content'};
            var7 = var11.bind(var5)(var10, var3);
case 36:
            var3 = new Array(7);
            var3[0] = var7;
            var11 = _closure1_slot12;
            var10 = _closure1_slot6;
            var7 = {};
            var34 = var8.closeButtonContainer;
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var34['paddingTop'] = var37;
            var33[1] = var34;
            var7['style'] = var33;
            var7['onPress'] = var13;
            var13 = 'button';
            var7['accessibilityRole'] = var13;
            var36 = _closure1_slot0;
            var13 = _closure1_slot2;
            var45 = 31;
            var33 = var13[var45];
            var33 = var36.bind(var5)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var13[var45];
            var33 = var36.bind(var5)(var33);
            var33 = var33.t;
            var33 = var33.cpT0Cq;
            var33 = var34.bind(var35)(var33);
            var7['accessibilityLabel'] = var33;
            var33 = _closure1_slot7;
            var34 = {};
            var35 = var8.closeButton;
            var34['style'] = var35;
            var35 = 32;
            var35 = var13[var35];
            var35 = var36.bind(var5)(var35);
            var36 = var35.XSmallIcon;
            var35 = {};
            var38 = 'md';
            var35['size'] = var38;
            var38 = var8.closeButtonIcon;
            var35['style'] = var38;
            var35 = var11.bind(var5)(var36, var35);
            var34['children'] = var35;
            var34 = var11.bind(var5)(var33, var34);
            var7['children'] = var34;
            var7 = var11.bind(var5)(var10, var7);
            var3[1] = var7;
            var10 = _closure1_slot1;
            var7 = 33;
            var7 = var13[var7];
            var34 = var10.bind(var5)(var7);
            var7 = {};
            var35 = 'cover';
            var7['resizeMode'] = var35;
            var36 = var8.headerImageContainer;
            var35 = new Array(2);
            var35[0] = var36;
            var36 = var8.headerImage;
            var35[1] = var36;
            var7['style'] = var35;
            var35 = 34;
            var35 = var13[var35];
            var35 = var10.bind(var5)(var35);
            var7['source'] = var35;
            var7 = var11.bind(var5)(var34, var7);
            var3[2] = var7;
            var7 = {};
            var35 = var8.headerImageContainer;
            var34 = new Array(2);
            var34[0] = var35;
            var35 = var8.headerOverlay;
            var34[1] = var35;
            var7['style'] = var34;
            var7 = var11.bind(var5)(var33, var7);
            var3[3] = var7;
            var7 = 35;
            var7 = var13[var7];
            var10 = var10.bind(var5)(var7);
            var7 = {};
            var13 = var8.headerBackground;
            var7['style'] = var13;
            var13 = _closure1_slot11;
            var33 = var13.START;
            var7['start'] = var33;
            var13 = var13.END;
            var7['end'] = var13;
            var7['colors'] = var12;
            var7 = var11.bind(var5)(var10, var7);
            var3[4] = var7;
            var10 = _closure1_slot8;
            var7 = {};
            var12 = {};
            var13 = 0;
            if(!var9) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var13 = 96;
case 38:
            var13 = var18 + var13;
            var12['paddingBottom'] = var13;
            var7['contentContainerStyle'] = var12;
            var33 = _closure1_slot13;
            var13 = _closure1_slot7;
            var12 = {};
            var35 = {};
            var38 = _closure1_slot0;
            var34 = _closure1_slot2;
            var36 = 36;
            var36 = var34[var36];
            var36 = var38.bind(var5)(var36);
            var36 = var36.NAV_BAR_HEIGHT;
            var36 = var37 + var36;
            var37 = _closure1_slot1;
            var47 = 9;
            var34 = var34[var47];
            var34 = var37.bind(var5)(var34);
            var34 = var34.spacing;
            var34 = var34.PX_12;
            var34 = var36 + var34;
            var35['paddingTop'] = var34;
            var34 = new Array(1);
            var34[0] = var35;
            var12['style'] = var34;
            var35 = var16 != var20;
            if(!var35) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var37 = _closure1_slot12;
            var39 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = var38[var44];
            var34 = var39.bind(var5)(var34);
            var36 = var34.Avatar;
            var34 = {};
            var40 = var8.avatar;
            var34['style'] = var40;
            var34['guildId'] = var5;
            var38 = var38[var44];
            var38 = var39.bind(var5)(var38);
            var38 = var38.AvatarSizes;
            var38 = var38.XLARGE;
            var34['size'] = var38;
            var34['user'] = var20;
            var35 = var37.bind(var5)(var36, var34);
case 40:
            var34 = new Array(4);
            var34[0] = var35;
            var38 = _closure1_slot12;
            var37 = _closure1_slot0;
            var36 = _closure1_slot2;
            var35 = 37;
            var36 = var36[var35];
            var36 = var37.bind(var5)(var36);
            var37 = var36.Text;
            var36 = {'style': null, 'variant': 'heading-xxl/extrabold', 'color': 'always-white'};
            var39 = var8.title;
            var36['style'] = var39;
            if(!(var16 == var20)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var46 = _closure1_slot0;
            var39 = _closure1_slot2;
            var40 = var39[var45];
            var40 = var46.bind(var5)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var39 = var39[var45];
            var39 = var46.bind(var5)(var39);
            var39 = var39.t;
            var39 = var39.dqQgZv;
            var39 = var40.bind(var41)(var39);
            _fun0001_ip = 44; continue _fun0001;
case 42:
            var41 = _closure1_slot0;
            var40 = _closure1_slot2;
            var46 = var40[var45];
            var46 = var41.bind(var5)(var46);
            var48 = var46.intl;
            var46 = var48.formatToPlainString;
            var40 = var40[var45];
            var40 = var41.bind(var5)(var40);
            var40 = var40.t;
            var41 = var40.m5ggvH;
            var40 = {};
            var49 = var20.globalName;
            if(!(var16 == var49)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var49 = var20.username;
case 45:
            var40['username'] = var49;
            var39 = var46.bind(var48)(var41, var40);
case 44:
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            var34[1] = var36;
            var37 = _closure1_slot12;
            var41 = _closure1_slot0;
            var38 = _closure1_slot2;
            var35 = var38[var35];
            var35 = var41.bind(var5)(var35);
            var36 = var35.Text;
            var35 = {'style': null, 'variant': 'heading-sm/medium', 'color': 'always-white'};
            var39 = var8.description;
            var35['style'] = var39;
            var39 = var38[var45];
            var39 = var41.bind(var5)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var38[var45];
            var38 = var41.bind(var5)(var38);
            var38 = var38.t;
            var38 = var38["30qzrd"];
            var38 = var39.bind(var40)(var38);
            var35['children'] = var38;
            var35 = var37.bind(var5)(var36, var35);
            var34[2] = var35;
            var35 = var14.length;
            if(!(var23 !== var35)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var35 = null;
            if(!(var5 !== var21)) { _fun0001_ip = 49; continue _fun0001 }
case 47:
            if(var19) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var38 = _closure1_slot13;
            var37 = _closure1_slot14;
            var36 = {};
            var41 = _closure1_slot12;
            var40 = _closure1_slot1;
            var45 = _closure1_slot2;
            var39 = 27;
            var39 = var45[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var46 = var8.carousel;
            var45 = new Array(2);
            var45[0] = var46;
            var45[1] = var30;
            var39['style'] = var45;
            var45 = _closure1_slot15;
            var39['data'] = var45;
            var39['renderItem'] = var42;
            var39['width'] = var31;
            var45 = var16 != var27;
            var42 = undefined;
            if(!var45) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var46 = _closure1_slot1;
            var45 = _closure1_slot2;
            var45 = var45[var47];
            var45 = var46.bind(var5)(var45);
            var45 = var45.spacing;
            var45 = var45.PX_8;
            var45 = var29 * var45;
            var42 = var27 + var45;
case 52:
            var39['height'] = var42;
            var42 = function onConfigurePanGesture(arg1) {
                var3 = arg1;
                var2 = var3.activeOffsetX;
                var1 = new Array(2);
                var4 = -10;
                var1[0] = var4;
                var4 = 10;
                var1[1] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var39['onConfigurePanGesture'] = var42;
            var39['loop'] = var26;
            var42 = 200;
            var39['scrollAnimationDuration'] = var42;
            var42 = 'parallax';
            var39['mode'] = var42;
            var42 = {'parallaxScrollingScale': 1, 'parallaxScrollingOffset': 40};
            var39['modeConfig'] = var42;
            var39['onSnapToItem'] = var22;
            var40 = var41.bind(var5)(var40, var39);
            var39 = new Array(2);
            var39[0] = var40;
            var42 = _closure1_slot12;
            var41 = _closure1_slot0;
            var40 = _closure1_slot2;
            var40 = var40[var44];
            var40 = var41.bind(var5)(var40);
            var41 = var40.CarouselPagination;
            var40 = {};
            var44 = _closure1_slot15;
            var44 = var44.length;
            var40['numberOfItems'] = var44;
            var40['currentIndex'] = var43;
            var43 = var8.pagination;
            var40['containerStyle'] = var43;
            var40 = var42.bind(var5)(var41, var40);
            var39[1] = var40;
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            _fun0001_ip = 54; continue _fun0001;
case 50:
            var39 = _closure1_slot12;
            var38 = _closure1_slot8;
            var37 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var40 = var8.carousel;
            var37['style'] = var40;
            var40 = {'gap': 16, 'paddingHorizontal': 16};
            var37['contentContainerStyle'] = var40;
            var42 = _closure1_slot15;
            var41 = var42.map;
            var40 = function(arg1, arg2) {
                var4 = _closure2_slot12;
                var2 = {};
                var1 = true;
                var2['forScreenReader'] = var1;
                var3 = undefined;
                var1 = 'default';
                var2 = var4.bind(var3)(var1, var2);
                var1 = {};
                var4 = arg1;
                var1['item'] = var4;
                var4 = arg2;
                var1['index'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var40 = var41.bind(var42)(var40);
            var37['children'] = var40;
            var36 = var39.bind(var5)(var38, var37);
case 54:
            var35 = var36;
case 49:
            var34[3] = var35;
            var12['children'] = var34;
            var12 = var33.bind(var5)(var13, var12);
            var7['children'] = var12;
            var7 = var11.bind(var5)(var10, var7);
            var3[5] = var7;
            var7 = var9;
            if(!var9) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var7 = var16 != var15;
case 55:
            if(!var7) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var12 = _closure1_slot12;
            var11 = _closure1_slot7;
            var10 = {};
            var33 = var8.giftBadgeBannerContainer;
            var13 = new Array(2);
            var13[0] = var33;
            var33 = {};
            var33['paddingBottom'] = var18;
            var13[1] = var33;
            var10['style'] = var13;
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var13 = 29;
            var13 = var34[var13];
            var33 = var33.bind(var5)(var13);
            var13 = {};
            var13['giftsToNextTier'] = var17;
            var35 = var15.name;
            var36 = var16 != var35;
            var34 = '';
            if(!var36) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var34 = var35;
case 59:
            var13['nextTierName'] = var34;
            var34 = var15.simple_icon;
            var13['nextTierIcon'] = var34;
            var13 = var12.bind(var5)(var33, var13);
            var10['children'] = var13;
            var7 = var12.bind(var5)(var11, var10);
case 57:
            var3[6] = var7;
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 61; continue _fun0001;
case 34:
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var10 = _closure1_slot8;
            var7 = {};
            var11 = {};
            var12 = 0;
            if(!var9) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var12 = 96;
case 62:
            var12 = var18 + var12;
            var11['paddingBottom'] = var12;
            var7['contentContainerStyle'] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot7;
            var11 = {};
            var33 = var8.dmGiftingContent;
            var11['style'] = var33;
            var14 = var14.length;
            if(!(var23 !== var14)) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var14 = null;
            if(!(var5 !== var21)) { _fun0001_ip = 66; continue _fun0001 }
case 64:
            var23 = _closure1_slot12;
            if(var19) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var21 = _closure1_slot1;
            var33 = _closure1_slot2;
            var19 = 27;
            var19 = var33[var19];
            var21 = var21.bind(var5)(var19);
            var19 = {};
            var19['style'] = var30;
            var30 = _closure1_slot15;
            var19['data'] = var30;
            var19['renderItem'] = var32;
            var19['width'] = var31;
            var30 = var30.length;
            var19['windowSize'] = var30;
            var30 = var16 != var27;
            if(!var30) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var28 = var27;
case 69:
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var27 = 9;
            var27 = var31[var27];
            var27 = var30.bind(var5)(var27);
            var27 = var27.spacing;
            var27 = var27.PX_8;
            var27 = var29 * var27;
            var27 = var28 + var27;
            var19['height'] = var27;
            var27 = function onConfigurePanGesture(arg1) {
                var3 = arg1;
                var2 = var3.activeOffsetX;
                var1 = new Array(2);
                var4 = -10;
                var1[0] = var4;
                var4 = 10;
                var1[1] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var19['onConfigurePanGesture'] = var27;
            var19['loop'] = var26;
            var26 = 200;
            var19['scrollAnimationDuration'] = var26;
            var19['customAnimation'] = var25;
            var19['onSnapToItem'] = var22;
            var19 = var23.bind(var5)(var21, var19);
            _fun0001_ip = 71; continue _fun0001;
case 67:
            var22 = _closure1_slot8;
            var21 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var25 = {'gap': 16, 'paddingHorizontal': 16};
            var21['contentContainerStyle'] = var25;
            var26 = _closure1_slot15;
            var25 = var26.map;
            var24 = function(arg1, arg2) {
                var4 = _closure2_slot12;
                var2 = _closure2_slot13;
                var1 = {};
                var3 = true;
                var1['forScreenReader'] = var3;
                var3 = undefined;
                var2 = var4.bind(var3)(var2, var1);
                var1 = {};
                var4 = arg1;
                var1['item'] = var4;
                var4 = arg2;
                var1['index'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var25.bind(var26)(var24);
            var21['children'] = var24;
            var19 = var23.bind(var5)(var22, var21);
case 71:
            var14 = var19;
case 66:
            var11['children'] = var14;
            var12 = var13.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = var16 != var20;
            if(!var12) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var19 = _closure1_slot12;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 28;
            var13 = var21[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.PremiumGiftWishlistBanner;
            var13 = {};
            var13['giftRecipient'] = var20;
            var12 = var19.bind(var5)(var14, var13);
case 72:
            var11[1] = var12;
            var7['children'] = var11;
            var10 = var4.bind(var5)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            if(!var9) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var9 = var16 != var15;
case 74:
            if(!var9) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var12 = _closure1_slot12;
            var11 = _closure1_slot7;
            var10 = {};
            var14 = var8.giftBadgeBannerContainer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['paddingBottom'] = var18;
            var13[1] = var14;
            var10['style'] = var13;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 29;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['giftsToNextTier'] = var17;
            var17 = var15.name;
            var18 = var16 != var17;
            var16 = '';
            if(!var18) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var16 = var17;
case 78:
            var13['nextTierName'] = var16;
            var15 = var15.simple_icon;
            var13['nextTierIcon'] = var15;
            var13 = var12.bind(var5)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 76:
            var7[1] = var9;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 61:
            _fun0001_ip = 80; continue _fun0001;
case 32:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var9 = var8.container;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = var8.loadingContainer;
            var7[1] = var8;
            var2['style'] = var7;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = 'large';
            var6['size'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 80:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();