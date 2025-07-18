// app/modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-04_user_profile_performance_analytics', 'label': 'User Profile Performance Analytics Experiment'};
    var4 = {};
    var10 = false;
    var4['performanceAnalyticsEnabled'] = var10;
    var7['defaultConfig'] = var4;
    var11 = {'id': 1, 'label': 'Performance analytics enabled'};
    var4 = 1;
    var10 = {};
    var10['performanceAnalyticsEnabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot0 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isUserProfilePerformanceAnalyticsEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var5 = true;
 22:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.performanceAnalyticsEnabled;
            return var1;
        }
    };
    var3['isUserProfilePerformanceAnalyticsEnabled'] = var2;
    return var1;
})();