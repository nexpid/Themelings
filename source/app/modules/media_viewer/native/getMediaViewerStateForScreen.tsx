// app/modules/media_viewer/native/getMediaViewerStateForScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/getMediaViewerStateForScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getMediaViewerStateForScreen(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var4 = var1[var8];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.flattenSource;
            var4 = arg3;
            var1 = true;
            var4 = var5.bind(var6)(var4, var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3 / var2;
            var6 = var4.width;
            var1 = var4.height;
            var1 = var6 / var1;
            var6 = var4.width;
            if(!(var6 < var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.height;
            if(!(!(var6 < var2))) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(!(!(var1 > var5))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var4.height;
            var12 = var2 / var6;
            var6 = {};
            var9 = 1;
            var7 = var9 / var12;
            var7 = var7 + var9;
            var6['maximumZoomScale'] = var7;
            var7 = global;
            var11 = var7.Math;
            var10 = var11.floor;
            var9 = var4.width;
            var9 = var9 * var12;
            var9 = var10.bind(var11)(var9);
            var6['width'] = var9;
            var9 = var7.Math;
            var7 = var9.floor;
            var7 = var7.bind(var9)(var2);
            var6['height'] = var7;
            return var6;
case 7:
            var6 = var4.width;
            var11 = var3 / var6;
            var6 = {};
            var9 = 1;
            var7 = var9 / var11;
            var7 = var7 + var9;
            var6['maximumZoomScale'] = var7;
            var7 = global;
            var10 = var7.Math;
            var9 = var10.floor;
            var9 = var9.bind(var10)(var3);
            var6['width'] = var9;
            var10 = var7.Math;
            var9 = var10.floor;
            var7 = var4.height;
            var7 = var7 * var11;
            var7 = var9.bind(var10)(var7);
            var6['height'] = var7;
            return var6;
case 6:
            if(!(!(var1 > var5))) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var4.height;
            var5 = var1 / var2;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var1 = var4.width;
            var5 = var1 / var3;
case 11:
            var1 = 1.01;
            var7 = var5 / var1;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.min;
            var1 = 0.5;
            var7 = var5.bind(var6)(var1, var7);
            var1 = {};
            var6 = 1;
            var5 = var6;
            if(!(var8 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var6 / var7;
case 12:
            var1['maximumZoomScale'] = var5;
            var5 = var4.width;
            var1['width'] = var5;
            var4 = var4.height;
            var1['height'] = var4;
            return var1;
case 2:
            var1 = {};
            var4 = 1;
            var1['maximumZoomScale'] = var4;
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();