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
        var1 = _closure1_slot34;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var3 = _closure1_slot32;
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
        var8 = _closure1_slot31;
        var5 = 20;
        var5 = var18[var5];
        var5 = var14.bind(var4)(var5);
        var7 = var5.TreasureChestBannerSpotIllustration;
        var5 = {'width': 117, 'height': 93, 'accessible': false};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot32;
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
        var12 = _closure1_slot31;
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
        var25 = _closure1_slot31;
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
        var12 = _closure1_slot31;
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
    var _closure1_slot38 = var1;
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
            var9 = _closure1_slot19;
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
    var _closure1_slot39 = var1;
    var1 = function BoostDeltaPriceTrailing(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.price;
            var10 = var1.interval;
            var4 = _closure1_slot32;
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
            var7 = _closure1_slot31;
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
            var8 = _closure1_slot31;
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
            var9 = _closure1_slot20;
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
            var16 = _closure1_slot31;
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
    var _closure1_slot40 = var1;
    var1 = function PlanRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var15 = var3.plan;
            var _closure2_slot0 = var15;
            var1 = var3.purchase;
            var _closure2_slot1 = var1;
            var27 = var3.style;
            var30 = var3.subscription;
            var _closure2_slot2 = var30;
            var7 = var3.disabled;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = false;
case 19:
            var24 = var3.hasBackground;
            if(!(var24 === var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var24 = false;
case 21:
            var1 = var3.shouldShowModernBoostFlow;
            if(!(var1 === var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = false;
case 23:
            var17 = var3.showBoostOnlyLabels;
            if(!(var17 === var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var17 = false;
case 25:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var6 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0004_ip = 21; continue _fun0004 }
case 31:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0004_ip = 29; continue _fun0004 }
case 21:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0004_ip = 29; continue _fun0004 }
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
                    _fun0004_ip = 27; continue _fun0004;
case 29:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot34;
            var21 = var3.bind(var5)();
            var4 = _closure1_slot15;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var20 = var4.bind(var5)(var3);
            var4 = _closure1_slot15;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.purchasingProductId;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var4.bind(var5)(var3);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 31;
            var3 = var12[var3];
            var9 = var11.bind(var5)(var3);
            var4 = var9.useToken;
            var13 = _closure1_slot1;
            var23 = 18;
            var3 = var12[var23];
            var3 = var13.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND;
            var13 = var4.bind(var9)(var3);
            var3 = 32;
            var3 = var12[var3];
            var14 = var11.bind(var5)(var3);
            var9 = var14.useStateFromStoresArray;
            var3 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
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
            var9 = var9.bind(var14)(var4, var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var5)(var9, var3);
            var14 = 0;
            var18 = var4[var14];
            var3 = 1;
            var4 = var4[var3];
            var9 = _closure1_slot9;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isPatchOrderLoading;
                    if(var1) { _fun0005_ip = 32; continue _fun0005 }
case 3:
                    var1 = var2.isCreateOrderLoading;
case 32:
                    return var1;
                }
            };
            var3 = var9.bind(var5)(var3);
            var9 = 33;
            var9 = var12[var9];
            var16 = var11.bind(var5)(var9);
            var9 = var16.usePremiumTier2DeltaPriceString;
            var40 = var16;
            var39 = var15;
            var38 = var30;
            var37 = var18;
            var36 = var1;
            var16 = var40[var9](var39, var38, var37, var36, var35);
            var9 = 34;
            var9 = var12[var9];
            var12 = var11.bind(var5)(var9);
            var11 = var12.useCheckoutPlanPriceString;
            var9 = var15.productId;
            var11 = var11.bind(var12)(var9, var18);
            var9 = null;
            if(!(var9 != var16)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var11 = var16;
case 33:
            var12 = var9 != var11;
            var28 = '$...';
            if(!var12) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var28 = var11;
case 35:
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 35;
            var11 = var18[var11];
            var11 = var12.bind(var5)(var11);
            var26 = var11.bind(var5)();
            var12 = var15.premiumTier;
            var11 = _closure1_slot19;
            var11 = var11.TIER_2;
            var12 = var12 === var11;
            if(!var12) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var11 = var15.numPremiumGuild;
            var12 = var14 === var11;
case 37:
            var29 = null;
            if(!var12) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var19 = _closure1_slot31;
            var25 = _closure1_slot0;
            var33 = _closure1_slot2;
            var11 = 36;
            var11 = var33[var11];
            var11 = var25.bind(var5)(var11);
            var18 = var11.LegacyText;
            var11 = {};
            var31 = var21.rowText;
            var22 = new Array(2);
            var22[0] = var31;
            var31 = var21.rowPlanDescriptionSubtext;
            var22[1] = var31;
            var11['style'] = var22;
            var22 = 22;
            var31 = var33[var22];
            var31 = var25.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.format;
            var22 = var33[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var25 = var22.he52LA;
            var22 = {};
            var33 = _closure1_slot17;
            var22['num'] = var33;
            var22 = var31.bind(var32)(var25, var22);
            var11['children'] = var22;
            var29 = var19.bind(var5)(var18, var11);
case 39:
            var11 = var15.premiumTier;
            var18 = var9 == var11;
            if(var18) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var11 = var15.numPremiumGuild;
            var18 = var14 !== var11;
case 41:
            var11 = var15.premiumTier;
            if(!(var9 != var11)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var11 = var15.numPremiumGuild;
            if(!(var14 === var11)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var14 = var15.premiumTier;
            var11 = _closure1_slot19;
            var11 = var11.TIER_0;
            if(!(var11 !== var14)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var11 = _closure1_slot19;
            var11 = var11.TIER_1;
            if(!(var11 !== var14)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var11 = _closure1_slot19;
            var11 = var11.TIER_2;
            if(!(var11 !== var14)) { _fun0003_ip = 51; continue _fun0003 }
case 45:
            var14 = var15.premiumTier;
            var11 = _closure1_slot19;
            var11 = var11.TIER_1;
            if(!(var14 !== var11)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 29;
            var11 = var19[var11];
            var19 = var14.bind(var5)(var11);
            _fun0003_ip = 54; continue _fun0003;
case 52:
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 28;
            var11 = var22[var11];
            var19 = var14.bind(var5)(var11);
case 54:
            _fun0003_ip = 55; continue _fun0003;
case 51:
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 27;
            var11 = var22[var11];
            var19 = var14.bind(var5)(var11);
            _fun0003_ip = 55; continue _fun0003;
case 49:
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 26;
            var11 = var22[var11];
            var19 = var14.bind(var5)(var11);
            _fun0003_ip = 55; continue _fun0003;
case 47:
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 25;
            var11 = var22[var11];
            var19 = var14.bind(var5)(var11);
            _fun0003_ip = 55; continue _fun0003;
case 43:
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 24;
            var11 = var22[var11];
            var19 = var14.bind(var5)(var11);
case 55:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var32 = 22;
            var11 = var11[var32];
            var11 = var14.bind(var5)(var11);
            var25 = var11.intl;
            var22 = var25.formatToPlainString;
            var14 = var15.interval;
            var11 = _closure1_slot20;
            var11 = var11.MONTH;
            if(!(var14 !== var11)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var32];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var14 = var11.rS8FA+;
            _fun0003_ip = 58; continue _fun0003;
case 56:
            var31 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var32];
            var11 = var31.bind(var5)(var11);
            var11 = var11.t;
            var14 = var11.AbOLNu;
case 58:
            var11 = {};
            var11['price'] = var28;
            var14 = var22.bind(var25)(var14, var11);
            var11 = undefined;
            if(!var12) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var28 = var22[var32];
            var28 = var25.bind(var5)(var28);
            var31 = var28.intl;
            var28 = var31.formatToPlainString;
            var22 = var22[var32];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var25 = var22.RTaZb4;
            var22 = {};
            var32 = _closure1_slot17;
            var22['num'] = var32;
            var11 = var28.bind(var31)(var25, var22);
case 59:
            var25 = var9 != var30;
            var22 = null;
            if(!var25) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var25 = 23;
            var25 = var31[var25];
            var28 = var28.bind(var5)(var25);
            var25 = var28.getPremiumTypeFromSubscription;
            var22 = var25.bind(var28)(var30);
case 61:
            _closure2_slot3 = var22;
            if(var7) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var7 = var20;
case 63:
            if(var7) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var7 = var4;
case 65:
            if(var7) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var7 = var3;
case 67:
            _closure2_slot4 = var7;
            var4 = _closure1_slot31;
            var3 = _closure1_slot0;
            var20 = _closure1_slot2;
            if(var1) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var1 = 42;
            var1 = var20[var1];
            var1 = var3.bind(var5)(var1);
            var2 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var22 = 43;
            var22 = var20[var22];
            var25 = var3.bind(var5)(var22);
            var22 = var25.isThemeDark;
            var26 = var22.bind(var25)(var26);
            var25 = 'none';
            var22 = var25;
            if(var26) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var22 = var25;
            if(!var24) { _fun0003_ip = 71; continue _fun0003 }
case 73:
            var25 = _closure1_slot1;
            var24 = _closure1_slot2;
            var24 = var24[var23];
            var24 = var25.bind(var5)(var24);
            var24 = var24.unsafe_rawColors;
            var22 = var24.PRIMARY_230;
case 71:
            var1['underlayColor'] = var22;
            var1['disabled'] = var7;
            var1['onPress'] = var6;
            var25 = _closure1_slot32;
            var24 = _closure1_slot7;
            var22 = {};
            var28 = var21.row;
            var26 = new Array(3);
            var26[0] = var28;
            var26[1] = var27;
            var27 = var7;
            if(!var7) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var27 = !var8;
case 74:
            if(!var27) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var27 = var21.rowDisabled;
case 76:
            var26[2] = var27;
            var22['style'] = var26;
            var28 = _closure1_slot31;
            var27 = _closure1_slot6;
            var26 = {};
            var30 = _closure1_slot35;
            var30 = var30[var19];
            var30 = var21[var30];
            var26['style'] = var30;
            var26['source'] = var19;
            var27 = var28.bind(var5)(var27, var26);
            var26 = new Array(5);
            var26[0] = var27;
            var33 = _closure1_slot31;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 36;
            var31 = var30[var27];
            var31 = var28.bind(var5)(var31);
            var32 = var31.LegacyText;
            var31 = {};
            var35 = var21.rowText;
            var34 = new Array(2);
            var34[0] = var35;
            var35 = var21.rowPlanDescription;
            var34[1] = var35;
            var31['style'] = var34;
            var34 = _closure1_slot39;
            var34 = var34.bind(var5)(var15, var17);
            var31['children'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var26[1] = var31;
            var26[2] = var29;
            var29 = _closure1_slot31;
            var27 = var30[var27];
            var27 = var28.bind(var5)(var27);
            var28 = var27.LegacyText;
            var27 = {};
            var31 = var21.rowText;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var21.rowPrice;
            var30[1] = var31;
            var27['style'] = var30;
            var27['children'] = var14;
            var27 = var29.bind(var5)(var28, var27);
            var26[3] = var27;
            var27 = null;
            if(!var8) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var30 = _closure1_slot31;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 41;
            var28 = var31[var28];
            var28 = var29.bind(var5)(var28);
            var29 = var28.ActivityIndicator;
            var28 = {'animating': true, 'size': 'small'};
            var31 = var21.purchasingSpinner;
            var28['style'] = var31;
            var28['color'] = var13;
            var27 = var30.bind(var5)(var29, var28);
case 78:
            var26[4] = var27;
            var22['children'] = var26;
            var22 = var25.bind(var5)(var24, var22);
            var1['children'] = var22;
            var1 = var4.bind(var5)(var2, var1);
            _fun0003_ip = 80; continue _fun0003;
case 69:
            var2 = 39;
            var2 = var20[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var20 = _closure1_slot31;
            if(var18) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            if(var12) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var18 = _closure1_slot6;
            var12 = {};
            var21 = var21.boostRowIcon;
            var12['style'] = var21;
            var12['source'] = var19;
            var12 = var20.bind(var5)(var18, var12);
            _fun0003_ip = 85; continue _fun0003;
case 83:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 30;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.NitroWheelIcon;
            var18 = {};
            var22 = 'xxs';
            var18['size'] = var22;
            var22 = _closure1_slot1;
            var21 = var21[var23];
            var21 = var22.bind(var5)(var21);
            var21 = var21.colors;
            var21 = var21.ICON_DEFAULT;
            var18['color'] = var21;
            var12 = var20.bind(var5)(var19, var18);
case 85:
            _fun0003_ip = 86; continue _fun0003;
case 81:
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var18 = 40;
            var18 = var21[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {'width': 32, 'height': 32};
            var12 = var20.bind(var5)(var19, var18);
case 86:
            var2['icon'] = var12;
            var12 = _closure1_slot39;
            var12 = var12.bind(var5)(var15, var17);
            var2['label'] = var12;
            var2['subLabel'] = var11;
            if(var8) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            if(!(var9 == var16)) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var12 = _closure1_slot31;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 21;
            var9 = var17[var9];
            var9 = var11.bind(var5)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'text-muted', 'lineClamp': 1};
            var9['children'] = var14;
            var9 = var12.bind(var5)(var11, var9);
            _fun0003_ip = 91; continue _fun0003;
case 89:
            var14 = _closure1_slot31;
            var12 = _closure1_slot40;
            var11 = {};
            var11['price'] = var16;
            var15 = var15.interval;
            var11['interval'] = var15;
            var9 = var14.bind(var5)(var12, var11);
case 91:
            _fun0003_ip = 92; continue _fun0003;
case 87:
            var12 = _closure1_slot31;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 41;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'small'};
            var10['color'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 92:
            var2['trailing'] = var9;
            var9 = true;
            var2['arrow'] = var9;
            if(!var7) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var7 = !var8;
case 93:
            var2['disabled'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 80:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function PlanSection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var6 = var2.plans;
            var7 = var2.label;
            var1 = var2.shouldShowModernBoostFlow;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var1 = false;
case 95:
            var _closure2_slot0 = var1;
            var4 = var2.showBoostOnlyLabels;
            if(!(var4 === var5)) { _fun0006_ip = 97; continue _fun0006 }
case 7:
            var4 = false;
case 97:
            var _closure2_slot1 = var4;
            var4 = var2.purchase;
            var _closure2_slot2 = var4;
            var4 = var2.analyticsLoadId;
            var _closure2_slot3 = var4;
            var4 = var2.trackNewPaymentFlow;
            var _closure2_slot4 = var4;
            var4 = var2.trackPaymentFlowStep;
            var _closure2_slot5 = var4;
            var4 = var2.subscription;
            var _closure2_slot6 = var4;
            var2 = var2.shouldRemoveYearlyUpsell;
            var _closure2_slot7 = var2;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var8 = _closure1_slot9;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var5)(var4);
            _closure2_slot8 = var9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 44;
            var4 = var10[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.isIOS;
            var4 = var4.bind(var8)();
            if(!var4) { _fun0006_ip = 98; continue _fun0006 }
case 99:
            var8 = null;
            var4 = var8 != var9;
case 98:
            _closure2_slot9 = var4;
            var4 = var6.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot31;
                var4 = _closure1_slot41;
                var3 = {};
                var3['plan'] = var1;
                var6 = _closure2_slot6;
                var3['subscription'] = var6;
                var6 = _closure2_slot0;
                var3['shouldShowModernBoostFlow'] = var6;
                var2 = _closure2_slot1;
                var3['showBoostOnlyLabels'] = var2;
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
                        var2 = _closure2_slot9;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0007_ip = 100; continue _fun0007 }
case 22:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                        var2 = _closure2_slot8;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                        var12 = _closure2_slot8;
                        var11 = var12.getAvailablePlanForItems;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var14];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.getSubscriptionItemsForProduct;
                        var10 = var10.bind(var13)(var7);
                        var2 = var11.bind(var12)(var10);
case 102:
                        var10 = var5 != var2;
                        var9 = null;
                        if(!var10) { _fun0007_ip = 100; continue _fun0007 }
case 104:
                        var9 = var2;
case 100:
                        var _closure4_slot2 = var9;
                        var2 = _closure2_slot9;
                        if(var2) { _fun0007_ip = 105; continue _fun0007 }
case 106:
                        var2 = var5 != var7;
                        if(!var2) { _fun0007_ip = 107; continue _fun0007 }
case 108:
                        var11 = _closure1_slot13;
                        var10 = var11.getProduct;
                        var10 = var10.bind(var11)(var7);
                        var2 = var5 != var10;
case 107:
                        _fun0007_ip = 8; continue _fun0007;
case 105:
                        var2 = var5 != var9;
case 8:
                        if(!(var5 != var7)) { _fun0007_ip = 109; continue _fun0007 }
case 110:
                        if(!var2) { _fun0007_ip = 109; continue _fun0007 }
case 27:
                        var2 = _closure2_slot7;
                        if(var2) { _fun0007_ip = 109; continue _fun0007 }
case 111:
                        var5 = _closure2_slot5;
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
                                        var4 = _closure1_slot31;
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
case 112:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 24:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0008_ip = 26; continue _fun0008 }
case 113:
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
                                                    if(var2) { _fun0009_ip = 114; continue _fun0009 }
case 115:
                                                    var6 = _closure2_slot5;
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
                                                    var4 = _closure2_slot2;
                                                    var2 = _closure2_slot3;
                                                    var2 = var4.bind(var3)(var5, var2);
                                                    SaveGenerator(address=122);
case 116:
                                                    return var2;
case 117:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 118; continue _fun0009 }
case 102:
                                                    return var3;
case 118:
                                                    return var2;
case 114:
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
                                                    if(var2) { _fun0010_ip = 119; continue _fun0010 }
case 120:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 46;
                                                    var2 = var3[var2];
                                                    var3 = undefined;
                                                    var4 = var4.bind(var3)(var2);
                                                    var2 = var4.getNewAnalyticsLoadId;
                                                    var5 = var2.bind(var4)();
                                                    var7 = _closure2_slot4;
                                                    var6 = {};
                                                    var6['newFlowAnalyticsLoadId'] = var5;
                                                    var4 = _closure4_slot1;
                                                    var6['productId'] = var4;
                                                    var6 = var7.bind(var3)(var6);
                                                    var2 = _closure2_slot2;
                                                    var2 = var2.bind(var3)(var4, var5);
                                                    SaveGenerator(address=87);
case 103:
                                                    return var2;
case 26:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0010_ip = 121; continue _fun0010 }
case 122:
                                                    return var3;
case 121:
                                                    return var2;
case 119:
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
case 109:
                        var5 = _closure2_slot5;
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
                        var2 = _closure2_slot2;
                        var1 = _closure2_slot3;
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
            var4 = _closure1_slot31;
            if(var1) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var3 = _closure1_slot7;
            var1 = {};
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 125; continue _fun0006;
case 123:
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
case 125:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
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
            var2 = _closure1_slot34;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0011_ip = 126; continue _fun0011 }
case 127:
            var14 = null;
            if(!(var14 != var13)) { _fun0011_ip = 126; continue _fun0011 }
case 128:
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
            if(!(var14 == var6)) { _fun0011_ip = 129; continue _fun0011 }
case 29:
            var2 = _closure1_slot29;
            var5 = var2.PREMIUM_GUILD;
            _fun0011_ip = 27; continue _fun0011;
case 129:
            var2 = _closure1_slot28;
            var5 = var2.bind(var4)(var6);
case 27:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot7 = var11;
            var3 = _closure1_slot31;
            var2 = _closure1_slot1;
            var1 = 51;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot25;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot25;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot31;
            var6 = _closure1_slot41;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0011_ip = 15; continue _fun0011 }
case 130:
            var13 = var13.status;
            var12 = _closure1_slot27;
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
                    var1 = _closure1_slot27;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                    var1 = _closure2_slot7;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0012_ip = 133; continue _fun0012 }
case 117:
                    var10 = _closure1_slot13;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot7;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0012_ip = 133; continue _fun0012 }
case 134:
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
case 133:
                    _fun0012_ip = 135; continue _fun0012;
case 131:
                    if(!(var2 != var4)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0012_ip = 136; continue _fun0012 }
case 138:
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
                                var4 = _closure1_slot31;
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
                                            if(var2) { _fun0013_ip = 119; continue _fun0013 }
case 120:
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
case 103:
                                            return var2;
case 26:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                                            return var3;
case 121:
                                            return var2;
case 119:
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
                                            if(var2) { _fun0014_ip = 114; continue _fun0014 }
case 115:
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
case 116:
                                            return var2;
case 117:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0014_ip = 118; continue _fun0014 }
case 102:
                                            return var3;
case 118:
                                            return var2;
case 114:
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
                    _fun0012_ip = 139; continue _fun0012;
case 136:
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
case 139:
                    var1 = var2;
case 135:
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
case 126:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot34;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot31;
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
    var _closure1_slot44 = var1;
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
            var1 = _closure1_slot34;
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
            var1 = null;
            var3 = var1 != var17;
            var2 = null;
            if(!var3) { _fun0015_ip = 140; continue _fun0015 }
case 104:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 45;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.getProductIdFromSubscription;
            var3 = false;
            var2 = var5.bind(var8)(var17, var3);
case 140:
            _closure2_slot7 = var2;
            var11 = var10;
            if(!var10) { _fun0015_ip = 141; continue _fun0015 }
case 142:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 52;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getShouldRemoveYearlyUpsell;
            var2 = 'PremiumPlanSelect';
            var11 = var3.bind(var5)(var2);
case 141:
            _closure2_slot8 = var11;
            if(!var10) { _fun0015_ip = 143; continue _fun0015 }
case 144:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 52;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getMobileBoostingEnabled;
            var2 = 'PremiumPlanSelect';
            var10 = var3.bind(var5)(var2);
case 143:
            _closure2_slot9 = var10;
            var1 = var1 != var17;
            if(!var1) { _fun0015_ip = 145; continue _fun0015 }
case 138:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 23;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getPremiumTypeFromSubscription;
            var3 = var2.bind(var3)(var17);
            var2 = _closure1_slot19;
            var2 = var2.TIER_2;
            var1 = var3 === var2;
case 145:
            var9 = var10;
            if(!var10) { _fun0015_ip = 146; continue _fun0015 }
case 147:
            var9 = var1;
case 146:
            _closure2_slot10 = var9;
            var3 = _closure1_slot36;
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
                        if(!var1) { _fun0016_ip = 148; continue _fun0016 }
case 149:
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
case 148:
                        if(!var1) { _fun0016_ip = 150; continue _fun0016 }
case 151:
                        var4 = _closure3_slot0;
                        var3 = var4.predicate;
                        var1 = var3.bind(var4)(var5);
case 150:
                        if(!var1) { _fun0016_ip = 116; continue _fun0016 }
case 152:
                        var4 = var5.premiumTier;
                        var3 = _closure1_slot19;
                        var3 = var3.TIER_1;
                        var1 = var4 !== var3;
case 116:
                        if(!var1) { _fun0016_ip = 153; continue _fun0016 }
case 154:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 44;
                        var3 = var7[var3];
                        var9 = undefined;
                        var6 = var6.bind(var9)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        var3 = !var3;
                        if(var3) { _fun0016_ip = 99; continue _fun0016 }
case 155:
                        var7 = _closure2_slot6;
                        var6 = null;
                        var3 = var6 == var7;
case 99:
                        if(var3) { _fun0016_ip = 156; continue _fun0016 }
case 107:
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
case 156:
                        var1 = var3;
case 153:
                        if(!var1) { _fun0016_ip = 157; continue _fun0016 }
case 158:
                        var4 = _closure2_slot7;
                        var6 = null;
                        var3 = var6 == var4;
                        var2 = true;
                        if(var3) { _fun0016_ip = 159; continue _fun0016 }
case 131:
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
                        if(var3) { _fun0016_ip = 160; continue _fun0016 }
case 161:
                        var5 = var5.numPremiumGuild;
                        var4 = var4.numPremiumGuild;
                        var3 = var5 >= var4;
case 160:
                        var2 = var3;
case 159:
                        var1 = var2;
case 157:
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
            if(!var9) { _fun0015_ip = 162; continue _fun0015 }
case 163:
            var8 = var3;
            if(!var1) { _fun0015_ip = 162; continue _fun0015 }
case 164:
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
case 162:
            var3 = _closure1_slot32;
            var2 = _closure1_slot7;
            var1 = {};
            var19 = var18.container;
            var5 = new Array(2);
            var5[0] = var19;
            if(!var10) { _fun0015_ip = 165; continue _fun0015 }
case 166:
            var10 = var18.boostContainer;
case 165:
            var5[1] = var10;
            var1['style'] = var5;
            if(!var9) { _fun0015_ip = 167; continue _fun0015 }
case 168:
            var18 = _closure1_slot31;
            var10 = _closure1_slot38;
            var5 = {};
            var9 = var18.bind(var4)(var10, var5);
case 167:
            var5 = new Array(3);
            var5[0] = var9;
            var10 = _closure1_slot31;
            var9 = _closure1_slot43;
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
                    var3 = _closure1_slot32;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var6 = _closure2_slot9;
                    var8 = !var6;
                    if(!var8) { _fun0017_ip = 169; continue _fun0017 }
case 22:
                    var13 = _closure1_slot31;
                    var9 = _closure1_slot44;
                    var6 = {};
                    var6['string'] = var11;
                    var8 = var13.bind(var4)(var9, var6);
case 169:
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot31;
                    var8 = _closure1_slot42;
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
    var _closure1_slot45 = var1;
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
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot18 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot19 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot20 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot21 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot22 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot23 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot24 = var7;
    var18 = var4.Fonts;
    var7 = var4.HorizontalGradient;
    var _closure1_slot25 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot26 = var7;
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot27 = var7;
    var14 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGradientColor;
    var _closure1_slot28 = var7;
    var4 = var4.Gradients;
    var _closure1_slot29 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot30 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot31 = var7;
    var7 = var4.jsxs;
    var _closure1_slot32 = var7;
    var4 = var4.Fragment;
    var _closure1_slot33 = var4;
    var4 = 15;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var19 = 16;
    var7 = var6[var19];
    var15 = var9.bind(var1)(var7);
    var13 = var18.DISPLAY_EXTRABOLD;
    var7 = 24;
    var22 = var15.bind(var1)(var13, var1, var7);
    var23 = var12;
    var13 = copyDataProperties(var23, var22);
    var13 = 'marginTop';
    var12[12] = var19;
    var17 = 17;
    var13 = var6[var17];
    var13 = var5.bind(var1)(var13);
    var15 = var13.DARK_WHITE_500_LIGHT_BLACK_500;
    var13 = 'color';
    var12[12] = var15;
    var4['header'] = var12;
    var12 = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    var15 = 18;
    var13 = var6[var15];
    var13 = var9.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12['borderRadius'] = var13;
    var13 = 'center';
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
    var17 = var6[var15];
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
    var12['margin'] = var14;
    var4['offPlatformSubscriptionMessage'] = var12;
    var12 = {};
    var12['paddingHorizontal'] = var14;
    var12['marginTop'] = var16;
    var4['premiumHeaderLabel'] = var12;
    var12 = {};
    var16 = var6[var15];
    var16 = var9.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_24;
    var12['rowGap'] = var16;
    var4['boostContainer'] = var12;
    var12 = {'width': 32, 'height': 32};
    var4['boostRowIcon'] = var12;
    var12 = {};
    var12['alignItems'] = var13;
    var15 = var6[var15];
    var15 = var9.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_16;
    var12['paddingTop'] = var15;
    var12['paddingHorizontal'] = var14;
    var4['nitroBanner'] = var12;
    var12 = {};
    var12['textAlign'] = var13;
    var4['nitroBannerText'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot34 = var4;
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
    var _closure1_slot35 = var4;
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
            if(!var1) { _fun0018_ip = 95; continue _fun0018 }
case 32:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 95:
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
            if(var1) { _fun0019_ip = 148; continue _fun0019 }
case 22:
            var1 = var4.lyXyD0;
            _fun0019_ip = 170; continue _fun0019;
case 148:
            var1 = var4.rPoOQW;
case 170:
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
            if(!var1) { _fun0020_ip = 95; continue _fun0020 }
case 32:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 95:
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
            if(!var1) { _fun0021_ip = 95; continue _fun0021 }
case 32:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 95:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[2] = var7;
    var _closure1_slot36 = var4;
    var7 = var8.forwardRef;
    var4 = function PremiumPlanSelect(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var20 = var1.predicate;
            var17 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var17 === var7)) { _fun0022_ip = 96; continue _fun0022 }
case 30:
            var17 = true;
case 96:
            var16 = var1.isBoostPurchaseFlow;
            if(!(var16 === var7)) { _fun0022_ip = 171; continue _fun0022 }
case 172:
            var16 = false;
case 171:
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
            var1 = _closure1_slot34;
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
                    if(var1) { _fun0023_ip = 173; continue _fun0023 }
case 115:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 59;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 173:
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
            var21 = _closure1_slot23;
            var21 = var21.BUTTON_CTA;
            var6['object'] = var21;
            var21 = _closure1_slot24;
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
            if(!(var6 == var12)) { _fun0022_ip = 174; continue _fun0022 }
case 175:
            var3 = {};
            _fun0022_ip = 36; continue _fun0022;
case 174:
            var5 = {};
            var5['subscription_plan_id'] = var12;
            var3 = var5;
case 36:
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
            if(!(var6 == var18)) { _fun0022_ip = 176; continue _fun0022 }
case 177:
            var5 = {};
            _fun0022_ip = 178; continue _fun0022;
case 176:
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
case 178:
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
                            if(var2) { _fun0024_ip = 179; continue _fun0024 }
case 180:
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
                            if(!(var11 == var2)) { _fun0024_ip = 181; continue _fun0024 }
case 182:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 45;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.getSubscriptionItemsForProduct;
                            var2 = var14;
                            var15 = var5.bind(var6)(var2);
                            _fun0024_ip = 183; continue _fun0024;
case 181:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 45;
                            var2 = var6[var2];
                            var16 = var5.bind(var3)(var2);
                            var6 = var16.getModifySubscriptionItemsForProduct;
                            var5 = var14;
                            var2 = _closure2_slot8;
                            var15 = var6.bind(var16)(var5, var2);
case 183:
                            var9 = undefined;
                            var2 = _closure2_slot7;
                            if(!var2) { _fun0024_ip = 184; continue _fun0024 }
case 185:
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
                                var2 = _closure1_slot30;
                                var2 = var2.SUBSCRIPTION;
                                var1['purchase_type'] = var2;
                                return var1;
                            };
                            var2 = var6.bind(var15)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=169);
