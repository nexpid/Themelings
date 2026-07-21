// app/modules/age_assurance/native/AppStoreAgeAssurance.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var10 = {};
    var7 = 1;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AgeSignalsVerificationStatus;
    var9 = var8.VERIFIED;
    var8 = 'VERIFIED';
    var10[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AgeSignalsVerificationStatus;
    var9 = var8.SUPERVISED;
    var8 = 'SUPERVISED';
    var10[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AgeSignalsVerificationStatus;
    var9 = var8.SUPERVISED_APPROVAL_PENDING;
    var8 = 'SUPERVISED_APPROVAL_PENDING';
    var10[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AgeSignalsVerificationStatus;
    var9 = var8.SUPERVISED_APPROVAL_DENIED;
    var8 = 'SUPERVISED_APPROVAL_DENIED';
    var10[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AgeSignalsVerificationStatus;
    var9 = var8.UNKNOWN;
    var8 = 'UNKNOWN';
    var10[8] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AgeSignalsVerificationStatus;
    var8 = var7.DECLARED;
    var7 = 'DECLARED';
    var10[7] = var7;
    var _closure1_slot3 = var10;
    var8 = var2.Object;
    var7 = var8.fromEntries;
    var9 = var2.Object;
    var2 = var9.entries;
    var10 = var2.bind(var9)(var10);
    var9 = var10.map;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var2 = var6().value;
            var3 = var1;
            var4 = undefined;
            var5 = var3 === var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2;
case 2:
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var4;
            var2 = undefined;
            var5 = var6;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var7;
            var5 = var6;
case 4:
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1.return();
case 7:
            var1 = new Array(2);
            var1[0] = var2;
            var2 = global;
            var2 = var2.Number;
            var2 = var2.bind(var4)(var3);
            var1[1] = var2;
            return var1;
        }
    };
    var2 = var9.bind(var10)(var2);
    var2 = var7.bind(var8)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function getAgeSignals() {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 1;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getAgeSignals;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=46);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = {};
                    var6 = 'android';
                    var3['platform'] = var6;
                    var6 = var2.ageLower;
                    var3['ageLower'] = var6;
                    var6 = var2.ageUpper;
                    var3['ageUpper'] = var6;
                    var7 = var2.userStatus;
                    var6 = null;
                    var6 = var6 == var7;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var6 = _closure1_slot3;
                    var5 = var2.userStatus;
                    var4 = var6[var5];
case 15:
                    var3['googleUserStatus'] = var4;
                    return var3;
case 13:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getAgeSignals'] = var7;
    var4 = function getIsConsideredOlderThan(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getAgeSignals;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=62);
case 8:
                    return var3;
case 21:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var5 = var3;
                    if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    return var3;
case 19:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var6 = var4.googleUserStatus;
                    var7 = var7 == var6;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure1_slot4;
                    var7 = var4.googleUserStatus;
                    var6 = var8[var7];
case 24:
                    var3['userStatus'] = var6;
                    var6 = var4.ageLower;
                    var3['ageLower'] = var6;
                    var4 = var4.ageUpper;
                    var3['ageUpper'] = var4;
                    var5 = var3;
case 22:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.isConsideredOlderThan;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var5, var2);
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getIsConsideredOlderThan'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/native/AppStoreAgeAssurance.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();