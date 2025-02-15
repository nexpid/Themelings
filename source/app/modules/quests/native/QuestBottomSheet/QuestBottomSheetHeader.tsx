// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
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
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'display': 'flex', 'gap': 6};
    yankee = 6;
    offset = oscar[yankee];
    offset = romeo.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingHorizontal'] = offset;
    offset = oscar[yankee];
    offset = romeo.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_8;
    verify['paddingTop'] = offset;
    tango['container'] = verify;
    verify = {'alignItems': 'center', 'flexDirection': 'row'};
    offset = 'center';
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_8;
    verify['paddingHorizontal'] = yankee;
    tango['containerWithActionSheet'] = verify;
    verify = {};
    verify['textAlign'] = offset;
    tango['title'] = verify;
    verify = {'textAlign': 'left', 'flex': 1};
    tango['titleWithActionSheet'] = verify;
    verify = {'flexGrow': 0, 'flexShrink': 0};
    tango['actionSheetButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: QuestBottomSheetHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.quest;
            mike = entity.step;
            oscar = entity.withActionSheet;
            tango = undefined;
            if(!(oscar === tango)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            oscar = false;
 29:
            entity = _closure1_slot9;
            offset = entity.bind(tango)();
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 15;
            entity = golf[entity];
            report = report.bind(tango)(entity);
            entity = report.useActionSheetPressHandler;
            foxtrot = entity.bind(report)(zulu);
            entity = function(argFoo, argBar) { // Original name: useHeaderCopy
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = argFoo;
                    yankee = argBar;
                    var _closure3_slot0 = tango;
                    var _closure3_slot1 = yankee;
                    report = tango.userStatus;
                    zulu = null;
                    oscar = zulu == report;
                    golf = undefined;
                    mike = undefined;
                    if(oscar) { _fun00004_ip = 41; continue _fun00003 }
 35:
                    mike = report.completedAt;
 41:
                    foxtrot = zulu != mike;
                    var _closure3_slot2 = foxtrot;
                    mike = tango.config;
                    mike = mike.messages;
                    options = mike.gameTitle;
                    var _closure3_slot3 = options;
                    report = _closure1_slot0;
                    backup = _closure1_slot2;
                    zulu = 7;
                    oscar = backup[zulu];
                    verify = report.bind(golf)(oscar);
                    oscar = verify.useQuestTaskDetails;
                    oscar = oscar.bind(verify)(tango);
                    offset = oscar.taskType;
                    verify = 8;
                    verify = backup[verify];
                    verify = report.bind(golf)(verify);
                    verify = verify.FirstPartyQuestTaskTypes;
                    verify = verify.WATCH_VIDEO;
                    romeo = offset === verify;
                    var _closure3_slot4 = romeo;
                    zulu = backup[zulu];
                    verify = report.bind(golf)(zulu);
                    zulu = verify.useTaskPlatformScreen;
                    offset = zulu.bind(verify)(tango, oscar);
                    verify = _closure1_slot3;
                    zulu = 1;
                    verify = verify.bind(golf)(offset, zulu);
                    zulu = 0;
                    offset = verify[zulu];
                    var _closure3_slot5 = offset;
                    sizing = _closure1_slot4;
                    kilo = sizing.useMemo;
                    verify = new Array(1);
                    verify[0] = tango;
                    zulu = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 9;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        zulu = entity.SharedQuestFields;
                        mike = zulu.build;
                        entity = _closure3_slot0;
                        entity = entity.config;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = kilo.bind(sizing)(zulu, verify);
                    oscar = oscar.targetMinutes;
                    var _closure3_slot6 = oscar;
                    kilo = sizing.useMemo;
                    verify = new Array(1);
                    verify[0] = tango;
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hasStreamOnDesktopTask;
                        entity = {};
                        tango = _closure3_slot0;
                        entity['quest'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = kilo.bind(sizing)(tango, verify);
                    var _closure3_slot7 = verify;
                    tango = 11;
                    tango = backup[tango];
                    golf = report.bind(golf)(tango);
                    report = golf.useIsQuestBarCopySimplificationEnabled;
                    tango = {};
                    backup = _closure1_slot6;
                    backup = backup.QUESTS_BAR_MOBILE;
                    tango['location'] = backup;
                    report = report.bind(golf)(tango);
                    var _closure3_slot8 = report;
                    zulu = zulu.defaultReward;
                    zulu = zulu.messages;
                    if(report) { _fun00004_ip = 322; continue _fun00003 }
 314:
                    golf = zulu.nameWithArticle;
                    _fun00004_ip = 327; continue _fun00003;
 322:
                    golf = zulu.name;
 327:
                    var _closure3_slot9 = golf;
                    tango = _closure1_slot4;
                    zulu = tango.useMemo;
                    mike = new Array(9);
                    mike[0] = foxtrot;
                    mike[1] = romeo;
                    mike[2] = yankee;
                    mike[3] = offset;
                    mike[4] = verify;
                    mike[5] = options;
                    mike[6] = golf;
                    mike[7] = oscar;
                    mike[8] = report;
                    entity = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = _closure3_slot2;
                            if(entity) { _fun00006_ip = 596; continue _fun00005 }
 16:
                            entity = _closure3_slot4;
                            if(entity) { _fun00006_ip = 525; continue _fun00005 }
 26:
                            zulu = _closure3_slot1;
                            tango = _closure1_slot0;
                            entity = _closure1_slot2;
                            report = 13;
                            entity = entity[report];
                            options = undefined;
                            entity = tango.bind(options)(entity);
                            entity = entity.QuestBottomSheetStep;
                            entity = entity.TASK_SELECT;
                            if(!(zulu !== entity)) { _fun00006_ip = 468; continue _fun00005 }
 71:
                            zulu = _closure3_slot1;
                            tango = _closure1_slot0;
                            entity = _closure1_slot2;
                            entity = entity[report];
                            entity = tango.bind(options)(entity);
                            entity = entity.QuestBottomSheetStep;
                            entity = entity.CONSOLE_CONNECT;
                            if(!(zulu !== entity)) { _fun00006_ip = 411; continue _fun00005 }
 111:
                            entity = _closure3_slot8;
                            if(entity) { _fun00006_ip = 342; continue _fun00005 }
 121:
                            zulu = _closure3_slot5;
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 14;
                            entity = report[entity];
                            entity = tango.bind(options)(entity);
                            entity = entity.TaskPlatformScreen;
                            entity = entity.DESKTOP;
                            if(!(zulu === entity)) { _fun00006_ip = 168; continue _fun00005 }
 161:
                            entity = _closure3_slot7;
                            if(entity) { _fun00006_ip = 255; continue _fun00005 }
 168:
                            zulu = _closure1_slot0;
                            oscar = _closure1_slot2;
                            entity = 12;
                            tango = oscar[entity];
                            tango = zulu.bind(options)(tango);
                            report = tango.intl;
                            tango = report.formatToPlainString;
                            entity = oscar[entity];
                            entity = zulu.bind(options)(entity);
                            entity = entity.t;
                            zulu = entity.NIimTk;
                            entity = {};
                            oscar = _closure3_slot3;
                            entity['gameTitle'] = oscar;
                            oscar = _closure3_slot9;
                            entity['rewardNameWithArticle'] = oscar;
                            oscar = _closure3_slot6;
                            entity['targetMinutes'] = oscar;
                            entity = tango.bind(report)(zulu, entity);
                            _fun00006_ip = 340; continue _fun00005;
 255:
                            tango = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 12;
                            report = verify[zulu];
                            report = tango.bind(options)(report);
                            oscar = report.intl;
                            report = oscar.formatToPlainString;
                            zulu = verify[zulu];
                            zulu = tango.bind(options)(zulu);
                            zulu = zulu.t;
                            tango = zulu.hkJ+Gh;
                            zulu = {};
                            verify = _closure3_slot3;
                            zulu['gameTitle'] = verify;
                            verify = _closure3_slot9;
                            zulu['questReward'] = verify;
                            verify = _closure3_slot6;
                            zulu['streamingDurationRequirement'] = verify;
                            entity = report.bind(oscar)(tango, zulu);
 340:
                            _fun00006_ip = 409; continue _fun00005;
 342:
                            tango = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 12;
                            report = verify[zulu];
                            report = tango.bind(options)(report);
                            oscar = report.intl;
                            report = oscar.formatToPlainString;
                            zulu = verify[zulu];
                            zulu = tango.bind(options)(zulu);
                            zulu = zulu.t;
                            tango = zulu.W8/b3d;
                            zulu = {};
                            verify = _closure3_slot9;
                            zulu['rewardName'] = verify;
                            entity = report.bind(oscar)(tango, zulu);
 409:
                            _fun00006_ip = 466; continue _fun00005;
 411:
                            oscar = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 12;
                            tango = verify[zulu];
                            tango = oscar.bind(options)(tango);
                            report = tango.intl;
                            tango = report.string;
                            zulu = verify[zulu];
                            zulu = oscar.bind(options)(zulu);
                            zulu = zulu.t;
                            zulu = zulu.svdwbG;
                            entity = tango.bind(report)(zulu);
 466:
                            _fun00006_ip = 523; continue _fun00005;
 468:
                            oscar = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 12;
                            tango = verify[zulu];
                            tango = oscar.bind(options)(tango);
                            report = tango.intl;
                            tango = report.string;
                            zulu = verify[zulu];
                            zulu = oscar.bind(options)(zulu);
                            zulu = zulu.t;
                            zulu = zulu.drVw4e;
                            entity = tango.bind(report)(zulu);
 523:
                            _fun00006_ip = 594; continue _fun00005;
 525:
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 12;
                            report = verify[zulu];
                            tango = undefined;
                            report = options.bind(tango)(report);
                            oscar = report.intl;
                            report = oscar.formatToPlainString;
                            zulu = verify[zulu];
                            zulu = options.bind(tango)(zulu);
                            zulu = zulu.t;
                            tango = zulu.IpoqqK;
                            zulu = {};
                            golf = _closure3_slot9;
                            zulu['questReward'] = golf;
                            entity = report.bind(oscar)(tango, zulu);
 594:
                            _fun00006_ip = 653; continue _fun00005;
 596:
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            mike = 12;
                            zulu = golf[mike];
                            report = undefined;
                            zulu = oscar.bind(report)(zulu);
                            tango = zulu.intl;
                            zulu = tango.string;
                            mike = golf[mike];
                            mike = oscar.bind(report)(mike);
                            mike = mike.t;
                            mike = mike.ij5E//;
                            entity = zulu.bind(tango)(mike);
 653:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            yankee = entity.bind(tango)(zulu, mike);
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            golf = offset.container;
            report = new Array(2);
            report[0] = golf;
            golf = oscar;
            if(!oscar) { _fun00002_ip = 121; continue _fun00001 }
 115:
            golf = offset.containerWithActionSheet;
 121:
            report[1] = golf;
            entity['style'] = report;
            report = null;
            golf = report != yankee;
            if(!golf) { _fun00002_ip = 220; continue _fun00001 }
 138:
            verify = _closure1_slot7;
            options = _closure1_slot0;
            backup = _closure1_slot2;
            report = 16;
            report = backup[report];
            report = options.bind(tango)(report);
            options = report.Text;
            report = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            kilo = offset.title;
            backup = new Array(2);
            backup[0] = kilo;
            kilo = oscar;
            if(!oscar) { _fun00002_ip = 202; continue _fun00001 }
 196:
            kilo = offset.titleWithActionSheet;
 202:
            backup[1] = kilo;
            report['style'] = backup;
            report['children'] = yankee;
            golf = verify.bind(tango)(options, report);
 220:
            report = new Array(2);
            report[0] = golf;
            if(!oscar) { _fun00002_ip = 352; continue _fun00001 }
 231:
            verify = _closure1_slot7;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            golf = 17;
            golf = backup[golf];
            golf = yankee.bind(tango)(golf);
            options = golf.PressableOpacity;
            golf = {};
            kilo = 'button';
            golf['accessibilityRole'] = kilo;
            golf['onPress'] = foxtrot;
            offset = offset.actionSheetButton;
            golf['style'] = offset;
            offset = 18;
            offset = backup[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.MoreHorizontalIcon;
            offset = {};
            foxtrot = _closure1_slot1;
            romeo = 6;
            romeo = backup[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.colors;
            romeo = romeo.INTERACTIVE_NORMAL;
            offset['color'] = romeo;
            offset = verify.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 352:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();