case 186:
                            return var2;
case 187:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0024_ip = 188; continue _fun0024 }
case 189:
                            var9 = var2;
                            if(!(var11 != var2)) { _fun0024_ip = 190; continue _fun0024 }
case 184: // try_start_0
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
                            if(var11) { _fun0024_ip = 191; continue _fun0024 }
case 153:
                            var9 = var10.id;
case 191:
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
                                    var3 = _closure1_slot26;
                                    var3 = var3.APPLE_ADVANCED_COMMERCE;
                                    if(!(var4 === var3)) { _fun0025_ip = 170; continue _fun0025 }
case 192:
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
                                            if(!(var1 != var2)) { _fun0026_ip = 103; continue _fun0026 }
case 193:
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
                                                        var4 = _closure1_slot31;
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
                                                                if(!(var3 != var4)) { _fun0027_ip = 121; continue _fun0027 }
case 194:
                                                                var2 = _closure7_slot0;
                                                                var2 = var2.bind(var1)();
case 121:
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
case 103:
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
                                            if(var1) { _fun0026_ip = 195; continue _fun0026 }
case 6:
                                            var1 = var3.bind(var2)();
case 195:
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
                                            if(!var2) { _fun0028_ip = 196; continue _fun0028 }
case 197:
                                            var2 = _closure2_slot5;
                                            var1 = var2.goBack;
                                            var1 = var1.bind(var2)();
