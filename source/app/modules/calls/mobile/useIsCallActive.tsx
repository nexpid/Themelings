// app/modules/calls/mobile/useIsCallActive.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function checkIsCallActive(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot2;
            var3 = var5.isCallActive;
            var1 = arg2;
            var1 = var3.bind(var5)(var4, var1);
            if(!var1) { _fun0001_ip = 61; continue _fun0001 }
 28:
            var3 = _closure1_slot3;
            var2 = var3.getParticipants;
            var4 = var2.bind(var3)(var4);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot4;
                    var1 = var1.USER;
                    var1 = var3 === var1;
                    if(!var1) { _fun0002_ip = 37; continue _fun0002 }
 28:
                    var2 = var2.ringing;
                    var1 = !var2;
 37:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 61:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/mobile/useIsCallActive.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsCallActive(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['checkIsCallActive'] = var4;
    var2 = function useIsCallActiveNullable(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 39; continue _fun0003 }
 16:
                var5 = _closure1_slot5;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 39:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsCallActiveNullable'] = var2;
    return var1;
})();