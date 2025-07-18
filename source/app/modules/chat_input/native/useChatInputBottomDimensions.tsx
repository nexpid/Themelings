// app/modules/chat_input/native/useChatInputBottomDimensions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getChatInputBottomDimensions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var7 = undefined;
            var3 = var6.bind(var7)(var1);
            var2 = var3.getSystemKeyboardHeight;
            var1 = {};
            var8 = 4;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            var1['excludeSafeAreaInsets'] = var5;
            var5 = var2.bind(var3)(var1);
            var3 = 0;
            if(!(var3 === var5)) { _fun0001_ip = 330; continue _fun0001 }
 74:
            var1 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 5;
            var10 = var2[var9];
            var11 = var6.bind(var7)(var10);
            var10 = var11.getKeyboardType;
            var11 = var10.bind(var11)();
            var10 = 6;
            var2 = var2[var10];
            var2 = var6.bind(var7)(var2);
            var2 = var2.KeyboardTypes;
            var6 = var2.SYSTEM;
            var2 = 0;
            if(!(var11 !== var6)) { _fun0001_ip = 229; continue _fun0001 }
 136:
            var12 = _closure1_slot0;
            var6 = _closure1_slot1;
            var11 = 7;
            var11 = var6[var11];
            var13 = var12.bind(var7)(var11);
            var11 = var13.getCustomKeyboardHeight;
            var11 = var11.bind(var13)();
            var6 = var6[var8];
            var12 = var12.bind(var7)(var6);
            var6 = var12.isIOS;
            var12 = var6.bind(var12)();
            var6 = 0;
            if(var12) { _fun0001_ip = 225; continue _fun0001 }
 190:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var12 = 8;
            var12 = var14[var12];
            var13 = var13.bind(var7)(var12);
            var12 = var13.getSafeAreaInsets;
            var12 = var12.bind(var13)();
            var6 = var12.bottom;
 225:
            var2 = var11 + var6;
 229:
            var1['keyboardHeight'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = var2[var9];
            var11 = var6.bind(var7)(var9);
            var9 = var11.getKeyboardType;
            var9 = var9.bind(var11)();
            var2 = var2[var10];
            var2 = var6.bind(var7)(var2);
            var2 = var2.KeyboardTypes;
            var6 = var2.SYSTEM;
            var2 = 0;
            if(!(var9 === var6)) { _fun0001_ip = 323; continue _fun0001 }
 288:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 8;
            var6 = var10[var6];
            var9 = var9.bind(var7)(var6);
            var6 = var9.getSafeAreaInsets;
            var6 = var6.bind(var9)();
            var2 = var6.bottom;
 323:
            var1['safeAreaBottom'] = var2;
            _fun0001_ip = 380; continue _fun0001;
 330:
            var2 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var8];
            var6 = var6.bind(var7)(var4);
            var4 = var6.isIOS;
            var6 = var4.bind(var6)();
            var4 = 0;
            if(!var6) { _fun0001_ip = 367; continue _fun0001 }
 364:
            var4 = var5;
 367:
            var2['keyboardHeight'] = var4;
            var2['safeAreaBottom'] = var3;
            var1 = var2;
 380:
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
    var4 = native4;
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