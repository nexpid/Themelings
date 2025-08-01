// app/modules/chat/native/useChatWidth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/useChatWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChatWidth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 0;
            var3 = var8[var2];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var3 = var3.bind(var7)();
            var5 = var3.isChatLockedOpen;
            var3 = 1;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.bind(var7)();
            var4 = var3.width;
            var3 = _closure1_slot0;
            var1 = 2;
            var1 = var8[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.useDrawerWidth;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 97; continue _fun0001 }
 90:
            var1 = var4;
            if(!(var2 === var6)) { _fun0001_ip = 110; continue _fun0001 }
 97:
            var2 = var4;
            if(!var5) { _fun0001_ip = 107; continue _fun0001 }
 103:
            var2 = var4 - var3;
 107:
            var1 = var2;
 110:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getChatWidth(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 0;
            var1 = var8[var2];
            var6 = undefined;
            var5 = var4.bind(var6)(var1);
            var1 = var5.getChatLayout;
            var1 = var1.bind(var5)();
            var5 = var1.isChatLockedOpen;
            var1 = 1;
            var1 = var8[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.getAppContainerDimensions;
            var1 = var1.bind(var4)();
            var4 = var1.width;
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 83; continue _fun0002 }
 76:
            var1 = var4;
            if(!(var2 === var7)) { _fun0002_ip = 126; continue _fun0002 }
 83:
            var2 = var4;
            if(!var5) { _fun0002_ip = 123; continue _fun0002 }
 89:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.getDrawerWidth;
            var3 = var3.bind(var5)();
            var2 = var4 - var3;
 123:
            var1 = var2;
 126:
            return var1;
        }
    };
    var3['getChatWidth'] = var2;
    return var1;
})();