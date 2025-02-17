// app/actions/BoostingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _fetchAppliedGuildBoostsForGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 171; continue _fun00001 }
 13:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 5;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    options = verify.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=88);
 86:
                    return mike;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 168; continue _fun00001 }
 94:
                    options = mike.body;
                    report = options.map;
                    zulu = function(argFoo) {
                        zulu = _closure1_slot4;
                        mike = zulu.createFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = report.bind(options)(zulu);
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 6;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    tango['appliedBoosts'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 168:
                    return mike;
 171:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _fetchAppliedGuildBoostsForUser
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    offset = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 198; continue _fun00003 }
 13:
                    golf = undefined;
                    if(!(offset === golf)) { _fun00004_ip = 21; continue _fun00003 }
 19:
                    offset = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return golf;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 195; continue _fun00003 }
 34:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    zulu = tango.bind(golf)(zulu);
                    oscar = zulu.HTTP;
                    tango = oscar.get;
                    zulu = {};
                    options = _closure1_slot7;
                    options = options.USER_APPLIED_GUILD_BOOSTS;
                    zulu['url'] = options;
                    options = true;
                    zulu['oldFormErrors'] = options;
                    verify = {};
                    verify['paused'] = offset;
                    zulu['query'] = verify;
                    zulu['rejectWithError'] = options;
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=114);
 112:
                    return zulu;
 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 192; continue _fun00003 }
 120:
                    options = zulu.body;
                    oscar = options.map;
                    tango = function(argFoo) {
                        zulu = _closure1_slot4;
                        mike = zulu.createFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = oscar.bind(options)(tango);
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 6;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'USER_APPLIED_BOOSTS_FETCH_SUCCESS';
                    report['type'] = options;
                    report['appliedGuildBoosts'] = tango;
                    report = oscar.bind(golf)(report);
                    return tango;
 192:
                    return zulu;
 195:
                    return mike;
 198:
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
    tango = function() { // Original name: fetchGuildBoostSlots
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: _fetchGuildBoostSlots
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 161; continue _fun00005 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 5;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    golf = _closure1_slot7;
                    golf = golf.USER_GUILD_BOOST_SLOTS;
                    mike['url'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=80);
 78:
                    return mike;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 158; continue _fun00005 }
 86:
                    golf = mike.body;
                    report = golf.map;
                    zulu = function(argFoo) {
                        tango = argFoo;
                        zulu = _closure1_slot5;
                        mike = zulu.createFromServer;
                        oscar = _closure1_slot6;
                        report = oscar.getSubscriptionById;
                        entity = tango.subscription_id;
                        entity = report.bind(oscar)(entity);
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
                    };
                    zulu = report.bind(golf)(zulu);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 6;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_BOOST_SLOTS_FETCH_SUCCESS';
                    tango['type'] = golf;
                    tango['guildBoostSlots'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 158:
                    return mike;
 161:
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
    entity = function() { // Original name: _fetchAppliedBoostsCooldown
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 280; continue _fun00007 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    golf = undefined;
                    zulu = tango.bind(golf)(zulu);
                    oscar = zulu.HTTP;
                    tango = oscar.get;
                    zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    options = _closure1_slot7;
                    options = options.APPLIED_GUILD_BOOST_COOLDOWN;
                    zulu['url'] = options;
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=80);
 78:
                    return zulu;
 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 147; continue _fun00007 }
 86:
                    tango = zulu.body;
                    tango = tango.ends_at;
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 6;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS';
                    report['type'] = options;
                    report['endsAt'] = tango;
                    report = oscar.bind(golf)(report);
 144: // try_end0
                    return tango;
 147:
                    return zulu;
 150: // catch_target0
                    CatchBlockStart(arg_register=2);
                    mike = zulu;
                    tango = zulu.status;
                    zulu = 404;
                    if(!(zulu !== tango)) { _fun00008_ip = 226; continue _fun00007 }
 170:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    tango = zulu.AppliedGuildBoostError;
                    verify = mike;
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    offset = zulu;
                    mike = new offset[tango](verify, options);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 226:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    mike = null;
                    zulu = {'type': 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS', 'endsAt': null};
                    zulu = tango.bind(report)(zulu);
                    return mike;
 280:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _applyToGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 398; continue _fun00009 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    report = undefined;
                    golf = undefined;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    oscar = 6;
                    mike = mike[oscar];
                    options = zulu.bind(report)(mike);
                    zulu = options.dispatch;
                    mike = {};
                    yankee = 'GUILD_APPLY_BOOST_START';
                    mike['type'] = yankee;
                    mike = zulu.bind(options)(mike);
 65: // try_start_0
                    zulu = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 5;
                    mike = options[mike];
                    mike = zulu.bind(report)(mike);
                    options = mike.HTTP;
                    zulu = options.put;
                    mike = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    verify = yankee.bind(romeo)(verify);
                    mike['url'] = verify;
                    verify = {};
                    verify['user_premium_guild_subscription_slot_ids'] = offset;
                    mike['body'] = verify;
                    verify = true;
                    mike['oldFormErrors'] = verify;
                    verify = false;
                    mike['rejectWithError'] = verify;
                    mike = zulu.bind(options)(mike);
                    SaveGenerator(address=152);
 150:
                    return mike;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 303; continue _fun00009 }
 161:
                    golf = mike;
                    zulu = global;
                    verify = zulu.Array;
                    options = verify.isArray;
                    zulu = mike.body;
                    zulu = options.bind(verify)(zulu);
                    if(zulu) { _fun00010_ip = 223; continue _fun00009 }
 190:
                    verify = _closure1_slot4;
                    options = verify.createFromServer;
                    zulu = golf;
                    zulu = zulu.body;
                    options = options.bind(verify)(zulu);
                    zulu = new Array(1);
                    zulu[0] = options;
                    _fun00010_ip = 248; continue _fun00009;
 223:
                    verify = golf.body;
                    options = verify.map;
                    golf = _closure1_slot4;
                    golf = golf.createFromServer;
                    zulu = options.bind(verify)(golf);
 248:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[oscar];
                    verify = options.bind(report)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'GUILD_APPLY_BOOST_SUCCESS';
                    golf['type'] = offset;
                    golf['appliedGuildBoost'] = zulu;
                    golf = options.bind(verify)(golf);
                    golf = _closure1_slot10;
                    golf = golf.bind(report)();
 300: // try_end0
                    return zulu;
 303:
                    return mike;
 306: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    mike = zulu[mike];
                    mike = golf.bind(report)(mike);
                    mike = mike.AppliedGuildBoostError;
                    golf = mike.prototype;
                    golf = Object.create(golf, {constructor: {value: mike}});
                    backup = golf;
                    foxtrot = options;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : golf;
                    tango = _closure1_slot1;
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GUILD_APPLY_BOOST_FAIL';
                    zulu['type'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 398:
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
    entity = function() { // Original name: _unapplyFromGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 297; continue _fun00011 }
 10:
                    options = argFoo;
                    verify = argBar;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    oscar = 6;
                    mike = mike[oscar];
                    report = undefined;
                    golf = zulu.bind(report)(mike);
                    zulu = golf.dispatch;
                    mike = {};
                    offset = 'GUILD_UNAPPLY_BOOST_START';
                    mike['type'] = offset;
                    mike = zulu.bind(golf)(mike);
 63: // try_start_0
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 5;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    golf = mike.HTTP;
                    zulu = golf.del;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeo = _closure1_slot7;
                    yankee = romeo.APPLIED_GUILD_BOOST;
                    offset = options;
                    options = verify;
                    options = yankee.bind(romeo)(offset, options);
                    mike['url'] = options;
                    mike = zulu.bind(golf)(mike);
                    SaveGenerator(address=141);
 139:
                    return mike;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 202; continue _fun00011 }
 147:
                    zulu = _closure1_slot10;
                    zulu = zulu.bind(report)();
 155: // try_end0
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    options = golf.bind(report)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    offset = 'GUILD_UNAPPLY_BOOST_SUCCESS';
                    zulu['type'] = offset;
                    zulu['boostId'] = verify;
                    zulu = golf.bind(options)(zulu);
                    return report;
 202:
                    return mike;
 205: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    mike = zulu[mike];
                    mike = golf.bind(report)(mike);
                    mike = mike.AppliedGuildBoostError;
                    golf = mike.prototype;
                    golf = Object.create(golf, {constructor: {value: mike}});
                    kilo = golf;
                    backup = options;
                    mike = new kilo[mike](backup, foxtrot);
                    mike = mike instanceof Object ? mike : golf;
                    tango = _closure1_slot1;
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GUILD_UNAPPLY_BOOST_FAIL';
                    zulu['type'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 297:
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
    entity = function() { // Original name: _cancelGuildBoostSlot
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 195; continue _fun00013 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 5;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    options = verify.USER_GUILD_BOOST_SLOT_CANCEL;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=89);
 87:
                    return mike;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 192; continue _fun00013 }
 95:
                    options = _closure1_slot5;
                    golf = options.createFromServer;
                    report = mike.body;
                    offset = _closure1_slot6;
                    verify = offset.getSubscriptionById;
                    zulu = mike.body;
                    zulu = zulu.subscription_id;
                    zulu = verify.bind(offset)(zulu);
                    zulu = golf.bind(options)(report, zulu);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 6;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    tango['type'] = golf;
                    tango['guildBoostSlot'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 192:
                    return mike;
 195:
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
    entity = function() { // Original name: _uncancelGuildBoostSlot
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 195; continue _fun00015 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 5;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    options = verify.USER_GUILD_BOOST_SLOT_UNCANCEL;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=89);
 87:
                    return mike;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 192; continue _fun00015 }
 95:
                    options = _closure1_slot5;
                    golf = options.createFromServer;
                    report = mike.body;
                    offset = _closure1_slot6;
                    verify = offset.getSubscriptionById;
                    zulu = mike.body;
                    zulu = zulu.subscription_id;
                    zulu = verify.bind(offset)(zulu);
                    zulu = golf.bind(options)(report, zulu);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 6;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    tango['type'] = golf;
                    tango['guildBoostSlot'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 192:
                    return mike;
 195:
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
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot7 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/BoostingActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: fetchAppliedGuildBoostsForGuild
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAppliedGuildBoostsForGuild'] = report;
    report = function() { // Original name: fetchAppliedGuildBoostsForUser
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAppliedGuildBoostsForUser'] = report;
    zulu['fetchGuildBoostSlots'] = tango;
    tango = function() { // Original name: fetchAppliedBoostsCooldown
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAppliedBoostsCooldown'] = tango;
    tango = function() { // Original name: applyToGuild
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['applyToGuild'] = tango;
    tango = function() { // Original name: unapplyFromGuild
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['unapplyFromGuild'] = tango;
    tango = function() { // Original name: cancelGuildBoostSlot
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['cancelGuildBoostSlot'] = tango;
    mike = function() { // Original name: uncancelGuildBoostSlot
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['uncancelGuildBoostSlot'] = mike;
    return entity;
})();