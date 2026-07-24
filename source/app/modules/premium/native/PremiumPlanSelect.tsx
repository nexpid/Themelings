// app/modules/premium/native/PremiumPlanSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function BoostPurchaseNitroBanner() {
        var1 = _closure1_slot35;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var3 = _closure1_slot33;
        var14 = _closure1_slot0;
        var18 = _closure1_slot2;
        var6 = 19;
        var1 = var18[var6];
        var1 = var14.bind(var4)(var1);
        var2 = var1.Stack;
        var1 = {};
        var11 = 'center';
        var1['align'] = var11;
        var10 = _closure1_slot1;
        var9 = 18;
        var5 = var18[var9];
        var5 = var10.bind(var4)(var5);
        var5 = var5.space;
        var5 = var5.PX_12;
        var1['spacing'] = var5;
        var5 = var15.nitroBanner;
        var1['style'] = var5;
        var8 = _closure1_slot32;
        var5 = 20;
        var5 = var18[var5];
        var5 = var14.bind(var4)(var5);
        var7 = var5.TreasureChestBannerSpotIllustration;
        var5 = {'width': 117, 'height': 93, 'accessible': false};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot33;
        var6 = var18[var6];
        var6 = var14.bind(var4)(var6);
        var7 = var6.Stack;
        var6 = {};
        var6['align'] = var11;
        var9 = var18[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.space;
        var9 = var9.PX_4;
        var6['spacing'] = var9;
        var12 = _closure1_slot32;
        var10 = 21;
        var9 = var18[var10];
        var9 = var14.bind(var4)(var9);
        var11 = var9.Text;
        var9 = {'variant': 'text-md/semibold', 'color': 'text-default'};
        var13 = var15.nitroBannerText;
        var9['style'] = var13;
        var13 = 22;
        var16 = var18[var13];
        var16 = var14.bind(var4)(var16);
        var21 = var16.intl;
        var20 = var21.format;
        var16 = var18[var13];
        var16 = var14.bind(var4)(var16);
        var16 = var16.t;
        var19 = var16.jbrHpT;
        var16 = {};
        var25 = _closure1_slot32;
        var22 = var18[var10];
        var22 = var14.bind(var4)(var22);
        var24 = var22.Text;
        var23 = {'variant': 'text-md/semibold', 'color': 'text-feedback-positive'};
        var22 = var18[var13];
        var22 = var14.bind(var4)(var22);
        var28 = var22.intl;
        var27 = var28.format;
        var22 = var18[var13];
        var22 = var14.bind(var4)(var22);
        var22 = var22.t;
        var26 = var22.RmVM19;
        var22 = {};
        var29 = _closure1_slot16;
        var22['percentageOff'] = var29;
        var22 = var27.bind(var28)(var26, var22);
        var23['children'] = var22;
        var22 = 'discount';
        var22 = var25.bind(var4)(var24, var23, var22);
        var16['discount'] = var22;
        var16 = var20.bind(var21)(var19, var16);
        var9['children'] = var16;
        var11 = var12.bind(var4)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var12 = _closure1_slot32;
        var10 = var18[var10];
        var10 = var14.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
        var15 = var15.nitroBannerText;
        var10['style'] = var15;
        var15 = var18[var13];
        var15 = var14.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.format;
        var13 = var18[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.t;
        var14 = var13.HYpETY;
        var13 = {};
        var17 = _closure1_slot17;
        var13['boostCount'] = var17;
        var13 = var15.bind(var16)(var14, var13);
        var10['children'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function getPlanDescription(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var9 = arguments[1];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var2 = var6.premiumTier;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6.numPremiumGuild;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var6.premiumTier;
            var9 = _closure1_slot20;
            var9 = var9.TIER_1;
            if(!(var10 !== var9)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var2];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.u6dBsN;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var2];
            var1 = var10.bind(var7)(var1);
            var1 = var1.t;
            var9 = var1.sexoHq;
case 12:
            var1 = {};
            var10 = var6.numPremiumGuild;
            var1['num'] = var10;
            var1 = var4.bind(var5)(var9, var1);
            _fun0001_ip = 13; continue _fun0001;
case 8:
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.gDsyB9;
            var2 = {};
            var8 = var6.numPremiumGuild;
            var2['numSubscriptions'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 6:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.getPremiumTypeDisplayName;
            var2 = var6.premiumTier;
            var1 = var3.bind(var4)(var2);
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 4:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.gDsyB9;
            var2 = {};
            var6 = var6.numPremiumGuild;
            var2['numSubscriptions'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function BoostDeltaPriceTrailing(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.price;
            var10 = var1.interval;
            var4 = _closure1_slot33;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var11.bind(var3)(var1);
            var2 = var1.Stack;
            var1 = {'direction': 'horizontal', 'align': 'center'};
            var12 = _closure1_slot1;
            var8 = 18;
            var5 = var9[var8];
            var5 = var12.bind(var3)(var5);
            var5 = var5.space;
            var5 = var5.PX_4;
            var1['spacing'] = var5;
            var7 = _closure1_slot32;
            var5 = 30;
            var5 = var9[var5];
            var5 = var11.bind(var3)(var5);
            var6 = var5.NitroWheelIcon;
            var5 = {};
            var15 = 'xs';
            var5['size'] = var15;
            var8 = var9[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var8.colors;
            var8 = var8.ICON_FEEDBACK_POSITIVE;
            var5['color'] = var8;
            var6 = var7.bind(var3)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot32;
            var17 = 21;
            var6 = var9[var17];
            var6 = var11.bind(var3)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var16 = 22;
            var9 = var9[var16];
            var9 = var11.bind(var3)(var9);
            var12 = var9.intl;
            var11 = var12.format;
            var9 = _closure1_slot21;
            var9 = var9.MONTH;
            if(!(var10 !== var9)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var10.bind(var3)(var9);
            var9 = var9.t;
            var10 = var9.rS8FA+;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var15.bind(var3)(var9);
            var9 = var9.t;
            var10 = var9.AbOLNu;
case 18:
            var9 = {};
            var16 = _closure1_slot32;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var14 = var15.bind(var3)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/semibold', 'color': 'text-feedback-positive'};
            var14['children'] = var13;
            var13 = 'price';
            var13 = var16.bind(var3)(var15, var14, var13);
            var9['price'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var3)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function PlanRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var14 = var2.plan;
            var _closure2_slot0 = var14;
            var1 = var2.purchase;
            var _closure2_slot1 = var1;
            var27 = var2.style;
            var32 = var2.subscription;
            var _closure2_slot2 = var32;
            var6 = var2.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = false;
case 19:
            var23 = var2.hasBackground;
            if(!(var23 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var23 = false;
case 21:
            var1 = var2.shouldShowModernBoostFlow;
            if(!(var1 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = false;
case 23:
            var17 = var2.showBoostOnlyLabels;
            if(!(var17 === var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var17 = false;
case 25:
            var2 = var2.recommendedBoostCount;
            if(!(var2 === var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = null;
case 27:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var5 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot20;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0004_ip = 21; continue _fun0004 }
case 33:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot20;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0004_ip = 31; continue _fun0004 }
case 21:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot20;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0004_ip = 31; continue _fun0004 }
case 25:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var2 = var7[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['subscription'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 38;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.WhatYouLoseMode;
                    var5 = var5.DOWNGRADE;
                    var2['mode'] = var5;
                    var5 = function onContinue() {
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = var1.productId;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onContinue'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 29; continue _fun0004;
case 31:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = _closure1_slot35;
            var19 = var7.bind(var4)();
            var8 = _closure1_slot15;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var24 = var8.bind(var4)(var7);
            var8 = _closure1_slot15;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.purchasingProductId;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var8.bind(var4)(var7);
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 31;
            var8 = var16[var8];
            var12 = var10.bind(var4)(var8);
            var11 = var12.useToken;
            var13 = _closure1_slot1;
            var25 = 18;
            var8 = var16[var25];
            var8 = var13.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND;
            var12 = var11.bind(var12)(var8);
            var8 = 32;
            var8 = var16[var8];
            var15 = var10.bind(var4)(var8);
            var13 = var15.useStateFromStoresArray;
            var8 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var4 = _closure1_slot13;
                var3 = var4.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot13;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var13 = var13.bind(var15)(var11, var8);
            var11 = _closure1_slot4;
            var8 = 2;
            var11 = var11.bind(var4)(var13, var8);
            var13 = 0;
            var18 = var11[var13];
            var8 = 1;
            var21 = var11[var8];
            var11 = _closure1_slot9;
            var8 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isPatchOrderLoading;
                    if(var1) { _fun0005_ip = 34; continue _fun0005 }
case 3:
                    var1 = var2.isCreateOrderLoading;
case 34:
                    return var1;
                }
            };
            var11 = var11.bind(var4)(var8);
            var8 = 33;
            var8 = var16[var8];
            var15 = var10.bind(var4)(var8);
            var8 = var15.usePremiumTier2DeltaPriceString;
            var40 = var15;
            var39 = var14;
            var38 = var32;
            var37 = var18;
            var36 = var1;
            var15 = var40[var8](var39, var38, var37, var36, var35);
            var8 = 34;
            var8 = var16[var8];
            var16 = var10.bind(var4)(var8);
            var10 = var16.useCheckoutPlanPriceString;
            var8 = var14.productId;
            var31 = var10.bind(var16)(var8, var18);
            var8 = null;
            if(!(var8 != var15)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var31 = var15;
case 35:
            if(!(var8 == var31)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var31 = _closure1_slot18;
case 37:
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 35;
            var10 = var18[var10];
            var10 = var16.bind(var4)(var10);
            var26 = var10.bind(var4)();
            var16 = var14.premiumTier;
            var10 = _closure1_slot20;
            var10 = var10.TIER_2;
            var16 = var16 === var10;
            if(!var16) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var10 = var14.numPremiumGuild;
            var16 = var13 === var10;
case 39:
            var29 = null;
            if(!var16) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var20 = _closure1_slot32;
            var28 = _closure1_slot0;
            var34 = _closure1_slot2;
            var10 = 36;
            var10 = var34[var10];
            var10 = var28.bind(var4)(var10);
            var18 = var10.LegacyText;
            var10 = {};
            var30 = var19.rowText;
            var22 = new Array(2);
            var22[0] = var30;
            var30 = var19.rowPlanDescriptionSubtext;
            var22[1] = var30;
            var10['style'] = var22;
            var22 = 22;
            var30 = var34[var22];
            var30 = var28.bind(var4)(var30);
            var33 = var30.intl;
            var30 = var33.format;
            var22 = var34[var22];
            var22 = var28.bind(var4)(var22);
            var22 = var22.t;
            var28 = var22.he52LA;
            var22 = {};
            var34 = _closure1_slot17;
            var22['num'] = var34;
            var22 = var30.bind(var33)(var28, var22);
            var10['children'] = var22;
            var29 = var20.bind(var4)(var18, var10);
case 41:
            var10 = var14.premiumTier;
            var18 = var8 == var10;
            if(var18) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var10 = var14.numPremiumGuild;
            var18 = var13 !== var10;
case 43:
            var10 = var14.premiumTier;
            if(!(var8 != var10)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var10 = var14.numPremiumGuild;
            if(!(var13 === var10)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var13 = var14.premiumTier;
            var10 = _closure1_slot20;
            var10 = var10.TIER_0;
            if(!(var10 !== var13)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var10 = _closure1_slot20;
            var10 = var10.TIER_1;
            if(!(var10 !== var13)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var10 = _closure1_slot20;
            var10 = var10.TIER_2;
            if(!(var10 !== var13)) { _fun0003_ip = 53; continue _fun0003 }
case 47:
            var13 = var14.premiumTier;
            var10 = _closure1_slot20;
            var10 = var10.TIER_1;
            if(!(var13 !== var10)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var13 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 29;
            var10 = var20[var10];
            var20 = var13.bind(var4)(var10);
            _fun0003_ip = 56; continue _fun0003;
case 54:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 28;
            var10 = var22[var10];
            var20 = var13.bind(var4)(var10);
case 56:
            _fun0003_ip = 57; continue _fun0003;
case 53:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 27;
            var10 = var22[var10];
            var20 = var13.bind(var4)(var10);
            _fun0003_ip = 57; continue _fun0003;
case 51:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 26;
            var10 = var22[var10];
            var20 = var13.bind(var4)(var10);
            _fun0003_ip = 57; continue _fun0003;
case 49:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 25;
            var10 = var22[var10];
            var20 = var13.bind(var4)(var10);
            _fun0003_ip = 57; continue _fun0003;
case 45:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 24;
            var10 = var22[var10];
            var20 = var13.bind(var4)(var10);
case 57:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var22 = 22;
            var10 = var10[var22];
            var10 = var13.bind(var4)(var10);
            var30 = var10.intl;
            var28 = var30.formatToPlainString;
            var13 = var14.interval;
            var10 = _closure1_slot21;
            var10 = var10.MONTH;
            if(!(var13 !== var10)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var22];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var13 = var10.rS8FA+;
            _fun0003_ip = 60; continue _fun0003;
case 58:
            var33 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var22];
            var10 = var33.bind(var4)(var10);
            var10 = var10.t;
            var13 = var10.AbOLNu;
case 60:
            var10 = {};
            var10['price'] = var31;
            var13 = var28.bind(var30)(var13, var10);
            var10 = undefined;
            if(!var16) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var31 = var28[var22];
            var31 = var30.bind(var4)(var31);
            var33 = var31.intl;
            var31 = var33.formatToPlainString;
            var28 = var28[var22];
            var28 = var30.bind(var4)(var28);
            var28 = var28.t;
            var30 = var28.RTaZb4;
            var28 = {};
            var34 = _closure1_slot17;
            var28['num'] = var34;
            var10 = var31.bind(var33)(var30, var28);
case 61:
            var30 = var8 != var32;
            var28 = null;
            if(!var30) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var30 = 23;
            var30 = var33[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.getPremiumTypeFromSubscription;
            var28 = var30.bind(var31)(var32);
case 63:
            _closure2_slot3 = var28;
            if(var6) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var6 = var24;
case 65:
            if(var6) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var6 = var21;
case 67:
            if(var6) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var6 = var11;
case 69:
            _closure2_slot4 = var6;
            if(var1) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var11 = _closure1_slot32;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var1 = 42;
            var1 = var28[var1];
            var1 = var24.bind(var4)(var1);
            var3 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var21 = 43;
            var21 = var28[var21];
            var24 = var24.bind(var4)(var21);
            var21 = var24.isThemeDark;
            var26 = var21.bind(var24)(var26);
            var24 = 'none';
            var21 = var24;
            if(var26) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var21 = var24;
            if(!var23) { _fun0003_ip = 73; continue _fun0003 }
case 75:
            var24 = _closure1_slot1;
            var23 = _closure1_slot2;
            var23 = var23[var25];
            var23 = var24.bind(var4)(var23);
            var23 = var23.unsafe_rawColors;
            var21 = var23.PRIMARY_230;
case 73:
            var1['underlayColor'] = var21;
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var24 = _closure1_slot33;
            var23 = _closure1_slot7;
            var21 = {};
            var28 = var19.row;
            var26 = new Array(3);
            var26[0] = var28;
            var26[1] = var27;
            var27 = var6;
            if(!var6) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var27 = !var7;
case 76:
            if(!var27) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var27 = var19.rowDisabled;
case 78:
            var26[2] = var27;
            var21['style'] = var26;
            var28 = _closure1_slot32;
            var27 = _closure1_slot6;
            var26 = {};
            var30 = _closure1_slot36;
            var30 = var30[var20];
            var30 = var19[var30];
            var26['style'] = var30;
            var26['source'] = var20;
            var27 = var28.bind(var4)(var27, var26);
            var26 = new Array(5);
            var26[0] = var27;
            var33 = _closure1_slot32;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 36;
            var31 = var30[var27];
            var31 = var28.bind(var4)(var31);
            var32 = var31.LegacyText;
            var31 = {};
            var35 = var19.rowText;
            var34 = new Array(2);
            var34[0] = var35;
            var35 = var19.rowPlanDescription;
            var34[1] = var35;
            var31['style'] = var34;
            var34 = _closure1_slot40;
            var34 = var34.bind(var4)(var14, var17);
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var26[1] = var31;
            var26[2] = var29;
            var29 = _closure1_slot32;
            var27 = var30[var27];
            var27 = var28.bind(var4)(var27);
            var28 = var27.LegacyText;
            var27 = {};
            var31 = var19.rowText;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var19.rowPrice;
            var30[1] = var31;
            var27['style'] = var30;
            var27['children'] = var13;
            var27 = var29.bind(var4)(var28, var27);
            var26[3] = var27;
            var27 = null;
            if(!var7) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var30 = _closure1_slot32;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 41;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.ActivityIndicator;
            var28 = {'animating': true, 'size': 'small'};
            var31 = var19.purchasingSpinner;
            var28['style'] = var31;
            var28['color'] = var12;
            var27 = var30.bind(var4)(var29, var28);
case 80:
            var26[4] = var27;
            var21['children'] = var26;
            var21 = var24.bind(var4)(var23, var21);
            var1['children'] = var21;
            var1 = var11.bind(var4)(var3, var1);
            return var1;
case 71:
            var11 = var8 != var2;
            if(!var11) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var3 = var14.premiumTier;
            var1 = _closure1_slot20;
            var1 = var1.TIER_2;
            var11 = var3 === var1;
case 82:
            if(!var11) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var1 = var14.numPremiumGuild;
            var11 = var1 === var2;
case 84:
            var3 = _closure1_slot32;
            var2 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 39;
            var1 = var21[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var21 = _closure1_slot32;
            if(var18) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            if(var16) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var18 = _closure1_slot6;
            var16 = {};
            var23 = var19.boostRowIcon;
            var16['style'] = var23;
            var16['source'] = var20;
            var16 = var21.bind(var4)(var18, var16);
            _fun0003_ip = 90; continue _fun0003;
case 88:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 30;
            var18 = var23[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.NitroWheelIcon;
            var18 = {};
            var24 = 'xxs';
            var18['size'] = var24;
            var24 = _closure1_slot1;
            var23 = var23[var25];
            var23 = var24.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.ICON_DEFAULT;
            var18['color'] = var23;
            var16 = var21.bind(var4)(var20, var18);
case 90:
            _fun0003_ip = 91; continue _fun0003;
case 86:
            var20 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 40;
            var18 = var23[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {'width': 32, 'height': 32};
            var16 = var21.bind(var4)(var20, var18);
case 91:
            var1['icon'] = var16;
            var16 = _closure1_slot40;
            var16 = var16.bind(var4)(var14, var17);
            var1['label'] = var16;
            if(!var11) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var17 = _closure1_slot32;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 21;
            var11 = var18[var11];
            var11 = var21.bind(var4)(var11);
            var16 = var11.Text;
            var11 = {'variant': 'text-xs/semibold', 'color': 'none'};
            var19 = var19.recommendedText;
            var11['style'] = var19;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.WThgAR;
            var18 = var19.bind(var20)(var18);
            var11['children'] = var18;
            var10 = var17.bind(var4)(var16, var11);
case 92:
            var1['subLabel'] = var10;
            if(var7) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            if(!(var8 == var15)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var11 = _closure1_slot32;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 21;
            var8 = var16[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-sm/medium', 'color': 'text-muted', 'lineClamp': 1};
            var8['children'] = var13;
            var8 = var11.bind(var4)(var10, var8);
            _fun0003_ip = 98; continue _fun0003;
case 96:
            var13 = _closure1_slot32;
            var11 = _closure1_slot41;
            var10 = {};
            var10['price'] = var15;
            var14 = var14.interval;
            var10['interval'] = var14;
            var8 = var13.bind(var4)(var11, var10);
case 98:
            _fun0003_ip = 99; continue _fun0003;
case 94:
            var11 = _closure1_slot32;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 41;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ActivityIndicator;
            var9 = {'animating': true, 'size': 'small'};
            var9['color'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 99:
            var1['trailing'] = var8;
            var8 = true;
            var1['arrow'] = var8;
            if(!var6) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var6 = !var7;
case 100:
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function PlanSection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var6 = var2.plans;
            var7 = var2.label;
            var1 = var2.shouldShowModernBoostFlow;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0006_ip = 102; continue _fun0006 }
case 103:
            var1 = false;
case 102:
            var _closure2_slot0 = var1;
            var4 = var2.showBoostOnlyLabels;
            if(!(var4 === var5)) { _fun0006_ip = 104; continue _fun0006 }
case 7:
            var4 = false;
case 104:
            var _closure2_slot1 = var4;
            var4 = var2.recommendedBoostCount;
            var _closure2_slot2 = var4;
            var4 = var2.purchase;
            var _closure2_slot3 = var4;
            var4 = var2.analyticsLoadId;
            var _closure2_slot4 = var4;
            var4 = var2.trackNewPaymentFlow;
            var _closure2_slot5 = var4;
            var4 = var2.trackPaymentFlowStep;
            var _closure2_slot6 = var4;
            var4 = var2.subscription;
            var _closure2_slot7 = var4;
            var2 = var2.shouldRemoveYearlyUpsell;
            var _closure2_slot8 = var2;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var8 = _closure1_slot9;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var5)(var4);
            _closure2_slot9 = var9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 44;
            var4 = var10[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.isIOS;
            var4 = var4.bind(var8)();
            if(!var4) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var8 = null;
            var4 = var8 != var9;
case 105:
            _closure2_slot10 = var4;
            var4 = var6.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot32;
                var4 = _closure1_slot42;
                var3 = {};
                var3['plan'] = var1;
                var6 = _closure2_slot7;
                var3['subscription'] = var6;
                var6 = _closure2_slot0;
                var3['shouldShowModernBoostFlow'] = var6;
                var6 = _closure2_slot1;
                var3['showBoostOnlyLabels'] = var6;
                var2 = _closure2_slot2;
                var3['recommendedBoostCount'] = var2;
                var2 = function purchase(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var14 = 45;
                        var1 = var1[var14];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getToggledIntervalProduct;
                        var7 = var1.bind(var2)(var4);
                        var _closure4_slot1 = var7;
                        var2 = _closure2_slot10;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0007_ip = 107; continue _fun0007 }
case 22:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0007_ip = 107; continue _fun0007 }
case 108:
                        var2 = _closure2_slot9;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0007_ip = 109; continue _fun0007 }
case 110:
                        var12 = _closure2_slot9;
                        var11 = var12.getAvailablePlanForItems;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var14];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.getSubscriptionItemsForProduct;
                        var10 = var10.bind(var13)(var7);
                        var2 = var11.bind(var12)(var10);
case 109:
                        var10 = var5 != var2;
                        var9 = null;
                        if(!var10) { _fun0007_ip = 107; continue _fun0007 }
case 111:
                        var9 = var2;
case 107:
                        var _closure4_slot2 = var9;
                        var2 = _closure2_slot10;
                        if(var2) { _fun0007_ip = 112; continue _fun0007 }
case 113:
                        var2 = var5 != var7;
                        if(!var2) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                        var11 = _closure1_slot13;
                        var10 = var11.getProduct;
                        var10 = var10.bind(var11)(var7);
                        var2 = var5 != var10;
case 114:
                        _fun0007_ip = 8; continue _fun0007;
case 112:
                        var2 = var5 != var9;
case 8:
                        if(!(var5 != var7)) { _fun0007_ip = 116; continue _fun0007 }
case 105:
                        if(!var2) { _fun0007_ip = 116; continue _fun0007 }
case 29:
                        var2 = _closure2_slot8;
                        if(var2) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                        var5 = _closure2_slot6;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 46;
                        var11 = var7[var9];
                        var11 = var10.bind(var3)(var11);
                        var11 = var11.PaymentFlowStep;
                        var11 = var11.PLAN_SELECT;
                        var2['fromStep'] = var11;
                        var9 = var7[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.PaymentFlowStep;
                        var9 = var9.YEARLY_UPSELL;
                        var2['toStep'] = var9;
                        var2['productId'] = var4;
                        var2 = var5.bind(var3)(var2);
                        var5 = _closure1_slot1;
                        var2 = 47;
                        var2 = var7[var2];
                        var7 = var5.bind(var3)(var2);
                        var5 = var7.openLazy;
                        var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                        var8 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 49;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 48;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure6_slot0 = var2;
                                var1 = function(arg1) {
                                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                        var4 = _closure1_slot32;
                                        var3 = _closure6_slot0;
                                        var2 = {};
                                        var11 = arg1;
                                        var12 = var2;
                                        var1 = copyDataProperties(var12, var11);
                                        var7 = _closure4_slot1;
                                        var1 = 'productId';
                                        var2[0] = var7;
                                        var1 = _closure4_slot2;
                                        var8 = null;
                                        var10 = var8 == var1;
                                        var1 = undefined;
                                        var7 = undefined;
                                        if(var10) { _fun0008_ip = 24; continue _fun0008 }
case 118:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 24:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0008_ip = 26; continue _fun0008 }
case 119:
                                        var8 = var7;
case 26:
                                        var7 = 'orderPriceString';
                                        var2[6] = var8;
                                        var8 = _closure1_slot3;
                                        var7 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0009_ip = 120; continue _fun0009 }
case 121:
                                                    var6 = _closure2_slot6;
                                                    var4 = {};
                                                    var7 = _closure1_slot0;
                                                    var8 = _closure1_slot2;
                                                    var5 = 46;
                                                    var9 = var8[var5];
                                                    var3 = undefined;
                                                    var9 = var7.bind(var3)(var9);
                                                    var9 = var9.PaymentFlowStep;
                                                    var9 = var9.YEARLY_UPSELL;
                                                    var4['fromStep'] = var9;
                                                    var5 = var8[var5];
                                                    var5 = var7.bind(var3)(var5);
                                                    var5 = var5.PaymentFlowStep;
                                                    var5 = var5.EXTERNAL_PAYMENT;
                                                    var4['toStep'] = var5;
                                                    var5 = _closure4_slot0;
                                                    var4['productId'] = var5;
                                                    var4 = var6.bind(var3)(var4);
                                                    var4 = _closure2_slot3;
                                                    var2 = _closure2_slot4;
                                                    var2 = var4.bind(var3)(var5, var2);
                                                    SaveGenerator(address=122);
case 122:
                                                    return var2;
case 123:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 124; continue _fun0009 }
case 109:
                                                    return var3;
case 124:
                                                    return var2;
case 120:
                                                    return var1;
                                                }
                                            };
                                            return var1;
                                        };
                                        var8 = var8.bind(var1)(var7);
                                        var7 = 'continueWithDefault';
                                        var2[6] = var8;
                                        var6 = _closure1_slot3;
                                        var5 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0010_ip = 28; continue _fun0010 }
case 125:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 46;
                                                    var2 = var3[var2];
                                                    var3 = undefined;
                                                    var4 = var4.bind(var3)(var2);
                                                    var2 = var4.getNewAnalyticsLoadId;
                                                    var5 = var2.bind(var4)();
                                                    var7 = _closure2_slot5;
                                                    var6 = {};
                                                    var6['newFlowAnalyticsLoadId'] = var5;
                                                    var4 = _closure4_slot1;
                                                    var6['productId'] = var4;
                                                    var6 = var7.bind(var3)(var6);
                                                    var2 = _closure2_slot3;
                                                    var2 = var2.bind(var3)(var4, var5);
                                                    SaveGenerator(address=87);
case 110:
                                                    return var2;
case 26:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0010_ip = 126; continue _fun0010 }
case 127:
                                                    return var3;
case 126:
                                                    return var2;
case 28:
                                                    return var1;
                                                }
                                            };
                                            return var1;
                                        };
                                        var6 = var6.bind(var1)(var5);
                                        var5 = 'continueWithUpsell';
                                        var2[4] = var6;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['importer'] = var8;
                        var2 = var5.bind(var7)(var2);
                        return var3;
case 116:
                        var5 = _closure2_slot6;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 46;
                        var9 = var8[var6];
                        var9 = var7.bind(var3)(var9);
                        var9 = var9.PaymentFlowStep;
                        var9 = var9.PLAN_SELECT;
                        var2['fromStep'] = var9;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.PaymentFlowStep;
                        var6 = var6.EXTERNAL_PAYMENT;
                        var2['toStep'] = var6;
                        var2['productId'] = var4;
                        var2 = var5.bind(var3)(var2);
                        var2 = _closure2_slot3;
                        var1 = _closure2_slot4;
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    }
                };
                var3['purchase'] = var2;
                var2 = var1.productId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var4.bind(var6)(var3);
            var4 = _closure1_slot32;
            if(var1) { _fun0006_ip = 128; continue _fun0006 }
case 129:
            var3 = _closure1_slot7;
            var1 = {};
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 130; continue _fun0006;
case 128:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 50;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {};
            var2['title'] = var7;
            var7 = true;
            var2['hasIcons'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 130:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function CurrentPlanRow(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var13 = var2.subscription;
            var _closure2_slot0 = var13;
            var1 = var2.trackPaymentFlowStep;
            var _closure2_slot1 = var1;
            var1 = var2.trackNewPaymentFlow;
            var _closure2_slot2 = var1;
            var1 = var2.purchase;
            var _closure2_slot3 = var1;
            var1 = var2.analyticsLoadId;
            var _closure2_slot4 = var1;
            var1 = var2.showCurrentPlan;
            var2 = var2.shouldRemoveYearlyUpsell;
            var _closure2_slot5 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot35;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var14 = null;
            if(!(var14 != var13)) { _fun0011_ip = 131; continue _fun0011 }
case 133:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 45;
            var3 = var2[var1];
            var6 = var5.bind(var4)(var3);
            var3 = var6.getProductIdFromSubscription;
            var10 = true;
            var3 = var3.bind(var6)(var13, var10);
            _closure2_slot6 = var3;
            var2 = var2[var1];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getPremiumBundledItemsFromProductId;
            var15 = var2.bind(var5)(var3);
            var6 = var15.premiumTier;
            if(!(var14 == var6)) { _fun0011_ip = 134; continue _fun0011 }
case 31:
            var2 = _closure1_slot30;
            var5 = var2.PREMIUM_GUILD;
            _fun0011_ip = 29; continue _fun0011;
case 134:
            var2 = _closure1_slot29;
            var5 = var2.bind(var4)(var6);
case 29:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot7 = var11;
            var3 = _closure1_slot32;
            var2 = _closure1_slot1;
            var1 = 51;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot26;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot26;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot32;
            var6 = _closure1_slot42;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0011_ip = 15; continue _fun0011 }
case 135:
            var13 = var13.status;
            var12 = _closure1_slot28;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 15:
            var5['disabled'] = var11;
            var5['hasBackground'] = var10;
            var9 = function purchase() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 45;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.getProductIdsForBothIntervals;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.monthly;
                    var _closure3_slot0 = var2;
                    var4 = var1.yearly;
                    var _closure3_slot1 = var4;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 == var1;
                    var5 = undefined;
                    if(var1) { _fun0012_ip = 25; continue _fun0012 }
case 9:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 25:
                    var1 = _closure1_slot28;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
                    var1 = _closure2_slot7;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0012_ip = 138; continue _fun0012 }
case 123:
                    var10 = _closure1_slot13;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot7;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0012_ip = 138; continue _fun0012 }
case 139:
                    var9 = _closure2_slot1;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 46;
                    var13 = var12[var10];
                    var13 = var11.bind(var6)(var13);
                    var13 = var13.PaymentFlowStep;
                    var13 = var13.PLAN_SELECT;
                    var5['fromStep'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var6)(var10);
                    var10 = var10.PaymentFlowStep;
                    var10 = var10.EXTERNAL_PAYMENT;
                    var5['toStep'] = var10;
                    var10 = _closure2_slot7;
                    var5['productId'] = var10;
                    var5 = var9.bind(var6)(var5);
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot7;
                    var5 = _closure2_slot4;
                    var1 = var10.bind(var6)(var9, var5);
case 138:
                    _fun0012_ip = 140; continue _fun0012;
case 136:
                    if(!(var2 != var4)) { _fun0012_ip = 141; continue _fun0012 }
case 142:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0012_ip = 141; continue _fun0012 }
case 143:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 46;
                    var11 = var5[var9];
                    var11 = var10.bind(var6)(var11);
                    var11 = var11.PaymentFlowStep;
                    var11 = var11.PLAN_SELECT;
                    var2['fromStep'] = var11;
                    var9 = var5[var9];
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.PaymentFlowStep;
                    var9 = var9.YEARLY_UPSELL;
                    var2['toStep'] = var9;
                    var9 = _closure2_slot6;
                    var2['productId'] = var9;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var2 = 47;
                    var2 = var5[var2];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.openLazy;
                    var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 49;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 48;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot32;
                                var3 = _closure5_slot0;
                                var2 = {};
                                var9 = arg1;
                                var10 = var2;
                                var1 = copyDataProperties(var10, var9);
                                var7 = _closure3_slot1;
                                var1 = 'productId';
                                var2[0] = var7;
                                var8 = _closure1_slot3;
                                var1 = undefined;
                                var7 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0013_ip = 28; continue _fun0013 }
case 125:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 46;
                                            var2 = var3[var2];
                                            var3 = undefined;
                                            var4 = var4.bind(var3)(var2);
                                            var2 = var4.getNewAnalyticsLoadId;
                                            var5 = var2.bind(var4)();
                                            var7 = _closure2_slot2;
                                            var6 = {};
                                            var6['newFlowAnalyticsLoadId'] = var5;
                                            var4 = _closure3_slot1;
                                            var6['productId'] = var4;
                                            var6 = var7.bind(var3)(var6);
                                            var2 = _closure2_slot3;
                                            var2 = var2.bind(var3)(var4, var5);
                                            SaveGenerator(address=87);
case 110:
                                            return var2;
case 26:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 126; continue _fun0013 }
case 127:
                                            return var3;
case 126:
                                            return var2;
case 28:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var8 = var8.bind(var1)(var7);
                                var7 = 'continueWithUpsell';
                                var2[6] = var8;
                                var6 = _closure1_slot3;
                                var5 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0014_ip = 120; continue _fun0014 }
case 121:
                                            var6 = _closure2_slot1;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 46;
                                            var9 = var8[var5];
                                            var3 = undefined;
                                            var9 = var7.bind(var3)(var9);
                                            var9 = var9.PaymentFlowStep;
                                            var9 = var9.YEARLY_UPSELL;
                                            var4['fromStep'] = var9;
                                            var5 = var8[var5];
                                            var5 = var7.bind(var3)(var5);
                                            var5 = var5.PaymentFlowStep;
                                            var5 = var5.EXTERNAL_PAYMENT;
                                            var4['toStep'] = var5;
                                            var5 = _closure3_slot0;
                                            var4['productId'] = var5;
                                            var4 = var6.bind(var3)(var4);
                                            var4 = _closure2_slot3;
                                            var2 = _closure2_slot4;
                                            var2 = var4.bind(var3)(var5, var2);
                                            SaveGenerator(address=122);
case 122:
                                            return var2;
case 123:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0014_ip = 124; continue _fun0014 }
case 109:
                                            return var3;
case 124:
                                            return var2;
case 120:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var6 = var6.bind(var1)(var5);
                                var5 = 'continueWithDefault';
                                var2[4] = var6;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['importer'] = var8;
                    var2 = var4.bind(var5)(var2);
                    var2 = undefined;
                    _fun0012_ip = 144; continue _fun0012;
case 141:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 46;
                    var10 = var9[var7];
                    var10 = var8.bind(var6)(var10);
                    var10 = var10.PaymentFlowStep;
                    var10 = var10.PLAN_SELECT;
                    var4['fromStep'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.PaymentFlowStep;
                    var7 = var7.EXTERNAL_PAYMENT;
                    var4['toStep'] = var7;
                    var7 = _closure2_slot6;
                    var4['productId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var4, var3);
case 144:
                    var1 = var2;
case 140:
                    return var1;
                }
            };
            var5['purchase'] = var9;
            var8 = var8.currentPlanRow;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 131:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot35;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot32;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 36;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.LegacyText;
        var1 = {};
        var6 = var6.header;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function PlanSections(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.plans;
            var _closure2_slot0 = var2;
            var17 = var1.subscription;
            var _closure2_slot1 = var17;
            var12 = var1.showCurrentPlan;
            var10 = var1.isBoostPurchaseFlow;
            var16 = var1.analyticsLoadId;
            var _closure2_slot2 = var16;
            var14 = var1.trackPaymentFlowStep;
            var _closure2_slot3 = var14;
            var13 = var1.trackNewPaymentFlow;
            var _closure2_slot4 = var13;
            var15 = var1.purchase;
            var _closure2_slot5 = var15;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot35;
            var18 = var1.bind(var4)();
            var2 = _closure1_slot9;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var _closure2_slot6 = var1;
            var3 = null;
            var2 = var3 != var17;
            var1 = null;
            if(!var2) { _fun0015_ip = 31; continue _fun0015 }
case 145:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 45;
            var2 = var8[var2];
            var8 = var5.bind(var4)(var2);
            var5 = var8.getProductIdFromSubscription;
            var2 = false;
            var1 = var5.bind(var8)(var17, var2);
case 31:
            _closure2_slot7 = var1;
            var11 = var10;
            if(!var10) { _fun0015_ip = 13; continue _fun0015 }
case 146:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 52;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.getShouldRemoveYearlyUpsell;
            var1 = 'PremiumPlanSelect';
            var11 = var2.bind(var5)(var1);
case 13:
            _closure2_slot8 = var11;
            if(!var10) { _fun0015_ip = 4; continue _fun0015 }
case 147:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 52;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.getMobileBoostingEnabled;
            var1 = 'PremiumPlanSelect';
            var10 = var2.bind(var5)(var1);
case 4:
            _closure2_slot9 = var10;
            var2 = var3 != var17;
            if(!var2) { _fun0015_ip = 148; continue _fun0015 }
case 149:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 23;
            var1 = var8[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getPremiumTypeFromSubscription;
            var5 = var1.bind(var5)(var17);
            var1 = _closure1_slot20;
            var1 = var1.TIER_2;
            var2 = var5 === var1;
case 148:
            var9 = var10;
            if(!var10) { _fun0015_ip = 150; continue _fun0015 }
case 151:
            var9 = var2;
case 150:
            _closure2_slot10 = var9;
            var1 = null;
            if(!var10) { _fun0015_ip = 38; continue _fun0015 }
case 152:
            var1 = null;
            if(var2) { _fun0015_ip = 38; continue _fun0015 }
case 153:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 52;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getRecommendedBoostCount;
            var2 = 'PremiumPlanSelect';
            var1 = var3.bind(var5)(var2);
case 38:
            _closure2_slot11 = var1;
            var3 = _closure1_slot37;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var1 = {};
                var1['section'] = var3;
                var4 = _closure2_slot0;
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var5 = arg1;
                        var3 = var5.productId;
                        var1 = _closure2_slot7;
                        var1 = var3 !== var1;
                        if(!var1) { _fun0016_ip = 154; continue _fun0016 }
case 155:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 45;
                        var4 = var4[var3];
                        var3 = undefined;
                        var7 = var6.bind(var3)(var4);
                        var6 = var7.productsHaveSamePerks;
                        var4 = var5.productId;
                        var3 = _closure2_slot7;
                        var3 = var6.bind(var7)(var4, var3);
                        var1 = !var3;
case 154:
                        if(!var1) { _fun0016_ip = 156; continue _fun0016 }
case 157:
                        var4 = _closure3_slot0;
                        var3 = var4.predicate;
                        var1 = var3.bind(var4)(var5);
case 156:
                        if(!var1) { _fun0016_ip = 122; continue _fun0016 }
case 158:
                        var4 = var5.premiumTier;
                        var3 = _closure1_slot20;
                        var3 = var3.TIER_1;
                        var1 = var4 !== var3;
case 122:
                        if(!var1) { _fun0016_ip = 159; continue _fun0016 }
case 160:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 44;
                        var3 = var7[var3];
                        var9 = undefined;
                        var6 = var6.bind(var9)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        var3 = !var3;
                        if(var3) { _fun0016_ip = 161; continue _fun0016 }
case 162:
                        var7 = _closure2_slot6;
                        var6 = null;
                        var3 = var6 == var7;
case 161:
                        if(var3) { _fun0016_ip = 163; continue _fun0016 }
case 114:
                        var7 = _closure2_slot6;
                        var6 = var7.getAvailablePlanForItems;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 45;
                        var4 = var10[var4];
                        var9 = var8.bind(var9)(var4);
                        var8 = var9.getSubscriptionItemsForProduct;
                        var4 = var5.productId;
                        var4 = var8.bind(var9)(var4);
                        var6 = var6.bind(var7)(var4);
                        var4 = null;
                        var3 = var4 != var6;
case 163:
                        var1 = var3;
case 159:
                        if(!var1) { _fun0016_ip = 164; continue _fun0016 }
case 165:
                        var4 = _closure2_slot7;
                        var6 = null;
                        var3 = var6 == var4;
                        var2 = true;
                        if(var3) { _fun0016_ip = 166; continue _fun0016 }
case 136:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 53;
                        var7 = var7[var3];
                        var3 = undefined;
                        var3 = var8.bind(var3)(var7);
                        var3 = var3.AppStorePremiumProductIdsToPremiumBundledItems;
                        var4 = var3[var4];
                        var3 = var4.premiumTier;
                        var3 = var6 != var3;
                        if(var3) { _fun0016_ip = 167; continue _fun0016 }
case 168:
                        var5 = var5.numPremiumGuild;
                        var4 = var4.numPremiumGuild;
                        var3 = var5 >= var4;
case 167:
                        var2 = var3;
case 166:
                        var1 = var2;
case 164:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1['plansInSection'] = var2;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.plansInSection;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.section;
                var2 = var1.id;
                var1 = 'premium-and-premium-guild';
                var1 = var1 === var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var8 = var3;
            if(!var9) { _fun0015_ip = 169; continue _fun0015 }
case 170:
            var8 = var3;
            if(!var1) { _fun0015_ip = 169; continue _fun0015 }
case 171:
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.section;
                var2 = var1.id;
                var1 = 'premium-guild';
                var1 = var1 !== var2;
                return var1;
            };
            var8 = var2.bind(var3)(var1);
case 169:
            var3 = _closure1_slot33;
            var2 = _closure1_slot7;
            var1 = {};
            var19 = var18.container;
            var5 = new Array(2);
            var5[0] = var19;
            if(!var10) { _fun0015_ip = 172; continue _fun0015 }
case 173:
            var10 = var18.boostContainer;
case 172:
            var5[1] = var10;
            var1['style'] = var5;
            if(!var9) { _fun0015_ip = 174; continue _fun0015 }
case 175:
            var18 = _closure1_slot32;
            var10 = _closure1_slot39;
            var5 = {};
            var9 = var18.bind(var4)(var10, var5);
case 174:
            var5 = new Array(3);
            var5[0] = var9;
            var10 = _closure1_slot32;
            var9 = _closure1_slot44;
            var7 = {};
            var7['subscription'] = var17;
            var7['analyticsLoadId'] = var16;
            var7['purchase'] = var15;
            var7['trackPaymentFlowStep'] = var14;
            var7['trackNewPaymentFlow'] = var13;
            var7['showCurrentPlan'] = var12;
            var7['shouldRemoveYearlyUpsell'] = var11;
            var7 = var10.bind(var4)(var9, var7);
            var5[1] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.section;
                    var5 = var2.id;
                    var2 = var2.getLabel;
                    var12 = var1.plansInSection;
                    var1 = _closure2_slot10;
                    var4 = undefined;
                    var11 = var2.bind(var4)(var1);
                    var3 = _closure1_slot33;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var6 = _closure2_slot9;
                    var8 = !var6;
                    if(!var8) { _fun0017_ip = 176; continue _fun0017 }
case 22:
                    var13 = _closure1_slot32;
                    var9 = _closure1_slot45;
                    var6 = {};
                    var6['string'] = var11;
                    var8 = var13.bind(var4)(var9, var6);
case 176:
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot32;
                    var8 = _closure1_slot43;
                    var7 = {};
                    var13 = _closure2_slot3;
                    var7['trackPaymentFlowStep'] = var13;
                    var13 = _closure2_slot4;
                    var7['trackNewPaymentFlow'] = var13;
                    var13 = _closure2_slot2;
                    var7['analyticsLoadId'] = var13;
                    var7['plans'] = var12;
                    var7['label'] = var11;
                    var11 = _closure2_slot9;
                    var7['shouldShowModernBoostFlow'] = var11;
                    var11 = _closure2_slot10;
                    var7['showBoostOnlyLabels'] = var11;
                    var11 = _closure2_slot11;
                    var7['recommendedBoostCount'] = var11;
                    var11 = _closure2_slot5;
                    var7['purchase'] = var11;
                    var11 = _closure2_slot1;
                    var7['subscription'] = var11;
                    var10 = _closure2_slot8;
                    var7['shouldRemoveYearlyUpsell'] = var10;
                    var7 = var9.bind(var4)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var16 = 8;
    var4 = var6[var16];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setIsPurchasing;
    var _closure1_slot14 = var7;
    var4 = var4.usePremiumPlanSelectStore;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT;
    var _closure1_slot16 = var7;
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot17 = var7;
    var7 = var4.PRICE_PLACEHOLDER;
    var _closure1_slot18 = var7;
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot19 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot20 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot21 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot23 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot24 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot25 = var7;
    var18 = var4.Fonts;
    var7 = var4.HorizontalGradient;
    var _closure1_slot26 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot27 = var7;
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot28 = var7;
    var15 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGradientColor;
    var _closure1_slot29 = var7;
    var4 = var4.Gradients;
    var _closure1_slot30 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot31 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot32 = var7;
    var7 = var4.jsxs;
    var _closure1_slot33 = var7;
    var4 = var4.Fragment;
    var _closure1_slot34 = var4;
    var4 = 15;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var19 = 16;
    var7 = var6[var19];
    var14 = var9.bind(var1)(var7);
    var13 = var18.DISPLAY_EXTRABOLD;
    var7 = 24;
    var22 = var14.bind(var1)(var13, var1, var7);
    var23 = var12;
    var13 = copyDataProperties(var23, var22);
    var13 = 'marginTop';
    var12[12] = var19;
    var17 = 17;
    var13 = var6[var17];
    var13 = var5.bind(var1)(var13);
    var14 = var13.DARK_WHITE_500_LIGHT_BLACK_500;
    var13 = 'color';
    var12[12] = var14;
    var4['header'] = var12;
    var12 = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    var13 = 18;
    var14 = var6[var13];
    var14 = var9.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderRadius'] = var14;
    var14 = 'center';
    var20 = var6[var17];
    var20 = var5.bind(var1)(var20);
    var20 = var20.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    var12['backgroundColor'] = var20;
    var4['row'] = var12;
    var12 = {};
    var20 = 0.5;
    var12['opacity'] = var20;
    var4['rowDisabled'] = var12;
    var12 = {'height': 40, 'width': 40};
    var4['imgWumpusNitro'] = var12;
    var12 = {'height': 40, 'width': 40};
    var4['imgBoost'] = var12;
    var12 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroBoost'] = var12;
    var12 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroClassic'] = var12;
    var12 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroClassicBoost'] = var12;
    var12 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroTier0'] = var12;
    var12 = {};
    var12['fontSize'] = var19;
    var17 = var6[var17];
    var17 = var5.bind(var1)(var17);
    var17 = var17.DARK_WHITE_500_LIGHT_BLACK_500;
    var12['color'] = var17;
    var4['rowText'] = var12;
    var12 = {'marginLeft': 12, 'fontFamily': null, 'lineHeight': 20};
    var17 = var18.PRIMARY_SEMIBOLD;
    var12['fontFamily'] = var17;
    var17 = 20;
    var4['rowPlanDescription'] = var12;
    var12 = {'fontSize': 12, 'marginLeft': 5, 'fontFamily': null, 'fontWeight': '400'};
    var18 = var18.PRIMARY_MEDIUM;
    var12['fontFamily'] = var18;
    var4['rowPlanDescriptionSubtext'] = var12;
    var12 = {};
    var18 = 'auto';
    var12['marginLeft'] = var18;
    var4['rowPrice'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['purchasingSpinner'] = var12;
    var12 = {'marginHorizontal': 14.5, 'paddingBottom': 10};
    var4['container'] = var12;
    var12 = {};
    var12['marginTop'] = var17;
    var17 = var6[var13];
    var17 = var9.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var12['borderRadius'] = var17;
    var4['currentPlanGradient'] = var12;
    var12 = {'marginTop': 0.5, 'marginRight': 0.5, 'marginLeft': 0.5, 'marginBottom': 0.5};
    var4['currentPlanRow'] = var12;
    var12 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    var4['loadingSpinnerContainer'] = var12;
    var12 = {'lineHeight': 20, 'marginTop': 40};
    var12['margin'] = var15;
    var4['offPlatformSubscriptionMessage'] = var12;
    var12 = {};
    var12['paddingHorizontal'] = var15;
    var12['marginTop'] = var16;
    var4['premiumHeaderLabel'] = var12;
    var12 = {};
    var16 = var6[var13];
    var16 = var9.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_24;
    var12['rowGap'] = var16;
    var4['boostContainer'] = var12;
    var12 = {'width': 32, 'height': 32};
    var4['boostRowIcon'] = var12;
    var12 = {};
    var12['alignItems'] = var14;
    var16 = var6[var13];
    var16 = var9.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_16;
    var12['paddingTop'] = var16;
    var12['paddingHorizontal'] = var15;
    var4['nitroBanner'] = var12;
    var12 = {};
    var12['textAlign'] = var14;
    var4['nitroBannerText'] = var12;
    var12 = {};
    var13 = var6[var13];
    var13 = var9.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GUILD_BOOSTING_PINK;
    var12['color'] = var13;
    var4['recommendedText'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot35 = var4;
    var4 = {};
    var10 = 27;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitro';
    var4[10] = var10;
    var10 = 29;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroBoost';
    var4[10] = var10;
    var10 = 26;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroClassic';
    var4[10] = var10;
    var10 = 28;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroClassicBoost';
    var4[10] = var10;
    var10 = 25;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroTier0';
    var4[10] = var10;
    var7 = var6[var7];
    var9 = var9.bind(var1)(var7);
    var7 = 'imgBoost';
    var4[8] = var7;
    var _closure1_slot36 = var4;
    var7 = {};
    var4 = 'premium';
    var7['id'] = var4;
    var4 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 22;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.A4BfLn;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var4;
    var4 = function predicate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0018_ip = 102; continue _fun0018 }
case 34:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 102:
            return var1;
        }
    };
    var7['predicate'] = var4;
    var4 = new Array(3);
    var4[0] = var7;
    var7 = {};
    var9 = 'premium-and-premium-guild';
    var7['id'] = var9;
    var9 = function getLabel(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 22;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var4 = var1.t;
            var1 = arg1;
            if(var1) { _fun0019_ip = 154; continue _fun0019 }
case 22:
            var1 = var4.lyXyD0;
            _fun0019_ip = 177; continue _fun0019;
case 154:
            var1 = var4.rPoOQW;
case 177:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0020_ip = 102; continue _fun0020 }
case 34:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 102:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = 'premium-guild';
    var7['id'] = var9;
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 22;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.rPoOQW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 == var3;
            if(!var1) { _fun0021_ip = 102; continue _fun0021 }
case 34:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 102:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[2] = var7;
    var _closure1_slot37 = var4;
    var7 = var8.forwardRef;
    var4 = function PremiumPlanSelect(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var20 = var1.predicate;
            var17 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var17 === var7)) { _fun0022_ip = 103; continue _fun0022 }
case 32:
            var17 = true;
case 103:
            var16 = var1.isBoostPurchaseFlow;
            if(!(var16 === var7)) { _fun0022_ip = 178; continue _fun0022 }
case 179:
            var16 = false;
case 178:
            var18 = var1.analyticsLocation;
            var12 = var1.planId;
            var24 = var1.applicationId;
            var _closure2_slot0 = var24;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var1 = _closure1_slot35;
            var19 = var1.bind(var7)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 58;
            var1 = var5[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var26 = var1.analyticsLocations;
            var3 = _closure1_slot0;
            var11 = 32;
            var1 = var5[var11];
            var10 = var3.bind(var7)(var1);
            var4 = var10.useStateFromStoresArray;
            var1 = _closure1_slot12;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot11;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot12;
                var1 = var3.hasFetchedSubscriptions;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot11;
                var2 = var3.isLoadedForPremiumSKUs;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var4 = var4.bind(var10)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var1 = var2.bind(var7)(var4, var1);
            var10 = 0;
            var4 = var1[var10];
            var13 = 1;
            var2 = var1[var13];
            _closure2_slot1 = var2;
            var22 = _closure1_slot5;
            var21 = var22.useEffect;
            var15 = new Array(1);
            var15[0] = var2;
            var1 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0023_ip = 180; continue _fun0023 }
case 121:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 59;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 180:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var21.bind(var22)(var1, var15);
            var1 = 60;
            var1 = var5[var1];
            var6 = var6.bind(var7)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var7)(var1);
            var1 = 46;
            var1 = var5[var1];
            var5 = var3.bind(var7)(var1);
            var3 = var5.getBasePurchaseFlowAnalyticsFields;
            var1 = {};
            var1['analyticsLoadId'] = var15;
            var6 = {};
            var21 = _closure1_slot24;
            var21 = var21.BUTTON_CTA;
            var6['object'] = var21;
            var21 = _closure1_slot25;
            var21 = var21.BUY;
            var6['object_type'] = var21;
            var31 = var6;
            var30 = var18;
            var18 = copyDataProperties(var31, var30);
            var1['analyticsLocation'] = var6;
            var1['analyticsLocations'] = var26;
            var1 = var3.bind(var5)(var1);
            _closure2_slot2 = var1;
            var6 = null;
            if(!(var6 == var12)) { _fun0022_ip = 181; continue _fun0022 }
case 182:
            var3 = {};
            _fun0022_ip = 183; continue _fun0022;
case 181:
            var5 = {};
            var5['subscription_plan_id'] = var12;
            var3 = var5;
case 183:
            _closure2_slot3 = var3;
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 61;
            var3 = var21[var3];
            var5 = var5.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var7 = _closure2_slot2;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var7 = _closure2_slot3;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var6 = _closure2_slot0;
                var5 = 'application_id';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var5 = _closure1_slot9;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.checkoutInitParameters;
                var3 = var3.activeSubscription;
                var1['activeSubscription'] = var3;
                var2 = var2.orderRecord;
                var1['order'] = var2;
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var18 = var3.activeSubscription;
            var12 = _closure1_slot0;
            var3 = 63;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var23 = var3.bind(var5)();
            _closure2_slot4 = var23;
            var3 = 64;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useNavigation;
            var22 = var3.bind(var5)();
            _closure2_slot5 = var22;
            var3 = 65;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useIsPaymentsBlocked;
            var3 = var3.bind(var5)();
            var5 = 66;
            var5 = var21[var5];
            var21 = var12.bind(var7)(var5);
            var12 = var21.useFetchSubscriptionInvoicePreview;
            if(!(var6 == var18)) { _fun0022_ip = 184; continue _fun0022 }
case 185:
            var5 = {};
            _fun0022_ip = 186; continue _fun0022;
case 184:
            var25 = {};
            var27 = var18.id;
            var25['subscriptionId'] = var27;
            var27 = true;
            var25['renewal'] = var27;
            var25['analyticsLocations'] = var26;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 67;
            var26 = var28[var26];
            var26 = var27.bind(var7)(var26);
            var26 = var26.PREMIUM_PLAN_SELECT;
            var25['analyticsLocation'] = var26;
            var5 = var25;
case 186:
            var12 = var12.bind(var21)(var5);
            var5 = _closure1_slot4;
            var5 = var5.bind(var7)(var12, var13);
            var25 = var5[var10];
            var10 = _closure1_slot9;
            var5 = function(arg1) {
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
            var5 = var10.bind(var7)(var5);
            var21 = var5.patchOrderLineItems;
            _closure2_slot6 = var21;
            var13 = var5.orderRequired;
            _closure2_slot7 = var13;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var10.bind(var7)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var11.bind(var12)(var10, var5);
            _closure2_slot8 = var12;
            var11 = _closure1_slot5;
            var10 = var11.useCallback;
            var5 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0024_ip = 50; continue _fun0024 }
case 187:
                            var14 = var5;
                            var13 = arg2;
                            var3 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var2 = _closure1_slot14;
                            var8 = true;
                            var2 = var2.bind(var3)(var8, var5);
                            var2 = _closure2_slot8;
                            var11 = null;
                            if(!(var11 == var2)) { _fun0024_ip = 188; continue _fun0024 }
case 189:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 45;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.getSubscriptionItemsForProduct;
                            var2 = var14;
                            var15 = var5.bind(var6)(var2);
                            _fun0024_ip = 190; continue _fun0024;
case 188:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 45;
                            var2 = var6[var2];
                            var16 = var5.bind(var3)(var2);
                            var6 = var16.getModifySubscriptionItemsForProduct;
                            var5 = var14;
                            var2 = _closure2_slot8;
                            var15 = var6.bind(var16)(var5, var2);
case 190:
                            var9 = undefined;
                            var2 = _closure2_slot7;
                            if(!var2) { _fun0024_ip = 191; continue _fun0024 }
case 192:
                            var5 = _closure2_slot6;
                            var6 = var15.map;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var1 = {};
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 23;
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
                            var2 = var6.bind(var15)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=169);
case 193:
                            return var2;
case 194:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0024_ip = 195; continue _fun0024 }
case 196:
                            var9 = var2;
                            if(!(var11 != var2)) { _fun0024_ip = 197; continue _fun0024 }
case 191: // try_start_0
                            var6 = _closure2_slot4;
                            var5 = {};
                            var5['productId'] = var14;
                            var14 = _closure2_slot2;
                            var14 = var14.location;
                            var5['analyticsLocation'] = var14;
                            var5['analyticsLoadId'] = var13;
                            var12 = _closure2_slot0;
                            var5['applicationId'] = var12;
                            var10 = var9;
                            var11 = var11 == var9;
                            var9 = undefined;
                            if(var11) { _fun0024_ip = 198; continue _fun0024 }
case 159:
                            var9 = var10.id;
case 198:
                            var5['orderId'] = var9;
                            var7 = function onPurchaseComplete(arg1) {
                                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                    var1 = arg1;
                                    var4 = var1.paymentGateway;
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 47;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var6 = var6.bind(var1)(var5);
                                    var5 = var6.close;
                                    var5 = var5.bind(var6)();
                                    var3 = _closure1_slot27;
                                    var3 = var3.APPLE_ADVANCED_COMMERCE;
                                    if(!(var4 === var3)) { _fun0025_ip = 177; continue _fun0025 }
case 199:
                                    var3 = function showPremiumActivatedAlert(arg1) {
                                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                            var3 = arg1;
                                            var _closure7_slot0 = var3;
                                            var2 = _closure1_slot12;
                                            var1 = var2.getPremiumTypeSubscription;
                                            var2 = var1.bind(var2)();
                                            var _closure7_slot1 = var2;
                                            var1 = null;
                                            if(!(var1 != var2)) { _fun0026_ip = 110; continue _fun0026 }
case 200:
                                            var6 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var2 = 47;
                                            var5 = var5[var2];
                                            var2 = undefined;
                                            var7 = var6.bind(var2)(var5);
                                            var6 = var7.openLazy;
                                            var5 = {};
                                            var8 = function importer() {
                                                var3 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var2 = 49;
                                                var2 = var1[var2];
                                                var4 = undefined;
                                                var3 = var3.bind(var4)(var2);
                                                var2 = 57;
                                                var2 = var1[var2];
                                                var1 = var1.paths;
                                                var3 = var3.bind(var4)(var2, var1);
                                                var2 = var3.then;
                                                var1 = function(arg1) {
                                                    var2 = arg1;
                                                    var2 = var2.default;
                                                    var _closure9_slot0 = var2;
                                                    var1 = function(arg1) {
                                                        var5 = arg1;
                                                        var _closure10_slot0 = var5;
                                                        var4 = _closure1_slot32;
                                                        var3 = _closure9_slot0;
                                                        var2 = {};
                                                        var8 = var2;
                                                        var7 = var5;
                                                        var5 = copyDataProperties(var8, var7);
                                                        var6 = _closure7_slot1;
                                                        var5 = 'subscription';
                                                        var2[4] = var6;
                                                        var5 = function onClose() {
                                                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                                                var2 = _closure10_slot0;
                                                                var1 = var2.onClose;
                                                                var1 = var1.bind(var2)();
                                                                var4 = _closure1_slot1;
                                                                var6 = _closure1_slot2;
                                                                var1 = 55;
                                                                var3 = var6[var1];
                                                                var1 = undefined;
                                                                var4 = var4.bind(var1)(var3);
                                                                var3 = var4.popWithKey;
                                                                var5 = _closure1_slot0;
                                                                var2 = 56;
                                                                var2 = var6[var2];
                                                                var2 = var5.bind(var1)(var2);
                                                                var2 = var2.PREMIUM_KEY;
                                                                var2 = var3.bind(var4)(var2);
                                                                var4 = _closure7_slot0;
                                                                var3 = null;
                                                                if(!(var3 != var4)) { _fun0027_ip = 126; continue _fun0027 }
case 201:
                                                                var2 = _closure7_slot0;
                                                                var2 = var2.bind(var1)();
case 126:
                                                                return var1;
                                                            }
                                                        };
                                                        var1 = 'onClose';
                                                        var2[0] = var5;
                                                        var1 = undefined;
                                                        var1 = var4.bind(var1)(var3, var2);
                                                        return var1;
                                                    };
                                                    return var1;
                                                };
                                                var1 = var2.bind(var3)(var1);
                                                return var1;
                                            };
                                            var5['importer'] = var8;
                                            var5 = var6.bind(var7)(var5);
                                            return var2;
case 110:
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var2 = 54;
                                            var5 = var8[var2];
                                            var2 = undefined;
                                            var10 = var7.bind(var2)(var5);
                                            var9 = var10.captureBillingException;
                                            var5 = global;
                                            var11 = var5.Error;
                                            var5 = var11.prototype;
                                            var6 = Object.create(var5, {constructor: {value: var11}});
                                            var14 = 'PremiumActivatedAlert: no premium subscription in store post-activation';
                                            var15 = var6;
                                            var5 = new var15[var11](var14, var13);
                                            var6 = var5 instanceof Object ? var5 : var6;
                                            var5 = {};
                                            var11 = {};
                                            var12 = 'showPremiumActivatedAlert.nullSubscription';
                                            var11['source'] = var12;
                                            var5['tags'] = var11;
                                            var5 = var9.bind(var10)(var6, var5);
                                            var5 = _closure1_slot1;
                                            var4 = 55;
                                            var4 = var8[var4];
                                            var6 = var5.bind(var2)(var4);
                                            var5 = var6.popWithKey;
                                            var4 = 56;
                                            var4 = var8[var4];
                                            var4 = var7.bind(var2)(var4);
                                            var4 = var4.PREMIUM_KEY;
                                            var4 = var5.bind(var6)(var4);
                                            var1 = var1 == var3;
                                            if(var1) { _fun0026_ip = 202; continue _fun0026 }
case 6:
                                            var1 = var3.bind(var2)();
case 202:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = function() {
                                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                            var3 = _closure2_slot5;
                                            var2 = var3.canGoBack;
                                            var2 = var2.bind(var3)();
                                            if(!var2) { _fun0028_ip = 203; continue _fun0028 }
case 204:
                                            var2 = _closure2_slot5;
                                            var1 = var2.goBack;
                                            var1 = var1.bind(var2)();
case 203:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var1)(var2);
case 177:
                                    return var1;
                                }
                            };
                            var5['onPurchaseComplete'] = var7;
                            var5 = var6.bind(var3)(var5);
                            SaveGenerator(address=269);
case 16:
                            return var5;
case 205:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0024_ip = 206; continue _fun0024 }
case 207: // try_end0
                            _fun0024_ip = 208; continue _fun0024;
