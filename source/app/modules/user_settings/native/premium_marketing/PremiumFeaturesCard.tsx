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
    var16 = 4;
    var7 = var6[var16];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var18 = 7;
    var7 = var6[var18];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticsPages;
    var8 = var7.AnalyticsSections;
    var7 = var7.AnalyticsObjectTypes;
    var17 = 8;
    var10 = var6[var17];
    var11 = var5.bind(var1)(var10);
    var10 = var11.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot10 = var10;
    var10 = var11.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot11 = var10;
    var10 = var11.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot12 = var10;
    var10 = var11.PremiumTypes;
    var _closure1_slot13 = var10;
    var12 = var11.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot14 = var12;
    var12 = var11.SubscriptionIntervalTypes;
    var _closure1_slot15 = var12;
    var11 = var11.SubscriptionPlanInfo;
    var _closure1_slot16 = var11;
    var11 = 9;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var15 = var11.Fonts;
    var11 = 10;
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
    var26 = var10;
    var25 = var4;
    var4 = new var26[var11](var25, var24);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var13 = 'relative';
    var12['position'] = var13;
    var4['containerWrapper'] = var12;
    var12 = {'display': 'flex', 'justifyContent': 'flex-start', 'width': '100%', 'padding': 24, 'backgroundColor': 'transparent', 'overflow': 'hidden'};
    var13 = 12;
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
    var12['marginRight'] = var16;
    var4['logo'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['priceContainer'] = var12;
    var12 = {'maxWidth': '62%', 'includeFontPadding': true};
    var4['discountPriceText'] = var12;
    var12 = {};
    var16 = 13;
    var19 = var6[var16];
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
    var17 = var6[var16];
    var21 = var14.bind(var1)(var17);
    var20 = var15.PRIMARY_MEDIUM;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var19 = var17.WHITE_500;
    var17 = 14;
    var24 = var21.bind(var1)(var20, var19, var17);
    var25 = var12;
    var19 = copyDataProperties(var25, var24);
    var20 = -8;
    var19 = 'marginLeft';
    var12[var19] = var20;
    var4['featureLabel'] = var12;
    var12 = {};
    var12['paddingVertical'] = var18;
    var4['featureRow'] = var12;
    var18 = 16;
    var12 = {'height': 16, 'width': 16};
    var4['featureIcon'] = var12;
    var12 = {};
    var12['marginTop'] = var18;
    var4['button'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var4['freeTrialContainer'] = var12;
    var12 = {'marginTop': 8, 'paddingBottom': 2, 'paddingHorizontal': 8, 'borderRadius': null, 'backgroundColor': null, 'maxWidth': 200};
    var18 = var6[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.round;
    var12['borderRadius'] = var18;
    var18 = var6[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var12['backgroundColor'] = var18;
    var4['freeTrialTag'] = var12;
    var12 = {};
    var18 = var6[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
    var12['color'] = var18;
    var4['freeTrialTier0Color'] = var12;
    var12 = {};
    var18 = var6[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var12['color'] = var18;
    var4['freeTrialTier2Color'] = var12;
    var12 = {'backgroundColor': null, 'paddingHorizontal': 24, 'paddingVertical': 12, 'bottom': 0};
    var17 = var6[var17];
    var18 = var14.bind(var1)(var17);
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLACK_500;
    var19 = var18.bind(var1)(var17);
    var18 = var19.alpha;
    var17 = 0.4;
    var18 = var18.bind(var19)(var17);
    var17 = var18.hex;
    var17 = var17.bind(var18)();
    var12['backgroundColor'] = var17;
    var4['trialSubTextContainer'] = var12;
    var12 = {};
    var16 = var6[var16];
    var17 = var14.bind(var1)(var16);
    var16 = var15.DISPLAY_MEDIUM;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.WHITE_500;
    var24 = var17.bind(var1)(var16, var15, var13);
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
            var2 = arg1;
            var1 = var2.premiumItem;
            var _closure2_slot0 = var1;
            var13 = var2.discountedPriceString;
            var12 = var2.discountOffer;
            var17 = var2.activeDiscountInfo;
            var4 = _closure1_slot20;
            var5 = undefined;
            var6 = var4.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 15;
            var8 = var7[var8];
            var10 = var4.bind(var5)(var8);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var11;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var9.bind(var10)(var8, var3);
            var8 = _closure1_slot1;
            var3 = 16;
            var3 = var7[var3];
            var9 = var8.bind(var5)(var3);
            var8 = var9.getIntervalStringAsNoun;
            var3 = var1.interval;
            var18 = var8.bind(var9)(var3);
            var3 = _closure1_slot16;
            var1 = var1.basePlanId;
            var1 = var3[var1];
            var3 = 17;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.formatRate;
            var11 = null;
            var4 = var11 == var19;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var19.priceString;
case 2:
            var9 = var11 != var3;
            var14 = '$...';
            var4 = var14;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3;
case 4:
            var3 = var1.interval;
            var1 = var1.intervalCount;
            var10 = var7.bind(var8)(var4, var3, var1);
            if(!(var11 != var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var11 == var12)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(!(var11 == var17)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot18;
            var3 = _closure1_slot5;
            var1 = {};
            var7 = true;
            var1['accessible'] = var7;
            var7 = var6.priceContainer;
            var1['style'] = var7;
            var9 = _closure1_slot17;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var15 = 20;
            var7 = var7[var15];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var20 = var6.priceText;
            var16 = new Array(2);
            var16[0] = var20;
            var20 = var6.price;
            var16[1] = var20;
            var7['style'] = var16;
            var20 = var11 == var19;
            var16 = undefined;
            if(var20) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var16 = var19.priceString;
case 11:
            var19 = var11 != var16;
            if(!var19) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var16;
case 13:
            var7['children'] = var14;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var14 = _closure1_slot17;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var16 = var6.priceText;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var6.interval;
            var15[1] = var16;
            var8['style'] = var15;
            var15 = global;
            var15 = var15.HermesInternal;
            var16 = var15.concat;
            var15 = ' / ';
            var15 = var16.bind(var15)(var18);
            var8['children'] = var15;
            var8 = var14.bind(var5)(var9, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var7 = _closure1_slot17;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 18;
            var3 = var16[var3];
            var3 = var9.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var8 = var6.discountPriceText;
            var3['style'] = var8;
            var8 = 19;
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
            if(var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var16 = var17.percentage;
case 16:
            if(!(var11 == var16)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var16 = _closure1_slot11;
case 18:
            var8['percent'] = var16;
            var18 = var11 == var17;
            var16 = undefined;
            if(var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var17.duration;
case 20:
            if(!(var11 == var16)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = _closure1_slot10;
case 22:
            var8['numMonths'] = var16;
            var8['regularPrice'] = var10;
            var8 = var14.bind(var15)(var9, var8);
            var3['children'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 15:
            _fun0001_ip = 24; continue _fun0001;
case 8:
            var4 = _closure1_slot17;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/normal', 'color': 'always-white'};
            var6 = var6.discountPriceText;
            var2['style'] = var6;
            var6 = 19;
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
            if(var14) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var12 = var13.user_usage_limit;
case 25:
            var13 = var11 != var12;
            var11 = 1;
            if(!var13) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var11 = var12;
case 27:
            var6['numMonths'] = var11;
            var6['regularPrice'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
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
            var32 = var1.premiumType;
            var _closure2_slot0 = var32;
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
            var13 = var1.forFractionalPremium;
            if(!(var13 === var4)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var13 = false;
case 31:
            var15 = var1.hidePrice;
            if(!(var15 === var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var15 = false;
case 33:
            var21 = var1.isPremiumGroup;
            if(!(var21 === var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var21 = false;
case 35:
            var7 = var1.premiumGroupRole;
            if(!(var7 === var4)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var7 = var1.UNSPECIFIED;
case 37:
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot20;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 22;
            var2 = var5[var1];
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot19;
            var2 = var3.has;
            var3 = var2.bind(var3)(var32);
            var2 = 'only Tier 0 and Tier 2 are supported';
            var2 = var6.bind(var4)(var3, var2);
            var3 = _closure1_slot0;
            var2 = 23;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.usePremiumTrialOffer;
            var34 = var2.bind(var6)();
            _closure2_slot4 = var34;
            var2 = 24;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.usePremiumDiscountOffer;
            var29 = var2.bind(var6)();
            var2 = 25;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useActiveDiscountInfo;
            var22 = var2.bind(var3)();
            var27 = null;
            var2 = var27 == var34;
            var5 = undefined;
            if(var2) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var5 = var34.trial_id;
case 39:
            var3 = _closure1_slot12;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 26;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var6)();
            var6 = var27 == var34;
            var10 = undefined;
            if(var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var10 = var34.subscription_trial;
case 41:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var37 = 16;
            var6 = var6[var37];
            var11 = var8.bind(var4)(var6);
            var8 = var11.formatIntervalDuration;
            var6 = {};
            var17 = var27 == var10;
            var12 = undefined;
            if(var17) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var12 = var10.interval;
case 43:
            var6['intervalType'] = var12;
            var17 = var27 == var10;
            var12 = undefined;
            if(var17) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var12 = var10.interval_count;
case 45:
            var6['intervalCount'] = var12;
            var20 = var8.bind(var11)(var6);
            if(!(var5 !== var3)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var37];
            var6 = var5.bind(var4)(var3);
            var5 = var6.formatTrialCtaIntervalDuration;
            var3 = {};
            var11 = var27 == var10;
            var8 = undefined;
            if(var11) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = var10.interval;
case 49:
            var3['intervalType'] = var8;
            var11 = var27 == var10;
            var8 = undefined;
            if(var11) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var8 = var10.interval_count;
case 51:
            var3['intervalCount'] = var8;
            var30 = var5.bind(var6)(var3);
            _fun0002_ip = 53; continue _fun0002;
case 47:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 19;
            var5 = var10[var3];
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.Gs9Aaj;
            var30 = var5.bind(var6)(var3);
case 53:
            var10 = var32 === var2;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var5 = new Array(1);
            var5[0] = var34;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.parse;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                    var5 = _closure2_slot4;
                    var4 = var5.expires_at;
case 54:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                    var1 = var4;
case 56:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var3, var5);
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 27;
            var3 = var11[var3];
            var5 = var8.bind(var4)(var3);
            var3 = 60000;
            var43 = var5.bind(var4)(var6, var3);
            var3 = 28;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            _closure2_slot5 = var3;
            var12 = _closure1_slot0;
            var6 = 15;
            var3 = var11[var6];
            var18 = var12.bind(var4)(var3);
            var17 = var18.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var1 = var3.getPremiumTypeSubscription;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.hasFetchedSubscriptions;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var17 = var17.bind(var18)(var5, var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var3 = var5.bind(var4)(var17, var3);
            var5 = 0;
            var33 = var3[var5];
            var46 = 1;
            var3 = var3[var46];
            var5 = _closure1_slot14;
            var5 = var5[var32];
            _closure2_slot6 = var5;
            var5 = var11[var6];
            var23 = var12.bind(var4)(var5);
            var18 = var23.useStateFromStores;
            var5 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isLoadedForSKUs;
                var4 = _closure2_slot6;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var18.bind(var23)(var17, var5);
            var6 = var11[var6];
            var18 = var12.bind(var4)(var6);
            var17 = var18.useStateFromStores;
            var6 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var26 = var17.bind(var18)(var12, var6);
            var6 = 29;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var18 = var6.bind(var4)(var32, var13, var7);
            var25 = var27 != var33;
            if(!var25) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var25 = var5;
case 58:
            if(!var25) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var25 = var3;
case 60:
            var3 = var27 != var33;
            var5 = null;
            if(!var3) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var3 = var33.planIdFromItems;
            var5 = null;
            if(!(var4 !== var3)) { _fun0002_ip = 62; continue _fun0002 }
case 64:
            var6 = _closure1_slot16;
            var3 = var33.planIdFromItems;
            var5 = var6[var3];
case 62:
            var6 = var27 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var3 = var5.interval;
case 65:
            if(!(var27 == var3)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var5 = _closure1_slot15;
            var3 = var5.MONTH;
case 67:
            _closure2_slot7 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 30;
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
                    if(!var1) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                    var1 = !var6;
case 69:
                    if(!var1) { _fun0004_ip = 71; continue _fun0004 }
case 57:
                    var1 = var2 === var5;
case 71:
                    if(!var1) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                    var2 = _closure2_slot0;
                    var1 = var4 === var2;
case 72:
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 74:
                    var2 = _closure2_slot7;
                    var1 = var3 === var2;
case 34:
                    return var1;
                }
            };
            var31 = var7.bind(var8)(var6);
            _closure2_slot8 = var31;
            var6 = _closure1_slot1;
            var1 = var5[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var27 != var31;
            var1 = 'could not find a premium item';
            var1 = var7.bind(var4)(var6, var1);
            var1 = 31;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useDiscountedPremiumProductInfo;
            var1 = new Array(1);
            var1[0] = var31;
            var1 = var3.bind(var5)(var29, var1);
            var23 = var1.discountedPriceString;
            var28 = var27 != var29;
            if(!var28) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var28 = var27 != var23;
case 75:
            var1 = _closure1_slot13;
            var1 = var1.TIER_0;
            if(!(var2 !== var1)) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var35 = var16.freeTrialTier2Color;
            _fun0002_ip = 79; continue _fun0002;
case 77:
            var35 = var16.freeTrialTier0Color;
case 79:
            var3 = _closure1_slot18;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.containerWrapper;
            var1['style'] = var5;
            var6 = var28;
            if(var6) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var6 = var27 != var22;
case 80:
            if(!var6) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var8 = _closure1_slot17;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 32;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.PremiumDiscountPill;
            var5 = {};
            var11 = var16.discountPill;
            var5['style'] = var11;
            var5['discountOffer'] = var29;
            var11 = var27 != var22;
            var5['isActiveDiscount'] = var11;
            var6 = var8.bind(var4)(var7, var5);
case 82:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot18;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 33;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['premiumType'] = var32;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var9 = {};
            var12 = var16.card;
            var9['style'] = var12;
            var17 = _closure1_slot17;
            var12 = {};
            var36 = var16.logoContainer;
            var12['style'] = var36;
            var39 = _closure1_slot17;
            var38 = _closure1_slot1;
            var40 = _closure1_slot2;
            if(var21) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var21 = 35;
            var21 = var40[var21];
            var36 = var38.bind(var4)(var21);
            var21 = {};
            var21['premiumType'] = var32;
            var41 = var16.logo;
            var21['style'] = var41;
            var21 = var39.bind(var4)(var36, var21);
            _fun0002_ip = 86; continue _fun0002;
case 84:
            var36 = 34;
            var36 = var40[var36];
            var38 = var38.bind(var4)(var36);
            var36 = {'width': 185, 'height': 20, 'alwaysWhite': true};
            var21 = var39.bind(var4)(var38, var36);
case 86:
            var12['children'] = var21;
            var17 = var17.bind(var4)(var11, var12);
            var12 = new Array(6);
            var12[0] = var17;
            var36 = _closure1_slot17;
            var21 = _closure1_slot1;
            var38 = _closure1_slot2;
            var17 = 36;
            var17 = var38[var17];
            var21 = var21.bind(var4)(var17);
            var17 = {};
            var17['premiumType'] = var32;
            var17 = var36.bind(var4)(var21, var17);
            var12[1] = var17;
            var13 = !var13;
            if(!var13) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var13 = !var15;
case 87:
            if(!var13) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var21 = _closure1_slot17;
            var17 = _closure1_slot22;
            var15 = {};
            var15['premiumItem'] = var31;
            var15['discountedPriceString'] = var23;
            var15['discountOffer'] = var29;
            var15['activeDiscountInfo'] = var22;
            var13 = var21.bind(var4)(var17, var15);
case 89:
            var12[2] = var13;
            var13 = var10;
            if(!var10) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var21 = _closure1_slot17;
            var17 = _closure1_slot5;
            var15 = {};
            var22 = var16.freeTrialContainer;
            var15['style'] = var22;
            var22 = {};
            var23 = var16.freeTrialTag;
            var22['style'] = var23;
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var23 = 18;
            var23 = var36[var23];
            var23 = var31.bind(var4)(var23);
            var31 = var23.Text;
            var23 = {};
            var36 = 'eyebrow';
            var23['variant'] = var36;
            var23['style'] = var35;
            var35 = var27 == var34;
            var34 = null;
            if(var35) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var44 = global;
            var38 = var44.Number;
            var36 = var38.isNaN;
            var35 = var43.days;
            var35 = var36.bind(var38)(var35);
            var40 = _closure1_slot0;
            var41 = _closure1_slot2;
            var36 = 19;
            var38 = var41[var36];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            if(var35) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var42 = var39.formatToPlainString;
            var35 = var41[var36];
            var35 = var40.bind(var4)(var35);
            var35 = var35.t;
            var38 = var35.+FgdjP;
            var35 = {};
            var45 = var44.Math;
            var44 = var45.max;
            var43 = var43.days;
            var43 = var44.bind(var45)(var43, var46);
            var35['days'] = var43;
            var35 = var42.bind(var39)(var38, var35);
            _fun0002_ip = 97; continue _fun0002;
case 95:
            var38 = var39.string;
            var36 = var41[var36];
            var36 = var40.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.qVcfa0;
            var35 = var38.bind(var39)(var36);
case 97:
            var34 = var35;
case 93:
            var23['children'] = var34;
            var23 = var21.bind(var4)(var31, var23);
            var22['children'] = var23;
            var22 = var21.bind(var4)(var17, var22);
            var15['children'] = var22;
            var13 = var21.bind(var4)(var17, var15);
case 91:
            var12[3] = var13;
            var17 = _closure1_slot17;
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
            var12[4] = var13;
            var17 = _closure1_slot18;
            var15 = _closure1_slot5;
            var13 = {};
            var18 = var16.button;
            var13['style'] = var18;
            var21 = var10;
            if(!var10) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var23 = _closure1_slot17;
            var22 = _closure1_slot0;
            var31 = _closure1_slot2;
            var18 = 38;
            var18 = var31[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.PremiumFeaturesCardButtonSparkles;
            var18 = {};
            var21 = var23.bind(var4)(var22, var18);
case 98:
            var18 = new Array(2);
            var18[0] = var21;
            var19 = !var19;
            if(!var19) { _fun0002_ip = 100; continue _fun0002 }
case 101:
            var23 = _closure1_slot17;
            var22 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 39;
            var21 = var31[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Button;
            var21 = {'text': null, 'icon': null, 'iconPosition': null, 'variant': 'experimental_premium-secondary', 'size': 'md', 'grow': true};
            if(var10) { _fun0002_ip = 102; continue _fun0002 }
case 103:
            if(var28) { _fun0002_ip = 104; continue _fun0002 }
case 105:
            if(!var25) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            var34 = var27 == var33;
            var31 = false;
            if(var34) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var36 = var33.planIdFromItems;
            var33 = var27 != var36;
            if(!var33) { _fun0002_ip = 110; continue _fun0002 }
case 111:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var37];
            var35 = var35.bind(var4)(var34);
            var34 = var35.getPremiumType;
            var34 = var34.bind(var35)(var36);
            var33 = var34 === var32;
case 110:
            var31 = var33;
case 108:
            if(var31) { _fun0002_ip = 112; continue _fun0002 }
case 106:
            var31 = _closure1_slot13;
            var31 = var31.TIER_0;
            if(!(var32 !== var31)) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 19;
            var32 = var35[var31];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var35[var31];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.8x0jKT;
            var31 = var32.bind(var33)(var31);
            _fun0002_ip = 115; continue _fun0002;
case 113:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 19;
            var33 = var36[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var36[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.cM8bbx;
            var31 = var33.bind(var34)(var32);
case 115:
            _fun0002_ip = 116; continue _fun0002;
case 112:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 19;
            var33 = var36[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var36[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.j+wlhy;
            var31 = var33.bind(var34)(var32);
case 116:
            _fun0002_ip = 117; continue _fun0002;
case 104:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 19;
            var34 = var36[var32];
            var34 = var33.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.formatToPlainString;
            var32 = var36[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.t;
            var33 = var32.bkQ4bH;
            var32 = {};
            var36 = var29.discount;
            var36 = var36.amount;
            var32['percent'] = var36;
            var31 = var34.bind(var35)(var33, var32);
case 117:
            var30 = var31;
case 102:
            var21['text'] = var30;
            var29 = var27 != var29;
            var27 = undefined;
            if(!var29) { _fun0002_ip = 118; continue _fun0002 }
case 119:
            var31 = _closure1_slot17;
            var30 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 40;
            var29 = var34[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.NitroWheelIcon;
            var29 = {};
            var32 = var16.buttonIcon;
            var29['style'] = var32;
            var33 = _closure1_slot1;
            var32 = 12;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.unsafe_rawColors;
            var32 = var32.BRAND_500;
            var29['color'] = var32;
            var32 = 'sm';
            var29['size'] = var32;
            var27 = var31.bind(var4)(var30, var29);
case 118:
            var21['icon'] = var27;
            var27 = undefined;
            if(!var28) { _fun0002_ip = 120; continue _fun0002 }
case 121:
            var27 = 'start';
case 120:
            var21['iconPosition'] = var27;
            var26 = !var26;
            var21['shiny'] = var26;
            var21['disabled'] = var25;
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
case 100:
            var18[1] = var19;
            var13['children'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var12[5] = var13;
            var9['children'] = var12;
            var11 = var8.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0002_ip = 122; continue _fun0002 }
case 123:
            var13 = _closure1_slot17;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = true;
            var11['accessible'] = var15;
            var15 = var16.trialSubTextContainer;
            var11['style'] = var15;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 18;
            var14 = var21[var14];
            var14 = var17.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-md/normal';
            var14['variant'] = var18;
            var16 = var16.trialSubText;
            var14['style'] = var16;
            var16 = 19;
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
case 122:
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