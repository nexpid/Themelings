// app/modules/keyboard/native/useModalDismissGuardRefreshControl.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RefreshControl;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = function noop() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useModalDismissGuardRefreshControl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useModalDismissGuardRefreshControl() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useIsPortalKeyboardInModal;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var5 = undefined;
                var1 = undefined;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var1 = undefined;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var4 = _closure1_slot4;
                var3 = _closure1_slot3;
                var2 = {'refreshing': false, 'onRefresh': null, 'tintColor': 'transparent'};
                var6 = _closure1_slot5;
                var2['onRefresh'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useModalDismissGuardRefreshControl'] = var2;
    return var1;
})();