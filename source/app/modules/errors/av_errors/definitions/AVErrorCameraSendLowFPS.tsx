// app/modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx
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
    var2 = 20;
    var2 = var2 * var7;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot4;
            var1 = var2.getRTCConnection;
            var3 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 374; continue _fun0001 }
 26:
            var2 = var3.getMediaEngineConnectionId;
            var6 = var2.bind(var3)();
            if(!(var1 != var6)) { _fun0001_ip = 372; continue _fun0001 }
 43:
            var5 = _closure1_slot3;
            var2 = var5.isVideoEnabled;
            var2 = var2.bind(var5)();
            if(var2) { _fun0001_ip = 62; continue _fun0001 }
 60:
            return var1;
 62:
            var5 = _closure1_slot4;
            var2 = var5.getLastNonZeroRemoteVideoSinkWantsTime;
            var5 = var2.bind(var5)();
            if(!(var1 != var5)) { _fun0001_ip = 112; continue _fun0001 }
 80:
            var2 = global;
            var7 = var2.performance;
            var2 = var7.now;
            var2 = var2.bind(var7)();
            var5 = var2 - var5;
            var2 = _closure1_slot5;
            if(!(!(var5 < var2))) { _fun0001_ip = 370; continue _fun0001 }
 112:
            var2 = var3.getRemoteVideoSinkWants;
            var5 = var2.bind(var3)();
            var2 = global;
            var3 = var2.Object;
            var2 = var3.entries;
            var5 = var2.bind(var3)(var5);
            var3 = var5.every;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 27; continue _fun0002 }
 24:
                    var2 = var3;
 27:
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 57; continue _fun0002 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0002_ip = 57; continue _fun0002 }
 51:
                    var3 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0002_ip = 63; continue _fun0002 }
 60:
                    var1.return();
 63:
                    var1 = 'any';
                    var1 = var1 === var2;
                    if(var1) { _fun0002_ip = 80; continue _fun0002 }
 74:
                    var2 = 0;
                    var1 = var2 === var3;
 80:
                    return var1;
                }
            };
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0001_ip = 368; continue _fun0001 }
 167:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var7 = undefined;
            var5 = var3.bind(var7)(var2);
            var3 = var5.getAccumulatedStatsWithMinDatapoints;
            var8 = _closure1_slot2;
            var2 = var8.getId;
            var2 = var2.bind(var8)();
            var3 = var3.bind(var5)(var6, var2);
            var5 = var1 == var3;
            var2 = null;
            if(var5) { _fun0001_ip = 366; continue _fun0001 }
 227:
            var5 = var3.short;
            var6 = var5.frameRate;
            var5 = 10;
            if(!(!(var6 < var5))) { _fun0001_ip = 267; continue _fun0001 }
 246:
            var3 = var3.long;
            var3 = var3.frameRate;
            var5 = var3 < var5;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 363; continue _fun0001 }
 267:
            var5 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var9 = 5;
            var9 = var8[var9];
            var9 = var6.bind(var7)(var9);
            var9 = var9.AVError;
            var9 = var9.CAMERA_SEND_LOW_FPS;
            var5['type'] = var9;
            var9 = _closure1_slot2;
            var4 = var9.getId;
            var4 = var4.bind(var9)();
            var5['userId'] = var4;
            var4 = 6;
            var4 = var8[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.getVoiceChannelErrorContext;
            var10 = var4.bind(var6)();
            var11 = var5;
            var4 = copyDataProperties(var11, var10);
            var4 = new Array(1);
            var4[0] = var5;
            var3 = var4;
 363:
            var2 = var3;
 366:
            return var2;
 368:
            return var1;
 370:
            return var1;
 372:
            return var1;
 374:
            return var1;
        }
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var3 = var1.mediaSessionId;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorCameraSendLowFPSDefinition'] = var2;
    return var1;
})();