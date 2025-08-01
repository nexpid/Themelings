// app/design/components/Tooltip/native/useTooltipPosition.native.tsx
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
    var4 = 'design/components/Tooltip/native/useTooltipPosition.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTooltipPosition(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var6 = arg2;
            var7 = arg3;
            var9 = arg4;
            var5 = arguments[4];
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var9;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var5 = 0;
 41:
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 211; continue _fun0002 }
 16:
                    var1 = _closure2_slot1;
                    if(!(var2 != var1)) { _fun0002_ip = 211; continue _fun0002 }
 27:
                    var1 = _closure2_slot0;
                    var6 = var1.height;
                    var9 = var1.width;
                    var1 = _closure2_slot1;
                    var7 = var1.x;
                    var10 = var1.y;
                    var8 = var1.width;
                    var3 = _closure2_slot2;
                    var1 = var3.x;
                    var5 = var3.y;
                    var2 = var3.width;
                    var3 = var3.height;
                    var5 = var5 - var10;
                    var7 = var1 - var7;
                    var1 = 2;
                    var2 = var2 / var1;
                    var2 = var7 + var2;
                    var1 = var9 / var1;
                    var7 = var2 - var1;
                    var1 = 12;
                    if(!(!(var7 < var1))) { _fun0002_ip = 146; continue _fun0002 }
 118:
                    var11 = var7 + var9;
                    var10 = var8 - var1;
                    var2 = 0;
                    if(!(var11 > var10)) { _fun0002_ip = 150; continue _fun0002 }
 132:
                    var8 = var8 - var7;
                    var8 = var8 - var9;
                    var2 = var8 - var1;
                    _fun0002_ip = 150; continue _fun0002;
 146:
                    var2 = var1 - var7;
 150:
                    var1 = {};
                    var7 = var7 + var2;
                    var1['tooltipX'] = var7;
                    var8 = _closure2_slot3;
                    var7 = 'top';
                    if(!(var7 !== var8)) { _fun0002_ip = 187; continue _fun0002 }
 173:
                    var7 = var5 + var3;
                    var3 = _closure2_slot4;
                    var3 = var7 + var3;
                    _fun0002_ip = 199; continue _fun0002;
 187:
                    var5 = var5 - var6;
                    var4 = _closure2_slot4;
                    var3 = var5 - var4;
 199:
                    var1['tooltipY'] = var3;
                    var1['adjustmentX'] = var2;
                    return var1;
 211:
                    var1 = {'tooltipX': 0, 'tooltipY': 0, 'adjustmentX': 0};
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();