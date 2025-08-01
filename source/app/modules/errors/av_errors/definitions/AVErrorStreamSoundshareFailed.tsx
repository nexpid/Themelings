// app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaEngineHookTypes;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function getActiveErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var1 = var3.getCurrentUserActiveStream;
            var7 = var1.bind(var3)();
            var4 = null;
            var3 = var4 != var7;
            var8 = undefined;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 169; continue _fun0001 }
 33:
            var6 = _closure1_slot3;
            var5 = var6.getHookError;
            var3 = _closure1_slot4;
            var3 = var3.SOUND;
            var3 = var5.bind(var6)(var3);
            var3 = var4 != var3;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 169; continue _fun0001 }
 67:
            var3 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var2 = var9[var2];
            var2 = var6.bind(var8)(var2);
            var2 = var2.AVError;
            var2 = var2.STREAM_SOUNDSHARE_FAILED;
            var3['type'] = var2;
            var2 = 4;
            var2 = var9[var2];
            var5 = var6.bind(var8)(var2);
            var4 = var5.getStreamErrorContext;
            var2 = 5;
            var2 = var9[var2];
            var6 = var6.bind(var8)(var2);
            var2 = var6.encodeStreamKey;
            var2 = var2.bind(var6)(var7);
            var10 = var4.bind(var5)(var2);
            var11 = var3;
            var2 = copyDataProperties(var11, var10);
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 169:
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
    var4 = 'modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorStreamSoundshareFailedDefinition'] = var2;
    return var1;
})();