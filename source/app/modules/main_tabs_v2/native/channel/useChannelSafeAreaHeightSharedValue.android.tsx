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
    var6 = 'function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{isChatInputVisualRefreshEnabled,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardHeight}=this.__closure;const resolveBottom=function(bottom){return isChatInputVisualRefreshEnabled?Math.max(bottom,chatInputSpaceBottom):bottom;};if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardHeight;}';
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = 9;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelSafeAreaHeightSharedValue() {
        var15 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 0;
        var2 = var10[var2];
        var9 = undefined;
        var2 = var15.bind(var9)(var2);
        var11 = var2.bind(var9)();
        var _closure2_slot0 = var11;
        var2 = 1;
        var2 = var10[var2];
        var2 = var15.bind(var9)(var2);
        var2 = var2.bind(var9)();
        var14 = var2.keyboardOpenOrOpening;
        var _closure2_slot1 = var14;
        var12 = var2.keyboardOpenedHeight;
        var _closure2_slot2 = var12;
        var8 = _closure1_slot0;
        var2 = 2;
        var3 = var10[var2];
        var5 = var8.bind(var9)(var3);
        var3 = var5.useKeyboardTypeSharedValue;
        var7 = var3.bind(var5)();
        var _closure2_slot3 = var7;
        var2 = var10[var2];
        var3 = var8.bind(var9)(var2);
        var2 = var3.useKeyboardWillOpenSharedValue;
        var13 = var2.bind(var3)();
        var _closure2_slot4 = var13;
        var2 = 3;
        var2 = var10[var2];
        var2 = var15.bind(var9)(var2);
        var6 = var2.bind(var9)();
        var _closure2_slot5 = var6;
        var2 = 4;
        var2 = var10[var2];
        var5 = var8.bind(var9)(var2);
        var3 = var5.useToken;
        var2 = 5;
        var2 = var10[var2];
        var2 = var15.bind(var9)(var2);
        var2 = var2.modules;
        var2 = var2.mobile;
        var2 = var2.CHAT_INPUT_SPACE_BOTTOM;
        var15 = var3.bind(var5)(var2);
        var _closure2_slot6 = var15;
        var2 = 6;
        var2 = var10[var2];
        var5 = var8.bind(var9)(var2);
        var3 = var5.useMobileVisualRefreshConfig;
        var2 = {};
        var16 = 'ChatInput';
        var2['location'] = var16;
        var2 = var3.bind(var5)(var2);
        var16 = var2.enabled;
        var _closure2_slot7 = var16;
        var2 = 7;
        var2 = var10[var2];
        var3 = var8.bind(var9)(var2);
        var2 = var3.useDerivedValue;
        var1 = function o() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = function resolveBottom(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure2_slot7;
                        var1 = var5;
                        if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.max;
                        var2 = _closure2_slot6;
                        var1 = var3.bind(var4)(var5, var2);
case 2:
                        return var1;
                    }
                };
                var3 = _closure2_slot1;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var3 = _closure2_slot3;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.SYSTEM;
                if(!(var3 !== var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var1 = _closure2_slot5;
                _fun0001_ip = 9; continue _fun0001;
case 7:
                var6 = _closure2_slot0;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var3 = var3.bottom;
                var1 = var4.bind(var5)(var3);
case 9:
                return var1;
case 4:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = 0;
                if(!(var1 <= var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = var2.bottom;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 10:
                return var1;
            }
        };
        var5 = {};
        var5['isChatInputVisualRefreshEnabled'] = var16;
        var5['chatInputSpaceBottom'] = var15;
        var5['keyboardOpenOrOpening'] = var14;
        var5['keyboardWillOpenSharedValue'] = var13;
        var5['keyboardOpenedHeight'] = var12;
        var5['insets'] = var11;
        var5['keyboardTypeSharedValue'] = var7;
        var7 = 8;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var7 = var7.KeyboardTypes;
        var5['KeyboardTypes'] = var7;
        var5['customKeyboardHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 5642082276860.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot3;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();