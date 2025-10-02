// app/modules/conversations/util/onAddReaction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/util/onAddReaction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function onAddReaction(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg3;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var2 = undefined;
            var5 = var3.bind(var2)(var1);
            var1 = var5.toReactionEmoji;
            var10 = var1.bind(var5)(var6);
            var1 = 1;
            var5 = var4[var1];
            var6 = var3.bind(var2)(var5);
            var5 = var6.addReaction;
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.ReactionLocations;
            var9 = var1.MESSAGE;
            var3 = {};
            var1 = arg4;
            var3['burst'] = var1;
            var12 = arg1;
            var11 = arg2;
            var13 = var6;
            var8 = var3;
            var1 = var13[var5](var12, var11, var10, var9, var8, var7);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['onAddReaction'] = var2;
    return var1;
})();