// app/modules/user/UserStoreUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function getEnv(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot3;
            var3 = var1.TEST;
            var4 = 'production';
            var1 = var4;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var3 = var3 != var2;
            var1 = var4;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.Environments;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.PREMIUM_TYPE_NONE;
    var _closure1_slot4 = var8;
    var5 = var5.UserFlags;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user/UserStoreUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function validatePremiumType(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = undefined;
            var1 = var3 === var2;
case 5:
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = arg3;
            var2 = var1 === var2;
            var1 = 'Premium type should not change for non-staff users';
            var1 = var3.bind(var4)(var2, var1);
case 7:
            var1 = undefined;
            return var1;
        }
    };
    var3['validatePremiumType'] = var5;
    var3['getEnv'] = var4;
    var4 = function isStaffEnv(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = undefined;
case 9:
            var1 = _closure1_slot6;
            var3 = var1.bind(var3)(var4);
            var1 = _closure1_slot3;
            var1 = var1.DEVELOPMENT;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = global;
            var3 = var3.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.RELEASE_CHANNEL;
            var2 = _closure1_slot3;
            var2 = var2.STAGING;
            var1 = var3 === var2;
case 11:
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var5.isStaff;
            var3 = var3.bind(var5)();
            if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = var5.isStaffPersonal;
            var3 = var4.bind(var5)();
case 17:
            var2 = var3;
case 15:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['isStaffEnv'] = var4;
    var4 = function isStaffEnvRawData(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var9 = undefined;
            if(!(var2 === var9)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var2 = undefined;
case 9:
            var1 = _closure1_slot6;
            var2 = var1.bind(var9)(var2);
            var1 = _closure1_slot3;
            var1 = var1.DEVELOPMENT;
            var2 = var2 !== var1;
            if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var5 = var1.RELEASE_CHANNEL;
            var1 = _closure1_slot3;
            var1 = var1.STAGING;
            var2 = var5 !== var1;
case 11:
            var1 = !var2;
            if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var5 = null;
            var2 = var5 != var4;
            if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var6 = var4.flags;
            var6 = var5 == var6;
            if(var6) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 3;
            var7 = var10[var7];
            var9 = var8.bind(var9)(var7);
            var8 = var9.hasFlag;
            var7 = var4.flags;
            var3 = _closure1_slot5;
            var3 = var3.STAFF;
            var3 = var8.bind(var9)(var7, var3);
            var6 = !var3;
case 23:
            var3 = !var6;
            if(!var6) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = var4.personal_connection_id;
            var3 = var5 != var4;
case 25:
            var2 = var3;
case 21:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var3['isStaffEnvRawData'] = var4;
    var2 = function getPremiumTypeFromRawValue(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0005_ip = 27; continue _fun0005 }
case 6:
            var3 = _closure1_slot4;
            var1 = null;
            if(!(var2 !== var3)) { _fun0005_ip = 28; continue _fun0005 }
case 27:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['getPremiumTypeFromRawValue'] = var2;
    return var1;
})();