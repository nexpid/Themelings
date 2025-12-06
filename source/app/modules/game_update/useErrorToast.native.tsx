// app/modules/game_update/useErrorToast.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/useErrorToast.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var5 = var1.isLoading;
        var _closure2_slot0 = var5;
        var1 = var1.error;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var1;
        var1 = undefined;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var3 = null;
                var1 = var3 == var4;
case 2:
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.hideActionSheet;
                var1 = var1.bind(var3)();
case 4:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure2_slot1;
                var2 = null;
                var1 = var2 == var3;
case 6:
                if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var6 = undefined;
                var3 = var10.bind(var6)(var1);
                var2 = var3.open;
                var1 = {};
                var5 = 'GAME_UPDATE_ERROR_TOAST';
                var1['key'] = var5;
                var5 = _closure1_slot0;
                var4 = 3;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var9 = var4.intl;
                var8 = var9.string;
                var4 = 4;
                var4 = var7[var4];
                var4 = var10.bind(var6)(var4);
                var4 = var4./iXnwU;
                var4 = var8.bind(var9)(var4);
                var1['content'] = var4;
                var4 = 5;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.XLargeIcon;
                var1['IconComponent'] = var4;
                var4 = 'status-danger';
                var1['iconColor'] = var4;
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['useErrorToast'] = var2;
    return var1;
})();