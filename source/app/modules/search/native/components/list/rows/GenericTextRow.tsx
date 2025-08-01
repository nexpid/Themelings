// app/modules/search/native/components/list/rows/GenericTextRow.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'row';
    var10['flexDirection'] = var11;
    var4['title'] = var10;
    var10 = {};
    var11 = 10;
    var10['padding'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function GenericTextRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.text;
            var _closure2_slot0 = var15;
            var13 = var2.icon;
            var9 = var2.onPress;
            var _closure2_slot1 = var9;
            var7 = var2.trailing;
            var6 = var2.accessibilityActions;
            var5 = var2.onAccessibilityAction;
            var2 = _closure1_slot6;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var3 = var8.useCallback;
            var2 = _closure1_slot2;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 41; continue _fun0002 }
 7:
                        var4 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address=29);
 27:
                        return var2;
 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 38; continue _fun0002 }
 35:
                        return var3;
 38:
                        return var2;
 41:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var9;
            var1[1] = var15;
            var8 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot5;
            var9 = _closure1_slot4;
            var1 = {};
            var2 = var16.title;
            var1['style'] = var2;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var12 = 5;
            var12 = var10[var12];
            var12 = var2.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'lineClamp': 1, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var16 = var16.container;
            var12['style'] = var16;
            var12['children'] = var15;
            var12 = var3.bind(var4)(var14, var12);
            var1['children'] = var12;
            var9 = var3.bind(var4)(var9, var1);
            var1 = 6;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SearchListRow;
            var1 = {};
            var10 = null;
            var10 = var10 != var13;
            if(!var10) { _fun0001_ip = 242; continue _fun0001 }
 218:
            var12 = _closure1_slot5;
            var11 = {'size': 'sm', 'color': 'header-primary'};
            var10 = var12.bind(var4)(var13, var11);
 242:
            var1['icon'] = var10;
            var1['label'] = var9;
            var1['onPress'] = var8;
            var1['trailing'] = var7;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/GenericTextRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();