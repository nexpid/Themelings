// app/modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot2 = var8;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!var2) { _fun0001_ip = 206; continue _fun0001 }
 43:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var1 = null;
            if(var2) { _fun0001_ip = 206; continue _fun0001 }
 80:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {'nativeID': 'chat-input-accessibility-divider', 'accessible': true, 'accessibilityLabel': null, 'accessibilityRole': 'header'};
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 5;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.uKZtCw;
            var7 = var8.bind(var9)(var7);
            var2['accessibilityLabel'] = var7;
            var6 = _closure1_slot2;
            var7 = var6.absoluteFill;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = 1;
            var7['height'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 206:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ChatInputAccessibilityDivider'] = var2;
    return var1;
})();