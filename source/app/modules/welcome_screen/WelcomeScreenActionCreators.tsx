// app/modules/welcome_screen/WelcomeScreenActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 247; continue _fun00001 }
 10:
                    verify = argFoo;
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 2;
                    tangon = michal[report];
                    michal = undefined;
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'WELCOME_SCREEN_FETCH_START';
                    tangon['type'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 60: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(michal)(tangon);
                    golfie = tangon.HTTP;
                    oscard = golfie.get;
                    tangon = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot4;
                    offset = yankee.GUILD_WELCOME_SCREEN;
                    option = verify;
                    option = offset.bind(yankee)(option);
                    tangon['url'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=133);
 131:
                    return tangon;
 133:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 200; continue _fun00001 }
 139:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[report];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    offset = 'WELCOME_SCREEN_FETCH_SUCCESS';
                    oscard['type'] = offset;
                    oscard['guildId'] = verify;
                    verify = tangon.body;
                    oscard['welcomeScreen'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    oscard = tangon.body;
 197: // try_end0
                    return oscard;
 200:
                    return tangon;
 203: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'WELCOME_SCREEN_FETCH_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 247:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    report = michal.bind(entity)();
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 281; continue _fun00003 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 2;
                    tangon = michal[report];
                    michal = undefined;
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'WELCOME_SCREEN_SUBMIT';
                    tangon['type'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 63: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(michal)(tangon);
                    golfie = tangon.HTTP;
                    oscard = golfie.patch;
                    tangon = {};
                    romeon = _closure1_slot4;
                    yankee = romeon.GUILD_WELCOME_SCREEN;
                    option = verify;
                    option = yankee.bind(romeon)(option);
                    tangon['url'] = option;
                    option = {};
                    yankee = offset.description;
                    option['description'] = yankee;
                    yankee = offset.channels;
                    option['welcome_channels'] = yankee;
                    offset = offset.enabled;
                    option['enabled'] = offset;
                    tangon['body'] = option;
                    option = true;
                    tangon['oldFormErrors'] = option;
                    tangon['rejectWithError'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=173);
 171:
                    return tangon;
 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 234; continue _fun00003 }
 179:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[report];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    offset = 'WELCOME_SCREEN_SUBMIT_SUCCESS';
                    oscard['type'] = offset;
                    oscard['guildId'] = verify;
                    verify = tangon.body;
                    oscard['welcomeScreen'] = verify;
                    oscard = golfie.bind(option)(oscard);
 232: // try_end0
                    _fun00004_ip = 278; continue _fun00003;
 234:
                    return tangon;
 237: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'WELCOME_SCREEN_SUBMIT_FAILURE';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 278:
                    return michal;
 281:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    michal = michal.bind(entity)();
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/welcome_screen/WelcomeScreenActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'WELCOME_SCREEN_VIEW';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['guildId'] = oscard;
            michal['isLurking'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['welcomeScreenViewed'] = oscard;
    zuuluu['fetchWelcomeScreen'] = report;
    report = function() {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'WELCOME_SCREEN_SETTINGS_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetWelcomeScreen'] = report;
    report = function() {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'WELCOME_SCREEN_SETTINGS_CLEAR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearWelcomeScreenSettings'] = report;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'WELCOME_SCREEN_SETTINGS_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateSettings'] = tangon;
    zuuluu['saveWelcomeScreen'] = michal;
    return entity;
})();