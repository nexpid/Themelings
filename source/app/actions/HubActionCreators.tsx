// app/actions/HubActionCreators.tsx
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
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: signup
        michal = _closure1_slot1;
        option = _closure1_slot2;
        entity = 2;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot4;
        tangon = tangon.HUB_WAITLIST_SIGNUP;
        entity['url'] = tangon;
        tangon = {};
        oscard = argFoo;
        tangon['email'] = oscard;
        oscard = argBar;
        tangon['school'] = oscard;
        entity['body'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 3;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.HUB_WAITLIST_SIGNUP;
        tangon['event'] = report;
        report = function(argFoo) { // Original name: properties
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = null;
                tangon = entity == michal;
                zuuluu = undefined;
                report = undefined;
                if(tangon) { _fun00002_ip = 38; continue _fun00001 }
 16:
                michal = michal.body;
                tangon = entity == michal;
                report = undefined;
                if(tangon) { _fun00002_ip = 38; continue _fun00001 }
 30:
                report = michal.email_domain;
 38:
                entity = entity != report;
                tangon = false;
                if(!entity) { _fun00002_ip = 88; continue _fun00001 }
 47:
                michal = report.split;
                entity = '.';
                report = michal.bind(report)(entity);
                michal = report.indexOf;
                entity = 'edu';
                michal = michal.bind(report)(entity);
                entity = -1;
                tangon = entity !== michal;
 88:
                michal = _closure1_slot0;
                report = _closure1_slot2;
                entity = 4;
                entity = report[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.exact;
                entity = {};
                entity['is_edu_email'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        tangon['properties'] = report;
        entity['trackedActionData'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['signup'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: sendVerificationEmail
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 189; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 2;
                    michal = verify[michal];
                    option = undefined;
                    tangon = zuuluu.bind(option)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.HUB_EMAIL_VERIFY_SEND;
                    michal['url'] = report;
                    report = {};
                    offset = _closure2_slot0;
                    report['email'] = offset;
                    offset = _closure2_slot2;
                    report['guild_id'] = offset;
                    golfie = _closure2_slot1;
                    report['allow_multiple_guilds'] = golfie;
                    golfie = true;
                    report['use_verification_code'] = golfie;
                    michal['body'] = report;
                    report = {};
                    golfie = _closure1_slot0;
                    oscard = 3;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.HUB_EMAIL_VERIFY_SEND;
                    report['event'] = oscard;
                    oscard = function(argFoo) { // Original name: properties
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            michal = null;
                            report = michal == entity;
                            zuuluu = undefined;
                            tangon = undefined;
                            if(report) { _fun00006_ip = 36; continue _fun00005 }
 16:
                            entity = entity.body;
                            michal = michal == entity;
                            tangon = undefined;
                            if(michal) { _fun00006_ip = 36; continue _fun00005 }
 30:
                            tangon = entity.has_matching_guild;
 36:
                            michal = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 4;
                            entity = report[entity];
                            zuuluu = michal.bind(zuuluu)(entity);
                            michal = zuuluu.exact;
                            entity = {};
                            entity['has_matching_guild'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    report['properties'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=172);
 170:
                    return michal;
 172:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 186; continue _fun00003 }
 178:
                    zuuluu = michal.body;
                    return zuuluu;
 186:
                    return michal;
 189:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['sendVerificationEmail'] = golfie;
    golfie = function(argFoo) { // Original name: verify
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 289; continue _fun00007 }
 10:
                    michal = undefined;
                    report = undefined;
                    zuuluu = _closure2_slot0;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00008_ip = 286; continue _fun00007 }
 30: // try_start_0
                    oscard = _closure1_slot1;
                    romeon = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = romeon[zuuluu];
                    option = oscard.bind(michal)(zuuluu);
                    oscard = option.post;
                    zuuluu = {};
                    verify = _closure1_slot4;
                    verify = verify.HUB_EMAIL_VERIFY;
                    zuuluu['url'] = verify;
                    verify = {};
                    offset = _closure2_slot0;
                    verify['token'] = offset;
                    zuuluu['body'] = verify;
                    verify = {};
                    yankee = _closure1_slot0;
                    offset = 3;
                    offset = romeon[offset];
                    offset = yankee.bind(michal)(offset);
                    offset = offset.NetworkActionNames;
                    offset = offset.HUB_EMAIL_VERIFY;
                    verify['event'] = offset;
                    zuuluu['trackedActionData'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = oscard.bind(option)(zuuluu);
                    SaveGenerator(address=145);
 143:
                    return zuuluu;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 226; continue _fun00007 }
 151:
                    oscard = zuuluu.body;
                    oscard = oscard.guild;
                    report = oscard;
                    oscard = golfie == oscard;
                    golfie = undefined;
                    if(oscard) { _fun00008_ip = 178; continue _fun00007 }
 173:
                    golfie = report.id;
 178:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'HUB_VERIFY_EMAIL_SUCCESS';
                    tangon['type'] = option;
                    tangon['guildId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 224: // try_end0
                    _fun00008_ip = 286; continue _fun00007;
 226:
                    return zuuluu;
 229: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'HUB_VERIFY_EMAIL_FAILURE';
                    zuuluu['type'] = golfie;
                    oscard = oscard.body;
                    zuuluu['errors'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 286:
                    return michal;
 289:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['verify'] = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: verifyCode
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 315; continue _fun00009 }
 10:
                    report = undefined;
                    oscard = undefined;
                    zuuluu = undefined;
                    michal = _closure2_slot0;
                    option = null;
                    if(!(option == michal)) { _fun00010_ip = 32; continue _fun00009 }
 29:
                    return report;
 32: // try_start_0
                    golfie = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    michal = 2;
                    michal = foxtra[michal];
                    verify = golfie.bind(report)(michal);
                    golfie = verify.post;
                    michal = {};
                    offset = _closure1_slot4;
                    offset = offset.HUB_EMAIL_VERIFY_CODE;
                    michal['url'] = offset;
                    offset = {};
                    romeon = _closure2_slot0;
                    offset['code'] = romeon;
                    romeon = _closure2_slot1;
                    offset['guild_id'] = romeon;
                    yankee = _closure2_slot2;
                    offset['email'] = yankee;
                    michal['body'] = offset;
                    offset = {};
                    romeon = _closure1_slot0;
                    yankee = 3;
                    yankee = foxtra[yankee];
                    yankee = romeon.bind(report)(yankee);
                    yankee = yankee.NetworkActionNames;
                    yankee = yankee.HUB_EMAIL_VERIFY;
                    offset['event'] = yankee;
                    michal['trackedActionData'] = offset;
                    offset = false;
                    michal['rejectWithError'] = offset;
                    michal = golfie.bind(verify)(michal);
                    SaveGenerator(address=163);
 161:
                    return michal;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 253; continue _fun00009 }
 169:
                    zuuluu = michal;
                    golfie = michal.body;
                    golfie = golfie.guild;
                    oscard = golfie;
                    golfie = option == golfie;
                    option = undefined;
                    if(golfie) { _fun00010_ip = 199; continue _fun00009 }
 194:
                    option = oscard.id;
 199:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'HUB_VERIFY_EMAIL_SUCCESS';
                    tangon['type'] = verify;
                    tangon['guildId'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    zuuluu = zuuluu.body;
 250: // try_end0
                    return zuuluu;
 253:
                    return michal;
 256: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'HUB_VERIFY_EMAIL_FAILURE';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    zuuluu['errors'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 315:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['verifyCode'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/HubActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();