// app/modules/interactions/InteractionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchMessageInteractionData
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    golfie = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 178; continue _fun00001 }
 16:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    offset = _closure1_slot4;
                    verify = offset.MESSAGE_INTERACTION_DATA;
                    verify = verify.bind(offset)(option, golfie);
                    michal['url'] = verify;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=92);
 90:
                    return michal;
 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 98:
                    zuuluu = michal.ok;
                    if(zuuluu) { _fun00002_ip = 112; continue _fun00001 }
 107:
                    zuuluu = null;
                    return zuuluu;
 112:
                    zuuluu = michal.body;
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tangon = 2;
                    tangon = verify[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS';
                    tangon['type'] = verify;
                    tangon['channelId'] = option;
                    tangon['messageId'] = golfie;
                    tangon['interactionData'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 175:
                    return michal;
 178:
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
    tangon = 'modules/interactions/InteractionActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: queueInteractionComponentState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'QUEUE_INTERACTION_COMPONENT_STATE';
        michal['type'] = report;
        report = argFoo;
        michal['messageId'] = report;
        report = argBar;
        michal['nonce'] = report;
        report = argBaz;
        michal['state'] = report;
        report = argCor;
        michal['componentId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['queueInteractionComponentState'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: addQueued
        entity = argBar;
        verify = entity.data;
        option = entity.messageId;
        golfie = entity.onCreate;
        oscard = entity.onSuccess;
        report = entity.onFailure;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        offset = 'INTERACTION_QUEUE';
        michal['type'] = offset;
        michal['data'] = verify;
        verify = argFoo;
        michal['nonce'] = verify;
        michal['messageId'] = option;
        michal['onCreate'] = golfie;
        michal['onSuccess'] = oscard;
        michal['onFailure'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['addQueued'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: setFailed
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'INTERACTION_FAILURE';
        michal['type'] = report;
        report = argFoo;
        michal['nonce'] = report;
        report = argBaz;
        michal['errorMessage'] = report;
        report = argBar;
        michal['errorCode'] = report;
        report = argCor;
        michal['status'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setFailed'] = tangon;
    michal = function() { // Original name: fetchMessageInteractionData
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMessageInteractionData'] = michal;
    return entity;
})();