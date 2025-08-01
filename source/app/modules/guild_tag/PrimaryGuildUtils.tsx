// app/modules/guild_tag/PrimaryGuildUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/PrimaryGuildUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isUserPrimaryGuildEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 89; continue _fun0001 }
 12:
            if(!(var1 != var2)) { _fun0001_ip = 89; continue _fun0001 }
 16:
            var4 = var3.identityGuildId;
            var1 = var2.identityGuildId;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 51; continue _fun0001 }
 35:
            var5 = var3.identityEnabled;
            var4 = var2.identityEnabled;
            var1 = var5 === var4;
 51:
            if(!var1) { _fun0001_ip = 68; continue _fun0001 }
 54:
            var5 = var3.tag;
            var4 = var2.tag;
            var1 = var5 === var4;
 68:
            if(!var1) { _fun0001_ip = 87; continue _fun0001 }
 71:
            var5 = var3.badge;
            var4 = var2.badge;
            var1 = var5 === var4;
 87:
            _fun0001_ip = 93; continue _fun0001;
 89:
            var1 = var3 === var2;
 93:
            return var1;
        }
    };
    var3['isUserPrimaryGuildEqual'] = var4;
    var2 = function ensureUserPrimaryGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 68; continue _fun0002 }
 9:
            var3 = 'identityGuildId';
            var3 = var3 in var2;
            if(var3) { _fun0002_ip = 66; continue _fun0002 }
 20:
            var3 = {};
            var4 = var2.identity_guild_id;
            var3['identityGuildId'] = var4;
            var4 = var2.identity_enabled;
            var3['identityEnabled'] = var4;
            var4 = var2.tag;
            var3['tag'] = var4;
            var4 = var2.badge;
            var3['badge'] = var4;
            return var3;
 66:
            return var2;
 68:
            return var1;
        }
    };
    var3['ensureUserPrimaryGuild'] = var2;
    return var1;
})();