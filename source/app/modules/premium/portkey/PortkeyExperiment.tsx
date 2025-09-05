// app/modules/premium/portkey/PortkeyExperiment.tsx
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
    var5 = var8.createExperiment;
    var4 = {'kind': 'guild', 'id': '2025-08_portkey_enabled', 'label': 'Portkey Enabled'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable Portkey'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/portkey/PortkeyExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PortkeyExperiment'] = var4;
    var4 = function getPortkeyEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0001_ip = 37; continue _fun0001 }
 27:
            var4 = var5.isStaff;
            var3 = var4.bind(var5)();
 37:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 47; continue _fun0001 }
 44:
            var2 = var3;
 47:
            var5 = _closure1_slot3;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var1 = arg1;
            var3['guildId'] = var1;
            var1 = arg2;
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var1 = var2;
 99:
            return var1;
        }
    };
    var3['getPortkeyEnabled'] = var4;
    var2 = function usePortkeyEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 37; continue _fun0003 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 47; continue _fun0003 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var5 = _closure1_slot3;
            var4 = var5.useExperiment;
            var3 = {};
            var1 = arg1;
            var3['guildId'] = var1;
            var1 = arg2;
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0002_ip = 107; continue _fun0002 }
 104:
            var1 = var2;
 107:
            return var1;
        }
    };
    var3['usePortkeyEnabled'] = var2;
    return var1;
})();