case 196:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var1)(var2);
case 170:
                                    return var1;
                                }
                            };
                            var5['onPurchaseComplete'] = var7;
                            var5 = var6.bind(var3)(var5);
                            SaveGenerator(address=269);
case 16:
                            return var5;
case 198:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0024_ip = 199; continue _fun0024 }
case 125: // try_end0
                            _fun0024_ip = 200; continue _fun0024;
case 199:
                            return var5;
case 201: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 68;
                            var5 = var9[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0024_ip = 202; continue _fun0024 }
case 203:
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
                            _fun0024_ip = 200; continue _fun0024;
case 202:
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
case 200:
                            var6 = _closure1_slot14;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            _fun0024_ip = 204; continue _fun0024;
case 190:
                            var5 = _closure1_slot14;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
case 204:
                            return var3;
case 188:
                            return var2;
case 179:
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
            if(var5) { _fun0022_ip = 205; continue _fun0022 }
case 206:
            if(!var4) { _fun0022_ip = 207; continue _fun0022 }
case 47:
            if(var2) { _fun0022_ip = 208; continue _fun0022 }
case 207:
            var5 = _closure1_slot31;
            var4 = _closure1_slot7;
            var2 = {};
            var10 = var19.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot31;
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
            _fun0022_ip = 209; continue _fun0022;
