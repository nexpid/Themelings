// app/modules/premium/native/PremiumAccountCredit.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function AccountCreditTier(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var20 = var1.planId;
            var13 = var1.months;
            var19 = var1.currentSubscription;
            var8 = var1.shouldAddDivider;
            var5 = var1.unconsumedFractionalPremiumUnits;
            var1 = _closure1_slot8;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 7;
            var2 = var1[var6];
            var10 = var3.bind(var4)(var2);
            var9 = var10.castPremiumSubscriptionAsSkuId;
            var2 = _closure1_slot1;
            var3 = var1[var6];
            var12 = var2.bind(var4)(var3);
            var3 = var12.getSkuIdForPlan;
            var3 = var3.bind(var12)(var20);
            var9 = var9.bind(var10)(var3);
            var1 = var1[var6];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getDisplayPremiumType;
            var23 = var1.bind(var2)(var20);
            var24 = null;
            var1 = var24 != var19;
            var25 = undefined;
            if(!var1) { _fun0001_ip = 263; continue _fun0001 }
 135:
            var2 = var19.status;
            var1 = _closure1_slot5;
            var1 = var1.PAUSED;
            if(!(var2 === var1)) { _fun0001_ip = 164; continue _fun0001 }
 154:
            var1 = var19.pauseEndsAt;
            if(!(var24 == var1)) { _fun0001_ip = 200; continue _fun0001 }
 164:
            var1 = global;
            var3 = var1.Date;
            var28 = var19.currentPeriodEnd;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var1 = new var29[var3](var28, var27);
            var3 = var1 instanceof Object ? var1 : var2;
            _fun0001_ip = 234; continue _fun0001;
 200:
            var1 = global;
            var10 = var1.Date;
            var28 = var19.pauseEndsAt;
            var2 = var10.prototype;
            var2 = Object.create(var2, {constructor: {value: var10}});
            var29 = var2;
            var1 = new var29[var10](var28, var27);
            var3 = var1 instanceof Object ? var1 : var2;
 234:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var2 = var2.bind(var4)(var1);
            var1 = var2.extendDateWithUnconsumedFractionalPremium;
            var25 = var1.bind(var2)(var3, var5);
 263:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var11.creditItem;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0001_ip = 298; continue _fun0001 }
 292:
            var6 = var11.divider;
 298:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 8;
            var5 = var17[var10];
            var6 = var12.bind(var4)(var5);
            var5 = {};
            var10 = var17[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.Sizes;
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
            var16 = _closure1_slot6;
            var18 = _closure1_slot0;
            var6 = 9;
            var12 = var17[var6];
            var12 = var18.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var14 = var11.headerText;
            var12['style'] = var14;
            var14 = 10;
            var21 = var17[var14];
            var21 = var18.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var17 = var17[var14];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.LzobT0;
            var17 = {};
            var17['planName'] = var23;
            var17 = var21.bind(var22)(var18, var17);
            var12['children'] = var17;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            if(!(var24 != var19)) { _fun0001_ip = 540; continue _fun0001 }
 526:
            var16 = var19.isPurchasedExternally;
            var15 = null;
            if(var16) { _fun0001_ip = 750; continue _fun0001 }
 540:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var6];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var21 = var11.subText;
            var16['style'] = var21;
            if(!(var24 != var19)) { _fun0001_ip = 602; continue _fun0001 }
 592:
            var19 = var19.planId;
            if(!(var19 !== var20)) { _fun0001_ip = 666; continue _fun0001 }
 602:
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = var19[var14];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var19 = var19[var14];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.eNXZ5O;
            var19 = {};
            var19['planName'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            _fun0001_ip = 740; continue _fun0001;
 666:
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var22 = var20[var14];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var20 = var20[var14];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.5CNRRE;
            var20 = {};
            var26 = var24 != var25;
            var24 = 0;
            if(!var26) { _fun0001_ip = 729; continue _fun0001 }
 726:
            var24 = var25;
 729:
            var20['date'] = var24;
            var19 = var22.bind(var23)(var21, var20);
 740:
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 750:
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
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var11 = var11.timeText;
            var6['style'] = var11;
            var11 = var9[var14];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.ess/xs;
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
    var4 = native4;
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
    var13 = var13.BACKGROUND_SECONDARY;
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
    var10 = var10.BACKGROUND_MODIFIER_ACCENT;
    var9['borderBottomColor'] = var10;
    var4['divider'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['creditDescription'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumAccountCredit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.currentSubscription;
            var _closure2_slot0 = var10;
            var7 = var1.entitlements;
            var6 = var1.style;
            var21 = var1.creditListContainerStyle;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot8;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
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
            var _closure2_slot1 = var1;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 683; continue _fun0002 }
 113:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.hasAccountCredit;
            var2 = var2.bind(var3)(var7);
            if(!var2) { _fun0002_ip = 683; continue _fun0002 }
 150:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 12;
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
 0:
                    var2 = arg1;
                    var1 = var2.subscriptionPlanId;
                    var4 = var2.parentId;
                    var2 = var2.consumed;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 34; continue _fun0003 }
 30:
                    var1 = var3 != var4;
 34:
                    if(!var1) { _fun0003_ip = 40; continue _fun0003 }
 37:
                    var1 = !var2;
 40:
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
            _closure2_slot2 = var20;
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var6;
            var11 = _closure1_slot6;
            var19 = _closure1_slot0;
            var8 = 9;
            var6 = var16[var8];
            var6 = var19.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'eyebrow', 'color': 'header-secondary'};
            var12 = var13.title;
            var6['style'] = var12;
            var15 = 10;
            var12 = var16[var15];
            var12 = var19.bind(var5)(var12);
            var22 = var12.intl;
            var18 = var22.string;
            var12 = var16[var15];
            var12 = var19.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.YugZY2;
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
                var3 = _closure2_slot2;
                var3 = var4.bind(var6)(var3);
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = _closure2_slot2;
                var2 = var4.bind(var6)(var2);
                var4 = var2.length;
                var2 = 1;
                var2 = var4 - var2;
                var6 = var3[var2];
                var4 = _closure1_slot6;
                var3 = _closure1_slot9;
                var2 = {};
                var2['planId'] = var5;
                var7 = _closure2_slot2;
                var7 = var7[var5];
                var7 = var7.length;
                var2['months'] = var7;
                var7 = _closure2_slot0;
                var2['currentSubscription'] = var7;
                var6 = var5 === var6;
                var6 = !var6;
                var2['shouldAddDivider'] = var6;
                var1 = _closure2_slot1;
                var2['unconsumedFractionalPremiumUnits'] = var1;
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
            var16 = var16.kNEjGh;
            var16 = var17.bind(var18)(var16);
            var7['children'] = var16;
            var7 = var14.bind(var5)(var11, var7);
            var6[2] = var7;
            var11 = var1 != var10;
            var7 = null;
            if(!var11) { _fun0002_ip = 667; continue _fun0002 }
 558:
            var10 = var10.isPurchasedExternally;
            var7 = null;
            if(!var10) { _fun0002_ip = 667; continue _fun0002 }
 569:
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
            var11 = var11.azRP0N;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 667:
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 683:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();