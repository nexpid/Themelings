// app/modules/user/UserStoreUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function getEnv(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = _closure1_slot3;
            var3 = var1.TEST;
            var4 = 'production';
            var1 = var4;
            if(!(var4 === var3)) { _fun0001_ip = 42; continue _fun0001 }
 27:
            var3 = null;
            var3 = var3 != var2;
            var1 = var4;
            if(!var3) { _fun0001_ip = 42; continue _fun0001 }
 39:
            var1 = var2;
 42:
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
 0:
            var1 = arg1;
            var2 = arg2;
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
 9:
            var3 = undefined;
            var1 = var3 === var2;
 15:
            if(var1) { _fun0002_ip = 62; continue _fun0002 }
 18:
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
 62:
            var1 = undefined;
            return var1;
        }
    };
    var3['validatePremiumType'] = var5;
    var3['getEnv'] = var4;
    var4 = function isStaffEnv(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 14; continue _fun0003 }
 12:
            var4 = undefined;
 14:
            var1 = _closure1_slot6;
            var3 = var1.bind(var3)(var4);
            var1 = _closure1_slot3;
            var1 = var1.DEVELOPMENT;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 77; continue _fun0003 }
 43:
            var3 = global;
            var3 = var3.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.RELEASE_CHANNEL;
            var2 = _closure1_slot3;
            var2 = var2.STAGING;
            var1 = var3 === var2;
 77:
            if(var1) { _fun0003_ip = 118; continue _fun0003 }
 80:
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0003_ip = 115; continue _fun0003 }
 89:
            var3 = var5.isStaff;
            var3 = var3.bind(var5)();
            if(var3) { _fun0003_ip = 112; continue _fun0003 }
 102:
            var4 = var5.isStaffPersonal;
            var3 = var4.bind(var5)();
 112:
            var2 = var3;
 115:
            var1 = var2;
 118:
            return var1;
        }
    };
    var3['isStaffEnv'] = var4;
    var4 = function isStaffEnvRawData(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var9 = undefined;
            if(!(var2 === var9)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var2 = undefined;
 14:
            var1 = _closure1_slot6;
            var2 = var1.bind(var9)(var2);
            var1 = _closure1_slot3;
            var1 = var1.DEVELOPMENT;
            var2 = var2 !== var1;
            if(!var2) { _fun0004_ip = 77; continue _fun0004 }
 43:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var5 = var1.RELEASE_CHANNEL;
            var1 = _closure1_slot3;
            var1 = var1.STAGING;
            var2 = var5 !== var1;
 77:
            var1 = !var2;
            if(!var2) { _fun0004_ip = 176; continue _fun0004 }
 83:
            var5 = null;
            var2 = var5 != var4;
            if(!var2) { _fun0004_ip = 173; continue _fun0004 }
 92:
            var6 = var4.flags;
            var6 = var5 == var6;
            if(var6) { _fun0004_ip = 154; continue _fun0004 }
 104:
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
 154:
            var3 = !var6;
            if(!var6) { _fun0004_ip = 170; continue _fun0004 }
 160:
            var4 = var4.personal_connection_id;
            var3 = var5 != var4;
 170:
            var2 = var3;
 173:
            var1 = var2;
 176:
            return var1;
        }
    };
    var3['isStaffEnvRawData'] = var4;
    var2 = function getPremiumTypeFromRawValue(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0005_ip = 22; continue _fun0005 }
 9:
            var3 = _closure1_slot4;
            var1 = null;
            if(!(var2 !== var3)) { _fun0005_ip = 25; continue _fun0005 }
 22:
            var1 = var2;
 25:
            return var1;
        }
    };
    var3['getPremiumTypeFromRawValue'] = var2;
    return var1;
})();