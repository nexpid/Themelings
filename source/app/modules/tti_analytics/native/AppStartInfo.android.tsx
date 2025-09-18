// app/modules/tti_analytics/native/AppStartInfo.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot2 = var2;
    var2 = {};
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function getAppUIViewed() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.getMainActivityCreationTime;
            var5 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 44:
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 73; continue _fun0001 }
 61:
            var4 = _closure1_slot3;
            var3 = true;
            var4[var5] = var3;
            var2 = false;
 73:
            var1 = var2;
 76:
            return var1;
        }
    };
    var2['getAppUIViewed'] = var7;
    var7 = function getAppStartType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot2;
            var1 = var1.TTIManager;
            var2 = var1.ApplicationStartedTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 31; continue _fun0002 }
 25:
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0002_ip = 35; continue _fun0002 }
 31:
            var1 = undefined;
            return var1;
 35:
            var1 = arg1;
            var3 = var1 - var2;
            var1 = 'WARM';
            var2 = 3000;
            if(!(var3 < var2)) { _fun0002_ip = 64; continue _fun0002 }
 58:
            var1 = 'COLD';
 64:
            return var1;
        }
    };
    var2['getAppStartType'] = var7;
    var4 = function getAppStartInfo() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = this;
            var3 = _closure1_slot2;
            var3 = var3.TTIManager;
            var3 = var3.ApplicationStartedTimestamp;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getMainActivityCreationTime;
            var4 = var4.bind(var5)();
            var5 = null;
            if(!(var5 == var4)) { _fun0003_ip = 62; continue _fun0003 }
 60:
            return var1;
 62:
            var1 = var2.getAppStartType;
            var6 = var1.bind(var2)(var4);
            var2 = {};
            var2['app_start_type'] = var6;
            var1 = 'COLD';
            if(!(var1 === var6)) { _fun0003_ip = 104; continue _fun0003 }
 92:
            var1 = var4 - var3;
            var2['android_time_creation_to_create_main_activity'] = var1;
 104:
            var1 = {};
            var5 = 'WARM';
            if(!(var5 === var6)) { _fun0003_ip = 119; continue _fun0003 }
 116:
            var3 = var4;
 119:
            var1['appStartedTime'] = var3;
            var1['extraProperties'] = var2;
            return var1;
        }
    };
    var2['getAppStartInfo'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tti_analytics/native/AppStartInfo.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AppStartInfo'] = var2;
    return var1;
})();