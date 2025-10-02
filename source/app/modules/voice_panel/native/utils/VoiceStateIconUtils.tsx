// app/modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var1 = function isStableVoiceStateEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var6 === var5;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var2 = var3 != var6;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3 != var5;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var2 = var3.bind(var4)(var6, var5);
case 6:
            var1 = var2;
case 2:
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
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                var6 = _closure1_slot4;
                var5 = var6.getVoiceState;
                var4 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var2);
                if(!(var1 == var2)) { _fun0002_ip = 9; continue _fun0002 }
case 8:
                var1 = undefined;
                return var1;
case 9:
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
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var4 = var2 != var3;
                var3 = undefined;
                if(!var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var7 = _closure1_slot4;
                var6 = var7.getVoiceState;
                var5 = _closure2_slot1;
                var4 = _closure2_slot0;
                var3 = var6.bind(var7)(var5, var4);
case 10:
                var1 = _closure2_slot0;
                if(!(var2 != var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                if(!(var2 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var6 = _closure1_slot3;
                var5 = var6.isLocalVideoDisabled;
                var1 = var3.userId;
                var5 = var5.bind(var6)(var1);
                var1 = {};
                var6 = var3.selfVideo;
                var1['selfVideo'] = var6;
                var2 = null;
                if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var5 = _closure1_slot3;
                var4 = var5.isLocalVideoAutoDisabled;
                var3 = var3.userId;
                var4 = var4.bind(var5)(var3);
                var3 = 'manual';
                if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var3 = 'auto';
case 17:
                var2 = var3;
case 15:
                var1['localVideoDisabledState'] = var2;
                return var1;
case 12:
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
case 0:
            var5 = _closure1_slot8;
            var4 = undefined;
            var2 = arg1;
            var1 = arg2;
            var4 = var5.bind(var4)(var2, var1);
            var2 = null;
            var5 = var2 == var4;
            var1 = null;
            if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var5 = var4.deaf;
            if(var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var5 = var4.selfDeaf;
            if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var5 = var4.mute;
            if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var5 = var4.isLocalMute;
            if(var5) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var4 = var4.selfMute;
            var2 = null;
            if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var4 = _closure1_slot5;
            var2 = var4.MUTED;
case 29:
            _fun0004_ip = 31; continue _fun0004;
case 27:
            var4 = _closure1_slot5;
            var2 = var4.MUTED_LOCAL;
case 31:
            _fun0004_ip = 32; continue _fun0004;
case 25:
            var4 = _closure1_slot5;
            var2 = var4.MUTED_SERVER;
case 32:
            _fun0004_ip = 18; continue _fun0004;
case 23:
            var4 = _closure1_slot5;
            var2 = var4.DEAFENED;
case 18:
            _fun0004_ip = 33; continue _fun0004;
case 21:
            var3 = _closure1_slot5;
            var2 = var3.DEAFENED_SERVER;
case 33:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var3['useMuteDeafenIconState'] = var5;
    var3['useStableVideoState'] = var4;
    var2 = function useVideoIconState(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = _closure1_slot9;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var3 = var5.bind(var3)(var2, var1);
            var2 = null;
            var5 = var2 == var3;
            var1 = null;
            if(var5) { _fun0005_ip = 34; continue _fun0005 }
case 20:
            var5 = var3.selfVideo;
            var2 = null;
            if(!var5) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var6 = var3.localVideoDisabledState;
            var5 = 'auto';
            if(!(var5 !== var6)) { _fun0005_ip = 37; continue _fun0005 }
case 14:
            var5 = var3.localVideoDisabledState;
            var3 = 'manual';
            if(!(var3 !== var5)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var3 = _closure1_slot6;
            var3 = var3.VIDEO_ACTIVE;
            _fun0005_ip = 40; continue _fun0005;
case 38:
            var5 = _closure1_slot6;
            var3 = var5.VIDEO_DISABLED_LOCAL;
case 40:
            _fun0005_ip = 41; continue _fun0005;
case 37:
            var4 = _closure1_slot6;
            var3 = var4.VIDEO_DISABLED_LOCAL_AUTO;
case 41:
            var2 = var3;
case 35:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var3['useVideoIconState'] = var2;
    return var1;
})();