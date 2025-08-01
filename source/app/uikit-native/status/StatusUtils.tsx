// app/uikit-native/status/StatusUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.STATUS_PADDING;
    var _closure1_slot0 = var7;
    var4 = var4.StatusSizes;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/status/StatusUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAnimatedTypingTranslateX(arg1) {
        var2 = arg1;
        var1 = 2;
        var2 = var2 / var1;
        var1 = 6;
        var1 = var2 - var1;
        return var1;
    };
    var3['getAnimatedTypingTranslateX'] = var4;
    var4 = function getMobileStatusContainerRect(arg1) {
        var1 = {};
        var3 = _closure1_slot0;
        var2 = 2;
        var3 = var2 * var3;
        var2 = arg1;
        var3 = var2 + var3;
        var1['width'] = var3;
        var2 = 1.4;
        var2 = var2 * var3;
        var1['height'] = var2;
        var2 = 4;
        var2 = var3 / var2;
        var1['cornerRadius'] = var2;
        return var1;
    };
    var3['getMobileStatusContainerRect'] = var4;
    var2 = function getStatusTypingDimensions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var2 = var2.SMALL;
            if(!(var2 !== var3)) { _fun0001_ip = 54; continue _fun0001 }
 20:
            var2 = _closure1_slot1;
            var2 = var2.XSMALL;
            if(!(var2 !== var3)) { _fun0001_ip = 54; continue _fun0001 }
 34:
            var1 = _closure1_slot1;
            var1 = var1.REFRESH_MEDIUM_10;
            var6 = 28;
            var2 = 6;
            if(!(var1 === var3)) { _fun0001_ip = 60; continue _fun0001 }
 54:
            var6 = 22;
            var2 = 4;
 60:
            var1 = {};
            var1['width'] = var6;
            var3 = global;
            var5 = var3.Math;
            var4 = var5.floor;
            var3 = 2.33;
            var3 = var6 / var3;
            var3 = var4.bind(var5)(var3);
            var1['height'] = var3;
            var1['dotSize'] = var2;
            return var1;
        }
    };
    var3['getStatusTypingDimensions'] = var2;
    return var1;
})();