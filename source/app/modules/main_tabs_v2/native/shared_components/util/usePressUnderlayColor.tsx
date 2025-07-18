// app/modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePressUnderlayColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 1;
            var1 = var10[var1];
            var4 = undefined;
            var1 = var8.bind(var4)(var1);
            var7 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var9 = 2;
            var1 = var10[var9];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useToken;
            var1 = 3;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_MODIFIER_ACTIVE;
            var8 = var3.bind(var5)(var1);
            var3 = null;
            var1 = var3 == var6;
            var5 = undefined;
            if(var1) { _fun0001_ip = 115; continue _fun0001 }
 93:
            var10 = var6.slice;
            var1 = var6.length;
            var9 = var1 - var9;
            var1 = 0;
            var5 = var10.bind(var6)(var1, var9);
 115:
            var1 = var8;
            if(!(var3 != var5)) { _fun0001_ip = 193; continue _fun0001 }
 122:
            var3 = _closure1_slot3;
            var1 = var8;
            if(!(var6 !== var3)) { _fun0001_ip = 193; continue _fun0001 }
 133:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.hexWithOpacity;
            var2 = 0.08;
            var6 = 'dark';
            if(!(var6 === var7)) { _fun0001_ip = 187; continue _fun0001 }
 177:
            var2 = 0.12;
 187:
            var1 = var3.bind(var4)(var5, var2);
 193:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();