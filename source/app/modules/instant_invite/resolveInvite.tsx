// app/modules/instant_invite/resolveInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getExtendedInviteType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = null;
            var2 = var4 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.channel;
            var2 = var4 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var5.channel;
            var7 = var5.target_type;
            var6 = _closure1_slot7;
            var6 = var6.STREAM;
            if(!(var7 !== var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var5.target_type;
            var5 = _closure1_slot7;
            var5 = var5.EMBEDDED_APPLICATION;
            if(!(var6 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot4;
            var6 = var2.type;
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(var4 != var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot3;
            var2 = var2.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = _closure1_slot10;
            var2 = var2.SERVER_INVITE;
            _fun0001_ip = 14; continue _fun0001;
case 11:
            var4 = _closure1_slot10;
            var2 = var4.FRIEND_INVITE;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var4 = _closure1_slot10;
            var2 = var4.GDM_INVITE;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 7:
            var4 = _closure1_slot10;
            var2 = var4.APPLICATION;
case 16:
            _fun0001_ip = 17; continue _fun0001;
case 5:
            var3 = _closure1_slot10;
            var2 = var3.STREAM;
case 17:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var9 = var7.isPrivate;
    var _closure1_slot3 = var9;
    var7 = var7.isMultiUserDM;
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.InviteTargetTypes;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Endpoints;
    var _closure1_slot8 = var8;
    var8 = var7.AnalyticEvents;
    var _closure1_slot9 = var8;
    var8 = var7.LoggingInviteTypes;
    var _closure1_slot10 = var8;
    var7 = var7.AbortCodes;
    var _closure1_slot11 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/resolveInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function resolveInvite(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var3;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var10 = undefined;
            var8 = var6.bind(var10)(var5);
            var7 = var8.track;
            var5 = _closure1_slot9;
            var6 = var5.INVITE_OPENED;
            var5 = {};
            var5['invite_code'] = var3;
            var5 = var7.bind(var8)(var6, var5);
            var6 = _closure1_slot12;
            var5 = var6.has;
            var5 = var5.bind(var6)(var3);
            if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 6;
            var5 = var11[var5];
            var6 = var9.bind(var10)(var5);
            var5 = var6.parseExtraDataFromInviteKey;
            var12 = var5.bind(var6)(var3);
            var _closure2_slot3 = var12;
            var8 = {};
            var16 = var8;
            var15 = var4;
            var4 = copyDataProperties(var16, var15);
            var7 = true;
            var4 = 'with_counts';
            var8[var4] = var7;
            var4 = 'with_expiration';
            var8[var4] = var7;
            var5 = var12.guildScheduledEventId;
            var4 = 'guild_scheduled_event_id';
            var8[var4] = var5;
            var4 = 'with_permissions';
            var8[var4] = var7;
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var11[var4];
            var6 = var5.bind(var10)(var4);
            var5 = var6.get;
            var4 = {};
            var14 = _closure1_slot8;
            var13 = var14.INVITE;
            var12 = var12.baseCode;
            var12 = var13.bind(var14)(var12);
            var4['url'] = var12;
            var4['query'] = var8;
            var4['oldFormErrors'] = var7;
            var7 = {};
            var8 = 8;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.NetworkActionNames;
            var8 = var8.INVITE_RESOLVE;
            var7['event'] = var8;
            var8 = function properties(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var9 = arg1;
                    var8 = var9.body;
                    var1 = var9.body;
                    var5 = null;
                    var2 = var5 == var1;
                    var10 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var7 = var1.code;
case 20:
                    var1 = _closure1_slot11;
                    var6 = var1.USER_BANNED;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var10)(var1);
                    var2 = var3.exact;
                    var1 = {};
                    var9 = var9.ok;
                    var1['resolved'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var11 = var8.guild;
                    var12 = var5 == var11;
                    var9 = undefined;
                    if(var12) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                    var9 = var11.id;
case 22:
                    var1['guild_id'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var11 = var8.channel;
                    var12 = var5 == var11;
                    var9 = undefined;
                    if(var12) { _fun0003_ip = 25; continue _fun0003 }
case 27:
                    var9 = var11.id;
case 25:
                    var1['channel_id'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 28; continue _fun0003 }
case 15:
                    var11 = var8.channel;
                    var12 = var5 == var11;
                    var9 = undefined;
                    if(var12) { _fun0003_ip = 28; continue _fun0003 }
case 5:
                    var9 = var11.type;
case 28:
                    var1['channel_type'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var11 = var8.inviter;
                    var12 = var5 == var11;
                    var9 = undefined;
                    if(var12) { _fun0003_ip = 29; continue _fun0003 }
case 31:
                    var9 = var11.id;
case 29:
                    var1['inviter_id'] = var9;
                    var11 = _closure2_slot3;
                    var11 = var11.baseCode;
                    var1['code'] = var11;
                    var11 = _closure2_slot2;
                    var12 = var5 == var11;
                    var11 = undefined;
                    if(var12) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var12 = _closure2_slot2;
                    var11 = var12.inputValue;
case 32:
                    var1['input_value'] = var11;
                    var9 = _closure2_slot1;
                    var1['location'] = var9;
                    var11 = _closure1_slot5;
                    var9 = var11.isAuthenticated;
                    var9 = var9.bind(var11)();
                    var1['authenticated'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var9 = var8.approximate_member_count;
case 34:
                    var1['size_total'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var9 = var8.approximate_presence_count;
case 36:
                    var1['size_online'] = var9;
                    var11 = var5 == var8;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var11 = var8.target_user;
                    var12 = var5 == var11;
                    var9 = undefined;
                    if(var12) { _fun0003_ip = 38; continue _fun0003 }
case 40:
                    var9 = var11.id;
case 38:
                    var1['destination_user_id'] = var9;
                    var9 = _closure1_slot13;
                    var9 = var9.bind(var10)(var8);
                    var1['invite_type'] = var9;
                    var6 = var7 === var6;
                    var1['user_banned'] = var6;
                    var7 = _closure1_slot6;
                    var6 = var7.getGuild;
                    var9 = var5 == var8;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var8 = var8.guild;
                    var9 = var5 == var8;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 41; continue _fun0003 }
case 43:
                    var4 = var8.id;
case 41:
                    var4 = var6.bind(var7)(var4);
                    var4 = var5 != var4;
                    var1['user_is_member'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7['properties'] = var8;
            var4['trackedActionData'] = var7;
            var7 = false;
            var4['rejectWithError'] = var7;
            var7 = var5.bind(var6)(var4);
            var6 = var7.then;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.body;
                    var1 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var1)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var14 = undefined;
                    var7 = var5.bind(var14)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot9;
                    var5 = var4.INVITE_RESOLVED;
                    var4 = {};
                    var8 = true;
                    var4['resolved'] = var8;
                    var10 = var3.guild;
                    var11 = var9 != var10;
                    var10 = null;
                    if(!var11) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var11 = var3.guild;
                    var10 = var11.id;
case 46:
                    var4['guild_id'] = var10;
                    var10 = var3.channel;
                    var11 = var9 != var10;
                    var10 = null;
                    if(!var11) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var11 = var3.channel;
                    var10 = var11.id;
case 48:
                    var4['channel_id'] = var10;
                    var10 = var3.channel;
                    var11 = var9 != var10;
                    var10 = null;
                    if(!var11) { _fun0004_ip = 50; continue _fun0004 }
case 25:
                    var11 = var3.channel;
                    var10 = var11.type;
case 50:
                    var4['channel_type'] = var10;
                    var11 = var3.inviter;
                    var10 = null;
                    if(!var11) { _fun0004_ip = 17; continue _fun0004 }
case 51:
                    var11 = var3.inviter;
                    var10 = var11.id;
case 17:
                    var4['inviter_id'] = var10;
                    var10 = _closure2_slot3;
                    var10 = var10.baseCode;
                    var4['code'] = var10;
                    var10 = _closure2_slot2;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var11 = _closure2_slot2;
                    var10 = var11.inputValue;
case 52:
                    var4['input_value'] = var10;
                    var10 = _closure2_slot1;
                    var4['location'] = var10;
                    var11 = _closure1_slot5;
                    var10 = var11.isAuthenticated;
                    var10 = var10.bind(var11)();
                    var4['authenticated'] = var10;
                    var10 = var3.approximate_member_count;
                    var4['size_total'] = var10;
                    var10 = var3.approximate_presence_count;
                    var4['size_online'] = var10;
                    var10 = var3.target_user;
                    var11 = var9 != var10;
                    var10 = null;
                    if(!var11) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var11 = var3.target_user;
                    var10 = var11.id;
case 54:
                    var4['destination_user_id'] = var10;
                    var10 = _closure1_slot13;
                    var10 = var10.bind(var14)(var3);
                    var4['invite_type'] = var10;
                    var11 = _closure1_slot6;
                    var10 = var11.getGuild;
                    var12 = var9 == var3;
                    var1 = undefined;
                    if(var12) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var12 = var3.guild;
                    var13 = var9 == var12;
                    var1 = undefined;
                    if(var13) { _fun0004_ip = 56; continue _fun0004 }
case 58:
                    var1 = var12.id;
case 56:
                    var1 = var10.bind(var11)(var1);
                    var1 = var9 != var1;
                    var4['user_is_member'] = var1;
                    var1 = {};
                    var1['flush'] = var8;
                    var1 = var6.bind(var7)(var5, var4, var1);
case 44:
                    var1 = {};
                    var1['invite'] = var3;
                    var2 = _closure2_slot0;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var9 = arg1;
                    var1 = var9.body;
                    var4 = null;
                    var2 = var4 != var1;
                    if(!var2) { _fun0005_ip = 59; continue _fun0005 }
case 3:
                    var1 = var9.body;
                    var3 = var1.code;
                    var1 = _closure1_slot11;
                    var1 = var1.USER_BANNED;
                    var2 = var3 === var1;
case 59:
                    var1 = _closure2_slot1;
                    if(!(var4 != var1)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 5;
                    var5 = var5[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot9;
                    var6 = var5.INVITE_RESOLVED;
                    var5 = {};
                    var11 = false;
                    var5['resolved'] = var11;
                    var11 = _closure2_slot3;
                    var11 = var11.baseCode;
                    var5['code'] = var11;
                    var11 = _closure2_slot2;
                    var12 = var4 == var11;
                    var11 = undefined;
                    if(var12) { _fun0005_ip = 14; continue _fun0005 }
case 11:
                    var12 = _closure2_slot2;
                    var11 = var12.inputValue;
case 14:
                    var5['input_value'] = var11;
                    var11 = _closure2_slot1;
                    var5['location'] = var11;
                    var11 = _closure1_slot5;
                    var10 = var11.isAuthenticated;
                    var10 = var10.bind(var11)();
                    var5['authenticated'] = var10;
                    var5['user_banned'] = var2;
                    var11 = var9.body;
                    var12 = var4 == var11;
                    var10 = undefined;
                    if(var12) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    var10 = var11.code;
case 62:
                    var5['error_code'] = var10;
                    var9 = var9.body;
                    var10 = var4 == var9;
                    var1 = undefined;
                    if(var10) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var1 = var9.message;
case 64:
                    var5['error_message'] = var1;
                    var1 = {};
                    var9 = true;
                    var1['flush'] = var9;
                    var1 = var7.bind(var8)(var6, var5, var1);
case 60:
                    var1 = {};
                    var1['invite'] = var4;
                    var3 = _closure2_slot0;
                    var1['code'] = var3;
                    var1['banned'] = var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5, var4);
            var4 = var5.finally;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.delete;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot12;
            var4 = var5.set;
            var4 = var4.bind(var5)(var3, var2);
            return var2;
case 18:
            var2 = _closure1_slot12;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();