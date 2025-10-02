// app/components_native/chat/getMessageJumpData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/getMessageJumpData.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getMessageJumpData(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var14 = arg3;
            var1 = var11.messages;
            var2 = var1.last;
            var15 = var2.bind(var1)();
            var9 = var14.messages;
            var2 = var9.last;
            var6 = var2.bind(var9)();
            var3 = _closure1_slot6;
            var2 = var3.getCurrentUser;
            var8 = var2.bind(var3)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var16 = undefined;
            var2 = var3.bind(var16)(var2);
            var2 = var2.JumpTypes;
            var12 = var2.ANIMATED;
            var7 = var1.jumpSequenceId;
            var4 = var1.focusTargetId;
            var3 = var1.initialScrollSequenceId;
            var2 = var9.initialScrollSequenceId;
            var2 = var3 !== var2;
            var17 = var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var9.jumpSequenceId;
            var3 = var1.jumpSequenceId;
            var17 = var5 !== var3;
case 2:
            var5 = var2;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = var9.focusSequenceId;
            var3 = var1.focusSequenceId;
            var5 = var18 !== var3;
case 4:
            var18 = var1.jumpTargetId;
            var3 = null;
            if(!(var3 != var18)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var17) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var18 = var10.isAtBottom;
            if(var18) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = var10.hasPreviousMessages;
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var9 = var9.loadingMore;
            if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            if(!(var3 != var15)) { _fun0001_ip = 9; continue _fun0001 }
case 13:
            if(!(var3 != var8)) { _fun0001_ip = 9; continue _fun0001 }
case 14:
            var9 = var15.author;
            var10 = var9.id;
            var9 = var8.id;
            if(!(var10 !== var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var15.interaction;
            var18 = var3 == var10;
            var9 = undefined;
            if(var18) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var10.user;
            var9 = var10.id;
case 17:
            var8 = var8.id;
            if(!(var9 === var8)) { _fun0001_ip = 9; continue _fun0001 }
case 15:
            if(!(var3 != var6)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 7;
            var8 = var10[var8];
            var10 = var9.bind(var16)(var8);
            var9 = var10.compare;
            var8 = var6.id;
            var6 = var15.id;
            var8 = var9.bind(var10)(var8, var6);
            var6 = 0;
            if(!(var8 < var6)) { _fun0001_ip = 9; continue _fun0001 }
case 19:
            var10 = var15.id;
            var9 = null;
            var8 = var12;
            var6 = false;
            _fun0001_ip = 21; continue _fun0001;
case 9:
            var18 = var1.loadingMore;
            if(var18) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = var1.jumpedToPresent;
            if(!var18) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            if(!var17) { _fun0001_ip = 22; continue _fun0001 }
case 25:
            if(!(var3 != var15)) { _fun0001_ip = 22; continue _fun0001 }
case 26:
            var10 = var15.id;
            var6 = false;
            var9 = null;
            var8 = var12;
            _fun0001_ip = 21; continue _fun0001;
case 22:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 4;
            var13 = var17[var13];
            var15 = var15.bind(var16)(var13);
            var13 = var15.isAndroid;
            var13 = var13.bind(var15)();
            if(!var13) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = var14.androidKeyboardHeight;
            var14 = var11.androidKeyboardHeight;
            var13 = var15 < var14;
case 27:
            if(!var13) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var14 = var11.replyingMessageId;
            var13 = var3 != var14;
case 29:
            var6 = false;
            var10 = null;
            var9 = null;
            var8 = var12;
            if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 31:
            var10 = var11.replyingMessageId;
            var6 = true;
            var9 = null;
            var8 = var12;
            _fun0001_ip = 21; continue _fun0001;
case 8:
            var13 = var1.channelId;
            var12 = var1.jumpTargetId;
            var11 = var1.first;
            var11 = var11.bind(var1)();
            if(!(var13 === var12)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            if(!(var3 == var11)) { _fun0001_ip = 34; continue _fun0001 }
case 32:
            var12 = var1.jumpTargetId;
            _fun0001_ip = 35; continue _fun0001;
case 34:
            var12 = var11.id;
case 35:
            var8 = var1.jumpType;
            var6 = false;
            var10 = var12;
            var9 = var10;
case 21:
            var1 = {};
            var1['scrollToMessageId'] = var10;
            var1['jumpTargetId'] = var9;
            var1['jumpType'] = var8;
            var1['jumpSequenceId'] = var7;
            var1['minimizeScrolling'] = var6;
            var3 = null;
            if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var3 = var4;
case 36:
            var1['focusTargetId'] = var3;
            var1['shouldInitialScroll'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useMessageJumpAndroidKeyboardHeight() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var7 = undefined;
            var4 = var4.bind(var7)(var1);
            var1 = var4.isAndroid;
            var8 = var1.bind(var4)();
            var1 = 0;
            var4 = 0;
            if(!var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSystemKeyboardHeight;
            var4 = var8.bind(var9)();
case 38:
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot3;
            var4 = 2;
            var5 = var5.bind(var7)(var6, var4);
            var1 = var5[var1];
            var4 = 1;
            var4 = var5[var4];
            var _closure2_slot0 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                        var3 = _closure2_slot0;
                        var2 = arg1;
                        var2 = var2.keyboardHeight;
                        var2 = var3.bind(var1)(var2);
case 40:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['useMessageJumpAndroidKeyboardHeight'] = var2;
    return var1;
})();