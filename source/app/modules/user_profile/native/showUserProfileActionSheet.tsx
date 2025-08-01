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
 0:
            var2 = arg1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var8 = var1.bind(var3)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = var4.IgnoreProfileSpeedbumpDisabled;
            var4 = var5.getSetting;
            var4 = var4.bind(var5)();
            var5 = var2.ignoreBlockedSpeedBump;
            if(var5) { _fun0001_ip = 257; continue _fun0001 }
 73:
            var7 = _closure1_slot5;
            var6 = var7.isBlocked;
            var5 = var2.userId;
            var10 = var6.bind(var7)(var5);
            var7 = _closure1_slot5;
            var6 = var7.isIgnored;
            var5 = var2.userId;
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0001_ip = 122; continue _fun0001 }
 116:
            if(!var10) { _fun0001_ip = 257; continue _fun0001 }
 122:
            if(!var5) { _fun0001_ip = 131; continue _fun0001 }
 125:
            if(var4) { _fun0001_ip = 257; continue _fun0001 }
 131:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var4 = 6;
            var5 = var6[var4];
            var4 = var6.paths;
            var9 = var7.bind(var1)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var5 = _closure1_slot7;
            var4 = var2.userId;
            var5 = var5.bind(var1)(var4);
            var4 = {};
            var15 = var4;
            var14 = var2;
            var11 = copyDataProperties(var15, var14);
            var11 = 'ignore';
            if(!var10) { _fun0001_ip = 228; continue _fun0001 }
 224:
            var11 = 'block';
 228:
            var10 = 'speedBumpType';
            var4[var10] = var11;
            var10 = 'openedAt';
            var4[var10] = var8;
            var4 = var6.bind(var7)(var9, var5, var4);
            var4 = undefined;
            return var4;
 257:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var4 = 8;
            var5 = var6[var4];
            var4 = var6.paths;
            var7 = var7.bind(var1)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot6;
            var3 = var2.userId;
            var4 = var4.bind(var1)(var3);
            var3 = {};
            var15 = var3;
            var14 = var2;
            var2 = copyDataProperties(var15, var14);
            var2 = 'openedAt';
            var3[var2] = var8;
            var12 = 'replaceAll';
            var16 = var6;
            var15 = var7;
            var14 = var4;
            var13 = var3;
            var2 = var16[var5](var15, var14, var13, var12, var11);
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 113; continue _fun0002 }
 7:
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
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 110; continue _fun0002 }
 60:
                    var8 = var2.default;
                    var7 = var8.getUser;
                    var6 = _closure2_slot0;
                    var6 = var6.userId;
                    var7 = var7.bind(var8)(var6);
                    var6 = null;
                    if(!(var6 != var7)) { _fun0002_ip = 107; continue _fun0002 }
 94:
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var3)(var4);
 107:
                    return var3;
 110:
                    return var2;
 113:
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