case 208:
            if(var3) { _fun0022_ip = 210; continue _fun0022 }
case 211:
            if(!(var6 != var18)) { _fun0022_ip = 212; continue _fun0022 }
case 213:
            var3 = var18.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0022_ip = 214; continue _fun0022 }
case 215:
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
            if(var3) { _fun0022_ip = 212; continue _fun0022 }
case 214:
            var5 = _closure1_slot32;
            var4 = _closure1_slot8;
            var3 = {};
            var10 = var6 != var25;
            if(!var10) { _fun0022_ip = 216; continue _fun0022 }
case 217:
            var12 = _closure1_slot32;
            var11 = _closure1_slot33;
            var6 = {};
            var24 = _closure1_slot31;
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
            var24 = _closure1_slot31;
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
case 216:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot31;
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
            _fun0022_ip = 218; continue _fun0022;
case 212:
            var6 = _closure1_slot31;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot31;
            var11 = _closure1_slot45;
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
                var2 = _closure1_slot22;
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
case 218:
            _fun0022_ip = 219; continue _fun0022;
case 210:
            var6 = _closure1_slot31;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var10 = 40;
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot31;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 70;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 219:
            var2 = var3;
case 209:
            var1 = var2;
case 205:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot37 = var4;
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
            var1 = _closure1_slot34;
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
            var2 = _closure1_slot26;
            if(var6) { _fun0029_ip = 142; continue _fun0029 }
