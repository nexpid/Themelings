// app/modules/user_profile/native/showUserProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function getUserProfileActionSheetKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'UserProfile';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot6 = var5;
    var4 = function getUserProfileIgnoredSpeedBumpActionSheetKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'UserProfileIgnoredSpeedBump';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var6 = function showUserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.IgnoreProfileSpeedbumpDisabled;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            var4 = var7.ignoreBlockedSpeedBump;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot5;
            var5 = var6.isBlocked;
            var4 = var7.userId;
            var9 = var5.bind(var6)(var4);
            var6 = _closure1_slot5;
            var5 = var6.isIgnored;
            var4 = var7.userId;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var3 = 6;
            var4 = var5[var3];
            var3 = var5.paths;
            var8 = var6.bind(var1)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.openLazy;
            var4 = _closure1_slot7;
            var3 = var7.userId;
            var4 = var4.bind(var1)(var3);
            var3 = {};
            var14 = var3;
            var13 = var7;
            var10 = copyDataProperties(var14, var13);
            var10 = 'ignore';
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = 'block';
case 8:
            var9 = 'speedBumpType';
            var3[var9] = var10;
            var3 = var5.bind(var6)(var8, var4, var3);
            var3 = undefined;
            return var3;
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var3 = 8;
            var4 = var5[var3];
            var3 = var5.paths;
            var6 = var6.bind(var1)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot6;
            var2 = var7.userId;
            var13 = var3.bind(var1)(var2);
            var11 = 'replaceAll';
            var15 = var5;
            var14 = var6;
            var12 = var7;
            var2 = var15[var4](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.addPostConnectionCallback;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/native/showUserProfileActionSheet.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['getUserProfileActionSheetKey'] = var5;
    var5 = function getUserProfileBlockedSpeedBumpActionSheetKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'UserProfileBlockedSpeedBump';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getUserProfileBlockedSpeedBumpActionSheetKey'] = var5;
    var3['getUserProfileIgnoredSpeedBumpActionSheetKey'] = var4;
    var2 = function showUserProfileActionSheetPostConnection(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var4 = _closure1_slot3;
        var1 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 4;
                    var4 = var2[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = 3;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=54);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var8 = var2.default;
                    var7 = var8.getUser;
                    var6 = _closure2_slot0;
                    var6 = var6.userId;
                    var7 = var7.bind(var8)(var6);
                    var6 = null;
                    if(!(var6 != var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var3)(var4);
case 16:
                    return var3;
case 14:
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var1)(var2);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['showUserProfileActionSheetPostConnection'] = var2;
    return var1;
})();