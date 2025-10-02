// app/modules/hang_status/HangStatusActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = function _getAnalyticsProperties() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var4 = _closure1_slot4;
            var1 = var4.getVoiceChannelId;
            var4 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var4;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4;
case 2:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function clearHangStatus(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 7;
        var2 = var4[var1];
        var1 = undefined;
        var7 = var3.bind(var1)(var2);
        var5 = var7.dispatch;
        var2 = {};
        var8 = 'CLEAR_HANG_STATUS';
        var2['type'] = var8;
        var8 = arg2;
        var2['saveAsDefault'] = var8;
        var2 = var5.bind(var7)(var2);
        var2 = 8;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.CLEAR_HANG_STATUS;
        var2 = {};
        var7 = global;
        var8 = var7.Boolean;
        var7 = arg1;
        var7 = var8.bind(var1)(var7);
        var2['manual_update'] = var7;
        var6 = _closure1_slot8;
        var9 = var6.bind(var1)();
        var10 = var2;
        var6 = copyDataProperties(var10, var9);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.HangStatusTypes;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/hang_status/HangStatusActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function updateHangStatus(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var4 = _closure1_slot4;
            var1 = var4.getVoiceChannelId;
            var1 = var1.bind(var4)();
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            var10 = undefined;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var10 = var3.guild_id;
case 4:
            if(!(var2 != var7)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(!(var2 == var10)) { _fun0002_ip = 7; continue _fun0002 }
case 5:
            var3 = _closure1_slot9;
            var2 = false;
            var2 = var3.bind(var1)(var2, var8);
            _fun0002_ip = 8; continue _fun0002;
case 7:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var9 = var3.bind(var1)(var2);
            var5 = var9.dispatch;
            var2 = {};
            var11 = 'UPDATE_HANG_STATUS';
            var2['type'] = var11;
            var2['status'] = var7;
            var2['guildId'] = var10;
            var2['saveAsDefault'] = var8;
            var2 = var5.bind(var9)(var2);
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.SET_HANG_STATUS;
            var2 = {};
            var2['status_type'] = var7;
            var7 = global;
            var7 = var7.Boolean;
            var7 = var7.bind(var1)(var8);
            var2['manual_update'] = var7;
            var6 = _closure1_slot8;
            var12 = var6.bind(var1)();
            var13 = var2;
            var6 = copyDataProperties(var13, var12);
            var2 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['updateHangStatus'] = var5;
    var5 = function updateCustomHangStatus(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var8 = arg3;
            var1 = '';
            if(!(var1 !== var9)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = null;
            if(!(var1 == var7)) { _fun0003_ip = 11; continue _fun0003 }
case 9:
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1, var8);
            _fun0003_ip = 12; continue _fun0003;
case 11:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var6 = undefined;
            var10 = var2.bind(var6)(var1);
            var4 = var10.dispatch;
            var1 = {};
            var11 = 'UPDATE_HANG_STATUS_CUSTOM';
            var1['type'] = var11;
            var1['emoji'] = var7;
            var1['status'] = var9;
            var1['saveAsDefault'] = var8;
            var1 = var4.bind(var10)(var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var10 = _closure1_slot6;
            var10 = var10.CUSTOM;
            var1['status_type'] = var10;
            var1['custom_status_text'] = var9;
            var9 = var7.id;
            var1['custom_status_emoji_id'] = var9;
            var7 = var7.name;
            var1['custom_status_emoji_name'] = var7;
            var7 = global;
            var7 = var7.Boolean;
            var7 = var7.bind(var6)(var8);
            var1['manual_update'] = var7;
            var5 = _closure1_slot8;
            var12 = var5.bind(var6)();
            var13 = var1;
            var5 = copyDataProperties(var13, var12);
            var1 = var3.bind(var4)(var2, var1);
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateCustomHangStatus'] = var5;
    var5 = function updateGameActivityHangStatus(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 == var9)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1, var8);
            _fun0004_ip = 15; continue _fun0004;
case 13:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var4 = var7.dispatch;
            var1 = {};
            var10 = 'UPDATE_HANG_STATUS_GAME_ACTIVITY';
            var1['type'] = var10;
            var1['applicationId'] = var9;
            var1['saveAsDefault'] = var8;
            var1 = var4.bind(var7)(var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var7 = 'game_activity';
            var1['status_type'] = var7;
            var7 = global;
            var7 = var7.Boolean;
            var7 = var7.bind(var6)(var8);
            var1['manual_update'] = var7;
            var5 = _closure1_slot8;
            var11 = var5.bind(var6)();
            var12 = var1;
            var5 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1);
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateGameActivityHangStatus'] = var5;
    var3['clearHangStatus'] = var4;
    var4 = function deleteInvalidHangStatuses() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = _closure1_slot5;
            var2 = var5.getCustomHangStatus;
            var2 = var2.bind(var5)();
            var4 = new Array(1);
            var4[0] = var2;
            var2 = var5.getRecentStatuses;
            var7 = var2.bind(var5)();
            var6 = 1;
            var8 = var4;
            var6 = arraySpread(var8, var7, var6);
            var2 = var5.getFavoritedStatuses;
            var7 = var2.bind(var5)();
            var8 = var4;
            var2 = arraySpread(var8, var7, var6);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var4 = null;
                    var1 = var4 != var3;
                    if(!var1) { _fun0006_ip = 11; continue _fun0006 }
case 14:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.bind(var5)(var3);
                    var1 = !var2;
case 11:
                    if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var2 = var3.emoji;
                    var1 = var4 != var2;
case 16:
                    if(!var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var5 = var3.emoji;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var2 = var5.id;
case 20:
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var6 = _closure1_slot2;
                    var5 = var6.getCustomEmojiById;
                    var3 = var3.emoji;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
case 22:
                    var1 = var2;
case 18:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'DELETE_INVALID_HANG_STATUSES';
            var1['type'] = var5;
            var1['statuses'] = var4;
            var1 = var2.bind(var3)(var1);
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var3['deleteInvalidHangStatuses'] = var4;
    var4 = function updateFavoriteHangStatus(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPDATE_FAVORITE_HANG_STATUS';
        var2['type'] = var5;
        var5 = arg1;
        var2['status'] = var5;
        var5 = arg2;
        var2['emoji'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateFavoriteHangStatus'] = var4;
    var2 = function resetHangStatusState() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RESET_HANG_STATUS_STATE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetHangStatusState'] = var2;
    return var1;
})();