// app/modules/premium/gifting/native/GiftIntentExpressionPickerState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function emitChange() {
        var3 = _closure1_slot4;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function subscribe(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.add;
        var2 = var2.bind(var3)(var4);
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.delete;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function getGiftIntentExpressionPickerConfigSnapshot() {
        var1 = _closure1_slot3;
        return var1;
    };
    var _closure1_slot7 = var1;
    var5 = function getGiftIntentCustomMessagePlaceholder() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 1;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["7vWJmY"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function useGiftIntentExpressionPickerConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot2;
            var3 = var5.useSyncExternalStore;
            var2 = _closure1_slot6;
            var1 = _closure1_slot7;
            var2 = var3.bind(var5)(var2, var1, var1);
            var5 = null;
            var3 = var5 == var4;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var5 == var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.channelId;
case 4:
            var1 = null;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var10 = var8[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var10);
    var _closure1_slot2 = var9;
    var9 = null;
    var _closure1_slot3 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var15 = var9;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/gifting/native/GiftIntentExpressionPickerState.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function setGiftIntentExpressionPickerConfig(arg1) {
        var2 = arg1;
        _closure1_slot3 = var2;
        var2 = _closure1_slot5;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var3['setGiftIntentExpressionPickerConfig'] = var6;
    var3['getGiftIntentCustomMessagePlaceholder'] = var5;
    var3['useGiftIntentExpressionPickerConfig'] = var4;
    var4 = function clearGiftIntentExpressionPickerConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = _closure1_slot3;
            var6 = var2 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var5.channelId;
case 9:
            var1 = var3 !== var4;
case 7:
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            _closure1_slot3 = var2;
            var2 = _closure1_slot5;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 11:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearGiftIntentExpressionPickerConfig'] = var4;
    var4 = function useGiftIntentExpressionPickerActive(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['useGiftIntentExpressionPickerActive'] = var4;
    var2 = function useGiftIntentExpressionPickerPlaceholder(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot9;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var4;
            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = _closure1_slot8;
            var1 = var2.bind(var3)();
case 13:
            return var1;
        }
    };
    var3['useGiftIntentExpressionPickerPlaceholder'] = var2;
    return var1;
})();