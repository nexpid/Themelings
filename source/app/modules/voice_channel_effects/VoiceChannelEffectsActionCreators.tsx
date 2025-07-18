// app/modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var5 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
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
        var2 = 8;
        var4 = var4[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var4);
        var4 = var5.throttle;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot5;
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
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var9 = var2.VoiceChannelEffectAnimationType;
    var _closure1_slot8 = var9;
    var2 = 6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot9 = var5;
    var5 = var2.Endpoints;
    var _closure1_slot10 = var5;
    var2 = var2.NOOP_NULL;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot12 = var2;
    var5 = {};
    var2 = 'emoji_picker';
    var5['EMOJI_PICKER'] = var2;
    var2 = 'effect_bar';
    var5['EFFECT_BAR'] = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 494; continue _fun0002 }
 13:
                    var11 = var2.channel;
                    var10 = var2.emoji;
                    var9 = var2.location;
                    var6 = var2.animationType;
                    var12 = var2.animationId;
                    var13 = var2.isPremium;
                    var3 = undefined;
                    var8 = undefined;
                    SaveGenerator(address=55);
 53:
                    return var3;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 491; continue _fun0002 }
 64:
                    var4 = var10;
                    var7 = null;
                    if(!(var7 != var4)) { _fun0002_ip = 488; continue _fun0002 }
 76:
                    var14 = _closure1_slot7;
                    var14 = var14.isOnCooldown;
                    if(var14) { _fun0002_ip = 488; continue _fun0002 }
 95:
                    if(!var13) { _fun0002_ip = 102; continue _fun0002 }
 98:
                    if(!(var7 == var6)) { _fun0002_ip = 112; continue _fun0002 }
 102:
                    var13 = _closure1_slot8;
                    var6 = var13.BASIC;
 112:
                    var8 = var6;
 115: // try_start_0
                    var6 = var10;
                    var6 = var6.id;
                    if(!(var7 == var6)) { _fun0002_ip = 166; continue _fun0002 }
 127:
                    var14 = {};
                    var14['emoji_id'] = var7;
                    var6 = var10;
                    var6 = var6.optionallyDiverseSequence;
                    var14['emoji_name'] = var6;
                    var6 = var8;
                    var14['animation_type'] = var6;
                    var6 = var12;
                    var14['animation_id'] = var6;
                    _fun0002_ip = 207; continue _fun0002;
 166:
                    var6 = {};
                    var13 = var10;
                    var15 = var13.id;
                    var6['emoji_id'] = var15;
                    var13 = var13.name;
                    var6['emoji_name'] = var13;
                    var13 = var8;
                    var6['animation_type'] = var13;
                    var6['animation_id'] = var12;
                    var14 = var6;
 207:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 10;
                    var6 = var13[var6];
                    var6 = var12.bind(var3)(var6);
                    var13 = var6.HTTP;
                    var12 = var13.post;
                    var6 = {};
                    var17 = _closure1_slot10;
                    var16 = var17.VOICE_CHANNEL_EFFECTS;
                    var15 = var11;
                    var15 = var15.id;
                    var15 = var16.bind(var17)(var15);
                    var6['url'] = var15;
                    var6['body'] = var14;
                    var14 = false;
                    var6['rejectWithError'] = var14;
                    var6 = var12.bind(var13)(var6);
                    SaveGenerator(address=286);
 284:
                    return var6;
 286:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=11);
                    if(var12) { _fun0002_ip = 361; continue _fun0002 }
 292:
                    var12 = _closure1_slot14;
                    var21 = var11;
                    var20 = var10;
                    var19 = var9;
                    var18 = var8;
                    var22 = undefined;
                    var8 = var22[var12](var21, var20, var19, var18, var17);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 14;
                    var8 = var10[var8];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'VOICE_CHANNEL_EFFECT_SENT_LOCAL';
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
 356: // try_end0
                    _fun0002_ip = 488; continue _fun0002;
 361:
                    return var6;
 364: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = var6;
                    var8 = var6.status;
                    var6 = 429;
                    if(!(var6 === var8)) { _fun0002_ip = 488; continue _fun0002 }
 384:
                    var6 = var5;
                    var6 = var6.body;
                    var6 = var6.retry_after;
                    if(!(var7 != var6)) { _fun0002_ip = 488; continue _fun0002 }
 402:
                    var5 = var5.body;
                    var7 = var5.retry_after;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.Millis;
                    var4 = var4.SECOND;
                    var7 = var7 * var4;
                    var4 = 14;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP';
                    var4['type'] = var8;
                    var4['cooldownEndsAtMs'] = var7;
                    var4 = var5.bind(var6)(var4);
 488:
                    return var3;
 491:
                    return var2;
 494:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = {};
    var11 = var9.BASIC;
    var10 = 'Basic';
    var6[var11] = var10;
    var10 = var9.PREMIUM;
    var9 = 'Premium';
    var6[var10] = var9;
    var _closure1_slot13 = var6;
    var6 = function trackVoiceChannelEffectSent(arg1, arg2, arg3, arg4) {
        var14 = arg1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 16;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.countEmoji;
        var4 = new Array(1);
        var3 = arg2;
        var4[0] = var3;
        var3 = var14.getGuildId;
        var3 = var3.bind(var14)();
        var3 = var6.bind(var7)(var4, var3);
        var12 = var3.unicode;
        var11 = var3.custom;
        var10 = var3.customExternal;
        var9 = var3.managed;
        var8 = var3.managedExternal;
        var7 = var3.animated;
        var4 = _closure1_slot13;
        var3 = arg4;
        var6 = var4[var3];
        var4 = _closure1_slot1;
        var3 = 17;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot9;
        var3 = var2.VOICE_CHANNEL_EFFECT_SENT;
        var2 = {};
        var13 = var14.id;
        var2['channel_id'] = var13;
        var13 = var14.getGuildId;
        var13 = var13.bind(var14)();
        var2['guild_id'] = var13;
        var13 = arg3;
        var2['location'] = var13;
        var2['emoji_unicode'] = var12;
        var2['emoji_custom'] = var11;
        var2['emoji_custom_external'] = var10;
        var2['emoji_managed'] = var9;
        var2['emoji_managed_external'] = var8;
        var2['emoji_animated'] = var7;
        var2['animation_type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot14 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['VoiceChannelEffectSentLocation'] = var5;
    var5 = function sendVoiceChannelCustomCallSoundEffect(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var14 = arg1;
            var3 = _closure1_slot15;
            var1 = undefined;
            var3 = var3.bind(var1)(var14);
            var10 = var3.abortController;
            var _closure2_slot0 = var10;
            var9 = var3.onRequestProgress;
            var4 = _closure1_slot6;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var12 = var3.animationType;
            var3 = null;
            if(!(var3 == var12)) { _fun0003_ip = 71; continue _fun0003 }
 61:
            var3 = _closure1_slot8;
            var12 = var3.BASIC;
 71:
            var11 = {};
            var11['animation_type'] = var12;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 9;
            var7 = var4[var6];
            var8 = var3.bind(var1)(var7);
            var7 = var8.sampleAnimationId;
            var6 = var4[var6];
            var6 = var3.bind(var1)(var6);
            var6 = var6.CUSTOM_CALL_SOUND_ANIMATION_RANGE;
            var6 = var7.bind(var8)(var12, var6);
            var11['animation_id'] = var6;
            var6 = 10;
            var6 = var4[var6];
            var6 = var3.bind(var1)(var6);
            var8 = var6.HTTP;
            var7 = var8.post;
            var6 = {};
            var13 = _closure1_slot10;
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
            var6 = _closure1_slot11;
            var5 = function() {
                var1 = _closure2_slot0;
                var1 = var1.signal;
                var1 = var1.aborted;
                var1 = undefined;
                return var1;
            };
            var5 = var7.bind(var8)(var6, var5);
            var5 = _closure1_slot1;
            var2 = 11;
            var2 = var4[var2];
            var6 = var5.bind(var1)(var2);
            var2 = 12;
            var2 = var4[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.CHANNEL_CALL;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = 13;
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
    var3['sendVoiceChannelCustomCallSoundEffect'] = var5;
    var4 = function sendVoiceChannelSoundboardEffect(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var16 = arg1;
            var6 = arg2;
            var5 = arg4;
            var8 = _closure1_slot4;
            var7 = var8.getCustomEmojiById;
            var9 = var6.emojiId;
            var3 = null;
            var10 = var3 != var9;
            var1 = '';
            if(!var10) { _fun0004_ip = 46; continue _fun0004 }
 43:
            var1 = var9;
 46:
            var9 = var7.bind(var8)(var1);
            var7 = _closure1_slot15;
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
            if(!(var3 == var7)) { _fun0004_ip = 129; continue _fun0004 }
 112:
            var10 = var3 == var9;
            var8 = undefined;
            if(var10) { _fun0004_ip = 126; continue _fun0004 }
 121:
            var8 = var9.name;
 126:
            var7 = var8;
 129:
            var13['emoji_name'] = var7;
            var8 = var6.guildId;
            var7 = _closure1_slot12;
            if(!(var8 !== var7)) { _fun0004_ip = 158; continue _fun0004 }
 147:
            var7 = var6.guildId;
            var13['source_guild_id'] = var7;
 158:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 10;
            var7 = var8[var7];
            var7 = var9.bind(var1)(var7);
            var10 = var7.HTTP;
            var9 = var10.post;
            var7 = {};
            var15 = _closure1_slot10;
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
            var7 = _closure1_slot11;
            var4 = function() {
                var1 = _closure2_slot0;
                var1 = var1.signal;
                var1 = var1.aborted;
                var1 = undefined;
                return var1;
            };
            var4 = var9.bind(var10)(var7, var4);
            var7 = _closure1_slot1;
            var4 = 11;
            var4 = var8[var4];
            var4 = var7.bind(var1)(var4);
            if(!(var3 == var5)) { _fun0004_ip = 285; continue _fun0004 }
 281:
            var5 = new Array(0);
 285:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
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
    var3['sendVoiceChannelSoundboardEffect'] = var4;
    var3['sendVoiceChannelEffect'] = var2;
    return var1;
})();