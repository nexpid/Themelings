// app/modules/guild/BasicGuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchBasicGuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 400; continue _fun00001 }
 13:
                    zuuluu = oscard;
                    report = _closure1_slot4;
                    michal = report.getGuild;
                    michal = michal.bind(report)(oscard);
                    report = null;
                    if(!(report == michal)) { _fun00002_ip = 395; continue _fun00001 }
 42:
                    golfie = _closure1_slot5;
                    oscard = golfie.getGuildOrStatus;
                    michal = zuuluu;
                    michal = oscard.bind(golfie)(michal);
                    if(!(report == michal)) { _fun00002_ip = 395; continue _fun00001 }
 69:
                    oscard = _closure1_slot7;
                    report = oscard.has;
                    michal = zuuluu;
                    michal = report.bind(oscard)(michal);
                    if(michal) { _fun00002_ip = 395; continue _fun00001 }
 92:
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    golfie = 4;
                    michal = michal[golfie];
                    oscard = undefined;
                    verify = report.bind(oscard)(michal);
                    report = verify.dispatch;
                    michal = {};
                    option = 'BASIC_GUILD_FETCH';
                    michal['type'] = option;
                    option = zuuluu;
                    michal['guildId'] = option;
                    michal = report.bind(verify)(michal);
                    report = _closure1_slot7;
                    michal = report.add;
                    michal = michal.bind(report)(option);
 157: // try_start_0 // try_start_1
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 5;
                    michal = option[michal];
                    michal = report.bind(oscard)(michal);
                    option = michal.HTTP;
                    report = option.get;
                    michal = {};
                    yankee = _closure1_slot6;
                    offset = yankee.GUILD_BASIC;
                    verify = zuuluu;
                    verify = offset.bind(yankee)(verify);
                    michal['url'] = verify;
                    verify = true;
                    michal['rejectWithError'] = verify;
                    michal = report.bind(option)(michal);
                    SaveGenerator(address=226);
 224:
                    return michal;
 226:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 290; continue _fun00001 }
 232:
                    offset = michal.body;
                    option = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golfie];
                    verify = option.bind(oscard)(report);
                    option = verify.dispatch;
                    report = {};
                    yankee = 'BASIC_GUILD_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = zuuluu;
                    report['guildId'] = yankee;
                    report['guildInfo'] = offset;
                    report = option.bind(verify)(report);
 288: // try_end0
                    _fun00002_ip = 358; continue _fun00001;
 290: // try_end1
                    verify = _closure1_slot7;
                    option = verify.delete;
                    report = zuuluu;
                    report = option.bind(verify)(report);
                    return michal;
 310: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    michal = michal[golfie];
                    oscard = report.bind(oscard)(michal);
                    report = oscard.dispatch;
                    michal = {};
                    golfie = 'BASIC_GUILD_FETCH_FAILURE';
                    michal['type'] = golfie;
                    golfie = zuuluu;
                    michal['guildId'] = golfie;
                    michal = report.bind(oscard)(michal);
 358: // try_end2
                    oscard = _closure1_slot7;
                    report = oscard.delete;
                    michal = zuuluu;
                    michal = report.bind(oscard)(michal);
                    _fun00002_ip = 395; continue _fun00001;
 377: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot7;
                    tangon = report.delete;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 395:
                    michal = undefined;
                    return michal;
 400:
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
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot6 = golfie;
    tangon = tangon.Set;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild/BasicGuildActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchBasicGuild
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchBasicGuild'] = michal;
    return entity;
})();