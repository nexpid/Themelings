// app/modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var7 = var4.UpcomingGuildEventNoticeTypes;
    var _closure1_slot2 = var7;
    var7 = var4.NEW_EVENT_WINDOW_MILLISECONDS;
    var _closure1_slot3 = var7;
    var7 = var4.EVENT_STARTING_SOON_WINDOW_MILLISECONDS;
    var _closure1_slot4 = var7;
    var4 = var4.ACKED_RECENTLY_WINDOW_DAYS;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/GuildScheduledEventUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getNextShownUpcomingEventNoticeType(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var7 = arg2;
            var6 = arg3;
            var3 = arg4;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var10 = 1;
            var1 = var1[var10];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var1 = global;
            var11 = var1.Date;
            var17 = var9.scheduled_start_time;
            var8 = var11.prototype;
            var8 = Object.create(var8, {constructor: {value: var11}});
            var18 = var8;
            var5 = new var18[var11](var17, var16);
            var8 = var5 instanceof Object ? var5 : var8;
            var5 = var8.getTime;
            var8 = var5.bind(var8)();
            var5 = {};
            var11 = _closure1_slot4;
            var11 = var8 - var11;
            var5['start'] = var11;
            var5['end'] = var8;
            var14 = var12.isBetween;
            var13 = var5.start;
            var11 = var5.end;
            var11 = var14.bind(var12)(var13, var11);
            if(var11) { _fun0001_ip = 237; continue _fun0001 }
 128:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var11 = 2;
            var11 = var14[var11];
            var13 = var13.bind(var4)(var11);
            var11 = var13.extractTimestamp;
            var9 = var9.id;
            var11 = var11.bind(var13)(var9);
            var13 = var1.Math;
            var9 = var13.min;
            var1 = null;
            var14 = var11;
            if(!(var1 != var6)) { _fun0001_ip = 187; continue _fun0001 }
 184:
            var14 = var6;
 187:
            var6 = _closure1_slot3;
            var6 = var14 + var6;
            var9 = var9.bind(var13)(var6, var8);
            var6 = var12.isBetween;
            var6 = var6.bind(var12)(var11, var9);
            if(!var6) { _fun0001_ip = 235; continue _fun0001 }
 216:
            if(!(var1 == var7)) { _fun0001_ip = 235; continue _fun0001 }
 220:
            if(var3) { _fun0001_ip = 235; continue _fun0001 }
 223:
            var1 = _closure1_slot2;
            var1 = var1.NEW_EVENT;
            return var1;
 235:
            return var4;
 237:
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 255; continue _fun0001 }
 243:
            var1 = _closure1_slot2;
            var1 = var1.EVENT_STARTING_SOON;
            return var1;
 255:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = var1[var10];
            var6 = var9.bind(var4)(var6);
            var7 = var6.bind(var4)(var7);
            var11 = var7.isBetween;
            var6 = var5.start;
            var5 = var5.end;
            var6 = var11.bind(var7)(var6, var5);
            var5 = var7.isBetween;
            var1 = var1[var10];
            var1 = var9.bind(var4)(var1);
            var11 = var1.bind(var4)(var8);
            var10 = var11.subtract;
            var9 = _closure1_slot5;
            var1 = 'days';
            var1 = var10.bind(var11)(var9, var1);
            var5 = var5.bind(var7)(var1, var8);
            var1 = undefined;
            if(var6) { _fun0001_ip = 368; continue _fun0001 }
 350:
            if(!var5) { _fun0001_ip = 358; continue _fun0001 }
 353:
            var1 = undefined;
            if(!var3) { _fun0001_ip = 368; continue _fun0001 }
 358:
            var2 = _closure1_slot2;
            var1 = var2.EVENT_STARTING_SOON;
 368:
            return var1;
        }
    };
    var3['getNextShownUpcomingEventNoticeType'] = var2;
    return var1;
})();