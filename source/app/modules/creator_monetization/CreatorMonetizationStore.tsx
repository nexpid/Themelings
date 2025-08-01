// app/modules/creator_monetization/CreatorMonetizationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var9 = 1;
    var4 = var6[var9];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = var2.Map;
    var11 = var4.prototype;
    var11 = Object.create(var11, {constructor: {value: var4}});
    var15 = var11;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var11;
    var _closure1_slot5 = var4;
    var2 = var2.Map;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot6 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var10;
    var4 = 'NOT_FETCHED';
    var2[var10] = var4;
    var2['FETCHING'] = var9;
    var4 = 'FETCHING';
    var2[var9] = var4;
    var2['FETCHED'] = var8;
    var4 = 'FETCHED';
    var2[var8] = var4;
    var _closure1_slot7 = var2;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function CreatorMonetizationStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getPriceTiersFetchStateForGuildAndType';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot6;
                var3 = var4.get;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0003_ip = 44; continue _fun0003 }
 31:
                var5 = var6.get;
                var4 = arg2;
                var1 = var5.bind(var6)(var4);
 44:
                if(!(var3 == var1)) { _fun0003_ip = 58; continue _fun0003 }
 48:
                var2 = _closure1_slot7;
                var1 = var2.NOT_FETCHED;
 58:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getPriceTiersForGuildAndType';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0004_ip = 44; continue _fun0004 }
 31:
                var3 = var4.get;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 44:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'CreatorMonetizationStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleConnectionOpen() {
        var3 = _closure1_slot5;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot6;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var9;
    var9 = function handleFetchPriceTiers(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.priceTierType;
            var3 = _closure1_slot6;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0005_ip = 77; continue _fun0005 }
 34:
            var6 = _closure1_slot6;
            var3 = var6.set;
            var2 = global;
            var2 = var2.Map;
            var7 = var2.prototype;
            var7 = Object.create(var7, {constructor: {value: var2}});
            var10 = var7;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var7;
            var2 = var3.bind(var6)(var5, var2);
 77:
            var3 = _closure1_slot6;
            var2 = var3.get;
            var3 = var2.bind(var3)(var5);
            var2 = var3.set;
            var1 = _closure1_slot7;
            var1 = var1.FETCHING;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        }
    };
    var4['CREATOR_MONETIZATION_PRICE_TIERS_FETCH'] = var9;
    var9 = function handleFetchPriceTiersSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.priceTierType;
            var3 = var1.priceTiers;
            var6 = _closure1_slot6;
            var2 = var6.has;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0006_ip = 83; continue _fun0006 }
 40:
            var7 = _closure1_slot6;
            var6 = var7.set;
            var2 = global;
            var2 = var2.Map;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var11 = var8;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var8;
            var2 = var6.bind(var7)(var5, var2);
 83:
            var6 = _closure1_slot6;
            var2 = var6.get;
            var7 = var2.bind(var6)(var5);
            var6 = var7.set;
            var2 = _closure1_slot7;
            var2 = var2.FETCHED;
            var2 = var6.bind(var7)(var4, var2);
            var6 = _closure1_slot5;
            var2 = var6.has;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0006_ip = 178; continue _fun0006 }
 135:
            var7 = _closure1_slot5;
            var6 = var7.set;
            var2 = global;
            var2 = var2.Map;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var11 = var8;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var8;
            var2 = var6.bind(var7)(var5, var2);
 178:
            var2 = _closure1_slot5;
            var1 = var2.get;
            var2 = var1.bind(var2)(var5);
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        }
    };
    var4['CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS'] = var9;
    var5 = function handleFetchPriceTiersFailure(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.priceTierType;
            var3 = _closure1_slot6;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0007_ip = 77; continue _fun0007 }
 34:
            var6 = _closure1_slot6;
            var3 = var6.set;
            var2 = global;
            var2 = var2.Map;
            var7 = var2.prototype;
            var7 = Object.create(var7, {constructor: {value: var2}});
            var10 = var7;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var7;
            var2 = var3.bind(var6)(var5, var2);
 77:
            var3 = _closure1_slot6;
            var2 = var3.get;
            var3 = var2.bind(var3)(var5);
            var2 = var3.set;
            var1 = _closure1_slot7;
            var1 = var1.FETCHED;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        }
    };
    var4['CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/creator_monetization/CreatorMonetizationStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();