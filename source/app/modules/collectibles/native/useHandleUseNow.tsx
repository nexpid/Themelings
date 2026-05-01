// app/modules/collectibles/native/useHandleUseNow.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useHandleUseNow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var6 = var1.product;
        var3 = var1.onSuccess;
        var _closure2_slot0 = var3;
        var7 = _closure1_slot3;
        var5 = var7.useCallback;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)();
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var3 = var7.hideActionSheet;
                var3 = var3.bind(var7)();
                var3 = 3;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.popAll;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var3 = 4;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getRootNavigationRef;
                var3 = var3.bind(var4)();
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var4 = var3.isReady;
                var2 = var4.bind(var3)();
case 5:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 7:
                var2 = var3.navigate;
                var1 = _closure1_slot4;
                var1 = var1.YOU;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var5.bind(var7)(var3, var4);
        var4 = var7.useCallback;
        var3 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'collectible shop apply error';
            var2['key'] = var6;
            var8 = _closure1_slot0;
            var5 = 6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.CKsXk3;
            var5 = var6.bind(var7)(var5);
            var2['content'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var4 = var4.bind(var7)(var3, var2);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useHandleUseNow;
        var1 = {};
        var1['product'] = var6;
        var1['onSuccess'] = var5;
        var1['onError'] = var4;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var3 = var2.handleUseNow;
        var1['handleUseNow'] = var3;
        var2 = var2.isApplying;
        var1['isApplying'] = var2;
        return var1;
    };
    var3['useHandleUseNow'] = var2;
    return var1;
})();