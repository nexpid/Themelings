// app/modules/share/native/ShareScreenFooter.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/ShareScreenFooter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ShareScreenFooter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.text;
            var15 = var1.setText;
            var7 = var1.preview;
            var21 = var1.sendLabel;
            var20 = var1.canSend;
            var19 = var1.isSending;
            var10 = var1.onSend;
            var9 = var1.disabled;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var8 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 2;
            var1 = var22[var18];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useShareChatInputActions;
            var1 = var1.bind(var2)(var15);
            var17 = var1.textInputRef;
            var5 = var1.isInputFocused;
            var14 = var1.handleSelectionChange;
            var13 = var1.handleMessageFocus;
            var12 = var1.handleMessageBlur;
            var11 = var1.handlePressEmoji;
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var22[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['preview'] = var7;
            var7 = 4;
            var7 = var22[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Button;
            var7 = {'variant': 'primary', 'size': 'md'};
            var7['text'] = var21;
            var20 = !var20;
            if(var20) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var20 = var9;
case 4:
            var7['disabled'] = var20;
            var20 = undefined;
            if(var19) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var20 = var10;
case 6:
            var7['onPress'] = var20;
            var7['loading'] = var19;
            var7 = var3.bind(var4)(var8, var7);
            var1['sendButton'] = var7;
            var8 = _closure1_slot3;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['inputRef'] = var17;
            var6['text'] = var16;
            var6['onChange'] = var15;
            var6['onSelectionChange'] = var14;
            var6['onFocus'] = var13;
            var6['onBlur'] = var12;
            var6['onPressEmoji'] = var11;
            var6['onSend'] = var10;
            var6['disabled'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['chatInput'] = var6;
            var1['avoidKeyboard'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();