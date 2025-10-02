// app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.MIN_HEADER_HEIGHT;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = 4;
    var12 = var6[var11];
    var11 = metroImportDefault;
    var11 = var11.bind(var1)(var12);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['padding'] = var11;
    var9['height'] = var10;
    var9['width'] = var10;
    var4['buttonWrapper'] = var9;
    var9 = {};
    var10 = -8;
    var9['marginLeft'] = var10;
    var4['buttonWrapperModal'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PressableNavigatorButtonWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var6 = var1.isModal;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var2 = _closure1_slot2;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var8 = false;
            var1['collapsable'] = var8;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.buttonWrapper;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var7.buttonWrapperModal;
case 6:
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();