// app/modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.getReportInboundErrors;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0001_ip = 79; continue _fun0001 }
 40:
            var3 = _closure1_slot2;
            var2 = var3.getAllActiveStreams;
            var5 = var2.bind(var3)();
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot4;
                    var3 = var5.getRTCConnection;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var10 = 4;
                    var2 = var2[var10];
                    var9 = undefined;
                    var6 = var6.bind(var9)(var2);
                    var2 = var6.encodeStreamKey;
                    var2 = var2.bind(var6)(var8);
                    var5 = var3.bind(var5)(var2);
                    var3 = null;
                    var2 = var3 == var5;
                    var7 = undefined;
                    if(var2) { _fun0002_ip = 78; continue _fun0002 }
 68:
                    var2 = var5.getMediaEngineConnectionId;
                    var7 = var2.bind(var5)();
 78:
                    if(!(var3 != var7)) { _fun0002_ip = 305; continue _fun0002 }
 85:
                    var5 = var8.ownerId;
                    var6 = _closure1_slot3;
                    var2 = var6.getId;
                    var2 = var2.bind(var6)();
                    if(!(var5 !== var2)) { _fun0002_ip = 303; continue _fun0002 }
 112:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = var5.bind(var9)(var2);
                    var5 = var6.getAccumulatedStatsWithMinDatapoints;
                    var2 = var8.ownerId;
                    var2 = var5.bind(var6)(var7, var2);
                    if(!(var3 != var2)) { _fun0002_ip = 301; continue _fun0002 }
 157:
                    var3 = var2.short;
                    var3 = var3.packetLossRate;
                    var5 = 100;
                    var6 = var5 * var3;
                    var3 = 10;
                    if(!(!(var6 > var3))) { _fun0002_ip = 203; continue _fun0002 }
 183:
                    var2 = var2.long;
                    var2 = var2.packetLossRate;
                    var2 = var5 * var2;
                    if(!(var2 > var3)) { _fun0002_ip = 301; continue _fun0002 }
 203:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var5 = 5;
                    var5 = var4[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVError;
                    var5 = var5.STREAM_VIEW_HIGH_PACKET_LOSS;
                    var2['type'] = var5;
                    var5 = 6;
                    var5 = var4[var5];
                    var6 = var7.bind(var9)(var5);
                    var5 = var6.getStreamErrorContext;
                    var4 = var4[var10];
                    var7 = var7.bind(var9)(var4);
                    var4 = var7.encodeStreamKey;
                    var4 = var4.bind(var7)(var8);
                    var11 = var5.bind(var6)(var4);
                    var12 = var2;
                    var4 = copyDataProperties(var12, var11);
                    var2 = var3.bind(var1)(var2);
 301:
                    return var1;
 303:
                    return var1;
 305:
                    return var1;
                }
            };
            var2 = new Array(0);
            var1 = var4.bind(var5)(var3, var2);
 79:
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamViewHighPacketLossDefinition'] = var2;
    return var1;
})();