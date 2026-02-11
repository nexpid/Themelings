// app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
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
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getEmojiPickerDataRowItemNativeSection(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.label;
            var6 = var1.guildId;
            var5 = var1.emojiCount;
            var4 = var1.emojisDisabled;
            var8 = var1.emojisHidden;
            var2 = var1.isSectionNitroLocked;
            var10 = undefined;
            if(!(var2 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = global;
            var3 = var1.Array;
            var1 = var3.from;
            var4 = var1.bind(var3)(var4);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = new Array(0);
case 6:
            var1 = global;
            var3 = var1.Array;
            var1 = var3.from;
            var3 = var1.bind(var3)(var8);
            var1 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 0;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.EmojiPickerItemType;
            var8 = var8.NATIVE_SECTION;
            var1['type'] = var8;
            var1['title'] = var7;
            var1['guildId'] = var6;
            var1['emojiCount'] = var5;
            var1['emojisDisabled'] = var4;
            var1['emojisHidden'] = var3;
            var1['isSectionNitroLocked'] = var2;
            var2 = arg2;
            var1['hasPremiumInlineRoadblockHeader'] = var2;
            var2 = arg3;
            var1['hasPremiumInlineRoadblockFooter'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();