case 220:
            var12 = var2.GOOGLE;
            _fun0029_ip = 221; continue _fun0029;
case 142:
            if(var1) { _fun0029_ip = 222; continue _fun0029 }
case 223:
            var1 = var2.APPLE;
            _fun0029_ip = 224; continue _fun0029;
case 222:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 224:
            var12 = var1;
case 221:
            var1 = null;
            if(!(var1 != var8)) { _fun0029_ip = 225; continue _fun0029 }
case 226:
            var12 = var8.paymentGateway;
case 225:
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.PREMIUM_YEAR_TIER_2;
            var2['subscriptionPlanId'] = var6;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 23;
            var9 = var6[var9];
            var16 = var11.bind(var4)(var9);
            var15 = var16.castPremiumSubscriptionAsSkuId;
            var9 = _closure1_slot18;
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
                    if(var1) { _fun0030_ip = 173; continue _fun0030 }
case 115:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 69;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 173:
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
                    if(!var5) { _fun0031_ip = 227; continue _fun0031 }
case 149:
                    var6 = _closure1_slot10;
                    var5 = var6.getGuild;
                    var3 = _closure2_slot0;
                    var3 = var3.guildId;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0031_ip = 228; continue _fun0031 }
case 229:
                    var2 = var3.name;
case 228:
                    var1 = var2;
