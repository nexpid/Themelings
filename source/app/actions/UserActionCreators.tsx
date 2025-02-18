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
                    if(tangon) { _fun00002_ip = 762; continue _fun00001 }
 13:
                    option = argFoo;
                    yankee = undefined;
                    if(!(michal === yankee)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    michal = {};
 24:
                    source = michal.friendToken;
                    result = michal.withMutualGuilds;
                    echoed = michal.withMutualFriendsCount;
                    update = michal.withMutualFriends;
                    golfie = michal.guildId;
                    output = michal.connectionsRoleId;
                    sizing = michal.joinRequestId;
                    backup = michal.abortSignal;
                    offset = arguments[2];
                    oscard = undefined;
                    SaveGenerator(address=80);
 78:
                    return yankee;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 759; continue _fun00001 }
 89:
                    romeon = _closure1_slot1;
                    report = _closure1_slot2;
                    tangon = 6;
                    report = report[tangon];
                    foxtra = romeon.bind(yankee)(report);
                    romeon = foxtra.dispatch;
                    report = {};
                    kiloes = 'USER_PROFILE_FETCH_START';
                    report['type'] = kiloes;
                    kiloes = option;
                    report['userId'] = kiloes;
                    kiloes = golfie;
                    report['guildId'] = kiloes;
                    report = romeon.bind(foxtra)(report);
 148: // try_start_0
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    report = 5;
                    report = foxtra[report];
                    report = romeon.bind(yankee)(report);
                    foxtra = report.HTTP;
                    romeon = foxtra.get;
                    report = {};
                    vacuum = _closure1_slot6;
                    ctrled = vacuum.USER_PROFILE;
                    kiloes = option;
                    kiloes = ctrled.bind(vacuum)(kiloes);
                    report['url'] = kiloes;
                    kiloes = {};
                    kiloes['friend_token'] = source;
                    kiloes['with_mutual_guilds'] = result;
                    result = update;
                    kiloes['with_mutual_friends'] = result;
                    result = echoed;
                    if(!echoed) { _fun00002_ip = 253; continue _fun00001 }
 232:
                    ctrled = update;
                    source = null;
                    source = source == ctrled;
                    echoed = source;
                    if(source) { _fun00002_ip = 250; continue _fun00001 }
 247:
                    echoed = !update;
 250:
                    result = echoed;
 253:
                    kiloes['with_mutual_friends_count'] = result;
                    result = golfie;
                    kiloes['guild_id'] = result;
                    kiloes['connections_role_id'] = output;
                    kiloes['join_request_id'] = sizing;
                    report['query'] = kiloes;
                    report['signal'] = backup;
                    backup = true;
                    report['rejectWithError'] = backup;
                    report = romeon.bind(foxtra)(report);
                    SaveGenerator(address=303);
 301:
                    return report;
 303:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 544; continue _fun00001 }
 312:
                    oscard = report;
                    romeon = offset;
                    foxtra = null;
                    if(!(foxtra != romeon)) { _fun00002_ip = 344; continue _fun00001 }
 324:
                    backup = offset;
                    offset = oscard;
                    romeon = offset.body;
                    offset = golfie;
                    offset = backup.bind(yankee)(romeon, offset);
 344:
                    romeon = _closure1_slot1;
                    offset = _closure1_slot2;
                    backup = offset[tangon];
                    output = romeon.bind(yankee)(backup);
                    sizing = output.dispatch;
                    backup = {};
                    kiloes = 'USER_UPDATE';
                    backup['type'] = kiloes;
                    kiloes = oscard;
                    result = kiloes.body;
                    result = result.user;
                    backup['user'] = result;
                    backup = sizing.bind(output)(backup);
                    offset = offset[tangon];
                    backup = romeon.bind(yankee)(offset);
                    romeon = backup.dispatch;
                    offset = {};
                    sizing = 'USER_PROFILE_FETCH_SUCCESS';
                    offset['type'] = sizing;
                    config = kiloes.body;
                    record = offset;
                    kiloes = copyDataProperties(record, config);
                    offset = romeon.bind(backup)(offset);
                    romeon = golfie;
                    romeon = foxtra != romeon;
                    offset = romeon;
                    if(!romeon) { _fun00002_ip = 470; continue _fun00001 }
 452:
                    romeon = oscard;
                    romeon = romeon.body;
                    romeon = romeon.guild_member;
                    offset = foxtra != romeon;
 470:
                    if(!offset) { _fun00002_ip = 536; continue _fun00001 }
 473:
                    romeon = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[tangon];
                    foxtra = romeon.bind(yankee)(offset);
                    romeon = foxtra.dispatch;
                    offset = {};
                    backup = 'GUILD_MEMBER_PROFILE_UPDATE';
                    offset['type'] = backup;
                    backup = golfie;
                    offset['guildId'] = backup;
                    backup = oscard;
                    backup = backup.body;
                    backup = backup.guild_member;
                    offset['guildMember'] = backup;
                    offset = romeon.bind(foxtra)(offset);
 536:
                    oscard = oscard.body;
 541: // try_end0
                    return oscard;
 544:
                    return report;
 547: // catch_target0
                    CatchBlockStart(arg_register=5);
                    zuuluu = oscard;
                    offset = null;
                    oscard = offset != oscard;
                    report = oscard;
                    if(!oscard) { _fun00002_ip = 588; continue _fun00001 }
 564:
                    oscard = zuuluu;
                    romeon = offset == oscard;
                    oscard = undefined;
                    if(romeon) { _fun00002_ip = 584; continue _fun00001 }
 576:
                    romeon = zuuluu;
                    oscard = romeon.body;
 584:
                    report = offset != oscard;
 588:
                    if(!report) { _fun00002_ip = 660; continue _fun00001 }
 591:
                    offset = _closure1_slot7;
                    oscard = offset.warn;
                    report = zuuluu;
                    romeon = report.body;
                    kiloes = romeon.code;
                    report = report.body;
                    backup = report.message;
                    report = global;
                    report = report.HermesInternal;
                    foxtra = report.concat;
                    romeon = 'fetchProfile error: ';
                    report = ' - ';
                    report = foxtra.bind(romeon)(kiloes, report, backup);
                    report = oscard.bind(offset)(report);
 660:
                    report = _closure1_slot1;
                    romeon = _closure1_slot2;
                    tangon = romeon[tangon];
                    oscard = report.bind(yankee)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    offset = 'USER_PROFILE_FETCH_FAILURE';
                    tangon['type'] = offset;
                    offset = _closure1_slot0;
                    verify = 10;
                    verify = romeon[verify];
                    verify = offset.bind(yankee)(verify);
                    verify = verify.APIError;
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    cntext = offset;
                    record = zuuluu;
                    verify = new cntext[verify](record, config);
                    verify = verify instanceof Object ? verify : offset;
                    tangon['apiError'] = verify;
                    tangon['userId'] = option;
                    tangon['guildId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 759:
                    return michal;
 762:
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
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
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