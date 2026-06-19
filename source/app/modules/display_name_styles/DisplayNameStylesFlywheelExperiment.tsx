// app/modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function useIsStaff() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var4.isStaff;
                var2 = var3.bind(var4)();
case 2:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var8[var4];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-06-gummy-bears'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var5['defaultConfig'] = var10;
    var10 = {};
    var13 = {};
    var13['enabled'] = var12;
    var10[1] = var13;
    var5['variations'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-06-gummy-viewers'};
    var10 = {};
    var10['enabled'] = var11;
    var4['defaultConfig'] = var10;
    var10 = {};
    var11 = {};
    var11['enabled'] = var12;
    var10[1] = var11;
    var4['variations'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DisplayNameStylesFlywheelSettersExperiment'] = var5;
    var3['DisplayNameStylesFlywheelViewersExperiment'] = var4;
    var4 = function useIsDisplayNameStylesFlywheelViewersEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.useConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot5;
            var1 = undefined;
            var1 = var3.bind(var1)();
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.enabled;
case 6:
            return var1;
        }
    };
    var3['useIsDisplayNameStylesFlywheelViewersEnabled'] = var4;
    var2 = function useIsDisplayNameStylesFlywheelSettersEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.useConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot5;
            var1 = undefined;
            var1 = var3.bind(var1)();
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2.enabled;
case 6:
            return var1;
        }
    };
    var3['useIsDisplayNameStylesFlywheelSettersEnabled'] = var2;
    return var1;
})();