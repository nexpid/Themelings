// app/modules/activities/trackActivityProblem.tsx
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
    tango = 'modules/activities/trackActivityProblem.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackActivityProblem
        _fun123542: for(var _fun123542_ip = 0; ; ) switch(_fun123542_ip) {
 0:
            entity = argFoo;
            romeo = entity.problem;
            offset = entity.channel;
            golf = entity.feedback;
            yankee = entity.activityApplication;
            oscar = entity.analyticsData;
            verify = entity.location;
            options = entity.rating;
            entity = undefined;
            if(!(options === entity)) { _fun123542_ip = 51; continue _fun123542 }
 49:
            options = null;
 51:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.ACTIVITY_REPORT_PROBLEM;
            mike = {};
            mike['reason'] = romeo;
            romeo = offset.getGuildId;
            romeo = romeo.bind(offset)();
            mike['guild_id'] = romeo;
            offset = offset.id;
            mike['channel_id'] = offset;
            offset = null;
            foxtrot = offset == yankee;
            romeo = undefined;
            if(foxtrot) { _fun123542_ip = 135; continue _fun123542 }
 130:
            romeo = yankee.id;
 135:
            mike['application_id'] = romeo;
            romeo = offset == yankee;
            offset = undefined;
            if(romeo) { _fun123542_ip = 154; continue _fun123542 }
 149:
            offset = yankee.name;
 154:
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