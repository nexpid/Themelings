// app/modules/activities/panel/native/utils/ActivityPanelUtils.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/utils/ActivityPanelUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsActivityPanelFullscreen() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var3 = var6.getEmbeddedActivityLocationChannelId;
                var5 = _closure1_slot3;
                var1 = var5.getConnectedActivityLocation;
                var1 = var1.bind(var5)();
                var3 = var3.bind(var6)(var1);
                var1 = var5.getActivityPanelMode;
                var5 = var1.bind(var5)();
                var1 = _closure1_slot4;
                var1 = var1.PANEL;
                var1 = var5 === var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var3);
                var1 = !var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsActivityPanelFullscreen'] = var2;
    return var1;
})();