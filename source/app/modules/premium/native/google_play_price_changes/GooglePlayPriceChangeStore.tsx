// app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var4.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var4.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var4.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var4.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.SubscriptionStatusTypes;
    var9 = var7.Set;
    var10 = var8.ACTIVE;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var8.PAST_DUE;
    var7[1] = var10;
    var8 = var8.UNPAID;
    var7[2] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var7;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot8 = var7;
    var7 = false;
    var _closure1_slot9 = var7;
    var7 = null;
    var _closure1_slot10 = var7;
    var7 = function onInitializeSync() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = null;
            _closure1_slot10 = var5;
            var1 = false;
            _closure1_slot9 = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var2 = var4.bind(var1)(var2);
            var6 = var2.GooglePlayPriceChangeNoticeKSExperiment;
            var4 = var6.getCurrentConfig;
            var2 = {};
            var7 = 'GooglePlayPriceChangeStore.onInitializeSync';
            var2['location'] = var7;
            var2 = var4.bind(var6)(var2);
            var2 = var2.enabled;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = _closure1_slot7;
            var2 = var4.getPremiumSubscription;
            var6 = var2.bind(var4)();
            var4 = var5 == var6;
            var2 = undefined;
            if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var6.priceChange;
case 9:
            var4 = var5 != var6;
            if(!var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = _closure1_slot8;
            var7 = var8.has;
            var6 = var6.status;
            var4 = var7.bind(var8)(var6);
case 11:
            if(!var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = var5 != var2;
case 13:
            if(!var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = var2.isInFuture;
case 15:
            if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var2.isPriceIncrease;
case 17:
            if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 19:
            _closure1_slot10 = var2;
            var2 = true;
            _closure1_slot9 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var7 = var7.Store;
    var2 = function(arg1) {
        var4 = function GooglePlayPriceChangeStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 22; continue _fun0003;
case 20:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 22:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var5 = var3.syncWith;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var1 = _closure1_slot11;
            var1 = var5.bind(var3)(var4, var1);
            var1 = var3.waitFor;
            var1 = var1.bind(var3)(var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldShowGooglePlayPriceChange';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var4 = var1.GooglePlayPriceChangeNoticeKSExperiment;
                var3 = var4.getCurrentConfig;
                var1 = {};
                var5 = 'GooglePlayPriceChangeStore.shouldShowGooglePlayPriceChange';
                var1['location'] = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.enabled;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 23:
                var1 = _closure1_slot9;
case 20:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'priceChangeRecord';
        var5['key'] = var7;
        var6 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var4 = var1.GooglePlayPriceChangeNoticeKSExperiment;
                var3 = var4.getCurrentConfig;
                var1 = {};
                var5 = 'GooglePlayPriceChangeStore.priceChangeRecord';
                var1['location'] = var5;
                var1 = var3.bind(var4)(var1);
                var3 = var1.enabled;
                var1 = null;
                if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var1 = _closure1_slot10;
case 24:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var7);
    var2 = 'GooglePlayPriceChangeStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var13 = var4.bind(var1)(var2);
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var12 = {};
    var14 = var4;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();