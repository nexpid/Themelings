// app/modules/tti_analytics/native/AppStartInfo.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = {};
    var _closure1_slot3 = var2;
    var2 = {};
    var6 = function getAppUIViewed() {
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
    var2['getAppUIViewed'] = var6;
    var4 = function getAppStartInfo() {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var10 = 2;
                    var2 = var2[var10];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.getAppStartedTimestamp;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=49);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = 0;
                    if(!(!(var2 <= var3))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var9 = 1;
                    var3 = var3[var9];
                    var5 = var5.bind(var8)(var3);
                    var3 = var5.getMainActivityCreationTime;
                    var6 = var3.bind(var5)();
                    var3 = null;
                    if(!(var3 != var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = {};
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var10];
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.getAppStartType;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=138);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var5['app_start_type'] = var3;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var7 = var7.bind(var8)(var4);
                    var4 = var7.getLaunchScenario;
                    var4 = var4.bind(var7)();
                    var5['app_launch_scenario'] = var4;
                    var4 = var6 - var2;
                    var5['android_time_creation_to_create_main_activity'] = var4;
                    var4 = {};
                    var4['appCreatedTime'] = var2;
                    var4['appFirstVisibleTime'] = var6;
                    var4['extraProperties'] = var5;
                    return var4;
case 18:
                    return var3;
case 14:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var11 = "NativeTTIModule.getMainActivityCreationTime() is not defined. That's unexpected!";
                    var12 = var4;
                    var3 = new var12[var5](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 12:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var11 = "NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!";
                    var12 = var4;
                    var3 = new var12[var5](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 10:
                    return var2;
case 6:
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
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tti_analytics/native/AppStartInfo.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AppStartInfo'] = var2;
    return var1;
})();