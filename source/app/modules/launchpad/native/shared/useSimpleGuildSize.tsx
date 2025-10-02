// app/modules/launchpad/native/shared/useSimpleGuildSize.tsx
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
    var4 = 'modules/launchpad/native/shared/useSimpleGuildSize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSimpleGuildSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.size;
            var _closure2_slot0 = var7;
            var8 = var2.style;
            var _closure2_slot1 = var8;
            var2 = undefined;
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var2;
            var2 = null;
            var2 = var2 != var7;
            var4 = 48;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7;
case 2:
            _closure2_slot2 = var4;
            var6 = _closure1_slot0;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var4;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['height'] = var2;
                return var1;
            };
            var3 = var5.bind(var6)(var2, var3);
            _closure2_slot3 = var3;
            var5 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var3;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = {};
                    var1 = 'relative';
                    var3['position'] = var1;
                    var1 = _closure2_slot0;
                    var5 = null;
                    var6 = var5 == var1;
                    var4 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = 4;
case 4:
                    var3['marginLeft'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var5 == var4;
                    var1 = 0;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = 4;
case 6:
                    var3['marginRight'] = var1;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = _closure2_slot3;
                    var1[1] = var3;
                    var2 = _closure2_slot1;
                    var1[2] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var1, var2);
            var1 = {};
            var1['containerSize'] = var4;
            var1['containerSizeStyle'] = var3;
            var1['containerStyles'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();