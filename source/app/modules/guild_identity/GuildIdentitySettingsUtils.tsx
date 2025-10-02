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
case 0:
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
            if(!(var5 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5;
case 2:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityBio'] = var4;
    var4 = function setNewPendingGuildIdentityPronouns(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!(var5 !== var6)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var5;
case 2:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityPronouns'] = var4;
    var4 = function setNewPendingNickname(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
            if(!(var5 !== var7)) { _fun0003_ip = 4; continue _fun0003 }
case 3:
            var6 = '';
            if(!(var6 === var5)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
            var6 = null;
            var2 = undefined;
            if(!(var6 !== var7)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var2 = var5;
case 4:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingNickname'] = var4;
    var4 = function setNewPendingGuildIdentityThemeColors(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var6 = null;
            var3 = var6 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var3) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var3 = 0;
            var2 = var5[var3];
case 7:
            var2 = var6 == var2;
            if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var4 = var6 == var5;
            var3 = undefined;
            if(var4) { _fun0004_ip = 2; continue _fun0004 }
case 11:
            var4 = 1;
            var3 = var5[var4];
case 2:
            var2 = var6 == var3;
case 9:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 0;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.setPendingThemeColors;
            if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = arg2;
            var6 = var6 == var2;
            var2 = undefined;
            if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 12:
            var2 = var5;
case 14:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingGuildIdentityThemeColors'] = var4;
    var2 = function canResetThemeColors(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var3 = undefined;
            if(!(var3 !== var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var2 = null;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = 0;
            var1 = var5[var4];
case 17:
            var1 = var2 != var1;
            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0005_ip = 9; continue _fun0005 }
case 3:
            var4 = 1;
            var3 = var5[var4];
case 9:
            var1 = var2 != var3;
case 19:
            _fun0005_ip = 21; continue _fun0005;
case 15:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 21:
            return var1;
        }
    };
    var3['canResetThemeColors'] = var2;
    return var1;
})();