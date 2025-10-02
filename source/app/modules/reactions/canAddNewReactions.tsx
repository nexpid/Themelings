// app/modules/reactions/canAddNewReactions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/canAddNewReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.getGuildId;
            var5 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = var4.canChatInGuild;
            var1 = var2.bind(var4)(var5);
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var4 = var5.can;
            var2 = _closure1_slot2;
            var2 = var2.ADD_REACTIONS;
            var1 = var4.bind(var5)(var2, var3);
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.isPrivate;
            var1 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();