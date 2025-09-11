// app/modules/guild_scheduled_events/useEventException.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _getEventException(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = null;
            var3 = var1 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 39; continue _fun0001 }
 23:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.event_exception_id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 39:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useEventException.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useEventException(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 1;
        var5 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var5);
        var5 = var6.useStateFromStoresArray;
        var7 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot2;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0002_ip = 42; continue _fun0002 }
 36:
                var1 = var3.guild_scheduled_event_exceptions;
 42:
                if(!(var2 == var1)) { _fun0002_ip = 50; continue _fun0002 }
 46:
                var1 = new Array(0);
 50:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2, var1);
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getEventException(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var2 = var3.getGuildScheduledEvent;
            var1 = arg2;
            var5 = var2.bind(var3)(var1);
            var1 = null;
            var6 = var1 == var5;
            var3 = undefined;
            var2 = undefined;
            if(var6) { _fun0003_ip = 44; continue _fun0003 }
 38:
            var2 = var5.guild_scheduled_event_exceptions;
 44:
            if(!(var1 == var2)) { _fun0003_ip = 52; continue _fun0003 }
 48:
            var2 = new Array(0);
 52:
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['getEventException'] = var2;
    return var1;
})();