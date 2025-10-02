// app/modules/activities/panel/native/ActivityPanelUI.tsx
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
            var5 = _closure1_slot7;
            var2 = _closure1_slot1;
            var4 = 'pip';
            var1 = arg2;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot2;
            var3 = 4;
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
    var _closure1_slot12 = var1;
    var1 = function getKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function wrapChildren(arg1) {
        var4 = _closure1_slot7;
        var3 = _closure1_slot4;
        var2 = {};
        var1 = _closure1_slot5;
        var1 = var1.absoluteFill;
        var2['style'] = var1;
        var1 = 'box-none';
        var2['pointerEvents'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = ['pip'];
    var _closure1_slot10 = var4;
    var4 = ['activity'];
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelUI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityPanelUI() {
        var4 = _closure1_slot3;
        var5 = var4.useContext;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var3 = undefined;
        var2 = var6.bind(var3)(var2);
        var2 = var5.bind(var4)(var2);
        var5 = var2.mode;
        var _closure2_slot0 = var5;
        var2 = 7;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var6 = var2.bind(var3)();
        var _closure2_slot1 = var6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = _closure1_slot6;
                var2 = var2.DISCONNECTED;
                if(!(var3 !== var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = _closure2_slot0;
                var2 = _closure1_slot6;
                var2 = var2.PIP;
                if(!(var3 === var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                var2 = _closure2_slot0;
                var1 = _closure1_slot6;
                var1 = var1.PIP;
                if(!(var2 !== var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var10 = _closure1_slot11;
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var10 = _closure1_slot10;
case 11:
                _fun0002_ip = 12; continue _fun0002;
case 5:
                var10 = _closure1_slot9;
case 12:
                var4 = _closure1_slot8;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.LayerScope;
                var1 = {};
                var8 = _closure1_slot7;
                var6 = _closure1_slot1;
                var5 = 9;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var6 = var8.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot7;
                var6 = 10;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.TransitionGroup;
                var6 = {};
                var6['items'] = var10;
                var10 = _closure1_slot12;
                var6['renderItem'] = var10;
                var10 = _closure1_slot13;
                var6['getItemKey'] = var10;
                var9 = _closure1_slot14;
                var6['wrapChildren'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();