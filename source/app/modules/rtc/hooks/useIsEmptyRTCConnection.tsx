// app/modules/rtc/hooks/useIsEmptyRTCConnection.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function isEmpty(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = var5.size;
            var1 = 0;
            var1 = var1 === var2;
            if(var1) { _fun0001_ip = 48; continue _fun0001 }
 17:
            var3 = var5.size;
            var2 = 1;
            var2 = var2 === var3;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 32:
            var4 = var5.has;
            var3 = arg2;
            var2 = var4.bind(var5)(var3);
 45:
            var1 = var2;
 48:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useIsEmptyRTCConnection.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsStreamRTCConnectionEmpty(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 70; continue _fun0002 }
 13:
                var5 = _closure1_slot4;
                var4 = var5.getUserIds;
                var3 = _closure2_slot0;
                var5 = var4.bind(var5)(var3);
                var1 = var1 == var5;
                if(var1) { _fun0002_ip = 68; continue _fun0002 }
 42:
                var4 = _closure1_slot5;
                var3 = _closure1_slot2;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var1 = var4.bind(var2)(var5, var3);
 68:
                return var1;
 70:
                var1 = true;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsStreamRTCConnectionEmpty'] = var4;
    var2 = function useIsCallRTCConnectionEmpty() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot3;
                var1 = var3.getUserIds;
                var5 = var1.bind(var3)();
                var1 = null;
                var1 = var1 == var5;
                if(var1) { _fun0003_ip = 52; continue _fun0003 }
 26:
                var4 = _closure1_slot5;
                var3 = _closure1_slot2;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var1 = var4.bind(var2)(var5, var3);
 52:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsCallRTCConnectionEmpty'] = var2;
    return var1;
})();