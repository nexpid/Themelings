// app/utils/NicknameUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function getNickname(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = arg2;
            var2 = arg3;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 107; continue _fun0001 }
 15:
            if(!(var1 == var5)) { _fun0001_ip = 81; continue _fun0001 }
 19:
            if(!(var1 != var7)) { _fun0001_ip = 57; continue _fun0001 }
 23:
            var6 = _closure1_slot3;
            var4 = var6.getChannel;
            var6 = var4.bind(var6)(var7);
            if(!(var1 != var6)) { _fun0001_ip = 57; continue _fun0001 }
 44:
            var4 = var6.isPrivate;
            var4 = var4.bind(var6)();
            if(var4) { _fun0001_ip = 59; continue _fun0001 }
 57:
            return var1;
 59:
            var6 = _closure1_slot5;
            var4 = var6.getNickname;
            var3 = var2.id;
            var3 = var4.bind(var6)(var3);
            return var3;
 81:
            var4 = _closure1_slot4;
            var3 = var4.getNick;
            var2 = var2.id;
            var2 = var3.bind(var4)(var5, var2);
            return var2;
 107:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function getName(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg3;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 68; continue _fun0002 }
 9:
            var7 = _closure1_slot6;
            var5 = undefined;
            var6 = arg1;
            var1 = arg2;
            var1 = var7.bind(var5)(var6, var1, var4);
            if(!(var3 == var1)) { _fun0002_ip = 66; continue _fun0002 }
 35:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getName;
            var1 = var2.bind(var3)(var4);
 66:
            _fun0002_ip = 128; continue _fun0002;
 68:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.sKdZ6e;
            var1 = var3.bind(var4)(var2);
 128:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var2 = function useName(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var5 = _closure1_slot5;
        var2[2] = var5;
        var1 = function() {
            var5 = _closure1_slot7;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = {};
    var6['getNickname'] = var5;
    var6['getName'] = var4;
    var6['useName'] = var2;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/NicknameUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['getNickname'] = var5;
    var3['getName'] = var4;
    var3['useName'] = var2;
    return var1;
})();