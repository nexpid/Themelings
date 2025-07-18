// app/uikit-native/experimental/RoleLabel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = native3;
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
 0:
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
            if(!var1) { _fun0001_ip = 94; continue _fun0001 }
 88:
            var2 = null;
            var1 = var2 != var13;
 94:
            if(!var1) { _fun0001_ip = 106; continue _fun0001 }
 97:
            var1 = {};
            var1['color'] = var13;
            var10 = var1;
 106:
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.container;
            var1['style'] = var5;
            var5 = 'dot';
            var7 = var5 === var7;
            if(!var7) { _fun0001_ip = 146; continue _fun0001 }
 140:
            var5 = null;
            var7 = var5 != var13;
 146:
            if(!var7) { _fun0001_ip = 210; continue _fun0001 }
 149:
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
 210:
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