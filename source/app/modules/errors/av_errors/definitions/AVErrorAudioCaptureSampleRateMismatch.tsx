// app/modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx
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
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var7 = var2.SECOND;
    var2 = 10;
    var2 = var2 * var7;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot4;
            var1 = var2.getRTCConnection;
            var3 = var1.bind(var2)();
            var7 = null;
            var2 = var7 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var2) { _fun0001_ip = 40; continue _fun0001 }
 30:
            var2 = var3.getDurationSeconds;
            var4 = var2.bind(var3)();
 40:
            var5 = var7 != var4;
            var3 = 0;
            if(!var5) { _fun0001_ip = 52; continue _fun0001 }
 49:
            var3 = var4;
 52:
            var4 = 30;
            if(!(!(var3 < var4))) { _fun0001_ip = 345; continue _fun0001 }
 62:
            var3 = global;
            var8 = var3.performance;
            var5 = var8.now;
            var8 = var5.bind(var8)();
            var9 = _closure1_slot3;
            var5 = var9.getLastAudioInputDeviceChangeTimestamp;
            var5 = var5.bind(var9)();
            var8 = var8 - var5;
            var5 = _closure1_slot5;
            if(!(!(var8 < var5))) { _fun0001_ip = 345; continue _fun0001 }
 110:
            var9 = _closure1_slot2;
            var8 = var9.getConnectionStats;
            var10 = _closure1_slot4;
            var5 = var10.getRTCConnection;
            var11 = var5.bind(var10)();
            var10 = var7 == var11;
            var5 = undefined;
            if(var10) { _fun0001_ip = 153; continue _fun0001 }
 143:
            var10 = var11.getMediaEngineConnectionId;
            var5 = var10.bind(var11)();
 153:
            var8 = var8.bind(var9)(var5);
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0001_ip = 219; continue _fun0001 }
 167:
            var8 = var8.stats;
            var8 = var8.rtp;
            var10 = var8.outbound;
            var9 = var10.find;
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'audio';
                var1 = var1 === var2;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0001_ip = 219; continue _fun0001 }
 213:
            var5 = var8.sampleRateMismatchPercent;
 219:
            var7 = var7 != var5;
            var2 = 0;
            if(!var7) { _fun0001_ip = 231; continue _fun0001 }
 228:
            var2 = var5;
 231:
            var5 = var3.Math;
            var3 = var5.abs;
            var3 = var3.bind(var5)(var2);
            var4 = var3 > var4;
            var3 = var2;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 343; continue _fun0001 }
 260:
            var4 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var7 = 4;
            var7 = var6[var7];
            var7 = var5.bind(var1)(var7);
            var7 = var7.AVError;
            var7 = var7.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH;
            var4['type'] = var7;
            var4['audioCaptureSampleRateMismatchPercent'] = var3;
            var3 = 5;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getVoiceChannelErrorContext;
            var12 = var3.bind(var5)();
            var13 = var4;
            var3 = copyDataProperties(var13, var12);
            var3 = new Array(1);
            var3[0] = var4;
            var2 = var3;
 343:
            return var2;
 345:
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorAudioCaptureSampleRateMismatchDefinition'] = var2;
    return var1;
})();