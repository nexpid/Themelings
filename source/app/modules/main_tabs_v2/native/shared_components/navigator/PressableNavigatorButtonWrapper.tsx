// app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_HEADER_HEIGHT;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 4;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['padding'] = var3;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
case 2:
            var2['height'] = var3;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot3;
case 4:
            var2['width'] = var3;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_4;
case 6:
            var2['paddingEnd'] = var3;
            var1['buttonWrapper'] = var2;
            var2 = {};
            var3 = -8;
            var2['marginLeft'] = var3;
            var1['buttonWrapperModal'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PressableNavigatorButtonWrapper(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var6 = var1.isModal;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = false;
case 8:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'PressableNavigatorButtonWrapper';
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot5;
            var7 = var2.bind(var4)(var3);
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {'collapsable': false, 'style': null, 'importantForAccessibility': 'yes'};
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var7.buttonWrapper;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var6 = var7.buttonWrapperModal;
case 12:
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();