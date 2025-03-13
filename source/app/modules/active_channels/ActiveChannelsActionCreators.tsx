// app/modules/active_channels/ActiveChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchActiveChannels
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 378; continue _fun00001 }
 13:
                    golfie = argFoo;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00002_ip = 25; continue _fun00001 }
 22:
                    michal = 10;
 25:
                    backup = michal;
                    option = undefined;
                    romeon = undefined;
                    oscard = undefined;
                    SaveGenerator(address=38);
 36:
                    return verify;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 375; continue _fun00001 }
 47:
                    offset = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    tangon = 2;
                    zuuluu = zuuluu[tangon];
                    yankee = offset.bind(verify)(zuuluu);
                    offset = yankee.dispatch;
                    zuuluu = {};
                    foxtra = 'ACTIVE_CHANNELS_FETCH_START';
                    zuuluu['type'] = foxtra;
                    foxtra = golfie;
                    zuuluu['guildId'] = foxtra;
                    zuuluu = offset.bind(yankee)(zuuluu);
 99: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = yankee[zuuluu];
                    zuuluu = offset.bind(verify)(zuuluu);
                    yankee = zuuluu.HTTP;
                    offset = yankee.get;
                    zuuluu = {};
                    sizing = _closure1_slot4;
                    kiloes = sizing.ACTIVE_CHANNELS;
                    foxtra = golfie;
                    foxtra = kiloes.bind(sizing)(foxtra);
                    zuuluu['url'] = foxtra;
                    foxtra = {};
                    foxtra['channel_limit'] = backup;
                    zuuluu['query'] = foxtra;
                    foxtra = true;
                    zuuluu['rejectWithError'] = foxtra;
                    zuuluu = offset.bind(yankee)(zuuluu);
                    SaveGenerator(address=182);
 180:
                    return zuuluu;
 182:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 286; continue _fun00001 }
 188:
                    oscard = zuuluu;
                    offset = zuuluu.body;
                    romeon = offset;
                    yankee = null;
                    foxtra = yankee == offset;
                    offset = undefined;
                    if(foxtra) { _fun00002_ip = 216; continue _fun00001 }
 210:
                    offset = romeon.channels;
 216:
                    option = offset;
                    if(!(yankee == offset)) { _fun00002_ip = 229; continue _fun00001 }
 223:
                    romeon = new Array(0);
                    _fun00002_ip = 232; continue _fun00001;
 229:
                    romeon = option;
 232:
                    offset = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[tangon];
                    yankee = offset.bind(verify)(option);
                    offset = yankee.dispatch;
                    option = {};
                    foxtra = 'ACTIVE_CHANNELS_FETCH_SUCCESS';
                    option['type'] = foxtra;
                    foxtra = golfie;
                    option['guildId'] = foxtra;
                    option['channels'] = romeon;
                    option = offset.bind(yankee)(option);
 283: // try_end0
                    return oscard;
 286:
                    return zuuluu;
 289: // catch_target0
                    CatchBlockStart(arg_register=2);
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = offset[tangon];
                    oscard = option.bind(verify)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    yankee = 'ACTIVE_CHANNELS_FETCH_FAILURE';
                    tangon['type'] = yankee;
                    tangon['guildId'] = golfie;
                    golfie = 4;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    option = golfie.prototype;
                    option = Object.create(option, {constructor: {value: golfie}});
                    result = option;
                    output = zuuluu;
                    golfie = new result[golfie](output, sizing);
                    golfie = golfie instanceof Object ? golfie : option;
                    tangon['error'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 375:
                    return michal;
 378:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/active_channels/ActiveChannelsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchActiveChannels
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchActiveChannels'] = michal;
    return entity;
})();