case 206:
                            return var5;
case 209: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 68;
                            var5 = var9[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0024_ip = 210; continue _fun0024 }
case 211:
                            var6 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var5 = 47;
                            var5 = var13[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var12 = _closure1_slot0;
                            var9 = 22;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var14 = var10.intl;
                            var11 = var14.string;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.zrhHH3;
                            var10 = var11.bind(var14)(var10);
                            var5['title'] = var10;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var13[var9];
                            var9 = var12.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.PjfUXe;
                            var9 = var10.bind(var11)(var9);
                            var5['body'] = var9;
                            var5['isDismissable'] = var8;
                            var5 = var6.bind(var7)(var5);
                            _fun0024_ip = 208; continue _fun0024;
case 210:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 69;
                            var5 = var12[var5];
                            var6 = var11.bind(var3)(var5);
                            var5 = var6.fetchSubscriptions;
                            var5 = var5.bind(var6)();
                            var6 = _closure1_slot1;
                            var5 = 47;
                            var5 = var12[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var8 = 22;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var13 = var9.intl;
                            var10 = var13.string;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.U+H+kd;
                            var9 = var10.bind(var13)(var9);
                            var5['title'] = var9;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8.yyDkbE;
                            var8 = var9.bind(var10)(var8);
                            var5['body'] = var8;
                            var5 = var6.bind(var7)(var5);
case 208:
                            var6 = _closure1_slot14;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            _fun0024_ip = 212; continue _fun0024;
case 197:
                            var5 = _closure1_slot14;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
case 212:
                            return var3;
case 195:
                            return var2;
case 50:
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
            var5 = var5.bind(var7)();
            var26 = var1.location;
            var1 = new Array(7);
            var1[0] = var26;
            var1[1] = var24;
            var1[2] = var23;
            var1[3] = var22;
            var1[4] = var21;
            var1[5] = var13;
            var1[6] = var12;
            var13 = var10.bind(var11)(var5, var1);
            var5 = var6 == var20;
            var1 = null;
            if(var5) { _fun0022_ip = 213; continue _fun0022 }
case 214:
            if(!var4) { _fun0022_ip = 215; continue _fun0022 }
case 216:
            if(var2) { _fun0022_ip = 217; continue _fun0022 }
case 215:
            var5 = _closure1_slot32;
            var4 = _closure1_slot7;
            var2 = {};
            var10 = var19.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot32;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 41;
            var10 = var21[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'large'};
            var10 = var12.bind(var7)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var7)(var4, var2);
            _fun0022_ip = 218; continue _fun0022;
case 217:
            if(var3) { _fun0022_ip = 219; continue _fun0022 }
case 220:
            if(!(var6 != var18)) { _fun0022_ip = 221; continue _fun0022 }
case 222:
            var3 = var18.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0022_ip = 223; continue _fun0022 }
