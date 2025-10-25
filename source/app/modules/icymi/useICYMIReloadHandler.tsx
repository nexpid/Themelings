// app/modules/icymi/useICYMIReloadHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/useICYMIReloadHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useICYMIReloadHandler(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var6 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var4 = var2.ICYMIAnalytics;
                    var3 = var4.trackFeedShown;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var7 = null;
                    var10 = var7 != var9;
                    var9 = 'NoDotShown';
                    var7 = var9;
                    if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = _closure2_slot0;
                    var7 = var9;
                    if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var7 = 'DotShown';
case 4:
                    var2['variant'] = var7;
                    var7 = 'gravity_refresh';
                    var2['homeSessionId'] = var7;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var8 = 3;
                    var2 = var2[var8];
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.fetchDehydrated;
                    var2 = {};
                    var7 = true;
                    var2['isReloading'] = var7;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=154);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.reloadICYMITab;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=191);
case 11:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.getGuildChannelScores;
                    var4 = var4.bind(var7)();
                    SaveGenerator(address=228);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getRecommendedGuilds;
                    var6 = var6.bind(var7)();
                    return var5;
case 17:
                    return var4;
case 13:
                    return var3;
case 9:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var6.bind(var2)(var1);
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useICYMIReloadHandler'] = var2;
    return var1;
})();