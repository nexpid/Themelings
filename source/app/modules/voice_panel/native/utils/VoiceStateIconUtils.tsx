// app/modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var7 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var1 = function isStableVoiceStateEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var6 === var5;
            if(var1) { _fun0001_ip = 63; continue _fun0001 }
 13:
            var3 = null;
            var2 = var3 != var6;
            if(!var2) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var2 = var3 != var5;
 26:
            if(!var2) { _fun0001_ip = 60; continue _fun0001 }
 29:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var2 = var3.bind(var4)(var6, var5);
 60:
            var1 = var2;
 63:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var5 = function useStableVoiceParticipant(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot4;
        var4[1] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var9 = _closure1_slot7;
        var11 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 44; continue _fun0002 }
 13:
                var6 = _closure1_slot4;
                var5 = var6.getVoiceState;
                var4 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var2);
                if(!(var1 == var2)) { _fun0002_ip = 48; continue _fun0002 }
 44:
                var1 = undefined;
                return var1;
 48:
                var1 = {};
                var4 = var2.deaf;
                var1['deaf'] = var4;
                var4 = var2.selfDeaf;
                var1['selfDeaf'] = var4;
                var4 = var2.mute;
                var1['mute'] = var4;
                var5 = _closure1_slot3;
                var4 = var5.isLocalMute;
                var3 = var2.userId;
                var3 = var4.bind(var5)(var3);
                var1['isLocalMute'] = var3;
                var2 = var2.selfMute;
                var1['selfMute'] = var2;
                return var1;
            }
        };
        var13 = var6;
        var12 = var4;
        var10 = var3;
        var1 = var13[var5](var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function useStableVideoState(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var8 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                var4 = var2 != var3;
                var3 = undefined;
                if(!var4) { _fun0003_ip = 45; continue _fun0003 }
 18:
                var7 = _closure1_slot4;
                var6 = var7.getVoiceState;
                var5 = _closure2_slot1;
                var4 = _closure2_slot0;
                var3 = var6.bind(var7)(var5, var4);
 45:
                var1 = _closure2_slot0;
                if(!(var2 != var1)) { _fun0003_ip = 139; continue _fun0003 }
 53:
                if(!(var2 != var3)) { _fun0003_ip = 139; continue _fun0003 }
 57:
                var6 = _closure1_slot3;
                var5 = var6.isLocalVideoDisabled;
                var1 = var3.userId;
                var5 = var5.bind(var6)(var1);
                var1 = {};
                var6 = var3.selfVideo;
                var1['selfVideo'] = var6;
                var2 = null;
                if(!var5) { _fun0003_ip = 132; continue _fun0003 }
 98:
                var5 = _closure1_slot3;
                var4 = var5.isLocalVideoAutoDisabled;
                var3 = var3.userId;
                var4 = var4.bind(var5)(var3);
                var3 = 'manual';
                if(!var4) { _fun0003_ip = 129; continue _fun0003 }
 125:
                var3 = 'auto';
 129:
                var2 = var3;
 132:
                var1['localVideoDisabledState'] = var2;
                return var1;
 139:
                var1 = {'selfVideo': false, 'localVideoDisabledState': null};
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var6);
    var14 = 0;
    var6 = var10[var14];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var6 = var10[var13];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var7 = {};
    var7['DEAFENED_SERVER'] = var14;
    var6 = 'DEAFENED_SERVER';
    var7[var14] = var6;
    var7['DEAFENED'] = var13;
    var6 = 'DEAFENED';
    var7[var13] = var6;
    var12 = 2;
    var7['MUTED_SERVER'] = var12;
    var6 = 'MUTED_SERVER';
    var7[var12] = var6;
    var8 = 3;
    var7['MUTED_LOCAL'] = var8;
    var6 = 'MUTED_LOCAL';
    var7[var8] = var6;
    var8 = 4;
    var7['MUTED'] = var8;
    var6 = 'MUTED';
    var7[var8] = var6;
    var _closure1_slot5 = var7;
    var6 = {};
    var6['VIDEO_DISABLED_LOCAL_AUTO'] = var14;
    var11 = 'VIDEO_DISABLED_LOCAL_AUTO';
    var6[var14] = var11;
    var6['VIDEO_DISABLED_LOCAL'] = var13;
    var11 = 'VIDEO_DISABLED_LOCAL';
    var6[var13] = var11;
    var6['VIDEO_ACTIVE'] = var12;
    var11 = 'VIDEO_ACTIVE';
    var6[var12] = var11;
    var _closure1_slot6 = var6;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/voice_panel/native/utils/VoiceStateIconUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['MuteDeafenIconState'] = var7;
    var3['VideoIconState'] = var6;
    var3['useStableVoiceParticipant'] = var5;
    var5 = function useMuteDeafenIconState(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = _closure1_slot8;
            var4 = undefined;
            var2 = arg1;
            var1 = arg2;
            var4 = var5.bind(var4)(var2, var1);
            var2 = null;
            var5 = var2 == var4;
            var1 = null;
            if(var5) { _fun0004_ip = 140; continue _fun0004 }
 32:
            var5 = var4.deaf;
            if(var5) { _fun0004_ip = 127; continue _fun0004 }
 41:
            var5 = var4.selfDeaf;
            if(var5) { _fun0004_ip = 115; continue _fun0004 }
 50:
            var5 = var4.mute;
            if(var5) { _fun0004_ip = 103; continue _fun0004 }
 59:
            var5 = var4.isLocalMute;
            if(var5) { _fun0004_ip = 91; continue _fun0004 }
 68:
            var4 = var4.selfMute;
            var2 = null;
            if(!var4) { _fun0004_ip = 89; continue _fun0004 }
 79:
            var4 = _closure1_slot5;
            var2 = var4.MUTED;
 89:
            _fun0004_ip = 101; continue _fun0004;
 91:
            var4 = _closure1_slot5;
            var2 = var4.MUTED_LOCAL;
 101:
            _fun0004_ip = 113; continue _fun0004;
 103:
            var4 = _closure1_slot5;
            var2 = var4.MUTED_SERVER;
 113:
            _fun0004_ip = 125; continue _fun0004;
 115:
            var4 = _closure1_slot5;
            var2 = var4.DEAFENED;
 125:
            _fun0004_ip = 137; continue _fun0004;
 127:
            var3 = _closure1_slot5;
            var2 = var3.DEAFENED_SERVER;
 137:
            var1 = var2;
 140:
            return var1;
        }
    };
    var3['useMuteDeafenIconState'] = var5;
    var3['useStableVideoState'] = var4;
    var2 = function useVideoIconState(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = _closure1_slot9;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var3 = var5.bind(var3)(var2, var1);
            var2 = null;
            var5 = var2 == var3;
            var1 = null;
            if(var5) { _fun0005_ip = 111; continue _fun0005 }
 32:
            var5 = var3.selfVideo;
            var2 = null;
            if(!var5) { _fun0005_ip = 108; continue _fun0005 }
 43:
            var6 = var3.localVideoDisabledState;
            var5 = 'auto';
            if(!(var5 !== var6)) { _fun0005_ip = 95; continue _fun0005 }
 57:
            var5 = var3.localVideoDisabledState;
            var3 = 'manual';
            if(!(var3 !== var5)) { _fun0005_ip = 83; continue _fun0005 }
 71:
            var3 = _closure1_slot6;
            var3 = var3.VIDEO_ACTIVE;
            _fun0005_ip = 93; continue _fun0005;
 83:
            var5 = _closure1_slot6;
            var3 = var5.VIDEO_DISABLED_LOCAL;
 93:
            _fun0005_ip = 105; continue _fun0005;
 95:
            var4 = _closure1_slot6;
            var3 = var4.VIDEO_DISABLED_LOCAL_AUTO;
 105:
            var2 = var3;
 108:
            var1 = var2;
 111:
            return var1;
        }
    };
    var3['useVideoIconState'] = var2;
    return var1;
})();