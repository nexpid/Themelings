// app/lib/NetworkTtlCache.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = {};
    var8 = 'idle';
    var4['IDLE'] = var8;
    var7 = 'loading';
    var4['LOADING'] = var7;
    var5 = 'success';
    var4['SUCCESS'] = var5;
    var5 = 'error';
    var4['ERROR'] = var5;
    var _closure1_slot2 = var4;
    var4 = {};
    var4['IDLE'] = var8;
    var4['LOADING'] = var7;
    var7 = 'valid';
    var4['VALID'] = var7;
    var7 = 'stale';
    var4['STALE'] = var7;
    var4['ERROR'] = var5;
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function NetworkTtlCache() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = {};
case 2:
                var6 = _closure1_slot0;
                var2 = _closure2_slot0;
                var2 = var6.bind(var1)(var3, var2);
                var2 = null;
                var3['value'] = var2;
                var5 = _closure1_slot2;
                var5 = var5.IDLE;
                var3['fetchState'] = var5;
                var3['fetchedAt'] = var2;
                var4 = var4.ttlMs;
                var5 = var2 != var4;
                if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var4;
case 4:
                var3['ttlMs'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setTtl';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['ttlMs'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(18);
        var2[0] = var1;
        var1 = {};
        var6 = 'setLoading';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot2;
            var2 = var1.LOADING;
            var1 = this;
            var1['fetchState'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setValue';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var2['value'] = var1;
            var1 = _closure1_slot2;
            var1 = var1.SUCCESS;
            var2['fetchState'] = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['fetchedAt'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setError';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot2;
            var2 = var1.ERROR;
            var1 = this;
            var1['fetchState'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = null;
            var2['value'] = var1;
            var3 = _closure1_slot2;
            var3 = var3.IDLE;
            var2['fetchState'] = var3;
            var2['fetchedAt'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getValue';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.value;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getFetchState';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.fetchState;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getFetchedAt';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.fetchedAt;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'forceExpire';
        var1['key'] = var6;
        var6 = function value() {
            var2 = null;
            var1 = this;
            var1['fetchedAt'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'isExpired';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = this;
                var1 = var3.ttlMs;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var3.fetchedAt;
                var2 = var4 == var2;
                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var3.fetchedAt;
                var4 = var5 - var4;
                var3 = var3.ttlMs;
                var2 = var4 >= var3;
case 8:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'shouldFetch';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = var4.fetchState;
                var1 = _closure1_slot2;
                var1 = var1.LOADING;
                var1 = var3 !== var1;
                if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var4.fetchState;
                var2 = _closure1_slot2;
                var2 = var2.IDLE;
                var2 = var3 === var2;
                if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = var4.isExpired;
                var2 = var3.bind(var4)();
case 12:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'isLoading';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.fetchState;
            var1 = _closure1_slot2;
            var1 = var1.LOADING;
            var1 = var2 === var1;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'isValid';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var2 = var3.fetchState;
                var1 = _closure1_slot2;
                var1 = var1.SUCCESS;
                var1 = var2 === var1;
                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 11:
                var2 = var3.isExpired;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 14:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'isError';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.fetchState;
            var1 = _closure1_slot2;
            var1 = var1.ERROR;
            var1 = var2 === var1;
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'getStatus';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var4 = var3.fetchState;
                var2 = _closure1_slot2;
                var2 = var2.IDLE;
                if(!(var2 !== var4)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var2 = _closure1_slot2;
                var2 = var2.LOADING;
                if(!(var2 !== var4)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var2 = _closure1_slot2;
                var2 = var2.ERROR;
                if(!(var2 !== var4)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2 = _closure1_slot2;
                var2 = var2.SUCCESS;
                if(!(var2 !== var4)) { _fun0005_ip = 21; continue _fun0005 }
case 8:
                var2 = undefined;
                return var2;
case 21:
                var2 = var3.isExpired;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot3;
                if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var2 = var3.VALID;
                _fun0005_ip = 24; continue _fun0005;
case 22:
                var2 = var3.STALE;
case 24:
                return var2;
case 19:
                var2 = _closure1_slot3;
                var2 = var2.ERROR;
                return var2;
case 17:
                var2 = _closure1_slot3;
                var2 = var2.LOADING;
                return var2;
case 15:
                var1 = _closure1_slot3;
                var1 = var1.IDLE;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'getValueWithStatus';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var1 = {};
            var2 = var3.value;
            var1['value'] = var2;
            var2 = var3.getStatus;
            var2 = var2.bind(var3)();
            var1['status'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'serialize';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = this;
                var1 = var3.value;
                var4 = null;
                var2 = var4 == var1;
                var1 = null;
                if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var2 = var3.fetchedAt;
                var2 = var4 == var2;
                var1 = null;
                if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 27:
                var2 = {};
                var4 = var3.value;
                var2['value'] = var4;
                var3 = var3.fetchedAt;
                var2['fetchedAt'] = var3;
                var1 = var2;
case 25:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'restore';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 20; continue _fun0007 }
case 3:
                var3 = var1.value;
                var2['value'] = var3;
                var1 = var1.fetchedAt;
                var2['fetchedAt'] = var1;
                var1 = _closure1_slot2;
                var1 = var1.SUCCESS;
                var2['fetchState'] = var1;
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[17] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/NetworkTtlCache.tsx';
    var5 = var6.bind(var7)(var5);
    var3['NetworkTtlCacheStatus'] = var4;
    var3['NetworkTtlCache'] = var2;
    return var1;
})();