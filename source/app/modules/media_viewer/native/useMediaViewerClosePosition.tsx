// app/modules/media_viewer/native/useMediaViewerClosePosition.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function computeClosePosition(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var6 = arg3;
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var1['height'] = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = arg1;
            var1 = var4.bind(var5)(var3, var2, var6);
case 4:
            var1 = var1.height;
            var2 = var2 + var1;
            var1 = 2;
            var1 = var2 / var1;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMediaViewerClosePosition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaViewerClosePosition(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.index;
            var _closure2_slot0 = var6;
            var9 = var1.sources;
            var _closure2_slot1 = var9;
            var4 = var1.onClose;
            var14 = undefined;
            if(!(var4 === var14)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot5;
case 5:
            var8 = var1.windowHeight;
            var _closure2_slot2 = var8;
            var3 = var1.windowWidth;
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var14;
            var _closure2_slot5 = var14;
            var _closure2_slot6 = var14;
            var5 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 4;
            var1 = var15[var1];
            var1 = var5.bind(var14)(var1);
            var11 = var1.bind(var14)(var4);
            _closure2_slot4 = var11;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var1 = function() {
                var5 = _closure1_slot8;
                var4 = _closure2_slot3;
                var3 = _closure2_slot2;
                var2 = _closure2_slot1;
                var6 = _closure2_slot0;
                var1 = var6.get;
                var1 = var1.bind(var6)();
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7 = var4.bind(var5)(var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var7 = var4.bind(var14)(var7, var1);
            var1 = 0;
            var1 = var7[var1];
            var4 = 1;
            var4 = var7[var4];
            _closure2_slot5 = var4;
            var7 = var5.useCallback;
            var4 = new Array(4);
            var4[0] = var11;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var3;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = arg1;
                    var6 = var3[var2];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0003_ip = 7; continue _fun0003 }
case 2:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 7:
                    var3 = _closure2_slot5;
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot3;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var5.bind(var1)(var4, var2, var6);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7 = var7.bind(var5)(var3, var4);
            _closure2_slot6 = var7;
            var13 = _closure1_slot0;
            var12 = 5;
            var3 = var15[var12];
            var9 = var13.bind(var14)(var3);
            var8 = var9.useAnimatedReaction;
            var4 = function h() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = {};
            var3['index'] = var6;
            var4['__closure'] = var3;
            var3 = 5031282724746.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot6;
            var4['__initData'] = var3;
            var3 = function f(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot6;
                var3 = var3.bind(var4)(var2);
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = {};
            var12 = var15[var12];
            var12 = var13.bind(var14)(var12);
            var12 = var12.runOnJS;
            var11['runOnJS'] = var12;
            var11['setClosePosition'] = var7;
            var3['__closure'] = var11;
            var11 = 2709880768438.0;
            var3['__workletHash'] = var11;
            var10 = _closure1_slot7;
            var3['__initData'] = var10;
            var3 = var8.bind(var9)(var4, var3);
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();