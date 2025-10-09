// app/modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useContext;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayNameStylesEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.location;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var4 = var1.DisplayNameStylesViewerExperiment;
            var2 = var4.useExperiment;
            var1 = {};
            var1['location'] = var8;
            var1 = var2.bind(var4)(var1);
            var2 = 3;
            var2 = var7[var2];
            var9 = var6.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.displayNameStylesEnabled;
                return var1;
            };
            var2 = var8.bind(var9)(var4, var2);
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.DisplayNameStylesContext;
            var3 = var4.bind(var5)(var3);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.overrideSettings;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useDisplayNameStylesEnabled'] = var2;
    return var1;
})();