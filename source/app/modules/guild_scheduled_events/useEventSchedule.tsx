// app/modules/guild_scheduled_events/useEventSchedule.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getEventSchedule(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = arg3;
            var1 = var3.recurrence_rule;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var2 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var7 = var6[var1];
            var4 = undefined;
            var8 = var5.bind(var4)(var7);
            var7 = var8.getBaseScheduleForRecurrence;
            var7 = var7.bind(var8)(var9, var3);
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getScheduleForRecurrenceWithException;
            var1 = arg2;
            var1 = var5.bind(var6)(var7, var1);
            var7 = var1.startDate;
            var6 = var1.endDate;
            var1 = {};
            var5 = var7.toDate;
            var5 = var5.bind(var7)();
            var1['startTime'] = var5;
            var5 = var2 == var6;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var6.toDate;
            var4 = var5.bind(var6)();
case 5:
            var1['endTime'] = var4;
            return var1;
case 2:
            var1 = {};
            var4 = global;
            var7 = var4.Date;
            var11 = var3.scheduled_start_time;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var5 = new var12[var7](var11, var10);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['startTime'] = var5;
            var5 = var3.scheduled_end_time;
            var5 = var2 != var5;
            var2 = null;
            if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var4.Date;
            var11 = var3.scheduled_end_time;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var3 = new var12[var5](var11, var10);
            var2 = var3 instanceof Object ? var3 : var4;
case 7:
            var1['endTime'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useEventSchedule.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useEventSchedule(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getNextRecurrenceIdInEvent;
            var4 = var1.bind(var2)(var5);
case 9:
            var3 = _closure1_slot4;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var2 = undefined;
            var6 = var6.bind(var2)(var1);
            var1 = var5.id;
            var1 = var6.bind(var2)(var4, var1);
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function useEventScheduleById(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var7)(var3, var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 1;
            var3 = var8[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getNextRecurrenceIdInEvent;
            var6 = var3.bind(var7)(var4);
case 11:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var7 = var7.bind(var5)(var3);
            var8 = var1 == var4;
            var3 = undefined;
            if(var8) { _fun0003_ip = 2; continue _fun0003 }
case 13:
            var3 = var4.id;
case 2:
            var3 = var7.bind(var5)(var6, var3);
            var7 = var1 == var4;
            var1 = null;
            if(var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = _closure1_slot4;
            var1 = var2.bind(var5)(var4, var3, var6);
case 14:
            return var1;
        }
    };
    var3['useEventScheduleById'] = var4;
    var2 = function getEventSchedule(arg1, arg2) {
        var5 = arg1;
        var4 = arg2;
        var3 = _closure1_slot4;
        var6 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var7 = var6.bind(var2)(var1);
        var6 = var7.getEventException;
        var1 = var5.id;
        var1 = var6.bind(var7)(var4, var1);
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var3['getEventSchedule'] = var2;
    return var1;
})();