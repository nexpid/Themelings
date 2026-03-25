// app/modules/premium/native/PremiumAccountCredit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function AccountCreditTier(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.planId;
            var13 = var2.months;
            var1 = var2.currentSubscription;
            var8 = var2.shouldAddDivider;
            var12 = var2.unconsumedFractionalPremiumUnits;
            var3 = var2.hasPremiumGroup;
            var2 = _closure1_slot8;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var9 = var6[var2];
            var15 = var10.bind(var4)(var9);
            var14 = var15.castPremiumSubscriptionAsSkuId;
            var10 = _closure1_slot1;
            var9 = var6[var2];
            var16 = var10.bind(var4)(var9);
            var9 = var16.getSkuIdForPlan;
            var9 = var9.bind(var16)(var5);
            var9 = var14.bind(var15)(var9);
            var6 = var6[var2];
            var10 = var10.bind(var4)(var6);
            var6 = var10.getTierDisplayNameByPlanId;
            var23 = var6.bind(var10)(var5);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = null;
            if(!(var10 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.planId;
            if(!(var3 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 8;
            var6 = var15[var3];
            var6 = var5.bind(var4)(var6);
            var14 = var6.intl;
            var6 = var14.formatToPlainString;
            var3 = var15[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.eNXZ5O;
            var3 = {};
            var3['planName'] = var23;
            var19 = var6.bind(var14)(var5, var3);
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var5 = var1.status;
            var3 = _closure1_slot5;
            var3 = var3.PAUSED;
            if(!(var5 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var1.pauseEndsAt;
            if(!(var10 == var3)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var3 = global;
            var6 = var3.Date;
            var25 = var1.currentPeriodEnd;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var26 = var5;
            var3 = new var26[var6](var25, var24);
            var6 = var3 instanceof Object ? var3 : var5;
            _fun0001_ip = 11; continue _fun0001;
case 10:
            var3 = global;
            var14 = var3.Date;
            var25 = var1.pauseEndsAt;
            var5 = var14.prototype;
            var5 = Object.create(var5, {constructor: {value: var14}});
            var26 = var5;
            var3 = new var26[var14](var25, var24);
            var6 = var3 instanceof Object ? var3 : var5;
case 11:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.extendDateWithUnconsumedFractionalPremium;
            var12 = var2.bind(var5)(var6, var12);
            var2 = 8;
            var5 = var14[var2];
            var5 = var3.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["5CNRRA"];
            var2 = {};
            var14 = var10 != var12;
            var10 = 0;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var12;
case 12:
            var2['date'] = var10;
            var19 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.string;
            var6 = _closure1_slot1;
            var2 = 9;
            var2 = var10[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2["5asczk"];
            var19 = var3.bind(var5)(var2);
case 7:
            var6 = null;
            var15 = var6 != var1;
            if(!var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = var1.isPurchasedExternally;
case 14:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var10 = var11.creditItem;
            var5 = new Array(2);
            var5[0] = var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var11.divider;
case 16:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 10;
            var5 = var18[var10];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var20 = _closure1_slot0;
            var10 = var18[var10];
            var10 = var20.bind(var4)(var10);
            var10 = var10.GameIconSizes;
            var10 = var10.SMALL;
            var5['size'] = var10;
            var5['skuId'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var10 = _closure1_slot7;
            var9 = _closure1_slot3;
            var8 = {};
            var6 = var11.textContainer;
            var8['style'] = var6;
            var17 = _closure1_slot6;
            var6 = 11;
            var12 = var18[var6];
            var12 = var20.bind(var4)(var12);
            var16 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var14 = var11.headerText;
            var12['style'] = var14;
            var14 = 8;
            var21 = var18[var14];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var18 = var18[var14];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var20 = var18.LzobT9;
            var18 = {};
            var18['planName'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            var12['children'] = var18;
            var16 = var17.bind(var4)(var16, var12);
            var12 = new Array(2);
            var12[0] = var16;
            var15 = !var15;
            if(!var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var6];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var20 = var11.subText;
            var16['style'] = var20;
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 18:
            var12[1] = var15;
            var8['children'] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var5[1] = var8;
            var8 = _closure1_slot6;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var11 = var11.timeText;
            var6['style'] = var11;
            var11 = var9[var14];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.ess/xl;
            var9 = {};
            var9['count'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionStatusTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var9['marginBottom'] = var10;
    var4['title'] = var9;
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var4['creditList'] = var9;
    var13 = 16;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 16};
    var4['creditItem'] = var9;
    var9 = {'marginLeft': 16, 'marginRight': 16, 'flexDirection': 'column', 'flex': 1};
    var4['textContainer'] = var9;
    var9 = {};
    var14 = 20;
    var9['lineHeight'] = var14;
    var4['headerText'] = var9;
    var9 = {};
    var9['lineHeight'] = var13;
    var4['subText'] = var9;
    var9 = {'lineHeight': 20, 'alignSelf': 'flex-start'};
    var4['timeText'] = var9;
    var9 = {};
    var9['borderBottomWidth'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['borderBottomColor'] = var10;
    var4['divider'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['creditDescription'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumAccountCredit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.currentSubscription;
            var _closure2_slot0 = var10;
            var7 = var1.entitlements;
            var6 = var1.style;
            var21 = var1.creditListContainerStyle;
            var1 = var1.hasPremiumGroup;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot8;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresArray;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getUnactivatedFractionalPremiumUnits;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure2_slot2 = var1;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.hasAccountCredit;
            var2 = var2.bind(var3)(var7);
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 13;
            var2 = var16[var2];
            var3 = var3.bind(var5)(var2);
            var17 = global;
            var4 = var17.Array;
            var2 = var4.from;
            var2 = var2.bind(var4)(var7);
            var4 = var3.bind(var5)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.subscriptionPlanId;
                    var4 = var2.parentId;
                    var2 = var2.consumed;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var1 = var3 != var4;
case 23:
                    if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = !var2;
case 25:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.groupBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.subscriptionPlanId;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.value;
            var20 = var2.bind(var3)();
            _closure2_slot3 = var20;
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var6;
            var11 = _closure1_slot6;
            var19 = _closure1_slot0;
            var8 = 11;
            var6 = var16[var8];
            var6 = var19.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'eyebrow', 'color': 'text-default'};
            var12 = var13.title;
            var6['style'] = var12;
            var15 = 8;
            var12 = var16[var15];
            var12 = var19.bind(var5)(var12);
            var22 = var12.intl;
            var18 = var22.string;
            var12 = var16[var15];
            var12 = var19.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.YugZY0;
            var12 = var18.bind(var22)(var12);
            var6['children'] = var12;
            var7 = var11.bind(var5)(var7, var6);
            var6 = new Array(4);
            var6[0] = var7;
            var12 = _closure1_slot6;
            var11 = _closure1_slot3;
            var7 = {};
            var22 = var13.creditList;
            var18 = new Array(2);
            var18[0] = var22;
            var18[1] = var21;
            var7['style'] = var18;
            var18 = var17.Object;
            var17 = var18.keys;
            var18 = var17.bind(var18)(var20);
            var17 = var18.map;
            var14 = function(arg1) {
                var5 = arg1;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var3 = _closure2_slot3;
                var3 = var4.bind(var6)(var3);
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = _closure2_slot3;
                var2 = var4.bind(var6)(var2);
                var4 = var2.length;
                var2 = 1;
                var2 = var4 - var2;
                var6 = var3[var2];
                var4 = _closure1_slot6;
                var3 = _closure1_slot9;
                var2 = {};
                var2['planId'] = var5;
                var7 = _closure2_slot3;
                var7 = var7[var5];
                var7 = var7.length;
                var2['months'] = var7;
                var7 = _closure2_slot0;
                var2['currentSubscription'] = var7;
                var6 = var5 === var6;
                var6 = !var6;
                var2['shouldAddDivider'] = var6;
                var6 = _closure2_slot2;
                var2['unconsumedFractionalPremiumUnits'] = var6;
                var1 = _closure2_slot1;
                var2['hasPremiumGroup'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var14 = var17.bind(var18)(var14);
            var7['children'] = var14;
            var7 = var12.bind(var5)(var11, var7);
            var6[1] = var7;
            var14 = _closure1_slot6;
            var7 = var16[var8];
            var7 = var19.bind(var5)(var7);
            var11 = var7.Text;
            var7 = {};
            var12 = var13.creditDescription;
            var7['style'] = var12;
            var12 = 'text-sm/medium';
            var7['variant'] = var12;
            var17 = var16[var15];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var15];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.kNEjGm;
            var16 = var17.bind(var18)(var16);
            var7['children'] = var16;
            var7 = var14.bind(var5)(var11, var7);
            var6[2] = var7;
            var11 = var1 != var10;
            var7 = null;
            if(!var11) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var10 = var10.isPurchasedExternally;
            var7 = null;
            if(!var10) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var10 = _closure1_slot6;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = var11[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var13 = var13.creditDescription;
            var8['style'] = var13;
            var8['variant'] = var12;
            var12 = var11[var15];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var15];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.azRP0E;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 27:
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();