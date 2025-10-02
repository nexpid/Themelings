// app/modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/saveGuildEventRecurrence.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function saveGuildEventRecurrence(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var11 = arg3;
            var2 = arg4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 0;
            var7 = var4[var13];
            var1 = undefined;
            var9 = var5.bind(var1)(var7);
            var7 = var9.getBaseScheduleForRecurrence;
            var10 = var7.bind(var9)(var8, var3);
            var4 = var4[var13];
            var9 = var5.bind(var1)(var4);
            var7 = var9.areDatesIdentical;
            var5 = var10.startDate;
            var4 = var11.startDate;
            var5 = var7.bind(var9)(var5, var4);
            var4 = null;
            var12 = null;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var11.startDate;
case 2:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var14 = var7.bind(var1)(var5);
            var9 = var14.areDatesIdentical;
            var7 = var10.endDate;
            var5 = var11.endDate;
            var5 = var9.bind(var14)(var7, var5);
            var9 = null;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var11.endDate;
case 4:
            if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 2;
            var5 = var14[var5];
            var15 = var7.bind(var1)(var5);
            var5 = var15.extractTimestamp;
            var17 = var5.bind(var15)(var8);
            var5 = 1;
            var5 = var14[var5];
            var16 = var7.bind(var1)(var5);
            var15 = var16.createGuildEventException;
            var14 = {};
            var5 = global;
            var5 = var5.Date;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var22 = var7;
            var21 = var17;
            var5 = new var22[var5](var21, var20);
            var7 = var5 instanceof Object ? var5 : var7;
            var5 = var7.toISOString;
            var5 = var5.bind(var7)();
            var14['original_scheduled_start_time'] = var5;
            var7 = var4 == var12;
            var5 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var12.toISOString;
            var5 = var7.bind(var12)();
case 8:
            var14['scheduled_start_time'] = var5;
            var7 = var4 == var9;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var9.toISOString;
            var5 = var7.bind(var9)();
case 10:
            var14['scheduled_end_time'] = var5;
            var5 = false;
            var14['is_canceled'] = var5;
            var7 = var3.guild_id;
            var5 = var3.id;
            var5 = var15.bind(var16)(var14, var7, var5);
            return var5;
case 6:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var7 = var7.bind(var1)(var5);
            var5 = var7.areSchedulesIdentical;
            var5 = var5.bind(var7)(var11, var10);
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 1;
            var6 = var10[var6];
            var6 = var7.bind(var1)(var6);
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var6.updateGuildEventException;
            var5 = {};
            var11 = var4 == var12;
            var10 = undefined;
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var12.toISOString;
            var10 = var11.bind(var12)();
case 14:
            var5['scheduled_start_time'] = var10;
            var4 = var4 == var9;
            var1 = undefined;
            if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var9.toISOString;
            var1 = var4.bind(var9)();
case 16:
            var5['scheduled_end_time'] = var1;
            var1 = var2.is_canceled;
            var5['is_canceled'] = var1;
            var20 = var3.guild_id;
            var19 = var3.id;
            var22 = var6;
            var21 = var5;
            var18 = var8;
            var1 = var22[var7](var21, var20, var19, var18, var17);
            _fun0001_ip = 18; continue _fun0001;
case 12:
            var5 = var6.deleteGuildEventException;
            var4 = var3.guild_id;
            var3 = var3.id;
            var2 = var2.event_exception_id;
            var1 = var5.bind(var6)(var4, var3, var2);
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();