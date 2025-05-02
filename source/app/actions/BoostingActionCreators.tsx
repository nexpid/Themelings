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
                    if(michal) { _fun00004_ip = 198; continue _fun00003 }
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
                    if(zuuluu) { _fun00004_ip = 195; continue _fun00003 }
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
                    SaveGenerator(address=114);
 112:
                    return zuuluu;
 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 192; continue _fun00003 }
 120:
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
 192:
                    return zuuluu;
 195:
                    return michal;
 198:
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
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 433; continue _fun00009 }
 13:
                    offset = argFoo;
                    romeon = argBar;
                    oscard = undefined;
                    if(!(michal === oscard)) { _fun00010_ip = 27; continue _fun00009 }
 25:
                    michal = false;
 27:
                    yankee = michal;
                    option = undefined;
                    SaveGenerator(address=36);
 34:
                    return oscard;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 430; continue _fun00009 }
 45:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    golfie = 6;
                    zuuluu = zuuluu[golfie];
                    verify = tangon.bind(oscard)(zuuluu);
                    tangon = verify.dispatch;
                    zuuluu = {};
                    foxtra = 'GUILD_APPLY_BOOST_START';
                    zuuluu['type'] = foxtra;
                    zuuluu = tangon.bind(verify)(zuuluu);
 90: // try_start_0
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = verify[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    verify = zuuluu.HTTP;
                    tangon = verify.put;
                    zuuluu = {};
                    backup = _closure1_slot7;
                    foxtra = backup.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    offset = foxtra.bind(backup)(offset);
                    zuuluu['url'] = offset;
                    offset = {};
                    offset['user_premium_guild_subscription_slot_ids'] = romeon;
                    offset['disable_powerup_auto_apply'] = yankee;
                    zuuluu['body'] = offset;
                    offset = true;
                    zuuluu['oldFormErrors'] = offset;
                    offset = false;
                    zuuluu['rejectWithError'] = offset;
                    zuuluu = tangon.bind(verify)(zuuluu);
                    SaveGenerator(address=184);
 182:
                    return zuuluu;
 184:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00010_ip = 335; continue _fun00009 }
 193:
                    option = zuuluu;
                    tangon = global;
                    offset = tangon.Array;
                    verify = offset.isArray;
                    tangon = zuuluu.body;
                    tangon = verify.bind(offset)(tangon);
                    if(tangon) { _fun00010_ip = 255; continue _fun00009 }
 222:
                    offset = _closure1_slot4;
                    verify = offset.createFromServer;
                    tangon = option;
                    tangon = tangon.body;
                    verify = verify.bind(offset)(tangon);
                    tangon = new Array(1);
                    tangon[0] = verify;
                    _fun00010_ip = 280; continue _fun00009;
 255:
                    offset = option.body;
                    verify = offset.map;
                    option = _closure1_slot4;
                    option = option.createFromServer;
                    tangon = verify.bind(offset)(option);
 280:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[golfie];
                    offset = verify.bind(oscard)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'GUILD_APPLY_BOOST_SUCCESS';
                    option['type'] = yankee;
                    option['appliedGuildBoost'] = tangon;
                    option = verify.bind(offset)(option);
                    option = _closure1_slot10;
                    option = option.bind(oscard)();
 332: // try_end0
                    return tangon;
 335:
                    return zuuluu;
 338: // catch_target0
                    CatchBlockStart(arg_register=8);
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = tangon[zuuluu];
                    zuuluu = option.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.AppliedGuildBoostError;
                    option = zuuluu.prototype;
                    option = Object.create(option, {constructor: {value: zuuluu}});
                    sizing = option;
                    kiloes = verify;
                    zuuluu = new sizing[zuuluu](kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : option;
                    report = _closure1_slot1;
                    tangon = tangon[golfie];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_APPLY_BOOST_FAIL';
                    tangon['type'] = golfie;
                    tangon['error'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 430:
                    return michal;
 433:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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