case 224:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 45;
            var4 = var11[var3];
            var5 = var10.bind(var7)(var4);
            var4 = var5.isValidBundleProductId;
            var3 = var11[var3];
            var11 = var10.bind(var7)(var3);
            var10 = var11.getProductIdFromSubscription;
            var3 = false;
            var3 = var10.bind(var11)(var18, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0022_ip = 221; continue _fun0022 }
case 223:
            var5 = _closure1_slot33;
            var4 = _closure1_slot8;
            var3 = {};
            var10 = var6 != var25;
            if(!var10) { _fun0022_ip = 225; continue _fun0022 }
case 226:
            var12 = _closure1_slot33;
            var11 = _closure1_slot34;
            var6 = {};
            var24 = _closure1_slot32;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 21;
            var21 = var26[var21];
            var21 = var23.bind(var7)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var27 = var19.premiumHeaderLabel;
            var21['style'] = var27;
            var27 = 22;
            var28 = var26[var27];
            var28 = var23.bind(var7)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var26[var27];
            var27 = var23.bind(var7)(var27);
            var27 = var27.t;
            var27 = var27.ITurwY;
            var27 = var28.bind(var29)(var27);
            var21['children'] = var27;
            var22 = var24.bind(var7)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var24 = _closure1_slot32;
            var22 = 71;
            var22 = var26[var22];
            var22 = var23.bind(var7)(var22);
            var23 = var22.PremiumSubscriptionHeader;
            var22 = {};
            var22['subscription'] = var18;
            var22['renewalInvoicePreview'] = var25;
            var22 = var24.bind(var7)(var23, var22);
            var21[1] = var22;
            var6['children'] = var21;
            var10 = var12.bind(var7)(var11, var6);
