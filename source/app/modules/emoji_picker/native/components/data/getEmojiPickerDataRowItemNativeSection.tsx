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
            var6 = var1.label;
            var5 = var1.guildId;
            var4 = var1.emojiCount;
            var7 = var1.emojisDisabled;
            var2 = var1.isSectionNitroLocked;
            var9 = undefined;
            if(!(var2 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = global;
            var3 = var1.Array;
            var1 = var3.from;
            var3 = var1.bind(var3)(var7);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = new Array(0);
case 6:
            var1 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 0;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.EmojiPickerFlashListItemType;
            var7 = var7.NATIVE_SECTION;
            var1['type'] = var7;
            var1['title'] = var6;
            var1['guildId'] = var5;
            var1['emojiCount'] = var4;
            var1['emojisDisabled'] = var3;
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