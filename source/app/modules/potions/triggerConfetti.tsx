// app/modules/potions/triggerConfetti.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = function _isMainWindowFocused() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.default;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = 'active';
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = function _shouldConfettiTrigger(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var4 = var1.ConfettiPotionExperiment;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = 'TriggerConfetti';
            var2['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var2 = var1.canSeeConfetti;
            var1 = _closure1_slot4;
            var1 = var1.confettiMode;
            if(var1) { _fun0001_ip = 138; continue _fun0001 }
 83:
            var1 = arg2;
            if(var1) { _fun0001_ip = 138; continue _fun0001 }
 89:
            var1 = {};
            var1['shouldPlay'] = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.ConfettiTriggerFailureReason;
            var3 = var3.NotInConfettiMode;
            var1['failureReason'] = var3;
            _fun0001_ip = 396; continue _fun0001;
 138:
            if(var2) { _fun0001_ip = 190; continue _fun0001 }
 141:
            var2 = {};
            var2['shouldPlay'] = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.ConfettiTriggerFailureReason;
            var3 = var3.NotInExperiment;
            var2['failureReason'] = var3;
            _fun0001_ip = 393; continue _fun0001;
 190:
            var3 = _closure1_slot3;
            var3 = var3.useReducedMotion;
            if(var3) { _fun0001_ip = 343; continue _fun0001 }
 206:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var8 = var4.bind(var7)(var3);
            var4 = var8.getFirstConfettiPotion;
            var3 = arg1;
            var4 = var4.bind(var8)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 294; continue _fun0001 }
 246:
            var3 = {};
            var4 = true;
            var3['shouldPlay'] = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.ConfettiTriggerFailureReason;
            var4 = var4.None;
            var3['failureReason'] = var4;
            _fun0001_ip = 341; continue _fun0001;
 294:
            var4 = {};
            var4['shouldPlay'] = var6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.ConfettiTriggerFailureReason;
            var8 = var8.NoValidPotion;
            var4['failureReason'] = var8;
            var3 = var4;
 341:
            _fun0001_ip = 390; continue _fun0001;
 343:
            var4 = {};
            var4['shouldPlay'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ConfettiTriggerFailureReason;
            var5 = var5.ReducedMotion;
            var4['failureReason'] = var5;
            var3 = var4;
 390:
            var2 = var3;
 393:
            var1 = var2;
 396:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function _shouldConfettiTriggerByEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var4 = var1.ConfettiPotionExperiment;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = 'TriggerConfetti';
            var2['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var2 = var1.canSeeConfetti;
            var1 = _closure1_slot4;
            var1 = var1.confettiMode;
            if(var1) { _fun0002_ip = 138; continue _fun0002 }
 83:
            var1 = arg1;
            if(var1) { _fun0002_ip = 138; continue _fun0002 }
 89:
            var1 = {};
            var1['shouldPlay'] = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.ConfettiTriggerFailureReason;
            var3 = var3.NotInConfettiMode;
            var1['failureReason'] = var3;
            _fun0002_ip = 303; continue _fun0002;
 138:
            var4 = {};
            if(var2) { _fun0002_ip = 190; continue _fun0002 }
 143:
            var4['shouldPlay'] = var6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.ConfettiTriggerFailureReason;
            var2 = var2.NotInExperiment;
            var4['failureReason'] = var2;
            var2 = var4;
            _fun0002_ip = 300; continue _fun0002;
 190:
            var3 = _closure1_slot3;
            var3 = var3.useReducedMotion;
            if(var3) { _fun0002_ip = 252; continue _fun0002 }
 203:
            var3 = true;
            var4['shouldPlay'] = var3;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.ConfettiTriggerFailureReason;
            var3 = var3.None;
            var4['failureReason'] = var3;
            var3 = var4;
            _fun0002_ip = 297; continue _fun0002;
 252:
            var4['shouldPlay'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ConfettiTriggerFailureReason;
            var5 = var5.ReducedMotion;
            var4['failureReason'] = var5;
            var3 = var4;
 297:
            var2 = var3;
 300:
            var1 = var2;
 303:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/potions/triggerConfetti.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var3 = arguments[1];
            var6 = arguments[2];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0003_ip = 31; continue _fun0003 }
 17:
            var3 = {'x': 0, 'y': 0, 'w': 0, 'h': 0};
 31:
            var _closure2_slot0 = var3;
            if(!(var6 === var1)) { _fun0003_ip = 41; continue _fun0003 }
 39:
            var6 = false;
 41:
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0003_ip = 291; continue _fun0003 }
 58:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getFirstConfettiPotion;
            var3 = var3.bind(var4)(var7);
            var5 = null;
            var8 = var5 == var3;
            var4 = undefined;
            if(var8) { _fun0003_ip = 126; continue _fun0003 }
 100:
            var9 = var3.emoji;
            var8 = var5 == var9;
            var4 = undefined;
            if(var8) { _fun0003_ip = 126; continue _fun0003 }
 115:
            var8 = 0;
            var8 = var9[var8];
            var4 = var8.id;
 126:
            var11 = var5 == var4;
            var4 = _closure1_slot7;
            var6 = var4.bind(var1)(var7, var6);
            var4 = var6.shouldPlay;
            var10 = var6.failureReason;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.track;
            var6 = _closure1_slot5;
            var7 = var6.CONFETTI_POTION_TRIGGERED;
            var6 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var12 = var14[var12];
            var12 = var13.bind(var1)(var12);
            var12 = var12.ConfettiTriggerEmojiType;
            if(var11) { _fun0003_ip = 226; continue _fun0003 }
 218:
            var11 = var12.UserCreated;
            _fun0003_ip = 232; continue _fun0003;
 226:
            var11 = var12.Unicode;
 232:
            var6['emoji_type'] = var11;
            var6['will_play'] = var4;
            var6['failure_reason'] = var10;
            var10 = arguments[3];
            var6['location'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            if(!var4) { _fun0003_ip = 267; continue _fun0003 }
 263:
            var4 = var5 != var3;
 267:
            if(!var4) { _fun0003_ip = 291; continue _fun0003 }
 270:
            var4 = var3.emoji;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'POTIONS_TRIGGER_MESSAGE_CONFETTI';
                var2['type'] = var5;
                var5 = arg1;
                var2['emoji'] = var5;
                var5 = _closure2_slot0;
                var2['boundingRect'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 291:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var5 = arguments[1];
            var4 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 29; continue _fun0004 }
 15:
            var5 = {'x': 0, 'y': 0, 'w': 0, 'h': 0};
 29:
            if(!(var4 === var1)) { _fun0004_ip = 35; continue _fun0004 }
 33:
            var4 = false;
 35:
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0004_ip = 247; continue _fun0004 }
 52:
            var7 = var6.id;
            var3 = null;
            var11 = var3 == var7;
            var3 = _closure1_slot8;
            var4 = var3.bind(var1)(var4);
            var3 = var4.shouldPlay;
            var10 = var4.failureReason;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.track;
            var4 = _closure1_slot5;
            var7 = var4.CONFETTI_POTION_TRIGGERED;
            var4 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var12 = var14[var12];
            var12 = var13.bind(var1)(var12);
            var12 = var12.ConfettiTriggerEmojiType;
            if(var11) { _fun0004_ip = 158; continue _fun0004 }
 150:
            var11 = var12.UserCreated;
            _fun0004_ip = 164; continue _fun0004;
 158:
            var11 = var12.Unicode;
 164:
            var4['emoji_type'] = var11;
            var4['will_play'] = var3;
            var4['failure_reason'] = var10;
            var10 = arguments[3];
            var4['location'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            if(!var3) { _fun0004_ip = 247; continue _fun0004 }
 195:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'POTIONS_TRIGGER_MESSAGE_CONFETTI';
            var2['type'] = var7;
            var2['emoji'] = var6;
            var2['boundingRect'] = var5;
            var2 = var3.bind(var4)(var2);
 247:
            return var1;
        }
    };
    var3['triggerConfettiByEmoji'] = var2;
    return var1;
})();