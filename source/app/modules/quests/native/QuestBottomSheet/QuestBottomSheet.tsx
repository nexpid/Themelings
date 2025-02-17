// app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    backup = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: QuestBottomSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.questId;
            mike = entity.initialStep;
            entity = _closure1_slot14;
            tango = undefined;
            verify = entity.bind(tango)();
            entity = _closure1_slot16;
            entity = entity.bind(tango)(zulu, mike);
            backup = entity.quest;
            yankee = entity.step;
            kilo = entity.defibrillator;
            result = entity.stepActions;
            foxtrot = entity.handleTaskSelect;
            romeo = entity.showMicrophone;
            mike = _closure1_slot0;
            source = _closure1_slot2;
            entity = 13;
            entity = source[entity];
            zulu = mike.bind(tango)(entity);
            entity = zulu.useQuestTaskDetails;
            entity = entity.bind(zulu)(backup);
            golf = entity.taskType;
            entity = 18;
            entity = source[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.FirstPartyQuestTaskTypes;
            oscar = entity.WATCH_VIDEO;
            entity = _closure1_slot5;
            sizing = 0;
            report = entity.bind(tango)(sizing);
            zulu = _closure1_slot3;
            entity = 2;
            zulu = zulu.bind(tango)(report, entity);
            output = zulu[sizing];
            entity = 1;
            entity = zulu[entity];
            var _closure2_slot0 = entity;
            zulu = _closure1_slot10;
            entity = 19;
            entity = source[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            update = _closure1_slot10;
            offset = _closure1_slot1;
            report = 20;
            report = source[report];
            offset = offset.bind(tango)(report);
            report = {};
            report['quest'] = backup;
            report['step'] = yankee;
            report = update.bind(tango)(offset, report);
            entity['header'] = report;
            report = null;
            if(!(golf !== oscar)) { _fun00002_ip = 345; continue _fun00001 }
 248:
            offset = _closure1_slot10;
            golf = _closure1_slot1;
            update = _closure1_slot2;
            oscar = 21;
            oscar = update[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['quest'] = backup;
            oscar['step'] = yankee;
            update = kilo.isActive;
            oscar['isDefibrilating'] = update;
            echo = function(argFoo) { // Original name: onLayout
                zulu = _closure2_slot0;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike = entity.height;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            oscar['onLayout'] = echo;
            echo = result.onBack;
            oscar['onBack'] = echo;
            echo = kilo.start;
            oscar['onDefib'] = echo;
            result = result.onNext;
            oscar['onConnectConsoleNext'] = result;
            report = offset.bind(tango)(golf, oscar);
 345:
            entity['footer'] = report;
            report = true;
            entity['startExpanded'] = report;
            golf = _closure1_slot10;
            oscar = _closure1_slot6;
            report = {};
            offset = verify.contentContainer;
            verify = new Array(2);
            verify[0] = offset;
            offset = {};
            result = _closure1_slot13;
            result = result.TASK_SELECT;
            sizing = 0;
            if(!(yankee !== result)) { _fun00002_ip = 402; continue _fun00001 }
 399:
            sizing = output;
 402:
            offset['paddingBottom'] = sizing;
            verify[1] = offset;
            report['style'] = verify;
            offset = _closure1_slot10;
            verify = _closure1_slot17;
            options = {};
            options['defibrillator'] = kilo;
            options['quest'] = backup;
            options['handleTaskSelect'] = foxtrot;
            options['showMicrophone'] = romeo;
            options['step'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tango = function(argFoo, argBar) { // Original name: useEnrolledQuestContentProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 16;
            zulu = report[zulu];
            offset = undefined;
            options = tango.bind(offset)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot7;
                mike = zulu.getQuest;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(options)(oscar, zulu);
            var _closure2_slot1 = golf;
            zulu = 22;
            zulu = report[zulu];
            oscar = tango.bind(offset)(zulu);
            zulu = oscar.useTrackQuestContentClickedWithImpression;
            zulu = zulu.bind(oscar)();
            var _closure2_slot2 = zulu;
            zulu = 8;
            zulu = report[zulu];
            report = tango.bind(offset)(zulu);
            tango = report.getQuestLogger;
            zulu = {};
            zulu['quest'] = golf;
            oscar = _closure1_slot8;
            oscar = oscar.QUEST_HOME_MOBILE;
            zulu['location'] = oscar;
            report = tango.bind(report)(zulu);
            yankee = null;
            if(!(yankee == golf)) { _fun00004_ip = 190; continue _fun00003 }
 144:
            tango = report.error;
            zulu = 'Quest not found in store, closing bottom sheet';
            zulu = tango.bind(report)(zulu);
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 23;
            zulu = report[zulu];
            tango = tango.bind(offset)(zulu);
            zulu = tango.hideActionSheet;
            zulu = zulu.bind(tango)();
 190:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 13;
            report = oscar[zulu];
            options = tango.bind(offset)(report);
            report = options.useQuestTaskDetails;
            report = report.bind(options)(golf);
            options = oscar[zulu];
            verify = tango.bind(offset)(options);
            options = verify.useIsQuestProgressing;
            verify = options.bind(verify)(golf);
            zulu = oscar[zulu];
            tango = tango.bind(offset)(zulu);
            zulu = tango.useTaskPlatformScreen;
            report = zulu.bind(tango)(golf, report);
            tango = _closure1_slot3;
            zulu = 3;
            tango = tango.bind(offset)(report, zulu);
            zulu = 0;
            options = tango[zulu];
            oscar = 2;
            tango = tango[oscar];
            var _closure2_slot3 = tango;
            report = function(argFoo, argBar) { // Original name: useSteps
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    verify = argFoo;
                    var _closure3_slot0 = verify;
                    tango = verify.userStatus;
                    report = null;
                    oscar = report == tango;
                    zulu = undefined;
                    mike = undefined;
                    if(oscar) { _fun00006_ip = 34; continue _fun00005 }
 28:
                    mike = tango.completedAt;
 34:
                    options = report != mike;
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 13;
                    oscar = offset[tango];
                    yankee = golf.bind(zulu)(oscar);
                    oscar = yankee.useConnectedAccounts;
                    oscar = oscar.bind(yankee)();
                    oscar = oscar.xboxAndPlaystationAccounts;
                    var _closure3_slot1 = oscar;
                    foxtrot = _closure1_slot4;
                    romeo = foxtrot.useMemo;
                    yankee = new Array(2);
                    yankee[0] = verify;
                    yankee[1] = oscar;
                    oscar = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.supportedConsoles;
                        entity = _closure3_slot0;
                        zulu = mike.bind(zulu)(entity);
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            zulu = _closure3_slot1;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.type;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = romeo.bind(foxtrot)(oscar, yankee);
                    yankee = offset[tango];
                    romeo = golf.bind(zulu)(yankee);
                    yankee = romeo.useQuestTaskDetails;
                    yankee = yankee.bind(romeo)(verify);
                    romeo = offset[tango];
                    foxtrot = golf.bind(zulu)(romeo);
                    romeo = foxtrot.useIsQuestProgressing;
                    romeo = romeo.bind(foxtrot)(verify);
                    tango = offset[tango];
                    golf = golf.bind(zulu)(tango);
                    tango = golf.useTaskPlatformScreen;
                    verify = tango.bind(golf)(verify, yankee);
                    golf = _closure1_slot3;
                    tango = 3;
                    tango = golf.bind(zulu)(verify, tango);
                    verify = 0;
                    backup = tango[verify];
                    var _closure3_slot2 = backup;
                    kilo = 1;
                    offset = tango[kilo];
                    var _closure3_slot3 = offset;
                    sizing = 2;
                    tango = tango[sizing];
                    var _closure3_slot4 = tango;
                    output = _closure1_slot4;
                    foxtrot = output.useState;
                    golf = oscar.length;
                    golf = verify === golf;
                    if(!golf) { _fun00006_ip = 245; continue _fun00005 }
 242:
                    golf = !options;
 245:
                    if(!golf) { _fun00006_ip = 284; continue _fun00005 }
 248:
                    echo = _closure1_slot0;
                    update = _closure1_slot2;
                    result = 15;
                    result = update[result];
                    result = echo.bind(zulu)(result);
                    result = result.TaskPlatformScreen;
                    result = result.CONSOLE;
                    golf = backup === result;
 284:
                    if(golf) { _fun00006_ip = 304; continue _fun00005 }
 287:
                    result = _closure1_slot13;
                    echo = result.CONSOLE_CONNECT;
                    result = argBar;
                    golf = result === echo;
 304:
                    foxtrot = foxtrot.bind(output)(golf);
                    golf = _closure1_slot3;
                    golf = golf.bind(zulu)(foxtrot, sizing);
                    foxtrot = golf[verify];
                    var _closure3_slot5 = foxtrot;
                    golf = golf[kilo];
                    var _closure3_slot6 = golf;
                    if(romeo) { _fun00006_ip = 348; continue _fun00005 }
 338:
                    yankee = yankee.progressSeconds;
                    romeo = yankee > verify;
 348:
                    var _closure3_slot7 = romeo;
                    oscar = oscar.length;
                    oscar = verify !== oscar;
                    if(oscar) { _fun00006_ip = 367; continue _fun00005 }
 364:
                    oscar = options;
 367:
                    if(oscar) { _fun00006_ip = 406; continue _fun00005 }
 370:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 15;
                    options = yankee[options];
                    options = verify.bind(zulu)(options);
                    options = options.TaskPlatformScreen;
                    options = options.CONSOLE;
                    oscar = backup !== options;
 406:
                    if(oscar) { _fun00006_ip = 412; continue _fun00005 }
 409:
                    oscar = foxtrot;
 412:
                    if(oscar) { _fun00006_ip = 422; continue _fun00005 }
 415:
                    oscar = true;
                    oscar = golf.bind(zulu)(oscar);
 422:
                    options = _closure1_slot4;
                    golf = options.useCallback;
                    oscar = new Array(1);
                    oscar[0] = tango;
                    tango = function() {
                        tango = _closure3_slot6;
                        entity = undefined;
                        zulu = false;
                        zulu = tango.bind(entity)(zulu);
                        zulu = _closure3_slot4;
                        mike = null;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = golf.bind(options)(tango, oscar);
                    var _closure3_slot8 = tango;
                    oscar = function() { // Original name: showConsoleSelect
                        zulu = _closure3_slot6;
                        mike = undefined;
                        entity = true;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    var _closure3_slot9 = oscar;
                    oscar = function() { // Original name: hideConsoleSelect
                        zulu = _closure3_slot6;
                        mike = undefined;
                        entity = false;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    var _closure3_slot10 = oscar;
                    verify = _closure1_slot4;
                    options = verify.useMemo;
                    golf = function() {
                        mike = {};
                        entity = _closure1_slot13;
                        entity = entity.TASK_STATUS;
                        mike['type'] = entity;
                        entity = true;
                        mike['shouldShow'] = entity;
                        entity = new Array(1);
                        entity[0] = mike;
                        return entity;
                    };
                    oscar = new Array(0);
                    options = options.bind(verify)(golf, oscar);
                    var _closure3_slot11 = options;
                    yankee = _closure1_slot4;
                    verify = yankee.useMemo;
                    golf = new Array(2);
                    golf[0] = foxtrot;
                    golf[1] = romeo;
                    oscar = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            mike = {};
                            entity = _closure1_slot13;
                            entity = entity.CONSOLE_CONNECT;
                            mike['type'] = entity;
                            entity = _closure3_slot5;
                            mike['shouldShow'] = entity;
                            entity = _closure3_slot10;
                            mike['onNext'] = entity;
                            entity = new Array(2);
                            entity[0] = mike;
                            mike = {};
                            zulu = _closure1_slot13;
                            zulu = zulu.TASK_STATUS;
                            mike['type'] = zulu;
                            zulu = true;
                            mike['shouldShow'] = zulu;
                            report = _closure3_slot7;
                            zulu = undefined;
                            if(report) { _fun00008_ip = 84; continue _fun00007 }
 80:
                            zulu = _closure3_slot9;
 84:
                            mike['onBack'] = zulu;
                            entity[1] = mike;
                            return entity;
                        }
                    };
                    golf = verify.bind(yankee)(oscar, golf);
                    var _closure3_slot12 = golf;
                    yankee = _closure1_slot4;
                    verify = yankee.useMemo;
                    oscar = new Array(4);
                    oscar[0] = backup;
                    oscar[1] = foxtrot;
                    oscar[2] = romeo;
                    oscar[3] = tango;
                    tango = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            mike = {};
                            entity = _closure1_slot13;
                            entity = entity.TASK_SELECT;
                            mike['type'] = entity;
                            oscar = _closure3_slot2;
                            golf = _closure1_slot0;
                            zulu = _closure1_slot2;
                            verify = 15;
                            entity = zulu[verify];
                            options = undefined;
                            entity = golf.bind(options)(entity);
                            entity = entity.TaskPlatformScreen;
                            entity = entity.SELECT;
                            entity = oscar === entity;
                            mike['shouldShow'] = entity;
                            entity = new Array(3);
                            entity[0] = mike;
                            mike = {};
                            oscar = _closure1_slot13;
                            oscar = oscar.CONSOLE_CONNECT;
                            mike['type'] = oscar;
                            oscar = _closure3_slot2;
                            zulu = zulu[verify];
                            zulu = golf.bind(options)(zulu);
                            zulu = zulu.TaskPlatformScreen;
                            zulu = zulu.CONSOLE;
                            zulu = oscar === zulu;
                            if(!zulu) { _fun00010_ip = 129; continue _fun00009 }
 125:
                            zulu = _closure3_slot5;
 129:
                            mike['shouldShow'] = zulu;
                            zulu = _closure3_slot8;
                            mike['onBack'] = zulu;
                            zulu = _closure3_slot10;
                            mike['onNext'] = zulu;
                            entity[1] = mike;
                            mike = {};
                            zulu = _closure1_slot13;
                            zulu = zulu.TASK_STATUS;
                            mike['type'] = zulu;
                            zulu = true;
                            mike['shouldShow'] = zulu;
                            oscar = _closure3_slot7;
                            zulu = undefined;
                            if(oscar) { _fun00010_ip = 238; continue _fun00009 }
 188:
                            oscar = _closure3_slot2;
                            golf = _closure1_slot0;
                            tango = _closure1_slot2;
                            tango = tango[verify];
                            tango = golf.bind(options)(tango);
                            tango = tango.TaskPlatformScreen;
                            tango = tango.CONSOLE;
                            if(!(oscar !== tango)) { _fun00010_ip = 231; continue _fun00009 }
 225:
                            tango = _closure3_slot8;
                            _fun00010_ip = 235; continue _fun00009;
 231:
                            tango = _closure3_slot9;
 235:
                            zulu = tango;
 238:
                            mike['onBack'] = zulu;
                            entity[2] = mike;
                            return entity;
                        }
                    };
                    verify = verify.bind(yankee)(tango, oscar);
                    var _closure3_slot13 = verify;
                    oscar = _closure1_slot4;
                    tango = oscar.useMemo;
                    mike = new Array(4);
                    mike[0] = offset;
                    mike[1] = verify;
                    mike[2] = options;
                    mike[3] = golf;
                    entity = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            mike = _closure3_slot3;
                            mike = mike.length;
                            zulu = 1;
                            tango = zulu === mike;
                            if(!tango) { _fun00012_ip = 49; continue _fun00011 }
 22:
                            oscar = _closure3_slot3;
                            report = oscar.includes;
                            mike = _closure1_slot9;
                            mike = mike.DESKTOP;
                            tango = report.bind(oscar)(mike);
 49:
                            mike = _closure3_slot3;
                            mike = mike.length;
                            mike = zulu === mike;
                            if(!mike) { _fun00012_ip = 92; continue _fun00011 }
 65:
                            oscar = _closure3_slot3;
                            report = oscar.includes;
                            zulu = _closure1_slot9;
                            zulu = zulu.CONSOLE;
                            mike = report.bind(oscar)(zulu);
 92:
                            zulu = _closure3_slot13;
                            if(tango) { _fun00012_ip = 108; continue _fun00011 }
 99:
                            if(!mike) { _fun00012_ip = 112; continue _fun00011 }
 102:
                            zulu = _closure3_slot12;
                            _fun00012_ip = 112; continue _fun00011;
 108:
                            zulu = _closure3_slot11;
 112:
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                entity = entity.shouldShow;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            mike = null;
                            tango = zulu;
                            if(!(mike == entity)) { _fun00012_ip = 157; continue _fun00011 }
 140:
                            zulu = tango.at;
                            mike = -1;
                            entity = zulu.bind(tango)(mike);
 157:
                            return entity;
                        }
                    };
                    tango = tango.bind(oscar)(entity, mike);
                    mike = tango.type;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = {};
                    golf = report == tango;
                    oscar = undefined;
                    if(golf) { _fun00006_ip = 664; continue _fun00005 }
 658:
                    oscar = tango.onBack;
 664:
                    mike['onBack'] = oscar;
                    report = report == tango;
                    zulu = undefined;
                    if(report) { _fun00006_ip = 684; continue _fun00005 }
 678:
                    zulu = tango.onNext;
 684:
                    mike['onNext'] = zulu;
                    entity[1] = mike;
                    return entity;
                }
            };
            tango = argBar;
            report = report.bind(offset)(golf, tango);
            tango = _closure1_slot3;
            tango = tango.bind(offset)(report, oscar);
            report = tango[zulu];
            zulu = 1;
            tango = tango[zulu];
            zulu = function(argFoo) { // Original name: useDefibrillator
                offset = argFoo;
                var _closure3_slot0 = offset;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 8;
                zulu = report[zulu];
                romeo = undefined;
                report = tango.bind(romeo)(zulu);
                tango = report.getQuestLogger;
                zulu = {};
                zulu['quest'] = offset;
                oscar = _closure1_slot8;
                oscar = oscar.QUEST_HOME_MOBILE;
                zulu['location'] = oscar;
                verify = tango.bind(report)(zulu);
                var _closure3_slot1 = verify;
                tango = _closure1_slot5;
                zulu = new Array(0);
                tango = tango.bind(romeo)(zulu);
                zulu = _closure1_slot3;
                yankee = 2;
                report = zulu.bind(romeo)(tango, yankee);
                zulu = 0;
                tango = report[zulu];
                oscar = 1;
                golf = report[oscar];
                var _closure3_slot2 = golf;
                options = _closure1_slot5;
                report = false;
                options = options.bind(romeo)(report);
                report = _closure1_slot3;
                report = report.bind(romeo)(options, yankee);
                zulu = report[zulu];
                options = report[oscar];
                var _closure3_slot3 = options;
                oscar = _closure1_slot4;
                report = oscar.useCallback;
                mike = new Array(4);
                mike[0] = offset;
                mike[1] = verify;
                mike[2] = options;
                mike[3] = golf;
                entity = function() {
                    report = _closure3_slot3;
                    entity = undefined;
                    tango = true;
                    tango = report.bind(entity)(tango);
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.manuallyStartConsoleQuest;
                    zulu = _closure3_slot0;
                    zulu = zulu.id;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.errorHints;
                        mike = _closure3_slot2;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    tango = report.catch;
                    zulu = function(argFoo) {
                        tango = _closure3_slot2;
                        entity = undefined;
                        zulu = new Array(0);
                        zulu = tango.bind(entity)(zulu);
                        report = _closure3_slot1;
                        tango = report.error;
                        zulu = 'Failed to start console quest';
                        mike = argFoo;
                        mike = tango.bind(report)(zulu, mike);
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        mike = 10;
                        mike = golf[mike];
                        tango = oscar.bind(entity)(mike);
                        zulu = tango.open;
                        mike = {};
                        options = 'START_DEFIBRILLATOR_ERROR';
                        mike['key'] = options;
                        offset = _closure1_slot0;
                        report = 11;
                        options = golf[report];
                        options = offset.bind(entity)(options);
                        verify = options.intl;
                        options = verify.string;
                        report = golf[report];
                        report = offset.bind(entity)(report);
                        report = report.t;
                        report = report.CKsXk5;
                        report = options.bind(verify)(report);
                        mike['content'] = report;
                        report = 12;
                        report = golf[report];
                        report = oscar.bind(entity)(report);
                        mike['icon'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.finally;
                    mike = function() {
                        zulu = _closure3_slot3;
                        mike = undefined;
                        entity = false;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = report.bind(oscar)(entity, mike);
                entity = {};
                entity['errorHints'] = tango;
                entity['isActive'] = zulu;
                entity['start'] = mike;
                return entity;
            };
            oscar = zulu.bind(offset)(golf);
            romeo = golf.userStatus;
            foxtrot = yankee == romeo;
            zulu = undefined;
            if(foxtrot) { _fun00004_ip = 362; continue _fun00003 }
 356:
            zulu = romeo.completedAt;
 362:
            yankee = yankee != zulu;
            zulu = !yankee;
            if(yankee) { _fun00004_ip = 375; continue _fun00003 }
 372:
            zulu = !verify;
 375:
            if(!zulu) { _fun00004_ip = 414; continue _fun00003 }
 378:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 15;
            entity = yankee[entity];
            entity = verify.bind(offset)(entity);
            entity = entity.TaskPlatformScreen;
            entity = entity.CONSOLE;
            zulu = options === entity;
 414:
            entity = {};
            entity['quest'] = golf;
            entity['defibrillator'] = oscar;
            entity['step'] = report;
            entity['stepActions'] = tango;
            entity['showMicrophone'] = zulu;
            mike = function(argFoo) { // Original name: handleTaskSelect
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = argFoo;
                    report = _closure2_slot2;
                    tango = {};
                    entity = _closure2_slot1;
                    entity = entity.id;
                    tango['questId'] = entity;
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 15;
                    oscar = oscar[entity];
                    entity = undefined;
                    oscar = options.bind(entity)(oscar);
                    oscar = oscar.QuestContent;
                    oscar = oscar.QUEST_BOTTOM_SHEET;
                    tango['questContent'] = oscar;
                    oscar = _closure1_slot9;
                    oscar = oscar.CONSOLE;
                    if(!(zulu !== oscar)) { _fun00014_ip = 164; continue _fun00013 }
 82:
                    oscar = _closure1_slot9;
                    oscar = oscar.DESKTOP;
                    if(!(zulu !== oscar)) { _fun00014_ip = 130; continue _fun00013 }
 96:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscar = 22;
                    oscar = verify[oscar];
                    oscar = options.bind(entity)(oscar);
                    oscar = oscar.QuestContentCTA;
                    oscar = oscar.DESELECT_PLATFORM;
                    _fun00014_ip = 162; continue _fun00013;
 130:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 22;
                    options = offset[options];
                    options = verify.bind(entity)(options);
                    options = options.QuestContentCTA;
                    oscar = options.SELECT_DESKTOP_PLATFORM;
 162:
                    _fun00014_ip = 196; continue _fun00013;
 164:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 22;
                    golf = verify[golf];
                    golf = options.bind(entity)(golf);
                    golf = golf.QuestContentCTA;
                    oscar = golf.SELECT_CONSOLE_PLATFORM;
 196:
                    tango['questContentCTA'] = oscar;
                    tango = report.bind(entity)(tango);
                    mike = _closure2_slot3;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            entity['handleTaskSelect'] = mike;
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    mike = function(argFoo) { // Original name: QuestBottomSheetContent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            result = entity.defibrillator;
            oscar = entity.quest;
            romeo = entity.handleTaskSelect;
            backup = entity.showMicrophone;
            options = entity.step;
            tango = _closure1_slot11;
            zulu = _closure1_slot12;
            mike = {};
            entity = _closure1_slot13;
            entity = entity.TASK_SELECT;
            report = options === entity;
            if(!report) { _fun00016_ip = 102; continue _fun00015 }
 63:
            yankee = _closure1_slot10;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 24;
            entity = offset[entity];
            offset = undefined;
            verify = verify.bind(offset)(entity);
            entity = {};
            entity['onTaskSelect'] = romeo;
            report = yankee.bind(offset)(verify, entity);
 102:
            entity = new Array(4);
            entity[0] = report;
            report = _closure1_slot13;
            report = report.CONSOLE_CONNECT;
            report = options === report;
            if(!report) { _fun00016_ip = 171; continue _fun00015 }
 127:
            romeo = _closure1_slot10;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 25;
            verify = yankee[verify];
            yankee = undefined;
            offset = offset.bind(yankee)(verify);
            verify = {};
            verify['quest'] = oscar;
            verify['step'] = options;
            report = romeo.bind(yankee)(offset, verify);
 171:
            entity[1] = report;
            report = _closure1_slot13;
            report = report.TASK_STATUS;
            report = options === report;
            if(!report) { _fun00016_ip = 298; continue _fun00015 }
 192:
            romeo = _closure1_slot11;
            yankee = _closure1_slot6;
            offset = {};
            sizing = _closure1_slot10;
            kilo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 26;
            foxtrot = foxtrot[verify];
            verify = undefined;
            kilo = kilo.bind(verify)(foxtrot);
            foxtrot = {};
            foxtrot['quest'] = oscar;
            kilo = sizing.bind(verify)(kilo, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = kilo;
            if(!backup) { _fun00016_ip = 284; continue _fun00015 }
 252:
            output = _closure1_slot10;
            sizing = _closure1_slot19;
            kilo = {};
            kilo['quest'] = oscar;
            result = result.errorHints;
            kilo['errorHints'] = result;
            backup = output.bind(verify)(sizing, kilo);
 284:
            foxtrot[1] = backup;
            offset['children'] = foxtrot;
            report = romeo.bind(verify)(yankee, offset);
 298:
            entity[2] = report;
            report = _closure1_slot13;
            report = report.TASK_STATUS;
            report = options === report;
            if(!report) { _fun00016_ip = 325; continue _fun00015 }
 319:
            report = oscar.preview;
 325:
            if(!report) { _fun00016_ip = 351; continue _fun00015 }
 328:
            verify = _closure1_slot10;
            options = _closure1_slot18;
            golf = {};
            golf['quest'] = oscar;
            oscar = undefined;
            report = verify.bind(oscar)(options, golf);
 351:
            entity[3] = report;
            mike['children'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot17 = mike;
    entity = function(argFoo) { // Original name: PreviewControls
        entity = argFoo;
        options = entity.quest;
        entity = _closure1_slot14;
        tango = undefined;
        oscar = entity.bind(tango)();
        zulu = _closure1_slot10;
        mike = _closure1_slot6;
        entity = {};
        oscar = oscar.previewContainer;
        entity['style'] = oscar;
        golf = _closure1_slot10;
        oscar = _closure1_slot1;
        verify = _closure1_slot2;
        report = 27;
        report = verify[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        report['quest'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: MicrophoneUnit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            echo = entity.quest;
            golf = entity.errorHints;
            entity = _closure1_slot14;
            tango = undefined;
            offset = entity.bind(tango)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 13;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useQuestHowToHelpArticle;
            entity = entity.bind(mike)();
            mike = entity.message;
            entity = golf.length;
            report = 0;
            backup = entity > report;
            if(backup) { _fun00018_ip = 171; continue _fun00017 }
 79:
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 11;
            options = yankee[entity];
            options = zulu.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            entity = yankee[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.t;
            zulu = entity.GXqvCw;
            entity = {};
            yankee = echo.config;
            yankee = yankee.messages;
            yankee = yankee.gameTitle;
            entity['gameTitle'] = yankee;
            entity = options.bind(verify)(zulu, entity);
            options = new Array(1);
            options[0] = entity;
            _fun00018_ip = 216; continue _fun00017;
 171:
            zulu = golf.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                return entity;
            };
            control = zulu.bind(golf)(entity);
            entity = new Array(1);
            vacuum = entity;
            source = 0;
            zulu = arraySpread(vacuum, control, source);
            entity[zulu] = mike;
            mike = 1;
            mike = zulu + mike;
            options = entity;
 216:
            zulu = _closure1_slot11;
            mike = _closure1_slot6;
            entity = {};
            report = offset.microphoneUnit;
            entity['style'] = report;
            verify = _closure1_slot11;
            golf = _closure1_slot6;
            report = {};
            offset = offset.microphoneUnitHeader;
            report['style'] = offset;
            romeo = _closure1_slot10;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            offset = 28;
            offset = foxtrot[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.WarningIcon;
            offset = {};
            foxtrot = 'text-warning';
            if(!backup) { _fun00018_ip = 303; continue _fun00017 }
 297:
            foxtrot = 'text-danger';
 303:
            offset['color'] = foxtrot;
            yankee = romeo.bind(tango)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 29;
            yankee = sizing[yankee];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {'variant': 'text-md/medium', 'color': 'header-primary'};
            sizing = _closure1_slot0;
            update = _closure1_slot2;
            kilo = 11;
            output = update[kilo];
            output = sizing.bind(tango)(output);
            result = output.intl;
            if(backup) { _fun00018_ip = 426; continue _fun00017 }
 392:
            output = result.string;
            backup = update[kilo];
            backup = sizing.bind(tango)(backup);
            backup = backup.t;
            backup = backup.YstzGB;
            backup = output.bind(result)(backup);
            _fun00018_ip = 483; continue _fun00017;
 426:
            output = result.formatToPlainString;
            kilo = update[kilo];
            kilo = sizing.bind(tango)(kilo);
            kilo = kilo.t;
            sizing = kilo.28Ql29;
            kilo = {};
            echo = echo.config;
            echo = echo.messages;
            echo = echo.gameTitle;
            kilo['gameTitle'] = echo;
            backup = output.bind(result)(sizing, kilo);
 483:
            yankee['children'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            golf = verify.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            golf = options.map;
            oscar = function(argFoo, argBar) {
                report = _closure1_slot10;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 29;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.Text;
                mike = {};
                entity = 'text-sm/normal';
                mike['variant'] = entity;
                entity = argFoo;
                mike['children'] = entity;
                entity = argBar;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = backup.bind(entity)(report);
    var _closure1_slot3 = report;
    kilo = 1;
    report = verify[kilo];
    report = backup.bind(entity)(report);
    var _closure1_slot4 = report;
    report = verify[kilo];
    report = options.bind(entity)(report);
    report = report.useState;
    var _closure1_slot5 = report;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = verify[report];
    report = backup.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = verify[report];
    report = options.bind(entity)(report);
    golf = report.QuestsExperimentLocations;
    var _closure1_slot8 = golf;
    report = report.QuestTaskPlatform;
    var _closure1_slot9 = report;
    report = 5;
    golf = verify[report];
    golf = options.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot10 = golf;
    golf = verify[report];
    golf = options.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot11 = golf;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot12 = report;
    report = {};
    golf = 'TASK_SELECT';
    report['TASK_SELECT'] = golf;
    golf = 'CONSOLE_CONNECT';
    report['CONSOLE_CONNECT'] = golf;
    golf = 'TASK_STATUS';
    report['TASK_STATUS'] = golf;
    var _closure1_slot13 = report;
    golf = 6;
    golf = verify[golf];
    yankee = options.bind(entity)(golf);
    offset = yankee.createStyles;
    golf = {};
    romeo = {};
    sizing = 'flex';
    romeo['display'] = sizing;
    foxtrot = 7;
    output = verify[foxtrot];
    output = backup.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    romeo['paddingHorizontal'] = output;
    output = verify[foxtrot];
    output = backup.bind(entity)(output);
    output = output.spacing;
    output = output.PX_24;
    romeo['gap'] = output;
    golf['contentContainer'] = romeo;
    romeo = {};
    romeo['display'] = sizing;
    sizing = verify[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    romeo['gap'] = sizing;
    sizing = verify[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    sizing = -sizing;
    romeo['marginHorizontal'] = sizing;
    sizing = verify[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeo['paddingHorizontal'] = sizing;
    sizing = verify[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeo['marginTop'] = sizing;
    sizing = verify[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeo['paddingTop'] = sizing;
    romeo['borderTopWidth'] = kilo;
    kilo = verify[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BORDER_SUBTLE;
    romeo['borderTopColor'] = kilo;
    golf['microphoneUnit'] = romeo;
    romeo = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    kilo = verify[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    romeo['gap'] = kilo;
    golf['microphoneUnitHeader'] = romeo;
    romeo = {};
    kilo = 'absolute';
    romeo['position'] = kilo;
    kilo = verify[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_32;
    romeo['right'] = kilo;
    foxtrot = verify[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    romeo['top'] = foxtrot;
    foxtrot = 0.1;
    romeo['opacity'] = foxtrot;
    golf['previewContainer'] = romeo;
    golf = offset.bind(yankee)(golf);
    var _closure1_slot14 = golf;
    golf = 30;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    golf = options.bind(verify)(golf);
    oscar = function(argFoo) { // Original name: QuestBottomSheetConnected
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            mike = entity.questId;
            var _closure2_slot0 = mike;
            entity = entity.initialStep;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 16;
            entity = tango[entity];
            report = undefined;
            golf = zulu.bind(report)(entity);
            tango = golf.useStateFromStores;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getQuest;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = tango.bind(golf)(zulu, entity);
            entity = null;
            zulu = entity == golf;
            if(zulu) { _fun00020_ip = 179; continue _fun00019 }
 89:
            tango = _closure1_slot10;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 17;
            mike = verify[mike];
            mike = options.bind(report)(mike);
            zulu = mike.QuestContentImpressionTrackerNative;
            mike = {};
            offset = true;
            mike['overrideVisibility'] = offset;
            mike['questOrQuests'] = golf;
            golf = 15;
            golf = verify[golf];
            golf = options.bind(report)(golf);
            golf = golf.QuestContent;
            golf = golf.QUEST_BOTTOM_SHEET;
            mike['questContent'] = golf;
            oscar = function() { // Original name: children
                tango = _closure1_slot10;
                zulu = _closure1_slot15;
                mike = {};
                report = _closure2_slot0;
                mike['questId'] = report;
                entity = _closure2_slot1;
                mike['initialStep'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 179:
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['QuestBottomSheetStep'] = report;
    zulu['useEnrolledQuestContentProps'] = tango;
    zulu['QuestBottomSheetContent'] = mike;
    return entity;
})();