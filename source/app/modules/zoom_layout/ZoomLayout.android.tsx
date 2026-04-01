// app/modules/zoom_layout/ZoomLayout.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PixelRatio;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var3 = null;
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var4 = var5.useImperativeHandle;
        var3 = arg2;
        var2 = function() {
            var1 = {};
            var3 = function zoomTo(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.x;
                    var6 = var2.y;
                    var8 = var2.scale;
                    var1 = undefined;
                    if(!(var8 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = 2;
case 2:
                    var7 = var2.animated;
                    if(!(var7 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = true;
case 4:
                    var4 = _closure2_slot0;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var9 = _closure1_slot4;
                    var5 = var9.get;
                    var5 = var5.bind(var9)();
                    var3 = var3 * var5;
                    var9 = var6 * var5;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.Commands;
                    var5 = var6.zoomTo;
                    var2 = _closure2_slot0;
                    var14 = var2.current;
                    var2 = var3 / var8;
                    var13 = var2 - var3;
                    var2 = var9 / var8;
                    var12 = var2 - var9;
                    var15 = var6;
                    var11 = var8;
                    var10 = var7;
                    var2 = var15[var5](var14, var13, var12, var11, var10, var9);
case 6:
                    return var1;
                }
            };
            var1['zoomTo'] = var3;
            var2 = function unzoom() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = {};
case 8:
                    var5 = var2.animated;
                    if(!(var5 === var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = true;
case 10:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.Commands;
                    var3 = var4.unzoom;
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2, var5);
case 12:
                    return var1;
                }
            };
            var1['unzoom'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot5;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var7 = arg1;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var5 = 'ref';
        var1[4] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/zoom_layout/ZoomLayout.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();