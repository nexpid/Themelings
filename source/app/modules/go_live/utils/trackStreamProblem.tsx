// app/modules/go_live/utils/trackStreamProblem.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 'modules/go_live/utils/trackStreamProblem.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackStreamProblem
        _fun103621: for(var _fun103621_ip = 0; ; ) switch(_fun103621_ip) {
 0:
            entity = argFoo;
            romeo = entity.problem;
            offset = entity.stream;
            golf = entity.feedback;
            yankee = entity.streamApplication;
            oscar = entity.analyticsData;
            verify = entity.location;
            options = entity.rating;
            entity = undefined;
            if(!(options === entity)) { _fun103621_ip = 52; continue _fun103621 }
 50:
            options = null;
 52:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.STREAM_REPORT_PROBLEM;
            mike = {};
            mike['reason'] = romeo;
            romeo = offset.ownerId;
            mike['streamer_user_id'] = romeo;
            romeo = offset.channelId;
            mike['stream_channel_id'] = romeo;
            offset = offset.guildId;
            mike['guild_id'] = offset;
            offset = null;
            foxtrot = offset != yankee;
            romeo = null;
            if(!foxtrot) { _fun103621_ip = 147; continue _fun103621 }
 142:
            romeo = yankee.id;
 147:
            mike['application_id'] = romeo;
            romeo = offset != yankee;
            offset = null;
            if(!romeo) { _fun103621_ip = 166; continue _fun103621 }
 161:
            offset = yankee.name;
 166:
            mike['application_name'] = offset;
            mike['location'] = verify;
            mike['rating'] = options;
            mike['feedback'] = golf;
            kilo = mike;
            backup = oscar;
            oscar = copyDataProperties(kilo, backup);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();