// app/modules/pomelo/PomeloActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.AnalyticEvents;
    var _closure1_slot4 = golf;
    mike = mike.Endpoints;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = {};
    golf = function() { // Original name: resetSuggestions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'POMELO_SUGGESTIONS_RESET';
        entity['type'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['resetSuggestions'] = golf;
    golf = function(argFoo) { // Original name: fetchSuggestionsRegistration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00002_ip = 24; continue _fun00001 }
 18:
            zulu = 1500;
 24:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00004_ip = 320; continue _fun00003 }
 10:
                        mike = undefined;
                        offset = undefined;
                        options = undefined;
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 5;
                        zulu = oscar[zulu];
                        report = report.bind(mike)(zulu);
                        zulu = report.hasRegistrationUsernameSuggestions;
                        zulu = zulu.bind(report)();
                        if(!zulu) { _fun00004_ip = 317; continue _fun00003 }
 55:
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        oscar = 4;
                        zulu = zulu[oscar];
                        golf = report.bind(mike)(zulu);
                        report = golf.dispatch;
                        zulu = {};
                        verify = 'POMELO_SUGGESTIONS_RESET';
                        zulu['type'] = verify;
                        zulu = report.bind(golf)(zulu);
 97: // try_start_0
                        report = _closure1_slot0;
                        golf = _closure1_slot2;
                        zulu = 6;
                        zulu = golf[zulu];
                        zulu = report.bind(mike)(zulu);
                        yankee = zulu.HTTP;
                        report = yankee.get;
                        zulu = {};
                        golf = _closure1_slot5;
                        golf = golf.POMELO_SUGGESTIONS_UNAUTHED;
                        zulu['url'] = golf;
                        romeo = _closure2_slot0;
                        verify = null;
                        foxtrot = verify == romeo;
                        romeo = undefined;
                        if(foxtrot) { _fun00004_ip = 175; continue _fun00003 }
 161:
                        foxtrot = {};
                        backup = _closure2_slot0;
                        foxtrot['global_name'] = backup;
                        romeo = foxtrot;
 175:
                        zulu['query'] = romeo;
                        romeo = _closure2_slot1;
                        zulu['timeout'] = romeo;
                        romeo = true;
                        zulu['rejectWithError'] = romeo;
                        zulu = report.bind(yankee)(zulu);
                        SaveGenerator(address=203);
 201:
                        return zulu;
 203:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 312; continue _fun00003 }
 209:
                        options = zulu;
                        report = zulu.ok;
                        if(!report) { _fun00004_ip = 250; continue _fun00003 }
 221:
                        report = options;
                        report = report.body;
                        offset = report;
                        yankee = verify == report;
                        report = undefined;
                        if(yankee) { _fun00004_ip = 246; continue _fun00003 }
 241:
                        report = offset.username;
 246:
                        if(!(verify == report)) { _fun00004_ip = 252; continue _fun00003 }
 250: // try_end0
                        _fun00004_ip = 317; continue _fun00003;
 252: // try_start_1
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        tango = tango[oscar];
                        oscar = report.bind(mike)(tango);
                        report = oscar.dispatch;
                        tango = {};
                        verify = 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS';
                        tango['type'] = verify;
                        options = options.body;
                        tango['suggestion'] = options;
                        golf = _closure2_slot0;
                        tango['source'] = golf;
                        tango = report.bind(oscar)(tango);
 309: // try_end1
                        return tango;
 312:
                        return zulu;
 315: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
 317:
                        return mike;
 320:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['fetchSuggestionsRegistration'] = golf;
    golf = function(argFoo) { // Original name: fetchSuggestions
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 279; continue _fun00005 }
 10:
                    mike = undefined;
                    verify = undefined;
                    golf = undefined;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 7;
                    zulu = oscar[zulu];
                    report = report.bind(mike)(zulu);
                    zulu = report.isInPomeloSuggestionsExperiment;
                    zulu = zulu.bind(report)();
                    if(!zulu) { _fun00006_ip = 276; continue _fun00005 }
 55: // try_start_0
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 4;
                    zulu = options[oscar];
                    yankee = report.bind(mike)(zulu);
                    report = yankee.dispatch;
                    offset = true;
                    zulu = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': true};
                    zulu = report.bind(yankee)(zulu);
                    report = _closure1_slot0;
                    zulu = 6;
                    zulu = options[zulu];
                    zulu = report.bind(mike)(zulu);
                    options = zulu.HTTP;
                    report = options.get;
                    zulu = {};
                    yankee = _closure1_slot5;
                    yankee = yankee.POMELO_SUGGESTIONS;
                    zulu['url'] = yankee;
                    yankee = _closure2_slot0;
                    zulu['timeout'] = yankee;
                    zulu['rejectWithError'] = offset;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=168);
 166:
                    return zulu;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 271; continue _fun00005 }
 174:
                    golf = zulu;
                    report = zulu.ok;
                    if(!report) { _fun00006_ip = 217; continue _fun00005 }
 186:
                    report = golf;
                    report = report.body;
                    verify = report;
                    options = null;
                    offset = options == report;
                    report = undefined;
                    if(offset) { _fun00006_ip = 213; continue _fun00005 }
 208:
                    report = verify.username;
 213:
                    if(!(options == report)) { _fun00006_ip = 219; continue _fun00005 }
 217: // try_end0
                    _fun00006_ip = 276; continue _fun00005;
 219: // try_start_1
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'POMELO_SUGGESTIONS_SUCCESS';
                    tango['type'] = options;
                    golf = golf.body;
                    tango['suggestion'] = golf;
                    tango = report.bind(oscar)(tango);
 268: // try_end1
                    return tango;
 271:
                    return zulu;
 274: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
 276:
                    return mike;
 279:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchSuggestions'] = golf;
    golf = function(argFoo) { // Original name: attemptPomelo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = arguments[1];
            tango = arguments[2];
            zulu = arguments[3];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(report === mike)) { _fun00008_ip = 28; continue _fun00007 }
 24:
            report = 'modal';
 28:
            var _closure2_slot1 = report;
            if(!(tango === mike)) { _fun00008_ip = 38; continue _fun00007 }
 36:
            tango = false;
 38:
            var _closure2_slot2 = tango;
            if(!(zulu === mike)) { _fun00008_ip = 48; continue _fun00007 }
 46:
            zulu = false;
 48:
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00010_ip = 1076; continue _fun00009 }
 10:
                        tango = undefined;
                        backup = undefined;
                        zulu = undefined;
                        options = undefined;
                        offset = undefined;
                        mike = _closure2_slot0;
                        golf = /^[A-Za-z0-9_.]*$/;
                        report = golf.test;
                        report = report.bind(golf)(mike);
                        foxtrot = false;
                        if(!(foxtrot !== report)) { _fun00010_ip = 245; continue _fun00009 }
 60:
                        golf = mike.includes;
                        report = '..';
                        report = golf.bind(mike)(report);
                        if(report) { _fun00010_ip = 183; continue _fun00009 }
 79:
                        golf = mike.length;
                        report = 2;
                        if(!(!(golf < report))) { _fun00010_ip = 108; continue _fun00009 }
 91:
                        report = mike.length;
                        mike = 32;
                        mike = report > mike;
                        report = undefined;
                        if(!mike) { _fun00010_ip = 181; continue _fun00009 }
 108:
                        golf = _closure1_slot0;
                        romeo = _closure1_slot2;
                        mike = 3;
                        verify = romeo[mike];
                        verify = golf.bind(tango)(verify);
                        yankee = verify.intl;
                        verify = yankee.formatToPlainString;
                        mike = romeo[mike];
                        mike = golf.bind(tango)(mike);
                        mike = mike.t;
                        golf = mike.IpijXF;
                        mike = {'maxNum': 32, 'minNum': 2};
                        report = verify.bind(yankee)(golf, mike);
 181:
                        _fun00010_ip = 243; continue _fun00009;
 183:
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot2;
                        mike = 3;
                        golf = romeo[mike];
                        golf = yankee.bind(tango)(golf);
                        verify = golf.intl;
                        golf = verify.string;
                        mike = romeo[mike];
                        mike = yankee.bind(tango)(mike);
                        mike = mike.t;
                        mike = mike.C7G+go;
                        report = golf.bind(verify)(mike);
 243:
                        _fun00010_ip = 303; continue _fun00009;
 245:
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot2;
                        mike = 3;
                        golf = romeo[mike];
                        golf = yankee.bind(tango)(golf);
                        verify = golf.intl;
                        golf = verify.string;
                        mike = romeo[mike];
                        mike = yankee.bind(tango)(mike);
                        mike = mike.t;
                        mike = mike.z7c4bG;
                        report = golf.bind(verify)(mike);
 303:
                        yankee = null;
                        if(!(yankee == report)) { _fun00010_ip = 952; continue _fun00009 }
 312:
                        verify = _closure1_slot0;
                        romeo = _closure1_slot2;
                        golf = 9;
                        golf = romeo[golf];
                        verify = verify.bind(tango)(golf);
                        golf = verify.getPomeloAttempt;
                        golf = golf.bind(verify)();
                        if(!golf) { _fun00010_ip = 949; continue _fun00009 }
 351: // try_start_0
                        verify = _closure1_slot1;
                        romeo = _closure1_slot2;
                        golf = 10;
                        golf = romeo[golf];
                        romeo = verify.bind(tango)(golf);
                        verify = romeo.post;
                        golf = {};
                        kilo = _closure2_slot2;
                        sizing = _closure1_slot5;
                        if(kilo) { _fun00010_ip = 398; continue _fun00009 }
 390:
                        kilo = sizing.POMELO_ATTEMPT;
                        _fun00010_ip = 404; continue _fun00009;
 398:
                        kilo = sizing.POMELO_ATTEMPT_UNAUTHED;
 404:
                        golf['url'] = kilo;
                        kilo = {};
                        output = _closure2_slot0;
                        kilo['username'] = output;
                        golf['body'] = kilo;
                        kilo = {};
                        result = _closure1_slot0;
                        echo = _closure1_slot2;
                        sizing = 11;
                        sizing = echo[sizing];
                        sizing = result.bind(tango)(sizing);
                        sizing = sizing.NetworkActionNames;
                        sizing = sizing.POMELO_ATTEMPT;
                        kilo['event'] = sizing;
                        sizing = {};
                        sizing['requested_username'] = output;
                        kilo['properties'] = sizing;
                        golf['trackedActionData'] = kilo;
                        golf['rejectWithError'] = foxtrot;
                        golf = verify.bind(romeo)(golf);
                        SaveGenerator(address=493);
 491:
                        return golf;
 493:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                        if(verify) { _fun00010_ip = 662; continue _fun00009 }
 502:
                        backup = golf;
                        verify = golf.body;
                        verify = verify.taken;
                        if(!verify) { _fun00010_ip = 591; continue _fun00009 }
 519:
                        romeo = _closure1_slot1;
                        foxtrot = _closure1_slot2;
                        verify = 8;
                        verify = foxtrot[verify];
                        kilo = romeo.bind(tango)(verify);
                        foxtrot = kilo.track;
                        verify = _closure1_slot4;
                        romeo = verify.POMELO_ERRORS;
                        verify = {'reason': 'already_taken', 'username_error': true};
                        sizing = _closure2_slot1;
                        verify['location'] = sizing;
                        sizing = _closure2_slot3;
                        verify['one_click_flow'] = sizing;
                        verify = foxtrot.bind(kilo)(romeo, verify);
 591:
                        romeo = _closure1_slot1;
                        foxtrot = _closure1_slot2;
                        verify = 4;
                        verify = foxtrot[verify];
                        foxtrot = romeo.bind(tango)(verify);
                        romeo = foxtrot.dispatch;
                        verify = {};
                        kilo = 'POMELO_ATTEMPT_SUCCESS';
                        verify['type'] = kilo;
                        kilo = _closure2_slot0;
                        verify['username'] = kilo;
                        backup = backup.body;
                        backup = backup.taken;
                        verify['taken'] = backup;
                        verify = romeo.bind(foxtrot)(verify);
 657: // try_end0
                        _fun00010_ip = 949; continue _fun00009;
 662:
                        return golf;
 665: // catch_target0
                        CatchBlockStart(arg_register=11);
                        verify = _closure1_slot0;
                        foxtrot = _closure1_slot2;
                        golf = 12;
                        golf = foxtrot[golf];
                        golf = verify.bind(tango)(golf);
                        golf = golf.APIError;
                        verify = golf.prototype;
                        verify = Object.create(verify, {constructor: {value: golf}});
                        control = verify;
                        source = romeo;
                        golf = new control[golf](source, update);
                        verify = golf instanceof Object ? golf : verify;
                        options = verify;
                        golf = verify.getAnyErrorMessage;
                        golf = golf.bind(verify)();
                        zulu = golf;
                        golf = yankee != golf;
                        backup = undefined;
                        if(!golf) { _fun00010_ip = 744; continue _fun00009 }
 741:
                        backup = zulu;
 744:
                        offset = backup;
                        zulu = _closure1_slot1;
                        golf = _closure1_slot2;
                        verify = 8;
                        verify = golf[verify];
                        foxtrot = zulu.bind(tango)(verify);
                        romeo = foxtrot.track;
                        mike = _closure1_slot4;
                        verify = mike.POMELO_ERRORS;
                        mike = {};
                        mike['reason'] = backup;
                        backup = true;
                        mike['username_error'] = backup;
                        backup = _closure2_slot1;
                        mike['location'] = backup;
                        backup = _closure2_slot3;
                        mike['one_click_flow'] = backup;
                        mike = romeo.bind(foxtrot)(verify, mike);
                        mike = 4;
                        mike = golf[mike];
                        golf = zulu.bind(tango)(mike);
                        zulu = golf.dispatch;
                        mike = {};
                        verify = _closure2_slot0;
                        mike['username'] = verify;
                        verify = 'POMELO_ATTEMPT_FAILURE';
                        mike['type'] = verify;
                        verify = options;
                        verify = verify.status;
                        yankee = yankee != verify;
                        verify = undefined;
                        if(!yankee) { _fun00010_ip = 919; continue _fun00009 }
 873:
                        yankee = options;
                        romeo = yankee.status;
                        yankee = 500;
                        yankee = romeo < yankee;
                        verify = undefined;
                        if(!yankee) { _fun00010_ip = 919; continue _fun00009 }
 896:
                        yankee = options;
                        romeo = yankee.status;
                        yankee = 401;
                        verify = undefined;
                        if(!(yankee !== romeo)) { _fun00010_ip = 919; continue _fun00009 }
 916:
                        verify = offset;
 919:
                        mike['error'] = verify;
                        verify = options.status;
                        mike['statusCode'] = verify;
                        options = options.retryAfter;
                        mike['retryAfter'] = options;
                        mike = zulu.bind(golf)(mike);
 949:
                        return tango;
 952:
                        zulu = _closure1_slot1;
                        golf = _closure1_slot2;
                        options = 8;
                        options = golf[options];
                        offset = zulu.bind(tango)(options);
                        verify = offset.track;
                        mike = _closure1_slot4;
                        options = mike.POMELO_ERRORS;
                        mike = {};
                        mike['reason'] = report;
                        yankee = true;
                        mike['username_error'] = yankee;
                        yankee = _closure2_slot1;
                        mike['location'] = yankee;
                        yankee = _closure2_slot3;
                        mike['one_click_flow'] = yankee;
                        mike = verify.bind(offset)(options, mike);
                        mike = 4;
                        mike = golf[mike];
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        golf = 'POMELO_ATTEMPT_FAILURE';
                        mike['type'] = golf;
                        oscar = _closure2_slot0;
                        mike['username'] = oscar;
                        mike['error'] = report;
                        mike = zulu.bind(tango)(mike);
                        return mike;
 1076:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['attemptPomelo'] = golf;
    tango = function(argFoo) { // Original name: createPomelo
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            zulu = false;
 20:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00014_ip = 205; continue _fun00013 }
 10:
                        tango = _closure1_slot1;
                        yankee = _closure1_slot2;
                        mike = 10;
                        mike = yankee[mike];
                        report = undefined;
                        oscar = tango.bind(report)(mike);
                        tango = oscar.post;
                        mike = {};
                        golf = _closure2_slot0;
                        mike['body'] = golf;
                        golf = _closure1_slot5;
                        golf = golf.POMELO_CREATE;
                        mike['url'] = golf;
                        golf = {};
                        offset = _closure1_slot0;
                        options = 11;
                        options = yankee[options];
                        options = offset.bind(report)(options);
                        options = options.NetworkActionNames;
                        options = options.POMELO_CREATE;
                        golf['event'] = options;
                        options = {};
                        verify = _closure2_slot1;
                        options['one_click_flow'] = verify;
                        golf['properties'] = options;
                        mike['trackedActionData'] = golf;
                        golf = false;
                        mike['rejectWithError'] = golf;
                        mike = tango.bind(oscar)(mike);
                        SaveGenerator(address=139);
 137:
                        return mike;
 139:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00014_ip = 202; continue _fun00013 }
 145:
                        tango = _closure1_slot1;
                        oscar = _closure1_slot2;
                        zulu = 4;
                        zulu = oscar[zulu];
                        report = tango.bind(report)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        oscar = 'CURRENT_USER_UPDATE';
                        zulu['type'] = oscar;
                        oscar = mike.body;
                        zulu['user'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        zulu = mike.body;
                        return zulu;
 202:
                        return mike;
 205:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['createPomelo'] = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/PomeloActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();