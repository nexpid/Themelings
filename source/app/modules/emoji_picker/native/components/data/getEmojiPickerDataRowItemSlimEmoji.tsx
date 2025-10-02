// app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getEmojiPickerDataRowItemSlimEmoji(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 0;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.EmojiPickerFlashListItemType;
        var4 = var4.EMOJI_ROW_SLIM;
        var1['type'] = var4;
        var5 = var2.emojis;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = var2.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.EmojiTypes;
                var1 = var1.UNICODE;
                if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var4 = var1.emojisDisabled;
                var3 = var4.has;
                var1 = var2.id;
                var1 = var3.bind(var4)(var1);
                var3 = var2.animated;
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var3 = var2.animated;
                if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['disabled'] = var4;
                var1 = var3;
case 11:
                _fun0001_ip = 12; continue _fun0001;
case 7:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['animated'] = var4;
                var1 = var3;
case 12:
                _fun0001_ip = 13; continue _fun0001;
case 6:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['animated'] = var4;
                var3['disabled'] = var4;
                var1 = var3;
case 13:
                return var1;
case 2:
                var1 = {};
                var3 = var2.name;
                var1['name'] = var3;
                var2 = var2.surrogates;
                var1['surrogates'] = var2;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var1['emojis'] = var3;
        var3 = var2.isSectionNitroLocked;
        var2 = true;
        var2 = var2 === var3;
        var1['isSectionNitroLocked'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();