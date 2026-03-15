// app/modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function TabLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.focused;
            var8 = var1.color;
            var9 = var1.position;
            var5 = var1.title;
            var2 = _closure1_slot4;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 4;
            var3 = var11[var3];
            var12 = var2.bind(var4)(var3);
            var7 = var12.useToken;
            var13 = _closure1_slot1;
            var3 = 3;
            var3 = var11[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.TAB_LABEL_TEXT_STYLE;
            var7 = var7.bind(var12)(var3);
            var3 = _closure1_slot3;
            var1 = 5;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var7;
            var7 = 1;
            var1['lineClamp'] = var7;
            var7 = 'tab-label-text-default';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'tab-label-text-focused';
case 2:
            var1['color'] = var7;
            var7 = 'beside-icon';
            if(!(var7 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.titleBelow;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = var6.titleBeside;
case 6:
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['color'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 2;
            var1['maxFontSizeMultiplier'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.modules;
        var3 = var3.mobile;
        var3 = var3.TAB_LABEL_MARGIN_TOP;
        var2['marginTop'] = var3;
        var1['titleBelow'] = var2;
        var2 = {};
        var3 = 28;
        var2['marginLeft'] = var3;
        var1['titleBeside'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTabLabelRenderMethod(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot3;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var1 = 'title';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var3['getTabLabelRenderMethod'] = var2;
    return var1;
})();