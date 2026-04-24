// app/modules/go_live/GoLiveAutoQualityExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getGoLiveAutoQualityExperimentConfig(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot5;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var12 = true;
    var5['value'] = var12;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ApplicationStreamPresets;
    var _closure1_slot4 = var5;
    var13 = {'allowAutoQuality': false, 'defaultAutoQuality': false, 'migrateAutoQuality': false};
    var5 = 3;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = {'name': '2025-10-go-live-auto-quality', 'kind': 'user'};
    var5['defaultConfig'] = var13;
    var9 = {};
    var10 = {};
    var17 = var10;
    var16 = var13;
    var11 = copyDataProperties(var17, var16);
    var11 = 'allowAutoQuality';
    var10[10] = var12;
    var14 = 'migrateAutoQuality';
    var10[13] = var12;
    var9[1] = var10;
    var10 = {};
    var17 = var10;
    var16 = var13;
    var13 = copyDataProperties(var17, var16);
    var10[10] = var12;
    var11 = 'defaultAutoQuality';
    var10[10] = var12;
    var9[2] = var10;
    var5['variations'] = var9;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/GoLiveAutoQualityExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getGoLiveAutoQualityExperimentConfig'] = var4;
    var4 = function useGoLiveAutoQualityExperimentConfig(arg1) {
        var2 = arg1;
        var2 = var2.location;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot6;
            var2 = {};
            var1 = _closure2_slot0;
            var2['location'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useGoLiveAutoQualityExperimentConfig'] = var4;
    var2 = function maybeMigrateToAutoQuality() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'maybeMigrateToAutoQuality';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var3 = var1.migrateAutoQuality;
            var1 = global;
            var4 = var1.Number;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 5;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var7 = var2.Storage;
            var2 = var7.get;
            var5 = 'GoLiveAutoQualityMigrationVersion';
            var7 = var2.bind(var7)(var5);
            var2 = null;
            var8 = var2 != var7;
            var2 = 0;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
case 2:
            var2 = var4.bind(var1)(var2);
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 1;
            if(!(!(var2 >= var4))) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = _closure1_slot3;
            var2 = var3.getState;
            var10 = var2.bind(var3)();
            var3 = var10.preset;
            var2 = _closure1_slot4;
            var2 = var2.PRESET_CUSTOM;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 6;
            var7 = var2[var7];
            var9 = var3.bind(var1)(var7);
            var8 = var9.updateStreamSettings;
            var7 = {};
            var11 = _closure1_slot4;
            var11 = var11.PRESET_AUTO;
            var7['preset'] = var11;
            var11 = var10.resolution;
            var7['resolution'] = var11;
            var11 = var10.fps;
            var7['frameRate'] = var11;
            var10 = var10.soundshareEnabled;
            var7['soundshareEnabled'] = var10;
            var10 = true;
            var7['noTrack'] = var10;
            var7 = var8.bind(var9)(var7);
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var3 = var2.Storage;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
case 4:
            return var1;
        }
    };
    var3['maybeMigrateToAutoQuality'] = var2;
    return var1;
})();