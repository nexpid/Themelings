// app/modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var4.Keyboard;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNavigatorConfirmChangesOnBack() {
        var5 = _closure1_slot2;
        var2 = var5.useRef;
        var1 = null;
        var2 = var2.bind(var5)(var1);
        var _closure2_slot0 = var2;
        var4 = var5.useRef;
        var1 = false;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 3;
        var3 = var5[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = {};
        var6 = function onBeforeGoBack(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = var2.preventable;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                var1 = var1.current;
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot0;
                var6 = var3.current;
                var3 = null;
                var3 = var3 == var6;
                var5 = undefined;
                if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = var6.hasUnsavedChanges;
                var5 = var3.bind(var6)();
case 6:
                var3 = true;
                var1 = var3 !== var5;
case 4:
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 8:
                var1 = var2.preventDefault;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot3;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = true;
                var1['hasEdits'] = var6;
                var5 = _closure1_slot4;
                var1['resetPending'] = var5;
                var4 = function onConfirm() {
                    var2 = _closure2_slot1;
                    var1 = true;
                    var2['current'] = var1;
                    var2 = _closure3_slot0;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['onConfirm'] = var4;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3['onBeforeGoBack'] = var6;
        var3 = var4.bind(var5)(var3);
        var3 = var3.onGoBack;
        var1['onGoBack'] = var3;
        var1['ref'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();