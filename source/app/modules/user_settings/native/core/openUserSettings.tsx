// app/modules/user_settings/native/core/openUserSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/core/openUserSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var6 = var3.bind(var4)();
            var3 = null;
            var4 = var3 != var6;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.isReady;
            var4 = var5.bind(var6)();
case 2:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var8 = var5.bind(var1)(var4);
            var5 = var8.dispatch;
            var4 = {};
            var9 = 'USER_SETTINGS_MODAL_INIT';
            var4['type'] = var9;
            var11 = var3 == var7;
            var9 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var7.screen;
case 6:
            if(!(var3 == var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot3;
            var9 = var10.OVERVIEW;
case 8:
            var4['section'] = var9;
            var9 = var3 == var7;
            var10 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var7.subsection;
case 10:
            var11 = var3 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var10;
case 12:
            var4['subsection'] = var9;
            var10 = var3 == var7;
            var9 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var7.analyticsLocation;
case 14:
            var4['analyticsLocation'] = var9;
            var4 = var5.bind(var8)(var4);
            var5 = var6.navigate;
            var4 = 'settings';
            var4 = var5.bind(var6)(var4, var7);
            if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 16:
            var2 = var2.bind(var1)();
case 4:
            return var1;
        }
    };
    var3['openUserSettings'] = var2;
    return var1;
})();