// app/modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {};
    var6 = 'function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,keyboardTypeSharedValue,KeyboardTypes,insets,customKeyboardHeight}=this.__closure;const height=keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()?keyboardOpenedHeight.get():keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM?insets.get().bottom:insets.get().bottom+customKeyboardHeight;return height;}';
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = 6;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelSafeAreaHeightSharedValue() {
        var3 = _closure1_slot1;
        var11 = _closure1_slot2;
        var2 = 0;
        var2 = var11[var2];
        var10 = undefined;
        var2 = var3.bind(var10)(var2);
        var7 = var2.bind(var10)();
        var _closure2_slot0 = var7;
        var2 = 1;
        var2 = var11[var2];
        var2 = var3.bind(var10)(var2);
        var2 = var2.bind(var10)();
        var8 = var2.keyboardOpenOrOpening;
        var _closure2_slot1 = var8;
        var12 = var2.keyboardOpenedHeight;
        var _closure2_slot2 = var12;
        var2 = 2;
        var2 = var11[var2];
        var2 = var3.bind(var10)(var2);
        var6 = var2.bind(var10)();
        var _closure2_slot3 = var6;
        var9 = _closure1_slot0;
        var2 = 3;
        var2 = var11[var2];
        var3 = var9.bind(var10)(var2);
        var2 = var3.useDerivedValue;
        var1 = function n() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                if(var1) { _fun0001_ip = 173; continue _fun0001 }
 22:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var4 = var4[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var6 = var4.keyboardWillOpenSharedValue;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                if(var4) { _fun0001_ip = 173; continue _fun0001 }
 65:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var3 = var1.keyboardTypeSharedValue;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 5;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.SYSTEM;
                if(!(var3 !== var1)) { _fun0001_ip = 153; continue _fun0001 }
 125:
                var3 = _closure2_slot0;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = var1.bottom;
                var1 = _closure2_slot3;
                var1 = var3 + var1;
                _fun0001_ip = 171; continue _fun0001;
 153:
                var4 = _closure2_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1 = var3.bottom;
 171:
                _fun0001_ip = 186; continue _fun0001;
 173:
                var3 = _closure2_slot2;
                var2 = var3.get;
                var1 = var2.bind(var3)();
 186:
                return var1;
            }
        };
        var5 = {};
        var5['keyboardOpenOrOpening'] = var8;
        var8 = 4;
        var13 = var11[var8];
        var13 = var9.bind(var10)(var13);
        var13 = var13.keyboardWillOpenSharedValue;
        var5['keyboardWillOpenSharedValue'] = var13;
        var5['keyboardOpenedHeight'] = var12;
        var8 = var11[var8];
        var8 = var9.bind(var10)(var8);
        var8 = var8.keyboardTypeSharedValue;
        var5['keyboardTypeSharedValue'] = var8;
        var8 = 5;
        var8 = var11[var8];
        var8 = var9.bind(var10)(var8);
        var8 = var8.KeyboardTypes;
        var5['KeyboardTypes'] = var8;
        var5['insets'] = var7;
        var5['customKeyboardHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 1427470078601.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot3;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();