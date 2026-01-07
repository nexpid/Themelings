// app/modules/user_settings/native/premium_marketing/PremiumPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 8, 'paddingVertical': 1};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 4;
            var4 = var4[var6];
            var5 = undefined;
            var7 = var7.bind(var5)(var4);
            var4 = arg1;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.colors;
            var4 = var4.WHITE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = var7.unsafe_rawColors;
            var4 = var7.BLACK;
case 4:
            var2['backgroundColor'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var3 = 'center';
            var1['pillContainer'] = var2;
            var2 = {};
            var2['textAlign'] = var3;
            var1['discountPillText'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumPill.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var15 = var2.discountOffer;
            var _closure2_slot0 = var15;
            var14 = var2.shouldShowDiscountUpsell;
            var5 = undefined;
            if(!(var14 === var5)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var14 = false;
case 5:
            var _closure2_slot1 = var14;
            var16 = var2.isActiveDiscount;
            if(!(var16 === var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var16 = false;
case 7:
            var _closure2_slot2 = var16;
            var12 = var2.premiumType;
            var _closure2_slot3 = var12;
            var13 = var2.trialOffer;
            var _closure2_slot4 = var13;
            var11 = var2.style;
            var2 = var2.useWhiteBackground;
            if(!(var2 === var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = false;
case 9:
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useTheme;
            var4 = var3.bind(var4)();
            var3 = !var2;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = 'light';
            var3 = var2 === var4;
case 11:
            var10 = 'black';
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var10 = 'white';
case 13:
            var2 = _closure1_slot6;
            var8 = var2.bind(var5)(var3);
            var4 = _closure1_slot3;
            var7 = var4.useMemo;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.parse;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = _closure2_slot4;
                    var4 = var5.expires_at;
case 15:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var1 = var4;
case 17:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var4)(var2, var3);
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = 60000;
            var7 = var3.bind(var5)(var7, var2);
            _closure2_slot5 = var7;
            var3 = _closure1_slot0;
            var2 = 7;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.usePremiumTrialOfferPremiumType;
            var9 = var2.bind(var3)();
            _closure2_slot6 = var9;
            var3 = var4.useMemo;
            var2 = new Array(7);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var12;
            var2[5] = var9;
            var7 = var7.days;
            var2[6] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 21:
                    var1 = _closure2_slot4;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0004_ip = 24; continue _fun0004 }
case 26:
                    var11 = global;
                    var4 = var11.Number;
                    var3 = var4.isNaN;
                    var2 = _closure2_slot5;
                    var2 = var2.days;
                    var2 = var3.bind(var4)(var2);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 8;
                    var4 = var9[var3];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var5 = var4.intl;
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var10 = var5.formatToPlainString;
                    var2 = var9[var3];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var4 = var2.+FgdjP;
                    var2 = {};
                    var14 = var11.Math;
                    var13 = var14.max;
                    var11 = _closure2_slot5;
                    var12 = var11.days;
                    var11 = 1;
                    var11 = var13.bind(var14)(var12, var11);
                    var2['days'] = var11;
                    var2 = var10.bind(var5)(var4, var2);
                    _fun0004_ip = 29; continue _fun0004;
case 27:
                    var4 = var5.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.qVcfa0;
                    var2 = var4.bind(var5)(var3);
case 29:
                    var1 = var2;
case 24:
                    _fun0004_ip = 30; continue _fun0004;
case 23:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.iiLbvu;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.discount;
                    var6 = var6.amount;
                    var2['percent'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 30:
                    _fun0004_ip = 31; continue _fun0004;
case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.EyjDRE;
                    var1 = var3.bind(var4)(var2);
case 31:
                    return var1;
                }
            };
            var9 = var3.bind(var4)(var1, var2);
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var12 = var8.pillContainer;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var11;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 9;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var11 = 'text-xs/bold';
            var6['variant'] = var11;
            var6['color'] = var10;
            var8 = var8.discountPillText;
            var6['style'] = var8;
            var8 = var9.toUpperCase;
            var8 = var8.bind(var9)();
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var3['PremiumPill'] = var2;
    return var1;
})();