// app/components_native/premium/PremiumSubscriptionPricingUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CurrencyCodes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SubscriptionPlans;
    var _closure1_slot12 = var7;
    var7 = var4.SubscriptionPlanInfo;
    var _closure1_slot13 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot14 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot15 = var7;
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot16 = var7;
    var4 = var4.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var7 = var4.Fragment;
    var _closure1_slot19 = var7;
    var4 = var4.jsxs;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['marginTop'] = var10;
    var4['title'] = var9;
    var9 = {};
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['pricingSection'] = var9;
    var9 = {};
    var10 = 'line-through';
    var9['textDecorationLine'] = var10;
    var4['originalPrice'] = var9;
    var9 = {'lineHeight': 20, 'marginTop': 8, 'textAlign': 'center'};
    var4['cardText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = function PricingSubheadingCopy() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot21;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var _closure2_slot0 = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 12;
            var2 = var9[var6];
            var10 = var8.bind(var4)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var10)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 13;
            var2 = var9[var2];
            var7 = var3.bind(var4)(var2);
            var2 = {};
            var22 = false;
            var2['forceFetch'] = var22;
            var2 = var7.bind(var4)(var2);
            var11 = var2.fractionalState;
            var7 = 14;
            var2 = var9[var7];
            var3 = var3.bind(var4)(var2);
            var2 = var3.hasBoostDiscount;
            var3 = var2.bind(var3)(var10, var11);
            var2 = var9[var6];
            var14 = var8.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var19 = var13.bind(var14)(var12, var2);
            var2 = 15;
            var2 = var9[var2];
            var12 = var8.bind(var4)(var2);
            var2 = var12.useSubscriptionPlansLoaded;
            var2 = var2.bind(var12)();
            var12 = var9[var6];
            var15 = var8.bind(var4)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var14.bind(var15)(var13, var12);
            var _closure2_slot1 = var12;
            var12 = var9[var6];
            var15 = var8.bind(var4)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot8;
                    var3 = var4.get;
                    var2 = _closure2_slot1;
                    var2 = var2.planId;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13, var12);
            var16 = _closure1_slot4;
            var15 = var16.useEffect;
            var14 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.isReady;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.loadProducts;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = new Array(0);
            var12 = var15.bind(var16)(var14, var12);
            var6 = var9[var6];
            var12 = var8.bind(var4)(var6);
            var9 = var12.useStateFromStoresArray;
            var6 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getProduct;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 18;
                var1 = var7[var2];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ProductIds;
                var1 = var1.PREMIUM_GUILD_1_MONTHLY;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(5);
                var1[0] = var3;
                var8 = var4.getProduct;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.ProductIds;
                var3 = var3.PREMIUM_TIER_2_MONTHLY;
                var3 = var8.bind(var4)(var3);
                var1[1] = var3;
                var8 = var4.getProduct;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.ProductIds;
                var3 = var3.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY;
                var3 = var8.bind(var4)(var3);
                var1[2] = var3;
                var8 = var4.getProduct;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.ProductIds;
                var3 = var3.PREMIUM_TIER_2_YEARLY;
                var3 = var8.bind(var4)(var3);
                var1[3] = var3;
                var3 = var4.getProduct;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.ProductIds;
                var2 = var2.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY;
                var2 = var3.bind(var4)(var2);
                var1[4] = var2;
                return var1;
            };
            var9 = var9.bind(var12)(var8, var6);
            var8 = _closure1_slot3;
            var6 = 5;
            var9 = var8.bind(var4)(var9, var6);
            var15 = 0;
            var16 = var9[var15];
            var6 = 1;
            var23 = var9[var6];
            var6 = 2;
            var12 = var9[var6];
            var6 = 3;
            var8 = var9[var6];
            var6 = 4;
            var9 = var9[var6];
            var6 = null;
            if(!(var6 == var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = _closure1_slot13;
            var14 = _closure1_slot12;
            var14 = var14.PREMIUM_MONTH_GUILD;
            var13 = var18[var14];
case 6:
            var14 = var13.interval;
            var13 = var13.intervalCount;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = _closure1_slot10;
            var2 = var18.isReady;
            var2 = var2.bind(var18)();
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!(var6 != var16)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var2 = var6 == var16;
            var21 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var16.currencyCode;
            var2 = var18.toLowerCase;
            var21 = var2.bind(var18)();
case 12:
            var18 = var6 == var16;
            var2 = undefined;
            if(var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var16.price;
case 14:
            var16 = _closure1_slot15;
            var16 = var16.YEAR;
            if(!(var14 !== var16)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var2;
            var16 = var18;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = var2;
            var16 = var18;
            if(!(var6 != var16)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var24 = var6 == var12;
            var20 = undefined;
            if(var24) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var20 = var12.price;
case 21:
            var24 = var6 != var20;
            var12 = 0;
            if(!var24) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = var20;
case 23:
            var24 = var6 == var23;
            var20 = undefined;
            if(var24) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var20 = var23.price;
case 25:
            var23 = var6 != var20;
            var15 = 0;
            if(!var23) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = var20;
case 27:
            var18 = var12 - var15;
            var16 = var2;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var12 = var6 != var9;
            var2 = null;
            if(!var12) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var12 = var6 != var8;
            var2 = null;
            if(!var12) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var9 = var9.price;
            var8 = var8.price;
            var2 = var9 - var8;
case 29:
            var18 = var2;
            var16 = var18;
case 18:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 20;
            var2 = var2[var9];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isAndroid;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var2 = var6 != var18;
case 32:
            var12 = var18;
            if(!var2) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 21;
            var2 = var15[var2];
            var15 = var8.bind(var4)(var2);
            var8 = var15.convertToMajorCurrencyUnits;
            var2 = _closure1_slot11;
            var2 = var2.USD;
            var12 = var8.bind(var15)(var18, var2);
case 34:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isAndroid;
            var8 = var2.bind(var8)();
            if(!var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = var6 != var16;
case 36:
            var2 = var16;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 21;
            var8 = var15[var8];
            var15 = var9.bind(var4)(var8);
            var9 = var15.convertToMajorCurrencyUnits;
            var8 = _closure1_slot11;
            var8 = var8.USD;
            var2 = var9.bind(var15)(var16, var8);
case 38:
            var8 = var6 != var12;
            var18 = '...';
            var20 = var18;
            if(!var8) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var8 = 22;
            var9 = var23[var8];
            var15 = var16.bind(var4)(var9);
            var9 = var15.formatRate;
            var8 = var23[var8];
            var23 = var16.bind(var4)(var8);
            var16 = var23.formatPrice;
            var8 = {};
            var8['convertToMajorUnits'] = var22;
            var8 = var16.bind(var23)(var12, var21, var8);
            var20 = var9.bind(var15)(var8, var14, var13);
case 40:
            var _closure2_slot2 = var20;
            var6 = var6 != var2;
            if(!var6) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 22;
            var8 = var16[var6];
            var9 = var15.bind(var4)(var8);
            var8 = var9.formatRate;
            var6 = var16[var6];
            var16 = var15.bind(var4)(var6);
            var15 = var16.formatPrice;
            var6 = {};
            var6['convertToMajorUnits'] = var22;
            var6 = var15.bind(var16)(var2, var21, var6);
            var18 = var8.bind(var9)(var6, var14, var13);
case 42:
            var _closure2_slot3 = var18;
            var9 = _closure1_slot18;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 19;
            var6 = var6[var8];
            var6 = var13.bind(var4)(var6);
            var6 = var6.Text;
            if(!(var12 === var2)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var2 = {};
            var12 = var5.cardText;
            var2['style'] = var12;
            var12 = 'text-md/medium';
            var2['variant'] = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 23;
            var14 = var16[var12];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.Mmf63N;
            var12 = {};
            var12['price'] = var20;
            var12 = var14.bind(var15)(var13, var12);
            var2['children'] = var12;
            _fun0001_ip = 46; continue _fun0001;
case 44:
            var12 = {};
            var13 = var5.cardText;
            var12['style'] = var13;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 23;
            var15 = var21[var13];
            var15 = var14.bind(var4)(var15);
            var23 = var15.intl;
            var22 = var23.formatToPlainString;
            var15 = var21[var13];
            var15 = var14.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.lEIwDw;
            var15 = {};
            var15['price'] = var20;
            var15['originalPrice'] = var18;
            var15 = var22.bind(var23)(var16, var15);
            var12['accessibilityLabel'] = var15;
            var15 = 'text-md/medium';
            var12['variant'] = var15;
            var15 = var21[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var21[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.eRSsbW;
            var13 = {};
            var13['price'] = var20;
            var13['originalPrice'] = var18;
            var17 = function originalPriceHook(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var6 = _closure1_slot18;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var2 = _closure2_slot0;
                    var2 = var2.originalPrice;
                    var3['style'] = var2;
                    var2 = arg1;
                    var3['children'] = var2;
                    var2 = arg2;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 47:
                    return var1;
                }
            };
            var13['originalPriceHook'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var12['children'] = var13;
            var2 = var12;
case 46:
            var9 = var9.bind(var4)(var6, var2);
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var6 = var6.bind(var4)(var2);
            var2 = var6.hasFreeBoosts;
            var2 = var2.bind(var6)(var10, var11);
            if(!var2) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            if(!var3) { _fun0001_ip = 49; continue _fun0001 }
case 51:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var11 = var6.bind(var4)(var2);
            var6 = var11.isPremium;
            var2 = _closure1_slot14;
            var2 = var2.TIER_2;
            var2 = var6.bind(var11)(var10, var2);
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
case 49:
            var2 = var9;
            if(!var3) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var7 = var6.bind(var4)(var3);
            var6 = var7.isPremium;
            var3 = _closure1_slot14;
            var3 = var3.TIER_1;
            var3 = var6.bind(var7)(var10, var3);
            var2 = var9;
            if(!var3) { _fun0001_ip = 53; continue _fun0001 }
case 55:
            var7 = _closure1_slot20;
            var6 = _closure1_slot19;
            var3 = {};
            var12 = _closure1_slot18;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = var20[var8];
            var10 = var18.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var13 = var5.cardText;
            var10['style'] = var13;
            var13 = 'text-md/medium';
            var10['variant'] = var13;
            var13 = 23;
            var14 = var20[var13];
            var14 = var18.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.format;
            var13 = var20[var13];
            var13 = var18.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.XVMAKS;
            var13 = {};
            var17 = 24;
            var17 = var20[var17];
            var20 = var18.bind(var4)(var17);
            var18 = var20.formatPercent;
            var21 = _closure1_slot17;
            var17 = 100;
            var17 = var21 / var17;
            var17 = var18.bind(var20)(var19, var17);
            var13['discountPercent'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var9;
            var3['children'] = var10;
            var2 = var7.bind(var4)(var6, var3);
case 53:
            _fun0001_ip = 56; continue _fun0001;
case 52:
            var7 = _closure1_slot20;
            var6 = _closure1_slot19;
            var3 = {};
            var11 = _closure1_slot18;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = var18[var8];
            var8 = var17.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {};
            var12 = var5.cardText;
            var8['style'] = var12;
            var12 = 'text-md/medium';
            var8['variant'] = var12;
            var12 = 23;
            var13 = var18[var12];
            var13 = var17.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.ZikTt7;
            var12 = {};
            var16 = _closure1_slot16;
            var12['freeSubscriptionCount'] = var16;
            var16 = 24;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.formatPercent;
            var20 = _closure1_slot17;
            var16 = 100;
            var16 = var20 / var16;
            var16 = var17.bind(var18)(var19, var16);
            var12['discountPercent'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var8['children'] = var12;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['children'] = var8;
            var2 = var7.bind(var4)(var6, var3);
case 56:
            return var2;
case 8:
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'style': null, 'variant': 'text-md/medium', 'children': '...'};
            var5 = var5.cardText;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumSubscriptionPricingUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot21;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 15;
            var1 = var14[var1];
            var2 = var13.bind(var4)(var1);
            var1 = var2.useSubscriptionPlansLoaded;
            var8 = var1.bind(var2)();
            var3 = _closure1_slot20;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.pricingSection;
            var1['style'] = var5;
            var9 = _closure1_slot18;
            var5 = 19;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            var10 = var10.title;
            var5['style'] = var10;
            var10 = 23;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.3x1PFB;
            var10 = var11.bind(var12)(var10);
            var5['children'] = var10;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var9 = _closure1_slot18;
            var8 = _closure1_slot22;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 57:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();