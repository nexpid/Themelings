// app/modules/pomelo/PomeloActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.AnalyticEvents;
    var _closure1_slot4 = golfie;
    michal = michal.Endpoints;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = {};
    golfie = function() { // Original name: resetSuggestions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'POMELO_SUGGESTIONS_RESET';
        entity['type'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['resetSuggestions'] = golfie;
    golfie = function(argFoo) { // Original name: fetchSuggestionsRegistration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00002_ip = 24; continue _fun00001 }
 18:
            zuuluu = 1500;
 24:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 321; continue _fun00003 }
 10:
                        michal = undefined;
                        offset = undefined;
                        option = undefined;
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        zuuluu = 5;
                        zuuluu = oscard[zuuluu];
                        report = report.bind(michal)(zuuluu);
                        zuuluu = report.hasRegistrationUsernameSuggestions;
                        zuuluu = zuuluu.bind(report)();
                        if(!zuuluu) { _fun00004_ip = 318; continue _fun00003 }
 55:
                        report = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        oscard = 4;
                        zuuluu = zuuluu[oscard];
                        golfie = report.bind(michal)(zuuluu);
                        report = golfie.dispatch;
                        zuuluu = {};
                        verify = 'POMELO_SUGGESTIONS_RESET';
                        zuuluu['type'] = verify;
                        zuuluu = report.bind(golfie)(zuuluu);
 97: // try_start_0
                        report = _closure1_slot0;
                        golfie = _closure1_slot2;
                        zuuluu = 6;
                        zuuluu = golfie[zuuluu];
                        zuuluu = report.bind(michal)(zuuluu);
                        yankee = zuuluu.HTTP;
                        report = yankee.get;
                        zuuluu = {};
                        golfie = _closure1_slot5;
                        golfie = golfie.POMELO_SUGGESTIONS_UNAUTHED;
                        zuuluu['url'] = golfie;
                        romeon = _closure2_slot0;
                        verify = null;
                        foxtra = verify == romeon;
                        romeon = undefined;
                        if(foxtra) { _fun00004_ip = 175; continue _fun00003 }
 161:
                        foxtra = {};
                        backup = _closure2_slot0;
                        foxtra['global_name'] = backup;
                        romeon = foxtra;
 175:
                        zuuluu['query'] = romeon;
                        romeon = _closure2_slot1;
                        zuuluu['timeout'] = romeon;
                        romeon = true;
                        zuuluu['rejectWithError'] = romeon;
                        zuuluu = report.bind(yankee)(zuuluu);
                        SaveGenerator(address=204);
 202:
                        return zuuluu;
 204:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 313; continue _fun00003 }
 210:
                        option = zuuluu;
                        report = zuuluu.ok;
                        if(!report) { _fun00004_ip = 251; continue _fun00003 }
 222:
                        report = option;
                        report = report.body;
                        offset = report;
                        yankee = verify == report;
                        report = undefined;
                        if(yankee) { _fun00004_ip = 247; continue _fun00003 }
 242:
                        report = offset.username;
 247:
                        if(!(verify == report)) { _fun00004_ip = 253; continue _fun00003 }
 251: // try_end0
                        _fun00004_ip = 318; continue _fun00003;
 253: // try_start_1
                        report = _closure1_slot1;
                        tangon = _closure1_slot2;
                        tangon = tangon[oscard];
                        oscard = report.bind(michal)(tangon);
                        report = oscard.dispatch;
                        tangon = {};
                        verify = 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS';
                        tangon['type'] = verify;
                        option = option.body;
                        tangon['suggestion'] = option;
                        golfie = _closure2_slot0;
                        tangon['source'] = golfie;
                        tangon = report.bind(oscard)(tangon);
 310: // try_end1
                        return tangon;
 313:
                        return zuuluu;
 316: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
 318:
                        return michal;
 321:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['fetchSuggestionsRegistration'] = golfie;
    golfie = function(argFoo) { // Original name: fetchSuggestions
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 279; continue _fun00005 }
 10:
                    michal = undefined;
                    verify = undefined;
                    golfie = undefined;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.isInPomeloSuggestionsExperiment;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00006_ip = 276; continue _fun00005 }
 55: // try_start_0
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 4;
                    zuuluu = option[oscard];
                    yankee = report.bind(michal)(zuuluu);
                    report = yankee.dispatch;
                    offset = true;
                    zuuluu = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': true};
                    zuuluu = report.bind(yankee)(zuuluu);
                    report = _closure1_slot0;
                    zuuluu = 6;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(michal)(zuuluu);
                    option = zuuluu.HTTP;
                    report = option.get;
                    zuuluu = {};
                    yankee = _closure1_slot5;
                    yankee = yankee.POMELO_SUGGESTIONS;
                    zuuluu['url'] = yankee;
                    yankee = _closure2_slot0;
                    zuuluu['timeout'] = yankee;
                    zuuluu['rejectWithError'] = offset;
                    zuuluu = report.bind(option)(zuuluu);
                    SaveGenerator(address=168);
 166:
                    return zuuluu;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 271; continue _fun00005 }
 174:
                    golfie = zuuluu;
                    report = zuuluu.ok;
                    if(!report) { _fun00006_ip = 217; continue _fun00005 }
 186:
                    report = golfie;
                    report = report.body;
                    verify = report;
                    option = null;
                    offset = option == report;
                    report = undefined;
                    if(offset) { _fun00006_ip = 213; continue _fun00005 }
 208:
                    report = verify.username;
 213:
                    if(!(option == report)) { _fun00006_ip = 219; continue _fun00005 }
 217: // try_end0
                    _fun00006_ip = 276; continue _fun00005;
 219: // try_start_1
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'POMELO_SUGGESTIONS_SUCCESS';
                    tangon['type'] = option;
                    golfie = golfie.body;
                    tangon['suggestion'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 268: // try_end1
                    return tangon;
 271:
                    return zuuluu;
 274: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
 276:
                    return michal;
 279:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchSuggestions'] = golfie;
    golfie = function(argFoo) { // Original name: attemptPomelo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = arguments[1];
            tangon = arguments[2];
            zuuluu = arguments[3];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(report === michal)) { _fun00008_ip = 28; continue _fun00007 }
 24:
            report = 'modal';
 28:
            var _closure2_slot1 = report;
            if(!(tangon === michal)) { _fun00008_ip = 38; continue _fun00007 }
 36:
            tangon = false;
 38:
            var _closure2_slot2 = tangon;
            if(!(zuuluu === michal)) { _fun00008_ip = 48; continue _fun00007 }
 46:
            zuuluu = false;
 48:
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 1076; continue _fun00009 }
 10:
                        tangon = undefined;
                        backup = undefined;
                        zuuluu = undefined;
                        option = undefined;
                        offset = undefined;
                        michal = _closure2_slot0;
                        golfie = /^[A-Za-z0-9_.]*$/;
                        report = golfie.test;
                        report = report.bind(golfie)(michal);
                        foxtra = false;
                        if(!(foxtra !== report)) { _fun00010_ip = 245; continue _fun00009 }
 60:
                        golfie = michal.includes;
                        report = '..';
                        report = golfie.bind(michal)(report);
                        if(report) { _fun00010_ip = 183; continue _fun00009 }
 79:
                        golfie = michal.length;
                        report = 2;
                        if(!(!(golfie < report))) { _fun00010_ip = 108; continue _fun00009 }
 91:
                        report = michal.length;
                        michal = 32;
                        michal = report > michal;
                        report = undefined;
                        if(!michal) { _fun00010_ip = 181; continue _fun00009 }
 108:
                        golfie = _closure1_slot0;
                        romeon = _closure1_slot2;
                        michal = 3;
                        verify = romeon[michal];
                        verify = golfie.bind(tangon)(verify);
                        yankee = verify.intl;
                        verify = yankee.formatToPlainString;
                        michal = romeon[michal];
                        michal = golfie.bind(tangon)(michal);
                        michal = michal.t;
                        golfie = michal.IpijXF;
                        michal = {'maxNum': 32, 'minNum': 2};
                        report = verify.bind(yankee)(golfie, michal);
 181:
                        _fun00010_ip = 243; continue _fun00009;
 183:
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot2;
                        michal = 3;
                        golfie = romeon[michal];
                        golfie = yankee.bind(tangon)(golfie);
                        verify = golfie.intl;
                        golfie = verify.string;
                        michal = romeon[michal];
                        michal = yankee.bind(tangon)(michal);
                        michal = michal.t;
                        michal = michal.C7G+go;
                        report = golfie.bind(verify)(michal);
 243:
                        _fun00010_ip = 303; continue _fun00009;
 245:
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot2;
                        michal = 3;
                        golfie = romeon[michal];
                        golfie = yankee.bind(tangon)(golfie);
                        verify = golfie.intl;
                        golfie = verify.string;
                        michal = romeon[michal];
                        michal = yankee.bind(tangon)(michal);
                        michal = michal.t;
                        michal = michal.z7c4bG;
                        report = golfie.bind(verify)(michal);
 303:
                        yankee = null;
                        if(!(yankee == report)) { _fun00010_ip = 952; continue _fun00009 }
 312:
                        verify = _closure1_slot0;
                        romeon = _closure1_slot2;
                        golfie = 9;
                        golfie = romeon[golfie];
                        verify = verify.bind(tangon)(golfie);
                        golfie = verify.getPomeloAttempt;
                        golfie = golfie.bind(verify)();
                        if(!golfie) { _fun00010_ip = 949; continue _fun00009 }
 351: // try_start_0
                        verify = _closure1_slot1;
                        romeon = _closure1_slot2;
                        golfie = 10;
                        golfie = romeon[golfie];
                        romeon = verify.bind(tangon)(golfie);
                        verify = romeon.post;
                        golfie = {};
                        kiloes = _closure2_slot2;
                        sizing = _closure1_slot5;
                        if(kiloes) { _fun00010_ip = 398; continue _fun00009 }
 390:
                        kiloes = sizing.POMELO_ATTEMPT;
                        _fun00010_ip = 404; continue _fun00009;
 398:
                        kiloes = sizing.POMELO_ATTEMPT_UNAUTHED;
 404:
                        golfie['url'] = kiloes;
                        kiloes = {};
                        output = _closure2_slot0;
                        kiloes['username'] = output;
                        golfie['body'] = kiloes;
                        kiloes = {};
                        result = _closure1_slot0;
                        echoed = _closure1_slot2;
                        sizing = 11;
                        sizing = echoed[sizing];
                        sizing = result.bind(tangon)(sizing);
                        sizing = sizing.NetworkActionNames;
                        sizing = sizing.POMELO_ATTEMPT;
                        kiloes['event'] = sizing;
                        sizing = {};
                        sizing['requested_username'] = output;
                        kiloes['properties'] = sizing;
                        golfie['trackedActionData'] = kiloes;
                        golfie['rejectWithError'] = foxtra;
                        golfie = verify.bind(romeon)(golfie);
                        SaveGenerator(address=493);
 491:
                        return golfie;
 493:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                        if(verify) { _fun00010_ip = 662; continue _fun00009 }
 502:
                        backup = golfie;
                        verify = golfie.body;
                        verify = verify.taken;
                        if(!verify) { _fun00010_ip = 591; continue _fun00009 }
 519:
                        romeon = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        verify = 8;
                        verify = foxtra[verify];
                        kiloes = romeon.bind(tangon)(verify);
                        foxtra = kiloes.track;
                        verify = _closure1_slot4;
                        romeon = verify.POMELO_ERRORS;
                        verify = {'reason': 'already_taken', 'username_error': true};
                        sizing = _closure2_slot1;
                        verify['location'] = sizing;
                        sizing = _closure2_slot3;
                        verify['one_click_flow'] = sizing;
                        verify = foxtra.bind(kiloes)(romeon, verify);
 591:
                        romeon = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        verify = 4;
                        verify = foxtra[verify];
                        foxtra = romeon.bind(tangon)(verify);
                        romeon = foxtra.dispatch;
                        verify = {};
                        kiloes = 'POMELO_ATTEMPT_SUCCESS';
                        verify['type'] = kiloes;
                        kiloes = _closure2_slot0;
                        verify['username'] = kiloes;
                        backup = backup.body;
                        backup = backup.taken;
                        verify['taken'] = backup;
                        verify = romeon.bind(foxtra)(verify);
 657: // try_end0
                        _fun00010_ip = 949; continue _fun00009;
 662:
                        return golfie;
 665: // catch_target0
                        CatchBlockStart(arg_register=11);
                        verify = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        golfie = 12;
                        golfie = foxtra[golfie];
                        golfie = verify.bind(tangon)(golfie);
                        golfie = golfie.APIError;
                        verify = golfie.prototype;
                        verify = Object.create(verify, {constructor: {value: golfie}});
                        ctrled = verify;
                        source = romeon;
                        golfie = new ctrled[golfie](source, update);
                        verify = golfie instanceof Object ? golfie : verify;
                        option = verify;
                        golfie = verify.getAnyErrorMessage;
                        golfie = golfie.bind(verify)();
                        zuuluu = golfie;
                        golfie = yankee != golfie;
                        backup = undefined;
                        if(!golfie) { _fun00010_ip = 744; continue _fun00009 }
 741:
                        backup = zuuluu;
 744:
                        offset = backup;
                        zuuluu = _closure1_slot1;
                        golfie = _closure1_slot2;
                        verify = 8;
                        verify = golfie[verify];
                        foxtra = zuuluu.bind(tangon)(verify);
                        romeon = foxtra.track;
                        michal = _closure1_slot4;
                        verify = michal.POMELO_ERRORS;
                        michal = {};
                        michal['reason'] = backup;
                        backup = true;
                        michal['username_error'] = backup;
                        backup = _closure2_slot1;
                        michal['location'] = backup;
                        backup = _closure2_slot3;
                        michal['one_click_flow'] = backup;
                        michal = romeon.bind(foxtra)(verify, michal);
                        michal = 4;
                        michal = golfie[michal];
                        golfie = zuuluu.bind(tangon)(michal);
                        zuuluu = golfie.dispatch;
                        michal = {};
                        verify = _closure2_slot0;
                        michal['username'] = verify;
                        verify = 'POMELO_ATTEMPT_FAILURE';
                        michal['type'] = verify;
                        verify = option;
                        verify = verify.status;
                        yankee = yankee != verify;
                        verify = undefined;
                        if(!yankee) { _fun00010_ip = 919; continue _fun00009 }
 873:
                        yankee = option;
                        romeon = yankee.status;
                        yankee = 500;
                        yankee = romeon < yankee;
                        verify = undefined;
                        if(!yankee) { _fun00010_ip = 919; continue _fun00009 }
 896:
                        yankee = option;
                        romeon = yankee.status;
                        yankee = 401;
                        verify = undefined;
                        if(!(yankee !== romeon)) { _fun00010_ip = 919; continue _fun00009 }
 916:
                        verify = offset;
 919:
                        michal['error'] = verify;
                        verify = option.status;
                        michal['statusCode'] = verify;
                        option = option.retryAfter;
                        michal['retryAfter'] = option;
                        michal = zuuluu.bind(golfie)(michal);
 949:
                        return tangon;
 952:
                        zuuluu = _closure1_slot1;
                        golfie = _closure1_slot2;
                        option = 8;
                        option = golfie[option];
                        offset = zuuluu.bind(tangon)(option);
                        verify = offset.track;
                        michal = _closure1_slot4;
                        option = michal.POMELO_ERRORS;
                        michal = {};
                        michal['reason'] = report;
                        yankee = true;
                        michal['username_error'] = yankee;
                        yankee = _closure2_slot1;
                        michal['location'] = yankee;
                        yankee = _closure2_slot3;
                        michal['one_click_flow'] = yankee;
                        michal = verify.bind(offset)(option, michal);
                        michal = 4;
                        michal = golfie[michal];
                        tangon = zuuluu.bind(tangon)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        golfie = 'POMELO_ATTEMPT_FAILURE';
                        michal['type'] = golfie;
                        oscard = _closure2_slot0;
                        michal['username'] = oscard;
                        michal['error'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return michal;
 1076:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['attemptPomelo'] = golfie;
    tangon = function(argFoo) { // Original name: createPomelo
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00014_ip = 205; continue _fun00013 }
 10:
                        tangon = _closure1_slot1;
                        yankee = _closure1_slot2;
                        michal = 10;
                        michal = yankee[michal];
                        report = undefined;
                        oscard = tangon.bind(report)(michal);
                        tangon = oscard.post;
                        michal = {};
                        golfie = _closure2_slot0;
                        michal['body'] = golfie;
                        golfie = _closure1_slot5;
                        golfie = golfie.POMELO_CREATE;
                        michal['url'] = golfie;
                        golfie = {};
                        offset = _closure1_slot0;
                        option = 11;
                        option = yankee[option];
                        option = offset.bind(report)(option);
                        option = option.NetworkActionNames;
                        option = option.POMELO_CREATE;
                        golfie['event'] = option;
                        option = {};
                        verify = _closure2_slot1;
                        option['one_click_flow'] = verify;
                        golfie['properties'] = option;
                        michal['trackedActionData'] = golfie;
                        golfie = false;
                        michal['rejectWithError'] = golfie;
                        michal = tangon.bind(oscard)(michal);
                        SaveGenerator(address=139);
 137:
                        return michal;
 139:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00014_ip = 202; continue _fun00013 }
 145:
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        zuuluu = 4;
                        zuuluu = oscard[zuuluu];
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        oscard = 'CURRENT_USER_UPDATE';
                        zuuluu['type'] = oscard;
                        oscard = michal.body;
                        zuuluu['user'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = michal.body;
                        return zuuluu;
 202:
                        return michal;
 205:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['createPomelo'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/pomelo/PomeloActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();