// app/modules/guild_identity/GuildIdentitySettingsUtils.tsx
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
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_identity/GuildIdentitySettingsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function setNewPendingGuildIdentityBio(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingBio;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0001_ip = 45; continue _fun0001 }
 42:
            var2 = var5;
 45:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityBio'] = var4;
    var4 = function setNewPendingGuildIdentityPronouns(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingPronouns;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0002_ip = 45; continue _fun0002 }
 42:
            var2 = var5;
 45:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityPronouns'] = var4;
    var4 = function setNewPendingNickname(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var7 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingNickname;
            var2 = undefined;
            if(!(var5 !== var7)) { _fun0003_ip = 61; continue _fun0003 }
 42:
            var6 = '';
            if(!(var6 === var5)) { _fun0003_ip = 58; continue _fun0003 }
 50:
            var6 = null;
            var2 = undefined;
            if(!(var6 !== var7)) { _fun0003_ip = 61; continue _fun0003 }
 58:
            var2 = var5;
 61:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingNickname'] = var4;
    var4 = function setNewPendingGuildIdentityThemeColors(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var6 = null;
            var3 = var6 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
 16:
            var3 = 0;
            var2 = var5[var3];
 22:
            var2 = var6 == var2;
            if(var2) { _fun0004_ip = 49; continue _fun0004 }
 29:
            var4 = var6 == var5;
            var3 = undefined;
            if(var4) { _fun0004_ip = 45; continue _fun0004 }
 38:
            var4 = 1;
            var3 = var5[var4];
 45:
            var2 = var6 == var3;
 49:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 0;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.setPendingThemeColors;
            if(!var2) { _fun0004_ip = 92; continue _fun0004 }
 80:
            var2 = arg2;
            var6 = var6 == var2;
            var2 = undefined;
            if(var6) { _fun0004_ip = 95; continue _fun0004 }
 92:
            var2 = var5;
 95:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityThemeColors'] = var4;
    var2 = function canResetThemeColors(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var3 = undefined;
            if(!(var3 !== var5)) { _fun0005_ip = 55; continue _fun0005 }
 9:
            var2 = null;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0005_ip = 26; continue _fun0005 }
 20:
            var4 = 0;
            var1 = var5[var4];
 26:
            var1 = var2 != var1;
            if(!var1) { _fun0005_ip = 53; continue _fun0005 }
 33:
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0005_ip = 49; continue _fun0005 }
 42:
            var4 = 1;
            var3 = var5[var4];
 49:
            var1 = var2 != var3;
 53:
            _fun0005_ip = 64; continue _fun0005;
 55:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
 64:
            return var1;
        }
    };
    var3['canResetThemeColors'] = var2;
    return var1;
})();