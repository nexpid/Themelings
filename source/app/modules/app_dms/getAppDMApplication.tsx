// app/modules/app_dms/getAppDMApplication.tsx
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
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/getAppDMApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAppDMApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPrivate;
            var1 = var1.bind(var3)();
            var2 = undefined;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.getRecipientId;
            var2 = var1.bind(var3)();
case 2:
            var4 = _closure1_slot2;
            var3 = var4.getUser;
            var3 = var3.bind(var4)(var2);
            var4 = null;
            var5 = var4 == var3;
            var6 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3.bot;
case 4:
            var5 = true;
            var3 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2;
case 6:
            var5 = _closure1_slot0;
            var2 = var5.getAppIdForBotUserId;
            var2 = var2.bind(var5)(var3);
            var5 = var4 != var3;
            var7 = var3;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot1;
            var5 = var6.getUserProfile;
            var6 = var5.bind(var6)(var7);
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var6.application;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var5 = var6.id;
case 10:
            var3 = var5;
case 8:
            if(!(var4 != var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var2;
case 13:
            var2 = _closure1_slot0;
            var1 = var2.getApplication;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getAppDMApplication'] = var2;
    return var1;
})();