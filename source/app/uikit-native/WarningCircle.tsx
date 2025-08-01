// app/uikit-native/WarningCircle.tsx
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
    var4 = 'uikit-native/WarningCircle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WarningCircle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var11 = var3.width;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 14:
            var11 = 20;
 17:
            var10 = var3.height;
            if(!(var10 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var10 = 20;
 29:
            var7 = var3.color;
            if(!(var7 === var4)) { _fun0001_ip = 44; continue _fun0001 }
 38:
            var7 = 'currentColor';
 44:
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
            var10 = '0 0 20 20';
            var9 = 'viewBox';
            var1[var9] = var10;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Path;
            var5 = {'d': 'M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z', 'fillRule': 'evenodd', 'clipRule': 'evenodd'};
            var5['fill'] = var7;
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