// app/modules/tti_analytics/native/AppStartInfo.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.NativeModules;
    var _closure1_slot3 = var7;
    var2 = var2.Platform;
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function getAppUIViewed() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.getMainActivityCreationTime;
            var5 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var2 = var2[var5];
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot5;
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
            var2 = _closure1_slot3;
            var2 = var2.TTIManager;
            var4 = var2.ApplicationStartedTimestamp;
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = 0;
            if(!(!(var4 <= var2))) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot4;
            var3 = var2.Version;
            var2 = 28;
            if(!(!(var3 < var2))) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.wasInitializeCompleteWhenActivityOpened;
            var5 = var1.bind(var2)();
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = 'COLD';
            if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = 'WARM';
case 11:
            var1 = var2.bind(var3)(var1);
            return var1;
case 9:
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = arg1;
            var5 = var1 - var4;
            var1 = 'WARM';
            var4 = 3000;
            if(!(var5 < var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = 'COLD';
case 13:
            var1 = var2.bind(var3)(var1);
            return var1;
case 6:
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = undefined;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['getAppStartType'] = var7;
    var4 = function getAppStartInfo() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure1_slot3;
                    var2 = var2.TTIManager;
                    var6 = var2.ApplicationStartedTimestamp;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var4 = 0;
                    if(!(!(var6 <= var4))) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var9 = 2;
                    var4 = var4[var9];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.getMainActivityCreationTime;
                    var5 = var4.bind(var5)();
                    if(!(var2 != var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = {};
                    var7 = _closure2_slot0;
                    var2 = var7.getAppStartType;
                    var2 = var2.bind(var7)(var5);
                    SaveGenerator(address=107);
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var4['app_start_type'] = var2;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.getLaunchScenario;
                    var3 = var3.bind(var7)();
                    var4['app_launch_scenario'] = var3;
                    var3 = var5 - var6;
                    var4['android_time_creation_to_create_main_activity'] = var3;
                    var3 = {};
                    var3['appCreatedTime'] = var6;
                    var3['appOpenedTime'] = var5;
                    var3['extraProperties'] = var4;
                    return var3;
case 24:
                    return var2;
case 20:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var10 = "NativeTTIModule.getMainActivityCreationTime() is not defined. That's unexpected!";
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 17:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var10 = "NativeModules.TTIManager.ApplicationStartedTimestamp is not defined. That's unexpected!";
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getAppStartInfo'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tti_analytics/native/AppStartInfo.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AppStartInfo'] = var2;
    return var1;
})();