// app/modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useWindowDimensions;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{animatedSheetPosition}=this.__closure;return animatedSheetPosition.get();}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=(sheetPosition!==null&&sheetPosition!==void 0?sheetPosition:0)-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBottomSheetFlashListBottomViewabilityInset() {
        var2 = _closure1_slot4;
        var12 = undefined;
        var2 = var2.bind(var12)();
        var8 = _closure1_slot3;
        var4 = var8.useContext;
        var11 = _closure1_slot0;
        var13 = _closure1_slot2;
        var3 = 2;
        var3 = var13[var3];
        var3 = var11.bind(var12)(var3);
        var3 = var3.PortalKeyboardContext;
        var3 = var4.bind(var8)(var3);
        var15 = var3.animatedSheetPosition;
        var _closure2_slot0 = var15;
        var4 = _closure1_slot1;
        var3 = 3;
        var3 = var13[var3];
        var3 = var4.bind(var12)(var3);
        var3 = var3.bind(var12)();
        var4 = var3.maximum;
        var5 = var8.useRef;
        var3 = null;
        var3 = var5.bind(var8)(var3);
        var _closure2_slot1 = var3;
        var2 = var2.height;
        var14 = var2 - var4;
        var _closure2_slot2 = var14;
        var4 = var8.useRef;
        var2 = 9999;
        var2 = var4.bind(var8)(var2);
        var _closure2_slot3 = var2;
        var6 = var8.useMemo;
        var5 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.debounce;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = arg1;
                    var3['current'] = var2;
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0001_ip = 41; continue _fun0001 }
 31:
                    var1 = var2.updateViewableItems;
                    var1 = var1.bind(var2)();
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = 200;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = new Array(0);
        var9 = var6.bind(var8)(var5, var4);
        var _closure2_slot4 = var9;
        var10 = 5;
        var4 = var13[var10];
        var6 = var11.bind(var12)(var4);
        var5 = var6.useAnimatedReaction;
        var4 = function l() {
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = {};
        var8['animatedSheetPosition'] = var15;
        var4['__closure'] = var8;
        var8 = 2571962450604.0;
        var4['__workletHash'] = var8;
        var8 = _closure1_slot5;
        var4['__initData'] = var8;
        var1 = function u(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = null;
                var2 = var2 != var1;
                var3 = 0;
                if(!var2) { _fun0002_ip = 17; continue _fun0002 }
 14:
                var3 = var1;
 17:
                var1 = _closure2_slot2;
                var3 = var3 - var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.runOnJS;
                var2 = _closure2_slot4;
                var2 = var4.bind(var5)(var2);
                var2 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var8 = {};
        var8['distanceBetweenExpandedScreenTopAndSheetTop'] = var14;
        var10 = var13[var10];
        var10 = var11.bind(var12)(var10);
        var10 = var10.runOnJS;
        var8['runOnJS'] = var10;
        var8['handleBottomViewabilityInsetDebounced'] = var9;
        var1['__closure'] = var8;
        var8 = 3079648175865.0;
        var1['__workletHash'] = var8;
        var7 = _closure1_slot6;
        var1['__initData'] = var7;
        var1 = var5.bind(var6)(var4, var1);
        var1 = {};
        var1['flashListRef'] = var3;
        var1['bottomVisibilityInsetRef'] = var2;
        return var1;
    };
    var3['useBottomSheetFlashListBottomViewabilityInset'] = var2;
    return var1;
})();