// app/modules/voice_panel/native/utils/calculateContentCenterOffset.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var9;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var8 = var4.EDGE_GUTTER;
    var _closure1_slot2 = var8;
    var4 = {};
    var7 = 'function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}';
    var4['code'] = var7;
    var2 = function t(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.contentHeight;
            var2 = var1.windowHeight;
            var1 = var1.safeArea;
            var3 = global;
            var7 = var3.Math;
            var5 = var7.max;
            var4 = var1.top;
            var9 = _closure1_slot2;
            var5 = var5.bind(var7)(var4, var9);
            var7 = var3.Math;
            var4 = var7.max;
            var1 = var1.bottom;
            var9 = var4.bind(var7)(var1, var9);
            var1 = var5;
            if(!(!(var2 <= var8))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.Math;
            var3 = var4.max;
            var10 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 1;
            var6 = var7[var6];
            var7 = undefined;
            var6 = var10.bind(var7)(var6);
            var2 = var2 - var5;
            var2 = var2 - var9;
            var8 = var2 - var8;
            var2 = 2;
            var2 = var8 / var2;
            var2 = var6.bind(var7)(var2);
            var2 = var5 + var2;
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var7 = {};
    var7['EDGE_GUTTER'] = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var7['roundToNearestPixel'] = var8;
    var2['__closure'] = var7;
    var7 = 9988657249690.0;
    var2['__workletHash'] = var7;
    var2['__initData'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/calculateContentCenterOffset.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();