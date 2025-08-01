// app/modules/launchpad/native/shared/renderChannelWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function getStyles(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg2;
            var2 = new Array(3);
            var1 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
            var2[0] = var1;
            var4 = {};
            var1 = _closure1_slot4;
            var5 = var1.layout;
            var1 = arg1;
            if(var1) { _fun0001_ip = 101; continue _fun0001 }
 46:
            var1 = var5.margin;
            var7 = var1.marginVertical;
            var1 = 2;
            var1 = var1 * var7;
            var1 = var6 - var1;
            var4['minHeight'] = var1;
            var2[1] = var4;
            var1 = _closure1_slot4;
            var1 = var1.container;
            var1 = var1.padding;
            var2[2] = var1;
            var1 = var2;
            _fun0001_ip = 155; continue _fun0001;
 101:
            var5 = var5.marginThread;
            var7 = var5.marginVertical;
            var5 = 2;
            var5 = var5 * var7;
            var5 = var6 - var5;
            var4['minHeight'] = var5;
            var2[1] = var4;
            var3 = _closure1_slot4;
            var3 = var3.container;
            var3 = var3.paddingThread;
            var2[2] = var3;
            var1 = var2;
 155:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var7.bind(var1)(var4);
    var4 = var4.bind(var1)();
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/renderChannelWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelWrapper(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg2;
            var10 = var1.channel;
            var2 = var1.fontScale;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var7 = var1.bind(var4)(var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = null;
            var9 = var5 == var10;
            var8 = undefined;
            if(var9) { _fun0002_ip = 79; continue _fun0002 }
 69:
            var9 = var10.isThread;
            var8 = var9.bind(var10)();
 79:
            var5 = var5 != var8;
            if(!var5) { _fun0002_ip = 89; continue _fun0002 }
 86:
            var5 = var8;
 89:
            var5 = var6.bind(var4)(var5, var7);
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