case 225:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot32;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 21;
            var10 = var22[var10];
            var10 = var21.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {};
            var19 = var19.offPlatformSubscriptionMessage;
            var10['style'] = var19;
            var19 = 'text-md/semibold';
            var10['variant'] = var19;
            var19 = 72;
            var19 = var22[var19];
            var22 = var21.bind(var7)(var19);
            var21 = var22.getExternalManagementMessage;
            var19 = {};
            var23 = true;
            var19['shouldAllowExternalManagement'] = var23;
            var19 = var21.bind(var22)(var18, var19);
            var10['children'] = var19;
            var10 = var12.bind(var7)(var11, var10);
            var6[1] = var10;
            var3['children'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            _fun0022_ip = 227; continue _fun0022;
case 221:
            var6 = _closure1_slot32;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot32;
            var11 = _closure1_slot46;
            var10 = {};
            var10['subscription'] = var18;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 45;
            var18 = var21[var18];
            var19 = var19.bind(var7)(var18);
            var18 = var19.getPremiumBundlesWithPredicate;
            var18 = var18.bind(var19)(var20);
            var10['plans'] = var18;
            var10['showCurrentPlan'] = var17;
            var10['isBoostPurchaseFlow'] = var16;
            var10['analyticsLoadId'] = var15;
            var15 = function trackPaymentFlowStep(arg1) {
                var1 = arg1;
                var10 = var1.productId;
                var12 = var1.fromStep;
                var11 = var1.toStep;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 73;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot23;
                var3 = var2.PAYMENT_FLOW_STEP;
                var2 = {};
                var8 = _closure2_slot0;
                var2['application_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 46;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.getPaymentFlowStepAnalyticsFields;
                var7 = _closure2_slot2;
                var6 = {};
                var6['from_step'] = var12;
                var6['to_step'] = var11;
                var6['subscription_plan_gateway_plan_id'] = var10;
                var13 = var8.bind(var9)(var7, var6);
                var14 = var2;
                var6 = copyDataProperties(var14, var13);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10['trackPaymentFlowStep'] = var15;
            var14 = function trackNewPaymentFlow(arg1) {
                var1 = arg1;
                var7 = var1.newFlowAnalyticsLoadId;
                var8 = var1.productId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var9 = _closure2_slot2;
                var10 = var2;
                var6 = copyDataProperties(var10, var9);
                var6 = 'subscription_plan_gateway_plan_id';
                var2[5] = var8;
                var6 = 'load_id';
                var2[5] = var7;
                var6 = _closure2_slot0;
                var5 = 'application_id';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['trackNewPaymentFlow'] = var14;
            var10['purchase'] = var13;
            var10 = var12.bind(var7)(var11, var10);
            var4['children'] = var10;
            var3 = var6.bind(var7)(var5, var4);
case 227:
            _fun0022_ip = 228; continue _fun0022;
case 219:
            var6 = _closure1_slot32;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var10 = 40;
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot32;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 70;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 228:
            var2 = var3;
case 218:
            var1 = var2;
case 213:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot38 = var4;
    var4 = 76;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanSelectWithOrderCTX(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot35;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 64;
            var1 = var2[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var3.useNavigation;
            var17 = var1.bind(var3)();
            var _closure2_slot1 = var17;
            var14 = 32;
            var1 = var2[var14];
            var9 = var6.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var3, var1);
            var1 = 74;
            var1 = var2[var1];
            var1 = var6.bind(var4)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var3 = var9.useConfig;
            var1 = {};
            var11 = 'PremiumPlanSelectWithOrderCTX';
            var1['location'] = var11;
            var1 = var3.bind(var9)(var1);
            var1 = var1.enabled;
            var3 = 44;
            var2 = var2[var3];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isIOS;
            var6 = var2.bind(var6)();
            var2 = _closure1_slot27;
            if(var6) { _fun0029_ip = 229; continue _fun0029 }
case 230:
            var12 = var2.GOOGLE;
            _fun0029_ip = 231; continue _fun0029;
case 229:
            if(var1) { _fun0029_ip = 232; continue _fun0029 }
case 106:
            var1 = var2.APPLE;
            _fun0029_ip = 233; continue _fun0029;
case 232:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 233:
            var12 = var1;
case 231:
            var1 = null;
            if(!(var1 != var8)) { _fun0029_ip = 234; continue _fun0029 }
case 235:
            var12 = var8.paymentGateway;
case 234:
            var2 = {};
            var6 = _closure1_slot22;
            var6 = var6.PREMIUM_YEAR_TIER_2;
            var2['subscriptionPlanId'] = var6;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 23;
            var9 = var6[var9];
            var16 = var11.bind(var4)(var9);
            var15 = var16.castPremiumSubscriptionAsSkuId;
            var9 = _closure1_slot19;
            var9 = var9.TIER_2;
            var9 = var15.bind(var16)(var9);
            var2['skuId'] = var9;
            var9 = 1;
            var2['quantity'] = var9;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = var6[var14];
            var18 = var11.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot12;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.hasFetchedSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var16.bind(var18)(var15, var2);
            var _closure2_slot2 = var2;
            var19 = _closure1_slot5;
            var18 = var19.useEffect;
            var16 = new Array(1);
            var16[0] = var2;
            var15 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0030_ip = 180; continue _fun0030 }
case 121:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 69;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 180:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var18.bind(var19)(var15, var16);
            var6 = var6[var14];
            var15 = var11.bind(var4)(var6);
            var14 = var15.useStateFromStores;
            var6 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.guildId;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0031_ip = 236; continue _fun0031 }
case 155:
                    var6 = _closure1_slot10;
                    var5 = var6.getGuild;
                    var3 = _closure2_slot0;
                    var3 = var3.guildId;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0031_ip = 237; continue _fun0031 }
case 238:
                    var2 = var3.name;
case 237:
                    var1 = var2;
case 236:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var11, var6);
            var _closure2_slot3 = var6;
            var14 = var10.isBoostPurchaseFlow;
            var11 = true;
            var16 = var11 === var14;
            if(!var16) { _fun0029_ip = 239; continue _fun0029 }
case 240:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 52;
            var11 = var15[var11];
            var15 = var14.bind(var4)(var11);
            var14 = var15.getMobileBoostingEnabled;
            var11 = 'PremiumPlanSelect';
            var16 = var14.bind(var15)(var11);
case 239:
            var _closure2_slot4 = var16;
            var15 = _closure1_slot5;
            var14 = var15.useLayoutEffect;
            var11 = new Array(3);
            var11[0] = var17;
            var11[1] = var16;
            var11[2] = var6;
            var6 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = _closure2_slot4;
                    if(!var4) { _fun0032_ip = 241; continue _fun0032 }
case 242:
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0032_ip = 156; continue _fun0032 }
case 241:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 22;
                    var5 = var10[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var10[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.u95Dt4;
                    var4 = var5.bind(var6)(var4);
                    _fun0032_ip = 243; continue _fun0032;
case 156:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 22;
                    var7 = var11[var5];
                    var6 = undefined;
                    var7 = var10.bind(var6)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var11[var5];
                    var5 = var10.bind(var6)(var5);
                    var5 = var5.t;
                    var6 = var5.LcefAL;
                    var5 = {};
                    var9 = _closure2_slot3;
                    var5['server'] = var9;
                    var4 = var7.bind(var8)(var6, var5);
case 243:
                    var1['title'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var6, var11);
            if(var2) { _fun0029_ip = 244; continue _fun0029 }
case 245:
            var11 = _closure1_slot32;
            var6 = _closure1_slot7;
            var2 = {};
            var13 = var13.loadingSpinnerContainer;
            var2['style'] = var13;
            var15 = _closure1_slot32;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 41;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ActivityIndicator;
            var13 = {'animating': true, 'size': 'large'};
            var13 = var15.bind(var4)(var14, var13);
            var2['children'] = var13;
            var2 = var11.bind(var4)(var6, var2);
            return var2;
case 244:
            if(!(var1 != var12)) { _fun0029_ip = 246; continue _fun0029 }
case 247:
            if(!(var1 != var8)) { _fun0029_ip = 248; continue _fun0029 }
case 249:
            var2 = var8.isPurchasedExternally;
            var1 = false;
            if(!(var1 !== var2)) { _fun0029_ip = 246; continue _fun0029 }
case 248:
            var6 = _closure1_slot32;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 75;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var12;
            var11 = _closure1_slot27;
            var11 = var11.APPLE_ADVANCED_COMMERCE;
            var11 = var12 === var11;
            var1['orderRequired'] = var11;
            var11 = new Array(0);
            var1['skuIds'] = var11;
            var1['defaultPlans'] = var9;
            var9 = false;
            var1['isGift'] = var9;
            var1['activeSubscription'] = var8;
            var7 = function onOrderRetryCancellation() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.canGoBack;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot1;
                    if(var1) { _fun0033_ip = 200; continue _fun0033 }
case 250:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun0033_ip = 104; continue _fun0033;
case 200:
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onOrderRetryCancellation'] = var7;
            var9 = _closure1_slot32;
            var8 = _closure1_slot38;
            var7 = {};
            var21 = var7;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var7 = var9.bind(var4)(var8, var7);
            var1['children'] = var7;
            var1 = var6.bind(var4)(var2, var1);
            return var1;
case 246:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var11 = 'Android';
            if(!var1) { _fun0029_ip = 251; continue _fun0029 }
case 252:
            var11 = 'iOS';
case 251:
            var3 = _closure1_slot32;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 21;
            var5 = var12[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var7 = 'display-md';
            var5['variant'] = var7;
            var7 = 22;
            var9 = var12[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.CnoyAN;
            var7 = {};
            var7['mobilePlatform'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();