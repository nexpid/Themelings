// app/uikit-native/experimental/RoleLabel.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var8 = var4.StyleSheet;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {};
    var10 = 4;
    var9['marginRight'] = var10;
    var4['roleDot'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/experimental/RoleLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RoleLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.name;
            var13 = var1.color;
            var12 = var1.colors;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.roleStyle;
                return var1;
            };
            var7 = var3.bind(var5)(var2, var1);
            var10 = {};
            var1 = 'username';
            var1 = var1 === var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var1 = var2 != var13;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = {};
            var1['color'] = var13;
            var10 = var1;
case 4:
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.container;
            var1['style'] = var5;
            var5 = 'dot';
            var7 = var5 === var7;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = null;
            var7 = var5 != var13;
case 6:
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = _closure1_slot4;
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 5;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.RoleDot;
            var5 = {};
            var5['color'] = var13;
            var5['colors'] = var12;
            var12 = _closure1_slot6;
            var12 = var12.roleDot;
            var5['containerStyles'] = var12;
            var7 = var11.bind(var4)(var8, var5);
case 8:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 6;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormLabel;
            var6 = {};
            var6['style'] = var10;
            var6['text'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RoleLabel'] = var2;
    return var1;
})();