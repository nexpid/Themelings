// app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchMemberCountsFromBackend
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 254; continue _fun00001 }
 10:
                    report = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    option = 3;
                    michal = golfie[option];
                    oscard = undefined;
                    verify = tangon.bind(oscard)(michal);
                    tangon = verify.dispatch;
                    michal = {};
                    offset = 'GUILD_ROLE_MEMBER_COUNT_FETCH_START';
                    michal['type'] = offset;
                    yankee = report;
                    michal['guildId'] = yankee;
                    michal = tangon.bind(verify)(michal);
                    tangon = _closure1_slot0;
                    michal = 4;
                    michal = golfie[michal];
                    michal = tangon.bind(oscard)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.get;
                    michal = {};
                    offset = _closure1_slot5;
                    verify = offset.GUILD_ROLE_MEMBER_COUNTS;
                    verify = verify.bind(offset)(yankee);
                    michal['url'] = verify;
                    verify = true;
                    michal['rejectWithError'] = verify;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=129);
 127:
                    return michal;
 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 193; continue _fun00001 }
 135:
                    golfie = michal.body;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[option];
                    oscard = tangon.bind(oscard)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    option = 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS';
                    zuuluu['type'] = option;
                    option = report;
                    zuuluu['guildId'] = option;
                    zuuluu['roleMemberCount'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
 191: // try_end0
                    _fun00002_ip = 249; continue _fun00001;
 193:
                    return michal;
 196: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE';
                    michal['type'] = oscard;
                    michal['guildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 249:
                    michal = undefined;
                    return michal;
 254:
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
    entity = function() { // Original name: _fetchMemberCounts
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 65; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.shouldFetch;
                    michal = michal.bind(zuuluu)(tangon);
                    if(!michal) { _fun00004_ip = 57; continue _fun00003 }
 31:
                    zuuluu = function() { // Original name: fetchMemberCountsFromBackend
                        entity = undefined;
                        tangon = _closure1_slot7;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    SaveGenerator(address=51);
 49:
                    return michal;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 62; continue _fun00003 }
 57:
                    zuuluu = undefined;
                    return zuuluu;
 62:
                    return michal;
 65:
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = {};
    golfie = 10000;
    tangon['maxAge'] = golfie;
    golfie = option.prototype;
    golfie = Object.create(golfie, {constructor: {value: option}});
    foxtra = golfie;
    romeon = tangon;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildRoleMemberActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchMemberCounts
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMemberCounts'] = tangon;
    michal = function(argFoo, argBar) { // Original name: requestMembersForRole
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = arguments[2];
            zuuluu = undefined;
            if(!(entity === zuuluu)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            entity = true;
 17:
            michal = global;
            tangon = michal.HermesInternal;
            option = tangon.concat;
            golfie = '';
            tangon = '-';
            verify = option.bind(golfie)(oscard, tangon, report);
            if(!entity) { _fun00006_ip = 71; continue _fun00005 }
 48:
            tangon = _closure1_slot6;
            entity = tangon.get;
            entity = entity.bind(tangon)(verify);
            tangon = null;
            if(!(tangon == entity)) { _fun00006_ip = 108; continue _fun00005 }
 71:
            option = _closure1_slot6;
            golfie = option.set;
            entity = true;
            entity = golfie.bind(option)(verify, entity);
            entity = function(argFoo, argBar) { // Original name: doRequestMembersForRole
                option = argFoo;
                var _closure3_slot0 = option;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.HTTP;
                zuuluu = tangon.get;
                michal = {};
                golfie = _closure1_slot5;
                oscard = golfie.GUILD_ROLE_MEMBER_IDS;
                report = argBar;
                report = oscard.bind(golfie)(option, report);
                michal['url'] = report;
                report = false;
                michal['rejectWithError'] = report;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.then;
                entity = function(argFoo) {
                    entity = argFoo;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    oscard = tangon.bind(michal)(zuuluu);
                    report = oscard.requestMembersById;
                    tangon = _closure3_slot0;
                    zuuluu = entity.body;
                    michal = false;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity = entity.body;
                    entity = entity.length;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = entity.bind(zuuluu)(oscard, report);
            _fun00006_ip = 125; continue _fun00005;
 108:
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)(tangon);
 125:
            return entity;
        }
    };
    zuuluu['requestMembersForRole'] = michal;
    return entity;
})();