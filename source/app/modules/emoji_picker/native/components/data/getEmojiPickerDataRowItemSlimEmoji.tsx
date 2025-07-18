// app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
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
 0:
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
                if(!(var3 !== var1)) { _fun0001_ip = 225; continue _fun0001 }
 52:
                var1 = _closure2_slot0;
                var4 = var1.emojisDisabled;
                var3 = var4.has;
                var1 = var2.id;
                var1 = var3.bind(var4)(var1);
                var3 = var2.animated;
                if(!var3) { _fun0001_ip = 92; continue _fun0001 }
 89:
                if(var1) { _fun0001_ip = 189; continue _fun0001 }
 92:
                var3 = var2.animated;
                if(var3) { _fun0001_ip = 157; continue _fun0001 }
 101:
                if(var1) { _fun0001_ip = 126; continue _fun0001 }
 104:
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                _fun0001_ip = 155; continue _fun0001;
 126:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['disabled'] = var4;
                var1 = var3;
 155:
                _fun0001_ip = 187; continue _fun0001;
 157:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['animated'] = var4;
                var1 = var3;
 187:
                _fun0001_ip = 223; continue _fun0001;
 189:
                var3 = {};
                var4 = var2.id;
                var3['id'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var4 = true;
                var3['animated'] = var4;
                var3['disabled'] = var4;
                var1 = var3;
 223:
                return var1;
 225:
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