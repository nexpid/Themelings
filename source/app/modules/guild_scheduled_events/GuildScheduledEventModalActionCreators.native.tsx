// app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function openGuildEventDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.eventId;
            var11 = var1.event;
            var2 = var1.onClose;
            var8 = var1.recurrenceId;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var4 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var5 = _closure1_slot0;
            var4 = 5;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 4;
            var4 = var3[var4];
            var3 = var3.paths;
            var5 = var5.bind(var1)(var4, var3);
            var4 = _closure1_slot5;
            var3 = {};
            var3['eventId'] = var10;
            var3['event'] = var11;
            var3['onCloseActionSheet'] = var2;
            var2 = null;
            if(!(var2 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 6;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.getNextRecurrenceIdInEvent;
            var8 = var9.bind(var10)(var11);
case 2:
            var9 = var2 != var8;
            var2 = undefined;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var8;
case 4:
            var3['recurrenceId'] = var2;
            var13 = 'stack';
            var17 = var7;
            var16 = var5;
            var15 = var4;
            var14 = var3;
            var2 = var17[var6](var16, var15, var14, var13, var12);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = function _transitionToEventDetailsFromInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = global;
                    var4 = var2.Promise;
                    var2 = var4.resolve;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=35);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot6;
                    var4 = {};
                    var6 = var3.id;
                    var4['eventId'] = var6;
                    var4['event'] = var3;
                    var3 = null;
                    var8 = var3 == var7;
                    var3 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = var7.recurrenceId;
case 12:
                    var4['recurrenceId'] = var6;
                    var4 = var5.bind(var3)(var4);
                    return var3;
case 10:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EXPLICIT_END_EVENT_SHEET_KEY;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
    var _closure1_slot5 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['openGuildEventDetails'] = var4;
    var4 = function transitionToEventDetailsFromInvite() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transitionToEventDetailsFromInvite'] = var4;
    var2 = function openEndEventModal(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 5;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 7;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot4;
        var2 = {};
        var7 = arg1;
        var2['channel'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openEndEventModal'] = var2;
    return var1;
})();