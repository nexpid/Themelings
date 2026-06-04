// app/modules/parent_tools/SpendingLimitDisplay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getSpendingLimitDisplayState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.amount;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var3.currency;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 5;
            var7 = var2[var13];
            var12 = undefined;
            var9 = var6.bind(var12)(var7);
            var8 = var9.formatRate;
            var2 = var2[var13];
            var7 = var6.bind(var12)(var2);
            var6 = var7.formatPrice;
            var2 = var3.amount;
            var7 = var6.bind(var7)(var2, var11);
            var2 = _closure1_slot5;
            var6 = var2.MONTH;
            var2 = 1;
            var2 = var8.bind(var9)(var7, var6, var2);
            var6 = var3.amount;
            if(!(!(var5 >= var6))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var12)(var6);
            var7 = var6.CurrencyExponents;
            var6 = var3.currency;
            var6 = var7[var6];
            var7 = var1 != var6;
            var1 = 2;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var6;
case 8:
            var3 = var3.amount;
            var10 = var3 - var5;
            var3 = 10;
            var16 = var3;
            var15 = var1;
            var1 = exponentiationOperator(var16, var15);
            var1 = var3 * var1;
            if(!(!(var10 <= var1))) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = {};
            var3 = 'on';
            var1['kind'] = var3;
            var1['monthlyText'] = var2;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var3 = {};
            var5 = 'close-to-limit';
            var3['kind'] = var5;
            var3['monthlyText'] = var2;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var5 = var9.bind(var12)(var5);
            var7 = var5.intl;
            var6 = var7.formatToPlainString;
            var5 = _closure1_slot1;
            var4 = 8;
            var4 = var8[var4];
            var4 = var5.bind(var12)(var4);
            var5 = var4["+Q+bU1"];
            var4 = {};
            var8 = var8[var13];
            var9 = var9.bind(var12)(var8);
            var8 = var9.formatPrice;
            var8 = var8.bind(var9)(var10, var11);
            var4['amount'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var3['remainingText'] = var4;
            var1 = var3;
case 12:
            return var1;
case 6:
            var1 = {};
            var3 = 'spent';
            var1['kind'] = var3;
            var1['monthlyText'] = var2;
            return var1;
case 4:
            var1 = {};
            var2 = 'blocked';
            var1['kind'] = var2;
            return var1;
case 2:
            var1 = {};
            var2 = 'off';
            var1['kind'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SubscriptionIntervalTypes;
    var _closure1_slot5 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/SpendingLimitDisplay.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useSpendingLimitFromUserSettings() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 3;
        var3 = var7[var3];
        var6 = undefined;
        var5 = var2.bind(var6)(var3);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = 4;
        var1 = var7[var1];
        var1 = var2.bind(var6)(var1);
        var8 = var1.spendingLimitEqual;
        var10 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure1_slot3;
                var1 = var1.settings;
                var2 = var1.safetySettings;
                var1 = null;
                var4 = var1 == var2;
                var6 = undefined;
                var3 = undefined;
                if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = var2.spendingLimitSettings;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                var3 = var2.oneTimePurchaseLimit;
case 13:
                var2 = var1 == var3;
                var1 = null;
                if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var2 = {};
                var4 = global;
                var5 = var4.Number;
                var4 = var3.amount;
                var4 = var5.bind(var6)(var4);
                var2['amount'] = var4;
                var3 = var3.currency;
                var2['currency'] = var3;
                var1 = var2;
case 16:
                return var1;
            }
        };
        var12 = var5;
        var11 = var3;
        var9 = undefined;
        var1 = var12[var4](var11, var10, var9, var8, var7);
        return var1;
    };
    var3['useSpendingLimitFromUserSettings'] = var5;
    var5 = 10;
    var3['CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS'] = var5;
    var3['getSpendingLimitDisplayState'] = var4;
    var2 = function useSpendingLimitDisplayState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getMonthlyPurchases;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var3, var2);
            var3 = _closure1_slot6;
            var2 = null;
            var6 = var2 == var5;
            var1 = undefined;
            if(var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var5.total_amount;
case 18:
            var5 = var2 != var1;
            var2 = 0;
            if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = var1;
case 20:
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSpendingLimitDisplayState'] = var2;
    return var1;
})();