case 227:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var11, var6);
            var _closure2_slot3 = var6;
            var14 = var10.isBoostPurchaseFlow;
            var11 = true;
            var16 = var11 === var14;
            if(!var16) { _fun0029_ip = 168; continue _fun0029 }
case 230:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 52;
            var11 = var15[var11];
            var15 = var14.bind(var4)(var11);
            var14 = var15.getMobileBoostingEnabled;
            var11 = 'PremiumPlanSelect';
            var16 = var14.bind(var15)(var11);
case 168:
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
                    if(!var4) { _fun0032_ip = 231; continue _fun0032 }
case 232:
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0032_ip = 150; continue _fun0032 }
case 231:
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
                    _fun0032_ip = 233; continue _fun0032;
case 150:
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
case 233:
                    var1['title'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var6, var11);
            if(var2) { _fun0029_ip = 234; continue _fun0029 }
case 235:
            var11 = _closure1_slot31;
            var6 = _closure1_slot7;
            var2 = {};
            var13 = var13.loadingSpinnerContainer;
            var2['style'] = var13;
            var15 = _closure1_slot31;
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
case 234:
            if(!(var1 != var12)) { _fun0029_ip = 51; continue _fun0029 }
case 236:
            if(!(var1 != var8)) { _fun0029_ip = 237; continue _fun0029 }
case 238:
            var2 = var8.isPurchasedExternally;
            var1 = false;
            if(!(var1 !== var2)) { _fun0029_ip = 51; continue _fun0029 }
case 237:
            var6 = _closure1_slot31;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 75;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var12;
            var11 = _closure1_slot26;
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
                    if(var1) { _fun0033_ip = 193; continue _fun0033 }
case 239:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun0033_ip = 97; continue _fun0033;
case 193:
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onOrderRetryCancellation'] = var7;
            var9 = _closure1_slot31;
            var8 = _closure1_slot37;
            var7 = {};
            var21 = var7;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var7 = var9.bind(var4)(var8, var7);
            var1['children'] = var7;
            var1 = var6.bind(var4)(var2, var1);
            return var1;
case 51:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var11 = 'Android';
            if(!var1) { _fun0029_ip = 240; continue _fun0029 }
case 241:
            var11 = 'iOS';
case 240:
            var3 = _closure1_slot31;
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