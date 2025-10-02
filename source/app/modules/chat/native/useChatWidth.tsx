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
case 0:
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
            if(!(var1 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4;
            if(!(var2 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = var4;
            if(!var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var4 - var3;
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getChatWidth(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!(var1 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var4;
            if(!(var2 === var7)) { _fun0002_ip = 9; continue _fun0002 }
case 7:
            var2 = var4;
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.getDrawerWidth;
            var3 = var3.bind(var5)();
            var2 = var4 - var3;
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['getChatWidth'] = var2;
    return var1;
})();