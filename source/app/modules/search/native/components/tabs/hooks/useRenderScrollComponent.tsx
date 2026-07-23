// app/modules/search/native/components/tabs/hooks/useRenderScrollComponent.tsx
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot2 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var7 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.FastListIosFabricGestureWorkaround;
        var1 = {};
        var6 = false;
        var1['inActionSheet'] = var6;
        var6 = _closure1_slot3;
        var5 = {};
        var7 = arg2;
        var5['ref'] = var7;
        var8 = arg1;
        var9 = var5;
        var7 = copyDataProperties(var9, var8);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/hooks/useRenderScrollComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRenderScrollComponent() {
        var4 = _closure1_slot2;
        var3 = var4.useContext;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 4;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var2.SwipeForMemberListContext;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 5;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isIOS;
                var3 = var1.bind(var3)();
                var1 = undefined;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot0;
                var3 = null;
                var3 = var3 != var5;
                var1 = undefined;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var1 = _closure1_slot5;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useRenderScrollComponent'] = var2;
    return var1;
})();