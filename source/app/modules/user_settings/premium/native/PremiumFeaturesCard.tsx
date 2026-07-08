// app/modules/user_settings/premium/native/PremiumFeaturesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var18 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var6;
    var1 = function isSamePremiumType(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.planIdFromItems;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getPremiumType;
            var3 = var2.bind(var3)(var4);
            var2 = arg2;
            var1 = var3 === var2;
case 4:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var18.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var18.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var17 = 4;
    var7 = var6[var17];
    var7 = var18.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var18.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticsPages;
    var8 = var7.AnalyticsSections;
    var7 = var7.AnalyticsObjectTypes;
    var14 = 7;
    var10 = var6[var14];
    var11 = var5.bind(var1)(var10);
    var10 = var11.ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot8 = var10;
    var10 = var11.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot9 = var10;
    var10 = var11.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot10 = var10;
    var10 = var11.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot11 = var10;
    var10 = var11.PremiumTypes;
    var _closure1_slot12 = var10;
    var12 = var11.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot13 = var12;
    var12 = var11.SubscriptionIntervalTypes;
    var _closure1_slot14 = var12;
    var12 = var11.SubscriptionPlanInfo;
    var _closure1_slot15 = var12;
    var11 = var11.SubscriptionPlans;
    var _closure1_slot16 = var11;
    var16 = 8;
    var11 = var6[var16];
    var11 = var5.bind(var1)(var11);
    var15 = var11.Fonts;
    var11 = 9;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var12 = var11.jsx;
    var _closure1_slot17 = var12;
    var11 = var11.jsxs;
    var _closure1_slot18 = var11;
    var11 = var4.Set;
    var12 = var10.TIER_0;
    var4 = new Array(2);
    var4[0] = var12;
    var10 = var10.TIER_2;
    var4[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var25 = var10;
    var24 = var4;
    var4 = new var25[var11](var24, var23);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var13 = 'relative';
    var12['position'] = var13;
    var4['containerWrapper'] = var12;
    var12 = {'display': 'flex', 'justifyContent': 'flex-start', 'width': '100%', 'padding': 24, 'backgroundColor': 'transparent', 'overflow': 'hidden'};
    var13 = 11;
    var19 = var6[var13];
    var19 = var18.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var12['borderRadius'] = var19;
    var4['card'] = var12;
    var12 = {};
    var12['marginBottom'] = var16;
    var4['logoContainer'] = var12;
    var12 = {};
    var12['marginRight'] = var17;
    var4['logo'] = var12;
    var12 = {'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'maxWidth': '50%'};
    var4['priceContainer'] = var12;
    var12 = {'maxWidth': '62%', 'includeFontPadding': true};
    var4['discountPriceText'] = var12;
    var12 = {};
    var12['marginTop'] = var16;
    var4['featureList'] = var12;
    var12 = {};
    var17 = 12;
    var16 = var6[var17];
    var21 = var18.bind(var1)(var16);
    var20 = var15.PRIMARY_MEDIUM;
    var16 = var6[var13];
    var16 = var18.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var19 = var16.WHITE;
    var16 = 14;
    var23 = var21.bind(var1)(var20, var19, var16);
    var24 = var12;
    var16 = copyDataProperties(var24, var23);
    var19 = -8;
    var16 = 'marginLeft';
    var12[15] = var19;
    var4['featureLabel'] = var12;
    var12 = {};
    var12['paddingVertical'] = var14;
    var4['featureRow'] = var12;
    var14 = 16;
    var12 = {'height': 16, 'width': 16};
    var4['featureIcon'] = var12;
    var12 = {};
    var12['marginTop'] = var14;
    var4['button'] = var12;
    var14 = 'center';
    var12 = {'marginTop': 16, 'paddingVertical': 12, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['currentPlanLabel'] = var12;
    var12 = {'paddingHorizontal': 24, 'marginTop': 4294967284, 'paddingBottom': 16, 'alignItems': 'center', 'bottom': 0};
    var4['trialSubTextContainer'] = var12;
    var12 = {};
    var16 = var6[var17];
    var16 = var18.bind(var1)(var16);
    var15 = var15.DISPLAY_MEDIUM;
    var13 = var6[var13];
    var13 = var18.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE;
    var23 = var16.bind(var1)(var15, var13, var17);
    var24 = var12;
    var13 = copyDataProperties(var24, var23);
    var13 = 'textAlign';
    var12[12] = var14;
    var4['trialSubText'] = var12;
    var12 = {'position': 'absolute', 'top': 4294967286, 'maxWidth': 240, 'alignSelf': 'center', 'zIndex': 2};
    var4['pill'] = var12;
    var12 = {'marginRight': 4, 'alignSelf': 'center', 'marginTop': 1};
    var4['buttonIcon'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot21 = var4;
    var4 = function PriceText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.premiumItem;
            var12 = var1.discountedPriceString;
            var11 = var1.discountOffer;
            var16 = var1.activeDiscountInfo;
            var27 = var1.subscriptionTrial;
            var3 = var1.premiumType;
            var15 = var1.premiumSubscription;
            var17 = var1.fractionalPremiumInfo;
            var5 = _closure1_slot20;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 13;
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var6 = var2.basePlanId;
            var22 = var9.bind(var4)(var6);
            var18 = 14;
            var6 = var8[var18];
            var9 = var7.bind(var4)(var6);
            var7 = var9.getIntervalStringAsNoun;
            var6 = var2.interval;
            var24 = var7.bind(var9)(var6);
            var6 = _closure1_slot15;
            var2 = var2.basePlanId;
            var2 = var6[var2];
            var7 = _closure1_slot0;
            var6 = 15;
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var8 = var9.formatRate;
            var10 = null;
            var7 = var10 == var22;
            var6 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var22.priceString;
case 6:
            var14 = var10 != var6;
            var13 = '$...';
            var7 = var13;
            if(!var14) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var6;
case 8:
            var6 = var2.interval;
            var2 = var2.intervalCount;
            var9 = var8.bind(var9)(var7, var6, var2);
            if(!(var10 != var12)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(!(var10 == var11)) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            if(!(var10 != var16)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!(var10 == var15)) { _fun0002_ip = 15; continue _fun0002 }
case 13:
            if(!(var10 != var27)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = _closure1_slot11;
            var2 = var27.sku_id;
            var2 = var6[var2];
            if(!(var3 !== var2)) { _fun0002_ip = 18; continue _fun0002 }
case 16:
            var7 = _closure1_slot18;
            var6 = _closure1_slot4;
            var2 = {};
            var8 = true;
            var2['accessible'] = var8;
            var8 = var5.priceContainer;
            var2['style'] = var8;
            var19 = _closure1_slot17;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var21 = 16;
            var8 = var8[var21];
            var8 = var14.bind(var4)(var8);
            var14 = var8.Text;
            var8 = {'variant': 'text-md/bold', 'color': 'text-overlay-light'};
            var20 = var10 == var22;
            var23 = undefined;
            if(var20) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var23 = var22.priceString;
case 19:
            var25 = var10 != var23;
            var20 = var13;
            if(!var25) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var20 = var23;
case 21:
            var8['children'] = var20;
            var14 = var19.bind(var4)(var14, var8);
            var8 = new Array(2);
            var8[0] = var14;
            var20 = _closure1_slot17;
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var21];
            var14 = var19.bind(var4)(var14);
            var19 = var14.Text;
            var14 = {'variant': 'text-md/normal', 'color': 'text-overlay-light'};
            var21 = global;
            var21 = var21.HermesInternal;
            var23 = var21.concat;
            var21 = ' / ';
            var21 = var23.bind(var21)(var24);
            var14['children'] = var21;
            var14 = var20.bind(var4)(var19, var14);
            var8[1] = var14;
            var2['children'] = var8;
            var2 = var7.bind(var4)(var6, var2);
            _fun0002_ip = 23; continue _fun0002;
case 18:
            var8 = _closure1_slot17;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var6 = 16;
            var6 = var23[var6];
            var6 = var24.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/normal', 'color': 'text-overlay-light'};
            var14 = var5.discountPriceText;
            var6['style'] = var14;
            var14 = 17;
            var19 = var23[var14];
            var19 = var24.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.format;
            var14 = var23[var14];
            var14 = var24.bind(var4)(var14);
            var14 = var14.t;
            var19 = var14.xOX9/9;
            var14 = {};
            var23 = var23[var18];
            var25 = var24.bind(var4)(var23);
            var24 = var25.formatIntervalDuration;
            var23 = {};
            var28 = var10 == var27;
            var26 = undefined;
            if(var28) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var26 = var27.interval;
case 24:
            var23['intervalType'] = var26;
            var28 = var10 == var27;
            var26 = undefined;
            if(var28) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var26 = var27.interval_count;
case 26:
            var23['intervalCount'] = var26;
            var23 = var24.bind(var25)(var23);
            var14['trialPeriod'] = var23;
            var24 = var10 == var22;
            var23 = undefined;
            if(var24) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var23 = var22.priceString;
case 28:
            var24 = var10 != var23;
            var22 = var13;
            if(!var24) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var22 = var23;
case 30:
            var14['price'] = var22;
            var14 = var20.bind(var21)(var19, var14);
            var6['children'] = var14;
            var2 = var8.bind(var4)(var7, var6);
case 23:
            return var2;
case 15:
            var6 = var15.planIdFromItems;
            var2 = _closure1_slot16;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            if(!(var6 === var2)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var2 = _closure1_slot23;
            var2 = var2.bind(var4)(var15, var3);
            if(!var2) { _fun0002_ip = 32; continue _fun0002 }
case 34:
            if(!(var10 != var15)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var2 = var15.hasActiveTrial;
            if(var2) { _fun0002_ip = 32; continue _fun0002 }
case 35:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var6 = var8[var2];
            var6 = var3.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.format;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.z2oQtA;
            var2 = {};
            var8 = var16.percentage;
            if(!(var10 == var8)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var8 = _closure1_slot8;
case 37:
            var2['percent'] = var8;
            var2['regularPrice'] = var9;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var18];
            var14 = var14.bind(var4)(var8);
            var8 = var14.getExpectedRenewalDate;
            var8 = var8.bind(var14)(var15, var17);
            var2['renewalDate'] = var8;
            var7 = var6.bind(var7)(var3, var2);
            _fun0002_ip = 39; continue _fun0002;
case 32:
            var2 = var15.hasAnyPremiumGroup;
            if(!var2) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = var15.metadata;
            var6 = var10 == var3;
            var2 = undefined;
            if(var6) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var2 = var3.active_discount_expires_at;
case 42:
            if(!(var10 == var2)) { _fun0002_ip = 44; continue _fun0002 }
case 40:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 17;
            var6 = var14[var2];
            var6 = var3.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.format;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["3ZiutU"];
            var2 = {};
            var14 = var16.percentage;
            if(!(var10 == var14)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var14 = _closure1_slot10;
case 45:
            var2['percent'] = var14;
            var14 = var16.duration;
            if(!(var10 == var14)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var14 = _closure1_slot9;
case 47:
            var2['numMonths'] = var14;
            var2['regularPrice'] = var9;
            var7 = var6.bind(var8)(var3, var2);
            _fun0002_ip = 39; continue _fun0002;
case 44:
            var3 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 18;
            var2 = var17[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.getPriceString;
            var14 = var2.bind(var6)(var15);
            var2 = 17;
            var2 = var17[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.intl;
            var6 = var8.format;
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var17[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.FwjZzr;
            var2 = {};
            var17 = var16.percentage;
            var18 = var10 != var17;
            var16 = 0;
            if(!var18) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var16 = var17;
case 49:
            var2['percent'] = var16;
            var16 = global;
            var17 = var16.Date;
            var15 = var15.metadata;
            var31 = var15.active_discount_expires_at;
            var16 = var17.prototype;
            var16 = Object.create(var16, {constructor: {value: var17}});
            var32 = var16;
            var15 = new var32[var17](var31, var30);
            var15 = var15 instanceof Object ? var15 : var16;
            var2['discountEndDate'] = var15;
            var15 = var10 != var14;
            if(!var15) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var13 = var14;
case 51:
            var2['regularPrice'] = var13;
            var7 = var6.bind(var8)(var3, var2);
case 39:
            var6 = _closure1_slot17;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/normal', 'color': 'text-overlay-light'};
            var8 = var5.discountPriceText;
            var2['style'] = var8;
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 12:
            var3 = _closure1_slot17;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 16;
            var1 = var13[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-overlay-light'};
            var5 = var5.discountPriceText;
            var1['style'] = var5;
            var5 = 17;
            var7 = var13[var5];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.sJTwHQ;
            var5 = {};
            var5['discountedPrice'] = var12;
            var12 = var11.discount;
            var13 = var10 == var12;
            var11 = undefined;
            if(var13) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var11 = var12.userUsageLimit;
case 53:
            var12 = var10 != var11;
            var10 = 1;
            if(!var12) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var10 = var11;
case 55:
            var5['numMonths'] = var10;
            var5['regularPrice'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/premium/native/PremiumFeaturesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumFeaturesCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var31 = var1.premiumType;
            var _closure2_slot0 = var31;
            var8 = var1.style;
            var5 = var1.onLayout;
            var2 = var1.applicationId;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot2 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot3 = var2;
            var11 = var1.hideButton;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0003_ip = 57; continue _fun0003 }
case 2:
            var11 = false;
case 57:
            var16 = var1.forFractionalPremium;
            if(!(var16 === var4)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var16 = false;
case 58:
            var15 = var1.hidePrice;
            if(!(var15 === var4)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var15 = false;
case 60:
            var14 = var1.isPremiumGroup;
            if(!(var14 === var4)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var14 = false;
case 62:
            var7 = var1.premiumGroupRole;
            if(!(var7 === var4)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var7 = var1.UNSPECIFIED;
case 64:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot20;
            var17 = var1.bind(var4)();
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 21;
            var2 = var6[var1];
            var10 = var9.bind(var4)(var2);
            var3 = _closure1_slot19;
            var2 = var3.has;
            var3 = var2.bind(var3)(var31);
            var2 = 'only Tier 0 and Tier 2 are supported';
            var2 = var10.bind(var4)(var3, var2);
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var2 = var10.usePremiumTrialOffer;
            var37 = var2.bind(var10)();
            var2 = 23;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var2 = var10.usePremiumDiscountOffer;
            var27 = var2.bind(var10)();
            var2 = 24;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var2 = var10.useActiveDiscountInfo;
            var34 = var2.bind(var10)();
            var2 = 25;
            var2 = var6[var2];
            var2 = var9.bind(var4)(var2);
            var30 = var2.bind(var4)();
            var2 = 26;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var3)();
            var19 = null;
            var3 = var19 == var37;
            var33 = undefined;
            if(var3) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var33 = var37.subscription_trial;
case 66:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var9 = var6.bind(var4)(var3);
            var6 = var9.formatIntervalDuration;
            var3 = {};
            var12 = var19 == var33;
            var10 = undefined;
            if(var12) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var10 = var33.interval;
case 68:
            var3['intervalType'] = var10;
            var12 = var19 == var33;
            var10 = undefined;
            if(var12) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var10 = var33.interval_count;
case 70:
            var3['intervalCount'] = var10;
            var20 = var6.bind(var9)(var3);
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var22 = 17;
            var3 = var12[var22];
            var3 = var18.bind(var4)(var3);
            var9 = var3.intl;
            var6 = var9.string;
            var3 = var12[var22];
            var3 = var18.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.J61px0;
            var28 = var6.bind(var9)(var3);
            var9 = var31 === var2;
            var10 = _closure1_slot1;
            var2 = 27;
            var2 = var12[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.analyticsLocations;
            _closure2_slot4 = var2;
            var2 = 28;
            var3 = var12[var2];
            var23 = var18.bind(var4)(var3);
            var21 = var23.useStateFromStoresArray;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var1 = var3.getPremiumTypeSubscription;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.hasFetchedSubscriptions;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var21 = var21.bind(var23)(var6, var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var4)(var21, var3);
            var3 = 0;
            var32 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            var6 = _closure1_slot13;
            var6 = var6[var31];
            _closure2_slot5 = var6;
            var6 = var12[var2];
            var25 = var18.bind(var4)(var6);
            var23 = var25.useStateFromStores;
            var6 = _closure1_slot6;
            var21 = new Array(1);
            var21[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot5;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var23.bind(var25)(var21, var6);
            var2 = var12[var2];
            var23 = var18.bind(var4)(var2);
            var21 = var23.useStateFromStores;
            var2 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var26 = var21.bind(var23)(var18, var2);
            var2 = 29;
            var2 = var12[var2];
            var2 = var10.bind(var4)(var2);
            var18 = var2.bind(var4)(var31, var16, var7);
            var2 = var19 != var32;
            if(!var2) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var2 = var32.isBoostOnly;
case 72:
            if(!var2) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 30;
            var7 = var12[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.isMetaQuest;
            var2 = var7.bind(var10)();
case 74:
            var25 = var19 != var32;
            if(!var25) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var25 = var6;
case 76:
            if(!var25) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var25 = var3;
case 78:
            if(!var25) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var25 = !var2;
case 80:
            var2 = var19 != var32;
            var3 = null;
            if(!var2) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var2 = var32.planIdFromItems;
            var3 = null;
            if(!(var4 !== var2)) { _fun0003_ip = 82; continue _fun0003 }
case 84:
            var6 = _closure1_slot15;
            var2 = var32.planIdFromItems;
            var3 = var6[var2];
case 82:
            var6 = var19 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var2 = var3.interval;
case 85:
            if(!(var19 == var2)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var3 = _closure1_slot14;
            var2 = var3.MONTH;
case 87:
            _closure2_slot6 = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 31;
            var6 = var3[var6];
            var10 = var2.bind(var4)(var6);
            var7 = var10.getPremiumBundleWithPredicate;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.additionalPlans;
                    var6 = var2.isDeprecated;
                    var5 = var2.numPremiumGuild;
                    var4 = var2.premiumTier;
                    var3 = var2.interval;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                    var1 = !var6;
case 89:
                    if(!var1) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    var1 = var2 === var5;
case 91:
                    if(!var1) { _fun0004_ip = 93; continue _fun0004 }
case 94:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 93:
                    if(!var1) { _fun0004_ip = 95; continue _fun0004 }
case 96:
                    var2 = _closure2_slot6;
                    var1 = var3 === var2;
case 95:
                    return var1;
                }
            };
            var36 = var7.bind(var10)(var6);
            _closure2_slot7 = var36;
            var6 = _closure1_slot1;
            var1 = var3[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var19 != var36;
            var1 = 'could not find a premium item';
            var1 = var7.bind(var4)(var6, var1);
            var1 = 32;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useDiscountedPremiumProductInfo;
            var1 = new Array(1);
            var1[0] = var36;
            var1 = var2.bind(var3)(var27, var1);
            var35 = var1.discountedPriceString;
            var29 = var19 != var27;
            if(!var29) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var29 = var19 != var35;
case 97:
            var12 = var25;
            if(!var12) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var1 = _closure1_slot23;
            var12 = var1.bind(var4)(var32, var31);
case 99:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var36.basePlanId;
            var21 = var2.bind(var4)(var1);
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var17.containerWrapper;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var23 = _closure1_slot17;
            var6 = _closure1_slot0;
            var5 = 33;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PremiumPill;
            var5 = {};
            var38 = var17.pill;
            var5['style'] = var38;
            var5['discountOffer'] = var27;
            var38 = var19 != var34;
            var5['isActiveDiscount'] = var38;
            var5['shouldShowDiscountUpsell'] = var29;
            var5['premiumType'] = var31;
            var5['trialOffer'] = var37;
            var6 = var23.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 34;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['premiumType'] = var31;
            var6['style'] = var8;
            var8 = {};
            var10 = var17.card;
            var8['style'] = var10;
            var10 = {};
            var37 = var17.logoContainer;
            var10['style'] = var37;
            var40 = _closure1_slot17;
            var39 = _closure1_slot1;
            var41 = _closure1_slot2;
            if(var14) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var37 = 36;
            var37 = var41[var37];
            var38 = var39.bind(var4)(var37);
            var37 = {};
            var37['premiumType'] = var31;
            var42 = var17.logo;
            var37['style'] = var42;
            var37 = var40.bind(var4)(var38, var37);
            _fun0003_ip = 103; continue _fun0003;
case 101:
            var38 = 35;
            var38 = var41[var38];
            var39 = var39.bind(var4)(var38);
            var38 = {'width': 185, 'height': 20, 'alwaysWhite': true};
            var37 = var40.bind(var4)(var39, var38);
case 103:
            var10['children'] = var37;
            var23 = var23.bind(var4)(var2, var10);
            var10 = new Array(5);
            var10[0] = var23;
            var38 = _closure1_slot17;
            var37 = _closure1_slot1;
            var39 = _closure1_slot2;
            var23 = 37;
            var23 = var39[var23];
            var37 = var37.bind(var4)(var23);
            var23 = {};
            var23['premiumType'] = var31;
            var23 = var38.bind(var4)(var37, var23);
            var10[1] = var23;
            if(!var14) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var14 = var19 == var34;
case 104:
            var14 = !var14;
            if(!var14) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var14 = !var16;
case 106:
            if(!var14) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var14 = !var15;
case 108:
            if(!var14) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var23 = _closure1_slot17;
            var16 = _closure1_slot22;
            var15 = {};
            var15['premiumItem'] = var36;
            var15['discountedPriceString'] = var35;
            var15['discountOffer'] = var27;
            var15['activeDiscountInfo'] = var34;
            var15['subscriptionTrial'] = var33;
            var15['premiumType'] = var31;
            var15['premiumSubscription'] = var32;
            var15['fractionalPremiumInfo'] = var30;
            var14 = var23.bind(var4)(var16, var15);
case 110:
            var10[2] = var14;
            var16 = _closure1_slot17;
            var15 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 38;
            var14 = var23[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var23 = var17.featureList;
            var14['style'] = var23;
            var14['features'] = var18;
            var18 = var17.featureIcon;
            var14['iconStyle'] = var18;
            var18 = var17.featureLabel;
            var14['labelStyle'] = var18;
            var18 = var17.featureRow;
            var14['rowStyle'] = var18;
            var14 = var16.bind(var4)(var15, var14);
            var10[3] = var14;
            var11 = !var11;
            if(!var11) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var15 = _closure1_slot17;
            var14 = _closure1_slot4;
            if(var12) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var12 = {};
            var16 = var17.button;
            var12['style'] = var16;
            var23 = _closure1_slot17;
            var18 = _closure1_slot0;
            var30 = _closure1_slot2;
            var16 = 39;
            var16 = var30[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Button;
            var16 = {};
            if(var9) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            if(var29) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var30 = _closure1_slot12;
            var30 = var30.TIER_0;
            if(!(var31 !== var30)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var31 = var30[var22];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var22];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30["8x0jKT"];
            var30 = var31.bind(var32)(var30);
            _fun0003_ip = 122; continue _fun0003;
case 120:
            var34 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = var31[var22];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var22];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.cM8bbx;
            var30 = var32.bind(var33)(var31);
case 122:
            _fun0003_ip = 123; continue _fun0003;
case 118:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var33 = var31[var22];
            var33 = var32.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.formatToPlainString;
            var31 = var31[var22];
            var31 = var32.bind(var4)(var31);
            var31 = var31.t;
            var32 = var31.bkQ4bH;
            var31 = {};
            var35 = var27.discount;
            var35 = var35.amount;
            var31['percent'] = var35;
            var30 = var33.bind(var34)(var32, var31);
case 123:
            var28 = var30;
case 116:
            var16['text'] = var28;
            if(!(var19 == var27)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var28 = undefined;
            if(!var9) { _fun0003_ip = 126; continue _fun0003 }
case 124:
            var32 = _closure1_slot17;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 40;
            var30 = var35[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.NitroWheelIcon;
            var30 = {};
            var33 = var17.buttonIcon;
            var30['style'] = var33;
            var34 = _closure1_slot1;
            var33 = 11;
            var33 = var35[var33];
            var33 = var34.bind(var4)(var33);
            var33 = var33.colors;
            var33 = var33.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
            var30['color'] = var33;
            var33 = 'sm';
            var30['size'] = var33;
            var28 = var32.bind(var4)(var31, var30);
case 126:
            var16['icon'] = var28;
            var28 = undefined;
            if(!var29) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var28 = 'start';
case 127:
            var16['iconPosition'] = var28;
            if(!(var19 == var27)) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var27 = 'experimental_premium-secondary';
            if(!var9) { _fun0003_ip = 131; continue _fun0003 }
case 129:
            var27 = 'primary-overlay';
case 131:
            var16['variant'] = var27;
            var27 = 'md';
            var16['size'] = var27;
            var27 = true;
            var16['grow'] = var27;
            var26 = !var26;
            var16['shiny'] = var26;
            var16['disabled'] = var25;
            var24 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = _closure1_slot21;
                var1['analyticsLocation'] = var4;
                var5 = _closure2_slot4;
                var1['analyticsLocations'] = var5;
                var5 = _closure2_slot7;
                var5 = var5.premiumTier;
                var1['premiumType'] = var5;
                var5 = _closure2_slot1;
                var1['applicationId'] = var5;
                var5 = _closure2_slot2;
                var1['onPaymentSuccess'] = var5;
                var4 = _closure2_slot3;
                var1['onPaymentDismiss'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16['onPress'] = var24;
            var16 = var23.bind(var4)(var18, var16);
            var12['children'] = var16;
            _fun0003_ip = 132; continue _fun0003;
case 114:
            var16 = {'style': null, 'accessible': true, 'accessibilityRole': 'text'};
            var18 = var17.currentPlanLabel;
            var16['style'] = var18;
            var24 = _closure1_slot17;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 16;
            var18 = var25[var18];
            var18 = var28.bind(var4)(var18);
            var23 = var18.Text;
            var18 = {'variant': 'text-md/semibold', 'color': 'text-overlay-light'};
            var26 = var25[var22];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var22];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.j+wlhy;
            var25 = var26.bind(var27)(var25);
            var18['children'] = var25;
            var18 = var24.bind(var4)(var23, var18);
            var16['children'] = var18;
            var12 = var16;
case 132:
            var11 = var15.bind(var4)(var14, var12);
case 112:
            var10[4] = var11;
            var8['children'] = var10;
            var10 = var3.bind(var4)(var2, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var12 = _closure1_slot17;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = true;
            var10['accessible'] = var14;
            var14 = var17.trialSubTextContainer;
            var10['style'] = var14;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 16;
            var13 = var15[var13];
            var13 = var16.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var18 = 'text-md/normal';
            var13['variant'] = var18;
            var17 = var17.trialSubText;
            var13['style'] = var17;
            var17 = var15[var22];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var15[var22];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.pC4tcv;
            var15 = {};
            var15['trialPeriod'] = var20;
            var22 = var19 == var21;
            var20 = undefined;
            if(var22) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var20 = var21.priceString;
case 135:
            var21 = var19 != var20;
            var19 = '$...';
            if(!var21) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            var19 = var20;
case 137:
            var15['price'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 133:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();