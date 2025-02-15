// app/modules/interactions/InteractionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchMessageInteractionData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun70969: for(var _fun70969_ip = 0; ; ) switch(_fun70969_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    golf = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun70969_ip = 178; continue _fun70969 }
 16:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 3;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    offset = _closure1_slot4;
                    verify = offset.MESSAGE_INTERACTION_DATA;
                    verify = verify.bind(offset)(options, golf);
                    mike['url'] = verify;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=92);
 90:
                    return mike;
 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun70969_ip = 175; continue _fun70969 }
 98:
                    zulu = mike.ok;
                    if(zulu) { _fun70969_ip = 112; continue _fun70969 }
 107:
                    zulu = null;
                    return zulu;
 112:
                    zulu = mike.body;
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tango = 2;
                    tango = verify[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS';
                    tango['type'] = verify;
                    tango['channelId'] = options;
                    tango['messageId'] = golf;
                    tango['interactionData'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 175:
                    return mike;
 178:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interactions/InteractionActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: queueInteractionComponentState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'QUEUE_INTERACTION_COMPONENT_STATE';
        mike['type'] = report;
        report = argFoo;
        mike['messageId'] = report;
        report = argBar;
        mike['nonce'] = report;
        report = argBaz;
        mike['state'] = report;
        report = argCorge;
        mike['componentId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['queueInteractionComponentState'] = tango;
    tango = function(argFoo, argBar) { // Original name: addQueued
        entity = argBar;
        verify = entity.data;
        options = entity.messageId;
        golf = entity.onCreate;
        oscar = entity.onSuccess;
        report = entity.onFailure;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        offset = 'INTERACTION_QUEUE';
        mike['type'] = offset;
        mike['data'] = verify;
        verify = argFoo;
        mike['nonce'] = verify;
        mike['messageId'] = options;
        mike['onCreate'] = golf;
        mike['onSuccess'] = oscar;
        mike['onFailure'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['addQueued'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: setFailed
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'INTERACTION_FAILURE';
        mike['type'] = report;
        report = argFoo;
        mike['nonce'] = report;
        report = argBaz;
        mike['errorMessage'] = report;
        report = argBar;
        mike['errorCode'] = report;
        report = argCorge;
        mike['status'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setFailed'] = tango;
    mike = function() { // Original name: fetchMessageInteractionData
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMessageInteractionData'] = mike;
    return entity;
})();