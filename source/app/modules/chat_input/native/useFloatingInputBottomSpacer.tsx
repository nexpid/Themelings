// app/modules/chat_input/native/useFloatingInputBottomSpacer.tsx
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
    var6 = 'function useFloatingInputBottomSpacerTsx1(){const{needsSpacer,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardTypeSharedValue,KeyboardTypes,insetsSharedValue}=this.__closure;if(!needsSpacer)return 0;const kbActive=keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()||keyboardTypeSharedValue.get()!==KeyboardTypes.SYSTEM;if(kbActive)return 0;return insetsSharedValue.get().bottom;}';
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = 'function useFloatingInputBottomSpacerTsx2(){const{spacerHeight}=this.__closure;return{height:spacerHeight.get()};}';
    var1['code'] = var6;
    var _closure1_slot4 = var1;
    var1 = 6;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/useFloatingInputBottomSpacer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFloatingInputBottomSpacer() {
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 0;
        var2 = var7[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var11 = var2.bind(var5)();
        var _closure2_slot0 = var11;
        var2 = 1;
        var2 = var7[var2];
        var2 = var3.bind(var5)(var2);
        var2 = var2.bind(var5)();
        var14 = var2.keyboardOpenOrOpening;
        var _closure2_slot1 = var14;
        var3 = _closure1_slot0;
        var2 = 2;
        var6 = var7[var2];
        var8 = var3.bind(var5)(var6);
        var6 = var8.useKeyboardTypeSharedValue;
        var12 = var6.bind(var8)();
        var _closure2_slot2 = var12;
        var2 = var7[var2];
        var6 = var3.bind(var5)(var2);
        var2 = var6.useKeyboardWillOpenSharedValue;
        var13 = var2.bind(var6)();
        var _closure2_slot3 = var13;
        var2 = 3;
        var2 = var7[var2];
        var6 = var3.bind(var5)(var2);
        var2 = var6.isAndroid;
        var15 = var2.bind(var6)();
        var _closure2_slot4 = var15;
        var2 = 4;
        var6 = var7[var2];
        var9 = var3.bind(var5)(var6);
        var8 = var9.useDerivedValue;
        var6 = function o() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = 0;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = 0;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot3;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2 = 0;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var5 = _closure2_slot2;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var7);
                var4 = var4.KeyboardTypes;
                var4 = var4.SYSTEM;
                var2 = 0;
                if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
                var4 = _closure2_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2 = var3.bottom;
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var10 = {};
        var10['needsSpacer'] = var15;
        var10['keyboardOpenOrOpening'] = var14;
        var10['keyboardWillOpenSharedValue'] = var13;
        var10['keyboardTypeSharedValue'] = var12;
        var12 = 5;
        var12 = var7[var12];
        var12 = var3.bind(var5)(var12);
        var12 = var12.KeyboardTypes;
        var10['KeyboardTypes'] = var12;
        var10['insetsSharedValue'] = var11;
        var6['__closure'] = var10;
        var10 = 1439933577944.0;
        var6['__workletHash'] = var10;
        var10 = _closure1_slot3;
        var6['__initData'] = var10;
        var6 = var8.bind(var9)(var6);
        var _closure2_slot5 = var6;
        var2 = var7[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function s() {
            var1 = {};
            var3 = _closure2_slot5;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['height'] = var2;
            return var1;
        };
        var5 = {};
        var5['spacerHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 2672381245284.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot4;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();