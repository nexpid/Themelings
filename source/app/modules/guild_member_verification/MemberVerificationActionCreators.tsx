// app/modules/guild_member_verification/MemberVerificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: showCoachmark
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot10 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot8 = option;
    tangon = tangon.Endpoints;
    var _closure1_slot9 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    zuuluu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 492; continue _fun00001 }
 13:
                    oscard = argFoo;
                    michal = undefined;
                    foxtra = undefined;
                    yankee = undefined;
                    report = undefined;
                    golfie = undefined;
                    romeon = null;
                    if(!(romeon == zuuluu)) { _fun00002_ip = 53; continue _fun00001 }
 32:
                    verify = _closure1_slot6;
                    option = verify.getInviteKeyForGuildId;
                    tangon = oscard;
                    zuuluu = option.bind(verify)(tangon);
 53:
                    foxtra = zuuluu;
                    option = _closure1_slot7;
                    tangon = option.getCurrentUser;
                    backup = tangon.bind(option)();
                    offset = _closure1_slot5;
                    verify = offset.isMember;
                    option = oscard;
                    kiloes = romeon == backup;
                    tangon = undefined;
                    if(kiloes) { _fun00002_ip = 99; continue _fun00001 }
 94:
                    tangon = backup.id;
 99:
                    tangon = verify.bind(offset)(option, tangon);
                    yankee = !tangon;
 108: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 6;
                    tangon = verify[tangon];
                    tangon = option.bind(michal)(tangon);
                    verify = tangon.HTTP;
                    option = verify.get;
                    tangon = {};
                    kiloes = _closure1_slot9;
                    backup = kiloes.GUILD_MEMBER_VERIFICATION;
                    offset = oscard;
                    offset = backup.bind(kiloes)(offset);
                    tangon['url'] = offset;
                    offset = {};
                    offset['with_guild'] = yankee;
                    yankee = foxtra;
                    backup = romeon != yankee;
                    yankee = undefined;
                    if(!backup) { _fun00002_ip = 212; continue _fun00001 }
 181:
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 7;
                    backup = sizing[backup];
                    kiloes = kiloes.bind(michal)(backup);
                    backup = kiloes.parseInviteCodeFromInviteKey;
                    yankee = backup.bind(kiloes)(foxtra);
 212:
                    offset['invite_code'] = yankee;
                    tangon['query'] = offset;
                    offset = true;
                    tangon['oldFormErrors'] = offset;
                    offset = false;
                    tangon['rejectWithError'] = offset;
                    tangon = option.bind(verify)(tangon);
                    SaveGenerator(address=244);
 242:
                    return tangon;
 244:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 438; continue _fun00001 }
 253:
                    report = tangon;
                    option = tangon.body;
                    if(!(romeon != option)) { _fun00002_ip = 436; continue _fun00001 }
 268:
                    option = report;
                    foxtra = option.body;
                    golfie = foxtra;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 8;
                    option = offset[option];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    option['type'] = yankee;
                    yankee = oscard;
                    option['guildId'] = yankee;
                    yankee = {};
                    backup = foxtra.version;
                    yankee['version'] = backup;
                    backup = foxtra.description;
                    yankee['description'] = backup;
                    backup = foxtra.form_fields;
                    yankee['formFields'] = backup;
                    backup = foxtra.guild;
                    yankee['guild'] = backup;
                    foxtra = foxtra.profile;
                    foxtra = romeon != foxtra;
                    romeon = null;
                    if(!foxtra) { _fun00002_ip = 418; continue _fun00001 }
 378:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    foxtra = 9;
                    foxtra = kiloes[foxtra];
                    kiloes = backup.bind(michal)(foxtra);
                    backup = kiloes.buildGuildProfileFromServer;
                    foxtra = golfie;
                    foxtra = foxtra.profile;
                    romeon = backup.bind(kiloes)(foxtra);
 418:
                    yankee['profile'] = romeon;
                    option['form'] = yankee;
                    option = verify.bind(offset)(option);
 433: // try_end0
                    return golfie;
 436: // try_start_1
                    throw report;
 438: // try_end1
                    return tangon;
 441: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'MEMBER_VERIFICATION_FORM_FETCH_FAIL';
                    zuuluu['type'] = golfie;
                    zuuluu['guildId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 492:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    romeon = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 212; continue _fun00003 }
 13:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.patch;
                    michal = {};
                    verify = _closure1_slot9;
                    option = verify.GUILD_MEMBER_VERIFICATION;
                    option = option.bind(verify)(golfie);
                    michal['url'] = option;
                    option = {};
                    verify = argBar;
                    option['form_fields'] = verify;
                    verify = argBaz;
                    option['enabled'] = verify;
                    michal['body'] = option;
                    option = true;
                    michal['oldFormErrors'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=113);
 111:
                    return michal;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 209; continue _fun00003 }
 119:
                    option = michal.body;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    tangon['type'] = verify;
                    tangon['guildId'] = golfie;
                    golfie = {};
                    verify = option.version;
                    golfie['version'] = verify;
                    verify = option.description;
                    golfie['description'] = verify;
                    option = option.form_fields;
                    golfie['formFields'] = option;
                    tangon['form'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 209:
                    return michal;
 212:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    yankee = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 204; continue _fun00005 }
 13:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.patch;
                    michal = {};
                    verify = _closure1_slot9;
                    option = verify.GUILD_MEMBER_VERIFICATION;
                    option = option.bind(verify)(golfie);
                    michal['url'] = option;
                    option = {};
                    verify = argBar;
                    option['description'] = verify;
                    michal['body'] = option;
                    option = true;
                    michal['oldFormErrors'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=105);
 103:
                    return michal;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 201; continue _fun00005 }
 111:
                    option = michal.body;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    tangon['type'] = verify;
                    tangon['guildId'] = golfie;
                    golfie = {};
                    verify = option.version;
                    golfie['version'] = verify;
                    verify = option.description;
                    golfie['description'] = verify;
                    option = option.form_fields;
                    golfie['formFields'] = option;
                    tangon['form'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 201:
                    return michal;
 204:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    offset = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 114; continue _fun00007 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.patch;
                    michal = {};
                    option = _closure1_slot9;
                    golfie = option.GUILD_MEMBER_VERIFICATION;
                    oscard = argFoo;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = argBar;
                    oscard['enabled'] = golfie;
                    michal['body'] = oscard;
                    oscard = true;
                    michal['oldFormErrors'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=102);
 100:
                    return michal;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 111; continue _fun00007 }
 108:
                    return zuuluu;
 111:
                    return michal;
 114:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    verify = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 958; continue _fun00009 }
 18:
                    tangon = zuuluu;
                    var _closure4_slot0 = zuuluu;
                    backup = argBar;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00010_ip = 37; continue _fun00009 }
 34:
                    michal = 200;
 37:
                    romeon = michal;
                    golfie = undefined;
                    yankee = undefined;
                    verify = undefined;
                    SaveGenerator(address=50);
 48:
                    return zuuluu;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 955; continue _fun00009 }
 59:
                    kiloes = _closure1_slot4;
                    foxtra = kiloes.isFullServerPreview;
                    oscard = tangon;
                    oscard = foxtra.bind(kiloes)(oscard);
                    if(oscard) { _fun00010_ip = 901; continue _fun00009 }
 86: // try_start_0
                    foxtra = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    oscard = 6;
                    oscard = kiloes[oscard];
                    oscard = foxtra.bind(zuuluu)(oscard);
                    kiloes = oscard.HTTP;
                    foxtra = kiloes.put;
                    oscard = {};
                    result = _closure1_slot9;
                    output = result.GUILD_MEMBER_REQUEST_TO_JOIN;
                    sizing = tangon;
                    sizing = output.bind(result)(sizing);
                    oscard['url'] = sizing;
                    sizing = {};
                    output = backup;
                    result = output.version;
                    sizing['version'] = result;
                    output = output.formFields;
                    sizing['form_fields'] = output;
                    oscard['body'] = sizing;
                    sizing = false;
                    oscard['rejectWithError'] = sizing;
                    oscard = foxtra.bind(kiloes)(oscard);
                    SaveGenerator(address=187);
 185:
                    return oscard;
 187:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(foxtra) { _fun00010_ip = 335; continue _fun00009 }
 196:
                    result = oscard.body;
                    verify = result;
                    kiloes = _closure1_slot1;
                    output = _closure1_slot2;
                    foxtra = 8;
                    foxtra = output[foxtra];
                    sizing = kiloes.bind(zuuluu)(foxtra);
                    kiloes = sizing.dispatch;
                    foxtra = {};
                    echoed = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    foxtra['type'] = echoed;
                    echoed = tangon;
                    foxtra['guildId'] = echoed;
                    foxtra['request'] = result;
                    foxtra = kiloes.bind(sizing)(foxtra);
                    sizing = _closure1_slot0;
                    kiloes = 11;
                    kiloes = output[kiloes];
                    sizing = sizing.bind(zuuluu)(kiloes);
                    kiloes = sizing.hasNonTermsFormField;
                    backup = backup.formFields;
                    backup = kiloes.bind(sizing)(backup);
                    foxtra = backup;
                    if(!backup) { _fun00010_ip = 310; continue _fun00009 }
 297:
                    kiloes = romeon;
                    backup = -1;
                    foxtra = backup !== kiloes;
 310:
                    if(!foxtra) { _fun00010_ip = 332; continue _fun00009 }
 313:
                    foxtra = global;
                    foxtra = foxtra.setTimeout;
                    offset = function() {
                        zuuluu = _closure1_slot10;
                        michal = _closure4_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    offset = foxtra.bind(zuuluu)(offset, romeon);
 332: // try_end0
                    return verify;
 335:
                    return oscard;
 338: // catch_target0
                    CatchBlockStart(arg_register=5);
                    option = oscard;
                    verify = oscard.status;
                    oscard = 429;
                    if(!(oscard !== verify)) { _fun00010_ip = 623; continue _fun00009 }
 361:
                    oscard = 403;
                    if(!(oscard !== verify)) { _fun00010_ip = 543; continue _fun00009 }
 374:
                    oscard = {};
                    romeon = option;
                    source = oscard;
                    update = romeon;
                    verify = copyDataProperties(source, update);
                    offset = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 15;
                    verify = foxtra[verify];
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.APIError;
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    ctrled = offset;
                    source = romeon;
                    verify = new ctrled[verify](source, update);
                    verify = verify instanceof Object ? verify : offset;
                    yankee = verify;
                    offset = null;
                    romeon = offset == verify;
                    verify = undefined;
                    if(romeon) { _fun00010_ip = 465; continue _fun00009 }
 452:
                    romeon = yankee;
                    yankee = romeon.getAnyErrorMessage;
                    verify = yankee.bind(romeon)();
 465:
                    golfie = verify;
                    if(!(offset == verify)) { _fun00010_ip = 529; continue _fun00009 }
 472:
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 14;
                    offset = foxtra[verify];
                    offset = romeon.bind(zuuluu)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(zuuluu)(verify);
                    verify = verify.t;
                    verify = verify.R0RpRU;
                    verify = offset.bind(yankee)(verify);
                    _fun00010_ip = 532; continue _fun00009;
 529:
                    verify = golfie;
 532:
                    golfie = 'message';
                    oscard[golfie] = verify;
                    throw oscard;
 543:
                    oscard = {};
                    update = option;
                    source = oscard;
                    golfie = copyDataProperties(source, update);
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 14;
                    verify = romeon[golfie];
                    verify = yankee.bind(zuuluu)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    golfie = romeon[golfie];
                    golfie = yankee.bind(zuuluu)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.8T1rxM;
                    verify = verify.bind(offset)(golfie);
                    golfie = 'message';
                    oscard[golfie] = verify;
                    throw oscard;
 623:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 12;
                    oscard = yankee[oscard];
                    golfie = offset.bind(zuuluu)(oscard);
                    oscard = golfie.closeContextMenu;
                    oscard = oscard.bind(golfie)();
                    golfie = _closure1_slot1;
                    oscard = 13;
                    oscard = yankee[oscard];
                    romeon = golfie.bind(zuuluu)(oscard);
                    verify = romeon.show;
                    oscard = {};
                    golfie = 14;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    kiloes = foxtra.intl;
                    backup = kiloes.string;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.MmIrpa;
                    foxtra = backup.bind(kiloes)(foxtra);
                    oscard['title'] = foxtra;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    kiloes = foxtra.intl;
                    backup = kiloes.string;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.yjpDQ0;
                    foxtra = backup.bind(kiloes)(foxtra);
                    oscard['body'] = foxtra;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    kiloes = foxtra.intl;
                    backup = kiloes.string;
                    foxtra = yankee[golfie];
                    foxtra = offset.bind(zuuluu)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.XNGT1N;
                    foxtra = backup.bind(kiloes)(foxtra);
                    oscard['confirmText'] = foxtra;
                    oscard = verify.bind(romeon)(oscard);
                    oscard = {};
                    update = option;
                    source = oscard;
                    option = copyDataProperties(source, update);
                    option = yankee[golfie];
                    option = offset.bind(zuuluu)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(zuuluu)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.yjpDQ0;
                    option = option.bind(verify)(golfie);
                    golfie = 'message';
                    oscard[golfie] = option;
                    throw oscard;
 901:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 10;
                    report = golfie[report];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.updateImpersonatedData;
                    report = tangon;
                    tangon = {};
                    option = {};
                    verify = false;
                    option['isPending'] = verify;
                    tangon['memberOptions'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 955:
                    return michal;
 958:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    option = tangon.bind(entity)();
    tangon = {};
    tangon['fetchVerificationForm'] = romeon;
    tangon['updateVerificationForm'] = yankee;
    yankee = function(argFoo, argBar) { // Original name: updateVerificationFormFieldsLocal
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MEMBER_VERIFICATION_FORM_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = {};
        oscard = argBar;
        report['formFields'] = oscard;
        michal['form'] = report;
        report = true;
        michal['isLocalUpdate'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['updateVerificationFormFieldsLocal'] = yankee;
    tangon['updateVerificationFormDescription'] = offset;
    offset = function(argFoo, argBar) { // Original name: updateVerificationFormDescriptionLocal
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MEMBER_VERIFICATION_FORM_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = {};
        oscard = argBar;
        report['description'] = oscard;
        michal['form'] = report;
        report = true;
        michal['isLocalUpdate'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['updateVerificationFormDescriptionLocal'] = offset;
    tangon['enableVerificationForm'] = verify;
    tangon['submitVerificationForm'] = option;
    option = function() { // Original name: clearCoachmark
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['clearCoachmark'] = option;
    report = function(argFoo) { // Original name: reportApplication
        entity = argFoo;
        verify = entity.guild;
        yankee = entity.guildJoinRequest;
        offset = entity.guildJoinRequestUser;
        option = entity.reason;
        golfie = entity.reasonOther;
        oscard = entity.responses;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 16;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot8;
        zuuluu = michal.GUILD_MEMBER_APPLICATION_REPORTED;
        michal = {};
        yankee = yankee.joinRequestId;
        michal['application_id'] = yankee;
        offset = offset.id;
        michal['applicant_id'] = offset;
        verify = verify.id;
        michal['guild_id'] = verify;
        michal['reason'] = option;
        michal['reason_other'] = golfie;
        michal['responses'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    tangon['reportApplication'] = report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_member_verification/MemberVerificationActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = -1;
    zuuluu['DISABLE_JOIN_REQUEST_COACHMARK'] = tangon;
    zuuluu['showCoachmark'] = michal;
    return entity;
})();