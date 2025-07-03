// app/modules/contact_sync/native/ContactSyncModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: handleNameInputScreenOrSuggestions
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _handleNameInputScreenOrSuggestions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 1030; continue _fun00001 }
 10:
                    report = argFoo;
                    offset = argBar;
                    zuuluu = undefined;
                    romeon = undefined;
                    oscard = undefined;
                    foxtra = undefined;
                    golfie = undefined;
                    verify = undefined;
                    yankee = undefined;
                    backup = _closure1_slot4;
                    option = backup.getLocalAccount;
                    michal = _closure1_slot22;
                    michal = michal.CONTACTS;
                    romeon = option.bind(backup)(michal);
                    option = _closure1_slot12;
                    michal = option.getState;
                    michal = michal.bind(option)();
                    oscard = michal.name;
                    backup = _closure1_slot0;
                    michal = _closure1_slot2;
                    option = 8;
                    michal = michal[option];
                    backup = backup.bind(zuuluu)(michal);
                    michal = backup.checkContactPermissions;
                    michal = michal.bind(backup)();
                    SaveGenerator(address=111);
 109:
                    return michal;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=13);
                    if(backup) { _fun00002_ip = 1027; continue _fun00001 }
 120:
                    backup = _closure1_slot7;
                    backup = backup.bind(zuuluu)(michal);
                    backup = _closure1_slot18;
                    backup = backup.NOT_DETERMINED;
                    if(!(michal === backup)) { _fun00002_ip = 199; continue _fun00001 }
 143:
                    kiloes = _closure1_slot0;
                    result = _closure1_slot2;
                    backup = 9;
                    sizing = result[backup];
                    output = kiloes.bind(zuuluu)(sizing);
                    sizing = output.trackFlowStep;
                    backup = result[backup];
                    backup = kiloes.bind(zuuluu)(backup);
                    backup = backup.Steps;
                    kiloes = backup.PERMISSION_REQUESTED;
                    backup = false;
                    backup = sizing.bind(output)(kiloes, backup, backup);
 199: // try_start_0
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    backup = backup[option];
                    kiloes = kiloes.bind(zuuluu)(backup);
                    backup = kiloes.getContacts;
                    report = backup.bind(kiloes)(report);
                    SaveGenerator(address=231);
 229:
                    return report;
 231:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun00002_ip = 754; continue _fun00001 }
 240:
                    kiloes = report.names;
                    foxtra = report.ownName;
                    golfie = report.payload;
                    backup = _closure1_slot17;
                    backup = backup.bind(zuuluu)(kiloes);
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    backup = 10;
                    backup = sizing[backup];
                    output = kiloes.bind(zuuluu)(backup);
                    sizing = output.track;
                    backup = _closure1_slot21;
                    kiloes = backup.PERMISSIONS_ACKED;
                    backup = {};
                    result = _closure1_slot24;
                    result = result.CONTACTS;
                    backup['type'] = result;
                    result = _closure1_slot23;
                    result = result.ACCEPTED;
                    backup['action'] = result;
                    backup = sizing.bind(output)(kiloes, backup);
                    backup = oscard;
                    sizing = null;
                    if(!(sizing == backup)) { _fun00002_ip = 446; continue _fun00001 }
 346:
                    kiloes = _closure1_slot0;
                    echoed = _closure1_slot2;
                    backup = 9;
                    output = echoed[backup];
                    result = kiloes.bind(zuuluu)(output);
                    output = result.trackFlowStep;
                    backup = echoed[backup];
                    backup = kiloes.bind(zuuluu)(backup);
                    backup = backup.Steps;
                    kiloes = backup.NAME_INPUT;
                    backup = false;
                    backup = output.bind(result)(kiloes, backup, backup);
                    kiloes = _closure1_slot11;
                    backup = foxtra;
                    foxtra = true;
                    foxtra = kiloes.bind(zuuluu)(backup, foxtra);
                    kiloes = offset;
                    backup = kiloes.navigate;
                    foxtra = _closure1_slot19;
                    foxtra = foxtra.NAME_INPUT;
                    foxtra = backup.bind(kiloes)(foxtra);
                    _fun00002_ip = 743; continue _fun00001;
 446:
                    backup = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    foxtra = foxtra[option];
                    backup = backup.bind(zuuluu)(foxtra);
                    foxtra = backup.isContactSyncEnabled;
                    romeon = foxtra.bind(backup)(romeon);
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    foxtra = 11;
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(zuuluu)(foxtra);
                    if(romeon) { _fun00002_ip = 548; continue _fun00001 }
 497:
                    backup = foxtra.updateContactSyncEnabled;
                    romeon = {};
                    kiloes = true;
                    romeon['enabled'] = kiloes;
                    kiloes = oscard;
                    sizing = sizing != kiloes;
                    kiloes = undefined;
                    if(!sizing) { _fun00002_ip = 526; continue _fun00001 }
 523:
                    kiloes = oscard;
 526:
                    romeon['name'] = kiloes;
                    romeon = backup.bind(foxtra)(romeon);
                    SaveGenerator(address=539);
 537:
                    return romeon;
 539:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(!backup) { _fun00002_ip = 572; continue _fun00001 }
 545: // try_end0
                    return romeon;
 548: // try_start_1
                    romeon = foxtra.updateName;
                    oscard = romeon.bind(foxtra)(oscard);
                    SaveGenerator(address=563);
 561:
                    return oscard;
 563:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 751; continue _fun00001 }
 572:
                    romeon = _closure1_slot19;
                    verify = romeon.SUGGESTIONS;
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    backup = 9;
                    kiloes = romeon[backup];
                    kiloes = foxtra.bind(zuuluu)(kiloes);
                    kiloes = kiloes.Steps;
                    yankee = kiloes.SUGGESTIONS_RESULTS;
                    romeon = romeon[option];
                    foxtra = foxtra.bind(zuuluu)(romeon);
                    romeon = foxtra.uploadContacts;
                    kiloes = false;
                    golfie = romeon.bind(foxtra)(golfie, kiloes);
                    SaveGenerator(address=641);
 639:
                    return golfie;
 641:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 748; continue _fun00001 }
 647:
                    sizing = _closure1_slot8;
                    foxtra = golfie.friend_suggestions;
                    romeon = golfie.bulk_add_token;
                    romeon = sizing.bind(zuuluu)(foxtra, romeon);
                    romeon = golfie.friend_suggestions;
                    sizing = romeon.length;
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[backup];
                    backup = foxtra.bind(zuuluu)(romeon);
                    foxtra = backup.trackFlowStep;
                    vacuum = yankee;
                    yankee = {};
                    yankee['num_contacts_found'] = sizing;
                    sequen = backup;
                    ctrled = false;
                    source = false;
                    update = yankee;
                    yankee = sequen[foxtra](vacuum, ctrled, source, update, echoed);
                    yankee = offset;
                    offset = yankee.navigate;
                    verify = offset.bind(yankee)(verify);
 743: // try_end1
                    _fun00002_ip = 1024; continue _fun00001;
 748:
                    return golfie;
 751:
                    return oscard;
 754:
                    return report;
 757: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    golfie = 10;
                    golfie = report[golfie];
                    yankee = verify.bind(zuuluu)(golfie);
                    offset = yankee.track;
                    golfie = _closure1_slot21;
                    verify = golfie.PERMISSIONS_ACKED;
                    golfie = {};
                    romeon = _closure1_slot24;
                    romeon = romeon.CONTACTS;
                    golfie['type'] = romeon;
                    romeon = _closure1_slot23;
                    romeon = romeon.DENIED;
                    golfie['action'] = romeon;
                    golfie = offset.bind(yankee)(verify, golfie);
                    golfie = _closure1_slot0;
                    report = report[option];
                    report = golfie.bind(zuuluu)(report);
                    report = report.ContactSyncPermissionDenied;
                    if(!(oscard !== report)) { _fun00002_ip = 929; continue _fun00001 }
 853:
                    oscard = _closure1_slot6;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 12;
                    golfie = offset[report];
                    golfie = verify.bind(zuuluu)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    report = offset[report];
                    report = verify.bind(zuuluu)(report);
                    report = report.t;
                    report = report.fGrbRU;
                    report = golfie.bind(option)(report);
                    report = oscard.bind(zuuluu)(report);
                    report = _closure1_slot16;
                    report = report.bind(zuuluu)();
                    _fun00002_ip = 1024; continue _fun00001;
 929:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 9;
                    option = golfie[report];
                    offset = oscard.bind(zuuluu)(option);
                    verify = offset.trackFlowStep;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.Steps;
                    vacuum = report.LANDING;
                    golfie = {};
                    report = 'denied';
                    golfie['mobile_contacts_permission'] = report;
                    ctrled = true;
                    source = false;
                    sequen = offset;
                    update = golfie;
                    report = sequen[verify](vacuum, ctrled, source, update, echoed);
                    report = _closure1_slot7;
                    tangon = _closure1_slot18;
                    tangon = tangon.UNAUTHORIZED;
                    tangon = report.bind(zuuluu)(tangon);
 1024:
                    return zuuluu;
 1027:
                    return michal;
 1030:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _handlePhoneVerificationComplete
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 44; continue _fun00003 }
 7:
                    report = _closure1_slot25;
                    zuuluu = undefined;
                    tangon = argFoo;
                    michal = argBar;
                    michal = report.bind(zuuluu)(tangon, michal);
                    SaveGenerator(address=32);
 30:
                    return michal;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 41; continue _fun00003 }
 38:
                    return zuuluu;
 41:
                    return michal;
 44:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _startContactSync
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 169; continue _fun00005 }
 13:
                    report = _closure1_slot5;
                    zuuluu = report.getCurrentUser;
                    zuuluu = zuuluu.bind(report)();
                    oscard = null;
                    option = oscard == zuuluu;
                    report = undefined;
                    golfie = undefined;
                    if(option) { _fun00006_ip = 48; continue _fun00005 }
 42:
                    golfie = zuuluu.phone;
 48:
                    if(!(oscard != golfie)) { _fun00006_ip = 78; continue _fun00005 }
 52:
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.bind(report)(golfie, tangon);
                    SaveGenerator(address=66);
 64:
                    return zuuluu;
 66:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 75; continue _fun00005 }
 72:
                    return report;
 75:
                    return zuuluu;
 78:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 9;
                    option = offset[zuuluu];
                    verify = golfie.bind(report)(option);
                    option = verify.trackFlowStep;
                    zuuluu = offset[zuuluu];
                    zuuluu = golfie.bind(report)(zuuluu);
                    zuuluu = zuuluu.Steps;
                    golfie = zuuluu.ADD_PHONE_NUMBER;
                    zuuluu = false;
                    zuuluu = option.bind(verify)(golfie, zuuluu, zuuluu);
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.bind(report)(oscard);
                    zuuluu = tangon.navigate;
                    michal = _closure1_slot19;
                    michal = michal.ADD_PHONE;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = undefined;
                    return michal;
 169:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot28 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _bulkAddFriendSuggestions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 848; continue _fun00007 }
 18:
                    offset = tangon;
                    var _closure4_slot0 = tangon;
                    option = michal;
                    var _closure4_slot1 = michal;
                    michal = undefined;
                    yankee = undefined;
                    var _closure4_slot2 = michal;
                    zuuluu = undefined;
                    report = _closure1_slot12;
                    tangon = report.getState;
                    tangon = tangon.bind(report)();
                    report = tangon.suggestions;
                    yankee = report;
                    _closure4_slot2 = report;
                    report = tangon.bulkAddToken;
                    zuuluu = report;
                    tangon = null;
                    if(!(tangon == report)) { _fun00008_ip = 137; continue _fun00007 }
 87:
                    report = _closure1_slot33;
                    tangon = {'skip': false, 'friendsFound': null, 'friendsAdded': 0, 'back': false};
                    verify = yankee;
                    verify = verify.length;
                    tangon['friendsFound'] = verify;
                    verify = option;
                    tangon['onComplete'] = verify;
                    tangon = report.bind(michal)(tangon);
                    _fun00008_ip = 845; continue _fun00007;
 137: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 8;
                    tangon = verify[tangon];
                    verify = report.bind(michal)(tangon);
                    report = verify.bulkAddFriends;
                    tangon = offset;
                    zuuluu = report.bind(verify)(tangon, zuuluu);
                    SaveGenerator(address=176);
 174:
                    return zuuluu;
 176:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 641; continue _fun00007 }
 185:
                    tangon = zuuluu.failed_requests;
                    report = tangon.length;
                    tangon = 0;
                    if(!(!(report > tangon))) { _fun00008_ip = 328; continue _fun00007 }
 207:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    tangon = 14;
                    tangon = backup[tangon];
                    verify = foxtra.bind(michal)(tangon);
                    report = verify.open;
                    tangon = {};
                    romeon = 'TOAST_ADD_FRIENDS';
                    tangon['key'] = romeon;
                    output = _closure1_slot0;
                    romeon = 12;
                    kiloes = backup[romeon];
                    kiloes = output.bind(michal)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    romeon = backup[romeon];
                    romeon = output.bind(michal)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.+hjBfX;
                    romeon = kiloes.bind(sizing)(romeon);
                    tangon['content'] = romeon;
                    romeon = 15;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(michal)(romeon);
                    tangon['icon'] = romeon;
                    tangon = report.bind(verify)(tangon);
                    _fun00008_ip = 588; continue _fun00007;
 328:
                    verify = offset;
                    report = verify.map;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        zuuluu = _closure4_slot2;
                        michal = zuuluu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.suggested_user;
                            michal = entity.id;
                            entity = _closure5_slot0;
                            entity = michal === entity;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    verify = report.bind(verify)(tangon);
                    report = verify.filter;
                    tangon = global;
                    tangon = tangon.Boolean;
                    source = report.bind(verify)(tangon);
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tangon = 13;
                    tangon = sizing[tangon];
                    verify = report.bind(michal)(tangon);
                    report = verify.show;
                    tangon = {};
                    kiloes = _closure1_slot0;
                    romeon = 12;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(michal)(foxtra);
                    output = foxtra.intl;
                    backup = output.string;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(michal)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.6moJ8v;
                    foxtra = backup.bind(output)(foxtra);
                    tangon['title'] = foxtra;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(michal)(foxtra);
                    result = foxtra.intl;
                    output = result.formatToPlainString;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(michal)(foxtra);
                    foxtra = foxtra.t;
                    backup = foxtra.045SiI;
                    foxtra = {};
                    update = source.join;
                    echoed = ', ';
                    echoed = update.bind(source)(echoed);
                    foxtra['name'] = echoed;
                    foxtra = output.bind(result)(backup, foxtra);
                    tangon['body'] = foxtra;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(michal)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = sizing[romeon];
                    romeon = kiloes.bind(michal)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.BddRzc;
                    romeon = foxtra.bind(backup)(romeon);
                    tangon['confirmText'] = romeon;
                    romeon = function() { // Original name: onConfirm
                        zuuluu = _closure1_slot33;
                        michal = {};
                        tangon = false;
                        michal['skip'] = tangon;
                        report = _closure4_slot2;
                        report = report.length;
                        michal['friendsFound'] = report;
                        report = _closure4_slot0;
                        report = report.length;
                        michal['friendsAdded'] = report;
                        michal['back'] = tangon;
                        entity = _closure4_slot1;
                        michal['onComplete'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon['onConfirm'] = romeon;
                    tangon = report.bind(verify)(tangon);
 588:
                    report = _closure1_slot33;
                    tangon = {};
                    verify = false;
                    tangon['skip'] = verify;
                    yankee = yankee.length;
                    tangon['friendsFound'] = yankee;
                    offset = offset.length;
                    tangon['friendsAdded'] = offset;
                    tangon['back'] = verify;
                    tangon['onComplete'] = option;
                    tangon = report.bind(michal)(tangon);
 636: // try_end0
                    _fun00008_ip = 845; continue _fun00007;
 641:
                    return zuuluu;
 644: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = yankee[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    offset = _closure1_slot0;
                    golfie = 12;
                    option = yankee[golfie];
                    option = offset.bind(michal)(option);
                    romeon = option.intl;
                    verify = romeon.string;
                    option = yankee[golfie];
                    option = offset.bind(michal)(option);
                    option = option.t;
                    option = option.6moJ8v;
                    option = verify.bind(romeon)(option);
                    zuuluu['title'] = option;
                    option = yankee[golfie];
                    option = offset.bind(michal)(option);
                    romeon = option.intl;
                    verify = romeon.string;
                    option = yankee[golfie];
                    option = offset.bind(michal)(option);
                    option = option.t;
                    option = option.Gt2L39;
                    option = verify.bind(romeon)(option);
                    zuuluu['body'] = option;
                    option = yankee[golfie];
                    option = offset.bind(michal)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(michal)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.BddRzc;
                    golfie = option.bind(verify)(golfie);
                    zuuluu['confirmText'] = golfie;
                    oscard = function() { // Original name: onConfirm
                        zuuluu = _closure1_slot33;
                        michal = {};
                        tangon = false;
                        michal['skip'] = tangon;
                        report = _closure4_slot2;
                        report = report.length;
                        michal['friendsFound'] = report;
                        report = _closure4_slot0;
                        report = report.length;
                        michal['friendsAdded'] = report;
                        michal['back'] = tangon;
                        entity = _closure4_slot1;
                        michal['onComplete'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu['onConfirm'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 845:
                    return michal;
 848:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot29 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _verifyPhone
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 375; continue _fun00009 }
 10:
                    michal = argFoo;
                    golfie = undefined;
                    option = undefined;
                    offset = undefined;
 19: // try_start_0
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 16;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.addPhoneWithoutPassword;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 80; continue _fun00009 }
 63: // try_end0
                    zuuluu = {'codeIntercepted': true, 'addedPhone': true};
                    return zuuluu;
 80:
                    return michal;
 83: // catch_target0
                    CatchBlockStart(arg_register=1);
                    oscard = michal;
                    zuuluu = michal.status;
                    michal = 301;
                    if(!(michal !== zuuluu)) { _fun00010_ip = 358; continue _fun00009 }
 106:
                    michal = oscard;
                    zuuluu = michal.status;
                    michal = 404;
                    if(!(michal !== zuuluu)) { _fun00010_ip = 358; continue _fun00009 }
 127:
                    zuuluu = _closure1_slot1;
                    romeon = _closure1_slot2;
                    michal = 14;
                    michal = romeon[michal];
                    tangon = zuuluu.bind(golfie)(michal);
                    zuuluu = tangon.open;
                    michal = {};
                    verify = 'PHONE_FAILED_TO_ADD';
                    michal['key'] = verify;
                    yankee = _closure1_slot0;
                    verify = 17;
                    verify = romeon[verify];
                    verify = yankee.bind(golfie)(verify);
                    yankee = verify.APIError;
                    foxtra = oscard;
                    verify = yankee.prototype;
                    verify = Object.create(verify, {constructor: {value: yankee}});
                    backup = verify;
                    oscard = new backup[yankee](foxtra, romeon);
                    oscard = oscard instanceof Object ? oscard : verify;
                    offset = oscard;
                    verify = null;
                    yankee = verify == oscard;
                    oscard = undefined;
                    if(yankee) { _fun00010_ip = 240; continue _fun00009 }
 227:
                    yankee = offset;
                    offset = yankee.getAnyErrorMessage;
                    oscard = offset.bind(yankee)();
 240:
                    option = oscard;
                    if(!(verify == oscard)) { _fun00010_ip = 306; continue _fun00009 }
 247:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    oscard = 12;
                    verify = romeon[oscard];
                    verify = yankee.bind(golfie)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    oscard = romeon[oscard];
                    oscard = yankee.bind(golfie)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.cCVXOT;
                    oscard = verify.bind(offset)(oscard);
                    _fun00010_ip = 309; continue _fun00009;
 306:
                    oscard = option;
 309:
                    michal['content'] = oscard;
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 18;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    michal['icon'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = {'codeIntercepted': true, 'addedPhone': false};
                    _fun00010_ip = 372; continue _fun00009;
 358:
                    michal = {'codeIntercepted': false, 'addedPhone': false};
 372:
                    return michal;
 375:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot30 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot30 = entity;
    oscard = function(argFoo, argBar, argBaz) { // Original name: openContactSyncModal
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            zuuluu = _closure1_slot32;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            tangon = golfie.initialRoutes;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00012_ip = 50; continue _fun00011 }
 31:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.NORMAL;
            zuuluu = tangon.bind(entity)(zuuluu);
 50:
            if(!oscard) { _fun00012_ip = 90; continue _fun00011 }
 53:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackFlowStart;
            zuuluu = {};
            zuuluu['location'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
 90:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 19;
            tangon = zuuluu[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.pushLazy;
            option = _closure1_slot0;
            tangon = 21;
            tangon = zuuluu[tangon];
            option = option.bind(entity)(tangon);
            tangon = 20;
            tangon = zuuluu[tangon];
            zuuluu = zuuluu.paths;
            tangon = option.bind(entity)(tangon, zuuluu);
            zuuluu = {};
            option = golfie.initialRoutes;
            zuuluu['initialRoutes'] = option;
            option = golfie.openSettings;
            zuuluu['openSettingsSheet'] = option;
            golfie = golfie.customLandingPage;
            zuuluu['customLandingPage'] = golfie;
            michal = _closure1_slot20;
            tangon = report.bind(oscard)(tangon, zuuluu, michal);
            zuuluu = tangon.then;
            michal = argBaz;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot31 = oscard;
    tangon = function() { // Original name: refreshContactSyncPermissionStatus
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.checkContactPermissions;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = _closure1_slot7;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot32 = tangon;
    michal = function(argFoo) { // Original name: closeContactSyncModal
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            oscard = zuuluu.skip;
            entity = undefined;
            if(!(oscard === entity)) { _fun00014_ip = 19; continue _fun00013 }
 17:
            oscard = true;
 19:
            report = zuuluu.friendsFound;
            tangon = zuuluu.friendsAdded;
            option = zuuluu.back;
            if(!(option === entity)) { _fun00014_ip = 43; continue _fun00013 }
 41:
            option = false;
 43:
            zuuluu = zuuluu.onComplete;
            golfie = null;
            if(!(golfie == zuuluu)) { _fun00014_ip = 82; continue _fun00013 }
 55:
            golfie = function() { // Original name: oldCloseContactSyncModal
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    verify = arguments[0];
                    golfie = arguments[3];
                    entity = undefined;
                    if(!(verify === entity)) { _fun00016_ip = 16; continue _fun00015 }
 14:
                    verify = true;
 16:
                    var _closure3_slot0 = verify;
                    if(!(golfie === entity)) { _fun00016_ip = 26; continue _fun00015 }
 24:
                    golfie = false;
 26:
                    var _closure3_slot1 = golfie;
                    var _closure3_slot2 = entity;
                    tangon = _closure1_slot15;
                    tangon = tangon.bind(entity)();
                    _closure3_slot2 = tangon;
                    if(golfie) { _fun00016_ip = 102; continue _fun00015 }
 52:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 9;
                    report = option[report];
                    option = oscard.bind(entity)(report);
                    oscard = option.trackFlowEnd;
                    report = {};
                    offset = arguments[1];
                    report['num_contacts_found'] = offset;
                    offset = arguments[2];
                    report['num_contacts_added'] = offset;
                    report = oscard.bind(option)(verify, report);
 102:
                    if(!tangon) { _fun00016_ip = 186; continue _fun00015 }
 105:
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tangon = 19;
                    tangon = verify[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.updateAnimation;
                    tangon = _closure1_slot20;
                    option = _closure1_slot0;
                    zuuluu = 23;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(entity)(zuuluu);
                    zuuluu = zuuluu.ModalAnimation;
                    if(golfie) { _fun00016_ip = 174; continue _fun00015 }
 160:
                    golfie = zuuluu.SLIDE_IN_OUT;
                    golfie = report.bind(oscard)(tangon, golfie);
                    _fun00016_ip = 186; continue _fun00015;
 174:
                    zuuluu = zuuluu.SLIDE_IN_OUT_REVERSE;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 186:
                    zuuluu = global;
                    tangon = zuuluu.setTimeout;
                    zuuluu = function() {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            report = _closure1_slot1;
                            entity = _closure1_slot2;
                            zuuluu = 19;
                            tangon = entity[zuuluu];
                            entity = undefined;
                            oscard = report.bind(entity)(tangon);
                            report = oscard.popWithKey;
                            tangon = _closure1_slot20;
                            tangon = report.bind(oscard)(tangon);
                            tangon = _closure3_slot2;
                            if(!tangon) { _fun00018_ip = 191; continue _fun00017 }
 53:
                            option = _closure3_slot1;
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            zuuluu = tangon[zuuluu];
                            golfie = report.bind(entity)(zuuluu);
                            oscard = golfie.updateAnimation;
                            report = _closure1_slot20;
                            zuuluu = _closure1_slot0;
                            michal = 23;
                            michal = tangon[michal];
                            michal = zuuluu.bind(entity)(michal);
                            michal = michal.ModalAnimation;
                            if(option) { _fun00018_ip = 157; continue _fun00017 }
 109:
                            option = michal.SLIDE_IN_OUT;
                            option = oscard.bind(golfie)(report, option);
                            option = 24;
                            option = tangon[option];
                            offset = zuuluu.bind(entity)(option);
                            verify = offset.nextOnboardingStep;
                            option = {};
                            yankee = _closure3_slot0;
                            option['skip'] = yankee;
                            option = verify.bind(offset)(option);
                            _fun00018_ip = 191; continue _fun00017;
 157:
                            michal = michal.SLIDE_IN_OUT_REVERSE;
                            michal = oscard.bind(golfie)(report, michal);
                            michal = 24;
                            michal = tangon[michal];
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.previousOnboardingStep;
                            michal = michal.bind(zuuluu)();
 191:
                            return entity;
                        }
                    };
                    michal = 0;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            foxtra = undefined;
            romeon = oscard;
            yankee = report;
            offset = tangon;
            verify = option;
            golfie = foxtra[golfie](romeon, yankee, offset, verify, option);
            _fun00014_ip = 107; continue _fun00013;
 82:
            michal = function(argFoo) { // Original name: redesignCloseContactSyncModal
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = arguments[1];
                    entity = undefined;
                    if(!(zuuluu === entity)) { _fun00020_ip = 11; continue _fun00019 }
 9:
                    zuuluu = true;
 11:
                    michal = _closure1_slot15;
                    michal = michal.bind(entity)();
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 9;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.trackFlowEnd;
                    tangon = {};
                    golfie = arguments[2];
                    tangon['num_contacts_found'] = golfie;
                    golfie = arguments[3];
                    tangon['num_contacts_added'] = golfie;
                    tangon = report.bind(oscard)(zuuluu, tangon);
                    if(michal) { _fun00020_ip = 102; continue _fun00019 }
 75:
                    michal = global;
                    report = michal.setTimeout;
                    tangon = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 19;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.popWithKey;
                        michal = _closure1_slot20;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = 0;
                    michal = report.bind(entity)(tangon, michal);
                    _fun00020_ip = 110; continue _fun00019;
 102:
                    michal = argFoo;
                    michal = michal.bind(entity)(zuuluu);
 110:
                    return entity;
                }
            };
            foxtra = undefined;
            romeon = zuuluu;
            yankee = oscard;
            offset = report;
            verify = tangon;
            michal = foxtra[michal](romeon, yankee, offset, verify, option);
 107:
            return entity;
        }
    };
    var _closure1_slot33 = michal;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.setError;
    var _closure1_slot6 = offset;
    offset = golfie.setPermissionState;
    var _closure1_slot7 = offset;
    offset = golfie.setSuggestions;
    var _closure1_slot8 = offset;
    offset = golfie.setPhone;
    var _closure1_slot9 = offset;
    offset = golfie.setPhoneToken;
    var _closure1_slot10 = offset;
    offset = golfie.setName;
    var _closure1_slot11 = offset;
    offset = golfie.useContactSyncModalStore;
    var _closure1_slot12 = offset;
    offset = golfie.ContactSyncModes;
    var _closure1_slot13 = offset;
    offset = golfie.initialize;
    var _closure1_slot14 = offset;
    golfie = golfie.getIsOnboarding;
    var _closure1_slot15 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.deleteStoredContacts;
    var _closure1_slot16 = offset;
    golfie = golfie.setStoredContacts;
    var _closure1_slot17 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.ContactPermissions;
    var _closure1_slot18 = offset;
    offset = golfie.ContactSyncScenes;
    var _closure1_slot19 = offset;
    golfie = golfie.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot20 = golfie;
    golfie = 6;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.AnalyticEvents;
    var _closure1_slot21 = offset;
    golfie = golfie.PlatformTypes;
    var _closure1_slot22 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.NativePermissionStates;
    var _closure1_slot23 = offset;
    golfie = golfie.NativePermissionTypes;
    var _closure1_slot24 = golfie;
    golfie = 25;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/contact_sync/native/ContactSyncModalActionCreators.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function() { // Original name: handlePhoneVerificationComplete
        entity = undefined;
        tangon = _closure1_slot27;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['handlePhoneVerificationComplete'] = golfie;
    golfie = function() { // Original name: startContactSync
        entity = undefined;
        tangon = _closure1_slot28;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startContactSync'] = golfie;
    golfie = function() { // Original name: bulkAddFriendSuggestions
        entity = undefined;
        tangon = _closure1_slot29;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['bulkAddFriendSuggestions'] = golfie;
    golfie = function(argFoo) { // Original name: goBackToLanding
        tangon = argFoo;
        zuuluu = _closure1_slot0;
        report = _closure1_slot2;
        michal = 9;
        oscard = report[michal];
        entity = undefined;
        golfie = zuuluu.bind(entity)(oscard);
        oscard = golfie.trackFlowStep;
        michal = report[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.Steps;
        report = michal.LANDING;
        zuuluu = false;
        michal = true;
        michal = oscard.bind(golfie)(report, zuuluu, michal);
        michal = tangon.getState;
        michal = michal.bind(tangon)();
        michal = michal.routes;
        zuuluu = tangon.pop;
        report = michal.length;
        michal = 1;
        michal = report - michal;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['goBackToLanding'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: submitPhone
        tangon = argBar;
        report = _closure1_slot9;
        entity = undefined;
        zuuluu = argFoo;
        zuuluu = report.bind(entity)(zuuluu);
        report = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 9;
        oscard = option[zuuluu];
        golfie = report.bind(entity)(oscard);
        oscard = golfie.trackFlowStep;
        zuuluu = option[zuuluu];
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = zuuluu.Steps;
        report = zuuluu.VERIFY_PHONE_NUMBER;
        zuuluu = false;
        zuuluu = oscard.bind(golfie)(report, zuuluu, zuuluu);
        zuuluu = tangon.navigate;
        michal = _closure1_slot19;
        michal = michal.VERIFY_PHONE;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['submitPhone'] = golfie;
    golfie = function() { // Original name: verifyPhone
        entity = undefined;
        tangon = _closure1_slot30;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['verifyPhone'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: verifyPhoneWithPassword
        tangon = argBar;
        report = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 9;
        oscard = option[zuuluu];
        entity = undefined;
        golfie = report.bind(entity)(oscard);
        oscard = golfie.trackFlowStep;
        zuuluu = option[zuuluu];
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = zuuluu.Steps;
        report = zuuluu.PASSWORD_CONFIRM;
        zuuluu = false;
        zuuluu = oscard.bind(golfie)(report, zuuluu, zuuluu);
        report = _closure1_slot10;
        zuuluu = argFoo;
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = tangon.navigate;
        michal = _closure1_slot19;
        michal = michal.VERIFY_PASSWORD;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['verifyPhoneWithPassword'] = golfie;
    golfie = function() { // Original name: upsellDismissed
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.trackFlowEnd;
        michal = true;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['upsellDismissed'] = golfie;
    zuuluu['openContactSyncModal'] = oscard;
    oscard = function() { // Original name: openContactSyncModalOnboarding
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00022_ip = 11; continue _fun00021 }
 9:
            michal = false;
 11:
            if(!michal) { _fun00022_ip = 77; continue _fun00021 }
 14:
            zuuluu = _closure1_slot14;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 22;
            michal = oscard[michal];
            report = report.bind(entity)(michal);
            michal = report.hasDeferredInvite;
            michal = michal.bind(report)();
            tangon = _closure1_slot13;
            if(michal) { _fun00022_ip = 66; continue _fun00021 }
 58:
            michal = tangon.ONBOARDING;
            _fun00022_ip = 72; continue _fun00021;
 66:
            michal = tangon.ONBOARDING_INVITE;
 72:
            michal = zuuluu.bind(entity)(michal);
 77:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            option = 9;
            zuuluu = report[option];
            oscard = verify.bind(entity)(zuuluu);
            tangon = oscard.trackFlowStart;
            zuuluu = {};
            golfie = {};
            option = report[option];
            option = verify.bind(entity)(option);
            option = option.CONTACT_SYNC_ONBOARDING_LOCATION;
            golfie['page'] = option;
            zuuluu['location'] = golfie;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 19;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.pushLazy;
            tangon = _closure1_slot3;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00024_ip = 116; continue _fun00023 }
 7:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        zuuluu = 21;
                        zuuluu = michal[zuuluu];
                        golfie = undefined;
                        tangon = tangon.bind(golfie)(zuuluu);
                        zuuluu = 20;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        michal = tangon.bind(golfie)(zuuluu, michal);
                        SaveGenerator(address=54);
 52:
                        return michal;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00024_ip = 113; continue _fun00023 }
 60:
                        zuuluu = michal.default;
                        tangon = {};
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        report = 23;
                        report = option[report];
                        report = oscard.bind(golfie)(report);
                        report = report.ModalAnimation;
                        report = report.SLIDE_IN_OUT;
                        tangon['animation'] = report;
                        zuuluu['modalConfig'] = tangon;
                        return zuuluu;
 113:
                        return michal;
 116:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = _closure1_slot20;
            michal = {};
            michal = report.bind(oscard)(tangon, michal, zuuluu);
            return entity;
        }
    };
    zuuluu['openContactSyncModalOnboarding'] = oscard;
    report = function() { // Original name: openContactSyncModalDeeplink
        tangon = _closure1_slot31;
        zuuluu = {};
        entity = 'Deep Link';
        zuuluu['page'] = entity;
        entity = undefined;
        michal = {};
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    zuuluu['openContactSyncModalDeeplink'] = report;
    zuuluu['refreshContactSyncPermissionStatus'] = tangon;
    zuuluu['closeContactSyncModal'] = michal;
    return entity;
})();