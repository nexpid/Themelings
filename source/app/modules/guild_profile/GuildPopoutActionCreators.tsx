// app/modules/guild_profile/GuildPopoutActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchGuildForPopout
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 258; continue _fun00001 }
 13:
                    oscard = verify;
                    golfie = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 2;
                    tangon = michal[report];
                    michal = undefined;
                    option = golfie.bind(michal)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    offset = 'GUILD_POPOUT_FETCH_START';
                    tangon['type'] = offset;
                    tangon['guildId'] = verify;
                    tangon = golfie.bind(option)(tangon);
 67: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 3;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    option = tangon.HTTP;
                    golfie = option.get;
                    tangon = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot4;
                    offset = yankee.GUILD_PREVIEW;
                    verify = oscard;
                    verify = offset.bind(yankee)(verify);
                    tangon['url'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=144);
 142:
                    return tangon;
 144:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 207; continue _fun00001 }
 150:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[report];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'GUILD_POPOUT_FETCH_SUCCESS';
                    golfie['type'] = offset;
                    offset = oscard;
                    golfie['guildId'] = offset;
                    offset = tangon.body;
                    golfie['guild'] = offset;
                    golfie = option.bind(verify)(golfie);
 205: // try_end0
                    _fun00002_ip = 255; continue _fun00001;
 207:
                    return tangon;
 210: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GUILD_POPOUT_FETCH_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['guildId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 255:
                    return michal;
 258:
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/GuildPopoutActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchGuildForPopout
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchGuildForPopout'] = michal;
    return entity;
})();