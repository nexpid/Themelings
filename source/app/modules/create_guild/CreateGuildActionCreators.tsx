// app/modules/create_guild/CreateGuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _createGuildFromTemplate
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor, argGra) {
            entity = function* (argFoo, argBar, argBaz, argCor, argGra) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 308; continue _fun00001 }
 10:
                    romeon = argFoo;
                    verify = argBar;
                    option = argBaz;
                    golfie = argCor;
                    yankee = argGra;
 25: // try_start_0
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 2;
                    michal = tangon[michal];
                    offset = undefined;
                    tangon = zuuluu.bind(offset)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.GUILDS;
                    michal['url'] = report;
                    report = {};
                    report['name'] = romeon;
                    report['icon'] = verify;
                    verify = option;
                    romeon = verify.channels;
                    report['channels'] = romeon;
                    romeon = verify.system_channel_id;
                    report['system_channel_id'] = romeon;
                    romeon = verify.roles;
                    report['roles'] = romeon;
                    verify = verify.code;
                    report['guild_template_code'] = verify;
                    yankee = !yankee;
                    verify = !yankee;
                    if(!yankee) { _fun00002_ip = 139; continue _fun00001 }
 137:
                    verify = undefined;
 139:
                    report['staff_only'] = verify;
                    michal['body'] = report;
                    report = {};
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 3;
                    oscard = yankee[oscard];
                    oscard = verify.bind(offset)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.GUILD_CREATE;
                    report['event'] = oscard;
                    oscard = {};
                    option = option.id;
                    oscard['template_name'] = option;
                    oscard['is_community_intent'] = golfie;
                    report['properties'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=233);
 231:
                    return michal;
 233:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 247; continue _fun00001 }
 239:
                    zuuluu = michal.body;
 244: // try_end0
                    return zuuluu;
 247:
                    return michal;
 250: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    michal = michal.APIError;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    backup = zuuluu;
                    foxtra = tangon;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 308:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = function() { // Original name: createGuildFromTemplate
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['createGuildFromTemplate'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/create_guild/CreateGuildActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();