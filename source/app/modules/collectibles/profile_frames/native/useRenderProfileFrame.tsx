// app/modules/collectibles/profile_frames/native/useRenderProfileFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/useRenderProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRenderProfileFrame(arg1, arg2) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 3;
        var1 = var5[var1];
        var8 = undefined;
        var5 = var4.bind(var8)(var1);
        var4 = arg1;
        var1 = arg2;
        var7 = var5.bind(var8)(var4, var1);
        var _closure2_slot0 = var7;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var1 = 0;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4.bind(var8)(var6, var3);
        var3 = var4[var1];
        var _closure2_slot1 = var3;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot2 = var1;
        var1 = {};
        var8 = var5.useCallback;
        var6 = new Array(2);
        var6[0] = var7;
        var6[1] = var3;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = undefined;
                return var1;
case 2:
                var4 = _closure1_slot4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var1['frame'] = var6;
                var5 = _closure2_slot1;
                var1['containerWidth'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var5)(var4, var6);
        var1['renderProfileFrame'] = var4;
        var6 = var5.useCallback;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = undefined;
                return var1;
case 2:
                var4 = _closure1_slot4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var1['frame'] = var6;
                var5 = _closure2_slot1;
                var1['containerWidth'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var3 = var6.bind(var5)(var3, var4);
        var1['renderProfileFrameBackdrop'] = var3;
        var4 = var5.useCallback;
        var3 = function(arg1) {
            var3 = _closure2_slot2;
            var1 = global;
            var4 = var1.Math;
            var2 = var4.floor;
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var1 = var1.width;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['onContainerLayout'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();