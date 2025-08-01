// app/design/components/Sheet/native/BottomSheetTextInput.native.tsx
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
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var3 = arg1;
        var7 = var3.onFocus;
        var6 = var3.onBlur;
        var4 = null;
        var2 = Object.create(var4);
        var1 = 0;
        var2['onFocus'] = var1;
        var2['onBlur'] = var1;
        var14 = {};
        var13 = var3;
        var12 = var2;
        var13 = copyDataProperties(var14, var13, var12);
        var1 = arg2;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var2 = var3.useRef;
        var11 = var2.bind(var3)(var4);
        var _closure2_slot1 = var11;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 2;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var2['onFocus'] = var7;
        var2['onBlur'] = var6;
        var2 = var3.bind(var4)(var2);
        var7 = var2.onFocus;
        var6 = var2.onBlur;
        var2 = _closure1_slot0;
        var3 = 3;
        var3 = var9[var3];
        var10 = var2.bind(var4)(var3);
        var3 = var10.useKeyboardBlurring;
        var3 = var3.bind(var10)(var11);
        var3 = _closure1_slot4;
        var1 = 4;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TextInput;
        var1 = {};
        var8 = function ref(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var2 = _closure2_slot1;
                var2['current'] = var3;
                var2 = _closure2_slot0;
                var4 = 'function';
                var2 = typeof var2;
                if(!(var4 !== var2)) { _fun0001_ip = 53; continue _fun0001 }
 31:
                var4 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 64; continue _fun0001 }
 41:
                var2 = _closure2_slot0;
                var2['current'] = var3;
                _fun0001_ip = 64; continue _fun0001;
 53:
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 64:
                var1 = undefined;
                return var1;
            }
        };
        var1['ref'] = var8;
        var1['onFocus'] = var7;
        var1['onBlur'] = var6;
        var14 = var1;
        var5 = copyDataProperties(var14, var13);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/BottomSheetTextInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BottomSheetTextInput'] = var2;
    return var1;
})();