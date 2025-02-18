// app/modules/parent_tools/FamilyCenterActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _updateLinkForUserId
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 125; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.patch;
                    michal = {};
                    oscard = _closure1_slot6;
                    oscard = oscard.FAMILY_CENTER_LINKED_USERS;
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = argFoo;
                    oscard['linked_user_id'] = golfie;
                    golfie = argBar;
                    oscard['link_status'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    report = tangon.bind(report)(michal);
                    tangon = report.then;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS';
                        michal['type'] = report;
                        michal['linkedUsers'] = entity;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=113);
 111:
                    return michal;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 122; continue _fun00001 }
 119:
                    return zuuluu;
 122:
                    return michal;
 125:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _removeLinkForUserId
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 121; continue _fun00003 }
 12:
                    var _closure4_slot0 = option;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 4;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.del;
                    tangon = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.FAMILY_CENTER_LINKED_USERS;
                    tangon['url'] = golfie;
                    golfie = {};
                    golfie['linked_user_id'] = option;
                    tangon['body'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    report = report.bind(oscard)(tangon);
                    tangon = report.then;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS';
                        michal['type'] = report;
                        michal['linkedUsers'] = entity;
                        report = _closure4_slot0;
                        michal['deletedUserId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=109);
 107:
                    return michal;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 118; continue _fun00003 }
 115:
                    return zuuluu;
 118:
                    return michal;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _getLinkCodeForCurrentUser
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 102; continue _fun00005 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot6;
                    oscard = oscard.FAMILY_CENTER_LINK_CODE;
                    michal['url'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    report = tangon.bind(report)(michal);
                    tangon = report.then;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        entity = entity.link_code;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS';
                        michal['type'] = report;
                        michal['linkCode'] = entity;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 99; continue _fun00005 }
 96:
                    return zuuluu;
 99:
                    return michal;
 102:
                    return entity;
                }
            };
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
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.FamilyCenterAction;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.AnalyticEvents;
    var _closure1_slot5 = report;
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = {};
    report = function() { // Original name: initialPageLoad
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 358; continue _fun00007 }
 10:
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = 3;
                    michal = report[verify];
                    oscard = undefined;
                    golfie = zuuluu.bind(oscard)(michal);
                    zuuluu = golfie.dispatch;
                    michal = {};
                    option = 'FAMILY_CENTER_FETCH_START';
                    michal['type'] = option;
                    michal = zuuluu.bind(golfie)(michal);
                    zuuluu = _closure1_slot0;
                    michal = 4;
                    michal = report[michal];
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=114);
 112:
                    return michal;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 355; continue _fun00007 }
 123:
                    zuuluu = michal.body;
                    yankee = zuuluu.teen_audit_log;
                    option = zuuluu.linked_users;
                    golfie = zuuluu.users;
                    zuuluu = {};
                    offset = null;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 165; continue _fun00007 }
 159:
                    report = yankee.teen_user_id;
 165:
                    zuuluu['teenId'] = report;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 185; continue _fun00007 }
 179:
                    report = yankee.range_start_id;
 185:
                    zuuluu['rangeStartId'] = report;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 205; continue _fun00007 }
 199:
                    report = yankee.totals;
 205:
                    if(!(offset == report)) { _fun00008_ip = 211; continue _fun00007 }
 209:
                    report = {};
 211:
                    zuuluu['totals'] = report;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 231; continue _fun00007 }
 225:
                    report = yankee.actions;
 231:
                    if(!(offset == report)) { _fun00008_ip = 239; continue _fun00007 }
 235:
                    report = new Array(0);
 239:
                    zuuluu['actions'] = report;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 259; continue _fun00007 }
 253:
                    report = yankee.users;
 259:
                    if(!(offset == report)) { _fun00008_ip = 267; continue _fun00007 }
 263:
                    report = new Array(0);
 267:
                    zuuluu['users'] = report;
                    romeon = offset == yankee;
                    report = undefined;
                    if(romeon) { _fun00008_ip = 287; continue _fun00007 }
 281:
                    report = yankee.guilds;
 287:
                    if(!(offset == report)) { _fun00008_ip = 295; continue _fun00007 }
 291:
                    report = new Array(0);
 295:
                    zuuluu['guilds'] = report;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[verify];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'FAMILY_CENTER_INITIAL_LOAD';
                    tangon['type'] = verify;
                    tangon['familyCenterTeenActivity'] = zuuluu;
                    tangon['linkedUsers'] = option;
                    tangon['users'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 355:
                    return michal;
 358:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['initialPageLoad'] = report;
    report = function() { // Original name: fetchLinkedUsers
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 167; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.FAMILY_CENTER_LINKED_USERS;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 164; continue _fun00009 }
 82:
                    report = michal.body;
                    zuuluu = {};
                    golfie = report.linked_users;
                    zuuluu['linkedUsers'] = golfie;
                    report = report.users;
                    zuuluu['users'] = report;
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    verify = tangon;
                    option = zuuluu;
                    golfie = copyDataProperties(verify, option);
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 164:
                    return michal;
 167:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['fetchLinkedUsers'] = report;
    report = function(argFoo, argBar) { // Original name: requestLink
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 194; continue _fun00011 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.FAMILY_CENTER_LINKED_USERS;
                    michal['url'] = golfie;
                    golfie = {};
                    verify = _closure2_slot0;
                    golfie['recipient_id'] = verify;
                    option = _closure2_slot1;
                    golfie['code'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=103);
 101:
                    return michal;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 191; continue _fun00011 }
 109:
                    report = michal.body;
                    zuuluu = {};
                    golfie = report.linked_users;
                    zuuluu['linkedUsers'] = golfie;
                    report = report.users;
                    zuuluu['users'] = report;
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'FAMILY_CENTER_REQUEST_LINK_SUCCESS';
                    tangon['type'] = golfie;
                    yankee = tangon;
                    offset = zuuluu;
                    golfie = copyDataProperties(yankee, offset);
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 191:
                    return michal;
 194:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['requestLink'] = report;
    report = function(argFoo) { // Original name: fetchTeenActivity
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 262; continue _fun00013 }
 10:
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    golfie = 3;
                    michal = report[golfie];
                    oscard = undefined;
                    option = zuuluu.bind(oscard)(michal);
                    zuuluu = option.dispatch;
                    michal = {};
                    verify = 'FAMILY_CENTER_FETCH_START';
                    michal['type'] = verify;
                    michal = zuuluu.bind(option)(michal);
                    option = _closure1_slot6;
                    zuuluu = option.FAMILY_CENTER_TEEN_ACTIVITY;
                    michal = _closure2_slot0;
                    option = zuuluu.bind(option)(michal);
                    zuuluu = _closure1_slot0;
                    michal = 4;
                    michal = report[michal];
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    michal['url'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=126);
 124:
                    return michal;
 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 259; continue _fun00013 }
 135:
                    zuuluu = michal.body;
                    report = zuuluu.teen_audit_log;
                    zuuluu = {};
                    option = report.teen_user_id;
                    zuuluu['teenId'] = option;
                    option = report.range_start_id;
                    zuuluu['rangeStartId'] = option;
                    option = report.totals;
                    zuuluu['totals'] = option;
                    option = report.actions;
                    zuuluu['actions'] = option;
                    option = report.users;
                    zuuluu['users'] = option;
                    report = report.guilds;
                    zuuluu['guilds'] = report;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[golfie];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['familyCenterTeenActivity'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 259:
                    return michal;
 262:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['fetchTeenActivity'] = report;
    report = function(argFoo, argBar, argBaz, argCor) { // Original name: fetchMoreTeenActivity
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 299; continue _fun00015 }
 10:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 4;
                    michal = tangon[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    yankee = _closure1_slot6;
                    offset = yankee.FAMILY_CENTER_TEEN_ACTIVITY_MORE;
                    output = _closure2_slot0;
                    sizing = _closure2_slot1;
                    kiloes = _closure2_slot2;
                    backup = _closure2_slot3;
                    result = yankee;
                    report = result[offset](output, sizing, kiloes, backup, foxtra);
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=102);
 100:
                    return michal;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 296; continue _fun00015 }
 111:
                    zuuluu = michal.body;
                    zuuluu = zuuluu.teen_audit_log;
                    golfie = {};
                    tangon = zuuluu.teen_user_id;
                    golfie['teenId'] = tangon;
                    tangon = zuuluu.range_start_id;
                    golfie['rangeStartId'] = tangon;
                    tangon = zuuluu.actions;
                    golfie['actions'] = tangon;
                    tangon = zuuluu.users;
                    golfie['users'] = tangon;
                    tangon = zuuluu.guilds;
                    golfie['guilds'] = tangon;
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 5;
                    tangon = option[tangon];
                    yankee = report.bind(oscard)(tangon);
                    offset = yankee.track;
                    tangon = _closure1_slot5;
                    verify = tangon.FAMILY_CENTER_ACTION;
                    tangon = {};
                    foxtra = _closure1_slot4;
                    foxtra = foxtra.LoadMore;
                    tangon['action'] = foxtra;
                    foxtra = _closure2_slot0;
                    tangon['selected_teen_id'] = foxtra;
                    romeon = _closure2_slot1;
                    tangon['action_display_type'] = romeon;
                    tangon = offset.bind(yankee)(verify, tangon);
                    tangon = 3;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                    tangon['type'] = option;
                    tangon['familyCenterTeenActivity'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 296:
                    return michal;
 299:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['fetchMoreTeenActivity'] = report;
    report = function(argFoo) { // Original name: selectTab
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'FAMILY_CENTER_HANDLE_TAB_SELECT';
        michal['type'] = report;
        report = argFoo;
        michal['tab'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['selectTab'] = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: updateLinkForUserId
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateLinkForUserId'] = tangon;
    tangon = function() { // Original name: removeLinkForUserId
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['removeLinkForUserId'] = tangon;
    michal = function() { // Original name: getLinkCodeForCurrentUser
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getLinkCodeForCurrentUser'] = michal;
    return entity;
})();