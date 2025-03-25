// app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = offset;
    entity = function(argFoo) { // Original name: QuestBottomSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.questId;
            zuuluu = entity.initialStep;
            entity = _closure1_slot14;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            michal = _closure1_slot17;
            entity = {};
            entity['questId'] = report;
            entity['initialStep'] = zuuluu;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.QUEST_HOME_MOBILE;
            entity['location'] = zuuluu;
            entity = michal.bind(tangon)(entity);
            result = entity.quest;
            backup = entity.step;
            echoed = entity.defibrillator;
            source = entity.stepActions;
            output = entity.handleTaskSelect;
            kiloes = entity.showMicrophone;
            oscard = _closure1_slot0;
            config = _closure1_slot2;
            entity = 16;
            entity = config[entity];
            report = oscard.bind(tangon)(entity);
            zuuluu = report.useShouldAllowMobileVideoTask;
            michal = result.config;
            entity = {};
            golfie = _closure1_slot8;
            golfie = golfie.QUEST_HOME_MOBILE;
            entity['location'] = golfie;
            verify = zuuluu.bind(report)(michal, entity);
            entity = 13;
            entity = config[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.useQuestTaskDetails;
            entity = entity.bind(michal)(result);
            offset = entity.taskType;
            entity = 19;
            entity = config[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.FirstPartyQuestTaskTypes;
            option = entity.WATCH_VIDEO;
            entity = _closure1_slot5;
            foxtra = 0;
            zuuluu = entity.bind(tangon)(foxtra);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            update = michal[foxtra];
            entity = 1;
            entity = michal[entity];
            var _closure2_slot0 = entity;
            report = _closure1_slot4;
            zuuluu = report.useMemo;
            michal = function() {
                entity = {};
                michal = true;
                entity['isInQuestBottomSheet'] = michal;
                return entity;
            };
            entity = new Array(0);
            report = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot10;
            entity = _closure1_slot15;
            michal = entity.Provider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot10;
            report = 20;
            report = config[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheet;
            report = {};
            sequen = _closure1_slot10;
            vacuum = _closure1_slot1;
            romeon = 21;
            romeon = config[romeon];
            vacuum = vacuum.bind(tangon)(romeon);
            romeon = {};
            romeon['quest'] = result;
            romeon['step'] = backup;
            config = _closure1_slot8;
            config = config.QUEST_HOME_MOBILE;
            romeon['location'] = config;
            romeon = sequen.bind(tangon)(vacuum, romeon);
            report['header'] = romeon;
            if(!(offset === option)) { _fun00002_ip = 381; continue _fun00001 }
 376:
            option = null;
            if(!verify) { _fun00002_ip = 492; continue _fun00001 }
 381:
            romeon = _closure1_slot10;
            offset = _closure1_slot1;
            vacuum = _closure1_slot2;
            verify = 22;
            verify = vacuum[verify];
            offset = offset.bind(tangon)(verify);
            verify = {};
            verify['quest'] = result;
            verify['step'] = backup;
            vacuum = echoed.isActive;
            verify['isDefibrilating'] = vacuum;
            vacuum = _closure1_slot8;
            vacuum = vacuum.QUEST_HOME_MOBILE;
            verify['location'] = vacuum;
            ctrled = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot0;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.height;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            verify['onLayout'] = ctrled;
            ctrled = source.onBack;
            verify['onBack'] = ctrled;
            ctrled = echoed.start;
            verify['onDefib'] = ctrled;
            source = source.onNext;
            verify['onConnectConsoleNext'] = source;
            option = romeon.bind(tangon)(offset, verify);
 492:
            report['footer'] = option;
            option = true;
            report['startExpanded'] = option;
            offset = _closure1_slot10;
            verify = _closure1_slot6;
            option = {};
            romeon = yankee.contentContainer;
            yankee = new Array(2);
            yankee[0] = romeon;
            romeon = {};
            source = _closure1_slot13;
            source = source.TASK_SELECT;
            foxtra = 0;
            if(!(backup !== source)) { _fun00002_ip = 549; continue _fun00001 }
 546:
            foxtra = update;
 549:
            romeon['paddingBottom'] = foxtra;
            yankee[1] = romeon;
            option['style'] = yankee;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot18;
            yankee = {};
            yankee['defibrillator'] = echoed;
            yankee['quest'] = result;
            yankee['handleTaskSelect'] = output;
            sizing = _closure1_slot8;
            sizing = sizing.QUEST_HOME_MOBILE;
            yankee['location'] = sizing;
            yankee['showMicrophone'] = kiloes;
            yankee['step'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    report = function(argFoo) { // Original name: useEnrolledQuestContentProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.questId;
            foxtra = entity.initialStep;
            tangon = entity.location;
            yankee = undefined;
            var _closure2_slot2 = yankee;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 13;
            zuuluu = oscard[entity];
            golfie = report.bind(yankee)(zuuluu);
            zuuluu = golfie.useNonNullableQuest;
            golfie = zuuluu.bind(golfie)(verify);
            var _closure2_slot0 = golfie;
            zuuluu = 23;
            zuuluu = oscard[zuuluu];
            verify = report.bind(yankee)(zuuluu);
            zuuluu = verify.useTrackQuestContentClickedWithImpression;
            zuuluu = zuuluu.bind(verify)();
            var _closure2_slot1 = zuuluu;
            zuuluu = 8;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(yankee)(zuuluu);
            report = oscard.getQuestLogger;
            zuuluu = {};
            zuuluu['quest'] = golfie;
            zuuluu['location'] = tangon;
            oscard = report.bind(oscard)(zuuluu);
            romeon = null;
            if(!(romeon == golfie)) { _fun00004_ip = 178; continue _fun00003 }
 132:
            report = oscard.error;
            zuuluu = 'Quest not found in store, closing bottom sheet';
            zuuluu = report.bind(oscard)(zuuluu);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 24;
            zuuluu = oscard[zuuluu];
            report = report.bind(yankee)(zuuluu);
            zuuluu = report.hideActionSheet;
            zuuluu = zuuluu.bind(report)();
 178:
            report = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = backup[entity];
            oscard = report.bind(yankee)(zuuluu);
            zuuluu = oscard.useQuestTaskDetails;
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = backup[entity];
            verify = report.bind(yankee)(zuuluu);
            zuuluu = verify.useIsQuestProgressing;
            offset = zuuluu.bind(verify)(golfie);
            entity = backup[entity];
            zuuluu = report.bind(yankee)(entity);
            entity = zuuluu.useTaskPlatformScreen;
            oscard = entity.bind(zuuluu)(golfie, oscard);
            zuuluu = _closure1_slot3;
            entity = 3;
            entity = zuuluu.bind(yankee)(oscard, entity);
            zuuluu = 0;
            verify = entity[zuuluu];
            oscard = 2;
            entity = entity[oscard];
            _closure2_slot2 = entity;
            entity = 16;
            entity = backup[entity];
            kiloes = report.bind(yankee)(entity);
            backup = kiloes.useShouldAllowMobileVideoTask;
            report = golfie.config;
            entity = {};
            entity['location'] = tangon;
            entity = backup.bind(kiloes)(report, entity);
            report = {};
            report['quest'] = golfie;
            report['initialStep'] = foxtra;
            report['location'] = tangon;
            tangon = function(argFoo) { // Original name: useSteps
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.quest;
                    var _closure3_slot0 = tangon;
                    source = michal.initialStep;
                    foxtra = michal.location;
                    zuuluu = undefined;
                    var _closure3_slot1 = zuuluu;
                    var _closure3_slot2 = zuuluu;
                    var _closure3_slot3 = zuuluu;
                    var _closure3_slot4 = zuuluu;
                    var _closure3_slot5 = zuuluu;
                    var _closure3_slot6 = zuuluu;
                    var _closure3_slot7 = zuuluu;
                    var _closure3_slot8 = zuuluu;
                    var _closure3_slot9 = zuuluu;
                    var _closure3_slot10 = zuuluu;
                    var _closure3_slot11 = zuuluu;
                    var _closure3_slot12 = zuuluu;
                    var _closure3_slot13 = zuuluu;
                    var _closure3_slot14 = zuuluu;
                    oscard = tangon.userStatus;
                    report = null;
                    golfie = report == oscard;
                    michal = undefined;
                    if(golfie) { _fun00006_ip = 107; continue _fun00005 }
 101:
                    michal = oscard.completedAt;
 107:
                    verify = report != michal;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 13;
                    golfie = offset[oscard];
                    yankee = option.bind(zuuluu)(golfie);
                    golfie = yankee.useConnectedAccounts;
                    golfie = golfie.bind(yankee)();
                    golfie = golfie.xboxAndPlaystationAccounts;
                    _closure3_slot1 = golfie;
                    backup = _closure1_slot4;
                    romeon = backup.useMemo;
                    yankee = new Array(2);
                    yankee[0] = tangon;
                    yankee[1] = golfie;
                    golfie = function() {
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
                    golfie = romeon.bind(backup)(golfie, yankee);
                    yankee = offset[oscard];
                    romeon = option.bind(zuuluu)(yankee);
                    yankee = romeon.useQuestTaskDetails;
                    romeon = yankee.bind(romeon)(tangon);
                    yankee = offset[oscard];
                    backup = option.bind(zuuluu)(yankee);
                    yankee = backup.useIsQuestProgressing;
                    backup = yankee.bind(backup)(tangon);
                    oscard = offset[oscard];
                    option = option.bind(zuuluu)(oscard);
                    oscard = option.useTaskPlatformScreen;
                    offset = oscard.bind(option)(tangon, romeon);
                    option = _closure1_slot3;
                    oscard = 3;
                    oscard = option.bind(zuuluu)(offset, oscard);
                    offset = 0;
                    sizing = oscard[offset];
                    _closure3_slot2 = sizing;
                    output = 1;
                    yankee = oscard[output];
                    _closure3_slot3 = yankee;
                    result = 2;
                    oscard = oscard[result];
                    _closure3_slot4 = oscard;
                    echoed = _closure1_slot4;
                    kiloes = echoed.useState;
                    option = golfie.length;
                    option = offset === option;
                    if(!option) { _fun00006_ip = 318; continue _fun00005 }
 315:
                    option = !verify;
 318:
                    if(!option) { _fun00006_ip = 357; continue _fun00005 }
 321:
                    ctrled = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    update = 15;
                    update = vacuum[update];
                    update = ctrled.bind(zuuluu)(update);
                    update = update.TaskPlatformScreen;
                    update = update.CONSOLE;
                    option = sizing === update;
 357:
                    if(option) { _fun00006_ip = 374; continue _fun00005 }
 360:
                    update = _closure1_slot13;
                    update = update.CONSOLE_CONNECT;
                    option = source === update;
 374:
                    kiloes = kiloes.bind(echoed)(option);
                    option = _closure1_slot3;
                    option = option.bind(zuuluu)(kiloes, result);
                    kiloes = option[offset];
                    _closure3_slot5 = kiloes;
                    option = option[output];
                    _closure3_slot6 = option;
                    if(backup) { _fun00006_ip = 418; continue _fun00005 }
 408:
                    romeon = romeon.progressSeconds;
                    backup = romeon > offset;
 418:
                    _closure3_slot7 = backup;
                    golfie = golfie.length;
                    golfie = offset !== golfie;
                    if(golfie) { _fun00006_ip = 437; continue _fun00005 }
 434:
                    golfie = verify;
 437:
                    if(golfie) { _fun00006_ip = 476; continue _fun00005 }
 440:
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    verify = 15;
                    verify = romeon[verify];
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.TaskPlatformScreen;
                    verify = verify.CONSOLE;
                    golfie = sizing !== verify;
 476:
                    if(golfie) { _fun00006_ip = 482; continue _fun00005 }
 479:
                    golfie = kiloes;
 482:
                    if(golfie) { _fun00006_ip = 492; continue _fun00005 }
 485:
                    golfie = true;
                    golfie = option.bind(zuuluu)(golfie);
 492:
                    verify = _closure1_slot4;
                    option = verify.useCallback;
                    golfie = new Array(1);
                    golfie[0] = oscard;
                    oscard = function() {
                        tangon = _closure3_slot6;
                        entity = undefined;
                        zuuluu = false;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure3_slot4;
                        michal = null;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard = option.bind(verify)(oscard, golfie);
                    _closure3_slot8 = oscard;
                    golfie = function() { // Original name: showConsoleSelect
                        zuuluu = _closure3_slot6;
                        michal = undefined;
                        entity = true;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    _closure3_slot9 = golfie;
                    golfie = function() { // Original name: hideConsoleSelect
                        zuuluu = _closure3_slot6;
                        michal = undefined;
                        entity = false;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    _closure3_slot10 = golfie;
                    offset = _closure1_slot4;
                    verify = offset.useMemo;
                    option = function() {
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
                    golfie = new Array(0);
                    verify = verify.bind(offset)(option, golfie);
                    _closure3_slot11 = verify;
                    romeon = _closure1_slot4;
                    offset = romeon.useMemo;
                    option = new Array(2);
                    option[0] = kiloes;
                    option[1] = backup;
                    golfie = function() {
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
                    option = offset.bind(romeon)(golfie, option);
                    _closure3_slot12 = option;
                    romeon = _closure1_slot4;
                    offset = romeon.useMemo;
                    golfie = new Array(4);
                    golfie[0] = sizing;
                    golfie[1] = kiloes;
                    golfie[2] = backup;
                    golfie[3] = oscard;
                    oscard = function() {
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
                    offset = offset.bind(romeon)(oscard, golfie);
                    _closure3_slot13 = offset;
                    golfie = _closure1_slot0;
                    romeon = _closure1_slot2;
                    oscard = 16;
                    oscard = romeon[oscard];
                    romeon = golfie.bind(zuuluu)(oscard);
                    golfie = romeon.useShouldAllowMobileVideoTask;
                    oscard = tangon.config;
                    tangon = {};
                    tangon['location'] = foxtra;
                    golfie = golfie.bind(romeon)(oscard, tangon);
                    _closure3_slot14 = golfie;
                    oscard = _closure1_slot4;
                    tangon = oscard.useMemo;
                    michal = new Array(5);
                    michal[0] = yankee;
                    michal[1] = offset;
                    michal[2] = verify;
                    michal[3] = option;
                    michal[4] = golfie;
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
                            if(tangon) { _fun00012_ip = 115; continue _fun00011 }
 99:
                            tangon = _closure3_slot14;
                            if(tangon) { _fun00012_ip = 115; continue _fun00011 }
 106:
                            if(!michal) { _fun00012_ip = 119; continue _fun00011 }
 109:
                            zuuluu = _closure3_slot12;
                            _fun00012_ip = 119; continue _fun00011;
 115:
                            zuuluu = _closure3_slot11;
 119:
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                entity = entity.shouldShow;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            michal = null;
                            tangon = zuuluu;
                            if(!(michal == entity)) { _fun00012_ip = 164; continue _fun00011 }
 147:
                            zuuluu = tangon.at;
                            michal = -1;
                            entity = zuuluu.bind(tangon)(michal);
 164:
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
                    if(golfie) { _fun00006_ip = 785; continue _fun00005 }
 779:
                    oscard = tangon.onBack;
 785:
                    michal['onBack'] = oscard;
                    report = report == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00006_ip = 805; continue _fun00005 }
 799:
                    zuuluu = tangon.onNext;
 805:
                    michal['onNext'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            report = tangon.bind(yankee)(report);
            tangon = _closure1_slot3;
            tangon = tangon.bind(yankee)(report, oscard);
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
            oscard = zuuluu.bind(yankee)(golfie);
            foxtra = golfie.userStatus;
            backup = romeon == foxtra;
            zuuluu = undefined;
            if(backup) { _fun00004_ip = 394; continue _fun00003 }
 388:
            zuuluu = foxtra.completedAt;
 394:
            romeon = romeon != zuuluu;
            zuuluu = !romeon;
            if(romeon) { _fun00004_ip = 407; continue _fun00003 }
 404:
            zuuluu = !offset;
 407:
            if(!zuuluu) { _fun00004_ip = 446; continue _fun00003 }
 410:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 15;
            option = romeon[option];
            option = offset.bind(yankee)(option);
            option = option.TaskPlatformScreen;
            option = option.CONSOLE;
            zuuluu = verify === option;
 446:
            if(!zuuluu) { _fun00004_ip = 452; continue _fun00003 }
 449:
            zuuluu = !entity;
 452:
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
                    report = _closure2_slot1;
                    tangon = {};
                    entity = _closure2_slot0;
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
                    oscard = 23;
                    oscard = verify[oscard];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.QuestContentCTA;
                    oscard = oscard.DESELECT_PLATFORM;
                    _fun00014_ip = 162; continue _fun00013;
 130:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 23;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    option = option.QuestContentCTA;
                    oscard = option.SELECT_DESKTOP_PLATFORM;
 162:
                    _fun00014_ip = 196; continue _fun00013;
 164:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 23;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    golfie = golfie.QuestContentCTA;
                    oscard = golfie.SELECT_CONSOLE_PLATFORM;
 196:
                    tangon['questContentCTA'] = oscard;
                    tangon = report.bind(entity)(tangon);
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            entity['handleTaskSelect'] = michal;
            return entity;
        }
    };
    var _closure1_slot17 = report;
    tangon = function(argFoo) { // Original name: QuestBottomSheetContent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            echoed = entity.defibrillator;
            offset = entity.quest;
            romeon = entity.handleTaskSelect;
            oscard = entity.location;
            backup = entity.showMicrophone;
            tangon = undefined;
            if(!(backup === tangon)) { _fun00016_ip = 40; continue _fun00015 }
 38:
            backup = false;
 40:
            option = entity.step;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            entity = zuuluu[entity];
            report = michal.bind(tangon)(entity);
            zuuluu = report.useShouldAllowMobileVideoTask;
            michal = offset.config;
            entity = {};
            entity['location'] = oscard;
            kiloes = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot12;
            entity = {};
            report = _closure1_slot13;
            report = report.TASK_SELECT;
            oscard = option === report;
            if(!oscard) { _fun00016_ip = 156; continue _fun00015 }
 119:
            yankee = _closure1_slot10;
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            report = 25;
            report = foxtra[report];
            verify = verify.bind(tangon)(report);
            report = {};
            report['onTaskSelect'] = romeon;
            oscard = yankee.bind(tangon)(verify, report);
 156:
            report = new Array(4);
            report[0] = oscard;
            oscard = _closure1_slot13;
            oscard = oscard.CONSOLE_CONNECT;
            oscard = option === oscard;
            if(!oscard) { _fun00016_ip = 223; continue _fun00015 }
 181:
            romeon = _closure1_slot10;
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 26;
            verify = foxtra[verify];
            yankee = yankee.bind(tangon)(verify);
            verify = {};
            verify['quest'] = offset;
            verify['step'] = option;
            oscard = romeon.bind(tangon)(yankee, verify);
 223:
            report[1] = oscard;
            oscard = _closure1_slot13;
            oscard = oscard.TASK_STATUS;
            oscard = option === oscard;
            if(!oscard) { _fun00016_ip = 385; continue _fun00015 }
 247:
            romeon = _closure1_slot11;
            yankee = _closure1_slot6;
            verify = {};
            output = _closure1_slot10;
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            foxtra = 27;
            foxtra = result[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            if(kiloes) { _fun00016_ip = 292; continue _fun00015 }
 284:
            sizing = foxtra.QuestBottomSheetProgressCardPlayStreamTask;
            _fun00016_ip = 298; continue _fun00015;
 292:
            sizing = foxtra.QuestBottomSheetProgressCardWatchTask;
 298:
            foxtra = {};
            foxtra['quest'] = offset;
            sizing = output.bind(tangon)(sizing, foxtra);
            foxtra = new Array(2);
            foxtra[0] = sizing;
            if(!backup) { _fun00016_ip = 325; continue _fun00015 }
 322:
            backup = !kiloes;
 325:
            if(!backup) { _fun00016_ip = 371; continue _fun00015 }
 328:
            output = _closure1_slot10;
            sizing = _closure1_slot20;
            kiloes = {};
            kiloes['quest'] = offset;
            result = null;
            update = result == echoed;
            result = undefined;
            if(update) { _fun00016_ip = 360; continue _fun00015 }
 354:
            result = echoed.errorHints;
 360:
            kiloes['errorHints'] = result;
            backup = output.bind(tangon)(sizing, kiloes);
 371:
            foxtra[1] = backup;
            verify['children'] = foxtra;
            oscard = romeon.bind(tangon)(yankee, verify);
 385:
            report[2] = oscard;
            oscard = _closure1_slot13;
            oscard = oscard.TASK_STATUS;
            oscard = option === oscard;
            if(!oscard) { _fun00016_ip = 412; continue _fun00015 }
 406:
            oscard = offset.preview;
 412:
            if(!oscard) { _fun00016_ip = 436; continue _fun00015 }
 415:
            verify = _closure1_slot10;
            option = _closure1_slot19;
            golfie = {};
            golfie['quest'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 436:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    entity = function(argFoo) { // Original name: PreviewControls
        entity = argFoo;
        verify = entity.quest;
        entity = _closure1_slot14;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot10;
        michal = _closure1_slot6;
        entity = {};
        report = report.previewContainer;
        entity['style'] = report;
        golfie = _closure1_slot10;
        oscard = _closure1_slot1;
        offset = _closure1_slot2;
        report = 28;
        report = offset[report];
        oscard = oscard.bind(tangon)(report);
        report = {};
        report['quest'] = verify;
        option = _closure1_slot8;
        option = option.QUEST_HOME_MOBILE;
        report['location'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot19 = entity;
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
            entity = null;
            zuuluu = entity == golfie;
            option = undefined;
            if(zuuluu) { _fun00018_ip = 81; continue _fun00017 }
 76:
            option = golfie.length;
 81:
            verify = entity != option;
            report = 0;
            zuuluu = 0;
            if(!verify) { _fun00018_ip = 95; continue _fun00017 }
 92:
            zuuluu = option;
 95:
            backup = zuuluu > report;
            if(!backup) { _fun00018_ip = 106; continue _fun00017 }
 102:
            if(!(entity == golfie)) { _fun00018_ip = 198; continue _fun00017 }
 106:
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
            _fun00018_ip = 243; continue _fun00017;
 198:
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
 243:
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
            offset = 29;
            offset = foxtra[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.WarningIcon;
            offset = {};
            foxtra = 'text-warning';
            if(!backup) { _fun00018_ip = 330; continue _fun00017 }
 324:
            foxtra = 'text-danger';
 330:
            offset['color'] = foxtra;
            yankee = romeon.bind(tangon)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 30;
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
            if(backup) { _fun00018_ip = 453; continue _fun00017 }
 419:
            output = result.string;
            backup = update[kiloes];
            backup = sizing.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.YstzGB;
            backup = output.bind(result)(backup);
            _fun00018_ip = 510; continue _fun00017;
 453:
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
 510:
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
                entity = 30;
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
    var _closure1_slot20 = entity;
    entity = global;
    option = entity.Object;
    oscard = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = kiloes.bind(entity)(michal);
    var _closure1_slot3 = michal;
    sizing = 1;
    michal = offset[sizing];
    yankee = kiloes.bind(entity)(michal);
    var _closure1_slot4 = yankee;
    michal = offset[sizing];
    michal = verify.bind(entity)(michal);
    michal = michal.useState;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.View;
    var _closure1_slot6 = michal;
    michal = 3;
    michal = offset[michal];
    michal = kiloes.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    oscard = michal.QuestsExperimentLocations;
    var _closure1_slot8 = oscard;
    michal = michal.QuestTaskPlatform;
    var _closure1_slot9 = michal;
    michal = 5;
    oscard = offset[michal];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot10 = oscard;
    oscard = offset[michal];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.jsxs;
    var _closure1_slot11 = oscard;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.Fragment;
    var _closure1_slot12 = michal;
    oscard = {};
    michal = 'TASK_SELECT';
    oscard['TASK_SELECT'] = michal;
    michal = 'CONSOLE_CONNECT';
    oscard['CONSOLE_CONNECT'] = michal;
    michal = 'TASK_STATUS';
    oscard['TASK_STATUS'] = michal;
    var _closure1_slot13 = oscard;
    michal = 6;
    michal = offset[michal];
    romeon = verify.bind(entity)(michal);
    option = romeon.createStyles;
    michal = {};
    foxtra = {};
    output = 'flex';
    foxtra['display'] = output;
    backup = 7;
    result = offset[backup];
    result = kiloes.bind(entity)(result);
    result = result.spacing;
    result = result.PX_16;
    foxtra['paddingHorizontal'] = result;
    result = offset[backup];
    result = kiloes.bind(entity)(result);
    result = result.spacing;
    result = result.PX_24;
    foxtra['gap'] = result;
    michal['contentContainer'] = foxtra;
    foxtra = {};
    foxtra['display'] = output;
    output = offset[backup];
    output = kiloes.bind(entity)(output);
    output = output.spacing;
    output = output.PX_8;
    foxtra['gap'] = output;
    output = offset[backup];
    output = kiloes.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    output = -output;
    foxtra['marginHorizontal'] = output;
    output = offset[backup];
    output = kiloes.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    foxtra['paddingHorizontal'] = output;
    output = offset[backup];
    output = kiloes.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    foxtra['marginTop'] = output;
    output = offset[backup];
    output = kiloes.bind(entity)(output);
    output = output.spacing;
    output = output.PX_16;
    foxtra['paddingTop'] = output;
    foxtra['borderTopWidth'] = sizing;
    sizing = offset[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BORDER_SUBTLE;
    foxtra['borderTopColor'] = sizing;
    michal['microphoneUnit'] = foxtra;
    foxtra = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    sizing = offset[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    foxtra['gap'] = sizing;
    michal['microphoneUnitHeader'] = foxtra;
    foxtra = {};
    sizing = 'absolute';
    foxtra['position'] = sizing;
    sizing = offset[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_32;
    foxtra['right'] = sizing;
    backup = offset[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    foxtra['top'] = backup;
    backup = 0.1;
    foxtra['opacity'] = backup;
    michal['previewContainer'] = foxtra;
    michal = option.bind(romeon)(michal);
    var _closure1_slot14 = michal;
    option = yankee.createContext;
    michal = {};
    romeon = false;
    michal['isInQuestBottomSheet'] = romeon;
    michal = option.bind(yankee)(michal);
    var _closure1_slot15 = michal;
    option = 31;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    option = verify.bind(offset)(option);
    golfie = function(argFoo) { // Original name: QuestBottomSheetConnected
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.questId;
            var _closure2_slot0 = michal;
            michal = entity.initialStep;
            var _closure2_slot1 = michal;
            golfie = entity.questContentPosition;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 17;
            entity = tangon[entity];
            report = undefined;
            option = zuuluu.bind(report)(entity);
            tangon = option.useStateFromStores;
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
            option = tangon.bind(option)(zuuluu, entity);
            entity = null;
            zuuluu = entity == option;
            if(zuuluu) { _fun00020_ip = 190; continue _fun00019 }
 95:
            tangon = _closure1_slot10;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 18;
            michal = offset[michal];
            michal = verify.bind(report)(michal);
            zuuluu = michal.QuestContentImpressionTrackerNative;
            michal = {};
            yankee = true;
            michal['overrideVisibility'] = yankee;
            michal['questOrQuests'] = option;
            option = 15;
            option = offset[option];
            option = verify.bind(report)(option);
            option = option.QuestContent;
            option = option.QUEST_BOTTOM_SHEET;
            michal['questContent'] = option;
            michal['questContentPosition'] = golfie;
            oscard = function() { // Original name: children
                tangon = _closure1_slot10;
                zuuluu = _closure1_slot16;
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
 190:
            return entity;
        }
    };
    zuuluu['default'] = golfie;
    zuuluu['QuestBottomSheetStep'] = oscard;
    zuuluu['useEnrolledQuestContentProps'] = report;
    zuuluu['QuestBottomSheetContent'] = tangon;
    zuuluu['QuestBottomSheetContext'] = michal;
    return entity;
})();