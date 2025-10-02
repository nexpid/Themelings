// app/modules/ads/utils/AdDataUtils.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_TIMEOUT_MS;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/utils/AdDataUtils.android.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAdUser(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            var4 = var3.adUser;
            var2 = var3.isFetching;
            var3 = var3.hasFetchFailed;
            var5 = null;
            if(!(var5 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchAdUser;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
case 5:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = false;
                var _closure3_slot1 = var1;
                var1 = global;
                var6 = var1.setTimeout;
                var4 = _closure1_slot5;
                var1 = undefined;
                var3 = function() {
                    var3 = _closure3_slot4;
                    var2 = undefined;
                    var1 = null;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var6.bind(var1)(var3, var4);
                var _closure3_slot2 = var3;
                var4 = function handleUpdate() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure1_slot4;
                        var3 = var2.adUser;
                        var2 = null;
                        var2 = var2 != var3;
                        if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var3 = _closure1_slot4;
                        var2 = var3.hasFetchFailed;
case 7:
                        if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var3 = _closure3_slot4;
                        var1 = _closure1_slot4;
                        var2 = var1.adUser;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var4;
                var3 = function safeResolve(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot1;
                        if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = true;
                        _closure3_slot1 = var2;
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure3_slot2;
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = _closure1_slot4;
                        var4 = var5.removeChangeListener;
                        var2 = _closure3_slot3;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot4 = var3;
                var3 = _closure1_slot4;
                var2 = var3.addChangeListener;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            _fun0001_ip = 13; continue _fun0001;
case 2:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)(var4);
case 13:
            return var1;
        }
    };
    var3['getAdUser'] = var4;
    var2 = function useAdUser(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = _closure1_slot4;
        var3 = var3.adUser;
        var7 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = function handleStoreChange() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure1_slot4;
                        var3 = var2.adUser;
                        var2 = null;
                        var2 = var2 != var3;
                        if(var2) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                        var3 = _closure1_slot4;
                        var2 = var3.hasFetchFailed;
case 7:
                        if(!var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                        var3 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var2 = var1.adUser;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var4;
                var3 = _closure1_slot4;
                var7 = var3.adUser;
                var6 = var3.isFetching;
                var5 = var3.hasFetchFailed;
                var3 = null;
                var3 = var3 != var7;
                if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var6;
case 14:
                if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var3 = var5;
case 16:
                if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.fetchAdUser;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
case 18:
                var3 = _closure1_slot4;
                var2 = var3.addChangeListener;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure1_slot4;
                    var2 = var3.removeChangeListener;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useAdUser'] = var2;
    return var1;
})();