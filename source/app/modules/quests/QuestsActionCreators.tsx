// app/modules/quests/QuestsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _manuallyStartConsoleQuest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 660; continue _fun00001 }
 13:
                    yankee = argFoo;
                    verify = undefined;
                    if(!(mike === verify)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    mike = false;
 24:
                    foxtrot = mike;
                    offset = undefined;
                    zulu = undefined;
                    report = undefined;
                    SaveGenerator(address=37);
 35:
                    return verify;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 657; continue _fun00001 }
 46: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 4;
                    tango = options[tango];
                    tango = golf.bind(verify)(tango);
                    options = tango.HTTP;
                    golf = options.post;
                    tango = {};
                    backup = _closure1_slot7;
                    romeo = backup.QUEST_ON_CONSOLE_START;
                    yankee = romeo.bind(backup)(yankee);
                    tango['url'] = yankee;
                    romeo = foxtrot;
                    yankee = undefined;
                    if(!romeo) { _fun00002_ip = 119; continue _fun00001 }
 109:
                    romeo = {};
                    romeo['preview'] = foxtrot;
                    yankee = romeo;
 119:
                    tango['query'] = yankee;
                    yankee = true;
                    tango['failImmediatelyWhenRateLimited'] = yankee;
                    yankee = false;
                    tango['rejectWithError'] = yankee;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=145);
 143:
                    return tango;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 308; continue _fun00001 }
 154:
                    golf = tango.body;
                    offset = golf;
                    golf = golf.quest_user_status;
                    options = null;
                    if(!(options == golf)) { _fun00002_ip = 241; continue _fun00001 }
 174:
                    golf = offset;
                    golf = golf.error_hints_v2;
                    if(!(options != golf)) { _fun00002_ip = 294; continue _fun00001 }
 187:
                    golf = offset;
                    golf = golf.error_hints_v2;
                    golf = golf.length;
                    foxtrot = 0;
                    if(!(golf > foxtrot)) { _fun00002_ip = 294; continue _fun00001 }
 207:
                    golf = {};
                    options = offset;
                    romeo = options.error_hints_v2;
                    yankee = romeo.slice;
                    options = _closure1_slot8;
                    options = yankee.bind(romeo)(foxtrot, options);
                    golf['errorHints'] = options;
 238: // try_end0
                    return golf;
 241: // try_start_1
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 5;
                    oscar = options[oscar];
                    options = golf.bind(verify)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    yankee = 'QUESTS_USER_STATUS_UPDATE';
                    oscar['type'] = yankee;
                    offset = offset.quest_user_status;
                    oscar['user_status'] = offset;
                    oscar = golf.bind(options)(oscar);
 294: // try_end1
                    oscar = {};
                    golf = new Array(0);
                    oscar['errorHints'] = golf;
                    return oscar;
 308:
                    return tango;
 311: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = 6;
                    oscar = offset[oscar];
                    oscar = golf.bind(verify)(oscar);
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    output = golf;
                    sizing = options;
                    oscar = new output[oscar](sizing, kilo);
                    oscar = oscar instanceof Object ? oscar : golf;
                    report = oscar;
                    golf = oscar.status;
                    oscar = 429;
                    if(!(oscar !== golf)) { _fun00002_ip = 536; continue _fun00001 }
 380:
                    oscar = report;
                    report = oscar.getAnyErrorMessage;
                    oscar = report.bind(oscar)();
                    zulu = oscar;
                    report = null;
                    if(!(report == oscar)) { _fun00002_ip = 459; continue _fun00001 }
 402:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 8;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = offset[report];
                    report = options.bind(verify)(report);
                    report = report.t;
                    report = report.xSCvBQ;
                    report = oscar.bind(golf)(report);
                    _fun00002_ip = 462; continue _fun00001;
 459:
                    report = zulu;
 462:
                    zulu = {};
                    oscar = {};
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 7;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    golf = golf.QuestConsoleStartErrorLocal;
                    golf = golf.GENERIC;
                    oscar['type'] = golf;
                    oscar['message'] = report;
                    report = '';
                    oscar['connected_account_id'] = report;
                    oscar['connected_account_type'] = report;
                    report = new Array(1);
                    report[0] = oscar;
                    zulu['errorHints'] = report;
                    return zulu;
 536:
                    zulu = {};
                    report = {};
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 7;
                    tango = offset[tango];
                    tango = options.bind(verify)(tango);
                    tango = tango.QuestConsoleStartErrorLocal;
                    tango = tango.RATE_LIMITED;
                    report['type'] = tango;
                    tango = 8;
                    oscar = offset[tango];
                    oscar = options.bind(verify)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    tango = offset[tango];
                    tango = options.bind(verify)(tango);
                    tango = tango.t;
                    tango = tango.Whhv4+;
                    tango = oscar.bind(golf)(tango);
                    report['message'] = tango;
                    tango = '';
                    report['connected_account_id'] = tango;
                    report['connected_account_type'] = tango;
                    tango = new Array(1);
                    tango[0] = report;
                    zulu['errorHints'] = tango;
                    return zulu;
 657:
                    return mike;
 660:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _manualStopConsoleQuest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 94; continue _fun00003 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {};
                    options = _closure1_slot7;
                    golf = options.QUEST_ON_CONSOLE_STOP;
                    oscar = argFoo;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=82);
 80:
                    return mike;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 91; continue _fun00003 }
 88:
                    return zulu;
 91:
                    return mike;
 94:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchCurrentQuests
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 457; continue _fun00005 }
 12:
                    zulu = _closure1_slot4;
                    zulu = zulu.isFetchingCurrentQuests;
                    if(zulu) { _fun00006_ip = 452; continue _fun00005 }
 31:
                    options = _closure1_slot1;
                    zulu = _closure1_slot2;
                    golf = 5;
                    oscar = zulu[golf];
                    report = undefined;
                    offset = options.bind(report)(oscar);
                    verify = offset.dispatch;
                    oscar = {};
                    yankee = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                    oscar['type'] = yankee;
                    oscar = verify.bind(offset)(oscar);
                    oscar = 9;
                    zulu = zulu[oscar];
                    verify = options.bind(report)(zulu);
                    options = verify.recordQuestRequestAttempt;
                    zulu = _closure1_slot7;
                    zulu = zulu.QUESTS_CURRENT_QUESTS;
                    zulu = options.bind(verify)(zulu);
 108: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 4;
                    zulu = verify[zulu];
                    zulu = options.bind(report)(zulu);
                    verify = zulu.HTTP;
                    options = verify.get;
                    zulu = {};
                    offset = _closure1_slot7;
                    offset = offset.QUESTS_CURRENT_QUESTS;
                    zulu['url'] = offset;
                    offset = false;
                    zulu['rejectWithError'] = offset;
                    zulu = options.bind(verify)(zulu);
                    SaveGenerator(address=169);
 167:
                    return zulu;
 169:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun00006_ip = 329; continue _fun00005 }
 178:
                    options = zulu.body;
                    offset = options.quests;
                    verify = offset.filter;
                    options = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.isQuestWithKnownConfigVersion;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    offset = verify.bind(offset)(options);
                    verify = offset.map;
                    options = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.questWithUserStatusFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = verify.bind(offset)(options);
                    options = verify.filter;
                    tango = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            mike = argFoo;
                            tango = mike.userStatus;
                            zulu = null;
                            oscar = zulu == tango;
                            report = undefined;
                            entity = undefined;
                            if(oscar) { _fun00008_ip = 28; continue _fun00007 }
 22:
                            entity = tango.claimedAt;
 28:
                            entity = zulu != entity;
                            if(entity) { _fun00008_ip = 97; continue _fun00007 }
 35:
                            tango = _closure1_slot0;
                            oscar = _closure1_slot2;
                            zulu = 11;
                            zulu = oscar[zulu];
                            zulu = tango.bind(report)(zulu);
                            tango = zulu.SharedQuestFields;
                            zulu = tango.build;
                            mike = mike.config;
                            mike = zulu.bind(tango)(mike);
                            mike = mike.rewardPlatforms;
                            zulu = mike.length;
                            mike = 0;
                            entity = zulu > mike;
 97:
                            return entity;
                        }
                    };
                    romeo = options.bind(verify)(tango);
                    options = _closure1_slot1;
                    tango = _closure1_slot2;
                    verify = tango[golf];
                    yankee = options.bind(report)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    foxtrot = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    verify['type'] = foxtrot;
                    verify['quests'] = romeo;
                    verify = offset.bind(yankee)(verify);
                    tango = tango[oscar];
                    offset = options.bind(report)(tango);
                    verify = offset.recordQuestRequestApiResponse;
                    tango = _closure1_slot7;
                    options = tango.QUESTS_CURRENT_QUESTS;
                    tango = {};
                    yankee = true;
                    tango['wasSuccessful'] = yankee;
                    tango = verify.bind(offset)(options, tango);
 324: // try_end0
                    _fun00006_ip = 452; continue _fun00005;
 329:
                    return zulu;
 332: // catch_target0
                    CatchBlockStart(arg_register=11);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    golf = zulu[golf];
                    verify = tango.bind(report)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                    golf['type'] = offset;
                    offset = 6;
                    offset = zulu[offset];
                    offset = tango.bind(report)(offset);
                    yankee = offset.prototype;
                    yankee = Object.create(yankee, {constructor: {value: offset}});
                    sizing = yankee;
                    kilo = romeo;
                    offset = new sizing[offset](kilo, backup);
                    offset = offset instanceof Object ? offset : yankee;
                    golf['error'] = offset;
                    golf = options.bind(verify)(golf);
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.recordQuestRequestApiResponse;
                    mike = _closure1_slot7;
                    zulu = mike.QUESTS_CURRENT_QUESTS;
                    mike = {};
                    oscar = false;
                    mike['wasSuccessful'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
 452:
                    mike = undefined;
                    return mike;
 457:
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
    entity = function() { // Original name: _sendHeartbeat
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 483; continue _fun00009 }
 13:
                    options = mike.questId;
                    golf = mike.streamKey;
                    mike = mike.terminal;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00010_ip = 39; continue _fun00009 }
 37:
                    mike = false;
 39:
                    verify = mike;
                    backup = undefined;
                    SaveGenerator(address=48);
 46:
                    return zulu;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00010_ip = 480; continue _fun00009 }
 57: // try_start_0
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tango = 12;
                    tango = sizing[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.post;
                    tango = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.QUESTS_HEARTBEAT;
                    foxtrot = options;
                    yankee = yankee.bind(romeo)(foxtrot);
                    tango['url'] = yankee;
                    yankee = {};
                    romeo = golf;
                    yankee['stream_key'] = romeo;
                    yankee['terminal'] = verify;
                    tango['body'] = yankee;
                    yankee = {};
                    kilo = _closure1_slot0;
                    romeo = 13;
                    romeo = sizing[romeo];
                    romeo = kilo.bind(zulu)(romeo);
                    romeo = romeo.NetworkActionNames;
                    romeo = romeo.QUEST_HEARTBEAT;
                    yankee['event'] = romeo;
                    romeo = {};
                    romeo['quest_id'] = foxtrot;
                    romeo['terminal'] = verify;
                    verify = false;
                    romeo['is_overlay'] = verify;
                    foxtrot = global;
                    foxtrot = foxtrot.Error;
                    kilo = foxtrot.prototype;
                    kilo = Object.create(kilo, {constructor: {value: foxtrot}});
                    result = kilo;
                    foxtrot = new result[foxtrot](output);
                    foxtrot = foxtrot instanceof Object ? foxtrot : kilo;
                    kilo = foxtrot.stack;
                    backup = kilo;
                    foxtrot = null;
                    kilo = foxtrot != kilo;
                    foxtrot = '';
                    if(!kilo) { _fun00010_ip = 238; continue _fun00009 }
 235:
                    foxtrot = backup;
 238:
                    romeo['stack_trace'] = foxtrot;
                    foxtrot = true;
                    romeo['is_playtime_eligible'] = foxtrot;
                    yankee['properties'] = romeo;
                    tango['trackedActionData'] = yankee;
                    tango['rejectWithError'] = verify;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=275);
 273:
                    return tango;
 275:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 378; continue _fun00009 }
 281:
                    oscar = _closure1_slot1;
                    romeo = _closure1_slot2;
                    report = 5;
                    report = romeo[report];
                    verify = oscar.bind(zulu)(report);
                    oscar = verify.dispatch;
                    report = {};
                    yankee = 'QUESTS_SEND_HEARTBEAT_SUCCESS';
                    report['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = romeo[offset];
                    romeo = yankee.bind(zulu)(offset);
                    yankee = romeo.questUserStatusFromServer;
                    offset = tango.body;
                    offset = yankee.bind(romeo)(offset);
                    report['userStatus'] = offset;
                    offset = options;
                    report['questId'] = offset;
                    offset = golf;
                    report['streamKey'] = offset;
                    report = oscar.bind(verify)(report);
 376: // try_end0
                    _fun00010_ip = 477; continue _fun00009;
 378:
                    return tango;
 381: // catch_target0
                    CatchBlockStart(arg_register=10);
                    offset = _closure1_slot1;
                    romeo = _closure1_slot2;
                    tango = 5;
                    tango = romeo[tango];
                    oscar = offset.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'QUESTS_SEND_HEARTBEAT_FAILURE';
                    tango['type'] = verify;
                    verify = 6;
                    verify = romeo[verify];
                    verify = offset.bind(zulu)(verify);
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    result = offset;
                    output = yankee;
                    verify = new result[verify](output, sizing);
                    verify = verify instanceof Object ? verify : offset;
                    tango['error'] = verify;
                    tango['questId'] = options;
                    tango['streamKey'] = golf;
                    tango = report.bind(oscar)(tango);
 477:
                    return zulu;
 480:
                    return mike;
 483:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _enrollInQuest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    mike = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 427; continue _fun00011 }
 13:
                    report = argFoo;
                    offset = mike;
                    zulu = mike.questContentCTA;
                    mike = null;
                    if(!(mike != zulu)) { _fun00012_ip = 124; continue _fun00011 }
 31:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.trackQuestContentClicked;
                    mike = {};
                    oscar = report;
                    mike['questId'] = oscar;
                    oscar = offset;
                    golf = oscar.questContent;
                    mike['questContent'] = golf;
                    golf = oscar.questContentCTA;
                    mike['questContentCTA'] = golf;
                    golf = oscar.questContentPosition;
                    mike['questContentPosition'] = golf;
                    oscar = oscar.questContentRowIndex;
                    mike['questContentRowIndex'] = oscar;
                    mike = zulu.bind(tango)(mike);
 124:
                    oscar = _closure1_slot4;
                    tango = oscar.isEnrolling;
                    zulu = report;
                    zulu = tango.bind(oscar)(zulu);
                    if(zulu) { _fun00012_ip = 422; continue _fun00011 }
 151:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    oscar = 5;
                    zulu = zulu[oscar];
                    tango = undefined;
                    options = golf.bind(tango)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    verify = 'QUESTS_ENROLL_BEGIN';
                    zulu['type'] = verify;
                    verify = report;
                    zulu['questId'] = verify;
                    zulu = golf.bind(options)(zulu);
 203: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 4;
                    zulu = options[zulu];
                    zulu = golf.bind(tango)(zulu);
                    options = zulu.HTTP;
                    golf = options.post;
                    zulu = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.QUESTS_ENROLL;
                    verify = report;
                    verify = yankee.bind(romeo)(verify);
                    zulu['url'] = verify;
                    verify = {};
                    offset = offset.questContent;
                    verify['location'] = offset;
                    zulu['body'] = verify;
                    verify = true;
                    zulu['rejectWithError'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=289);
 287:
                    return zulu;
 289:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00012_ip = 373; continue _fun00011 }
 295:
                    options = _closure1_slot1;
                    romeo = _closure1_slot2;
                    golf = romeo[oscar];
                    verify = options.bind(tango)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'QUESTS_ENROLL_SUCCESS';
                    golf['type'] = offset;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = romeo[offset];
                    romeo = yankee.bind(tango)(offset);
                    yankee = romeo.questUserStatusFromServer;
                    offset = zulu.body;
                    offset = yankee.bind(romeo)(offset);
                    golf['enrolledQuestUserStatus'] = offset;
                    golf = options.bind(verify)(golf);
 371: // try_end0
                    _fun00012_ip = 422; continue _fun00011;
 373:
                    return zulu;
 376: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'QUESTS_ENROLL_FAILURE';
                    mike['type'] = oscar;
                    mike['questId'] = report;
                    mike = zulu.bind(tango)(mike);
 422:
                    mike = undefined;
                    return mike;
 427:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _claimQuestReward
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 463; continue _fun00013 }
 13:
                    golf = options;
                    romeo = argBar;
                    yankee = argBaz;
                    mike = undefined;
                    oscar = undefined;
                    tango = _closure1_slot4;
                    zulu = tango.isClaimingReward;
                    zulu = zulu.bind(tango)(options);
                    if(zulu) { _fun00014_ip = 460; continue _fun00013 }
 50:
                    options = _closure1_slot1;
                    zulu = _closure1_slot2;
                    tango = 5;
                    zulu = zulu[tango];
                    verify = options.bind(mike)(zulu);
                    options = verify.dispatch;
                    zulu = {};
                    offset = 'QUESTS_CLAIM_REWARD_BEGIN';
                    zulu['type'] = offset;
                    offset = golf;
                    zulu['questId'] = offset;
                    zulu = options.bind(verify)(zulu);
 100: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 4;
                    zulu = verify[zulu];
                    zulu = options.bind(mike)(zulu);
                    verify = zulu.HTTP;
                    options = verify.post;
                    zulu = {};
                    backup = _closure1_slot7;
                    foxtrot = backup.QUESTS_CLAIM_REWARD;
                    offset = golf;
                    offset = foxtrot.bind(backup)(offset);
                    zulu['url'] = offset;
                    offset = {};
                    offset['platform'] = romeo;
                    offset['location'] = yankee;
                    zulu['body'] = offset;
                    offset = false;
                    zulu['rejectWithError'] = offset;
                    zulu = options.bind(verify)(zulu);
                    SaveGenerator(address=185);
 183:
                    return zulu;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun00014_ip = 370; continue _fun00013 }
 194:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 10;
                    options = offset[options];
                    offset = verify.bind(mike)(options);
                    verify = offset.questsEntitlementsFromServer;
                    options = zulu.body;
                    options = verify.bind(offset)(options);
                    oscar = options;
                    options = options.errors;
                    verify = options.length;
                    options = 0;
                    if(!(options !== verify)) { _fun00014_ip = 312; continue _fun00013 }
 250:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[tango];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'QUESTS_CLAIM_REWARD_FAILURE';
                    options['type'] = yankee;
                    yankee = oscar;
                    yankee = yankee.errors;
                    options['error'] = yankee;
                    yankee = golf;
                    options['questId'] = yankee;
                    options = verify.bind(offset)(options);
                    _fun00014_ip = 367; continue _fun00013;
 312:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[tango];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'QUESTS_CLAIM_REWARD_SUCCESS';
                    options['type'] = yankee;
                    yankee = golf;
                    options['questId'] = yankee;
                    yankee = oscar;
                    options['entitlements'] = yankee;
                    options = verify.bind(offset)(options);
 367: // try_end0
                    return oscar;
 370:
                    return zulu;
 373: // catch_target0
                    CatchBlockStart(arg_register=2);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = offset[tango];
                    oscar = verify.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'QUESTS_CLAIM_REWARD_FAILURE';
                    tango['type'] = options;
                    options = 6;
                    options = offset[options];
                    options = verify.bind(mike)(options);
                    verify = options.prototype;
                    verify = Object.create(verify, {constructor: {value: options}});
                    sizing = verify;
                    kilo = zulu;
                    options = new sizing[options](kilo, backup);
                    options = options instanceof Object ? options : verify;
                    tango['error'] = options;
                    tango['questId'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 460:
                    return mike;
 463:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _fetchQuestRewardCode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 348; continue _fun00015 }
 13:
                    oscar = report;
                    zulu = _closure1_slot4;
                    mike = zulu.isFetchingRewardCode;
                    mike = mike.bind(zulu)(report);
                    if(mike) { _fun00016_ip = 343; continue _fun00015 }
 40:
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    zulu = 5;
                    mike = mike[zulu];
                    verify = undefined;
                    golf = report.bind(verify)(mike);
                    report = golf.dispatch;
                    mike = {};
                    options = 'QUESTS_FETCH_REWARD_CODE_BEGIN';
                    mike['type'] = options;
                    options = oscar;
                    mike['questId'] = options;
                    mike = report.bind(golf)(mike);
 92: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 4;
                    mike = golf[mike];
                    mike = report.bind(verify)(mike);
                    golf = mike.HTTP;
                    report = golf.get;
                    mike = {};
                    yankee = _closure1_slot7;
                    offset = yankee.QUESTS_REWARD_CODE;
                    options = oscar;
                    options = offset.bind(yankee)(options);
                    mike['url'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=161);
 159:
                    return mike;
 161:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 253; continue _fun00015 }
 167:
                    golf = _closure1_slot1;
                    romeo = _closure1_slot2;
                    report = romeo[zulu];
                    options = golf.bind(verify)(report);
                    golf = options.dispatch;
                    report = {};
                    offset = 'QUESTS_FETCH_REWARD_CODE_SUCCESS';
                    report['type'] = offset;
                    offset = oscar;
                    report['questId'] = offset;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = romeo[offset];
                    romeo = yankee.bind(verify)(offset);
                    yankee = romeo.questsRewardCodeFromServer;
                    offset = mike.body;
                    offset = yankee.bind(romeo)(offset);
                    report['rewardCode'] = offset;
                    report = golf.bind(options)(report);
 251: // try_end0
                    _fun00016_ip = 343; continue _fun00015;
 253:
                    return mike;
 256: // catch_target0
                    CatchBlockStart(arg_register=1);
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = offset[zulu];
                    report = options.bind(verify)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'QUESTS_FETCH_REWARD_CODE_FAILURE';
                    zulu['type'] = golf;
                    golf = 6;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    options = golf.prototype;
                    options = Object.create(options, {constructor: {value: golf}});
                    backup = options;
                    foxtrot = mike;
                    golf = new backup[golf](foxtrot, romeo);
                    golf = golf instanceof Object ? golf : options;
                    zulu['error'] = golf;
                    zulu['questId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 343:
                    mike = undefined;
                    return mike;
 348:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _dismissQuestContent
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    options = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00018_ip = 393; continue _fun00017 }
 16:
                    oscar = report;
                    verify = options;
                    zulu = _closure1_slot4;
                    mike = zulu.isDismissingContent;
                    report = mike.bind(zulu)(report);
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    romeo = 10;
                    zulu = mike[romeo];
                    mike = undefined;
                    golf = golf.bind(mike)(zulu);
                    zulu = golf.isDismissible;
                    zulu = zulu.bind(golf)(options);
                    if(report) { _fun00018_ip = 390; continue _fun00017 }
 81:
                    if(!zulu) { _fun00018_ip = 390; continue _fun00017 }
 87:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    report = report[zulu];
                    options = golf.bind(mike)(report);
                    golf = options.dispatch;
                    report = {};
                    offset = 'QUESTS_DISMISS_CONTENT_BEGIN';
                    report['type'] = offset;
                    offset = oscar;
                    report['questId'] = offset;
                    offset = verify;
                    report['content'] = offset;
                    report = golf.bind(options)(report);
 144: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 4;
                    report = options[report];
                    report = golf.bind(mike)(report);
                    options = report.HTTP;
                    golf = options.post;
                    report = {};
                    foxtrot = _closure1_slot7;
                    yankee = foxtrot.QUESTS_DISMISS_CONTENT;
                    offset = oscar;
                    verify = yankee.bind(foxtrot)(offset, verify);
                    report['url'] = verify;
                    verify = {};
                    report['body'] = verify;
                    verify = false;
                    report['rejectWithError'] = verify;
                    report = golf.bind(options)(report);
                    SaveGenerator(address=221);
 219:
                    return report;
 221:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00018_ip = 302; continue _fun00017 }
 227:
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = offset[zulu];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                    golf['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = offset[romeo];
                    romeo = yankee.bind(mike)(offset);
                    yankee = romeo.questUserStatusFromServer;
                    offset = report.body;
                    offset = yankee.bind(romeo)(offset);
                    golf['dismissedQuestUserStatus'] = offset;
                    golf = options.bind(verify)(golf);
 300: // try_end0
                    _fun00018_ip = 390; continue _fun00017;
 302:
                    return report;
 305: // catch_target0
                    CatchBlockStart(arg_register=8);
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = offset[zulu];
                    report = options.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'QUESTS_DISMISS_CONTENT_FAILURE';
                    zulu['type'] = golf;
                    golf = 6;
                    golf = offset[golf];
                    golf = options.bind(mike)(golf);
                    options = golf.prototype;
                    options = Object.create(options, {constructor: {value: golf}});
                    sizing = options;
                    kilo = verify;
                    golf = new sizing[golf](kilo, backup);
                    golf = golf instanceof Object ? golf : options;
                    zulu['error'] = golf;
                    zulu['questId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 390:
                    return mike;
 393:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _completeQuestPreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 312; continue _fun00019 }
 13:
                    golf = argFoo;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00020_ip = 25; continue _fun00019 }
 22:
                    mike = 1;
 25:
                    offset = mike;
                    SaveGenerator(address=32);
 30:
                    return zulu;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00020_ip = 309; continue _fun00019 }
 41: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 4;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.QUESTS_PREVIEW_COMPLETE;
                    options = golf;
                    options = yankee.bind(romeo)(options);
                    tango['url'] = options;
                    options = {};
                    options['percent'] = offset;
                    tango['body'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=125);
 123:
                    return tango;
 125:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 212; continue _fun00019 }
 131:
                    oscar = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 5;
                    report = yankee[report];
                    options = oscar.bind(zulu)(report);
                    oscar = options.dispatch;
                    report = {};
                    offset = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    report['type'] = offset;
                    offset = _closure1_slot0;
                    verify = 10;
                    verify = yankee[verify];
                    yankee = offset.bind(zulu)(verify);
                    offset = yankee.questUserStatusFromServer;
                    verify = tango.body;
                    verify = offset.bind(yankee)(verify);
                    report['previewQuestUserStatus'] = verify;
                    report = oscar.bind(options)(report);
 210: // try_end0
                    _fun00020_ip = 306; continue _fun00019;
 212:
                    return tango;
 215: // catch_target0
                    CatchBlockStart(arg_register=9);
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tango = 5;
                    tango = yankee[tango];
                    oscar = verify.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    tango['type'] = options;
                    options = 6;
                    options = yankee[options];
                    options = verify.bind(zulu)(options);
                    verify = options.prototype;
                    verify = Object.create(verify, {constructor: {value: options}});
                    backup = verify;
                    foxtrot = offset;
                    options = new backup[options](foxtrot, romeo);
                    options = options instanceof Object ? options : verify;
                    tango['error'] = options;
                    tango['questId'] = golf;
                    tango = report.bind(oscar)(tango);
 306:
                    return zulu;
 309:
                    return mike;
 312:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _resetQuestPreviewStatus
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00022_ip = 282; continue _fun00021 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 4;
                    mike = tango[mike];
                    verify = undefined;
                    mike = zulu.bind(verify)(mike);
                    tango = mike.HTTP;
                    zulu = tango.del;
                    mike = {};
                    offset = _closure1_slot7;
                    options = offset.QUESTS_PREVIEW_STATUS;
                    oscar = report;
                    oscar = options.bind(offset)(oscar);
                    mike['url'] = oscar;
                    oscar = {};
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=94);
 92:
                    return mike;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 181; continue _fun00021 }
 100:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 5;
                    zulu = offset[zulu];
                    oscar = tango.bind(verify)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    options = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    zulu['type'] = options;
                    options = _closure1_slot0;
                    golf = 10;
                    golf = offset[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.questUserStatusFromServer;
                    golf = mike.body;
                    golf = options.bind(verify)(golf);
                    zulu['previewQuestUserStatus'] = golf;
                    zulu = tango.bind(oscar)(zulu);
 179: // try_end0
                    _fun00022_ip = 277; continue _fun00021;
 181:
                    return mike;
 184: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 5;
                    mike = offset[mike];
                    golf = undefined;
                    tango = verify.bind(golf)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    mike['type'] = oscar;
                    oscar = 6;
                    oscar = offset[oscar];
                    oscar = verify.bind(golf)(oscar);
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    romeo = golf;
                    yankee = options;
                    oscar = new romeo[oscar](yankee, offset);
                    oscar = oscar instanceof Object ? oscar : golf;
                    mike['error'] = oscar;
                    mike['questId'] = report;
                    mike = zulu.bind(tango)(mike);
 277:
                    mike = undefined;
                    return mike;
 282:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _resetQuestDismissibilityStatus
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00024_ip = 317; continue _fun00023 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    mike = oscar[zulu];
                    verify = undefined;
                    options = tango.bind(verify)(mike);
                    tango = options.dispatch;
                    mike = {};
                    offset = 'QUESTS_DOCK_RESET_SOFT_DISMISSAL';
                    mike['type'] = offset;
                    mike = tango.bind(options)(mike);
                    tango = _closure1_slot0;
                    mike = 4;
                    mike = oscar[mike];
                    mike = tango.bind(verify)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.del;
                    mike = {};
                    yankee = _closure1_slot7;
                    offset = yankee.QUESTS_PREVIEW_DISMISSIBILITY;
                    options = report;
                    options = offset.bind(yankee)(options);
                    mike['url'] = options;
                    options = {};
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=132);
 130:
                    return mike;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00024_ip = 216; continue _fun00023 }
 138:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = offset[zulu];
                    oscar = tango.bind(verify)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    options = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    zulu['type'] = options;
                    options = _closure1_slot0;
                    golf = 10;
                    golf = offset[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.questUserStatusFromServer;
                    golf = mike.body;
                    golf = options.bind(verify)(golf);
                    zulu['previewQuestUserStatus'] = golf;
                    zulu = tango.bind(oscar)(zulu);
 214: // try_end0
                    _fun00024_ip = 312; continue _fun00023;
 216:
                    return mike;
 219: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 5;
                    mike = offset[mike];
                    golf = undefined;
                    tango = verify.bind(golf)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    mike['type'] = oscar;
                    oscar = 6;
                    oscar = offset[oscar];
                    oscar = verify.bind(golf)(oscar);
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    foxtrot = golf;
                    romeo = options;
                    oscar = new foxtrot[oscar](romeo, yankee);
                    oscar = oscar instanceof Object ? oscar : golf;
                    mike['error'] = oscar;
                    mike['questId'] = report;
                    mike = zulu.bind(tango)(mike);
 312:
                    mike = undefined;
                    return mike;
 317:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot19 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _fetchClaimedQuests
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 304; continue _fun00025 }
 10:
                    mike = _closure1_slot4;
                    mike = mike.isFetchingClaimedQuests;
                    if(mike) { _fun00026_ip = 299; continue _fun00025 }
 29:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 5;
                    tango = tango[mike];
                    options = undefined;
                    oscar = report.bind(options)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN';
                    tango['type'] = golf;
                    tango = report.bind(oscar)(tango);
 73: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 4;
                    tango = oscar[tango];
                    tango = report.bind(options)(tango);
                    oscar = tango.HTTP;
                    report = oscar.get;
                    tango = {};
                    golf = _closure1_slot7;
                    golf = golf.QUESTS_CLAIMED_QUESTS;
                    tango['url'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=134);
 132:
                    return tango;
 134:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00026_ip = 216; continue _fun00025 }
 140:
                    report = tango.body;
                    golf = report.quests;
                    oscar = golf.map;
                    report = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getClaimedQuestWithUserStatusFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = oscar.bind(golf)(report);
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[mike];
                    golf = oscar.bind(options)(report);
                    oscar = golf.dispatch;
                    report = {};
                    offset = 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS';
                    report['type'] = offset;
                    report['quests'] = verify;
                    report = oscar.bind(golf)(report);
 214: // try_end0
                    _fun00026_ip = 299; continue _fun00025;
 216:
                    return tango;
 219: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = verify[mike];
                    tango = oscar.bind(options)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE';
                    mike['type'] = report;
                    report = 6;
                    report = verify[report];
                    report = oscar.bind(options)(report);
                    oscar = report.prototype;
                    oscar = Object.create(oscar, {constructor: {value: report}});
                    romeo = oscar;
                    yankee = golf;
                    report = new romeo[report](yankee, offset);
                    report = report instanceof Object ? report : oscar;
                    mike['error'] = report;
                    mike = zulu.bind(tango)(mike);
 299:
                    mike = undefined;
                    return mike;
 304:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _fetchQuestToDeliver
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00028_ip = 411; continue _fun00027 }
 13:
                    oscar = verify;
                    mike = undefined;
                    backup = undefined;
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    report = report[zulu];
                    options = golf.bind(mike)(report);
                    golf = options.dispatch;
                    report = {};
                    offset = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                    report['type'] = offset;
                    report['placement'] = verify;
                    report = golf.bind(options)(report);
 70: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 15;
                    report = options[report];
                    golf = golf.bind(mike)(report);
                    report = golf.getSession;
                    report = report.bind(golf)();
                    SaveGenerator(address=104);
 102:
                    return report;
 104:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00028_ip = 320; continue _fun00027 }
 113:
                    backup = report;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 4;
                    golf = verify[golf];
                    golf = options.bind(mike)(golf);
                    verify = golf.HTTP;
                    options = verify.get;
                    golf = {};
                    foxtrot = _closure1_slot7;
                    romeo = foxtrot.QUEST_FETCH_QUEST_TO_DELIVER;
                    yankee = oscar;
                    offset = null;
                    kilo = offset == report;
                    offset = undefined;
                    if(kilo) { _fun00028_ip = 178; continue _fun00027 }
 172:
                    offset = backup.uuid;
 178:
                    offset = romeo.bind(foxtrot)(yankee, offset);
                    golf['url'] = offset;
                    offset = false;
                    golf['rejectWithError'] = offset;
                    golf = options.bind(verify)(golf);
                    SaveGenerator(address=203);
 201:
                    return golf;
 203:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun00028_ip = 317; continue _fun00027 }
 209:
                    verify = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    options = foxtrot[zulu];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    options['type'] = yankee;
                    yankee = golf.body;
                    yankee = yankee.request_id;
                    options['decisionId'] = yankee;
                    romeo = _closure1_slot0;
                    yankee = 10;
                    yankee = foxtrot[yankee];
                    foxtrot = romeo.bind(mike)(yankee);
                    romeo = foxtrot.questConfigFromServer;
                    yankee = golf.body;
                    yankee = yankee.quest;
                    yankee = romeo.bind(foxtrot)(yankee);
                    options['quest'] = yankee;
                    yankee = oscar;
                    options['placement'] = yankee;
                    options = verify.bind(offset)(options);
 315: // try_end0
                    _fun00028_ip = 408; continue _fun00027;
 317:
                    return golf;
 320:
                    return report;
 323: // catch_target0
                    CatchBlockStart(arg_register=8);
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = offset[zulu];
                    report = options.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE';
                    zulu['type'] = golf;
                    golf = 6;
                    golf = offset[golf];
                    golf = options.bind(mike)(golf);
                    options = golf.prototype;
                    options = Object.create(options, {constructor: {value: golf}});
                    result = options;
                    output = verify;
                    golf = new result[golf](output, sizing);
                    golf = golf instanceof Object ? golf : options;
                    zulu['error'] = golf;
                    zulu['placement'] = oscar;
                    zulu = tango.bind(report)(zulu);
 408:
                    return mike;
 411:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _updateVideoProgress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00030_ip = 229; continue _fun00029 }
 16:
                    tango = _closure1_slot1;
                    yankee = _closure1_slot2;
                    mike = 12;
                    mike = yankee[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.post;
                    mike = {};
                    offset = _closure1_slot7;
                    oscar = offset.QUESTS_VIDEO_PROGRESS;
                    oscar = oscar.bind(offset)(options);
                    mike['url'] = oscar;
                    oscar = {};
                    oscar['timestamp'] = verify;
                    mike['body'] = oscar;
                    oscar = {};
                    offset = _closure1_slot0;
                    golf = 13;
                    golf = yankee[golf];
                    golf = offset.bind(zulu)(golf);
                    golf = golf.NetworkActionNames;
                    golf = golf.QUEST_VIDEO_PROGRESS;
                    oscar['event'] = golf;
                    golf = {};
                    golf['quest_id'] = options;
                    options = verify.toString;
                    options = options.bind(verify)();
                    golf['timestamp_sec'] = options;
                    options = global;
                    options = options.Error;
                    verify = options.prototype;
                    verify = Object.create(verify, {constructor: {value: options}});
                    foxtrot = verify;
                    options = new foxtrot[options](romeo);
                    options = options instanceof Object ? options : verify;
                    verify = options.stack;
                    options = null;
                    offset = options != verify;
                    options = '';
                    if(!offset) { _fun00030_ip = 187; continue _fun00029 }
 184:
                    options = verify;
 187:
                    golf['stack_trace'] = options;
                    oscar['properties'] = golf;
                    mike['trackedActionData'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=217);
 215:
                    return mike;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00030_ip = 226; continue _fun00029 }
 223:
                    return zulu;
 226:
                    return mike;
 229:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot22 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _fetchVideoTranscript
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00032_ip = 388; continue _fun00031 }
 13:
                    golf = verify;
                    mike = undefined;
                    options = undefined;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 16;
                    tango = yankee[zulu];
                    report = offset.bind(mike)(tango);
                    tango = report.resolveVideoQuestAsset;
                    zulu = yankee[zulu];
                    zulu = offset.bind(mike)(zulu);
                    zulu = zulu.VideoQuestAssetId;
                    zulu = zulu.VIDEO_PLAYER_TRANSCRIPT;
                    tango = tango.bind(report)(zulu, verify);
                    options = tango;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00032_ip = 145; continue _fun00031 }
 85:
                    tango = _closure1_slot5;
                    zulu = tango.getState;
                    report = zulu.bind(tango)();
                    tango = report.setTranscriptAsset;
                    zulu = {};
                    verify = golf;
                    verify = verify.id;
                    zulu['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.FAILURE;
                    zulu['fetchStatus'] = verify;
                    zulu = tango.bind(report)(zulu);
                    _fun00032_ip = 385; continue _fun00031;
 145:
                    tango = _closure1_slot5;
                    zulu = tango.getState;
                    report = zulu.bind(tango)();
                    tango = report.setTranscriptAsset;
                    zulu = {};
                    verify = golf;
                    verify = verify.id;
                    zulu['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.FETCHING;
                    zulu['fetchStatus'] = verify;
                    zulu = tango.bind(report)(zulu);
 200: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    zulu = report[zulu];
                    zulu = tango.bind(mike)(zulu);
                    report = zulu.HTTP;
                    tango = report.get;
                    zulu = {};
                    options = options.url;
                    zulu['url'] = options;
                    options = true;
                    zulu['rejectWithError'] = options;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=256);
 254:
                    return zulu;
 256:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00032_ip = 328; continue _fun00031 }
 262:
                    report = _closure1_slot5;
                    tango = report.getState;
                    options = tango.bind(report)();
                    report = options.setTranscriptAsset;
                    tango = {};
                    verify = golf;
                    verify = verify.id;
                    tango['questId'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.SUCCESS;
                    tango['fetchStatus'] = verify;
                    verify = zulu.text;
                    tango['text'] = verify;
                    tango = report.bind(options)(tango);
 326: // try_end0
                    _fun00032_ip = 385; continue _fun00031;
 328:
                    return zulu;
 331: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot5;
                    zulu = tango.getState;
                    report = zulu.bind(tango)();
                    tango = report.setTranscriptAsset;
                    zulu = {};
                    golf = golf.id;
                    zulu['questId'] = golf;
                    oscar = _closure1_slot6;
                    oscar = oscar.FAILURE;
                    zulu['fetchStatus'] = oscar;
                    zulu = tango.bind(report)(zulu);
 385:
                    return mike;
 388:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _fetchQuest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00034_ip = 132; continue _fun00033 }
 10:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    verify = _closure1_slot7;
                    options = verify.QUEST;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00034_ip = 129; continue _fun00033 }
 90:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 10;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.questConfigFromServer;
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 129:
                    return mike;
 132:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot24 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchStatus;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot7 = tango;
    tango = 5;
    var _closure1_slot8 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/QuestsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: manuallyStartConsoleQuest
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['manuallyStartConsoleQuest'] = tango;
    tango = function() { // Original name: manualStopConsoleQuest
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['manualStopConsoleQuest'] = tango;
    tango = function() { // Original name: fetchCurrentQuests
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchCurrentQuests'] = tango;
    tango = function() { // Original name: sendHeartbeat
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendHeartbeat'] = tango;
    tango = function() { // Original name: enrollInQuest
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['enrollInQuest'] = tango;
    tango = function() { // Original name: claimQuestReward
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['claimQuestReward'] = tango;
    tango = function() { // Original name: fetchQuestRewardCode
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchQuestRewardCode'] = tango;
    tango = function() { // Original name: dismissQuestContent
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['dismissQuestContent'] = tango;
    tango = function(argFoo) { // Original name: dismissProgressTrackingFailureNotice
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE';
        mike['type'] = report;
        report = argFoo;
        mike['streamKey'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissProgressTrackingFailureNotice'] = tango;
    tango = function() { // Original name: completeQuestPreview
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['completeQuestPreview'] = tango;
    tango = function() { // Original name: resetQuestPreviewStatus
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['resetQuestPreviewStatus'] = tango;
    tango = function() { // Original name: resetQuestDismissibilityStatus
        entity = undefined;
        tango = _closure1_slot19;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['resetQuestDismissibilityStatus'] = tango;
    tango = function(argFoo) { // Original name: overrideQuestDelivery
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_DELIVERY_OVERRIDE';
        mike['type'] = report;
        report = argFoo;
        mike['questId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['overrideQuestDelivery'] = tango;
    tango = function(argFoo, argBar) { // Original name: selectTaskPlatform
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_SELECT_TASK_PLATFORM';
        mike['type'] = report;
        report = argFoo;
        mike['questId'] = report;
        report = argBar;
        mike['platform'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['selectTaskPlatform'] = tango;
    tango = function(argFoo) { // Original name: questsVisibleMobileMessagesChanged
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED';
        mike['type'] = report;
        report = argFoo;
        mike['payload'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['questsVisibleMobileMessagesChanged'] = tango;
    tango = function() { // Original name: fetchClaimedQuests
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchClaimedQuests'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateOptimisticProgress
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS';
        mike['type'] = report;
        report = argFoo;
        mike['questId'] = report;
        report = argBar;
        mike['taskEventName'] = report;
        report = argBaz;
        mike['progress'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateOptimisticProgress'] = tango;
    tango = function() { // Original name: fetchQuestToDeliver
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchQuestToDeliver'] = tango;
    tango = function(argFoo) { // Original name: updatePrevRestingQuestDockMode
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['mode'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updatePrevRestingQuestDockMode'] = tango;
    tango = function() { // Original name: updateVideoProgress
        entity = undefined;
        tango = _closure1_slot22;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateVideoProgress'] = tango;
    tango = function() { // Original name: fetchVideoTranscript
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchVideoTranscript'] = tango;
    tango = function(argFoo) { // Original name: updateQuestDockVisibilityOverride
        entity = argFoo;
        report = entity.isVisible;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE';
        mike['type'] = oscar;
        mike['isVisible'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateQuestDockVisibilityOverride'] = tango;
    mike = function() { // Original name: fetchQuest
        entity = undefined;
        tango = _closure1_slot24;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchQuest'] = mike;
    return entity;
})();