// app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: openGuildEventDetails
        _fun76935: for(var _fun76935_ip = 0; ; ) switch(_fun76935_ip) {
 0:
            entity = argFoo;
            romeo = entity.eventId;
            yankee = entity.event;
            offset = entity.onClose;
            golf = entity.isHubContext;
            options = entity.recurrenceId;
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            zulu = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.openLazy;
            tango = _closure1_slot0;
            zulu = 5;
            zulu = mike[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 4;
            zulu = mike[zulu];
            mike = mike.paths;
            tango = tango.bind(entity)(zulu, mike);
            zulu = _closure1_slot5;
            mike = {};
            mike['eventId'] = romeo;
            mike['event'] = yankee;
            mike['onCloseActionSheet'] = offset;
            mike['isHubContext'] = golf;
            golf = null;
            if(!(golf == options)) { _fun76935_ip = 161; continue _fun76935 }
 130:
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            verify = 6;
            verify = romeo[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.getNextRecurrenceIdInEvent;
            options = verify.bind(offset)(yankee);
 161:
            verify = golf != options;
            golf = undefined;
            if(!verify) { _fun76935_ip = 173; continue _fun76935 }
 170:
            golf = options;
 173:
            mike['recurrenceId'] = golf;
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = function() { // Original name: _transitionToEventDetailsFromInvite
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun76938: for(var _fun76938_ip = 0; ; ) switch(_fun76938_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    golf = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun76938_ip = 100; continue _fun76938 }
 13:
                    mike = global;
                    tango = mike.Promise;
                    mike = tango.resolve;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=35);
 33:
                    return mike;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun76938_ip = 97; continue _fun76938 }
 41:
                    report = _closure1_slot6;
                    tango = {};
                    oscar = zulu.id;
                    tango['eventId'] = oscar;
                    tango['event'] = zulu;
                    zulu = null;
                    options = zulu == golf;
                    zulu = undefined;
                    oscar = undefined;
                    if(options) { _fun76938_ip = 84; continue _fun76938 }
 78:
                    oscar = golf.recurrenceId;
 84:
                    tango['recurrenceId'] = oscar;
                    tango = report.bind(zulu)(tango);
                    return zulu;
 97:
                    return mike;
 100:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.EXPLICIT_END_EVENT_SHEET_KEY;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
    var _closure1_slot5 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['openGuildEventDetails'] = tango;
    tango = function() { // Original name: transitionToEventDetailsFromInvite
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['transitionToEventDetailsFromInvite'] = tango;
    mike = function(argFoo) { // Original name: openEndEventModal
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 5;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 7;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot4;
        mike = {};
        golf = argFoo;
        mike['channel'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openEndEventModal'] = mike;
    return entity;
})();