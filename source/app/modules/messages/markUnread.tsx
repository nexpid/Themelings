// app/modules/messages/markUnread.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _markUnread
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    tango = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 502; continue _fun00001 }
 18:
                    var _closure4_slot0 = tango;
                    zulu = undefined;
                    var _closure4_slot1 = zulu;
                    var _closure4_slot2 = zulu;
                    var _closure4_slot3 = zulu;
                    report = _closure1_slot8;
                    mike = report.getCurrentUser;
                    report = mike.bind(report)();
                    _closure4_slot1 = report;
                    mike = null;
                    if(!(mike != report)) { _fun00002_ip = 496; continue _fun00001 }
 65:
                    oscar = _closure1_slot6;
                    report = oscar.getMessages;
                    options = report.bind(oscar)(yankee);
                    report = options.toArray;
                    offset = report.bind(options)();
                    oscar = offset.filter;
                    report = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        mike = zulu.bind(tango)(mike, entity);
                        entity = 0;
                        entity = mike < entity;
                        return entity;
                    };
                    offset = oscar.bind(offset)(report);
                    oscar = offset.sort;
                    report = function(argFoo, argBar) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    oscar = oscar.bind(offset)(report);
                    report = oscar.reverse;
                    oscar = report.bind(oscar)();
                    report = 0;
                    oscar = oscar[report];
                    if(!(mike != oscar)) { _fun00002_ip = 152; continue _fun00001 }
 145:
                    offset = oscar.id;
                    _fun00002_ip = 183; continue _fun00001;
 152:
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    oscar = 8;
                    oscar = foxtrot[oscar];
                    romeo = romeo.bind(zulu)(oscar);
                    oscar = romeo.atPreviousMillisecond;
                    offset = oscar.bind(romeo)(tango);
 183:
                    _closure4_slot2 = offset;
                    _closure4_slot3 = report;
                    oscar = options.forAll;
                    report = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            oscar = argFoo;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 8;
                            mike = mike[entity];
                            entity = undefined;
                            options = zulu.bind(entity)(mike);
                            golf = options.compare;
                            report = oscar.id;
                            mike = _closure4_slot2;
                            report = golf.bind(options)(report, mike);
                            mike = 0;
                            mike = report > mike;
                            if(!mike) { _fun00004_ip = 75; continue _fun00003 }
 61:
                            report = _closure1_slot7;
                            tango = _closure4_slot1;
                            mike = report.bind(entity)(oscar, tango);
 75:
                            if(!mike) { _fun00004_ip = 89; continue _fun00003 }
 78:
                            mike = _closure4_slot3;
                            mike = mike + 1;
                            _closure4_slot3 = mike;
 89:
                            return entity;
                        }
                    };
                    report = oscar.bind(options)(report);
                    oscar = _closure1_slot5;
                    report = oscar.getChannel;
                    romeo = report.bind(oscar)(yankee);
                    mike = mike != romeo;
                    if(!mike) { _fun00002_ip = 240; continue _fun00001 }
 230:
                    report = romeo.isThread;
                    mike = report.bind(romeo)();
 240:
                    if(!mike) { _fun00002_ip = 375; continue _fun00001 }
 246:
                    mike = romeo.isArchivedThread;
                    mike = mike.bind(romeo)();
                    if(!mike) { _fun00002_ip = 306; continue _fun00001 }
 259:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 9;
                    mike = oscar[mike];
                    oscar = report.bind(zulu)(mike);
                    report = oscar.unarchiveThread;
                    mike = false;
                    mike = report.bind(oscar)(romeo, mike);
                    SaveGenerator(address=297);
 295:
                    return mike;
 297:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 499; continue _fun00001 }
 306:
                    oscar = _closure1_slot4;
                    report = oscar.hasJoined;
                    report = report.bind(oscar)(yankee);
                    if(report) { _fun00002_ip = 375; continue _fun00001 }
 324:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 9;
                    report = options[report];
                    options = oscar.bind(zulu)(report);
                    oscar = options.joinThread;
                    report = 'Mark Unread';
                    report = oscar.bind(options)(romeo, report);
                    SaveGenerator(address=366);
 364:
                    return report;
 366:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscar) { _fun00002_ip = 375; continue _fun00001 }
 372:
                    return report;
 375:
                    options = _closure1_slot10;
                    oscar = options.log;
                    report = {};
                    report['channelId'] = yankee;
                    report['messageId'] = tango;
                    tango = 'Marking unread';
                    tango = oscar.bind(options)(tango, report);
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 10;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    options = _closure1_slot9;
                    golf = options.MESSAGE_ACK;
                    golf = golf.bind(options)(yankee, offset);
                    tango['url'] = golf;
                    options = {};
                    golf = true;
                    options['manual'] = golf;
                    verify = _closure4_slot3;
                    options['mention_count'] = verify;
                    tango['body'] = options;
                    tango['oldFormErrors'] = golf;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
 496:
                    return zulu;
 499:
                    return mike;
 502:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.shouldBadgeMessage;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'markUnread';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot10 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/markUnread.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: markUnread
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();