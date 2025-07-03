// app/modules/user_settings/UserGuildSettingsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: handleConnectionOpen
        michal = {};
        tangon = _closure1_slot8;
        zuuluu = tangon.getCollapsedCategories;
        report = zuuluu.bind(tangon)();
        oscard = michal;
        zuuluu = copyDataProperties(oscard, report);
        _closure1_slot13 = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: scheduleSync
        michal = global;
        report = michal.clearTimeout;
        tangon = _closure1_slot14;
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        report = michal.setTimeout;
        tangon = _closure1_slot15;
        michal = function() {
            zuuluu = _closure1_slot21;
            michal = undefined;
            entity = {};
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        michal = report.bind(entity)(michal, tangon);
        _closure1_slot14 = michal;
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: saveUserGuildSettings
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _saveUserGuildSettings
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 177; continue _fun00003 }
 16:
                    option = null;
                    if(!(option != oscard)) { _fun00004_ip = 83; continue _fun00003 }
 22:
                    michal = _closure1_slot12;
                    if(!(oscard !== michal)) { _fun00004_ip = 83; continue _fun00003 }
 33:
                    tangon = _closure1_slot21;
                    if(!(option == report)) { _fun00004_ip = 45; continue _fun00003 }
 41:
                    zuuluu = {};
                    _fun00004_ip = 63; continue _fun00003;
 45:
                    michal = {};
                    if(!(option == oscard)) { _fun00004_ip = 55; continue _fun00003 }
 51:
                    oscard = _closure1_slot12;
 55:
                    michal[oscard] = report;
                    zuuluu = michal;
 63:
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    SaveGenerator(address=74);
 72:
                    return michal;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!zuuluu) { _fun00004_ip = 169; continue _fun00003 }
 80:
                    return michal;
 83:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.patch;
                    michal = {};
                    option = _closure1_slot10;
                    golfie = option.USER_GUILD_SETTINGS;
                    oscard = _closure1_slot12;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=163);
 161:
                    return michal;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 174; continue _fun00003 }
 169:
                    zuuluu = undefined;
                    return zuuluu;
 174:
                    return michal;
 177:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: saveUserGuildSettingsBulk
        entity = undefined;
        tangon = _closure1_slot22;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _saveUserGuildSettingsBulk
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 522; continue _fun00005 }
 13:
                    michal = global;
                    tangon = michal.clearTimeout;
                    zuuluu = _closure1_slot14;
                    report = undefined;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = michal.Object;
                    michal = zuuluu.keys;
                    michal = michal.bind(zuuluu)(golfie);
                    zuuluu = michal.length;
                    michal = 0;
                    michal = michal !== zuuluu;
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getCollapsedCategories;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = {};
                    verify = _closure1_slot8;
                    option = verify.getCollapsedCategories;
                    foxtra = option.bind(verify)();
                    yankee = foxtra;
                    kiloes = true;
                    for(option in yankee)
 105:
                    {
 114:
                        backup = option;
                        output = foxtra[backup];
                        sizing = _closure1_slot13;
                        sizing = sizing[backup];
                        if(output === sizing) { _fun00006_ip = 105; continue _fun00005 }
 133:
                        zuuluu[backup] = kiloes;
                        _fun00006_ip = 105; continue _fun00005;
                    }
 139:
                    yankee = _closure1_slot13;
                    for(option in yankee)
 151:
                    {
 160:
                        backup = option;
                        output = foxtra[backup];
                        sizing = _closure1_slot13;
                        sizing = sizing[backup];
                        if(output === sizing) { _fun00006_ip = 151; continue _fun00005 }
 179:
                        zuuluu[backup] = kiloes;
                        _fun00006_ip = 151; continue _fun00005;
                    }
 185:
                    foxtra = zuuluu;
                    verify = 'collapsed';
                    option = null;
                    zuuluu = michal;
                    michal = zuuluu;
                    for(offset in foxtra)
 211:
                    {
                        michal = zuuluu;
 226:
                        result = offset;
                        output = _closure1_slot9;
                        sizing = output.getChannel;
                        echoed = sizing.bind(output)(result);
                        sizing = option != echoed;
                        if(!sizing) { _fun00006_ip = 259; continue _fun00005 }
 250:
                        output = echoed.guild_id;
                        sizing = option != output;
 259:
                        if(!sizing) { _fun00006_ip = 211; continue _fun00005 }
 262:
                        sizing = echoed.guild_id;
                        sizing = sizing in golfie;
                        if(sizing) { _fun00006_ip = 285; continue _fun00005 }
 274:
                        output = echoed.guild_id;
                        sizing = {};
                        golfie[output] = sizing;
 285:
                        sizing = echoed.guild_id;
                        sizing = golfie[sizing];
                        sizing = sizing.channel_overrides;
                        if(!(option == sizing)) { _fun00006_ip = 321; continue _fun00005 }
 304:
                        sizing = echoed.guild_id;
                        output = golfie[sizing];
                        sizing = {};
                        output['channel_overrides'] = sizing;
 321:
                        sizing = echoed.guild_id;
                        sizing = golfie[sizing];
                        result = sizing.channel_overrides;
                        output = echoed.id;
                        sizing = {};
                        update = echoed.guild_id;
                        update = golfie[update];
                        source = update.channel_overrides;
                        update = echoed.id;
                        ctrled = source[update];
                        vacuum = sizing;
                        update = copyDataProperties(vacuum, ctrled);
                        echoed = echoed.id;
                        echoed = echoed in tangon;
                        sizing[verify] = echoed;
                        result[output] = sizing;
                        zuuluu = true;
                        _fun00006_ip = 211; continue _fun00005;
                    }
 399:
                    if(michal) { _fun00006_ip = 408; continue _fun00005 }
 402:
                    zuuluu = new Array(0);
                    _fun00006_ip = 516; continue _fun00005;
 408:
                    michal = {};
                    vacuum = michal;
                    ctrled = tangon;
                    tangon = copyDataProperties(vacuum, ctrled);
                    _closure1_slot13 = michal;
                    michal = _closure1_slot11;
                    michal = delete golfie[michal];
                    tangon = _closure1_slot0;
                    option = _closure1_slot1;
                    michal = 10;
                    michal = option[michal];
                    michal = tangon.bind(report)(michal);
                    report = michal.HTTP;
                    tangon = report.patch;
                    michal = {};
                    oscard = _closure1_slot10;
                    oscard = oscard.USER_GUILD_SETTINGS_BULK;
                    michal['url'] = oscard;
                    oscard = {};
                    oscard['guilds'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=505);
 503:
                    return michal;
 505:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 519; continue _fun00005 }
 511:
                    zuuluu = michal.body;
 516:
                    return zuuluu;
 519:
                    return michal;
 522:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot22 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: handleUserGuildSettingsFullUpdate
        michal = {};
        tangon = _closure1_slot8;
        zuuluu = tangon.getCollapsedCategories;
        report = zuuluu.bind(tangon)();
        oscard = michal;
        zuuluu = copyDataProperties(oscard, report);
        _closure1_slot13 = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.Endpoints;
    var _closure1_slot10 = verify;
    verify = option.FAVORITES;
    var _closure1_slot11 = verify;
    option = option.ME;
    var _closure1_slot12 = option;
    option = {};
    var _closure1_slot13 = option;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    option = tangon.SECOND;
    tangon = 15;
    tangon = tangon * option;
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: UserGuildSettingsManager
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot4;
                entity = _closure1_slot16;
                entity = entity.bind(tangon)();
                if(entity) { _fun00008_ip = 84; continue _fun00007 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00008_ip = 118; continue _fun00007;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = {};
                tangon = _closure1_slot18;
                zuuluu['CATEGORY_COLLAPSE'] = tangon;
                zuuluu['CATEGORY_EXPAND'] = tangon;
                zuuluu['CATEGORY_COLLAPSE_ALL'] = tangon;
                zuuluu['CATEGORY_EXPAND_ALL'] = tangon;
                tangon = _closure1_slot17;
                zuuluu['POST_CONNECTION_OPEN'] = tangon;
                tangon = _closure1_slot23;
                zuuluu['USER_GUILD_SETTINGS_FULL_UPDATE'] = tangon;
                entity['actions'] = zuuluu;
                zuuluu = _closure1_slot19;
                entity['saveUserGuildSettings'] = zuuluu;
                michal = _closure1_slot21;
                entity['saveUserGuildSettingsBulk'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/UserGuildSettingsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();