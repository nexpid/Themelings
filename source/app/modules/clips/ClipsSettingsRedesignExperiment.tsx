// app/modules/clips/ClipsSettingsRedesignExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function useIsClipsSettingsRedesignEnabled() {
        var3 = _closure1_slot3;
        var2 = var3.useConfig;
        var1 = {};
        var4 = 'useIsClipsSettingsRedesignEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableRedesign;
        return var1;
    };
    var _closure1_slot4 = var5;
    var4 = function useDisabledWhenClippingOff() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot4;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsClipsEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var13 = true;
    var6['value'] = var13;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var6);
    var1 = 0;
    var7 = var9[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var10 = var8.bind(var1)(var6);
    var7 = var10.createApexExperiment;
    var6 = {'kind': 'user', 'name': '2026-06-clips-settings-redesign'};
    var11 = {};
    var12 = false;
    var11['enableRedesign'] = var12;
    var6['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enableRedesign'] = var13;
    var11[1] = var12;
    var6['variations'] = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot3 = var6;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/clips/ClipsSettingsRedesignExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var3['ClipsSettingsRedesignExperiment'] = var6;
    var3['useIsClipsSettingsRedesignEnabled'] = var5;
    var5 = function isClipsSettingsRedesignEnabled() {
        var3 = _closure1_slot3;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'isClipsSettingsRedesignEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableRedesign;
        return var1;
    };
    var3['isClipsSettingsRedesignEnabled'] = var5;
    var3['useDisabledWhenClippingOff'] = var4;
    var2 = function useDisabledWhenAutoclippingOff() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot4;
            var6 = undefined;
            var2 = var1.bind(var6)();
            var1 = _closure1_slot5;
            var1 = var1.bind(var6)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getEnableAutoclipping;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var4, var3);
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = !var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useDisabledWhenAutoclippingOff'] = var2;
    return var1;
})();