// app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserFlags;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var9;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 2;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useShowConvoStarterInDM;
            var4 = var3.bind(var4)(var9);
            var3 = 3;
            var3 = var8[var3];
            var8 = var7.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var7.bind(var8)(var5, var1, var3);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.hasFlag;
            var2 = _closure1_slot3;
            var2 = var2.QUARANTINED;
            var2 = var5.bind(var6)(var2);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = !var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();