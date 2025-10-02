// app/modules/video_calls/useMuteStates.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getMuteStates(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var12 = var1.authenticationStore;
            var3 = undefined;
            if(!(var12 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot3;
case 2:
            var11 = var1.voiceStateStore;
            if(!(var11 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot6;
case 4:
            var6 = var1.mediaEngineStore;
            if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot4;
case 6:
            var8 = var1.permissionStore;
            if(!(var8 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot5;
case 8:
            var7 = var1.impersonateStore;
            if(!(var7 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = _closure1_slot2;
case 10:
            var2 = null;
            var1 = var2 != var9;
            var4 = null;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var11.getVoiceState;
            var1 = var9.getGuildId;
            var5 = var1.bind(var9)();
            var1 = var12.getId;
            var1 = var1.bind(var12)();
            var4 = var10.bind(var11)(var5, var1);
case 12:
            var1 = var6.isSelfMute;
            var5 = var1.bind(var6)();
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var6.isSelfMutedTemporarily;
            var5 = var1.bind(var6)();
case 14:
            var1 = var2 == var9;
            var6 = undefined;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var9.getGuildId;
            var6 = var1.bind(var9)();
case 16:
            var1 = var7.isViewingRoles;
            var6 = var1.bind(var7)(var6);
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var8.can;
            var1 = _closure1_slot7;
            var1 = var1.SPEAK;
            var1 = var7.bind(var8)(var1, var9);
            var6 = !var1;
case 18:
            var1 = {};
            var1['selfMute'] = var5;
            var7 = var2 == var4;
            var5 = undefined;
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var4.suppress;
case 20:
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var6;
case 22:
            var1['suppress'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var4.mute;
case 24:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = var3;
case 26:
            var1['mute'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
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
    var5 = var5.Permissions;
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/useMuteStates.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useMuteStates(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = _closure1_slot6;
        var2[1] = var6;
        var6 = _closure1_slot4;
        var2[2] = var6;
        var6 = _closure1_slot5;
        var2[3] = var6;
        var5 = _closure1_slot2;
        var2[4] = var5;
        var1 = function() {
            var3 = _closure1_slot8;
            var2 = {};
            var4 = _closure2_slot0;
            var2['channel'] = var4;
            var4 = _closure1_slot3;
            var2['authenticationStore'] = var4;
            var4 = _closure1_slot6;
            var2['voiceStateStore'] = var4;
            var4 = _closure1_slot4;
            var2['mediaEngineStore'] = var4;
            var4 = _closure1_slot5;
            var2['permissionStore'] = var4;
            var1 = _closure1_slot2;
            var2['impersonateStore'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['getMuteStates'] = var2;
    return var1;
})();