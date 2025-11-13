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
    var12 = {};
    var13 = 'relative';
    var12['position'] = var13;
    var4['containerWrapper'] = var12;
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
    var12 = {'display': 'flex', 'flexDirection': 'row', 'width': '62%'};
    var4['discountPriceContainer'] = var12;
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
    var12 = {'position': 'absolute', 'top': 4294967286, 'width': 120, 'alignSelf': 'center', 'zIndex': 2};
    var4['discountPill'] = var12;
    var12 = {'marginRight': 4, 'alignSelf': 'center', 'marginTop': 1};
    var4['buttonIcon'] = var12;
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
            var3 = arg1;
            var1 = var3.premiumItem;
            var _closure2_slot0 = var1;
            var14 = var3.discountedPriceString;
            var13 = var3.discountOffer;
            var3 = _closure1_slot17;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var9)(var3, var2);
            var7 = _closure1_slot1;
            var2 = 15;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.getIntervalStringAsNoun;
            var2 = var1.interval;
            var18 = var7.bind(var8)(var2);
            var12 = null;
            if(!(var12 != var14)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var12 == var13)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var8 = _closure1_slot15;
            var7 = _closure1_slot5;
            var2 = {};
            var9 = true;
            var2['accessible'] = var9;
            var9 = var6.priceContainer;
            var2['style'] = var9;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var16 = 19;
            var9 = var9[var16];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var17 = var6.priceText;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = var6.price;
            var15[1] = var17;
            var9['style'] = var15;
            var15 = var12 == var3;
            var17 = undefined;
            if(var15) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var17 = var3.priceString;
case 5:
            var19 = var12 != var17;
            var15 = '$...';
            if(!var19) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var15 = var17;
case 7:
            var9['children'] = var15;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var15 = _closure1_slot14;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var17 = var6.priceText;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var6.interval;
            var16[1] = var17;
            var10['style'] = var16;
            var16 = global;
            var16 = var16.HermesInternal;
            var17 = var16.concat;
            var16 = ' / ';
            var16 = var17.bind(var16)(var18);
            var10['children'] = var16;
            var10 = var15.bind(var4)(var11, var10);
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var8.bind(var4)(var7, var2);
            return var2;
case 4:
            var2 = _closure1_slot13;
            var1 = var1.basePlanId;
            var1 = var2[var1];
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.formatRate;
            var9 = var12 == var3;
            var2 = undefined;
            if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var3.priceString;
