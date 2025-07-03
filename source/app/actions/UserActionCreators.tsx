// app/actions/UserActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchProfile
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
                    if(tangon) { _fun00002_ip = 788; continue _fun00001 }
 13:
                    option = argFoo;
                    romeon = undefined;
                    if(!(michal === romeon)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    michal = {};
 24:
                    vacuum = michal.type;
                    update = michal.withMutualGuilds;
                    source = michal.withMutualFriendsCount;
                    ctrled = michal.withMutualFriends;
                    golfie = michal.guildId;
                    echoed = michal.connectionsRoleId;
                    result = michal.joinRequestId;
                    sizing = michal.abortSignal;
                    yankee = arguments[2];
                    verify = undefined;
                    kiloes = undefined;
                    SaveGenerator(address=81);
 79:
                    return romeon;
 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 785; continue _fun00001 }
 90:
                    report = global;
                    oscard = report.Date;
                    tangon = oscard.now;
                    verify = tangon.bind(oscard)();
                    foxtra = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    oscard = oscard[tangon];
                    backup = foxtra.bind(romeon)(oscard);
                    foxtra = backup.dispatch;
                    oscard = {};
                    output = 'USER_PROFILE_FETCH_START';
                    oscard['type'] = output;
                    output = option;
                    oscard['userId'] = output;
                    output = golfie;
                    oscard['guildId'] = output;
                    output = ctrled;
                    oscard['withMutualFriends'] = output;
                    oscard = foxtra.bind(backup)(oscard);
 174: // try_start_0
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    oscard = 5;
                    oscard = backup[oscard];
                    oscard = foxtra.bind(romeon)(oscard);
                    backup = oscard.HTTP;
                    foxtra = backup.get;
                    oscard = {};
                    config = _closure1_slot6;
                    sequen = config.USER_PROFILE;
                    output = option;
                    output = sequen.bind(config)(output);
                    oscard['url'] = output;
                    output = {};
                    output['type'] = vacuum;
                    output['with_mutual_guilds'] = update;
                    update = ctrled;
                    output['with_mutual_friends'] = update;
                    update = source;
                    if(!source) { _fun00002_ip = 278; continue _fun00001 }
 257:
                    sequen = ctrled;
                    vacuum = null;
                    vacuum = vacuum == sequen;
                    source = vacuum;
                    if(vacuum) { _fun00002_ip = 275; continue _fun00001 }
 272:
                    source = !ctrled;
 275:
                    update = source;
 278:
                    output['with_mutual_friends_count'] = update;
                    update = golfie;
                    output['guild_id'] = update;
                    output['connections_role_id'] = echoed;
                    output['join_request_id'] = result;
                    oscard['query'] = output;
                    oscard['signal'] = sizing;
                    sizing = true;
                    oscard['rejectWithError'] = sizing;
                    oscard = foxtra.bind(backup)(oscard);
                    SaveGenerator(address=328);
 326:
                    return oscard;
 328:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(foxtra) { _fun00002_ip = 567; continue _fun00001 }
 337:
                    kiloes = oscard;
                    foxtra = yankee;
                    backup = null;
                    if(!(backup != foxtra)) { _fun00002_ip = 369; continue _fun00001 }
 349:
                    sizing = yankee;
                    yankee = kiloes;
                    foxtra = yankee.body;
                    yankee = golfie;
                    yankee = sizing.bind(romeon)(foxtra, yankee);
 369:
                    foxtra = _closure1_slot1;
                    yankee = _closure1_slot2;
                    sizing = yankee[tangon];
                    echoed = foxtra.bind(romeon)(sizing);
                    result = echoed.dispatch;
                    sizing = {};
                    output = 'USER_UPDATE';
                    sizing['type'] = output;
                    output = kiloes;
                    update = output.body;
                    update = update.user;
                    sizing['user'] = update;
                    sizing = result.bind(echoed)(sizing);
                    yankee = yankee[tangon];
                    sizing = foxtra.bind(romeon)(yankee);
                    foxtra = sizing.dispatch;
                    yankee = {};
                    result = 'USER_PROFILE_FETCH_SUCCESS';
                    yankee['type'] = result;
                    output = output.body;
                    yankee['userProfile'] = output;
                    output = verify;
                    yankee['fetchStartedAt'] = output;
                    yankee = foxtra.bind(sizing)(yankee);
                    foxtra = golfie;
                    foxtra = backup != foxtra;
                    yankee = foxtra;
                    if(!foxtra) { _fun00002_ip = 501; continue _fun00001 }
 483:
                    foxtra = kiloes;
                    foxtra = foxtra.body;
                    foxtra = foxtra.guild_member;
                    yankee = backup != foxtra;
 501:
                    if(!yankee) { _fun00002_ip = 564; continue _fun00001 }
 504:
                    foxtra = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[tangon];
                    backup = foxtra.bind(romeon)(yankee);
                    foxtra = backup.dispatch;
                    yankee = {};
                    sizing = 'GUILD_MEMBER_PROFILE_UPDATE';
                    yankee['type'] = sizing;
                    sizing = golfie;
                    yankee['guildId'] = sizing;
                    kiloes = kiloes.body;
                    kiloes = kiloes.guild_member;
                    yankee['guildMember'] = kiloes;
                    yankee = foxtra.bind(backup)(yankee);
 564: // try_end0
                    return romeon;
 567:
                    return oscard;
 570: // catch_target0
                    CatchBlockStart(arg_register=10);
                    zuuluu = yankee;
                    foxtra = null;
                    yankee = foxtra != yankee;
                    oscard = yankee;
                    if(!yankee) { _fun00002_ip = 611; continue _fun00001 }
 587:
                    yankee = zuuluu;
                    backup = foxtra == yankee;
                    yankee = undefined;
                    if(backup) { _fun00002_ip = 607; continue _fun00001 }
 599:
                    backup = zuuluu;
                    yankee = backup.body;
 607:
                    oscard = foxtra != yankee;
 611:
                    if(!oscard) { _fun00002_ip = 681; continue _fun00001 }
 614:
                    yankee = _closure1_slot7;
                    oscard = yankee.warn;
                    foxtra = zuuluu;
                    backup = foxtra.body;
                    sizing = backup.code;
                    foxtra = foxtra.body;
                    kiloes = foxtra.message;
                    report = report.HermesInternal;
                    backup = report.concat;
                    foxtra = 'fetchProfile error: ';
                    report = ' - ';
                    report = backup.bind(foxtra)(sizing, report, kiloes);
                    report = oscard.bind(yankee)(report);
 681:
                    report = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    tangon = foxtra[tangon];
                    oscard = report.bind(romeon)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    yankee = 'USER_PROFILE_FETCH_FAILURE';
                    tangon['type'] = yankee;
                    yankee = _closure1_slot0;
                    offset = 10;
                    offset = foxtra[offset];
                    offset = yankee.bind(romeon)(offset);
                    offset = offset.APIError;
                    yankee = offset.prototype;
                    yankee = Object.create(yankee, {constructor: {value: offset}});
                    target = yankee;
                    papara = zuuluu;
                    offset = new target[offset](papara, cntext);
                    offset = offset instanceof Object ? offset : yankee;
                    tangon['apiError'] = offset;
                    tangon['fetchStartedAt'] = verify;
                    tangon['userId'] = option;
                    tangon['guildId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 785:
                    return michal;
 788:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _fetchMutualFriends
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 361; continue _fun00003 }
 13:
                    oscard = yankee;
                    offset = argBar;
                    option = _closure1_slot1;
                    tangon = _closure1_slot2;
                    golfie = 6;
                    tangon = tangon[golfie];
                    report = undefined;
                    verify = option.bind(report)(tangon);
                    option = verify.dispatch;
                    tangon = {};
                    romeon = 'MUTUAL_FRIENDS_FETCH_START';
                    tangon['type'] = romeon;
                    tangon['userId'] = yankee;
                    tangon = option.bind(verify)(tangon);
 70: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 5;
                    tangon = verify[tangon];
                    tangon = option.bind(report)(tangon);
                    verify = tangon.HTTP;
                    option = verify.get;
                    tangon = {};
                    foxtra = _closure1_slot6;
                    romeon = foxtra.USER_RELATIONSHIPS;
                    yankee = oscard;
                    yankee = romeon.bind(foxtra)(yankee);
                    tangon['url'] = yankee;
                    yankee = true;
                    tangon['oldFormErrors'] = yankee;
                    tangon['signal'] = offset;
                    offset = false;
                    tangon['rejectWithError'] = offset;
                    tangon = option.bind(verify)(tangon);
                    SaveGenerator(address=151);
 149:
                    return tangon;
 151:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00004_ip = 216; continue _fun00003 }
 157:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[golfie];
                    offset = verify.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'MUTUAL_FRIENDS_FETCH_SUCCESS';
                    option['type'] = yankee;
                    yankee = oscard;
                    option['userId'] = yankee;
                    yankee = tangon.body;
                    option['mutualFriends'] = yankee;
                    option = verify.bind(offset)(option);
 213: // try_end0
                    return report;
 216:
                    return tangon;
 219: // catch_target0
                    CatchBlockStart(arg_register=3);
                    michal = tangon;
                    option = null;
                    verify = option == tangon;
                    tangon = undefined;
                    if(verify) { _fun00004_ip = 243; continue _fun00003 }
 235:
                    verify = michal;
                    tangon = verify.body;
 243:
                    if(!(option != tangon)) { _fun00004_ip = 316; continue _fun00003 }
 247:
                    verify = _closure1_slot7;
                    option = verify.warn;
                    tangon = michal;
                    offset = tangon.body;
                    foxtra = offset.code;
                    tangon = tangon.body;
                    romeon = tangon.message;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    yankee = tangon.concat;
                    offset = 'fetchMutualFriends error: ';
                    tangon = ' - ';
                    tangon = yankee.bind(offset)(foxtra, tangon, romeon);
                    tangon = option.bind(verify)(tangon);
 316:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'MUTUAL_FRIENDS_FETCH_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['userId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 361:
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'UserProfileModalActionCreators';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot7 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/UserActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchCurrentUser
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = arguments[0];
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 13; continue _fun00005 }
 11:
            michal = {};
 13:
            var _closure2_slot0 = tangon;
            michal = michal.withAnalyticsToken;
            oscard = tangon !== michal;
            if(!oscard) { _fun00006_ip = 35; continue _fun00005 }
 32:
            oscard = michal;
 35:
            _closure2_slot0 = oscard;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {};
            report = _closure1_slot6;
            report = report.ME;
            michal['url'] = report;
            report = {};
            report['with_analytics_token'] = oscard;
            michal['query'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = report[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'CURRENT_USER_UPDATE';
                    zuuluu['type'] = golfie;
                    golfie = entity.body;
                    zuuluu['user'] = golfie;
                    golfie = _closure2_slot0;
                    if(!golfie) { _fun00008_ip = 73; continue _fun00007 }
 62:
                    golfie = entity.body;
                    oscard = golfie.analytics_token;
 73:
                    zuuluu['analyticsToken'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure1_slot4;
                    option = entity.body;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    verify = michal;
                    entity = new verify[zuuluu](option, golfie);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['fetchCurrentUser'] = tangon;
    tangon = function() { // Original name: acceptAgreements
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = arguments[0];
            oscard = arguments[1];
            offset = undefined;
            if(!(golfie === offset)) { _fun00010_ip = 16; continue _fun00009 }
 14:
            golfie = true;
 16:
            if(!(oscard === offset)) { _fun00010_ip = 22; continue _fun00009 }
 20:
            oscard = true;
 22:
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            tangon = zuuluu.bind(offset)(michal);
            zuuluu = tangon.patch;
            michal = {};
            report = _closure1_slot6;
            report = report.USER_AGREEMENTS;
            michal['url'] = report;
            report = {};
            verify = _closure1_slot0;
            option = 8;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.NetworkActionNames;
            option = option.USER_ACCEPT_AGREEMENTS;
            report['event'] = option;
            michal['trackedActionData'] = report;
            report = {};
            report['terms'] = golfie;
            report['privacy'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function() {
                entity = true;
                return entity;
            };
            entity = function() {
                entity = false;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['acceptAgreements'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setFlag
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            entity = entity.bind(zuuluu)();
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 9;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            report = null;
            oscard = report != entity;
            report = 'setFlag: user cannot be undefined';
            report = golfie.bind(zuuluu)(oscard, report);
            entity = entity.flags;
            report = argBar;
            if(report) { _fun00012_ip = 79; continue _fun00011 }
 70:
            report = ~michal;
            report = entity & report;
            _fun00012_ip = 83; continue _fun00011;
 79:
            report = entity | michal;
 83:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            tangon = _closure1_slot6;
            tangon = tangon.ME;
            entity['url'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            tangon = {};
            tangon['flags'] = report;
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['setFlag'] = tangon;
    tangon = function(argFoo) { // Original name: getUser
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot5;
            michal = zuuluu.getUser;
            tangon = michal.bind(zuuluu)(option);
            michal = null;
            if(!(michal == tangon)) { _fun00014_ip = 118; continue _fun00013 }
 33:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = report.bind(michal)(zuuluu);
            report = michal.HTTP;
            zuuluu = report.get;
            michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
            golfie = _closure1_slot6;
            oscard = golfie.USER;
            oscard = oscard.bind(golfie)(option);
            michal['url'] = oscard;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'USER_UPDATE';
                michal['type'] = report;
                report = argFoo;
                report = report.body;
                michal['user'] = report;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot5;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00014_ip = 137; continue _fun00013;
 118:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)(tangon);
 137:
            return entity;
        }
    };
    zuuluu['getUser'] = tangon;
    tangon = function() { // Original name: fetchProfile
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchProfile'] = tangon;
    michal = function() { // Original name: fetchMutualFriends
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMutualFriends'] = michal;
    return entity;
})();