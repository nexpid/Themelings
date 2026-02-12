// app/modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var9 = var6[var8];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var9);
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var18 = 4;
    var8 = var6[var18];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var16 = 7;
    var8 = var6[var16];
    var8 = var5.bind(var1)(var8);
    var11 = var8.AnalyticsPages;
    var10 = var8.AnalyticsSections;
    var9 = var8.AnalyticsObjectTypes;
    var17 = 8;
    var8 = var6[var17];
    var8 = var5.bind(var1)(var8);
    var12 = var8.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot9 = var12;
    var12 = var8.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot10 = var12;
    var12 = var8.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot11 = var12;
    var12 = var8.PremiumTypes;
    var _closure1_slot12 = var12;
    var13 = var8.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot13 = var13;
    var13 = var8.SubscriptionIntervalTypes;
    var _closure1_slot14 = var13;
    var8 = var8.SubscriptionPlanInfo;
    var _closure1_slot15 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var15 = var8.Fonts;
    var8 = 10;
    var8 = var6[var8];
    var13 = var5.bind(var1)(var8);
    var8 = var13.jsx;
    var _closure1_slot16 = var8;
    var13 = var13.jsxs;
    var _closure1_slot17 = var13;
    var13 = var4.Set;
    var14 = var12.TIER_0;
    var4 = new Array(2);
    var4[0] = var14;
    var12 = var12.TIER_2;
    var4[1] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var26 = var12;
    var25 = var4;
    var4 = new var26[var13](var25, var24);
    var4 = var4 instanceof Object ? var4 : var12;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var12 = var13.createStyles;
    var4 = {};
    var14 = {};
    var19 = 'relative';
    var14['position'] = var19;
    var4['containerWrapper'] = var14;
    var14 = {'display': 'flex', 'justifyContent': 'flex-start', 'width': '100%', 'padding': 24, 'backgroundColor': 'transparent', 'overflow': 'hidden'};
    var19 = 12;
    var20 = var6[var19];
    var20 = var7.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.lg;
    var14['borderRadius'] = var20;
    var4['card'] = var14;
    var14 = {};
    var14['marginBottom'] = var17;
    var4['logoContainer'] = var14;
    var14 = {};
    var14['marginRight'] = var18;
    var4['logo'] = var14;
    var14 = {'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'maxWidth': '50%'};
    var4['priceContainer'] = var14;
    var14 = {'maxWidth': '62%', 'includeFontPadding': true};
    var4['discountPriceText'] = var14;
    var14 = {};
    var14['marginTop'] = var17;
    var4['featureList'] = var14;
    var14 = {};
    var17 = 13;
    var18 = var6[var17];
    var22 = var7.bind(var1)(var18);
    var21 = var15.PRIMARY_MEDIUM;
    var18 = var6[var19];
    var18 = var7.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var20 = var18.WHITE;
    var18 = 14;
    var24 = var22.bind(var1)(var21, var20, var18);
    var25 = var14;
    var18 = copyDataProperties(var25, var24);
    var20 = -8;
    var18 = 'marginLeft';
    var14[var18] = var20;
    var4['featureLabel'] = var14;
    var14 = {};
    var14['paddingVertical'] = var16;
    var4['featureRow'] = var14;
    var16 = 16;
    var14 = {'height': 16, 'width': 16};
    var4['featureIcon'] = var14;
    var14 = {};
    var14['marginTop'] = var16;
    var4['button'] = var14;
    var16 = 'center';
    var14 = {'paddingHorizontal': 24, 'marginTop': 4294967284, 'paddingBottom': 16, 'alignItems': 'center', 'bottom': 0};
    var4['trialSubTextContainer'] = var14;
    var14 = {};
    var17 = var6[var17];
    var18 = var7.bind(var1)(var17);
    var17 = var15.DISPLAY_MEDIUM;
    var15 = var6[var19];
    var15 = var7.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.WHITE;
    var24 = var18.bind(var1)(var17, var15, var19);
    var25 = var14;
    var15 = copyDataProperties(var25, var24);
    var15 = 'textAlign';
    var14[var15] = var16;
    var4['trialSubText'] = var14;
    var14 = {'position': 'absolute', 'top': 4294967286, 'maxWidth': 240, 'alignSelf': 'center', 'zIndex': 2};
    var4['pill'] = var14;
    var14 = {'marginRight': 4, 'alignSelf': 'center', 'marginTop': 1};
    var4['buttonIcon'] = var14;
    var4 = var12.bind(var13)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var11 = var11.USER_SETTINGS;
    var4['page'] = var11;
    var10 = var10.SETTINGS_PREMIUM;
    var4['section'] = var10;
    var9 = var9.BUY;
    var4['objectType'] = var9;
    var _closure1_slot20 = var4;
    var4 = function PriceText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.premiumItem;
            var _closure2_slot0 = var1;
            var13 = var2.discountedPriceString;
            var12 = var2.discountOffer;
            var17 = var2.activeDiscountInfo;
            var23 = var2.subscriptionTrial;
            var3 = var2.premiumType;
            var6 = _closure1_slot19;
            var5 = undefined;
            var6 = var6.bind(var5)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 14;
            var9 = var8[var9];
            var11 = var7.bind(var5)(var9);
            var10 = var11.useStateFromStores;
            var14 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var14;
            var4 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var10.bind(var11)(var9, var4);
            var9 = _closure1_slot1;
            var21 = 15;
            var4 = var8[var21];
            var10 = var9.bind(var5)(var4);
            var9 = var10.getIntervalStringAsNoun;
            var4 = var1.interval;
            var20 = var9.bind(var10)(var4);
            var4 = _closure1_slot15;
            var1 = var1.basePlanId;
            var1 = var4[var1];
            var4 = 16;
            var4 = var8[var4];
            var9 = var7.bind(var5)(var4);
            var8 = var9.formatRate;
            var11 = null;
            var7 = var11 == var19;
            var4 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var19.priceString;
case 2:
            var10 = var11 != var4;
            var16 = '$...';
            var7 = var16;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var4;
case 4:
            var4 = var1.interval;
            var1 = var1.intervalCount;
            var10 = var8.bind(var9)(var7, var4, var1);
            if(!(var11 != var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var11 == var12)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(!(var11 == var17)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(var11 != var23)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot11;
            var1 = var23.sku_id;
            var1 = var4[var1];
            if(!(var3 !== var1)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var1 = {};
            var7 = true;
            var1['accessible'] = var7;
            var7 = var6.priceContainer;
            var1['style'] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var15 = 17;
            var7 = var7[var15];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/bold', 'color': 'always-white'};
            var14 = var11 == var19;
            var18 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var18 = var19.priceString;
case 14:
            var22 = var11 != var18;
            var14 = var16;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var18;
case 16:
            var7['children'] = var14;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var14 = _closure1_slot16;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var15 = global;
            var15 = var15.HermesInternal;
            var18 = var15.concat;
            var15 = ' / ';
            var15 = var18.bind(var15)(var20);
            var8['children'] = var15;
            var8 = var14.bind(var5)(var9, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 18; continue _fun0001;
case 13:
            var7 = _closure1_slot16;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 17;
            var3 = var18[var3];
            var3 = var20.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var8 = var6.discountPriceText;
            var3['style'] = var8;
            var8 = 18;
            var9 = var18[var8];
            var9 = var20.bind(var5)(var9);
            var15 = var9.intl;
            var14 = var15.format;
            var8 = var18[var8];
            var8 = var20.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.xOX9/9;
            var8 = {};
            var18 = var18[var21];
            var21 = var20.bind(var5)(var18);
            var20 = var21.formatIntervalDuration;
            var18 = {};
            var24 = var11 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var22 = var23.interval;
case 19:
            var18['intervalType'] = var22;
            var24 = var11 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var22 = var23.interval_count;
case 21:
            var18['intervalCount'] = var22;
            var18 = var20.bind(var21)(var18);
            var8['trialPeriod'] = var18;
            var20 = var11 == var19;
            var18 = undefined;
            if(var20) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var18 = var19.priceString;
case 23:
            var19 = var11 != var18;
            if(!var19) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var16 = var18;
case 25:
            var8['price'] = var16;
            var8 = var14.bind(var15)(var9, var8);
            var3['children'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 18:
            _fun0001_ip = 27; continue _fun0001;
case 9:
            var7 = _closure1_slot16;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 17;
            var3 = var16[var3];
            var3 = var9.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var8 = var6.discountPriceText;
            var3['style'] = var8;
            var8 = 18;
            var14 = var16[var8];
            var14 = var9.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var8 = var16[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.3ZiutU;
            var8 = {};
            var18 = var11 == var17;
            var16 = undefined;
            if(var18) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var16 = var17.percentage;
case 28:
            if(!(var11 == var16)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var16 = _closure1_slot10;
case 30:
            var8['percent'] = var16;
            var18 = var11 == var17;
            var16 = undefined;
            if(var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var16 = var17.duration;
case 32:
            if(!(var11 == var16)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var16 = _closure1_slot9;
case 34:
            var8['numMonths'] = var16;
            var8['regularPrice'] = var10;
            var8 = var14.bind(var15)(var9, var8);
            var3['children'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 27:
            _fun0001_ip = 36; continue _fun0001;
case 8:
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 17;
            var2 = var14[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var6 = var6.discountPriceText;
            var2['style'] = var6;
            var6 = 18;
            var8 = var14[var6];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var14[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.sJTwHQ;
            var6 = {};
            var6['discountedPrice'] = var13;
            var13 = var12.discount;
            var14 = var11 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = var13.user_usage_limit;
case 37:
            var13 = var11 != var12;
            var11 = 1;
            if(!var13) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = var12;
case 39:
            var6['numMonths'] = var11;
            var6['regularPrice'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var4 = 19;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {'width': 185, 'height': 20, 'alwaysWhite': true};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot22 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(!(var11 === var4)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var11 = false;
case 41:
            var15 = var1.forFractionalPremium;
            if(!(var15 === var4)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var15 = false;
case 43:
            var14 = var1.hidePrice;
            if(!(var14 === var4)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var14 = false;
case 45:
            var12 = var1.isPremiumGroup;
            if(!(var12 === var4)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var12 = false;
case 47:
            var10 = var1.premiumGroupRole;
            if(!(var10 === var4)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var10 = var1.UNSPECIFIED;
case 49:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot19;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 21;
            var1 = var5[var2];
            var6 = var3.bind(var4)(var1);
            var3 = _closure1_slot18;
            var1 = var3.has;
            var3 = var1.bind(var3)(var30);
            var1 = 'only Tier 0 and Tier 2 are supported';
            var1 = var6.bind(var4)(var3, var1);
            var3 = _closure1_slot0;
            var1 = 22;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.usePremiumTrialOffer;
            var7 = var1.bind(var6)();
            var1 = 23;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.usePremiumDiscountOffer;
            var26 = var1.bind(var6)();
            var1 = 24;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useActiveDiscountInfo;
            var32 = var1.bind(var6)();
            var1 = 25;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.usePremiumTrialOfferPremiumType;
            var1 = var1.bind(var3)();
            var19 = null;
            var3 = var19 == var7;
            var29 = undefined;
            if(var3) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var29 = var7.subscription_trial;
case 51:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var35 = 15;
            var3 = var3[var35];
            var6 = var5.bind(var4)(var3);
            var5 = var6.formatIntervalDuration;
            var3 = {};
            var16 = var19 == var29;
            var9 = undefined;
            if(var16) { _fun0002_ip = 53; continue _fun0002 }
case 17:
            var9 = var29.interval;
case 53:
            var3['intervalType'] = var9;
            var16 = var19 == var29;
            var9 = undefined;
            if(var16) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var9 = var29.interval_count;
case 54:
            var3['intervalCount'] = var9;
            var20 = var5.bind(var6)(var3);
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var22 = 18;
            var3 = var18[var22];
            var3 = var21.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.string;
            var3 = var18[var22];
            var3 = var21.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.J61px0;
            var28 = var5.bind(var6)(var3);
            var9 = var30 === var1;
            var16 = _closure1_slot1;
            var1 = 26;
            var1 = var18[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            _closure2_slot4 = var1;
            var1 = 14;
            var3 = var18[var1];
            var24 = var21.bind(var4)(var3);
            var6 = var24.useStateFromStoresArray;
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
            var6 = var6.bind(var24)(var5, var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var31 = var5[var3];
            var3 = 1;
            var3 = var5[var3];
            var5 = _closure1_slot13;
            var5 = var5[var30];
            _closure2_slot5 = var5;
            var5 = var18[var1];
            var25 = var21.bind(var4)(var5);
            var24 = var25.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot5;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var24.bind(var25)(var6, var5);
            var6 = var18[var1];
            var25 = var21.bind(var4)(var6);
            var24 = var25.useStateFromStores;
            var6 = _closure1_slot5;
            var21 = new Array(1);
            var21[0] = var6;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var25 = var24.bind(var25)(var21, var6);
            var6 = 27;
            var6 = var18[var6];
            var6 = var16.bind(var4)(var6);
            var16 = var6.bind(var4)(var30, var15, var10);
            var24 = var19 != var31;
            if(!var24) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var24 = var5;
case 56:
            if(!var24) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var24 = var3;
case 58:
            var3 = var19 != var31;
            var5 = null;
            if(!var3) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var3 = var31.planIdFromItems;
            var5 = null;
            if(!(var4 !== var3)) { _fun0002_ip = 60; continue _fun0002 }
case 62:
            var6 = _closure1_slot15;
            var3 = var31.planIdFromItems;
            var5 = var6[var3];
case 60:
            var6 = var19 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var3 = var5.interval;
case 63:
            if(!(var19 == var3)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var5 = _closure1_slot14;
            var3 = var5.MONTH;
case 65:
            _closure2_slot6 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 28;
            var6 = var5[var6];
            var18 = var3.bind(var4)(var6);
            var10 = var18.getPremiumBundleWithPredicate;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                    if(!var1) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var1 = !var6;
case 67:
                    if(!var1) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var1 = var2 === var5;
case 69:
                    if(!var1) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 71:
                    if(!var1) { _fun0003_ip = 46; continue _fun0003 }
case 73:
                    var2 = _closure2_slot6;
                    var1 = var3 === var2;
case 46:
                    return var1;
                }
            };
            var34 = var10.bind(var18)(var6);
            _closure2_slot7 = var34;
            var6 = _closure1_slot1;
            var2 = var5[var2];
            var10 = var6.bind(var4)(var2);
            var6 = var19 != var34;
            var2 = 'could not find a premium item';
            var2 = var10.bind(var4)(var6, var2);
            var2 = 29;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useDiscountedPremiumProductInfo;
            var2 = new Array(1);
            var2[0] = var34;
            var2 = var3.bind(var5)(var26, var2);
            var33 = var2.discountedPriceString;
            var27 = var19 != var26;
            if(!var27) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var27 = var19 != var33;
case 74:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var1];
            var5 = var6.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getProduct;
                var1 = _closure2_slot7;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var17.containerWrapper;
            var1['style'] = var5;
            var18 = _closure1_slot16;
            var5 = 30;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PremiumPill;
            var5 = {};
            var36 = var17.pill;
            var5['style'] = var36;
            var5['discountOffer'] = var26;
            var36 = var19 != var32;
            var5['isActiveDiscount'] = var36;
            var5['shouldShowDiscountUpsell'] = var27;
            var5['premiumType'] = var30;
            var5['trialOffer'] = var7;
            var6 = var18.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot1;
            var6 = 31;
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
            if(var12) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var38 = _closure1_slot16;
            var37 = _closure1_slot1;
            var39 = _closure1_slot2;
            var36 = 32;
            var36 = var39[var36];
            var37 = var37.bind(var4)(var36);
            var36 = {};
            var36['premiumType'] = var30;
            var39 = var17.logo;
            var36['style'] = var39;
            var36 = var38.bind(var4)(var37, var36);
            _fun0002_ip = 78; continue _fun0002;
case 76:
            var36 = _closure1_slot22;
case 78:
            var10['children'] = var36;
            var18 = var18.bind(var4)(var2, var10);
            var10 = new Array(5);
            var10[0] = var18;
            var37 = _closure1_slot16;
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var18 = 33;
            var18 = var38[var18];
            var36 = var36.bind(var4)(var18);
            var18 = {};
            var18['premiumType'] = var30;
            var18 = var37.bind(var4)(var36, var18);
            var10[1] = var18;
            var12 = !var12;
            if(!var12) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var12 = !var15;
case 79:
            if(!var12) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var12 = !var14;
case 81:
            if(!var12) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var18 = _closure1_slot16;
            var15 = _closure1_slot21;
            var14 = {};
            var14['premiumItem'] = var34;
            var14['discountedPriceString'] = var33;
            var14['discountOffer'] = var26;
            var14['activeDiscountInfo'] = var32;
            var14['subscriptionTrial'] = var29;
            var14['premiumType'] = var30;
            var12 = var18.bind(var4)(var15, var14);
case 83:
            var10[2] = var12;
            var15 = _closure1_slot16;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 34;
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
            if(!var11) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var15 = _closure1_slot16;
            var14 = _closure1_slot4;
            var12 = {};
            var16 = var17.button;
            var12['style'] = var16;
            var18 = _closure1_slot0;
            var29 = _closure1_slot2;
            var16 = 35;
            var16 = var29[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Button;
            var16 = {'text': null, 'icon': null, 'iconPosition': null, 'variant': 'experimental_premium-secondary', 'size': 'md', 'grow': true};
            if(var9) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            if(var27) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            if(!var24) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var32 = var19 == var31;
            var29 = false;
            if(var32) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var34 = var31.planIdFromItems;
            var31 = var19 != var34;
            if(!var31) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var35];
            var33 = var33.bind(var4)(var32);
            var32 = var33.getPremiumType;
            var32 = var32.bind(var33)(var34);
            var31 = var32 === var30;
case 95:
            var29 = var31;
case 93:
            if(var29) { _fun0002_ip = 97; continue _fun0002 }
case 91:
            var29 = _closure1_slot12;
            var29 = var29.TIER_0;
            if(!(var30 !== var29)) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var32 = _closure1_slot0;
            var29 = _closure1_slot2;
            var30 = var29[var22];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var29[var22];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.8x0jKT;
            var29 = var30.bind(var31)(var29);
            _fun0002_ip = 100; continue _fun0002;
case 98:
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
case 100:
            _fun0002_ip = 101; continue _fun0002;
case 97:
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
case 101:
            _fun0002_ip = 102; continue _fun0002;
case 89:
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
case 102:
            var28 = var29;
case 87:
            var16['text'] = var28;
            if(!(var19 == var26)) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var26 = undefined;
            if(!var9) { _fun0002_ip = 105; continue _fun0002 }
case 103:
            var30 = _closure1_slot16;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 36;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.NitroWheelIcon;
            var28 = {};
            var31 = var17.buttonIcon;
            var28['style'] = var31;
            var32 = _closure1_slot1;
            var31 = 12;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.unsafe_rawColors;
            var31 = var31.BRAND_500;
            var28['color'] = var31;
            var31 = 'sm';
            var28['size'] = var31;
            var26 = var30.bind(var4)(var29, var28);
case 105:
            var16['icon'] = var26;
            var26 = undefined;
            if(!var27) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            var26 = 'start';
case 106:
            var16['iconPosition'] = var26;
            var25 = !var25;
            var16['shiny'] = var25;
            var16['disabled'] = var24;
            var23 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 37;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = _closure1_slot20;
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
case 85:
            var10[4] = var11;
            var8['children'] = var10;
            var10 = var3.bind(var4)(var2, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var12 = _closure1_slot16;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = true;
            var10['accessible'] = var14;
            var14 = var17.trialSubTextContainer;
            var10['style'] = var14;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 17;
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
            if(var22) { _fun0002_ip = 110; continue _fun0002 }
case 111:
            var20 = var21.priceString;
case 110:
            var21 = var19 != var20;
            var19 = '$...';
            if(!var21) { _fun0002_ip = 112; continue _fun0002 }
case 113:
            var19 = var20;
case 112:
            var15['price'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 108:
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