// app/modules/panels/morphable/native/getAdjustedBottomOffsets.tsx
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
    var7 = var5.bind(var1)(var4);
    var4 = var7.isAndroid;
    var8 = var4.bind(var7)();
    var _closure1_slot0 = var8;
    var4 = {};
    var7 = 'function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}';
    var4['code'] = var7;
    var2 = function t(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.screenBottomOffset;
            var4 = var1.safeAreaBottom;
            var5 = var1.keyboardHeight;
            var1 = 0;
            var2 = var3;
            if(!(var5 > var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var1 = 0;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5;
case 4:
            var1 = var1 - var4;
            var2 = var3 + var1;
case 2:
            var1 = {};
            var1['bottomOffset'] = var2;
            return var1;
        }
    };
    var7 = {};
    var7['IS_ANDROID'] = var8;
    var2['__closure'] = var7;
    var7 = 9166664651792.0;
    var2['__workletHash'] = var7;
    var2['__initData'] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/native/getAdjustedBottomOffsets.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();