// app/modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.ApplicationStreamStates;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var7 = var2.SECOND;
    var2 = 20;
    var2 = var2 * var7;
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUserActiveStream;
            var9 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var9.state;
            var2 = _closure1_slot5;
            var2 = var2.PAUSED;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot3;
            var2 = var3.getViewerIds;
            var2 = var2.bind(var3)(var9);
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 5;
            var2 = var2[var11];
            var10 = undefined;
            var3 = var3.bind(var10)(var2);
            var2 = var3.encodeStreamKey;
            var6 = var2.bind(var3)(var9);
            var3 = _closure1_slot4;
            var2 = var3.getRTCConnection;
            var3 = var2.bind(var3)(var6);
            if(!(var1 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3.getMediaEngineConnectionId;
            var7 = var2.bind(var3)();
            if(!(var1 != var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot4;
            var2 = var5.getLastNonZeroRemoteVideoSinkWantsTime;
            var5 = var2.bind(var5)(var6);
            if(!(var1 != var5)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = global;
            var6 = var2.performance;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var5 = var2 - var5;
            var2 = _closure1_slot6;
            if(!(!(var5 < var2))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var2 = var3.getRemoteVideoSinkWants;
            var5 = var2.bind(var3)();
            var2 = global;
            var3 = var2.Object;
            var2 = var3.entries;
            var5 = var2.bind(var3)(var5);
            var3 = var5.every;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = var3;
case 14:
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 18:
                    var3 = var6;
                    var4 = var5;
case 16:
                    if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var1.return();
case 19:
                    var1 = 'any';
                    var1 = var1 === var2;
                    if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var2 = 0;
                    var1 = var2 === var3;
case 21:
                    return var1;
                }
            };
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = _closure1_slot2;
            var5 = var6.getParticipant;
            var3 = var9.channelId;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var11];
            var8 = var8.bind(var10)(var2);
            var2 = var8.encodeStreamKey;
            var2 = var2.bind(var8)(var9);
            var6 = var5.bind(var6)(var3, var2);
            if(!(var1 != var6)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 6;
            var2 = var2[var8];
            var5 = var3.bind(var10)(var2);
            var3 = var5.getAccumulatedStatsWithMinDatapoints;
            var2 = var9.ownerId;
            var5 = var3.bind(var5)(var7, var2);
            if(!(var1 != var5)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var2 = var7[var2];
            var3 = var3.bind(var10)(var2);
            var2 = var3.getMaxQuality;
            var3 = var2.bind(var3)(var6);
            var6 = var1 == var3;
            var2 = null;
            if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var6 = var5.short;
            var7 = var6.frameRate;
            var12 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var13 = var12.bind(var10)(var6);
            var12 = var13.getWarningFrameRate;
            var6 = var3.maxFrameRate;
            var6 = var12.bind(var13)(var6);
            if(!(!(var7 < var6))) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var5 = var5.long;
            var5 = var5.frameRate;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var7 = var7.bind(var10)(var6);
            var6 = var7.getWarningFrameRate;
            var3 = var3.maxFrameRate;
            var3 = var6.bind(var7)(var3);
            var5 = var5 < var3;
            var3 = null;
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var5 = {};
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var6 = 8;
            var6 = var4[var6];
            var6 = var8.bind(var10)(var6);
            var6 = var6.AVError;
            var6 = var6.STREAM_SEND_LOW_FPS;
            var5['type'] = var6;
            var6 = 9;
            var6 = var4[var6];
            var7 = var8.bind(var10)(var6);
            var6 = var7.getStreamErrorContext;
            var4 = var4[var11];
            var8 = var8.bind(var10)(var4);
            var4 = var8.encodeStreamKey;
            var4 = var4.bind(var8)(var9);
            var14 = var6.bind(var7)(var4);
            var15 = var5;
            var4 = copyDataProperties(var15, var14);
            var4 = new Array(1);
            var4[0] = var5;
            var3 = var4;
case 33:
            var2 = var3;
case 29:
            return var2;
case 27:
            return var1;
case 25:
            return var1;
case 23:
            return var1;
case 13:
            return var1;
case 9:
            return var1;
case 7:
            return var1;
case 5:
            return var1;
case 2:
            return var1;
        }
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var5 = var1.streamKey;
        var4 = var1.mediaSessionId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamSendLowFPSDefinition'] = var2;
    return var1;
})();