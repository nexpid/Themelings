// app/modules/soundboard/trackSoundPlayed.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsPremiumFeatureNames;
    var _closure1_slot8 = golf;
    tango = tango.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/trackSoundPlayed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackSoundPlayed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argBaz;
            zulu = _closure1_slot3;
            mike = zulu.getChannel;
            tango = _closure1_slot5;
            entity = tango.getVoiceChannelId;
            entity = entity.bind(tango)();
            zulu = mike.bind(zulu)(entity);
            verify = null;
            mike = verify == zulu;
            entity = undefined;
            romeo = undefined;
            if(mike) { _fun00002_ip = 57; continue _fun00001 }
 47:
            mike = zulu.getGuildId;
            romeo = mike.bind(zulu)();
 57:
            zulu = _closure1_slot4;
            mike = zulu.getMediaSessionId;
            offset = mike.bind(zulu)();
            mike = zulu.getRTCConnectionId;
            yankee = mike.bind(zulu)();
            zulu = _closure1_slot2;
            mike = zulu.getCurrentGameForAnalytics;
            mike = mike.bind(zulu)();
            zulu = verify == mike;
            options = undefined;
            if(zulu) { _fun00002_ip = 109; continue _fun00001 }
 104:
            options = mike.name;
 109:
            mike = oscar.guildId;
            foxtrot = romeo !== mike;
            if(!foxtrot) { _fun00002_ip = 134; continue _fun00001 }
 121:
            zulu = oscar.guildId;
            mike = _closure1_slot6;
            foxtrot = zulu !== mike;
 134:
            zulu = oscar.guildId;
            mike = _closure1_slot6;
            golf = 'default';
            if(!(zulu !== mike)) { _fun00002_ip = 167; continue _fun00001 }
 151:
            mike = 'custom';
            if(!foxtrot) { _fun00002_ip = 164; continue _fun00001 }
 158:
            mike = 'custom-external';
 164:
            golf = mike;
 167:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 7;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot7;
            zulu = mike.PREMIUM_FEATURE_USAGE;
            mike = {};
            kilo = _closure1_slot8;
            kilo = kilo.SOUNDBOARD_PLAY;
            mike['feature_name'] = kilo;
            backup = _closure1_slot9;
            if(foxtrot) { _fun00002_ip = 234; continue _fun00001 }
 226:
            foxtrot = backup.FREE;
            _fun00002_ip = 240; continue _fun00001;
 234:
            foxtrot = backup.PREMIUM_STANDARD;
 240:
            mike['feature_tier'] = foxtrot;
            mike['guild_id'] = romeo;
            romeo = argFoo;
            mike['location_stack'] = romeo;
            mike['rtc_connection_id'] = yankee;
            mike['media_session_id'] = offset;
            offset = argBar;
            mike['in_overlay'] = offset;
            mike['application_name'] = options;
            options = oscar.emojiId;
            if(!(verify == options)) { _fun00002_ip = 307; continue _fun00001 }
 292:
            options = oscar.emojiName;
            verify = verify != options;
            options = 0;
            if(!verify) { _fun00002_ip = 310; continue _fun00001 }
 307:
            options = 1;
 310:
            mike['emoji_count'] = options;
            mike['feature_selection'] = golf;
            oscar = oscar.soundId;
            mike['feature_selection_id'] = oscar;
            oscar = argCorge;
            mike['sound_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();