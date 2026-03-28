// app/modules/user_profile/utils/getCurrentUserProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getCurrentUserProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCurrentUserProfile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var2 = null;
            var5 = var2 == var3;
            var1 = null;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var2 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot1;
            var5 = var7.getUserProfile;
            var2 = var3.id;
            var2 = var5.bind(var7)(var2);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var5 = _closure1_slot1;
            var4 = var5.getGuildMemberProfile;
            var3 = var3.id;
            var2 = var4.bind(var5)(var3, var6);
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();