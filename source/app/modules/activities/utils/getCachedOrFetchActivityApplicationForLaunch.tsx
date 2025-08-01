// app/modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getCachedOrFetchActivityApplicationForLaunch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 295; continue _fun0001 }
 13:
                    var3 = _closure1_slot4;
                    var2 = var3.getApplication;
                    var2 = var2.bind(var3)(var10);
                    var3 = _closure1_slot8;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    if(var3) { _fun0001_ip = 292; continue _fun0001 }
 48:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var3 = arg2;
                    var3 = var5.bind(var6)(var3);
                    var6 = null;
                    var5 = var6 == var3;
                    var9 = undefined;
                    if(var5) { _fun0001_ip = 81; continue _fun0001 }
 76:
                    var9 = var3.guild_id;
 81:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.fetchShelf;
                    var3 = {};
                    var3['guildId'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=122);
 120:
                    return var3;
 122:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 289; continue _fun0001 }
 131:
                    var11 = var3.activityConfigs;
                    var9 = var3.applications;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 5;
                    var5 = var12[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = {};
                    var5['applicationId'] = var10;
                    var5['activityConfigs'] = var11;
                    var5['applications'] = var9;
                    var5 = var7.bind(var4)(var5);
                    var9 = _closure1_slot8;
                    var11 = var6 == var5;
                    var7 = undefined;
                    if(var11) { _fun0001_ip = 202; continue _fun0001 }
 197:
                    var7 = var5.application;
 202:
                    var7 = var9.bind(var4)(var7);
                    if(var7) { _fun0001_ip = 272; continue _fun0001 }
 210:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var7 = var11[var7];
                    var9 = var9.bind(var4)(var7);
                    var7 = var9.fetchApplication;
                    var7 = var7.bind(var9)(var10);
                    SaveGenerator(address=245);
 243:
                    return var7;
 245:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 269; continue _fun0001 }
 251:
                    var9 = _closure1_slot5;
                    var8 = var9.createFromServer;
                    var8 = var8.bind(var9)(var7);
                    return var8;
 269:
                    return var7;
 272:
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0001_ip = 286; continue _fun0001 }
 281:
                    var4 = var5.application;
 286:
                    return var4;
 289:
                    return var3;
 292:
                    return var2;
 295:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function isUsableApplicationRecord(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0002_ip = 22; continue _fun0002 }
 12:
            var2 = var2.embeddedActivityConfig;
            var1 = var3 != var2;
 22:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCachedOrFetchActivityApplicationForLaunch() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();