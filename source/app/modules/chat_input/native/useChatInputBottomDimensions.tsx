// app/modules/chat_input/native/useChatInputBottomDimensions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getChatInputBottomDimensions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.getSystemKeyboardHeight;
            var5 = var1.bind(var2)();
            var3 = 0;
            if(!(var3 === var5)) { _fun0001_ip = 303; continue _fun0001 }
 44:
            var1 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 5;
            var9 = var2[var8];
            var10 = var6.bind(var7)(var9);
            var9 = var10.getKeyboardType;
            var10 = var9.bind(var10)();
            var9 = 6;
            var2 = var2[var9];
            var2 = var6.bind(var7)(var2);
            var2 = var2.KeyboardTypes;
            var6 = var2.SYSTEM;
            var2 = 0;
            if(!(var10 !== var6)) { _fun0001_ip = 202; continue _fun0001 }
 106:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 7;
            var6 = var12[var6];
            var10 = var11.bind(var7)(var6);
            var6 = var10.getCustomKeyboardHeight;
            var10 = var6.bind(var10)();
            var6 = 4;
            var6 = var12[var6];
            var11 = var11.bind(var7)(var6);
            var6 = var11.isIOS;
            var11 = var6.bind(var11)();
            var6 = 0;
            if(var11) { _fun0001_ip = 198; continue _fun0001 }
 163:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 8;
            var11 = var13[var11];
            var12 = var12.bind(var7)(var11);
            var11 = var12.getSafeAreaInsets;
            var11 = var11.bind(var12)();
            var6 = var11.bottom;
 198:
            var2 = var10 + var6;
 202:
            var1['keyboardHeight'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = var2[var8];
            var10 = var6.bind(var7)(var8);
            var8 = var10.getKeyboardType;
            var8 = var8.bind(var10)();
            var2 = var2[var9];
            var2 = var6.bind(var7)(var2);
            var2 = var2.KeyboardTypes;
            var6 = var2.SYSTEM;
            var2 = 0;
            if(!(var8 === var6)) { _fun0001_ip = 296; continue _fun0001 }
 261:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var9[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.getSafeAreaInsets;
            var6 = var6.bind(var8)();
            var2 = var6.bottom;
 296:
            var1['safeAreaBottom'] = var2;
            _fun0001_ip = 356; continue _fun0001;
 303:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 4;
            var4 = var8[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.isIOS;
            var6 = var4.bind(var6)();
            var4 = 0;
            if(!var6) { _fun0001_ip = 343; continue _fun0001 }
 340:
            var4 = var5;
 343:
            var2['keyboardHeight'] = var4;
            var2['safeAreaBottom'] = var3;
            var1 = var2;
 356:
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/useChatInputBottomDimensions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChatInputBottomDimensions() {
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = _closure1_slot5;
        var6 = undefined;
        var3 = var3.bind(var6)();
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3.bind(var6)(var4, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();