// app/modules/errors/hooks/useVideoReadyTimeout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 20;
    var4 = var4 * var7;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/hooks/useVideoReadyTimeout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoReadyTimeout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.streamId;
            var _closure2_slot0 = var9;
            var7 = var3.userId;
            var _closure2_slot1 = var7;
            var5 = var3.videoSpinnerContext;
            var1 = var3.streamKey;
            var _closure2_slot2 = var1;
            var8 = var3.loading;
            var _closure2_slot3 = var8;
            var10 = var3.paused;
            var11 = undefined;
            if(!(var10 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var14 = _closure1_slot2;
            var13 = var14.useRef;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var12 = 2;
            var12 = var4[var12];
            var12 = var6.bind(var11)(var12);
            var12 = var12.Timeout;
            var15 = var12.prototype;
            var15 = Object.create(var15, {constructor: {value: var12}});
            var18 = var15;
            var12 = new var18[var12](var17);
            var12 = var12 instanceof Object ? var12 : var15;
            var12 = var13.bind(var14)(var12);
            _closure2_slot5 = var12;
            var12 = 3;
            var4 = var4[var12];
            var4 = var6.bind(var11)(var4);
            var4 = var4.VideoSpinnerContext;
            var4 = var4.SELF_STREAM;
            if(!(var5 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var6.bind(var11)(var4);
            var4 = var4.VideoSpinnerContext;
            var4 = var4.REMOTE_STREAM;
            if(!(var5 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var11)(var4);
            var4 = var4.MediaEngineContextTypes;
            var6 = var4.DEFAULT;
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var5 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 4;
            var4 = var12[var4];
            var4 = var5.bind(var11)(var4);
            var4 = var4.MediaEngineContextTypes;
            var6 = var4.STREAM;
case 7:
            _closure2_slot6 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var6;
            var3[4] = var1;
            var3[5] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var5 = var4.WindowVisibilityVideoManager;
                    var4 = var5.isIncomingVideoEnabled;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                    var3 = _closure2_slot5;
                    var5 = var3.current;
                    var _closure3_slot0 = var5;
                    var4 = var5.start;
                    var3 = _closure1_slot3;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.videoStreamTimedOut;
                        var11 = _closure2_slot0;
                        var10 = _closure2_slot1;
                        var9 = _closure2_slot6;
                        var8 = _closure2_slot2;
                        var12 = var7;
                        var2 = var12[var6](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var1 = {};
            var4 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                var1 = _closure2_slot5;
                var3 = var1.current;
                var1 = var3.stop;
                var1 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.clearVideoStreamTimeout;
                var3 = _closure2_slot6;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['onReady'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();