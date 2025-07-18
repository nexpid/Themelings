// app/modules/tooltip/useCanShowTooltip.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tooltip/useCanShowTooltip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = arguments[1];
            var8 = arguments[2];
            var _closure2_slot0 = var6;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var7 = false;
 23:
            var _closure2_slot1 = var7;
            if(!(var8 === var5)) { _fun0001_ip = 33; continue _fun0001 }
 31:
            var8 = true;
 33:
            var _closure2_slot2 = var8;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var9 = var4.bind(var5)(var1);
            var5 = var9.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.canShowTooltip;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0002_ip = 32; continue _fun0002 }
 28:
                    var1 = _closure2_slot2;
 32:
                    return var1;
                }
            };
            var1 = var5.bind(var9)(var4, var1);
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 55; continue _fun0003 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.attemptToShowTooltip;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useCanShowTooltip'] = var2;
    return var1;
})();