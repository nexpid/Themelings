// app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useAppLauncherNavigation;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNavigationTransitionEnded() {
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var1 = false;
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var7 = undefined;
        var1 = 2;
        var6 = var4.bind(var7)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var4 = 1;
        var6 = var6[var4];
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var8 = var4.bind(var7)();
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 3;
        var3 = var9[var3];
        var4 = var4.bind(var7)(var3);
        var3 = var4.useRoute;
        var7 = var3.bind(var4)();
        var _closure2_slot2 = var7;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            var4 = _closure2_slot1;
            var3 = var4.addListener;
            var2 = 'transitionEnd';
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var3 = var2.routes;
                    var2 = var2.index;
                    var2 = var3[var2];
                    var3 = var2.key;
                    var2 = _closure2_slot2;
                    var2 = var2.key;
                    if(!(var3 === var2)) { _fun0001_ip = 63; continue _fun0001 }
 50:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();