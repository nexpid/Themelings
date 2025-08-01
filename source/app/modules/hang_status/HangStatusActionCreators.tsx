// app/modules/hang_status/HangStatusActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function clearHangStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
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
            var2 = 7;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.CLEAR_HANG_STATUS;
            var2 = {};
            var8 = _closure1_slot5;
            var7 = var8.getVoiceChannelId;
            var7 = var7.bind(var8)();
            var2['channel_id'] = var7;
            var9 = _closure1_slot3;
            var8 = var9.getChannel;
            var10 = _closure1_slot5;
            var7 = var10.getVoiceChannelId;
            var7 = var7.bind(var10)();
            var8 = var8.bind(var9)(var7);
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 144; continue _fun0001 }
 139:
            var7 = var8.guild_id;
 144:
            var2['guild_id'] = var7;
            var7 = _closure1_slot4;
            var6 = var7.getMediaSessionId;
            var6 = var6.bind(var7)();
            var2['media_session_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/hang_status/HangStatusActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function updateHangStatus(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var10 = arg2;
            var8 = null;
            if(!(var8 == var7)) { _fun0002_ip = 31; continue _fun0002 }
 12:
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)(var10);
            _fun0002_ip = 206; continue _fun0002;
 31:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var6 = undefined;
            var9 = var2.bind(var6)(var1);
            var4 = var9.dispatch;
            var1 = {};
            var11 = 'UPDATE_HANG_STATUS';
            var1['type'] = var11;
            var1['status'] = var7;
            var1['saveAsDefault'] = var10;
            var1 = var4.bind(var9)(var1);
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var1['status_type'] = var7;
            var9 = _closure1_slot5;
            var7 = var9.getVoiceChannelId;
            var7 = var7.bind(var9)();
            var1['channel_id'] = var7;
            var10 = _closure1_slot3;
            var9 = var10.getChannel;
            var11 = _closure1_slot5;
            var7 = var11.getVoiceChannelId;
            var7 = var7.bind(var11)();
            var7 = var9.bind(var10)(var7);
            var8 = var8 == var7;
            if(var8) { _fun0002_ip = 177; continue _fun0002 }
 172:
            var6 = var7.guild_id;
 177:
            var1['guild_id'] = var6;
            var6 = _closure1_slot4;
            var5 = var6.getMediaSessionId;
            var5 = var5.bind(var6)();
            var1['media_session_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 206:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateHangStatus'] = var5;
    var5 = function updateCustomHangStatus(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var11 = arg2;
            var10 = arg3;
            var1 = '';
            if(!(var1 !== var7)) { _fun0003_ip = 23; continue _fun0003 }
 17:
            var8 = null;
            if(!(var8 == var11)) { _fun0003_ip = 42; continue _fun0003 }
 23:
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)(var10);
            _fun0003_ip = 224; continue _fun0003;
 42:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var6 = undefined;
            var9 = var2.bind(var6)(var1);
            var4 = var9.dispatch;
            var1 = {};
            var12 = 'UPDATE_HANG_STATUS_CUSTOM';
            var1['type'] = var12;
            var1['emoji'] = var11;
            var1['status'] = var7;
            var1['saveAsDefault'] = var10;
            var1 = var4.bind(var9)(var1);
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.SET_HANG_STATUS;
            var1 = {};
            var1['status_type'] = var7;
            var9 = _closure1_slot5;
            var7 = var9.getVoiceChannelId;
            var7 = var7.bind(var9)();
            var1['channel_id'] = var7;
            var10 = _closure1_slot3;
            var9 = var10.getChannel;
            var11 = _closure1_slot5;
            var7 = var11.getVoiceChannelId;
            var7 = var7.bind(var11)();
            var7 = var9.bind(var10)(var7);
            var8 = var8 == var7;
            if(var8) { _fun0003_ip = 195; continue _fun0003 }
 190:
            var6 = var7.guild_id;
 195:
            var1['guild_id'] = var6;
            var6 = _closure1_slot4;
            var5 = var6.getMediaSessionId;
            var5 = var5.bind(var6)();
            var1['media_session_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 224:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateCustomHangStatus'] = var5;
    var3['clearHangStatus'] = var4;
    var2 = function deleteInvalidHangStatuses() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot6;
            var2 = var3.getCustomHangStatus;
            var2 = var2.bind(var3)();
            var4 = new Array(1);
            var4[0] = var2;
            var2 = var3.getRecentCustomStatuses;
            var7 = var2.bind(var3)();
            var6 = 1;
            var8 = var4;
            var2 = arraySpread(var8, var7, var6);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = null;
                    var1 = var4 != var3;
                    if(!var1) { _fun0005_ip = 22; continue _fun0005 }
 12:
                    var2 = var3.emoji;
                    var1 = var4 != var2;
 22:
                    if(!var1) { _fun0005_ip = 88; continue _fun0005 }
 25:
                    var5 = var3.emoji;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0005_ip = 45; continue _fun0005 }
 40:
                    var2 = var5.id;
 45:
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 85; continue _fun0005 }
 52:
                    var6 = _closure1_slot2;
                    var5 = var6.getCustomEmojiById;
                    var3 = var3.emoji;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
 85:
                    var1 = var2;
 88:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0004_ip = 124; continue _fun0004 }
 75:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'DELETE_INVALID_HANG_STATUSES';
            var1['type'] = var5;
            var1['statuses'] = var4;
            var1 = var2.bind(var3)(var1);
 124:
            var1 = undefined;
            return var1;
        }
    };
    var3['deleteInvalidHangStatuses'] = var2;
    return var1;
})();