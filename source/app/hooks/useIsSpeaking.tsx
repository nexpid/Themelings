// app/hooks/useIsSpeaking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _checkIsSpeaking(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var2 = arg3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useIsSpeaking.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsSpeaking(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.userId;
            var _closure2_slot0 = var2;
            var2 = var3.checkSoundSharing;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = false;
case 6:
            var _closure2_slot1 = var2;
            var2 = var3.checkSoundboardSounds;
            if(!(var2 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = true;
case 8:
            var _closure2_slot2 = var2;
            var2 = var3.checkIsMuted;
            if(!(var2 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = false;
case 10:
            var3 = var3.context;
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 4;
            var3 = var3[var9];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot3;
            var4[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var1 = var3.getVoiceChannelId;
                    var5 = var1.bind(var3)();
                    var1 = null;
                    var3 = var1 != var5;
                    if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 7:
                    var4 = _closure1_slot5;
                    var3 = var4.getVoiceStateForChannel;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var5, var2);
case 12:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var4, var3);
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = null;
            var8 = var4 == var7;
            var3 = undefined;
            if(var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var7.mute;
case 15:
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var4 == var7;
            var4 = undefined;
            if(var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = var7.selfMute;
case 19:
            var3 = var4;
case 17:
            var2 = var3;
case 13:
            _closure2_slot4 = var2;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = var7[var9];
            var11 = var8.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var4 = var5.isSpeaking;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var2 = _closure2_slot4;
                    var1 = !var2;
case 21:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var3);
            var3 = var7[var9];
            var11 = var8.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.isSoundSharing;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 6:
                    var1 = _closure2_slot1;
case 23:
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var3, var2);
            var2 = _closure1_slot6;
            var7 = var7[var9];
            var8 = var8.bind(var5)(var7);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot2;
            var6 = new Array(1);
            var6[0] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.isUserPlayingSounds;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 6:
                    var1 = _closure2_slot2;
case 23:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var6, var1);
            var1 = var2.bind(var5)(var4, var1, var3);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getIsSpeaking(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var8 = var4.userId;
            var1 = var4.checkSoundSharing;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var1 = false;
case 24:
            var6 = var4.checkSoundboardSounds;
            if(!(var6 === var5)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var6 = true;
case 26:
            var2 = var4.checkIsMuted;
            if(!(var2 === var5)) { _fun0007_ip = 12; continue _fun0007 }
case 28:
            var2 = false;
case 12:
            var9 = var4.context;
            if(!(var3 === var5)) { _fun0007_ip = 29; continue _fun0007 }
case 11:
            var10 = _closure1_slot5;
            var4 = new Array(4);
            var4[0] = var10;
            var10 = _closure1_slot3;
            var4[1] = var10;
            var10 = _closure1_slot4;
            var4[2] = var10;
            var7 = _closure1_slot2;
            var4[3] = var7;
            var3 = var4;
case 29:
            var12 = var3;
            var4 = var12[Symbol.iterator];
            var12 = var4().next;
            var3 = var12().value;
            var7 = var4;
            var11 = var7 === var5;
            var13 = undefined;
            if(var11) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var13 = var3;
case 30:
            var10 = undefined;
            if(var11) { _fun0007_ip = 18; continue _fun0007 }
case 32:
            var7 = var12().value;
            var3 = var4;
            var3 = var3 === var5;
            var10 = undefined;
            var11 = var3;
            if(var3) { _fun0007_ip = 18; continue _fun0007 }
case 33:
            var10 = var7;
            var11 = var3;
case 18:
            var3 = undefined;
            if(var11) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var14 = var12().value;
            var7 = var4;
            var7 = var7 === var5;
            var3 = undefined;
            var11 = var7;
            if(var7) { _fun0007_ip = 34; continue _fun0007 }
case 36:
            var3 = var14;
            var11 = var7;
case 34:
            var7 = undefined;
            if(var11) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var14 = var12().value;
            var12 = var4;
            var12 = var12 === var5;
            var7 = undefined;
            var11 = var12;
            if(var12) { _fun0007_ip = 37; continue _fun0007 }
case 39:
            var7 = var14;
            var11 = var12;
case 37:
            if(var11) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var4.return();
case 40:
            var4 = var10.getVoiceChannelId;
            var12 = var4.bind(var10)();
            var10 = null;
            var4 = var10 != var12;
            var11 = null;
            if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var4 = var13.getVoiceStateForChannel;
            var11 = var4.bind(var13)(var12, var8);
case 42:
            if(!var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var12 = var10 == var11;
            var4 = undefined;
            if(var12) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var4 = var11.mute;
case 46:
            if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var10 = var11.selfMute;
case 50:
            var4 = var10;
case 48:
            var2 = var4;
case 44:
            var4 = var3.isSpeaking;
            var4 = var4.bind(var3)(var8, var9);
            if(!var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var4 = !var2;
case 52:
            var2 = var3.isSoundSharing;
            var3 = var2.bind(var3)(var8);
            if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var3 = var1;
case 54:
            var2 = _closure1_slot6;
            var1 = var7.isUserPlayingSounds;
            var1 = var1.bind(var7)(var8);
            if(!var1) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var1 = var6;
case 56:
            var1 = var2.bind(var5)(var4, var1, var3);
            return var1;
        }
    };
    var3['getIsSpeaking'] = var2;
    return var1;
})();