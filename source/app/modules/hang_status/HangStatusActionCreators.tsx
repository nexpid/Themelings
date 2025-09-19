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
 0:
            var3 = _closure1_slot5;
            var1 = var3.getVoiceChannelId;
            var5 = var1.bind(var3)();
            var3 = _closure1_slot4;
            var1 = var3.getMediaSessionId;
            var3 = var1.bind(var3)();
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 102; continue _fun0001 }
 37:
            var1 = {};
            var1['channel_id'] = var5;
            var7 = _closure1_slot3;
            var6 = var7.getChannel;
            var6 = var6.bind(var7)(var5);
            var7 = var4 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 71; continue _fun0001 }
 66:
            var4 = var6.guild_id;
 71:
            var1['guild_id'] = var4;
            var1['media_session_id'] = var3;
            var4 = _closure1_slot6;
            var2 = var4.countVoiceStatesForChannel;
            var2 = var2.bind(var4)(var5);
            var1['call_num_participants'] = var2;
            _fun0001_ip = 129; continue _fun0001;
 102:
            var2 = {};
            var4 = undefined;
            var2['channel_id'] = var4;
            var2['guild_id'] = var4;
            var2['media_session_id'] = var3;
            var3 = 0;
            var2['call_num_participants'] = var3;
            var1 = var2;
 129:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function clearHangStatus(arg1) {
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
        var8 = arg1;
        var2['saveAsDefault'] = var8;
        var2 = var5.bind(var7)(var2);
        var2 = 8;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.CLEAR_HANG_STATUS;
        var2 = {};
        var6 = _closure1_slot9;
        var9 = var6.bind(var1)();
        var10 = var2;
        var6 = copyDataProperties(var10, var9);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot8 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/hang_status/HangStatusActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function updateHangStatus(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var4 = _closure1_slot5;
            var1 = var4.getVoiceChannelId;
            var1 = var1.bind(var4)();
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            var10 = undefined;
            if(var4) { _fun0002_ip = 55; continue _fun0002 }
 50:
            var10 = var3.guild_id;
 55:
            if(!(var2 != var7)) { _fun0002_ip = 63; continue _fun0002 }
 59:
            if(!(var2 == var10)) { _fun0002_ip = 74; continue _fun0002 }
 63:
            var2 = _closure1_slot10;
            var2 = var2.bind(var1)(var9);
            _fun0002_ip = 182; continue _fun0002;
 74:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var8 = var3.bind(var1)(var2);
            var5 = var8.dispatch;
            var2 = {};
            var11 = 'UPDATE_HANG_STATUS';
            var2['type'] = var11;
            var2['status'] = var7;
            var2['guildId'] = var10;
            var2['saveAsDefault'] = var9;
            var2 = var5.bind(var8)(var2);
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.SET_HANG_STATUS;
            var2 = {};
            var2['status_type'] = var7;
            var6 = _closure1_slot9;
            var12 = var6.bind(var1)();
            var13 = var2;
            var6 = copyDataProperties(var13, var12);
            var2 = var4.bind(var5)(var3, var2);
 182:
            return var1;
        }
    };
    var3['updateHangStatus'] = var5;
    var5 = function updateCustomHangStatus(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var10 = arg2;
            var9 = arg3;
            var1 = '';
            if(!(var1 !== var7)) { _fun0003_ip = 23; continue _fun0003 }
 17:
            var1 = null;
            if(!(var1 == var10)) { _fun0003_ip = 39; continue _fun0003 }
 23:
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)(var9);
            _fun0003_ip = 154; continue _fun0003;
 39:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var6 = undefined;
            var8 = var2.bind(var6)(var1);
            var4 = var8.dispatch;
            var1 = {};
            var11 = 'UPDATE_HANG_STATUS_CUSTOM';
            var1['type'] = var11;
            var1['emoji'] = var10;
            var1['status'] = var7;
            var1['saveAsDefault'] = var9;
            var1 = var4.bind(var8)(var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var1['status_type'] = var7;
            var5 = _closure1_slot9;
            var12 = var5.bind(var6)();
            var13 = var1;
            var5 = copyDataProperties(var13, var12);
            var1 = var3.bind(var4)(var2, var1);
 154:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateCustomHangStatus'] = var5;
    var5 = function updateGameActivityHangStatus(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 == var9)) { _fun0004_ip = 28; continue _fun0004 }
 12:
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)(var8);
            _fun0004_ip = 145; continue _fun0004;
 28:
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
            var1 = _closure1_slot8;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var7 = 'game_activity';
            var1['status_type'] = var7;
            var5 = _closure1_slot9;
            var11 = var5.bind(var6)();
            var12 = var1;
            var5 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1);
 145:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateGameActivityHangStatus'] = var5;
    var3['clearHangStatus'] = var4;
    var4 = function deleteInvalidHangStatuses() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = _closure1_slot7;
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
 0:
                    var3 = arg1;
                    var4 = null;
                    var1 = var4 != var3;
                    if(!var1) { _fun0006_ip = 45; continue _fun0006 }
 12:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.bind(var5)(var3);
                    var1 = !var2;
 45:
                    if(!var1) { _fun0006_ip = 57; continue _fun0006 }
 48:
                    var2 = var3.emoji;
                    var1 = var4 != var2;
 57:
                    if(!var1) { _fun0006_ip = 121; continue _fun0006 }
 60:
                    var5 = var3.emoji;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 79; continue _fun0006 }
 74:
                    var2 = var5.id;
 79:
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 118; continue _fun0006 }
 86:
                    var6 = _closure1_slot2;
                    var5 = var6.getCustomEmojiById;
                    var3 = var3.emoji;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
 118:
                    var1 = var2;
 121:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0005_ip = 143; continue _fun0005 }
 94:
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
 143:
            var1 = undefined;
            return var1;
        }
    };
    var3['deleteInvalidHangStatuses'] = var4;
    var2 = function updateFavoriteHangStatus(arg1, arg2) {
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
    var3['updateFavoriteHangStatus'] = var2;
    return var1;
})();