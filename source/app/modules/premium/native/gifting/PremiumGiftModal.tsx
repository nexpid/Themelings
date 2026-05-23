// app/modules/premium/native/gifting/PremiumGiftModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = {};
    var5 = 'PremiumGiftPlanSelect';
    var2['PLAN_SELECT'] = var5;
    var5 = 'GiftingSKUSelect';
    var2['REWARD_SELECT'] = var5;
    var5 = 'PremiumGiftCustomization';
    var2['CUSTOMIZATION'] = var5;
    var5 = 'PremiumGiftSuccess';
    var2['SUCCESS'] = var5;
    var5 = 'GiftingBadgePostPurchase';
    var2['GIFTING_BADGE'] = var5;
    var _closure1_slot7 = var2;
    var5 = {};
    var10 = var2.PLAN_SELECT;
    var8 = 4;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PaymentFlowStep;
    var9 = var9.SKU_SELECT;
    var5[9] = var9;
    var10 = var2.REWARD_SELECT;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PaymentFlowStep;
    var9 = var9.REWARD_SKU_SELECT;
    var5[9] = var9;
    var10 = var2.CUSTOMIZATION;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PaymentFlowStep;
    var9 = var9.PLAN_SELECT;
    var5[9] = var9;
    var10 = var2.SUCCESS;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PaymentFlowStep;
    var9 = var9.CONFIRM;
    var5[9] = var9;
    var9 = var2.GIFTING_BADGE;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.PaymentFlowStep;
    var8 = var8.CONFIRM;
    var5[8] = var8;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 6;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var11;
    var11 = 'transparent';
    var10['shadowColor'] = var11;
    var5['header'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/gifting/PremiumGiftModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumGiftModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.recipientUserId;
            var17 = var1.premiumType;
            var16 = var1.planInterval;
            var13 = var1.analyticsLocation;
            var _closure2_slot0 = var13;
            var4 = var1.analyticsLocations;
            var _closure2_slot1 = var4;
            var3 = var1.initialRoute;
            var9 = var1.order;
            var1 = var1.onDismiss;
            var _closure2_slot2 = var1;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 19;
            var6 = var11[var2];
            var6 = var10.bind(var5)(var6);
            var6 = var6.bind(var5)(var4);
            var6 = var6.analyticsLocations;
            var7 = 20;
            var7 = var11[var7];
            var10 = var10.bind(var5)(var7);
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var10.bind(var5)(var7);
            var _closure2_slot3 = var14;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var13;
            var7[2] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getBasePurchaseFlowAnalyticsFields;
                var1 = {};
                var4 = true;
                var1['isGift'] = var4;
                var5 = _closure2_slot3;
                var1['analyticsLoadId'] = var5;
                var5 = _closure2_slot0;
                var1['analyticsLocation'] = var5;
                var4 = _closure2_slot1;
                var1['analyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var10.bind(var11)(var4, var7);
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var4 == var17)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot7;
            var4 = var4.PLAN_SELECT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = _closure1_slot7;
            var4 = var7.CUSTOMIZATION;
case 6:
            var3 = var4;
case 2:
            var7 = _closure1_slot4;
            var10 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 7:
                    return var1;
                }
            };
            var19 = var10.bind(var7)(var1, var4);
            var1 = function useGetScreens(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var10 = arg1;
                    var8 = arg2;
                    var12 = arg3;
                    var _closure3_slot0 = var12;
                    var1 = _closure1_slot9;
                    var9 = undefined;
                    var13 = var1.bind(var9)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var7 = var2.bind(var9)(var1);
                    var6 = var7.useStateFromStores;
                    var1 = _closure1_slot5;
                    var5 = new Array(1);
                    var5[0] = var1;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var1 = null;
                            var3 = var1 != var3;
                            if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                            var4 = _closure1_slot5;
                            var3 = var4.getUser;
                            var2 = _closure3_slot0;
                            var1 = var3.bind(var4)(var2);
case 9:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var5, var1);
                    var1 = 8;
                    var5 = var3[var1];
                    var7 = var2.bind(var9)(var5);
                    var5 = var7.useFetchWishlistAndProfileInfoForUser;
                    var5 = var5.bind(var7)(var12);
                    var7 = var5.wishlist;
                    var _closure3_slot1 = var7;
                    var7 = var5.userProfile;
                    var _closure3_slot2 = var7;
                    var7 = var5.wishlistId;
                    var _closure3_slot3 = var7;
                    var5 = var5.error;
                    var _closure3_slot4 = var5;
                    var1 = var3[var1];
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.useShouldShowWishlistInDMGifting;
                    var1 = {'isGift': true, 'giftRecipient': null, 'isSocialLayerStorefrontEnabled': false};
                    var5 = true;
                    var1['giftRecipient'] = var6;
                    var2 = var2.bind(var3)(var1);
                    var _closure3_slot5 = var2;
                    var1 = {};
                    var3 = _closure1_slot7;
                    var3 = var3.PLAN_SELECT;
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = {'title': '', 'headerShown': false};
                    var6 = function render() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = false;
                            var1['shouldUseDMWishlistGiftingDesign'] = var5;
                            var5 = _closure3_slot0;
                            var9 = null;
                            var5 = var9 != var5;
                            if(!var5) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var6 = _closure3_slot5;
                            var5 = !var6;
