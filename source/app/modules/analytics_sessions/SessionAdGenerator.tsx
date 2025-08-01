// app/modules/analytics_sessions/SessionAdGenerator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isAdSessionExpired(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = global;
            var2 = var4.Date;
            var1 = var2.now;
            var8 = var1.bind(var2)();
            var1 = var5.createdAtTimestamp;
            if(!(!(var8 < var1))) { _fun0001_ip = 101; continue _fun0001 }
 30:
            var1 = var5.lastUsedTimestamp;
            var3 = var8 - var1;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.SESSION_IDLE_TIMEOUT_MILLIS;
            var1 = var3 > var1;
            var3 = var5.createdAtTimestamp;
            var3 = var8 - var3;
            var2 = _closure1_slot3;
            var2 = var3 > var2;
            if(var1) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var1 = var2;
 99:
            return var1;
 101:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.addBreadcrumb;
            var1 = {};
            var6 = 'ad';
            var1['category'] = var6;
            var7 = var5.createdAtTimestamp;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = 'future facing timestamp Date.now(): ';
            var4 = ', initialized timestamp: ';
            var4 = var6.bind(var5)(var8, var4, var7);
            var1['message'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
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
    var5 = var5.Millis;
    var8 = var5.HOUR;
    var5 = 12;
    var5 = var5 * var8;
    var _closure1_slot3 = var5;
    var5 = null;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/analytics_sessions/SessionAdGenerator.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getOrRefreshAdSession() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var1 = false;
 11:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var4 = var2.bind(var3)();
            var5 = _closure1_slot4;
            var2 = null;
            if(!(var2 != var5)) { _fun0002_ip = 76; continue _fun0002 }
 41:
            var5 = _closure1_slot5;
            var2 = _closure1_slot4;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0002_ip = 76; continue _fun0002 }
 57:
            if(!var1) { _fun0002_ip = 70; continue _fun0002 }
 60:
            var1 = _closure1_slot4;
            var1['lastUsedTimestamp'] = var4;
 70:
            var1 = _closure1_slot4;
            _fun0002_ip = 153; continue _fun0002;
 76:
            var2 = {};
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 1;
            var8 = var7[var8];
            var9 = var5.bind(var6)(var8);
            var8 = var9.v4;
            var8 = var8.bind(var9)();
            var2['uuid'] = var8;
            var2['createdAtTimestamp'] = var4;
            var2['lastUsedTimestamp'] = var4;
            var4 = 2;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.CLIENT_SESSION_STORAGE_VERSION;
            var2['version'] = var4;
            _closure1_slot4 = var2;
            var1 = var2;
 153:
            return var1;
        }
    };
    var3['getOrRefreshAdSession'] = var5;
    var5 = function clearAdSession() {
        var1 = null;
        _closure1_slot4 = var1;
        var1 = undefined;
        return var1;
    };
    var3['clearAdSession'] = var5;
    var4 = function getCurrentAdSession() {
        var1 = _closure1_slot4;
        return var1;
    };
    var3['getCurrentAdSession'] = var4;
    var3['isAdSessionExpired'] = var2;
    return var1;
})();