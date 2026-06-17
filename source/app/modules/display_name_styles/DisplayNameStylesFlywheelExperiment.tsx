// app/modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx
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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-06-gummy-bears'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DisplayNameStylesFlywheelExperiment'] = var4;
    var2 = function useIsDisplayNameStylesFlywheelEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.useConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 2:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2.enabled;
case 6:
            return var1;
        }
    };
    var3['useIsDisplayNameStylesFlywheelEnabled'] = var2;
    return var1;
})();