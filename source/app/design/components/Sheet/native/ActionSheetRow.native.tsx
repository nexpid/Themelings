// app/design/components/Sheet/native/ActionSheetRow.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function ActionSheetRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var11 = var3.label;
            var12 = var3.variant;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 19:
            var12 = 'default';
 23:
            var10 = var3.arrow;
            var9 = var3.icon;
            var2 = {'label': 0, 'variant': 0, 'arrow': 0, 'icon': 0};
            var15 = null;
            var16 = var2;
            var1 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var3;
            var14 = var2;
            var15 = copyDataProperties(var16, var15, var14);
            var3 = _closure1_slot4;
            var1 = _closure1_slot5;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var12;
            var7 = _closure1_slot4;
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var5 = 3;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRow;
            var5 = {};
            var5['variant'] = var12;
            var5['label'] = var11;
            var5['arrow'] = var10;
            var5['icon'] = var9;
            var16 = var5;
            var8 = copyDataProperties(var16, var15);
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
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
    var9 = var5.bind(var1)(var8);
    var _closure1_slot2 = var9;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var8 = var9.createContext;
    var5 = 'default';
    var5 = var8.bind(var9)(var5);
    var _closure1_slot5 = var5;
    var5 = function ActionSheetRowIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.source;
            var7 = var1.IconComponent;
            var4 = _closure1_slot2;
            var3 = var4.useContext;
            var2 = _closure1_slot5;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.TableRowIcon;
            var1 = {};
            var1['source'] = var6;
            var6 = null;
            var8 = var6 != var7;
            var6 = undefined;
            if(!var8) { _fun0002_ip = 88; continue _fun0002 }
 85:
            var6 = var7;
 88:
            var1['IconComponent'] = var6;
            var1['variant'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var4['Icon'] = var5;
    var5 = function ActionSheetRowGroup(arg1) {
        var1 = arg1;
        var7 = var1.children;
        var8 = var1.title;
        var9 = var1.hasIcons;
        var4 = _closure1_slot4;
        var3 = _closure1_slot3;
        var2 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 5;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var5['hasIcons'] = var9;
        var5['title'] = var8;
        var5['children'] = var7;
        var5 = var4.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4['Group'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Sheet/native/ActionSheetRow.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ActionSheetRow'] = var4;
    var2 = function ActionSheetSwitchRow(arg1) {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['ActionSheetSwitchRow'] = var2;
    return var1;
})();