// app/modules/auth_sessions/AuthSessionsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth_sessions/AuthSessionsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useAuthSessions() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getSessions;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var9 = _closure2_slot0;
                var2 = new Array(0);
                var5 = 0;
                var10 = var2;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var4 = _closure1_slot4;
                var3 = var4.getAuthSessionIdHash;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var6 = null;
                var4 = var6 != var3;
                var3 = null;
                if(!var4) { _fun0001_ip = 102; continue _fun0001 }
 56:
                var7 = var2.findIndex;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id_hash;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var7.bind(var2)(var4);
                var4 = var7 >= var5;
                var3 = null;
                if(!var4) { _fun0001_ip = 102; continue _fun0001 }
 83:
                var6 = var2.splice;
                var4 = 1;
                var4 = var6.bind(var2)(var7, var4);
                var3 = var4[var5];
 102:
                var4 = var2.sort;
                var1 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.approx_last_used_time;
                    var1 = var2.valueOf;
                    var2 = var1.bind(var2)();
                    var1 = arg1;
                    var3 = var1.approx_last_used_time;
                    var1 = var3.valueOf;
                    var1 = var1.bind(var3)();
                    var1 = var2 - var1;
                    return var1;
                };
                var1 = var4.bind(var2)(var1);
                var1 = {};
                var1['currentSession'] = var3;
                var1['otherSessions'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAuthSessions'] = var4;
    var2 = function formatDate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = var3.valueOf;
            var1 = var1.bind(var3)();
            var2 = var2 - var1;
            var1 = 1000;
            var1 = var2 / var1;
            var2 = 60;
            var1 = var1 / var2;
            var2 = var1 / var2;
            var1 = 1;
            if(!(!(var2 < var1))) { _fun0002_ip = 103; continue _fun0002 }
 61:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var2 = var1.bind(var2)(var3);
            var1 = var2.fromNow;
            var1 = var1.bind(var2)();
            _fun0002_ip = 165; continue _fun0002;
 103:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TXCmfH;
            var1 = var3.bind(var4)(var2);
 165:
            return var1;
        }
    };
    var3['formatDate'] = var2;
    return var1;
})();