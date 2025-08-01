// app/modules/screen/useWindowDimensionsSharedValue.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var13 = true;
    var2['value'] = var13;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var7[var2];
    var1 = undefined;
    var11 = var6.bind(var1)(var8);
    var9 = var11.makeMutable;
    var8 = {};
    var10 = 1;
    var12 = var7[var10];
    var14 = var6.bind(var1)(var12);
    var12 = var14.getWindowDimensions;
    var16 = var12.bind(var14)();
    var17 = var8;
    var12 = copyDataProperties(var17, var16);
    var8 = var9.bind(var11)(var8);
    var _closure1_slot2 = var8;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.makeMutable;
    var2 = {};
    var10 = var7[var10];
    var12 = var6.bind(var1)(var10);
    var11 = var12.getWindowDimensions;
    var10 = {};
    var10['ignoreKeyboard'] = var13;
    var16 = var11.bind(var12)(var10);
    var17 = var2;
    var10 = copyDataProperties(var17, var16);
    var2 = var8.bind(var9)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = function(arg1, arg2) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 3;
        var6 = var5[var3];
        var1 = undefined;
        var8 = var4.bind(var1)(var6);
        var7 = _closure1_slot2;
        var6 = arg1;
        var6 = var8.bind(var1)(var7, var6);
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = _closure1_slot3;
        var2 = arg2;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var5.bind(var1)(var2);
    var2 = {};
    var5 = 'function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}';
    var2['code'] = var5;
    var _closure1_slot4 = var2;
    var2 = function() {
        var1 = function getWindowDimensionsWorklet() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0001_ip = 11; continue _fun0001 }
 9:
                var1 = undefined;
 11:
                var3 = null;
                var3 = var3 == var1;
                var2 = undefined;
                if(var3) { _fun0001_ip = 28; continue _fun0001 }
 22:
                var2 = var1.ignoreKeyboard;
 28:
                var1 = true;
                if(!(var1 !== var2)) { _fun0001_ip = 52; continue _fun0001 }
 34:
                var2 = _closure1_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                _fun0001_ip = 68; continue _fun0001;
 52:
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = var2.bind(var3)();
 68:
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot3;
        var3['windowDimensionsSharedValueIgnoringKeyboard'] = var4;
        var4 = _closure1_slot2;
        var3['windowDimensionsSharedValue'] = var4;
        var1['__closure'] = var3;
        var3 = 17271034964949.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/screen/useWindowDimensionsSharedValue.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useWindowDimensionsSharedValue() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arguments[0];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var1 = undefined;
 11:
            var3 = null;
            var3 = var3 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
 22:
            var2 = var1.ignoreKeyboard;
 28:
            var1 = true;
            if(!(var1 !== var2)) { _fun0002_ip = 43; continue _fun0002 }
 34:
            var1 = _closure1_slot2;
            _fun0002_ip = 50; continue _fun0002;
 43:
            var1 = _closure1_slot3;
 50:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getWindowDimensionsWorklet'] = var2;
    return var1;
})();