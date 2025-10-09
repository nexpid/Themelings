// app/modules/home_drawer/native/HomeDrawerStore.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.DM_WIDTH;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createWithEqualityFn;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.shallow;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 2;
        var3 = var7[var4];
        var5 = undefined;
        var9 = var6.bind(var5)(var3);
        var8 = var9.makeMutable;
        var3 = 0;
        var8 = var8.bind(var9)(var3);
        var1['panelX'] = var8;
        var4 = var7[var4];
        var6 = var6.bind(var5)(var4);
        var5 = var6.makeMutable;
        var4 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0, 'requiresPop': true};
        var4 = var5.bind(var6)(var4);
        var1['gestureState'] = var4;
        var1['maxX'] = var3;
        var3 = function setPanelX(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = var2.panelX;
                var4 = var2.gestureState;
                var3 = var2.maxX;
                var6 = 'open';
                var2 = arg1;
                if(!(var6 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = var5.set;
                var2 = 0;
                var2 = var6.bind(var5)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = var5.set;
                var2 = var2.bind(var5)(var3);
case 4:
                var3 = var4.set;
                var2 = {};
                var5 = var4.get;
                var7 = var5.bind(var4)();
                var8 = var2;
                var5 = copyDataProperties(var8, var7);
                var6 = false;
                var5 = 'active';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['setPanelX'] = var3;
        var2 = function updateMaxX(arg1, arg2) {
            var1 = arg2;
            var2 = arg1;
            var3 = var2.width;
            var2 = var1.left;
            var2 = var3 - var2;
            var1 = var1.right;
            var2 = var2 - var1;
            var1 = _closure1_slot2;
            var1 = var2 - var1;
            var4 = 8;
            var1 = var1 - var4;
            var3 = _closure2_slot0;
            var2 = {};
            var1 = var1 + var4;
            var2['maxX'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['updateMaxX'] = var2;
        return var1;
    };
    var2 = var7.bind(var8)(var2, var4);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();