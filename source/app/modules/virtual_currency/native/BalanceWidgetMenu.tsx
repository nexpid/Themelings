// app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var7 = var4.ActivityIndicator;
    var _closure1_slot2 = var7;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BalanceWidgetMenu() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var4 = undefined;
            var2 = var6.bind(var4)(var1);
            var1 = var2.useFetchVirtualCurrencyBalance;
            var1 = var1.bind(var2)();
            var14 = var1.balance;
            var9 = var1.isFetching;
            var3 = _closure1_slot4;
            var1 = 4;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var5 = 'Orbs Balance Widget';
            var1['title'] = var5;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRow;
            var5 = {};
            var7 = 'Your Orbs';
            var5['label'] = var7;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = {};
            var12 = 'center';
            var11['alignItems'] = var12;
            var7['style'] = var11;
            var12 = _closure1_slot4;
            if(var9) { _fun0001_ip = 249; continue _fun0001 }
 138:
            var11 = _closure1_slot0;
            var9 = _closure1_slot1;
            var15 = 6;
            var9 = var9[var15];
            var9 = var11.bind(var4)(var9);
            var11 = var9.BalanceWidgetPill;
            var9 = {};
            var13 = null;
            var16 = var13 != var14;
            var13 = 0;
            if(!var16) { _fun0001_ip = 180; continue _fun0001 }
 177:
            var13 = var14;
 180:
            var9['balance'] = var13;
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.BalanceWidgetMode;
            var13 = var13.DEFAULT;
            var9['balanceWidgetMode'] = var13;
            var13 = false;
            var9['showNotificationBadge'] = var13;
            var13 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var9['onPress'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            _fun0001_ip = 261; continue _fun0001;
 249:
            var11 = _closure1_slot2;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
 261:
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['trailing'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();