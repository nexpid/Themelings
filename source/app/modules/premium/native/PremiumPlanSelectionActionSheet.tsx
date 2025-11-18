// app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = function getPlanOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = arg4;
        var _closure2_slot2 = var2;
        var2 = arg5;
        var _closure2_slot3 = var2;
        var2 = arg6;
        var _closure2_slot4 = var2;
        var2 = arg7;
        var _closure2_slot5 = var2;
        var2 = arg8;
        var _closure2_slot6 = var2;
        var2 = global;
        var5 = var2.Set;
        var4 = var3.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.premiumTier;
            return var1;
        };
        var6 = var4.bind(var3)(var2);
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var2 = new var7[var5](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = var2.size;
        var2 = 1;
        var2 = var4 > var2;
        var _closure2_slot7 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var6 = _closure1_slot30;
                var5 = _closure1_slot36;
                var4 = {};
                var4['premiumItem'] = var2;
                var7 = _closure2_slot0;
                var4['selectedProductId'] = var7;
                var7 = _closure2_slot7;
                var4['optionNeedsProductNameLabel'] = var7;
                var7 = _closure2_slot1;
                var4['trialOffer'] = var7;
                var7 = _closure2_slot2;
                var4['discountOffer'] = var7;
                var9 = var2.productId;
                var8 = _closure2_slot3;
                var7 = null;
                if(!(var9 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = _closure2_slot4;
case 2:
                var4['discountedPriceString'] = var7;
                var7 = _closure2_slot5;
                var4['userIsEligibleForBogoPromotion'] = var7;
                var3 = _closure2_slot6;
                var4['selectedPremiumType'] = var3;
                var3 = undefined;
                var3 = var6.bind(var3)(var5, var4);
                var1['name'] = var3;
                var2 = var2.productId;
                var1['value'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var10 = 0;
    var2 = var7[var10];
    var1 = undefined;
    var2 = var14.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot6 = var5;
    var2 = var2.ActivityIndicator;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.setInitiatedPurchaseFromNewFlow;
    var _closure1_slot10 = var5;
    var5 = var2.setApplePaymentLinkStatus;
    var _closure1_slot11 = var5;
    var5 = var2.usePremiumPlanPurchasedStore;
    var _closure1_slot12 = var5;
    var2 = var2.reset;
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.DISCOUNTS;
    var _closure1_slot14 = var5;
    var5 = var2.PREMIUM_TIER_2_PLANS;
    var _closure1_slot15 = var5;
    var5 = var2.APPLE_PAYMENT_LINK_1_MONTH_10_PERCENT_DISCOUNT;
    var _closure1_slot16 = var5;
    var5 = var2.PremiumTypes;
    var _closure1_slot17 = var5;
    var5 = var2.SubscriptionIntervalTypes;
    var _closure1_slot18 = var5;
    var5 = var2.SubscriptionPlans;
    var _closure1_slot19 = var5;
    var2 = var2.SubscriptionPlanInfo;
    var _closure1_slot20 = var2;
    var12 = 8;
    var2 = var7[var12];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot21 = var5;
    var5 = var2.AnalyticsObjects;
    var _closure1_slot22 = var5;
    var5 = var2.AnalyticsObjectTypes;
    var _closure1_slot23 = var5;
    var5 = var2.LinkingTypes;
    var _closure1_slot24 = var5;
    var5 = var2.MarketingURLs;
    var _closure1_slot25 = var5;
    var2 = var2.HelpdeskArticles;
    var _closure1_slot26 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CustomCheckoutFlow;
    var _closure1_slot27 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.TitleStyleType;
    var _closure1_slot28 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CurrencyCodes;
    var _closure1_slot29 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot30 = var5;
    var5 = var2.jsxs;
    var _closure1_slot31 = var5;
    var2 = var2.Fragment;
    var _closure1_slot32 = var2;
    var2 = 13;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var11 = 16;
    var9['padding'] = var11;
    var2['body'] = var9;
    var9 = {'backgroundColor': null, 'paddingVertical': 18, 'paddingHorizontal': 16};
    var13 = 14;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var15;
    var2['headerText'] = var9;
    var9 = {};
    var9['marginBottom'] = var11;
    var2['contentSelectPlan'] = var9;
    var15 = 40;
    var9 = {'alignItems': 'center', 'paddingTop': 40, 'paddingBottom': 56};
    var2['contentActivated'] = var9;
    var9 = {'width': 328, 'marginTop': 16, 'textAlign': 'center'};
    var2['contentActivatedText'] = var9;
    var9 = {};
    var16 = 32;
    var9['width'] = var16;
    var2['nitroWheel'] = var9;
    var9 = {'paddingTop': 0, 'paddingLeft': 0};
    var2['formTitle'] = var9;
    var9 = {};
    var16 = 'none';
    var9['backgroundColor'] = var16;
    var2['formSectionBody'] = var9;
    var9 = {};
    var16 = -24;
    var9['marginTop'] = var16;
    var2['formSectionBodyWithNoTitle'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var2['planOptionRowContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var2['planOptionContainer'] = var9;
    var9 = {'flexGrow': 1, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'};
    var2['planOptionPriceContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var2['planOptionDiscountContainer'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'paddingVertical': 2, 'paddingHorizontal': 8, 'marginRight': 8};
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_360;
    var9['backgroundColor'] = var16;
    var2['planOptionDiscount'] = var9;
    var9 = {};
    var16 = 'uppercase';
    var9['textTransform'] = var16;
    var2['planOptionDiscountText'] = var9;
    var9 = {};
    var9['marginVertical'] = var15;
    var2['blockedPaymentContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var2['legalDisclaimerText'] = var9;
    var9 = {};
    var9['height'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var2['button'] = var9;
    var9 = {};
    var15 = 48;
    var9['height'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var2['buttonLarge'] = var9;
    var9 = {};
    var9['fontSize'] = var11;
    var2['buttonTextLarge'] = var9;
    var9 = {};
    var15 = 'lowercase';
    var9['textTransform'] = var15;
    var2['postTrialPrice'] = var9;
    var9 = {'height': 1, 'width': '100%'};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var13;
    var2['divider'] = var9;
    var9 = {};
    var9['marginBottom'] = var12;
    var2['discountDivider'] = var9;
    var9 = {};
    var9['marginBottom'] = var11;
    var2['trialInfoText'] = var9;
    var9 = {};
    var11 = 20;
    var9['marginBottom'] = var11;
    var2['discountDisclaimer'] = var9;
    var9 = {'height': 32, 'marginTop': 8};
    var2['linkButtonContainer'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var2['linkButtonIcon'] = var9;
    var9 = {};
    var10 = 30;
    var9['marginVertical'] = var10;
    var2['loadingIndicator'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot33 = var2;
    var2 = function Header(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.premiumType;
            var8 = var1.isPaymentSuccess;
            var2 = var1.selectedPremiumType;
            var6 = var1.trialOffer;
            var5 = var1.discountOffer;
            var3 = _closure1_slot33;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var3 = null;
            if(!(var3 == var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var11 = _closure1_slot30;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 15;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/bold', 'color': 'header-primary'};
            var12 = var12.headerText;
            var9['style'] = var12;
            var12 = 16;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.vLz3Zs;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            return var9;
case 4:
            if(!var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var2;
case 7:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var9 = 17;
            var9 = var8[var9];
            var10 = var2.bind(var4)(var9);
            var9 = var3 != var7;
            var3 = 'If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.';
            var3 = var10.bind(var4)(var9, var3);
            var3 = _closure1_slot30;
            var1 = 18;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['premiumType'] = var7;
            var1['trialOffer'] = var6;
            var1['discountOffer'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var2;
    var2 = function PlanOptionBadge(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var16 = arg3;
            var1 = _closure1_slot33;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var1 = arg2;
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = null;
            var2 = var1 != var16;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot30;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var9.planOptionDiscount;
            var2['style'] = var7;
            var10 = _closure1_slot30;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 15;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/bold', 'color': 'always-white'};
            var11 = var9.planOptionDiscountText;
            var7['style'] = var11;
            var11 = 16;
            var12 = var18[var11];
            var12 = var17.bind(var5)(var12);
            var14 = var12.intl;
            var13 = var14.format;
            var11 = var18[var11];
            var11 = var17.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.IAybsG;
            var11 = {};
            var15 = 19;
            var15 = var18[var15];
            var18 = var17.bind(var5)(var15);
            var17 = var18.formatPercent;
            var15 = 100;
            var16 = var16 / var15;
            var15 = arg1;
            var15 = var17.bind(var18)(var15, var16);
            var11['discount'] = var15;
            var11 = var13.bind(var14)(var12, var11);
            var7['children'] = var11;
            var7 = var10.bind(var5)(var8, var7);
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            _fun0003_ip = 13; continue _fun0003;
case 9:
            var4 = _closure1_slot30;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var9.planOptionDiscount;
            var2['style'] = var7;
            var8 = _closure1_slot30;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 15;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-xs/bold', 'color': 'always-white'};
            var9 = var9.planOptionDiscountText;
            var6['style'] = var9;
            var9 = 16;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.iQTfWx;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot35 = var2;
    var2 = function PlanOption(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var14 = var5.premiumItem;
            var _closure2_slot0 = var14;
            var2 = var5.selectedProductId;
            var9 = var5.optionNeedsProductNameLabel;
            var1 = var5.trialOffer;
            var27 = var5.discountOffer;
            var10 = var5.discountedPriceString;
            var30 = var5.userIsEligibleForBogoPromotion;
            var4 = undefined;
            if(!(var30 === var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var30 = false;
case 14:
            var13 = var5.selectedPremiumType;
            var5 = _closure1_slot33;
            var16 = var5.bind(var4)();
            var5 = _closure1_slot8;
            var25 = var5.locale;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 20;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var8;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var6.bind(var7)(var5, var3);
            var21 = null;
            var11 = var21 != var1;
            if(!var11) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = var1.subscription_trial;
            var5 = var21 == var1;
            var3 = undefined;
            if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = var1.sku_id;
case 18:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 21;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getSkuIdForPremiumType;
            var1 = var14.premiumTier;
            var1 = var5.bind(var6)(var1);
            var11 = var3 === var1;
case 16:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var3 = var5[var1];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getDisplayPremiumType;
            var3 = var14.basePlanId;
            var34 = var6.bind(var7)(var3);
            var3 = _closure1_slot1;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.getIntervalString;
            var3 = var14.interval;
            var1 = false;
            var33 = var5.bind(var6)(var3, var1);
            var3 = var14.basePlanId;
            var1 = _closure1_slot19;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            var3 = var3 === var1;
            var12 = var11;
            if(var12) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var12 = var21 != var27;
case 20:
            if(var12) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1 = var30;
            if(!var30) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = var3;
case 24:
            var12 = var1;
case 22:
            var24 = null;
            if(var12) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var3 = _closure1_slot14;
            var1 = var14.basePlanId;
            var24 = var3[var1];
case 26:
            if(!var30) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = var14.basePlanId;
            var1 = _closure1_slot19;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            var30 = var3 === var1;
case 28:
            var1 = var14.productId;
            var18 = var1 === var2;
            if(!(var21 != var22)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var2 = var22.currencyCode;
            var1 = var2.toLowerCase;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot29;
            var1 = var2 in var1;
            if(var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var1 = _closure1_slot29;
            var20 = var1.USD;
            _fun0004_ip = 34; continue _fun0004;
case 32:
            var2 = var22.currencyCode;
            var1 = var2.toLowerCase;
            var20 = var1.bind(var2)();
case 34:
            _fun0004_ip = 35; continue _fun0004;
case 30:
            var1 = _closure1_slot29;
            var20 = var1.USD;
case 35:
            var2 = _closure1_slot20;
            var1 = var14.basePlanId;
            var1 = var2[var1];
            var2 = var21 != var10;
            var31 = null;
            if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.formatRate;
            var3 = var1.interval;
            var2 = var1.intervalCount;
            var31 = var5.bind(var6)(var10, var3, var2);
case 36:
            if(var11) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var26 = var10;
            if(!(var21 == var26)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = var21 == var22;
            var3 = undefined;
            if(var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var3 = var22.priceString;
case 42:
            var5 = var21 != var3;
            var2 = '$...';
            if(!var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var2 = var3;
case 44:
            var26 = var2;
case 40:
            _fun0004_ip = 46; continue _fun0004;
case 38:
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 16;
            var3 = var17[var2];
            var3 = var8.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.formatToPlainString;
            var2 = var17[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.hXcaLT;
            var2 = {};
            var7 = 22;
            var7 = var17[var7];
            var19 = var8.bind(var4)(var7);
            var17 = var19.formatPrice;
            var8 = 0;
            var7 = {'minimumFractionDigits': 0, 'maximumFractionDigits': 0};
            var7 = var17.bind(var19)(var8, var20, var7);
            var2['price'] = var7;
            var26 = var5.bind(var6)(var3, var2);
case 46:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.formatRate;
            var3 = var21 == var22;
            var2 = undefined;
            if(var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var2 = var22.priceString;
case 47:
            var7 = var21 != var2;
            var19 = '$...';
            var3 = var19;
            if(!var7) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var3 = var2;
case 49:
            var2 = var1.interval;
            var1 = var1.intervalCount;
            var28 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot31;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var16.planOptionContainer;
            var1['style'] = var5;
            var7 = _closure1_slot30;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var20 = 15;
            var5 = var5[var20];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var17 = var21 != var27;
            var29 = 'text-md/medium';
            var8 = var29;
            if(!var17) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var8 = 'text-lg/medium';
case 51:
            var5['variant'] = var8;
            var17 = 'interactive-normal';
            var8 = var17;
            if(!var18) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var8 = 'interactive-active';
case 53:
            var5['color'] = var8;
            var8 = var33;
            if(!var9) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = global;
            var9 = var9.HermesInternal;
            var32 = var9.concat;
            var23 = '';
            var9 = ' ';
            var8 = var32.bind(var23)(var34, var9, var33);
case 55:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot31;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var16.planOptionPriceContainer;
            var6['style'] = var9;
            var9 = {};
            var23 = var16.planOptionDiscountContainer;
            var9['style'] = var23;
            var23 = null;
            if(var12) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var12 = _closure1_slot35;
            var23 = var12.bind(var4)(var25, var30, var24);
case 57:
            var12 = new Array(2);
            var12[0] = var23;
            var25 = _closure1_slot30;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var20];
            var23 = var24.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {};
            var23['variant'] = var29;
            var29 = var17;
            if(!var18) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var29 = 'interactive-active';
case 59:
            var23['color'] = var29;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var12[1] = var23;
            var9['children'] = var12;
            var12 = var8.bind(var4)(var7, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var23 = var21 != var31;
            var12 = null;
            if(!var23) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var23 = var21 != var27;
            var12 = null;
            if(!var23) { _fun0004_ip = 61; continue _fun0004 }
case 63:
            var13 = var21 == var13;
            var12 = null;
            if(!var13) { _fun0004_ip = 61; continue _fun0004 }
case 64:
            var24 = _closure1_slot30;
            var23 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var23.bind(var4)(var13);
            var23 = var13.Text;
            var13 = {};
            var25 = 'text-sm/medium';
            var13['variant'] = var25;
            var25 = var17;
            if(!var18) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var25 = 'text-normal';
case 65:
            var13['color'] = var25;
            var26 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = 16;
            var29 = var32[var25];
            var29 = var26.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.formatToPlainString;
            var25 = var32[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var26 = var25.02Gmgm;
            var25 = {};
            var25['discountedPrice'] = var31;
            var31 = var27.discount;
            var33 = var21 == var31;
            var32 = undefined;
            if(var33) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var32 = var31.user_usage_limit;
case 67:
            var33 = var21 != var32;
            var31 = 1;
            if(!var33) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var31 = var32;
case 69:
            var25['numMonths'] = var31;
            var25 = var29.bind(var30)(var26, var25);
            var13['children'] = var25;
            var12 = var24.bind(var4)(var23, var13);
case 61:
            var9[1] = var12;
            if(var11) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var11 = var21 != var10;
            var10 = null;
            if(!var11) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var11 = var21 != var27;
            var10 = null;
            if(!var11) { _fun0004_ip = 73; continue _fun0004 }
case 75:
            var13 = _closure1_slot30;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var23 = 'text-sm/medium';
            var11['variant'] = var23;
            var23 = var17;
            if(!var18) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var23 = 'text-normal';
case 76:
            var11['color'] = var23;
            var24 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 16;
            var25 = var29[var23];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.formatToPlainString;
            var23 = var29[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.vZk+c/;
            var23 = {};
            var23['regularPrice'] = var28;
            var27 = var27.discount;
            var29 = var21 == var27;
            var28 = undefined;
            if(var29) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var28 = var27.user_usage_limit;
case 78:
            var29 = var21 != var28;
            var27 = 1;
            if(!var29) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var27 = var28;
case 80:
            var23['numMonths'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var11['children'] = var23;
            var10 = var13.bind(var4)(var12, var11);
case 73:
            _fun0004_ip = 82; continue _fun0004;
case 71:
            var13 = _closure1_slot30;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var20 = 'text-xs/medium';
            var11['variant'] = var20;
            if(!var18) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            var17 = 'text-normal';
case 83:
            var11['color'] = var17;
            var16 = var16.postTrialPrice;
            var11['style'] = var16;
            var16 = var14.interval;
            var14 = _closure1_slot18;
            var14 = var14.YEAR;
            if(!(var16 !== var14)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 16;
            var17 = var20[var14];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var14 = var20[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var16 = var14.v9QeON;
            var14 = {};
            var20 = var21 == var22;
            var23 = undefined;
            if(var20) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var23 = var22.priceString;
case 87:
            var24 = var21 != var23;
            var20 = var19;
            if(!var24) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var20 = var23;
case 89:
            var14['price'] = var20;
            var14 = var17.bind(var18)(var16, var14);
            _fun0004_ip = 91; continue _fun0004;
case 85:
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 16;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.ECT4A5;
            var15 = {};
            var23 = var21 == var22;
            var20 = undefined;
            if(var23) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var20 = var22.priceString;
case 92:
            var21 = var21 != var20;
            if(!var21) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var19 = var20;
case 94:
            var15['price'] = var19;
            var14 = var17.bind(var18)(var16, var15);
case 91:
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 82:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var2;
    var2 = function PremiumPlanSelectionActionSheetCTA(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isPaymentSuccess;
            var5 = var2.onClose;
            var14 = var2.ctaText;
            var3 = var2.onStartPayment;
            var _closure2_slot0 = var3;
            var25 = var2.planInterval;
            var7 = var2.shouldUseApplePaymentLink;
            var _closure2_slot1 = var7;
            var17 = var2.disabled;
            var13 = var2.loading;
            var2 = _closure1_slot33;
            var4 = undefined;
            var10 = var2.bind(var4)();
            if(var1) { _fun0005_ip = 96; continue _fun0005 }
case 97:
            if(var7) { _fun0005_ip = 98; continue _fun0005 }
case 2:
            var12 = {};
            var1 = var10.button;
            var12['style'] = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 23;
            var6 = var3[var1];
            var6 = var2.bind(var4)(var6);
            var6 = var6.Sizes;
            var6 = var6.MEDIUM;
            var12['size'] = var6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Colors;
            var1 = var1.GREEN;
            var12['color'] = var1;
            _fun0005_ip = 99; continue _fun0005;
case 98:
            var1 = {};
            var2 = var10.buttonLarge;
            var1['style'] = var2;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 23;
            var8 = var6[var2];
            var8 = var3.bind(var4)(var8);
            var8 = var8.Sizes;
            var8 = var8.LARGE;
            var1['size'] = var8;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.Colors;
            var2 = var2.BRAND;
            var1['color'] = var2;
            var2 = var10.buttonTextLarge;
            var1['textStyle'] = var2;
            var12 = var1;
case 99:
            var3 = _closure1_slot31;
            var2 = _closure1_slot32;
            var1 = {};
            var11 = _closure1_slot30;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 23;
            var6 = var15[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['text'] = var14;
            var28 = var6;
            var27 = var12;
            var12 = copyDataProperties(var28, var27);
            var14 = function onPress() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure2_slot1;
                var2['shouldOpenApplePaymentLink'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = 'onPress';
            var6[var12] = var14;
            var12 = 'loading';
            var6[var12] = var13;
            var12 = 'disabled';
            var6[var12] = var17;
            var8 = var11.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            if(!var7) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            var12 = _closure1_slot31;
            var11 = _closure1_slot32;
            var8 = {};
            var15 = _closure1_slot30;
            var18 = _closure1_slot0;
            var26 = _closure1_slot2;
            var13 = 15;
            var13 = var26[var13];
            var13 = var18.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var16 = var10.legalDisclaimerText;
            var13['style'] = var16;
            var16 = 'text-xxs/medium';
            var13['variant'] = var16;
            var19 = 16;
            var16 = var26[var19];
            var16 = var18.bind(var4)(var16);
            var22 = var16.intl;
            var21 = var22.format;
            var16 = var26[var19];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var18 = var16.juYDmQ;
            var16 = {};
            var23 = _closure1_slot25;
            var23 = var23.PAID_TERMS;
            var16['paidURL'] = var23;
            var24 = _closure1_slot1;
            var23 = 21;
            var23 = var26[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.getIntervalStringAsNoun;
            var26 = null;
            if(!(var26 == var25)) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            var26 = _closure1_slot18;
            var25 = var26.MONTH;
case 102:
            var23 = var23.bind(var24)(var25);
            var16['interval'] = var23;
            var16 = var21.bind(var22)(var18, var16);
            var13['children'] = var16;
            var14 = var15.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot30;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 24;
            var14 = var22[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.LinkButton;
            var14 = {};
            var20 = function onPress() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = false;
                var2['shouldOpenApplePaymentLink'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var14['onPress'] = var20;
            var20 = var22[var19];
            var20 = var18.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var22[var19];
            var19 = var18.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.DOarTJ;
            var19 = var20.bind(var21)(var19);
            var14['text'] = var19;
            var19 = var10.linkButtonContainer;
            var14['containerStyle'] = var19;
            var19 = 'text-primary';
            var14['textColor'] = var19;
            var14['disabled'] = var17;
            var17 = 'text-md/semibold';
            var14['variant'] = var17;
            var19 = _closure1_slot30;
            var17 = 25;
            var17 = var22[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.ChevronLargeRightIcon;
            var17 = {};
            var20 = 'md';
            var17['size'] = var20;
            var21 = _closure1_slot1;
            var20 = 14;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.TEXT_PRIMARY;
            var17['color'] = var20;
            var20 = var10.linkButtonIcon;
            var17['style'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['iconRight'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var7 = var12.bind(var4)(var11, var8);
case 100:
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 96:
            var3 = _closure1_slot30;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 23;
            var1 = var8[var6];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var10 = var10.button;
            var1['style'] = var10;
            var12 = _closure1_slot0;
            var9 = 16;
            var10 = var8[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.WAI6xu;
            var9 = var10.bind(var11)(var9);
            var1['text'] = var9;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.Colors;
            var6 = var6.BRAND;
            var1['color'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var2;
    var2 = function getItemsByPremiumTypePredicate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = var2.additionalPlans;
                var5 = var2.isDeprecated;
                var4 = var2.numPremiumGuild;
                var3 = var2.premiumTier;
                var1 = var1.length;
                var2 = 0;
                var1 = var2 === var1;
                if(!var1) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                var1 = !var5;
case 104:
                if(!var1) { _fun0006_ip = 106; continue _fun0006 }
case 107:
                var1 = var2 === var4;
case 106:
                if(!var1) { _fun0006_ip = 108; continue _fun0006 }
case 109:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 108:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot38 = var2;
    var5 = 67;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/PremiumPlanSelectionActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var11 = var1.analyticsLocation;
            var17 = var1.analyticsLocations;
            var21 = var1.premiumType;
            var _closure2_slot1 = var21;
            var14 = var1.predicate;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0007_ip = 97; continue _fun0007 }
case 110:
            var3 = _closure1_slot38;
            var6 = null;
            var2 = var21;
            if(!(var6 == var2)) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var5 = _closure1_slot17;
            var2 = var5.TIER_2;
case 111:
            var14 = var3.bind(var4)(var2);
case 97:
            var8 = var1.initialSelectedCriteria;
            if(!(var8 === var4)) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            var8 = function A(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot18;
                var1 = var1.YEAR;
                var1 = var2 === var1;
                return var1;
            };
case 113:
            var12 = var1.sortFn;
            if(!(var12 === var4)) { _fun0007_ip = 115; continue _fun0007 }
case 116:
            var12 = function b(arg1, arg2) {
                var1 = arg2;
                var2 = var1.interval;
                var1 = arg1;
                var1 = var1.interval;
                var1 = var2 - var1;
                return var1;
            };
case 115:
            var28 = var1.onPaymentSuccess;
            var _closure2_slot2 = var28;
            var29 = var1.onPaymentDismiss;
            var _closure2_slot3 = var29;
            var1 = var1.showFormTitle;
            if(!(var1 === var4)) { _fun0007_ip = 17; continue _fun0007 }
case 117:
            var1 = true;
case 17:
            var _closure2_slot4 = var1;
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
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var13 = function onClose() {
                var3 = _closure1_slot13;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 43;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = _closure1_slot33;
            var9 = var1.bind(var4)();
            _closure2_slot5 = var9;
            var2 = _closure1_slot12;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPaymentSuccess;
                return var1;
            };
            var30 = var2.bind(var4)(var1);
            _closure2_slot6 = var30;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.applePaymentLinkStatus;
                return var1;
            };
            var18 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var1 = var7[var2];
            var15 = var3.bind(var4)(var1);
            var6 = var15.useStateFromStores;
            var1 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var25 = var6.bind(var15)(var5, var1);
            _closure2_slot7 = var25;
            var1 = 26;
            var1 = var7[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useHandlePremiumPurchase;
            var32 = var1.bind(var5)();
            _closure2_slot8 = var32;
            var15 = _closure1_slot1;
            var1 = 27;
            var1 = var7[var1];
            var19 = var15.bind(var4)(var1);
            var16 = var19.useExperiment;
            var5 = {};
            var1 = '97561b_1';
            var5['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var16.bind(var19)(var5, var1);
            var5 = var1.paymentsBlocked;
            var1 = 28;
            var1 = var7[var1];
            var1 = var15.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot9 = var1;
            var1 = 29;
            var1 = var7[var1];
            var15 = var3.bind(var4)(var1);
            var1 = var15.usePremiumTrialOffer;
            var19 = var1.bind(var15)();
            _closure2_slot10 = var19;
            var1 = 30;
            var1 = var7[var1];
            var15 = var3.bind(var4)(var1);
            var1 = var15.usePremiumDiscountOffer;
            var15 = var1.bind(var15)();
            _closure2_slot11 = var15;
            var1 = 31;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsEligibleForBogoPromotion;
            var3 = var1.bind(var3)(var6);
            _closure2_slot12 = var3;
            var26 = null;
            var1 = var26 != var19;
            if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 118:
            var1 = var26 != var21;
case 44:
            if(!var1) { _fun0007_ip = 119; continue _fun0007 }
case 40:
            var6 = var19.subscription_trial;
            var16 = var26 == var6;
            var7 = undefined;
            if(var16) { _fun0007_ip = 120; continue _fun0007 }
case 121:
            var7 = var6.sku_id;
case 120:
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 21;
            var6 = var22[var6];
            var16 = var16.bind(var4)(var6);
            var6 = var16.getSkuIdForPremiumType;
            var6 = var6.bind(var16)(var21);
            var1 = var7 === var6;
case 119:
            _closure2_slot13 = var1;
            if(!(var26 != var12)) { _fun0007_ip = 46; continue _fun0007 }
case 122:
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 32;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getPremiumBundlesWithPredicate;
            var7 = var6.bind(var7)(var14);
            var6 = var7.sort;
            var6 = var6.bind(var7)(var12);
            _fun0007_ip = 123; continue _fun0007;
case 46:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 32;
            var7 = var16[var7];
            var12 = var12.bind(var4)(var7);
            var7 = var12.getPremiumBundlesWithPredicate;
            var6 = var7.bind(var12)(var14);
case 123:
            _closure2_slot14 = var6;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 33;
            var7 = var14[var7];
            var12 = var12.bind(var4)(var7);
            var7 = var12.useDiscountedPremiumProductInfo;
            var7 = var7.bind(var12)(var15, var6);
            var12 = var7.discountedProduct;
            _closure2_slot15 = var12;
            var14 = var7.discountedPriceString;
            _closure2_slot16 = var14;
            var7 = var6;
            if(!var3) { _fun0007_ip = 124; continue _fun0007 }
case 125:
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot18;
                var1 = var1.MONTH;
                var1 = var2 === var1;
                return var1;
            };
case 124:
            var16 = _closure1_slot5;
            var6 = var16.useState;
            var3 = var7.find;
            var3 = var3.bind(var7)(var8);
            var7 = var6.bind(var16)(var3);
            var6 = _closure1_slot4;
            var3 = 2;
            var6 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var27 = var6[var3];
            _closure2_slot17 = var27;
            var3 = 1;
            var3 = var6[var3];
            _closure2_slot18 = var3;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = var7[var2];
            var12 = var3.bind(var4)(var2);
            var8 = var12.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 104; continue _fun0008 }
case 126:
                    var4 = _closure1_slot9;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot17;
                    var2 = var2.productId;
                    var1 = var3.bind(var4)(var2);
case 104:
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var6, var2);
            _closure2_slot19 = var2;
            var2 = 34;
            var2 = var7[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useBottomSheetRef;
            var2 = var2.bind(var6)();
            var6 = var2.bottomSheetRef;
            var8 = _closure1_slot1;
            var2 = 35;
            var2 = var7[var2];
            var12 = var8.bind(var4)(var2);
            var2 = 36;
            var2 = var7[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.PREMIUM_PAYMENT_ACTION_SHEET;
            var2 = var12.bind(var4)(var17, var2);
            var33 = var2.analyticsLocations;
            _closure2_slot20 = var33;
            var2 = 37;
            var2 = var7[var2];
            var8 = var8.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var34 = var8.bind(var4)(var2);
            _closure2_slot21 = var34;
            var12 = var16.useMemo;
            var8 = new Array(1);
            var8[0] = var21;
            var2 = function() {
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.castPremiumSubscriptionAsSkuId;
                var4 = _closure1_slot1;
                var1 = var6[var1];
                var5 = var4.bind(var5)(var1);
                var4 = var5.getSkuIdForPremiumType;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var36 = var12.bind(var16)(var2, var8);
            _closure2_slot22 = var36;
            var2 = 38;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.getBasePurchaseFlowAnalyticsFields;
            var2 = {};
            var2['analyticsLoadId'] = var34;
            var8 = {};
            var12 = _closure1_slot22;
            var12 = var12.BUTTON_CTA;
            var8['object'] = var12;
            var12 = _closure1_slot23;
            var12 = var12.BUY;
            var8['object_type'] = var12;
            var38 = var8;
            var37 = var11;
            var11 = copyDataProperties(var38, var37);
            var2['analyticsLocation'] = var8;
            var2['analyticsLocations'] = var33;
            var35 = var3.bind(var7)(var2);
            _closure2_slot23 = var35;
            var17 = var26 != var27;
            if(!var17) { _fun0007_ip = 127; continue _fun0007 }
case 128:
            var7 = _closure1_slot15;
            var3 = var7.has;
            var2 = var27.basePlanId;
            var17 = var3.bind(var7)(var2);
case 127:
            _closure2_slot24 = var17;
            var2 = var26 != var27;
            var12 = null;
            if(!var2) { _fun0007_ip = 129; continue _fun0007 }
case 130:
            var12 = var27.basePlanId;
case 129:
            _closure2_slot25 = var12;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 39;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useApplePaymentLinkExperimentConfig;
            var2 = {};
            var8 = 'premium_plan_selection_action_sheet';
            var2['location'] = var8;
            var2 = var3.bind(var7)(var2);
            var22 = var2.enabled;
            _closure2_slot26 = var22;
            var11 = var2.discountEnabled;
            var16 = var17;
            if(!var17) { _fun0007_ip = 131; continue _fun0007 }
case 132:
            var16 = var22;
case 131:
            _closure2_slot27 = var16;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 40;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useApplePaymentLinkDiscountOffer;
            var2 = {};
            var2['location'] = var8;
            var2['analyticsLoadId'] = var34;
            var8 = var17;
            if(!var17) { _fun0007_ip = 133; continue _fun0007 }
case 74:
            var8 = var11;
case 133:
            var2['shouldUseApplePaymentLinkDiscount'] = var8;
            var2['subscriptionPlanId'] = var12;
            var2['analyticsLocations'] = var33;
            var2 = var3.bind(var7)(var2);
            var24 = var2.isLoadingUserOffer;
            var31 = var2.userDiscountOffer;
            _closure2_slot28 = var31;
            var2 = var2.visibleApplePaymentLinkDiscount;
            _closure2_slot29 = var2;
            if(!var24) { _fun0007_ip = 134; continue _fun0007 }
case 135:
            var24 = var17;
case 134:
            if(!var24) { _fun0007_ip = 136; continue _fun0007 }
case 137:
            var3 = _closure1_slot19;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            var24 = var12 === var3;
case 136:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 41;
            var3 = var7[var3];
            var8 = var8.bind(var4)(var3);
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 42;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                    var2 = {};
                    var9 = _closure2_slot23;
                    var10 = var2;
                    var7 = copyDataProperties(var10, var9);
                    var8 = _closure2_slot0;
                    var7 = 'application_id';
                    var2[var7] = var8;
                    var8 = _closure2_slot25;
                    var7 = 'subscription_plan_id';
                    var2[var7] = var8;
                    var8 = _closure2_slot22;
                    var7 = 'sku_id';
                    var2[var7] = var8;
                    var8 = _closure2_slot28;
                    var7 = null;
                    var7 = var7 != var8;
                    var8 = undefined;
                    if(!var7) { _fun0009_ip = 115; continue _fun0009 }
case 138:
                    var7 = _closure2_slot28;
                    var8 = var7.discount_id;
case 115:
                    var7 = 'discount_id';
                    var2[var7] = var8;
                    var7 = _closure2_slot27;
                    var6 = undefined;
                    if(!var7) { _fun0009_ip = 139; continue _fun0009 }
case 140:
                    var5 = _closure1_slot27;
                    var6 = var5.APPLE_PAYMENT_LINK;
case 139:
                    var5 = 'custom_checkout_flow';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var8.bind(var4)(var3);
            var8 = _closure1_slot5;
            var23 = var8.useCallback;
            var11 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0010_ip = 141; continue _fun0010 }
case 142:
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0010_ip = 143; continue _fun0010 }
case 144:
                        var6 = {};
                        var8 = false;
                        var6['shouldOpenApplePaymentLink'] = var8;
                        var2 = var6;
case 143:
                        var9 = var2.shouldOpenApplePaymentLink;
                        var _closure4_slot0 = var3;
                        SaveGenerator(address=47);
case 145:
                        return var3;
case 107:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0010_ip = 146; continue _fun0010 }
case 147:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 17;
                        var5 = var10[var5];
                        var12 = var8.bind(var3)(var5);
                        var5 = _closure2_slot17;
                        var11 = null;
                        var8 = var11 != var5;
                        var5 = 'cannot start payment without a selectedItem';
                        var5 = var12.bind(var3)(var8, var5);
                        var5 = _closure2_slot17;
                        var5 = var5.basePlanId;
                        var8 = _closure2_slot26;
                        if(!var8) { _fun0010_ip = 148; continue _fun0010 }
case 149:
                        var8 = var9;
case 148:
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var18 = 38;
                        var9 = var9[var18];
                        var9 = var12.bind(var3)(var9);
                        var9 = var9.PaymentFlowStep;
                        if(var8) { _fun0010_ip = 150; continue _fun0010 }
case 151:
                        var15 = var9.EXTERNAL_PAYMENT;
                        _fun0010_ip = 152; continue _fun0010;
case 150:
                        var15 = var9.APPLE_PAYMENT_LINK_NITRO_STANDARD_CHECKOUT;
case 152:
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var9 = var16[var18];
                        var14 = var17.bind(var3)(var9);
                        var13 = var14.getPaymentFlowStepAnalyticsFields;
                        var12 = _closure2_slot23;
                        var9 = {};
                        var16 = var16[var18];
                        var16 = var17.bind(var3)(var16);
                        var16 = var16.PaymentFlowStep;
                        var16 = var16.PLAN_SELECT;
                        var9['from_step'] = var16;
                        var9['to_step'] = var15;
                        var15 = _closure2_slot17;
                        var15 = var15.productId;
                        var9['subscription_plan_gateway_plan_id'] = var15;
                        var15 = _closure2_slot22;
                        var9['sku_id'] = var15;
                        var14 = var13.bind(var14)(var12, var9);
                        _closure4_slot0 = var14;
                        if(var8) { _fun0010_ip = 20; continue _fun0010 }
case 153:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var9 = 44;
                        var9 = var13[var9];
                        var13 = var12.bind(var3)(var9);
                        var12 = var13.track;
                        var9 = _closure1_slot21;
                        var9 = var9.PAYMENT_FLOW_STEP;
                        var9 = var12.bind(var13)(var9, var14);
case 20:
                        var12 = _closure1_slot10;
                        var9 = {};
                        var13 = _closure2_slot17;
                        var13 = var13.productId;
                        var9['productId'] = var13;
                        var13 = _closure2_slot2;
                        var9['onPaymentSuccess'] = var13;
                        var13 = _closure2_slot3;
                        var9['onPaymentDismiss'] = var13;
                        var9 = var12.bind(var3)(var9);
                        if(var8) { _fun0010_ip = 154; continue _fun0010 }
case 155: // try_start_0
                        var9 = _closure2_slot8;
                        var8 = {};
                        var12 = _closure2_slot17;
                        var12 = var12.productId;
                        var8['productId'] = var12;
                        var12 = _closure2_slot23;
                        var12 = var12.location;
                        var8['analyticsLocation'] = var12;
                        var12 = _closure2_slot21;
                        var8['analyticsLoadId'] = var12;
                        var12 = _closure2_slot20;
                        var8['analyticsLocations'] = var12;
                        var8 = var9.bind(var3)(var8);
                        SaveGenerator(address=417);
case 32:
                        return var8;
case 156:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(var9) { _fun0010_ip = 157; continue _fun0010 }
case 158: // try_end0
                        _fun0010_ip = 124; continue _fun0010;
case 157:
                        return var8;
case 34: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var7 = var9;
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 47;
                        var8 = var13[var8];
                        var8 = var12.bind(var3)(var8);
                        var8 = var9 instanceof var8;
                        if(var8) { _fun0010_ip = 159; continue _fun0010 }
case 160:
                        throw var7;
case 159:
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var7 = 48;
                        var7 = var16[var7];
                        var8 = var15.bind(var3)(var7);
                        var7 = var8.fetchSubscriptions;
                        var7 = var7.bind(var8)();
                        var8 = _closure1_slot1;
                        var7 = 46;
                        var7 = var16[var7];
                        var9 = var8.bind(var3)(var7);
                        var8 = var9.show;
                        var7 = {};
                        var12 = 16;
                        var13 = var16[var12];
                        var13 = var15.bind(var3)(var13);
                        var17 = var13.intl;
                        var14 = var17.string;
                        var13 = var16[var12];
                        var13 = var15.bind(var3)(var13);
                        var13 = var13.t;
                        var13 = var13.U+H+kd;
                        var13 = var14.bind(var17)(var13);
                        var7['title'] = var13;
                        var13 = var16[var12];
                        var13 = var15.bind(var3)(var13);
                        var14 = var13.intl;
                        var13 = var14.string;
                        var12 = var16[var12];
                        var12 = var15.bind(var3)(var12);
                        var12 = var12.t;
                        var12 = var12.F9ktNa;
                        var12 = var13.bind(var14)(var12);
                        var7['body'] = var12;
                        var12 = true;
                        var7['hideActionSheet'] = var12;
                        var7 = var8.bind(var9)(var7);
                        _fun0010_ip = 124; continue _fun0010;
case 154:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 45;
                        var7 = var9[var7];
                        var9 = var8.bind(var3)(var7);
                        var8 = var9.goToStandalonePremiumCheckoutFromMobileApp;
                        var7 = {};
                        var7['planId'] = var5;
                        var5 = false;
                        var7['isGift'] = var5;
                        var5 = _closure2_slot21;
                        var7['loadId'] = var5;
                        var5 = _closure1_slot24;
                        var5 = var5.APPLE_PAYMENT_LINK;
                        var7['deepLinkType'] = var5;
                        var5 = _closure2_slot28;
                        var5 = var11 != var5;
                        if(!var5) { _fun0010_ip = 161; continue _fun0010 }
case 162:
                        var10 = _closure2_slot28;
                        var10 = var10.discount_id;
                        var6 = _closure1_slot16;
                        var5 = var10 === var6;
case 161:
                        var7['usePresetOffer'] = var5;
                        var22 = 'premium_plan_selection_action_sheet';
                        var20 = function() {
                            var4 = _closure1_slot11;
                            var1 = undefined;
                            var3 = 'in_mobile_web';
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 44;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot21;
                            var3 = var2.PAYMENT_FLOW_STEP;
                            var2 = _closure4_slot0;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var19 = function() {
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 46;
                            var2 = var9[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 16;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.vgvbiP;
                            var6 = var7.bind(var10)(var6);
                            var2['title'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.ycleJf;
                            var5 = var6.bind(var7)(var5);
                            var2['body'] = var5;
                            var5 = true;
                            var2['hideActionSheet'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var23 = var9;
                        var21 = var7;
                        var4 = var23[var8](var22, var21, var20, var19, var18);
case 124:
                        return var3;
case 146:
                        return var2;
case 141:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var11 = var11.bind(var4)(var3);
            var3 = new Array(10);
            var3[0] = var36;
            var3[1] = var35;
            var3[2] = var34;
            var3[3] = var33;
            var3[4] = var32;
            var3[5] = var22;
            var3[6] = var31;
            var3[7] = var29;
            var3[8] = var28;
            var3[9] = var27;
            var28 = var23.bind(var8)(var11, var3);
            var3 = function getActivatedImageSource() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var2 = null;
                    var2 = var2 == var3;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0011_ip = 163; continue _fun0011 }
case 164:
                    var2 = _closure2_slot17;
                    var5 = var2.premiumTier;
case 163:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_0;
                    if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 166:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_1;
                    if(!(var3 !== var5)) { _fun0011_ip = 167; continue _fun0011 }
case 112:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_2;
                    if(!(var3 !== var5)) { _fun0011_ip = 168; continue _fun0011 }
case 3:
                    return var4;
case 168:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot9;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0011_ip = 169; continue _fun0011 }
case 170:
                    var3 = 55;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0011_ip = 171; continue _fun0011;
case 169:
                    var5 = 54;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 171:
                    return var3;
case 167:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot9;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0011_ip = 172; continue _fun0011 }
case 173:
                    var3 = 53;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0011_ip = 9; continue _fun0011;
case 172:
                    var5 = 52;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 9:
                    return var3;
case 165:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isThemeDark;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0011_ip = 174; continue _fun0011 }
case 175:
                    var1 = 51;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    _fun0011_ip = 176; continue _fun0011;
case 174:
                    var2 = 50;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
case 176:
                    return var1;
                }
            };
            _closure2_slot30 = var3;
            var3 = function getActivatedText() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var2 = null;
                    var2 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0012_ip = 163; continue _fun0012 }
case 164:
                    var1 = _closure2_slot17;
                    var3 = var1.premiumTier;
case 163:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0012_ip = 177; continue _fun0012 }
case 166:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0012_ip = 139; continue _fun0012 }
case 112:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0012_ip = 168; continue _fun0012 }
case 3:
                    return var5;
case 168:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.I7xNzI;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 139:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.LAAgsy;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 177:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.6WWrVM;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            _closure2_slot31 = var3;
            var11 = var8.useMemo;
            var3 = new Array(5);
            var3[0] = var1;
            var3[1] = var22;
            var3[2] = var17;
            var3[3] = var12;
            var3[4] = var2;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(var1) { _fun0013_ip = 101; continue _fun0013 }
case 178:
                    var1 = _closure2_slot26;
                    if(!var1) { _fun0013_ip = 2; continue _fun0013 }
case 164:
                    var1 = _closure2_slot24;
                    if(!var1) { _fun0013_ip = 2; continue _fun0013 }
case 179:
                    var2 = _closure2_slot29;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0013_ip = 153; continue _fun0013 }
case 180:
                    var3 = _closure2_slot25;
                    var2 = _closure1_slot19;
                    var2 = var2.PREMIUM_MONTH_TIER_2;
                    if(!(var3 !== var2)) { _fun0013_ip = 16; continue _fun0013 }
case 112:
                    var3 = _closure2_slot25;
                    var2 = _closure1_slot19;
                    var2 = var2.PREMIUM_YEAR_TIER_2;
                    if(!(var3 !== var2)) { _fun0013_ip = 181; continue _fun0013 }
case 2:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 16;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.nIlrxd;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 181:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 16;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.0nfg1x;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 16:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.LQVQIq;
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 153:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.format;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.wvvuCa;
                    var1 = {};
                    var5 = _closure2_slot29;
                    var5 = var5.amount;
                    var1['discountPercentage'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 101:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 56;
                    var1 = var4[var1];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var1);
                    var1 = var3.isAndroid;
                    var1 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0013_ip = 35; continue _fun0013 }
case 157:
                    var1 = var2.bboTul;
                    var1 = var3.bind(var4)(var1);
                    _fun0013_ip = 182; continue _fun0013;
case 35:
                    var2 = var2.rKD72m;
                    var1 = var3.bind(var4)(var2);
case 182:
                    return var1;
                }
            };
            var29 = var11.bind(var8)(var2, var3);
            _closure2_slot32 = var29;
            var3 = var8.useMemo;
            var2 = new Array(6);
            var2[0] = var30;
            var2[1] = var27;
            var2[2] = var1;
            var2[3] = var14;
            var2[4] = var29;
            var1 = var9.legalDisclaimerText;
            var2[5] = var1;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(var2) { _fun0014_ip = 183; continue _fun0014 }
case 142:
                    var2 = _closure2_slot17;
                    var2 = var1 == var2;
                    var5 = undefined;
                    var15 = undefined;
                    if(var2) { _fun0014_ip = 180; continue _fun0014 }
case 163:
                    var2 = _closure2_slot17;
                    var15 = var2.interval;
case 180:
                    if(!(var1 != var15)) { _fun0014_ip = 184; continue _fun0014 }
case 107:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0014_ip = 185; continue _fun0014 }
case 15:
                    var2 = _closure2_slot16;
                    if(!(var1 == var2)) { _fun0014_ip = 186; continue _fun0014 }
case 187:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 56;
                    var2 = var4[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isAndroid;
                    var3 = var2.bind(var3)();
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 16;
                    var2 = var2[var7];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.t;
                    if(var3) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                    var10 = var2.7wpqfj;
                    _fun0014_ip = 188; continue _fun0014;
case 139:
                    var10 = var2.COObWR;
case 188:
                    var4 = _closure1_slot30;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 15;
                    var2 = var13[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.Text;
                    var2 = {};
                    var9 = _closure2_slot5;
                    var9 = var9.legalDisclaimerText;
                    var2['style'] = var9;
                    var9 = 'text-xxs/medium';
                    var2['variant'] = var9;
                    var7 = var13[var7];
                    var7 = var8.bind(var5)(var7);
                    var9 = var7.intl;
                    var8 = var9.format;
                    var7 = {};
                    var12 = _closure1_slot25;
                    var12 = var12.PAID_TERMS;
                    var7['paidURL'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 21;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getIntervalStringAsNoun;
                    var11 = var11.bind(var12)(var15);
                    var7['interval'] = var11;
                    var11 = _closure2_slot32;
                    var7['ctaText'] = var11;
                    var7 = var8.bind(var9)(var10, var7);
                    var2['children'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 186:
                    var4 = _closure1_slot30;
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 57;
                    var2 = var14[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TextWithIOSLinkWorkaround;
                    var2 = {};
                    var7 = _closure2_slot5;
                    var7 = var7.legalDisclaimerText;
                    var2['style'] = var7;
                    var7 = 'text-xxs/medium';
                    var2['variant'] = var7;
                    var7 = 16;
                    var9 = var14[var7];
                    var9 = var8.bind(var5)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var14[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.t;
                    var8 = var7.3uC7vj;
                    var7 = {};
                    var12 = _closure2_slot32;
                    var7['buttonText'] = var12;
                    var13 = _closure1_slot1;
                    var12 = 21;
                    var12 = var14[var12];
                    var16 = var13.bind(var5)(var12);
                    var12 = var16.formatInterval;
                    var12 = var12.bind(var16)(var15);
                    var7['interval'] = var12;
                    var12 = 58;
                    var16 = var14[var12];
                    var18 = var13.bind(var5)(var16);
                    var17 = var18.getArticleURL;
                    var11 = _closure1_slot26;
                    var16 = var11.PREMIUM_DETAILS_CANCEL_SUB;
                    var16 = var17.bind(var18)(var16);
                    var7['cancelSubscriptionArticle'] = var16;
                    var12 = var14[var12];
                    var13 = var13.bind(var5)(var12);
                    var12 = var13.getArticleURL;
                    var11 = var11.PAID_TERMS;
                    var11 = var12.bind(var13)(var11);
                    var7['paidServiceTermsArticle'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var2['children'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 185:
                    var4 = _closure1_slot30;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 57;
                    var2 = var11[var2];
                    var2 = var7.bind(var5)(var2);
                    var3 = var2.TextWithIOSLinkWorkaround;
                    var2 = {};
                    var6 = _closure2_slot5;
                    var6 = var6.legalDisclaimerText;
                    var2['style'] = var6;
                    var6 = 'text-xxs/medium';
                    var2['variant'] = var6;
                    var12 = 16;
                    var6 = var11[var12];
                    var6 = var7.bind(var5)(var6);
                    var9 = var6.intl;
                    var8 = var9.format;
                    var6 = 56;
                    var6 = var11[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.isAndroid;
                    var7 = var6.bind(var7)();
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.t;
                    if(var7) { _fun0014_ip = 189; continue _fun0014 }
case 190:
                    var7 = var6.ZWXtAj;
                    _fun0014_ip = 191; continue _fun0014;
case 189:
                    var7 = var6.tINI9V;
case 191:
                    var6 = {};
                    var11 = _closure1_slot25;
                    var11 = var11.PAID_TERMS;
                    var6['paidURL'] = var11;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 21;
                    var11 = var13[var11];
                    var14 = var12.bind(var5)(var11);
                    var11 = var14.getIntervalStringAsNoun;
                    var11 = var11.bind(var14)(var15);
                    var6['interval'] = var11;
                    var11 = 58;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getArticleURL;
                    var10 = _closure1_slot26;
                    var10 = var10.PREMIUM_DETAILS_CANCEL_SUB;
                    var10 = var11.bind(var12)(var10);
                    var6['cancelURL'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 184:
                    return var1;
case 183:
                    return var1;
                }
            };
            var17 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot30;
            var2 = _closure1_slot0;
            var1 = 59;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['ref'] = var6;
            var6 = true;
            var1['handleDisabled'] = var6;
            var7 = _closure1_slot13;
            var1['onDismiss'] = var7;
            var1['startExpanded'] = var6;
            var8 = _closure1_slot31;
            if(var5) { _fun0007_ip = 192; continue _fun0007 }
case 193:
            var6 = _closure1_slot32;
            var5 = {};
            var12 = _closure1_slot30;
            var11 = _closure1_slot34;
            var7 = {};
            var7['premiumType'] = var21;
            var7['isPaymentSuccess'] = var30;
            var22 = var26 == var27;
            var21 = undefined;
            if(var22) { _fun0007_ip = 194; continue _fun0007 }
case 195:
            var21 = var27.premiumTier;
case 194:
            var7['selectedPremiumType'] = var21;
            var7['trialOffer'] = var19;
            var19 = var26 != var14;
            var14 = null;
            if(!var19) { _fun0007_ip = 196; continue _fun0007 }
case 197:
            var14 = var15;
case 196:
            var7['discountOffer'] = var14;
            var11 = var12.bind(var4)(var11, var7);
            var7 = new Array(3);
            var7[0] = var11;
            var14 = _closure1_slot31;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var9.body;
            var11['style'] = var15;
            var15 = 'in_mobile_web';
            if(!(var15 !== var18)) { _fun0007_ip = 198; continue _fun0007 }
case 199:
            var19 = _closure1_slot31;
            var18 = _closure1_slot32;
            var15 = {};
            var20 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0015_ip = 135; continue _fun0015 }
case 126:
                    var25 = {};
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 56;
                    var1 = var3[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    var25['convertToMajorUnits'] = var1;
                    var12 = _closure2_slot4;
                    if(!var12) { _fun0015_ip = 200; continue _fun0015 }
case 201:
                    var1 = _closure2_slot13;
                    var12 = !var1;
case 200:
                    var3 = _closure1_slot31;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var5 = var5.contentSelectPlan;
                    var1['style'] = var5;
                    var5 = _closure2_slot13;
                    if(var5) { _fun0015_ip = 202; continue _fun0015 }
case 203:
                    var5 = _closure2_slot16;
                    var8 = null;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0015_ip = 31; continue _fun0015 }
case 149:
                    var5 = _closure2_slot15;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0015_ip = 31; continue _fun0015 }
case 204:
                    var5 = _closure2_slot1;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0015_ip = 31; continue _fun0015 }
case 151:
                    var10 = _closure1_slot31;
                    var8 = _closure1_slot6;
                    var5 = {};
                    var14 = _closure1_slot30;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = 15;
                    var11 = var19[var11];
                    var11 = var16.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-md/normal', 'color': 'text-primary'};
                    var15 = _closure2_slot5;
                    var15 = var15.discountDisclaimer;
                    var11['style'] = var15;
                    var15 = 16;
                    var17 = var19[var15];
                    var17 = var16.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.format;
                    var15 = var19[var15];
                    var15 = var16.bind(var4)(var15);
                    var15 = var15.t;
                    var16 = var15.yBn7uz;
                    var15 = {};
                    var19 = _closure2_slot15;
                    var19 = var19.priceString;
                    var15['regularPrice'] = var19;
                    var19 = _closure2_slot16;
                    var15['discountedPrice'] = var19;
                    var15 = var17.bind(var18)(var16, var15);
                    var11['children'] = var15;
                    var13 = var14.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var14 = _closure1_slot30;
                    var13 = {};
                    var15 = _closure2_slot5;
                    var16 = var15.divider;
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.discountDivider;
                    var15[1] = var16;
                    var13['style'] = var15;
                    var13 = var14.bind(var4)(var8, var13);
                    var11[1] = var13;
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
case 31:
                    _fun0015_ip = 205; continue _fun0015;
case 202:
                    var10 = _closure1_slot31;
                    var8 = _closure1_slot6;
                    var5 = {};
                    var14 = _closure1_slot30;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var11 = 15;
                    var11 = var21[var11];
                    var11 = var20.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-sm/normal', 'color': 'text-normal'};
                    var15 = _closure2_slot5;
                    var15 = var15.trialInfoText;
                    var11['style'] = var15;
                    var15 = 16;
                    var16 = var21[var15];
                    var16 = var20.bind(var4)(var16);
                    var18 = var16.intl;
                    var17 = var18.format;
                    var15 = var21[var15];
                    var15 = var20.bind(var4)(var15);
                    var15 = var15.t;
                    var16 = var15.uj94C5;
                    var15 = {};
                    var19 = 21;
                    var19 = var21[var19];
                    var21 = var20.bind(var4)(var19);
                    var20 = var21.formatIntervalDuration;
                    var19 = {};
                    var22 = _closure2_slot10;
                    var24 = var22.subscription_trial;
                    var22 = null;
                    var26 = var22 == var24;
                    var23 = undefined;
                    if(var26) { _fun0015_ip = 206; continue _fun0015 }
case 207:
                    var23 = var24.interval;
case 206:
                    var19['intervalType'] = var23;
                    var23 = _closure2_slot10;
                    var23 = var23.subscription_trial;
                    var24 = var22 == var23;
                    var22 = undefined;
                    if(var24) { _fun0015_ip = 208; continue _fun0015 }
case 209:
                    var22 = var23.interval_count;
case 208:
                    var19['intervalCount'] = var22;
                    var19 = var20.bind(var21)(var19);
                    var15['duration'] = var19;
                    var15 = var17.bind(var18)(var16, var15);
                    var11['children'] = var15;
                    var13 = var14.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var15 = _closure1_slot30;
                    var14 = _closure1_slot6;
                    var13 = {};
                    var16 = _closure2_slot5;
                    var16 = var16.divider;
                    var13['style'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var11[1] = var13;
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
case 205:
                    var5 = new Array(2);
                    var5[0] = var7;
                    var10 = _closure1_slot31;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 64;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = undefined;
                    if(!var12) { _fun0015_ip = 210; continue _fun0015 }
case 211:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 16;
                    var14 = var17[var13];
                    var14 = var16.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.u95Dt4;
                    var11 = var14.bind(var15)(var13);
case 210:
                    var7['title'] = var11;
                    var11 = _closure1_slot28;
                    var11 = var11.NO_BORDER_OR_MARGIN;
                    var7['titleStyleType'] = var11;
                    var11 = _closure2_slot5;
                    var11 = var11.formTitle;
                    var7['titleViewStyle'] = var11;
                    var11 = _closure2_slot5;
                    var13 = var11.formSectionBody;
                    var11 = new Array(2);
                    var11[0] = var13;
                    var12 = !var12;
                    if(!var12) { _fun0015_ip = 51; continue _fun0015 }
case 212:
                    var13 = _closure2_slot5;
                    var12 = var13.formSectionBodyWithNoTitle;
case 51:
                    var11[1] = var12;
                    var7['sectionBodyStyle'] = var11;
                    var15 = true;
                    var7['inset'] = var15;
                    var11 = _closure2_slot19;
                    var17 = null;
                    var12 = var17 != var11;
                    if(!var12) { _fun0015_ip = 213; continue _fun0015 }
case 214:
                    var11 = _closure2_slot19;
                    var13 = var11.countryCode;
                    var11 = 'HR';
                    var12 = var11 === var13;
case 213:
                    if(!var12) { _fun0015_ip = 215; continue _fun0015 }
case 216:
                    var11 = _closure2_slot19;
                    var13 = var11.currencyCode;
                    var11 = var13.toLowerCase;
                    var13 = var11.bind(var13)();
                    var11 = _closure1_slot29;
                    var11 = var11.EUR;
                    var12 = var13 === var11;
case 215:
                    if(!var12) { _fun0015_ip = 217; continue _fun0015 }
case 218:
                    var14 = _closure1_slot30;
                    var13 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var11 = 65;
                    var11 = var23[var11];
                    var13 = var13.bind(var4)(var11);
                    var11 = {};
                    var22 = _closure1_slot0;
                    var16 = 16;
                    var18 = var23[var16];
                    var18 = var22.bind(var4)(var18);
                    var20 = var18.intl;
                    var19 = var20.formatToPlainString;
                    var16 = var23[var16];
                    var16 = var22.bind(var4)(var16);
                    var16 = var16.t;
                    var18 = var16.9hnZoK;
                    var16 = {};
                    var21 = 22;
                    var21 = var23[var21];
                    var24 = var22.bind(var4)(var21);
                    var23 = var24.formatPrice;
                    var21 = _closure2_slot19;
                    var22 = var21.price;
                    var21 = 7.5345;
                    var22 = var21 * var22;
                    var21 = _closure1_slot29;
                    var21 = var21.HRK;
                    var21 = var23.bind(var24)(var22, var21, var25);
                    var16['kunaPriceWithCurrency'] = var21;
                    var16 = var19.bind(var20)(var18, var16);
                    var11['message'] = var16;
                    var12 = var14.bind(var4)(var13, var11);
case 217:
                    var11 = new Array(2);
                    var11[0] = var12;
                    var14 = _closure1_slot30;
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var12 = 66;
                    var12 = var16[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var16 = _closure2_slot17;
                    var18 = var17 == var16;
                    var16 = undefined;
                    if(var18) { _fun0015_ip = 219; continue _fun0015 }
case 220:
                    var18 = _closure2_slot17;
                    var16 = var18.productId;
case 219:
                    var12['value'] = var16;
                    var24 = _closure1_slot39;
                    var23 = _closure2_slot14;
                    var16 = _closure2_slot17;
                    var16 = var17 == var16;
                    var22 = undefined;
                    if(var16) { _fun0015_ip = 221; continue _fun0015 }
case 222:
                    var16 = _closure2_slot17;
                    var22 = var16.productId;
case 221:
                    var21 = _closure2_slot10;
                    var20 = _closure2_slot11;
                    var16 = _closure2_slot15;
                    var16 = var17 == var16;
                    var19 = undefined;
                    if(var16) { _fun0015_ip = 223; continue _fun0015 }
case 224:
                    var16 = _closure2_slot15;
                    var19 = var16.identifier;
case 223:
                    var29 = _closure2_slot16;
                    var28 = _closure2_slot12;
                    var27 = _closure2_slot1;
                    var35 = undefined;
                    var34 = var23;
                    var33 = var22;
                    var32 = var21;
                    var31 = var20;
                    var30 = var19;
                    var16 = var35[var24](var34, var33, var32, var31, var30, var29, var28, var27, var26);
                    var12['options'] = var16;
                    var16 = function onChange(arg1) {
                        var2 = arg1;
                        var2 = var2.value;
                        var _closure4_slot0 = var2;
                        var3 = _closure2_slot18;
                        var4 = _closure2_slot14;
                        var2 = var4.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.productId;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = undefined;
                        return var1;
                    };
                    var12['onChange'] = var16;
                    var16 = false;
                    var12['withDividers'] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.planOptionRowContainer;
                    var12['style'] = var16;
                    var16 = _closure2_slot7;
                    var12['disabled'] = var16;
                    var12['indicatorLeft'] = var15;
                    var12 = var14.bind(var4)(var13, var12);
                    var11[1] = var12;
                    var7['children'] = var11;
                    var7 = var10.bind(var4)(var8, var7);
                    var5[1] = var7;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 135:
                    var4 = _closure1_slot31;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.contentActivated;
                    var2['style'] = var1;
                    var8 = _closure1_slot30;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 63;
                    var5 = var10[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var11 = _closure2_slot30;
                    var11 = var11.bind(var1)();
                    var5['source'] = var11;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot30;
                    var7 = _closure1_slot0;
                    var6 = 15;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var10 = _closure2_slot5;
                    var10 = var10.contentActivatedText;
                    var6['style'] = var10;
                    var10 = 'text-md/semibold';
                    var6['variant'] = var10;
                    var9 = _closure2_slot31;
                    var9 = var9.bind(var1)();
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var21 = var20.bind(var4)();
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot30;
            var22 = _closure1_slot37;
            var21 = {};
            var21['isPaymentSuccess'] = var30;
            var21['onClose'] = var13;
            var21['ctaText'] = var29;
            var21['onStartPayment'] = var28;
            var28 = var26 == var27;
            var26 = undefined;
            if(var28) { _fun0007_ip = 225; continue _fun0007 }
case 226:
            var26 = var27.interval;
case 225:
            var21['planInterval'] = var26;
            var21['shouldUseApplePaymentLink'] = var16;
            if(var25) { _fun0007_ip = 227; continue _fun0007 }
case 228:
            var25 = var24;
case 227:
            var21['disabled'] = var25;
            var21['loading'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var15['children'] = var20;
            var18 = var19.bind(var4)(var18, var15);
            _fun0007_ip = 229; continue _fun0007;
case 198:
            var20 = _closure1_slot30;
            var19 = _closure1_slot7;
            var15 = {};
            var21 = 'large';
            var15['size'] = var21;
            var21 = var9.loadingIndicator;
            var15['style'] = var21;
            var18 = var20.bind(var4)(var19, var15);
case 229:
            var15 = new Array(2);
            var15[0] = var18;
            var16 = !var16;
            if(!var16) { _fun0007_ip = 230; continue _fun0007 }
case 231:
            var16 = var17;
case 230:
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var7[1] = var11;
            var14 = _closure1_slot30;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 61;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = 62;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ActionSheetHeaderBarVariants;
            var15 = var15.FLOATING;
            var11['variant'] = var15;
            var11['onPress'] = var13;
            var11 = var14.bind(var4)(var12, var11);
            var7[2] = var11;
            var5['children'] = var7;
            var5 = var8.bind(var4)(var6, var5);
            _fun0007_ip = 232; continue _fun0007;
case 192:
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.blockedPaymentContainer;
            var6['style'] = var9;
            var12 = _closure1_slot30;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 60;
            var9 = var16[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot30;
            var15 = _closure1_slot0;
            var10 = 61;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.ActionSheetHeaderBar;
            var10 = {};
            var14 = 62;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ActionSheetHeaderBarVariants;
            var14 = var14.FLOATING;
            var10['variant'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 232:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getItemsByPremiumTypePredicate'] = var2;
    return var1;
})();