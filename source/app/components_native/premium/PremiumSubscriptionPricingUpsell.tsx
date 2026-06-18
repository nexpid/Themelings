// app/components_native/premium/PremiumSubscriptionPricingUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function PricingSubheadingCopy() {
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
            var7 = 13;
            var2 = var9[var7];
            var3 = var3.bind(var4)(var2);
            var2 = var3.hasBoostDiscount;
            var3 = var2.bind(var3)(var10);
            var2 = var9[var6];
            var13 = var8.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var19 = var12.bind(var13)(var11, var2);
            var2 = 14;
            var2 = var9[var2];
            var11 = var8.bind(var4)(var2);
            var2 = var11.useSubscriptionPlansLoaded;
            var2 = var2.bind(var11)();
            var11 = var9[var6];
            var14 = var8.bind(var4)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var14)(var12, var11);
            var _closure2_slot1 = var11;
            var11 = var9[var6];
            var14 = var8.bind(var4)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
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
            var12 = var13.bind(var14)(var12, var11);
            var15 = _closure1_slot4;
            var14 = var15.useEffect;
            var13 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.isReady;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 16;
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
            var11 = new Array(0);
            var11 = var14.bind(var15)(var13, var11);
            var6 = var9[var6];
            var11 = var8.bind(var4)(var6);
            var9 = var11.useStateFromStoresArray;
            var6 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var8 = _closure1_slot10;
                var4 = var8.getProduct;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 17;
                var1 = var7[var2];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ProductIds;
                var1 = var1.PREMIUM_GUILD_1_MONTHLY;
                var4 = var4.bind(var8)(var1);
                var1 = new Array(5);
                var1[0] = var4;
                var9 = _closure1_slot10;
                var8 = var9.getProduct;
                var4 = var7[var2];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ProductIds;
                var4 = var4.PREMIUM_TIER_2_MONTHLY;
                var4 = var8.bind(var9)(var4);
                var1[1] = var4;
                var9 = _closure1_slot10;
                var8 = var9.getProduct;
                var4 = var7[var2];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ProductIds;
                var4 = var4.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY;
                var4 = var8.bind(var9)(var4);
                var1[2] = var4;
                var9 = _closure1_slot10;
                var8 = var9.getProduct;
                var4 = var7[var2];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ProductIds;
                var4 = var4.PREMIUM_TIER_2_YEARLY;
                var4 = var8.bind(var9)(var4);
                var1[3] = var4;
                var4 = _closure1_slot10;
                var3 = var4.getProduct;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.ProductIds;
                var2 = var2.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY;
                var2 = var3.bind(var4)(var2);
                var1[4] = var2;
                return var1;
            };
            var9 = var9.bind(var11)(var8, var6);
            var8 = _closure1_slot3;
            var6 = 5;
            var9 = var8.bind(var4)(var9, var6);
            var14 = 0;
            var15 = var9[var14];
            var6 = 1;
            var21 = var9[var6];
            var6 = 2;
            var11 = var9[var6];
            var6 = 3;
            var8 = var9[var6];
            var6 = 4;
            var9 = var9[var6];
            var6 = null;
            if(!(var6 == var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot13;
            var13 = _closure1_slot12;
            var13 = var13.PREMIUM_MONTH_GUILD;
            var12 = var17[var13];
case 6:
            var13 = var12.interval;
            var12 = var12.intervalCount;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = _closure1_slot10;
            var2 = var17.isReady;
            var2 = var2.bind(var17)();
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!(var6 != var15)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var2 = var6 == var15;
            var20 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var15.currencyCode;
            var2 = var17.toLowerCase;
            var20 = var2.bind(var17)();
case 12:
            var17 = var6 == var15;
            var2 = undefined;
            if(var17) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var15.price;
case 14:
            var15 = _closure1_slot15;
            var15 = var15.YEAR;
            if(!(var13 !== var15)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var17 = var2;
            var15 = var17;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = var2;
            var15 = var17;
            if(!(var6 != var15)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var22 = var6 == var11;
            var18 = undefined;
            if(var22) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = var11.price;
case 21:
            var22 = var6 != var18;
            var11 = 0;
            if(!var22) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var18;
case 23:
            var22 = var6 == var21;
            var18 = undefined;
            if(var22) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = var21.price;
case 25:
            var21 = var6 != var18;
            var14 = 0;
            if(!var21) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var14 = var18;
case 27:
            var17 = var11 - var14;
            var15 = var2;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var11 = var6 != var9;
            var2 = null;
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var11 = var6 != var8;
            var2 = null;
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var9 = var9.price;
            var8 = var8.price;
            var2 = var9 - var8;
case 29:
            var17 = var2;
            var15 = var17;
case 18:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 19;
            var2 = var2[var9];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isAndroid;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var2 = var6 != var17;
case 32:
            var11 = var17;
            if(!var2) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 20;
            var2 = var14[var2];
            var14 = var8.bind(var4)(var2);
            var8 = var14.convertToMajorCurrencyUnits;
            var2 = _closure1_slot11;
            var2 = var2.USD;
            var11 = var8.bind(var14)(var17, var2);
case 34:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isAndroid;
            var8 = var2.bind(var8)();
            if(!var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = var6 != var15;
case 36:
            var2 = var15;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 20;
            var8 = var14[var8];
            var14 = var9.bind(var4)(var8);
            var9 = var14.convertToMajorCurrencyUnits;
            var8 = _closure1_slot11;
            var8 = var8.USD;
            var2 = var9.bind(var14)(var15, var8);
case 38:
            var8 = var6 != var11;
            var17 = '...';
            var18 = var17;
            if(!var8) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 21;
            var9 = var21[var8];
            var14 = var15.bind(var4)(var9);
            var9 = var14.formatRate;
            var8 = var21[var8];
            var21 = var15.bind(var4)(var8);
            var15 = var21.formatPrice;
            var8 = {};
            var22 = false;
            var8['convertToMajorUnits'] = var22;
            var8 = var15.bind(var21)(var11, var20, var8);
            var18 = var9.bind(var14)(var8, var13, var12);
case 40:
            var _closure2_slot2 = var18;
            var6 = var6 != var2;
            if(!var6) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 21;
            var8 = var15[var6];
            var9 = var14.bind(var4)(var8);
            var8 = var9.formatRate;
            var6 = var15[var6];
            var15 = var14.bind(var4)(var6);
            var14 = var15.formatPrice;
            var6 = {};
            var21 = false;
            var6['convertToMajorUnits'] = var21;
            var6 = var14.bind(var15)(var2, var20, var6);
            var17 = var8.bind(var9)(var6, var13, var12);
case 42:
            var _closure2_slot3 = var17;
            var9 = _closure1_slot18;
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 18;
            var6 = var6[var8];
            var6 = var12.bind(var4)(var6);
            var6 = var6.Text;
            if(!(var11 === var2)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var2 = {};
            var11 = var5.cardText;
            var2['style'] = var11;
            var11 = 'text-md/medium';
            var2['variant'] = var11;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var13 = var15[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.Mmf63F;
            var11 = {};
            var11['price'] = var18;
            var11 = var13.bind(var14)(var12, var11);
            var2['children'] = var11;
            _fun0001_ip = 46; continue _fun0001;
case 44:
            var11 = {};
            var12 = var5.cardText;
            var11['style'] = var12;
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 22;
            var14 = var20[var12];
            var14 = var13.bind(var4)(var14);
            var22 = var14.intl;
            var21 = var22.formatToPlainString;
            var14 = var20[var12];
            var14 = var13.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.lEIwDw;
            var14 = {};
            var14['price'] = var18;
            var14['originalPrice'] = var17;
            var14 = var21.bind(var22)(var15, var14);
            var11['accessibilityLabel'] = var14;
            var14 = 'text-md/medium';
            var11['variant'] = var14;
            var14 = var20[var12];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var20[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.eRSsbf;
            var12 = {};
            var12['price'] = var18;
            var12['originalPrice'] = var17;
            var16 = function originalPriceHook(arg1, arg2) {
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
                    var3 = 18;
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
            var12['originalPriceHook'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var11['children'] = var12;
            var2 = var11;
case 46:
            var9 = var9.bind(var4)(var6, var2);
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var6 = var6.bind(var4)(var2);
            var2 = var6.hasFreeBoosts;
            var2 = var2.bind(var6)(var10);
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
            var13 = 22;
            var14 = var20[var13];
            var14 = var18.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.format;
            var13 = var20[var13];
            var13 = var18.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.XVMAKU;
            var13 = {};
            var17 = 23;
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
            var12 = 22;
            var13 = var18[var12];
            var13 = var17.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.ZikTt+;
            var12 = {};
            var16 = _closure1_slot16;
            var12['freeSubscriptionCount'] = var16;
            var16 = 23;
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
            var1 = 18;
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
    var _closure1_slot22 = var1;
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
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumSubscriptionPricingUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumSubscriptionPricingUpsell() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot21;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 14;
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
            var5 = 18;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'mobile-text-heading-primary'};
            var10 = var10.title;
            var5['style'] = var10;
            var10 = 22;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["3x1PFE"];
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