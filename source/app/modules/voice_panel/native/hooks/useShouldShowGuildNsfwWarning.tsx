// app/modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowGuildNsfwWarning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 3;
            var1 = var8[var6];
            var5 = undefined;
            var10 = var7.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var10)(var4, var1);
            var _closure2_slot1 = var4;
            var1 = var8[var6];
            var11 = var7.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot3;
                    var2 = var3.didAgree;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
 31:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var9, var1);
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 33; continue _fun0003 }
 27:
                    var2 = var1.nsfwAllowed;
 33:
                    var1 = false;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var6, var3);
            var1 = !var1;
            if(var1) { _fun0001_ip = 155; continue _fun0001 }
 152:
            var1 = var3;
 155:
            if(!var1) { _fun0001_ip = 189; continue _fun0001 }
 158:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isChannelNSFW;
            var1 = var2.bind(var3)(var4);
 189:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();