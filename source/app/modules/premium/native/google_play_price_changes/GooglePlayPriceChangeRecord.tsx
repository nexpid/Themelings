// app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var5 = var5.bind(var1)(var4);
    var4 = {};
    var7 = 'PRICE_CHANGE_MODE_UNSPECIFIED';
    var4['PRICE_CHANGE_MODE_UNSPECIFIED'] = var7;
    var7 = 'PRICE_DECREASE';
    var4['PRICE_DECREASE'] = var7;
    var7 = 'PRICE_INCREASE';
    var4['PRICE_INCREASE'] = var7;
    var7 = 'OPT_OUT_PRICE_INCREASE';
    var4['OPT_OUT_PRICE_INCREASE'] = var7;
    var _closure1_slot5 = var4;
    var2 = function(arg1) {
        var5 = function GooglePlayPriceChangeRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.userId;
                var1['userId'] = var3;
                var3 = var2.subscriptionId;
                var1['subscriptionId'] = var3;
                var3 = var2.oldCurrency;
                var1['oldCurrency'] = var3;
                var3 = var2.oldPrice;
                var1['oldPrice'] = var3;
                var3 = var2.newCurrency;
                var1['newCurrency'] = var3;
                var3 = var2.newPrice;
                var1['newPrice'] = var3;
                var3 = var2.priceChangeMode;
                var1['priceChangeMode'] = var3;
                var3 = var2.expectedChargeTime;
                var1['expectedChargeTime'] = var3;
                var2 = var2.priceChangeId;
                var1['priceChangeId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var6 = {};
        var2 = 'isPriceIncrease';
        var6['key'] = var2;
        var2 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var4 = var3.priceChangeMode;
                var1 = _closure1_slot5;
                var1 = var1.PRICE_INCREASE;
                var1 = var4 === var1;
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var3.priceChangeMode;
                var2 = _closure1_slot5;
                var2 = var2.OPT_OUT_PRICE_INCREASE;
                var1 = var3 === var2;
case 9:
                return var1;
            }
        };
        var6['get'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'isOptOutPriceIncrease';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.priceChangeMode;
            var1 = _closure1_slot5;
            var1 = var1.OPT_OUT_PRICE_INCREASE;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isPriceDecrease';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.priceChangeMode;
            var1 = _closure1_slot5;
            var1 = var1.PRICE_DECREASE;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'isInFuture';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.expectedChargeTime;
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var4 = var3;
            var1 = new var4[var1](var3);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.toISOString;
            var1 = var1.bind(var3)();
            var1 = var2 > var1;
            return var1;
        };
        var6['get'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot0;
            var1 = {};
            var4 = var2.user_id;
            var1['userId'] = var4;
            var4 = var2.subscription_id;
            var1['subscriptionId'] = var4;
            var4 = var2.old_currency;
            var1['oldCurrency'] = var4;
            var4 = var2.old_price;
            var1['oldPrice'] = var4;
            var4 = var2.new_currency;
            var1['newCurrency'] = var4;
            var4 = var2.new_price;
            var1['newPrice'] = var4;
            var4 = var2.price_change_mode;
            var1['priceChangeMode'] = var4;
            var4 = var2.expected_charge_time;
            var1['expectedChargeTime'] = var4;
            var2 = var2.price_change_id;
            var1['priceChangeId'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var5 = var1;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = 6;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var3['GooglePlayPriceChangeMode'] = var4;
    var3['GooglePlayPriceChangeRecord'] = var2;
    return var1;
})();