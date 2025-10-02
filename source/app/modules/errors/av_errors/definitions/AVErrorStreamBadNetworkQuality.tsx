// app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.RTCConnectionQuality;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        var3 = _closure1_slot2;
        var2 = var3.getAllActiveStreamKeys;
        var4 = var2.bind(var3)();
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot2;
                var1 = var2.getQuality;
                var4 = var1.bind(var2)(var5);
                var1 = _closure1_slot3;
                var2 = var1.BAD;
                var1 = null;
                if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.AVError;
                var3 = var3.STREAM_BAD_NETWORK_QUALITY;
                var2['type'] = var3;
                var3 = 3;
                var3 = var7[var3];
                var4 = var6.bind(var4)(var3);
                var3 = var4.getStreamErrorContext;
                var8 = var3.bind(var4)(var5);
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                var1 = var2;
case 2:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 4;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.isNotNullish;
        var1 = var2.bind(var3)(var1);
        return var1;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamBadNetworkQualityDefinition'] = var2;
    return var1;
})();