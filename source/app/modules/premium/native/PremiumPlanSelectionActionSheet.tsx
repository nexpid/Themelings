// app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function getPlanOptions(arg1, arg2, arg3, arg4) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = arg4;
        var _closure2_slot2 = var2;
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
        var _closure2_slot3 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var6 = _closure1_slot29;
            var5 = _closure1_slot35;
            var4 = {};
            var4['premiumItem'] = var2;
            var7 = _closure2_slot0;
            var4['selectedProductId'] = var7;
            var7 = _closure2_slot3;
            var4['optionNeedsProductNameLabel'] = var7;
            var7 = _closure2_slot1;
            var4['trialOffer'] = var7;
            var3 = _closure2_slot2;
            var4['userIsEligibleForBogoPromotion'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
            var1['name'] = var3;
            var2 = var2.productId;
            var1['value'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var15 = 0;
    var2 = var7[var15];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
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
    var10 = 4;
    var2 = var7[var10];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
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
    var2 = var2.SubscriptionPlans;
    var _closure1_slot19 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot20 = var5;
    var5 = var2.AnalyticsObjects;
    var _closure1_slot21 = var5;
    var5 = var2.AnalyticsObjectTypes;
    var _closure1_slot22 = var5;
    var5 = var2.LinkingTypes;
    var _closure1_slot23 = var5;
    var5 = var2.MarketingURLs;
    var _closure1_slot24 = var5;
    var2 = var2.HelpdeskArticles;
    var _closure1_slot25 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CustomCheckoutFlow;
    var _closure1_slot26 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.TitleStyleType;
    var _closure1_slot27 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CurrencyCodes;
    var _closure1_slot28 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot29 = var5;
    var5 = var2.jsxs;
    var _closure1_slot30 = var5;
    var2 = var2.Fragment;
    var _closure1_slot31 = var2;
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
    var12 = 14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var14;
    var2['headerText'] = var9;
    var9 = {};
    var9['marginBottom'] = var11;
    var2['contentSelectPlan'] = var9;
    var14 = 40;
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
    var9['paddingHorizontal'] = var15;
    var2['planOptionRowContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var2['planOptionContainer'] = var9;
    var9 = {'flexGrow': 1, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'};
    var2['planOptionPriceContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var2['planOptionDiscountContainer'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'paddingVertical': 2, 'paddingHorizontal': 8, 'marginRight': 8};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9['borderRadius'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var9['backgroundColor'] = var15;
    var2['planOptionDiscount'] = var9;
    var9 = {};
    var15 = 'uppercase';
    var9['textTransform'] = var15;
    var2['planOptionDiscountText'] = var9;
    var9 = {};
    var9['marginVertical'] = var14;
    var2['blockedPaymentContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var2['legalDisclaimerText'] = var9;
    var9 = {};
    var9['height'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var2['button'] = var9;
    var9 = {};
    var14 = 48;
    var9['height'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var2['buttonLarge'] = var9;
    var9 = {};
    var9['fontSize'] = var11;
    var2['buttonTextLarge'] = var9;
    var9 = {};
    var14 = 'lowercase';
    var9['textTransform'] = var14;
    var2['postTrialPrice'] = var9;
    var9 = {'height': 1, 'width': '100%'};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var12;
    var2['divider'] = var9;
    var9 = {};
    var9['marginBottom'] = var11;
    var2['trialInfoText'] = var9;
    var9 = {'height': 32, 'marginTop': 4};
    var2['linkButtonContainer'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var2['linkButtonIcon'] = var9;
    var9 = {};
    var10 = 30;
    var9['marginVertical'] = var10;
    var2['loadingIndicator'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot32 = var2;
    var2 = function Header(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.premiumType;
            var7 = var1.isPaymentSuccess;
            var2 = var1.selectedPremiumType;
            var5 = var1.trialOffer;
            var3 = _closure1_slot32;
            var4 = undefined;
            var11 = var3.bind(var4)();
            var3 = null;
            if(!(var3 == var6)) { _fun0001_ip = 163; continue _fun0001 }
 46:
            if(var7) { _fun0001_ip = 163; continue _fun0001 }
 49:
            var10 = _closure1_slot29;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 15;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/bold', 'color': 'header-primary'};
            var11 = var11.headerText;
            var8['style'] = var11;
            var11 = 16;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.vLz3Zm;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            return var8;
 163:
            if(!var7) { _fun0001_ip = 169; continue _fun0001 }
 166:
            var6 = var2;
 169:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var8 = 17;
            var8 = var7[var8];
            var9 = var2.bind(var4)(var8);
            var8 = var3 != var6;
            var3 = 'If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.';
            var3 = var9.bind(var4)(var8, var3);
            var3 = _closure1_slot29;
            var1 = 18;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['premiumType'] = var6;
            var1['trialOffer'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var2;
    var2 = function PlanOptionBadge(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var16 = arg3;
            var1 = _closure1_slot32;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var1 = arg2;
            if(var1) { _fun0002_ip = 226; continue _fun0002 }
 25:
            var1 = null;
            var2 = var1 != var16;
            if(!var2) { _fun0002_ip = 221; continue _fun0002 }
 37:
            var4 = _closure1_slot29;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var9.planOptionDiscount;
            var2['style'] = var7;
            var10 = _closure1_slot29;
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
            var12 = var11.IAybsL;
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
 221:
            _fun0002_ip = 370; continue _fun0002;
 226:
            var4 = _closure1_slot29;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var9.planOptionDiscount;
            var2['style'] = var7;
            var8 = _closure1_slot29;
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
            var9 = var9.iQTfW1;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 370:
            return var1;
        }
    };
    var _closure1_slot34 = var2;
    var2 = function PlanOption(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var14 = var4.premiumItem;
            var _closure2_slot0 = var14;
            var2 = var4.selectedProductId;
            var9 = var4.optionNeedsProductNameLabel;
            var1 = var4.trialOffer;
            var22 = var4.userIsEligibleForBogoPromotion;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0003_ip = 47; continue _fun0003 }
 45:
            var22 = false;
 47:
            var5 = _closure1_slot32;
            var16 = var5.bind(var4)();
            var5 = _closure1_slot8;
            var13 = var5.locale;
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
            var21 = var6.bind(var7)(var5, var3);
            var19 = null;
            var11 = var19 != var1;
            if(!var11) { _fun0003_ip = 187; continue _fun0003 }
 125:
            var1 = var1.subscription_trial;
            var5 = var19 == var1;
            var3 = undefined;
            if(var5) { _fun0003_ip = 146; continue _fun0003 }
 140:
            var3 = var1.sku_id;
 146:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 21;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getSkuIdForPremiumType;
            var1 = var14.premiumTier;
            var1 = var5.bind(var6)(var1);
            var11 = var3 === var1;
 187:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var3 = var5[var1];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getDisplayPremiumType;
            var3 = var14.basePlanId;
            var27 = var6.bind(var7)(var3);
            var3 = _closure1_slot1;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.getIntervalString;
            var3 = var14.interval;
            var1 = false;
            var26 = var5.bind(var6)(var3, var1);
            var3 = var14.basePlanId;
            var1 = _closure1_slot19;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            var12 = null;
            if(var11) { _fun0003_ip = 301; continue _fun0003 }
 278:
            if(!var22) { _fun0003_ip = 287; continue _fun0003 }
 281:
            var12 = null;
            if(!(var3 !== var1)) { _fun0003_ip = 301; continue _fun0003 }
 287:
            var3 = _closure1_slot14;
            var1 = var14.basePlanId;
            var12 = var3[var1];
 301:
            if(!var22) { _fun0003_ip = 324; continue _fun0003 }
 304:
            var3 = var14.basePlanId;
            var1 = _closure1_slot19;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            var22 = var3 === var1;
 324:
            var1 = var14.productId;
            var18 = var1 === var2;
            if(!(var19 != var21)) { _fun0003_ip = 395; continue _fun0003 }
 338:
            var2 = var21.currencyCode;
            var1 = var2.toLowerCase;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot28;
            var1 = var2 in var1;
            if(var1) { _fun0003_ip = 377; continue _fun0003 }
 365:
            var1 = _closure1_slot28;
            var17 = var1.USD;
            _fun0003_ip = 393; continue _fun0003;
 377:
            var2 = var21.currencyCode;
            var1 = var2.toLowerCase;
            var17 = var1.bind(var2)();
 393:
            _fun0003_ip = 405; continue _fun0003;
 395:
            var1 = _closure1_slot28;
            var17 = var1.USD;
 405:
            if(var11) { _fun0003_ip = 441; continue _fun0003 }
 408:
            var2 = var19 == var21;
            var1 = undefined;
            if(var2) { _fun0003_ip = 423; continue _fun0003 }
 417:
            var1 = var21.priceString;
 423:
            var2 = var19 != var1;
            var23 = '$...';
            if(!var2) { _fun0003_ip = 439; continue _fun0003 }
 436:
            var23 = var1;
 439:
            _fun0003_ip = 547; continue _fun0003;
 441:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var2 = var8[var1];
            var2 = var7.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.hXcaLS;
            var1 = {};
            var6 = 22;
            var6 = var8[var6];
            var10 = var7.bind(var4)(var6);
            var8 = var10.formatPrice;
            var7 = 0;
            var6 = {'minimumFractionDigits': 0, 'maximumFractionDigits': 0};
            var6 = var8.bind(var10)(var7, var17, var6);
            var1['price'] = var6;
            var23 = var3.bind(var5)(var2, var1);
 547:
            var3 = _closure1_slot30;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var16.planOptionContainer;
            var1['style'] = var5;
            var7 = _closure1_slot29;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var20 = 15;
            var5 = var5[var20];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var24 = 'text-md/medium';
            var5['variant'] = var24;
            var17 = 'interactive-normal';
            var8 = var17;
            if(!var18) { _fun0003_ip = 624; continue _fun0003 }
 618:
            var8 = 'interactive-active';
 624:
            var5['color'] = var8;
            var8 = var26;
            if(!var9) { _fun0003_ip = 662; continue _fun0003 }
 634:
            var9 = global;
            var9 = var9.HermesInternal;
            var25 = var9.concat;
            var10 = '';
            var9 = ' ';
            var8 = var25.bind(var10)(var27, var9, var26);
 662:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot30;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var16.planOptionPriceContainer;
            var6['style'] = var9;
            var9 = {};
            var10 = var16.planOptionDiscountContainer;
            var9['style'] = var10;
            var10 = _closure1_slot34;
            var12 = var10.bind(var4)(var13, var22, var12);
            var10 = new Array(2);
            var10[0] = var12;
            var22 = _closure1_slot29;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var20];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {};
            var12['variant'] = var24;
            var24 = var17;
            if(!var18) { _fun0003_ip = 775; continue _fun0003 }
 769:
            var24 = 'interactive-active';
 775:
            var12['color'] = var24;
            var12['children'] = var23;
            var12 = var22.bind(var4)(var13, var12);
            var10[1] = var12;
            var9['children'] = var10;
            var10 = var8.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(!var11) { _fun0003_ip = 1102; continue _fun0003 }
 819:
            var13 = _closure1_slot29;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var20 = 'text-xs/medium';
            var11['variant'] = var20;
            if(!var18) { _fun0003_ip = 864; continue _fun0003 }
 858:
            var17 = 'text-normal';
 864:
            var11['color'] = var17;
            var16 = var16.postTrialPrice;
            var11['style'] = var16;
            var16 = var14.interval;
            var14 = _closure1_slot18;
            var14 = var14.YEAR;
            if(!(var16 !== var14)) { _fun0003_ip = 996; continue _fun0003 }
 898:
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
            var16 = var14.v9QeOD;
            var14 = {};
            var20 = var19 == var21;
            var22 = undefined;
            if(var20) { _fun0003_ip = 967; continue _fun0003 }
 961:
            var22 = var21.priceString;
 967:
            var23 = var19 != var22;
            var20 = '$...';
            if(!var23) { _fun0003_ip = 983; continue _fun0003 }
 980:
            var20 = var22;
 983:
            var14['price'] = var20;
            var14 = var17.bind(var18)(var16, var14);
            _fun0003_ip = 1092; continue _fun0003;
 996:
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
            var16 = var15.ECT4Aw;
            var15 = {};
            var22 = var19 == var21;
            var20 = undefined;
            if(var22) { _fun0003_ip = 1065; continue _fun0003 }
 1059:
            var20 = var21.priceString;
 1065:
            var21 = var19 != var20;
            var19 = '$...';
            if(!var21) { _fun0003_ip = 1081; continue _fun0003 }
 1078:
            var19 = var20;
 1081:
            var15['price'] = var19;
            var14 = var17.bind(var18)(var16, var15);
 1092:
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1102:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var2;
    var2 = function PremiumPlanSelectionActionSheetCTA(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.isPaymentSuccess;
            var5 = var2.onClose;
            var16 = var2.ctaText;
            var3 = var2.onStartPayment;
            var _closure2_slot0 = var3;
            var7 = var2.shouldUseApplePaymentLink;
            var _closure2_slot1 = var7;
            var13 = var2.disabled;
            var14 = var2.loading;
            var2 = _closure1_slot32;
            var4 = undefined;
            var10 = var2.bind(var4)();
            if(var1) { _fun0004_ip = 574; continue _fun0004 }
 73:
            if(var7) { _fun0004_ip = 151; continue _fun0004 }
 76:
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
            _fun0004_ip = 238; continue _fun0004;
 151:
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
 238:
            var3 = _closure1_slot30;
            var2 = _closure1_slot31;
            var1 = {};
            var11 = _closure1_slot29;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 23;
            var6 = var17[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['text'] = var16;
            var20 = var6;
            var19 = var12;
            var12 = copyDataProperties(var20, var19);
            var16 = function onPress() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure2_slot1;
                var2['shouldOpenApplePaymentLink'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = 'onPress';
            var6[var12] = var16;
            var12 = 'loading';
            var6[var12] = var14;
            var12 = 'disabled';
            var6[var12] = var13;
            var8 = var11.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            if(!var7) { _fun0004_ip = 558; continue _fun0004 }
 340:
            var12 = _closure1_slot29;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 24;
            var8 = var18[var8];
            var8 = var14.bind(var4)(var8);
            var11 = var8.LinkButton;
            var8 = {};
            var15 = function onPress() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = false;
                var2['shouldOpenApplePaymentLink'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onPress'] = var15;
            var15 = 16;
            var16 = var18[var15];
            var16 = var14.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var18[var15];
            var15 = var14.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.DOarTE;
            var15 = var16.bind(var17)(var15);
            var8['text'] = var15;
            var15 = var10.linkButtonContainer;
            var8['containerStyle'] = var15;
            var15 = 'text-secondary';
            var8['textColor'] = var15;
            var8['disabled'] = var13;
            var13 = 'text-md/medium';
            var8['variant'] = var13;
            var15 = _closure1_slot29;
            var13 = 25;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ChevronLargeRightIcon;
            var13 = {};
            var16 = 'sm';
            var13['size'] = var16;
            var17 = _closure1_slot1;
            var16 = 14;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.TEXT_SECONDARY;
            var13['color'] = var16;
            var16 = var10.linkButtonIcon;
            var13['style'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var8['iconRight'] = var13;
            var7 = var12.bind(var4)(var11, var8);
 558:
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 574:
            var3 = _closure1_slot29;
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
            var9 = var9.WAI6xs;
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
    var _closure1_slot36 = var2;
    var2 = function getItemsByPremiumTypePredicate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = var2.additionalPlans;
                var5 = var2.isDeprecated;
                var4 = var2.numPremiumGuild;
                var3 = var2.premiumTier;
                var1 = var1.length;
                var2 = 0;
                var1 = var2 === var1;
                if(!var1) { _fun0005_ip = 44; continue _fun0005 }
 41:
                var1 = !var5;
 44:
                if(!var1) { _fun0005_ip = 51; continue _fun0005 }
 47:
                var1 = var2 === var4;
 51:
                if(!var1) { _fun0005_ip = 65; continue _fun0005 }
 54:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
 65:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot37 = var2;
    var5 = 65;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/PremiumPlanSelectionActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var26 = var1.analyticsLocation;
            var29 = var1.analyticsLocations;
            var15 = var1.premiumType;
            var _closure2_slot1 = var15;
            var12 = var1.predicate;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0006_ip = 79; continue _fun0006 }
 48:
            var3 = _closure1_slot37;
            var6 = null;
            var2 = var15;
            if(!(var6 == var2)) { _fun0006_ip = 74; continue _fun0006 }
 64:
            var5 = _closure1_slot17;
            var2 = var5.TIER_2;
 74:
            var12 = var3.bind(var4)(var2);
 79:
            var7 = var1.initialSelectedCriteria;
            if(!(var7 === var4)) { _fun0006_ip = 94; continue _fun0006 }
 89:
            var7 = function b(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot18;
                var1 = var1.YEAR;
                var1 = var2 === var1;
                return var1;
            };
 94:
            var11 = var1.sortFn;
            if(!(var11 === var4)) { _fun0006_ip = 111; continue _fun0006 }
 106:
            var11 = function w(arg1, arg2) {
                var1 = arg2;
                var2 = var1.interval;
                var1 = arg1;
                var1 = var1.interval;
                var1 = var2 - var1;
                return var1;
            };
 111:
            var23 = var1.onPaymentSuccess;
            var _closure2_slot2 = var23;
            var24 = var1.onPaymentDismiss;
            var _closure2_slot3 = var24;
            var1 = var1.showFormTitle;
            if(!(var1 === var4)) { _fun0006_ip = 143; continue _fun0006 }
 141:
            var1 = true;
 143:
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
                var2 = 41;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = _closure1_slot32;
            var9 = var1.bind(var4)();
            _closure2_slot5 = var9;
            var2 = _closure1_slot12;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPaymentSuccess;
                return var1;
            };
            var20 = var2.bind(var4)(var1);
            _closure2_slot6 = var20;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.applePaymentLinkStatus;
                return var1;
            };
            var16 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var1 = var6[var2];
            var14 = var3.bind(var4)(var1);
            var8 = var14.useStateFromStores;
            var1 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var8.bind(var14)(var5, var1);
            _closure2_slot7 = var27;
            var1 = 26;
            var1 = var6[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useHandlePremiumPurchase;
            var25 = var1.bind(var5)();
            _closure2_slot8 = var25;
            var14 = _closure1_slot1;
            var1 = 27;
            var1 = var6[var1];
            var18 = var14.bind(var4)(var1);
            var17 = var18.useExperiment;
            var5 = {};
            var1 = '97561b_1';
            var5['location'] = var1;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var17.bind(var18)(var5, var1);
            var5 = var1.paymentsBlocked;
            var1 = 28;
            var1 = var6[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot9 = var1;
            var1 = 29;
            var1 = var6[var1];
            var14 = var3.bind(var4)(var1);
            var1 = var14.usePremiumTrialOffer;
            var14 = var1.bind(var14)();
            _closure2_slot10 = var14;
            var1 = 30;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsEligibleForBogoPromotion;
            var1 = var1.bind(var3)(var8);
            _closure2_slot11 = var1;
            var19 = null;
            var17 = var19 != var14;
            if(!var17) { _fun0006_ip = 526; continue _fun0006 }
 522:
            var17 = var19 != var15;
 526:
            if(!var17) { _fun0006_ip = 585; continue _fun0006 }
 529:
            var3 = var14.subscription_trial;
            var18 = var19 == var3;
            var6 = undefined;
            if(var18) { _fun0006_ip = 550; continue _fun0006 }
 544:
            var6 = var3.sku_id;
 550:
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 21;
            var3 = var21[var3];
            var18 = var18.bind(var4)(var3);
            var3 = var18.getSkuIdForPremiumType;
            var3 = var3.bind(var18)(var15);
            var17 = var6 === var3;
 585:
            _closure2_slot12 = var17;
            if(!(var19 != var11)) { _fun0006_ip = 637; continue _fun0006 }
 593:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 31;
            var3 = var18[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getPremiumBundlesWithPredicate;
            var6 = var3.bind(var6)(var12);
            var3 = var6.sort;
            var6 = var3.bind(var6)(var11);
            _fun0006_ip = 668; continue _fun0006;
 637:
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 31;
            var3 = var18[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var11.getPremiumBundlesWithPredicate;
            var6 = var3.bind(var11)(var12);
 668:
            _closure2_slot13 = var6;
            if(!var1) { _fun0006_ip = 680; continue _fun0006 }
 675:
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot18;
                var1 = var1.MONTH;
                var1 = var2 === var1;
                return var1;
            };
 680:
            var31 = _closure1_slot5;
            var3 = var31.useState;
            var1 = var6.find;
            var1 = var1.bind(var6)(var7);
            var3 = var3.bind(var31)(var1);
            var1 = _closure1_slot4;
            var21 = 2;
            var3 = var1.bind(var4)(var3, var21);
            var1 = 0;
            var18 = var3[var1];
            _closure2_slot14 = var18;
            var7 = 1;
            var3 = var3[var7];
            _closure2_slot15 = var3;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var28 = var3.bind(var4)(var2);
            var12 = var28.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot14;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 44; continue _fun0007 }
 16:
                    var4 = _closure1_slot9;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot14;
                    var2 = var2.productId;
                    var1 = var3.bind(var4)(var2);
 44:
                    return var1;
                }
            };
            var2 = var12.bind(var28)(var6, var2);
            _closure2_slot16 = var2;
            var2 = 32;
            var2 = var11[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useBottomSheetRef;
            var2 = var2.bind(var6)();
            var6 = var2.bottomSheetRef;
            var12 = _closure1_slot1;
            var2 = 33;
            var2 = var11[var2];
            var28 = var12.bind(var4)(var2);
            var2 = 34;
            var2 = var11[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.PREMIUM_PAYMENT_ACTION_SHEET;
            var2 = var28.bind(var4)(var29, var2);
            var29 = var2.analyticsLocations;
            _closure2_slot17 = var29;
            var2 = 35;
            var2 = var11[var2];
            var12 = var12.bind(var4)(var2);
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
            var30 = var12.bind(var4)(var2);
            _closure2_slot18 = var30;
            var28 = var31.useMemo;
            var12 = new Array(1);
            var12[0] = var15;
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
            var32 = var28.bind(var31)(var2, var12);
            _closure2_slot19 = var32;
            var2 = 36;
            var2 = var11[var2];
            var11 = var3.bind(var4)(var2);
            var3 = var11.getBasePurchaseFlowAnalyticsFields;
            var2 = {};
            var2['analyticsLoadId'] = var30;
            var12 = {};
            var28 = _closure1_slot21;
            var28 = var28.BUTTON_CTA;
            var12['object'] = var28;
            var28 = _closure1_slot22;
            var28 = var28.BUY;
            var12['object_type'] = var28;
            var37 = var12;
            var36 = var26;
            var26 = copyDataProperties(var37, var36);
            var2['analyticsLocation'] = var12;
            var2['analyticsLocations'] = var29;
            var31 = var3.bind(var11)(var2);
            _closure2_slot20 = var31;
            var11 = var19 != var18;
            if(!var11) { _fun0006_ip = 1032; continue _fun0006 }
 1012:
            var12 = _closure1_slot15;
            var3 = var12.has;
            var2 = var18.basePlanId;
            var11 = var3.bind(var12)(var2);
 1032:
            _closure2_slot21 = var11;
            var3 = var19 != var18;
            var2 = null;
            if(!var3) { _fun0006_ip = 1051; continue _fun0006 }
 1045:
            var2 = var18.basePlanId;
 1051:
            _closure2_slot22 = var2;
            var12 = _closure1_slot0;
            var26 = _closure1_slot2;
            var3 = 37;
            var3 = var26[var3];
            var26 = var12.bind(var4)(var3);
            var12 = var26.useMobileApplePaymentLinksExperimentConfig;
            var3 = {};
            var28 = 'premium_plan_selection_action_sheet';
            var3['location'] = var28;
            var3 = var12.bind(var26)(var3);
            var12 = var3.enabled;
            _closure2_slot23 = var12;
            var3 = var3.discountEnabled;
            var28 = var11;
            if(!var11) { _fun0006_ip = 1122; continue _fun0006 }
 1119:
            var28 = var12;
 1122:
            _closure2_slot24 = var28;
            var34 = var11;
            if(!var11) { _fun0006_ip = 1135; continue _fun0006 }
 1132:
            var34 = var3;
 1135:
            _closure2_slot25 = var34;
            var33 = _closure1_slot5;
            var3 = var33.useRef;
            var3 = var3.bind(var33)(var8);
            _closure2_slot26 = var3;
            var3 = var33.useState;
            var3 = var3.bind(var33)(var8);
            var8 = _closure1_slot4;
            var3 = var8.bind(var4)(var3, var21);
            var26 = var3[var1];
            var3 = var3[var7];
            _closure2_slot27 = var3;
            var3 = var33.useState;
            var3 = var3.bind(var33)(var19);
            var3 = var8.bind(var4)(var3, var21);
            var1 = var3[var1];
            _closure2_slot28 = var1;
            var3 = var3[var7];
            _closure2_slot29 = var3;
            if(!var26) { _fun0006_ip = 1227; continue _fun0006 }
 1224:
            var26 = var11;
 1227:
            if(!var26) { _fun0006_ip = 1244; continue _fun0006 }
 1230:
            var3 = _closure1_slot19;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            var26 = var2 === var3;
 1244:
            var8 = _closure1_slot5;
            var33 = var8.useCallback;
            var3 = _closure1_slot3;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 164; continue _fun0008 }
 10:
                        var2 = undefined;
                        var6 = undefined;
                        var4 = _closure2_slot27;
                        var5 = true;
                        var4 = var4.bind(var2)(var5);
 28: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 38;
                        var4 = var8[var4];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.fetchApplePaymentLinkOffer;
                        var4 = {};
                        var9 = 'premium_plan_selection_action_sheet';
                        var4['location'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=78);
 76:
                        return var4;
 78:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0008_ip = 135; continue _fun0008 }
 84:
                        var6 = var4;
                        var7 = _closure2_slot26;
                        var7['current'] = var5;
                        var7 = null;
                        if(!(var7 != var4)) { _fun0008_ip = 121; continue _fun0008 }
 103:
                        var8 = _closure2_slot29;
                        var7 = var6;
                        var7 = var7.userDiscountOffer;
                        var7 = var8.bind(var2)(var7);
 121:
                        var8 = _closure2_slot27;
                        var7 = false;
                        var7 = var8.bind(var2)(var7);
 132: // try_end0
                        return var6;
 135:
                        return var4;
 138: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure2_slot26;
                        var4['current'] = var5;
                        var4 = _closure2_slot27;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 164:
                        return var1;
                    }
                };
                return var1;
            };
            var21 = var3.bind(var4)(var7);
            var7 = new Array(0);
            var33 = var33.bind(var8)(var21, var7);
            _closure2_slot30 = var33;
            var21 = var8.useEffect;
            var7 = new Array(4);
            var7[0] = var18;
            var7[1] = var34;
            var7[2] = var33;
            var7[3] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot26;
                    var2 = var2.current;
                    if(var2) { _fun0009_ip = 32; continue _fun0009 }
 15:
                    var2 = _closure2_slot25;
                    if(!var2) { _fun0009_ip = 32; continue _fun0009 }
 22:
                    var2 = _closure2_slot30;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var21.bind(var8)(var2, var7);
            var21 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 39;
            var2 = var7[var2];
            var21 = var21.bind(var4)(var2);
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                    var2 = {};
                    var9 = _closure2_slot20;
                    var10 = var2;
                    var7 = copyDataProperties(var10, var9);
                    var8 = _closure2_slot0;
                    var7 = 'application_id';
                    var2[var7] = var8;
                    var8 = _closure2_slot22;
                    var7 = 'subscription_plan_id';
                    var2[var7] = var8;
                    var8 = _closure2_slot19;
                    var7 = 'sku_id';
                    var2[var7] = var8;
                    var7 = _closure2_slot24;
                    var6 = undefined;
                    if(!var7) { _fun0010_ip = 105; continue _fun0010 }
 95:
                    var5 = _closure1_slot26;
                    var6 = var5.APPLE_PAYMENT_LINK;
 105:
                    var5 = 'custom_checkout_flow';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var21.bind(var4)(var2);
            var21 = var8.useCallback;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0011_ip = 721; continue _fun0011 }
 15:
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0011_ip = 33; continue _fun0011 }
 21:
                        var7 = {};
                        var8 = false;
                        var7['shouldOpenApplePaymentLink'] = var8;
                        var2 = var7;
 33:
                        var8 = var2.shouldOpenApplePaymentLink;
                        var _closure4_slot0 = var3;
                        SaveGenerator(address=47);
 45:
                        return var3;
 47:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0011_ip = 718; continue _fun0011 }
 56:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 17;
                        var7 = var10[var7];
                        var11 = var9.bind(var3)(var7);
                        var10 = _closure2_slot14;
                        var7 = null;
                        var10 = var7 != var10;
                        var7 = 'cannot start payment without a selectedItem';
                        var7 = var11.bind(var3)(var10, var7);
                        var7 = _closure2_slot14;
                        var10 = var7.basePlanId;
                        var7 = _closure2_slot23;
                        if(!var7) { _fun0011_ip = 124; continue _fun0011 }
 121:
                        var7 = var8;
 124:
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var17 = 36;
                        var8 = var8[var17];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.PaymentFlowStep;
                        if(var7) { _fun0011_ip = 161; continue _fun0011 }
 153:
                        var14 = var8.EXTERNAL_PAYMENT;
                        _fun0011_ip = 167; continue _fun0011;
 161:
                        var14 = var8.APPLE_PAYMENT_LINK_NITRO_STANDARD_CHECKOUT;
 167:
                        var16 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var8 = var15[var17];
                        var13 = var16.bind(var3)(var8);
                        var12 = var13.getPaymentFlowStepAnalyticsFields;
                        var11 = _closure2_slot20;
                        var8 = {};
                        var15 = var15[var17];
                        var15 = var16.bind(var3)(var15);
                        var15 = var15.PaymentFlowStep;
                        var15 = var15.PLAN_SELECT;
                        var8['from_step'] = var15;
                        var8['to_step'] = var14;
                        var14 = _closure2_slot14;
                        var14 = var14.productId;
                        var8['subscription_plan_gateway_plan_id'] = var14;
                        var14 = _closure2_slot19;
                        var8['sku_id'] = var14;
                        var13 = var12.bind(var13)(var11, var8);
                        _closure4_slot0 = var13;
                        if(var7) { _fun0011_ip = 305; continue _fun0011 }
 264:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var8 = 42;
                        var8 = var12[var8];
                        var12 = var11.bind(var3)(var8);
                        var11 = var12.track;
                        var8 = _closure1_slot20;
                        var8 = var8.PAYMENT_FLOW_STEP;
                        var8 = var11.bind(var12)(var8, var13);
 305:
                        var11 = _closure1_slot10;
                        var8 = {};
                        var12 = _closure2_slot14;
                        var12 = var12.productId;
                        var8['productId'] = var12;
                        var12 = _closure2_slot2;
                        var8['onPaymentSuccess'] = var12;
                        var12 = _closure2_slot3;
                        var8['onPaymentDismiss'] = var12;
                        var8 = var11.bind(var3)(var8);
                        if(var7) { _fun0011_ip = 634; continue _fun0011 }
 355: // try_start_0
                        var8 = _closure2_slot8;
                        var7 = {};
                        var11 = _closure2_slot14;
                        var11 = var11.productId;
                        var7['productId'] = var11;
                        var11 = _closure2_slot20;
                        var11 = var11.location;
                        var7['analyticsLocation'] = var11;
                        var11 = _closure2_slot18;
                        var7['analyticsLoadId'] = var11;
                        var11 = _closure2_slot17;
                        var7['analyticsLocations'] = var11;
                        var7 = var8.bind(var3)(var7);
                        SaveGenerator(address=417);
 415:
                        return var7;
 417:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(var8) { _fun0011_ip = 428; continue _fun0011 }
 423: // try_end0
                        _fun0011_ip = 715; continue _fun0011;
 428:
                        return var7;
 431: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var6 = var8;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 45;
                        var7 = var12[var7];
                        var7 = var11.bind(var3)(var7);
                        var7 = var8 instanceof var7;
                        if(var7) { _fun0011_ip = 465; continue _fun0011 }
 463:
                        throw var6;
 465:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 46;
                        var6 = var15[var6];
                        var7 = var14.bind(var3)(var6);
                        var6 = var7.fetchSubscriptions;
                        var6 = var6.bind(var7)();
                        var7 = _closure1_slot1;
                        var6 = 44;
                        var6 = var15[var6];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.show;
                        var6 = {};
                        var11 = 16;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var16 = var12.intl;
                        var13 = var16.string;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var12 = var12.t;
                        var12 = var12.U+H+kZ;
                        var12 = var13.bind(var16)(var12);
                        var6['title'] = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.F9ktNT;
                        var11 = var12.bind(var13)(var11);
                        var6['body'] = var11;
                        var11 = true;
                        var6['hideActionSheet'] = var11;
                        var6 = var7.bind(var8)(var6);
                        _fun0011_ip = 715; continue _fun0011;
 634:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 43;
                        var6 = var8[var6];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.goToStandalonePremiumCheckoutFromMobileApp;
                        var6 = {};
                        var6['planId'] = var10;
                        var10 = false;
                        var6['isGift'] = var10;
                        var9 = _closure2_slot18;
                        var6['loadId'] = var9;
                        var5 = _closure1_slot23;
                        var5 = var5.APPLE_PAYMENT_LINK;
                        var6['deepLinkType'] = var5;
                        var5 = function() {
                            var4 = _closure1_slot11;
                            var1 = undefined;
                            var3 = 'in_mobile_web';
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 42;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot20;
                            var3 = var2.PAYMENT_FLOW_STEP;
                            var2 = _closure4_slot0;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var4 = function() {
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
                            var6 = var6.vgvbiI;
                            var6 = var7.bind(var10)(var6);
                            var2['title'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.ycleJS;
                            var5 = var6.bind(var7)(var5);
                            var2['body'] = var5;
                            var5 = true;
                            var2['hideActionSheet'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var4 = var7.bind(var8)(var6, var5, var4);
 715:
                        return var3;
 718:
                        return var2;
 721:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(9);
            var2[0] = var32;
            var2[1] = var31;
            var2[2] = var30;
            var2[3] = var29;
            var2[4] = var25;
            var2[5] = var12;
            var2[6] = var24;
            var2[7] = var23;
            var2[8] = var18;
            var29 = var21.bind(var8)(var3, var2);
            var2 = function getActivatedImageSource() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot14;
                    var2 = null;
                    var2 = var2 == var3;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0012_ip = 30; continue _fun0012 }
 20:
                    var2 = _closure2_slot14;
                    var5 = var2.premiumTier;
 30:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_0;
                    if(!(var3 !== var5)) { _fun0012_ip = 228; continue _fun0012 }
 50:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_1;
                    if(!(var3 !== var5)) { _fun0012_ip = 154; continue _fun0012 }
 64:
                    var3 = _closure1_slot17;
                    var3 = var3.TIER_2;
                    if(!(var3 !== var5)) { _fun0012_ip = 80; continue _fun0012 }
 78:
                    return var4;
 80:
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
                    if(var3) { _fun0012_ip = 140; continue _fun0012 }
 126:
                    var3 = 53;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0012_ip = 152; continue _fun0012;
 140:
                    var5 = 52;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
 152:
                    return var3;
 154:
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
                    if(var3) { _fun0012_ip = 214; continue _fun0012 }
 200:
                    var3 = 51;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0012_ip = 226; continue _fun0012;
 214:
                    var5 = 50;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
 226:
                    return var3;
 228:
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
                    if(var1) { _fun0012_ip = 288; continue _fun0012 }
 274:
                    var1 = 49;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    _fun0012_ip = 300; continue _fun0012;
 288:
                    var2 = 48;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
 300:
                    return var1;
                }
            };
            _closure2_slot31 = var2;
            var2 = function getActivatedText() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot14;
                    var2 = null;
                    var2 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0013_ip = 30; continue _fun0013 }
 20:
                    var1 = _closure2_slot14;
                    var3 = var1.premiumTier;
 30:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0013_ip = 198; continue _fun0013 }
 50:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0013_ip = 139; continue _fun0013 }
 64:
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0013_ip = 80; continue _fun0013 }
 78:
                    return var5;
 80:
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
                    var2 = var2.I7xNzM;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 139:
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
                    var2 = var2.LAAgs7;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 198:
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
                    var1 = var1.6WWrVF;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            _closure2_slot32 = var2;
            var3 = var8.useMemo;
            var2 = new Array(5);
            var2[0] = var17;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var18;
            var2[4] = var1;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0014_ip = 464; continue _fun0014 }
 13:
                    var1 = _closure2_slot23;
                    if(!var1) { _fun0014_ip = 207; continue _fun0014 }
 23:
                    var1 = _closure2_slot21;
                    if(!var1) { _fun0014_ip = 207; continue _fun0014 }
 33:
                    var2 = _closure2_slot28;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0014_ip = 59; continue _fun0014 }
 43:
                    var2 = {'discount': null, 'discountId': null};
                    _fun0014_ip = 94; continue _fun0014;
 59:
                    var4 = {};
                    var5 = _closure2_slot28;
                    var5 = var5.discount;
                    var4['discount'] = var5;
                    var5 = _closure2_slot28;
                    var5 = var5.discount_id;
                    var4['discountId'] = var5;
                    var2 = var4;
 94:
                    var5 = var2.discount;
                    var4 = var2.discountId;
                    if(!(var1 != var5)) { _fun0014_ip = 153; continue _fun0014 }
 110:
                    var6 = var5.plan_ids;
                    var2 = var6.includes;
                    var1 = _closure2_slot14;
                    var1 = var1.basePlanId;
                    var1 = var2.bind(var6)(var1);
                    if(!var1) { _fun0014_ip = 153; continue _fun0014 }
 139:
                    var2 = _closure1_slot16;
                    if(!(var4 !== var2)) { _fun0014_ip = 389; continue _fun0014 }
 153:
                    var2 = _closure2_slot14;
                    var6 = var2.basePlanId;
                    var4 = _closure1_slot19;
                    var4 = var4.PREMIUM_MONTH_TIER_2;
                    if(!(var6 !== var4)) { _fun0014_ip = 330; continue _fun0014 }
 183:
                    var3 = _closure2_slot14;
                    var4 = var3.basePlanId;
                    var3 = _closure1_slot19;
                    var3 = var3.PREMIUM_YEAR_TIER_2;
                    if(!(var4 !== var3)) { _fun0014_ip = 271; continue _fun0014 }
 207:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 16;
                    var4 = var9[var3];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.nIlrxc;
                    var3 = var4.bind(var6)(var3);
                    return var3;
 271:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 16;
                    var4 = var9[var3];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.0nfg19;
                    var3 = var4.bind(var6)(var3);
                    return var3;
 330:
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
                    var2 = var2.LQVQIi;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 389:
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
                    var2 = var1.wvvuCQ;
                    var1 = {};
                    var5 = var5.amount;
                    var1['discountPercentage'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 464:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 54;
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
                    if(var1) { _fun0014_ip = 560; continue _fun0014 }
 545:
                    var1 = var2.bboTur;
                    var1 = var3.bind(var4)(var1);
                    _fun0014_ip = 573; continue _fun0014;
 560:
                    var2 = var2.rKD72t;
                    var1 = var3.bind(var4)(var2);
 573:
                    return var1;
                }
            };
            var30 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot29;
            var2 = _closure1_slot0;
            var1 = 55;
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
            var8 = _closure1_slot30;
            if(var5) { _fun0006_ip = 2385; continue _fun0006 }
 1529:
            var6 = _closure1_slot31;
            var5 = {};
            var12 = _closure1_slot29;
            var11 = _closure1_slot33;
            var7 = {};
            var7['premiumType'] = var15;
            var7['isPaymentSuccess'] = var20;
            var21 = var19 == var18;
            var15 = undefined;
            if(var21) { _fun0006_ip = 1570; continue _fun0006 }
 1564:
            var15 = var18.premiumTier;
 1570:
            var7['selectedPremiumType'] = var15;
            var7['trialOffer'] = var14;
            var11 = var12.bind(var4)(var11, var7);
            var7 = new Array(3);
            var7[0] = var11;
            var14 = _closure1_slot30;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var9.body;
            var11['style'] = var15;
            var15 = 'in_mobile_web';
            if(!(var15 !== var16)) { _fun0006_ip = 1722; continue _fun0006 }
 1623:
            var21 = _closure1_slot30;
            var16 = _closure1_slot31;
            var15 = {};
            var22 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0015_ip = 980; continue _fun0015 }
 16:
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
                    if(!var12) { _fun0015_ip = 68; continue _fun0015 }
 61:
                    var1 = _closure2_slot12;
                    var12 = !var1;
 68:
                    var3 = _closure1_slot30;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var5 = var5.contentSelectPlan;
                    var1['style'] = var5;
                    var5 = _closure2_slot12;
                    var17 = null;
                    var7 = null;
                    if(!var5) { _fun0015_ip = 374; continue _fun0015 }
 106:
                    var10 = _closure1_slot30;
                    var8 = _closure1_slot6;
                    var5 = {};
                    var14 = _closure1_slot29;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var11 = 15;
                    var11 = var22[var11];
                    var11 = var21.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-sm/normal', 'color': 'text-normal'};
                    var15 = _closure2_slot5;
                    var15 = var15.trialInfoText;
                    var11['style'] = var15;
                    var15 = 16;
                    var16 = var22[var15];
                    var16 = var21.bind(var4)(var16);
                    var19 = var16.intl;
                    var18 = var19.format;
                    var15 = var22[var15];
                    var15 = var21.bind(var4)(var15);
                    var15 = var15.t;
                    var16 = var15.uj94Cw;
                    var15 = {};
                    var20 = 21;
                    var20 = var22[var20];
                    var22 = var21.bind(var4)(var20);
                    var21 = var22.formatIntervalDuration;
                    var20 = {};
                    var23 = _closure2_slot10;
                    var24 = var23.subscription_trial;
                    var26 = var17 == var24;
                    var23 = undefined;
                    if(var26) { _fun0015_ip = 262; continue _fun0015 }
 256:
                    var23 = var24.interval;
 262:
                    var20['intervalType'] = var23;
                    var23 = _closure2_slot10;
                    var24 = var23.subscription_trial;
                    var26 = var17 == var24;
                    var23 = undefined;
                    if(var26) { _fun0015_ip = 292; continue _fun0015 }
 286:
                    var23 = var24.interval_count;
 292:
                    var20['intervalCount'] = var23;
                    var20 = var21.bind(var22)(var20);
                    var15['duration'] = var20;
                    var15 = var18.bind(var19)(var16, var15);
                    var11['children'] = var15;
                    var13 = var14.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var15 = _closure1_slot29;
                    var14 = _closure1_slot6;
                    var13 = {};
                    var16 = _closure2_slot5;
                    var16 = var16.divider;
                    var13['style'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var11[1] = var13;
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
 374:
                    var5 = new Array(2);
                    var5[0] = var7;
                    var10 = _closure1_slot30;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 60;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = undefined;
                    if(!var12) { _fun0015_ip = 468; continue _fun0015 }
 413:
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 16;
                    var14 = var18[var13];
                    var14 = var16.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var18[var13];
                    var13 = var16.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.u95Dt7;
                    var11 = var14.bind(var15)(var13);
 468:
                    var7['title'] = var11;
                    var11 = _closure1_slot27;
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
                    if(!var12) { _fun0015_ip = 536; continue _fun0015 }
 526:
                    var13 = _closure2_slot5;
                    var12 = var13.formSectionBodyWithNoTitle;
 536:
                    var11[1] = var12;
                    var7['sectionBodyStyle'] = var11;
                    var15 = true;
                    var7['inset'] = var15;
                    var11 = _closure2_slot16;
                    var12 = var17 != var11;
                    if(!var12) { _fun0015_ip = 581; continue _fun0015 }
 563:
                    var11 = _closure2_slot16;
                    var13 = var11.countryCode;
                    var11 = 'HR';
                    var12 = var11 === var13;
 581:
                    if(!var12) { _fun0015_ip = 618; continue _fun0015 }
 584:
                    var11 = _closure2_slot16;
                    var13 = var11.currencyCode;
                    var11 = var13.toLowerCase;
                    var13 = var11.bind(var13)();
                    var11 = _closure1_slot28;
                    var11 = var11.EUR;
                    var12 = var13 === var11;
 618:
                    if(!var12) { _fun0015_ip = 782; continue _fun0015 }
 624:
                    var14 = _closure1_slot29;
                    var13 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var11 = 61;
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
                    var21 = _closure2_slot16;
                    var22 = var21.price;
                    var21 = 7.5345;
                    var22 = var21 * var22;
                    var21 = _closure1_slot28;
                    var21 = var21.HRK;
                    var21 = var23.bind(var24)(var22, var21, var25);
                    var16['kunaPriceWithCurrency'] = var21;
                    var16 = var19.bind(var20)(var18, var16);
                    var11['message'] = var16;
                    var12 = var14.bind(var4)(var13, var11);
 782:
                    var11 = new Array(2);
                    var11[0] = var12;
                    var14 = _closure1_slot29;
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var12 = 62;
                    var12 = var16[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var16 = _closure2_slot14;
                    var18 = var17 == var16;
                    var16 = undefined;
                    if(var18) { _fun0015_ip = 839; continue _fun0015 }
 829:
                    var18 = _closure2_slot14;
                    var16 = var18.productId;
 839:
                    var12['value'] = var16;
                    var20 = _closure1_slot38;
                    var19 = _closure2_slot13;
                    var16 = _closure2_slot14;
                    var16 = var17 == var16;
                    var18 = undefined;
                    if(var16) { _fun0015_ip = 874; continue _fun0015 }
 864:
                    var16 = _closure2_slot14;
                    var18 = var16.productId;
 874:
                    var28 = _closure2_slot10;
                    var27 = _closure2_slot11;
                    var31 = undefined;
                    var30 = var19;
                    var29 = var18;
                    var16 = var31[var20](var30, var29, var28, var27, var26);
                    var12['options'] = var16;
                    var16 = function onChange(arg1) {
                        var2 = arg1;
                        var2 = var2.value;
                        var _closure4_slot0 = var2;
                        var3 = _closure2_slot15;
                        var4 = _closure2_slot13;
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
 980:
                    var4 = _closure1_slot30;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.contentActivated;
                    var2['style'] = var1;
                    var8 = _closure1_slot29;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 59;
                    var5 = var10[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var11 = _closure2_slot31;
                    var11 = var11.bind(var1)();
                    var5['source'] = var11;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot29;
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
                    var9 = _closure2_slot32;
                    var9 = var9.bind(var1)();
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var23 = var22.bind(var4)();
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot29;
            var24 = _closure1_slot36;
            var23 = {};
            var23['isPaymentSuccess'] = var20;
            var23['onClose'] = var13;
            var23['ctaText'] = var30;
            var23['onStartPayment'] = var29;
            var23['shouldUseApplePaymentLink'] = var28;
            if(var27) { _fun0006_ip = 1691; continue _fun0006 }
 1688:
            var27 = var26;
 1691:
            var23['disabled'] = var27;
            var23['loading'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var15['children'] = var22;
            var16 = var21.bind(var4)(var16, var15);
            _fun0006_ip = 1756; continue _fun0006;
 1722:
            var22 = _closure1_slot29;
            var21 = _closure1_slot7;
            var15 = {};
            var23 = 'large';
            var15['size'] = var23;
            var23 = var9.loadingIndicator;
            var15['style'] = var23;
            var16 = var22.bind(var4)(var21, var15);
 1756:
            var15 = new Array(2);
            var15[0] = var16;
            var16 = null;
            if(var20) { _fun0006_ip = 2278; continue _fun0006 }
 1772:
            var20 = var19 == var18;
            var28 = undefined;
            if(var20) { _fun0006_ip = 1787; continue _fun0006 }
 1781:
            var28 = var18.interval;
 1787:
            var18 = var19 == var28;
            var16 = null;
            if(var18) { _fun0006_ip = 2278; continue _fun0006 }
 1799:
            if(var17) { _fun0006_ip = 2031; continue _fun0006 }
 1805:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 54;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.isAndroid;
            var18 = var17.bind(var18)();
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var20 = 16;
            var17 = var17[var20];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            if(var18) { _fun0006_ip = 1872; continue _fun0006 }
 1862:
            var23 = var17.7wpqfn;
            _fun0006_ip = 1880; continue _fun0006;
 1872:
            var23 = var17.COObWV;
 1880:
            var19 = _closure1_slot29;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 15;
            var17 = var26[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {};
            var22 = var9.legalDisclaimerText;
            var17['style'] = var22;
            var22 = 'text-xxs/medium';
            var17['variant'] = var22;
            var20 = var26[var20];
            var20 = var21.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.format;
            var20 = {};
            var24 = _closure1_slot24;
            var25 = var24.TERMS;
            var20['termsURL'] = var25;
            var24 = var24.PAID_TERMS;
            var20['paidURL'] = var24;
            var25 = _closure1_slot1;
            var24 = 21;
            var24 = var26[var24];
            var25 = var25.bind(var4)(var24);
            var24 = var25.getIntervalStringAsNoun;
            var24 = var24.bind(var25)(var28);
            var20['interval'] = var24;
            var20 = var21.bind(var22)(var23, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
            _fun0006_ip = 2278; continue _fun0006;
 2031:
            var19 = _closure1_slot29;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 63;
            var17 = var24[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.TextWithIOSLinkWorkaround;
            var17 = {};
            var20 = var9.legalDisclaimerText;
            var17['style'] = var20;
            var20 = 'text-xxs/medium';
            var17['variant'] = var20;
            var25 = 16;
            var20 = var24[var25];
            var20 = var21.bind(var4)(var20);
            var23 = var20.intl;
            var22 = var23.format;
            var20 = 54;
            var20 = var24[var20];
            var21 = var21.bind(var4)(var20);
            var20 = var21.isAndroid;
            var21 = var20.bind(var21)();
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var25];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            if(var21) { _fun0006_ip = 2161; continue _fun0006 }
 2151:
            var21 = var20.ZWXtAg;
            _fun0006_ip = 2169; continue _fun0006;
 2161:
            var21 = var20.tINI9f;
 2169:
            var20 = {};
            var24 = _closure1_slot24;
            var24 = var24.PAID_TERMS;
            var20['paidURL'] = var24;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var24 = 21;
            var24 = var26[var24];
            var27 = var25.bind(var4)(var24);
            var24 = var27.getIntervalStringAsNoun;
            var24 = var24.bind(var27)(var28);
            var20['interval'] = var24;
            var24 = 64;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getArticleURL;
            var24 = _closure1_slot25;
            var24 = var24.PREMIUM_DETAILS_CANCEL_SUB;
            var24 = var25.bind(var26)(var24);
            var20['cancelURL'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 2278:
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var7[1] = var11;
            var14 = _closure1_slot29;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 57;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = 58;
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
            _fun0006_ip = 2521; continue _fun0006;
 2385:
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.blockedPaymentContainer;
            var6['style'] = var9;
            var12 = _closure1_slot29;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 56;
            var9 = var16[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot29;
            var15 = _closure1_slot0;
            var10 = 57;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.ActionSheetHeaderBar;
            var10 = {};
            var14 = 58;
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
 2521:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getItemsByPremiumTypePredicate'] = var2;
    return var1;
})();