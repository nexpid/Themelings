// app/modules/soundboard/SoundboardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golfie = function(argFoo, argBar) { // Original name: hasPermissionToPlaySound
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            report = null;
            oscard = report == tangon;
            entity = undefined;
            if(oscard) { _fun00002_ip = 22; continue _fun00001 }
 17:
            entity = tangon.guild_id;
 22:
            entity = report == entity;
            if(entity) { _fun00002_ip = 58; continue _fun00001 }
 29:
            option = _closure1_slot6;
            golfie = option.can;
            oscard = _closure1_slot11;
            oscard = oscard.USE_EXTERNAL_SOUNDS;
            entity = golfie.bind(option)(oscard, tangon);
 58:
            if(entity) { _fun00002_ip = 77; continue _fun00001 }
 61:
            golfie = michal.guildId;
            oscard = _closure1_slot10;
            entity = golfie === oscard;
 77:
            if(entity) { _fun00002_ip = 103; continue _fun00001 }
 80:
            michal = michal.guildId;
            report = report == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 99; continue _fun00001 }
 94:
            zuuluu = tangon.guild_id;
 99:
            entity = michal === zuuluu;
 103:
            return entity;
        }
    };
    var _closure1_slot14 = golfie;
    oscard = function(argFoo, argBar, argBaz) { // Original name: canUseSoundboardSound
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            oscard = argBaz;
            michal = arguments[3];
            report = undefined;
            if(!(michal === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            michal = true;
 17:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            entity = 10;
            entity = option[entity];
            option = golfie.bind(report)(entity);
            golfie = option.canUseSoundboardEverywhere;
            entity = argFoo;
            entity = golfie.bind(option)(entity);
            if(entity) { _fun00004_ip = 82; continue _fun00003 }
 57:
            option = zuuluu.guildId;
            golfie = null;
            verify = golfie == oscard;
            golfie = undefined;
            if(verify) { _fun00004_ip = 78; continue _fun00003 }
 73:
            golfie = oscard.guild_id;
 78:
            entity = option === golfie;
 82:
            if(entity) { _fun00004_ip = 98; continue _fun00003 }
 85:
            option = zuuluu.guildId;
            golfie = _closure1_slot10;
            entity = option === golfie;
 98:
            if(!entity) { _fun00004_ip = 111; continue _fun00003 }
 101:
            tangon = _closure1_slot14;
            entity = tangon.bind(report)(zuuluu, oscard);
 111:
            if(!entity) { _fun00004_ip = 129; continue _fun00003 }
 114:
            michal = !michal;
            if(michal) { _fun00004_ip = 126; continue _fun00003 }
 120:
            michal = zuuluu.available;
 126:
            entity = michal;
 129:
            return entity;
        }
    };
    var _closure1_slot15 = oscard;
    report = function(argFoo) { // Original name: canMakeSound
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getMuteStates;
            entity = {};
            tangon = argFoo;
            entity['channel'] = tangon;
            michal = michal.bind(zuuluu)(entity);
            entity = michal.mute;
            michal = michal.suppress;
            entity = !entity;
            if(!entity) { _fun00006_ip = 66; continue _fun00005 }
 63:
            entity = !michal;
 66:
            return entity;
        }
    };
    var _closure1_slot16 = report;
    tangon = function() { // Original name: hasSetAnyCustomJoinSound
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.settings;
            michal = entity.guilds;
            entity = null;
            tangon = entity == michal;
            zuuluu = undefined;
            if(tangon) { _fun00008_ip = 36; continue _fun00007 }
 30:
            zuuluu = michal.guilds;
 36:
            if(!(entity == zuuluu)) { _fun00008_ip = 42; continue _fun00007 }
 40:
            zuuluu = {};
 42:
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.some;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.joinSound;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot17 = tangon;
    entity = function() { // Original name: _maybePlayCustomJoinSound
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 447; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getCurrentUser;
                    romeon = michal.bind(zuuluu)();
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 15;
                    zuuluu = report[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    oscard = zuuluu.bind(michal)();
                    tangon = _closure1_slot0;
                    zuuluu = 16;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.getCustomJoinSound;
                    zuuluu = argFoo;
                    tangon = tangon.bind(report)(zuuluu);
                    offset = null;
                    if(!(offset != oscard)) { _fun00010_ip = 444; continue _fun00009 }
 91:
                    option = _closure1_slot5;
                    report = option.has;
                    zuuluu = oscard.type;
                    zuuluu = report.bind(option)(zuuluu);
                    if(zuuluu) { _fun00010_ip = 444; continue _fun00009 }
 116:
                    if(!(offset != tangon)) { _fun00010_ip = 444; continue _fun00009 }
 123:
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = option[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.canUseCustomCallSounds;
                    zuuluu = zuuluu.bind(report)(romeon);
                    if(!zuuluu) { _fun00010_ip = 444; continue _fun00009 }
 160:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = option[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.canSelectedVoiceChannelUseSoundboard;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00010_ip = 444; continue _fun00009 }
 196:
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    report = 12;
                    zuuluu = zuuluu[report];
                    option = option.bind(michal)(zuuluu);
                    zuuluu = option.maybeFetchSoundboardSounds;
                    zuuluu = zuuluu.bind(option)();
                    SaveGenerator(address=230);
 228:
                    return zuuluu;
 230:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 441; continue _fun00009 }
 239:
                    verify = tangon.guildId;
                    option = _closure1_slot9;
                    if(!(verify !== option)) { _fun00010_ip = 259; continue _fun00009 }
 252:
                    yankee = tangon.guildId;
                    _fun00010_ip = 263; continue _fun00009;
 259:
                    yankee = _closure1_slot10;
 263:
                    verify = _closure1_slot8;
                    option = verify.getSound;
                    tangon = tangon.soundId;
                    verify = option.bind(verify)(yankee, tangon);
                    if(!(offset != verify)) { _fun00010_ip = 444; continue _fun00009 }
 292:
                    tangon = _closure1_slot14;
                    option = tangon.bind(michal)(verify, oscard);
                    tangon = null;
                    if(!option) { _fun00010_ip = 438; continue _fun00009 }
 310:
                    yankee = _closure1_slot15;
                    foxtra = true;
                    output = undefined;
                    sizing = romeon;
                    kiloes = verify;
                    backup = oscard;
                    option = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    tangon = null;
                    if(!option) { _fun00010_ip = 438; continue _fun00009 }
 336:
                    option = _closure1_slot16;
                    option = option.bind(michal)(oscard);
                    tangon = null;
                    if(!option) { _fun00010_ip = 438; continue _fun00009 }
 350:
                    option = oscard.id;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = golfie[report];
                    yankee = oscard.bind(michal)(report);
                    offset = yankee.playSoundLocally;
                    report = 13;
                    report = golfie[report];
                    report = oscard.bind(michal)(report);
                    report = report.LocalSoundTrigger;
                    report = report.JOINED_VOICE_CHANNEL;
                    report = offset.bind(yankee)(option, verify, report);
                    report = 14;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.sendVoiceChannelCustomCallSoundEffect;
                    report = false;
                    report = oscard.bind(golfie)(option, verify, report);
                    tangon = undefined;
 438:
                    return tangon;
 441:
                    return zuuluu;
 444:
                    return michal;
 447:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: trackCustomCallSettingsChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            option = entity.changeType;
            golfie = entity.soundType;
            oscard = entity.soundSource;
            verify = entity.location;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 22;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot12;
            zuuluu = michal.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
            michal = {};
            michal['location_stack'] = verify;
            offset = '';
            verify = 0;
            if(!(offset !== yankee)) { _fun00012_ip = 101; continue _fun00011 }
 88:
            offset = global;
            offset = offset.Number;
            verify = offset.bind(entity)(yankee);
 101:
            michal['guild_id'] = verify;
            michal['change_type'] = option;
            michal['sound_type'] = golfie;
            michal['sound_source'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot5 = option;
    option = 3;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = offset[option];
    option = verify.bind(entity)(option);
    yankee = option.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot9 = yankee;
    option = option.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = option;
    option = 7;
    option = offset[option];
    option = verify.bind(entity)(option);
    yankee = option.Permissions;
    var _closure1_slot11 = yankee;
    option = option.AnalyticEvents;
    var _closure1_slot12 = option;
    option = 8;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.ExpressionPickerViewType;
    var _closure1_slot13 = option;
    option = 24;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/soundboard/SoundboardUtils.tsx';
    option = verify.bind(offset)(option);
    option = function() { // Original name: getAmplitudinalSoundboardVolume
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            zuuluu = entity.SoundboardSettings;
            entity = zuuluu.getSetting;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            tangon = entity == zuuluu;
            if(tangon) { _fun00014_ip = 56; continue _fun00013 }
 50:
            michal = zuuluu.volume;
 56:
            zuuluu = entity != michal;
            entity = 100;
            if(!zuuluu) { _fun00014_ip = 69; continue _fun00013 }
 66:
            entity = michal;
 69:
            return entity;
        }
    };
    zuuluu['getAmplitudinalSoundboardVolume'] = option;
    zuuluu['hasPermissionToPlaySound'] = golfie;
    zuuluu['canUseSoundboardSound'] = oscard;
    zuuluu['canMakeSound'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: playSound
        golfie = argFoo;
        oscard = argBar;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 12;
        michal = tangon[entity];
        entity = undefined;
        option = zuuluu.bind(entity)(michal);
        report = option.playSoundLocally;
        michal = 13;
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.LocalSoundTrigger;
        michal = michal.SOUNDBOARD;
        michal = report.bind(option)(oscard, golfie, michal);
        michal = 14;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.sendVoiceChannelSoundboardEffect;
        offset = false;
        verify = argBaz;
        foxtra = report;
        romeon = oscard;
        yankee = golfie;
        michal = foxtra[tangon](romeon, yankee, offset, verify, option);
        return entity;
    };
    zuuluu['playSound'] = report;
    zuuluu['hasSetAnyCustomJoinSound'] = tangon;
    tangon = function() { // Original name: maybePlayCustomJoinSound
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['maybePlayCustomJoinSound'] = tangon;
    tangon = function(argFoo) { // Original name: useSoundBoardDismissContentTypes
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.isSoundboardButtonDisabled;
            report = undefined;
            if(!(zuuluu === report)) { _fun00016_ip = 19; continue _fun00015 }
 17:
            zuuluu = false;
 19:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            golfie = tangon.bind(report)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = oscard.bind(golfie)(tangon, entity);
            entity = new Array(0);
            if(zuuluu) { _fun00016_ip = 238; continue _fun00015 }
 84:
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00016_ip = 238; continue _fun00015 }
 98:
            golfie = entity.push;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 19;
            zuuluu = verify[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.CUSTOM_CALL_SOUNDS_SPARKLES;
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = 20;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.ageEligibleForPremiumUpsell;
            tangon = zuuluu.bind(tangon)(option);
            golfie = _closure1_slot1;
            zuuluu = 10;
            zuuluu = verify[zuuluu];
            golfie = golfie.bind(report)(zuuluu);
            zuuluu = golfie.canUseCustomCallSounds;
            zuuluu = zuuluu.bind(golfie)(option);
            if(zuuluu) { _fun00016_ip = 196; continue _fun00015 }
 193:
            zuuluu = tangon;
 196:
            if(!zuuluu) { _fun00016_ip = 238; continue _fun00015 }
 199:
            zuuluu = entity.push;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.DismissibleContent;
            michal = michal.CUSTOM_CALL_SOUNDS_PICKER_UPSELL;
            michal = zuuluu.bind(entity)(michal);
 238:
            return entity;
        }
    };
    zuuluu['useSoundBoardDismissContentTypes'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeCustomJoinSound
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        entity = argBar;
        var _closure2_slot1 = entity;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 21;
        tangon = option[zuuluu];
        entity = undefined;
        report = golfie.bind(entity)(tangon);
        tangon = report.updateUserGuildSettings;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(entity)(zuuluu);
        zuuluu = zuuluu.UserSettingsDelay;
        zuuluu = zuuluu.INFREQUENT_USER_ACTION;
        michal = function(argFoo) {
            entity = undefined;
            michal = argFoo;
            michal['joinSound'] = entity;
            zuuluu = _closure1_slot19;
            michal = {};
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 13;
            option = golfie[report];
            option = oscard.bind(entity)(option);
            option = option.AnalyticsChangeType;
            option = option.REMOVED;
            michal['changeType'] = option;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            report = report.AnalyticsSoundType;
            report = report.ENTRY;
            michal['soundType'] = report;
            tangon = _closure2_slot1;
            michal['location'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = tangon.bind(report)(oscard, michal, zuuluu);
        return entity;
    };
    zuuluu['removeCustomJoinSound'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateCustomJoinSound
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 21;
        tangon = option[zuuluu];
        entity = undefined;
        report = golfie.bind(entity)(tangon);
        tangon = report.updateUserGuildSettings;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(entity)(zuuluu);
        zuuluu = zuuluu.UserSettingsDelay;
        zuuluu = zuuluu.INFREQUENT_USER_ACTION;
        michal = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure2_slot1;
                michal = entity.guildId;
                entity = _closure1_slot10;
                verify = michal === entity;
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 13;
                michal = entity[golfie];
                entity = undefined;
                michal = oscard.bind(entity)(michal);
                michal = michal.AnalyticsSoundSource;
                if(verify) { _fun00018_ip = 65; continue _fun00017 }
 57:
                oscard = michal.CUSTOM;
                _fun00018_ip = 71; continue _fun00017;
 65:
                oscard = michal.DEFAULT;
 71:
                option = zuuluu.joinSound;
                michal = null;
                if(!(michal == option)) { _fun00018_ip = 114; continue _fun00017 }
 83:
                option = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[golfie];
                michal = option.bind(entity)(michal);
                michal = michal.AnalyticsChangeType;
                option = michal.ADDED;
                _fun00018_ip = 143; continue _fun00017;
 114:
                offset = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[golfie];
                michal = offset.bind(entity)(michal);
                michal = michal.AnalyticsChangeType;
                option = michal.UPDATED;
 143:
                michal = {};
                offset = _closure2_slot1;
                offset = offset.soundId;
                michal['soundId'] = offset;
                if(verify) { _fun00018_ip = 174; continue _fun00017 }
 163:
                verify = _closure2_slot1;
                verify = verify.guildId;
                _fun00018_ip = 178; continue _fun00017;
 174:
                verify = _closure1_slot9;
 178:
                michal['guildId'] = verify;
                zuuluu['joinSound'] = michal;
                zuuluu = _closure1_slot19;
                michal = {};
                verify = _closure2_slot0;
                michal['guildId'] = verify;
                michal['changeType'] = option;
                michal['soundSource'] = oscard;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                report = report[golfie];
                report = oscard.bind(entity)(report);
                report = report.AnalyticsSoundType;
                report = report.ENTRY;
                michal['soundType'] = report;
                tangon = _closure2_slot2;
                michal['location'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        michal = tangon.bind(report)(oscard, michal, zuuluu);
        return entity;
    };
    zuuluu['updateCustomJoinSound'] = tangon;
    tangon = function(argFoo) { // Original name: trackCustomCallSoundExternallyDeleted
        entity = argFoo;
        oscard = entity.location;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 22;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot12;
        zuuluu = michal.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED;
        michal = {};
        michal['location_stack'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackCustomCallSoundExternallyDeleted'] = tangon;
    michal = function(argFoo) { // Original name: trackSoundFavorited
        entity = argFoo;
        oscard = entity.sound;
        option = entity.location;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 23;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot12;
        zuuluu = michal.EXPRESSION_FAVORITED;
        michal = {};
        michal['location'] = option;
        golfie = _closure1_slot13;
        golfie = golfie.SOUNDBOARD;
        michal['expression_type'] = golfie;
        golfie = oscard.soundId;
        michal['expression_id'] = golfie;
        golfie = oscard.name;
        michal['expression_name'] = golfie;
        oscard = oscard.guildId;
        michal['expression_guild_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSoundFavorited'] = michal;
    return entity;
})();