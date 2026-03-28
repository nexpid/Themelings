// app/modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx
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
    var9 = {'paddingVertical': 12, 'paddingHorizontal': 16, 'alignItems': 'flex-start'};
    var4['headerContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuSubmenuActionSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onBack;
            var1 = _closure1_slot4;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = var6.headerContainer;
            var1['style'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 4;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.ActionSheetHeaderPressableText;
            var5 = {};
            var8 = 5;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["13/7kX"];
            var8 = var9.bind(var10)(var8);
            var5['label'] = var8;
            var8 = null;
            if(!(var8 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = function() {
                var1 = undefined;
                return var1;
            };
case 2:
            var5['onPress'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();