// app/modules/clips/ClipsDecisionEngineConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot4;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot4;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var6 = function createDefaultConfig() {
        var1 = {'baseThreshold': 0.5, 'ceiling': 1, 'clipLengthSeconds': 60, 'timelineLengthSeconds': 300, 'signalFatigueMultiplier': 0.7, 'fatigueDecaySeconds': 120, 'minTimeBetweenAutoClips': 15, 'signals': null, 'useExponentialDecay': false, 'debugMode': false};
        var9 = 1;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = var5[var9];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.MANUAL;
        var6 = true;
        var3 = {'importance': 1, 'decay': 1, 'enabled': true, 'bypassFatigue': true};
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.DISTRIBUTED;
        var3 = {'importance': 0.6, 'decay': 0.3, 'enabled': true};
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.PHRASE;
        var3 = {};
        var3['enabled'] = var6;
        var11 = {'patterns': null, 'importance': 1, 'decay': 1, 'enabled': true, 'bypassFatigue': true, 'isExplicit': true};
        var10 = ['alexa', 'clip', 'clip it', 'clip that', 'klip', 'klip it', 'klip that', 'flip', 'flip that'];
        var11['patterns'] = var10;
        var10 = new Array(3);
        var10[0] = var11;
        var11 = {'patterns': null, 'importance': 0.4, 'decay': 0.5, 'enabled': true};
        var12 = ['holy shit', 'holy fuck', 'oh my god', 'omg', 'what', 'no way', 'are you kidding'];
        var11['patterns'] = var12;
        var13 = {'targetSignals': null, 'multiplier': 1.3, 'timeWindowSeconds': 8};
        var12 = var5[var9];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ClipSignalTypes;
        var14 = var12.YELLING;
        var12 = new Array(2);
        var12[0] = var14;
        var14 = var5[var9];
        var14 = var8.bind(var7)(var14);
        var14 = var14.ClipSignalTypes;
        var14 = var14.GAME_EVENT;
        var12[1] = var14;
        var13['targetSignals'] = var12;
        var12 = new Array(1);
        var12[0] = var13;
        var11['amplifiers'] = var12;
        var10[1] = var11;
        var11 = {'patterns': null, 'importance': 0.3, 'decay': 0.6, 'enabled': true};
        var12 = ['fuck', 'shit', 'damn', 'wow'];
        var11['patterns'] = var12;
        var10[2] = var11;
        var3['phrases'] = var10;
        var10 = {'importance': 0.15, 'decay': 0.7};
        var3['defaultPhrase'] = var10;
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.YELLING;
        var3 = {'importance': 0.18, 'decay': 0.6, 'enabled': true, 'penalty': 0.2};
        var11 = {'targetSignals': null, 'multiplier': 1.4, 'timeWindowSeconds': 5};
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.ClipSignalTypes;
        var12 = var10.GAME_EVENT;
        var10 = new Array(1);
        var10[0] = var12;
        var11['targetSignals'] = var10;
        var10 = new Array(1);
        var10[0] = var11;
        var3['amplifiers'] = var10;
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.GAME_EVENT;
        var3 = {};
        var3['enabled'] = var6;
        var6 = {};
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.KILL;
        var10 = {'importance': 0.1, 'decay': 0.4};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.MULTIKILL;
        var10 = {'importance': 0.2, 'decay': 0.3};
        var13 = {'targetSignals': null, 'multiplier': 1.5, 'timeWindowSeconds': 30};
        var12 = var5[var9];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ClipSignalTypes;
        var14 = var12.YELLING;
        var12 = new Array(2);
        var12[0] = var14;
        var14 = var5[var9];
        var14 = var8.bind(var7)(var14);
        var14 = var14.ClipSignalTypes;
        var14 = var14.PHRASE;
        var12[1] = var14;
        var13['targetSignals'] = var12;
        var12 = new Array(1);
        var12[0] = var13;
        var10['amplifiers'] = var12;
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.DEATH;
        var10 = {'importance': 0.02, 'decay': 0.6};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.ASSIST;
        var10 = {'importance': 0.05, 'decay': 0.5};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.ITEM;
        var10 = {'importance': 0.01, 'decay': 0.5};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.VICTORY;
        var10 = {'importance': 0.15, 'decay': 0.2};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.DEFEAT;
        var10 = {'importance': 0.15, 'decay': 0.3};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.LEVEL_UP;
        var10 = {'importance': 0.1, 'decay': 0.4};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.TREASURE;
        var10 = {'importance': 0.1, 'decay': 0.4};
        var6[var11] = var10;
        var10 = var5[var9];
        var10 = var8.bind(var7)(var10);
        var10 = var10.GameEventType;
        var11 = var10.OBJECTIVE_KILL;
        var10 = {'importance': 0.1, 'decay': 0.3};
        var6[var11] = var10;
        var3['eventTypes'] = var6;
        var6 = {'importance': 0.3, 'decay': 0.5};
        var3['defaultEventType'] = var6;
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.SPEAKING;
        var3 = {'importance': 0, 'decay': 0.8, 'enabled': true};
        var2[var4] = var3;
        var3 = var5[var9];
        var3 = var8.bind(var7)(var3);
        var3 = var3.ClipSignalTypes;
        var4 = var3.SOUNDBOARD;
        var3 = {'importance': 0.1, 'decay': 0.8, 'enabled': true, 'penalty': 0.5};
        var6 = {'targetSignals': null, 'multiplier': 1.5, 'timeWindowSeconds': 10};
        var5 = var5[var9];
        var5 = var8.bind(var7)(var5);
        var5 = var5.ClipSignalTypes;
        var7 = var5.YELLING;
        var5 = new Array(1);
        var5[0] = var7;
        var6['targetSignals'] = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var3['amplifiers'] = var5;
        var2[var4] = var3;
        var1['signals'] = var2;
        return var1;
    };
    var _closure1_slot5 = var6;
    var4 = function validateConfig(arg1) {
        var7 = arg1;
        var15 = function clamp(arg1, arg2, arg3) {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var6 = var1.Math;
            var5 = var6.min;
            var2 = arg3;
            var1 = arg1;
            var2 = var5.bind(var6)(var2, var1);
            var1 = arg2;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot0 = var15;
        var1 = function validateAmplifiers(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 32:
                var3 = var4.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var10 = var1;
                    var9 = var2;
                    var3 = copyDataProperties(var10, var9);
                    var6 = _closure2_slot0;
                    var7 = var2.multiplier;
                    var5 = undefined;
                    var4 = 0.1;
                    var3 = 5;
                    var4 = var6.bind(var5)(var7, var4, var3);
                    var3 = 'multiplier';
                    var1[var3] = var4;
                    var4 = var2.timeWindowSeconds;
                    var3 = 0;
                    var2 = 60;
                    var3 = var6.bind(var5)(var4, var3, var2);
                    var2 = 'timeWindowSeconds';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 36:
                return var1;
            }
        };
        var _closure2_slot1 = var1;
        var6 = function validateSimpleSignal(arg1) {
            var2 = arg1;
            var1 = {};
            var12 = var1;
            var11 = var2;
            var3 = copyDataProperties(var12, var11);
            var8 = _closure2_slot0;
            var5 = var2.importance;
            var4 = undefined;
            var7 = 0;
            var6 = 1;
            var9 = var8.bind(var4)(var5, var7, var6);
            var5 = 'importance';
            var1[var5] = var9;
            var5 = var2.decay;
            var6 = var8.bind(var4)(var5, var7, var6);
            var5 = 'decay';
            var1[var5] = var6;
            var3 = _closure2_slot1;
            var2 = var2.amplifiers;
            var3 = var3.bind(var4)(var2);
            var2 = 'amplifiers';
            var1[var2] = var3;
            return var1;
        };
        var1 = {};
        var20 = var1;
        var19 = var7;
        var2 = copyDataProperties(var20, var19);
        var2 = var7.baseThreshold;
        var5 = undefined;
        var14 = 0;
        var9 = 1;
        var3 = var15.bind(var5)(var2, var14, var9);
        var2 = 'baseThreshold';
        var1[var2] = var3;
        var2 = var7.ceiling;
        var3 = var15.bind(var5)(var2, var14, var9);
        var2 = 'ceiling';
        var1[var2] = var3;
        var8 = var7.clipLengthSeconds;
        var3 = 30;
        var2 = 180;
        var3 = var15.bind(var5)(var8, var3, var2);
        var2 = 'clipLengthSeconds';
        var1[var2] = var3;
        var8 = var7.timelineLengthSeconds;
        var3 = 60;
        var2 = 600;
        var8 = var15.bind(var5)(var8, var3, var2);
        var2 = 'timelineLengthSeconds';
        var1[var2] = var8;
        var2 = var7.signalFatigueMultiplier;
        var8 = var15.bind(var5)(var2, var14, var9);
        var2 = 'signalFatigueMultiplier';
        var1[var2] = var8;
        var8 = var7.fatigueDecaySeconds;
        var2 = 300;
        var8 = var15.bind(var5)(var8, var14, var2);
        var2 = 'fatigueDecaySeconds';
        var1[var2] = var8;
        var2 = var7.minTimeBetweenAutoClips;
        var3 = var15.bind(var5)(var2, var14, var3);
        var2 = 'minTimeBetweenAutoClips';
        var1[var2] = var3;
        var3 = {};
        var8 = _closure1_slot0;
        var2 = _closure1_slot1;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var11 = var10.MANUAL;
        var12 = var7.signals;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var10 = var10.MANUAL;
        var10 = var12[var10];
        var10 = var6.bind(var5)(var10);
        var3[var11] = var10;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var11 = var10.DISTRIBUTED;
        var12 = var7.signals;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var10 = var10.DISTRIBUTED;
        var10 = var12[var10];
        var10 = var6.bind(var5)(var10);
        var3[var11] = var10;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var11 = var10.PHRASE;
        var12 = var7.signals;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var10 = var10.PHRASE;
        var12 = var12[var10];
        var10 = {};
        var20 = var10;
        var19 = var12;
        var13 = copyDataProperties(var20, var19);
        var17 = var12.phrases;
        var16 = var17.map;
        var13 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var12 = var1;
            var11 = var2;
            var3 = copyDataProperties(var12, var11);
            var8 = _closure2_slot0;
            var5 = var2.importance;
            var4 = undefined;
            var7 = 0;
            var6 = 1;
            var9 = var8.bind(var4)(var5, var7, var6);
            var5 = 'importance';
            var1[var5] = var9;
            var5 = var2.decay;
            var6 = var8.bind(var4)(var5, var7, var6);
            var5 = 'decay';
            var1[var5] = var6;
            var3 = _closure2_slot1;
            var2 = var2.amplifiers;
            var3 = var3.bind(var4)(var2);
            var2 = 'amplifiers';
            var1[var2] = var3;
            return var1;
        };
        var16 = var16.bind(var17)(var13);
        var13 = 'phrases';
        var10[var13] = var16;
        var13 = {};
        var19 = var12.defaultPhrase;
        var20 = var13;
        var16 = copyDataProperties(var20, var19);
        var16 = var12.defaultPhrase;
        var16 = var16.importance;
        var17 = var15.bind(var5)(var16, var14, var9);
        var16 = 'importance';
        var13[var16] = var17;
        var12 = var12.defaultPhrase;
        var12 = var12.decay;
        var14 = var15.bind(var5)(var12, var14, var9);
        var12 = 'decay';
        var13[var12] = var14;
        var12 = 'defaultPhrase';
        var10[var12] = var13;
        var3[var11] = var10;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var11 = var10.YELLING;
        var12 = var7.signals;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var10 = var10.YELLING;
        var10 = var12[var10];
        var10 = var6.bind(var5)(var10);
        var3[var11] = var10;
        var10 = var2[var9];
        var10 = var8.bind(var5)(var10);
        var10 = var10.ClipSignalTypes;
        var10 = var10.GAME_EVENT;
        var12 = var7.signals;
        var11 = var2[var9];
        var11 = var8.bind(var5)(var11);
        var11 = var11.ClipSignalTypes;
        var11 = var11.GAME_EVENT;
        var11 = var12[var11];
        var4 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var4 = function validateEventType(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var12 = var1;
                    var11 = var2;
                    var3 = copyDataProperties(var12, var11);
                    var8 = _closure2_slot0;
                    var5 = var2.importance;
                    var4 = undefined;
                    var7 = 0;
                    var6 = 1;
                    var9 = var8.bind(var4)(var5, var7, var6);
                    var5 = 'importance';
                    var1[var5] = var9;
                    var5 = var2.decay;
                    var6 = var8.bind(var4)(var5, var7, var6);
                    var5 = 'decay';
                    var1[var5] = var6;
                    var3 = _closure2_slot1;
                    var2 = var2.amplifiers;
                    var3 = var3.bind(var4)(var2);
                    var2 = 'amplifiers';
                    var1[var2] = var3;
                    return var1;
                };
                var6 = {};
                var1 = global;
                var5 = var1.Object;
                var3 = var5.entries;
                var1 = var2.eventTypes;
                var12 = var3.bind(var5)(var1);
                var1 = var12.length;
                var11 = 0;
                var1 = var11 < var1;
                var3 = undefined;
                var9 = 2;
                var8 = 1;
                var7 = null;
                var5 = 0;
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var13 = var12[var5];
                var1 = _closure1_slot2;
                var1 = var1.bind(var3)(var13, var9);
                var13 = var1[var11];
                var1 = var1[var8];
                if(!(var7 != var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var1 = var4.bind(var3)(var1);
                var6[var13] = var1;
case 39:
                var5 = var5 + 1;
                var1 = var12.length;
                if(var5 < var1) { _fun0005_ip = 38; continue _fun0005 }
case 37:
                var1 = {};
                var16 = var1;
                var15 = var2;
                var5 = copyDataProperties(var16, var15);
                var5 = 'eventTypes';
                var1[var5] = var6;
                var2 = var2.defaultEventType;
                var3 = var4.bind(var3)(var2);
                var2 = 'defaultEventType';
                var1[var2] = var3;
                return var1;
            }
        };
        var4 = var4.bind(var5)(var11);
        var3[var10] = var4;
        var4 = var2[var9];
        var4 = var8.bind(var5)(var4);
        var4 = var4.ClipSignalTypes;
        var10 = var4.SPEAKING;
        var11 = var7.signals;
        var4 = var2[var9];
        var4 = var8.bind(var5)(var4);
        var4 = var4.ClipSignalTypes;
        var4 = var4.SPEAKING;
        var4 = var11[var4];
        var4 = var6.bind(var5)(var4);
        var3[var10] = var4;
        var4 = var2[var9];
        var4 = var8.bind(var5)(var4);
        var4 = var4.ClipSignalTypes;
        var4 = var4.SOUNDBOARD;
        var7 = var7.signals;
        var2 = var2[var9];
        var2 = var8.bind(var5)(var2);
        var2 = var2.ClipSignalTypes;
        var2 = var2.SOUNDBOARD;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var3[var4] = var2;
        var2 = 'signals';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var7 = var9[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot2 = var5;
    var5 = {};
    var7 = function conservative() {
        var1 = {};
        var3 = _closure1_slot5;
        var2 = undefined;
        var4 = var3.bind(var2)();
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = 0.7;
        var2 = 'baseThreshold';
        var1[var2] = var3;
        var3 = 0.5;
        var2 = 'signalFatigueMultiplier';
        var1[var2] = var3;
        var3 = 30;
        var2 = 'minTimeBetweenAutoClips';
        var1[var2] = var3;
        return var1;
    };
    var5['conservative'] = var7;
    var7 = function aggressive() {
        var1 = {};
        var3 = _closure1_slot5;
        var2 = undefined;
        var4 = var3.bind(var2)();
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = 0.3;
        var2 = 'baseThreshold';
        var1[var2] = var3;
        var3 = 0.85;
        var2 = 'signalFatigueMultiplier';
        var1[var2] = var3;
        var3 = 10;
        var2 = 'minTimeBetweenAutoClips';
        var1[var2] = var3;
        return var1;
    };
    var5['aggressive'] = var7;
    var7 = function highlights() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot5;
            var7 = undefined;
            var1 = var1.bind(var7)();
            var5 = 0.8;
            var1['baseThreshold'] = var5;
            var4 = var1.signals;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.SPEAKING;
            var4 = var4[var3];
            var3 = false;
            var4['enabled'] = var3;
            var4 = var1.signals;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.YELLING;
            var4 = var4[var3];
            var3 = 0.4;
            var4['importance'] = var3;
            var4 = var1.signals;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.GAME_EVENT;
            var3 = var4[var3];
            var4 = var3.eventTypes;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.GameEventType;
            var3 = var3.MULTIKILL;
            var4 = var4[var3];
            var9 = var1.signals;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.GAME_EVENT;
            var3 = var9[var3];
            var3 = var3.eventTypes;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.GameEventType;
            var2 = var2.VICTORY;
            var3 = var3[var2];
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var4['importance'] = var5;
case 41:
            if(!(var2 != var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = 0.9;
            var3['importance'] = var2;
case 43:
            return var1;
        }
    };
    var5['highlights'] = var7;
    var7 = function social() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot5;
            var8 = undefined;
            var1 = var1.bind(var8)();
            var5 = var1.signals;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var3 = var2[var7];
            var3 = var4.bind(var8)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.YELLING;
            var5 = var5[var3];
            var3 = 0.4;
            var5['importance'] = var3;
            var5 = var1.signals;
            var3 = var2[var7];
            var3 = var4.bind(var8)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.SOUNDBOARD;
            var5 = var5[var3];
            var3 = 0.35;
            var5['importance'] = var3;
            var3 = var1.signals;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.PHRASE;
            var2 = var3[var2];
            var4 = var2.phrases;
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.patterns;
                var2 = var3.includes;
                var1 = 'holy shit';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var6 = null;
            if(!(var6 != var3)) { _fun0007_ip = 20; continue _fun0007 }
case 16:
            var2 = 0.5;
            var3['importance'] = var2;
case 20:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var5.bind(var8)(var2);
            var2 = var2.GameEventType;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = 0.7;
            if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var10 = var5[var4];
            var11 = var1.signals;
            var12 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var12.bind(var8)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.GAME_EVENT;
            var2 = var11[var2];
            var2 = var2.eventTypes;
            var10 = var2[var10];
            if(!(var6 != var10)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var2 = var10.importance;
            var2 = var2 * var3;
            var10['importance'] = var2;
case 47:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0007_ip = 46; continue _fun0007 }
case 45:
            return var1;
        }
    };
    var5['social'] = var7;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/clips/ClipsDecisionEngineConfig.tsx';
    var7 = var8.bind(var9)(var7);
    var3['createDefaultConfig'] = var6;
    var3['PRESET_CONFIGS'] = var5;
    var3['validateConfig'] = var4;
    var4 = function getPhraseConfig(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var3 = var1.signals;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var6 = undefined;
            var2 = var5.bind(var6)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.PHRASE;
            var2 = var3[var2];
            var3 = var4.toLowerCase;
            var4 = var3.bind(var4)();
            var3 = var4.trim;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var3 = _closure1_slot3;
            var1 = var2.phrases;
            var5 = var3.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var1 = var3.done;
            var4 = var3;
            if(var1) { _fun0008_ip = 22; continue _fun0008 }
case 49:
            var3 = var4.value;
            var1 = var3.enabled;
            if(!var1) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var9 = var3.patterns;
            var8 = var9.some;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0008_ip = 52; continue _fun0008 }
