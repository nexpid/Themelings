// app/design/components/Sheet/native/SimpleActionSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var2 = function SimpleActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.hideActionSheet;
            var _closure2_slot0 = var2;
            var17 = var1.header;
            var11 = var1.options;
            var10 = var1.hasIcons;
            var4 = _closure1_slot3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var13 = null;
            var7 = var13 != var17;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot2;
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 3;
            var5 = var14[var5];
            var5 = var8.bind(var3)(var5);
            var8 = var5.BottomSheetTitleHeader;
            var5 = {};
            var14 = var17.icon;
            var5['leading'] = var14;
            var14 = var17.title;
            var5['title'] = var14;
            var14 = var17.subtitle;
            var5['subtitle'] = var14;
            var14 = var17.onClose;
            var14 = var13 != var14;
            var13 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = _closure1_slot2;
            var15 = _closure1_slot0;
            var18 = _closure1_slot1;
            var14 = 4;
            var14 = var18[var14];
            var14 = var15.bind(var3)(var14);
            var15 = var14.ActionSheetCloseButton;
            var14 = {};
            var17 = var17.onClose;
            var14['onPress'] = var17;
            var13 = var16.bind(var3)(var15, var14);
case 4:
            var5['trailing'] = var13;
            var7 = var12.bind(var3)(var8, var5);
case 2:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 5;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ActionSheetRow;
            var7 = var6.Group;
            var6 = {};
            var6['hasIcons'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.label;
                    var10 = var2.icon;
                    var9 = var2.IconComponent;
                    var8 = var2.isDestructive;
                    var2 = var2.onPress;
                    var _closure3_slot0 = var2;
                    var2 = null;
                    if(!(var2 == var10)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var2 != var9;
                    var7 = undefined;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.ActionSheetRow;
                    var3 = var2.Icon;
                    var2 = {};
                    var2['source'] = var10;
                    var2['IconComponent'] = var9;
                    var7 = var5.bind(var4)(var3, var2);
case 8:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ActionSheetRow;
                    var2 = {};
                    var2['icon'] = var7;
                    var7 = 'default';
                    if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var7 = 'danger';
case 9:
                    var2['variant'] = var7;
                    var2['label'] = var6;
                    var1 = function onPress() {
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2['onPress'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var3)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot2 = var8;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/SimpleActionSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['SimpleActionSheet'] = var2;
    return var1;
})();