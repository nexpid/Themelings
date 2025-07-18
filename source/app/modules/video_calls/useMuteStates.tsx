// app/modules/video_calls/useMuteStates.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getMuteStates(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.channel;
            var12 = var1.authenticationStore;
            var3 = undefined;
            if(!(var12 === var3)) { _fun0001_ip = 27; continue _fun0001 }
 20:
            var12 = _closure1_slot3;
 27:
            var11 = var1.voiceStateStore;
            if(!(var11 === var3)) { _fun0001_ip = 44; continue _fun0001 }
 37:
            var11 = _closure1_slot6;
 44:
            var6 = var1.mediaEngineStore;
            if(!(var6 === var3)) { _fun0001_ip = 61; continue _fun0001 }
 54:
            var6 = _closure1_slot4;
 61:
            var8 = var1.permissionStore;
            if(!(var8 === var3)) { _fun0001_ip = 78; continue _fun0001 }
 71:
            var8 = _closure1_slot5;
 78:
            var7 = var1.impersonateStore;
            if(!(var7 === var3)) { _fun0001_ip = 95; continue _fun0001 }
 88:
            var7 = _closure1_slot2;
 95:
            var2 = null;
            var1 = var2 != var9;
            var4 = null;
            if(!var1) { _fun0001_ip = 138; continue _fun0001 }
 106:
            var10 = var11.getVoiceState;
            var1 = var9.getGuildId;
            var5 = var1.bind(var9)();
            var1 = var12.getId;
            var1 = var1.bind(var12)();
            var4 = var10.bind(var11)(var5, var1);
 138:
            var1 = var6.isSelfMute;
            var5 = var1.bind(var6)();
            if(var5) { _fun0001_ip = 161; continue _fun0001 }
 151:
            var1 = var6.isSelfMutedTemporarily;
            var5 = var1.bind(var6)();
 161:
            var1 = var2 == var9;
            var6 = undefined;
            if(var1) { _fun0001_ip = 180; continue _fun0001 }
 170:
            var1 = var9.getGuildId;
            var6 = var1.bind(var9)();
 180:
            var1 = var7.isViewingRoles;
            var6 = var1.bind(var7)(var6);
            if(!var6) { _fun0001_ip = 222; continue _fun0001 }
 194:
            var7 = var8.can;
            var1 = _closure1_slot7;
            var1 = var1.SPEAK;
            var1 = var7.bind(var8)(var1, var9);
            var6 = !var1;
 222:
            var1 = {};
            var1['selfMute'] = var5;
            var7 = var2 == var4;
            var5 = undefined;
            if(var7) { _fun0001_ip = 244; continue _fun0001 }
 238:
            var5 = var4.suppress;
 244:
            if(var5) { _fun0001_ip = 250; continue _fun0001 }
 247:
            var5 = var6;
 250:
            var1['suppress'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 270; continue _fun0001 }
 264:
            var3 = var4.mute;
 270:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 280; continue _fun0001 }
 277:
            var2 = var3;
 280:
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