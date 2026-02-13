// app/modules/premium/native/renderPremiumButtonText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PremiumText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.style;
            var16 = var1.isCurrentPlan;
            var2 = var1.isGift;
            var5 = var1.basePlanId;
            var21 = var1.product;
            var9 = var1.text;
            var1 = _closure1_slot8;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getInterval;
            var1 = var1.bind(var3)(var5);
            var3 = var1.intervalType;
            var1 = _closure1_slot5;
            var1 = var1.YEAR;
            var6 = null;
            var13 = null;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = null;
            if(var16) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var8 = _closure1_slot4;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var5 = '-';
            var1 = '%';
            var13 = var7.bind(var5)(var8, var1);
case 2:
            if(!(var6 == var9)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var6 == var21;
            var1 = undefined;
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var21.priceString;
case 7:
            var5 = var6 != var1;
            var12 = '$...';
            if(!var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var12 = var1;
case 9:
            var1 = _closure1_slot5;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 8;
            var1 = var14[var3];
            var1 = var5.bind(var4)(var1);
            var8 = var1.intl;
            var7 = var8.formatToPlainString;
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var17.bind(var4)(var1);
            var1 = var1.t;
            if(var16) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var17 = var1.rS8FA+;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var17 = var1.dFbQCa;
case 17:
            var1 = {};
            var1['price'] = var12;
            var1 = var7.bind(var8)(var17, var1);
            _fun0001_ip = 18; continue _fun0001;
case 13:
            var3 = var14[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.rm53bV;
            var3 = {};
            var3['price'] = var12;
            var1 = var7.bind(var8)(var5, var3);
case 18:
            _fun0001_ip = 19; continue _fun0001;
case 11:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 8;
            var7 = var14[var3];
            var7 = var5.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var3];
            var2 = var17.bind(var4)(var2);
            var2 = var2.t;
            if(var16) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = var2.AbOLNu;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var16 = var2.V6iX43;
case 24:
            var2 = {};
            var2['price'] = var12;
            var2 = var7.bind(var8)(var16, var2);
            _fun0001_ip = 25; continue _fun0001;
case 20:
            var3 = var14[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.FIjgMp;
            var3 = {};
            var3['price'] = var12;
            var2 = var7.bind(var8)(var5, var3);
case 25:
            var1 = var2;
case 19:
            var9 = var1;
case 5:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var11.premiumText;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 9;
            var5 = var20[var16];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['style'] = var15;
            var14 = 1;
            var5['numberOfLines'] = var14;
            var17 = _closure1_slot0;
            var12 = 8;
            var18 = var20[var12];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var12 = var20[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var17 = var12.E0lS2r;
            var12 = {};
            var22 = var6 == var21;
            var20 = undefined;
            if(var22) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var20 = var21.title;
case 26:
            var12['product'] = var20;
            var12['description'] = var9;
            var12 = var18.bind(var19)(var17, var12);
            var5['accessibilityLabel'] = var12;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var6 != var13;
            var6 = null;
            if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.discount;
            var7['style'] = var11;
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['style'] = var15;
            var10['numberOfLines'] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 28:
            var5[1] = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_YEARLY_DISCOUNT_PERCENT;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderWidth': 1, 'borderColor': null, 'borderRadius': 2, 'marginLeft': 4, 'paddingHorizontal': 2};
    var10 = 5;
    var10 = var6[var10];
    var13 = var5.bind(var1)(var10);
    var12 = var13.hexWithOpacity;
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var11 = var10.WHITE;
    var10 = 0.3;
    var10 = var12.bind(var13)(var11, var10);
    var9['borderColor'] = var10;
    var4['discount'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['premiumText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/renderPremiumButtonText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderPremiumText(arg1) {
        var4 = _closure1_slot6;
        var3 = _closure1_slot9;
        var2 = {};
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();