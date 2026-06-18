// app/modules/activity_status/useUserVoiceActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function getUserVoiceState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arguments[1];
            var5 = var1.userId;
            var4 = var1.guildId;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot6;
case 2:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var3 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var3 = var3 != var5;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var2.VoiceStateStore;
            var3 = var6.getDiscoverableVoiceStateForUser;
            var1 = var3.bind(var6)(var5);
case 7:
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var3 = var2.VoiceStateStore;
            var2 = var3.getDiscoverableVoiceState;
            var1 = var2.bind(var3)(var4, var5);
case 9:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = function getUserVoiceChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arguments[1];
            var1 = arg1;
            var1 = var1.voiceState;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot6;
case 10:
            var5 = null;
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = var1.channelId;
case 12:
            if(!(var5 == var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            return var3;
case 14:
            var3 = var2.ChannelStore;
            var2 = var3.getChannel;
            var1 = var1.channelId;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function canViewVoiceChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = arguments[1];
            var1 = var2.voiceState;
            var6 = var2.voiceChannel;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot6;
case 16:
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = var4 == var6;
            var2 = undefined;
            if(var4) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = var6.isPrivate;
            var2 = var4.bind(var6)();
case 20:
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = var3.PermissionStore;
            var4 = var5.can;
            var3 = _closure1_slot5;
            var3 = var3.VIEW_CHANNEL;
            var2 = var4.bind(var5)(var3, var6);
case 22:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function getVisibleUserVoiceActivity(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = arguments[1];
            var5 = var1.userId;
            var4 = var1.guildId;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var7 = _closure1_slot6;
case 2:
            var3 = _closure1_slot8;
            var2 = {};
            var2['userId'] = var5;
            var2['guildId'] = var4;
            var4 = var3.bind(var6)(var2, var7);
            var3 = _closure1_slot9;
            var2 = {};
            var2['voiceState'] = var4;
            var3 = var3.bind(var6)(var2, var7);
            var5 = _closure1_slot10;
            var2 = {};
            var2['voiceState'] = var4;
            var2['voiceChannel'] = var3;
            var2 = var5.bind(var6)(var2, var7);
            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = _closure1_slot7;
            _fun0004_ip = 26; continue _fun0004;
case 24:
            var2 = {};
            var2['voiceState'] = var4;
            var2['voiceChannel'] = var3;
            var1 = var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var6 = global;
    var12 = var6.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var12 = var10.bind(var1)(var9);
    var _closure1_slot2 = var12;
    var9 = 1;
    var9 = var8[var9];
    var11 = var10.bind(var1)(var9);
    var _closure1_slot3 = var11;
    var9 = 2;
    var9 = var8[var9];
    var10 = var10.bind(var1)(var9);
    var _closure1_slot4 = var10;
    var9 = 3;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Permissions;
    var _closure1_slot5 = var9;
    var9 = {};
    var9['ChannelStore'] = var12;
    var9['PermissionStore'] = var11;
    var9['VoiceStateStore'] = var10;
    var _closure1_slot6 = var9;
    var10 = var6.Object;
    var9 = var10.freeze;
    var6 = {};
    var6['voiceState'] = var1;
    var6['voiceChannel'] = var1;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activity_status/useUserVoiceActivity.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useUserVoiceActivity(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var _closure2_slot0 = var6;
        var7 = var2.guildId;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var8 = _closure1_slot2;
        var3 = new Array(3);
        var3[0] = var8;
        var8 = _closure1_slot3;
        var3[1] = var8;
        var2 = _closure1_slot4;
        var3[2] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var4 = _closure1_slot11;
            var3 = {};
            var5 = _closure2_slot0;
            var3['userId'] = var5;
            var2 = _closure2_slot1;
            var3['guildId'] = var2;
            var2 = {};
            var5 = _closure1_slot2;
            var2['ChannelStore'] = var5;
            var5 = _closure1_slot3;
            var2['PermissionStore'] = var5;
            var1 = _closure1_slot4;
            var2['VoiceStateStore'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var6;
    var3['getUserVoiceState'] = var5;
    var4 = function canViewUserVoiceChannel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = arguments[1];
            var7 = var1.userId;
            var6 = var1.guildId;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var4 = _closure1_slot6;
case 2:
            var2 = _closure1_slot8;
            var1 = {};
            var1['userId'] = var7;
            var1['guildId'] = var6;
            var7 = var2.bind(var3)(var1, var4);
            var2 = _closure1_slot10;
            var1 = {};
            var1['voiceState'] = var7;
            var6 = _closure1_slot9;
            var5 = {};
            var5['voiceState'] = var7;
            var5 = var6.bind(var3)(var5, var4);
            var1['voiceChannel'] = var5;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['canViewUserVoiceChannel'] = var4;
    var3['getVisibleUserVoiceActivity'] = var2;
    return var1;
})();