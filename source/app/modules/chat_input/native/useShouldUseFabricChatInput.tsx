// app/modules/chat_input/native/useShouldUseFabricChatInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function resolveShouldUseFabric(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot3;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.isIosFabric;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4;
case 6:
            var1 = var3;
case 4:
            var _closure1_slot3 = var1;
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var1 = _closure1_slot3;
case 8:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = 'modules/chat_input/native/useShouldUseFabricChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldUseFabricChatInput() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var5 = var4.bind(var2)(var1);
        var4 = var5.useConfig;
        var1 = {};
        var6 = 'chat_input';
        var1['location'] = var6;
        var1 = var4.bind(var5)(var1);
        var1 = var1.enabled;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useShouldUseFabricChatInput'] = var4;
    var2 = function shouldUseFabricChatInput() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isAndroid;
            var1 = var1.bind(var5)();
            var1 = !var1;
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 2;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.getConfig;
            var5 = {};
            var8 = 'chat_input';
            var5['location'] = var8;
            var5 = var6.bind(var7)(var5);
            var1 = var5.enabled;
case 11:
            var1 = var4.bind(var3)(var1);
            _fun0002_ip = 13; continue _fun0002;
case 9:
            var1 = _closure1_slot3;
case 13:
            return var1;
        }
    };
    var3['shouldUseFabricChatInput'] = var2;
    return var1;
})();