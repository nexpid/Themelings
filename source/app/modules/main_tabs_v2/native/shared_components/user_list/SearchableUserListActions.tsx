// app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function UserFlashListActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.actions;
            var6 = var1.style;
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = {};
            var5 = 1;
            var7['flex'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var2['style'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var8 = null;
            var9 = var8 == var11;
            var8 = undefined;
            if(var9) { _fun0001_ip = 116; continue _fun0001 }
 97:
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var14 = var1.label;
                var13 = var1.subLabel;
                var11 = var1.icon;
                var10 = var1.IconComponent;
                var9 = var1.iconVariant;
                var1 = var1.onPress;
                var5 = _closure1_slot6;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 5;
                var2 = var12[var6];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.TableRow;
                var2 = {};
                var2['label'] = var14;
                var2['subLabel'] = var13;
                var8 = _closure1_slot6;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.TableRow;
                var7 = var6.Icon;
                var6 = {};
                var6['source'] = var11;
                var6['IconComponent'] = var10;
                var6['variant'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2['icon'] = var6;
                var2['onPress'] = var1;
                var1 = true;
                var2['arrow'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var10.bind(var11)(var9);
 116:
            var5['children'] = var8;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot4 = var8;
    var5 = var5.StyleSheet;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useUserListActionsProps(arg1) {
        var2 = arg1;
        var7 = var2.actions;
        var _closure2_slot0 = var7;
        var5 = var2.style;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 3;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var6 = var3.bind(var4)();
        var _closure2_slot2 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot5;
                var2 = var4.flatten;
                var1 = _closure2_slot1;
                var6 = null;
                if(!(var6 == var1)) { _fun0002_ip = 30; continue _fun0002 }
 26:
                var1 = {};
                _fun0002_ip = 34; continue _fun0002;
 30:
                var1 = _closure2_slot1;
 34:
                var1 = var2.bind(var4)(var1);
                var2 = var1.paddingTop;
                var5 = 0;
                var4 = undefined;
                var9 = 0;
                if(!(var4 !== var2)) { _fun0002_ip = 58; continue _fun0002 }
 55:
                var9 = var2;
 58:
                var1 = var1.paddingBottom;
                var8 = 0;
                if(!(var4 !== var1)) { _fun0002_ip = 73; continue _fun0002 }
 70:
                var8 = var1;
 73:
                var2 = 'number';
                var1 = typeof var9;
                if(!(var2 === var1)) { _fun0002_ip = 201; continue _fun0002 }
 84:
                var1 = typeof var8;
                if(!(var2 === var1)) { _fun0002_ip = 201; continue _fun0002 }
 91:
                var1 = {};
                var2 = _closure2_slot0;
                var7 = var6 != var2;
                var2 = 0;
                if(!var7) { _fun0002_ip = 149; continue _fun0002 }
 106:
                var7 = _closure2_slot0;
                var7 = var7.length;
                var7 = var7 > var5;
                var2 = 0;
                if(!var7) { _fun0002_ip = 149; continue _fun0002 }
 124:
                var7 = _closure2_slot0;
                var10 = var7.length;
                var7 = _closure2_slot2;
                var7 = var10 * var7;
                var7 = var7 + var9;
                var2 = var7 + var8;
 149:
                var1['headerSize'] = var2;
                var2 = _closure2_slot0;
                var6 = var6 != var2;
                var2 = undefined;
                if(!var6) { _fun0002_ip = 194; continue _fun0002 }
 167:
                var3 = _closure2_slot0;
                var3 = var3.length;
                var3 = var3 > var5;
                var2 = undefined;
                if(!var3) { _fun0002_ip = 194; continue _fun0002 }
 185:
                var2 = function() {
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['actions'] = var5;
                    var1 = _closure2_slot1;
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
 194:
                var1['renderHeader'] = var2;
                return var1;
 201:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var11 = 'UserListActions: paddingTop and paddingBottom must be numbers.';
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useUserListActionsProps'] = var4;
    var3['UserFlashListActions'] = var2;
    return var1;
})();