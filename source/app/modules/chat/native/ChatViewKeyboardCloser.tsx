// app/modules/chat/native/ChatViewKeyboardCloser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatViewKeyboardCloser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatViewKeyboardCloser(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var _closure2_slot0 = var3;
            var5 = var1.children;
            var6 = var1.style;
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var7.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var9;
            var9 = _closure1_slot4;
            var3[1] = var9;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isAlertOrActionSheetOpen;
                var3 = _closure2_slot0;
                var2 = _closure1_slot3;
                var1 = _closure1_slot4;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var7 = var7.bind(var8)(var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var1['style'] = var6;
            var6 = 'auto';
            if(!var7) { _fun0001_ip = 112; continue _fun0001 }
 108:
            var6 = 'none';
 112:
            var1['pointerEvents'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();