case 9:
            var9 = var12 != var2;
            var3 = '$...';
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var2;
case 11:
            var2 = var1.interval;
            var1 = var1.intervalCount;
            var11 = var7.bind(var8)(var3, var2, var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = true;
            var1['accessible'] = var7;
            var6 = var6.discountPriceContainer;
            var1['style'] = var6;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 17;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/normal', 'color': 'always-white'};
            var7 = 18;
            var9 = var15[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.sJTwHQ;
            var7 = {};
            var7['discountedPrice'] = var14;
            var14 = var13.discount;
            var15 = var12 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = var14.user_usage_limit;
case 13:
            var14 = var12 != var13;
            var12 = 1;
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = var13;
case 15:
            var7['numMonths'] = var12;
            var7['regularPrice'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
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
            var9 = var1.style;
            var2 = var1.applicationId;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot2 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot3 = var2;
            var19 = var1.hideButton;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var19 = false;
case 17:
            var13 = var1.forFractionalPremium;
            if(!(var13 === var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var13 = false;
case 19:
            var15 = var1.hidePrice;
            if(!(var15 === var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var15 = false;
case 21:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot17;
            var16 = var1.bind(var4)();
            _closure2_slot4 = var16;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 20;
            var2 = var5[var1];
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot16;
            var2 = var3.has;
            var3 = var2.bind(var3)(var30);
            var2 = 'only Tier 0 and Tier 2 are supported';
            var2 = var6.bind(var4)(var3, var2);
            var3 = _closure1_slot0;
            var2 = 21;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.usePremiumTrialOffer;
            var29 = var2.bind(var6)();
            _closure2_slot5 = var29;
            var2 = 22;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var37 = var2.bind(var3)();
            var31 = null;
            var2 = var31 == var29;
            var5 = undefined;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var5 = var29.trial_id;
case 23:
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var6)();
            var6 = var31 == var29;
            var8 = undefined;
            if(var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var8 = var29.subscription_trial;
case 25:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var35 = 15;
            var6 = var6[var35];
            var10 = var7.bind(var4)(var6);
            var7 = var10.formatIntervalDuration;
            var6 = {};
            var12 = var31 == var8;
            var11 = undefined;
            if(var12) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = var8.interval;
case 27:
            var6['intervalType'] = var11;
            var12 = var31 == var8;
            var11 = undefined;
            if(var12) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var11 = var8.interval_count;
case 29:
            var6['intervalCount'] = var11;
            var20 = var7.bind(var10)(var6);
            if(!(var5 !== var3)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var35];
            var6 = var5.bind(var4)(var3);
            var5 = var6.formatTrialCtaIntervalDuration;
            var3 = {};
            var10 = var31 == var8;
            var7 = undefined;
            if(var10) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var7 = var8.interval;
case 33:
            var3['intervalType'] = var7;
            var10 = var31 == var8;
            var7 = undefined;
            if(var10) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var7 = var8.interval_count;
case 35:
            var3['intervalCount'] = var7;
            var26 = var5.bind(var6)(var3);
            _fun0002_ip = 37; continue _fun0002;
case 31:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 18;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.Gs9Aaj;
            var26 = var5.bind(var6)(var3);
case 37:
            var10 = var30 === var2;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var5 = new Array(1);
            var5[0] = var29;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.parse;
                    var4 = _closure2_slot5;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var5 = _closure2_slot5;
                    var4 = var5.expires_at;
case 38:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var1 = var4;
case 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var3, var5);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var5 = var7.bind(var4)(var3);
            var3 = 60000;
            var42 = var5.bind(var4)(var6, var3);
            var3 = 25;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            _closure2_slot6 = var3;
            var6 = _closure1_slot0;
            var5 = 14;
            var3 = var8[var5];
            var17 = var6.bind(var4)(var3);
            var12 = var17.useStateFromStoresArray;
            var3 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var3;
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
            var12 = var12.bind(var17)(var11, var3);
            var11 = _closure1_slot3;
            var3 = 2;
            var3 = var11.bind(var4)(var12, var3);
            var11 = 0;
            var32 = var3[var11];
            var45 = 1;
            var3 = var3[var45];
            var11 = _closure1_slot11;
            var11 = var11[var30];
            _closure2_slot7 = var11;
            var5 = var8[var5];
            var12 = var6.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot7;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var11.bind(var12)(var6, var5);
            var6 = 26;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var18 = var6.bind(var4)(var30, var13);
            var25 = var31 != var32;
            if(!var25) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var25 = var5;
case 42:
            if(!var25) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var25 = var3;
case 44:
            var3 = var31 != var32;
            var5 = null;
            if(!var3) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var3 = var32.planIdFromItems;
            var5 = null;
            if(!(var4 !== var3)) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var6 = _closure1_slot13;
            var3 = var32.planIdFromItems;
            var5 = var6[var3];
case 46:
            var6 = var31 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var3 = var5.interval;
case 49:
            if(!(var31 == var3)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var5 = _closure1_slot12;
            var3 = var5.MONTH;
case 51:
            _closure2_slot8 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 27;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var7 = var8.getPremiumBundleWithPredicate;
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
                    if(!var1) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var1 = !var6;
case 53:
                    if(!var1) { _fun0004_ip = 55; continue _fun0004 }
case 41:
                    var1 = var2 === var5;
case 55:
                    if(!var1) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 56:
                    if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 58:
                    var2 = _closure2_slot8;
                    var1 = var3 === var2;
case 22:
                    return var1;
                }
            };
            var23 = var7.bind(var8)(var6);
            _closure2_slot9 = var23;
            var6 = _closure1_slot1;
            var1 = var5[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var31 != var23;
            var1 = 'could not find a premium item';
            var1 = var7.bind(var4)(var6, var1);
            var1 = 28;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useDiscountedPremiumProductInfo;
            var1 = new Array(1);
            var1[0] = var23;
            var1 = var3.bind(var5)(var37, var1);
            var22 = var1.discountedPriceString;
            var27 = var31 != var37;
            if(!var27) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var27 = var31 != var22;
case 59:
            var1 = _closure1_slot10;
            var1 = var1.TIER_0;
            if(!(var2 !== var1)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var33 = var16.freeTrialTier2Color;
            _fun0002_ip = 63; continue _fun0002;
case 61:
            var33 = var16.freeTrialTier0Color;
case 63:
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.containerWrapper;
            var1['style'] = var5;
            var6 = var27;
            if(!var6) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var8 = _closure1_slot14;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 29;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.PremiumDiscountPill;
            var5 = {};
            var11 = var16.discountPill;
            var5['style'] = var11;
            var5['discountOffer'] = var37;
            var6 = var8.bind(var4)(var7, var5);
case 64:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot15;
            var21 = _closure1_slot1;
            var34 = _closure1_slot2;
            var6 = 30;
            var6 = var34[var6];
            var7 = var21.bind(var4)(var6);
            var6 = {};
            var6['premiumType'] = var30;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var9 = {};
            var12 = var16.card;
            var9['style'] = var12;
            var28 = _closure1_slot14;
            var12 = {};
            var17 = var16.logoContainer;
            var12['style'] = var17;
            var17 = 31;
            var17 = var34[var17];
            var36 = var21.bind(var4)(var17);
            var17 = {};
            var17['premiumType'] = var30;
            var38 = var16.logo;
            var17['style'] = var38;
            var17 = var28.bind(var4)(var36, var17);
            var12['children'] = var17;
            var17 = var28.bind(var4)(var11, var12);
            var12 = new Array(6);
            var12[0] = var17;
            var17 = 32;
            var17 = var34[var17];
            var21 = var21.bind(var4)(var17);
            var17 = {};
            var17['premiumType'] = var30;
            var17 = var28.bind(var4)(var21, var17);
            var12[1] = var17;
            var13 = !var13;
            if(!var13) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var13 = !var15;
case 66:
            if(!var13) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var21 = _closure1_slot14;
            var17 = _closure1_slot19;
            var15 = {};
            var15['premiumItem'] = var23;
            var15['discountedPriceString'] = var22;
            var15['discountOffer'] = var37;
            var13 = var21.bind(var4)(var17, var15);
case 68:
            var12[2] = var13;
            var13 = var10;
            if(!var10) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var21 = _closure1_slot14;
            var17 = _closure1_slot5;
            var15 = {};
            var22 = var16.freeTrialContainer;
            var15['style'] = var22;
            var22 = {};
            var23 = var16.freeTrialTag;
            var22['style'] = var23;
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var23 = 17;
            var23 = var34[var23];
            var23 = var28.bind(var4)(var23);
            var28 = var23.Text;
            var23 = {};
            var34 = 'eyebrow';
            var23['variant'] = var34;
            var23['style'] = var33;
            var33 = var31 == var29;
            var29 = null;
            if(var33) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var43 = global;
            var36 = var43.Number;
            var34 = var36.isNaN;
            var33 = var42.days;
            var33 = var34.bind(var36)(var33);
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var34 = 18;
            var36 = var40[var34];
            var36 = var39.bind(var4)(var36);
            var38 = var36.intl;
            if(var33) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var41 = var38.formatToPlainString;
            var33 = var40[var34];
            var33 = var39.bind(var4)(var33);
            var33 = var33.t;
            var36 = var33.+FgdjP;
            var33 = {};
            var44 = var43.Math;
            var43 = var44.max;
            var42 = var42.days;
            var42 = var43.bind(var44)(var42, var45);
            var33['days'] = var42;
            var33 = var41.bind(var38)(var36, var33);
            _fun0002_ip = 76; continue _fun0002;
case 74:
            var36 = var38.string;
            var34 = var40[var34];
            var34 = var39.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.qVcfa0;
            var33 = var36.bind(var38)(var34);
case 76:
            var29 = var33;
case 72:
            var23['children'] = var29;
            var23 = var21.bind(var4)(var28, var23);
            var22['children'] = var23;
            var22 = var21.bind(var4)(var17, var22);
            var15['children'] = var22;
            var13 = var21.bind(var4)(var17, var15);
case 70:
            var12[3] = var13;
            var17 = _closure1_slot14;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 33;
            var13 = var21[var13];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            var21 = var16.featureList;
            var13['style'] = var21;
            var13['features'] = var18;
            var18 = var16.featureIcon;
            var13['iconStyle'] = var18;
            var18 = var16.featureLabel;
            var13['labelStyle'] = var18;
            var18 = var16.featureRow;
            var13['rowStyle'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var12[4] = var13;
            var17 = _closure1_slot15;
            var15 = _closure1_slot5;
            var13 = {};
            var21 = var10;
            if(!var10) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var23 = _closure1_slot14;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 34;
            var18 = var28[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.PremiumFeaturesCardButtonSparkles;
            var18 = {};
            var21 = var23.bind(var4)(var22, var18);
case 77:
            var18 = new Array(2);
            var18[0] = var21;
            var19 = !var19;
            if(!var19) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var23 = _closure1_slot14;
            var22 = _closure1_slot1;
            var21 = _closure1_slot2;
            var28 = 35;
            var21 = var21[var28];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var29 = var16.button;
            var21['style'] = var29;
            if(var10) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            if(var27) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            if(!var25) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var33 = var31 == var32;
            var29 = false;
            if(var33) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var34 = var32.planIdFromItems;
            var31 = var31 != var34;
            if(!var31) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var35];
            var33 = var33.bind(var4)(var32);
            var32 = var33.getPremiumType;
            var32 = var32.bind(var33)(var34);
            var31 = var32 === var30;
case 89:
            var29 = var31;
case 87:
            if(var29) { _fun0002_ip = 91; continue _fun0002 }
case 85:
            var29 = _closure1_slot10;
            var29 = var29.TIER_0;
            if(!(var30 !== var29)) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 18;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.8x0jKT;
            var29 = var30.bind(var31)(var29);
            _fun0002_ip = 94; continue _fun0002;
case 92:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 18;
            var31 = var34[var30];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.cM8bbx;
            var29 = var31.bind(var32)(var30);
case 94:
            _fun0002_ip = 95; continue _fun0002;
case 91:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 18;
            var31 = var34[var30];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.j+wlhy;
            var29 = var31.bind(var32)(var30);
case 95:
            _fun0002_ip = 96; continue _fun0002;
case 83:
            var32 = _closure1_slot14;
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var30 = 17;
            var30 = var38[var30];
            var30 = var34.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-sm/semibold', 'color': 'black'};
            var33 = 18;
            var35 = var38[var33];
            var35 = var34.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.formatToPlainString;
            var33 = var38[var33];
            var33 = var34.bind(var4)(var33);
            var33 = var33.t;
            var34 = var33.bkQ4bH;
            var33 = {};
            var37 = var37.discount;
            var37 = var37.amount;
            var33['percent'] = var37;
            var33 = var35.bind(var36)(var34, var33);
            var30['children'] = var33;
            var29 = var32.bind(var4)(var31, var30);
case 96:
            var26 = var29;
case 81:
            var21['text'] = var26;
            var26 = undefined;
            if(!var27) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var26 = function() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 36;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.NitroWheelIcon;
                var1 = {'style': null, 'color': 'black', 'size': 'sm'};
                var5 = _closure2_slot4;
                var5 = var5.buttonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
case 97:
            var21['renderIcon'] = var26;
            var27 = _closure1_slot1;
            var26 = _closure1_slot2;
            var26 = var26[var28];
            var26 = var27.bind(var4)(var26);
            var26 = var26.Colors;
            var26 = var26.WHITE;
            var21['color'] = var26;
            var26 = var16.buttonText;
            var21['textStyle'] = var26;
            var21['disabled'] = var25;
            var24 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 37;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = _closure1_slot18;
                var1['analyticsLocation'] = var4;
                var5 = _closure2_slot6;
                var1['analyticsLocations'] = var5;
                var5 = _closure2_slot9;
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
            var21['onPress'] = var24;
            var19 = var23.bind(var4)(var22, var21);
case 79:
            var18[1] = var19;
            var13['children'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var12[5] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var13 = _closure1_slot14;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = true;
            var11['accessible'] = var15;
            var15 = var16.trialSubTextContainer;
            var11['style'] = var15;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 17;
            var14 = var21[var14];
            var14 = var17.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-md/normal';
            var14['variant'] = var18;
            var16 = var16.trialSubText;
            var14['style'] = var16;
            var16 = 18;
            var18 = var21[var16];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.format;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.uj94C5;
            var16 = {};
            var16['duration'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var14['children'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 99:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();