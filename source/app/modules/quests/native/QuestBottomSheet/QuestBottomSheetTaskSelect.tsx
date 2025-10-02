// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx
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
    var4 = var4.QuestTaskPlatform;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestBottomSheetTaskSelect(arg1) {
        var1 = arg1;
        var1 = var1.onTaskSelect;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot4;
        var13 = _closure1_slot0;
        var14 = _closure1_slot1;
        var1 = 3;
        var1 = var14[var1];
        var3 = undefined;
        var1 = var13.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {};
        var8 = _closure1_slot3;
        var6 = 4;
        var5 = var14[var6];
        var5 = var13.bind(var3)(var5);
        var7 = var5.TableRow;
        var5 = {};
        var11 = true;
        var5['arrow'] = var11;
        var10 = 5;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var12 = var10.ScreenIcon;
        var10 = {};
        var10 = var8.bind(var3)(var12, var10);
        var5['icon'] = var10;
        var10 = 6;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.QXc019;
        var12 = var15.bind(var16)(var12);
        var5['label'] = var12;
        var12 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                var4 = undefined;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = _closure1_slot2;
                var2 = var2.DESKTOP;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var5['onPress'] = var12;
        var7 = var8.bind(var3)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var14[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.TableRow;
        var6 = {};
        var6['arrow'] = var11;
        var11 = 7;
        var11 = var14[var11];
        var11 = var13.bind(var3)(var11);
        var12 = var11.GameControllerIcon;
        var11 = {};
        var11 = var8.bind(var3)(var12, var11);
        var6['icon'] = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.8lAfuL;
        var10 = var11.bind(var12)(var10);
        var6['label'] = var10;
        var9 = function onPress() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                var4 = undefined;
                var1 = undefined;
                if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var3 = _closure2_slot0;
                var2 = _closure1_slot2;
                var2 = var2.CONSOLE;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var6['onPress'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();