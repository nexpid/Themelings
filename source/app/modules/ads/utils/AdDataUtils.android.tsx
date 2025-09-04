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
 0:
            var3 = _closure1_slot4;
            var4 = var3.adUser;
            var2 = var3.isFetching;
            var3 = var3.hasFetchFailed;
            var5 = null;
            if(!(var5 == var4)) { _fun0001_ip = 110; continue _fun0001 }
 31:
            if(var3) { _fun0001_ip = 110; continue _fun0001 }
 34:
            if(var2) { _fun0001_ip = 73; continue _fun0001 }
 37:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchAdUser;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
 73:
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
 0:
                        var2 = _closure1_slot4;
                        var3 = var2.adUser;
                        var2 = null;
                        var2 = var2 != var3;
                        if(var2) { _fun0002_ip = 32; continue _fun0002 }
 22:
                        var3 = _closure1_slot4;
                        var2 = var3.hasFetchFailed;
 32:
                        if(!var2) { _fun0002_ip = 59; continue _fun0002 }
 35:
                        var3 = _closure3_slot4;
                        var1 = _closure1_slot4;
                        var2 = var1.adUser;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var4;
                var3 = function safeResolve(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot1;
                        if(var2) { _fun0003_ip = 69; continue _fun0003 }
 10:
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
 69:
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
            _fun0001_ip = 129; continue _fun0001;
 110:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)(var4);
 129:
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
 0:
                var4 = function handleStoreChange() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure1_slot4;
                        var3 = var2.adUser;
                        var2 = null;
                        var2 = var2 != var3;
                        if(var2) { _fun0005_ip = 32; continue _fun0005 }
 22:
                        var3 = _closure1_slot4;
                        var2 = var3.hasFetchFailed;
 32:
                        if(!var2) { _fun0005_ip = 59; continue _fun0005 }
 35:
                        var3 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var2 = var1.adUser;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 59:
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
                if(var3) { _fun0004_ip = 48; continue _fun0004 }
 45:
                var3 = var6;
 48:
                if(var3) { _fun0004_ip = 54; continue _fun0004 }
 51:
                var3 = var5;
 54:
                if(var3) { _fun0004_ip = 97; continue _fun0004 }
 57:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.fetchAdUser;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
 97:
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