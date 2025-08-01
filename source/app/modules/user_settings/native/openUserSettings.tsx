// app/modules/user_settings/native/openUserSettings.tsx
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
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/openUserSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var4 = var2.bind(var3)();
            var7 = null;
            var2 = var7 != var4;
            if(!var2) { _fun0001_ip = 57; continue _fun0001 }
 47:
            var3 = var4.isReady;
            var2 = var3.bind(var4)();
 57:
            if(!var2) { _fun0001_ip = 188; continue _fun0001 }
 63:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var6 = var3.bind(var1)(var2);
            var3 = var6.dispatch;
            var2 = {};
            var8 = 'USER_SETTINGS_MODAL_INIT';
            var2['type'] = var8;
            var8 = var5.screen;
            if(!(var7 == var8)) { _fun0001_ip = 118; continue _fun0001 }
 108:
            var9 = _closure1_slot3;
            var8 = var9.OVERVIEW;
 118:
            var2['section'] = var8;
            var8 = var5.subsection;
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 140; continue _fun0001 }
 137:
            var7 = var8;
 140:
            var2['subsection'] = var7;
            var7 = var5.analyticsLocation;
            var2['analyticsLocation'] = var7;
            var7 = var5.scrollPosition;
            var2['scrollPosition'] = var7;
            var2 = var3.bind(var6)(var2);
            var3 = var4.navigate;
            var2 = 'settings';
            var2 = var3.bind(var4)(var2, var5);
 188:
            return var1;
        }
    };
    var3['openUserSettings'] = var2;
    return var1;
})();