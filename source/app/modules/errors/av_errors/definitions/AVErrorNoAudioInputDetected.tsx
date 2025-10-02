// app/modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function getActiveErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.voiceChannelId;
            var7 = var1.voiceState;
            var3 = _closure1_slot2;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var4);
            var5 = null;
            var4 = var5 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.isGuildStageVoice;
            var3 = var4.bind(var6)();
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var5 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var7.suppress;
case 6:
            var3 = var4;
case 4:
            var7 = _closure1_slot4;
            var4 = var7.getMediaSessionId;
            var4 = var4.bind(var7)();
            if(!(var5 != var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var5 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var5 = _closure1_slot3;
            var4 = var5.getInputDetected;
            var5 = var4.bind(var5)();
            var4 = false;
            if(!(var4 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 12:
            var4 = _closure1_slot3;
            var3 = var4.isSelfMute;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 13:
            var3 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.AVError;
            var2 = var2.NO_AUDIO_INPUT_DETECTED;
            var3['type'] = var2;
            var2 = 4;
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getVoiceChannelErrorContext;
            var9 = var2.bind(var4)();
            var10 = var3;
            var2 = copyDataProperties(var10, var9);
            var2 = new Array(1);
            var2[0] = var3;
            return var2;
case 8:
            return var1;
        }
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var5 = var1.mediaSessionId;
        var4 = var1.audioInputDeviceName;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorNoAudioInputDetectedDefinition'] = var2;
    return var1;
})();