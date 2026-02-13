// app/modules/frames/panel/native/FramePanelUI.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function renderActivityOrPIP(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot4;
            var2 = _closure1_slot1;
            var4 = 'pip';
            var1 = arg2;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot2;
            var3 = 2;
            var1 = var4[var3];
case 4:
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = {};
            var1 = arg3;
            var2['transitionState'] = var1;
            var1 = arg4;
            var2['transitionCleanUp'] = var1;
            var1 = arg1;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/FramePanelUI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FramePanelUI() {
        var4 = _closure1_slot3;
        var5 = var4.useCallback;
        var3 = function() {
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2 = new Array(0);
        var5 = var5.bind(var4)(var3, var2);
        var _closure2_slot0 = var5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BaseActivityPanelUI;
            var1 = {};
            var6 = _closure1_slot5;
            var1['renderActivityOrPIP'] = var6;
            var6 = _closure1_slot1;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var1['context'] = var5;
            var5 = _closure2_slot0;
            var1['renderActivityPanelSystemUIManager'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();