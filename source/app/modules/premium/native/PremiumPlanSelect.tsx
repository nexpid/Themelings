// app/modules/premium/native/PremiumPlanSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function getPlanDescription(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = var6.premiumTier;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.numPremiumGuild;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 19;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var5 = var6.premiumTier;
            var2 = _closure1_slot18;
            var2 = var2.TIER_1;
            if(!(var5 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.u6dBsN;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.sexoHq;
case 8:
            var1 = {};
            var5 = var6.numPremiumGuild;
            var1['num'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getPremiumTypeDisplayName;
            var2 = var6.premiumTier;
            var1 = var3.bind(var4)(var2);
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.gDsyB9;
            var2 = {};
            var6 = var6.numPremiumGuild;
            var2['numSubscriptions'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function PlanRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.plan;
            var _closure2_slot0 = var14;
            var3 = var1.purchase;
            var _closure2_slot1 = var3;
            var24 = var1.style;
            var27 = var1.subscription;
            var _closure2_slot2 = var27;
            var7 = var1.disabled;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = false;
case 11:
            var18 = var1.hasBackground;
            if(!(var18 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var18 = false;
case 13:
            var1 = var1.shouldShowModernBoostFlow;
            if(!(var1 === var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = false;
case 15:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var6 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 21:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0003_ip = 19; continue _fun0003 }
case 13:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot18;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0003_ip = 19; continue _fun0003 }
case 22:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 32;
                    var2 = var7[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['subscription'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 33;
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
                    _fun0003_ip = 17; continue _fun0003;
case 19:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot33;
            var19 = var3.bind(var5)();
            var4 = _closure1_slot15;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var9 = var4.bind(var5)(var3);
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
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 27;
            var3 = var16[var3];
            var11 = var12.bind(var5)(var3);
            var4 = var11.useToken;
            var13 = _closure1_slot1;
            var21 = 18;
            var3 = var16[var21];
            var3 = var13.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND;
            var13 = var4.bind(var11)(var3);
            var3 = 28;
            var3 = var16[var3];
            var15 = var12.bind(var5)(var3);
            var11 = var15.useStateFromStoresArray;
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
            var11 = var11.bind(var15)(var4, var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var5)(var11, var3);
            var15 = 0;
            var17 = var4[var15];
            var3 = 1;
            var4 = var4[var3];
            var11 = _closure1_slot9;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isPatchOrderLoading;
                    if(var1) { _fun0004_ip = 3; continue _fun0004 }
case 23:
                    var1 = var2.isCreateOrderLoading;
case 3:
                    return var1;
                }
            };
            var3 = var11.bind(var5)(var3);
            var11 = 29;
            var11 = var16[var11];
            var16 = var12.bind(var5)(var11);
            var12 = var16.useCheckoutPlanPriceString;
            var11 = var14.productId;
            var11 = var12.bind(var16)(var11, var17);
            var23 = null;
            var12 = var23 != var11;
            var28 = '$...';
            if(!var12) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var28 = var11;
case 24:
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 30;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var22 = var11.bind(var5)();
            var12 = var14.premiumTier;
            var11 = _closure1_slot18;
            var11 = var11.TIER_2;
            var16 = var12 === var11;
            if(!var16) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var11 = var14.numPremiumGuild;
            var16 = var15 === var11;
case 26:
            var26 = null;
            if(!var16) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var17 = _closure1_slot30;
            var25 = _closure1_slot0;
            var31 = _closure1_slot2;
            var11 = 31;
            var11 = var31[var11];
            var11 = var25.bind(var5)(var11);
            var12 = var11.LegacyText;
            var11 = {};
            var29 = var19.rowText;
            var20 = new Array(2);
            var20[0] = var29;
            var29 = var19.rowPlanDescriptionSubtext;
            var20[1] = var29;
            var11['style'] = var20;
            var20 = 19;
            var29 = var31[var20];
            var29 = var25.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.format;
            var20 = var31[var20];
            var20 = var25.bind(var5)(var20);
            var20 = var20.t;
            var25 = var20.he52LA;
            var20 = {};
            var31 = _closure1_slot16;
            var20['num'] = var31;
            var20 = var29.bind(var30)(var25, var20);
            var11['children'] = var20;
            var26 = var17.bind(var5)(var12, var11);
case 28:
            var11 = var14.premiumTier;
            var12 = var23 == var11;
            if(var12) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = var14.numPremiumGuild;
            var12 = var15 !== var11;
case 30:
            var11 = var14.premiumTier;
            if(!(var23 != var11)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = var14.numPremiumGuild;
            if(!(var15 === var11)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var15 = var14.premiumTier;
            var11 = _closure1_slot18;
            var11 = var11.TIER_0;
            if(!(var11 !== var15)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var11 = _closure1_slot18;
            var11 = var11.TIER_1;
            if(!(var11 !== var15)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var11 = _closure1_slot18;
            var11 = var11.TIER_2;
            if(!(var11 !== var15)) { _fun0002_ip = 40; continue _fun0002 }
case 34:
            var15 = var14.premiumTier;
            var11 = _closure1_slot18;
            var11 = var11.TIER_1;
            if(!(var15 !== var11)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 26;
            var11 = var17[var11];
            var17 = var15.bind(var5)(var11);
            _fun0002_ip = 43; continue _fun0002;
case 41:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 25;
            var11 = var20[var11];
            var17 = var15.bind(var5)(var11);
case 43:
            _fun0002_ip = 44; continue _fun0002;
case 40:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 24;
            var11 = var20[var11];
            var17 = var15.bind(var5)(var11);
            _fun0002_ip = 44; continue _fun0002;
case 38:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 23;
            var11 = var20[var11];
            var17 = var15.bind(var5)(var11);
            _fun0002_ip = 44; continue _fun0002;
case 36:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 22;
            var11 = var20[var11];
            var17 = var15.bind(var5)(var11);
            _fun0002_ip = 44; continue _fun0002;
case 32:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 21;
            var11 = var20[var11];
            var17 = var15.bind(var5)(var11);
case 44:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var29 = 19;
            var11 = var11[var29];
            var11 = var15.bind(var5)(var11);
            var25 = var11.intl;
            var20 = var25.formatToPlainString;
            var15 = var14.interval;
            var11 = _closure1_slot19;
            var11 = var11.MONTH;
            if(!(var15 !== var11)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var29];
            var11 = var15.bind(var5)(var11);
            var11 = var11.t;
            var15 = var11.rS8FA+;
            _fun0002_ip = 47; continue _fun0002;
case 45:
            var30 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var29];
            var11 = var30.bind(var5)(var11);
            var11 = var11.t;
            var15 = var11.AbOLNu;
case 47:
            var11 = {};
            var11['price'] = var28;
            var15 = var20.bind(var25)(var15, var11);
            var11 = undefined;
            if(!var16) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var25 = var16[var29];
            var25 = var20.bind(var5)(var25);
            var28 = var25.intl;
            var25 = var28.formatToPlainString;
            var16 = var16[var29];
            var16 = var20.bind(var5)(var16);
            var16 = var16.t;
            var20 = var16.RTaZb4;
            var16 = {};
            var29 = _closure1_slot16;
            var16['num'] = var29;
            var11 = var25.bind(var28)(var20, var16);
case 48:
            var20 = var23 != var27;
            var16 = null;
            if(!var20) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 20;
            var20 = var28[var20];
            var25 = var25.bind(var5)(var20);
            var20 = var25.getPremiumTypeFromSubscription;
            var16 = var20.bind(var25)(var27);
case 50:
            _closure2_slot3 = var16;
            if(var7) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var7 = var9;
case 52:
            if(var7) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var7 = var4;
case 54:
            if(var7) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var7 = var3;
case 56:
            _closure2_slot4 = var7;
            var4 = _closure1_slot30;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            if(var1) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var1 = 37;
            var1 = var2[var1];
            var1 = var3.bind(var5)(var1);
            var9 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var16 = 38;
            var16 = var2[var16];
            var20 = var3.bind(var5)(var16);
            var16 = var20.isThemeDark;
            var22 = var16.bind(var20)(var22);
            var20 = 'none';
            var16 = var20;
            if(var22) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var16 = var20;
            if(!var18) { _fun0002_ip = 60; continue _fun0002 }
case 62:
            var20 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var20.bind(var5)(var18);
            var18 = var18.unsafe_rawColors;
            var16 = var18.PRIMARY_230;
case 60:
            var1['underlayColor'] = var16;
            var1['disabled'] = var7;
            var1['onPress'] = var6;
            var20 = _closure1_slot31;
            var18 = _closure1_slot7;
            var16 = {};
            var25 = var19.row;
            var22 = new Array(3);
            var22[0] = var25;
            var22[1] = var24;
            var24 = var7;
            if(!var7) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var24 = !var8;
case 63:
            if(!var24) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var24 = var19.rowDisabled;
case 65:
            var22[2] = var24;
            var16['style'] = var22;
            var25 = _closure1_slot30;
            var24 = _closure1_slot6;
            var22 = {};
            var27 = _closure1_slot34;
            var27 = var27[var17];
            var27 = var19[var27];
            var22['style'] = var27;
            var22['source'] = var17;
            var24 = var25.bind(var5)(var24, var22);
            var22 = new Array(5);
            var22[0] = var24;
            var30 = _closure1_slot30;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 31;
            var28 = var27[var24];
            var28 = var25.bind(var5)(var28);
            var29 = var28.LegacyText;
            var28 = {};
            var32 = var19.rowText;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var19.rowPlanDescription;
            var31[1] = var32;
            var28['style'] = var31;
            var31 = _closure1_slot37;
            var31 = var31.bind(var5)(var14);
            var28['children'] = var31;
            var28 = var30.bind(var5)(var29, var28);
            var22[1] = var28;
            var22[2] = var26;
            var26 = _closure1_slot30;
            var24 = var27[var24];
            var24 = var25.bind(var5)(var24);
            var25 = var24.LegacyText;
            var24 = {};
            var28 = var19.rowText;
            var27 = new Array(2);
            var27[0] = var28;
            var28 = var19.rowPrice;
            var27[1] = var28;
            var24['style'] = var27;
            var24['children'] = var15;
            var24 = var26.bind(var5)(var25, var24);
            var22[3] = var24;
            var23 = null;
            if(!var8) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var26 = _closure1_slot30;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 36;
            var24 = var27[var24];
            var24 = var25.bind(var5)(var24);
            var25 = var24.ActivityIndicator;
            var24 = {'animating': true, 'size': 'small'};
            var27 = var19.purchasingSpinner;
            var24['style'] = var27;
            var24['color'] = var13;
            var23 = var26.bind(var5)(var25, var24);
case 67:
            var22[4] = var23;
            var16['children'] = var22;
            var16 = var20.bind(var5)(var18, var16);
            var1['children'] = var16;
            var1 = var4.bind(var5)(var9, var1);
            _fun0002_ip = 69; continue _fun0002;
case 58:
            var9 = 34;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var18 = _closure1_slot30;
            if(var12) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var16 = _closure1_slot6;
            var12 = {};
            var19 = var19.boostRowIcon;
            var12['style'] = var19;
            var12['source'] = var17;
            var12 = var18.bind(var5)(var16, var12);
            _fun0002_ip = 72; continue _fun0002;
case 70:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 35;
            var16 = var19[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.BoostGemIcon;
            var16 = {};
            var20 = 'lg';
            var16['size'] = var20;
            var20 = _closure1_slot1;
            var19 = var19[var21];
            var19 = var20.bind(var5)(var19);
            var19 = var19.unsafe_rawColors;
            var19 = var19.GUILD_BOOSTING_PINK;
            var16['color'] = var19;
            var12 = var18.bind(var5)(var17, var16);
case 72:
            var2['icon'] = var12;
            var12 = _closure1_slot37;
            var12 = var12.bind(var5)(var14);
            var2['label'] = var12;
            var2['subLabel'] = var11;
            var12 = _closure1_slot30;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var8) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var9 = var14[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.TableRow;
            var10 = var9.TrailingText;
            var9 = {};
            var9['text'] = var15;
            var9 = var12.bind(var5)(var10, var9);
            _fun0002_ip = 75; continue _fun0002;
case 73:
            var10 = 36;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'small'};
            var10['color'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 75:
            var2['trailing'] = var9;
            var9 = true;
            var2['arrow'] = var9;
            if(!var7) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var7 = !var8;
case 76:
            var2['disabled'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 69:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function PlanSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = var2.plans;
            var7 = var2.label;
            var1 = var2.shouldShowModernBoostFlow;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var1 = false;
case 78:
            var _closure2_slot0 = var1;
            var4 = var2.purchase;
            var _closure2_slot1 = var4;
            var4 = var2.analyticsLoadId;
            var _closure2_slot2 = var4;
            var4 = var2.trackNewPaymentFlow;
            var _closure2_slot3 = var4;
            var4 = var2.trackPaymentFlowStep;
            var _closure2_slot4 = var4;
            var4 = var2.subscription;
            var _closure2_slot5 = var4;
            var2 = var2.shouldRemoveYearlyUpsell;
            var _closure2_slot6 = var2;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var8 = _closure1_slot9;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var5)(var4);
            _closure2_slot7 = var9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 39;
            var4 = var10[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.isIOS;
            var4 = var4.bind(var8)();
            if(!var4) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var8 = null;
            var4 = var8 != var9;
case 80:
            _closure2_slot8 = var4;
            var4 = var6.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot30;
                var4 = _closure1_slot38;
                var3 = {};
                var3['plan'] = var1;
                var6 = _closure2_slot5;
                var3['subscription'] = var6;
                var2 = _closure2_slot0;
                var3['shouldShowModernBoostFlow'] = var2;
                var2 = function purchase(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var14 = 40;
                        var1 = var1[var14];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getToggledIntervalProduct;
                        var7 = var1.bind(var2)(var4);
                        var _closure4_slot1 = var7;
                        var2 = _closure2_slot8;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 82; continue _fun0006 }
case 14:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 82; continue _fun0006 }
case 83:
                        var2 = _closure2_slot7;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                        var12 = _closure2_slot7;
                        var11 = var12.getAvailablePlanForItems;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var14];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.getSubscriptionItemsForProduct;
                        var10 = var10.bind(var13)(var7);
                        var2 = var11.bind(var12)(var10);
case 84:
                        var10 = var5 != var2;
                        var9 = null;
                        if(!var10) { _fun0006_ip = 82; continue _fun0006 }
case 86:
                        var9 = var2;
case 82:
                        var _closure4_slot2 = var9;
                        var2 = _closure2_slot8;
                        if(var2) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                        var2 = var5 != var7;
                        if(!var2) { _fun0006_ip = 89; continue _fun0006 }
case 81:
                        var11 = _closure1_slot13;
                        var10 = var11.getProduct;
                        var10 = var10.bind(var11)(var7);
                        var2 = var5 != var10;
case 89:
                        _fun0006_ip = 90; continue _fun0006;
case 87:
                        var2 = var5 != var9;
case 90:
                        if(!(var5 != var7)) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                        if(!var2) { _fun0006_ip = 91; continue _fun0006 }
case 17:
                        var2 = _closure2_slot6;
                        if(var2) { _fun0006_ip = 91; continue _fun0006 }
case 93:
                        var5 = _closure2_slot4;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 41;
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
                        var2 = 42;
                        var2 = var7[var2];
                        var7 = var5.bind(var3)(var2);
                        var5 = var7.openLazy;
                        var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                        var8 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 44;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 43;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure6_slot0 = var2;
                                var1 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var4 = _closure1_slot30;
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
                                        if(var10) { _fun0007_ip = 16; continue _fun0007 }
case 94:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 16:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                                        var8 = var7;
case 95:
                                        var7 = 'orderPriceString';
                                        var2[6] = var8;
                                        var8 = _closure1_slot3;
                                        var7 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                                                    var6 = _closure2_slot4;
                                                    var4 = {};
                                                    var7 = _closure1_slot0;
                                                    var8 = _closure1_slot2;
                                                    var5 = 41;
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
                                                    var4 = _closure2_slot1;
                                                    var2 = _closure2_slot2;
                                                    var2 = var4.bind(var3)(var5, var2);
                                                    SaveGenerator(address=122);
case 6:
                                                    return var2;
case 99:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0008_ip = 100; continue _fun0008 }
case 84:
                                                    return var3;
case 100:
                                                    return var2;
case 97:
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
                                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 41;
                                                    var2 = var3[var2];
                                                    var3 = undefined;
                                                    var4 = var4.bind(var3)(var2);
                                                    var2 = var4.getNewAnalyticsLoadId;
                                                    var5 = var2.bind(var4)();
                                                    var7 = _closure2_slot3;
                                                    var6 = {};
                                                    var6['newFlowAnalyticsLoadId'] = var5;
                                                    var4 = _closure4_slot1;
                                                    var6['productId'] = var4;
                                                    var6 = var7.bind(var3)(var6);
                                                    var2 = _closure2_slot1;
                                                    var2 = var2.bind(var3)(var4, var5);
                                                    SaveGenerator(address=87);
case 85:
                                                    return var2;
case 95:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 103; continue _fun0009 }
case 104:
                                                    return var3;
case 103:
                                                    return var2;
case 101:
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
case 91:
                        var5 = _closure2_slot4;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 41;
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
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot2;
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
            var4 = _closure1_slot30;
            if(var1) { _fun0005_ip = 105; continue _fun0005 }
case 106:
            var3 = _closure1_slot7;
            var1 = {};
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 107; continue _fun0005;
case 105:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 45;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {'title': null, 'hasIcons': true, 'hasTrailingText': true};
            var2['title'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 107:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function CurrentPlanRow(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            var2 = _closure1_slot33;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0010_ip = 108; continue _fun0010 }
case 109:
            var14 = null;
            if(!(var14 != var13)) { _fun0010_ip = 108; continue _fun0010 }
case 110:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 40;
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
            if(!(var14 == var6)) { _fun0010_ip = 111; continue _fun0010 }
case 19:
            var2 = _closure1_slot28;
            var5 = var2.PREMIUM_GUILD;
            _fun0010_ip = 17; continue _fun0010;
case 111:
            var2 = _closure1_slot27;
            var5 = var2.bind(var4)(var6);
case 17:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot7 = var11;
            var3 = _closure1_slot30;
            var2 = _closure1_slot1;
            var1 = 46;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot24;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot24;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot30;
            var6 = _closure1_slot38;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var13 = var13.status;
            var12 = _closure1_slot26;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 112:
            var5['disabled'] = var11;
            var5['hasBackground'] = var10;
            var9 = function purchase() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 40;
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
                    if(var1) { _fun0011_ip = 22; continue _fun0011 }
case 114:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 22:
                    var1 = _closure1_slot26;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                    var1 = _closure2_slot7;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 117; continue _fun0011 }
case 99:
                    var10 = _closure1_slot13;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot7;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 117; continue _fun0011 }
case 8:
                    var9 = _closure2_slot1;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 41;
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
case 117:
                    _fun0011_ip = 118; continue _fun0011;
case 115:
                    if(!(var2 != var4)) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0011_ip = 119; continue _fun0011 }
case 121:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 41;
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
                    var2 = 42;
                    var2 = var5[var2];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.openLazy;
                    var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 44;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 43;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot30;
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
                                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 41;
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
case 85:
                                            return var2;
case 95:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                                            return var3;
case 103:
                                            return var2;
case 101:
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
                                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                                            var6 = _closure2_slot1;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 41;
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
case 6:
                                            return var2;
case 99:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 100; continue _fun0013 }
case 84:
                                            return var3;
case 100:
                                            return var2;
case 97:
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
                    _fun0011_ip = 122; continue _fun0011;
case 119:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 41;
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
case 122:
                    var1 = var2;
case 118:
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
case 108:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot33;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot30;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 31;
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
    var _closure1_slot41 = var1;
    var1 = function PlanSections(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.plans;
            var _closure2_slot0 = var2;
            var16 = var1.subscription;
            var _closure2_slot1 = var16;
            var11 = var1.showCurrentPlan;
            var8 = var1.isBoostPurchaseFlow;
            var15 = var1.analyticsLoadId;
            var _closure2_slot2 = var15;
            var13 = var1.trackPaymentFlowStep;
            var _closure2_slot3 = var13;
            var12 = var1.trackNewPaymentFlow;
            var _closure2_slot4 = var12;
            var14 = var1.purchase;
            var _closure2_slot5 = var14;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot33;
            var9 = var1.bind(var4)();
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
            var2 = var1 != var16;
            if(!var2) { _fun0014_ip = 123; continue _fun0014 }
case 100:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 40;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getProductIdFromSubscription;
            var2 = false;
            var1 = var3.bind(var5)(var16, var2);
case 123:
            _closure2_slot7 = var1;
            var10 = var8;
            if(!var8) { _fun0014_ip = 124; continue _fun0014 }
case 19:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 47;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getShouldRemoveYearlyUpsell;
            var1 = 'PremiumPlanSelect';
            var10 = var2.bind(var3)(var1);
case 124:
            _closure2_slot8 = var10;
            if(!var8) { _fun0014_ip = 115; continue _fun0014 }
case 125:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 47;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getMobileBoostingEnabled;
            var1 = 'PremiumPlanSelect';
            var8 = var2.bind(var3)(var1);
case 115:
            _closure2_slot9 = var8;
            var3 = _closure1_slot31;
            var2 = _closure1_slot7;
            var1 = {};
            var17 = var9.container;
            var5 = new Array(2);
            var5[0] = var17;
            if(!var8) { _fun0014_ip = 126; continue _fun0014 }
case 127:
            var8 = var9.boostContainer;
case 126:
            var5[1] = var8;
            var1['style'] = var5;
            var9 = _closure1_slot30;
            var8 = _closure1_slot40;
            var5 = {};
            var5['subscription'] = var16;
            var5['analyticsLoadId'] = var15;
            var5['purchase'] = var14;
            var5['trackPaymentFlowStep'] = var13;
            var5['trackNewPaymentFlow'] = var12;
            var5['showCurrentPlan'] = var11;
            var5['shouldRemoveYearlyUpsell'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot35;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.getLabel;
                    var3 = var3.predicate;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var5 = arg1;
                            var3 = var5.productId;
                            var1 = _closure2_slot7;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0016_ip = 128; continue _fun0016 }
case 129:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 40;
                            var4 = var4[var3];
                            var3 = undefined;
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.productsHaveSamePerks;
                            var4 = var5.productId;
                            var3 = _closure2_slot7;
                            var3 = var6.bind(var7)(var4, var3);
                            var1 = !var3;
case 128:
                            if(!var1) { _fun0016_ip = 130; continue _fun0016 }
case 131:
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var1 = var4.bind(var3)(var5);
case 130:
                            if(!var1) { _fun0016_ip = 132; continue _fun0016 }
case 104:
                            var4 = var5.premiumTier;
                            var3 = _closure1_slot18;
                            var3 = var3.TIER_1;
                            var1 = var4 !== var3;
case 132:
                            if(!var1) { _fun0016_ip = 133; continue _fun0016 }
case 134:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 39;
                            var3 = var7[var3];
                            var9 = undefined;
                            var6 = var6.bind(var9)(var3);
                            var3 = var6.isIOS;
                            var3 = var3.bind(var6)();
                            var3 = !var3;
                            if(var3) { _fun0016_ip = 135; continue _fun0016 }
case 136:
                            var7 = _closure2_slot6;
                            var6 = null;
                            var3 = var6 == var7;
case 135:
                            if(var3) { _fun0016_ip = 137; continue _fun0016 }
case 138:
                            var7 = _closure2_slot6;
                            var6 = var7.getAvailablePlanForItems;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 40;
                            var4 = var10[var4];
                            var9 = var8.bind(var9)(var4);
                            var8 = var9.getSubscriptionItemsForProduct;
                            var4 = var5.productId;
                            var4 = var8.bind(var9)(var4);
                            var6 = var6.bind(var7)(var4);
                            var4 = null;
                            var3 = var4 != var6;
case 137:
                            var1 = var3;
case 133:
                            if(!var1) { _fun0016_ip = 139; continue _fun0016 }
case 140:
                            var4 = _closure2_slot7;
                            var6 = null;
                            var3 = var6 == var4;
                            var2 = true;
                            if(var3) { _fun0016_ip = 113; continue _fun0016 }
case 141:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 48;
                            var7 = var7[var3];
                            var3 = undefined;
                            var3 = var8.bind(var3)(var7);
                            var3 = var3.AppStorePremiumProductIdsToPremiumBundledItems;
                            var4 = var3[var4];
                            var3 = var4.premiumTier;
                            var3 = var6 != var3;
                            if(var3) { _fun0016_ip = 142; continue _fun0016 }
case 143:
                            var5 = var5.numPremiumGuild;
                            var4 = var4.numPremiumGuild;
                            var3 = var5 >= var4;
case 142:
                            var2 = var3;
case 113:
                            var1 = var2;
case 139:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var3 = var11.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0015_ip = 144; continue _fun0015 }
case 145:
                    var5 = undefined;
                    var4 = var1.bind(var5)();
                    var3 = _closure1_slot31;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var6 = _closure2_slot9;
                    var8 = !var6;
                    if(!var8) { _fun0015_ip = 146; continue _fun0015 }
case 7:
                    var12 = _closure1_slot30;
                    var9 = _closure1_slot41;
                    var6 = {};
                    var6['string'] = var4;
                    var8 = var12.bind(var5)(var9, var6);
case 146:
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot30;
                    var8 = _closure1_slot39;
                    var7 = {};
                    var12 = _closure2_slot3;
                    var7['trackPaymentFlowStep'] = var12;
                    var12 = _closure2_slot4;
                    var7['trackNewPaymentFlow'] = var12;
                    var12 = _closure2_slot2;
                    var7['analyticsLoadId'] = var12;
                    var7['plans'] = var11;
                    var7['label'] = var4;
                    var11 = _closure2_slot9;
                    var7['shouldShowModernBoostFlow'] = var11;
                    var11 = _closure2_slot5;
                    var7['purchase'] = var11;
                    var11 = _closure2_slot1;
                    var7['subscription'] = var11;
                    var10 = _closure2_slot8;
                    var7['shouldRemoveYearlyUpsell'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
case 144:
                    var1 = null;
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot42 = var1;
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
    var14 = 8;
    var4 = var6[var14];
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
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot16 = var7;
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot17 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot18 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot19 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot21 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot22 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot23 = var7;
    var17 = var4.Fonts;
    var7 = var4.HorizontalGradient;
    var _closure1_slot24 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot25 = var7;
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot26 = var7;
    var15 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGradientColor;
    var _closure1_slot27 = var7;
    var4 = var4.Gradients;
    var _closure1_slot28 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot29 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot30 = var7;
    var7 = var4.jsxs;
    var _closure1_slot31 = var7;
    var4 = var4.Fragment;
    var _closure1_slot32 = var4;
    var4 = 15;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var18 = 16;
    var7 = var6[var18];
    var16 = var9.bind(var1)(var7);
    var13 = var17.DISPLAY_EXTRABOLD;
    var7 = 24;
    var21 = var16.bind(var1)(var13, var1, var7);
    var22 = var12;
    var13 = copyDataProperties(var22, var21);
    var13 = 'marginTop';
    var12[12] = var18;
    var16 = 17;
    var13 = var6[var16];
    var13 = var5.bind(var1)(var13);
    var19 = var13.DARK_WHITE_500_LIGHT_BLACK_500;
    var13 = 'color';
    var12[12] = var19;
    var4['header'] = var12;
    var12 = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    var13 = 18;
    var19 = var6[var13];
    var19 = var9.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var12['borderRadius'] = var19;
    var19 = var6[var16];
    var19 = var5.bind(var1)(var19);
    var19 = var19.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    var12['backgroundColor'] = var19;
    var4['row'] = var12;
    var12 = {};
    var19 = 0.5;
    var12['opacity'] = var19;
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
    var12['fontSize'] = var18;
    var16 = var6[var16];
    var16 = var5.bind(var1)(var16);
    var16 = var16.DARK_WHITE_500_LIGHT_BLACK_500;
    var12['color'] = var16;
    var4['rowText'] = var12;
    var12 = {'marginLeft': 12, 'fontFamily': null, 'lineHeight': 20};
    var16 = var17.PRIMARY_SEMIBOLD;
    var12['fontFamily'] = var16;
    var16 = 20;
    var4['rowPlanDescription'] = var12;
    var12 = {'fontSize': 12, 'marginLeft': 5, 'fontFamily': null, 'fontWeight': '400'};
    var17 = var17.PRIMARY_MEDIUM;
    var12['fontFamily'] = var17;
    var4['rowPlanDescriptionSubtext'] = var12;
    var12 = {};
    var17 = 'auto';
    var12['marginLeft'] = var17;
    var4['rowPrice'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['purchasingSpinner'] = var12;
    var12 = {'marginHorizontal': 14.5, 'paddingBottom': 10};
    var4['container'] = var12;
    var12 = {};
    var12['marginTop'] = var16;
    var16 = var6[var13];
    var16 = var9.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12['borderRadius'] = var16;
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
    var12['marginTop'] = var14;
    var4['premiumHeaderLabel'] = var12;
    var12 = {};
    var13 = var6[var13];
    var13 = var9.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var12['rowGap'] = var13;
    var4['boostContainer'] = var12;
    var12 = {'width': 32, 'height': 32};
    var4['boostRowIcon'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = 'imgWumpusNitro';
    var4[9] = var7;
    var7 = 26;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = 'imgWumpusNitroBoost';
    var4[9] = var7;
    var7 = 23;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = 'imgWumpusNitroClassic';
    var4[9] = var7;
    var7 = 25;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = 'imgWumpusNitroClassicBoost';
    var4[9] = var7;
    var7 = 22;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = 'imgWumpusNitroTier0';
    var4[9] = var7;
    var7 = 21;
    var7 = var6[var7];
    var9 = var9.bind(var1)(var7);
    var7 = 'imgBoost';
    var4[8] = var7;
    var _closure1_slot34 = var4;
    var7 = {};
    var4 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 19;
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
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0017_ip = 78; continue _fun0017 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 78:
            return var1;
        }
    };
    var7['predicate'] = var4;
    var4 = new Array(3);
    var4[0] = var7;
    var7 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 19;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.lyXyD0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0018_ip = 78; continue _fun0018 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 78:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 19;
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 == var3;
            if(!var1) { _fun0019_ip = 78; continue _fun0019 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 78:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[2] = var7;
    var _closure1_slot35 = var4;
    var7 = var8.forwardRef;
    var4 = function PremiumPlanSelect(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var20 = var1.predicate;
            var17 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var17 === var7)) { _fun0020_ip = 79; continue _fun0020 }
case 20:
            var17 = true;
case 79:
            var16 = var1.isBoostPurchaseFlow;
            if(!(var16 === var7)) { _fun0020_ip = 147; continue _fun0020 }
case 148:
            var16 = false;
case 147:
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
            var1 = _closure1_slot33;
            var19 = var1.bind(var7)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 53;
            var1 = var5[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var26 = var1.analyticsLocations;
            var3 = _closure1_slot0;
            var11 = 28;
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
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0021_ip = 149; continue _fun0021 }
case 98:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 54;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 149:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var21.bind(var22)(var1, var15);
            var1 = 55;
            var1 = var5[var1];
            var6 = var6.bind(var7)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var7)(var1);
            var1 = 41;
            var1 = var5[var1];
            var5 = var3.bind(var7)(var1);
            var3 = var5.getBasePurchaseFlowAnalyticsFields;
            var1 = {};
            var1['analyticsLoadId'] = var15;
            var6 = {};
            var21 = _closure1_slot22;
            var21 = var21.BUTTON_CTA;
            var6['object'] = var21;
            var21 = _closure1_slot23;
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
            if(!(var6 == var12)) { _fun0020_ip = 150; continue _fun0020 }
case 151:
            var3 = {};
            _fun0020_ip = 152; continue _fun0020;
case 150:
            var5 = {};
            var5['subscription_plan_id'] = var12;
            var3 = var5;
case 152:
            _closure2_slot3 = var3;
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 56;
            var3 = var21[var3];
            var5 = var5.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 57;
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
            var3 = 58;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var23 = var3.bind(var5)();
            _closure2_slot4 = var23;
            var3 = 59;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useNavigation;
            var22 = var3.bind(var5)();
            _closure2_slot5 = var22;
            var3 = 60;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useIsPaymentsBlocked;
            var3 = var3.bind(var5)();
            var5 = 61;
            var5 = var21[var5];
            var21 = var12.bind(var7)(var5);
            var12 = var21.useFetchSubscriptionInvoicePreview;
            if(!(var6 == var18)) { _fun0020_ip = 153; continue _fun0020 }
case 154:
            var5 = {};
            _fun0020_ip = 155; continue _fun0020;
case 153:
            var25 = {};
            var27 = var18.id;
            var25['subscriptionId'] = var27;
            var27 = true;
            var25['renewal'] = var27;
            var25['analyticsLocations'] = var26;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 62;
            var26 = var28[var26];
            var26 = var27.bind(var7)(var26);
            var26 = var26.PREMIUM_PLAN_SELECT;
            var25['analyticsLocation'] = var26;
            var5 = var25;
case 155:
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
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0022_ip = 156; continue _fun0022 }
case 157:
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
                            if(!(var11 == var2)) { _fun0022_ip = 158; continue _fun0022 }
case 159:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 40;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.getSubscriptionItemsForProduct;
                            var2 = var14;
                            var15 = var5.bind(var6)(var2);
                            _fun0022_ip = 160; continue _fun0022;
case 158:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 40;
                            var2 = var6[var2];
                            var16 = var5.bind(var3)(var2);
                            var6 = var16.getModifySubscriptionItemsForProduct;
                            var5 = var14;
                            var2 = _closure2_slot8;
                            var15 = var6.bind(var16)(var5, var2);
case 160:
                            var9 = undefined;
                            var2 = _closure2_slot7;
                            if(!var2) { _fun0022_ip = 161; continue _fun0022 }
case 162:
                            var5 = _closure2_slot6;
                            var6 = var15.map;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var1 = {};
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 20;
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
                                var2 = _closure1_slot29;
                                var2 = var2.SUBSCRIPTION;
                                var1['purchase_type'] = var2;
                                return var1;
                            };
                            var2 = var6.bind(var15)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=169);
case 163:
                            return var2;
case 164:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0022_ip = 165; continue _fun0022 }
case 166:
                            var9 = var2;
                            if(!(var11 != var2)) { _fun0022_ip = 167; continue _fun0022 }
case 161: // try_start_0
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
                            if(var11) { _fun0022_ip = 168; continue _fun0022 }
case 169:
                            var9 = var10.id;
case 168:
                            var5['orderId'] = var9;
                            var7 = function onPurchaseComplete(arg1) {
                                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                    var1 = arg1;
                                    var4 = var1.paymentGateway;
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 42;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var6 = var6.bind(var1)(var5);
                                    var5 = var6.close;
                                    var5 = var5.bind(var6)();
                                    var3 = _closure1_slot25;
                                    var3 = var3.APPLE_ADVANCED_COMMERCE;
                                    if(!(var4 === var3)) { _fun0023_ip = 170; continue _fun0023 }
case 171:
                                    var3 = function showPremiumActivatedAlert(arg1) {
                                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                            var3 = arg1;
                                            var _closure7_slot0 = var3;
                                            var2 = _closure1_slot12;
                                            var1 = var2.getPremiumTypeSubscription;
                                            var2 = var1.bind(var2)();
                                            var _closure7_slot1 = var2;
                                            var1 = null;
                                            if(!(var1 != var2)) { _fun0024_ip = 85; continue _fun0024 }
case 172:
                                            var6 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var2 = 42;
                                            var5 = var5[var2];
                                            var2 = undefined;
                                            var7 = var6.bind(var2)(var5);
                                            var6 = var7.openLazy;
                                            var5 = {};
                                            var8 = function importer() {
                                                var3 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var2 = 44;
                                                var2 = var1[var2];
                                                var4 = undefined;
                                                var3 = var3.bind(var4)(var2);
                                                var2 = 52;
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
                                                        var4 = _closure1_slot30;
                                                        var3 = _closure9_slot0;
                                                        var2 = {};
                                                        var8 = var2;
                                                        var7 = var5;
                                                        var5 = copyDataProperties(var8, var7);
                                                        var6 = _closure7_slot1;
                                                        var5 = 'subscription';
                                                        var2[4] = var6;
                                                        var5 = function onClose() {
                                                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                                                var2 = _closure10_slot0;
                                                                var1 = var2.onClose;
                                                                var1 = var1.bind(var2)();
                                                                var4 = _closure1_slot1;
                                                                var6 = _closure1_slot2;
                                                                var1 = 50;
                                                                var3 = var6[var1];
                                                                var1 = undefined;
                                                                var4 = var4.bind(var1)(var3);
                                                                var3 = var4.popWithKey;
                                                                var5 = _closure1_slot0;
                                                                var2 = 51;
                                                                var2 = var6[var2];
                                                                var2 = var5.bind(var1)(var2);
                                                                var2 = var2.PREMIUM_KEY;
                                                                var2 = var3.bind(var4)(var2);
                                                                var4 = _closure7_slot0;
                                                                var3 = null;
                                                                if(!(var3 != var4)) { _fun0025_ip = 103; continue _fun0025 }
case 7:
                                                                var2 = _closure7_slot0;
                                                                var2 = var2.bind(var1)();
case 103:
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
case 85:
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var2 = 49;
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
                                            var4 = 50;
                                            var4 = var8[var4];
                                            var6 = var5.bind(var2)(var4);
                                            var5 = var6.popWithKey;
                                            var4 = 51;
                                            var4 = var8[var4];
                                            var4 = var7.bind(var2)(var4);
                                            var4 = var4.PREMIUM_KEY;
                                            var4 = var5.bind(var6)(var4);
                                            var1 = var1 == var3;
                                            if(var1) { _fun0024_ip = 173; continue _fun0024 }
case 174:
                                            var1 = var3.bind(var2)();
case 173:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = function() {
                                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                            var3 = _closure2_slot5;
                                            var2 = var3.canGoBack;
                                            var2 = var2.bind(var3)();
                                            if(!var2) { _fun0026_ip = 175; continue _fun0026 }
case 176:
                                            var2 = _closure2_slot5;
                                            var1 = var2.goBack;
                                            var1 = var1.bind(var2)();
case 175:
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
case 177:
                            return var5;
case 178:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0022_ip = 179; continue _fun0022 }
case 180: // try_end0
                            _fun0022_ip = 181; continue _fun0022;
case 179:
                            return var5;
case 182: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 63;
                            var5 = var9[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0022_ip = 183; continue _fun0022 }
case 184:
                            var6 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var5 = 42;
                            var5 = var13[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var12 = _closure1_slot0;
                            var9 = 19;
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
                            _fun0022_ip = 181; continue _fun0022;
case 183:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 64;
                            var5 = var12[var5];
                            var6 = var11.bind(var3)(var5);
                            var5 = var6.fetchSubscriptions;
                            var5 = var5.bind(var6)();
                            var6 = _closure1_slot1;
                            var5 = 42;
                            var5 = var12[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var8 = 19;
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
case 181:
                            var6 = _closure1_slot14;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            _fun0022_ip = 185; continue _fun0022;
case 167:
                            var5 = _closure1_slot14;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
case 185:
                            return var3;
case 165:
                            return var2;
case 156:
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
            if(var5) { _fun0020_ip = 186; continue _fun0020 }
case 187:
            if(!var4) { _fun0020_ip = 188; continue _fun0020 }
case 189:
            if(var2) { _fun0020_ip = 190; continue _fun0020 }
case 188:
            var5 = _closure1_slot30;
            var4 = _closure1_slot7;
            var2 = {};
            var10 = var19.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot30;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 36;
            var10 = var21[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'large'};
            var10 = var12.bind(var7)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var7)(var4, var2);
            _fun0020_ip = 191; continue _fun0020;
case 190:
            if(var3) { _fun0020_ip = 192; continue _fun0020 }
case 47:
            if(!(var6 != var18)) { _fun0020_ip = 193; continue _fun0020 }
case 194:
            var3 = var18.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0020_ip = 195; continue _fun0020 }
case 196:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 40;
            var4 = var11[var3];
            var5 = var10.bind(var7)(var4);
            var4 = var5.isValidBundleProductId;
            var3 = var11[var3];
            var11 = var10.bind(var7)(var3);
            var10 = var11.getProductIdFromSubscription;
            var3 = false;
            var3 = var10.bind(var11)(var18, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0020_ip = 193; continue _fun0020 }
case 195:
            var5 = _closure1_slot31;
            var4 = _closure1_slot8;
            var3 = {};
            var10 = var6 != var25;
            if(!var10) { _fun0020_ip = 197; continue _fun0020 }
case 198:
            var12 = _closure1_slot31;
            var11 = _closure1_slot32;
            var6 = {};
            var24 = _closure1_slot30;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 66;
            var21 = var26[var21];
            var21 = var23.bind(var7)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var27 = var19.premiumHeaderLabel;
            var21['style'] = var27;
            var27 = 19;
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
            var24 = _closure1_slot30;
            var22 = 67;
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
case 197:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot30;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 66;
            var10 = var22[var10];
            var10 = var21.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {};
            var19 = var19.offPlatformSubscriptionMessage;
            var10['style'] = var19;
            var19 = 'text-md/semibold';
            var10['variant'] = var19;
            var19 = 68;
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
            _fun0020_ip = 199; continue _fun0020;
case 193:
            var6 = _closure1_slot30;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot30;
            var11 = _closure1_slot42;
            var10 = {};
            var10['subscription'] = var18;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 40;
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
                var1 = 69;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot21;
                var3 = var2.PAYMENT_FLOW_STEP;
                var2 = {};
                var8 = _closure2_slot0;
                var2['application_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 41;
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
                var1 = 57;
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
case 199:
            _fun0020_ip = 200; continue _fun0020;
case 192:
            var6 = _closure1_slot30;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var10 = 40;
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot30;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 65;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 200:
            var2 = var3;
case 191:
            var1 = var2;
case 186:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot36 = var4;
    var4 = 72;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanSelectWithOrderCTX(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot33;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 59;
            var1 = var2[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var3.useNavigation;
            var17 = var1.bind(var3)();
            var _closure2_slot1 = var17;
            var14 = 28;
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
            var1 = 70;
            var1 = var2[var1];
            var1 = var6.bind(var4)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var3 = var9.useConfig;
            var1 = {};
            var11 = 'PremiumPlanSelectWithOrderCTX';
            var1['location'] = var11;
            var1 = var3.bind(var9)(var1);
            var1 = var1.enabled;
            var3 = 39;
            var2 = var2[var3];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isIOS;
            var6 = var2.bind(var6)();
            var2 = _closure1_slot25;
            if(var6) { _fun0027_ip = 201; continue _fun0027 }
case 138:
            var12 = var2.GOOGLE;
            _fun0027_ip = 202; continue _fun0027;
case 201:
            if(var1) { _fun0027_ip = 106; continue _fun0027 }
case 203:
            var1 = var2.APPLE;
            _fun0027_ip = 204; continue _fun0027;
case 106:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 204:
            var12 = var1;
case 202:
            var1 = null;
            if(!(var1 != var8)) { _fun0027_ip = 9; continue _fun0027 }
case 205:
            var12 = var8.paymentGateway;
case 9:
            var2 = {};
            var6 = _closure1_slot20;
            var6 = var6.PREMIUM_YEAR_TIER_2;
            var2['subscriptionPlanId'] = var6;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 20;
            var9 = var6[var9];
            var16 = var11.bind(var4)(var9);
            var15 = var16.castPremiumSubscriptionAsSkuId;
            var9 = _closure1_slot17;
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
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0028_ip = 149; continue _fun0028 }
case 98:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 149:
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
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.guildId;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0029_ip = 206; continue _fun0029 }
case 129:
                    var6 = _closure1_slot10;
                    var5 = var6.getGuild;
                    var3 = _closure2_slot0;
                    var3 = var3.guildId;
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0029_ip = 207; continue _fun0029 }
case 145:
                    var2 = var3.name;
case 207:
                    var1 = var2;
case 206:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var11, var6);
            var _closure2_slot3 = var6;
            var14 = var10.isBoostPurchaseFlow;
            var11 = true;
            var16 = var11 === var14;
            if(!var16) { _fun0027_ip = 208; continue _fun0027 }
case 209:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 47;
            var11 = var15[var11];
            var15 = var14.bind(var4)(var11);
            var14 = var15.getMobileBoostingEnabled;
            var11 = 'PremiumPlanSelect';
            var16 = var14.bind(var15)(var11);
case 208:
            var _closure2_slot4 = var16;
            var15 = _closure1_slot5;
            var14 = var15.useLayoutEffect;
            var11 = new Array(3);
            var11[0] = var17;
            var11[1] = var16;
            var11[2] = var6;
            var6 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = _closure2_slot4;
                    if(!var4) { _fun0030_ip = 210; continue _fun0030 }
case 211:
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0030_ip = 212; continue _fun0030 }
case 210:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 19;
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
                    _fun0030_ip = 213; continue _fun0030;
case 212:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 19;
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
case 213:
                    var1['title'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var6, var11);
            if(var2) { _fun0027_ip = 214; continue _fun0027 }
case 215:
            var11 = _closure1_slot30;
            var6 = _closure1_slot7;
            var2 = {};
            var13 = var13.loadingSpinnerContainer;
            var2['style'] = var13;
            var15 = _closure1_slot30;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 36;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ActivityIndicator;
            var13 = {'animating': true, 'size': 'large'};
            var13 = var15.bind(var4)(var14, var13);
            var2['children'] = var13;
            var2 = var11.bind(var4)(var6, var2);
            return var2;
case 214:
            if(!(var1 != var12)) { _fun0027_ip = 216; continue _fun0027 }
case 217:
            if(!(var1 != var8)) { _fun0027_ip = 218; continue _fun0027 }
case 219:
            var2 = var8.isPurchasedExternally;
            var1 = false;
            if(!(var1 !== var2)) { _fun0027_ip = 216; continue _fun0027 }
case 218:
            var6 = _closure1_slot30;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 71;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var12;
            var11 = _closure1_slot25;
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
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.canGoBack;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot1;
                    if(var1) { _fun0031_ip = 172; continue _fun0031 }
case 220:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun0031_ip = 221; continue _fun0031;
case 172:
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 221:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onOrderRetryCancellation'] = var7;
            var9 = _closure1_slot30;
            var8 = _closure1_slot36;
            var7 = {};
            var21 = var7;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var7 = var9.bind(var4)(var8, var7);
            var1['children'] = var7;
            var1 = var6.bind(var4)(var2, var1);
            return var1;
case 216:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var11 = 'Android';
            if(!var1) { _fun0027_ip = 222; continue _fun0027 }
case 223:
            var11 = 'iOS';
case 222:
            var3 = _closure1_slot30;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 66;
            var5 = var12[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var7 = 'display-md';
            var5['variant'] = var7;
            var7 = 19;
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