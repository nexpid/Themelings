// app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function isNonEmptyBoardWidget(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.ApplicationWidget;
            var1 = var3 instanceof var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isGameWidget;
            var2 = var2.bind(var4)(var3);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3.games;
            var4 = var3.length;
            var3 = 0;
            var2 = var4 > var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useDisplayableBoardWidgets.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayableBoardWidgets(arg1) {
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 3;
        var3 = var7[var3];
        var5 = undefined;
        var6 = var4.bind(var5)(var3);
        var4 = var6.useIsMobileGameCollectionExperimentEnabled;
        var3 = 'UserProfileWidgetsBoard';
        var6 = var4.bind(var6)(var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot1;
        var3 = 4;
        var3 = var7[var3];
        var4 = var4.bind(var5)(var3);
        var3 = arg1;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = new Array(0);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var2 = _closure1_slot4;
                var1 = var3.bind(var4)(var2);
case 8:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDisplayableBoardWidgets'] = var2;
    return var1;
})();