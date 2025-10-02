// app/modules/potions/MessageConfettiStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var13;
    var7 = function setMessageConfettiSendEmoji(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.batchUpdates;
        var1 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = arg1;
                var7 = var1.messageSendConfetti;
                var1 = {};
                var2 = {};
                var8 = var2;
                var3 = copyDataProperties(var8, var7);
                var4 = _closure2_slot1;
                var3 = {};
                var6 = _closure1_slot4;
                var6 = var6.EmojiSelected;
                var3['state'] = var6;
                var5 = _closure2_slot0;
                var3['emoji'] = var5;
                var2[var4] = var3;
                var1['messageSendConfetti'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var7;
    var6 = function getMessageConfettiSendEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot6;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.messageSendConfetti;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.emoji;
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function getHasAttachedMessageConfetti(arg1) {
        var2 = _closure1_slot6;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var2 = var1.messageSendConfetti;
        var1 = arg1;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot11 = var5;
    var4 = function setMessageConfettiReactionEmoji(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.batchUpdates;
        var1 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var1['messageReactionConfetti'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var4;
    var9 = global;
    var11 = var9.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var11 = 0;
    var8 = var13[var11];
    var1 = undefined;
    var8 = var12.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot3 = var8;
    var10 = {};
    var10['SelectingEmoji'] = var11;
    var8 = 'SelectingEmoji';
    var10[var11] = var8;
    var8 = 1;
    var10['EmojiSelected'] = var8;
    var11 = 'EmojiSelected';
    var10[var8] = var11;
    var _closure1_slot4 = var10;
    var11 = var9.Object;
    var10 = var11.freeze;
    var9 = {};
    var14 = {};
    var9['messageSendConfetti'] = var14;
    var9['messageReactionConfetti'] = var1;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot5 = var9;
    var8 = var13[var8];
    var10 = var12.bind(var1)(var8);
    var9 = var10.create;
    var8 = function() {
        var1 = _closure1_slot5;
        return var1;
    };
    var10 = var9.bind(var10)(var8);
    var _closure1_slot6 = var10;
    var9 = function showMessageConfettiBar(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 2;
        var4 = var5[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var4);
        var7 = var8.track;
        var4 = _closure1_slot3;
        var6 = var4.CONFETTI_POTION_ENTRYPOINT_CLICKED;
        var4 = {};
        var9 = arg2;
        var4['location'] = var9;
        var4 = var7.bind(var8)(var6, var4);
        var4 = _closure1_slot0;
        var3 = 3;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.messageSendConfetti;
                var1 = {};
                var2 = {};
                var7 = var2;
                var3 = copyDataProperties(var7, var6);
                var4 = _closure2_slot0;
                var3 = {};
                var5 = _closure1_slot4;
                var5 = var5.SelectingEmoji;
                var3['state'] = var5;
                var5 = undefined;
                var3['emoji'] = var5;
                var5 = false;
                var3['hasAutoPopped'] = var5;
                var2[var4] = var3;
                var1['messageSendConfetti'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var9;
    var8 = function hideMessageConfettiBar(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.messageSendConfetti;
                var2 = {};
                var4 = var2;
                var1 = copyDataProperties(var4, var3);
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                var1 = {};
                var1['messageSendConfetti'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var8;
    var11 = 4;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/potions/MessageConfettiStore.tsx';
    var11 = var12.bind(var13)(var11);
    var3['useMessageConfettiStore'] = var10;
    var3['showMessageConfettiBar'] = var9;
    var3['hideMessageConfettiBar'] = var8;
    var8 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot6;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.messageSendConfetti;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot7;
            var4 = undefined;
            var2 = arg2;
            var2 = var5.bind(var4)(var3, var2);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleMessageConfettiBar'] = var8;
    var8 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot6;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var3 = var1.messageSendConfetti;
            var5 = var3[var2];
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var5 = var1.messageSendConfetti;
            var5 = var5[var2];
            var5 = var5.state;
            var4 = _closure1_slot4;
            var4 = var4.SelectingEmoji;
            var3 = var5 === var4;
case 7:
            if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var1.messageSendConfetti;
            var2 = var1[var2];
            var1 = true;
            var2['hasAutoPopped'] = var1;
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var3['setHasAutoPopped'] = var8;
    var8 = function useShouldShowMessageConfettiBar(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.messageSendConfetti;
            var1 = _closure2_slot0;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useShouldShowMessageConfettiBar'] = var8;
    var3['setMessageConfettiSendEmoji'] = var7;
    var7 = function useMessageConfettiSendEmoji(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var2 = var1.messageSendConfetti;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 5; continue _fun0004 }
case 11:
                var1 = var2.emoji;
case 5:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useMessageConfettiSendEmoji'] = var7;
    var3['getMessageConfettiSendEmoji'] = var6;
    var3['getHasAttachedMessageConfetti'] = var5;
    var3['setMessageConfettiReactionEmoji'] = var4;
    var4 = function clearMessageConfettiReactionEmoji() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.batchUpdates;
        var1 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = function() {
                var1 = {};
                var2 = undefined;
                var1['messageReactionConfetti'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['clearMessageConfettiReactionEmoji'] = var4;
    var4 = function setMessageConfettiEmoji(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = arg3;
            if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var5 = _closure1_slot9;
            var4 = undefined;
            var2 = arg2;
            var2 = var5.bind(var4)(var3, var2);
            _fun0005_ip = 14; continue _fun0005;
case 12:
            var2 = _closure1_slot12;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 14:
            var1 = undefined;
            return var1;
        }
    };
    var3['setMessageConfettiEmoji'] = var4;
    var4 = function useMessageConfettiEmoji(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot1;
                if(var3) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var3 = var2.messageSendConfetti;
                var1 = _closure2_slot0;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                var1 = var3.emoji;
case 17:
                _fun0006_ip = 19; continue _fun0006;
case 15:
                var1 = var2.messageReactionConfetti;
case 19:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useMessageConfettiEmoji'] = var4;
    var4 = function useHasAutoPopped(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var2 = var1.messageSendConfetti;
                var1 = _closure2_slot0;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                var4 = undefined;
                if(var3) { _fun0007_ip = 18; continue _fun0007 }
case 20:
                var4 = var1.state;
case 18:
                var3 = _closure1_slot4;
                var3 = var3.SelectingEmoji;
                if(!(var4 !== var3)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                return var2;
case 21:
                var1 = var1.hasAutoPopped;
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useHasAutoPopped'] = var4;
    var2 = function getShouldOpenConfettiModalOnSubmit(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            if(var1) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var1 = _closure1_slot11;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot10;
            var4 = var2.bind(var3)(var4);
            if(!var1) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var3 = 0;
            var2 = arg3;
            var2 = var3 === var2;
            if(var2) { _fun0008_ip = 4; continue _fun0008 }
case 27:
            var3 = null;
            var2 = var3 == var4;
case 4:
            var1 = var2;
case 25:
            return var1;
case 23:
            var1 = false;
            return var1;
        }
    };
    var3['getShouldOpenConfettiModalOnSubmit'] = var2;
    return var1;
})();