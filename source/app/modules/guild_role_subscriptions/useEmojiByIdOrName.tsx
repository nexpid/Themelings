// app/modules/guild_role_subscriptions/useEmojiByIdOrName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var2 = function useEmojiByIdOrName(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot2;
                var4 = var5.getDisambiguatedEmojiContext;
                var2 = _closure2_slot0;
                var5 = var4.bind(var5)(var2);
                var4 = var5.getById;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var2);
                if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var5.getByName;
                var3 = _closure2_slot1;
                var2 = var4.bind(var5)(var3);
case 4:
                return var2;
case 2:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useEmojiByIdOrName.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['useEmojiByIdOrName'] = var2;
    return var1;
})();