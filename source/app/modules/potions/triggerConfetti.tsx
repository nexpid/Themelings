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
case 0:
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
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = arg2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
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
            _fun0001_ip = 5; continue _fun0001;
case 2:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot3;
            var3 = var3.useReducedMotion;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var8 = var4.bind(var7)(var3);
            var4 = var8.getFirstConfettiPotion;
            var3 = arg1;
            var4 = var4.bind(var8)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
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
            _fun0001_ip = 13; continue _fun0001;
case 11:
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
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 9:
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
case 14:
            var2 = var3;
case 8:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function _shouldConfettiTriggerByEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = arg1;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 4:
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
            _fun0002_ip = 15; continue _fun0002;
case 2:
            var4 = {};
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 16:
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
            _fun0002_ip = 17; continue _fun0002;
case 6:
            var3 = _closure1_slot3;
            var3 = var3.useReducedMotion;
            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
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
            _fun0002_ip = 20; continue _fun0002;
case 18:
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
case 20:
            var2 = var3;
case 17:
            var1 = var2;
case 15:
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
case 0:
            var7 = arg1;
            var3 = arguments[1];
            var6 = arguments[2];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var3 = {'x': 0, 'y': 0, 'w': 0, 'h': 0};
case 21:
            var _closure2_slot0 = var3;
            if(!(var6 === var1)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var6 = false;
case 23:
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
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
            if(var8) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = var3.emoji;
            var8 = var5 == var9;
            var4 = undefined;
            if(var8) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var8 = 0;
            var8 = var9[var8];
            var4 = var8.id;
case 27:
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
            if(var11) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var11 = var12.UserCreated;
            _fun0003_ip = 32; continue _fun0003;
case 30:
            var11 = var12.Unicode;
case 32:
            var6['emoji_type'] = var11;
            var6['will_play'] = var4;
            var6['failure_reason'] = var10;
            var10 = arguments[3];
            var6['location'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            if(!var4) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var4 = var5 != var3;
case 33:
            if(!var4) { _fun0003_ip = 25; continue _fun0003 }
case 35:
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
case 25:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var4 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = {'x': 0, 'y': 0, 'w': 0, 'h': 0};
case 36:
            if(!(var4 === var1)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = false;
case 38:
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 40:
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
            if(var11) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var11 = var12.UserCreated;
            _fun0004_ip = 43; continue _fun0004;
case 41:
            var11 = var12.Unicode;
case 43:
            var4['emoji_type'] = var11;
            var4['will_play'] = var3;
            var4['failure_reason'] = var10;
            var10 = arguments[3];
            var4['location'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 44:
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
case 12:
            return var1;
        }
    };
    var3['triggerConfettiByEmoji'] = var2;
    return var1;
})();