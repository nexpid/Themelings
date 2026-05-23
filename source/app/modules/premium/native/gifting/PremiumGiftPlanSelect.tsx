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
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var11 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var3 = 1;
            var2['flex'] = var3;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 9;
            var10 = var9[var6];
            var5 = undefined;
            var10 = var8.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var10;
            var1['container'] = var2;
            var2 = {};
            var12 = 'absolute';
            var2['position'] = var12;
            var2['width'] = var7;
            var13 = 0.1;
            var10 = var13 * var11;
            var2['height'] = var10;
            var10 = 1.75;
            var14 = var11 / var10;
            var13 = var13 * var11;
            var13 = var14 - var13;
            var2['top'] = var13;
            var1['headerBackground'] = var2;
            var2 = {};
            var13 = var9[var6];
            var13 = var8.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_BASE_LOW;
            var2['color'] = var13;
            var1['headerBackgroundColor'] = var2;
            var2 = {};
            var2['position'] = var12;
            var2['width'] = var7;
            var10 = var11 / var10;
            var2['height'] = var10;
            var1['headerImageContainer'] = var2;
            var2 = {};
            var2['width'] = var7;
            var1['headerImage'] = var2;
            var2 = {};
            var2['width'] = var7;
            var7 = 10;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = '#000000';
            var9 = var8.bind(var5)(var7);
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
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var9 = var8.spacing;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9.PX_12;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var9.PX_16;
case 4:
            var2['marginTop'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_24;
            var2['marginHorizontal'] = var8;
            var1['title'] = var2;
            var2 = {};
            var2['textAlign'] = var7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var8 = var7.spacing;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = var8.PX_12;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var7 = var8.PX_16;
case 7:
            var2['marginTop'] = var7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_24;
            var2['marginHorizontal'] = var7;
            var1['description'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var7.PX_32;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = var7.PX_16;
case 10:
            var2['marginTop'] = var4;
            var1['carousel'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingTop'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_48;
            var2['paddingBottom'] = var7;
            var1['dmGiftingContent'] = var2;
            var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
            var1['loadingContainer'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
            var1['closeButtonContainer'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['padding'] = var7;
            var1['closeButton'] = var2;
            var2 = {'width': 24, 'height': 24, 'tintColor': 'white'};
            var1['closeButtonIcon'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['marginTop'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['marginHorizontal'] = var3;
            var1['badgeBanner'] = var2;
            return var1;
        }
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
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftPlanSelect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.shouldUseDMWishlistGiftingDesign;
            var2 = var2.isLoadingWishlist;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 11;
            var3 = var9[var3];
            var4 = var8.bind(var5)(var3);
            var3 = var4.useNavigation;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var11 = _closure1_slot1;
            var4 = 12;
            var4 = var9[var4];
            var4 = var11.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var37 = var4.top;
            var14 = var4.bottom;
            var4 = 13;
            var4 = var9[var4];
            var4 = var11.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var29 = var4.width;
            var7 = var4.height;
            var4 = 14;
            var4 = var9[var4];
            var10 = var8.bind(var5)(var4);
            var4 = var10.useNativeGiftContext;
            var4 = var4.bind(var10)();
            var16 = var4.recipientUser;
            var19 = var4.claimableRewards;
            var _closure2_slot1 = var19;
            var15 = var4.onClose;
            var _closure2_slot2 = var15;
            var4 = 15;
            var4 = var9[var4];
            var10 = var8.bind(var5)(var4);
            var4 = var10.useIsScreenReaderEnabled;
            var18 = var4.bind(var10)();
            var32 = 16;
            var4 = var9[var32];
            var12 = var8.bind(var5)(var4);
            var10 = var12.useNavigatorBackPressHandler;
            var4 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var4 = var10.bind(var12)(var4);
            var4 = 17;
            var10 = var9[var4];
            var17 = var8.bind(var5)(var10);
            var13 = var17.useStateFromStoresArray;
            var10 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGiftPromotionRewardSkuIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var13.bind(var17)(var12, var10);
            var10 = 18;
            var10 = var9[var10];
            var12 = var8.bind(var5)(var10);
            var10 = var12.useSelectPremiumGift;
            var13 = 'PremiumGiftPlanSelect';
            var28 = var10.bind(var12)(var13);
            var _closure2_slot3 = var28;
            var10 = 19;
            var10 = var9[var10];
            var12 = var11.bind(var5)(var10);
            var11 = var12.useConfig;
            var10 = {};
            var10['location'] = var13;
            var10 = var11.bind(var12)(var10);
            var11 = var10.enabled;
            var4 = var9[var4];
            var10 = var8.bind(var5)(var4);
            var9 = var10.useStateFromStoresObject;
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
            var4 = var9.bind(var10)(var8, var4);
            var35 = var4.nextTier;
            var36 = var4.giftsToNextTier;
            if(!var11) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = null;
            var11 = var4 != var35;
case 11:
            _closure2_slot4 = var11;
            var4 = _closure1_slot16;
            var8 = var4.bind(var5)(var29, var7, var11);
            _closure2_slot5 = var8;
            var13 = _closure1_slot4;
            var4 = var13.useState;
            var21 = 0;
            var7 = var4.bind(var13)(var21);
            var4 = _closure1_slot3;
            var27 = 2;
            var7 = var4.bind(var5)(var7, var27);
            var44 = var7[var21];
            _closure2_slot6 = var44;
            var26 = 1;
            var20 = var7[var26];
            var7 = var13.useState;
            var24 = false;
            var7 = var7.bind(var13)(var24);
            var9 = var4.bind(var5)(var7, var27);
            var7 = var9[var21];
            var9 = var9[var26];
            _closure2_slot7 = var9;
            var10 = var13.useEffect;
            var9 = new Array(1);
            var9[0] = var3;
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
                    var3 = _closure2_slot7;
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
            var3 = var10.bind(var13)(var3, var9);
            var3 = var13.useState;
            var12 = null;
            var3 = var3.bind(var13)(var12);
            var3 = var4.bind(var5)(var3, var27);
            var25 = var3[var21];
            _closure2_slot8 = var25;
            var3 = var3[var26];
            _closure2_slot9 = var3;
            var9 = var13.useRef;
            var4 = new Array(0);
            var23 = var9.bind(var13)(var4);
            _closure2_slot10 = var23;
            var10 = var13.useEffect;
            var9 = new Array(1);
            var9[0] = var1;
            var4 = function() {
                var3 = _closure2_slot10;
                var2 = new Array(0);
                var3['current'] = var2;
                var3 = _closure2_slot9;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var10.bind(var13)(var4, var9);
            var9 = var13.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure1_slot15;
                    var2 = var2.length;
                    if(!(var3 >= var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var3 = _closure2_slot10;
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
                    if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var9.bind(var13)(var3, var4);
            _closure2_slot11 = var4;
            var10 = var13.useCallback;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = new Array(0);
            var33 = var10.bind(var13)(var9, var3);
            var3 = 0.86;
            var3 = var3 * var29;
            _closure2_slot12 = var3;
            var10 = var13.useCallback;
            var9 = new Array(7);
            var9[0] = var28;
            var9[1] = var3;
            var9[2] = var23;
            var9[3] = var4;
            var9[4] = var25;
            var9[5] = var44;
            var9[6] = var19;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arguments[1];
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = {};
                    var4 = false;
                    var3['forScreenReader'] = var4;
                    var2 = var3;
case 16:
                    var2 = var2.forScreenReader;
                    var _closure3_slot1 = var2;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var9 = var1.item;
                            var _closure4_slot0 = var9;
                            var8 = var1.index;
                            var _closure4_slot1 = var8;
                            var4 = _closure1_slot12;
                            var1 = _closure3_slot1;
                            if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var3 = _closure1_slot7;
                            _fun0005_ip = 20; continue _fun0005;
case 18:
                            var3 = _closure1_slot6;
case 20:
                            var2 = {};
                            var1 = _closure3_slot1;
                            if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var1 = undefined;
case 21:
                            var2['accessible'] = var1;
                            var7 = _closure3_slot1;
                            var1 = undefined;
                            var6 = undefined;
                            if(!var7) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                            var6 = 'button';
case 23:
                            var2['accessibilityRole'] = var6;
                            var7 = _closure3_slot1;
                            var6 = undefined;
                            if(!var7) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var6 = function() {
                                var3 = _closure2_slot3;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
case 25:
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
                            var5 = 23;
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
                            var14 = _closure2_slot8;
                            var13 = null;
                            var14 = var13 != var14;
                            var13 = undefined;
                            if(!var14) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var13 = _closure2_slot8;
case 27:
                            var11['height'] = var13;
                            var13 = _closure2_slot12;
                            var11['width'] = var13;
                            var14 = _closure3_slot0;
                            var13 = 'default';
                            var12 = undefined;
                            if(!(var13 === var14)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                            var12 = 'center';
case 29:
                            var11['alignSelf'] = var12;
                            var5['style'] = var11;
                            var10 = function onLayout(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var1 = arg1;
                                    var1 = var1.nativeEvent;
                                    var1 = var1.layout;
                                    var7 = var1.height;
                                    var6 = 0;
                                    if(!(var7 > var6)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                                    var2 = _closure2_slot10;
                                    var4 = var2.current;
                                    var3 = _closure4_slot1;
                                    var2 = global;
                                    var5 = var2.Math;
                                    var2 = var5.max;
                                    var8 = _closure2_slot10;
                                    var8 = var8.current;
                                    var8 = var8[var3];
                                    var9 = null;
                                    var9 = var9 != var8;
                                    var6 = 0;
                                    if(!var9) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                                    var6 = var8;
case 33:
                                    var2 = var2.bind(var5)(var7, var6);
                                    var4[var3] = var2;
                                    var2 = _closure2_slot11;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 31:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var5['onLayout'] = var10;
                            var10 = _closure2_slot1;
                            var5['claimableRewards'] = var10;
                            var9 = _closure2_slot6;
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
            var4 = var10.bind(var13)(var4, var9);
            _closure2_slot13 = var4;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 24;
            var9 = var13[var9];
            var10 = var10.bind(var5)(var9);
            var9 = var10.useIsWindowSmall;
            var9 = var9.bind(var10)();
            var10 = var12 != var19;
            var13 = var11;
            if(!var10) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var11 = var19.length;
            var10 = var11 > var21;
case 35:
            if(var9) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var9 = 'compact';
            if(!var10) { _fun0002_ip = 39; continue _fun0002 }
case 37:
            var9 = 'smallCompact';
case 39:
            _closure2_slot14 = var9;
            var10 = _closure1_slot4;
            var23 = var10.useMemo;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var9;
            var9 = function() {
                var3 = _closure2_slot13;
                var2 = _closure2_slot14;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var30 = var23.bind(var10)(var9, var11);
            var11 = var10.useMemo;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var3 = _closure2_slot13;
                var2 = undefined;
                var1 = 'default';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var43 = var11.bind(var10)(var4, var9);
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var4 = 25;
            var9 = var38[var4];
            var11 = var34.bind(var5)(var9);
            var9 = var11.useSharedValue;
            var28 = var9.bind(var11)(var24);
            _closure2_slot15 = var28;
            var23 = var10.useEffect;
            var11 = new Array(2);
            var11[0] = var28;
            var11[1] = var25;
            var9 = function() {
                var3 = _closure2_slot15;
                var2 = var3.set;
                var4 = _closure2_slot8;
                var1 = null;
                var1 = var1 != var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9 = var23.bind(var10)(var9, var11);
            var4 = var38[var4];
            var11 = var34.bind(var5)(var4);
            var9 = var11.useAnimatedStyle;
            var4 = function pe() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var1 = var2[var1];
                    var8 = undefined;
                    var1 = var3.bind(var8)(var1);
                    var1 = var1.STANDARD_EASING;
                    var6['easing'] = var1;
                    var1 = 500;
                    var6['duration'] = var1;
                    var1 = {};
                    var9 = 27;
                    var2 = var2[var9];
                    var10 = var3.bind(var8)(var2);
                    var5 = var10.withTiming;
                    var7 = _closure2_slot15;
                    var3 = var7.get;
                    var11 = var3.bind(var7)();
                    var3 = 0;
                    if(!var11) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var3 = 1;
case 40:
                    var3 = var5.bind(var10)(var3, var6);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.withTiming;
                    var8 = _closure2_slot15;
                    var2 = var8.get;
                    var8 = var2.bind(var8)();
                    var2 = 100;
                    if(!var8) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var2 = 0;
case 42:
                    var2 = var4.bind(var5)(var2, var6);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var23 = {};
            var45 = 26;
            var31 = var38[var45];
            var31 = var34.bind(var5)(var31);
            var31 = var31.STANDARD_EASING;
            var23['STANDARD_EASING'] = var31;
            var31 = 27;
            var31 = var38[var31];
            var31 = var34.bind(var5)(var31);
            var31 = var31.withTiming;
            var23['withTiming'] = var31;
            var23['carouselVisibility'] = var28;
            var4['__closure'] = var23;
            var23 = 2946262965957.0;
            var4['__workletHash'] = var23;
            var23 = _closure1_slot17;
            var4['__initData'] = var23;
            var28 = var9.bind(var11)(var4);
            var11 = var10.useMemo;
            var9 = new Array(1);
            var9[0] = var8;
            var4 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var1 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var1);
                var1 = _closure2_slot5;
                var1 = var1.headerBackgroundColor;
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
                var2 = _closure2_slot5;
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
            var11 = var11.bind(var10)(var4, var9);
            var38 = var3 + var32;
            _closure2_slot16 = var38;
            var4 = _closure1_slot15;
            var4 = var4.length;
            var34 = var4 - var26;
            _closure2_slot17 = var34;
            var4 = var29 - var3;
            var31 = var4 / var27;
            _closure2_slot18 = var31;
            var3 = var29 - var3;
            var23 = var3 - var32;
            _closure2_slot19 = var23;
            var9 = var10.useCallback;
            var4 = function Se(arg1, arg2) {
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
                var1 = _closure2_slot17;
                var1 = var1 - var10;
                var1 = var11 - var1;
                var1 = var7.bind(var9)(var10, var1);
                var7 = var2.bind(var3)(var6, var1);
                var1 = {};
                var3 = {};
                var2 = _closure2_slot16;
                var4 = var4 * var2;
                var2 = _closure2_slot18;
                var6 = 16;
                var2 = var2 - var6;
                var2 = var8 * var2;
                var8 = _closure2_slot19;
                var5 = _closure2_slot18;
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
            var3['lastItemIndex'] = var34;
            var3['leftOffset'] = var32;
            var3['centerOffset'] = var31;
            var3['rightOffset'] = var23;
            var3['carouselStep'] = var38;
            var4['__closure'] = var3;
            var3 = 8954351954675.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var4['__initData'] = var3;
            var3 = new Array(5);
            var3[0] = var38;
            var3[1] = var34;
            var3[2] = var32;
            var3[3] = var31;
            var3[4] = var23;
            var23 = var9.bind(var10)(var4, var3);
            if(var2) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            if(var1) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            if(!var7) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var10 = _closure1_slot12;
            var9 = _closure1_slot1;
            var31 = _closure1_slot2;
            var4 = 31;
            var4 = var31[var4];
            var9 = var9.bind(var5)(var4);
            var4 = {'animated': true, 'barStyle': 'light-content'};
            var7 = var10.bind(var5)(var9, var4);
case 48:
            var4 = new Array(6);
            var4[0] = var7;
            var10 = _closure1_slot12;
            var9 = _closure1_slot6;
            var7 = {};
            var32 = var8.closeButtonContainer;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var32['paddingTop'] = var37;
            var31[1] = var32;
            var7['style'] = var31;
            var7['onPress'] = var15;
            var40 = 'button';
            var7['accessibilityRole'] = var40;
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var47 = 32;
            var15 = var39[var47];
            var15 = var38.bind(var5)(var15);
            var32 = var15.intl;
            var31 = var32.string;
            var15 = var39[var47];
            var15 = var38.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.cpT0Cq;
            var15 = var31.bind(var32)(var15);
            var7['accessibilityLabel'] = var15;
            var31 = _closure1_slot7;
            var15 = {};
            var32 = var8.closeButton;
            var15['style'] = var32;
            var32 = 33;
            var32 = var39[var32];
            var32 = var38.bind(var5)(var32);
            var34 = var32.XSmallIcon;
            var32 = {};
            var41 = 'md';
            var32['size'] = var41;
            var41 = var8.closeButtonIcon;
            var32['style'] = var41;
            var32 = var10.bind(var5)(var34, var32);
            var15['children'] = var32;
            var15 = var10.bind(var5)(var31, var15);
            var7['children'] = var15;
            var7 = var10.bind(var5)(var9, var7);
            var4[1] = var7;
            var9 = _closure1_slot1;
            var7 = 34;
            var7 = var39[var7];
            var15 = var9.bind(var5)(var7);
            var7 = {};
            var32 = 'cover';
            var7['resizeMode'] = var32;
            var34 = var8.headerImageContainer;
            var32 = new Array(2);
            var32[0] = var34;
            var34 = var8.headerImage;
            var32[1] = var34;
            var7['style'] = var32;
            var32 = 35;
            var32 = var39[var32];
            var32 = var9.bind(var5)(var32);
            var7['source'] = var32;
            var7 = var10.bind(var5)(var15, var7);
            var4[2] = var7;
            var7 = {};
            var32 = var8.headerImageContainer;
            var15 = new Array(2);
            var15[0] = var32;
            var32 = var8.headerOverlay;
            var15[1] = var32;
            var7['style'] = var15;
            var7 = var10.bind(var5)(var31, var7);
            var4[3] = var7;
            var7 = 36;
            var7 = var39[var7];
            var9 = var9.bind(var5)(var7);
            var7 = {};
            var15 = var8.headerBackground;
            var7['style'] = var15;
            var15 = _closure1_slot11;
            var32 = var15.START;
            var7['start'] = var32;
            var15 = var15.END;
            var7['end'] = var15;
            var7['colors'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[4] = var7;
            var9 = _closure1_slot8;
            var7 = {};
            var11 = {};
            var11['paddingBottom'] = var14;
            var7['contentContainerStyle'] = var11;
            var15 = _closure1_slot13;
            var11 = {};
            var34 = {};
            var32 = 37;
            var32 = var39[var32];
            var32 = var38.bind(var5)(var32);
            var32 = var32.NAV_BAR_HEIGHT;
            var32 = var37 + var32;
            var34['paddingTop'] = var32;
            var32 = new Array(1);
            var32[0] = var34;
            var11['style'] = var32;
            var34 = var12 != var16;
            if(!var34) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var38 = _closure1_slot12;
            var37 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var45];
            var32 = var37.bind(var5)(var32);
            var37 = var32.Avatar;
            var32 = {};
            var39 = var8.avatar;
            var32['style'] = var39;
            var32['guildId'] = var5;
            var41 = _closure1_slot0;
            var39 = _closure1_slot2;
            var39 = var39[var45];
            var39 = var41.bind(var5)(var39);
            var41 = var39.AvatarSizes;
            if(var13) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var39 = var41.XLARGE;
            _fun0002_ip = 54; continue _fun0002;
case 52:
            var39 = var41.LARGE_48;
case 54:
            var32['size'] = var39;
            var32['user'] = var16;
            var34 = var38.bind(var5)(var37, var32);
case 50:
            var32 = new Array(5);
            var32[0] = var34;
            var39 = _closure1_slot12;
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var34 = 38;
            var37 = var37[var34];
            var37 = var38.bind(var5)(var37);
            var38 = var37.Text;
            var37 = {};
            var41 = var8.title;
            var37['style'] = var41;
            var42 = var12 != var16;
            var41 = 'heading-xxl/extrabold';
            if(!var42) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var41 = 'heading-xl/extrabold';
case 55:
            var37['variant'] = var41;
            var41 = 'always-white';
            var37['color'] = var41;
            if(!(var12 == var16)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var48 = _closure1_slot0;
            var41 = _closure1_slot2;
            var42 = var41[var47];
            var42 = var48.bind(var5)(var42);
            var46 = var42.intl;
            var42 = var46.string;
            var41 = var41[var47];
            var41 = var48.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.dqQgZv;
            var41 = var42.bind(var46)(var41);
            _fun0002_ip = 59; continue _fun0002;
case 57:
            var46 = _closure1_slot0;
            var42 = _closure1_slot2;
            var48 = var42[var47];
            var48 = var46.bind(var5)(var48);
            var49 = var48.intl;
            var48 = var49.formatToPlainString;
            var42 = var42[var47];
            var42 = var46.bind(var5)(var42);
            var42 = var42.t;
            var46 = var42.m5ggvH;
            var42 = {};
            var50 = var16.globalName;
            if(!(var12 == var50)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var50 = var16.username;
case 60:
            var42['username'] = var50;
            var41 = var48.bind(var49)(var46, var42);
case 59:
            var37['children'] = var41;
            var37 = var39.bind(var5)(var38, var37);
            var32[1] = var37;
            var38 = _closure1_slot12;
            var46 = _closure1_slot0;
            var39 = _closure1_slot2;
            var34 = var39[var34];
            var34 = var46.bind(var5)(var34);
            var37 = var34.Text;
            var34 = {'style': null, 'variant': 'heading-sm/medium', 'color': 'always-white'};
            var41 = var8.description;
            var34['style'] = var41;
            var41 = var39[var47];
            var41 = var46.bind(var5)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var39 = var39[var47];
            var39 = var46.bind(var5)(var39);
            var39 = var39.t;
            var39 = var39["30qzrd"];
            var39 = var41.bind(var42)(var39);
            var34['children'] = var39;
            var34 = var38.bind(var5)(var37, var34);
            var32[2] = var34;
            var34 = var13;
            if(!var13) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var39 = _closure1_slot12;
            var38 = _closure1_slot6;
            var37 = {};
            var41 = var8.badgeBanner;
            var37['style'] = var41;
            var37['onPress'] = var33;
            var37['accessibilityRole'] = var40;
            var41 = _closure1_slot1;
            var42 = _closure1_slot2;
            var40 = 28;
            var40 = var42[var40];
            var41 = var41.bind(var5)(var40);
            var40 = {};
            var40['giftsToNextTier'] = var36;
            var46 = var35.name;
            var47 = var12 != var46;
            var42 = '';
            if(!var47) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var42 = var46;
case 64:
            var40['nextTierName'] = var42;
            var42 = var35.simple_icon_url;
            var40['nextTierIcon'] = var42;
            var40 = var39.bind(var5)(var41, var40);
            var37['children'] = var40;
            var34 = var39.bind(var5)(var38, var37);
case 62:
            var32[3] = var34;
            var34 = var17.length;
            if(!(var21 !== var34)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var34 = null;
            if(!(var5 !== var19)) { _fun0002_ip = 68; continue _fun0002 }
case 66:
            if(var18) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var39 = _closure1_slot13;
            var38 = _closure1_slot14;
            var37 = {};
            var42 = _closure1_slot12;
            var41 = _closure1_slot1;
            var46 = _closure1_slot2;
            var40 = 29;
            var40 = var46[var40];
            var41 = var41.bind(var5)(var40);
            var40 = {};
            var47 = var8.carousel;
            var46 = new Array(2);
            var46[0] = var47;
            var46[1] = var28;
            var40['style'] = var46;
            var46 = _closure1_slot15;
            var40['data'] = var46;
            if(!var13) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var43 = var30;
case 71:
            var40['renderItem'] = var43;
            var40['width'] = var29;
            var46 = var12 != var25;
            var43 = undefined;
            if(!var46) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var47 = _closure1_slot1;
            var48 = _closure1_slot2;
            var46 = 9;
            var46 = var48[var46];
            var46 = var47.bind(var5)(var46);
            var46 = var46.spacing;
            var46 = var46.PX_8;
            var46 = var27 * var46;
            var43 = var25 + var46;
case 73:
            var40['height'] = var43;
            var43 = function onConfigurePanGesture(arg1) {
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
            var40['onConfigurePanGesture'] = var43;
            var40['loop'] = var24;
            var43 = 200;
            var40['scrollAnimationDuration'] = var43;
            var43 = undefined;
            if(!var13) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var43 = var23;
case 75:
            var40['customAnimation'] = var43;
            var43 = 'parallax';
            var40['mode'] = var43;
            var43 = {'parallaxScrollingScale': 1, 'parallaxScrollingOffset': 40};
            var40['modeConfig'] = var43;
            var40['onSnapToItem'] = var20;
            var41 = var42.bind(var5)(var41, var40);
            var40 = new Array(2);
            var40[0] = var41;
            var43 = _closure1_slot12;
            var42 = _closure1_slot0;
            var41 = _closure1_slot2;
            var41 = var41[var45];
            var41 = var42.bind(var5)(var41);
            var42 = var41.CarouselPagination;
            var41 = {};
            var45 = _closure1_slot15;
            var45 = var45.length;
            var41['numberOfItems'] = var45;
            var41['currentIndex'] = var44;
            var41 = var43.bind(var5)(var42, var41);
            var40[1] = var41;
            var37['children'] = var40;
            var37 = var39.bind(var5)(var38, var37);
            _fun0002_ip = 77; continue _fun0002;
case 69:
            var40 = _closure1_slot12;
            var39 = _closure1_slot8;
            var38 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var41 = var8.carousel;
            var38['style'] = var41;
            var41 = {'gap': 16, 'paddingHorizontal': 16};
            var38['contentContainerStyle'] = var41;
            var43 = _closure1_slot15;
            var42 = var43.map;
            var41 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot13;
                    var3 = _closure2_slot4;
                    var2 = 'default';
                    if(!var3) { _fun0008_ip = 78; continue _fun0008 }
case 17:
                    var2 = _closure2_slot14;
case 78:
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
                }
            };
            var41 = var42.bind(var43)(var41);
            var38['children'] = var41;
            var37 = var40.bind(var5)(var39, var38);
case 77:
            var34 = var37;
case 68:
            var32[4] = var34;
            var11['children'] = var32;
            var11 = var15.bind(var5)(var31, var11);
            var7['children'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[5] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 79; continue _fun0002;
case 46:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var10 = _closure1_slot13;
            var9 = _closure1_slot8;
            var7 = {};
            var11 = {};
            var11['paddingBottom'] = var14;
            var7['contentContainerStyle'] = var11;
            if(!var13) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var15 = _closure1_slot12;
            var14 = _closure1_slot7;
            var11 = {};
            var31 = var8.badgeBanner;
            var11['style'] = var31;
            var32 = _closure1_slot6;
            var31 = {};
            var31['onPress'] = var33;
            var33 = 'button';
            var31['accessibilityRole'] = var33;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var33 = 28;
            var33 = var37[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var33['giftsToNextTier'] = var36;
            var37 = var35.name;
            var38 = var12 != var37;
            var36 = '';
            if(!var38) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var36 = var37;
case 82:
            var33['nextTierName'] = var36;
            var35 = var35.simple_icon_url;
            var33['nextTierIcon'] = var35;
            var33 = var15.bind(var5)(var34, var33);
            var31['children'] = var33;
            var31 = var15.bind(var5)(var32, var31);
            var11['children'] = var31;
            var13 = var15.bind(var5)(var14, var11);
case 80:
            var11 = new Array(3);
            var11[0] = var13;
            var15 = _closure1_slot12;
            var14 = _closure1_slot7;
            var13 = {};
            var31 = var8.dmGiftingContent;
            var13['style'] = var31;
            var17 = var17.length;
            if(!(var21 !== var17)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var17 = null;
            if(!(var5 !== var19)) { _fun0002_ip = 86; continue _fun0002 }
case 84:
            var21 = _closure1_slot12;
            if(var18) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var19 = _closure1_slot1;
            var31 = _closure1_slot2;
            var18 = 29;
            var18 = var31[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['style'] = var28;
            var28 = _closure1_slot15;
            var18['data'] = var28;
            var18['renderItem'] = var30;
            var18['width'] = var29;
            var28 = var28.length;
            var18['windowSize'] = var28;
            var28 = var12 != var25;
            if(!var28) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var26 = var25;
case 89:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var25 = 9;
            var25 = var29[var25];
            var25 = var28.bind(var5)(var25);
            var25 = var25.spacing;
            var25 = var25.PX_8;
            var25 = var27 * var25;
            var25 = var26 + var25;
            var18['height'] = var25;
            var25 = function onConfigurePanGesture(arg1) {
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
            var18['onConfigurePanGesture'] = var25;
            var18['loop'] = var24;
            var24 = 200;
            var18['scrollAnimationDuration'] = var24;
            var18['customAnimation'] = var23;
            var18['onSnapToItem'] = var20;
            var18 = var21.bind(var5)(var19, var18);
            _fun0002_ip = 91; continue _fun0002;
case 87:
            var20 = _closure1_slot8;
            var19 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var23 = {'gap': 16, 'paddingHorizontal': 16};
            var19['contentContainerStyle'] = var23;
            var24 = _closure1_slot15;
            var23 = var24.map;
            var22 = function(arg1, arg2) {
                var4 = _closure2_slot13;
                var2 = _closure2_slot14;
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
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var18 = var21.bind(var5)(var20, var19);
case 91:
            var17 = var18;
case 86:
            var13['children'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var11[1] = var13;
            var12 = var12 != var16;
            if(!var12) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var15 = _closure1_slot12;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 30;
            var13 = var17[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.PremiumGiftWishlistBanner;
            var13 = {};
            var13['giftRecipient'] = var16;
            var12 = var15.bind(var5)(var14, var13);
case 92:
            var11[2] = var12;
            var7['children'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 79:
            _fun0002_ip = 94; continue _fun0002;
case 44:
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
case 94:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();