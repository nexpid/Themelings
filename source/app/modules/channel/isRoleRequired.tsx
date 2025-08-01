// app/modules/channel/isRoleRequired.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/isRoleRequired.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isRoleRequired(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 193; continue _fun0001 }
 12:
            var6 = var3.type;
            var2 = var3.guild_id;
            if(!(var1 != var2)) { _fun0001_ip = 189; continue _fun0001 }
 29:
            var5 = _closure1_slot2;
            var4 = var5.has;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0001_ip = 189; continue _fun0001 }
 52:
            var4 = var3.isGuildVocal;
            var4 = var4.bind(var3)();
            if(!var4) { _fun0001_ip = 116; continue _fun0001 }
 65:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.canEveryoneRole;
            var4 = _closure1_slot3;
            var4 = var4.CONNECT;
            var4 = var5.bind(var6)(var4, var3);
            if(var4) { _fun0001_ip = 116; continue _fun0001 }
 112:
            var4 = true;
            return var4;
 116:
            var4 = var3.permissionOverwrites;
            var3 = var3.guild_id;
            var3 = var4[var3];
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 187; continue _fun0001 }
 138:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.has;
            var3 = var3.deny;
            var2 = _closure1_slot3;
            var2 = var2.VIEW_CHANNEL;
            var1 = var4.bind(var5)(var3, var2);
 187:
            return var1;
 189:
            var1 = false;
            return var1;
 193:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();