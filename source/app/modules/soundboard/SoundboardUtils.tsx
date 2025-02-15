// app/modules/soundboard/SoundboardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golf = function(argFoo, argBar) { // Original name: hasPermissionToPlaySound
        _fun65533: for(var _fun65533_ip = 0; ; ) switch(_fun65533_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            report = null;
            oscar = report == tango;
            entity = undefined;
            if(oscar) { _fun65533_ip = 22; continue _fun65533 }
 17:
            entity = tango.guild_id;
 22:
            entity = report == entity;
            if(entity) { _fun65533_ip = 58; continue _fun65533 }
 29:
            options = _closure1_slot6;
            golf = options.can;
            oscar = _closure1_slot11;
            oscar = oscar.USE_EXTERNAL_SOUNDS;
            entity = golf.bind(options)(oscar, tango);
 58:
            if(entity) { _fun65533_ip = 77; continue _fun65533 }
 61:
            golf = mike.guildId;
            oscar = _closure1_slot10;
            entity = golf === oscar;
 77:
            if(entity) { _fun65533_ip = 103; continue _fun65533 }
 80:
            mike = mike.guildId;
            report = report == tango;
            zulu = undefined;
            if(report) { _fun65533_ip = 99; continue _fun65533 }
 94:
            zulu = tango.guild_id;
 99:
            entity = mike === zulu;
 103:
            return entity;
        }
    };
    var _closure1_slot13 = golf;
    oscar = function(argFoo, argBar, argBaz) { // Original name: canUseSoundboardSound
        _fun65534: for(var _fun65534_ip = 0; ; ) switch(_fun65534_ip) {
 0:
            zulu = argBar;
            oscar = argBaz;
            mike = arguments[3];
            report = undefined;
            if(!(mike === report)) { _fun65534_ip = 17; continue _fun65534 }
 15:
            mike = true;
 17:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 9;
            entity = options[entity];
            options = golf.bind(report)(entity);
            golf = options.canUseSoundboardEverywhere;
            entity = argFoo;
            entity = golf.bind(options)(entity);
            if(entity) { _fun65534_ip = 82; continue _fun65534 }
 57:
            options = zulu.guildId;
            golf = null;
            verify = golf == oscar;
            golf = undefined;
            if(verify) { _fun65534_ip = 78; continue _fun65534 }
 73:
            golf = oscar.guild_id;
 78:
            entity = options === golf;
 82:
            if(entity) { _fun65534_ip = 98; continue _fun65534 }
 85:
            options = zulu.guildId;
            golf = _closure1_slot10;
            entity = options === golf;
 98:
            if(!entity) { _fun65534_ip = 111; continue _fun65534 }
 101:
            tango = _closure1_slot13;
            entity = tango.bind(report)(zulu, oscar);
 111:
            if(!entity) { _fun65534_ip = 129; continue _fun65534 }
 114:
            mike = !mike;
            if(mike) { _fun65534_ip = 126; continue _fun65534 }
 120:
            mike = zulu.available;
 126:
            entity = mike;
 129:
            return entity;
        }
    };
    var _closure1_slot14 = oscar;
    report = function(argFoo) { // Original name: canMakeSound
        _fun65535: for(var _fun65535_ip = 0; ; ) switch(_fun65535_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getMuteStates;
            entity = {};
            tango = argFoo;
            entity['channel'] = tango;
            mike = mike.bind(zulu)(entity);
            entity = mike.mute;
            mike = mike.suppress;
            entity = !entity;
            if(!entity) { _fun65535_ip = 66; continue _fun65535 }
 63:
            entity = !mike;
 66:
            return entity;
        }
    };
    var _closure1_slot15 = report;
    tango = function() { // Original name: hasSetAnyCustomJoinSound
        _fun65536: for(var _fun65536_ip = 0; ; ) switch(_fun65536_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.settings;
            mike = entity.guilds;
            entity = null;
            tango = entity == mike;
            zulu = undefined;
            if(tango) { _fun65536_ip = 36; continue _fun65536 }
 30:
            zulu = mike.guilds;
 36:
            if(!(entity == zulu)) { _fun65536_ip = 42; continue _fun65536 }
 40:
            zulu = {};
 42:
            entity = global;
            mike = entity.Object;
            entity = mike.values;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.joinSound;
                entity = null;
                entity = entity != mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    entity = function() { // Original name: _maybePlayCustomJoinSound
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun65540: for(var _fun65540_ip = 0; ; ) switch(_fun65540_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65540_ip = 447; continue _fun65540 }
 10:
                    zulu = _closure1_slot7;
                    mike = zulu.getCurrentUser;
                    romeo = mike.bind(zulu)();
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 14;
                    zulu = report[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    oscar = zulu.bind(mike)();
                    tango = _closure1_slot0;
                    zulu = 15;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.getCustomJoinSound;
                    zulu = argFoo;
                    tango = tango.bind(report)(zulu);
                    offset = null;
                    if(!(offset != oscar)) { _fun65540_ip = 444; continue _fun65540 }
 91:
                    options = _closure1_slot5;
                    report = options.has;
                    zulu = oscar.type;
                    zulu = report.bind(options)(zulu);
                    if(zulu) { _fun65540_ip = 444; continue _fun65540 }
 116:
                    if(!(offset != tango)) { _fun65540_ip = 444; continue _fun65540 }
 123:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 9;
                    zulu = options[zulu];
                    report = report.bind(mike)(zulu);
                    zulu = report.canUseCustomCallSounds;
                    zulu = zulu.bind(report)(romeo);
                    if(!zulu) { _fun65540_ip = 444; continue _fun65540 }
 160:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 16;
                    zulu = options[zulu];
                    report = report.bind(mike)(zulu);
                    zulu = report.canSelectedVoiceChannelUseSoundboard;
                    zulu = zulu.bind(report)();
                    if(!zulu) { _fun65540_ip = 444; continue _fun65540 }
 196:
                    options = _closure1_slot0;
                    zulu = _closure1_slot2;
                    report = 11;
                    zulu = zulu[report];
                    options = options.bind(mike)(zulu);
                    zulu = options.maybeFetchSoundboardSounds;
                    zulu = zulu.bind(options)();
                    SaveGenerator(address=230);
 228:
                    return zulu;
 230:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun65540_ip = 441; continue _fun65540 }
 239:
                    verify = tango.guildId;
                    options = _closure1_slot9;
                    if(!(verify !== options)) { _fun65540_ip = 259; continue _fun65540 }
 252:
                    yankee = tango.guildId;
                    _fun65540_ip = 263; continue _fun65540;
 259:
                    yankee = _closure1_slot10;
 263:
                    verify = _closure1_slot8;
                    options = verify.getSound;
                    tango = tango.soundId;
                    verify = options.bind(verify)(yankee, tango);
                    if(!(offset != verify)) { _fun65540_ip = 444; continue _fun65540 }
 292:
                    tango = _closure1_slot13;
                    options = tango.bind(mike)(verify, oscar);
                    tango = null;
                    if(!options) { _fun65540_ip = 438; continue _fun65540 }
 310:
                    yankee = _closure1_slot14;
                    foxtrot = true;
                    output = undefined;
                    sizing = romeo;
                    kilo = verify;
                    backup = oscar;
                    options = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    tango = null;
                    if(!options) { _fun65540_ip = 438; continue _fun65540 }
 336:
                    options = _closure1_slot15;
                    options = options.bind(mike)(oscar);
                    tango = null;
                    if(!options) { _fun65540_ip = 438; continue _fun65540 }
 350:
                    options = oscar.id;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = golf[report];
                    yankee = oscar.bind(mike)(report);
                    offset = yankee.playSoundLocally;
                    report = 12;
                    report = golf[report];
                    report = oscar.bind(mike)(report);
                    report = report.LocalSoundTrigger;
                    report = report.JOINED_VOICE_CHANNEL;
                    report = offset.bind(yankee)(options, verify, report);
                    report = 13;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.sendVoiceChannelCustomCallSoundEffect;
                    report = false;
                    report = oscar.bind(golf)(options, verify, report);
                    tango = undefined;
 438:
                    return tango;
 441:
                    return zulu;
 444:
                    return mike;
 447:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: trackCustomCallSettingsChanged
        _fun65541: for(var _fun65541_ip = 0; ; ) switch(_fun65541_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            options = entity.changeType;
            golf = entity.soundType;
            oscar = entity.soundSource;
            verify = entity.location;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 21;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot12;
            zulu = mike.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
            mike = {};
            mike['location_stack'] = verify;
            offset = '';
            verify = 0;
            if(!(offset !== yankee)) { _fun65541_ip = 101; continue _fun65541 }
 88:
            offset = global;
            offset = offset.Number;
            verify = offset.bind(entity)(yankee);
 101:
            mike['guild_id'] = verify;
            mike['change_type'] = options;
            mike['sound_type'] = golf;
            mike['sound_source'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    foxtrot = entity.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot5 = options;
    options = 3;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = offset[options];
    options = verify.bind(entity)(options);
    yankee = options.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot9 = yankee;
    options = options.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = options;
    options = 7;
    options = offset[options];
    options = verify.bind(entity)(options);
    yankee = options.Permissions;
    var _closure1_slot11 = yankee;
    options = options.AnalyticEvents;
    var _closure1_slot12 = options;
    options = 22;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/soundboard/SoundboardUtils.tsx';
    options = verify.bind(offset)(options);
    options = function() { // Original name: getAmplitudinalSoundboardVolume
        _fun65542: for(var _fun65542_ip = 0; ; ) switch(_fun65542_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            zulu = entity.SoundboardSettings;
            entity = zulu.getSetting;
            zulu = entity.bind(zulu)();
            entity = null;
            tango = entity == zulu;
            if(tango) { _fun65542_ip = 56; continue _fun65542 }
 50:
            mike = zulu.volume;
 56:
            zulu = entity != mike;
            entity = 100;
            if(!zulu) { _fun65542_ip = 69; continue _fun65542 }
 66:
            entity = mike;
 69:
            return entity;
        }
    };
    zulu['getAmplitudinalSoundboardVolume'] = options;
    zulu['hasPermissionToPlaySound'] = golf;
    zulu['canUseSoundboardSound'] = oscar;
    zulu['canMakeSound'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: playSound
        golf = argFoo;
        oscar = argBar;
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 11;
        mike = tango[entity];
        entity = undefined;
        options = zulu.bind(entity)(mike);
        report = options.playSoundLocally;
        mike = 12;
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.LocalSoundTrigger;
        mike = mike.SOUNDBOARD;
        mike = report.bind(options)(oscar, golf, mike);
        mike = 13;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.sendVoiceChannelSoundboardEffect;
        offset = false;
        verify = argBaz;
        foxtrot = report;
        romeo = oscar;
        yankee = golf;
        mike = foxtrot[tango](romeo, yankee, offset, verify, options);
        return entity;
    };
    zulu['playSound'] = report;
    zulu['hasSetAnyCustomJoinSound'] = tango;
    tango = function() { // Original name: maybePlayCustomJoinSound
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['maybePlayCustomJoinSound'] = tango;
    tango = function(argFoo) { // Original name: useSoundBoardDismissContentTypes
        _fun65545: for(var _fun65545_ip = 0; ; ) switch(_fun65545_ip) {
 0:
            entity = argFoo;
            zulu = entity.isSoundboardButtonDisabled;
            report = undefined;
            if(!(zulu === report)) { _fun65545_ip = 19; continue _fun65545 }
 17:
            zulu = false;
 19:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 17;
            entity = oscar[entity];
            golf = tango.bind(report)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot7;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                mike = _closure1_slot7;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            options = oscar.bind(golf)(tango, entity);
            entity = new Array(0);
            if(zulu) { _fun65545_ip = 238; continue _fun65545 }
 84:
            zulu = _closure1_slot16;
            zulu = zulu.bind(report)();
            if(zulu) { _fun65545_ip = 238; continue _fun65545 }
 98:
            golf = entity.push;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 18;
            zulu = verify[oscar];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.DismissibleContent;
            zulu = zulu.CUSTOM_CALL_SOUNDS_SPARKLES;
            zulu = golf.bind(entity)(zulu);
            zulu = 19;
            zulu = verify[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.ageEligibleForPremiumUpsell;
            tango = zulu.bind(tango)(options);
            golf = _closure1_slot1;
            zulu = 9;
            zulu = verify[zulu];
            golf = golf.bind(report)(zulu);
            zulu = golf.canUseCustomCallSounds;
            zulu = zulu.bind(golf)(options);
            if(zulu) { _fun65545_ip = 196; continue _fun65545 }
 193:
            zulu = tango;
 196:
            if(!zulu) { _fun65545_ip = 238; continue _fun65545 }
 199:
            zulu = entity.push;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.DismissibleContent;
            mike = mike.CUSTOM_CALL_SOUNDS_PICKER_UPSELL;
            mike = zulu.bind(entity)(mike);
 238:
            return entity;
        }
    };
    zulu['useSoundBoardDismissContentTypes'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeCustomJoinSound
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        entity = argBar;
        var _closure2_slot1 = entity;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 20;
        tango = options[zulu];
        entity = undefined;
        report = golf.bind(entity)(tango);
        tango = report.updateUserGuildSettings;
        zulu = options[zulu];
        zulu = golf.bind(entity)(zulu);
        zulu = zulu.UserSettingsDelay;
        zulu = zulu.INFREQUENT_USER_ACTION;
        mike = function(argFoo) {
            entity = undefined;
            mike = argFoo;
            mike['joinSound'] = entity;
            zulu = _closure1_slot18;
            mike = {};
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 12;
            options = golf[report];
            options = oscar.bind(entity)(options);
            options = options.AnalyticsChangeType;
            options = options.REMOVED;
            mike['changeType'] = options;
            report = golf[report];
            report = oscar.bind(entity)(report);
            report = report.AnalyticsSoundType;
            report = report.ENTRY;
            mike['soundType'] = report;
            tango = _closure2_slot1;
            mike['location'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = tango.bind(report)(oscar, mike, zulu);
        return entity;
    };
    zulu['removeCustomJoinSound'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateCustomJoinSound
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 20;
        tango = options[zulu];
        entity = undefined;
        report = golf.bind(entity)(tango);
        tango = report.updateUserGuildSettings;
        zulu = options[zulu];
        zulu = golf.bind(entity)(zulu);
        zulu = zulu.UserSettingsDelay;
        zulu = zulu.INFREQUENT_USER_ACTION;
        mike = function(argFoo) {
            _fun65550: for(var _fun65550_ip = 0; ; ) switch(_fun65550_ip) {
 0:
                zulu = argFoo;
                entity = _closure2_slot1;
                mike = entity.guildId;
                entity = _closure1_slot10;
                verify = mike === entity;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 12;
                mike = entity[golf];
                entity = undefined;
                mike = oscar.bind(entity)(mike);
                mike = mike.AnalyticsSoundSource;
                if(verify) { _fun65550_ip = 65; continue _fun65550 }
 57:
                oscar = mike.CUSTOM;
                _fun65550_ip = 71; continue _fun65550;
 65:
                oscar = mike.DEFAULT;
 71:
                options = zulu.joinSound;
                mike = null;
                if(!(mike == options)) { _fun65550_ip = 114; continue _fun65550 }
 83:
                options = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[golf];
                mike = options.bind(entity)(mike);
                mike = mike.AnalyticsChangeType;
                options = mike.ADDED;
                _fun65550_ip = 143; continue _fun65550;
 114:
                offset = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[golf];
                mike = offset.bind(entity)(mike);
                mike = mike.AnalyticsChangeType;
                options = mike.UPDATED;
 143:
                mike = {};
                offset = _closure2_slot1;
                offset = offset.soundId;
                mike['soundId'] = offset;
                if(verify) { _fun65550_ip = 174; continue _fun65550 }
 163:
                verify = _closure2_slot1;
                verify = verify.guildId;
                _fun65550_ip = 178; continue _fun65550;
 174:
                verify = _closure1_slot9;
 178:
                mike['guildId'] = verify;
                zulu['joinSound'] = mike;
                zulu = _closure1_slot18;
                mike = {};
                verify = _closure2_slot0;
                mike['guildId'] = verify;
                mike['changeType'] = options;
                mike['soundSource'] = oscar;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                report = report[golf];
                report = oscar.bind(entity)(report);
                report = report.AnalyticsSoundType;
                report = report.ENTRY;
                mike['soundType'] = report;
                tango = _closure2_slot2;
                mike['location'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        mike = tango.bind(report)(oscar, mike, zulu);
        return entity;
    };
    zulu['updateCustomJoinSound'] = tango;
    mike = function(argFoo) { // Original name: trackCustomCallSoundExternallyDeleted
        entity = argFoo;
        oscar = entity.location;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 21;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot12;
        zulu = mike.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED;
        mike = {};
        mike['location_stack'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackCustomCallSoundExternallyDeleted'] = mike;
    return entity;
})();