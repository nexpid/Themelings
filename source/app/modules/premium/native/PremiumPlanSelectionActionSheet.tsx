// app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var7;
    var1 = function hasRelevantTrialOfferForOrder(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.trialOffer;
            var10 = var1.premiumType;
            var3 = var1.orderRequired;
            var6 = var1.order;
            var7 = null;
            var1 = var7 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7 != var10;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4.subscription_trial;
            var9 = var7 == var2;
            var8 = undefined;
            var5 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var2.sku_id;
case 6:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 17;
            var2 = var11[var2];
            var9 = var9.bind(var8)(var2);
            var2 = var9.getSkuIdForPremiumType;
            var2 = var2.bind(var9)(var10);
            var2 = var5 === var2;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = !var3;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4.trial_id;
            var9 = var7 == var6;
            var4 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var6.subscriptionFacet;
            var9 = var7 == var6;
            var4 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var6 = var6.subscriptionPreview;
            var7 = var7 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var4 = var6.subscriptionTrialId;
case 12:
            var3 = var5 === var4;
case 10:
            var2 = var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function Header(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.premiumType;
            var8 = var1.isPaymentSuccess;
            var3 = var1.selectedPremiumType;
            var2 = var1.trialOffer;
            var5 = var1.discountOffer;
            var6 = _closure1_slot37;
            var4 = undefined;
            var14 = var6.bind(var4)();
            var9 = _closure1_slot10;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.orderRequired;
                var1['orderRequired'] = var3;
                var2 = var2.orderRecord;
                var1['orderRecord'] = var2;
                return var1;
            };
            var6 = var9.bind(var4)(var6);
            var10 = var6.orderRequired;
            var9 = var6.orderRecord;
            var6 = null;
            if(!(var6 == var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var13 = _closure1_slot34;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 18;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-default', 'accessibilityRole': 'header'};
            var14 = var14.headerText;
            var11['style'] = var14;
            var14 = 19;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.vLz3Zs;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            return var11;
case 16:
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = var3;
case 19:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 20;
            var3 = var11[var3];
            var11 = var8.bind(var4)(var3);
            var8 = var6 != var7;
            var3 = 'If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.';
            var3 = var11.bind(var4)(var8, var3);
            var8 = _closure1_slot39;
            var3 = {};
            var3['trialOffer'] = var2;
            var3['premiumType'] = var7;
            var3['orderRequired'] = var10;
            var3['order'] = var9;
            var3 = var8.bind(var4)(var3);
            var6 = null;
            if(!var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var2;
case 21:
            var3 = _closure1_slot34;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 21;
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
    var _closure1_slot40 = var1;
    var1 = function PlanOptionBadgeComponent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.text;
            var10 = var1.backgroundColorType;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var10 = 'green';
case 23:
            var1 = _closure1_slot37;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot34;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = var9.planOptionDiscount;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 'white';
            var10 = var7 === var10;
            var7 = null;
            if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 25:
            var7 = var9.planOptionDiscountWhite;
case 17:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot34;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var9 = var9.planOptionDiscountText;
            var5['style'] = var9;
            var9 = 'text-xs/bold';
            var5['variant'] = var9;
            var9 = 'text-overlay-light';
            if(!var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var9 = 'text-overlay-dark';
case 26:
            var5['color'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function renderPlanOptionBadge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.customBadgeComponent;
            var16 = var2.discount;
            var15 = var2.userLocale;
            var4 = var2.showBogoPromotionBadge;
            var5 = var2.hideDefaultDiscountBadges;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var2 = null;
            if(var5) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var4 = var3 != var16;
            var3 = null;
            if(!var4) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var7 = _closure1_slot34;
            var6 = _closure1_slot41;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 19;
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
            var12 = 22;
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
case 34:
            _fun0004_ip = 36; continue _fun0004;
case 32:
            var7 = _closure1_slot34;
            var6 = _closure1_slot41;
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 19;
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
case 36:
            var2 = var3;
case 30:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function PlanOption(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var26 = var1.premiumItem;
            var _closure2_slot0 = var26;
            var7 = var1.selectedProductId;
            var10 = var1.optionNeedsProductNameLabel;
            var29 = var1.customBadgeComponent;
            var19 = var1.trialOffer;
            var23 = var1.discountOffer;
            var14 = var1.discountedPriceString;
            var28 = var1.userIsEligibleForBogoPromotion;
            var4 = undefined;
            if(!(var28 === var4)) { _fun0005_ip = 35; continue _fun0005 }
case 7:
            var28 = false;
case 35:
            var13 = var1.selectedPremiumType;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot37;
            var16 = var1.bind(var4)();
            var1 = _closure1_slot11;
            var36 = var1.locale;
            var3 = _closure1_slot7;
            var2 = var3.useState;
            var1 = 0;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var6 = 2;
            var2 = var2.bind(var4)(var3, var6);
            var3 = var2[var1];
            _closure2_slot1 = var3;
            var22 = 1;
            var2 = var2[var22];
            _closure2_slot2 = var2;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var11 = var12.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var11)(var5, var2);
            var5 = 24;
            var5 = var9[var5];
            var11 = var12.bind(var4)(var5);
            var8 = var11.useCheckoutPlanPriceString;
            var5 = var26.productId;
            var33 = var8.bind(var11)(var5, var2);
            var8 = _closure1_slot10;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.orderRequired;
                var1['orderRequired'] = var3;
                var2 = var2.orderRecord;
                var1['orderRecord'] = var2;
                return var1;
            };
            var5 = var8.bind(var4)(var5);
            var17 = var5.orderRequired;
            var11 = var5.orderRecord;
            var8 = _closure1_slot39;
            var5 = {};
            var5['trialOffer'] = var19;
            var19 = var26.premiumTier;
            var5['premiumType'] = var19;
            var5['orderRequired'] = var17;
            var5['order'] = var11;
            var11 = var8.bind(var4)(var5);
            var5 = 17;
            var8 = var9[var5];
            var17 = var12.bind(var4)(var8);
            var12 = var17.getTierDisplayNameByPlanId;
            var8 = var26.basePlanId;
            var37 = var12.bind(var17)(var8);
            var8 = _closure1_slot1;
            var5 = var9[var5];
            var12 = var8.bind(var4)(var5);
            var9 = var12.getIntervalString;
            var8 = var26.interval;
            var5 = false;
            var27 = var9.bind(var12)(var8, var5);
            var8 = var26.basePlanId;
            var5 = _closure1_slot20;
            var5 = var5.PREMIUM_YEAR_TIER_2;
            var8 = var8 === var5;
            var34 = var11;
            if(var34) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var5 = null;
            var34 = var5 != var23;
case 37:
            if(var34) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = var28;
            if(!var28) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var5 = var8;
case 41:
            var34 = var5;
case 39:
            var24 = null;
            var35 = null;
            if(var34) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var8 = _closure1_slot17;
            var5 = var26.basePlanId;
            var35 = var8[var5];
case 43:
            if(!var28) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var8 = var26.basePlanId;
            var5 = _closure1_slot20;
            var5 = var5.PREMIUM_MONTH_TIER_2;
            var28 = var8 === var5;
case 45:
            var5 = var26.productId;
            var20 = var5 === var7;
            if(!(var24 != var2)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var7 = var2.currencyCode;
            var5 = var7.toLowerCase;
            var7 = var5.bind(var7)();
            var5 = _closure1_slot32;
            var5 = var7 in var5;
            if(var5) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = _closure1_slot32;
            var21 = var5.USD;
            _fun0005_ip = 51; continue _fun0005;
case 49:
            var5 = var2.currencyCode;
            var2 = var5.toLowerCase;
            var21 = var2.bind(var5)();
case 51:
            _fun0005_ip = 52; continue _fun0005;
case 47:
            var2 = _closure1_slot32;
            var21 = var2.USD;
case 52:
            var5 = _closure1_slot21;
            var2 = var26.basePlanId;
            var2 = var5[var2];
            var5 = var24 != var14;
            var30 = null;
            if(!var5) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.formatRate;
            var7 = var2.interval;
            var5 = var2.intervalCount;
            var30 = var8.bind(var9)(var14, var7, var5);
case 53:
            if(var11) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var31 = var14;
            if(!(var24 == var31)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var7 = var24 != var33;
            var5 = '$...';
            if(!var7) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var5 = var33;
case 59:
            var31 = var5;
case 57:
            _fun0005_ip = 61; continue _fun0005;
case 55:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 19;
            var7 = var19[var5];
            var7 = var17.bind(var4)(var7);
            var9 = var7.intl;
            var8 = var9.formatToPlainString;
            var5 = var19[var5];
            var5 = var17.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.hXcaLT;
            var5 = {};
            var12 = 25;
            var12 = var19[var12];
            var19 = var17.bind(var4)(var12);
            var17 = var19.formatPrice;
            var12 = {'minimumFractionDigits': 0, 'maximumFractionDigits': 0};
            var12 = var17.bind(var19)(var1, var21, var12);
            var5['price'] = var12;
            var31 = var8.bind(var9)(var7, var5);
case 61:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.formatRate;
            var5 = var24 != var33;
            var32 = '$...';
            var7 = var32;
            if(!var5) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var7 = var33;
case 62:
            var5 = var2.interval;
            var2 = var2.intervalCount;
            var25 = var8.bind(var9)(var7, var5, var2);
            if(!(!(var3 > var1))) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var9 = var16.planOptionPriceContainer;
            _fun0005_ip = 66; continue _fun0005;
case 64:
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
case 66:
            var3 = _closure1_slot35;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var16.planOptionContainer;
            var1['style'] = var5;
            var7 = _closure1_slot34;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = 18;
            var5 = var5[var21];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            if(!(var24 == var23)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var8 = 'text-md/medium';
            if(!var11) { _fun0005_ip = 69; continue _fun0005 }
case 67:
            var8 = 'text-lg/medium';
case 69:
            var5['variant'] = var8;
            var19 = 'interactive-text-default';
            var8 = var19;
            if(!var20) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var8 = 'interactive-text-active';
case 70:
            var5['color'] = var8;
            var8 = var27;
            if(!var10) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var10 = global;
            var10 = var10.HermesInternal;
            var17 = var10.concat;
            var12 = '';
            var10 = ' ';
            var8 = var17.bind(var12)(var37, var10, var27);
case 72:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot35;
            var7 = _closure1_slot8;
            var6 = {};
            var6['style'] = var9;
            var12 = _closure1_slot35;
            var10 = _closure1_slot8;
            var9 = {};
            var17 = var16.planOptionDiscountContainer;
            var9['style'] = var17;
            var27 = _closure1_slot42;
            var17 = {};
            var17['userLocale'] = var36;
            var17['discount'] = var35;
            var17['hideDefaultDiscountBadges'] = var34;
            var17['customBadgeComponent'] = var29;
            var17['showBogoPromotionBadge'] = var28;
            var27 = var27.bind(var4)(var17);
            var17 = new Array(2);
            var17[0] = var27;
            var29 = _closure1_slot34;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var21];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {};
            var34 = var16.priceText;
            var27['style'] = var34;
            var34 = 'text-lg/medium';
            var27['variant'] = var34;
            var34 = var19;
            if(!var20) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var34 = 'interactive-text-active';
case 74:
            var27['color'] = var34;
            var27['children'] = var31;
            var27 = var29.bind(var4)(var28, var27);
            var17[1] = var27;
            var9['children'] = var17;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = null;
            if(!var11) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var17 = _closure1_slot34;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var21];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var27 = 'text-xs/medium';
            var11['variant'] = var27;
            var27 = var19;
            if(!var20) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var27 = 'text-default';
case 78:
            var11['color'] = var27;
            var27 = var26.interval;
            var26 = _closure1_slot19;
            var26 = var26.YEAR;
            if(!(var27 !== var26)) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 19;
            var28 = var31[var26];
            var28 = var27.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.formatToPlainString;
            var26 = var31[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var27 = var26.v9QeON;
            var26 = {};
            var34 = var24 != var33;
            var31 = var32;
            if(!var34) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var31 = var33;
case 82:
            var26['price'] = var31;
            var26 = var28.bind(var29)(var27, var26);
            _fun0005_ip = 84; continue _fun0005;
case 80:
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = 19;
            var29 = var34[var27];
            var29 = var28.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.formatToPlainString;
            var27 = var34[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.t;
            var28 = var27.ECT4A5;
            var27 = {};
            var34 = var24 != var33;
            if(!var34) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var32 = var33;
case 85:
            var27['price'] = var32;
            var26 = var29.bind(var31)(var28, var27);
case 84:
            var11['children'] = var26;
            var10 = var17.bind(var4)(var12, var11);
case 76:
            var9[1] = var10;
            var12 = _closure1_slot35;
            var11 = _closure1_slot8;
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
                    if(!(var3 !== var2)) { _fun0006_ip = 29; continue _fun0006 }
case 87:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onLayout'] = var15;
            var16 = var24 != var30;
            var15 = null;
            if(!var16) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var16 = var24 != var23;
            var15 = null;
            if(!var16) { _fun0005_ip = 88; continue _fun0005 }
case 90:
            var13 = var24 == var13;
            var15 = null;
            if(!var13) { _fun0005_ip = 88; continue _fun0005 }
case 91:
            var17 = _closure1_slot34;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var13 = var16.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {};
            var26 = 'text-sm/medium';
            var13['variant'] = var26;
            var26 = var19;
            if(!var20) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var26 = 'text-default';
case 92:
            var13['color'] = var26;
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 19;
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
            if(var32) { _fun0005_ip = 94; continue _fun0005 }
case 95:
            var31 = var30.userUsageLimit;
case 94:
            var32 = var24 != var31;
            var30 = var22;
            if(!var32) { _fun0005_ip = 96; continue _fun0005 }
case 97:
            var30 = var31;
case 96:
            var26['numMonths'] = var30;
            var26 = var28.bind(var29)(var27, var26);
            var13['children'] = var26;
            var15 = var17.bind(var4)(var16, var13);
case 88:
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var24 != var14;
            if(!var14) { _fun0005_ip = 98; continue _fun0005 }
case 99:
            var14 = var24 != var23;
case 98:
            if(!var14) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            var17 = _closure1_slot34;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var21];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {};
            var21 = 'text-sm/medium';
            var15['variant'] = var21;
            if(!var20) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            var19 = 'text-default';
case 102:
            var15['color'] = var19;
            var19 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 19;
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
            if(var26) { _fun0005_ip = 104; continue _fun0005 }
case 105:
            var23 = var25.userUsageLimit;
case 104:
            var24 = var24 != var23;
            if(!var24) { _fun0005_ip = 106; continue _fun0005 }
case 107:
            var22 = var23;
case 106:
            var18['numMonths'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 100:
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
    var _closure1_slot43 = var1;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var6 = _closure1_slot34;
                var5 = _closure1_slot43;
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
                if(!(var9 === var8)) { _fun0007_ip = 108; continue _fun0007 }
case 109:
                var7 = _closure2_slot4;
case 108:
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
    var _closure1_slot44 = var1;
    var1 = function PremiumPlanSelectionActionSheetCTA(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var2) { _fun0008_ip = 110; continue _fun0008 }
case 111:
            if(var1) { _fun0008_ip = 112; continue _fun0008 }
case 7:
            var9 = {'size': 'md', 'variant': 'active'};
            _fun0008_ip = 113; continue _fun0008;
case 112:
            var9 = {'size': 'lg', 'variant': 'primary'};
case 113:
            var4 = _closure1_slot34;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
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
case 110:
            var4 = _closure1_slot34;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 26;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var9.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {'text': null, 'size': 'md', 'grow': true};
            var6 = 19;
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
    var _closure1_slot45 = var1;
    var2 = function getItemsByPremiumTypePredicate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = var2.additionalPlans;
                var5 = var2.isDeprecated;
                var4 = var2.numPremiumGuild;
                var3 = var2.premiumTier;
                var1 = var1.length;
                var2 = 0;
                var1 = var2 === var1;
                if(!var1) { _fun0009_ip = 114; continue _fun0009 }
case 115:
                var1 = !var5;
case 114:
                if(!var1) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                var1 = var2 === var4;
case 116:
                if(!var1) { _fun0009_ip = 35; continue _fun0009 }
case 118:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 35:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot46 = var2;
    var1 = ['predicate', 'initialSelectedCriteria', 'sortFn'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var17.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var17.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var17.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot8 = var8;
    var5 = var5.ActivityIndicator;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useNativeCheckoutStore;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var17.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var17.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var15 = 8;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var8 = var5.setInitiatedPurchaseFromNewFlow;
    var _closure1_slot13 = var8;
    var8 = var5.setMobileWebRedirectCheckoutStatus;
    var _closure1_slot14 = var8;
    var8 = var5.usePremiumPlanPurchasedStore;
    var _closure1_slot15 = var8;
    var5 = var5.reset;
    var _closure1_slot16 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.DISCOUNTS;
    var _closure1_slot17 = var8;
    var8 = var5.PremiumTypes;
    var _closure1_slot18 = var8;
    var8 = var5.SubscriptionIntervalTypes;
    var _closure1_slot19 = var8;
    var8 = var5.SubscriptionPlans;
    var _closure1_slot20 = var8;
    var8 = var5.SubscriptionPlanInfo;
    var _closure1_slot21 = var8;
    var8 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot22 = var8;
    var5 = var5.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
    var _closure1_slot23 = var5;
    var12 = 10;
    var5 = var7[var12];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot24 = var8;
    var8 = var5.AnalyticsObjects;
    var _closure1_slot25 = var8;
    var8 = var5.AnalyticsObjectTypes;
    var _closure1_slot26 = var8;
    var8 = var5.MarketingURLs;
    var _closure1_slot27 = var8;
    var5 = var5.HelpdeskArticles;
    var _closure1_slot28 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TitleStyleType;
    var _closure1_slot29 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.EUR_TO_HRK_CONVERSION_RATE;
    var _closure1_slot30 = var8;
    var5 = var5.ItemPurchaseType;
    var _closure1_slot31 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.CurrencyCodes;
    var _closure1_slot32 = var8;
    var5 = var5.PaymentGateways;
    var _closure1_slot33 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot34 = var8;
    var8 = var5.jsxs;
    var _closure1_slot35 = var8;
    var5 = var5.Fragment;
    var _closure1_slot36 = var5;
    var5 = 15;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var16 = 16;
    var10['padding'] = var16;
    var5['body'] = var10;
    var13 = 30;
    var14 = 20;
    var10 = {'paddingTop': 30, 'paddingHorizontal': 20};
    var5['headerText'] = var10;
    var10 = {};
    var10['marginBottom'] = var16;
    var5['contentSelectPlan'] = var10;
    var18 = 40;
    var10 = {'alignItems': 'center', 'paddingTop': 40, 'paddingBottom': 56};
    var5['contentActivated'] = var10;
    var10 = {'width': 328, 'marginTop': 16, 'textAlign': 'center'};
    var5['contentActivatedText'] = var10;
    var10 = {'paddingTop': 0, 'paddingLeft': 0};
    var5['formTitle'] = var10;
    var10 = {};
    var19 = 'none';
    var10['backgroundColor'] = var19;
    var5['formSectionBody'] = var10;
    var10 = {};
    var19 = -24;
    var10['marginTop'] = var19;
    var5['formSectionBodyWithNoTitle'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var12;
    var5['planOptionRowContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var5['planOptionContainer'] = var10;
    var12 = 'flex-end';
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'};
    var5['planOptionPriceContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'flexShrink': 1};
    var5['planOptionDiscountContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'backgroundColor': null, 'paddingVertical': 2, 'paddingHorizontal': 8, 'marginRight': 8};
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var10['borderRadius'] = var19;
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var19 = var19.GREEN_360;
    var10['backgroundColor'] = var19;
    var5['planOptionDiscount'] = var10;
    var10 = {};
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.WHITE;
    var10['backgroundColor'] = var19;
    var5['planOptionDiscountWhite'] = var10;
    var10 = {};
    var19 = 'uppercase';
    var10['textTransform'] = var19;
    var5['planOptionDiscountText'] = var10;
    var10 = {};
    var10['marginVertical'] = var18;
    var5['blockedPaymentContainer'] = var10;
    var10 = {};
    var10['marginTop'] = var16;
    var5['legalDisclaimerText'] = var10;
    var10 = {'height': 1, 'width': '100%'};
    var16 = var7[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var10['backgroundColor'] = var16;
    var5['divider'] = var10;
    var10 = {};
    var10['marginBottom'] = var15;
    var5['offerDividerMargin'] = var10;
    var10 = {};
    var10['marginBottom'] = var15;
    var5['trialDisclaimer'] = var10;
    var10 = {};
    var10['marginBottom'] = var14;
    var5['discountDisclaimer'] = var10;
    var10 = {};
    var10['marginVertical'] = var13;
    var5['loadingIndicator'] = var10;
    var10 = {};
    var10['alignItems'] = var12;
    var5['discountSubTextContainer'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['priceText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot37 = var5;
    var5 = function PremiumPlanSelectionActionSheet(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var11 = var1.analyticsLocation;
            var14 = var1.analyticsLocations;
            var22 = var1.premiumType;
            var _closure2_slot1 = var22;
            var16 = var1.premiumItems;
            var _closure2_slot2 = var16;
            var2 = var1.userIsEligibleForBogoPromotion;
            var _closure2_slot3 = var2;
            var12 = var1.initialSelectedItem;
            var26 = var1.onPaymentSuccess;
            var _closure2_slot4 = var26;
            var27 = var1.onPaymentDismiss;
            var _closure2_slot5 = var27;
            var1 = var1.showFormTitle;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0010_ip = 119; continue _fun0010 }
case 120:
            var1 = true;
case 119:
            var _closure2_slot6 = var1;
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
            var13 = function onClose() {
                var3 = _closure1_slot16;
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
            var _closure2_slot32 = var13;
            var1 = function getActivatedImageSource() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot21;
                    var2 = null;
                    var2 = var2 == var3;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0011_ip = 121; continue _fun0011 }
case 122:
                    var2 = _closure2_slot21;
                    var5 = var2.premiumTier;
case 121:
                    var3 = _closure1_slot18;
                    var3 = var3.TIER_0;
                    if(!(var3 !== var5)) { _fun0011_ip = 123; continue _fun0011 }
case 31:
                    var3 = _closure1_slot18;
                    var3 = var3.TIER_1;
                    if(!(var3 !== var5)) { _fun0011_ip = 26; continue _fun0011 }
case 124:
                    var3 = _closure1_slot18;
                    var3 = var3.TIER_2;
                    if(!(var3 !== var5)) { _fun0011_ip = 17; continue _fun0011 }
case 109:
                    return var4;
case 17:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot11;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0011_ip = 125; continue _fun0011 }
case 126:
                    var3 = 55;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0011_ip = 127; continue _fun0011;
case 125:
                    var5 = 54;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 127:
                    return var3;
case 26:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.isThemeDark;
                    var3 = _closure2_slot11;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0011_ip = 128; continue _fun0011 }
case 20:
                    var3 = 53;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    _fun0011_ip = 129; continue _fun0011;
case 128:
                    var5 = 52;
                    var5 = var7[var5];
                    var3 = var6.bind(var4)(var5);
case 129:
                    return var3;
case 123:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 49;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isThemeDark;
                    var1 = _closure2_slot11;
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0011_ip = 130; continue _fun0011 }
case 28:
                    var1 = 51;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    _fun0011_ip = 131; continue _fun0011;
case 130:
                    var2 = 50;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
case 131:
                    return var1;
                }
            };
            var _closure2_slot33 = var1;
            var1 = function getActivatedText() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot21;
                    var2 = null;
                    var2 = var2 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                    var1 = _closure2_slot21;
                    var3 = var1.premiumTier;
case 121:
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0012_ip = 132; continue _fun0012 }
case 31:
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0012_ip = 133; continue _fun0012 }
case 124:
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0012_ip = 17; continue _fun0012 }
case 109:
                    return var5;
case 17:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
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
case 133:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
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
case 132:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 19;
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
            var _closure2_slot34 = var1;
            var1 = _closure1_slot37;
            var9 = var1.bind(var4)();
            _closure2_slot7 = var9;
            var2 = _closure1_slot15;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPaymentSuccess;
                return var1;
            };
            var28 = var2.bind(var4)(var1);
            _closure2_slot8 = var28;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.mobileWebRedirectCheckoutStatus;
                return var1;
            };
            var18 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 23;
            var1 = var6[var2];
            var8 = var3.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var7.bind(var8)(var5, var1);
            _closure2_slot9 = var24;
            var1 = 27;
            var1 = var6[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useHandlePremiumPurchase;
            var29 = var1.bind(var5)();
            _closure2_slot10 = var29;
            var1 = 28;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsPaymentsBlocked;
            var5 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var1 = 29;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot11 = var1;
            var3 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.orderRecord;
                return var1;
            };
            var17 = var3.bind(var4)(var1);
            _closure2_slot12 = var17;
            var3 = _closure1_slot10;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.patchOrderLineItems;
                var1['patchOrderLineItems'] = var3;
                var3 = var2.isPatchOrderLoading;
                var1['isPatchOrderLoading'] = var3;
                var2 = var2.orderRequired;
                var1['orderRequired'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = var1.patchOrderLineItems;
            _closure2_slot13 = var3;
            var25 = var1.isPatchOrderLoading;
            var8 = var1.orderRequired;
            _closure2_slot14 = var8;
            var3 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isCreateOrderLoading;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            if(var25) { _fun0010_ip = 134; continue _fun0010 }
case 135:
            var25 = var1;
case 134:
            _closure2_slot15 = var25;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 30;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.usePremiumTrialOffer;
            var21 = var1.bind(var6)();
            _closure2_slot16 = var21;
            var1 = 31;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.usePremiumDiscountOffer;
            var15 = var1.bind(var6)();
            _closure2_slot17 = var15;
            var6 = _closure1_slot39;
            var1 = {};
            var1['trialOffer'] = var21;
            var1['premiumType'] = var22;
            var1['orderRequired'] = var8;
            var1['order'] = var17;
            var1 = var6.bind(var4)(var1);
            _closure2_slot18 = var1;
            var6 = 32;
            var6 = var7[var6];
            var8 = var3.bind(var4)(var6);
            var6 = var8.useDiscountedPremiumProductInfo;
            var6 = var6.bind(var8)(var15, var16);
            var8 = var6.discountedProduct;
            _closure2_slot19 = var8;
            var19 = var6.discountedPriceString;
            _closure2_slot20 = var19;
            var8 = _closure1_slot7;
            var6 = var8.useState;
            var12 = var6.bind(var8)(var12);
            var8 = _closure1_slot6;
            var6 = 2;
            var8 = var8.bind(var4)(var12, var6);
            var6 = 0;
            var23 = var8[var6];
            _closure2_slot21 = var23;
            var6 = 1;
            var6 = var8[var6];
            _closure2_slot22 = var6;
            var2 = var7[var2];
            var12 = var3.bind(var4)(var2);
            var8 = var12.useStateFromStores;
            var2 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot21;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0013_ip = 114; continue _fun0013 }
case 136:
                    var4 = _closure1_slot12;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot21;
                    var2 = var2.productId;
                    var1 = var3.bind(var4)(var2);
case 114:
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var6, var2);
            _closure2_slot23 = var2;
            var2 = 33;
            var2 = var7[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useBottomSheetRef;
            var2 = var2.bind(var6)();
            var6 = var2.bottomSheetRef;
            var8 = _closure1_slot1;
            var2 = 34;
            var2 = var7[var2];
            var12 = var8.bind(var4)(var2);
            var2 = 35;
            var2 = var7[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.PREMIUM_PAYMENT_ACTION_SHEET;
            var2 = var12.bind(var4)(var14, var2);
            var30 = var2.analyticsLocations;
            _closure2_slot24 = var30;
            var2 = 36;
            var2 = var7[var2];
            var8 = var8.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var31 = var8.bind(var4)(var2);
            _closure2_slot25 = var31;
            var14 = _closure1_slot7;
            var12 = var14.useMemo;
            var8 = new Array(1);
            var8[0] = var22;
            var2 = function() {
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
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
            var33 = var12.bind(var14)(var2, var8);
            _closure2_slot26 = var33;
            var2 = 37;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.getBasePurchaseFlowAnalyticsFields;
            var2 = {};
            var2['analyticsLoadId'] = var31;
            var8 = {};
            var12 = _closure1_slot25;
            var12 = var12.BUTTON_CTA;
            var8['object'] = var12;
            var12 = _closure1_slot26;
            var12 = var12.BUY;
            var8['object_type'] = var12;
            var35 = var8;
            var34 = var11;
            var11 = copyDataProperties(var35, var34);
            var2['analyticsLocation'] = var8;
            var2['analyticsLocations'] = var30;
            var32 = var3.bind(var7)(var2);
            _closure2_slot27 = var32;
            var14 = null;
            var3 = var14 != var23;
            var2 = null;
            if(!var3) { _fun0010_ip = 137; continue _fun0010 }
case 138:
            var2 = var23.basePlanId;
case 137:
            _closure2_slot28 = var2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 38;
            var3 = var7[var3];
            var8 = var2.bind(var4)(var3);
            var3 = var8.isMobileWebRedirectCheckoutEnabled;
            var16 = var3.bind(var8)();
            _closure2_slot29 = var16;
            var8 = _closure1_slot1;
            var3 = 39;
            var3 = var7[var3];
            var8 = var8.bind(var4)(var3);
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                    var2 = {};
                    var9 = _closure2_slot27;
                    var10 = var2;
                    var7 = copyDataProperties(var10, var9);
                    var8 = _closure2_slot0;
                    var7 = 'application_id';
                    var2[6] = var8;
                    var8 = _closure2_slot28;
                    var7 = 'subscription_plan_id';
                    var2[6] = var8;
                    var8 = _closure2_slot26;
                    var7 = 'sku_id';
                    var2[6] = var8;
                    var7 = _closure2_slot29;
                    var6 = undefined;
                    if(!var7) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 38;
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
            var12 = _closure1_slot7;
            var11 = var12.useCallback;
            var8 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0015_ip = 141; continue _fun0015 }
case 142:
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0015_ip = 143; continue _fun0015 }
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
case 117:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0015_ip = 146; continue _fun0015 }
case 33:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 20;
                        var5 = var9[var5];
                        var11 = var6.bind(var3)(var5);
                        var6 = _closure2_slot21;
                        var12 = null;
                        var9 = var12 != var6;
                        var6 = 'cannot start payment without a selectedItem';
                        var6 = var11.bind(var3)(var9, var6);
                        var6 = _closure2_slot21;
                        var6 = var6.basePlanId;
                        var9 = _closure2_slot29;
                        if(!var9) { _fun0015_ip = 147; continue _fun0015 }
case 148:
                        var9 = var10;
case 147:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var18 = 37;
                        var10 = var10[var18];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.PaymentFlowStep;
                        if(var9) { _fun0015_ip = 15; continue _fun0015 }
case 149:
                        var15 = var10.EXTERNAL_PAYMENT;
                        _fun0015_ip = 12; continue _fun0015;
case 15:
                        var15 = var10.MOBILE_WEB_REDIRECT_CHECKOUT;
case 12:
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var10 = var16[var18];
                        var14 = var17.bind(var3)(var10);
                        var13 = var14.getPaymentFlowStepAnalyticsFields;
                        var11 = _closure2_slot27;
                        var10 = {};
                        var16 = var16[var18];
                        var16 = var17.bind(var3)(var16);
                        var16 = var16.PaymentFlowStep;
                        var16 = var16.PLAN_SELECT;
                        var10['from_step'] = var16;
                        var10['to_step'] = var15;
                        var15 = _closure2_slot21;
                        var15 = var15.productId;
                        var10['subscription_plan_gateway_plan_id'] = var15;
                        var15 = _closure2_slot26;
                        var10['sku_id'] = var15;
                        var14 = var13.bind(var14)(var11, var10);
                        _closure4_slot0 = var14;
                        if(var9) { _fun0015_ip = 150; continue _fun0015 }
case 151:
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 42;
                        var10 = var13[var10];
                        var13 = var11.bind(var3)(var10);
                        var11 = var13.track;
                        var10 = _closure1_slot24;
                        var10 = var10.PAYMENT_FLOW_STEP;
                        var10 = var11.bind(var13)(var10, var14);
case 150:
                        var11 = _closure1_slot13;
                        var10 = {};
                        var13 = _closure2_slot21;
                        var13 = var13.productId;
                        var10['productId'] = var13;
                        var13 = _closure2_slot4;
                        var10['onPaymentSuccess'] = var13;
                        var13 = _closure2_slot5;
                        var10['onPaymentDismiss'] = var13;
                        var10 = var11.bind(var3)(var10);
                        if(var9) { _fun0015_ip = 152; continue _fun0015 }
case 153: // try_start_0
                        var10 = _closure2_slot10;
                        var9 = {};
                        var11 = _closure2_slot21;
                        var11 = var11.productId;
                        var9['productId'] = var11;
                        var11 = _closure2_slot27;
                        var11 = var11.location;
                        var9['analyticsLocation'] = var11;
                        var11 = _closure2_slot25;
                        var9['analyticsLoadId'] = var11;
                        var11 = _closure2_slot24;
                        var9['analyticsLocations'] = var11;
                        var11 = _closure2_slot12;
                        var12 = var12 == var11;
                        var11 = undefined;
                        if(var12) { _fun0015_ip = 154; continue _fun0015 }
case 155:
                        var12 = _closure2_slot12;
                        var11 = var12.id;
case 154:
                        var9['orderId'] = var11;
                        var9 = var10.bind(var3)(var9);
                        SaveGenerator(address=444);
case 45:
                        return var9;
case 156:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(var10) { _fun0015_ip = 157; continue _fun0015 }
case 158: // try_end0
                        _fun0015_ip = 159; continue _fun0015;
case 157:
                        return var9;
case 160: // catch_target0
                        CatchBlockStart(arg_register=9);
                        var8 = var10;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 46;
                        var9 = var12[var9];
                        var9 = var11.bind(var3)(var9);
                        var9 = var10 instanceof var9;
                        if(var9) { _fun0015_ip = 161; continue _fun0015 }
case 162:
                        throw var8;
case 161:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var8 = 47;
                        var8 = var15[var8];
                        var9 = var14.bind(var3)(var8);
                        var8 = var9.fetchSubscriptions;
                        var8 = var8.bind(var9)();
                        var9 = _closure1_slot1;
                        var8 = 45;
                        var8 = var15[var8];
                        var10 = var9.bind(var3)(var8);
                        var9 = var10.show;
                        var8 = {};
                        var11 = 19;
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
                        _fun0015_ip = 159; continue _fun0015;
case 152:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 43;
                        var7 = var9[var7];
                        var9 = var8.bind(var3)(var7);
                        var8 = var9.goToStandalonePremiumCheckoutFromMobileApp;
                        var7 = {};
                        var7['planId'] = var6;
                        var6 = false;
                        var7['isGift'] = var6;
                        var5 = _closure2_slot25;
                        var7['loadId'] = var5;
                        var22 = 'premium_plan_selection_action_sheet';
                        var20 = function() {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 44;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.isMetaQuest;
                                var3 = var3.bind(var4)();
                                if(var3) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                                var4 = _closure1_slot14;
                                var3 = 'in_mobile_web';
                                var3 = var4.bind(var1)(var3);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 42;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot24;
                                var3 = var2.PAYMENT_FLOW_STEP;
                                var2 = _closure4_slot0;
                                var2 = var4.bind(var5)(var3, var2);
                                _fun0016_ip = 165; continue _fun0016;
case 163:
                                var2 = _closure2_slot32;
                                var2 = var2.bind(var1)();
case 165:
                                return var1;
                            }
                        };
                        var19 = function() {
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 45;
                            var2 = var9[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 19;
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
                        var23 = var9;
                        var21 = var7;
                        var4 = var23[var8](var22, var21, var20, var19, var18);
case 159:
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
            var3 = new Array(10);
            var3[0] = var33;
            var3[1] = var32;
            var3[2] = var31;
            var3[3] = var30;
            var3[4] = var29;
            var3[5] = var16;
            var3[6] = var27;
            var3[7] = var26;
            var3[8] = var17;
            var3[9] = var23;
            var26 = var11.bind(var12)(var8, var3);
            var3 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            StartGenerator();
                            var9 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0017_ip = 166; continue _fun0017 }
case 142:
                            var _closure5_slot0 = var9;
                            var6 = _closure2_slot2;
                            var5 = var6.find;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.productId;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var5 = var5.bind(var6)(var3);
                            var6 = null;
                            if(!(var6 != var5)) { _fun0017_ip = 14; continue _fun0017 }
case 167:
                            var3 = _closure2_slot21;
                            if(!(var5 !== var3)) { _fun0017_ip = 14; continue _fun0017 }
case 33:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 48;
                            var7 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var7);
                            var7 = var8.getSubscriptionItemsForProduct;
                            var9 = var7.bind(var8)(var9);
                            var7 = _closure2_slot14;
                            if(!var7) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                            var7 = _closure2_slot13;
                            var8 = var9.map;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var1 = {};
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 17;
                                var5 = var9[var4];
                                var8 = undefined;
                                var6 = var6.bind(var8)(var5);
                                var5 = var6.castPremiumSubscriptionAsSkuId;
                                var7 = _closure1_slot1;
                                var4 = var9[var4];
                                var8 = var7.bind(var8)(var4);
                                var7 = var8.getSkuIdForPlan;
                                var4 = var3.planId;
                                var4 = var7.bind(var8)(var4);
                                var4 = var5.bind(var6)(var4);
                                var1['sku_id'] = var4;
                                var4 = var3.planId;
                                var1['subscription_plan_id'] = var4;
                                var3 = var3.quantity;
                                var1['quantity'] = var3;
                                var2 = _closure1_slot31;
                                var2 = var2.SUBSCRIPTION;
                                var1['purchase_type'] = var2;
                                return var1;
                            };
                            var2 = var8.bind(var9)(var2);
                            var2 = var7.bind(var3)(var2);
                            SaveGenerator(address=127);
case 139:
                            return var2;
case 170:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0017_ip = 26; continue _fun0017 }
case 171:
                            if(!(var6 != var2)) { _fun0017_ip = 172; continue _fun0017 }
case 168:
                            var4 = _closure2_slot22;
                            var4 = var4.bind(var3)(var5);
case 14:
                            var4 = undefined;
                            return var4;
case 172:
                            return var3;
case 26:
                            return var2;
case 166:
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
            var3 = var3.bind(var4)();
            _closure2_slot30 = var3;
            var12 = _closure1_slot7;
            var11 = var12.useMemo;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var16;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot29;
                    if(var3) { _fun0018_ip = 173; continue _fun0018 }
case 136:
                    var1 = _closure2_slot18;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0018_ip = 174; continue _fun0018 }
case 87:
                    var1 = 19;
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
                    _fun0018_ip = 32; continue _fun0018;
case 174:
                    var3 = 56;
                    var3 = var5[var3];
                    var8 = undefined;
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 19;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    if(var3) { _fun0018_ip = 175; continue _fun0018 }
case 176:
                    var3 = var4.bboTul;
                    var3 = var5.bind(var6)(var3);
                    _fun0018_ip = 177; continue _fun0018;
case 175:
                    var4 = var4.rKD72m;
                    var3 = var5.bind(var6)(var4);
case 177:
                    var1 = var3;
case 32:
                    _fun0018_ip = 178; continue _fun0018;
case 173:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
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
case 178:
                    return var1;
                }
            };
            var27 = var11.bind(var12)(var3, var8);
            _closure2_slot31 = var27;
            var11 = _closure1_slot7;
            var8 = var11.useMemo;
            var3 = new Array(6);
            var3[0] = var28;
            var3[1] = var23;
            var3[2] = var1;
            var3[3] = var19;
            var3[4] = var27;
            var1 = var9.legalDisclaimerText;
            var3[5] = var1;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(var2) { _fun0019_ip = 65; continue _fun0019 }
