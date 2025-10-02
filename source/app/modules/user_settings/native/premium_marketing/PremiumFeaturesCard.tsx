// app/modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
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
    var7 = var17.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var16 = 4;
    var7 = var6[var16];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticsPages;
    var8 = var7.AnalyticsSections;
    var7 = var7.AnalyticsObjectTypes;
    var15 = 7;
    var10 = var6[var15];
    var11 = var5.bind(var1)(var10);
    var10 = var11.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot9 = var10;
    var10 = var11.PremiumTypes;
    var _closure1_slot10 = var10;
    var12 = var11.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot11 = var12;
    var12 = var11.SubscriptionIntervalTypes;
    var _closure1_slot12 = var12;
    var11 = var11.SubscriptionPlanInfo;
    var _closure1_slot13 = var11;
    var18 = 8;
    var11 = var6[var18];
    var11 = var5.bind(var1)(var11);
    var14 = var11.Fonts;
    var11 = 9;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var12 = var11.jsx;
    var _closure1_slot14 = var12;
    var11 = var11.jsxs;
    var _closure1_slot15 = var11;
    var11 = var4.Set;
    var12 = var10.TIER_0;
    var4 = new Array(2);
    var4[0] = var12;
    var10 = var10.TIER_2;
    var4[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var26 = var10;
    var25 = var4;
    var4 = new var26[var11](var25, var24);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {'display': 'flex', 'justifyContent': 'flex-start', 'width': '100%', 'padding': 24, 'backgroundColor': 'transparent', 'overflow': 'hidden'};
    var13 = 11;
    var19 = var6[var13];
    var19 = var17.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var12['borderRadius'] = var19;
    var4['card'] = var12;
    var12 = {};
    var12['marginBottom'] = var18;
    var4['logoContainer'] = var12;
    var12 = {};
    var12['marginRight'] = var16;
    var4['logo'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['priceContainer'] = var12;
    var12 = {};
    var16 = 12;
    var19 = var6[var16];
    var22 = var17.bind(var1)(var19);
    var21 = var14.DISPLAY_MEDIUM;
    var19 = var6[var13];
    var19 = var17.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var20 = var19.WHITE_500;
    var19 = 18;
    var24 = var22.bind(var1)(var21, var20, var19);
    var25 = var12;
    var19 = copyDataProperties(var25, var24);
    var4['priceText'] = var12;
    var12 = {};
    var19 = '700';
    var12['fontWeight'] = var19;
    var4['price'] = var12;
    var12 = {};
    var19 = '400';
    var12['fontWeight'] = var19;
    var4['interval'] = var12;
    var12 = {};
    var12['marginTop'] = var18;
    var4['featureList'] = var12;
    var12 = {};
    var18 = var6[var16];
    var21 = var17.bind(var1)(var18);
    var20 = var14.PRIMARY_MEDIUM;
    var18 = var6[var13];
    var18 = var17.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var19 = var18.WHITE_500;
    var18 = 14;
    var24 = var21.bind(var1)(var20, var19, var18);
    var25 = var12;
    var18 = copyDataProperties(var25, var24);
    var19 = -8;
    var18 = 'marginLeft';
    var12[var18] = var19;
    var4['featureLabel'] = var12;
    var12 = {};
    var12['paddingVertical'] = var15;
    var4['featureRow'] = var12;
    var20 = 16;
    var12 = {'height': 16, 'width': 16};
    var4['featureIcon'] = var12;
    var12 = {'height': 40, 'marginTop': 16};
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12['borderRadius'] = var15;
    var4['button'] = var12;
    var12 = {};
    var15 = var6[var16];
    var19 = var17.bind(var1)(var15);
    var18 = var14.PRIMARY_SEMIBOLD;
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BRAND_500;
    var24 = var19.bind(var1)(var18, var15, var20);
    var25 = var12;
    var15 = copyDataProperties(var25, var24);
    var4['buttonText'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['freeTrialContainer'] = var12;
    var12 = {'marginTop': 8, 'paddingBottom': 2, 'paddingHorizontal': 8, 'borderRadius': null, 'backgroundColor': null, 'maxWidth': 200};
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12['borderRadius'] = var15;
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var12['backgroundColor'] = var15;
    var4['freeTrialTag'] = var12;
    var12 = {};
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
    var12['color'] = var15;
    var4['freeTrialTier0Color'] = var12;
    var12 = {};
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var12['color'] = var15;
    var4['freeTrialTier2Color'] = var12;
    var12 = {'backgroundColor': null, 'paddingHorizontal': 24, 'paddingVertical': 12, 'bottom': 0};
    var15 = 13;
    var15 = var6[var15];
    var18 = var17.bind(var1)(var15);
    var15 = var6[var13];
    var15 = var17.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BLACK_500;
    var19 = var18.bind(var1)(var15);
    var18 = var19.alpha;
    var15 = 0.4;
    var18 = var18.bind(var19)(var15);
    var15 = var18.hex;
    var15 = var15.bind(var18)();
    var12['backgroundColor'] = var15;
    var4['trialSubTextContainer'] = var12;
    var12 = {};
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var14 = var14.DISPLAY_MEDIUM;
    var13 = var6[var13];
    var13 = var17.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE_500;
    var24 = var15.bind(var1)(var14, var13, var16);
    var25 = var12;
    var13 = copyDataProperties(var25, var24);
    var4['trialSubText'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot18 = var4;
    var4 = function PriceText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.premiumItem;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot17;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var8 = var7.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var7.bind(var8)(var3, var2);
            var7 = _closure1_slot1;
            var2 = 15;
            var2 = var5[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.getIntervalStringAsNoun;
            var1 = var1.interval;
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = true;
            var1['accessible'] = var8;
            var8 = var10.priceContainer;
            var1['style'] = var8;
            var8 = _closure1_slot14;
            var9 = 16;
            var5 = var5[var9];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var13 = var10.priceText;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var10.price;
            var12[1] = var13;
            var5['style'] = var12;
            var12 = null;
            var15 = var12 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var14.priceString;
case 2:
            var14 = var12 != var13;
            var12 = '$...';
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var13;
case 4:
            var5['children'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var12 = var10.priceText;
            var9 = new Array(2);
            var9[0] = var12;
            var10 = var10.interval;
            var9[1] = var10;
            var6['style'] = var9;
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = ' / ';
            var9 = var10.bind(var9)(var11);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var25 = var1.premiumType;
            var _closure2_slot0 = var25;
            var5 = var1.style;
            var2 = var1.applicationId;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot2 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot3 = var2;
            var15 = var1.hideButton;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var15 = false;
case 6:
            var9 = var1.forFractionalPremium;
            if(!(var9 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = false;
case 8:
            var11 = var1.hidePrice;
            if(!(var11 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = false;
case 10:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot17;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 17;
            var1 = var3[var7];
            var6 = var2.bind(var4)(var1);
            var2 = _closure1_slot16;
            var1 = var2.has;
            var2 = var1.bind(var2)(var25);
            var1 = 'only Tier 0 and Tier 2 are supported';
            var1 = var6.bind(var4)(var2, var1);
            var2 = _closure1_slot0;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePremiumTrialOffer;
            var24 = var1.bind(var2)();
            _closure2_slot4 = var24;
            var26 = null;
            var1 = var26 == var24;
            var3 = undefined;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var24.trial_id;
case 12:
            var1 = _closure1_slot9;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var6)();
            var6 = var26 == var24;
            var13 = undefined;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var13 = var24.subscription_trial;
case 14:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var30 = 15;
            var6 = var6[var30];
            var14 = var8.bind(var4)(var6);
            var8 = var14.formatIntervalDuration;
            var6 = {};
            var17 = var26 == var13;
            var16 = undefined;
            if(var17) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = var13.interval;
case 16:
            var6['intervalType'] = var16;
            var17 = var26 == var13;
            var16 = undefined;
            if(var17) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var16 = var13.interval_count;
case 18:
            var6['intervalCount'] = var16;
            var16 = var8.bind(var14)(var6);
            if(!(var3 !== var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var30];
            var6 = var3.bind(var4)(var1);
            var3 = var6.formatTrialCtaIntervalDuration;
            var1 = {};
            var14 = var26 == var13;
            var8 = undefined;
            if(var14) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = var13.interval;
case 22:
            var1['intervalType'] = var8;
            var14 = var26 == var13;
            var8 = undefined;
            if(var14) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var13.interval_count;
case 24:
            var1['intervalCount'] = var8;
            var22 = var3.bind(var6)(var1);
            _fun0002_ip = 26; continue _fun0002;
case 20:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 20;
            var3 = var13[var1];
            var3 = var8.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Gs9Aam;
            var22 = var3.bind(var6)(var1);
case 26:
            var6 = var25 === var2;
            var13 = _closure1_slot4;
            var8 = var13.useMemo;
            var3 = new Array(1);
            var3[0] = var24;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.parse;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var5 = _closure2_slot4;
                    var4 = var5.expires_at;
case 27:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var1 = var4;
case 29:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var8.bind(var13)(var1, var3);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 21;
            var1 = var14[var1];
            var3 = var13.bind(var4)(var1);
            var1 = 60000;
            var36 = var3.bind(var4)(var8, var1);
            var1 = 22;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            _closure2_slot5 = var1;
            var8 = _closure1_slot0;
            var3 = 14;
            var1 = var14[var3];
            var19 = var8.bind(var4)(var1);
            var18 = var19.useStateFromStoresArray;
            var1 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var1;
            var1 = function() {
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
            var18 = var18.bind(var19)(var17, var1);
            var17 = _closure1_slot3;
            var1 = 2;
            var1 = var17.bind(var4)(var18, var1);
            var17 = 0;
            var27 = var1[var17];
            var39 = 1;
            var1 = var1[var39];
            var17 = _closure1_slot11;
            var17 = var17[var25];
            _closure2_slot6 = var17;
            var3 = var14[var3];
            var18 = var8.bind(var4)(var3);
            var17 = var18.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot6;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var17.bind(var18)(var8, var3);
            var8 = 23;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var14 = var8.bind(var4)(var25, var9);
            var21 = var26 != var27;
            if(!var21) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var21 = var3;
case 31:
            if(!var21) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var21 = var1;
case 33:
            var1 = var26 != var27;
            var3 = null;
            if(!var1) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var1 = var27.planIdFromItems;
            var3 = null;
            if(!(var4 !== var1)) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            var8 = _closure1_slot13;
            var1 = var27.planIdFromItems;
            var3 = var8[var1];
case 35:
            var8 = var26 == var3;
            var1 = undefined;
            if(var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var1 = var3.interval;
case 38:
            if(!(var26 == var1)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = _closure1_slot12;
            var1 = var3.MONTH;
case 40:
            _closure2_slot7 = var1;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 24;
            var3 = var1[var3];
            var13 = var8.bind(var4)(var3);
            var8 = var13.getPremiumBundleWithPredicate;
            var3 = function(arg1) {
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
                    if(!var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var1 = !var6;
case 42:
                    if(!var1) { _fun0004_ip = 44; continue _fun0004 }
case 30:
                    var1 = var2 === var5;
case 44:
                    if(!var1) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 45:
                    if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 47:
                    var2 = _closure2_slot7;
                    var1 = var3 === var2;
case 11:
                    return var1;
                }
            };
            var18 = var8.bind(var13)(var3);
            _closure2_slot8 = var18;
            var3 = _closure1_slot1;
            var1 = var1[var7];
            var7 = var3.bind(var4)(var1);
            var3 = var26 != var18;
            var1 = 'could not find a premium item';
            var1 = var7.bind(var4)(var3, var1);
            var1 = _closure1_slot10;
            var1 = var1.TIER_0;
            if(!(var2 !== var1)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var28 = var12.freeTrialTier2Color;
            _fun0002_ip = 50; continue _fun0002;
case 48:
            var28 = var12.freeTrialTier0Color;
case 50:
            var3 = _closure1_slot15;
            var17 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 25;
            var1 = var23[var1];
            var2 = var17.bind(var4)(var1);
            var1 = {};
            var1['premiumType'] = var25;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var12.card;
            var5['style'] = var8;
            var19 = _closure1_slot14;
            var8 = {};
            var13 = var12.logoContainer;
            var8['style'] = var13;
            var13 = 26;
            var13 = var23[var13];
            var29 = var17.bind(var4)(var13);
            var13 = {};
            var13['premiumType'] = var25;
            var31 = var12.logo;
            var13['style'] = var31;
            var13 = var19.bind(var4)(var29, var13);
            var8['children'] = var13;
            var13 = var19.bind(var4)(var7, var8);
            var8 = new Array(6);
            var8[0] = var13;
            var13 = 27;
            var13 = var23[var13];
            var17 = var17.bind(var4)(var13);
            var13 = {};
            var13['premiumType'] = var25;
            var13 = var19.bind(var4)(var17, var13);
            var8[1] = var13;
            var9 = !var9;
            if(!var9) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var9 = !var11;
case 51:
            if(!var9) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var17 = _closure1_slot14;
            var13 = _closure1_slot19;
            var11 = {};
            var11['premiumItem'] = var18;
            var9 = var17.bind(var4)(var13, var11);
case 53:
            var8[2] = var9;
            var9 = var6;
            if(!var6) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var17 = _closure1_slot14;
            var13 = _closure1_slot5;
            var11 = {};
            var18 = var12.freeTrialContainer;
            var11['style'] = var18;
            var18 = {};
            var19 = var12.freeTrialTag;
            var18['style'] = var19;
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var19 = 28;
            var19 = var29[var19];
            var19 = var23.bind(var4)(var19);
            var23 = var19.Text;
            var19 = {};
            var29 = 'eyebrow';
            var19['variant'] = var29;
            var19['style'] = var28;
            var28 = var26 == var24;
            var24 = null;
            if(var28) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var37 = global;
            var31 = var37.Number;
            var29 = var31.isNaN;
            var28 = var36.days;
            var28 = var29.bind(var31)(var28);
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 20;
            var31 = var34[var29];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            if(var28) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var35 = var32.formatToPlainString;
            var28 = var34[var29];
            var28 = var33.bind(var4)(var28);
            var28 = var28.t;
            var31 = var28.+FgdjI;
            var28 = {};
            var38 = var37.Math;
            var37 = var38.max;
            var36 = var36.days;
            var36 = var37.bind(var38)(var36, var39);
            var28['days'] = var36;
            var28 = var35.bind(var32)(var31, var28);
            _fun0002_ip = 61; continue _fun0002;
case 59:
            var31 = var32.string;
            var29 = var34[var29];
            var29 = var33.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.qVcfa2;
            var28 = var31.bind(var32)(var29);
case 61:
            var24 = var28;
case 57:
            var19['children'] = var24;
            var19 = var17.bind(var4)(var23, var19);
            var18['children'] = var19;
            var18 = var17.bind(var4)(var13, var18);
            var11['children'] = var18;
            var9 = var17.bind(var4)(var13, var11);
case 55:
            var8[3] = var9;
            var13 = _closure1_slot14;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 29;
            var9 = var17[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var17 = var12.featureList;
            var9['style'] = var17;
            var9['features'] = var14;
            var14 = var12.featureIcon;
            var9['iconStyle'] = var14;
            var14 = var12.featureLabel;
            var9['labelStyle'] = var14;
            var14 = var12.featureRow;
            var9['rowStyle'] = var14;
            var9 = var13.bind(var4)(var11, var9);
            var8[4] = var9;
            var13 = _closure1_slot15;
            var11 = _closure1_slot5;
            var9 = {};
            var17 = var6;
            if(!var6) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 30;
            var14 = var23[var14];
            var14 = var18.bind(var4)(var14);
            var18 = var14.PremiumFeaturesCardButtonSparkles;
            var14 = {};
            var17 = var19.bind(var4)(var18, var14);
case 62:
            var14 = new Array(2);
            var14[0] = var17;
            var15 = !var15;
            if(!var15) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var19 = _closure1_slot14;
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var24 = 31;
            var17 = var17[var24];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var23 = var12.button;
            var17['style'] = var23;
            if(var6) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            if(!var21) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var28 = var26 == var27;
            var23 = false;
            if(var28) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var29 = var27.planIdFromItems;
            var26 = var26 != var29;
            if(!var26) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var30];
            var28 = var28.bind(var4)(var27);
            var27 = var28.getPremiumType;
            var27 = var27.bind(var28)(var29);
            var26 = var27 === var25;
case 72:
            var23 = var26;
case 70:
            if(var23) { _fun0002_ip = 74; continue _fun0002 }
case 68:
            var23 = _closure1_slot10;
            var23 = var23.TIER_0;
            if(!(var25 !== var23)) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 20;
            var25 = var28[var23];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var23 = var28[var23];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.8x0jKS;
            var23 = var25.bind(var26)(var23);
            _fun0002_ip = 77; continue _fun0002;
case 75:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 20;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.cM8bb2;
            var23 = var26.bind(var27)(var25);
case 77:
            _fun0002_ip = 78; continue _fun0002;
case 74:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 20;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.j+wlh4;
            var23 = var26.bind(var27)(var25);
case 78:
            var22 = var23;
case 66:
            var17['text'] = var22;
            var23 = _closure1_slot1;
            var22 = _closure1_slot2;
            var22 = var22[var24];
            var22 = var23.bind(var4)(var22);
            var22 = var22.Colors;
            var22 = var22.WHITE;
            var17['color'] = var22;
            var22 = var12.buttonText;
            var17['textStyle'] = var22;
            var17['disabled'] = var21;
            var20 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 32;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = _closure1_slot18;
                var1['analyticsLocation'] = var4;
                var5 = _closure2_slot5;
                var1['analyticsLocations'] = var5;
                var5 = _closure2_slot8;
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
            var17['onPress'] = var20;
            var15 = var19.bind(var4)(var18, var17);
case 64:
            var14[1] = var15;
            var9['children'] = var14;
            var9 = var13.bind(var4)(var11, var9);
            var8[5] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var9 = _closure1_slot14;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = true;
            var7['accessible'] = var11;
            var11 = var12.trialSubTextContainer;
            var7['style'] = var11;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 28;
            var10 = var17[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var14 = 'text-md/normal';
            var10['variant'] = var14;
            var12 = var12.trialSubText;
            var10['style'] = var12;
            var12 = 20;
            var14 = var17[var12];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.uj94Cw;
            var12 = {};
            var12['duration'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 79:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();