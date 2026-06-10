// app/modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['paddingVertical'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MultiSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.element;
            var3 = var1.onPress;
            var _closure2_slot0 = var3;
            var1 = var1.state;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot4;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.type;
            var3 = 'checkbox';
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var10 = var2.data;
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var9 = false;
            var6['hasIcons'] = var9;
            var9 = var10.map;
            var8 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var7 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = var7;
case 5:
                    var _closure3_slot0 = var4;
                    var8 = undefined;
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var9 = var3().value;
                    var7 = var1;
                    var7 = var7 === var5;
                    var8 = undefined;
                    var2 = var7;
                    if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var8 = var9;
                    var2 = var7;
case 7:
                    var _closure3_slot1 = var8;
                    var7 = undefined;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var7 = undefined;
                    var2 = var3;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var7 = var9;
                    var2 = var3;
case 10:
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1.return();
case 13:
                    var3 = _closure1_slot3;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 6;
                    var1 = var9[var1];
                    var1 = var2.bind(var5)(var1);
                    var2 = var1.TableCheckboxRow;
                    var1 = {};
                    var1['label'] = var8;
                    var1['subLabel'] = var7;
                    var6 = function onPress() {
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var6;
                    var6 = _closure2_slot1;
                    var6 = var4 in var6;
                    var1['checked'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();