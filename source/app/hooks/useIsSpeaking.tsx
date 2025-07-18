// app/hooks/useIsSpeaking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _checkIsSpeaking(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var2 = arg3;
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
 12:
            var1 = var3;
 15:
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
 18:
            var1 = var2;
 21:
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
 0:
            var3 = arg1;
            var2 = var3.userId;
            var _closure2_slot0 = var2;
            var2 = var3.checkSoundSharing;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 28; continue _fun0002 }
 26:
            var2 = false;
 28:
            var _closure2_slot1 = var2;
            var2 = var3.checkSoundboardSounds;
            if(!(var2 === var5)) { _fun0002_ip = 44; continue _fun0002 }
 42:
            var2 = true;
 44:
            var _closure2_slot2 = var2;
            var2 = var3.checkIsMuted;
            if(!(var2 === var5)) { _fun0002_ip = 60; continue _fun0002 }
 58:
            var2 = false;
 60:
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
 0:
                    var3 = _closure1_slot3;
                    var1 = var3.getVoiceChannelId;
                    var5 = var1.bind(var3)();
                    var1 = null;
                    var3 = var1 != var5;
                    if(!var3) { _fun0003_ip = 49; continue _fun0003 }
 26:
                    var4 = _closure1_slot5;
                    var3 = var4.getVoiceStateForChannel;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var5, var2);
 49:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var4, var3);
            if(!var2) { _fun0002_ip = 176; continue _fun0002 }
 135:
            var4 = null;
            var8 = var4 == var7;
            var3 = undefined;
            if(var8) { _fun0002_ip = 152; continue _fun0002 }
 146:
            var3 = var7.mute;
 152:
            if(var3) { _fun0002_ip = 173; continue _fun0002 }
 155:
            var8 = var4 == var7;
            var4 = undefined;
            if(var8) { _fun0002_ip = 170; continue _fun0002 }
 164:
            var4 = var7.selfMute;
 170:
            var3 = var4;
 173:
            var2 = var3;
 176:
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
 0:
                    var5 = _closure1_slot4;
                    var4 = var5.isSpeaking;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0004_ip = 40; continue _fun0004 }
 33:
                    var2 = _closure2_slot4;
                    var1 = !var2;
 40:
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
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.isSoundSharing;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0005_ip = 32; continue _fun0005 }
 28:
                    var1 = _closure2_slot1;
 32:
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
 0:
                    var4 = _closure1_slot2;
                    var3 = var4.isUserPlayingSounds;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0006_ip = 32; continue _fun0006 }
 28:
                    var1 = _closure2_slot2;
 32:
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
 0:
            var4 = arg1;
            var3 = arguments[1];
            var8 = var4.userId;
            var1 = var4.checkSoundSharing;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 25; continue _fun0007 }
 23:
            var1 = false;
 25:
            var6 = var4.checkSoundboardSounds;
            if(!(var6 === var5)) { _fun0007_ip = 37; continue _fun0007 }
 35:
            var6 = true;
 37:
            var2 = var4.checkIsMuted;
            if(!(var2 === var5)) { _fun0007_ip = 49; continue _fun0007 }
 47:
            var2 = false;
 49:
            var9 = var4.context;
            if(!(var3 === var5)) { _fun0007_ip = 100; continue _fun0007 }
 58:
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
 100:
            var12 = var3;
            var4 = var12[Symbol.iterator];
            var12 = var4().next;
            var3 = var12().value;
            var7 = var4;
            var11 = var7 === var5;
            var13 = undefined;
            if(var11) { _fun0007_ip = 125; continue _fun0007 }
 122:
            var13 = var3;
 125:
            var10 = undefined;
            if(var11) { _fun0007_ip = 155; continue _fun0007 }
 130:
            var7 = var12().value;
            var3 = var4;
            var3 = var3 === var5;
            var10 = undefined;
            var11 = var3;
            if(var3) { _fun0007_ip = 155; continue _fun0007 }
 149:
            var10 = var7;
            var11 = var3;
 155:
            var3 = undefined;
            if(var11) { _fun0007_ip = 185; continue _fun0007 }
 160:
            var14 = var12().value;
            var7 = var4;
            var7 = var7 === var5;
            var3 = undefined;
            var11 = var7;
            if(var7) { _fun0007_ip = 185; continue _fun0007 }
 179:
            var3 = var14;
            var11 = var7;
 185:
            var7 = undefined;
            if(var11) { _fun0007_ip = 215; continue _fun0007 }
 190:
            var14 = var12().value;
            var12 = var4;
            var12 = var12 === var5;
            var7 = undefined;
            var11 = var12;
            if(var12) { _fun0007_ip = 215; continue _fun0007 }
 209:
            var7 = var14;
            var11 = var12;
 215:
            if(var11) { _fun0007_ip = 221; continue _fun0007 }
 218:
            var4.return();
 221:
            var4 = var10.getVoiceChannelId;
            var12 = var4.bind(var10)();
            var10 = null;
            var4 = var10 != var12;
            var11 = null;
            if(!var4) { _fun0007_ip = 254; continue _fun0007 }
 242:
            var4 = var13.getVoiceStateForChannel;
            var11 = var4.bind(var13)(var12, var8);
 254:
            if(!var2) { _fun0007_ip = 296; continue _fun0007 }
 257:
            var12 = var10 == var11;
            var4 = undefined;
            if(var12) { _fun0007_ip = 272; continue _fun0007 }
 266:
            var4 = var11.mute;
 272:
            if(var4) { _fun0007_ip = 293; continue _fun0007 }
 275:
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0007_ip = 290; continue _fun0007 }
 284:
            var10 = var11.selfMute;
 290:
            var4 = var10;
 293:
            var2 = var4;
 296:
            var4 = var3.isSpeaking;
            var4 = var4.bind(var3)(var8, var9);
            if(!var4) { _fun0007_ip = 314; continue _fun0007 }
 311:
            var4 = !var2;
 314:
            var2 = var3.isSoundSharing;
            var3 = var2.bind(var3)(var8);
            if(!var3) { _fun0007_ip = 331; continue _fun0007 }
 328:
            var3 = var1;
 331:
            var2 = _closure1_slot6;
            var1 = var7.isUserPlayingSounds;
            var1 = var1.bind(var7)(var8);
            if(!var1) { _fun0007_ip = 355; continue _fun0007 }
 352:
            var1 = var6;
 355:
            var1 = var2.bind(var5)(var4, var1, var3);
            return var1;
        }
    };
    var3['getIsSpeaking'] = var2;
    return var1;
})();