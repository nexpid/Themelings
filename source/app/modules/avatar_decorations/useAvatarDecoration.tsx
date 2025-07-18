// app/modules/avatar_decorations/useAvatarDecoration.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getAvatarDecoration(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = arg2;
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 33; continue _fun0001 }
 15:
            var4 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var4;
            var5 = var3;
 33:
            var4 = _closure1_slot2;
            var3 = 1;
            var4 = var4.bind(var1)(var5, var3);
            var3 = 0;
            var7 = var4[var3];
            var3 = null;
            var5 = var3 != var8;
            var4 = null;
            if(!var5) { _fun0001_ip = 83; continue _fun0001 }
 66:
            var6 = var7.getMember;
            var5 = var2.id;
            var4 = var6.bind(var7)(var8, var5);
 83:
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 98; continue _fun0001 }
 92:
            var1 = var4.avatarDecoration;
 98:
            if(!(var3 == var1)) { _fun0001_ip = 108; continue _fun0001 }
 102:
            var1 = var2.avatarDecoration;
 108:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
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
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/avatar_decorations/useAvatarDecoration.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useAvatarDecoration(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
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
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useAvatarDecoration'] = var4;
    var3['getAvatarDecoration'] = var2;
    return var1;
})();