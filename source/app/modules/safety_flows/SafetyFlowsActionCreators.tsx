// app/modules/safety_flows/SafetyFlowsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getCurrentTask
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 133; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 2;
                    michal = verify[michal];
                    option = undefined;
                    tangon = zuuluu.bind(option)(michal);
                    zuuluu = tangon.get;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.SAFETY_FLOWS_TASK;
                    michal['url'] = report;
                    report = {};
                    golfie = _closure1_slot0;
                    oscard = 3;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.USER_VERIFY;
                    report['event'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=111);
 109:
                    return michal;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 130; continue _fun00001 }
 117:
                    zuuluu = michal.body;
                    if(zuuluu) { _fun00002_ip = 127; continue _fun00001 }
 125:
                    zuuluu = null;
 127:
                    return zuuluu;
 130:
                    return michal;
 133:
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
    entity = function() { // Original name: _completeTask
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 136; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 2;
                    michal = verify[michal];
                    option = undefined;
                    tangon = zuuluu.bind(option)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.SAFETY_FLOWS_TASK;
                    michal['url'] = report;
                    report = argFoo;
                    michal['body'] = report;
                    report = {};
                    golfie = _closure1_slot0;
                    oscard = 3;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.USER_VERIFY;
                    report['event'] = oscard;
                    michal['trackedActionData'] = report;
                    report = true;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=119);
 117:
                    return michal;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 133; continue _fun00003 }
 125:
                    zuuluu = michal.body;
                    return zuuluu;
 133:
                    return michal;
 136:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = 'modules/safety_flows/SafetyFlowsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getCurrentTask
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getCurrentTask'] = tangon;
    michal = function() { // Original name: completeTask
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['completeTask'] = michal;
    return entity;
})();