// app/modules/checkpoint/native/components/CheckpointModalContent.tsx
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
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'paddingTop': 24, 'alignItems': 'center', 'flexGrow': 1};
    var4['contentContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/components/CheckpointModalContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CheckpointModalContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var9 = var1.allowFullscreen;
            var2 = _closure1_slot2;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var7 = var6.contentContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = 16;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 0;
case 2:
            var7['paddingHorizontal'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CheckpointModalContent'] = var2;
    return var1;
})();