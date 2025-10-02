// app/modules/soundboard/SoundboardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function hasPermissionToPlaySound(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var5 = null;
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.guild_id;
case 2:
            var1 = var5 == var1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot6;
            var7 = var8.can;
            var6 = _closure1_slot11;
            var6 = var6.USE_EXTERNAL_SOUNDS;
            var1 = var7.bind(var8)(var6, var4);
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var2.guildId;
            var6 = _closure1_slot10;
            var1 = var7 === var6;
case 6:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var2.guildId;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4.guild_id;
case 10:
            var1 = var2 === var3;
case 8:
            return var1;
        }
    };
    var _closure1_slot14 = var7;
    var6 = function canUseSoundboardSound(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg2;
            var6 = arg3;
            var2 = arguments[3];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 3; continue _fun0002 }
case 12:
            var2 = true;
case 3:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var8 = var7.bind(var5)(var1);
            var7 = var8.canUseSoundboardEverywhere;
            var1 = arg1;
            var1 = var7.bind(var8)(var1);
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = var3.guildId;
            var7 = null;
            var9 = var7 == var6;
            var7 = undefined;
            if(var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var6.guild_id;
case 15:
            var1 = var8 === var7;
case 13:
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var3.guildId;
            var7 = _closure1_slot10;
            var1 = var8 === var7;
case 17:
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot14;
            var1 = var4.bind(var5)(var3, var6);
case 19:
            if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = !var2;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var3.available;
case 23:
            var1 = var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function canMakeSound(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getMuteStates;
            var1 = {};
            var4 = arg1;
            var1['channel'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = var2.mute;
            var2 = var2.suppress;
            var1 = !var1;
            if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var1 = !var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function hasSetAnyCustomJoinSound() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var2 = var1.guilds;
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = var2.guilds;
case 27:
            if(!(var1 == var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = {};
case 29:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var3 = var1.bind(var2)(var3);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.joinSound;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = function _maybePlayCustomJoinSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentUser;
                    var12 = var2.bind(var3)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var3 = var5[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var6 = var3.bind(var2)();
                    var4 = _closure1_slot0;
                    var3 = 16;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.getCustomJoinSound;
                    var3 = arg1;
                    var4 = var4.bind(var5)(var3);
                    var10 = null;
                    if(!(var10 != var6)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var8 = _closure1_slot5;
                    var5 = var8.has;
                    var3 = var6.type;
                    var3 = var5.bind(var8)(var3);
                    if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 35:
                    if(!(var10 != var4)) { _fun0005_ip = 33; continue _fun0005 }
case 36:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.canUseCustomCallSounds;
                    var3 = var3.bind(var5)(var12);
                    if(!var3) { _fun0005_ip = 33; continue _fun0005 }
case 37:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 17;
                    var3 = var8[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.canSelectedVoiceChannelUseSoundboard;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0005_ip = 33; continue _fun0005 }
case 38:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 12;
                    var3 = var3[var5];
                    var8 = var8.bind(var2)(var3);
                    var3 = var8.maybeFetchSoundboardSounds;
                    var3 = var3.bind(var8)();
                    SaveGenerator(address=230);
case 39:
                    return var3;
case 40:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var9 = var4.guildId;
                    var8 = _closure1_slot9;
                    if(!(var9 !== var8)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var11 = var4.guildId;
                    _fun0005_ip = 45; continue _fun0005;
case 43:
                    var11 = _closure1_slot10;
case 45:
                    var9 = _closure1_slot8;
                    var8 = var9.getSound;
                    var4 = var4.soundId;
                    var9 = var8.bind(var9)(var11, var4);
                    if(!(var10 != var9)) { _fun0005_ip = 33; continue _fun0005 }
case 46:
                    var4 = _closure1_slot14;
                    var8 = var4.bind(var2)(var9, var6);
                    var4 = null;
                    if(!var8) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var11 = _closure1_slot15;
                    var13 = true;
                    var17 = undefined;
                    var16 = var12;
                    var15 = var9;
                    var14 = var6;
                    var8 = var17[var11](var16, var15, var14, var13, var12);
                    var4 = null;
                    if(!var8) { _fun0005_ip = 47; continue _fun0005 }
case 49:
                    var8 = _closure1_slot16;
                    var8 = var8.bind(var2)(var6);
                    var4 = null;
                    if(!var8) { _fun0005_ip = 47; continue _fun0005 }
case 50:
                    var8 = var6.id;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = var7[var5];
                    var11 = var6.bind(var2)(var5);
                    var10 = var11.playSoundLocally;
                    var5 = 13;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.LocalSoundTrigger;
                    var5 = var5.JOINED_VOICE_CHANNEL;
                    var5 = var10.bind(var11)(var8, var9, var5);
                    var5 = 14;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.sendVoiceChannelCustomCallSoundEffect;
                    var5 = false;
                    var5 = var6.bind(var7)(var8, var9, var5);
                    var4 = undefined;
case 47:
                    return var4;
case 41:
                    return var3;
case 33:
                    return var2;
case 31:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function trackCustomCallSettingsChanged(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guildId;
            var8 = var1.changeType;
            var7 = var1.soundType;
            var6 = var1.soundSource;
            var9 = var1.location;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
            var2 = {};
            var2['location_stack'] = var9;
            var10 = '';
            var9 = 0;
            if(!(var10 !== var11)) { _fun0006_ip = 20; continue _fun0006 }
case 51:
            var10 = global;
            var10 = var10.Number;
            var9 = var10.bind(var1)(var11);
case 20:
            var2['guild_id'] = var9;
            var2['change_type'] = var8;
            var2['sound_type'] = var7;
            var2['sound_source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot9 = var11;
    var8 = var8.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.Permissions;
    var _closure1_slot11 = var11;
    var8 = var8.AnalyticEvents;
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.ExpressionPickerViewType;
    var _closure1_slot13 = var8;
    var8 = 24;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/soundboard/SoundboardUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function getAmplitudinalSoundboardVolume() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var3 = var1.SoundboardSettings;
            var1 = var3.getSetting;
            var3 = var1.bind(var3)();
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var2 = var3.volume;
case 52:
            var3 = var1 != var2;
            var1 = 100;
            if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 25:
            var1 = var2;
case 54:
            return var1;
        }
    };
    var3['getAmplitudinalSoundboardVolume'] = var8;
    var3['hasPermissionToPlaySound'] = var7;
    var3['canUseSoundboardSound'] = var6;
    var3['canMakeSound'] = var5;
    var5 = function playSound(arg1, arg2, arg3) {
        var7 = arg1;
        var6 = arg2;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var2 = var4[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var2);
        var5 = var8.playSoundLocally;
        var2 = 13;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.LocalSoundTrigger;
        var2 = var2.SOUNDBOARD;
        var2 = var5.bind(var8)(var6, var7, var2);
        var2 = 14;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.sendVoiceChannelSoundboardEffect;
        var10 = false;
        var9 = arg3;
        var13 = var5;
        var12 = var6;
        var11 = var7;
        var2 = var13[var4](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['playSound'] = var5;
    var3['hasSetAnyCustomJoinSound'] = var4;
    var4 = function maybePlayCustomJoinSound() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybePlayCustomJoinSound'] = var4;
    var4 = function useSoundBoardDismissContentTypes(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isSoundboardButtonDisabled;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0008_ip = 55; continue _fun0008 }
case 3:
            var3 = false;
case 55:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var6.bind(var7)(var4, var1);
            var1 = new Array(0);
            if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 13:
            var3 = _closure1_slot17;
            var3 = var3.bind(var5)();
            if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var7 = var1.push;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 19;
            var3 = var9[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CUSTOM_CALL_SOUNDS_SPARKLES;
            var3 = var7.bind(var1)(var3);
            var3 = 20;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.ageEligibleForPremiumUpsell;
            var4 = var3.bind(var4)(var8);
            var7 = _closure1_slot1;
            var3 = 10;
            var3 = var9[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.canUseCustomCallSounds;
            var3 = var3.bind(var7)(var8);
            if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var3 = var4;
case 58:
            if(!var3) { _fun0008_ip = 56; continue _fun0008 }
case 60:
            var3 = var1.push;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.CUSTOM_CALL_SOUNDS_PICKER_UPSELL;
            var2 = var3.bind(var1)(var2);
case 56:
            return var1;
        }
    };
    var3['useSoundBoardDismissContentTypes'] = var4;
    var4 = function removeCustomJoinSound(arg1, arg2) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 21;
        var4 = var8[var3];
        var1 = undefined;
        var5 = var7.bind(var1)(var4);
        var4 = var5.updateUserGuildSettings;
        var3 = var8[var3];
        var3 = var7.bind(var1)(var3);
        var3 = var3.UserSettingsDelay;
        var3 = var3.INFREQUENT_USER_ACTION;
        var2 = function(arg1) {
            var1 = undefined;
            var2 = arg1;
            var2['joinSound'] = var1;
            var3 = _closure1_slot19;
            var2 = {};
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 13;
            var8 = var7[var5];
            var8 = var6.bind(var1)(var8);
            var8 = var8.AnalyticsChangeType;
            var8 = var8.REMOVED;
            var2['changeType'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.AnalyticsSoundType;
            var5 = var5.ENTRY;
            var2['soundType'] = var5;
            var4 = _closure2_slot1;
            var2['location'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var6, var2, var3);
        return var1;
    };
    var3['removeCustomJoinSound'] = var4;
    var4 = function updateCustomJoinSound(arg1, arg2, arg3) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 21;
        var4 = var8[var3];
        var1 = undefined;
        var5 = var7.bind(var1)(var4);
        var4 = var5.updateUserGuildSettings;
        var3 = var8[var3];
        var3 = var7.bind(var1)(var3);
        var3 = var3.UserSettingsDelay;
        var3 = var3.INFREQUENT_USER_ACTION;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot1;
                var2 = var1.guildId;
                var1 = _closure1_slot10;
                var9 = var2 === var1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 13;
                var2 = var1[var7];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.AnalyticsSoundSource;
                if(var9) { _fun0009_ip = 61; continue _fun0009 }
case 14:
                var6 = var2.CUSTOM;
                _fun0009_ip = 62; continue _fun0009;
case 61:
                var6 = var2.DEFAULT;
case 62:
                var8 = var3.joinSound;
                var2 = null;
                if(!(var2 == var8)) { _fun0009_ip = 22; continue _fun0009 }
case 63:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var8.bind(var1)(var2);
                var2 = var2.AnalyticsChangeType;
                var8 = var2.ADDED;
                _fun0009_ip = 64; continue _fun0009;
case 22:
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var10.bind(var1)(var2);
                var2 = var2.AnalyticsChangeType;
                var8 = var2.UPDATED;
case 64:
                var2 = {};
                var10 = _closure2_slot1;
                var10 = var10.soundId;
                var2['soundId'] = var10;
                if(var9) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                var9 = _closure2_slot1;
                var9 = var9.guildId;
                _fun0009_ip = 67; continue _fun0009;
case 65:
                var9 = _closure1_slot9;
case 67:
                var2['guildId'] = var9;
                var3['joinSound'] = var2;
                var3 = _closure1_slot19;
                var2 = {};
                var9 = _closure2_slot0;
                var2['guildId'] = var9;
                var2['changeType'] = var8;
                var2['soundSource'] = var6;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var5 = var5.AnalyticsSoundType;
                var5 = var5.ENTRY;
                var2['soundType'] = var5;
                var4 = _closure2_slot2;
                var2['location'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var6, var2, var3);
        return var1;
    };
    var3['updateCustomJoinSound'] = var4;
    var4 = function trackCustomCallSoundExternallyDeleted(arg1) {
        var1 = arg1;
        var6 = var1.location;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 22;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED;
        var2 = {};
        var2['location_stack'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackCustomCallSoundExternallyDeleted'] = var4;
    var2 = function trackSoundFavorited(arg1) {
        var1 = arg1;
        var6 = var1.sound;
        var8 = var1.location;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 23;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot12;
        var3 = var2.EXPRESSION_FAVORITED;
        var2 = {};
        var2['location'] = var8;
        var7 = _closure1_slot13;
        var7 = var7.SOUNDBOARD;
        var2['expression_type'] = var7;
        var7 = var6.soundId;
        var2['expression_id'] = var7;
        var7 = var6.name;
        var2['expression_name'] = var7;
        var6 = var6.guildId;
        var2['expression_guild_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSoundFavorited'] = var2;
    return var1;
})();