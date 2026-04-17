// app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var16;
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
                var6 = _closure1_slot27;
                var5 = _closure1_slot34;
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
    var _closure1_slot37 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var16.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var7[var10];
    var2 = var16.bind(var1)(var2);
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
    var2 = var16.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.setInitiatedPurchaseFromNewFlow;
    var _closure1_slot10 = var5;
    var5 = var2.setMobileWebRedirectCheckoutStatus;
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
    var5 = var2.PremiumTypes;
    var _closure1_slot15 = var5;
    var5 = var2.SubscriptionIntervalTypes;
    var _closure1_slot16 = var5;
    var5 = var2.SubscriptionPlans;
    var _closure1_slot17 = var5;
    var2 = var2.SubscriptionPlanInfo;
    var _closure1_slot18 = var2;
    var14 = 8;
    var2 = var7[var14];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot19 = var5;
    var5 = var2.AnalyticsObjects;
    var _closure1_slot20 = var5;
    var5 = var2.AnalyticsObjectTypes;
    var _closure1_slot21 = var5;
    var5 = var2.MarketingURLs;
    var _closure1_slot22 = var5;
    var2 = var2.HelpdeskArticles;
    var _closure1_slot23 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.TitleStyleType;
    var _closure1_slot24 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.EUR_TO_HRK_CONVERSION_RATE;
    var _closure1_slot25 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CurrencyCodes;
    var _closure1_slot26 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot27 = var5;
    var5 = var2.jsxs;
    var _closure1_slot28 = var5;
    var2 = var2.Fragment;
    var _closure1_slot29 = var2;
    var2 = 13;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var17 = 16;
    var9['padding'] = var17;
    var2['body'] = var9;
    var12 = 30;
    var13 = 20;
    var9 = {'paddingTop': 30, 'paddingHorizontal': 20};
    var2['headerText'] = var9;
    var9 = {};
    var9['marginBottom'] = var17;
    var2['contentSelectPlan'] = var9;
    var18 = 40;
    var9 = {'alignItems': 'center', 'paddingTop': 40, 'paddingBottom': 56};
    var2['contentActivated'] = var9;
    var9 = {'width': 328, 'marginTop': 16, 'textAlign': 'center'};
    var2['contentActivatedText'] = var9;
    var9 = {'paddingTop': 0, 'paddingLeft': 0};
    var2['formTitle'] = var9;
    var9 = {};
    var15 = 'none';
    var9['backgroundColor'] = var15;
    var2['formSectionBody'] = var9;
    var9 = {};
    var15 = -24;
    var9['marginTop'] = var15;
    var2['formSectionBodyWithNoTitle'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var11;
    var2['planOptionRowContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var2['planOptionContainer'] = var9;
    var11 = 'flex-end';
    var9 = {'flexGrow': 1, 'flexShrink': 1, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'};
    var2['planOptionPriceContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'flexShrink': 1};
    var2['planOptionDiscountContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'backgroundColor': null, 'paddingVertical': 2, 'paddingHorizontal': 8, 'marginRight': 8};
    var15 = 14;
    var19 = var7[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var9['borderRadius'] = var19;
    var19 = var7[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var19 = var19.GREEN_360;
    var9['backgroundColor'] = var19;
    var2['planOptionDiscount'] = var9;
    var9 = {};
    var19 = var7[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.WHITE;
    var9['backgroundColor'] = var19;
    var2['planOptionDiscountWhite'] = var9;
    var9 = {};
    var19 = 'uppercase';
    var9['textTransform'] = var19;
    var2['planOptionDiscountText'] = var9;
    var9 = {};
    var9['marginVertical'] = var18;
    var2['blockedPaymentContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var17;
    var2['legalDisclaimerText'] = var9;
    var9 = {'height': 1, 'width': '100%'};
    var15 = var7[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var9['backgroundColor'] = var15;
    var2['divider'] = var9;
    var9 = {};
    var9['marginBottom'] = var14;
    var2['offerDividerMargin'] = var9;
    var9 = {};
    var9['marginBottom'] = var14;
    var2['trialDisclaimer'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var2['discountDisclaimer'] = var9;
    var9 = {};
    var9['marginVertical'] = var12;
    var2['loadingIndicator'] = var9;
    var9 = {};
    var9['alignItems'] = var11;
    var2['discountSubTextContainer'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var2['priceText'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot30 = var2;
    var2 = function Header(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.premiumType;
            var8 = var1.isPaymentSuccess;
            var2 = var1.selectedPremiumType;
            var6 = var1.trialOffer;
            var5 = var1.discountOffer;
            var3 = _closure1_slot30;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var3 = null;
            if(!(var3 == var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var11 = _closure1_slot27;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 15;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-default', 'accessibilityRole': 'header'};
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
            var3 = _closure1_slot27;
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
    var _closure1_slot31 = var2;
    var2 = function PlanOptionBadgeComponent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.text;
            var10 = var1.backgroundColorType;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var10 = 'green';
case 9:
            var1 = _closure1_slot30;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot27;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var9.planOptionDiscount;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 'white';
            var10 = var7 === var10;
            var7 = null;
            if(!var10) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = var9.planOptionDiscountWhite;
case 11:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot27;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var9 = var9.planOptionDiscountText;
            var5['style'] = var9;
            var9 = 'text-xs/bold';
            var5['variant'] = var9;
            var9 = 'always-white';
            if(!var10) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var9 = 'black';
case 13:
            var5['color'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var2;
    var2 = function renderPlanOptionBadge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.customBadgeComponent;
            var16 = var2.discount;
            var15 = var2.userLocale;
            var4 = var2.showBogoPromotionBadge;
            var5 = var2.hideDefaultDiscountBadges;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var2 = null;
            if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = var3 != var16;
            var3 = null;
            if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var7 = _closure1_slot27;
            var6 = _closure1_slot32;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 16;
            var9 = var14[var8];
            var4 = undefined;
            var9 = var13.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.format;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.IAybsG;
            var8 = {};
            var12 = 19;
            var12 = var14[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.formatPercent;
            var12 = 100;
            var12 = var16 / var12;
            var12 = var13.bind(var14)(var15, var12);
            var8['discount'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['text'] = var8;
            var3 = var7.bind(var4)(var6, var5);
case 21:
            _fun0004_ip = 23; continue _fun0004;
case 19:
            var7 = _closure1_slot27;
            var6 = _closure1_slot32;
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 16;
            var9 = var12[var8];
            var4 = undefined;
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.iQTfWx;
            var8 = var9.bind(var10)(var8);
            var5['text'] = var8;
            var3 = var7.bind(var4)(var6, var5);
case 23:
            var2 = var3;
case 17:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot33 = var2;
    var2 = function PlanOption(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var26 = var1.premiumItem;
            var _closure2_slot0 = var26;
            var5 = var1.selectedProductId;
            var10 = var1.optionNeedsProductNameLabel;
            var27 = var1.customBadgeComponent;
            var2 = var1.trialOffer;
            var23 = var1.discountOffer;
            var14 = var1.discountedPriceString;
            var17 = var1.userIsEligibleForBogoPromotion;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0005_ip = 22; continue _fun0005 }
case 24:
            var17 = false;
case 22:
            var13 = var1.selectedPremiumType;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot30;
            var16 = var1.bind(var4)();
            var1 = _closure1_slot8;
            var33 = var1.locale;
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var1 = 0;
            var7 = var3.bind(var6)(var1);
            var3 = _closure1_slot4;
            var6 = 2;
            var7 = var3.bind(var4)(var7, var6);
            var3 = var7[var1];
            _closure2_slot1 = var3;
            var22 = 1;
            var7 = var7[var22];
            _closure2_slot2 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 20;
            var7 = var9[var7];
            var11 = var8.bind(var4)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var9.bind(var11)(var8, var7);
            var24 = null;
            var11 = var24 != var2;
            if(!var11) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var2 = var2.subscription_trial;
            var8 = var24 == var2;
            var7 = undefined;
            if(var8) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var7 = var2.sku_id;
case 27:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 21;
            var2 = var9[var2];
            var9 = var8.bind(var4)(var2);
            var8 = var9.getSkuIdForPremiumType;
            var2 = var26.premiumTier;
            var2 = var8.bind(var9)(var2);
            var11 = var7 === var2;
case 25:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 21;
            var7 = var8[var2];
            var12 = var9.bind(var4)(var7);
            var9 = var12.getTierDisplayNameByPlanId;
            var7 = var26.basePlanId;
            var37 = var9.bind(var12)(var7);
            var7 = _closure1_slot1;
            var2 = var8[var2];
            var9 = var7.bind(var4)(var2);
            var8 = var9.getIntervalString;
            var7 = var26.interval;
            var2 = false;
            var36 = var8.bind(var9)(var7, var2);
            var7 = var26.basePlanId;
            var2 = _closure1_slot17;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            var7 = var7 === var2;
            var29 = var11;
            if(var29) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var29 = var24 != var23;
case 29:
            if(var29) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var2 = var17;
            if(!var17) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var2 = var7;
case 33:
            var29 = var2;
case 31:
            var31 = null;
            if(var29) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var7 = _closure1_slot14;
            var2 = var26.basePlanId;
            var31 = var7[var2];
case 35:
            if(!var17) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var7 = var26.basePlanId;
            var2 = _closure1_slot17;
            var2 = var2.PREMIUM_MONTH_TIER_2;
            var17 = var7 === var2;
case 37:
            var2 = var26.productId;
            var20 = var2 === var5;
            if(!(var24 != var34)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = var34.currencyCode;
            var2 = var5.toLowerCase;
            var5 = var2.bind(var5)();
            var2 = _closure1_slot26;
            var2 = var5 in var2;
            if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var2 = _closure1_slot26;
            var25 = var2.USD;
            _fun0005_ip = 43; continue _fun0005;
case 41:
            var5 = var34.currencyCode;
            var2 = var5.toLowerCase;
            var25 = var2.bind(var5)();
case 43:
            _fun0005_ip = 44; continue _fun0005;
case 39:
            var2 = _closure1_slot26;
            var25 = var2.USD;
case 44:
            var5 = _closure1_slot18;
            var2 = var26.basePlanId;
            var2 = var5[var2];
            var5 = var24 != var14;
            var30 = null;
            if(!var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.formatRate;
            var7 = var2.interval;
            var5 = var2.intervalCount;
            var30 = var8.bind(var9)(var14, var7, var5);
case 45:
            if(var11) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var28 = var14;
            if(!(var24 == var28)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = var24 == var34;
            var7 = undefined;
            if(var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var7 = var34.priceString;
case 51:
            var8 = var24 != var7;
            var5 = '$...';
            if(!var8) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var5 = var7;
case 53:
            var28 = var5;
case 49:
            _fun0005_ip = 55; continue _fun0005;
case 47:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 16;
            var7 = var21[var5];
            var7 = var19.bind(var4)(var7);
            var9 = var7.intl;
            var8 = var9.formatToPlainString;
            var5 = var21[var5];
            var5 = var19.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.hXcaLT;
            var5 = {};
            var12 = 22;
            var12 = var21[var12];
            var21 = var19.bind(var4)(var12);
            var19 = var21.formatPrice;
            var12 = {'minimumFractionDigits': 0, 'maximumFractionDigits': 0};
            var12 = var19.bind(var21)(var1, var25, var12);
            var5['price'] = var12;
            var28 = var8.bind(var9)(var7, var5);
case 55:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.formatRate;
            var7 = var24 == var34;
            var5 = undefined;
            if(var7) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var5 = var34.priceString;
case 56:
            var12 = var24 != var5;
            var32 = '$...';
            var7 = var32;
            if(!var12) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var7 = var5;
case 58:
            var5 = var2.interval;
            var2 = var2.intervalCount;
            var25 = var8.bind(var9)(var7, var5, var2);
            if(!(!(var3 > var1))) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var9 = var16.planOptionPriceContainer;
            _fun0005_ip = 62; continue _fun0005;
case 60:
            var2 = var16.planOptionPriceContainer;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = {};
            var5 = {};
            var3 = var3 / var6;
            var5['translateY'] = var3;
            var3 = new Array(1);
            var3[0] = var5;
            var2['transform'] = var3;
            var1[1] = var2;
            var9 = var1;
case 62:
            var3 = _closure1_slot28;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var16.planOptionContainer;
            var1['style'] = var5;
            var7 = _closure1_slot27;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = 15;
            var5 = var5[var21];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            if(!(var24 == var23)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var8 = 'text-md/medium';
            if(!var11) { _fun0005_ip = 65; continue _fun0005 }
case 63:
            var8 = 'text-lg/medium';
case 65:
            var5['variant'] = var8;
            var19 = 'interactive-text-default';
            var8 = var19;
            if(!var20) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var8 = 'interactive-text-active';
case 66:
            var5['color'] = var8;
            var8 = var36;
            if(!var10) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var10 = global;
            var10 = var10.HermesInternal;
            var35 = var10.concat;
            var12 = '';
            var10 = ' ';
            var8 = var35.bind(var12)(var37, var10, var36);
case 68:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot28;
            var7 = _closure1_slot6;
            var6 = {};
            var6['style'] = var9;
            var9 = {};
            var10 = var16.planOptionDiscountContainer;
            var9['style'] = var10;
            var12 = _closure1_slot33;
            var10 = {};
            var10['userLocale'] = var33;
            var10['discount'] = var31;
            var10['hideDefaultDiscountBadges'] = var29;
            var10['customBadgeComponent'] = var27;
            var10['showBogoPromotionBadge'] = var17;
            var12 = var12.bind(var4)(var10);
            var10 = new Array(2);
            var10[0] = var12;
            var27 = _closure1_slot27;
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var21];
            var12 = var17.bind(var4)(var12);
            var17 = var12.Text;
            var12 = {};
            var29 = var16.priceText;
            var12['style'] = var29;
            var29 = 'text-lg/medium';
            var12['variant'] = var29;
            var29 = var19;
            if(!var20) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var29 = 'interactive-text-active';
case 70:
            var12['color'] = var29;
            var12['children'] = var28;
            var12 = var27.bind(var4)(var17, var12);
            var10[1] = var12;
            var9['children'] = var10;
            var10 = var8.bind(var4)(var7, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = null;
            if(!var11) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var17 = _closure1_slot27;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var21];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var27 = 'text-xs/medium';
            var11['variant'] = var27;
            var27 = var19;
            if(!var20) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var27 = 'text-default';
case 74:
            var11['color'] = var27;
            var27 = var26.interval;
            var26 = _closure1_slot16;
            var26 = var26.YEAR;
            if(!(var27 !== var26)) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 16;
            var28 = var31[var26];
            var28 = var27.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.formatToPlainString;
            var26 = var31[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var27 = var26.v9QeON;
            var26 = {};
            var31 = var24 == var34;
            var33 = undefined;
            if(var31) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var33 = var34.priceString;
case 78:
            var35 = var24 != var33;
            var31 = var32;
            if(!var35) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var31 = var33;
case 80:
            var26['price'] = var31;
            var26 = var28.bind(var29)(var27, var26);
            _fun0005_ip = 82; continue _fun0005;
case 76:
            var28 = _closure1_slot0;
            var33 = _closure1_slot2;
            var27 = 16;
            var29 = var33[var27];
            var29 = var28.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.formatToPlainString;
            var27 = var33[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.t;
            var28 = var27.ECT4A5;
            var27 = {};
            var35 = var24 == var34;
            var33 = undefined;
            if(var35) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var33 = var34.priceString;
case 83:
            var34 = var24 != var33;
            if(!var34) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var32 = var33;
case 85:
            var27['price'] = var32;
            var26 = var29.bind(var31)(var28, var27);
case 82:
            var11['children'] = var26;
            var10 = var17.bind(var4)(var12, var11);
case 72:
            var9[1] = var10;
            var12 = _closure1_slot28;
            var11 = _closure1_slot6;
            var10 = {};
            var16 = var16.discountSubTextContainer;
            var10['style'] = var16;
            var15 = function onLayout(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var2 = _closure2_slot1;
                    if(!(var3 !== var2)) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onLayout'] = var15;
            var16 = var24 != var30;
            var15 = null;
            if(!var16) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var16 = var24 != var23;
            var15 = null;
            if(!var16) { _fun0005_ip = 89; continue _fun0005 }
case 91:
            var13 = var24 == var13;
            var15 = null;
            if(!var13) { _fun0005_ip = 89; continue _fun0005 }
case 92:
            var17 = _closure1_slot27;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var13 = var16.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {};
            var26 = 'text-sm/medium';
            var13['variant'] = var26;
            var26 = var19;
            if(!var20) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var26 = 'text-default';
case 93:
            var13['color'] = var26;
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 16;
            var28 = var31[var26];
            var28 = var27.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.formatToPlainString;
            var26 = var31[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var27 = var26["02Gmgm"];
            var26 = {};
            var26['discountedPrice'] = var30;
            var30 = var23.discount;
            var32 = var24 == var30;
            var31 = undefined;
            if(var32) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            var31 = var30.user_usage_limit;
case 95:
            var32 = var24 != var31;
            var30 = var22;
            if(!var32) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var30 = var31;
case 97:
            var26['numMonths'] = var30;
            var26 = var28.bind(var29)(var27, var26);
            var13['children'] = var26;
            var15 = var17.bind(var4)(var16, var13);
case 89:
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var24 != var14;
            if(!var14) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var14 = var24 != var23;
case 99:
            if(!var14) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var17 = _closure1_slot27;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var21];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {};
            var21 = 'text-sm/medium';
            var15['variant'] = var21;
            if(!var20) { _fun0005_ip = 103; continue _fun0005 }
case 104:
            var19 = 'text-default';
case 103:
            var15['color'] = var19;
            var19 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 16;
            var20 = var26[var18];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var18 = var26[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.vZk+c/;
            var18 = {};
            var18['regularPrice'] = var25;
            var25 = var23.discount;
            var26 = var24 == var25;
            var23 = undefined;
            if(var26) { _fun0005_ip = 105; continue _fun0005 }
case 106:
            var23 = var25.user_usage_limit;
case 105:
            var24 = var24 != var23;
            if(!var24) { _fun0005_ip = 107; continue _fun0005 }
case 108:
            var22 = var23;
case 107:
            var18['numMonths'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 101:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var2;
    var2 = function PremiumPlanSelectionActionSheetCTA(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = var3.isPaymentSuccess;
            var5 = var3.onClose;
            var10 = var3.ctaText;
            var1 = var3.onStartPayment;
            var _closure2_slot0 = var1;
            var1 = var3.shouldUseMobileWebRedirectCheckout;
            var _closure2_slot1 = var1;
            var7 = var3.disabled;
            var8 = var3.loading;
            if(var2) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            if(var1) { _fun0007_ip = 111; continue _fun0007 }
case 24:
            var9 = {'size': 'md', 'variant': 'active'};
            _fun0007_ip = 112; continue _fun0007;
case 111:
            var9 = {'size': 'lg', 'variant': 'primary'};
case 112:
            var4 = _closure1_slot27;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {};
            var1['text'] = var10;
            var12 = var1;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var10 = true;
            var9 = 'grow';
            var1[8] = var10;
            var9 = function onPress() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure2_slot1;
                var2['shouldRedirectToMobileWeb'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = 'onPress';
            var1[5] = var9;
            var6 = 'loading';
            var1[5] = var8;
            var6 = 'disabled';
            var1[5] = var7;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 109:
            var4 = _closure1_slot27;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 23;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var9.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {'text': null, 'size': 'md', 'grow': true};
            var6 = 16;
            var7 = var10[var6];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var3)(var6);
            var6 = var6.t;
            var6 = var6.WAI6xu;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var2;
    var2 = function getItemsByPremiumTypePredicate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = var2.additionalPlans;
                var5 = var2.isDeprecated;
                var4 = var2.numPremiumGuild;
                var3 = var2.premiumTier;
                var1 = var1.length;
                var2 = 0;
                var1 = var2 === var1;
                if(!var1) { _fun0008_ip = 113; continue _fun0008 }
case 87:
                var1 = !var5;
case 113:
                if(!var1) { _fun0008_ip = 114; continue _fun0008 }
case 115:
                var1 = var2 === var4;
case 114:
                if(!var1) { _fun0008_ip = 22; continue _fun0008 }
case 116:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 22:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot36 = var2;
    var5 = 64;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/PremiumPlanSelectionActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var11 = var1.analyticsLocation;
            var28 = var1.analyticsLocations;
            var22 = var1.premiumType;
            var _closure2_slot1 = var22;
            var16 = var1.predicate;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0009_ip = 111; continue _fun0009 }
case 117:
            var3 = _closure1_slot36;
            var6 = null;
            var2 = var22;
            if(!(var6 == var2)) { _fun0009_ip = 12; continue _fun0009 }
case 118:
            var5 = _closure1_slot15;
            var2 = var5.TIER_2;
case 12:
            var16 = var3.bind(var4)(var2);
case 111:
            var8 = var1.initialSelectedCriteria;
            if(!(var8 === var4)) { _fun0009_ip = 119; continue _fun0009 }
case 120:
            var8 = function x(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot16;
                var1 = var1.YEAR;
                var1 = var2 === var1;
                return var1;
            };
case 119:
            var12 = var1.sortFn;
            if(!(var12 === var4)) { _fun0009_ip = 121; continue _fun0009 }
case 122:
            var12 = function I(arg1, arg2) {
                var1 = arg2;
                var2 = var1.interval;
                var1 = arg1;
                var1 = var1.interval;
                var1 = var2 - var1;
                return var1;
            };
case 121:
            var17 = var1.onPaymentSuccess;
            var _closure2_slot2 = var17;
            var25 = var1.onPaymentDismiss;
            var _closure2_slot3 = var25;
            var1 = var1.showFormTitle;
            if(!(var1 === var4)) { _fun0009_ip = 123; continue _fun0009 }
case 124:
            var1 = true;
case 123:
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
            var13 = function onClose() {
                var3 = _closure1_slot13;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 40;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var _closure2_slot29 = var13;
            var1 = _closure1_slot30;
            var9 = var1.bind(var4)();
            _closure2_slot5 = var9;
            var2 = _closure1_slot12;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPaymentSuccess;
                return var1;
            };
            var27 = var2.bind(var4)(var1);
            _closure2_slot6 = var27;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.mobileWebRedirectCheckoutStatus;
                return var1;
            };
            var18 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var1 = var6[var2];
            var14 = var3.bind(var4)(var1);
            var7 = var14.useStateFromStores;
            var1 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var7.bind(var14)(var5, var1);
            _closure2_slot7 = var24;
            var1 = 24;
            var1 = var6[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useHandlePremiumPurchase;
            var26 = var1.bind(var5)();
            _closure2_slot8 = var26;
            var1 = 25;
            var1 = var6[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useIsPaymentsBlocked;
            var5 = var1.bind(var5)();
            var7 = _closure1_slot1;
            var1 = 26;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot9 = var1;
            var1 = 27;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.usePremiumTrialOffer;
            var21 = var1.bind(var7)();
            _closure2_slot10 = var21;
            var1 = 28;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.usePremiumDiscountOffer;
            var15 = var1.bind(var7)();
            _closure2_slot11 = var15;
            var1 = 29;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.useIsEligibleForBogoPromotion;
            var1 = false;
            var3 = var3.bind(var6)(var1);
            _closure2_slot12 = var3;
            var14 = null;
            var1 = var14 != var21;
            if(!var1) { _fun0009_ip = 125; continue _fun0009 }
case 126:
            var1 = var14 != var22;
case 125:
            if(!var1) { _fun0009_ip = 127; continue _fun0009 }
case 128:
            var6 = var21.subscription_trial;
            var19 = var14 == var6;
            var7 = undefined;
            if(var19) { _fun0009_ip = 129; continue _fun0009 }
case 130:
            var7 = var6.sku_id;
case 129:
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var6 = 21;
            var6 = var23[var6];
            var19 = var19.bind(var4)(var6);
            var6 = var19.getSkuIdForPremiumType;
            var6 = var6.bind(var19)(var22);
            var1 = var7 === var6;
case 127:
            _closure2_slot13 = var1;
            if(!(var14 != var12)) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 30;
            var6 = var19[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getPremiumBundlesWithPredicate;
            var7 = var6.bind(var7)(var16);
            var6 = var7.sort;
            var6 = var6.bind(var7)(var12);
            _fun0009_ip = 133; continue _fun0009;
case 131:
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 30;
            var7 = var19[var7];
            var12 = var12.bind(var4)(var7);
            var7 = var12.getPremiumBundlesWithPredicate;
            var6 = var7.bind(var12)(var16);
case 133:
            _closure2_slot14 = var6;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 31;
            var7 = var16[var7];
            var12 = var12.bind(var4)(var7);
            var7 = var12.useDiscountedPremiumProductInfo;
            var7 = var7.bind(var12)(var15, var6);
            var12 = var7.discountedProduct;
            _closure2_slot15 = var12;
            var19 = var7.discountedPriceString;
            _closure2_slot16 = var19;
            var7 = var6;
            if(!var3) { _fun0009_ip = 134; continue _fun0009 }
case 135:
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot16;
                var1 = var1.MONTH;
                var1 = var2 === var1;
                return var1;
            };
case 134:
            var16 = _closure1_slot5;
            var6 = var16.useState;
            var3 = var7.find;
            var3 = var3.bind(var7)(var8);
            var7 = var6.bind(var16)(var3);
            var6 = _closure1_slot4;
            var3 = 2;
            var6 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var23 = var6[var3];
            _closure2_slot17 = var23;
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0010_ip = 113; continue _fun0010 }
case 136:
                    var4 = _closure1_slot9;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot17;
                    var2 = var2.productId;
                    var1 = var3.bind(var4)(var2);
case 113:
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var6, var2);
            _closure2_slot19 = var2;
            var2 = 32;
            var2 = var7[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useBottomSheetRef;
            var2 = var2.bind(var6)();
            var6 = var2.bottomSheetRef;
            var8 = _closure1_slot1;
            var2 = 33;
            var2 = var7[var2];
            var12 = var8.bind(var4)(var2);
            var2 = 34;
            var2 = var7[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.PREMIUM_PAYMENT_ACTION_SHEET;
            var2 = var12.bind(var4)(var28, var2);
            var28 = var2.analyticsLocations;
            _closure2_slot20 = var28;
            var2 = 35;
            var2 = var7[var2];
            var8 = var8.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var29 = var8.bind(var4)(var2);
            _closure2_slot21 = var29;
            var12 = var16.useMemo;
            var8 = new Array(1);
            var8[0] = var22;
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
            var31 = var12.bind(var16)(var2, var8);
            _closure2_slot22 = var31;
            var2 = 36;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.getBasePurchaseFlowAnalyticsFields;
            var2 = {};
            var2['analyticsLoadId'] = var29;
            var8 = {};
            var12 = _closure1_slot20;
            var12 = var12.BUTTON_CTA;
            var8['object'] = var12;
            var12 = _closure1_slot21;
            var12 = var12.BUY;
            var8['object_type'] = var12;
            var33 = var8;
            var32 = var11;
            var11 = copyDataProperties(var33, var32);
            var2['analyticsLocation'] = var8;
            var2['analyticsLocations'] = var28;
            var30 = var3.bind(var7)(var2);
            _closure2_slot23 = var30;
            var3 = var14 != var23;
            var2 = null;
            if(!var3) { _fun0009_ip = 137; continue _fun0009 }
case 138:
            var2 = var23.basePlanId;
case 137:
            _closure2_slot24 = var2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 37;
            var3 = var7[var3];
            var8 = var2.bind(var4)(var3);
            var3 = var8.isMobileWebRedirectCheckoutEnabled;
            var16 = var3.bind(var8)();
            _closure2_slot25 = var16;
            var8 = _closure1_slot1;
            var3 = 38;
            var3 = var7[var3];
            var8 = var8.bind(var4)(var3);
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 39;
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
                    var2[6] = var8;
                    var8 = _closure2_slot24;
                    var7 = 'subscription_plan_id';
                    var2[6] = var8;
                    var8 = _closure2_slot22;
                    var7 = 'sku_id';
                    var2[6] = var8;
                    var7 = _closure2_slot25;
                    var6 = undefined;
                    if(!var7) { _fun0011_ip = 139; continue _fun0011 }
case 140:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 37;
                    var5 = var8[var5];
                    var7 = var7.bind(var1)(var5);
                    var5 = var7.getCustomCheckoutFlowForAnalytics;
                    var6 = var5.bind(var7)();
case 139:
                    var5 = 'custom_checkout_flow';
                    var2[4] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var8.bind(var4)(var3);
            var11 = _closure1_slot5;
            var12 = var11.useCallback;
            var8 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 141; continue _fun0012 }
case 142:
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0012_ip = 143; continue _fun0012 }
case 144:
                        var6 = {};
                        var7 = false;
                        var6['shouldRedirectToMobileWeb'] = var7;
                        var2 = var6;
case 143:
                        var10 = var2.shouldRedirectToMobileWeb;
                        var _closure4_slot0 = var3;
                        SaveGenerator(address=47);
case 145:
                        return var3;
case 115:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0012_ip = 146; continue _fun0012 }
case 20:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 17;
                        var5 = var9[var5];
                        var11 = var6.bind(var3)(var5);
                        var9 = _closure2_slot17;
                        var6 = null;
                        var9 = var6 != var9;
                        var6 = 'cannot start payment without a selectedItem';
                        var6 = var11.bind(var3)(var9, var6);
                        var6 = _closure2_slot17;
                        var6 = var6.basePlanId;
                        var9 = _closure2_slot25;
                        if(!var9) { _fun0012_ip = 147; continue _fun0012 }
case 148:
                        var9 = var10;
case 147:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var17 = 36;
                        var10 = var10[var17];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.PaymentFlowStep;
                        if(var9) { _fun0012_ip = 149; continue _fun0012 }
case 150:
                        var14 = var10.EXTERNAL_PAYMENT;
                        _fun0012_ip = 151; continue _fun0012;
case 149:
                        var14 = var10.MOBILE_WEB_REDIRECT_CHECKOUT;
case 151:
                        var16 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = var15[var17];
                        var13 = var16.bind(var3)(var10);
                        var12 = var13.getPaymentFlowStepAnalyticsFields;
                        var11 = _closure2_slot23;
                        var10 = {};
                        var15 = var15[var17];
                        var15 = var16.bind(var3)(var15);
                        var15 = var15.PaymentFlowStep;
                        var15 = var15.PLAN_SELECT;
                        var10['from_step'] = var15;
                        var10['to_step'] = var14;
                        var14 = _closure2_slot17;
                        var14 = var14.productId;
                        var10['subscription_plan_gateway_plan_id'] = var14;
                        var14 = _closure2_slot22;
                        var10['sku_id'] = var14;
                        var13 = var12.bind(var13)(var11, var10);
                        _closure4_slot0 = var13;
                        if(var9) { _fun0012_ip = 152; continue _fun0012 }
case 153:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 41;
                        var10 = var12[var10];
                        var12 = var11.bind(var3)(var10);
                        var11 = var12.track;
                        var10 = _closure1_slot19;
                        var10 = var10.PAYMENT_FLOW_STEP;
                        var10 = var11.bind(var12)(var10, var13);
case 152:
                        var11 = _closure1_slot10;
                        var10 = {};
                        var12 = _closure2_slot17;
                        var12 = var12.productId;
                        var10['productId'] = var12;
                        var12 = _closure2_slot2;
                        var10['onPaymentSuccess'] = var12;
                        var12 = _closure2_slot3;
                        var10['onPaymentDismiss'] = var12;
                        var10 = var11.bind(var3)(var10);
                        if(var9) { _fun0012_ip = 154; continue _fun0012 }
case 155: // try_start_0
                        var10 = _closure2_slot8;
                        var9 = {};
                        var11 = _closure2_slot17;
                        var11 = var11.productId;
                        var9['productId'] = var11;
                        var11 = _closure2_slot23;
                        var11 = var11.location;
                        var9['analyticsLocation'] = var11;
                        var11 = _closure2_slot21;
                        var9['analyticsLoadId'] = var11;
                        var11 = _closure2_slot20;
                        var9['analyticsLocations'] = var11;
                        var9 = var10.bind(var3)(var9);
                        SaveGenerator(address=417);
case 156:
                        return var9;
case 157:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(var10) { _fun0012_ip = 158; continue _fun0012 }
case 159: // try_end0
                        _fun0012_ip = 160; continue _fun0012;
case 158:
                        return var9;
case 161: // catch_target0
                        CatchBlockStart(arg_register=9);
                        var8 = var10;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 45;
                        var9 = var12[var9];
                        var9 = var11.bind(var3)(var9);
                        var9 = var10 instanceof var9;
                        if(var9) { _fun0012_ip = 42; continue _fun0012 }
case 162:
                        throw var8;
case 42:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var8 = 46;
                        var8 = var15[var8];
                        var9 = var14.bind(var3)(var8);
                        var8 = var9.fetchSubscriptions;
                        var8 = var8.bind(var9)();
                        var9 = _closure1_slot1;
                        var8 = 44;
                        var8 = var15[var8];
                        var10 = var9.bind(var3)(var8);
                        var9 = var10.show;
                        var8 = {};
                        var11 = 16;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var16 = var12.intl;
                        var13 = var16.string;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var12 = var12.t;
                        var12 = var12.U+H+kd;
                        var12 = var13.bind(var16)(var12);
                        var8['title'] = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.F9ktNa;
                        var11 = var12.bind(var13)(var11);
                        var8['body'] = var11;
                        var11 = true;
                        var8['hideActionSheet'] = var11;
                        var8 = var9.bind(var10)(var8);
                        _fun0012_ip = 160; continue _fun0012;
case 154:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 42;
                        var7 = var9[var7];
                        var9 = var8.bind(var3)(var7);
                        var8 = var9.goToStandalonePremiumCheckoutFromMobileApp;
                        var7 = {};
                        var7['planId'] = var6;
                        var6 = false;
                        var7['isGift'] = var6;
                        var5 = _closure2_slot21;
                        var7['loadId'] = var5;
                        var21 = 'premium_plan_selection_action_sheet';
                        var19 = function() {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 43;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.isMetaQuest;
                                var3 = var3.bind(var4)();
                                if(var3) { _fun0013_ip = 163; continue _fun0013 }
case 164:
                                var4 = _closure1_slot11;
                                var3 = 'in_mobile_web';
                                var3 = var4.bind(var1)(var3);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 41;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot19;
                                var3 = var2.PAYMENT_FLOW_STEP;
                                var2 = _closure4_slot0;
                                var2 = var4.bind(var5)(var3, var2);
                                _fun0013_ip = 165; continue _fun0013;
case 163:
                                var2 = _closure2_slot29;
                                var2 = var2.bind(var1)();
case 165:
                                return var1;
                            }
                        };
                        var18 = function() {
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 44;
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
                            var6 = var6.NrBVjw;
                            var6 = var7.bind(var10)(var6);
                            var2['title'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.gD+grx;
                            var5 = var6.bind(var7)(var5);
                            var2['body'] = var5;
                            var5 = true;
                            var2['hideActionSheet'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var22 = var9;
                        var20 = var7;
                        var4 = var22[var8](var21, var20, var19, var18, var17);
case 160:
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
            var8 = var8.bind(var4)(var3);
            var3 = new Array(9);
            var3[0] = var31;
            var3[1] = var30;
            var3[2] = var29;
            var3[3] = var28;
            var3[4] = var26;
            var3[5] = var16;
            var3[6] = var25;
            var3[7] = var17;
            var3[8] = var23;
            var25 = var12.bind(var11)(var8, var3);
            var3 = function getActivatedImageSource() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var2 = null;
                    var2 = var2 == var3;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0014_ip = 88; continue _fun0014 }
case 166:
                    var2 = _closure2_slot17;
                    var5 = var2.premiumTier;
case 88:
                    var3 = _closure1_slot15;
                    var3 = var3.TIER_0;
                    if(!(var3 !== var5)) { _fun0014_ip = 167; continue _fun0014 }
case 18:
                    var3 = _closure1_slot15;
                    var3 = var3.TIER_1;
                    if(!(var3 !== var5)) { _fun0014_ip = 168; continue _fun0014 }
case 118:
                    var3 = _closure1_slot15;
                    var3 = var3.TIER_2;
                    if(!(var3 !== var5)) { _fun0014_ip = 11; continue _fun0014 }
case 3:
                    return var4;
case 11:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 47;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot9;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0014_ip = 169; continue _fun0014 }
case 170:
                    var3 = 53;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0014_ip = 13; continue _fun0014;
case 169:
                    var5 = 52;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 13:
                    return var3;
case 168:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 47;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot9;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0014_ip = 171; continue _fun0014 }
case 172:
                    var3 = 51;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0014_ip = 27; continue _fun0014;
case 171:
                    var5 = 50;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 27:
                    return var3;
case 167:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 47;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isThemeDark;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0014_ip = 173; continue _fun0014 }
case 15:
                    var1 = 49;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    _fun0014_ip = 174; continue _fun0014;
case 173:
                    var2 = 48;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
case 174:
                    return var1;
                }
            };
            _closure2_slot26 = var3;
            var3 = function getActivatedText() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var2 = null;
                    var2 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0015_ip = 88; continue _fun0015 }
case 166:
                    var1 = _closure2_slot17;
                    var3 = var1.premiumTier;
case 88:
                    var2 = _closure1_slot15;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0015_ip = 175; continue _fun0015 }
case 18:
                    var2 = _closure1_slot15;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0015_ip = 176; continue _fun0015 }
case 118:
                    var2 = _closure1_slot15;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0015_ip = 11; continue _fun0015 }
case 3:
                    return var5;
case 11:
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
case 176:
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
case 175:
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
                    var1 = var1["6WWrVM"];
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            _closure2_slot27 = var3;
            var12 = var11.useMemo;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var16;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot25;
                    if(var3) { _fun0016_ip = 177; continue _fun0016 }
case 136:
                    var1 = _closure2_slot13;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0016_ip = 178; continue _fun0016 }
case 179:
                    var1 = 16;
                    var3 = var5[var1];
                    var7 = undefined;
                    var3 = var4.bind(var7)(var3);
                    var6 = var3.intl;
                    var3 = var6.string;
                    var1 = var5[var1];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.nIlrxd;
                    var1 = var3.bind(var6)(var1);
                    _fun0016_ip = 19; continue _fun0016;
case 178:
                    var3 = 54;
                    var3 = var5[var3];
                    var8 = undefined;
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 16;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    if(var3) { _fun0016_ip = 180; continue _fun0016 }
case 181:
                    var3 = var4.bboTul;
                    var3 = var5.bind(var6)(var3);
                    _fun0016_ip = 182; continue _fun0016;
case 180:
                    var4 = var4.rKD72m;
                    var3 = var5.bind(var6)(var4);
case 182:
                    var1 = var3;
case 19:
                    _fun0016_ip = 183; continue _fun0016;
case 177:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.rylrdY;
                    var1 = var3.bind(var4)(var2);
case 183:
                    return var1;
                }
            };
            var26 = var12.bind(var11)(var3, var8);
            _closure2_slot28 = var26;
            var8 = var11.useMemo;
            var3 = new Array(6);
            var3[0] = var27;
            var3[1] = var23;
            var3[2] = var1;
            var3[3] = var19;
            var3[4] = var26;
            var1 = var9.legalDisclaimerText;
            var3[5] = var1;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(var2) { _fun0017_ip = 184; continue _fun0017 }
case 142:
                    var2 = _closure2_slot17;
                    var2 = var1 == var2;
                    var5 = undefined;
                    var15 = undefined;
                    if(var2) { _fun0017_ip = 185; continue _fun0017 }
case 88:
                    var2 = _closure2_slot17;
                    var15 = var2.interval;
case 185:
                    if(!(var1 != var15)) { _fun0017_ip = 186; continue _fun0017 }
case 115:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0017_ip = 187; continue _fun0017 }
case 188:
                    var2 = _closure2_slot16;
                    if(!(var1 == var2)) { _fun0017_ip = 189; continue _fun0017 }
case 190:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 54;
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
                    if(var3) { _fun0017_ip = 176; continue _fun0017 }
case 191:
                    var10 = var2["7wpqfj"];
                    _fun0017_ip = 192; continue _fun0017;
case 176:
                    var10 = var2.COObWR;
case 192:
                    var4 = _closure1_slot27;
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
                    var12 = _closure1_slot22;
                    var12 = var12.PAID_TERMS;
                    var7['paidURL'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 21;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getIntervalStringAsNoun;
                    var11 = var11.bind(var12)(var15);
                    var7['interval'] = var11;
                    var11 = _closure2_slot28;
                    var7['ctaText'] = var11;
                    var7 = var8.bind(var9)(var10, var7);
                    var2['children'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 189:
                    var4 = _closure1_slot27;
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 55;
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
                    var8 = var7["3uC7vj"];
                    var7 = {};
                    var12 = _closure2_slot28;
                    var7['buttonText'] = var12;
                    var13 = _closure1_slot1;
                    var12 = 21;
                    var12 = var14[var12];
                    var16 = var13.bind(var5)(var12);
                    var12 = var16.formatInterval;
                    var12 = var12.bind(var16)(var15);
                    var7['interval'] = var12;
                    var12 = 56;
                    var16 = var14[var12];
                    var18 = var13.bind(var5)(var16);
                    var17 = var18.getArticleURL;
                    var11 = _closure1_slot23;
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
case 187:
                    var4 = _closure1_slot27;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 55;
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
                    var6 = 54;
                    var6 = var11[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.isAndroid;
                    var7 = var6.bind(var7)();
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var11.bind(var5)(var6);
                    var6 = var6.t;
                    if(var7) { _fun0017_ip = 193; continue _fun0017 }
case 194:
                    var7 = var6.ZWXtAj;
                    _fun0017_ip = 195; continue _fun0017;
case 193:
                    var7 = var6.tINI9V;
case 195:
                    var6 = {};
                    var11 = _closure1_slot22;
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
                    var11 = 56;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getArticleURL;
                    var10 = _closure1_slot23;
                    var10 = var10.PREMIUM_DETAILS_CANCEL_SUB;
                    var10 = var11.bind(var12)(var10);
                    var6['cancelURL'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 186:
                    return var1;
case 184:
                    return var1;
                }
            };
            var17 = var8.bind(var11)(var1, var3);
            var3 = _closure1_slot27;
            var1 = 57;
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
            var8 = _closure1_slot28;
            if(var5) { _fun0009_ip = 196; continue _fun0009 }
case 197:
            var6 = _closure1_slot29;
            var5 = {};
            var12 = _closure1_slot27;
            var11 = _closure1_slot31;
            var7 = {};
            var7['premiumType'] = var22;
            var7['isPaymentSuccess'] = var27;
            var28 = var14 == var23;
            var22 = undefined;
            if(var28) { _fun0009_ip = 198; continue _fun0009 }
case 199:
            var22 = var23.premiumTier;
case 198:
            var7['selectedPremiumType'] = var22;
            var7['trialOffer'] = var21;
            var19 = var14 != var19;
            var14 = null;
            if(!var19) { _fun0009_ip = 200; continue _fun0009 }
case 84:
            var14 = var15;
case 200:
            var7['discountOffer'] = var14;
            var11 = var12.bind(var4)(var11, var7);
            var7 = new Array(3);
            var7[0] = var11;
            var14 = _closure1_slot28;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var9.body;
            var11['style'] = var15;
            var15 = 'in_mobile_web';
            if(!(var15 !== var18)) { _fun0009_ip = 201; continue _fun0009 }
case 202:
            var19 = _closure1_slot28;
            var18 = _closure1_slot29;
            var15 = {};
            var20 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0018_ip = 203; continue _fun0018 }
case 136:
                    var25 = {};
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 54;
                    var1 = var3[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    var25['convertToMajorUnits'] = var1;
                    var12 = _closure2_slot4;
                    if(!var12) { _fun0018_ip = 204; continue _fun0018 }
case 205:
                    var1 = _closure2_slot13;
                    var12 = !var1;
case 204:
                    var3 = _closure1_slot28;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var5 = var5.contentSelectPlan;
                    var1['style'] = var5;
                    var5 = _closure2_slot13;
                    if(var5) { _fun0018_ip = 206; continue _fun0018 }
case 163:
                    var5 = _closure2_slot16;
                    var8 = null;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0018_ip = 34; continue _fun0018 }
case 148:
                    var5 = _closure2_slot15;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0018_ip = 34; continue _fun0018 }
case 207:
                    var5 = _closure2_slot1;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0018_ip = 34; continue _fun0018 }
case 150:
                    var10 = _closure1_slot28;
                    var8 = _closure1_slot6;
                    var5 = {};
                    var14 = _closure1_slot27;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = 15;
                    var11 = var19[var11];
                    var11 = var16.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-md/normal', 'color': 'text-strong'};
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
                    var14 = _closure1_slot27;
                    var13 = {};
                    var15 = _closure2_slot5;
                    var16 = var15.divider;
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.offerDividerMargin;
                    var15[1] = var16;
                    var13['style'] = var15;
                    var13 = var14.bind(var4)(var8, var13);
                    var11[1] = var13;
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
case 34:
                    _fun0018_ip = 208; continue _fun0018;
case 206:
                    var10 = _closure1_slot27;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 15;
                    var5 = var16[var5];
                    var5 = var15.bind(var4)(var5);
                    var8 = var5.Text;
                    var5 = {'variant': 'text-md/normal', 'color': 'text-strong'};
                    var11 = _closure2_slot5;
                    var11 = var11.trialDisclaimer;
                    var5['style'] = var11;
                    var11 = 16;
                    var13 = var16[var11];
                    var13 = var15.bind(var4)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var11 = var16[var11];
                    var11 = var15.bind(var4)(var11);
                    var11 = var11.t;
                    var11 = var11.u95Dt4;
                    var11 = var13.bind(var14)(var11);
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
case 208:
                    var5 = new Array(2);
                    var5[0] = var7;
                    var10 = _closure1_slot28;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 61;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = undefined;
                    if(!var12) { _fun0018_ip = 209; continue _fun0018 }
case 130:
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
case 209:
                    var7['title'] = var11;
                    var11 = _closure1_slot24;
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
                    if(!var12) { _fun0018_ip = 210; continue _fun0018 }
case 211:
                    var13 = _closure2_slot5;
                    var12 = var13.formSectionBodyWithNoTitle;
case 210:
                    var11[1] = var12;
                    var7['sectionBodyStyle'] = var11;
                    var15 = true;
                    var7['inset'] = var15;
                    var11 = _closure2_slot19;
                    var17 = null;
                    var12 = var17 != var11;
                    if(!var12) { _fun0018_ip = 212; continue _fun0018 }
case 213:
                    var11 = _closure2_slot19;
                    var13 = var11.countryCode;
                    var11 = 'HR';
                    var12 = var11 === var13;
case 212:
                    if(!var12) { _fun0018_ip = 214; continue _fun0018 }
case 215:
                    var11 = _closure2_slot19;
                    var13 = var11.currencyCode;
                    var11 = var13.toLowerCase;
                    var13 = var11.bind(var13)();
                    var11 = _closure1_slot26;
                    var11 = var11.EUR;
                    var12 = var13 === var11;
case 214:
                    if(!var12) { _fun0018_ip = 216; continue _fun0018 }
case 217:
                    var14 = _closure1_slot27;
                    var13 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var11 = 62;
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
                    var18 = var16["9hnZoK"];
                    var16 = {};
                    var21 = 22;
                    var21 = var23[var21];
                    var24 = var22.bind(var4)(var21);
                    var23 = var24.formatPrice;
                    var21 = _closure2_slot19;
                    var22 = var21.price;
                    var21 = _closure1_slot25;
                    var22 = var22 * var21;
                    var21 = _closure1_slot26;
                    var21 = var21.HRK;
                    var21 = var23.bind(var24)(var22, var21, var25);
                    var16['kunaPriceWithCurrency'] = var21;
                    var16 = var19.bind(var20)(var18, var16);
                    var11['message'] = var16;
                    var12 = var14.bind(var4)(var13, var11);
case 216:
                    var11 = new Array(2);
                    var11[0] = var12;
                    var14 = _closure1_slot27;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 63;
                    var12 = var16[var12];
                    var12 = var13.bind(var4)(var12);
                    var13 = var12.RadioGroup;
                    var12 = {};
                    var16 = _closure2_slot17;
                    var18 = var17 == var16;
                    var16 = undefined;
                    if(var18) { _fun0018_ip = 218; continue _fun0018 }
case 219:
                    var18 = _closure2_slot17;
                    var16 = var18.productId;
case 218:
                    var12['value'] = var16;
                    var24 = _closure1_slot37;
                    var23 = _closure2_slot14;
                    var16 = _closure2_slot17;
                    var16 = var17 == var16;
                    var22 = undefined;
                    if(var16) { _fun0018_ip = 220; continue _fun0018 }
case 221:
                    var16 = _closure2_slot17;
                    var22 = var16.productId;
case 220:
                    var21 = _closure2_slot10;
                    var20 = _closure2_slot11;
                    var16 = _closure2_slot15;
                    var16 = var17 == var16;
                    var19 = undefined;
                    if(var16) { _fun0018_ip = 222; continue _fun0018 }
case 223:
                    var16 = _closure2_slot15;
                    var19 = var16.identifier;
case 222:
                    var28 = _closure2_slot16;
                    var27 = _closure2_slot12;
                    var26 = _closure2_slot1;
                    var34 = undefined;
                    var33 = var23;
                    var32 = var22;
                    var31 = var21;
                    var30 = var20;
                    var29 = var19;
                    var16 = var34[var24](var33, var32, var31, var30, var29, var28, var27, var26, var25);
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
case 203:
                    var4 = _closure1_slot28;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.contentActivated;
                    var2['style'] = var1;
                    var8 = _closure1_slot27;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 60;
                    var5 = var10[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var11 = _closure2_slot26;
                    var11 = var11.bind(var1)();
                    var5['source'] = var11;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot27;
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
                    var9 = _closure2_slot27;
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
            var23 = _closure1_slot27;
            var22 = _closure1_slot35;
            var21 = {};
            var21['isPaymentSuccess'] = var27;
            var21['onClose'] = var13;
            var21['ctaText'] = var26;
            var21['onStartPayment'] = var25;
            var21['shouldUseMobileWebRedirectCheckout'] = var16;
            var21['disabled'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var15['children'] = var20;
            var18 = var19.bind(var4)(var18, var15);
            _fun0009_ip = 224; continue _fun0009;
case 201:
            var20 = _closure1_slot27;
            var19 = _closure1_slot7;
            var15 = {};
            var21 = 'large';
            var15['size'] = var21;
            var21 = var9.loadingIndicator;
            var15['style'] = var21;
            var18 = var20.bind(var4)(var19, var15);
case 224:
            var15 = new Array(2);
            var15[0] = var18;
            var16 = !var16;
            if(!var16) { _fun0009_ip = 225; continue _fun0009 }
case 226:
            var16 = var17;
case 225:
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var7[1] = var11;
            var14 = _closure1_slot27;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 59;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = 'floating';
            var11['variant'] = var15;
            var11['onPress'] = var13;
            var11 = var14.bind(var4)(var12, var11);
            var7[2] = var11;
            var5['children'] = var7;
            var5 = var8.bind(var4)(var6, var5);
            _fun0009_ip = 227; continue _fun0009;
case 196:
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.blockedPaymentContainer;
            var6['style'] = var9;
            var12 = _closure1_slot27;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 58;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot27;
            var11 = _closure1_slot0;
            var10 = 59;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ActionSheetHeaderBar;
            var10 = {};
            var14 = 'floating';
            var10['variant'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 227:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getItemsByPremiumTypePredicate'] = var2;
    return var1;
})();