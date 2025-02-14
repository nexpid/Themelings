// app/modules/welcome_screen/WelcomeScreenActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun89254: for(var _fun89254_ip = 0; ; ) switch(_fun89254_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun89254_ip = 247; continue _fun89254 }
 10:
                    verify = argFoo;
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'WELCOME_SCREEN_FETCH_START';
                    tango['type'] = options;
                    tango = oscar.bind(golf)(tango);
 60: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 3;
                    tango = golf[tango];
                    tango = oscar.bind(mike)(tango);
                    golf = tango.HTTP;
                    oscar = golf.get;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot4;
                    offset = yankee.GUILD_WELCOME_SCREEN;
                    options = verify;
                    options = offset.bind(yankee)(options);
                    tango['url'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=133);
 131:
                    return tango;
 133:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun89254_ip = 200; continue _fun89254 }
 139:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[report];
                    options = golf.bind(mike)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    offset = 'WELCOME_SCREEN_FETCH_SUCCESS';
                    oscar['type'] = offset;
                    oscar['guildId'] = verify;
                    verify = tango.body;
                    oscar['welcomeScreen'] = verify;
                    oscar = golf.bind(options)(oscar);
                    oscar = tango.body;
 197: // try_end0
                    return oscar;
 200:
                    return tango;
 203: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'WELCOME_SCREEN_FETCH_FAIL';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 247:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = mike.bind(entity)();
    mike = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun89258: for(var _fun89258_ip = 0; ; ) switch(_fun89258_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun89258_ip = 281; continue _fun89258 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'WELCOME_SCREEN_SUBMIT';
                    tango['type'] = options;
                    tango = oscar.bind(golf)(tango);
 63: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 3;
                    tango = golf[tango];
                    tango = oscar.bind(mike)(tango);
                    golf = tango.HTTP;
                    oscar = golf.patch;
                    tango = {};
                    romeo = _closure1_slot4;
                    yankee = romeo.GUILD_WELCOME_SCREEN;
                    options = verify;
                    options = yankee.bind(romeo)(options);
                    tango['url'] = options;
                    options = {};
                    yankee = offset.description;
                    options['description'] = yankee;
                    yankee = offset.channels;
                    options['welcome_channels'] = yankee;
                    offset = offset.enabled;
                    options['enabled'] = offset;
                    tango['body'] = options;
                    options = true;
                    tango['oldFormErrors'] = options;
                    tango['rejectWithError'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=173);
 171:
                    return tango;
 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun89258_ip = 234; continue _fun89258 }
 179:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[report];
                    options = golf.bind(mike)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    offset = 'WELCOME_SCREEN_SUBMIT_SUCCESS';
                    oscar['type'] = offset;
                    oscar['guildId'] = verify;
                    verify = tango.body;
                    oscar['welcomeScreen'] = verify;
                    oscar = golf.bind(options)(oscar);
 232: // try_end0
                    _fun89258_ip = 278; continue _fun89258;
 234:
                    return tango;
 237: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'WELCOME_SCREEN_SUBMIT_FAILURE';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
 278:
                    return mike;
 281:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    mike = mike.bind(entity)();
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/welcome_screen/WelcomeScreenActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) {
        _fun89260: for(var _fun89260_ip = 0; ; ) switch(_fun89260_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun89260_ip = 11; continue _fun89260 }
 9:
            report = false;
 11:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'WELCOME_SCREEN_VIEW';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['guildId'] = oscar;
            mike['isLurking'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['welcomeScreenViewed'] = oscar;
    zulu['fetchWelcomeScreen'] = report;
    report = function() {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'WELCOME_SCREEN_SETTINGS_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetWelcomeScreen'] = report;
    report = function() {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'WELCOME_SCREEN_SETTINGS_CLEAR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearWelcomeScreenSettings'] = report;
    tango = function(argFoo) {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'WELCOME_SCREEN_SETTINGS_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateSettings'] = tango;
    zulu['saveWelcomeScreen'] = mike;
    return entity;
})();