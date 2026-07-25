// app/modules/share/native/showSearchableDestinationListModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/showSearchableDestinationListModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showSearchableDestinationListModal(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 0;
            var3 = var7[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var3 = var5.dismissKeyboard;
            var3 = var3.bind(var5)();
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var6 = var5.bind(var2)(var3);
            var5 = var6.pushLazy;
            var3 = 2;
            var3 = var7[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var3 = var3.bind(var2)(var1);
            var1 = var3.getIsWindowLarge;
            var1 = var1.bind(var3)();
            var4 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = {};
            var2 = 'modal';
            var1['presentation'] = var2;
            var4 = var1;
case 4:
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var12 = var6;
            var8 = var4;
            var1 = var12[var5](var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();