// app/utils/FlagUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var6 = function hasFlag(arg1, arg2) {
        var2 = arg2;
        var1 = arg1;
        var1 = var1 & var2;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot0 = var6;
    var5 = function addFlag(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 | var1;
        return var1;
    };
    var _closure1_slot1 = var5;
    var4 = function removeFlag(arg1, arg2) {
        var1 = arg2;
        var2 = ~var1;
        var1 = arg1;
        var1 = var1 & var2;
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var7 = native7;
    var1 = 0;
    var8 = var7[var1];
    var7 = native2;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/FlagUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['hasFlag'] = var6;
    var6 = function hasAnyFlag(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 & var1;
        var1 = !var1;
        var1 = !var1;
        return var1;
    };
    var3['hasAnyFlag'] = var6;
    var3['addFlag'] = var5;
    var3['removeFlag'] = var4;
    var4 = function removeFlags(arg1, arg2) {
        var6 = 1;
        var4 = copyRestArgs(var6);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['removeFlags'] = var4;
    var4 = function setFlag(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
 15:
            var3 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4);
            _fun0001_ip = 41; continue _fun0001;
 29:
            var3 = _closure1_slot1;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
 41:
            return var1;
        }
    };
    var3['setFlag'] = var4;
    var2 = function toggleFlag(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = _closure1_slot0;
            var3 = undefined;
            var1 = var1.bind(var3)(var5, var4);
            if(var1) { _fun0002_ip = 36; continue _fun0002 }
 24:
            var1 = _closure1_slot1;
            var1 = var1.bind(var3)(var5, var4);
            _fun0002_ip = 46; continue _fun0002;
 36:
            var2 = _closure1_slot2;
            var1 = var2.bind(var3)(var5, var4);
 46:
            return var1;
        }
    };
    var3['toggleFlag'] = var2;
    return var1;
})();