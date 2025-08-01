// app/modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx
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
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUserActiveStream;
            var9 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 335; continue _fun0001 }
 26:
            var3 = _closure1_slot2;
            var2 = var3.getViewerIds;
            var2 = var2.bind(var3)(var9);
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 333; continue _fun0001 }
 55:
            var5 = _closure1_slot3;
            var3 = var5.getRTCConnection;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 2;
            var2 = var2[var11];
            var10 = undefined;
            var6 = var6.bind(var10)(var2);
            var2 = var6.encodeStreamKey;
            var2 = var2.bind(var6)(var9);
            var3 = var3.bind(var5)(var2);
            var2 = var1 == var3;
            var6 = undefined;
            if(var2) { _fun0001_ip = 122; continue _fun0001 }
 112:
            var2 = var3.getMediaEngineConnectionId;
            var6 = var2.bind(var3)();
 122:
            if(!(var1 != var6)) { _fun0001_ip = 331; continue _fun0001 }
 129:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var5 = var3.bind(var10)(var2);
            var3 = var5.getAccumulatedStatsWithMinDatapoints;
            var2 = var9.ownerId;
            var3 = var3.bind(var5)(var6, var2);
            var5 = var1 == var3;
            var2 = null;
            if(var5) { _fun0001_ip = 329; continue _fun0001 }
 179:
            var5 = var3.short;
            var6 = var5.packetLossRate;
            var5 = 100;
            var7 = var5 * var6;
            var6 = 10;
            if(!(!(var7 > var6))) { _fun0001_ip = 227; continue _fun0001 }
 205:
            var3 = var3.long;
            var3 = var3.packetLossRate;
            var5 = var5 * var3;
            var3 = undefined;
            if(!(var5 > var6)) { _fun0001_ip = 326; continue _fun0001 }
 227:
            var5 = {};
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var6 = 4;
            var6 = var4[var6];
            var6 = var8.bind(var10)(var6);
            var6 = var6.AVError;
            var6 = var6.STREAM_SEND_HIGH_PACKET_LOSS;
            var5['type'] = var6;
            var6 = 5;
            var6 = var4[var6];
            var7 = var8.bind(var10)(var6);
            var6 = var7.getStreamErrorContext;
            var4 = var4[var11];
            var8 = var8.bind(var10)(var4);
            var4 = var8.encodeStreamKey;
            var4 = var4.bind(var8)(var9);
            var12 = var6.bind(var7)(var4);
            var13 = var5;
            var4 = copyDataProperties(var13, var12);
            var4 = new Array(1);
            var4[0] = var5;
            var3 = var4;
 326:
            var2 = var3;
 329:
            return var2;
 331:
            return var1;
 333:
            return var1;
 335:
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamSendHighPacketLossDefinition'] = var2;
    return var1;
})();