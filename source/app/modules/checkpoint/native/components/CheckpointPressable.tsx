// app/modules/checkpoint/native/components/CheckpointPressable.tsx
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
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/components/CheckpointPressable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CheckpointPressable(arg1) {
        var3 = arg1;
        var1 = var3.muteSound;
        var _closure2_slot0 = var1;
        var1 = var3.children;
        var _closure2_slot1 = var1;
        var1 = var3.onPress;
        var _closure2_slot2 = var1;
        var2 = {'muteSound': 0, 'children': 0, 'onPress': 0};
        var11 = null;
        var12 = var2;
        var1 = silentSetPrototypeOf(var12, var11);
        var12 = {};
        var11 = var3;
        var10 = var2;
        var6 = copyDataProperties(var12, var11, var10);
        var9 = _closure1_slot3;
        var7 = var9.useContext;
        var3 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.CheckpointColorContext;
        var2 = var7.bind(var9)(var2);
        var7 = var2.secondaryColor;
        var2 = 4;
        var2 = var8[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useToken;
        var2 = var2.bind(var3)(var7);
        var _closure2_slot3 = var2;
        var7 = _closure1_slot1;
        var2 = 5;
        var2 = var8[var2];
        var3 = var7.bind(var4)(var2);
        var2 = 6;
        var2 = var8[var2];
        var2 = var7.bind(var4)(var2);
        var2 = var3.bind(var4)(var2);
        var _closure2_slot4 = var2;
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = function onPress(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)();
case 2:
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var7;
        var12 = var1;
        var11 = var6;
        var7 = copyDataProperties(var12, var11);
        var6 = var6.style;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = 'style';
        var1[var6] = var7;
        var6 = function children(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var5 = var1.pressed;
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = {'transform': null, 'shadowOpacity': 0, 'borderBottomColor': null, 'borderRightColor': null, 'borderBottomWidth': 2, 'borderRightWidth': 2};
                var8 = {};
                var9 = 3;
                var8['translateY'] = var9;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var8['translateX'] = var9;
                var7[1] = var8;
                var6['transform'] = var7;
                var7 = _closure2_slot3;
                var6['borderBottomColor'] = var7;
                var6['borderRightColor'] = var7;
                var5 = var6;
case 6:
                var1['style'] = var5;
                var5 = _closure2_slot1;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5 = 'children';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();