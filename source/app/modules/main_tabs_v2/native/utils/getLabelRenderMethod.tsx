// app/modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function TabLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.focused;
            var8 = var1.color;
            var9 = var1.position;
            var5 = var1.title;
            var2 = _closure1_slot3;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xxs/semibold', 'lineClamp': 1, 'color': null, 'style': null, 'maxFontSizeMultiplier': 2};
            var7 = 'interactive-normal';
            if(!var10) { _fun0001_ip = 95; continue _fun0001 }
 89:
            var7 = 'interactive-active';
 95:
            var1['color'] = var7;
            var7 = 'beside-icon';
            if(!(var7 !== var9)) { _fun0001_ip = 119; continue _fun0001 }
 111:
            var7 = var6.titleBelow;
            _fun0001_ip = 125; continue _fun0001;
 119:
            var7 = var6.titleBeside;
 125:
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['color'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = -6;
    var9['marginTop'] = var10;
    var4['titleBelow'] = var9;
    var9 = {};
    var10 = 28;
    var9['marginLeft'] = var10;
    var4['titleBeside'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTabLabelRenderMethod(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
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