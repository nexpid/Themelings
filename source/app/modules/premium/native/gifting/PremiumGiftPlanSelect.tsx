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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot6 = var8;
    var8 = var4.Pressable;
    var _closure1_slot7 = var8;
    var8 = var4.View;
    var _closure1_slot8 = var8;
    var4 = var4.ScrollView;
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
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['padding'] = var3;
        var1['closeButton'] = var2;
        var2 = {'width': 24, 'height': 24, 'tintColor': 'white'};
        var1['closeButtonIcon'] = var2;
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
    var4 = 39;
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
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var4 = var10.bind(var5)(var3);
            var3 = var4.useNavigation;
            var38 = var3.bind(var4)();
            var _closure2_slot0 = var38;
            var4 = _closure1_slot1;
            var3 = 12;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var35 = var3.top;
            var28 = var3.bottom;
            var3 = 13;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var26 = var3.width;
            var4 = var3.height;
            var3 = 14;
            var3 = var11[var3];
            var7 = var10.bind(var5)(var3);
            var3 = var7.useNativeGiftContext;
            var3 = var3.bind(var7)();
            var16 = var3.recipientUser;
            var37 = var3.setPremiumType;
            var _closure2_slot1 = var37;
            var15 = var3.claimableRewards;
            var _closure2_slot2 = var15;
            var33 = var3.recipientUserId;
            var _closure2_slot3 = var33;
            var34 = var3.planInterval;
            var _closure2_slot4 = var34;
            var32 = var3.setOrder;
            var _closure2_slot5 = var32;
            var29 = var3.onClose;
            var _closure2_slot6 = var29;
            var3 = 15;
            var3 = var11[var3];
            var7 = var10.bind(var5)(var3);
            var3 = var7.useIsScreenReaderEnabled;
            var14 = var3.bind(var7)();
            var31 = 16;
            var3 = var11[var31];
            var8 = var10.bind(var5)(var3);
            var7 = var8.useNavigatorBackPressHandler;
            var3 = function() {
                var2 = _closure2_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var3 = var7.bind(var8)(var3);
            var3 = 17;
            var3 = var11[var3];
            var9 = var10.bind(var5)(var3);
            var8 = var9.useStateFromStoresArray;
            var3 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGiftPromotionRewardSkuIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var8.bind(var9)(var7, var3);
            var3 = 18;
            var3 = var11[var3];
            var8 = var10.bind(var5)(var3);
            var7 = var8.useCreateOrReuseGiftOrder;
            var3 = 'PremiumGiftPlanSelect';
            var36 = var7.bind(var8)(var3);
            var _closure2_slot7 = var36;
            var3 = _closure1_slot16;
            var8 = var3.bind(var5)(var26, var4);
            var _closure2_slot8 = var8;
            var25 = _closure1_slot5;
            var3 = var25.useState;
            var18 = 0;
            var3 = var3.bind(var25)(var18);
            var4 = _closure1_slot4;
            var24 = 2;
            var3 = var4.bind(var5)(var3, var24);
            var40 = var3[var18];
            var _closure2_slot9 = var40;
            var23 = 1;
            var17 = var3[var23];
            var3 = var25.useState;
            var21 = false;
            var3 = var3.bind(var25)(var21);
            var3 = var4.bind(var5)(var3, var24);
            var7 = var3[var18];
            var3 = var3[var23];
            var _closure2_slot10 = var3;
            var12 = var25.useEffect;
            var9 = new Array(1);
            var9[0] = var38;
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
                    var3 = _closure2_slot10;
                    var4 = var1.name;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
            var3 = var12.bind(var25)(var3, var9);
            var3 = var25.useState;
            var12 = null;
            var3 = var3.bind(var25)(var12);
            var3 = var4.bind(var5)(var3, var24);
            var22 = var3[var18];
            var _closure2_slot11 = var22;
            var3 = var3[var23];
            var _closure2_slot12 = var3;
            var9 = var25.useRef;
            var4 = new Array(0);
            var27 = var9.bind(var25)(var4);
            var _closure2_slot13 = var27;
            var20 = var25.useEffect;
            var9 = new Array(1);
            var9[0] = var1;
            var4 = function() {
                var3 = _closure2_slot13;
                var2 = new Array(0);
                var3['current'] = var2;
                var3 = _closure2_slot12;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var20.bind(var25)(var4, var9);
            var9 = var25.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure1_slot15;
                    var2 = var2.length;
                    if(!(var3 >= var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var3 = _closure2_slot13;
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
                    var2 = _closure2_slot12;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var9.bind(var25)(var3, var4);
            var _closure2_slot14 = var4;
            var3 = 0.86;
            var3 = var3 * var26;
            var _closure2_slot15 = var3;
            var30 = var25.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var10 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var9 = undefined;
                            var4 = undefined;
                            var7 = undefined;
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var9)(var10);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 20;
                            var2 = var8[var2];
                            var8 = var6.bind(var9)(var2);
                            var6 = var8.getPlanIdForPremiumType;
                            var2 = _closure2_slot4;
                            var7 = var6.bind(var8)(var10, var2);
case 7: // try_start_0
                            var6 = _closure2_slot7;
                            var2 = {};
                            var2['planId'] = var7;
                            var7 = _closure2_slot3;
                            var2['recipientUserId'] = var7;
                            var2 = var6.bind(var9)(var2);
                            SaveGenerator(address=99);
case 8:
                            return var2;
case 9:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var4 = var2;
case 12: // try_end0
                            var6 = _closure2_slot5;
                            var4 = var6.bind(var9)(var4);
                            var6 = _closure2_slot0;
                            var4 = var6.navigate;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 19;
                            var3 = var8[var3];
                            var3 = var7.bind(var9)(var3);
                            var3 = var3.PremiumGiftScreens;
                            var3 = var3.CUSTOMIZATION;
                            var3 = var4.bind(var6)(var3);
                            return var9;
case 10:
                            return var2;
case 13: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 21;
                            var2 = var10[var2];
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 22;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var11 = var6.intl;
                            var7 = var11.string;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.t;
                            var6 = var6.R0RpRX;
                            var6 = var7.bind(var11)(var6);
                            var2['title'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            var5 = var5.CKsXk3;
                            var5 = var6.bind(var7)(var5);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 5:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var20 = var9.bind(var5)();
            var9 = new Array(6);
            var9[0] = var38;
            var9[1] = var37;
            var9[2] = var36;
            var9[3] = var34;
            var9[4] = var33;
            var9[5] = var32;
            var30 = var30.bind(var25)(var20, var9);
            var _closure2_slot16 = var30;
            var20 = var25.useCallback;
            var9 = new Array(7);
            var9[0] = var30;
            var9[1] = var3;
            var9[2] = var27;
            var9[3] = var4;
            var9[4] = var22;
            var9[5] = var40;
            var9[6] = var15;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arguments[1];
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = {};
                    var4 = false;
                    var3['forScreenReader'] = var4;
                    var2 = var3;
case 14:
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
                            if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var3 = _closure1_slot8;
                            _fun0005_ip = 18; continue _fun0005;
case 16:
                            var3 = _closure1_slot7;
case 18:
                            var2 = {};
                            var1 = _closure3_slot1;
                            if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                            var1 = undefined;
case 19:
                            var2['accessible'] = var1;
                            var7 = _closure3_slot1;
                            var1 = undefined;
                            var6 = undefined;
                            if(!var7) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var6 = 'button';
case 21:
                            var2['accessibilityRole'] = var6;
                            var7 = _closure3_slot1;
                            var6 = undefined;
                            if(!var7) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                            var6 = function() {
                                var3 = _closure2_slot16;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
case 23:
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
                                var3 = _closure2_slot16;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var5['onPress'] = var9;
                            var11 = {};
                            var14 = _closure2_slot11;
                            var13 = null;
                            var14 = var13 != var14;
                            var13 = undefined;
                            if(!var14) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var13 = _closure2_slot11;
case 25:
                            var11['height'] = var13;
                            var13 = _closure2_slot15;
                            var11['width'] = var13;
                            var14 = _closure3_slot0;
                            var13 = 'default';
                            var12 = undefined;
                            if(!(var13 === var14)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var12 = 'center';
case 27:
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
                                    if(!(var7 > var6)) { _fun0006_ip = 4; continue _fun0006 }
case 29:
                                    var8 = _closure2_slot13;
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
                                    if(!var9) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                                    var6 = var8;
case 30:
                                    var2 = var2.bind(var5)(var7, var6);
                                    var4[var3] = var2;
                                    var2 = _closure2_slot14;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 4:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var5['onLayout'] = var10;
                            var10 = _closure2_slot2;
                            var5['claimableRewards'] = var10;
                            var9 = _closure2_slot9;
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
            var4 = var20.bind(var25)(var4, var9);
            var _closure2_slot17 = var4;
            var9 = 24;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = var10.useIsWindowSmall;
            var9 = var9.bind(var10)();
            var10 = var12 != var15;
            if(!var10) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var11 = var15.length;
            var10 = var11 > var18;
case 32:
            if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = 'compact';
            if(!var10) { _fun0001_ip = 36; continue _fun0001 }
case 34:
            var9 = 'smallCompact';
case 36:
            _closure2_slot18 = var9;
            var10 = _closure1_slot5;
            var20 = var10.useMemo;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var9;
            var9 = function() {
                var3 = _closure2_slot17;
                var2 = _closure2_slot18;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var27 = var20.bind(var10)(var9, var11);
            var11 = var10.useMemo;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var3 = _closure2_slot17;
                var2 = undefined;
                var1 = 'default';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var39 = var11.bind(var10)(var4, var9);
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var4 = 25;
            var9 = var33[var4];
            var11 = var32.bind(var5)(var9);
            var9 = var11.useSharedValue;
            var25 = var9.bind(var11)(var21);
            _closure2_slot19 = var25;
            var20 = var10.useEffect;
            var11 = new Array(2);
            var11[0] = var25;
            var11[1] = var22;
            var9 = function() {
                var3 = _closure2_slot19;
                var2 = var3.set;
                var4 = _closure2_slot11;
                var1 = null;
                var1 = var1 != var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9 = var20.bind(var10)(var9, var11);
            var4 = var33[var4];
            var11 = var32.bind(var5)(var4);
            var9 = var11.useAnimatedStyle;
            var4 = function he() {
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
                    var7 = _closure2_slot19;
                    var3 = var7.get;
                    var11 = var3.bind(var7)();
                    var3 = 0;
                    if(!var11) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = 1;
case 37:
                    var3 = var5.bind(var10)(var3, var6);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.withTiming;
                    var8 = _closure2_slot19;
                    var2 = var8.get;
                    var8 = var2.bind(var8)();
                    var2 = 100;
                    if(!var8) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var2 = 0;
case 39:
                    var2 = var4.bind(var5)(var2, var6);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var30 = 26;
            var30 = var33[var30];
            var30 = var32.bind(var5)(var30);
            var30 = var30.STANDARD_EASING;
            var20['STANDARD_EASING'] = var30;
            var30 = 27;
            var30 = var33[var30];
            var30 = var32.bind(var5)(var30);
            var30 = var30.withTiming;
            var20['withTiming'] = var30;
            var20['carouselVisibility'] = var25;
            var4['__closure'] = var20;
            var20 = 2946262965957.0;
            var4['__workletHash'] = var20;
            var20 = _closure1_slot17;
            var4['__initData'] = var20;
            var25 = var9.bind(var11)(var4);
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
                var2 = _closure2_slot8;
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
            var11 = var11.bind(var10)(var4, var9);
            var33 = var3 + var31;
            _closure2_slot20 = var33;
            var4 = _closure1_slot15;
            var4 = var4.length;
            var32 = var4 - var23;
            _closure2_slot21 = var32;
            var4 = var26 - var3;
            var30 = var4 / var24;
            _closure2_slot22 = var30;
            var3 = var26 - var3;
            var20 = var3 - var31;
            _closure2_slot23 = var20;
            var9 = var10.useCallback;
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
                var1 = _closure2_slot21;
                var1 = var1 - var10;
                var1 = var11 - var1;
                var1 = var7.bind(var9)(var10, var1);
                var7 = var2.bind(var3)(var6, var1);
                var1 = {};
                var3 = {};
                var2 = _closure2_slot20;
                var4 = var4 * var2;
                var2 = _closure2_slot22;
                var6 = 16;
                var2 = var2 - var6;
                var2 = var8 * var2;
                var8 = _closure2_slot23;
                var5 = _closure2_slot22;
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
            var3['lastItemIndex'] = var32;
            var3['leftOffset'] = var31;
            var3['centerOffset'] = var30;
            var3['rightOffset'] = var20;
            var3['carouselStep'] = var33;
            var4['__closure'] = var3;
            var3 = 8954351954675.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var4['__initData'] = var3;
            var3 = new Array(5);
            var3[0] = var33;
            var3[1] = var32;
            var3[2] = var31;
            var3[3] = var30;
            var3[4] = var20;
            var20 = var9.bind(var10)(var4, var3);
            if(var2) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            if(var1) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            if(!var7) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var10 = _closure1_slot12;
            var9 = _closure1_slot1;
            var30 = _closure1_slot2;
            var4 = 30;
            var4 = var30[var4];
            var9 = var9.bind(var5)(var4);
            var4 = {'animated': true, 'barStyle': 'light-content'};
            var7 = var10.bind(var5)(var9, var4);
case 45:
            var4 = new Array(6);
            var4[0] = var7;
            var10 = _closure1_slot12;
            var9 = _closure1_slot7;
            var7 = {};
            var31 = var8.closeButtonContainer;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = {};
            var31['paddingTop'] = var35;
            var30[1] = var31;
            var7['style'] = var30;
            var7['onPress'] = var29;
            var29 = 'button';
            var7['accessibilityRole'] = var29;
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var41 = 22;
            var29 = var31[var41];
            var29 = var36.bind(var5)(var29);
            var32 = var29.intl;
            var30 = var32.string;
            var29 = var31[var41];
            var29 = var36.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.cpT0Cq;
            var29 = var30.bind(var32)(var29);
            var7['accessibilityLabel'] = var29;
            var30 = _closure1_slot8;
            var29 = {};
            var32 = var8.closeButton;
            var29['style'] = var32;
            var32 = 31;
            var32 = var31[var32];
            var32 = var36.bind(var5)(var32);
            var33 = var32.XSmallIcon;
            var32 = {};
            var34 = 'md';
            var32['size'] = var34;
            var34 = var8.closeButtonIcon;
            var32['style'] = var34;
            var32 = var10.bind(var5)(var33, var32);
            var29['children'] = var32;
            var29 = var10.bind(var5)(var30, var29);
            var7['children'] = var29;
            var7 = var10.bind(var5)(var9, var7);
            var4[1] = var7;
            var34 = _closure1_slot1;
            var7 = 32;
            var7 = var31[var7];
            var9 = var34.bind(var5)(var7);
            var7 = {};
            var29 = 'cover';
            var7['resizeMode'] = var29;
            var32 = var8.headerImageContainer;
            var29 = new Array(2);
            var29[0] = var32;
            var32 = var8.headerImage;
            var29[1] = var32;
            var7['style'] = var29;
            var29 = 33;
            var29 = var31[var29];
            var29 = var34.bind(var5)(var29);
            var7['source'] = var29;
            var7 = var10.bind(var5)(var9, var7);
            var4[2] = var7;
            var7 = {};
            var29 = var8.headerImageContainer;
            var9 = new Array(2);
            var9[0] = var29;
            var29 = var8.headerOverlay;
            var9[1] = var29;
            var7['style'] = var9;
            var7 = var10.bind(var5)(var30, var7);
            var4[3] = var7;
            var7 = 34;
            var7 = var31[var7];
            var9 = var34.bind(var5)(var7);
            var7 = {};
            var29 = var8.headerBackground;
            var7['style'] = var29;
            var29 = _closure1_slot11;
            var32 = var29.START;
            var7['start'] = var32;
            var29 = var29.END;
            var7['end'] = var29;
            var7['colors'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[4] = var7;
            var9 = _closure1_slot9;
            var7 = {};
            var11 = {};
            var11['paddingBottom'] = var28;
            var7['contentContainerStyle'] = var11;
            var29 = _closure1_slot13;
            var11 = {};
            var32 = {};
            var33 = 35;
            var33 = var31[var33];
            var33 = var36.bind(var5)(var33);
            var33 = var33.NAV_BAR_HEIGHT;
            var33 = var35 + var33;
            var43 = 9;
            var31 = var31[var43];
            var31 = var34.bind(var5)(var31);
            var31 = var31.spacing;
            var31 = var31.PX_12;
            var31 = var33 + var31;
            var32['paddingTop'] = var31;
            var31 = new Array(1);
            var31[0] = var32;
            var11['style'] = var31;
            var32 = var12 != var16;
            if(!var32) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var34 = _closure1_slot12;
            var33 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 36;
            var31 = var37[var35];
            var33 = var33.bind(var5)(var31);
            var31 = {};
            var36 = var8.avatar;
            var31['style'] = var36;
            var31['guildId'] = var5;
            var36 = _closure1_slot0;
            var35 = var37[var35];
            var35 = var36.bind(var5)(var35);
            var35 = var35.AvatarSizes;
            var35 = var35.XLARGE;
            var31['size'] = var35;
            var31['user'] = var16;
            var32 = var34.bind(var5)(var33, var31);
case 47:
            var31 = new Array(4);
            var31[0] = var32;
            var35 = _closure1_slot12;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var32 = 37;
            var33 = var33[var32];
            var33 = var34.bind(var5)(var33);
            var34 = var33.Text;
            var33 = {'style': null, 'variant': 'heading-xxl/extrabold', 'color': 'always-white'};
            var36 = var8.title;
            var33['style'] = var36;
            if(!(var12 == var16)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var42 = _closure1_slot0;
            var36 = _closure1_slot2;
            var37 = var36[var41];
            var37 = var42.bind(var5)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var36[var41];
            var36 = var42.bind(var5)(var36);
            var36 = var36.t;
            var36 = var36.dqQgZv;
            var36 = var37.bind(var38)(var36);
            _fun0001_ip = 51; continue _fun0001;
case 49:
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var42 = var37[var41];
            var42 = var38.bind(var5)(var42);
            var44 = var42.intl;
            var42 = var44.formatToPlainString;
            var37 = var37[var41];
            var37 = var38.bind(var5)(var37);
            var37 = var37.t;
            var38 = var37.m5ggvH;
            var37 = {};
            var45 = var16.globalName;
            if(!(var12 == var45)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var45 = var16.username;
case 52:
            var37['username'] = var45;
            var36 = var42.bind(var44)(var38, var37);
case 51:
            var33['children'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            var31[1] = var33;
            var34 = _closure1_slot12;
            var38 = _closure1_slot0;
            var35 = _closure1_slot2;
            var32 = var35[var32];
            var32 = var38.bind(var5)(var32);
            var33 = var32.Text;
            var32 = {'style': null, 'variant': 'heading-sm/medium', 'color': 'always-white'};
            var36 = var8.description;
            var32['style'] = var36;
            var36 = var35[var41];
            var36 = var38.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.string;
            var35 = var35[var41];
            var35 = var38.bind(var5)(var35);
            var35 = var35.t;
            var35 = var35["30qzrd"];
            var35 = var36.bind(var37)(var35);
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var31[2] = var32;
            var32 = var13.length;
            if(!(var18 !== var32)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var32 = null;
            if(!(var5 !== var15)) { _fun0001_ip = 56; continue _fun0001 }
case 54:
            if(var14) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var35 = _closure1_slot13;
            var34 = _closure1_slot14;
            var33 = {};
            var38 = _closure1_slot12;
            var37 = _closure1_slot1;
            var41 = _closure1_slot2;
            var36 = 28;
            var36 = var41[var36];
            var37 = var37.bind(var5)(var36);
            var36 = {};
            var42 = var8.carousel;
            var41 = new Array(2);
            var41[0] = var42;
            var41[1] = var25;
            var36['style'] = var41;
            var41 = _closure1_slot15;
            var36['data'] = var41;
            var36['renderItem'] = var39;
            var36['width'] = var26;
            var41 = var12 != var22;
            var39 = undefined;
            if(!var41) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var42 = _closure1_slot1;
            var41 = _closure1_slot2;
            var41 = var41[var43];
            var41 = var42.bind(var5)(var41);
            var41 = var41.spacing;
            var41 = var41.PX_8;
            var41 = var24 * var41;
            var39 = var22 + var41;
case 59:
            var36['height'] = var39;
            var39 = function onConfigurePanGesture(arg1) {
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
            var36['onConfigurePanGesture'] = var39;
            var36['loop'] = var21;
            var39 = 200;
            var36['scrollAnimationDuration'] = var39;
            var39 = 'parallax';
            var36['mode'] = var39;
            var39 = {'parallaxScrollingScale': 1, 'parallaxScrollingOffset': 40};
            var36['modeConfig'] = var39;
            var36['onSnapToItem'] = var17;
            var37 = var38.bind(var5)(var37, var36);
            var36 = new Array(2);
            var36[0] = var37;
            var39 = _closure1_slot12;
            var38 = _closure1_slot1;
            var41 = _closure1_slot2;
            var37 = 38;
            var37 = var41[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var41 = _closure1_slot15;
            var41 = var41.length;
            var37['numberOfItems'] = var41;
            var37['currentIndex'] = var40;
            var40 = var8.pagination;
            var37['containerStyle'] = var40;
            var37 = var39.bind(var5)(var38, var37);
            var36[1] = var37;
            var33['children'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            _fun0001_ip = 61; continue _fun0001;
case 57:
            var36 = _closure1_slot12;
            var35 = _closure1_slot9;
            var34 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var37 = var8.carousel;
            var34['style'] = var37;
            var37 = {'gap': 16, 'paddingHorizontal': 16};
            var34['contentContainerStyle'] = var37;
            var39 = _closure1_slot15;
            var38 = var39.map;
            var37 = function(arg1, arg2) {
                var4 = _closure2_slot17;
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
            var37 = var38.bind(var39)(var37);
            var34['children'] = var37;
            var33 = var36.bind(var5)(var35, var34);
case 61:
            var32 = var33;
case 56:
            var31[3] = var32;
            var11['children'] = var31;
            var11 = var29.bind(var5)(var30, var11);
            var7['children'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[5] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 62; continue _fun0001;
case 43:
            var4 = _closure1_slot12;
            var3 = _closure1_slot8;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var10 = _closure1_slot13;
            var9 = _closure1_slot9;
            var7 = {};
            var11 = {};
            var11['paddingBottom'] = var28;
            var7['contentContainerStyle'] = var11;
            var11 = {};
            var28 = var8.dmGiftingContent;
            var11['style'] = var28;
            var13 = var13.length;
            if(!(var18 !== var13)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var13 = null;
            if(!(var5 !== var15)) { _fun0001_ip = 65; continue _fun0001 }
case 63:
            var18 = _closure1_slot12;
            if(var14) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var15 = _closure1_slot1;
            var28 = _closure1_slot2;
            var14 = 28;
            var14 = var28[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['style'] = var25;
            var25 = _closure1_slot15;
            var14['data'] = var25;
            var14['renderItem'] = var27;
            var14['width'] = var26;
            var25 = var25.length;
            var14['windowSize'] = var25;
            var25 = var12 != var22;
            if(!var25) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var23 = var22;
case 68:
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 9;
            var22 = var26[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.spacing;
            var22 = var22.PX_8;
            var22 = var24 * var22;
            var22 = var23 + var22;
            var14['height'] = var22;
            var22 = function onConfigurePanGesture(arg1) {
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
            var14['onConfigurePanGesture'] = var22;
            var14['loop'] = var21;
            var21 = 200;
            var14['scrollAnimationDuration'] = var21;
            var14['customAnimation'] = var20;
            var14['onSnapToItem'] = var17;
            var14 = var18.bind(var5)(var15, var14);
            _fun0001_ip = 70; continue _fun0001;
case 66:
            var17 = _closure1_slot9;
            var15 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var20 = {'gap': 16, 'paddingHorizontal': 16};
            var15['contentContainerStyle'] = var20;
            var21 = _closure1_slot15;
            var20 = var21.map;
            var19 = function(arg1, arg2) {
                var4 = _closure2_slot17;
                var2 = _closure2_slot18;
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
            var19 = var20.bind(var21)(var19);
            var15['children'] = var19;
            var14 = var18.bind(var5)(var17, var15);
case 70:
            var13 = var14;
case 65:
            var11['children'] = var13;
            var13 = var4.bind(var5)(var3, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12 != var16;
            if(!var12) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var15 = _closure1_slot12;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 29;
            var13 = var17[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.PremiumGiftWishlistBanner;
            var13 = {};
            var13['giftRecipient'] = var16;
            var12 = var15.bind(var5)(var14, var13);
case 71:
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 62:
            _fun0001_ip = 73; continue _fun0001;
case 41:
            var4 = _closure1_slot12;
            var3 = _closure1_slot8;
            var2 = {};
            var9 = var8.container;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = var8.loadingContainer;
            var7[1] = var8;
            var2['style'] = var7;
            var7 = _closure1_slot6;
            var6 = {};
            var8 = 'large';
            var6['size'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 73:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();