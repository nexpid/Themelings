// app/modules/premium/powerups/experiments/ServerThemeExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'guild', 'id': '2026-04_server_theme', 'label': 'Server Theme'};
    var9 = {'enabled': false, 'inExperiment': false, 'gatesApex': false};
    var4['defaultConfig'] = var9;
    var10 = {'id': 0, 'label': 'Control'};
    var9 = {'enabled': false, 'inExperiment': true, 'gatesApex': false};
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'Enable Server Theme'};
    var11 = {'enabled': true, 'inExperiment': true, 'gatesApex': false};
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/experiments/ServerThemeExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ServerThemeExperiment'] = var4;
    var4 = function getServerThemeEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var5 = _closure1_slot3;
            var4 = var5.getCurrentConfig;
            var2 = {};
            var2['guildId'] = var8;
            var2['location'] = var7;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var2, var1);
            var1 = var2.enabled;
            var4 = var2.inExperiment;
            var2 = null;
            if(!(var2 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {'enabled': false, 'gatesApex': false};
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var6 = var3.ServerThemeApexShadowExperiment;
            var5 = var6.getConfig;
            var3 = {};
            var3['guildId'] = var8;
            var3['location'] = var7;
            var2 = var5.bind(var6)(var3);
case 4:
            var3 = var2.enabled;
            var2 = var2.gatesApex;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = !var2;
            var2 = !var4;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3;
case 7:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['getServerThemeEnabled'] = var4;
    var2 = function useServerThemeEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var4 = _closure1_slot3;
            var3 = var4.useExperiment;
            var2 = {};
            var2['guildId'] = var5;
            var2['location'] = var8;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.enabled;
            var6 = var2.inExperiment;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var7 = var2.ServerThemeApexShadowExperiment;
            var4 = var7.useConfig;
            var3 = {};
            var2 = null;
            var9 = var5;
            if(!(var2 == var9)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = _closure1_slot2;
case 9:
            var3['guildId'] = var9;
            var3['location'] = var8;
            var3 = var4.bind(var7)(var3);
            var4 = var3.enabled;
            var3 = var3.gatesApex;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var2 != var5;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = !var3;
            var3 = !var5;
            if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var4;
case 15:
            var2 = var3;
case 13:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['useServerThemeEnabled'] = var2;
    return var1;
})();