// app/modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function getExistingRsvp(arg1, arg2) {
        var3 = _closure1_slot2;
        var2 = var3.getId;
        var5 = var2.bind(var3)();
        var4 = _closure1_slot3;
        var3 = var4.getRsvp;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1, var5);
        return var1;
    };
    var _closure1_slot7 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var10 = 0;
    var4 = var8[var10];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.GuildScheduledEventUserResponses;
    var _closure1_slot4 = var6;
    var4 = var4.GuildScheduledEventStatusDone;
    var _closure1_slot5 = var4;
    var4 = {};
    var4['SERIES'] = var10;
    var6 = 'SERIES';
    var4[var10] = var6;
    var4['RECURRENCE'] = var9;
    var6 = 'RECURRENCE';
    var4[var9] = var6;
    var _closure1_slot6 = var4;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getExistingRsvp'] = var5;
    var3['ResponseOptions'] = var4;
    var4 = function getResponseOptions() {
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 3;
        var3 = var9[var4];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.uoorxs;
        var3 = var5.bind(var6)(var3);
        var2['name'] = var3;
        var3 = _closure1_slot6;
        var1 = var3.SERIES;
        var2['value'] = var1;
        var1 = new Array(2);
        var1[0] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var9[var4];
        var4 = var8.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.lwZCFR;
        var4 = var5.bind(var6)(var4);
        var2['name'] = var4;
        var3 = var3.RECURRENCE;
        var2['value'] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['getResponseOptions'] = var4;
    var2 = function handleRsvp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.eventId;
            var4 = var1.recurrenceId;
            var6 = var1.guildId;
            var5 = var1.updateRsvp;
            var11 = var1.openRsvpPicker;
            var2 = var1.onRsvp;
            var3 = _closure1_slot3;
            var1 = var3.getGuildScheduledEvent;
            var9 = var1.bind(var3)(var7);
            var3 = null;
            if(!(var3 != var9)) { _fun0001_ip = 439; continue _fun0001 }
 65:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 4;
            var10 = var13[var1];
            var1 = undefined;
            var14 = var12.bind(var1)(var10);
            var10 = var14.getEventException;
            var16 = var10.bind(var14)(var4, var7);
            var10 = 5;
            var10 = var13[var10];
            var12 = var12.bind(var1)(var10);
            var10 = var12.getEventSchedule;
            var10 = var10.bind(var12)(var9, var4);
            var15 = var10.startTime;
            var12 = var3 == var9;
            var10 = undefined;
            if(var12) { _fun0001_ip = 144; continue _fun0001 }
 138:
            var10 = var9.scheduled_start_time;
 144:
            var10 = var3 != var10;
            var13 = null;
            if(!var10) { _fun0001_ip = 232; continue _fun0001 }
 153:
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var10 = 6;
            var10 = var14[var10];
            var14 = var12.bind(var1)(var10);
            var12 = var14.getRecurrenceStatus;
            var10 = global;
            var18 = var10.Date;
            var17 = var3 == var9;
            var10 = undefined;
            if(var17) { _fun0001_ip = 202; continue _fun0001 }
 196:
            var10 = var9.scheduled_start_time;
 202:
            var17 = var18.prototype;
            var17 = Object.create(var17, {constructor: {value: var18}});
            var23 = var17;
            var22 = var10;
            var10 = new var23[var18](var22, var21);
            var10 = var10 instanceof Object ? var10 : var17;
            var13 = var12.bind(var14)(var16, var15, var10);
 232:
            if(!(var3 != var13)) { _fun0001_ip = 255; continue _fun0001 }
 236:
            var12 = _closure1_slot5;
            var10 = var12.has;
            var12 = var10.bind(var12)(var13);
            var10 = null;
            if(var12) { _fun0001_ip = 293; continue _fun0001 }
 255:
            if(!(var3 == var4)) { _fun0001_ip = 290; continue _fun0001 }
 259:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var12 = 6;
            var12 = var14[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.getNextRecurrenceIdInEvent;
            var4 = var12.bind(var13)(var9);
 290:
            var10 = var4;
 293:
            var13 = _closure1_slot7;
            var4 = var9.id;
            var4 = var13.bind(var1)(var4);
            var12 = var9.id;
            var12 = var13.bind(var1)(var12, var10);
            if(!(var3 != var10)) { _fun0001_ip = 388; continue _fun0001 }
 322:
            if(!(var3 == var12)) { _fun0001_ip = 334; continue _fun0001 }
 326:
            var9 = var11.bind(var1)(var9, var10);
            _fun0001_ip = 439; continue _fun0001;
 334:
            if(!(var3 == var4)) { _fun0001_ip = 350; continue _fun0001 }
 338:
            var9 = _closure1_slot4;
            var9 = var9.UNINTERESTED;
            _fun0001_ip = 360; continue _fun0001;
 350:
            var11 = _closure1_slot4;
            var9 = var11.INTERESTED;
 360:
            var23 = undefined;
            var22 = var7;
            var21 = var10;
            var20 = var6;
            var19 = var9;
            var9 = var23[var5](var22, var21, var20, var19, var18);
            if(!(var3 != var2)) { _fun0001_ip = 439; continue _fun0001 }
 382:
            var9 = var2.bind(var1)();
            _fun0001_ip = 439; continue _fun0001;
 388:
            if(!(var3 == var4)) { _fun0001_ip = 404; continue _fun0001 }
 392:
            var4 = _closure1_slot4;
            var4 = var4.INTERESTED;
            _fun0001_ip = 414; continue _fun0001;
 404:
            var8 = _closure1_slot4;
            var4 = var8.UNINTERESTED;
 414:
            var23 = undefined;
            var22 = var7;
            var21 = null;
            var20 = var6;
            var19 = var4;
            var4 = var23[var5](var22, var21, var20, var19, var18);
            if(!(var3 != var2)) { _fun0001_ip = 439; continue _fun0001 }
 435:
            var1 = var2.bind(var1)();
 439:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleRsvp'] = var2;
    return var1;
})();