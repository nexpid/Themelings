// app/modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx
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
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.ApplicationStreamStates;
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function getActiveErrors(arg1) {
        var2 = arg1;
        var4 = var2.activeStreams;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var3 = var2.state;
                var1 = _closure1_slot2;
                var1 = var1.FAILED;
                var1 = var3 === var1;
                if(!var1) { _fun0001_ip = 40; continue _fun0001 }
 28:
                var3 = var2.errorCode;
                var2 = null;
                var1 = var2 == var3;
 40:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.AVError;
            var2 = var2.STREAM_FAILED_TO_START;
            var1['type'] = var2;
            var2 = 2;
            var2 = var7[var2];
            var4 = var6.bind(var5)(var2);
            var3 = var4.getStreamErrorContext;
            var2 = 3;
            var2 = var7[var2];
            var6 = var6.bind(var5)(var2);
            var5 = var6.encodeStreamKey;
            var2 = arg1;
            var2 = var5.bind(var6)(var2);
            var8 = var3.bind(var4)(var2);
            var9 = var1;
            var2 = copyDataProperties(var9, var8);
            return var1;
        };
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamFailedToStartDefinition'] = var2;
    return var1;
})();