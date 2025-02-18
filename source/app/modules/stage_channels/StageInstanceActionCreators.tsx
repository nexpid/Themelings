// app/modules/stage_channels/StageInstanceActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _startStageInstance
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar, argBaz, argCor, argGra) {
            entity = function* (argFoo, argBar, argBaz, argCor, argGra) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 141; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot3;
                    report = report.STAGE_INSTANCES;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['channel_id'] = oscard;
                    oscard = argBar;
                    report['topic'] = oscard;
                    oscard = argBaz;
                    report['privacy_level'] = oscard;
                    oscard = argGra;
                    report['guild_scheduled_event_id'] = oscard;
                    oscard = argCor;
                    report['send_start_notification'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=124);
 122:
                    return michal;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 138; continue _fun00001 }
 130:
                    zuuluu = michal.body;
                    return zuuluu;
 138:
                    return michal;
 141:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _updateStageInstance
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 121; continue _fun00003 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.patch;
                    michal = {};
                    golfie = _closure1_slot3;
                    oscard = golfie.STAGE_INSTANCE;
                    report = argFoo;
                    report = oscard.bind(golfie)(report);
                    michal['url'] = report;
                    report = {};
                    oscard = argBar;
                    report['topic'] = oscard;
                    oscard = argBaz;
                    report['privacy_level'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=104);
 102:
                    return michal;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 118; continue _fun00003 }
 110:
                    zuuluu = michal.body;
                    return zuuluu;
 118:
                    return michal;
 121:
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
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/StageInstanceActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: startStageInstance
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startStageInstance'] = tangon;
    tangon = function() { // Original name: updateStageInstance
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateStageInstance'] = tangon;
    michal = function(argFoo) { // Original name: endStageInstance
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        oscard = _closure1_slot3;
        report = oscard.STAGE_INSTANCE;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['endStageInstance'] = michal;
    return entity;
})();