// app/modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getTopAndNewlyAddedEmojis(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.emojiStoreInstance;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 22; continue _fun0001 }
 15:
            var5 = _closure1_slot2;
 22:
            var4 = var1.guildId;
            var6 = var1.pickerIntention;
            var1 = {};
            var3 = _closure1_slot3;
            var3 = var3.REACTION;
            if(!(var6 === var3)) { _fun0001_ip = 58; continue _fun0001 }
 52:
            var3 = _closure1_slot4;
            _fun0001_ip = 71; continue _fun0001;
 58:
            var7 = var5.getTopEmoji;
            var3 = var7.bind(var5)(var4);
 71:
            var1['topEmojis'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.REACTION;
            if(!(var6 === var3)) { _fun0001_ip = 96; continue _fun0001 }
 90:
            var2 = _closure1_slot4;
            _fun0001_ip = 109; continue _fun0001;
 96:
            var3 = var5.getNewlyAddedEmoji;
            var2 = var3.bind(var5)(var4);
 109:
            var1['newlyAddedEmojis'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native3;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EmojiIntention;
    var _closure1_slot3 = var5;
    var5 = new Array(0);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useTopAndNewlyAddedEmojis(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var3 = _closure1_slot5;
            var2 = {};
            var1 = _closure1_slot2;
            var2['emojiStoreInstance'] = var1;
            var4 = _closure2_slot0;
            var2['guildId'] = var4;
            var1 = _closure2_slot1;
            var2['pickerIntention'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getTopAndNewlyAddedEmojis'] = var2;
    return var1;
})();