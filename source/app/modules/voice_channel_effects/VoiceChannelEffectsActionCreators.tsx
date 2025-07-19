// app/modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _getCancellationSlowConnection(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var2 = var2.AbortController;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var8 = var3;
        var2 = new var8[var2](var7);
        var3 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var4 = var4[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var4);
        var4 = var5.throttle;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot4;
                var1 = var2.getVoiceChannelId;
                var3 = var1.bind(var2)();
                var2 = _closure2_slot0;
                if(!(var3 !== var2)) { _fun0001_ip = 42; continue _fun0001 }
 28:
                var2 = _closure2_slot1;
                var1 = var2.abort;
                var1 = var1.bind(var2)();
 42:
                var1 = undefined;
                return var1;
            }
        };
        var1 = 1000;
        var2 = var4.bind(var5)(var2, var1);
        var1 = {};
        var1['abortController'] = var3;
        var1['onRequestProgress'] = var2;
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.VoiceChannelEffectAnimationType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot7 = var5;
    var4 = var4.NOOP_NULL;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot9 = var4;
    var4 = {};
    var5 = 'emoji_picker';
    var4['EMOJI_PICKER'] = var5;
    var5 = 'effect_bar';
    var4['EFFECT_BAR'] = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VoiceChannelEffectSentLocation'] = var4;
    var4 = function sendVoiceChannelCustomCallSoundEffect(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var14 = arg1;
            var3 = _closure1_slot10;
            var1 = undefined;
            var3 = var3.bind(var1)(var14);
            var10 = var3.abortController;
            var _closure2_slot0 = var10;
            var9 = var3.onRequestProgress;
            var4 = _closure1_slot5;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var12 = var3.animationType;
            var3 = null;
            if(!(var3 == var12)) { _fun0002_ip = 71; continue _fun0002 }
 61:
            var3 = _closure1_slot6;
            var12 = var3.BASIC;
 71:
            var11 = {};
            var11['animation_type'] = var12;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 7;
            var7 = var4[var6];
            var8 = var3.bind(var1)(var7);
            var7 = var8.sampleAnimationId;
            var6 = var4[var6];
            var6 = var3.bind(var1)(var6);
            var6 = var6.CUSTOM_CALL_SOUND_ANIMATION_RANGE;
            var6 = var7.bind(var8)(var12, var6);
            var11['animation_id'] = var6;
            var6 = 8;
            var6 = var4[var6];
            var6 = var3.bind(var1)(var6);
            var8 = var6.HTTP;
            var7 = var8.post;
            var6 = {};
            var13 = _closure1_slot7;
            var12 = var13.CUSTOM_CALL_SOUNDS;
            var12 = var12.bind(var13)(var14);
            var6['url'] = var12;
            var6['body'] = var11;
            var10 = var10.signal;
            var6['signal'] = var10;
            var6['onRequestProgress'] = var9;
            var9 = true;
            var6['rejectWithError'] = var9;
            var8 = var7.bind(var8)(var6);
            var7 = var8.then;
            var6 = _closure1_slot8;
            var5 = function() {
                var1 = _closure2_slot0;
                var1 = var1.signal;
                var1 = var1.aborted;
                var1 = undefined;
                return var1;
            };
            var5 = var7.bind(var8)(var6, var5);
            var5 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var6 = var5.bind(var1)(var2);
            var2 = 10;
            var2 = var4[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.CHANNEL_CALL;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = 11;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.AnalyticsSoundType;
            var15 = var2.ENTRY;
            var17 = arg3;
            var16 = arg2;
            var19 = undefined;
            var18 = var5;
            var2 = var19[var6](var18, var17, var16, var15, var14);
            return var1;
        }
    };
    var3['sendVoiceChannelCustomCallSoundEffect'] = var4;
    var2 = function sendVoiceChannelSoundboardEffect(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var16 = arg1;
            var6 = arg2;
            var5 = arg4;
            var8 = _closure1_slot3;
            var7 = var8.getCustomEmojiById;
            var9 = var6.emojiId;
            var3 = null;
            var10 = var3 != var9;
            var1 = '';
            if(!var10) { _fun0003_ip = 46; continue _fun0003 }
 43:
            var1 = var9;
 46:
            var9 = var7.bind(var8)(var1);
            var7 = _closure1_slot10;
            var1 = undefined;
            var7 = var7.bind(var1)(var16);
            var12 = var7.abortController;
            var _closure2_slot0 = var12;
            var11 = var7.onRequestProgress;
            var13 = {};
            var7 = var6.soundId;
            var13['sound_id'] = var7;
            var7 = var6.emojiId;
            var13['emoji_id'] = var7;
            var7 = var6.emojiName;
            if(!(var3 == var7)) { _fun0003_ip = 129; continue _fun0003 }
 112:
            var10 = var3 == var9;
            var8 = undefined;
            if(var10) { _fun0003_ip = 126; continue _fun0003 }
 121:
            var8 = var9.name;
 126:
            var7 = var8;
 129:
            var13['emoji_name'] = var7;
            var8 = var6.guildId;
            var7 = _closure1_slot9;
            if(!(var8 !== var7)) { _fun0003_ip = 158; continue _fun0003 }
 147:
            var7 = var6.guildId;
            var13['source_guild_id'] = var7;
 158:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 8;
            var7 = var8[var7];
            var7 = var9.bind(var1)(var7);
            var10 = var7.HTTP;
            var9 = var10.post;
            var7 = {};
            var15 = _closure1_slot7;
            var14 = var15.SEND_SOUNDBOARD_SOUND;
            var14 = var14.bind(var15)(var16);
            var7['url'] = var14;
            var7['body'] = var13;
            var12 = var12.signal;
            var7['signal'] = var12;
            var7['onRequestProgress'] = var11;
            var11 = true;
            var7['rejectWithError'] = var11;
            var10 = var9.bind(var10)(var7);
            var9 = var10.then;
            var7 = _closure1_slot8;
            var4 = function() {
                var1 = _closure2_slot0;
                var1 = var1.signal;
                var1 = var1.aborted;
                var1 = undefined;
                return var1;
            };
            var4 = var9.bind(var10)(var7, var4);
            var7 = _closure1_slot1;
            var4 = 9;
            var4 = var8[var4];
            var4 = var7.bind(var1)(var4);
            if(!(var3 == var5)) { _fun0003_ip = 285; continue _fun0003 }
 281:
            var5 = new Array(0);
 285:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.AnalyticsSoundType;
            var17 = var2.DEFAULT;
            var19 = arg3;
            var21 = undefined;
            var20 = var5;
            var18 = var6;
            var2 = var21[var4](var20, var19, var18, var17, var16);
            return var1;
        }
    };
    var3['sendVoiceChannelSoundboardEffect'] = var2;
    return var1;
})();