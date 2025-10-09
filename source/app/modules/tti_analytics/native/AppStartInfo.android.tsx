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
case 0:
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
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot3;
            var3 = true;
            var4[var5] = var3;
            var2 = false;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['getAppUIViewed'] = var7;
    var7 = function getAppStartType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot2;
            var1 = var1.TTIManager;
            var2 = var1.ApplicationStartedTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var1 = undefined;
            return var1;
case 8:
            var1 = arg1;
            var3 = var1 - var2;
            var1 = 'WARM';
            var2 = 3000;
            if(!(var3 < var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = 'COLD';
case 9:
            return var1;
        }
    };
    var2['getAppStartType'] = var7;
    var4 = function getAppStartInfo() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = this;
            var1 = _closure1_slot2;
            var1 = var1.TTIManager;
            var3 = var1.ApplicationStartedTimestamp;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 6:
            var5 = 0;
            if(!(!(var3 <= var5))) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getMainActivityCreationTime;
            var4 = var4.bind(var5)();
            if(!(var1 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 2:
            var1 = var2.getAppStartType;
            var6 = var1.bind(var2)(var4);
            var2 = {};
            var2['app_start_type'] = var6;
            var1 = var4 - var3;
            var2['android_time_creation_to_create_main_activity'] = var1;
            var1 = {};
            var1['appCreatedTime'] = var3;
            var5 = 'WARM';
            if(!(var5 === var6)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var4;
case 14:
            var1['appOpenedTime'] = var3;
            var1['extraProperties'] = var2;
            return var1;
case 13:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var7 = "NativeTTIModule.getMainActivityCreationTime() is not defined. That's unexpected!";
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 11:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var7 = "NativeModules.TTIManager.ApplicationStartedTimestamp is not defined. That's unexpected!";
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
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