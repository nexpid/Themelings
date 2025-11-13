// app/modules/user_settings/native/premium_marketing/PremiumDiscountPill.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
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
            var4 = var7.BLACK_500;
case 4:
            var2['backgroundColor'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var1['pillContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumDiscountPill.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.discountOffer;
            var8 = var1.style;
            var1 = var1.useWhiteBackground;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = false;
case 5:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useTheme;
            var3 = var2.bind(var3)();
            var2 = !var1;
            if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = 'light';
            var2 = var1 === var3;
case 7:
            var7 = 'black';
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = 'white';
case 9:
            var1 = _closure1_slot5;
            var6 = var1.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = var6.pillContainer;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var8;
            var1['style'] = var6;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 6;
            var5 = var12[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var9 = 'text-xs/bold';
            var5['variant'] = var9;
            var5['color'] = var7;
            var7 = 7;
            var9 = var12[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.iiLbvu;
            var7 = {};
            var11 = var11.discount;
            var11 = var11.amount;
            var7['percent'] = var11;
            var8 = var9.bind(var10)(var8, var7);
            var7 = var8.toUpperCase;
            var7 = var7.bind(var8)();
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PremiumDiscountPill'] = var2;
    return var1;
})();