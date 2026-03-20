// app/modules/guild_identity/GuildIdentitySettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_identity/GuildIdentitySettingsUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function canResetThemeColors(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = undefined;
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 0;
            var1 = var5[var4];
case 4:
            var1 = var2 != var1;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = 1;
            var3 = var5[var4];
case 8:
            var1 = var2 != var3;
case 6:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 10:
            return var1;
        }
    };
    var3['canResetThemeColors'] = var2;
    return var1;
})();