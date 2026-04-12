// app/modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var2 = true;
    var7['value'] = var2;
    var2 = '__esModule';
    var2 = var8.bind(var9)(var3, var2, var7);
    var7 = var1.BigInt;
    var1 = undefined;
    var2 = -3821;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function getActiveErrors(arg1) {
        var2 = arg1;
        var4 = var2.activeStreams;
        var3 = var4.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.errorCode;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var7 = undefined;
                var3 = var4.bind(var7)(var3);
                var3 = var3.AVError;
                var3 = var3.SCREENSHARE_OS_ERROR;
                var1['type'] = var3;
                var9 = var6.errorCode;
                var3 = 0;
                var3 = var5[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.isMac;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot2;
                if(!(var9 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var3 = var9.toString;
                var3 = var3.bind(var9)();
                _fun0001_ip = 5; continue _fun0001;
case 4:
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var5 = '';
                var4 = ' - your Mac may be low on disk space';
                var3 = var8.bind(var5)(var9, var4);
case 5:
                var1['errorMessage'] = var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var2 = var8[var2];
                var4 = var5.bind(var7)(var2);
                var3 = var4.getStreamErrorContext;
                var2 = 3;
                var2 = var8[var2];
                var5 = var5.bind(var7)(var2);
                var2 = var5.encodeStreamKey;
                var2 = var2.bind(var5)(var6);
                var10 = var3.bind(var4)(var2);
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                return var1;
            }
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
    var4 = 'modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorScreenshareOSErrorDefinition'] = var2;
    return var1;
})();