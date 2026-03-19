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
    var6 = 'function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardHeight}=this.__closure;if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return insets.get().bottom;}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return insets.get().bottom;}return customKeyboardHeight;}';
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
        var10 = _closure1_slot2;
        var2 = 0;
        var2 = var10[var2];
        var9 = undefined;
        var2 = var3.bind(var9)(var2);
        var11 = var2.bind(var9)();
        var _closure2_slot0 = var11;
        var2 = 1;
        var2 = var10[var2];
        var2 = var3.bind(var9)(var2);
        var2 = var2.bind(var9)();
        var14 = var2.keyboardOpenOrOpening;
        var _closure2_slot1 = var14;
        var12 = var2.keyboardOpenedHeight;
        var _closure2_slot2 = var12;
        var8 = _closure1_slot0;
        var2 = 2;
        var5 = var10[var2];
        var6 = var8.bind(var9)(var5);
        var5 = var6.useKeyboardTypeSharedValue;
        var7 = var5.bind(var6)();
        var _closure2_slot3 = var7;
        var2 = var10[var2];
        var5 = var8.bind(var9)(var2);
        var2 = var5.useKeyboardWillOpenSharedValue;
        var13 = var2.bind(var5)();
        var _closure2_slot4 = var13;
        var2 = 3;
        var2 = var10[var2];
        var2 = var3.bind(var9)(var2);
        var6 = var2.bind(var9)();
        var _closure2_slot5 = var6;
        var2 = 4;
        var2 = var10[var2];
        var3 = var8.bind(var9)(var2);
        var2 = var3.useDerivedValue;
        var1 = function n() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var3 = _closure2_slot3;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.KeyboardTypes;
                var1 = var1.SYSTEM;
                if(!(var3 !== var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var1 = _closure2_slot5;
                _fun0001_ip = 7; continue _fun0001;
case 5:
                var4 = _closure2_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1 = var3.bottom;
case 7:
                return var1;
case 2:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = 0;
                if(!(var1 <= var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = var2.bottom;
case 8:
                return var1;
            }
        };
        var5 = {};
        var5['keyboardOpenOrOpening'] = var14;
        var5['keyboardWillOpenSharedValue'] = var13;
        var5['keyboardOpenedHeight'] = var12;
        var5['insets'] = var11;
        var5['keyboardTypeSharedValue'] = var7;
        var7 = 5;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var7 = var7.KeyboardTypes;
        var5['KeyboardTypes'] = var7;
        var5['customKeyboardHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 16297653675645.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot3;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();