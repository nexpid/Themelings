// app/modules/errors/hooks/useVideoStreamError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useVideoStreamErrorContext(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot2;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot1;
                if(!(var2 !== var1)) { _fun0001_ip = 141; continue _fun0001 }
 28:
                var4 = _closure1_slot3;
                var3 = var4.getActiveErrorsOfType;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var1 = var10[var2];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var1 = var1.AVError;
                var1 = var1.VIDEO_STREAM_RECEIVER_READY_TIMEOUT;
                var14 = var3.bind(var4)(var1);
                var1 = new Array(0);
                var13 = 0;
                var15 = var1;
                var13 = arraySpread(var15, var14, var13);
                var7 = _closure1_slot3;
                var4 = var7.getActiveErrorsOfType;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
                var14 = var4.bind(var7)(var2);
                var15 = var1;
                var2 = arraySpread(var15, var14, var13);
                var4 = var1;
                _fun0001_ip = 332; continue _fun0001;
 141:
                var2 = _closure2_slot0;
                var1 = _closure1_slot4;
                var1 = var1.STREAM;
                if(!(var2 !== var1)) { _fun0001_ip = 165; continue _fun0001 }
 159:
                var3 = new Array(0);
                _fun0001_ip = 214; continue _fun0001;
 165:
                var7 = _closure1_slot3;
                var2 = var7.getActiveErrorsOfType;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var8 = var8[var1];
                var1 = undefined;
                var1 = var9.bind(var1)(var8);
                var1 = var1.AVError;
                var1 = var1.SCREENSHARE_OS_ERROR;
                var3 = var2.bind(var7)(var1);
 214:
                var1 = new Array(0);
                var13 = 0;
                var15 = var1;
                var14 = var3;
                var13 = arraySpread(var15, var14, var13);
                var12 = _closure1_slot3;
                var11 = var12.getActiveErrorsOfType;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var3 = var10[var2];
                var8 = undefined;
                var3 = var9.bind(var8)(var3);
                var3 = var3.AVError;
                var3 = var3.VIDEO_STREAM_SENDER_READY_TIMEOUT;
                var14 = var11.bind(var12)(var3);
                var15 = var1;
                var13 = arraySpread(var15, var14, var13);
                var7 = _closure1_slot3;
                var6 = var7.getActiveErrorsOfType;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
                var14 = var6.bind(var7)(var2);
                var15 = var1;
                var2 = arraySpread(var15, var14, var13);
                var4 = var1;
 332:
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                if(!var1) { _fun0001_ip = 389; continue _fun0001 }
 346:
                var1 = var4[var3];
                var6 = var1.mediaContext;
                var2 = _closure2_slot0;
                if(!(var6 === var2)) { _fun0001_ip = 377; continue _fun0001 }
 364:
                var6 = var1.userId;
                var2 = _closure2_slot1;
                if(!(var6 !== var2)) { _fun0001_ip = 393; continue _fun0001 }
 377:
                var3 = var3 + 1;
                var2 = var4.length;
                if(var3 < var2) { _fun0001_ip = 346; continue _fun0001 }
 389:
                var2 = undefined;
                return var2;
 393:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MediaEngineContextTypes;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/errors/hooks/useVideoStreamError.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useVideoStreamError(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot5;
            var1 = undefined;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var1)(var3, var2);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0002_ip = 35; continue _fun0002 }
 30:
            var1 = var2.type;
 35:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useVideoStreamErrorContext'] = var2;
    return var1;
})();