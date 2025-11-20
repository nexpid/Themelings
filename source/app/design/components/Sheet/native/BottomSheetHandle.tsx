// app/design/components/Sheet/native/BottomSheetHandle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/BottomSheetHandle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBottomSheetImperativeHandle(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = var5.useImperativeHandle;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = arg1;
        var1 = function() {
            var1 = {};
            var3 = function expandActionSheet() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var1 = var2.expand;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['expandActionSheet'] = var3;
            var3 = function closeActionSheet(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var3.force;
case 4:
                    var3 = true;
                    if(!(var3 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = var4.close;
                    var3 = var3.bind(var4)();
                    _fun0002_ip = 7; continue _fun0002;
case 6:
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var2 = var3.forceClose;
                    var2 = var2.bind(var3)();
case 7:
                    return var1;
                }
            };
            var1['closeActionSheet'] = var3;
            var3 = function collapseActionSheet() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var1 = var2.collapse;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['collapseActionSheet'] = var3;
            var2 = function snapToIndex(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 3:
                    var2 = var3.snapToIndex;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['snapToIndex'] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        var1 = undefined;
        return var1;
    };
    var3['useBottomSheetImperativeHandle'] = var2;
    return var1;
})();