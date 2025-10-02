// app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/restoreEventRecurrence.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function restoreEventRecurrence(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var5 = arg3;
            var4 = arg4;
            var8 = var1.scheduled_start_time;
            var7 = var1.scheduled_end_time;
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateGuildEventException;
            var1 = {};
            var1['scheduled_start_time'] = var8;
            var1['scheduled_end_time'] = var7;
            var7 = false;
            var1['is_canceled'] = var7;
            var13 = var3;
            var12 = var1;
            var11 = var6;
            var10 = var5;
            var9 = var4;
            var1 = var13[var2](var12, var11, var10, var9, var8);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var2 = var3.deleteGuildEventException;
            var1 = var2.bind(var3)(var6, var5, var4);
case 5:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();