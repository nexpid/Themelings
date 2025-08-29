// app/modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEmojiPickerSearchState(arg1, arg2, arg3) {
        var9 = arg1;
        var10 = arg2;
        var8 = arg3;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var3 = var7.useRef;
        var2 = '';
        var3 = var3.bind(var7)(var2);
        var _closure2_slot3 = var3;
        var5 = var7.useState;
        var2 = null;
        var6 = var5.bind(var7)(var2);
        var5 = _closure1_slot2;
        var2 = undefined;
        var1 = 2;
        var5 = var5.bind(var2)(var6, var1);
        var1 = 0;
        var2 = var5[var1];
        var1 = 1;
        var1 = var5[var1];
        var _closure2_slot4 = var1;
        var1 = {};
        var6 = var7.useCallback;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var2 = '';
                if(!(var2 === var4)) { _fun0001_ip = 65; continue _fun0001 }
 17:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.batchUpdates;
                var2 = function() {
                    var3 = _closure2_slot3;
                    var1 = '';
                    var3['current'] = var1;
                    var4 = _closure2_slot4;
                    var1 = undefined;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var5)(var2);
                _fun0001_ip = 217; continue _fun0001;
 65:
                var9 = 0;
                var3 = var4[var9];
                var2 = ':';
                var10 = var4;
                if(!(var2 === var3)) { _fun0001_ip = 95; continue _fun0001 }
 82:
                var3 = var4.slice;
                var2 = 1;
                var10 = var3.bind(var4)(var2);
 95:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var6 = var5[var3];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var7 = var6.FrecencyUserSettingsActionCreators;
                var6 = var7.loadIfNecessary;
                var6 = var6.bind(var7)();
                var7 = _closure1_slot4;
                var6 = var7.searchWithoutFetchingLatest;
                var2 = {};
                var11 = _closure2_slot0;
                var2['channel'] = var11;
                var2['query'] = var10;
                var2['count'] = var9;
                var8 = _closure2_slot2;
                var2['intention'] = var8;
                var2 = var6.bind(var7)(var2);
                var _closure3_slot1 = var2;
                var2 = 3;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.batchUpdates;
                var1 = function() {
                    var4 = _closure2_slot3;
                    var3 = _closure3_slot0;
                    var4['current'] = var3;
                    var3 = _closure2_slot4;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 217:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['handleTextChange'] = var4;
        var1['searchQueryRef'] = var3;
        var1['searchResults'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();