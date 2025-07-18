// app/modules/message_previews/useLatestChannelMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_previews/useLatestChannelMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLatestChannelMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = arguments[1];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 16; continue _fun0001 }
 14:
            var3 = false;
 16:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = var1.guild_id;
            _closure2_slot1 = var3;
            var7 = var1.id;
            _closure2_slot2 = var7;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStoresArray;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 70; continue _fun0002 }
 10:
                    var5 = _closure1_slot5;
                    var4 = var5.message;
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var3 = var4.bind(var5)(var3, var1);
                    var1 = new Array(2);
                    var1[0] = var3;
                    var4 = var5.isLatest;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    var1[1] = var2;
                    _fun0002_ip = 89; continue _fun0002;
 70:
                    var2 = [null];
                    var3 = true;
                    var2[1] = var3;
                    var1 = var2;
 89:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var4, var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var6 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var1 = var6[var1];
            var4 = 1;
            var6 = var6[var4];
            _closure2_slot3 = var6;
            var4 = _closure1_slot4;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
 16:
                    var2 = _closure2_slot3;
 20:
                    if(var2) { _fun0003_ip = 63; continue _fun0003 }
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.addWant;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();