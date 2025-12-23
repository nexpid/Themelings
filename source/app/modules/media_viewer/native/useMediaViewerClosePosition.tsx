// app/modules/media_viewer/native/useMediaViewerClosePosition.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMediaViewerClosePosition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaViewerClosePosition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.initialIndex;
            var6 = var1.onClose;
            var _closure2_slot0 = var6;
            var3 = var1.windowHeight;
            var8 = var1.windowWidth;
            var1 = var1.sources;
            var7 = var1[var4];
            var _closure2_slot1 = var7;
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var1['height'] = var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            var1 = var4.bind(var5)(var8, var3, var7);
case 4:
            var1 = var1.height;
            var3 = var3 + var1;
            var1 = 2;
            var1 = var3 / var1;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();