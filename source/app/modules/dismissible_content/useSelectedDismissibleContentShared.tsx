// app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
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
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/useSelectedDismissibleContentShared.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectedDismissibleContentShared(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot2 = var1;
            var8 = !var3;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
            var8 = var3 != var6;
case 4:
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var3 = var4.has;
            var3 = var3.bind(var4)(var6);
            var8 = !var3;
case 6:
            _closure2_slot2 = var8;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = _closure1_slot3;
                        var5 = var3.lastDCDismissed;
                        var3 = _closure2_slot0;
                        var3 = var5 !== var3;
                        if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var4 = 4;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.isGuildDismissibleConent;
                        var4 = _closure2_slot0;
                        var3 = var5.bind(var6)(var4);
case 10:
                        var2 = var3;
case 8:
                        if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var3 = var1.AUTO_DISMISS;
                        var2 = undefined;
                        var1 = true;
                        var1 = var4.bind(var2)(var3, var1);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useSelectedDismissibleContentShared'] = var2;
    return var1;
})();