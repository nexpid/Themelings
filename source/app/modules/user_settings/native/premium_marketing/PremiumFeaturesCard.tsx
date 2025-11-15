// app/modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var7 = var14.bind(var1)(var7);
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
    var7 = var14.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var18 = 4;
    var7 = var6[var18];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticsPages;
    var8 = var7.AnalyticsSections;
    var7 = var7.AnalyticsObjectTypes;
    var16 = 7;
    var10 = var6[var16];
    var11 = var5.bind(var1)(var10);
    var10 = var11.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot9 = var10;
    var10 = var11.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot10 = var10;
    var10 = var11.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot11 = var10;
    var10 = var11.PremiumTypes;
    var _closure1_slot12 = var10;
    var12 = var11.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot13 = var12;
    var12 = var11.SubscriptionIntervalTypes;
    var _closure1_slot14 = var12;
    var11 = var11.SubscriptionPlanInfo;
    var _closure1_slot15 = var11;
    var17 = 8;
    var11 = var6[var17];
    var11 = var5.bind(var1)(var11);
    var15 = var11.Fonts;
    var11 = 9;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var12 = var11.jsx;
    var _closure1_slot16 = var12;
    var11 = var11.jsxs;
    var _closure1_slot17 = var11;
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
    var _closure1_slot18 = var4;
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
    var19 = var14.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var12['borderRadius'] = var19;
    var4['card'] = var12;
    var12 = {};
    var12['marginBottom'] = var17;
    var4['logoContainer'] = var12;
    var12 = {};
    var12['marginRight'] = var18;
    var4['logo'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['priceContainer'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'width': '62%'};
    var4['discountPriceContainer'] = var12;
    var12 = {};
    var18 = 12;
    var19 = var6[var18];
    var22 = var14.bind(var1)(var19);
    var21 = var15.DISPLAY_MEDIUM;
    var19 = var6[var13];
    var19 = var14.bind(var1)(var19);
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
    var12['marginTop'] = var17;
    var4['featureList'] = var12;
    var12 = {};
    var17 = var6[var18];
    var21 = var14.bind(var1)(var17);
    var20 = var15.PRIMARY_MEDIUM;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var19 = var17.WHITE_500;
    var17 = 14;
    var24 = var21.bind(var1)(var20, var19, var17);
    var25 = var12;
    var17 = copyDataProperties(var25, var24);
    var19 = -8;
    var17 = 'marginLeft';
    var12[var17] = var19;
    var4['featureLabel'] = var12;
    var12 = {};
    var12['paddingVertical'] = var16;
    var4['featureRow'] = var12;
    var16 = 16;
    var12 = {'height': 16, 'width': 16};
    var4['featureIcon'] = var12;
    var12 = {};
    var12['marginTop'] = var16;
    var4['button'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['freeTrialContainer'] = var12;
    var12 = {'marginTop': 8, 'paddingBottom': 2, 'paddingHorizontal': 8, 'borderRadius': null, 'backgroundColor': null, 'maxWidth': 200};
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var12['borderRadius'] = var16;
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var12['backgroundColor'] = var16;
    var4['freeTrialTag'] = var12;
    var12 = {};
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
    var12['color'] = var16;
    var4['freeTrialTier0Color'] = var12;
    var12 = {};
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var12['color'] = var16;
    var4['freeTrialTier2Color'] = var12;
    var12 = {'backgroundColor': null, 'paddingHorizontal': 24, 'paddingVertical': 12, 'bottom': 0};
    var16 = 13;
    var16 = var6[var16];
    var17 = var14.bind(var1)(var16);
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLACK_500;
    var19 = var17.bind(var1)(var16);
    var17 = var19.alpha;
    var16 = 0.4;
    var17 = var17.bind(var19)(var16);
    var16 = var17.hex;
    var16 = var16.bind(var17)();
    var12['backgroundColor'] = var16;
    var4['trialSubTextContainer'] = var12;
    var12 = {};
    var16 = var6[var18];
    var17 = var14.bind(var1)(var16);
    var16 = var15.DISPLAY_MEDIUM;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.WHITE_500;
    var24 = var17.bind(var1)(var16, var15, var18);
    var25 = var12;
    var15 = copyDataProperties(var25, var24);
    var4['trialSubText'] = var12;
    var12 = {};
    var15 = 190;
    var12['maxWidth'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE_500;
    var12['color'] = var13;
    var4['premiumGroupMemberInfoText'] = var12;
    var12 = {'position': 'absolute', 'top': 4294967286, 'maxWidth': 140, 'alignSelf': 'center', 'zIndex': 2};
    var4['discountPill'] = var12;
    var12 = {'marginRight': 4, 'alignSelf': 'center', 'marginTop': 1};
    var4['buttonIcon'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot20 = var4;
    var4 = function PriceText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.premiumItem;
            var _closure2_slot0 = var1;
            var15 = var3.discountedPriceString;
            var14 = var3.discountOffer;
            var19 = var3.activeDiscountInfo;
            var3 = _closure1_slot19;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 14;
            var8 = var4[var8];
            var10 = var3.bind(var5)(var8);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var11;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var8, var2);
            var8 = _closure1_slot1;
            var2 = 15;
            var2 = var4[var2];
            var9 = var8.bind(var5)(var2);
            var8 = var9.getIntervalStringAsNoun;
            var2 = var1.interval;
            var17 = var8.bind(var9)(var2);
            var2 = _closure1_slot15;
            var1 = var1.basePlanId;
            var1 = var2[var1];
            var2 = 16;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.formatRate;
            var13 = null;
            var3 = var13 == var18;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var18.priceString;
case 2:
            var9 = var13 != var2;
            var10 = '$...';
            var3 = var10;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var2 = var1.interval;
            var1 = var1.intervalCount;
            var12 = var4.bind(var8)(var3, var2, var1);
            if(!(var13 != var15)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var13 == var14)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(!(var13 == var19)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot17;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = true;
            var1['accessible'] = var4;
            var4 = var7.priceContainer;
            var1['style'] = var4;
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var11 = 19;
            var4 = var4[var11];
            var8 = var8.bind(var5)(var4);
            var4 = {};
            var20 = var7.priceText;
            var16 = new Array(2);
            var16[0] = var20;
            var20 = var7.price;
            var16[1] = var20;
            var4['style'] = var16;
            var20 = var13 == var18;
            var16 = undefined;
            if(var20) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var16 = var18.priceString;
case 11:
            var18 = var13 != var16;
            if(!var18) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var16;
case 13:
            var4['children'] = var10;
            var8 = var9.bind(var5)(var8, var4);
            var4 = new Array(2);
            var4[0] = var8;
            var10 = _closure1_slot16;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var16 = var7.priceText;
            var11 = new Array(2);
            var11[0] = var16;
            var16 = var7.interval;
            var11[1] = var16;
            var8['style'] = var11;
            var11 = global;
            var11 = var11.HermesInternal;
            var16 = var11.concat;
            var11 = ' / ';
            var11 = var16.bind(var11)(var17);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var4[1] = var8;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var4 = _closure1_slot16;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = true;
            var2['accessible'] = var8;
            var8 = var7.discountPriceContainer;
            var2['style'] = var8;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 17;
            var8 = var18[var8];
            var8 = var11.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/normal', 'color': 'always-white'};
            var10 = 18;
            var16 = var18[var10];
            var16 = var11.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var10 = var18[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.3ZiutU;
            var10 = {};
            var20 = var13 == var19;
            var18 = undefined;
            if(var20) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var19.percentage;
case 16:
            if(!(var13 == var18)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = _closure1_slot10;
case 18:
            var10['percent'] = var18;
            var20 = var13 == var19;
            var18 = undefined;
            if(var20) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var18 = var19.duration;
case 20:
            if(!(var13 == var18)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = _closure1_slot9;
case 22:
            var10['numMonths'] = var18;
            var10['regularPrice'] = var12;
            var10 = var16.bind(var17)(var11, var10);
            var8['children'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            _fun0001_ip = 24; continue _fun0001;
case 8:
            var4 = _closure1_slot16;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = true;
            var2['accessible'] = var8;
            var7 = var7.discountPriceContainer;
            var2['style'] = var7;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 17;
            var6 = var16[var6];
            var6 = var9.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/normal', 'color': 'always-white'};
            var8 = 18;
            var10 = var16[var8];
            var10 = var9.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var16[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.sJTwHQ;
            var8 = {};
            var8['discountedPrice'] = var15;
            var15 = var14.discount;
            var16 = var13 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = var15.user_usage_limit;
case 25:
            var15 = var13 != var14;
            var13 = 1;
            if(!var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var13 = var14;
case 27:
            var8['numMonths'] = var13;
            var8['regularPrice'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var29 = var1.premiumType;
            var _closure2_slot0 = var29;
            var9 = var1.style;
            var2 = var1.applicationId;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot2 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot3 = var2;
            var19 = var1.hideButton;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var19 = false;
case 29:
            var15 = var1.forFractionalPremium;
            if(!(var15 === var4)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var15 = false;
case 31:
            var17 = var1.hidePrice;
            if(!(var17 === var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var17 = false;
case 33:
            var2 = var1.premiumGroupRole;
            if(!(var2 === var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var2 = var1.UNSPECIFIED;
case 35:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot19;
            var16 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 21;
            var3 = var6[var1];
            var7 = var5.bind(var4)(var3);
            var5 = _closure1_slot18;
            var3 = var5.has;
            var5 = var3.bind(var5)(var29);
            var3 = 'only Tier 0 and Tier 2 are supported';
            var3 = var7.bind(var4)(var5, var3);
            var5 = _closure1_slot0;
            var3 = 22;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.usePremiumTrialOffer;
            var34 = var3.bind(var7)();
            _closure2_slot4 = var34;
            var3 = 23;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.usePremiumDiscountOffer;
            var33 = var3.bind(var7)();
            var3 = 24;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useActiveDiscountInfo;
            var23 = var3.bind(var5)();
            var30 = null;
            var3 = var30 == var34;
            var6 = undefined;
            if(var3) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var6 = var34.trial_id;
case 37:
            var5 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.usePremiumTrialOfferPremiumType;
            var3 = var3.bind(var7)();
            var7 = var30 == var34;
            var10 = undefined;
            if(var7) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var10 = var34.subscription_trial;
case 39:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var35 = 15;
            var7 = var7[var35];
            var11 = var8.bind(var4)(var7);
            var8 = var11.formatIntervalDuration;
            var7 = {};
            var13 = var30 == var10;
            var12 = undefined;
            if(var13) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var12 = var10.interval;
case 41:
            var7['intervalType'] = var12;
            var13 = var30 == var10;
            var12 = undefined;
            if(var13) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var12 = var10.interval_count;
case 43:
            var7['intervalCount'] = var12;
            var20 = var8.bind(var11)(var7);
            if(!(var6 !== var5)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var35];
            var7 = var6.bind(var4)(var5);
            var6 = var7.formatTrialCtaIntervalDuration;
            var5 = {};
            var11 = var30 == var10;
            var8 = undefined;
            if(var11) { _fun0002_ip = 47; continue _fun0002 }
case 9:
            var8 = var10.interval;
case 47:
            var5['intervalType'] = var8;
            var11 = var30 == var10;
            var8 = undefined;
            if(var11) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var8 = var10.interval_count;
case 48:
            var5['intervalCount'] = var8;
            var26 = var6.bind(var7)(var5);
            _fun0002_ip = 50; continue _fun0002;
case 45:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 18;
            var6 = var10[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.Gs9Aaj;
            var26 = var6.bind(var7)(var5);
case 50:
            var10 = var29 === var3;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var34;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.parse;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var5 = _closure2_slot4;
                    var4 = var5.expires_at;
case 51:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var1 = var4;
case 53:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var5, var6);
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 26;
            var5 = var11[var5];
            var6 = var8.bind(var4)(var5);
            var5 = 60000;
            var43 = var6.bind(var4)(var7, var5);
            var5 = 27;
            var5 = var11[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = var5.analyticsLocations;
            _closure2_slot5 = var5;
            var7 = _closure1_slot0;
            var6 = 14;
            var5 = var11[var6];
            var18 = var7.bind(var4)(var5);
            var13 = var18.useStateFromStoresArray;
            var5 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
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
            var13 = var13.bind(var18)(var12, var5);
            var12 = _closure1_slot3;
            var5 = 2;
            var5 = var12.bind(var4)(var13, var5);
            var12 = 0;
            var31 = var5[var12];
            var46 = 1;
            var5 = var5[var46];
            var12 = _closure1_slot13;
            var12 = var12[var29];
            _closure2_slot6 = var12;
            var6 = var11[var6];
            var13 = var7.bind(var4)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot6;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var12.bind(var13)(var7, var6);
            var7 = 28;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var18 = var7.bind(var4)(var29, var15, var2);
            var25 = var30 != var31;
            if(!var25) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var25 = var6;
case 55:
            if(!var25) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var25 = var5;
case 57:
            var5 = var30 != var31;
            var6 = null;
            if(!var5) { _fun0002_ip = 59; continue _fun0002 }
case 28:
            var5 = var31.planIdFromItems;
            var6 = null;
            if(!(var4 !== var5)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var7 = _closure1_slot15;
            var5 = var31.planIdFromItems;
            var6 = var7[var5];
case 59:
            var7 = var30 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var5 = var6.interval;
case 61:
            if(!(var30 == var5)) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var6 = _closure1_slot14;
            var5 = var6.MONTH;
case 63:
            _closure2_slot7 = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 29;
            var7 = var6[var7];
            var11 = var5.bind(var4)(var7);
            var8 = var11.getPremiumBundleWithPredicate;
            var7 = function(arg1) {
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
                    if(!var1) { _fun0004_ip = 65; continue _fun0004 }
case 66:
                    var1 = !var6;
case 65:
                    if(!var1) { _fun0004_ip = 67; continue _fun0004 }
case 54:
                    var1 = var2 === var5;
case 67:
                    if(!var1) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 68:
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 70:
                    var2 = _closure2_slot7;
                    var1 = var3 === var2;
case 34:
                    return var1;
                }
            };
            var32 = var8.bind(var11)(var7);
            _closure2_slot8 = var32;
            var7 = _closure1_slot1;
            var1 = var6[var1];
            var8 = var7.bind(var4)(var1);
            var7 = var30 != var32;
            var1 = 'could not find a premium item';
            var1 = var8.bind(var4)(var7, var1);
            var1 = 30;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useDiscountedPremiumProductInfo;
            var1 = new Array(1);
            var1[0] = var32;
            var1 = var5.bind(var6)(var33, var1);
            var28 = var1.discountedPriceString;
            var27 = var30 != var33;
            if(!var27) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var27 = var30 != var28;
case 71:
            var1 = _closure1_slot12;
            var1 = var1.TIER_0;
            if(!(var3 !== var1)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var36 = var16.freeTrialTier2Color;
            _fun0002_ip = 75; continue _fun0002;
case 73:
            var36 = var16.freeTrialTier0Color;
case 75:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var1 = var1.MEMBER;
            var13 = var2 === var1;
            var3 = _closure1_slot17;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.containerWrapper;
            var1['style'] = var5;
            var6 = var27;
            if(var6) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var6 = var30 != var23;
case 76:
            if(!var6) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 31;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.PremiumDiscountPill;
            var5 = {};
            var11 = var16.discountPill;
            var5['style'] = var11;
            var5['discountOffer'] = var33;
            var11 = var30 != var23;
            var5['isActiveDiscount'] = var11;
            var6 = var8.bind(var4)(var7, var5);
case 78:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var22 = _closure1_slot1;
            var38 = _closure1_slot2;
            var6 = 32;
            var6 = var38[var6];
            var7 = var22.bind(var4)(var6);
            var6 = {};
            var6['premiumType'] = var29;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var9 = {};
            var12 = var16.card;
            var9['style'] = var12;
            var37 = _closure1_slot16;
            var12 = {};
            var21 = var16.logoContainer;
            var12['style'] = var21;
            var21 = 33;
            var21 = var38[var21];
            var39 = var22.bind(var4)(var21);
            var21 = {};
            var21['premiumType'] = var29;
            var40 = var16.logo;
            var21['style'] = var40;
            var21 = var37.bind(var4)(var39, var21);
            var12['children'] = var21;
            var21 = var37.bind(var4)(var11, var12);
            var12 = new Array(7);
            var12[0] = var21;
            var21 = 34;
            var21 = var38[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['premiumType'] = var29;
            var21 = var37.bind(var4)(var22, var21);
            var12[1] = var21;
            var15 = !var15;
            if(!var15) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var15 = !var17;
case 80:
            if(!var15) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var22 = _closure1_slot16;
            var21 = _closure1_slot21;
            var17 = {};
            var17['premiumItem'] = var32;
            var17['discountedPriceString'] = var28;
            var17['discountOffer'] = var33;
            var17['activeDiscountInfo'] = var23;
            var15 = var22.bind(var4)(var21, var17);
case 82:
            var12[2] = var15;
            var15 = var10;
            if(!var10) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var22 = _closure1_slot16;
            var21 = _closure1_slot5;
            var17 = {};
            var23 = var16.freeTrialContainer;
            var17['style'] = var23;
            var23 = {};
            var28 = var16.freeTrialTag;
            var23['style'] = var28;
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var28 = 17;
            var28 = var37[var28];
            var28 = var32.bind(var4)(var28);
            var32 = var28.Text;
            var28 = {};
            var37 = 'eyebrow';
            var28['variant'] = var37;
            var28['style'] = var36;
            var36 = var30 == var34;
            var34 = null;
            if(var36) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var44 = global;
            var38 = var44.Number;
            var37 = var38.isNaN;
            var36 = var43.days;
            var36 = var37.bind(var38)(var36);
            var40 = _closure1_slot0;
            var41 = _closure1_slot2;
            var37 = 18;
            var38 = var41[var37];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            if(var36) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var42 = var39.formatToPlainString;
            var36 = var41[var37];
            var36 = var40.bind(var4)(var36);
            var36 = var36.t;
            var38 = var36.+FgdjP;
            var36 = {};
            var45 = var44.Math;
            var44 = var45.max;
            var43 = var43.days;
            var43 = var44.bind(var45)(var43, var46);
            var36['days'] = var43;
            var36 = var42.bind(var39)(var38, var36);
            _fun0002_ip = 90; continue _fun0002;
case 88:
            var38 = var39.string;
            var37 = var41[var37];
            var37 = var40.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.qVcfa0;
            var36 = var38.bind(var39)(var37);
case 90:
            var34 = var36;
case 86:
            var28['children'] = var34;
            var28 = var22.bind(var4)(var32, var28);
            var23['children'] = var28;
            var23 = var22.bind(var4)(var21, var23);
            var17['children'] = var23;
            var15 = var22.bind(var4)(var21, var17);
case 84:
            var12[3] = var15;
            if(!var13) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var21 = _closure1_slot16;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var15 = 17;
            var15 = var37[var15];
            var15 = var36.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {};
            var22 = 'text-sm/normal';
            var15['variant'] = var22;
            var22 = var16.premiumGroupMemberInfoText;
            var15['style'] = var22;
            var22 = 18;
            var22 = var37[var22];
            var22 = var36.bind(var4)(var22);
            var32 = var22.intl;
            var28 = var32.format;
            var23 = _closure1_slot1;
            var22 = 35;
            var22 = var37[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.+XfJ5v;
            var22 = {};
            var34 = 36;
            var34 = var37[var34];
            var36 = var36.bind(var4)(var34);
            var34 = var36.getPremiumGroupPrimaryUserName;
            var34 = var34.bind(var36)();
            var22['primaryName'] = var34;
            var22 = var28.bind(var32)(var23, var22);
            var15['children'] = var22;
            var13 = var21.bind(var4)(var17, var15);
case 91:
            var12[4] = var13;
            var17 = _closure1_slot16;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 37;
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
            var12[5] = var13;
            var17 = _closure1_slot17;
            var15 = _closure1_slot5;
            var13 = {};
            var18 = var16.button;
            var13['style'] = var18;
            var21 = var10;
            if(!var10) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var23 = _closure1_slot16;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var18 = 38;
            var18 = var28[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.PremiumFeaturesCardButtonSparkles;
            var18 = {};
            var21 = var23.bind(var4)(var22, var18);
case 93:
            var18 = new Array(2);
            var18[0] = var21;
            var19 = !var19;
            if(!var19) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var23 = _closure1_slot16;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 39;
            var21 = var28[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Button;
            var21 = {'text': null, 'icon': null, 'iconPosition': null, 'variant': 'experimental_premium-secondary', 'size': 'md', 'grow': true};
            if(var10) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            if(var27) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            if(!var25) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var32 = var30 == var31;
            var28 = false;
            if(var32) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var34 = var31.planIdFromItems;
            var30 = var30 != var34;
            if(!var30) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var35];
            var32 = var32.bind(var4)(var31);
            var31 = var32.getPremiumType;
            var31 = var31.bind(var32)(var34);
            var30 = var31 === var29;
case 105:
            var28 = var30;
case 103:
            if(var28) { _fun0002_ip = 107; continue _fun0002 }
case 101:
            var28 = _closure1_slot12;
            var28 = var28.TIER_0;
            if(!(var29 !== var28)) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 18;
            var29 = var32[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.8x0jKT;
            var28 = var29.bind(var30)(var28);
            _fun0002_ip = 110; continue _fun0002;
case 108:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 18;
            var30 = var34[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var34[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.cM8bbx;
            var28 = var30.bind(var31)(var29);
case 110:
            _fun0002_ip = 111; continue _fun0002;
case 107:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 18;
            var30 = var34[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var34[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.j+wlhy;
            var28 = var30.bind(var31)(var29);
case 111:
            _fun0002_ip = 112; continue _fun0002;
case 99:
            var30 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 18;
            var31 = var34[var29];
            var31 = var30.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var29 = var34[var29];
            var29 = var30.bind(var4)(var29);
            var29 = var29.t;
            var30 = var29.bkQ4bH;
            var29 = {};
            var33 = var33.discount;
            var33 = var33.amount;
            var29['percent'] = var33;
            var28 = var31.bind(var32)(var30, var29);
case 112:
            var26 = var28;
case 97:
            var21['text'] = var26;
            var26 = undefined;
            if(!var27) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var30 = _closure1_slot16;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 40;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.NitroWheelIcon;
            var28 = {'style': null, 'color': 'black', 'size': 'sm'};
            var31 = var16.buttonIcon;
            var28['style'] = var31;
            var26 = var30.bind(var4)(var29, var28);
case 113:
            var21['icon'] = var26;
            var26 = undefined;
            if(!var27) { _fun0002_ip = 115; continue _fun0002 }
case 116:
            var26 = 'start';
case 115:
            var21['iconPosition'] = var26;
            var21['disabled'] = var25;
            var24 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = _closure1_slot20;
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
            var21['onPress'] = var24;
            var19 = var23.bind(var4)(var22, var21);
case 95:
            var18[1] = var19;
            var13['children'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var12[6] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0002_ip = 117; continue _fun0002 }
case 118:
            var13 = _closure1_slot16;
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
case 117:
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