// app/modules/virtual_currency/native/BalanceWidgetPillButton.tsx
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var2 = function BalanceWidgetPillButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.balance;
            var9 = var1.onPress;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 'tertiary';
case 2:
            var8 = var1.accessible;
            if(!(var8 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = true;
case 4:
            var7 = null;
            var5 = var7 === var14;
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 2;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var1['variant'] = var10;
            var1['onPress'] = var9;
            var9 = 'sm';
            var1['size'] = var9;
            var10 = var7 == var14;
            var9 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var14.toString;
            var9 = var10.bind(var14)();
case 6:
            var10 = var7 != var9;
            var7 = '';
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var9;
case 8:
            var1['text'] = var7;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 3;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var1['icon'] = var7;
            var1['accessible'] = var8;
            var7 = !var8;
            var1['accessibilityElementsHidden'] = var7;
            var7 = 'no';
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = 'auto';
case 10:
            var1['importantForAccessibility'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 4;
            var6 = var11[var7];
            var6 = var10.bind(var4)(var6);
            var9 = var6.intl;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = var9.formatToPlainString;
            var6 = var11[var7];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var8 = var6.zPaLL9;
            var6 = {};
            var13 = var14.toString;
            var13 = var13.bind(var14)();
            var6['balance'] = var13;
            var6 = var12.bind(var9)(var8, var6);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.y0WGqP;
            var6 = var8.bind(var9)(var7);
case 14:
            var1['accessibilityLabel'] = var6;
            var1['disabled'] = var5;
            var1['loading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = 'BalanceWidgetPillButton';
    var2['displayName'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPillButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPillButton'] = var2;
    return var1;
})();