case 142:
                    var2 = _closure2_slot21;
                    var2 = var1 == var2;
                    var5 = undefined;
                    var15 = undefined;
                    if(var2) { _fun0019_ip = 2; continue _fun0019 }
case 121:
                    var2 = _closure2_slot21;
                    var15 = var2.interval;
case 2:
                    if(!(var1 != var15)) { _fun0019_ip = 179; continue _fun0019 }
case 117:
                    var2 = _closure2_slot18;
                    if(var2) { _fun0019_ip = 180; continue _fun0019 }
case 181:
                    var2 = _closure2_slot20;
                    if(!(var1 == var2)) { _fun0019_ip = 182; continue _fun0019 }
case 183:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 56;
                    var2 = var4[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isAndroid;
                    var3 = var2.bind(var3)();
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 19;
                    var2 = var2[var7];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.t;
                    if(var3) { _fun0019_ip = 168; continue _fun0019 }
case 184:
                    var10 = var2["7wpqfj"];
                    _fun0019_ip = 185; continue _fun0019;
case 168:
                    var10 = var2.COObWR;
case 185:
                    var4 = _closure1_slot34;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 57;
                    var2 = var13[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TextWithIOSLinkWorkaround;
                    var2 = {};
                    var9 = _closure2_slot7;
                    var9 = var9.legalDisclaimerText;
                    var2['style'] = var9;
                    var9 = 'text-xxs/medium';
                    var2['variant'] = var9;
                    var7 = var13[var7];
                    var7 = var8.bind(var5)(var7);
                    var9 = var7.intl;
                    var8 = var9.format;
                    var7 = {};
                    var12 = _closure1_slot27;
                    var12 = var12.PAID_TERMS;
                    var7['paidURL'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 17;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getIntervalStringAsNoun;
                    var11 = var11.bind(var12)(var15);
                    var7['interval'] = var11;
                    var11 = _closure2_slot31;
                    var7['ctaText'] = var11;
                    var7 = var8.bind(var9)(var10, var7);
                    var2['children'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 182:
                    var4 = _closure1_slot34;
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 57;
                    var2 = var14[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TextWithIOSLinkWorkaround;
                    var2 = {};
                    var7 = _closure2_slot7;
                    var7 = var7.legalDisclaimerText;
                    var2['style'] = var7;
                    var7 = 'text-xxs/medium';
                    var2['variant'] = var7;
                    var7 = 19;
                    var9 = var14[var7];
                    var9 = var8.bind(var5)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var14[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.t;
                    var8 = var7["3uC7vj"];
                    var7 = {};
                    var12 = _closure2_slot31;
                    var7['buttonText'] = var12;
                    var13 = _closure1_slot1;
                    var12 = 17;
                    var12 = var14[var12];
                    var16 = var13.bind(var5)(var12);
                    var12 = var16.formatInterval;
                    var12 = var12.bind(var16)(var15);
                    var7['interval'] = var12;
                    var12 = 58;
                    var16 = var14[var12];
                    var18 = var13.bind(var5)(var16);
                    var17 = var18.getArticleURL;
                    var11 = _closure1_slot28;
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
case 180:
                    var4 = _closure1_slot34;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 57;
                    var2 = var11[var2];
                    var2 = var7.bind(var5)(var2);
                    var3 = var2.TextWithIOSLinkWorkaround;
                    var2 = {};
                    var6 = _closure2_slot7;
                    var6 = var6.legalDisclaimerText;
                    var2['style'] = var6;
                    var6 = 'text-xxs/medium';
                    var2['variant'] = var6;
                    var12 = 19;
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
                    if(var7) { _fun0019_ip = 186; continue _fun0019 }
case 187:
                    var7 = var6.ZWXtAj;
                    _fun0019_ip = 188; continue _fun0019;
case 186:
                    var7 = var6.tINI9V;
case 188:
                    var6 = {};
                    var11 = _closure1_slot27;
                    var11 = var11.PAID_TERMS;
                    var6['paidURL'] = var11;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 17;
                    var11 = var13[var11];
                    var14 = var12.bind(var5)(var11);
                    var11 = var14.getIntervalStringAsNoun;
                    var11 = var11.bind(var14)(var15);
                    var6['interval'] = var11;
                    var11 = 58;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var12.getArticleURL;
                    var10 = _closure1_slot28;
                    var10 = var10.PREMIUM_DETAILS_CANCEL_SUB;
                    var10 = var11.bind(var12)(var10);
                    var6['cancelURL'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 179:
                    return var1;
case 65:
                    return var1;
                }
            };
            var17 = var8.bind(var11)(var1, var3);
            var3 = _closure1_slot34;
            var1 = 59;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['ref'] = var6;
            var6 = true;
            var1['handleDisabled'] = var6;
            var7 = _closure1_slot16;
            var1['onDismiss'] = var7;
            var1['startExpanded'] = var6;
            var8 = _closure1_slot35;
            if(var5) { _fun0010_ip = 189; continue _fun0010 }
case 190:
            var6 = _closure1_slot36;
            var5 = {};
            var12 = _closure1_slot34;
            var11 = _closure1_slot40;
            var7 = {};
            var7['premiumType'] = var22;
            var7['isPaymentSuccess'] = var28;
            var29 = var14 == var23;
            var22 = undefined;
            if(var29) { _fun0010_ip = 191; continue _fun0010 }
case 192:
            var22 = var23.premiumTier;
case 191:
            var7['selectedPremiumType'] = var22;
            var7['trialOffer'] = var21;
            var19 = var14 != var19;
            var14 = null;
            if(!var19) { _fun0010_ip = 193; continue _fun0010 }
case 194:
            var14 = var15;
case 193:
            var7['discountOffer'] = var14;
            var11 = var12.bind(var4)(var11, var7);
            var7 = new Array(3);
            var7[0] = var11;
            var14 = _closure1_slot35;
            var12 = _closure1_slot8;
            var11 = {};
            var15 = var9.body;
            var11['style'] = var15;
            var15 = 'in_mobile_web';
            if(!(var15 !== var18)) { _fun0010_ip = 195; continue _fun0010 }
case 196:
            var19 = _closure1_slot35;
            var18 = _closure1_slot36;
            var15 = {};
            var20 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0020_ip = 197; continue _fun0020 }
case 136:
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
                    var12 = _closure2_slot6;
                    if(!var12) { _fun0020_ip = 6; continue _fun0020 }
case 198:
                    var1 = _closure2_slot18;
                    var12 = !var1;
case 6:
                    var3 = _closure1_slot35;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var5 = _closure2_slot7;
                    var5 = var5.contentSelectPlan;
                    var1['style'] = var5;
                    var5 = _closure2_slot18;
                    if(var5) { _fun0020_ip = 199; continue _fun0020 }
case 163:
                    var5 = _closure2_slot20;
                    var8 = null;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0020_ip = 200; continue _fun0020 }
case 148:
                    var5 = _closure2_slot19;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0020_ip = 200; continue _fun0020 }
case 168:
                    var5 = _closure2_slot1;
                    var5 = var8 != var5;
                    var7 = null;
                    if(!var5) { _fun0020_ip = 200; continue _fun0020 }
case 149:
                    var10 = _closure1_slot35;
                    var8 = _closure1_slot8;
                    var5 = {};
                    var14 = _closure1_slot34;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = 18;
                    var11 = var19[var11];
                    var11 = var16.bind(var4)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-md/normal', 'color': 'text-strong'};
                    var15 = _closure2_slot7;
                    var15 = var15.discountDisclaimer;
                    var11['style'] = var15;
                    var15 = 19;
                    var17 = var19[var15];
                    var17 = var16.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.format;
                    var15 = var19[var15];
                    var15 = var16.bind(var4)(var15);
                    var15 = var15.t;
                    var16 = var15.yBn7uz;
                    var15 = {};
                    var19 = _closure2_slot19;
                    var19 = var19.priceString;
                    var15['regularPrice'] = var19;
                    var19 = _closure2_slot20;
                    var15['discountedPrice'] = var19;
                    var15 = var17.bind(var18)(var16, var15);
                    var11['children'] = var15;
                    var13 = var14.bind(var4)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var15 = _closure1_slot34;
                    var14 = _closure1_slot8;
                    var13 = {};
                    var16 = _closure2_slot7;
                    var17 = var16.divider;
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = _closure2_slot7;
                    var17 = var17.offerDividerMargin;
                    var16[1] = var17;
                    var13['style'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var11[1] = var13;
                    var5['children'] = var11;
                    var7 = var10.bind(var4)(var8, var5);
case 200:
                    _fun0020_ip = 201; continue _fun0020;
case 199:
                    var10 = _closure1_slot34;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 18;
                    var5 = var16[var5];
                    var5 = var15.bind(var4)(var5);
                    var8 = var5.Text;
                    var5 = {'variant': 'text-md/normal', 'color': 'text-strong'};
                    var11 = _closure2_slot7;
                    var11 = var11.trialDisclaimer;
                    var5['style'] = var11;
                    var11 = 19;
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
case 201:
                    var5 = new Array(2);
                    var5[0] = var7;
                    var10 = _closure1_slot35;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 63;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = undefined;
                    if(!var12) { _fun0020_ip = 202; continue _fun0020 }
case 203:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 19;
                    var14 = var17[var13];
                    var14 = var16.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.u95Dt4;
                    var11 = var14.bind(var15)(var13);
case 202:
                    var7['title'] = var11;
                    var11 = _closure1_slot29;
                    var11 = var11.NO_BORDER_OR_MARGIN;
                    var7['titleStyleType'] = var11;
                    var11 = _closure2_slot7;
                    var11 = var11.formTitle;
                    var7['titleViewStyle'] = var11;
                    var11 = _closure2_slot7;
                    var13 = var11.formSectionBody;
                    var11 = new Array(2);
                    var11[0] = var13;
                    var12 = !var12;
                    if(!var12) { _fun0020_ip = 204; continue _fun0020 }
case 205:
                    var13 = _closure2_slot7;
                    var12 = var13.formSectionBodyWithNoTitle;
case 204:
                    var11[1] = var12;
                    var7['sectionBodyStyle'] = var11;
                    var15 = true;
                    var7['inset'] = var15;
                    var11 = _closure2_slot23;
                    var17 = null;
                    var12 = var17 != var11;
                    if(!var12) { _fun0020_ip = 206; continue _fun0020 }
case 207:
                    var11 = _closure2_slot23;
                    var13 = var11.countryCode;
                    var11 = 'HR';
                    var12 = var11 === var13;
case 206:
                    if(!var12) { _fun0020_ip = 141; continue _fun0020 }
case 208:
                    var11 = _closure2_slot23;
                    var13 = var11.currencyCode;
                    var11 = var13.toLowerCase;
                    var13 = var11.bind(var13)();
                    var11 = _closure1_slot32;
                    var11 = var11.EUR;
                    var12 = var13 === var11;
case 141:
                    if(!var12) { _fun0020_ip = 209; continue _fun0020 }
case 210:
                    var14 = _closure1_slot34;
                    var13 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var11 = 64;
                    var11 = var23[var11];
                    var13 = var13.bind(var4)(var11);
                    var11 = {};
                    var22 = _closure1_slot0;
                    var16 = 19;
                    var18 = var23[var16];
                    var18 = var22.bind(var4)(var18);
                    var20 = var18.intl;
                    var19 = var20.formatToPlainString;
                    var16 = var23[var16];
                    var16 = var22.bind(var4)(var16);
                    var16 = var16.t;
                    var18 = var16["9hnZoK"];
                    var16 = {};
                    var21 = 25;
                    var21 = var23[var21];
                    var24 = var22.bind(var4)(var21);
                    var23 = var24.formatPrice;
                    var21 = _closure2_slot23;
                    var22 = var21.price;
                    var21 = _closure1_slot30;
                    var22 = var22 * var21;
                    var21 = _closure1_slot32;
                    var21 = var21.HRK;
                    var21 = var23.bind(var24)(var22, var21, var25);
                    var16['kunaPriceWithCurrency'] = var21;
                    var16 = var19.bind(var20)(var18, var16);
                    var11['message'] = var16;
                    var12 = var14.bind(var4)(var13, var11);
case 209:
                    var11 = new Array(2);
                    var11[0] = var12;
                    var14 = _closure1_slot34;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 65;
                    var12 = var16[var12];
                    var12 = var13.bind(var4)(var12);
                    var13 = var12.RadioGroup;
                    var12 = {};
                    var16 = _closure2_slot21;
                    var18 = var17 == var16;
                    var16 = undefined;
                    if(var18) { _fun0020_ip = 211; continue _fun0020 }
case 212:
                    var18 = _closure2_slot21;
                    var16 = var18.productId;
case 211:
                    var12['value'] = var16;
                    var24 = _closure1_slot44;
                    var23 = _closure2_slot2;
                    var16 = _closure2_slot21;
                    var16 = var17 == var16;
                    var22 = undefined;
                    if(var16) { _fun0020_ip = 213; continue _fun0020 }
case 214:
                    var16 = _closure2_slot21;
                    var22 = var16.productId;
case 213:
                    var21 = _closure2_slot16;
                    var20 = _closure2_slot17;
                    var16 = _closure2_slot19;
                    var16 = var17 == var16;
                    var19 = undefined;
                    if(var16) { _fun0020_ip = 215; continue _fun0020 }
case 216:
                    var16 = _closure2_slot19;
                    var19 = var16.identifier;
case 215:
                    var28 = _closure2_slot20;
                    var27 = _closure2_slot3;
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
                        var1 = arg1;
                        var3 = var1.value;
                        var2 = _closure2_slot30;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var12['onChange'] = var16;
                    var16 = false;
                    var12['withDividers'] = var16;
                    var16 = _closure2_slot7;
                    var16 = var16.planOptionRowContainer;
                    var12['style'] = var16;
                    var16 = _closure2_slot9;
                    if(var16) { _fun0020_ip = 217; continue _fun0020 }
case 218:
                    var16 = _closure2_slot15;
case 217:
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
case 197:
                    var4 = _closure1_slot35;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.contentActivated;
                    var2['style'] = var1;
                    var8 = _closure1_slot34;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 62;
                    var5 = var10[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var11 = _closure2_slot33;
                    var11 = var11.bind(var1)();
                    var5['source'] = var11;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot34;
                    var7 = _closure1_slot0;
                    var6 = 18;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var10 = _closure2_slot7;
                    var10 = var10.contentActivatedText;
                    var6['style'] = var10;
                    var10 = 'text-md/semibold';
                    var6['variant'] = var10;
                    var9 = _closure2_slot34;
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
            var23 = _closure1_slot34;
            var22 = _closure1_slot45;
            var21 = {};
            var21['isPaymentSuccess'] = var28;
            var21['onClose'] = var13;
            var21['ctaText'] = var27;
            var21['onStartPayment'] = var26;
            var21['shouldUseMobileWebRedirectCheckout'] = var16;
            var26 = var24;
            if(var24) { _fun0010_ip = 219; continue _fun0010 }
case 220:
            var26 = var25;
case 219:
            var21['disabled'] = var26;
            if(var24) { _fun0010_ip = 221; continue _fun0010 }
case 222:
            var24 = var25;
case 221:
            var21['loading'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var15['children'] = var20;
            var18 = var19.bind(var4)(var18, var15);
            _fun0010_ip = 223; continue _fun0010;
case 195:
            var20 = _closure1_slot34;
            var19 = _closure1_slot9;
            var15 = {};
            var21 = 'large';
            var15['size'] = var21;
            var21 = var9.loadingIndicator;
            var15['style'] = var21;
            var18 = var20.bind(var4)(var19, var15);
case 223:
            var15 = new Array(2);
            var15[0] = var18;
            var16 = !var16;
            if(!var16) { _fun0010_ip = 224; continue _fun0010 }
case 225:
            var16 = var17;
case 224:
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var7[1] = var11;
            var14 = _closure1_slot34;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 61;
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
            _fun0010_ip = 226; continue _fun0010;
case 189:
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var9.blockedPaymentContainer;
            var6['style'] = var9;
            var12 = _closure1_slot34;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 60;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot34;
            var11 = _closure1_slot0;
            var10 = 61;
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
case 226:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var5;
    var5 = 69;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/PremiumPlanSelectionActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumPlanSelectionActionSheetWithOrderCTX(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 66;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var2 = var9.useConfig;
            var1 = {};
            var10 = 'PremiumPlanSelectionActionSheetWithOrderCTX';
            var1['location'] = var10;
            var1 = var2.bind(var9)(var1);
            var1 = var1.enabled;
            var2 = 56;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot33;
            if(var3) { _fun0021_ip = 227; continue _fun0021 }
case 113:
            var16 = var2.GOOGLE;
            _fun0021_ip = 148; continue _fun0021;
case 227:
            if(var1) { _fun0021_ip = 228; continue _fun0021 }
case 229:
            var1 = var2.APPLE;
            _fun0021_ip = 230; continue _fun0021;
case 228:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 230:
            var16 = var1;
case 148:
            var9 = var7.predicate;
            if(!(var4 === var9)) { _fun0021_ip = 231; continue _fun0021 }
case 13:
            var2 = _closure1_slot46;
            var1 = var7.premiumType;
            var3 = null;
            if(!(var3 == var1)) { _fun0021_ip = 166; continue _fun0021 }
case 232:
            var3 = _closure1_slot18;
            var1 = var3.TIER_2;
case 166:
            var9 = var2.bind(var4)(var1);
case 231:
            var2 = var7.initialSelectedCriteria;
            if(!(var4 === var2)) { _fun0021_ip = 4; continue _fun0021 }
case 233:
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot19;
                var1 = var1.YEAR;
                var1 = var2 === var1;
                return var1;
            };
case 4:
            var11 = var7.sortFn;
            if(!(var4 === var11)) { _fun0021_ip = 110; continue _fun0021 }
case 234:
            var11 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.interval;
                var1 = arg1;
                var1 = var1.interval;
                var1 = var2 - var1;
                return var1;
            };
case 110:
            var3 = _closure1_slot4;
            var1 = _closure1_slot3;
            var8 = var3.bind(var4)(var7, var1);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 30;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.usePremiumTrialOffer;
            var1 = var1.bind(var3)();
            var12 = null;
            var3 = var12 == var1;
            var10 = undefined;
            if(var3) { _fun0021_ip = 235; continue _fun0021 }
case 236:
            var10 = var1.trial_id;
case 235:
            var1 = var12 != var10;
            var7 = undefined;
            if(!var1) { _fun0021_ip = 237; continue _fun0021 }
case 151:
            var1 = {};
            var3 = {};
            var3['subscription_trial_id'] = var10;
            var1['subscription_preview'] = var3;
            var7 = var1;
case 237:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 67;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsEligibleForBogoPromotion;
            var13 = false;
            var10 = var1.bind(var3)(var13);
            if(!(var12 != var11)) { _fun0021_ip = 238; continue _fun0021 }
case 239:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 48;
            var1 = var14[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getPremiumBundlesWithPredicate;
            var3 = var1.bind(var3)(var9);
            var1 = var3.sort;
            var11 = var1.bind(var3)(var11);
            _fun0021_ip = 240; continue _fun0021;
case 238:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 48;
            var1 = var14[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getPremiumBundlesWithPredicate;
            var11 = var1.bind(var3)(var9);
case 240:
            if(!var10) { _fun0021_ip = 241; continue _fun0021 }
case 242:
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot19;
                var1 = var1.MONTH;
                var1 = var2 === var1;
                return var1;
            };
case 241:
            var1 = var11.find;
            var9 = var1.bind(var11)(var2);
            if(!(var12 == var9)) { _fun0021_ip = 201; continue _fun0021 }
case 243:
            var1 = {};
            var2 = _closure1_slot20;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            var1['subscriptionPlanId'] = var2;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 17;
            var2 = var14[var2];
            var14 = var3.bind(var4)(var2);
            var3 = var14.castPremiumSubscriptionAsSkuId;
            var2 = _closure1_slot22;
            var2 = var2.TIER_2;
            var2 = var3.bind(var14)(var2);
            var1['skuId'] = var2;
            var2 = 1;
            var1['quantity'] = var2;
            var14 = new Array(1);
            var14[0] = var1;
            _fun0021_ip = 244; continue _fun0021;
case 201:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 48;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getSubscriptionItemsForProduct;
            var1 = var9.productId;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.planId;
                var1['subscriptionPlanId'] = var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 17;
                var4 = var8[var3];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var4 = var5.castPremiumSubscriptionAsSkuId;
                var6 = _closure1_slot1;
                var3 = var8[var3];
                var7 = var6.bind(var7)(var3);
                var6 = var7.getSkuIdForPlan;
                var3 = var2.planId;
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
                var1['skuId'] = var3;
                var2 = var2.quantity;
                var1['quantity'] = var2;
                return var1;
            };
            var14 = var2.bind(var3)(var1);
case 244:
            var3 = _closure1_slot34;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 68;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var16;
            var15 = _closure1_slot33;
            var15 = var15.APPLE_ADVANCED_COMMERCE;
            var15 = var16 === var15;
            var1['orderRequired'] = var15;
            var15 = new Array(0);
            var1['skuIds'] = var15;
            var1['defaultPlans'] = var14;
            var1['isGift'] = var13;
            var1['activeSubscription'] = var12;
            var1['initialSubscriptionFacet'] = var7;
            var6 = function onOrderRetryCancellation() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 41;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot23;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onOrderRetryCancellation'] = var6;
            var7 = _closure1_slot34;
            var6 = _closure1_slot38;
            var5 = {};
            var18 = var5;
            var17 = var8;
            var8 = copyDataProperties(var18, var17);
            var8 = 'premiumItems';
            var5[7] = var11;
            var8 = 'userIsEligibleForBogoPromotion';
            var5[7] = var10;
            var8 = 'initialSelectedItem';
            var5[7] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getItemsByPremiumTypePredicate'] = var2;
    return var1;
})();