// app/modules/soundboard/BaseSoundboardManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun110086: for(var _fun110086_ip = 0; ; ) switch(_fun110086_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun110086_ip = 51; continue _fun110086 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun110086_ip = 92; continue _fun110086;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun110086_ip = 71; continue _fun110086 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun110087: for(var _fun110087_ip = 0; ; ) switch(_fun110087_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun110087_ip = 76; continue _fun110087;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 8;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: BaseSoundboardManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot2;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = function() {
                entity = undefined;
                return entity;
            };
            entity['_playSound'] = zulu;
            zulu = function() {
                entity = undefined;
                return entity;
            };
            entity['_stopAndClearSounds'] = zulu;
            zulu = function() {
                _fun110094: for(var _fun110094_ip = 0; ; ) switch(_fun110094_ip) {
 0:
                    mike = _closure1_slot8;
                    entity = mike.isDeaf;
                    entity = entity.bind(mike)();
                    if(!entity) { _fun110094_ip = 37; continue _fun110094 }
 20:
                    mike = _closure3_slot0;
                    entity = mike._stopAndClearSounds;
                    entity = entity.bind(mike)();
 37:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleToggleSelfDeafened'] = zulu;
            zulu = function(argFoo) {
                _fun110095: for(var _fun110095_ip = 0; ; ) switch(_fun110095_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.soundId;
                    report = entity.soundVolume;
                    tango = entity.userId;
                    zulu = entity.channelId;
                    entity = null;
                    if(!(entity != oscar)) { _fun110095_ip = 52; continue _fun110095 }
 31:
                    mike = _closure1_slot7;
                    entity = mike.getId;
                    entity = entity.bind(mike)();
                    if(!(tango === entity)) { _fun110095_ip = 56; continue _fun110095 }
 52:
                    entity = undefined;
                    return entity;
 56:
                    mike = _closure3_slot0;
                    entity = mike._playSound;
                    yankee = mike;
                    offset = oscar;
                    verify = report;
                    options = tango;
                    golf = zulu;
                    entity = yankee[entity](offset, verify, options, golf, oscar);
                    return entity;
                }
            };
            entity['_handleSoundboardSoundReceived'] = zulu;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = mike.sound;
                golf = mike.channelId;
                zulu = _closure1_slot7;
                mike = zulu.getId;
                options = mike.bind(zulu)();
                tango = _closure3_slot0;
                zulu = tango._playSound;
                offset = entity.soundId;
                verify = entity.volume;
                yankee = tango;
                entity = yankee[zulu](offset, verify, options, golf, oscar);
                return entity;
            };
            entity['_handleSoundboardSoundPlayLocally'] = zulu;
            mike = function() {
                mike = _closure3_slot0;
                entity = mike._stopAndClearSounds;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['_handleVoiceChannelSelect'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 7;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike._handleSoundboardSoundReceived;
            oscar = 'VOICE_CHANNEL_EFFECT_SEND';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike._handleSoundboardSoundPlayLocally;
            oscar = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike._handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = mike._handleToggleSelfDeafened;
            mike = 'AUDIO_TOGGLE_SELF_DEAF';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 7;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike._handleSoundboardSoundReceived;
            oscar = 'VOICE_CHANNEL_EFFECT_SEND';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike._handleSoundboardSoundPlayLocally;
            oscar = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike._handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike._handleToggleSelfDeafened;
            mike = 'AUDIO_TOGGLE_SELF_DEAF';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/BaseSoundboardManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();