// app/modules/voice_channel_effects/VoiceChannelEffectsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT;
    var _closure1_slot9 = var4;
    var4 = new Array(0);
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = new Array(0);
    var _closure1_slot12 = var4;
    var4 = new Array(0);
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var8;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var7[var4];
    var10 = var6.bind(var1)(var4);
    var9 = var10.debounce;
    var8 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 9;
        var2 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var2);
        var6 = var7.getEffectAnnouncement;
        var2 = _closure1_slot12;
        var6 = var6.bind(var7)(var2);
        var2 = 10;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var5 = var2.AccessibilityAnnouncer;
        var4 = var5.announce;
        var2 = 'polite';
        var2 = var4.bind(var5)(var6, var2);
        var2 = new Array(0);
        _closure1_slot12 = var2;
        return var1;
    };
    var4 = 500;
    var4 = var9.bind(var10)(var8, var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function VoiceChannelEffectsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'recentlyUsedEmojis';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'isOnCooldown';
        var5['key'] = var7;
        var7 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 52; continue _fun0003 }
 16:
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var5 = var4;
                var3 = new var5[var3](var4);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = _closure1_slot3;
                var1 = var3 < var2;
 52:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'effectCooldownEndTime';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot3;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getEffectForUserId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var4 = 'VoiceChannelEffectsStore';
    var9['displayName'] = var4;
    var4 = 6;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function VOICE_CHANNEL_EFFECT_CLEAR(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.userId;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 33; continue _fun0004 }
 25:
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
 33:
            var1 = undefined;
            return var1;
        }
    };
    var4['VOICE_CHANNEL_EFFECT_CLEAR'] = var5;
    var5 = function VOICE_CHANNEL_EFFECT_RECENT_EMOJI(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.emoji;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 112; continue _fun0005 }
 14:
            var3 = _closure1_slot10;
            var2 = var3.unshift;
            var2 = var2.bind(var3)(var4);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.uniqBy;
            var3 = _closure1_slot10;
            var2 = 'name';
            var2 = var4.bind(var5)(var3, var2);
            _closure1_slot10 = var2;
            var3 = var2.length;
            var4 = _closure1_slot9;
            var2 = 1;
            var2 = var4 + var2;
            if(!(var3 > var2)) { _fun0005_ip = 112; continue _fun0005 }
 98:
            var2 = _closure1_slot10;
            var1 = var2.pop;
            var1 = var1.bind(var2)();
 112:
            var1 = undefined;
            return var1;
        }
    };
    var4['VOICE_CHANNEL_EFFECT_RECENT_EMOJI'] = var5;
    var5 = function VOICE_CHANNEL_EFFECT_SEND(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var6 = var1.emoji;
            var5 = var1.userId;
            var4 = var1.animationType;
            var2 = null;
            var1 = var2 != var6;
            if(!var1) { _fun0006_ip = 32; continue _fun0006 }
 28:
            var1 = var2 != var4;
 32:
            if(!var1) { _fun0006_ip = 138; continue _fun0006 }
 35:
            var3 = _closure1_slot11;
            var2 = {};
            var2['emoji'] = var6;
            var7 = global;
            var8 = var7.Date;
            var7 = var8.now;
            var7 = var7.bind(var8)();
            var2['sentAt'] = var7;
            var2['animationType'] = var4;
            var3[var5] = var2;
            var10 = _closure1_slot12;
            var2 = new Array(1);
            var9 = 0;
            var11 = var2;
            var4 = arraySpread(var11, var10, var9);
            var3 = {};
            var6 = var6.name;
            var3['emojiName'] = var6;
            var3['userId'] = var5;
            var2[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot12 = var2;
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)();
 138:
            var1 = undefined;
            return var1;
        }
    };
    var4['VOICE_CHANNEL_EFFECT_SEND'] = var5;
    var5 = function VOICE_CHANNEL_EFFECT_SENT_LOCAL() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = global;
            var2 = var1.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var12 = var3;
            var2 = new var12[var2](var11);
            var5 = var2 instanceof Object ? var2 : var3;
            var8 = new Array(1);
            var8[0] = var5;
            var10 = _closure1_slot13;
            var6 = 1;
            var11 = var8;
            var9 = var6;
            var3 = arraySpread(var11, var10, var9);
            var7 = var8.slice;
            var3 = 0;
            var4 = 20;
            var3 = var7.bind(var8)(var3, var4);
            _closure1_slot13 = var3;
            var3 = var3.length;
            if(!(var3 >= var4)) { _fun0007_ip = 186; continue _fun0007 }
 85:
            var4 = _closure1_slot13;
            var3 = var4.length;
            var3 = var3 - var6;
            var6 = var4[var3];
            var3 = var5.getTime;
            var4 = var3.bind(var5)();
            var3 = var6.getTime;
            var3 = var3.bind(var6)();
            var3 = var4 - var3;
            var4 = _closure1_slot14;
            if(!(var3 < var4)) { _fun0007_ip = 186; continue _fun0007 }
 134:
            var4 = var1.Date;
            var1 = var5.getTime;
            var5 = var1.bind(var5)();
            var1 = _closure1_slot14;
            var1 = var5 + var1;
            var11 = var1 - var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var1 = new var12[var4](var11, var10);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure1_slot3 = var1;
 186:
            var1 = undefined;
            return var1;
        }
    };
    var4['VOICE_CHANNEL_EFFECT_SENT_LOCAL'] = var5;
    var5 = function VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP(arg1) {
        var1 = arg1;
        var2 = var1.cooldownEndsAtMs;
        var1 = global;
        var3 = var1.Date;
        var4 = var1.Date;
        var1 = var4.now;
        var1 = var1.bind(var4)();
        var5 = var1 + var2;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot3 = var2;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_channel_effects/VoiceChannelEffectsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0008_ip = 60; continue _fun0008 }
 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'VOICE_CHANNEL_EFFECT_CLEAR';
            var1['type'] = var5;
            var1['userId'] = var4;
            var1 = var2.bind(var3)(var1);
 60:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearVoiceChannelEffectForUser'] = var2;
    return var1;
})();