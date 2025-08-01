// app/modules/chat_input/native/ChatInputNativeCommands.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.findNodeHandle;
    var _closure1_slot3 = var7;
    var2 = var2.NativeModules;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function backspace(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 115; continue _fun0001 }
 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0001_ip = 78; continue _fun0001 }
 46:
            var2 = _closure1_slot4;
            var6 = var2.DCDChatInputManager;
            var5 = var6.backspace;
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3);
            var2 = var5.bind(var6)(var2);
            _fun0001_ip = 115; continue _fun0001;
 78:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Commands;
            var1 = var2.backspace;
            var1 = var1.bind(var2)(var3);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var2['backspace'] = var7;
    var7 = function blur(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 115; continue _fun0002 }
 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0002_ip = 78; continue _fun0002 }
 46:
            var2 = _closure1_slot4;
            var6 = var2.DCDChatInputManager;
            var5 = var6.blur;
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3);
            var2 = var5.bind(var6)(var2);
            _fun0002_ip = 115; continue _fun0002;
 78:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Commands;
            var1 = var2.blur;
            var1 = var1.bind(var2)(var3);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var2['blur'] = var7;
    var7 = function closeCustomKeyboard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 76; continue _fun0003 }
 9:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            if(var2) { _fun0003_ip = 80; continue _fun0003 }
 46:
            var2 = _closure1_slot4;
            var3 = var2.DCDChatInputManager;
            var2 = var3.closeCustomKeyboard;
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5);
            var1 = var2.bind(var3)(var1);
 76:
            var1 = undefined;
            return var1;
 80:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = 'closeCustomKeyboard is not supported/needed on Android';
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var2['closeCustomKeyboard'] = var7;
    var7 = function flushText(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 123; continue _fun0004 }
 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0004_ip = 82; continue _fun0004 }
 46:
            var2 = global;
            var6 = var2.Error;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var8 = 'flushText is not supported/needed on iOS';
            var9 = var5;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            throw var2;
 82:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.Commands;
            var2 = var3.flushText;
            var1 = arg2;
            var1 = var2.bind(var3)(var4, var1);
 123:
            var1 = undefined;
            return var1;
        }
    };
    var2['flushText'] = var7;
    var7 = function getText(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var9 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var8;
            var1 = null;
            if(!(var1 != var6)) { _fun0005_ip = 333; continue _fun0005 }
 28:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var7 = var7.bind(var2)(var4);
            var4 = var7.isAndroid;
            var4 = var4.bind(var7)();
            if(var4) { _fun0005_ip = 249; continue _fun0005 }
 68:
            var4 = _closure1_slot3;
            var10 = var4.bind(var2)(var6);
            if(!(var1 != var10)) { _fun0005_ip = 182; continue _fun0005 }
 81:
            var4 = _closure1_slot4;
            var12 = var4.DCDChatInputManager;
            var11 = var12.markTextInputChanged;
            var7 = _closure1_slot3;
            var7 = var7.bind(var2)(var6);
            var7 = var11.bind(var12)(var7);
            var7 = var4.DCDChatInputManager;
            var4 = var7.getText;
            var7 = var4.bind(var7)(var10);
            var4 = var7.then;
            var8 = var4.bind(var7)(var8);
            var7 = var8.catch;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 4;
            var4 = var11[var4];
            var4 = var10.bind(var2)(var4);
            var4 = var4.captureException;
            var4 = var7.bind(var8)(var4);
            _fun0005_ip = 331; continue _fun0005;
 182:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var8 = var7.bind(var2)(var4);
            var7 = var8.captureException;
            var4 = global;
            var11 = var4.Error;
            var4 = var11.prototype;
            var10 = Object.create(var4, {constructor: {value: var11}});
            var14 = 'inputRef is null';
            var15 = var10;
            var4 = new var15[var11](var14, var13);
            var4 = var4 instanceof Object ? var4 : var10;
            var4 = var7.bind(var8)(var4);
            _fun0005_ip = 331; continue _fun0005;
 249:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var8 = var4.bind(var2)(var5);
            var5 = var8.createNonce;
            var5 = var5.bind(var8)();
            var _closure2_slot2 = var5;
            var8 = var9.set;
            var3 = function(arg1) {
                var4 = _closure2_slot0;
                var3 = var4.delete;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var8.bind(var9)(var5, var3);
            var3 = 2;
            var3 = var7[var3];
            var3 = var4.bind(var2)(var3);
            var4 = var3.Commands;
            var3 = var4.flushText;
            var3 = var3.bind(var4)(var6, var5);
 331:
            return var2;
 333:
            return var1;
        }
    };
    var2['getText'] = var7;
    var7 = function focus(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 115; continue _fun0006 }
 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0006_ip = 78; continue _fun0006 }
 46:
            var2 = _closure1_slot4;
            var6 = var2.DCDChatInputManager;
            var5 = var6.focus;
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3);
            var2 = var5.bind(var6)(var2);
            _fun0006_ip = 115; continue _fun0006;
 78:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Commands;
            var1 = var2.focus;
            var1 = var1.bind(var2)(var3);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var2['focus'] = var7;
    var7 = function openCustomKeyboard(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 119; continue _fun0007 }
 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0007_ip = 82; continue _fun0007 }
 46:
            var2 = global;
            var6 = var2.Error;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var7 = 'openCustomKeyboard is not supported/needed on iOS';
            var8 = var5;
            var2 = new var8[var6](var7, var6);
            var2 = var2 instanceof Object ? var2 : var5;
            throw var2;
 82:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Commands;
            var1 = var2.openCustomKeyboard;
            var1 = var1.bind(var2)(var3);
 119:
            var1 = undefined;
            return var1;
        }
    };
    var2['openCustomKeyboard'] = var7;
    var7 = function openSystemKeyboard(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 115; continue _fun0008 }
 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0008_ip = 78; continue _fun0008 }
 46:
            var2 = _closure1_slot4;
            var6 = var2.DCDChatInputManager;
            var5 = var6.openSystemKeyboard;
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3);
            var2 = var5.bind(var6)(var2);
            _fun0008_ip = 115; continue _fun0008;
 78:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Commands;
            var1 = var2.openSystemKeyboard;
            var1 = var1.bind(var2)(var3);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var2['openSystemKeyboard'] = var7;
    var7 = function setText(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 120; continue _fun0009 }
 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var5 = undefined;
            var6 = var6.bind(var5)(var2);
            var2 = var6.isAndroid;
            var2 = var2.bind(var6)();
            if(var2) { _fun0009_ip = 82; continue _fun0009 }
 49:
            var2 = _closure1_slot4;
            var7 = var2.DCDChatInputManager;
            var6 = var7.setText;
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            var2 = var6.bind(var7)(var2, var3);
            _fun0009_ip = 120; continue _fun0009;
 82:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.Commands;
            var1 = var2.setText;
            var1 = var1.bind(var2)(var4, var3);
 120:
            var1 = undefined;
            return var1;
        }
    };
    var2['setText'] = var7;
    var7 = function setSelectedRange(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var1 = null;
            if(!(var1 != var5)) { _fun0010_ip = 125; continue _fun0010 }
 15:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var6 = undefined;
            var7 = var7.bind(var6)(var2);
            var2 = var7.isAndroid;
            var2 = var2.bind(var7)();
            if(var2) { _fun0010_ip = 86; continue _fun0010 }
 52:
            var2 = _closure1_slot4;
            var8 = var2.DCDChatInputManager;
            var7 = var8.setSelectedRange;
            var2 = _closure1_slot3;
            var2 = var2.bind(var6)(var5);
            var2 = var7.bind(var8)(var2, var4, var3);
            _fun0010_ip = 125; continue _fun0010;
 86:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var2 = var1.Commands;
            var1 = var2.setSelectedRange;
            var1 = var1.bind(var2)(var5, var4, var3);
 125:
            var1 = undefined;
            return var1;
        }
    };
    var2['setSelectedRange'] = var7;
    var7 = function updateTextBlocks(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var9 = arg2;
            var6 = arg3;
            var7 = null;
            if(!(var7 != var5)) { _fun0011_ip = 159; continue _fun0011 }
 18:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0011_ip = 89; continue _fun0011 }
 55:
            var3 = _closure1_slot4;
            var8 = var3.DCDChatInputManager;
            var4 = var8.updateTextBlocks;
            var3 = _closure1_slot3;
            var3 = var3.bind(var1)(var5);
            var3 = var4.bind(var8)(var3, var9, var6);
            _fun0011_ip = 159; continue _fun0011;
 89:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.Commands;
            var3 = var4.updateTextBlocks;
            var2 = global;
            var8 = var2.JSON;
            var2 = var8.stringify;
            var2 = var2.bind(var8)(var9);
            var7 = var7 != var6;
            var1 = undefined;
            if(!var7) { _fun0011_ip = 152; continue _fun0011 }
 149:
            var1 = var6;
 152:
            var1 = var3.bind(var4)(var5, var2, var1);
 159:
            var1 = undefined;
            return var1;
        }
    };
    var2['updateTextBlocks'] = var7;
    var4 = function replaceRange(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var10 = arg1;
            var2 = arg2;
            var9 = var2.location;
            var8 = var2.length;
            var7 = var2.text;
            var12 = var2.nodes;
            var1 = undefined;
            if(!(var12 === var1)) { _fun0012_ip = 37; continue _fun0012 }
 33:
            var12 = new Array(0);
 37:
            var6 = var2.keepCursorPosition;
            if(!(var6 === var1)) { _fun0012_ip = 49; continue _fun0012 }
 47:
            var6 = false;
 49:
            var5 = var2.editId;
            var2 = null;
            if(!(var2 != var10)) { _fun0012_ip = 227; continue _fun0012 }
 64:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 1;
            var3 = var11[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0012_ip = 151; continue _fun0012 }
 99:
            var3 = _closure1_slot4;
            var11 = var3.DCDChatInputManager;
            var4 = var11.replaceRange;
            var3 = _closure1_slot3;
            var19 = var3.bind(var1)(var10);
            var20 = var11;
            var18 = var9;
            var17 = var8;
            var16 = var7;
            var15 = var12;
            var14 = var6;
            var13 = var5;
            var3 = var20[var4](var19, var18, var17, var16, var15, var14, var13, var12);
            _fun0012_ip = 227; continue _fun0012;
 151:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.Commands;
            var3 = var4.replaceRange;
            var2 = global;
            var11 = var2.JSON;
            var2 = var11.stringify;
            var15 = var2.bind(var11)(var12);
            var20 = var4;
            var19 = var10;
            var18 = var9;
            var17 = var8;
            var16 = var7;
            var14 = var6;
            var13 = var5;
            var2 = var20[var3](var19, var18, var17, var16, var15, var14, var13, var12);
 227:
            return var1;
        }
    };
    var2['replaceRange'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInputNativeCommands.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();