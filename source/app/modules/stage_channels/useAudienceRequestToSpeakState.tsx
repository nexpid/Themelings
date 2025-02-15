// app/modules/stage_channels/useAudienceRequestToSpeakState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    mike = function(argFoo) { // Original name: getAudienceRequestToSpeakState
        _fun54418: for(var _fun54418_ip = 0; ; ) switch(_fun54418_ip) {
 0:
            mike = argFoo;
            zulu = null;
            if(!(zulu != mike)) { _fun54418_ip = 129; continue _fun54418 }
 9:
            entity = mike.suppress;
            if(!entity) { _fun54418_ip = 28; continue _fun54418 }
 18:
            entity = mike.requestToSpeakTimestamp;
            if(!(zulu == entity)) { _fun54418_ip = 114; continue _fun54418 }
 28:
            entity = mike.suppress;
            if(entity) { _fun54418_ip = 62; continue _fun54418 }
 37:
            entity = mike.requestToSpeakTimestamp;
            if(!(zulu != entity)) { _fun54418_ip = 62; continue _fun54418 }
 47:
            entity = _closure1_slot3;
            entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            _fun54418_ip = 112; continue _fun54418;
 62:
            tango = mike.suppress;
            if(tango) { _fun54418_ip = 96; continue _fun54418 }
 71:
            mike = mike.requestToSpeakTimestamp;
            if(!(zulu == mike)) { _fun54418_ip = 96; continue _fun54418 }
 81:
            mike = _closure1_slot3;
            mike = mike.ON_STAGE;
            _fun54418_ip = 109; continue _fun54418;
 96:
            zulu = _closure1_slot3;
            mike = zulu.NONE;
 109:
            entity = mike;
 112:
            _fun54418_ip = 127; continue _fun54418;
 114:
            mike = _closure1_slot3;
            entity = mike.REQUESTED_TO_SPEAK;
 127:
            _fun54418_ip = 142; continue _fun54418;
 129:
            mike = _closure1_slot3;
            entity = mike.NONE;
 142:
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    verify = 0;
    oscar = options[verify];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot2 = tango;
    tango = {};
    tango['NONE'] = verify;
    oscar = 'NONE';
    tango[verify] = oscar;
    verify = 1;
    tango['REQUESTED_TO_SPEAK'] = verify;
    oscar = 'REQUESTED_TO_SPEAK';
    tango[verify] = oscar;
    oscar = 2;
    tango['REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'] = oscar;
    verify = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK';
    tango[oscar] = verify;
    offset = 3;
    tango['ON_STAGE'] = offset;
    verify = 'ON_STAGE';
    tango[offset] = verify;
    var _closure1_slot3 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/stage_channels/useAudienceRequestToSpeakState.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo, argBar) { // Original name: useAudienceRequestToSpeakState
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun54420: for(var _fun54420_ip = 0; ; ) switch(_fun54420_ip) {
 0:
                mike = _closure2_slot0;
                zulu = null;
                if(!(zulu != mike)) { _fun54420_ip = 61; continue _fun54420 }
 13:
                mike = _closure2_slot1;
                if(!(zulu != mike)) { _fun54420_ip = 61; continue _fun54420 }
 21:
                zulu = _closure1_slot4;
                report = _closure1_slot2;
                tango = report.getVoiceStateForChannel;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                mike = tango.bind(report)(mike, entity);
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                _fun54420_ip = 74; continue _fun54420;
 61:
                mike = _closure1_slot3;
                entity = mike.NONE;
 74:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = report;
    zulu['RequestToSpeakStates'] = tango;
    zulu['getAudienceRequestToSpeakState'] = mike;
    return entity;
})();