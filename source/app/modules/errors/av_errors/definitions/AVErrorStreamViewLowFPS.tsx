// app/modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
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
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ApplicationStreamStates;
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.getReportInboundErrors;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var2 = var3.getAllActiveStreams;
            var5 = var2.bind(var3)();
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot5;
                    var3 = var5.getRTCConnection;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var10 = 6;
                    var2 = var2[var10];
                    var9 = undefined;
                    var6 = var6.bind(var9)(var2);
                    var2 = var6.encodeStreamKey;
                    var2 = var2.bind(var6)(var8);
                    var3 = var3.bind(var5)(var2);
                    var5 = null;
                    var2 = var5 == var3;
                    var11 = undefined;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.getMediaEngineConnectionId;
                    var11 = var2.bind(var3)();
case 4:
                    if(!(var5 != var11)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var8.ownerId;
                    var6 = _closure1_slot4;
                    var2 = var6.getId;
                    var2 = var2.bind(var6)();
                    if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var8.state;
                    var2 = _closure1_slot6;
                    var2 = var2.PAUSED;
                    if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 5;
                    var2 = var2[var7];
                    var6 = var3.bind(var9)(var2);
                    var3 = var6.getAccumulatedStatsWithMinDatapoints;
                    var2 = var8.ownerId;
                    var3 = var3.bind(var6)(var11, var2);
                    if(!(var5 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var12 = _closure1_slot2;
                    var11 = var12.getParticipant;
                    var6 = var8.channelId;
                    var13 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var13 = var13.bind(var9)(var2);
                    var2 = var13.encodeStreamKey;
                    var2 = var2.bind(var13)(var8);
                    var11 = var11.bind(var12)(var6, var2);
                    if(!(var5 != var11)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 7;
                    var2 = var12[var2];
                    var6 = var6.bind(var9)(var2);
                    var2 = var6.getMaxQuality;
                    var2 = var2.bind(var6)(var11);
                    if(!(var5 != var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var5 = var3.short;
                    var6 = var5.frameRate;
                    var11 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var7];
                    var12 = var11.bind(var9)(var5);
                    var11 = var12.getWarningFrameRate;
                    var5 = var2.maxFrameRate;
                    var5 = var11.bind(var12)(var5);
                    if(!(!(var6 < var5))) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = var3.long;
                    var3 = var3.frameRate;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var7];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.getWarningFrameRate;
                    var2 = var2.maxFrameRate;
                    var2 = var5.bind(var6)(var2);
                    if(!(var3 < var2)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var5 = 8;
                    var5 = var4[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVError;
                    var5 = var5.STREAM_VIEW_LOW_FPS;
                    var2['type'] = var5;
                    var5 = 9;
                    var5 = var4[var5];
                    var6 = var7.bind(var9)(var5);
                    var5 = var6.getStreamErrorContext;
                    var4 = var4[var10];
                    var7 = var7.bind(var9)(var4);
                    var4 = var7.encodeStreamKey;
                    var4 = var4.bind(var7)(var8);
                    var14 = var5.bind(var6)(var4);
                    var15 = var2;
                    var4 = copyDataProperties(var15, var14);
                    var2 = var3.bind(var1)(var2);
case 15:
                    return var1;
case 13:
                    return var1;
case 11:
                    return var1;
case 8:
                    return var1;
case 6:
                    return var1;
                }
            };
            var2 = new Array(0);
            var1 = var4.bind(var5)(var3, var2);
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
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamViewLowFPSDefinition'] = var2;
    return var1;
})();