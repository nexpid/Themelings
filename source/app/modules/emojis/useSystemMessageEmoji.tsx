// app/modules/emojis/useSystemMessageEmoji.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
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
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = /^<(a?):(\w+):(\d+)>/;
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emojis/useSystemMessageEmoji.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CUSTOM_EMOJI_REGEX'] = var4;
    var4 = function getSystemMessageEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot4;
            var3 = var4.exec;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 == var5;
            var4 = undefined;
            if(var3) { _fun0001_ip = 39; continue _fun0001 }
 32:
            var3 = 3;
            var4 = var5[var3];
 39:
            var3 = var1 == var4;
            var1 = null;
            if(var3) { _fun0001_ip = 63; continue _fun0001 }
 48:
            var3 = _closure1_slot3;
            var2 = var3.getCustomEmojiById;
            var1 = var2.bind(var3)(var4);
 63:
            return var1;
        }
    };
    var3['getSystemMessageEmoji'] = var4;
    var2 = function useSystemMessageEmoji(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot4;
                var2 = var3.exec;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0002_ip = 43; continue _fun0002 }
 36:
                var2 = 3;
                var1 = var3[var2];
 43:
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0003_ip = 38; continue _fun0003 }
 16:
                var4 = _closure1_slot3;
                var3 = var4.getCustomEmojiById;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSystemMessageEmoji'] = var2;
    return var1;
})();