// app/uikit-native/CloseIcon.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/CloseIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Close(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var11 = var3.width;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 24;
case 2:
            var10 = var3.height;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 24;
case 4:
            var7 = var3.color;
            if(!(var7 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = 'currentColor';
case 6:
            var2 = {'width': 0, 'height': 0, 'color': 0};
            var13 = null;
            var14 = var2;
            var1 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var3;
            var12 = var2;
            var13 = copyDataProperties(var14, var13, var12);
            var3 = _closure1_slot2;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var1 = var8[var5];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Svg;
            var1 = {};
            var14 = var1;
            var9 = copyDataProperties(var14, var13);
            var9 = 'width';
            var1[var9] = var11;
            var9 = 'height';
            var1[var9] = var10;
            var10 = '0 0 24 24';
            var9 = 'viewBox';
            var1[var9] = var10;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Path;
            var5 = {};
            var5['fill'] = var7;
            var7 = 'M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z';
            var5['d'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();