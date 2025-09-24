// app/modules/avatar_decorations/useAvatarDecoration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getAvatarDecoration(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var5 = arguments[2];
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 33; continue _fun0001 }
 15:
            var4 = _closure1_slot3;
            var1 = new Array(1);
            var1[0] = var4;
            var5 = var1;
 33:
            var4 = _closure1_slot2;
            var1 = 1;
            var4 = var4.bind(var2)(var5, var1);
            var1 = 0;
            var7 = var4[var1];
            var4 = null;
            var1 = var4 != var8;
            var5 = null;
            if(!var1) { _fun0001_ip = 92; continue _fun0001 }
 66:
            var1 = var4 != var3;
            var5 = null;
            if(!var1) { _fun0001_ip = 92; continue _fun0001 }
 75:
            var6 = var7.getMember;
            var1 = var3.id;
            var5 = var6.bind(var7)(var8, var1);
 92:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 107; continue _fun0001 }
 101:
            var1 = var5.avatarDecoration;
 107:
            if(!(var4 == var1)) { _fun0001_ip = 129; continue _fun0001 }
 111:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 126; continue _fun0001 }
 120:
            var2 = var3.avatarDecoration;
 126:
            var1 = var2;
 129:
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