// app/modules/launchpad/native/shared/renderChannelPressableWrapper.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var4 = var4.bind(var1)();
    var7 = var4.layout;
    var8 = var7.margin;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var7[1] = var8;
    var _closure1_slot2 = var7;
    var4 = var4.layout;
    var7 = var4.marginThread;
    var4 = new Array(2);
    var4[0] = var7;
    var7 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4[1] = var7;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/renderChannelPressableWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelPressableWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var1 = {};
 11:
            var5 = var1.isThread;
            if(!(var5 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var5 = false;
 23:
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            if(var5) { _fun0001_ip = 45; continue _fun0001 }
 39:
            var5 = _closure1_slot2;
            _fun0001_ip = 49; continue _fun0001;
 45:
            var5 = _closure1_slot3;
 49:
            var1['style'] = var5;
            var5 = arg1;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();