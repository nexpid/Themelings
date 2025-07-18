// app/modules/video_calls/useDeafStates.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getDeafStates(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var8 = arguments[1];
            var6 = arguments[2];
            var9 = arguments[3];
            var3 = undefined;
            if(!(var8 === var3)) { _fun0001_ip = 25; continue _fun0001 }
 18:
            var8 = _closure1_slot4;
 25:
            if(!(var6 === var3)) { _fun0001_ip = 36; continue _fun0001 }
 29:
            var6 = _closure1_slot3;
 36:
            if(!(var9 === var3)) { _fun0001_ip = 47; continue _fun0001 }
 40:
            var9 = _closure1_slot2;
 47:
            var2 = null;
            var1 = var2 != var5;
            var4 = null;
            if(!var1) { _fun0001_ip = 90; continue _fun0001 }
 58:
            var7 = var8.getVoiceState;
            var1 = var5.getGuildId;
            var5 = var1.bind(var5)();
            var1 = var9.getId;
            var1 = var1.bind(var9)();
            var4 = var7.bind(var8)(var5, var1);
 90:
            var1 = {};
            var5 = var6.isSelfDeaf;
            var5 = var5.bind(var6)();
            var1['selfDeaf'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 122; continue _fun0001 }
 116:
            var3 = var4.deaf;
 122:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 132; continue _fun0001 }
 129:
            var2 = var3;
 132:
            var1['deaf'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/useDeafStates.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useDeafStates(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot3;
        var3[1] = var7;
        var2 = _closure1_slot2;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var6 = _closure1_slot5;
            var10 = _closure2_slot0;
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = _closure1_slot2;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getDeafStates'] = var2;
    return var1;
})();