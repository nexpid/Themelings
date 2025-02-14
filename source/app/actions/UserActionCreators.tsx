// app/actions/UserActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchProfile
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun71493: for(var _fun71493_ip = 0; ; ) switch(_fun71493_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun71493_ip = 762; continue _fun71493 }
 13:
                    options = argFoo;
                    yankee = undefined;
                    if(!(mike === yankee)) { _fun71493_ip = 24; continue _fun71493 }
 22:
                    mike = {};
 24:
                    source = mike.friendToken;
                    result = mike.withMutualGuilds;
                    echo = mike.withMutualFriendsCount;
                    update = mike.withMutualFriends;
                    golf = mike.guildId;
                    output = mike.connectionsRoleId;
                    sizing = mike.joinRequestId;
                    backup = mike.abortSignal;
                    offset = arguments[2];
                    oscar = undefined;
                    SaveGenerator(address=80);
 78:
                    return yankee;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun71493_ip = 759; continue _fun71493 }
 89:
                    romeo = _closure1_slot1;
                    report = _closure1_slot2;
                    tango = 6;
                    report = report[tango];
                    foxtrot = romeo.bind(yankee)(report);
                    romeo = foxtrot.dispatch;
                    report = {};
                    kilo = 'USER_PROFILE_FETCH_START';
                    report['type'] = kilo;
                    kilo = options;
                    report['userId'] = kilo;
                    kilo = golf;
                    report['guildId'] = kilo;
                    report = romeo.bind(foxtrot)(report);
 148: // try_start_0
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    report = 5;
                    report = foxtrot[report];
                    report = romeo.bind(yankee)(report);
                    foxtrot = report.HTTP;
                    romeo = foxtrot.get;
                    report = {};
                    vacuum = _closure1_slot6;
                    control = vacuum.USER_PROFILE;
                    kilo = options;
                    kilo = control.bind(vacuum)(kilo);
                    report['url'] = kilo;
                    kilo = {};
                    kilo['friend_token'] = source;
                    kilo['with_mutual_guilds'] = result;
                    result = update;
                    kilo['with_mutual_friends'] = result;
                    result = echo;
                    if(!echo) { _fun71493_ip = 253; continue _fun71493 }
 232:
                    control = update;
                    source = null;
                    source = source == control;
                    echo = source;
                    if(source) { _fun71493_ip = 250; continue _fun71493 }
 247:
                    echo = !update;
 250:
                    result = echo;
 253:
                    kilo['with_mutual_friends_count'] = result;
                    result = golf;
                    kilo['guild_id'] = result;
                    kilo['connections_role_id'] = output;
                    kilo['join_request_id'] = sizing;
                    report['query'] = kilo;
                    report['signal'] = backup;
                    backup = true;
                    report['rejectWithError'] = backup;
                    report = romeo.bind(foxtrot)(report);
                    SaveGenerator(address=303);
 301:
                    return report;
 303:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=11);
                    if(romeo) { _fun71493_ip = 544; continue _fun71493 }
 312:
                    oscar = report;
                    romeo = offset;
                    foxtrot = null;
                    if(!(foxtrot != romeo)) { _fun71493_ip = 344; continue _fun71493 }
 324:
                    backup = offset;
                    offset = oscar;
                    romeo = offset.body;
                    offset = golf;
                    offset = backup.bind(yankee)(romeo, offset);
 344:
                    romeo = _closure1_slot1;
                    offset = _closure1_slot2;
                    backup = offset[tango];
                    output = romeo.bind(yankee)(backup);
                    sizing = output.dispatch;
                    backup = {};
                    kilo = 'USER_UPDATE';
                    backup['type'] = kilo;
                    kilo = oscar;
                    result = kilo.body;
                    result = result.user;
                    backup['user'] = result;
                    backup = sizing.bind(output)(backup);
                    offset = offset[tango];
                    backup = romeo.bind(yankee)(offset);
                    romeo = backup.dispatch;
                    offset = {};
                    sizing = 'USER_PROFILE_FETCH_SUCCESS';
                    offset['type'] = sizing;
                    config = kilo.body;
                    record = offset;
                    kilo = copyDataProperties(record, config);
                    offset = romeo.bind(backup)(offset);
                    romeo = golf;
                    romeo = foxtrot != romeo;
                    offset = romeo;
                    if(!romeo) { _fun71493_ip = 470; continue _fun71493 }
 452:
                    romeo = oscar;
                    romeo = romeo.body;
                    romeo = romeo.guild_member;
                    offset = foxtrot != romeo;
 470:
                    if(!offset) { _fun71493_ip = 536; continue _fun71493 }
 473:
                    romeo = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[tango];
                    foxtrot = romeo.bind(yankee)(offset);
                    romeo = foxtrot.dispatch;
                    offset = {};
                    backup = 'GUILD_MEMBER_PROFILE_UPDATE';
                    offset['type'] = backup;
                    backup = golf;
                    offset['guildId'] = backup;
                    backup = oscar;
                    backup = backup.body;
                    backup = backup.guild_member;
                    offset['guildMember'] = backup;
                    offset = romeo.bind(foxtrot)(offset);
 536:
                    oscar = oscar.body;
 541: // try_end0
                    return oscar;
 544:
                    return report;
 547: // catch_target0
                    CatchBlockStart(arg_register=5);
                    zulu = oscar;
                    offset = null;
                    oscar = offset != oscar;
                    report = oscar;
                    if(!oscar) { _fun71493_ip = 588; continue _fun71493 }
 564:
                    oscar = zulu;
                    romeo = offset == oscar;
                    oscar = undefined;
                    if(romeo) { _fun71493_ip = 584; continue _fun71493 }
 576:
                    romeo = zulu;
                    oscar = romeo.body;
 584:
                    report = offset != oscar;
 588:
                    if(!report) { _fun71493_ip = 660; continue _fun71493 }
 591:
                    offset = _closure1_slot7;
                    oscar = offset.warn;
                    report = zulu;
                    romeo = report.body;
                    kilo = romeo.code;
                    report = report.body;
                    backup = report.message;
                    report = global;
                    report = report.HermesInternal;
                    foxtrot = report.concat;
                    romeo = 'fetchProfile error: ';
                    report = ' - ';
                    report = foxtrot.bind(romeo)(kilo, report, backup);
                    report = oscar.bind(offset)(report);
 660:
                    report = _closure1_slot1;
                    romeo = _closure1_slot2;
                    tango = romeo[tango];
                    oscar = report.bind(yankee)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    offset = 'USER_PROFILE_FETCH_FAILURE';
                    tango['type'] = offset;
                    offset = _closure1_slot0;
                    verify = 10;
                    verify = romeo[verify];
                    verify = offset.bind(yankee)(verify);
                    verify = verify.APIError;
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    context = offset;
                    record = zulu;
                    verify = new context[verify](record, config);
                    verify = verify instanceof Object ? verify : offset;
                    tango['apiError'] = verify;
                    tango['userId'] = options;
                    tango['guildId'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 759:
                    return mike;
 762:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _fetchMutualFriends
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun71496: for(var _fun71496_ip = 0; ; ) switch(_fun71496_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun71496_ip = 361; continue _fun71496 }
 13:
                    oscar = yankee;
                    offset = argBar;
                    options = _closure1_slot1;
                    tango = _closure1_slot2;
                    golf = 6;
                    tango = tango[golf];
                    report = undefined;
                    verify = options.bind(report)(tango);
                    options = verify.dispatch;
                    tango = {};
                    romeo = 'MUTUAL_FRIENDS_FETCH_START';
                    tango['type'] = romeo;
                    tango['userId'] = yankee;
                    tango = options.bind(verify)(tango);
 70: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 5;
                    tango = verify[tango];
                    tango = options.bind(report)(tango);
                    verify = tango.HTTP;
                    options = verify.get;
                    tango = {};
                    foxtrot = _closure1_slot6;
                    romeo = foxtrot.USER_RELATIONSHIPS;
                    yankee = oscar;
                    yankee = romeo.bind(foxtrot)(yankee);
                    tango['url'] = yankee;
                    yankee = true;
                    tango['oldFormErrors'] = yankee;
                    tango['signal'] = offset;
                    offset = false;
                    tango['rejectWithError'] = offset;
                    tango = options.bind(verify)(tango);
                    SaveGenerator(address=151);
 149:
                    return tango;
 151:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun71496_ip = 216; continue _fun71496 }
 157:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[golf];
                    offset = verify.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'MUTUAL_FRIENDS_FETCH_SUCCESS';
                    options['type'] = yankee;
                    yankee = oscar;
                    options['userId'] = yankee;
                    yankee = tango.body;
                    options['mutualFriends'] = yankee;
                    options = verify.bind(offset)(options);
 213: // try_end0
                    return report;
 216:
                    return tango;
 219: // catch_target0
                    CatchBlockStart(arg_register=3);
                    mike = tango;
                    options = null;
                    verify = options == tango;
                    tango = undefined;
                    if(verify) { _fun71496_ip = 243; continue _fun71496 }
 235:
                    verify = mike;
                    tango = verify.body;
 243:
                    if(!(options != tango)) { _fun71496_ip = 316; continue _fun71496 }
 247:
                    verify = _closure1_slot7;
                    options = verify.warn;
                    tango = mike;
                    offset = tango.body;
                    foxtrot = offset.code;
                    tango = tango.body;
                    romeo = tango.message;
                    tango = global;
                    tango = tango.HermesInternal;
                    yankee = tango.concat;
                    offset = 'fetchMutualFriends error: ';
                    tango = ' - ';
                    tango = yankee.bind(offset)(foxtrot, tango, romeo);
                    tango = options.bind(verify)(tango);
 316:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'MUTUAL_FRIENDS_FETCH_FAILURE';
                    zulu['type'] = golf;
                    zulu['userId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 361:
                    return entity;
                }
            };
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
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'UserProfileModalActionCreators';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/UserActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchCurrentUser
        _fun71497: for(var _fun71497_ip = 0; ; ) switch(_fun71497_ip) {
 0:
            mike = arguments[0];
            tango = undefined;
            if(!(mike === tango)) { _fun71497_ip = 13; continue _fun71497 }
 11:
            mike = {};
 13:
            var _closure2_slot0 = tango;
            mike = mike.withAnalyticsToken;
            oscar = tango !== mike;
            if(!oscar) { _fun71497_ip = 35; continue _fun71497 }
 32:
            oscar = mike;
 35:
            _closure2_slot0 = oscar;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {};
            report = _closure1_slot6;
            report = report.ME;
            mike['url'] = report;
            report = {};
            report['with_analytics_token'] = oscar;
            mike['query'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun71498: for(var _fun71498_ip = 0; ; ) switch(_fun71498_ip) {
 0:
                    entity = argFoo;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 6;
                    zulu = report[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'CURRENT_USER_UPDATE';
                    zulu['type'] = golf;
                    golf = entity.body;
                    zulu['user'] = golf;
                    golf = _closure2_slot0;
                    if(!golf) { _fun71498_ip = 73; continue _fun71498 }
 62:
                    golf = entity.body;
                    oscar = golf.analytics_token;
 73:
                    zulu['analyticsToken'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure1_slot4;
                    options = entity.body;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    verify = mike;
                    entity = new verify[zulu](options, golf);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['fetchCurrentUser'] = tango;
    tango = function() { // Original name: acceptAgreements
        _fun71499: for(var _fun71499_ip = 0; ; ) switch(_fun71499_ip) {
 0:
            golf = arguments[0];
            oscar = arguments[1];
            offset = undefined;
            if(!(golf === offset)) { _fun71499_ip = 16; continue _fun71499 }
 14:
            golf = true;
 16:
            if(!(oscar === offset)) { _fun71499_ip = 22; continue _fun71499 }
 20:
            oscar = true;
 22:
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 7;
            mike = yankee[mike];
            tango = zulu.bind(offset)(mike);
            zulu = tango.patch;
            mike = {};
            report = _closure1_slot6;
            report = report.USER_AGREEMENTS;
            mike['url'] = report;
            report = {};
            verify = _closure1_slot0;
            options = 8;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.NetworkActionNames;
            options = options.USER_ACCEPT_AGREEMENTS;
            report['event'] = options;
            mike['trackedActionData'] = report;
            report = {};
            report['terms'] = golf;
            report['privacy'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function() {
                entity = true;
                return entity;
            };
            entity = function() {
                entity = false;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['acceptAgreements'] = tango;
    tango = function(argFoo, argBar) { // Original name: setFlag
        _fun71502: for(var _fun71502_ip = 0; ; ) switch(_fun71502_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot5;
            entity = zulu.getCurrentUser;
            entity = entity.bind(zulu)();
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            report = report[zulu];
            zulu = undefined;
            golf = oscar.bind(zulu)(report);
            report = null;
            oscar = report != entity;
            report = 'setFlag: user cannot be undefined';
            report = golf.bind(zulu)(oscar, report);
            entity = entity.flags;
            report = argBar;
            if(report) { _fun71502_ip = 79; continue _fun71502 }
 70:
            report = ~mike;
            report = entity & report;
            _fun71502_ip = 83; continue _fun71502;
 79:
            report = entity | mike;
 83:
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            tango = _closure1_slot6;
            tango = tango.ME;
            entity['url'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = {};
            tango['flags'] = report;
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['setFlag'] = tango;
    tango = function(argFoo) { // Original name: getUser
        _fun71503: for(var _fun71503_ip = 0; ; ) switch(_fun71503_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot5;
            mike = zulu.getUser;
            tango = mike.bind(zulu)(options);
            mike = null;
            if(!(mike == tango)) { _fun71503_ip = 120; continue _fun71503 }
 33:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            mike = report.bind(mike)(zulu);
            report = mike.HTTP;
            zulu = report.get;
            mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
            golf = _closure1_slot6;
            oscar = golf.USER;
            oscar = oscar.bind(golf)(options);
            mike['url'] = oscar;
            zulu = zulu.bind(report)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'USER_UPDATE';
                mike['type'] = report;
                report = argFoo;
                report = report.body;
                mike['user'] = report;
                mike = zulu.bind(tango)(mike);
                zulu = _closure1_slot5;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun71503_ip = 139; continue _fun71503;
 120:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)(tango);
 139:
            return entity;
        }
    };
    zulu['getUser'] = tango;
    tango = function() { // Original name: fetchProfile
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchProfile'] = tango;
    mike = function() { // Original name: fetchMutualFriends
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMutualFriends'] = mike;
    return entity;
})();