case 50:
            var8 = var5.bind(var6)();
            var1 = var8.done;
            var4 = var8;
            if(var1) { _fun0008_ip = 22; continue _fun0008 }
case 53:
            _fun0008_ip = 49; continue _fun0008;
case 52:
            var1 = {};
            var11 = var1;
            var10 = var3;
            var4 = copyDataProperties(var11, var10);
            var3 = var3.isExplicit;
            var4 = null;
            var4 = var4 != var3;
            if(!var4) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var4 = var3;
case 54:
            var3 = 'isExplicit';
            var1[var3] = var4;
            return var1;
case 22:
            var1 = {};
            var3 = new Array(0);
            var1['patterns'] = var3;
            var10 = var2.defaultPhrase;
            var11 = var1;
            var3 = copyDataProperties(var11, var10);
            var3 = var2.enabled;
            var2 = 'enabled';
            var1[var2] = var3;
            var3 = false;
            var2 = 'isExplicit';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['getPhraseConfig'] = var4;
    var4 = function getGameEventConfig(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.signals;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.ClipSignalTypes;
            var1 = var1.GAME_EVENT;
            var1 = var2[var1];
            var3 = var1.eventTypes;
            var2 = arg2;
            var2 = var3[var2];
            var3 = null;
            if(!(var3 == var2)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var2 = var1.defaultEventType;
case 56:
            var1 = {};
            var3 = var2.importance;
            var1['importance'] = var3;
            var3 = var2.decay;
            var1['decay'] = var3;
            var2 = var2.amplifiers;
            var1['amplifiers'] = var2;
            return var1;
        }
    };
    var3['getGameEventConfig'] = var4;
    var4 = function getSimpleSignalConfig(arg1, arg2) {
        var1 = arg1;
        var2 = var1.signals;
        var1 = arg2;
        var1 = var2[var1];
        return var1;
    };
    var3['getSimpleSignalConfig'] = var4;
    var4 = function serializeConfig(arg1) {
        var1 = global;
        var5 = var1.JSON;
        var4 = var5.stringify;
        var3 = arg1;
        var2 = null;
        var1 = 2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['serializeConfig'] = var4;
    var2 = function deserializeConfig(arg1) {
        var3 = _closure1_slot6;
        var1 = global;
        var4 = var1.JSON;
        var2 = var4.parse;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['deserializeConfig'] = var2;
    return var1;
})();