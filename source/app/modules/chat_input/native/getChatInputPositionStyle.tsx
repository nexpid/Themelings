// app/modules/chat_input/native/getChatInputPositionStyle.tsx
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
    var4 = {};
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.StyleSheet;
    var10 = var7.absoluteFillObject;
    var11 = var4;
    var7 = copyDataProperties(var11, var10);
    var7 = 'top';
    var4[var7] = var1;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/getChatInputPositionStyle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChatInputPositionStyle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var4 = false;
            var2['isCreatingThread'] = var4;
            var3 = var2;
case 2:
            var2 = var3.isCreatingThread;
            var5 = var3.isFloatingRefresh;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = true;
            var2 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = _closure1_slot2;
case 8:
            return var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();