// app/modules/user_settings/premium/native/PremiumFeaturesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var18 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var6;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var22.priceString;
case 2:
            var14 = var10 != var6;
            var13 = '$...';
            var7 = var13;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6;
case 4:
            var6 = var2.interval;
            var2 = var2.intervalCount;
            var9 = var8.bind(var9)(var7, var6, var2);
            if(!(var10 != var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var10 == var11)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(!(var10 != var16)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(var10 == var15)) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            if(!(var10 != var27)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot11;
            var2 = var27.sku_id;
            var2 = var6[var2];
            if(!(var3 !== var2)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
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
            var8 = {'variant': 'text-md/bold', 'color': 'always-white'};
            var20 = var10 == var22;
            var23 = undefined;
            if(var20) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var23 = var22.priceString;
case 15:
            var25 = var10 != var23;
            var20 = var13;
            if(!var25) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var20 = var23;
case 17:
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
            var14 = {'variant': 'text-md/normal', 'color': 'always-white'};
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
            _fun0001_ip = 19; continue _fun0001;
case 14:
            var8 = _closure1_slot17;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var6 = 16;
            var6 = var23[var6];
            var6 = var24.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/normal', 'color': 'always-white'};
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
            if(var28) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var26 = var27.interval;
case 20:
            var23['intervalType'] = var26;
            var28 = var10 == var27;
            var26 = undefined;
            if(var28) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var26 = var27.interval_count;
case 22:
            var23['intervalCount'] = var26;
            var23 = var24.bind(var25)(var23);
            var14['trialPeriod'] = var23;
            var24 = var10 == var22;
            var23 = undefined;
            if(var24) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var23 = var22.priceString;
case 24:
            var24 = var10 != var23;
            var22 = var13;
            if(!var24) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var22 = var23;
case 26:
            var14['price'] = var22;
            var14 = var20.bind(var21)(var19, var14);
            var6['children'] = var14;
            var2 = var8.bind(var4)(var7, var6);
case 19:
            return var2;
case 11:
            var6 = var15.planIdFromItems;
            var2 = _closure1_slot16;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            if(!(var6 === var2)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = _closure1_slot23;
            var2 = var2.bind(var4)(var15, var3);
            if(!var2) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            if(!(var10 != var15)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var2 = var15.hasActiveTrial;
            if(var2) { _fun0001_ip = 28; continue _fun0001 }
case 31:
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
            if(!(var10 == var8)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var8 = _closure1_slot8;
case 33:
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
            _fun0001_ip = 35; continue _fun0001;
case 28:
            var2 = var15.hasAnyPremiumGroup;
            if(!var2) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var3 = var15.metadata;
            var6 = var10 == var3;
            var2 = undefined;
            if(var6) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var2 = var3.active_discount_expires_at;
case 38:
            if(!(var10 == var2)) { _fun0001_ip = 40; continue _fun0001 }
case 36:
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
            if(!(var10 == var14)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var14 = _closure1_slot10;
case 41:
            var2['percent'] = var14;
            var14 = var16.duration;
            if(!(var10 == var14)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var14 = _closure1_slot9;
case 43:
            var2['numMonths'] = var14;
            var2['regularPrice'] = var9;
            var7 = var6.bind(var8)(var3, var2);
            _fun0001_ip = 35; continue _fun0001;
case 40:
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
            var3 = var2.t3TzwQ;
            var2 = {};
            var17 = var16.percentage;
            var18 = var10 != var17;
            var16 = 0;
            if(!var18) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var16 = var17;
case 45:
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
            if(!var15) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var13 = var14;
case 47:
            var2['regularPrice'] = var13;
            var7 = var6.bind(var8)(var3, var2);
case 35:
            var6 = _closure1_slot17;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var8 = var5.discountPriceText;
            var2['style'] = var8;
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 8:
            var3 = _closure1_slot17;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 16;
            var1 = var13[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'always-white'};
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
            if(var13) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var11 = var12.userUsageLimit;
case 49:
            var12 = var10 != var11;
            var10 = 1;
            if(!var12) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var10 = var11;
case 51:
            var5['numMonths'] = var10;
            var5['regularPrice'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = function isSamePremiumType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var4 = var2.planIdFromItems;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 55; continue _fun0002 }
case 56:
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
case 55:
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/premium/native/PremiumFeaturesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var30 = var1.premiumType;
            var _closure2_slot0 = var30;
            var8 = var1.style;
            var2 = var1.applicationId;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot2 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot3 = var2;
            var11 = var1.hideButton;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var11 = false;
case 57:
            var15 = var1.forFractionalPremium;
            if(!(var15 === var4)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var15 = false;
case 59:
            var14 = var1.hidePrice;
            if(!(var14 === var4)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var14 = false;
case 61:
            var12 = var1.isPremiumGroup;
            if(!(var12 === var4)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var12 = false;
case 63:
            var6 = var1.premiumGroupRole;
            if(!(var6 === var4)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var6 = var1.UNSPECIFIED;
case 65:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot20;
            var17 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 21;
            var2 = var5[var1];
            var9 = var7.bind(var4)(var2);
            var3 = _closure1_slot19;
            var2 = var3.has;
            var3 = var2.bind(var3)(var30);
            var2 = 'only Tier 0 and Tier 2 are supported';
            var2 = var9.bind(var4)(var3, var2);
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.usePremiumTrialOffer;
            var36 = var2.bind(var9)();
            var2 = 23;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.usePremiumDiscountOffer;
            var26 = var2.bind(var9)();
            var2 = 24;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useActiveDiscountInfo;
            var33 = var2.bind(var9)();
            var2 = 25;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var29 = var2.bind(var4)();
            var2 = 26;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var3)();
            var19 = null;
            var3 = var19 == var36;
            var32 = undefined;
            if(var3) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var32 = var36.subscription_trial;
case 67:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.formatIntervalDuration;
            var3 = {};
            var10 = var19 == var32;
            var9 = undefined;
            if(var10) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var9 = var32.interval;
case 69:
            var3['intervalType'] = var9;
            var10 = var19 == var32;
            var9 = undefined;
            if(var10) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var9 = var32.interval_count;
case 71:
            var3['intervalCount'] = var9;
            var20 = var5.bind(var7)(var3);
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var22 = 17;
            var3 = var10[var22];
            var3 = var16.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.string;
            var3 = var10[var22];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.J61px0;
            var28 = var5.bind(var7)(var3);
            var9 = var30 === var2;
            var7 = _closure1_slot1;
            var2 = 27;
            var2 = var10[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.analyticsLocations;
            _closure2_slot4 = var2;
            var2 = 28;
            var3 = var10[var2];
            var21 = var16.bind(var4)(var3);
            var18 = var21.useStateFromStoresArray;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
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
            var18 = var18.bind(var21)(var5, var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var18, var3);
            var3 = 0;
            var31 = var5[var3];
            var3 = 1;
            var3 = var5[var3];
            var5 = _closure1_slot13;
            var5 = var5[var30];
            _closure2_slot5 = var5;
            var5 = var10[var2];
            var24 = var16.bind(var4)(var5);
            var21 = var24.useStateFromStores;
            var5 = _closure1_slot6;
            var18 = new Array(1);
            var18[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot5;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var21.bind(var24)(var18, var5);
            var2 = var10[var2];
            var21 = var16.bind(var4)(var2);
            var18 = var21.useStateFromStores;
            var2 = _closure1_slot5;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var25 = var18.bind(var21)(var16, var2);
            var2 = 29;
            var2 = var10[var2];
            var2 = var7.bind(var4)(var2);
            var16 = var2.bind(var4)(var30, var15, var6);
            var2 = var19 != var31;
            if(!var2) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var2 = var31.isBoostOnly;
case 73:
            if(!var2) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 30;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isMetaQuest;
            var2 = var6.bind(var7)();
case 75:
            var24 = var19 != var31;
            if(!var24) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var24 = var5;
case 77:
            if(!var24) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var24 = var3;
case 79:
            if(!var24) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var24 = !var2;
case 81:
            var2 = var19 != var31;
            var3 = null;
            if(!var2) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var2 = var31.planIdFromItems;
            var3 = null;
            if(!(var4 !== var2)) { _fun0003_ip = 83; continue _fun0003 }
case 85:
            var5 = _closure1_slot15;
            var2 = var31.planIdFromItems;
            var3 = var5[var2];
case 83:
            var5 = var19 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var2 = var3.interval;
case 86:
            if(!(var19 == var2)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var3 = _closure1_slot14;
            var2 = var3.MONTH;
case 88:
            _closure2_slot6 = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 31;
            var5 = var3[var5];
            var7 = var2.bind(var4)(var5);
            var6 = var7.getPremiumBundleWithPredicate;
            var5 = function(arg1) {
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
                    if(!var1) { _fun0004_ip = 90; continue _fun0004 }
case 91:
                    var1 = !var6;
case 90:
                    if(!var1) { _fun0004_ip = 92; continue _fun0004 }
case 93:
                    var1 = var2 === var5;
case 92:
                    if(!var1) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 94:
                    if(!var1) { _fun0004_ip = 62; continue _fun0004 }
case 96:
                    var2 = _closure2_slot6;
                    var1 = var3 === var2;
case 62:
                    return var1;
                }
            };
            var35 = var6.bind(var7)(var5);
            _closure2_slot7 = var35;
            var5 = _closure1_slot1;
            var1 = var3[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var19 != var35;
            var1 = 'could not find a premium item';
            var1 = var6.bind(var4)(var5, var1);
            var1 = 32;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useDiscountedPremiumProductInfo;
            var1 = new Array(1);
            var1[0] = var35;
            var1 = var2.bind(var3)(var26, var1);
            var34 = var1.discountedPriceString;
            var27 = var19 != var26;
            if(!var27) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var27 = var19 != var34;
case 97:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var35.basePlanId;
            var21 = var2.bind(var4)(var1);
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var17.containerWrapper;
            var1['style'] = var5;
            var18 = _closure1_slot17;
            var6 = _closure1_slot0;
            var5 = 33;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PremiumPill;
            var5 = {};
            var37 = var17.pill;
            var5['style'] = var37;
            var5['discountOffer'] = var26;
            var37 = var19 != var33;
            var5['isActiveDiscount'] = var37;
            var5['shouldShowDiscountUpsell'] = var27;
            var5['premiumType'] = var30;
            var5['trialOffer'] = var36;
            var6 = var18.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 34;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['premiumType'] = var30;
            var6['style'] = var8;
            var8 = {};
            var10 = var17.card;
            var8['style'] = var10;
            var10 = {};
            var36 = var17.logoContainer;
            var10['style'] = var36;
            var39 = _closure1_slot17;
            var38 = _closure1_slot1;
            var40 = _closure1_slot2;
            if(var12) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var36 = 36;
            var36 = var40[var36];
            var37 = var38.bind(var4)(var36);
            var36 = {};
            var36['premiumType'] = var30;
            var41 = var17.logo;
            var36['style'] = var41;
            var36 = var39.bind(var4)(var37, var36);
            _fun0003_ip = 101; continue _fun0003;
case 99:
            var37 = 35;
            var37 = var40[var37];
            var38 = var38.bind(var4)(var37);
            var37 = {'width': 185, 'height': 20, 'alwaysWhite': true};
            var36 = var39.bind(var4)(var38, var37);
case 101:
            var10['children'] = var36;
            var18 = var18.bind(var4)(var2, var10);
            var10 = new Array(5);
            var10[0] = var18;
            var37 = _closure1_slot17;
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var18 = 37;
            var18 = var38[var18];
            var36 = var36.bind(var4)(var18);
            var18 = {};
            var18['premiumType'] = var30;
            var18 = var37.bind(var4)(var36, var18);
            var10[1] = var18;
            if(!var12) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var12 = var19 == var33;
case 102:
            var12 = !var12;
            if(!var12) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var12 = !var15;
case 104:
            if(!var12) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var12 = !var14;
case 106:
            if(!var12) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var18 = _closure1_slot17;
            var15 = _closure1_slot22;
            var14 = {};
            var14['premiumItem'] = var35;
            var14['discountedPriceString'] = var34;
            var14['discountOffer'] = var26;
            var14['activeDiscountInfo'] = var33;
            var14['subscriptionTrial'] = var32;
            var14['premiumType'] = var30;
            var14['premiumSubscription'] = var31;
            var14['fractionalPremiumInfo'] = var29;
            var12 = var18.bind(var4)(var15, var14);
case 108:
            var10[2] = var12;
            var15 = _closure1_slot17;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 38;
            var12 = var18[var12];
            var14 = var14.bind(var4)(var12);
            var12 = {};
            var18 = var17.featureList;
            var12['style'] = var18;
            var12['features'] = var16;
            var16 = var17.featureIcon;
            var12['iconStyle'] = var16;
            var16 = var17.featureLabel;
            var12['labelStyle'] = var16;
            var16 = var17.featureRow;
            var12['rowStyle'] = var16;
            var12 = var15.bind(var4)(var14, var12);
            var10[3] = var12;
            var11 = !var11;
            if(!var11) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var15 = _closure1_slot17;
            var14 = _closure1_slot4;
            var12 = {};
            var16 = var17.button;
            var12['style'] = var16;
            var18 = _closure1_slot0;
            var29 = _closure1_slot2;
            var16 = 39;
            var16 = var29[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Button;
            var16 = {'text': null, 'icon': null, 'iconPosition': null, 'variant': 'experimental_premium-secondary', 'size': 'md', 'grow': true};
            if(var9) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            if(var27) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            if(!var24) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var29 = _closure1_slot23;
            var29 = var29.bind(var4)(var31, var30);
            if(var29) { _fun0003_ip = 118; continue _fun0003 }
case 116:
            var29 = _closure1_slot12;
            var29 = var29.TIER_0;
            if(!(var30 !== var29)) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var32 = _closure1_slot0;
            var29 = _closure1_slot2;
            var30 = var29[var22];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var29[var22];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29["8x0jKT"];
            var29 = var30.bind(var31)(var29);
            _fun0003_ip = 121; continue _fun0003;
case 119:
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var31 = var30[var22];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var22];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.cM8bbx;
            var29 = var31.bind(var32)(var30);
case 121:
            _fun0003_ip = 122; continue _fun0003;
case 118:
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var31 = var30[var22];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var22];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.j+wlhy;
            var29 = var31.bind(var32)(var30);
case 122:
            _fun0003_ip = 123; continue _fun0003;
case 114:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var32 = var30[var22];
            var32 = var31.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var30 = var30[var22];
            var30 = var31.bind(var4)(var30);
            var30 = var30.t;
            var31 = var30.bkQ4bH;
            var30 = {};
            var34 = var26.discount;
            var34 = var34.amount;
            var30['percent'] = var34;
            var29 = var32.bind(var33)(var31, var30);
case 123:
            var28 = var29;
case 112:
            var16['text'] = var28;
            if(!(var19 == var26)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var26 = undefined;
            if(!var9) { _fun0003_ip = 126; continue _fun0003 }
case 124:
            var30 = _closure1_slot17;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 40;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.NitroWheelIcon;
            var28 = {};
            var31 = var17.buttonIcon;
            var28['style'] = var31;
            var32 = _closure1_slot1;
            var31 = 11;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.colors;
            var31 = var31.BACKGROUND_BRAND;
            var28['color'] = var31;
            var31 = 'sm';
            var28['size'] = var31;
            var26 = var30.bind(var4)(var29, var28);
case 126:
            var16['icon'] = var26;
            var26 = undefined;
            if(!var27) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var26 = 'start';
case 127:
            var16['iconPosition'] = var26;
            var25 = !var25;
            var16['shiny'] = var25;
            var16['disabled'] = var24;
            var23 = function onPress() {
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
            var16['onPress'] = var23;
            var16 = var15.bind(var4)(var18, var16);
            var12['children'] = var16;
            var11 = var15.bind(var4)(var14, var12);
case 110:
            var10[4] = var11;
            var8['children'] = var10;
            var10 = var3.bind(var4)(var2, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0003_ip = 129; continue _fun0003 }
case 130:
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
            if(var22) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var20 = var21.priceString;
case 131:
            var21 = var19 != var20;
            var19 = '$...';
            if(!var21) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var19 = var20;
case 133:
            var15['price'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 129:
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