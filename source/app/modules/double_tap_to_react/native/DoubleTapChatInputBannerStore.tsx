// app/modules/double_tap_to_react/native/DoubleTapChatInputBannerStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {'showBanner': false, 'emoji': null};
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/double_tap_to_react/native/DoubleTapChatInputBannerStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useDoubleTapChatInputBannerStore'] = var4;
    var4 = function setShowBanner(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = {};
            var4 = true;
            var1['showBanner'] = var4;
            var4 = _closure2_slot0;
            var1['emoji'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setShowBanner'] = var4;
    var4 = function setHideBanner() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = {};
            var4 = false;
            var1['showBanner'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setHideBanner'] = var4;
    var4 = function useShowBanner() {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.showBanner;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useShowBanner'] = var4;
    var4 = function useBannerEmoji() {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.emoji;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useBannerEmoji'] = var4;
    var2 = function shouldShowBanner() {
        var2 = _closure1_slot2;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.showBanner;
        return var1;
    };
    var3['shouldShowBanner'] = var2;
    return var1;
})();