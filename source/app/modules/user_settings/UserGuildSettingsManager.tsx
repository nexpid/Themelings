// app/modules/user_settings/UserGuildSettingsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun61482: for(var _fun61482_ip = 0; ; ) switch(_fun61482_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun61482_ip = 51; continue _fun61482 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun61482_ip = 92; continue _fun61482;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun61482_ip = 71; continue _fun61482 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun61483: for(var _fun61483_ip = 0; ; ) switch(_fun61483_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun61483_ip = 74; continue _fun61483;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: handleConnectionOpen
        mike = {};
        tango = _closure1_slot8;
        zulu = tango.getCollapsedCategories;
        report = zulu.bind(tango)();
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        _closure1_slot13 = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: scheduleSync
        mike = global;
        report = mike.clearTimeout;
        tango = _closure1_slot14;
        entity = undefined;
        tango = report.bind(entity)(tango);
        report = mike.setTimeout;
        tango = _closure1_slot15;
        mike = function() {
            zulu = _closure1_slot22;
            mike = undefined;
            entity = {};
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        mike = report.bind(entity)(mike, tango);
        _closure1_slot14 = mike;
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: saveUserGuildSettings
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _saveUserGuildSettings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun61492: for(var _fun61492_ip = 0; ; ) switch(_fun61492_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun61492_ip = 177; continue _fun61492 }
 16:
                    options = null;
                    if(!(options != oscar)) { _fun61492_ip = 83; continue _fun61492 }
 22:
                    mike = _closure1_slot12;
                    if(!(oscar !== mike)) { _fun61492_ip = 83; continue _fun61492 }
 33:
                    tango = _closure1_slot22;
                    if(!(options == report)) { _fun61492_ip = 45; continue _fun61492 }
 41:
                    zulu = {};
                    _fun61492_ip = 63; continue _fun61492;
 45:
                    mike = {};
                    if(!(options == oscar)) { _fun61492_ip = 55; continue _fun61492 }
 51:
                    oscar = _closure1_slot12;
 55:
                    mike[oscar] = report;
                    zulu = mike;
 63:
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    SaveGenerator(address=74);
 72:
                    return mike;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!zulu) { _fun61492_ip = 169; continue _fun61492 }
 80:
                    return mike;
 83:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.patch;
                    mike = {};
                    options = _closure1_slot10;
                    golf = options.USER_GUILD_SETTINGS;
                    oscar = _closure1_slot12;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=163);
 161:
                    return mike;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun61492_ip = 174; continue _fun61492 }
 169:
                    zulu = undefined;
                    return zulu;
 174:
                    return mike;
 177:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: saveUserGuildSettingsBulk
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _saveUserGuildSettingsBulk
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun61496: for(var _fun61496_ip = 0; ; ) switch(_fun61496_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun61496_ip = 522; continue _fun61496 }
 13:
                    mike = global;
                    tango = mike.clearTimeout;
                    zulu = _closure1_slot14;
                    report = undefined;
                    zulu = tango.bind(report)(zulu);
                    zulu = mike.Object;
                    mike = zulu.keys;
                    mike = mike.bind(zulu)(golf);
                    zulu = mike.length;
                    mike = 0;
                    mike = mike !== zulu;
                    tango = _closure1_slot8;
                    zulu = tango.getCollapsedCategories;
                    tango = zulu.bind(tango)();
                    zulu = {};
                    verify = _closure1_slot8;
                    options = verify.getCollapsedCategories;
                    foxtrot = options.bind(verify)();
                    yankee = foxtrot;
                    kilo = true;
                    for(options in yankee)
 105:
                    {
 114:
                        backup = options;
                        output = foxtrot[backup];
                        sizing = _closure1_slot13;
                        sizing = sizing[backup];
                        if(output === sizing) { _fun61496_ip = 105; continue _fun61496 }
 133:
                        zulu[backup] = kilo;
                        _fun61496_ip = 105; continue _fun61496;
                    }
 139:
                    yankee = _closure1_slot13;
                    for(options in yankee)
 151:
                    {
 160:
                        backup = options;
                        output = foxtrot[backup];
                        sizing = _closure1_slot13;
                        sizing = sizing[backup];
                        if(output === sizing) { _fun61496_ip = 151; continue _fun61496 }
 179:
                        zulu[backup] = kilo;
                        _fun61496_ip = 151; continue _fun61496;
                    }
 185:
                    foxtrot = zulu;
                    verify = 'collapsed';
                    options = null;
                    zulu = mike;
                    mike = zulu;
                    for(offset in foxtrot)
 211:
                    {
                        mike = zulu;
 226:
                        result = offset;
                        output = _closure1_slot9;
                        sizing = output.getChannel;
                        echo = sizing.bind(output)(result);
                        sizing = options != echo;
                        if(!sizing) { _fun61496_ip = 259; continue _fun61496 }
 250:
                        output = echo.guild_id;
                        sizing = options != output;
 259:
                        if(!sizing) { _fun61496_ip = 211; continue _fun61496 }
 262:
                        sizing = echo.guild_id;
                        sizing = sizing in golf;
                        if(sizing) { _fun61496_ip = 285; continue _fun61496 }
 274:
                        output = echo.guild_id;
                        sizing = {};
                        golf[output] = sizing;
 285:
                        sizing = echo.guild_id;
                        sizing = golf[sizing];
                        sizing = sizing.channel_overrides;
                        if(!(options == sizing)) { _fun61496_ip = 321; continue _fun61496 }
 304:
                        sizing = echo.guild_id;
                        output = golf[sizing];
                        sizing = {};
                        output['channel_overrides'] = sizing;
 321:
                        sizing = echo.guild_id;
                        sizing = golf[sizing];
                        result = sizing.channel_overrides;
                        output = echo.id;
                        sizing = {};
                        update = echo.guild_id;
                        update = golf[update];
                        source = update.channel_overrides;
                        update = echo.id;
                        control = source[update];
                        vacuum = sizing;
                        update = copyDataProperties(vacuum, control);
                        echo = echo.id;
                        echo = echo in tango;
                        sizing[verify] = echo;
                        result[output] = sizing;
                        zulu = true;
                        _fun61496_ip = 211; continue _fun61496;
                    }
 399:
                    if(mike) { _fun61496_ip = 408; continue _fun61496 }
 402:
                    zulu = new Array(0);
                    _fun61496_ip = 516; continue _fun61496;
 408:
                    mike = {};
                    vacuum = mike;
                    control = tango;
                    tango = copyDataProperties(vacuum, control);
                    _closure1_slot13 = mike;
                    mike = _closure1_slot11;
                    mike = delete golf[mike];
                    tango = _closure1_slot0;
                    options = _closure1_slot1;
                    mike = 10;
                    mike = options[mike];
                    mike = tango.bind(report)(mike);
                    report = mike.HTTP;
                    tango = report.patch;
                    mike = {};
                    oscar = _closure1_slot10;
                    oscar = oscar.USER_GUILD_SETTINGS_BULK;
                    mike['url'] = oscar;
                    oscar = {};
                    oscar['guilds'] = golf;
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=505);
 503:
                    return mike;
 505:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun61496_ip = 519; continue _fun61496 }
 511:
                    zulu = mike.body;
 516:
                    return zulu;
 519:
                    return mike;
 522:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: handleUserGuildSettingsFullUpdate
        mike = {};
        tango = _closure1_slot8;
        zulu = tango.getCollapsedCategories;
        report = zulu.bind(tango)();
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        _closure1_slot13 = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.Endpoints;
    var _closure1_slot10 = verify;
    verify = options.FAVORITES;
    var _closure1_slot11 = verify;
    options = options.ME;
    var _closure1_slot12 = options;
    options = {};
    var _closure1_slot13 = options;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    options = tango.SECOND;
    tango = 15;
    tango = tango * options;
    var _closure1_slot15 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: UserGuildSettingsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot16;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            zulu = {};
            tango = _closure1_slot19;
            zulu['CATEGORY_COLLAPSE'] = tango;
            zulu['CATEGORY_EXPAND'] = tango;
            zulu['CATEGORY_COLLAPSE_ALL'] = tango;
            zulu['CATEGORY_EXPAND_ALL'] = tango;
            tango = _closure1_slot18;
            zulu['POST_CONNECTION_OPEN'] = tango;
            tango = _closure1_slot24;
            zulu['USER_GUILD_SETTINGS_FULL_UPDATE'] = tango;
            entity['actions'] = zulu;
            zulu = _closure1_slot20;
            entity['saveUserGuildSettings'] = zulu;
            mike = _closure1_slot22;
            entity['saveUserGuildSettingsBulk'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserGuildSettingsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();