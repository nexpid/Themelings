// app/modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function openCreateOrEditGuildEventModal(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var8 = var2.guildEvent;
            var10 = var2.channel;
            var3 = var2.onClose;
            var _closure2_slot0 = var3;
            var7 = var2.recurrenceId;
            var6 = function handleClose() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot12;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
case 2:
                    return var1;
                }
            };
            var3 = null;
            if(!(var3 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 14;
            var4 = var2[var4];
            var12 = undefined;
            var9 = var5.bind(var12)(var4);
            var4 = var9.hideAllActionSheets;
            var4 = var4.bind(var9)();
            var4 = 10;
            var4 = var2[var4];
            var9 = var5.bind(var12)(var4);
            var5 = var9.pushLazy;
            var11 = _closure1_slot0;
            var4 = 13;
            var4 = var2[var4];
            var11 = var11.bind(var12)(var4);
            var4 = 15;
            var4 = var2[var4];
            var2 = var2.paths;
            var4 = var11.bind(var12)(var4, var2);
            var2 = {};
            var11 = arg1;
            var2['guild'] = var11;
            var2['targetChannel'] = var10;
            var2['initialGuildEvent'] = var8;
            var2['onCloseModal'] = var6;
            var1 = _closure1_slot12;
            var1 = var5.bind(var9)(var4, var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 11;
            var5 = var2[var5];
            var10 = undefined;
            var9 = var4.bind(var10)(var5);
            var5 = var3 != var8;
            var3 = 'recurrence editing requires a guild event';
            var3 = var9.bind(var10)(var5, var3);
            var3 = 10;
            var3 = var2[var3];
            var5 = var4.bind(var10)(var3);
            var4 = var5.pushLazy;
            var9 = _closure1_slot0;
            var3 = 13;
            var3 = var2[var3];
            var9 = var9.bind(var10)(var3);
            var3 = 12;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var9.bind(var10)(var3, var2);
            var2 = {};
            var2['guildEvent'] = var8;
            var2['recurrenceId'] = var7;
            var2['onCloseModal'] = var6;
            var1 = _closure1_slot12;
            var1 = var4.bind(var5)(var3, var2, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var8;
    var7 = function openStartGuildEventModal(arg1, arg2, arg3) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var4 = var6.hideAllActionSheets;
        var4 = var4.bind(var6)();
        var4 = 10;
        var4 = var3[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var7 = _closure1_slot0;
        var4 = 13;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 17;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = {};
        var7 = arg1;
        var3['event'] = var7;
        var7 = arg2;
        var3['recurrenceId'] = var7;
        var7 = arg3;
        var3['onCloseActionSheet'] = var7;
        var2 = _closure1_slot14;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot19 = var7;
    var6 = function openDeleteGuildEventActionSheet(arg1, arg2, arg3) {
        var4 = _closure1_slot4;
        var3 = var4.lazy;
        var1 = function() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 13;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 18;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 19;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot17;
        var2 = {};
        var7 = arg1;
        var2['eventId'] = var7;
        var7 = arg2;
        var2['guildId'] = var7;
        var7 = arg3;
        var2['recurrenceId'] = var7;
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'DeleteEventAlert';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot20 = var6;
    var5 = function updateRsvp(arg1, arg2, arg3, arg4) {
        var8 = arg4;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 20;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.updateRsvp;
        var13 = arg1;
        var12 = arg2;
        var11 = arg3;
        var9 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = null;
                var1 = arg1;
                var4 = var2 != var1;
                var1 = var4;
                if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = _closure2_slot0;
                var2 = _closure1_slot11;
                var2 = var2.INTERESTED;
                var1 = var3 === var2;
case 7:
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var3.open;
                var1 = {};
                var5 = 'GUILD_EVENT_INTERESTED_NOTIFICATION';
                if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = 'ERROR_OCCURRED_TRY_AGAIN';
case 11:
                var1['key'] = var5;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 22;
                var9 = var11[var5];
                var9 = var8.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var11[var5];
                var5 = var8.bind(var6)(var5);
                var8 = var5.t;
                if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = var8.osvXlZ;
                var5 = var9.bind(var10)(var5);
                _fun0003_ip = 4; continue _fun0003;
case 13:
                var8 = var8.fEptJC;
                var5 = var9.bind(var10)(var8);
case 4:
                var1['content'] = var5;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = 24;
                var4 = var8[var4];
                _fun0003_ip = 17; continue _fun0003;
case 15:
                var7 = 23;
                var4 = var8[var7];
case 17:
                var4 = var5.bind(var6)(var4);
                var1['icon'] = var4;
                var1 = var2.bind(var3)(var1);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var14 = var7;
        var10 = var8;
        var2 = var14[var6](var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot21 = var5;
    var4 = function handleGuildScheduledEventRsvp(arg1, arg2, arg3, arg4) {
        var8 = arg1;
        var7 = arg3;
        var5 = arg4;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 25;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.handleRsvp;
        var2 = {};
        var2['eventId'] = var8;
        var8 = arg2;
        var2['recurrenceId'] = var8;
        var2['guildId'] = var7;
        var7 = function updateRsvp(arg1, arg2, arg3, arg4) {
            var6 = _closure1_slot21;
            var10 = _closure2_slot0;
            var8 = _closure2_slot1;
            var1 = undefined;
            var9 = arg2;
            var7 = arg4;
            var11 = undefined;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var2['updateRsvp'] = var7;
        var6 = function openRsvpPicker(arg1, arg2) {
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var4 = var2[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var4 = _closure1_slot0;
            var3 = 13;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 26;
            var3 = var2[var3];
            var2 = var2.paths;
            var11 = var4.bind(var1)(var3, var2);
            var4 = {};
            var2 = arg1;
            var4['event'] = var2;
            var2 = arg2;
            var4['recurrenceId'] = var2;
            var3 = _closure2_slot1;
            var4['guildId'] = var3;
            var2 = _closure2_slot2;
            var4['onRsvp'] = var2;
            var10 = 'GuildEventRsvpPickerActionSheet';
            var8 = 'stack';
            var12 = var7;
            var9 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            return var1;
        };
        var2['openRsvpPicker'] = var6;
        var2['onRsvp'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var4;
    var1 = function _transitionToEventDetailsFromInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 31;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.transitionToGuildFromEventInvite;
                    var2 = var2.bind(var5)(var7);
                    SaveGenerator(address=53);
case 20:
                    return var2;
case 3:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 21:
                    var6 = var7.channel_id;
                    var5 = null;
                    var5 = var5 != var6;
                    if(!var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var6 = _closure1_slot9;
                    var5 = var6.bind(var3)(var7);
case 22:
                    if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 32;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openGuildEventDetails;
                    var4 = {};
                    var8 = var7.id;
                    var4['eventId'] = var8;
                    var4['event'] = var7;
                    var7 = arg2;
                    var4['recurrenceId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 24:
                    return var3;
case 14:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var13 = var11[var9];
    var9 = metroImportAll;
    var9 = var9.bind(var1)(var13);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var13 = var11[var9];
    var13 = var10.bind(var1)(var13);
    var14 = var13.isGuildEventEnded;
    var _closure1_slot8 = var14;
    var13 = var13.isGuildScheduledEventActive;
    var _closure1_slot9 = var13;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.GuildScheduledEventUserResponses;
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.CREATE_GUILD_EVENT_MODAL_KEY;
    var _closure1_slot12 = var12;
    var12 = var9.GUILD_EVENTS_LIST_ACTION_SHEET_KEY;
    var _closure1_slot13 = var12;
    var9 = var9.START_EVENT_MODAL_KEY;
    var _closure1_slot14 = var9;
    var9 = 8;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.InstantInviteSources;
    var _closure1_slot15 = var12;
    var9 = var9.Routes;
    var _closure1_slot16 = var9;
    var9 = 9;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.jsx;
    var _closure1_slot17 = var9;
    var9 = 39;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['openCreateOrEditGuildEventModal'] = var8;
    var8 = function openGuildEventListActionSheet(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 13;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 16;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot13;
        var2 = {};
        var7 = arg1;
        var2['guild'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openGuildEventListActionSheet'] = var8;
    var8 = function closeGuildEventListActionSheet() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.hideActionSheet;
        var2 = _closure1_slot13;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['closeGuildEventListActionSheet'] = var8;
    var3['openStartGuildEventModal'] = var7;
    var3['openDeleteGuildEventActionSheet'] = var6;
    var3['updateRsvp'] = var5;
    var3['handleGuildScheduledEventRsvp'] = var4;
    var4 = function openShareEvent(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var10 = arg2;
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var1 = var6.channel_id;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var7 = _closure1_slot6;
            var3 = var7.getDefaultChannel;
            var2 = var6.guild_id;
            var4 = var3.bind(var7)(var2);
case 26:
            if(!(var1 == var4)) { _fun0005_ip = 28; continue _fun0005 }
case 2:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 21;
            var2 = var12[var2];
            var9 = undefined;
            var7 = var11.bind(var9)(var2);
            var3 = var7.open;
            var2 = {};
            var8 = 'ERROR_OCCURRED_TRY_AGAIN';
            var2['key'] = var8;
            var15 = _closure1_slot0;
            var8 = 22;
            var13 = var12[var8];
            var13 = var15.bind(var9)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var8 = var12[var8];
            var8 = var15.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.fEptJC;
            var8 = var13.bind(var14)(var8);
            var2['content'] = var8;
            var8 = 23;
            var8 = var12[var8];
            var8 = var11.bind(var9)(var8);
            var2['icon'] = var8;
            var2 = var3.bind(var7)(var2);
            _fun0005_ip = 29; continue _fun0005;
case 28:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 27;
            var2 = var3[var2];
            var3 = undefined;
            var7 = var7.bind(var3)(var2);
            var2 = var7.isGuildEventInvitable;
            var7 = var2.bind(var7)(var6);
            if(var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var1 = var1 != var10;
            if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var2 = '';
            var1 = var2 !== var10;
case 32:
            if(!var1) { _fun0005_ip = 29; continue _fun0005 }
case 34:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 28;
            var1 = var8[var1];
            var9 = var2.bind(var3)(var1);
            var1 = var9.copy;
            var1 = var1.bind(var9)(var10);
            var1 = 29;
            var1 = var8[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.presentLinkCopied;
            var1 = var1.bind(var2)();
            _fun0005_ip = 29; continue _fun0005;
case 30:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 30;
            var1 = var8[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.showInstantInviteActionSheet;
            var1 = {};
            var1['createInvite'] = var7;
            var6 = var6.id;
            var1['guildScheduledEventId'] = var6;
            var6 = 'stack';
            var1['stackingBehavior'] = var6;
            var5 = _closure1_slot15;
            var5 = var5.GUILD_SCHEDULED_EVENT;
            var1['source'] = var5;
            var1 = var2.bind(var3)(var4, var1);
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var3['openShareEvent'] = var4;
    var4 = function transitionToEventDetailsFromInvite() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transitionToEventDetailsFromInvite'] = var4;
    var2 = function showGuildEventModeratorActionSheet(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var4;
            var5 = var9.guild_id;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot7;
            var1 = var3.getGuild;
            var12 = var1.bind(var3)(var5);
            var _closure2_slot3 = var12;
            var5 = _closure1_slot10;
            var3 = var5.isInterestedInEventRecurrence;
            var1 = var9.id;
            var13 = var3.bind(var5)(var1, var4);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var3);
            var5 = var7.getEventException;
            var3 = var9.id;
            var7 = var5.bind(var7)(var4, var3);
            var _closure2_slot4 = var7;
            var3 = null;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var5 = var7.is_canceled;
case 35:
            var11 = var3 != var5;
            if(!var11) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var11 = var5;
case 37:
            var5 = _closure1_slot9;
            var10 = var5.bind(var1)(var9);
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 34;
            var5 = var14[var5];
            var14 = var8.bind(var1)(var5);
            var8 = var14.getEventTimeData;
            var5 = var9.scheduled_start_time;
            var5 = var8.bind(var14)(var5);
            var14 = var5.withinStartWindow;
            var5 = new Array(0);
            if(!(var3 != var7)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var15 = var7.is_canceled;
            var8 = null;
            if(var15) { _fun0006_ip = 41; continue _fun0006 }
case 39:
            var15 = {};
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 22;
            var18 = var20[var16];
            var18 = var17.bind(var1)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var20[var16];
            var16 = var17.bind(var1)(var16);
            var17 = var16.t;
            if(var13) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var16 = var17.FXixvL;
            var16 = var18.bind(var19)(var16);
            _fun0006_ip = 44; continue _fun0006;
case 42:
            var17 = var17.7M5gaG;
            var16 = var18.bind(var19)(var17);
case 44:
            var15['label'] = var16;
            var16 = function onPress() {
                var5 = _closure1_slot22;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var15['onPress'] = var16;
            var8 = var15;
case 41:
            if(!(var3 != var12)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var12 = arg2;
            if(!var12) { _fun0006_ip = 45; continue _fun0006 }
case 47:
            var12 = _closure1_slot8;
            var12 = var12.bind(var1)(var9);
            if(var12) { _fun0006_ip = 45; continue _fun0006 }
case 48:
            if(var10) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            if(!var14) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            if(var13) { _fun0006_ip = 51; continue _fun0006 }
case 53:
            if(!(var3 != var8)) { _fun0006_ip = 49; continue _fun0006 }
case 54:
            var12 = var5.push;
            var12 = var12.bind(var5)(var8);
            _fun0006_ip = 49; continue _fun0006;
case 51:
            if(var11) { _fun0006_ip = 49; continue _fun0006 }
case 55:
            var15 = var5.push;
            var12 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 22;
            var17 = var20[var16];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var1)(var16);
            var16 = var16.t;
            var16 = var16.cK1GGR;
            var16 = var17.bind(var18)(var16);
            var12['label'] = var16;
            var16 = function onPress() {
                var4 = _closure1_slot19;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var12['onPress'] = var16;
            var12 = var15.bind(var5)(var12);
case 49:
            var12 = !var10;
            if(!var12) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var12 = var14;
case 56:
            if(!var12) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var12 = !var13;
case 58:
            if(var12) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var12 = var3 == var8;
case 60:
            if(var12) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var12 = var5.push;
            var12 = var12.bind(var5)(var8);
case 62:
            var12 = var3 == var4;
            if(var12) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var12 = var11;
case 64:
            if(var12) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var13 = var5.push;
            var12 = {};
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 22;
            var15 = var18[var14];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var1)(var14);
            var14 = var14.t;
            var14 = var14.wmVmXF;
            var14 = var15.bind(var16)(var14);
            var12['label'] = var14;
            var14 = function onPress() {
                var4 = _closure1_slot18;
                var3 = _closure2_slot3;
                var2 = {};
                var5 = _closure2_slot0;
                var2['guildEvent'] = var5;
                var1 = _closure2_slot1;
                var2['recurrenceId'] = var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var12['onPress'] = var14;
            var12 = var13.bind(var5)(var12);
case 66:
            if(var11) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var12 = var5.push;
            var11 = {};
            if(!(var3 == var4)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 22;
            var14 = var17[var13];
            var14 = var16.bind(var1)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.Rgy2dX;
            var13 = var14.bind(var15)(var13);
            _fun0006_ip = 72; continue _fun0006;
case 70:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 22;
            var15 = var18[var14];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var1)(var14);
            var14 = var14.t;
            var14 = var14.BW1Qoq;
            var13 = var15.bind(var16)(var14);
case 72:
            var11['label'] = var13;
            var13 = function onPress() {
                var4 = _closure1_slot18;
                var3 = _closure2_slot3;
                var2 = {};
                var1 = _closure2_slot0;
                var2['guildEvent'] = var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11['onPress'] = var13;
            var11 = var12.bind(var5)(var11);
case 68:
            if(var10) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            if(!(var3 != var4)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            if(!(var3 != var7)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var7 = var7.is_canceled;
            if(var7) { _fun0006_ip = 79; continue _fun0006 }
case 77:
            var10 = var5.push;
            var7 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var12 = var15[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.tqCll5;
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var11 = true;
            var7['isDestructive'] = var11;
            var11 = function onPress() {
                var5 = _closure1_slot20;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var3 = var2.guild_id;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7['onPress'] = var11;
            var7 = var10.bind(var5)(var7);
            _fun0006_ip = 75; continue _fun0006;
case 79:
            var10 = var5.push;
            var7 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var12 = var15[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.b8606O;
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var11 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var10 = _closure2_slot4;
                var3 = _closure2_slot3;
                var9 = var3.id;
                var3 = _closure2_slot0;
                var8 = var3.id;
                var7 = _closure2_slot1;
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var7['onPress'] = var11;
            var7 = var10.bind(var5)(var7);
case 75:
            var10 = var5.push;
            var7 = {};
            var11 = var9.recurrence_rule;
            if(!(var3 == var11)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var12 = var15[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.B9sJLS;
            var11 = var12.bind(var13)(var11);
            _fun0006_ip = 82; continue _fun0006;
case 80:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 22;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12.wr33ra;
            var11 = var13.bind(var14)(var12);
case 82:
            var7['label'] = var11;
            var11 = true;
            var7['isDestructive'] = var11;
            var11 = function onPress() {
                var4 = _closure1_slot20;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = var1.guild_id;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2, var1);
                return var1;
            };
            var7['onPress'] = var11;
            var7 = var10.bind(var5)(var7);
            _fun0006_ip = 83; continue _fun0006;
case 73:
            var10 = var5.push;
            var7 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var12 = var15[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.qaYzPD;
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var11 = true;
            var7['isDestructive'] = var11;
            var11 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.endEvent;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = var2.guild_id;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var7['onPress'] = var11;
            var7 = var10.bind(var5)(var7);
            _fun0006_ip = 83; continue _fun0006;
case 45:
            if(!(var3 != var8)) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var7 = var5.push;
            var7 = var7.bind(var5)(var8);
case 83:
            var8 = var5.push;
            var7 = {};
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 22;
            var12 = var10[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var11];
            var10 = var14.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.IBA5wc;
            var10 = var12.bind(var13)(var10);
            var7['label'] = var10;
            var10 = true;
            var7['isDestructive'] = var10;
            var10 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showReportModalForGuildScheduledEvent;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var7 = var8.bind(var5)(var7);
            var8 = var5.push;
            var7 = {};
            var9 = var9.recurrence_rule;
            if(!(var3 == var9)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var11];
            var10 = var13.bind(var1)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var9[var11];
            var9 = var13.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.9o+VKy;
            var9 = var10.bind(var12)(var9);
            _fun0006_ip = 87; continue _fun0006;
case 85:
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var11];
            var12 = var14.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var11];
            var10 = var14.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.AYnhBw;
            var9 = var12.bind(var13)(var10);
case 87:
            var7['label'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.copy;
                var2 = global;
                var6 = var2.location;
                var9 = var6.protocol;
                var6 = var2.location;
                var8 = var6.host;
                var11 = _closure1_slot16;
                var10 = var11.GUILD_EVENT_DETAILS;
                var7 = _closure2_slot2;
                var5 = _closure2_slot0;
                var6 = var5.id;
                var5 = null;
                var12 = var10.bind(var11)(var7, var6, var5);
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var16 = '';
                var14 = '//';
                var15 = var9;
                var13 = var8;
                var2 = var16[var6](var15, var14, var13, var12, var11);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var9;
            var7 = var8.bind(var5)(var7);
            if(!(var3 != var4)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var8 = var5.push;
            var7 = {};
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var11];
            var10 = var13.bind(var1)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var9[var11];
            var9 = var13.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.QLtDqK;
            var9 = var10.bind(var12)(var9);
            var7['label'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.copy;
                var2 = global;
                var6 = var2.location;
                var9 = var6.protocol;
                var6 = var2.location;
                var8 = var6.host;
                var11 = _closure1_slot16;
                var10 = var11.GUILD_EVENT_DETAILS;
                var7 = _closure2_slot2;
                var6 = _closure2_slot0;
                var6 = var6.id;
                var5 = _closure2_slot1;
                var12 = var10.bind(var11)(var7, var6, var5);
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var16 = '';
                var14 = '//';
                var15 = var9;
                var13 = var8;
                var2 = var16[var6](var15, var14, var13, var12, var11);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var9;
            var7 = var8.bind(var5)(var7);
case 88:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 37;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.DeveloperMode;
            var7 = var8.getSetting;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var8 = var5.push;
            var7 = {};
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var11];
            var10 = var13.bind(var1)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var9[var11];
            var9 = var13.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.WZwPOz;
            var9 = var10.bind(var12)(var9);
            var7['label'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var9;
            var7 = var8.bind(var5)(var7);
            if(!(var3 != var4)) { _fun0006_ip = 90; continue _fun0006 }
case 92:
            var4 = var5.push;
            var3 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var11];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.NZRGQk;
            var7 = var8.bind(var9)(var7);
            var3['label'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.copy;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var6;
            var3 = var4.bind(var5)(var3);
case 90:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 38;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.showSimpleActionSheet;
            var2 = {'key': 'GuildEvent', 'stackingBehavior': 'stack'};
            var2['options'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['showGuildEventModeratorActionSheet'] = var2;
    return var1;
})();