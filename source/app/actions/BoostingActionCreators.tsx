// app/actions/BoostingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _fetchAppliedGuildBoostsForGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 171; continue _fun00001 }
 13:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 5;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    option = verify.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    option = option.bind(verify)(golfie);
                    michal['url'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=88);
 86:
                    return michal;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 168; continue _fun00001 }
 94:
                    option = michal.body;
                    report = option.map;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.createFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = report.bind(option)(zuuluu);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 6;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS';
                    tangon['type'] = option;
                    tangon['guildId'] = golfie;
                    tangon['appliedBoosts'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 168:
                    return michal;
 171:
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
    entity = function() { // Original name: _fetchAppliedGuildBoostsForUser
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    offset = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 199; continue _fun00003 }
 13:
                    golfie = undefined;
                    if(!(offset === golfie)) { _fun00004_ip = 21; continue _fun00003 }
 19:
                    offset = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return golfie;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 196; continue _fun00003 }
 34:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    oscard = zuuluu.HTTP;
                    tangon = oscard.get;
                    zuuluu = {};
                    option = _closure1_slot7;
                    option = option.USER_APPLIED_GUILD_BOOSTS;
                    zuuluu['url'] = option;
                    option = true;
                    zuuluu['oldFormErrors'] = option;
                    verify = {};
                    verify['paused'] = offset;
                    zuuluu['query'] = verify;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=115);
 113:
                    return zuuluu;
 115:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 193; continue _fun00003 }
 121:
                    option = zuuluu.body;
                    oscard = option.map;
                    tangon = function(argFoo) {
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.createFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = oscard.bind(option)(tangon);
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 6;
                    report = option[report];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'USER_APPLIED_BOOSTS_FETCH_SUCCESS';
                    report['type'] = option;
                    report['appliedGuildBoosts'] = tangon;
                    report = oscard.bind(golfie)(report);
                    return tangon;
 193:
                    return zuuluu;
 196:
                    return michal;
 199:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    tangon = function() { // Original name: fetchGuildBoostSlots
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: _fetchGuildBoostSlots
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 161; continue _fun00005 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 5;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    golfie = _closure1_slot7;
                    golfie = golfie.USER_GUILD_BOOST_SLOTS;
                    michal['url'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=80);
 78:
                    return michal;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 158; continue _fun00005 }
 86:
                    golfie = michal.body;
                    report = golfie.map;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.createFromServer;
                        oscard = _closure1_slot6;
                        report = oscard.getSubscriptionById;
                        entity = tangon.subscription_id;
                        entity = report.bind(oscard)(entity);
                        entity = michal.bind(zuuluu)(tangon, entity);
                        return entity;
                    };
                    zuuluu = report.bind(golfie)(zuuluu);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_BOOST_SLOTS_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['guildBoostSlots'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 158:
                    return michal;
 161:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchAppliedBoostsCooldown
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 280; continue _fun00007 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    oscard = zuuluu.HTTP;
                    tangon = oscard.get;
                    zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    option = _closure1_slot7;
                    option = option.APPLIED_GUILD_BOOST_COOLDOWN;
                    zuuluu['url'] = option;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=80);
 78:
                    return zuuluu;
 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 147; continue _fun00007 }
 86:
                    tangon = zuuluu.body;
                    tangon = tangon.ends_at;
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 6;
                    report = option[report];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS';
                    report['type'] = option;
                    report['endsAt'] = tangon;
                    report = oscard.bind(golfie)(report);
 144: // try_end0
                    return tangon;
 147:
                    return zuuluu;
 150: // catch_target0
                    CatchBlockStart(arg_register=2);
                    michal = zuuluu;
                    tangon = zuuluu.status;
                    zuuluu = 404;
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 170:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    tangon = zuuluu.AppliedGuildBoostError;
                    verify = michal;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    offset = zuuluu;
                    michal = new offset[tangon](verify, option);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 226:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    michal = null;
                    zuuluu = {'type': 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS', 'endsAt': null};
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 280:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _applyToGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 398; continue _fun00009 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    report = undefined;
                    golfie = undefined;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    oscard = 6;
                    michal = michal[oscard];
                    option = zuuluu.bind(report)(michal);
                    zuuluu = option.dispatch;
                    michal = {};
                    yankee = 'GUILD_APPLY_BOOST_START';
                    michal['type'] = yankee;
                    michal = zuuluu.bind(option)(michal);
 65: // try_start_0
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 5;
                    michal = option[michal];
                    michal = zuuluu.bind(report)(michal);
                    option = michal.HTTP;
                    zuuluu = option.put;
                    michal = {};
                    romeon = _closure1_slot7;
                    yankee = romeon.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    verify = yankee.bind(romeon)(verify);
                    michal['url'] = verify;
                    verify = {};
                    verify['user_premium_guild_subscription_slot_ids'] = offset;
                    michal['body'] = verify;
                    verify = true;
                    michal['oldFormErrors'] = verify;
                    verify = false;
                    michal['rejectWithError'] = verify;
                    michal = zuuluu.bind(option)(michal);
                    SaveGenerator(address=152);
 150:
                    return michal;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 303; continue _fun00009 }
 161:
                    golfie = michal;
                    zuuluu = global;
                    verify = zuuluu.Array;
                    option = verify.isArray;
                    zuuluu = michal.body;
                    zuuluu = option.bind(verify)(zuuluu);
                    if(zuuluu) { _fun00010_ip = 223; continue _fun00009 }
 190:
                    verify = _closure1_slot4;
                    option = verify.createFromServer;
                    zuuluu = golfie;
                    zuuluu = zuuluu.body;
                    option = option.bind(verify)(zuuluu);
                    zuuluu = new Array(1);
                    zuuluu[0] = option;
                    _fun00010_ip = 248; continue _fun00009;
 223:
                    verify = golfie.body;
                    option = verify.map;
                    golfie = _closure1_slot4;
                    golfie = golfie.createFromServer;
                    zuuluu = option.bind(verify)(golfie);
 248:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[oscard];
                    verify = option.bind(report)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'GUILD_APPLY_BOOST_SUCCESS';
                    golfie['type'] = offset;
                    golfie['appliedGuildBoost'] = zuuluu;
                    golfie = option.bind(verify)(golfie);
                    golfie = _closure1_slot10;
                    golfie = golfie.bind(report)();
 300: // try_end0
                    return zuuluu;
 303:
                    return michal;
 306: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    michal = zuuluu[michal];
                    michal = golfie.bind(report)(michal);
                    michal = michal.AppliedGuildBoostError;
                    golfie = michal.prototype;
                    golfie = Object.create(golfie, {constructor: {value: michal}});
                    backup = golfie;
                    foxtra = option;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : golfie;
                    tangon = _closure1_slot1;
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'GUILD_APPLY_BOOST_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 398:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _unapplyFromGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 297; continue _fun00011 }
 10:
                    option = argFoo;
                    verify = argBar;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    oscard = 6;
                    michal = michal[oscard];
                    report = undefined;
                    golfie = zuuluu.bind(report)(michal);
                    zuuluu = golfie.dispatch;
                    michal = {};
                    offset = 'GUILD_UNAPPLY_BOOST_START';
                    michal['type'] = offset;
                    michal = zuuluu.bind(golfie)(michal);
 63: // try_start_0
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 5;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    golfie = michal.HTTP;
                    zuuluu = golfie.del;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeon = _closure1_slot7;
                    yankee = romeon.APPLIED_GUILD_BOOST;
                    offset = option;
                    option = verify;
                    option = yankee.bind(romeon)(offset, option);
                    michal['url'] = option;
                    michal = zuuluu.bind(golfie)(michal);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 202; continue _fun00011 }
 147:
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.bind(report)();
 155: // try_end0
                    golfie = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    option = golfie.bind(report)(zuuluu);
                    golfie = option.dispatch;
                    zuuluu = {};
                    offset = 'GUILD_UNAPPLY_BOOST_SUCCESS';
                    zuuluu['type'] = offset;
                    zuuluu['boostId'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    return report;
 202:
                    return michal;
 205: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    michal = zuuluu[michal];
                    michal = golfie.bind(report)(michal);
                    michal = michal.AppliedGuildBoostError;
                    golfie = michal.prototype;
                    golfie = Object.create(golfie, {constructor: {value: michal}});
                    kiloes = golfie;
                    backup = option;
                    michal = new kiloes[michal](backup, foxtra);
                    michal = michal instanceof Object ? michal : golfie;
                    tangon = _closure1_slot1;
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'GUILD_UNAPPLY_BOOST_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 297:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _cancelGuildBoostSlot
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 195; continue _fun00013 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 5;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    option = verify.USER_GUILD_BOOST_SLOT_CANCEL;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=89);
 87:
                    return michal;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 192; continue _fun00013 }
 95:
                    option = _closure1_slot5;
                    golfie = option.createFromServer;
                    report = michal.body;
                    offset = _closure1_slot6;
                    verify = offset.getSubscriptionById;
                    zuuluu = michal.body;
                    zuuluu = zuuluu.subscription_id;
                    zuuluu = verify.bind(offset)(zuuluu);
                    zuuluu = golfie.bind(option)(report, zuuluu);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['guildBoostSlot'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 192:
                    return michal;
 195:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _uncancelGuildBoostSlot
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 195; continue _fun00015 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 5;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    verify = _closure1_slot7;
                    option = verify.USER_GUILD_BOOST_SLOT_UNCANCEL;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=89);
 87:
                    return michal;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 192; continue _fun00015 }
 95:
                    option = _closure1_slot5;
                    golfie = option.createFromServer;
                    report = michal.body;
                    offset = _closure1_slot6;
                    verify = offset.getSubscriptionById;
                    zuuluu = michal.body;
                    zuuluu = zuuluu.subscription_id;
                    zuuluu = verify.bind(offset)(zuuluu);
                    zuuluu = golfie.bind(option)(report, zuuluu);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['guildBoostSlot'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 192:
                    return michal;
 195:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot7 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/BoostingActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: fetchAppliedGuildBoostsForGuild
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAppliedGuildBoostsForGuild'] = report;
    report = function() { // Original name: fetchAppliedGuildBoostsForUser
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAppliedGuildBoostsForUser'] = report;
    zuuluu['fetchGuildBoostSlots'] = tangon;
    tangon = function() { // Original name: fetchAppliedBoostsCooldown
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAppliedBoostsCooldown'] = tangon;
    tangon = function() { // Original name: applyToGuild
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['applyToGuild'] = tangon;
    tangon = function() { // Original name: unapplyFromGuild
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['unapplyFromGuild'] = tangon;
    tangon = function() { // Original name: cancelGuildBoostSlot
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['cancelGuildBoostSlot'] = tangon;
    michal = function() { // Original name: uncancelGuildBoostSlot
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uncancelGuildBoostSlot'] = michal;
    return entity;
})();