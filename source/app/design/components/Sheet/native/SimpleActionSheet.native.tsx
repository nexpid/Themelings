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
            var16 = var1.header;
            var11 = var1.options;
            var4 = _closure1_slot3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var12 = null;
            var7 = var12 != var16;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot2;
            var8 = _closure1_slot0;
            var13 = _closure1_slot1;
            var5 = 3;
            var5 = var13[var5];
            var5 = var8.bind(var3)(var5);
            var8 = var5.BottomSheetTitleHeader;
            var5 = {};
            var13 = var16.icon;
            var5['leading'] = var13;
            var13 = var16.title;
            var5['title'] = var13;
            var13 = var16.subtitle;
            var5['subtitle'] = var13;
            var13 = var16.onClose;
            var13 = var12 != var13;
            var12 = null;
            if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = _closure1_slot2;
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 4;
            var13 = var17[var13];
            var13 = var14.bind(var3)(var13);
            var14 = var13.ActionSheetCloseButton;
            var13 = {};
            var16 = var16.onClose;
            var13['onPress'] = var16;
            var12 = var15.bind(var3)(var14, var13);
case 4:
            var5['trailing'] = var12;
            var7 = var10.bind(var3)(var8, var5);
case 2:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 5;
            var6 = var10[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ActionSheetRow;
            var7 = var6.Group;
            var6 = {};
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.label;
                    var12 = var2.icon;
                    var11 = var2.IconComponent;
                    var8 = var2.isDestructive;
                    var2 = var2.onPress;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot2;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var7 = 5;
                    var2 = var13[var7];
                    var4 = undefined;
                    var2 = var9.bind(var4)(var2);
                    var3 = var2.ActionSheetRow;
                    var2 = {};
                    var10 = _closure1_slot2;
                    var7 = var13[var7];
                    var7 = var9.bind(var4)(var7);
                    var7 = var7.ActionSheetRow;
                    var9 = var7.Icon;
                    var7 = {};
                    var7['source'] = var12;
                    var7['IconComponent'] = var11;
                    var7 = var10.bind(var4)(var9, var7);
                    var2['icon'] = var7;
                    var7 = 'default';
                    if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = 'danger';
case 6:
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