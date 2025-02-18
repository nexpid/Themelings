// app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    backup = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: QuestBottomSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.questId;
            michal = entity.initialStep;
            entity = _closure1_slot14;
            tangon = undefined;
            verify = entity.bind(tangon)();
            entity = _closure1_slot16;
            entity = entity.bind(tangon)(zuuluu, michal);
            backup = entity.quest;
            yankee = entity.step;
            kiloes = entity.defibrillator;
            result = entity.stepActions;
            foxtra = entity.handleTaskSelect;
            romeon = entity.showMicrophone;
            michal = _closure1_slot0;
            source = _closure1_slot2;
            entity = 13;
            entity = source[entity];
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.useQuestTaskDetails;
            entity = entity.bind(zuuluu)(backup);
            golfie = entity.taskType;
            entity = 18;
            entity = source[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.FirstPartyQuestTaskTypes;
            oscard = entity.WATCH_VIDEO;
            entity = _closure1_slot5;
            sizing = 0;
            report = entity.bind(tangon)(sizing);
            zuuluu = _closure1_slot3;
            entity = 2;
            zuuluu = zuuluu.bind(tangon)(report, entity);
            output = zuuluu[sizing];
            entity = 1;
            entity = zuuluu[entity];
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot10;
            entity = 19;
            entity = source[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            update = _closure1_slot10;
            offset = _closure1_slot1;
            report = 20;
            report = source[report];
            offset = offset.bind(tangon)(report);
            report = {};
            report['quest'] = backup;
            report['step'] = yankee;
            report = update.bind(tangon)(offset, report);
            entity['header'] = report;
            report = null;
            if(!(golfie !== oscard)) { _fun00002_ip = 345; continue _fun00001 }
 248:
            offset = _closure1_slot10;
            golfie = _closure1_slot1;
            update = _closure1_slot2;
            oscard = 21;
            oscard = update[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['quest'] = backup;
            oscard['step'] = yankee;
            update = kiloes.isActive;
            oscard['isDefibrilating'] = update;
            echoed = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot0;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.height;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard['onLayout'] = echoed;
            echoed = result.onBack;
            oscard['onBack'] = echoed;
            echoed = kiloes.start;
            oscard['onDefib'] = echoed;
            result = result.onNext;
            oscard['onConnectConsoleNext'] = result;
            report = offset.bind(tangon)(golfie, oscard);
 345:
            entity['footer'] = report;
            report = true;
            entity['startExpanded'] = report;
            golfie = _closure1_slot10;
            oscard = _closure1_slot6;
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
            option = {};
            option['defibrillator'] = kiloes;
            option['quest'] = backup;
            option['handleTaskSelect'] = foxtra;
            option['showMicrophone'] = romeon;
            option['step'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tangon = function(argFoo, argBar) { // Original name: useEnrolledQuestContentProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 16;
            zuuluu = report[zuuluu];
            offset = undefined;
            option = tangon.bind(offset)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getQuest;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = golfie.bind(option)(oscard, zuuluu);
            var _closure2_slot1 = golfie;
            zuuluu = 22;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(offset)(zuuluu);
            zuuluu = oscard.useTrackQuestContentClickedWithImpression;
            zuuluu = zuuluu.bind(oscard)();
            var _closure2_slot2 = zuuluu;
            zuuluu = 8;
            zuuluu = report[zuuluu];
            report = tangon.bind(offset)(zuuluu);
            tangon = report.getQuestLogger;
            zuuluu = {};
            zuuluu['quest'] = golfie;
            oscard = _closure1_slot8;
            oscard = oscard.QUEST_HOME_MOBILE;
            zuuluu['location'] = oscard;
            report = tangon.bind(report)(zuuluu);
            yankee = null;
            if(!(yankee == golfie)) { _fun00004_ip = 190; continue _fun00003 }
 144:
            tangon = report.error;
            zuuluu = 'Quest not found in store, closing bottom sheet';
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 23;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.hideActionSheet;
            zuuluu = zuuluu.bind(tangon)();
 190:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            report = oscard[zuuluu];
            option = tangon.bind(offset)(report);
            report = option.useQuestTaskDetails;
            report = report.bind(option)(golfie);
            option = oscard[zuuluu];
            verify = tangon.bind(offset)(option);
            option = verify.useIsQuestProgressing;
            verify = option.bind(verify)(golfie);
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.useTaskPlatformScreen;
            report = zuuluu.bind(tangon)(golfie, report);
            tangon = _closure1_slot3;
            zuuluu = 3;
            tangon = tangon.bind(offset)(report, zuuluu);
            zuuluu = 0;
            option = tangon[zuuluu];
            oscard = 2;
            tangon = tangon[oscard];
            var _closure2_slot3 = tangon;
            report = function(argFoo, argBar) { // Original name: useSteps
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    verify = argFoo;
                    var _closure3_slot0 = verify;
                    tangon = verify.userStatus;
                    report = null;
                    oscard = report == tangon;
                    zuuluu = undefined;
                    michal = undefined;
                    if(oscard) { _fun00006_ip = 34; continue _fun00005 }
 28:
                    michal = tangon.completedAt;
 34:
                    option = report != michal;
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 13;
                    oscard = offset[tangon];
                    yankee = golfie.bind(zuuluu)(oscard);
                    oscard = yankee.useConnectedAccounts;
                    oscard = oscard.bind(yankee)();
                    oscard = oscard.xboxAndPlaystationAccounts;
                    var _closure3_slot1 = oscard;
                    foxtra = _closure1_slot4;
                    romeon = foxtra.useMemo;
                    yankee = new Array(2);
                    yankee[0] = verify;
                    yankee[1] = oscard;
                    oscard = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 14;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.supportedConsoles;
                        entity = _closure3_slot0;
                        zuuluu = michal.bind(zuuluu)(entity);
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            zuuluu = _closure3_slot1;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.type;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    oscard = romeon.bind(foxtra)(oscard, yankee);
                    yankee = offset[tangon];
                    romeon = golfie.bind(zuuluu)(yankee);
                    yankee = romeon.useQuestTaskDetails;
                    yankee = yankee.bind(romeon)(verify);
                    romeon = offset[tangon];
                    foxtra = golfie.bind(zuuluu)(romeon);
                    romeon = foxtra.useIsQuestProgressing;
                    romeon = romeon.bind(foxtra)(verify);
                    tangon = offset[tangon];
                    golfie = golfie.bind(zuuluu)(tangon);
                    tangon = golfie.useTaskPlatformScreen;
                    verify = tangon.bind(golfie)(verify, yankee);
                    golfie = _closure1_slot3;
                    tangon = 3;
                    tangon = golfie.bind(zuuluu)(verify, tangon);
                    verify = 0;
                    backup = tangon[verify];
                    var _closure3_slot2 = backup;
                    kiloes = 1;
                    offset = tangon[kiloes];
                    var _closure3_slot3 = offset;
                    sizing = 2;
                    tangon = tangon[sizing];
                    var _closure3_slot4 = tangon;
                    output = _closure1_slot4;
                    foxtra = output.useState;
                    golfie = oscard.length;
                    golfie = verify === golfie;
                    if(!golfie) { _fun00006_ip = 245; continue _fun00005 }
 242:
                    golfie = !option;
 245:
                    if(!golfie) { _fun00006_ip = 284; continue _fun00005 }
 248:
                    echoed = _closure1_slot0;
                    update = _closure1_slot2;
                    result = 15;
                    result = update[result];
                    result = echoed.bind(zuuluu)(result);
                    result = result.TaskPlatformScreen;
                    result = result.CONSOLE;
                    golfie = backup === result;
 284:
                    if(golfie) { _fun00006_ip = 304; continue _fun00005 }
 287:
                    result = _closure1_slot13;
                    echoed = result.CONSOLE_CONNECT;
                    result = argBar;
                    golfie = result === echoed;
 304:
                    foxtra = foxtra.bind(output)(golfie);
                    golfie = _closure1_slot3;
                    golfie = golfie.bind(zuuluu)(foxtra, sizing);
                    foxtra = golfie[verify];
                    var _closure3_slot5 = foxtra;
                    golfie = golfie[kiloes];
                    var _closure3_slot6 = golfie;
                    if(romeon) { _fun00006_ip = 348; continue _fun00005 }
 338:
                    yankee = yankee.progressSeconds;
                    romeon = yankee > verify;
 348:
                    var _closure3_slot7 = romeon;
                    oscard = oscard.length;
                    oscard = verify !== oscard;
                    if(oscard) { _fun00006_ip = 367; continue _fun00005 }
 364:
                    oscard = option;
 367:
                    if(oscard) { _fun00006_ip = 406; continue _fun00005 }
 370:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 15;
                    option = yankee[option];
                    option = verify.bind(zuuluu)(option);
                    option = option.TaskPlatformScreen;
                    option = option.CONSOLE;
                    oscard = backup !== option;
 406:
                    if(oscard) { _fun00006_ip = 412; continue _fun00005 }
 409:
                    oscard = foxtra;
 412:
                    if(oscard) { _fun00006_ip = 422; continue _fun00005 }
 415:
                    oscard = true;
                    oscard = golfie.bind(zuuluu)(oscard);
 422:
                    option = _closure1_slot4;
                    golfie = option.useCallback;
                    oscard = new Array(1);
                    oscard[0] = tangon;
                    tangon = function() {
                        tangon = _closure3_slot6;
                        entity = undefined;
                        zuuluu = false;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure3_slot4;
                        michal = null;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = golfie.bind(option)(tangon, oscard);
                    var _closure3_slot8 = tangon;
                    oscard = function() { // Original name: showConsoleSelect
                        zuuluu = _closure3_slot6;
                        michal = undefined;
                        entity = true;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    var _closure3_slot9 = oscard;
                    oscard = function() { // Original name: hideConsoleSelect
                        zuuluu = _closure3_slot6;
                        michal = undefined;
                        entity = false;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    var _closure3_slot10 = oscard;
                    verify = _closure1_slot4;
                    option = verify.useMemo;
                    golfie = function() {
                        michal = {};
                        entity = _closure1_slot13;
                        entity = entity.TASK_STATUS;
                        michal['type'] = entity;
                        entity = true;
                        michal['shouldShow'] = entity;
                        entity = new Array(1);
                        entity[0] = michal;
                        return entity;
                    };
                    oscard = new Array(0);
                    option = option.bind(verify)(golfie, oscard);
                    var _closure3_slot11 = option;
                    yankee = _closure1_slot4;
                    verify = yankee.useMemo;
                    golfie = new Array(2);
                    golfie[0] = foxtra;
                    golfie[1] = romeon;
                    oscard = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = {};
                            entity = _closure1_slot13;
                            entity = entity.CONSOLE_CONNECT;
                            michal['type'] = entity;
                            entity = _closure3_slot5;
                            michal['shouldShow'] = entity;
                            entity = _closure3_slot10;
                            michal['onNext'] = entity;
                            entity = new Array(2);
                            entity[0] = michal;
                            michal = {};
                            zuuluu = _closure1_slot13;
                            zuuluu = zuuluu.TASK_STATUS;
                            michal['type'] = zuuluu;
                            zuuluu = true;
                            michal['shouldShow'] = zuuluu;
                            report = _closure3_slot7;
                            zuuluu = undefined;
                            if(report) { _fun00008_ip = 84; continue _fun00007 }
 80:
                            zuuluu = _closure3_slot9;
 84:
                            michal['onBack'] = zuuluu;
                            entity[1] = michal;
                            return entity;
                        }
                    };
                    golfie = verify.bind(yankee)(oscard, golfie);
                    var _closure3_slot12 = golfie;
                    yankee = _closure1_slot4;
                    verify = yankee.useMemo;
                    oscard = new Array(4);
                    oscard[0] = backup;
                    oscard[1] = foxtra;
                    oscard[2] = romeon;
                    oscard[3] = tangon;
                    tangon = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = {};
                            entity = _closure1_slot13;
                            entity = entity.TASK_SELECT;
                            michal['type'] = entity;
                            oscard = _closure3_slot2;
                            golfie = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            verify = 15;
                            entity = zuuluu[verify];
                            option = undefined;
                            entity = golfie.bind(option)(entity);
                            entity = entity.TaskPlatformScreen;
                            entity = entity.SELECT;
                            entity = oscard === entity;
                            michal['shouldShow'] = entity;
                            entity = new Array(3);
                            entity[0] = michal;
                            michal = {};
                            oscard = _closure1_slot13;
                            oscard = oscard.CONSOLE_CONNECT;
                            michal['type'] = oscard;
                            oscard = _closure3_slot2;
                            zuuluu = zuuluu[verify];
                            zuuluu = golfie.bind(option)(zuuluu);
                            zuuluu = zuuluu.TaskPlatformScreen;
                            zuuluu = zuuluu.CONSOLE;
                            zuuluu = oscard === zuuluu;
                            if(!zuuluu) { _fun00010_ip = 129; continue _fun00009 }
 125:
                            zuuluu = _closure3_slot5;
 129:
                            michal['shouldShow'] = zuuluu;
                            zuuluu = _closure3_slot8;
                            michal['onBack'] = zuuluu;
                            zuuluu = _closure3_slot10;
                            michal['onNext'] = zuuluu;
                            entity[1] = michal;
                            michal = {};
                            zuuluu = _closure1_slot13;
                            zuuluu = zuuluu.TASK_STATUS;
                            michal['type'] = zuuluu;
                            zuuluu = true;
                            michal['shouldShow'] = zuuluu;
                            oscard = _closure3_slot7;
                            zuuluu = undefined;
                            if(oscard) { _fun00010_ip = 238; continue _fun00009 }
 188:
                            oscard = _closure3_slot2;
                            golfie = _closure1_slot0;
                            tangon = _closure1_slot2;
                            tangon = tangon[verify];
                            tangon = golfie.bind(option)(tangon);
                            tangon = tangon.TaskPlatformScreen;
                            tangon = tangon.CONSOLE;
                            if(!(oscard !== tangon)) { _fun00010_ip = 231; continue _fun00009 }
 225:
                            tangon = _closure3_slot8;
                            _fun00010_ip = 235; continue _fun00009;
 231:
                            tangon = _closure3_slot9;
 235:
                            zuuluu = tangon;
 238:
                            michal['onBack'] = zuuluu;
                            entity[2] = michal;
                            return entity;
                        }
                    };
                    verify = verify.bind(yankee)(tangon, oscard);
                    var _closure3_slot13 = verify;
                    oscard = _closure1_slot4;
                    tangon = oscard.useMemo;
                    michal = new Array(4);
                    michal[0] = offset;
                    michal[1] = verify;
                    michal[2] = option;
                    michal[3] = golfie;
                    entity = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = _closure3_slot3;
                            michal = michal.length;
                            zuuluu = 1;
                            tangon = zuuluu === michal;
                            if(!tangon) { _fun00012_ip = 49; continue _fun00011 }
 22:
                            oscard = _closure3_slot3;
                            report = oscard.includes;
                            michal = _closure1_slot9;
                            michal = michal.DESKTOP;
                            tangon = report.bind(oscard)(michal);
 49:
                            michal = _closure3_slot3;
                            michal = michal.length;
                            michal = zuuluu === michal;
                            if(!michal) { _fun00012_ip = 92; continue _fun00011 }
 65:
                            oscard = _closure3_slot3;
                            report = oscard.includes;
                            zuuluu = _closure1_slot9;
                            zuuluu = zuuluu.CONSOLE;
                            michal = report.bind(oscard)(zuuluu);
 92:
                            zuuluu = _closure3_slot13;
                            if(tangon) { _fun00012_ip = 108; continue _fun00011 }
 99:
                            if(!michal) { _fun00012_ip = 112; continue _fun00011 }
 102:
                            zuuluu = _closure3_slot12;
                            _fun00012_ip = 112; continue _fun00011;
 108:
                            zuuluu = _closure3_slot11;
 112:
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                entity = entity.shouldShow;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            michal = null;
                            tangon = zuuluu;
                            if(!(michal == entity)) { _fun00012_ip = 157; continue _fun00011 }
 140:
                            zuuluu = tangon.at;
                            michal = -1;
                            entity = zuuluu.bind(tangon)(michal);
 157:
                            return entity;
                        }
                    };
                    tangon = tangon.bind(oscard)(entity, michal);
                    michal = tangon.type;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {};
                    golfie = report == tangon;
                    oscard = undefined;
                    if(golfie) { _fun00006_ip = 664; continue _fun00005 }
 658:
                    oscard = tangon.onBack;
 664:
                    michal['onBack'] = oscard;
                    report = report == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00006_ip = 684; continue _fun00005 }
 678:
                    zuuluu = tangon.onNext;
 684:
                    michal['onNext'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            tangon = argBar;
            report = report.bind(offset)(golfie, tangon);
            tangon = _closure1_slot3;
            tangon = tangon.bind(offset)(report, oscard);
            report = tangon[zuuluu];
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = function(argFoo) { // Original name: useDefibrillator
                offset = argFoo;
                var _closure3_slot0 = offset;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 8;
                zuuluu = report[zuuluu];
                romeon = undefined;
                report = tangon.bind(romeon)(zuuluu);
                tangon = report.getQuestLogger;
                zuuluu = {};
                zuuluu['quest'] = offset;
                oscard = _closure1_slot8;
                oscard = oscard.QUEST_HOME_MOBILE;
                zuuluu['location'] = oscard;
                verify = tangon.bind(report)(zuuluu);
                var _closure3_slot1 = verify;
                tangon = _closure1_slot5;
                zuuluu = new Array(0);
                tangon = tangon.bind(romeon)(zuuluu);
                zuuluu = _closure1_slot3;
                yankee = 2;
                report = zuuluu.bind(romeon)(tangon, yankee);
                zuuluu = 0;
                tangon = report[zuuluu];
                oscard = 1;
                golfie = report[oscard];
                var _closure3_slot2 = golfie;
                option = _closure1_slot5;
                report = false;
                option = option.bind(romeon)(report);
                report = _closure1_slot3;
                report = report.bind(romeon)(option, yankee);
                zuuluu = report[zuuluu];
                option = report[oscard];
                var _closure3_slot3 = option;
                oscard = _closure1_slot4;
                report = oscard.useCallback;
                michal = new Array(4);
                michal[0] = offset;
                michal[1] = verify;
                michal[2] = option;
                michal[3] = golfie;
                entity = function() {
                    report = _closure3_slot3;
                    entity = undefined;
                    tangon = true;
                    tangon = report.bind(entity)(tangon);
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 9;
                    tangon = oscard[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.manuallyStartConsoleQuest;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.id;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.errorHints;
                        michal = _closure3_slot2;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.catch;
                    zuuluu = function(argFoo) {
                        tangon = _closure3_slot2;
                        entity = undefined;
                        zuuluu = new Array(0);
                        zuuluu = tangon.bind(entity)(zuuluu);
                        report = _closure3_slot1;
                        tangon = report.error;
                        zuuluu = 'Failed to start console quest';
                        michal = argFoo;
                        michal = tangon.bind(report)(zuuluu, michal);
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        michal = 10;
                        michal = golfie[michal];
                        tangon = oscard.bind(entity)(michal);
                        zuuluu = tangon.open;
                        michal = {};
                        option = 'START_DEFIBRILLATOR_ERROR';
                        michal['key'] = option;
                        offset = _closure1_slot0;
                        report = 11;
                        option = golfie[report];
                        option = offset.bind(entity)(option);
                        verify = option.intl;
                        option = verify.string;
                        report = golfie[report];
                        report = offset.bind(entity)(report);
                        report = report.t;
                        report = report.CKsXk5;
                        report = option.bind(verify)(report);
                        michal['content'] = report;
                        report = 12;
                        report = golfie[report];
                        report = oscard.bind(entity)(report);
                        michal['icon'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.finally;
                    michal = function() {
                        zuuluu = _closure3_slot3;
                        michal = undefined;
                        entity = false;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = report.bind(oscard)(entity, michal);
                entity = {};
                entity['errorHints'] = tangon;
                entity['isActive'] = zuuluu;
                entity['start'] = michal;
                return entity;
            };
            oscard = zuuluu.bind(offset)(golfie);
            romeon = golfie.userStatus;
            foxtra = yankee == romeon;
            zuuluu = undefined;
            if(foxtra) { _fun00004_ip = 362; continue _fun00003 }
 356:
            zuuluu = romeon.completedAt;
 362:
            yankee = yankee != zuuluu;
            zuuluu = !yankee;
            if(yankee) { _fun00004_ip = 375; continue _fun00003 }
 372:
            zuuluu = !verify;
 375:
            if(!zuuluu) { _fun00004_ip = 414; continue _fun00003 }
 378:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 15;
            entity = yankee[entity];
            entity = verify.bind(offset)(entity);
            entity = entity.TaskPlatformScreen;
            entity = entity.CONSOLE;
            zuuluu = option === entity;
 414:
            entity = {};
            entity['quest'] = golfie;
            entity['defibrillator'] = oscard;
            entity['step'] = report;
            entity['stepActions'] = tangon;
            entity['showMicrophone'] = zuuluu;
            michal = function(argFoo) { // Original name: handleTaskSelect
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure2_slot2;
                    tangon = {};
                    entity = _closure2_slot1;
                    entity = entity.id;
                    tangon['questId'] = entity;
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 15;
                    oscard = oscard[entity];
                    entity = undefined;
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.QuestContent;
                    oscard = oscard.QUEST_BOTTOM_SHEET;
                    tangon['questContent'] = oscard;
                    oscard = _closure1_slot9;
                    oscard = oscard.CONSOLE;
                    if(!(zuuluu !== oscard)) { _fun00014_ip = 164; continue _fun00013 }
 82:
                    oscard = _closure1_slot9;
                    oscard = oscard.DESKTOP;
                    if(!(zuuluu !== oscard)) { _fun00014_ip = 130; continue _fun00013 }
 96:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 22;
                    oscard = verify[oscard];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.QuestContentCTA;
                    oscard = oscard.DESELECT_PLATFORM;
                    _fun00014_ip = 162; continue _fun00013;
 130:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 22;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    option = option.QuestContentCTA;
                    oscard = option.SELECT_DESKTOP_PLATFORM;
 162:
                    _fun00014_ip = 196; continue _fun00013;
 164:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 22;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    golfie = golfie.QuestContentCTA;
                    oscard = golfie.SELECT_CONSOLE_PLATFORM;
 196:
                    tangon['questContentCTA'] = oscard;
                    tangon = report.bind(entity)(tangon);
                    michal = _closure2_slot3;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            entity['handleTaskSelect'] = michal;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    michal = function(argFoo) { // Original name: QuestBottomSheetContent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            result = entity.defibrillator;
            oscard = entity.quest;
            romeon = entity.handleTaskSelect;
            backup = entity.showMicrophone;
            option = entity.step;
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot12;
            michal = {};
            entity = _closure1_slot13;
            entity = entity.TASK_SELECT;
            report = option === entity;
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
            entity['onTaskSelect'] = romeon;
            report = yankee.bind(offset)(verify, entity);
 102:
            entity = new Array(4);
            entity[0] = report;
            report = _closure1_slot13;
            report = report.CONSOLE_CONNECT;
            report = option === report;
            if(!report) { _fun00016_ip = 171; continue _fun00015 }
 127:
            romeon = _closure1_slot10;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 25;
            verify = yankee[verify];
            yankee = undefined;
            offset = offset.bind(yankee)(verify);
            verify = {};
            verify['quest'] = oscard;
            verify['step'] = option;
            report = romeon.bind(yankee)(offset, verify);
 171:
            entity[1] = report;
            report = _closure1_slot13;
            report = report.TASK_STATUS;
            report = option === report;
            if(!report) { _fun00016_ip = 298; continue _fun00015 }
 192:
            romeon = _closure1_slot11;
            yankee = _closure1_slot6;
            offset = {};
            sizing = _closure1_slot10;
            kiloes = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 26;
            foxtra = foxtra[verify];
            verify = undefined;
            kiloes = kiloes.bind(verify)(foxtra);
            foxtra = {};
            foxtra['quest'] = oscard;
            kiloes = sizing.bind(verify)(kiloes, foxtra);
            foxtra = new Array(2);
            foxtra[0] = kiloes;
            if(!backup) { _fun00016_ip = 284; continue _fun00015 }
 252:
            output = _closure1_slot10;
            sizing = _closure1_slot19;
            kiloes = {};
            kiloes['quest'] = oscard;
            result = result.errorHints;
            kiloes['errorHints'] = result;
            backup = output.bind(verify)(sizing, kiloes);
 284:
            foxtra[1] = backup;
            offset['children'] = foxtra;
            report = romeon.bind(verify)(yankee, offset);
 298:
            entity[2] = report;
            report = _closure1_slot13;
            report = report.TASK_STATUS;
            report = option === report;
            if(!report) { _fun00016_ip = 325; continue _fun00015 }
 319:
            report = oscard.preview;
 325:
            if(!report) { _fun00016_ip = 351; continue _fun00015 }
 328:
            verify = _closure1_slot10;
            option = _closure1_slot18;
            golfie = {};
            golfie['quest'] = oscard;
            oscard = undefined;
            report = verify.bind(oscard)(option, golfie);
 351:
            entity[3] = report;
            michal['children'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot17 = michal;
    entity = function(argFoo) { // Original name: PreviewControls
        entity = argFoo;
        option = entity.quest;
        entity = _closure1_slot14;
        tangon = undefined;
        oscard = entity.bind(tangon)();
        zuuluu = _closure1_slot10;
        michal = _closure1_slot6;
        entity = {};
        oscard = oscard.previewContainer;
        entity['style'] = oscard;
        golfie = _closure1_slot10;
        oscard = _closure1_slot1;
        verify = _closure1_slot2;
        report = 27;
        report = verify[report];
        oscard = oscard.bind(tangon)(report);
        report = {};
        report['quest'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: MicrophoneUnit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            echoed = entity.quest;
            golfie = entity.errorHints;
            entity = _closure1_slot14;
            tangon = undefined;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 13;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useQuestHowToHelpArticle;
            entity = entity.bind(michal)();
            michal = entity.message;
            entity = golfie.length;
            report = 0;
            backup = entity > report;
            if(backup) { _fun00018_ip = 171; continue _fun00017 }
 79:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 11;
            option = yankee[entity];
            option = zuuluu.bind(tangon)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            entity = yankee[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.t;
            zuuluu = entity.GXqvCw;
            entity = {};
            yankee = echoed.config;
            yankee = yankee.messages;
            yankee = yankee.gameTitle;
            entity['gameTitle'] = yankee;
            entity = option.bind(verify)(zuuluu, entity);
            option = new Array(1);
            option[0] = entity;
            _fun00018_ip = 216; continue _fun00017;
 171:
            zuuluu = golfie.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                return entity;
            };
            ctrled = zuuluu.bind(golfie)(entity);
            entity = new Array(1);
            vacuum = entity;
            source = 0;
            zuuluu = arraySpread(vacuum, ctrled, source);
            entity[zuuluu] = michal;
            michal = 1;
            michal = zuuluu + michal;
            option = entity;
 216:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot6;
            entity = {};
            report = offset.microphoneUnit;
            entity['style'] = report;
            verify = _closure1_slot11;
            golfie = _closure1_slot6;
            report = {};
            offset = offset.microphoneUnitHeader;
            report['style'] = offset;
            romeon = _closure1_slot10;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            offset = 28;
            offset = foxtra[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.WarningIcon;
            offset = {};
            foxtra = 'text-warning';
            if(!backup) { _fun00018_ip = 303; continue _fun00017 }
 297:
            foxtra = 'text-danger';
 303:
            offset['color'] = foxtra;
            yankee = romeon.bind(tangon)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 29;
            yankee = sizing[yankee];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'variant': 'text-md/medium', 'color': 'header-primary'};
            sizing = _closure1_slot0;
            update = _closure1_slot2;
            kiloes = 11;
            output = update[kiloes];
            output = sizing.bind(tangon)(output);
            result = output.intl;
            if(backup) { _fun00018_ip = 426; continue _fun00017 }
 392:
            output = result.string;
            backup = update[kiloes];
            backup = sizing.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.YstzGB;
            backup = output.bind(result)(backup);
            _fun00018_ip = 483; continue _fun00017;
 426:
            output = result.formatToPlainString;
            kiloes = update[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            sizing = kiloes.28Ql29;
            kiloes = {};
            echoed = echoed.config;
            echoed = echoed.messages;
            echoed = echoed.gameTitle;
            kiloes['gameTitle'] = echoed;
            backup = output.bind(result)(sizing, kiloes);
 483:
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            golfie = verify.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            golfie = option.map;
            oscard = function(argFoo, argBar) {
                report = _closure1_slot10;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 29;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {};
                entity = 'text-sm/normal';
                michal['variant'] = entity;
                entity = argFoo;
                michal['children'] = entity;
                entity = argBar;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = backup.bind(entity)(report);
    var _closure1_slot3 = report;
    kiloes = 1;
    report = verify[kiloes];
    report = backup.bind(entity)(report);
    var _closure1_slot4 = report;
    report = verify[kiloes];
    report = option.bind(entity)(report);
    report = report.useState;
    var _closure1_slot5 = report;
    report = 2;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = verify[report];
    report = backup.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = verify[report];
    report = option.bind(entity)(report);
    golfie = report.QuestsExperimentLocations;
    var _closure1_slot8 = golfie;
    report = report.QuestTaskPlatform;
    var _closure1_slot9 = report;
    report = 5;
    golfie = verify[report];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot10 = golfie;
    golfie = verify[report];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot11 = golfie;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot12 = report;
    report = {};
    golfie = 'TASK_SELECT';
    report['TASK_SELECT'] = golfie;
    golfie = 'CONSOLE_CONNECT';
    report['CONSOLE_CONNECT'] = golfie;
    golfie = 'TASK_STATUS';
    report['TASK_STATUS'] = golfie;
    var _closure1_slot13 = report;
    golfie = 6;
    golfie = verify[golfie];
    yankee = option.bind(entity)(golfie);
    offset = yankee.createStyles;
    golfie = {};
    romeon = {};
    sizing = 'flex';
    romeon['display'] = sizing;
    foxtra = 7;
    output = verify[foxtra];
    output = backup.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    romeon['paddingHorizontal'] = output;
    output = verify[foxtra];
    output = backup.bind(entity)(output);
    output = output.spacing;
    output = output.PX_24;
    romeon['gap'] = output;
    golfie['contentContainer'] = romeon;
    romeon = {};
    romeon['display'] = sizing;
    sizing = verify[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    romeon['gap'] = sizing;
    sizing = verify[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    sizing = -sizing;
    romeon['marginHorizontal'] = sizing;
    sizing = verify[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeon['paddingHorizontal'] = sizing;
    sizing = verify[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeon['marginTop'] = sizing;
    sizing = verify[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    romeon['paddingTop'] = sizing;
    romeon['borderTopWidth'] = kiloes;
    kiloes = verify[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BORDER_SUBTLE;
    romeon['borderTopColor'] = kiloes;
    golfie['microphoneUnit'] = romeon;
    romeon = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    kiloes = verify[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    romeon['gap'] = kiloes;
    golfie['microphoneUnitHeader'] = romeon;
    romeon = {};
    kiloes = 'absolute';
    romeon['position'] = kiloes;
    kiloes = verify[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_32;
    romeon['right'] = kiloes;
    foxtra = verify[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    romeon['top'] = foxtra;
    foxtra = 0.1;
    romeon['opacity'] = foxtra;
    golfie['previewContainer'] = romeon;
    golfie = offset.bind(yankee)(golfie);
    var _closure1_slot14 = golfie;
    golfie = 30;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    golfie = option.bind(verify)(golfie);
    oscard = function(argFoo) { // Original name: QuestBottomSheetConnected
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.questId;
            var _closure2_slot0 = michal;
            entity = entity.initialStep;
            var _closure2_slot1 = entity;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 16;
            entity = tangon[entity];
            report = undefined;
            golfie = zuuluu.bind(report)(entity);
            tangon = golfie.useStateFromStores;
            entity = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getQuest;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = tangon.bind(golfie)(zuuluu, entity);
            entity = null;
            zuuluu = entity == golfie;
            if(zuuluu) { _fun00020_ip = 179; continue _fun00019 }
 89:
            tangon = _closure1_slot10;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 17;
            michal = verify[michal];
            michal = option.bind(report)(michal);
            zuuluu = michal.QuestContentImpressionTrackerNative;
            michal = {};
            offset = true;
            michal['overrideVisibility'] = offset;
            michal['questOrQuests'] = golfie;
            golfie = 15;
            golfie = verify[golfie];
            golfie = option.bind(report)(golfie);
            golfie = golfie.QuestContent;
            golfie = golfie.QUEST_BOTTOM_SHEET;
            michal['questContent'] = golfie;
            oscard = function() { // Original name: children
                tangon = _closure1_slot10;
                zuuluu = _closure1_slot15;
                michal = {};
                report = _closure2_slot0;
                michal['questId'] = report;
                entity = _closure2_slot1;
                michal['initialStep'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 179:
            return entity;
        }
    };
    zuuluu['default'] = oscard;
    zuuluu['QuestBottomSheetStep'] = report;
    zuuluu['useEnrolledQuestContentProps'] = tangon;
    zuuluu['QuestBottomSheetContent'] = michal;
    return entity;
})();