// app/modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx
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
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ROLE_COLOR;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'marginHorizontal': 0, 'marginVertical': 0, 'marginRight': 8, 'minWidth': 24, 'height': 24, 'borderRadius': 3};
    var4['rowColorBlock'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormRoleColorPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.color;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot4;
case 2:
            var _closure2_slot0 = var9;
            var6 = var2.disabled;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            var8 = var2.onChange;
            var _closure2_slot1 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 6;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 5;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['color'] = var7;
                var2 = _closure2_slot1;
                var3['onSelect'] = var2;
                var2 = 'RoleColorPicker';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot5;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var8 = 8;
            var8 = var10[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var8['color'] = var9;
            var12 = _closure1_slot6;
            var12 = var12.rowColorBlock;
            var8['style'] = var12;
            var8['onSelect'] = var5;
            var8 = var3.bind(var4)(var11, var8);
            var1['leading'] = var8;
            var8 = _closure1_slot0;
            var7 = 9;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.int2hex;
            var7 = var7.bind(var8)(var9);
            var1['label'] = var7;
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();