// app/modules/changelog/useChangelogRenderedAnalytics.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/useChangelogRenderedAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChangelogRenderedAnalytics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var3 = var10[var1];
            var1 = undefined;
            var3 = var8.bind(var1)(var3);
            var9 = var3.bind(var1)(var5);
            var _closure2_slot1 = var9;
            var7 = _closure1_slot0;
            var11 = 6;
            var3 = var10[var11];
            var13 = var7.bind(var1)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var3 = var12.bind(var13)(var6, var3);
            var _closure2_slot2 = var3;
            var6 = var10[var11];
            var14 = var7.bind(var1)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var6;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var3;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getChangelog;
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = '';
                    if(!var5) { _fun0002_ip = 37; continue _fun0002 }
 33:
                    var2 = _closure2_slot1;
 37:
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var6 = var13.bind(var14)(var12, var6, var7);
            var _closure2_slot3 = var6;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.bind(var1)(var5);
            var _closure2_slot4 = var7;
            var12 = _closure1_slot3;
            var10 = var12.useRef;
            var8 = null;
            if(!var7) { _fun0001_ip = 201; continue _fun0001 }
 184:
            var13 = global;
            var14 = var13.Date;
            var13 = var14.now;
            var8 = var13.bind(var14)();
 201:
            var8 = var10.bind(var12)(var8);
            var _closure2_slot5 = var8;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var12 = var10.bind(var1)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getUnreadCount;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var11.bind(var12)(var10, var5, var8);
            var _closure2_slot6 = var8;
            var5 = _closure1_slot3;
            var4 = var5.useRef;
            var4 = var4.bind(var5)(var8);
            var _closure2_slot7 = var4;
            var8 = var5.useEffect;
            var4 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot6;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var8.bind(var5)(var4);
            var10 = var5.useEffect;
            var8 = new Array(1);
            var8[0] = var7;
            var4 = function() {
                var2 = _closure2_slot5;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var10.bind(var5)(var4, var8);
            var8 = var5.useEffect;
            var4 = new Array(3);
            var4[0] = var9;
            var4[1] = var3;
            var4[2] = var7;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0003_ip = 20; continue _fun0003 }
 10:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var4;
 20:
                    if(!var2) { _fun0003_ip = 71; continue _fun0003 }
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchChangelog;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = true;
                    var1 = var4.bind(var5)(var3, var2, var1);
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var5)(var3, var4);
            var8 = var5.useEffect;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var6;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0004_ip = 20; continue _fun0004 }
 10:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var1 = var2 != var3;
 20:
                    if(!var1) { _fun0004_ip = 134; continue _fun0004 }
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.CHANGE_LOG_OPENED;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var10 = var6.date;
                    var9 = var6.revision;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = '';
                    var6 = ':';
                    var6 = var8.bind(var7)(var10, var6, var9);
                    var1['change_log_id'] = var6;
                    var5 = _closure2_slot7;
                    var5 = var5.current;
                    var1['unread_count'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 134:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var5)(var3, var4);
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                var2 = _closure2_slot5;
                var2 = var2.current;
                var _closure3_slot0 = var2;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                        var4 = _closure2_slot3;
                        var3 = null;
                        var2 = var3 != var4;
 20:
                        if(!var2) { _fun0005_ip = 36; continue _fun0005 }
 23:
                        var4 = _closure3_slot0;
                        var3 = null;
                        var2 = var3 != var4;
 36:
                        if(!var2) { _fun0005_ip = 222; continue _fun0005 }
 42:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.track;
                        var2 = _closure1_slot7;
                        var3 = var2.CHANGE_LOG_CLOSED;
                        var2 = {};
                        var6 = global;
                        var9 = var6.Math;
                        var8 = var9.round;
                        var10 = var6.Date;
                        var7 = var10.now;
                        var10 = var7.bind(var10)();
                        var7 = _closure3_slot0;
                        var10 = var10 - var7;
                        var7 = 1000;
                        var7 = var10 / var7;
                        var7 = var8.bind(var9)(var7);
                        var2['seconds_open'] = var7;
                        var7 = _closure2_slot3;
                        var10 = var7.date;
                        var9 = var7.revision;
                        var6 = var6.HermesInternal;
                        var8 = var6.concat;
                        var7 = '';
                        var6 = ':';
                        var6 = var8.bind(var7)(var10, var6, var9);
                        var2['change_log_id'] = var6;
                        var6 = _closure2_slot7;
                        var6 = var6.current;
                        var2['unread_count'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = _closure2_slot5;
                        var1 = 0;
                        var2['current'] = var1;
 222:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();