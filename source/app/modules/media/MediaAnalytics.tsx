// app/modules/media/MediaAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media/MediaAnalytics.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) { // Original name: logMediaAttachmentPlaybackStarted
        _fun92022: for(var _fun92022_ip = 0; ; ) switch(_fun92022_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            offset = argBaz;
            verify = argGrault;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.MEDIA_ATTACHMENT_PLAYBACK_STARTED;
            mike = {};
            options = golf.guild_id;
            mike['guild_id'] = options;
            options = golf.id;
            mike['channel_id'] = options;
            golf = golf.type;
            mike['channel_type'] = golf;
            golf = oscar.content_type;
            mike['type'] = golf;
            golf = oscar.flags;
            mike['flags'] = golf;
            oscar = oscar.size;
            mike['size'] = oscar;
            mike['duration'] = offset;
            oscar = argCorge;
            mike['message_id'] = oscar;
            oscar = global;
            options = oscar.Math;
            golf = options.min;
            yankee = null;
            oscar = verify;
            if(!(yankee != offset)) { _fun92022_ip = 147; continue _fun92022 }
 144:
            oscar = offset;
 147:
            oscar = golf.bind(options)(oscar, verify);
            mike['start_duration_secs'] = oscar;
            oscar = argFred;
            mike['sender_user_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['logMediaAttachmentPlaybackStarted'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) { // Original name: logMediaAttachmentPlaybackEnded
        _fun92023: for(var _fun92023_ip = 0; ; ) switch(_fun92023_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.MEDIA_ATTACHMENT_PLAYBACK_ENDED;
            mike = {};
            oscar = argFoo;
            mike['message_id'] = oscar;
            mike['total_duration_secs'] = offset;
            oscar = global;
            options = oscar.Math;
            golf = options.min;
            yankee = null;
            oscar = verify;
            if(!(yankee != offset)) { _fun92023_ip = 86; continue _fun92023 }
 83:
            oscar = offset;
 86:
            oscar = golf.bind(options)(oscar, verify);
            mike['end_duration_secs'] = oscar;
            oscar = argCorge;
            mike['sender_user_id'] = oscar;
            oscar = argGrault;
            mike['duration_listening_secs'] = oscar;
            oscar = argFred;
            oscar = oscar.content_type;
            mike['type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['logMediaAttachmentPlaybackEnded'] = mike;
    return entity;
})();