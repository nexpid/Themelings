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
        var18 = var1.viewHandle;
        var17 = var1.height;
        var16 = var1.width;
        var15 = var1.x;
        var14 = var1.y;
        var11 = var1.resetOffset;
        var1 = _closure1_slot4;
        var4 = var1.DCDChatManager;
        var3 = var4.customKeyboardWillHide;
        var13 = 0.25;
        var12 = 7;
        var19 = var4;
        var1 = var19[var3](var18, var17, var16, var15, var14, var13, var12, var11, var10);
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
        var _closure2_slot3 = var6;
        var3 = 5;
        var3 = var15[var3];
        var10 = var11.bind(var14)(var3);
        var5 = {};
        var3 = false;
        var5['includeCustomKeyboard'] = var3;
        var5 = var10.bind(var14)(var5);
        var _closure2_slot4 = var5;
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
        var _closure2_slot5 = var7;
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
        var _closure2_slot6 = var11;
        var2 = var15[var2];
        var2 = var10.bind(var14)(var2);
        var14 = var2.PortalKeyboardUIStore;
        var10 = var14.useField;
        var2 = 'state';
        var10 = var10.bind(var14)(var2);
        var _closure2_slot7 = var10;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var3);
        var _closure2_slot8 = var2;
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
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.getWindowDimensions;
                var3 = var3.bind(var5)();
                var _closure3_slot0 = var3;
                var5 = _closure2_slot8;
                var7 = var5.current;
                var5 = _closure2_slot6;
                var6 = null;
                if(!(var6 == var5)) { _fun0003_ip = 124; continue _fun0003 }
 63:
                var5 = _closure1_slot6;
                var8 = var5.systemPrefersCrossfades;
                var5 = _closure2_slot4;
                if(var5) { _fun0003_ip = 92; continue _fun0003 }
 80:
                var7 = !var7;
                if(!var7) { _fun0003_ip = 89; continue _fun0003 }
 86:
                var7 = !var8;
 89:
                var5 = var7;
 92:
                if(var5) { _fun0003_ip = 340; continue _fun0003 }
 98:
                var8 = _closure1_slot8;
                var7 = _closure2_slot0;
                var5 = function(arg1) {
                    var2 = _closure2_slot8;
                    var1 = false;
                    var2['current'] = var1;
                    var3 = _closure1_slot7;
                    var2 = {'viewHandle': null, 'height': 0, 'width': null, 'x': 0, 'y': null, 'resetOffset': true};
                    var1 = arg1;
                    var2['viewHandle'] = var1;
                    var1 = _closure3_slot0;
                    var4 = var1.width;
                    var2['width'] = var4;
                    var1 = var1.height;
                    var2['y'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var8.bind(var1)(var7, var5);
                _fun0003_ip = 340; continue _fun0003;
 124:
                var5 = _closure2_slot6;
                var5 = var5.handlerId;
                var5 = var6 != var5;
                if(!var5) { _fun0003_ip = 159; continue _fun0003 }
 141:
                var7 = _closure2_slot6;
                var8 = var7.handlerId;
                var7 = _closure2_slot1;
                var5 = var8 !== var7;
 159:
                if(var5) { _fun0003_ip = 340; continue _fun0003 }
 165:
                var5 = _closure2_slot6;
                if(!(var6 != var5)) { _fun0003_ip = 236; continue _fun0003 }
 173:
                var6 = _closure2_slot7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 11;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.PortalKeyboardState;
                var5 = var5.REQUEST_OPEN;
                if(!(var6 === var5)) { _fun0003_ip = 236; continue _fun0003 }
 213:
                var7 = _closure1_slot8;
                var6 = _closure2_slot0;
                var5 = function(arg1) {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var3 = var5[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.handlePortalKeyboardOpen;
                    var6 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6);
                    var6 = _closure2_slot8;
                    var3 = true;
                    var6['current'] = var3;
                    var3 = 12;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getKeyboardActionSheetHeight;
                    var3 = var3.bind(var4)();
                    var5 = var3.minimum;
                    var3 = {};
                    var4 = arg1;
                    var3['viewHandle'] = var4;
                    var3['height'] = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.width;
                    var3['width'] = var6;
                    var6 = 0;
                    var3['x'] = var6;
                    var4 = var4.height;
                    var4 = var4 - var5;
                    var3['y'] = var4;
                    var17 = var3.viewHandle;
                    var16 = var3.height;
                    var15 = var3.width;
                    var14 = var3.x;
                    var13 = var3.y;
                    var2 = _closure1_slot4;
                    var5 = var2.DCDChatManager;
                    var4 = var5.customKeyboardWillShow;
                    var12 = 0.25;
                    var11 = 7;
                    var18 = var5;
                    var2 = var18[var4](var17, var16, var15, var14, var13, var12, var11, var10);
                    return var1;
                };
                var5 = var7.bind(var1)(var6, var5);
                _fun0003_ip = 340; continue _fun0003;
 236:
                var6 = _closure2_slot2;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 6;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                if(!(var6 === var5)) { _fun0003_ip = 340; continue _fun0003 }
 276:
                var5 = _closure2_slot5;
                var5 = var5.keyboardWillOpen;
                if(var5) { _fun0003_ip = 340; continue _fun0003 }
 289:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.closePortalKeyboard;
                var5 = var5.bind(var6)();
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var2 = function(arg1) {
                    var3 = _closure2_slot8;
                    var2 = false;
                    var3['current'] = var2;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var4 = arg1;
                    var2['viewHandle'] = var4;
                    var5 = _closure2_slot3;
                    var2['height'] = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.width;
                    var2['width'] = var6;
                    var6 = 0;
                    var2['x'] = var6;
                    var4 = var4.height;
                    var4 = var4 - var5;
                    var2['y'] = var4;
                    var1 = _closure2_slot4;
                    var1 = !var1;
                    var2['resetOffset'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var1)(var3, var2);
 340:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();