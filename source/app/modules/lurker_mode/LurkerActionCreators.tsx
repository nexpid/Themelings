// app/modules/lurker_mode/LurkerActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: stopLurkingAll
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = tangon;
    entity = function() { // Original name: _stopLurkingAll
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 165; continue _fun00001 }
 15:
                    var _closure4_slot0 = option;
                    report = _closure1_slot5;
                    tangon = report.lurkingGuildIds;
                    oscard = tangon.bind(report)();
                    report = oscard.filter;
                    tangon = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.length;
                    tangon = 0;
                    if(!(tangon !== report)) { _fun00002_ip = 157; continue _fun00001 }
 62:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    golfie = undefined;
                    report = tangon.bind(golfie)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    verify = 'GUILD_STOP_LURKING';
                    zuuluu['type'] = verify;
                    zuuluu['ignoredGuildIds'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = global;
                    tangon = zuuluu.Promise;
                    zuuluu = tangon.all;
                    report = oscard.map;
                    michal = function() {
                        tangon = _closure1_slot3;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00004_ip = 188; continue _fun00003 }
 10:
                                    golfie = argFoo;
                                    michal = undefined;
                                    oscard = undefined;
                                    report = _closure1_slot5;
                                    tangon = report.getLurkingSource;
                                    oscard = tangon.bind(report)();
 34: // try_start_0
                                    report = _closure1_slot0;
                                    option = _closure1_slot2;
                                    tangon = 5;
                                    tangon = option[tangon];
                                    tangon = report.bind(michal)(tangon);
                                    option = tangon.HTTP;
                                    report = option.del;
                                    tangon = {};
                                    yankee = _closure1_slot6;
                                    offset = yankee.GUILD_LEAVE;
                                    verify = golfie;
                                    verify = offset.bind(yankee)(verify);
                                    tangon['url'] = verify;
                                    offset = {};
                                    verify = true;
                                    offset['lurking'] = verify;
                                    tangon['body'] = offset;
                                    tangon['oldFormErrors'] = verify;
                                    tangon['rejectWithError'] = verify;
                                    tangon = report.bind(option)(tangon);
                                    SaveGenerator(address=120);
 118:
                                    return tangon;
 120:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(report) { _fun00004_ip = 128; continue _fun00003 }
 126: // try_end0
                                    _fun00004_ip = 185; continue _fun00003;
 128:
                                    return tangon;
 131: // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 4;
                                    zuuluu = report[zuuluu];
                                    report = tangon.bind(michal)(zuuluu);
                                    tangon = report.dispatch;
                                    zuuluu = {};
                                    option = 'GUILD_STOP_LURKING_FAILURE';
                                    zuuluu['type'] = option;
                                    zuuluu['lurkingGuildId'] = golfie;
                                    zuuluu['lurkingSource'] = oscard;
                                    zuuluu = tangon.bind(report)(zuuluu);
 185:
                                    return michal;
 188:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure5_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure5_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    michal = michal.bind(golfie)();
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=151);
 149:
                    return michal;
 151:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 162; continue _fun00001 }
 157:
                    zuuluu = undefined;
                    return zuuluu;
 162:
                    return michal;
 165:
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
    entity = function() { // Original name: _stopLurking
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 171; continue _fun00005 }
 13:
                    tangon = undefined;
                    if(!(report === tangon)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    report = null;
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 168; continue _fun00005 }
 34:
                    golfie = _closure1_slot5;
                    oscard = golfie.lurkingGuildIds;
                    golfie = oscard.bind(golfie)();
                    option = golfie.length;
                    oscard = 0;
                    if(!(oscard !== option)) { _fun00006_ip = 162; continue _fun00005 }
 62:
                    oscard = null;
                    if(!(oscard != report)) { _fun00006_ip = 81; continue _fun00005 }
 68:
                    oscard = golfie.includes;
                    oscard = oscard.bind(golfie)(report);
                    if(oscard) { _fun00006_ip = 162; continue _fun00005 }
 81:
                    golfie = new Array(2);
                    golfie[0] = report;
                    oscard = _closure1_slot4;
                    report = oscard.getGuildId;
                    report = report.bind(oscard)();
                    golfie[1] = report;
                    oscard = golfie.filter;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 6;
                    report = verify[report];
                    report = option.bind(tangon)(report);
                    report = report.isNotNullish;
                    report = oscard.bind(golfie)(report);
                    zuuluu = _closure1_slot7;
                    zuuluu = zuuluu.bind(tangon)(report);
                    SaveGenerator(address=156);
 154:
                    return zuuluu;
 156:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 165; continue _fun00005 }
 162:
                    return tangon;
 165:
                    return zuuluu;
 168:
                    return michal;
 171:
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
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/lurker_mode/LurkerActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['stopLurkingAll'] = tangon;
    michal = function() { // Original name: stopLurking
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['stopLurking'] = michal;
    return entity;
})();