// app/modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function customKeyboardWillHide(arg1) {
        var1 = arg1;
        var5 = var1.viewHandle;
        var1 = _closure1_slot4;
        var4 = var1.DCDChatManager;
        var3 = var4.customKeyboardWillHide;
        var2 = 0.25;
        var1 = 7;
        var1 = var3.bind(var4)(var5, var2, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function withChatViewHandle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.current;
            var2 = null;
            var4 = var2 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 31; continue _fun0001 }
 21:
            var4 = var5.getChatRef;
            var3 = var4.bind(var5)();
 31:
            if(!(var2 != var3)) { _fun0001_ip = 64; continue _fun0001 }
 35:
            var4 = _closure1_slot5;
            var3 = var3.current;
            var3 = var4.bind(var1)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 64; continue _fun0001 }
 56:
            var2 = arg2;
            var2 = var2.bind(var1)(var3);
 64:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.NativeModules;
    var _closure1_slot4 = var9;
    var4 = var4.findNodeHandle;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function InlinePortalKeyboard(arg1) {
        var2 = arg1;
        var13 = var2.channelId;
        var8 = var2.messagesRef;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot3;
        var2 = var4.useId;
        var12 = var2.bind(var4)();
        var _closure2_slot1 = var12;
        var11 = _closure1_slot1;
        var15 = _closure1_slot2;
        var2 = 3;
        var3 = var15[var2];
        var14 = undefined;
        var3 = var11.bind(var14)(var3);
        var9 = var3.bind(var14)();
        var _closure2_slot2 = var9;
        var3 = 4;
        var3 = var15[var3];
        var3 = var11.bind(var14)(var3);
        var6 = var3.bind(var14)();
        var3 = 5;
        var3 = var15[var3];
        var10 = var11.bind(var14)(var3);
        var5 = {};
        var3 = false;
        var5['includeCustomKeyboard'] = var3;
        var5 = var10.bind(var14)(var5);
        var _closure2_slot3 = var5;
        var10 = _closure1_slot0;
        var2 = var15[var2];
        var16 = var10.bind(var14)(var2);
        var7 = var16.useKeyboardContextForType;
        var2 = 6;
        var2 = var15[var2];
        var2 = var10.bind(var14)(var2);
        var2 = var2.KeyboardTypes;
        var2 = var2.SYSTEM;
        var7 = var7.bind(var16)(var2);
        var _closure2_slot4 = var7;
        var2 = 7;
        var2 = var15[var2];
        var11 = var11.bind(var14)(var2);
        var2 = function() {
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 8;
                    var3 = var1[var4];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var6 = var3.PortalKeyboardUIStore;
                    var5 = var6.getField;
                    var3 = 'keyboard';
                    var5 = var5.bind(var6)(var3);
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0002_ip = 72; continue _fun0002 }
 55:
                    var6 = var5.handlerId;
                    var5 = _closure2_slot1;
                    var3 = var6 === var5;
 72:
                    if(!var3) { _fun0002_ip = 124; continue _fun0002 }
 75:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 9;
                    var5 = var2[var5];
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.dismissKeyboard;
                    var5 = var5.bind(var6)();
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closePortalKeyboard;
                    var2 = var2.bind(var3)();
 124:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var11.bind(var14)(var2);
        var2 = 8;
        var11 = var15[var2];
        var11 = var10.bind(var14)(var11);
        var17 = var11.PortalKeyboardUIStore;
        var16 = var17.useField;
        var11 = 'keyboard';
        var11 = var16.bind(var17)(var11);
        var _closure2_slot5 = var11;
        var2 = var15[var2];
        var2 = var10.bind(var14)(var2);
        var14 = var2.PortalKeyboardUIStore;
        var10 = var14.useField;
        var2 = 'state';
        var10 = var10.bind(var14)(var2);
        var _closure2_slot6 = var10;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var3);
        var _closure2_slot7 = var2;
        var3 = var4.useLayoutEffect;
        var2 = new Array(9);
        var2[0] = var13;
        var2[1] = var12;
        var2[2] = var11;
        var2[3] = var10;
        var2[4] = var9;
        var2[5] = var8;
        var2[6] = var7;
        var2[7] = var6;
        var2[8] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot7;
                var6 = var3.current;
                var3 = _closure2_slot5;
                var4 = null;
                if(!(var4 == var3)) { _fun0003_ip = 90; continue _fun0003 }
 24:
                var5 = _closure1_slot6;
                var7 = var5.systemPrefersCrossfades;
                var5 = _closure2_slot3;
                if(var5) { _fun0003_ip = 56; continue _fun0003 }
 44:
                var6 = !var6;
                if(!var6) { _fun0003_ip = 53; continue _fun0003 }
 50:
                var6 = !var7;
 53:
                var5 = var6;
 56:
                if(var5) { _fun0003_ip = 316; continue _fun0003 }
 62:
                var7 = _closure1_slot8;
                var6 = _closure2_slot0;
                var5 = undefined;
                var3 = function(arg1) {
                    var2 = _closure2_slot7;
                    var1 = false;
                    var2['current'] = var1;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var1 = arg1;
                    var2['viewHandle'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var7.bind(var5)(var6, var3);
                _fun0003_ip = 316; continue _fun0003;
 90:
                var3 = _closure2_slot5;
                var3 = var3.handlerId;
                var3 = var4 != var3;
                if(!var3) { _fun0003_ip = 125; continue _fun0003 }
 107:
                var5 = _closure2_slot5;
                var6 = var5.handlerId;
                var5 = _closure2_slot1;
                var3 = var6 !== var5;
 125:
                if(var3) { _fun0003_ip = 316; continue _fun0003 }
 131:
                var3 = _closure2_slot5;
                if(!(var4 != var3)) { _fun0003_ip = 207; continue _fun0003 }
 139:
                var5 = _closure2_slot6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 10;
                var4 = var6[var4];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var4 = var4.PortalKeyboardState;
                var4 = var4.REQUEST_OPEN;
                if(!(var5 === var4)) { _fun0003_ip = 207; continue _fun0003 }
 184:
                var5 = _closure1_slot8;
                var4 = _closure2_slot0;
                var3 = function(arg1) {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var3 = var6[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var3);
                    var7 = var8.handlePortalKeyboardOpen;
                    var4 = _closure2_slot1;
                    var4 = var7.bind(var8)(var4);
                    var4 = _closure2_slot7;
                    var3 = true;
                    var4['current'] = var3;
                    var3 = {};
                    var4 = arg1;
                    var3['viewHandle'] = var4;
                    var4 = 11;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getKeyboardActionSheetHeight;
                    var4 = var4.bind(var5)();
                    var4 = var4.minimum;
                    var3['height'] = var4;
                    var12 = var3.viewHandle;
                    var11 = var3.height;
                    var2 = _closure1_slot4;
                    var5 = var2.DCDChatManager;
                    var4 = var5.customKeyboardWillShow;
                    var10 = 0.25;
                    var9 = 7;
                    var13 = var5;
                    var2 = var13[var4](var12, var11, var10, var9, var8);
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                _fun0003_ip = 316; continue _fun0003;
 207:
                var6 = _closure2_slot2;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                if(!(var6 === var5)) { _fun0003_ip = 316; continue _fun0003 }
 252:
                var5 = _closure2_slot4;
                var5 = var5.keyboardWillOpen;
                if(var5) { _fun0003_ip = 316; continue _fun0003 }
 265:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.closePortalKeyboard;
                var5 = var5.bind(var6)();
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = function(arg1) {
                    var2 = _closure2_slot7;
                    var1 = false;
                    var2['current'] = var1;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var1 = arg1;
                    var2['viewHandle'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
 316:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();