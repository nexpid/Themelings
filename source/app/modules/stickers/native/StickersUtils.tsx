// app/modules/stickers/native/StickersUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useStickerPickerStore;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildNSFWContentLevel;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickersUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 7;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStickerPackCategories;
        var3 = arg1;
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot6;
        var3 = var4.getCurrentUser;
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var3 = var4.getGuilds;
        var7 = var3.bind(var4)();
        var _closure2_slot2 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.stickers;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot2;
                    var2 = var1.id;
                    var4 = var3[var2];
                    var2 = var1.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.GUILD;
                    var1 = var2 !== var1;
                    if(var1) { _fun0001_ip = 94; continue _fun0001 }
 68:
                    var6 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var6;
                    if(!var2) { _fun0001_ip = 91; continue _fun0001 }
 81:
                    var5 = _closure2_slot1;
                    var2 = var5.nsfwAllowed;
 91:
                    var1 = var2;
 94:
                    if(var1) { _fun0001_ip = 103; continue _fun0001 }
 97:
                    var2 = null;
                    var1 = var2 == var4;
 103:
                    if(var1) { _fun0001_ip = 152; continue _fun0001 }
 106:
                    var5 = var4.nsfwLevel;
                    var2 = _closure1_slot8;
                    var2 = var2.AGE_RESTRICTED;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0001_ip = 149; continue _fun0001 }
 129:
                    var4 = var4.nsfwLevel;
                    var3 = _closure1_slot8;
                    var3 = var3.EXPLICIT;
                    var2 = var4 !== var3;
 149:
                    var1 = var2;
 152:
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 8;
                    var3 = var3[var7];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.StickerCategoryTypes;
                    var3 = var3.FAVORITE;
                    if(!(var4 !== var3)) { _fun0002_ip = 89; continue _fun0002 }
 49:
                    var4 = var2.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.StickerCategoryTypes;
                    var3 = var3.RECENT;
                    if(!(var4 !== var3)) { _fun0002_ip = 89; continue _fun0002 }
 87:
                    return var2;
 89:
                    var4 = var2.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.StickerCategoryTypes;
                    var3 = var3.FAVORITE;
                    if(!(var4 !== var3)) { _fun0002_ip = 149; continue _fun0002 }
 127:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 169; continue _fun0002;
 149:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var1 = var6[var1];
                    var3 = var4.bind(var5)(var1);
 169:
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var2 = 'icon';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useStickerCategories'] = var4;
    var4 = function(arg1) {
        var1 = arg1;
        var14 = var1.hash;
        var13 = var1.url;
        var12 = var1.width;
        var11 = var1.height;
        var10 = var1.frames;
        var9 = var1.callback;
        var1 = _closure1_slot4;
        var2 = var1.NativeLottieUtils;
        var1 = var2.preload;
        var15 = var2;
        var1 = var15[var1](var14, var13, var12, var11, var10, var9, var8);
        var1 = undefined;
        return var1;
    };
    var3['preloadSticker'] = var4;
    var4 = function(arg1) {
        var1 = _closure1_slot4;
        var3 = var1.NativeLottieUtils;
        var2 = var3.dropPreload;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['dropPreloadedSticker'] = var4;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot7;
        var1 = var3.getState;
        var4 = var1.bind(var3)();
        var3 = var4.setPackToScrollTo;
        var1 = arg2;
        var1 = var3.bind(var4)(var1);
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot0;
                var3 = var1.current;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 86; continue _fun0003 }
 18:
                var2 = var3.openCustomKeyboard;
                var1 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 11;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.KeyboardTypes;
                var5 = var5.EXPRESSION;
                var1['type'] = var5;
                var4 = _closure1_slot9;
                var4 = var4.STICKER;
                var1['context'] = var4;
                var1 = var2.bind(var3)(var1);
 86:
                var1 = undefined;
                return var1;
            }
        };
        var2 = 1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['openStickerPickerToPackId'] = var2;
    return var1;
})();