case 13:
                            if(!var5) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var6 = _closure3_slot4;
                            var5 = var9 == var6;
case 15:
                            if(!var5) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var6 = _closure3_slot2;
                            var6 = var9 == var6;
                            if(var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                            var7 = _closure3_slot3;
                            var7 = var9 != var7;
                            if(!var7) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var8 = _closure3_slot1;
                            var7 = var9 == var8;
case 21:
                            var6 = var7;
case 19:
                            var5 = var6;
case 17:
                            var1['isLoadingWishlist'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var2['render'] = var6;
                    _fun0003_ip = 23; continue _fun0003;
case 11:
                    var6 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 9;
                    var15 = var14[var7];
                    var15 = var12.bind(var9)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var7 = var14[var7];
                    var7 = var12.bind(var9)(var7);
                    var7 = var7.t;
                    var7 = var7.JCFN/y;
                    var7 = var15.bind(var16)(var7);
                    var6['title'] = var7;
                    var7 = 10;
                    var7 = var14[var7];
                    var12 = var12.bind(var9)(var7);
                    var7 = var12.getHeaderCloseButton;
                    var7 = var7.bind(var12)(var8);
                    var6['headerLeft'] = var7;
                    var7 = var13.header;
                    var6['headerStyle'] = var7;
                    var7 = function render() {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {'shouldUseDMWishlistGiftingDesign': true, 'isLoadingWishlist': false};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var6['render'] = var7;
                    var2 = var6;
case 23:
                    var1[2] = var2;
                    var7 = _closure1_slot7;
                    var3 = var7.REWARD_SELECT;
                    var2 = {};
                    var6 = '';
                    var2['title'] = var6;
                    var7 = var7.REWARD_SELECT;
                    if(!(var10 !== var7)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 10;
                    var7 = var14[var7];
                    var12 = var12.bind(var9)(var7);
                    var7 = var12.getHeaderBackButton;
                    var7 = var7.bind(var12)();
                    _fun0003_ip = 26; continue _fun0003;
case 24:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 10;
                    var12 = var15[var12];
                    var14 = var14.bind(var9)(var12);
                    var12 = var14.getHeaderCloseButton;
                    var7 = var12.bind(var14)(var8);
case 26:
                    var2['headerLeft'] = var7;
                    var7 = var13.header;
                    var2['headerStyle'] = var7;
                    var7 = function render(arg1) {
                        var1 = arg1;
                        var8 = var1.defaultHighlightedReward;
                        var7 = var1.allRewards;
                        var6 = var1.claimableRewards;
                        var5 = var1.onSelect;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['defaultHighlightedReward'] = var8;
                        var1['allRewards'] = var7;
                        var1['claimableRewards'] = var6;
                        var1['onSelect'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var7;
                    var1[2] = var2;
                    var7 = _closure1_slot7;
                    var3 = var7.CUSTOMIZATION;
                    var2 = {};
                    var2['title'] = var6;
                    var7 = var7.CUSTOMIZATION;
                    if(!(var10 !== var7)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 10;
                    var7 = var12[var7];
                    var10 = var10.bind(var9)(var7);
                    var7 = var10.getHeaderBackButton;
                    var7 = var7.bind(var10)();
                    _fun0003_ip = 29; continue _fun0003;
case 27:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 10;
                    var10 = var14[var10];
                    var12 = var12.bind(var9)(var10);
                    var10 = var12.getHeaderCloseButton;
                    var7 = var10.bind(var12)(var8);
case 29:
                    var2['headerLeft'] = var7;
                    var7 = var13.header;
                    var2['headerStyle'] = var7;
                    var7 = function render() {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var7;
                    var1[2] = var2;
                    var2 = _closure1_slot7;
                    var12 = var2.SUCCESS;
                    var3 = {};
                    var3['title'] = var6;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 10;
                    var14 = var10[var6];
                    var15 = var7.bind(var9)(var14);
                    var14 = var15.getHeaderCloseButton;
                    var14 = var14.bind(var15)(var8);
                    var3['headerLeft'] = var14;
                    var13 = var13.header;
                    var3['headerStyle'] = var13;
                    var13 = function render() {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var13;
                    var1[11] = var3;
                    var3 = var2.GIFTING_BADGE;
                    var2 = {};
                    var12 = 9;
                    var12 = var10[var12];
                    var12 = var7.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var14 = _closure1_slot1;
                    var11 = 15;
                    var11 = var10[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.roVAey;
                    var11 = var12.bind(var13)(var11);
                    var2['title'] = var11;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.getHeaderCloseButton;
                    var6 = var6.bind(var7)(var8);
                    var2['headerLeft'] = var6;
                    var2['headerTransparent'] = var5;
                    var5 = {'backgroundColor': 'transparent', 'shadowColor': 'transparent'};
                    var2['headerStyle'] = var5;
                    var4 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = arg1;
                        var5 = var5.currentProgress;
                        var1['currentProgress'] = var5;
                        var5 = function onSendGift() {
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 17;
                            var2 = var7[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openGiftModal;
                            var2 = {};
                            var6 = _closure1_slot1;
                            var5 = 18;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.GIFTING_BADGE_POST_PURCHASE;
                            var5 = new Array(1);
                            var5[0] = var6;
                            var2['analyticsLocations'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1['onSendGift'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var13 = var1.bind(var5)(var3, var19, var20);
            var4 = var7.useState;
            var1 = _closure1_slot8;
            var1 = var1[var3];
            var7 = var4.bind(var7)(var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var4 = var4.bind(var5)(var7, var1);
            var1 = 0;
            var10 = var4[var1];
            var1 = 1;
            var18 = var4[var1];
            _closure2_slot4 = var18;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 23;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isPremiumGiftingSupported;
            var1 = var1.bind(var4)();
            var4 = _closure1_slot6;
            var14 = var3;
            if(var1) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 24;
            var1 = var23[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var22 = _closure1_slot0;
            var7 = 9;
            var11 = var23[var7];
            var11 = var22.bind(var5)(var11);
            var15 = var11.intl;
            var11 = var15.string;
            var7 = var23[var7];
            var7 = var22.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.JCFN/y;
            var7 = var11.bind(var15)(var7);
            var1['title'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 25;
            var6 = var15[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.NativeGiftContextProvider;
            var6 = {};
            var6['basePurchaseAnalytics'] = var21;
            var6['recipientUserId'] = var20;
            var6['onClose'] = var19;
            var6['setCurrentAnalyticsStep'] = var18;
            var6['premiumType'] = var17;
            var6['planInterval'] = var16;
            var6['initialOrder'] = var9;
            var9 = _closure1_slot1;
            var8 = 26;
            var8 = var15[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['currentStep'] = var10;
            var10 = 27;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Navigator;
            var10 = {};
            var10['initialRouteName'] = var14;
            var10['screens'] = var13;
            var12 = function onStateChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 14; continue _fun0006 }
case 33:
                    var2 = var1.routes;
                    var1 = var1.index;
                    var1 = var2[var1];
                    var2 = var1.name;
                    var3 = _closure2_slot4;
                    var1 = _closure1_slot8;
                    var2 = var1[var2];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onStateChange'] = var12;
            var10 = var4.bind(var5)(var11, var10);
            var8['children'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PremiumGiftScreens'] = var2;
    return var1;
})();