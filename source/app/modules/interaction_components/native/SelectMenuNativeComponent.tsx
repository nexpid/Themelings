// app/modules/interaction_components/native/SelectMenuNativeComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var6;
        var1 = global;
        var9 = var1.Object;
        var7 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.requireNativeComponent;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 'DCDSelectActionComponentView';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var7 = 5;
        var7 = var6[var7];
        var4 = var8.bind(var1)(var7);
case 4:
        var _closure1_slot6 = var4;
        var4 = 7;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/interaction_components/native/SelectMenuNativeComponent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function SelectMenuNativeComponent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = _closure1_slot4;
                var3 = var7.useState;
                var6 = var3.bind(var7)();
                var4 = _closure1_slot3;
                var5 = undefined;
                var3 = 2;
                var4 = var4.bind(var5)(var6, var3);
                var3 = 0;
                var6 = var4[var3];
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot0 = var3;
                var4 = var7.useCallback;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = _closure2_slot0;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = new Array(0);
                var7 = var4.bind(var7)(var3, var1);
                var4 = _closure1_slot5;
                var3 = _closure1_slot6;
                var1 = {};
                var10 = arg1;
                var11 = var1;
                var8 = copyDataProperties(var11, var10);
                var8 = {};
                var9 = '100%';
                var8['width'] = var9;
                var8['height'] = var6;
                var6 = 'style';
                var1[var6] = var8;
                var6 = var4.bind(var5)(var3, var1);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isAndroid;
                var3 = var1.bind(var3)();
                var1 = var6;
                if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var4 = _closure1_slot5;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['onLayout'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 5:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();