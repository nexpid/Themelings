// app/modules/quests/QuestsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _manuallyStartConsoleQuest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 659; continue _fun00001 }
 13:
                    yankee = argFoo;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    michal = false;
 24:
                    foxtra = michal;
                    offset = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    SaveGenerator(address=37);
 35:
                    return verify;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 656; continue _fun00001 }
 46: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 4;
                    tangon = option[tangon];
                    tangon = golfie.bind(verify)(tangon);
                    option = tangon.HTTP;
                    golfie = option.post;
                    tangon = {};
                    backup = _closure1_slot8;
                    romeon = backup.QUEST_ON_CONSOLE_START;
                    yankee = romeon.bind(backup)(yankee);
                    tangon['url'] = yankee;
                    romeon = foxtra;
                    yankee = undefined;
                    if(!romeon) { _fun00002_ip = 119; continue _fun00001 }
 109:
                    romeon = {};
                    romeon['preview'] = foxtra;
                    yankee = romeon;
 119:
                    tangon['query'] = yankee;
                    yankee = true;
                    tangon['failImmediatelyWhenRateLimited'] = yankee;
                    yankee = false;
                    tangon['rejectWithError'] = yankee;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=145);
 143:
                    return tangon;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 307; continue _fun00001 }
 154:
                    golfie = tangon.body;
                    offset = golfie;
                    golfie = golfie.quest_user_status;
                    option = null;
                    if(!(option == golfie)) { _fun00002_ip = 240; continue _fun00001 }
 174:
                    golfie = offset;
                    golfie = golfie.error_hints_v2;
                    if(!(option != golfie)) { _fun00002_ip = 293; continue _fun00001 }
 187:
                    golfie = offset;
                    golfie = golfie.error_hints_v2;
                    golfie = golfie.length;
                    foxtra = 0;
                    if(!(golfie > foxtra)) { _fun00002_ip = 293; continue _fun00001 }
 207:
                    golfie = {};
                    option = offset;
                    romeon = option.error_hints_v2;
                    yankee = romeon.slice;
                    option = 5;
                    option = yankee.bind(romeon)(foxtra, option);
                    golfie['errorHints'] = option;
 237: // try_end0
                    return golfie;
 240: // try_start_1
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 5;
                    oscard = option[oscard];
                    option = golfie.bind(verify)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    yankee = 'QUESTS_USER_STATUS_UPDATE';
                    oscard['type'] = yankee;
                    offset = offset.quest_user_status;
                    oscard['user_status'] = offset;
                    oscard = golfie.bind(option)(oscard);
 293: // try_end1
                    oscard = {};
                    golfie = new Array(0);
                    oscard['errorHints'] = golfie;
                    return oscard;
 307:
                    return tangon;
 310: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 6;
                    oscard = offset[oscard];
                    oscard = golfie.bind(verify)(oscard);
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    output = golfie;
                    sizing = option;
                    oscard = new output[oscard](sizing, kiloes);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    report = oscard;
                    golfie = oscard.status;
                    oscard = 429;
                    if(!(oscard !== golfie)) { _fun00002_ip = 535; continue _fun00001 }
 379:
                    oscard = report;
                    report = oscard.getAnyErrorMessage;
                    oscard = report.bind(oscard)();
                    zuuluu = oscard;
                    report = null;
                    if(!(report == oscard)) { _fun00002_ip = 458; continue _fun00001 }
 401:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 8;
                    oscard = offset[report];
                    oscard = option.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = offset[report];
                    report = option.bind(verify)(report);
                    report = report.t;
                    report = report.xSCvBQ;
                    report = oscard.bind(golfie)(report);
                    _fun00002_ip = 461; continue _fun00001;
 458:
                    report = zuuluu;
 461:
                    zuuluu = {};
                    oscard = {};
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 7;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    golfie = golfie.QuestConsoleStartErrorLocal;
                    golfie = golfie.GENERIC;
                    oscard['type'] = golfie;
                    oscard['message'] = report;
                    report = '';
                    oscard['connected_account_id'] = report;
                    oscard['connected_account_type'] = report;
                    report = new Array(1);
                    report[0] = oscard;
                    zuuluu['errorHints'] = report;
                    return zuuluu;
 535:
                    zuuluu = {};
                    report = {};
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 7;
                    tangon = offset[tangon];
                    tangon = option.bind(verify)(tangon);
                    tangon = tangon.QuestConsoleStartErrorLocal;
                    tangon = tangon.RATE_LIMITED;
                    report['type'] = tangon;
                    tangon = 8;
                    oscard = offset[tangon];
                    oscard = option.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    tangon = offset[tangon];
                    tangon = option.bind(verify)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.Whhv4+;
                    tangon = oscard.bind(golfie)(tangon);
                    report['message'] = tangon;
                    tangon = '';
                    report['connected_account_id'] = tangon;
                    report['connected_account_type'] = tangon;
                    tangon = new Array(1);
                    tangon[0] = report;
                    zuuluu['errorHints'] = tangon;
                    return zuuluu;
 656:
                    return michal;
 659:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _manualStopConsoleQuest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 94; continue _fun00003 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    option = _closure1_slot8;
                    golfie = option.QUEST_ON_CONSOLE_STOP;
                    oscard = argFoo;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=82);
 80:
                    return michal;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 91; continue _fun00003 }
 88:
                    return zuuluu;
 91:
                    return michal;
 94:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _resetRecentQuestCompletions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 86; continue _fun00005 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.del;
                    michal = {};
                    oscard = _closure1_slot8;
                    oscard = oscard.QUESTS_RESET_RECENT_QUEST_COMPLETIONS;
                    michal['url'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=74);
 72:
                    return michal;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 83; continue _fun00005 }
 80:
                    return zuuluu;
 83:
                    return michal;
 86:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchCurrentQuests
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 483; continue _fun00007 }
 12:
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.isFetchingCurrentQuests;
                    if(zuuluu) { _fun00008_ip = 478; continue _fun00007 }
 31:
                    option = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    golfie = 5;
                    oscard = zuuluu[golfie];
                    report = undefined;
                    offset = option.bind(report)(oscard);
                    verify = offset.dispatch;
                    oscard = {};
                    yankee = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                    oscard['type'] = yankee;
                    oscard = verify.bind(offset)(oscard);
                    oscard = 9;
                    zuuluu = zuuluu[oscard];
                    verify = option.bind(report)(zuuluu);
                    option = verify.recordQuestRequestAttempt;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.QUESTS_CURRENT_QUESTS;
                    zuuluu = option.bind(verify)(zuuluu);
 106: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(report)(zuuluu);
                    verify = zuuluu.HTTP;
                    option = verify.get;
                    zuuluu = {};
                    offset = _closure1_slot8;
                    offset = offset.QUESTS_CURRENT_QUESTS;
                    zuuluu['url'] = offset;
                    offset = false;
                    zuuluu['rejectWithError'] = offset;
                    zuuluu = option.bind(verify)(zuuluu);
                    SaveGenerator(address=167);
 165:
                    return zuuluu;
 167:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00008_ip = 355; continue _fun00007 }
 176:
                    option = zuuluu.body;
                    offset = option.quests;
                    verify = offset.filter;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.isQuestWithKnownConfigVersion;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    offset = verify.bind(offset)(option);
                    verify = offset.map;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.questWithUserStatusFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    verify = verify.bind(offset)(option);
                    option = zuuluu.body;
                    romeon = option.quest_enrollment_blocked_until;
                    option = verify.filter;
                    tangon = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = argFoo;
                            tangon = michal.userStatus;
                            zuuluu = null;
                            oscard = zuuluu == tangon;
                            report = undefined;
                            entity = undefined;
                            if(oscard) { _fun00010_ip = 28; continue _fun00009 }
 22:
                            entity = tangon.claimedAt;
 28:
                            entity = zuuluu != entity;
                            if(entity) { _fun00010_ip = 97; continue _fun00009 }
 35:
                            tangon = _closure1_slot0;
                            oscard = _closure1_slot2;
                            zuuluu = 11;
                            zuuluu = oscard[zuuluu];
                            zuuluu = tangon.bind(report)(zuuluu);
                            tangon = zuuluu.SharedQuestFields;
                            zuuluu = tangon.build;
                            michal = michal.config;
                            michal = zuuluu.bind(tangon)(michal);
                            michal = michal.rewardPlatforms;
                            zuuluu = michal.length;
                            michal = 0;
                            entity = zuuluu > michal;
 97:
                            return entity;
                        }
                    };
                    backup = option.bind(verify)(tangon);
                    tangon = zuuluu.body;
                    foxtra = tangon.excluded_quests;
                    option = _closure1_slot1;
                    tangon = _closure1_slot2;
                    verify = tangon[golfie];
                    yankee = option.bind(report)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    kiloes = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    verify['type'] = kiloes;
                    verify['quests'] = backup;
                    verify['excludedQuests'] = foxtra;
                    verify['questEnrollmentBlockedUntil'] = romeon;
                    verify = offset.bind(yankee)(verify);
                    tangon = tangon[oscard];
                    offset = option.bind(report)(tangon);
                    verify = offset.recordQuestRequestApiResponse;
                    tangon = _closure1_slot8;
                    option = tangon.QUESTS_CURRENT_QUESTS;
                    tangon = {};
                    yankee = true;
                    tangon['wasSuccessful'] = yankee;
                    tangon = verify.bind(offset)(option, tangon);
 350: // try_end0
                    _fun00008_ip = 478; continue _fun00007;
 355:
                    return zuuluu;
 358: // catch_target0
                    CatchBlockStart(arg_register=11);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    golfie = zuuluu[golfie];
                    verify = tangon.bind(report)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                    golfie['type'] = offset;
                    offset = 6;
                    offset = zuuluu[offset];
                    offset = tangon.bind(report)(offset);
                    yankee = offset.prototype;
                    yankee = Object.create(yankee, {constructor: {value: offset}});
                    result = yankee;
                    output = romeon;
                    offset = new result[offset](output, sizing);
                    offset = offset instanceof Object ? offset : yankee;
                    golfie['error'] = offset;
                    golfie = option.bind(verify)(golfie);
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.recordQuestRequestApiResponse;
                    michal = _closure1_slot8;
                    zuuluu = michal.QUESTS_CURRENT_QUESTS;
                    michal = {};
                    oscard = false;
                    michal['wasSuccessful'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 478:
                    michal = undefined;
                    return michal;
 483:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _sendHeartbeat
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 483; continue _fun00011 }
 13:
                    option = michal.questId;
                    golfie = michal.streamKey;
                    michal = michal.terminal;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00012_ip = 39; continue _fun00011 }
 37:
                    michal = false;
 39:
                    verify = michal;
                    backup = undefined;
                    SaveGenerator(address=48);
 46:
                    return zuuluu;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 480; continue _fun00011 }
 57: // try_start_0
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tangon = 12;
                    tangon = sizing[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.post;
                    tangon = {};
                    romeon = _closure1_slot8;
                    yankee = romeon.QUESTS_HEARTBEAT;
                    foxtra = option;
                    yankee = yankee.bind(romeon)(foxtra);
                    tangon['url'] = yankee;
                    yankee = {};
                    romeon = golfie;
                    yankee['stream_key'] = romeon;
                    yankee['terminal'] = verify;
                    tangon['body'] = yankee;
                    yankee = {};
                    kiloes = _closure1_slot0;
                    romeon = 13;
                    romeon = sizing[romeon];
                    romeon = kiloes.bind(zuuluu)(romeon);
                    romeon = romeon.NetworkActionNames;
                    romeon = romeon.QUEST_HEARTBEAT;
                    yankee['event'] = romeon;
                    romeon = {};
                    romeon['quest_id'] = foxtra;
                    romeon['terminal'] = verify;
                    verify = false;
                    romeon['is_overlay'] = verify;
                    foxtra = global;
                    foxtra = foxtra.Error;
                    kiloes = foxtra.prototype;
                    kiloes = Object.create(kiloes, {constructor: {value: foxtra}});
                    result = kiloes;
                    foxtra = new result[foxtra](output);
                    foxtra = foxtra instanceof Object ? foxtra : kiloes;
                    kiloes = foxtra.stack;
                    backup = kiloes;
                    foxtra = null;
                    kiloes = foxtra != kiloes;
                    foxtra = '';
                    if(!kiloes) { _fun00012_ip = 238; continue _fun00011 }
 235:
                    foxtra = backup;
 238:
                    romeon['stack_trace'] = foxtra;
                    foxtra = true;
                    romeon['is_playtime_eligible'] = foxtra;
                    yankee['properties'] = romeon;
                    tangon['trackedActionData'] = yankee;
                    tangon['rejectWithError'] = verify;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=275);
 273:
                    return tangon;
 275:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 378; continue _fun00011 }
 281:
                    oscard = _closure1_slot1;
                    romeon = _closure1_slot2;
                    report = 5;
                    report = romeon[report];
                    verify = oscard.bind(zuuluu)(report);
                    oscard = verify.dispatch;
                    report = {};
                    yankee = 'QUESTS_SEND_HEARTBEAT_SUCCESS';
                    report['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = romeon[offset];
                    romeon = yankee.bind(zuuluu)(offset);
                    yankee = romeon.questUserStatusFromServer;
                    offset = tangon.body;
                    offset = yankee.bind(romeon)(offset);
                    report['userStatus'] = offset;
                    offset = option;
                    report['questId'] = offset;
                    offset = golfie;
                    report['streamKey'] = offset;
                    report = oscard.bind(verify)(report);
 376: // try_end0
                    _fun00012_ip = 477; continue _fun00011;
 378:
                    return tangon;
 381: // catch_target0
                    CatchBlockStart(arg_register=10);
                    offset = _closure1_slot1;
                    romeon = _closure1_slot2;
                    tangon = 5;
                    tangon = romeon[tangon];
                    oscard = offset.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'QUESTS_SEND_HEARTBEAT_FAILURE';
                    tangon['type'] = verify;
                    verify = 6;
                    verify = romeon[verify];
                    verify = offset.bind(zuuluu)(verify);
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    result = offset;
                    output = yankee;
                    verify = new result[verify](output, sizing);
                    verify = verify instanceof Object ? verify : offset;
                    tangon['error'] = verify;
                    tangon['questId'] = option;
                    tangon['streamKey'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 477:
                    return zuuluu;
 480:
                    return michal;
 483:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _enrollInQuest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 472; continue _fun00013 }
 13:
                    report = argFoo;
                    offset = michal;
                    zuuluu = michal.questContentCTA;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 135; continue _fun00013 }
 31:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.trackQuestContentClicked;
                    michal = {};
                    oscard = report;
                    michal['questId'] = oscard;
                    oscard = offset;
                    golfie = oscard.questContent;
                    michal['questContent'] = golfie;
                    golfie = oscard.questContentCTA;
                    michal['questContentCTA'] = golfie;
                    golfie = oscard.questContentPosition;
                    michal['questContentPosition'] = golfie;
                    golfie = oscard.questContentRowIndex;
                    michal['questContentRowIndex'] = golfie;
                    oscard = oscard.sourceQuestContent;
                    michal['sourceQuestContent'] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
 135:
                    oscard = _closure1_slot4;
                    tangon = oscard.isEnrolling;
                    zuuluu = report;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    if(zuuluu) { _fun00014_ip = 467; continue _fun00013 }
 162:
                    golfie = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    oscard = 5;
                    zuuluu = zuuluu[oscard];
                    tangon = undefined;
                    option = golfie.bind(tangon)(zuuluu);
                    golfie = option.dispatch;
                    zuuluu = {};
                    verify = 'QUESTS_ENROLL_BEGIN';
                    zuuluu['type'] = verify;
                    verify = report;
                    zuuluu['questId'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
 214: // try_start_0
                    foxtra = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = yankee[zuuluu];
                    zuuluu = foxtra.bind(tangon)(zuuluu);
                    option = zuuluu.HTTP;
                    golfie = option.post;
                    zuuluu = {};
                    romeon = _closure1_slot8;
                    verify = romeon.QUESTS_ENROLL;
                    backup = report;
                    verify = verify.bind(romeon)(backup);
                    zuuluu['url'] = verify;
                    verify = {};
                    romeon = offset.questContent;
                    verify['location'] = romeon;
                    romeon = 10;
                    yankee = yankee[romeon];
                    foxtra = foxtra.bind(tangon)(yankee);
                    yankee = foxtra.getAdDecisionData;
                    offset = offset.questContent;
                    kiloes = yankee.bind(foxtra)(backup, offset);
                    sizing = verify;
                    offset = copyDataProperties(sizing, kiloes);
                    zuuluu['body'] = verify;
                    verify = true;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=337);
 335:
                    return zuuluu;
 337:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00014_ip = 418; continue _fun00013 }
 343:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = offset[oscard];
                    verify = option.bind(tangon)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'QUESTS_ENROLL_SUCCESS';
                    golfie['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = offset[romeon];
                    romeon = yankee.bind(tangon)(offset);
                    yankee = romeon.questUserStatusFromServer;
                    offset = zuuluu.body;
                    offset = yankee.bind(romeon)(offset);
                    golfie['enrolledQuestUserStatus'] = offset;
                    golfie = option.bind(verify)(golfie);
 416: // try_end0
                    _fun00014_ip = 467; continue _fun00013;
 418:
                    return zuuluu;
 421: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'QUESTS_ENROLL_FAILURE';
                    michal['type'] = oscard;
                    michal['questId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 467:
                    michal = undefined;
                    return michal;
 472:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _claimQuestReward
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 463; continue _fun00015 }
 13:
                    golfie = option;
                    romeon = argBar;
                    yankee = argBaz;
                    michal = undefined;
                    oscard = undefined;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.isClaimingReward;
                    zuuluu = zuuluu.bind(tangon)(option);
                    if(zuuluu) { _fun00016_ip = 460; continue _fun00015 }
 50:
                    option = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    tangon = 5;
                    zuuluu = zuuluu[tangon];
                    verify = option.bind(michal)(zuuluu);
                    option = verify.dispatch;
                    zuuluu = {};
                    offset = 'QUESTS_CLAIM_REWARD_BEGIN';
                    zuuluu['type'] = offset;
                    offset = golfie;
                    zuuluu['questId'] = offset;
                    zuuluu = option.bind(verify)(zuuluu);
 100: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(michal)(zuuluu);
                    verify = zuuluu.HTTP;
                    option = verify.post;
                    zuuluu = {};
                    backup = _closure1_slot8;
                    foxtra = backup.QUESTS_CLAIM_REWARD;
                    offset = golfie;
                    offset = foxtra.bind(backup)(offset);
                    zuuluu['url'] = offset;
                    offset = {};
                    offset['platform'] = romeon;
                    offset['location'] = yankee;
                    zuuluu['body'] = offset;
                    offset = false;
                    zuuluu['rejectWithError'] = offset;
                    zuuluu = option.bind(verify)(zuuluu);
                    SaveGenerator(address=185);
 183:
                    return zuuluu;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00016_ip = 370; continue _fun00015 }
 194:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 10;
                    option = offset[option];
                    offset = verify.bind(michal)(option);
                    verify = offset.questsEntitlementsFromServer;
                    option = zuuluu.body;
                    option = verify.bind(offset)(option);
                    oscard = option;
                    option = option.errors;
                    verify = option.length;
                    option = 0;
                    if(!(option !== verify)) { _fun00016_ip = 312; continue _fun00015 }
 250:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[tangon];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'QUESTS_CLAIM_REWARD_FAILURE';
                    option['type'] = yankee;
                    yankee = oscard;
                    yankee = yankee.errors;
                    option['error'] = yankee;
                    yankee = golfie;
                    option['questId'] = yankee;
                    option = verify.bind(offset)(option);
                    _fun00016_ip = 367; continue _fun00015;
 312:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[tangon];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'QUESTS_CLAIM_REWARD_SUCCESS';
                    option['type'] = yankee;
                    yankee = golfie;
                    option['questId'] = yankee;
                    yankee = oscard;
                    option['entitlements'] = yankee;
                    option = verify.bind(offset)(option);
 367: // try_end0
                    return oscard;
 370:
                    return zuuluu;
 373: // catch_target0
                    CatchBlockStart(arg_register=2);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = offset[tangon];
                    oscard = verify.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'QUESTS_CLAIM_REWARD_FAILURE';
                    tangon['type'] = option;
                    option = 6;
                    option = offset[option];
                    option = verify.bind(michal)(option);
                    verify = option.prototype;
                    verify = Object.create(verify, {constructor: {value: option}});
                    sizing = verify;
                    kiloes = zuuluu;
                    option = new sizing[option](kiloes, backup);
                    option = option instanceof Object ? option : verify;
                    tangon['error'] = option;
                    tangon['questId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 460:
                    return michal;
 463:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _fetchQuestRewardCode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 348; continue _fun00017 }
 13:
                    oscard = report;
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.isFetchingRewardCode;
                    michal = michal.bind(zuuluu)(report);
                    if(michal) { _fun00018_ip = 343; continue _fun00017 }
 40:
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    zuuluu = 5;
                    michal = michal[zuuluu];
                    verify = undefined;
                    golfie = report.bind(verify)(michal);
                    report = golfie.dispatch;
                    michal = {};
                    option = 'QUESTS_FETCH_REWARD_CODE_BEGIN';
                    michal['type'] = option;
                    option = oscard;
                    michal['questId'] = option;
                    michal = report.bind(golfie)(michal);
 92: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 4;
                    michal = golfie[michal];
                    michal = report.bind(verify)(michal);
                    golfie = michal.HTTP;
                    report = golfie.get;
                    michal = {};
                    yankee = _closure1_slot8;
                    offset = yankee.QUESTS_REWARD_CODE;
                    option = oscard;
                    option = offset.bind(yankee)(option);
                    michal['url'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(golfie)(michal);
                    SaveGenerator(address=161);
 159:
                    return michal;
 161:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00018_ip = 253; continue _fun00017 }
 167:
                    golfie = _closure1_slot1;
                    romeon = _closure1_slot2;
                    report = romeon[zuuluu];
                    option = golfie.bind(verify)(report);
                    golfie = option.dispatch;
                    report = {};
                    offset = 'QUESTS_FETCH_REWARD_CODE_SUCCESS';
                    report['type'] = offset;
                    offset = oscard;
                    report['questId'] = offset;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = romeon[offset];
                    romeon = yankee.bind(verify)(offset);
                    yankee = romeon.questsRewardCodeFromServer;
                    offset = michal.body;
                    offset = yankee.bind(romeon)(offset);
                    report['rewardCode'] = offset;
                    report = golfie.bind(option)(report);
 251: // try_end0
                    _fun00018_ip = 343; continue _fun00017;
 253:
                    return michal;
 256: // catch_target0
                    CatchBlockStart(arg_register=1);
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = offset[zuuluu];
                    report = option.bind(verify)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'QUESTS_FETCH_REWARD_CODE_FAILURE';
                    zuuluu['type'] = golfie;
                    golfie = 6;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    option = golfie.prototype;
                    option = Object.create(option, {constructor: {value: golfie}});
                    backup = option;
                    foxtra = michal;
                    golfie = new backup[golfie](foxtra, romeon);
                    golfie = golfie instanceof Object ? golfie : option;
                    zuuluu['error'] = golfie;
                    zuuluu['questId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 343:
                    michal = undefined;
                    return michal;
 348:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _dismissQuestContent
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    option = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 393; continue _fun00019 }
 16:
                    oscard = report;
                    verify = option;
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.isDismissingContent;
                    report = michal.bind(zuuluu)(report);
                    golfie = _closure1_slot0;
                    michal = _closure1_slot2;
                    romeon = 10;
                    zuuluu = michal[romeon];
                    michal = undefined;
                    golfie = golfie.bind(michal)(zuuluu);
                    zuuluu = golfie.isDismissible;
                    zuuluu = zuuluu.bind(golfie)(option);
                    if(report) { _fun00020_ip = 390; continue _fun00019 }
 81:
                    if(!zuuluu) { _fun00020_ip = 390; continue _fun00019 }
 87:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    report = report[zuuluu];
                    option = golfie.bind(michal)(report);
                    golfie = option.dispatch;
                    report = {};
                    offset = 'QUESTS_DISMISS_CONTENT_BEGIN';
                    report['type'] = offset;
                    offset = oscard;
                    report['questId'] = offset;
                    offset = verify;
                    report['content'] = offset;
                    report = golfie.bind(option)(report);
 144: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 4;
                    report = option[report];
                    report = golfie.bind(michal)(report);
                    option = report.HTTP;
                    golfie = option.post;
                    report = {};
                    foxtra = _closure1_slot8;
                    yankee = foxtra.QUESTS_DISMISS_CONTENT;
                    offset = oscard;
                    verify = yankee.bind(foxtra)(offset, verify);
                    report['url'] = verify;
                    verify = {};
                    report['body'] = verify;
                    verify = false;
                    report['rejectWithError'] = verify;
                    report = golfie.bind(option)(report);
                    SaveGenerator(address=221);
 219:
                    return report;
 221:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00020_ip = 302; continue _fun00019 }
 227:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = offset[zuuluu];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                    golfie['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = offset[romeon];
                    romeon = yankee.bind(michal)(offset);
                    yankee = romeon.questUserStatusFromServer;
                    offset = report.body;
                    offset = yankee.bind(romeon)(offset);
                    golfie['dismissedQuestUserStatus'] = offset;
                    golfie = option.bind(verify)(golfie);
 300: // try_end0
                    _fun00020_ip = 390; continue _fun00019;
 302:
                    return report;
 305: // catch_target0
                    CatchBlockStart(arg_register=8);
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = offset[zuuluu];
                    report = option.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'QUESTS_DISMISS_CONTENT_FAILURE';
                    zuuluu['type'] = golfie;
                    golfie = 6;
                    golfie = offset[golfie];
                    golfie = option.bind(michal)(golfie);
                    option = golfie.prototype;
                    option = Object.create(option, {constructor: {value: golfie}});
                    sizing = option;
                    kiloes = verify;
                    golfie = new sizing[golfie](kiloes, backup);
                    golfie = golfie instanceof Object ? golfie : option;
                    zuuluu['error'] = golfie;
                    zuuluu['questId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 390:
                    return michal;
 393:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _completeQuestPreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 312; continue _fun00021 }
 13:
                    golfie = argFoo;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00022_ip = 25; continue _fun00021 }
 22:
                    michal = 1;
 25:
                    offset = michal;
                    SaveGenerator(address=32);
 30:
                    return zuuluu;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00022_ip = 309; continue _fun00021 }
 41: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    romeon = _closure1_slot8;
                    yankee = romeon.QUESTS_PREVIEW_COMPLETE;
                    option = golfie;
                    option = yankee.bind(romeon)(option);
                    tangon['url'] = option;
                    option = {};
                    option['percent'] = offset;
                    tangon['body'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=125);
 123:
                    return tangon;
 125:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00022_ip = 212; continue _fun00021 }
 131:
                    oscard = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 5;
                    report = yankee[report];
                    option = oscard.bind(zuuluu)(report);
                    oscard = option.dispatch;
                    report = {};
                    offset = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    report['type'] = offset;
                    offset = _closure1_slot0;
                    verify = 10;
                    verify = yankee[verify];
                    yankee = offset.bind(zuuluu)(verify);
                    offset = yankee.questUserStatusFromServer;
                    verify = tangon.body;
                    verify = offset.bind(yankee)(verify);
                    report['previewQuestUserStatus'] = verify;
                    report = oscard.bind(option)(report);
 210: // try_end0
                    _fun00022_ip = 306; continue _fun00021;
 212:
                    return tangon;
 215: // catch_target0
                    CatchBlockStart(arg_register=9);
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tangon = 5;
                    tangon = yankee[tangon];
                    oscard = verify.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    tangon['type'] = option;
                    option = 6;
                    option = yankee[option];
                    option = verify.bind(zuuluu)(option);
                    verify = option.prototype;
                    verify = Object.create(verify, {constructor: {value: option}});
                    backup = verify;
                    foxtra = offset;
                    option = new backup[option](foxtra, romeon);
                    option = option instanceof Object ? option : verify;
                    tangon['error'] = option;
                    tangon['questId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 306:
                    return zuuluu;
 309:
                    return michal;
 312:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _resetQuestPreviewStatus
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 282; continue _fun00023 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 4;
                    michal = tangon[michal];
                    verify = undefined;
                    michal = zuuluu.bind(verify)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.del;
                    michal = {};
                    offset = _closure1_slot8;
                    option = offset.QUESTS_PREVIEW_STATUS;
                    oscard = report;
                    oscard = option.bind(offset)(oscard);
                    michal['url'] = oscard;
                    oscard = {};
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=94);
 92:
                    return michal;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00024_ip = 181; continue _fun00023 }
 100:
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = offset[zuuluu];
                    oscard = tangon.bind(verify)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    option = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    zuuluu['type'] = option;
                    option = _closure1_slot0;
                    golfie = 10;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.questUserStatusFromServer;
                    golfie = michal.body;
                    golfie = option.bind(verify)(golfie);
                    zuuluu['previewQuestUserStatus'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
 179: // try_end0
                    _fun00024_ip = 277; continue _fun00023;
 181:
                    return michal;
 184: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 5;
                    michal = offset[michal];
                    golfie = undefined;
                    tangon = verify.bind(golfie)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    michal['type'] = oscard;
                    oscard = 6;
                    oscard = offset[oscard];
                    oscard = verify.bind(golfie)(oscard);
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    romeon = golfie;
                    yankee = option;
                    oscard = new romeon[oscard](yankee, offset);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    michal['error'] = oscard;
                    michal['questId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 277:
                    michal = undefined;
                    return michal;
 282:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot19 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _resetQuestDismissibilityStatus
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00026_ip = 317; continue _fun00025 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    michal = oscard[zuuluu];
                    verify = undefined;
                    option = tangon.bind(verify)(michal);
                    tangon = option.dispatch;
                    michal = {};
                    offset = 'QUESTS_DOCK_RESET_SOFT_DISMISSAL';
                    michal['type'] = offset;
                    michal = tangon.bind(option)(michal);
                    tangon = _closure1_slot0;
                    michal = 4;
                    michal = oscard[michal];
                    michal = tangon.bind(verify)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.del;
                    michal = {};
                    yankee = _closure1_slot8;
                    offset = yankee.QUESTS_PREVIEW_DISMISSIBILITY;
                    option = report;
                    option = offset.bind(yankee)(option);
                    michal['url'] = option;
                    option = {};
                    michal['body'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=132);
 130:
                    return michal;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00026_ip = 216; continue _fun00025 }
 138:
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = offset[zuuluu];
                    oscard = tangon.bind(verify)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    option = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    zuuluu['type'] = option;
                    option = _closure1_slot0;
                    golfie = 10;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.questUserStatusFromServer;
                    golfie = michal.body;
                    golfie = option.bind(verify)(golfie);
                    zuuluu['previewQuestUserStatus'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
 214: // try_end0
                    _fun00026_ip = 312; continue _fun00025;
 216:
                    return michal;
 219: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 5;
                    michal = offset[michal];
                    golfie = undefined;
                    tangon = verify.bind(golfie)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    michal['type'] = oscard;
                    oscard = 6;
                    oscard = offset[oscard];
                    oscard = verify.bind(golfie)(oscard);
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    foxtra = golfie;
                    romeon = option;
                    oscard = new foxtra[oscard](romeon, yankee);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    michal['error'] = oscard;
                    michal['questId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 312:
                    michal = undefined;
                    return michal;
 317:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _fetchClaimedQuests
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00028_ip = 302; continue _fun00027 }
 10:
                    michal = _closure1_slot4;
                    michal = michal.isFetchingClaimedQuests;
                    if(michal) { _fun00028_ip = 297; continue _fun00027 }
 29:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 5;
                    tangon = tangon[michal];
                    option = undefined;
                    oscard = report.bind(option)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN';
                    tangon['type'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 73: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    tangon = oscard[tangon];
                    tangon = report.bind(option)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    golfie = _closure1_slot8;
                    golfie = golfie.QUESTS_CLAIMED_QUESTS;
                    tangon['url'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=134);
 132:
                    return tangon;
 134:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00028_ip = 214; continue _fun00027 }
 140:
                    report = tangon.body;
                    golfie = report.quests;
                    oscard = golfie.map;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getClaimedQuestWithUserStatusFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    verify = oscard.bind(golfie)(report);
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[michal];
                    golfie = oscard.bind(option)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    offset = 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS';
                    report['type'] = offset;
                    report['quests'] = verify;
                    report = oscard.bind(golfie)(report);
 212: // try_end0
                    _fun00028_ip = 297; continue _fun00027;
 214:
                    return tangon;
 217: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscard = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = verify[michal];
                    tangon = oscard.bind(option)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE';
                    michal['type'] = report;
                    report = 6;
                    report = verify[report];
                    report = oscard.bind(option)(report);
                    oscard = report.prototype;
                    oscard = Object.create(oscard, {constructor: {value: report}});
                    romeon = oscard;
                    yankee = golfie;
                    report = new romeon[report](yankee, offset);
                    report = report instanceof Object ? report : oscard;
                    michal['error'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 297:
                    michal = undefined;
                    return michal;
 302:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot21 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _fetchQuestToDeliver
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    foxtra = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 1088; continue _fun00029 }
 13:
                    oscard = foxtra;
                    michal = undefined;
                    config = undefined;
                    sequen = undefined;
                    vacuum = undefined;
                    ctrled = undefined;
                    source = undefined;
                    update = undefined;
                    papara = undefined;
                    kiloes = undefined;
                    output = undefined;
                    option = undefined;
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    tangon = report[zuuluu];
                    romeon = offset.bind(michal)(tangon);
                    yankee = romeon.dispatch;
                    tangon = {};
                    backup = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                    tangon['type'] = backup;
                    tangon['placement'] = foxtra;
                    tangon = yankee.bind(romeon)(tangon);
                    tangon = 9;
                    report = report[tangon];
                    offset = offset.bind(michal)(report);
                    report = offset.recordQuestRequestAttempt;
                    yankee = '/quests/decision';
                    report = report.bind(offset)(yankee);
 117: // try_start_0
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 15;
                    report = romeon[report];
                    offset = offset.bind(michal)(report);
                    report = offset.getSession;
                    report = report.bind(offset)();
                    SaveGenerator(address=151);
 149:
                    return report;
 151:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00030_ip = 802; continue _fun00029 }
 160:
                    papara = report;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    offset = 16;
                    offset = foxtra[offset];
                    romeon = romeon.bind(michal)(offset);
                    offset = romeon.getOrRefreshAdSession;
                    offset = offset.bind(romeon)();
                    SaveGenerator(address=197);
 195:
                    return offset;
 197:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(romeon) { _fun00030_ip = 799; continue _fun00029 }
 206:
                    kiloes = offset;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeon = 4;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(michal)(romeon);
                    backup = romeon.HTTP;
                    foxtra = backup.get;
                    romeon = {};
                    cntext = _closure1_slot8;
                    record = cntext.QUEST_FETCH_QUEST_TO_DELIVER;
                    result = oscard;
                    sizing = papara;
                    echoed = null;
                    target = echoed == sizing;
                    sizing = undefined;
                    if(target) { _fun00030_ip = 274; continue _fun00029 }
 268:
                    sizing = papara.uuid;
 274:
                    kiloes = kiloes.uuid;
                    kiloes = record.bind(cntext)(result, sizing, kiloes);
                    romeon['url'] = kiloes;
                    kiloes = false;
                    romeon['rejectWithError'] = kiloes;
                    romeon = foxtra.bind(backup)(romeon);
                    SaveGenerator(address=306);
 304:
                    return romeon;
 306:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(foxtra) { _fun00030_ip = 796; continue _fun00029 }
 315:
                    result = romeon.body;
                    output = result;
                    backup = _closure1_slot1;
                    cntext = _closure1_slot2;
                    foxtra = cntext[zuuluu];
                    kiloes = backup.bind(michal)(foxtra);
                    backup = kiloes.dispatch;
                    foxtra = {};
                    sizing = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    foxtra['type'] = sizing;
                    record = _closure1_slot0;
                    sizing = 10;
                    sizing = cntext[sizing];
                    cntext = record.bind(michal)(sizing);
                    record = cntext.questConfigFromServer;
                    sizing = result.quest;
                    sizing = record.bind(cntext)(sizing);
                    foxtra['quest'] = sizing;
                    sizing = {};
                    result = result.ad_identifiers;
                    config = result;
                    record = echoed == result;
                    result = undefined;
                    if(record) { _fun00030_ip = 421; continue _fun00029 }
 415:
                    result = config.ad_id;
 421:
                    sizing['ad_id'] = result;
                    result = output;
                    result = result.ad_identifiers;
                    sequen = result;
                    config = echoed == result;
                    result = undefined;
                    if(config) { _fun00030_ip = 453; continue _fun00029 }
 447:
                    result = sequen.adset_id;
 453:
                    sizing['adset_id'] = result;
                    result = output;
                    result = result.ad_identifiers;
                    vacuum = result;
                    sequen = echoed == result;
                    result = undefined;
                    if(sequen) { _fun00030_ip = 485; continue _fun00029 }
 479:
                    result = vacuum.ad_set_id;
 485:
                    sizing['ad_set_id'] = result;
                    result = output;
                    result = result.ad_identifiers;
                    ctrled = result;
                    vacuum = echoed == result;
                    result = undefined;
                    if(vacuum) { _fun00030_ip = 517; continue _fun00029 }
 511:
                    result = ctrled.campaign_id;
 517:
                    sizing['campaign_id'] = result;
                    result = output;
                    result = result.ad_identifiers;
                    source = result;
                    ctrled = echoed == result;
                    result = undefined;
                    if(ctrled) { _fun00030_ip = 549; continue _fun00029 }
 543:
                    result = source.creative_id;
 549:
                    sizing['creative_id'] = result;
                    result = output;
                    result = result.ad_identifiers;
                    update = result;
                    source = echoed == result;
                    result = undefined;
                    if(source) { _fun00030_ip = 581; continue _fun00029 }
 575:
                    result = update.creative_type;
 581:
                    sizing['creative_type'] = result;
                    result = output.request_id;
                    sizing['decision_id'] = result;
                    result = output.ad_identifiers;
                    result = echoed != result;
                    sizing['is_targeted'] = result;
                    result = output.metadata_raw;
                    sizing['metadata_raw'] = result;
                    foxtra['adDecisionData'] = sizing;
                    sizing = oscard;
                    foxtra['placement'] = sizing;
                    foxtra = backup.bind(kiloes)(foxtra);
                    echoed = _closure1_slot1;
                    update = _closure1_slot2;
                    foxtra = update[tangon];
                    kiloes = echoed.bind(michal)(foxtra);
                    backup = kiloes.recordQuestRequestApiResponse;
                    foxtra = {};
                    sizing = true;
                    foxtra['wasSuccessful'] = sizing;
                    foxtra = backup.bind(kiloes)(yankee, foxtra);
                    foxtra = 17;
                    foxtra = update[foxtra];
                    kiloes = echoed.bind(michal)(foxtra);
                    backup = kiloes.startTracking;
                    foxtra = output.quest;
                    foxtra = foxtra.id;
                    foxtra = backup.bind(kiloes)(foxtra);
                    foxtra = 18;
                    foxtra = update[foxtra];
                    sizing = echoed.bind(michal)(foxtra);
                    kiloes = sizing.track;
                    foxtra = _closure1_slot7;
                    backup = foxtra.QUEST_DECISION_RECEIVED;
                    foxtra = {};
                    result = 19;
                    result = update[result];
                    result = echoed.bind(michal)(result);
                    sierra = result.bind(michal)();
                    limora = foxtra;
                    result = copyDataProperties(limora, sierra);
                    output = output.quest;
                    result = output.id;
                    output = 'quest_id';
                    foxtra[output] = result;
                    foxtra = kiloes.bind(sizing)(backup, foxtra);
 791: // try_end0
                    _fun00030_ip = 1085; continue _fun00029;
 796:
                    return romeon;
 799:
                    return offset;
 802:
                    return report;
 805: // catch_target0
                    CatchBlockStart(arg_register=12);
                    verify = foxtra;
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    tangon = kiloes[tangon];
                    offset = backup.bind(michal)(tangon);
                    report = offset.recordQuestRequestApiResponse;
                    tangon = {};
                    romeon = false;
                    tangon['wasSuccessful'] = romeon;
                    tangon = report.bind(offset)(yankee, tangon);
                    tangon = 18;
                    tangon = kiloes[tangon];
                    romeon = backup.bind(michal)(tangon);
                    yankee = romeon.track;
                    tangon = _closure1_slot7;
                    report = tangon.QUEST_DECISION_ROUNDTRIP_ERROR;
                    tangon = {};
                    offset = 19;
                    offset = kiloes[offset];
                    offset = backup.bind(michal)(offset);
                    sierra = offset.bind(michal)();
                    limora = tangon;
                    offset = copyDataProperties(limora, sierra);
                    offset = null;
                    backup = offset == foxtra;
                    foxtra = undefined;
                    if(backup) { _fun00030_ip = 919; continue _fun00029 }
 911:
                    backup = verify;
                    foxtra = backup.message;
 919:
                    option = foxtra;
                    foxtra = offset != foxtra;
                    offset = null;
                    if(!foxtra) { _fun00030_ip = 934; continue _fun00029 }
 931:
                    offset = option;
 934:
                    option = 'reason';
                    tangon[option] = offset;
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 6;
                    foxtra = offset[golfie];
                    foxtra = option.bind(michal)(foxtra);
                    backup = foxtra.prototype;
                    backup = Object.create(backup, {constructor: {value: foxtra}});
                    whisks = backup;
                    limora = verify;
                    foxtra = new whisks[foxtra](limora, sierra);
                    backup = foxtra instanceof Object ? foxtra : backup;
                    foxtra = backup.getAnyErrorMessage;
                    backup = foxtra.bind(backup)();
                    foxtra = 'api_error';
                    tangon[foxtra] = backup;
                    tangon = yankee.bind(romeon)(report, tangon);
                    zuuluu = offset[zuuluu];
                    report = option.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    yankee = 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE';
                    zuuluu['type'] = yankee;
                    golfie = offset[golfie];
                    golfie = option.bind(michal)(golfie);
                    option = golfie.prototype;
                    option = Object.create(option, {constructor: {value: golfie}});
                    whisks = option;
                    limora = verify;
                    golfie = new whisks[golfie](limora, sierra);
                    golfie = golfie instanceof Object ? golfie : option;
                    zuuluu['error'] = golfie;
                    zuuluu['placement'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 1085:
                    return michal;
 1088:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot22 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _updateVideoProgress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00032_ip = 229; continue _fun00031 }
 16:
                    tangon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    michal = 12;
                    michal = yankee[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.post;
                    michal = {};
                    offset = _closure1_slot8;
                    oscard = offset.QUESTS_VIDEO_PROGRESS;
                    oscard = oscard.bind(offset)(option);
                    michal['url'] = oscard;
                    oscard = {};
                    oscard['timestamp'] = verify;
                    michal['body'] = oscard;
                    oscard = {};
                    offset = _closure1_slot0;
                    golfie = 13;
                    golfie = yankee[golfie];
                    golfie = offset.bind(zuuluu)(golfie);
                    golfie = golfie.NetworkActionNames;
                    golfie = golfie.QUEST_VIDEO_PROGRESS;
                    oscard['event'] = golfie;
                    golfie = {};
                    golfie['quest_id'] = option;
                    option = verify.toString;
                    option = option.bind(verify)();
                    golfie['timestamp_sec'] = option;
                    option = global;
                    option = option.Error;
                    verify = option.prototype;
                    verify = Object.create(verify, {constructor: {value: option}});
                    foxtra = verify;
                    option = new foxtra[option](romeon);
                    option = option instanceof Object ? option : verify;
                    verify = option.stack;
                    option = null;
                    offset = option != verify;
                    option = '';
                    if(!offset) { _fun00032_ip = 187; continue _fun00031 }
 184:
                    option = verify;
 187:
                    golfie['stack_trace'] = option;
                    oscard['properties'] = golfie;
                    michal['trackedActionData'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=217);
 215:
                    return michal;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00032_ip = 226; continue _fun00031 }
 223:
                    return zuuluu;
 226:
                    return michal;
 229:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _fetchVideoTranscript
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00034_ip = 416; continue _fun00033 }
 13:
                    golfie = yankee;
                    michal = undefined;
                    option = undefined;
                    tangon = _closure1_slot0;
                    romeon = _closure1_slot2;
                    zuuluu = 20;
                    report = romeon[zuuluu];
                    offset = tangon.bind(michal)(report);
                    verify = offset.resolveVideoQuestAsset;
                    report = romeon[zuuluu];
                    report = tangon.bind(michal)(report);
                    report = report.VideoVariant;
                    backup = report.VIDEO;
                    zuuluu = romeon[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    zuuluu = zuuluu.VideoAssetProperty;
                    foxtra = zuuluu.TRANSCRIPT;
                    kiloes = argBar;
                    output = offset;
                    sizing = yankee;
                    tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                    option = tangon;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00034_ip = 173; continue _fun00033 }
 113:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getState;
                    report = zuuluu.bind(tangon)();
                    tangon = report.setTranscriptAsset;
                    zuuluu = {};
                    verify = golfie;
                    verify = verify.id;
                    zuuluu['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.FAILURE;
                    zuuluu['fetchStatus'] = verify;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00034_ip = 413; continue _fun00033;
 173:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getState;
                    report = zuuluu.bind(tangon)();
                    tangon = report.setTranscriptAsset;
                    zuuluu = {};
                    verify = golfie;
                    verify = verify.id;
                    zuuluu['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.FETCHING;
                    zuuluu['fetchStatus'] = verify;
                    zuuluu = tangon.bind(report)(zuuluu);
 228: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.get;
                    zuuluu = {};
                    option = option.url;
                    zuuluu['url'] = option;
                    option = true;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=284);
 282:
                    return zuuluu;
 284:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00034_ip = 356; continue _fun00033 }
 290:
                    report = _closure1_slot5;
                    tangon = report.getState;
                    option = tangon.bind(report)();
                    report = option.setTranscriptAsset;
                    tangon = {};
                    verify = golfie;
                    verify = verify.id;
                    tangon['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.SUCCESS;
                    tangon['fetchStatus'] = verify;
                    verify = zuuluu.text;
                    tangon['text'] = verify;
                    tangon = report.bind(option)(tangon);
 354: // try_end0
                    _fun00034_ip = 413; continue _fun00033;
 356:
                    return zuuluu;
 359: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getState;
                    report = zuuluu.bind(tangon)();
                    tangon = report.setTranscriptAsset;
                    zuuluu = {};
                    golfie = golfie.id;
                    zuuluu['questId'] = golfie;
                    oscard = _closure1_slot6;
                    oscard = oscard.FAILURE;
                    zuuluu['fetchStatus'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 413:
                    return michal;
 416:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _fetchQuest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00036_ip = 132; continue _fun00035 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    verify = _closure1_slot8;
                    option = verify.QUEST;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00036_ip = 129; continue _fun00035 }
 90:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.questConfigFromServer;
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 129:
                    return michal;
 132:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchStatus;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot7 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot8 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/QuestsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: manuallyStartConsoleQuest
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['manuallyStartConsoleQuest'] = tangon;
    tangon = function() { // Original name: manualStopConsoleQuest
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['manualStopConsoleQuest'] = tangon;
    tangon = function() { // Original name: resetRecentQuestCompletions
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['resetRecentQuestCompletions'] = tangon;
    tangon = function() { // Original name: fetchCurrentQuests
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchCurrentQuests'] = tangon;
    tangon = function() { // Original name: sendHeartbeat
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['sendHeartbeat'] = tangon;
    tangon = function() { // Original name: enrollInQuest
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['enrollInQuest'] = tangon;
    tangon = function() { // Original name: claimQuestReward
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['claimQuestReward'] = tangon;
    tangon = function() { // Original name: fetchQuestRewardCode
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchQuestRewardCode'] = tangon;
    tangon = function() { // Original name: dismissQuestContent
        entity = undefined;
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['dismissQuestContent'] = tangon;
    tangon = function(argFoo) { // Original name: dismissProgressTrackingFailureNotice
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE';
        michal['type'] = report;
        report = argFoo;
        michal['streamKey'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissProgressTrackingFailureNotice'] = tangon;
    tangon = function() { // Original name: completeQuestPreview
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['completeQuestPreview'] = tangon;
    tangon = function() { // Original name: resetQuestPreviewStatus
        entity = undefined;
        tangon = _closure1_slot19;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['resetQuestPreviewStatus'] = tangon;
    tangon = function() { // Original name: resetQuestDismissibilityStatus
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['resetQuestDismissibilityStatus'] = tangon;
    tangon = function(argFoo) { // Original name: overrideQuestDelivery
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_DELIVERY_OVERRIDE';
        michal['type'] = report;
        report = argFoo;
        michal['questId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['overrideQuestDelivery'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: selectTaskPlatform
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_SELECT_TASK_PLATFORM';
        michal['type'] = report;
        report = argFoo;
        michal['questId'] = report;
        report = argBar;
        michal['platform'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['selectTaskPlatform'] = tangon;
    tangon = function(argFoo) { // Original name: questsVisibleMobileMessagesChanged
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED';
        michal['type'] = report;
        report = argFoo;
        michal['payload'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['questsVisibleMobileMessagesChanged'] = tangon;
    tangon = function() { // Original name: fetchClaimedQuests
        entity = undefined;
        tangon = _closure1_slot21;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchClaimedQuests'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateOptimisticProgress
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS';
        michal['type'] = report;
        report = argFoo;
        michal['questId'] = report;
        report = argBar;
        michal['taskEventName'] = report;
        report = argBaz;
        michal['progress'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateOptimisticProgress'] = tangon;
    tangon = function() { // Original name: fetchQuestToDeliver
        entity = undefined;
        tangon = _closure1_slot22;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchQuestToDeliver'] = tangon;
    tangon = function(argFoo) { // Original name: updatePrevRestingQuestDockMode
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['mode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updatePrevRestingQuestDockMode'] = tangon;
    tangon = function() { // Original name: updateVideoProgress
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateVideoProgress'] = tangon;
    tangon = function() { // Original name: fetchVideoTranscript
        entity = undefined;
        tangon = _closure1_slot24;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchVideoTranscript'] = tangon;
    tangon = function(argFoo) { // Original name: updateQuestDockVisibilityOverride
        entity = argFoo;
        report = entity.isVisible;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE';
        michal['type'] = oscard;
        michal['isVisible'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateQuestDockVisibilityOverride'] = tangon;
    michal = function() { // Original name: fetchQuest
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchQuest'] = michal;
    return entity;
})();