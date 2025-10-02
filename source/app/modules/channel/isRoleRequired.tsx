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
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.type;
            var2 = var3.guild_id;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot2;
            var4 = var5.has;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var3.isGuildVocal;
            var4 = var4.bind(var3)();
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
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
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var4 = true;
            return var4;
case 7:
            var4 = var3.permissionOverwrites;
            var3 = var3.guild_id;
            var3 = var4[var3];
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
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
case 10:
            return var1;
case 4:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();