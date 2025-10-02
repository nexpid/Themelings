// app/modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx
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
        var3 = _closure1_slot3;
        var2 = var3.getTimedoutVideos;
        var4 = var2.bind(var3)();
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var4 = var2.bind(var3)(var4);
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var2 = var1.userId;
                var3 = var1.videoStreamId;
                var4 = _closure1_slot2;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var1 === var2;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = null;
                var1 = var2 != var3;
case 2:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVError;
            var2 = var2.VIDEO_STREAM_SENDER_READY_TIMEOUT;
            var1['type'] = var2;
            var5 = arg1;
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var5 = var1.mediaContext;
        var4 = var1.userId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorVideoStreamSenderReadyTimeoutDefinition'] = var2;
    return var1;
})();