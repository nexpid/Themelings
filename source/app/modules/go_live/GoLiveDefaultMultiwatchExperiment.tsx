// app/modules/go_live/GoLiveDefaultMultiwatchExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getGoLiveDefaultMultiwatchExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.location;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var6 = var1.AVHoldoutExperimentH22025;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.isInHoldout;
            var2 = _closure1_slot3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var3.bind(var2)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.definition;
            var1 = var2.defaultConfig;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
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
    var11 = {};
    var5 = false;
    var11['defaultWatchMultipleStreams'] = var5;
    var5 = 1;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = {'name': '2025-08-go-live-default-multiwatch', 'kind': 'user'};
    var5['defaultConfig'] = var11;
    var9 = {};
    var10 = {};
    var15 = var10;
    var14 = var11;
    var11 = copyDataProperties(var15, var14);
    var11 = 'defaultWatchMultipleStreams';
    var10[var11] = var12;
    var9[1] = var10;
    var5['variations'] = var9;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/GoLiveDefaultMultiwatchExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getGoLiveDefaultMultiwatchExperimentConfig'] = var4;
    var2 = function useGoLiveDefaultMultiwatchExperimentConfig(arg1) {
        var2 = arg1;
        var2 = var2.location;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
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
    var3['useGoLiveDefaultMultiwatchExperimentConfig'] = var2;
    return var1;
})();