// app/components_native/common/ItemSelectorActionSheet.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/ItemSelectorActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ItemSelectorActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.title;
            var11 = var1.body;
            var14 = var1.items;
            var _closure2_slot0 = var14;
            var2 = var1.selectedItem;
            var _closure2_slot1 = var2;
            var2 = var1.onItemSelect;
            var _closure2_slot2 = var2;
            var18 = var1.onClose;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var6.bind(var4)(var1);
            var2 = var3.useToken;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_PADDING;
            var17 = var2.bind(var3)(var1);
            var2 = var14.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var2.bind(var14)(var1);
            var3 = _closure1_slot3;
            var1 = 4;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var5['title'] = var13;
            var7 = null;
            var8 = var7 != var18;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = _closure1_slot3;
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 6;
            var8 = var19[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.ActionSheetCloseButton;
            var8 = {};
            var8['onPress'] = var18;
            var7 = var15.bind(var4)(var10, var8);
case 2:
            var5['trailing'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot4;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 7;
            var5 = var15[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var8 = {};
            var8['paddingHorizontal'] = var17;
            var5['contentContainerStyle'] = var8;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot3;
            var9 = 8;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRadioGroup;
            var9 = {};
            var15 = 0;
            var17 = var16 >= var15;
            var15 = -1;
            if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var16;
case 4:
            var9['value'] = var15;
            var9['accessibilityLabel'] = var13;
            var13 = false;
            var9['hasIcons'] = var13;
            var13 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3[var1];
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot2;
                    var2 = var1.value;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onChange'] = var13;
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var6 = arg1;
                var6 = var6.label;
                var1['label'] = var6;
                var1['value'] = var5;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();