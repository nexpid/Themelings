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
 0:
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
            if(var2) { _fun0001_ip = 141; continue _fun0001 }
 125:
            var5 = var9.jumpSequenceId;
            var3 = var1.jumpSequenceId;
            var17 = var5 !== var3;
 141:
            var5 = var2;
            if(var5) { _fun0001_ip = 163; continue _fun0001 }
 147:
            var18 = var9.focusSequenceId;
            var3 = var1.focusSequenceId;
            var5 = var18 !== var3;
 163:
            var18 = var1.jumpTargetId;
            var3 = null;
            if(!(var3 != var18)) { _fun0001_ip = 181; continue _fun0001 }
 175:
            if(var17) { _fun0001_ip = 484; continue _fun0001 }
 181:
            var18 = var10.isAtBottom;
            if(var18) { _fun0001_ip = 354; continue _fun0001 }
 193:
            var10 = var10.hasPreviousMessages;
            if(!var10) { _fun0001_ip = 354; continue _fun0001 }
 205:
            var9 = var9.loadingMore;
            if(var9) { _fun0001_ip = 354; continue _fun0001 }
 217:
            if(!(var3 != var15)) { _fun0001_ip = 354; continue _fun0001 }
 224:
            if(!(var3 != var8)) { _fun0001_ip = 354; continue _fun0001 }
 231:
            var9 = var15.author;
            var10 = var9.id;
            var9 = var8.id;
            if(!(var10 !== var9)) { _fun0001_ip = 285; continue _fun0001 }
 251:
            var10 = var15.interaction;
            var18 = var3 == var10;
            var9 = undefined;
            if(var18) { _fun0001_ip = 276; continue _fun0001 }
 266:
            var10 = var10.user;
            var9 = var10.id;
 276:
            var8 = var8.id;
            if(!(var9 === var8)) { _fun0001_ip = 354; continue _fun0001 }
 285:
            if(!(var3 != var6)) { _fun0001_ip = 337; continue _fun0001 }
 289:
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
            if(!(var8 < var6)) { _fun0001_ip = 354; continue _fun0001 }
 337:
            var10 = var15.id;
            var9 = null;
            var8 = var12;
            var6 = false;
            _fun0001_ip = 540; continue _fun0001;
 354:
            var18 = var1.loadingMore;
            if(var18) { _fun0001_ip = 396; continue _fun0001 }
 363:
            var18 = var1.jumpedToPresent;
            if(!var18) { _fun0001_ip = 396; continue _fun0001 }
 372:
            if(!var17) { _fun0001_ip = 396; continue _fun0001 }
 375:
            if(!(var3 != var15)) { _fun0001_ip = 396; continue _fun0001 }
 379:
            var10 = var15.id;
            var6 = false;
            var9 = null;
            var8 = var12;
            _fun0001_ip = 540; continue _fun0001;
 396:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 4;
            var13 = var17[var13];
            var15 = var15.bind(var16)(var13);
            var13 = var15.isAndroid;
            var13 = var13.bind(var15)();
            if(!var13) { _fun0001_ip = 444; continue _fun0001 }
 428:
            var15 = var14.androidKeyboardHeight;
            var14 = var11.androidKeyboardHeight;
            var13 = var15 < var14;
 444:
            if(!var13) { _fun0001_ip = 457; continue _fun0001 }
 447:
            var14 = var11.replyingMessageId;
            var13 = var3 != var14;
 457:
            var6 = false;
            var10 = null;
            var9 = null;
            var8 = var12;
            if(!var13) { _fun0001_ip = 540; continue _fun0001 }
 469:
            var10 = var11.replyingMessageId;
            var6 = true;
            var9 = null;
            var8 = var12;
            _fun0001_ip = 540; continue _fun0001;
 484:
            var13 = var1.channelId;
            var12 = var1.jumpTargetId;
            var11 = var1.first;
            var11 = var11.bind(var1)();
            if(!(var13 === var12)) { _fun0001_ip = 513; continue _fun0001 }
 509:
            if(!(var3 == var11)) { _fun0001_ip = 521; continue _fun0001 }
 513:
            var12 = var1.jumpTargetId;
            _fun0001_ip = 526; continue _fun0001;
 521:
            var12 = var11.id;
 526:
            var8 = var1.jumpType;
            var6 = false;
            var10 = var12;
            var9 = var10;
 540:
            var1 = {};
            var1['scrollToMessageId'] = var10;
            var1['jumpTargetId'] = var9;
            var1['jumpType'] = var8;
            var1['jumpSequenceId'] = var7;
            var1['minimizeScrolling'] = var6;
            var3 = null;
            if(!var5) { _fun0001_ip = 575; continue _fun0001 }
 572:
            var3 = var4;
 575:
            var1['focusTargetId'] = var3;
            var1['shouldInitialScroll'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useMessageJumpAndroidKeyboardHeight() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!var8) { _fun0002_ip = 82; continue _fun0002 }
 52:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSystemKeyboardHeight;
            var4 = var8.bind(var9)();
 82:
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
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0003_ip = 58; continue _fun0003 }
 37:
                        var3 = _closure2_slot0;
                        var2 = arg1;
                        var2 = var2.keyboardHeight;
                        var2 = var3.bind(var1)(var2);
 58:
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