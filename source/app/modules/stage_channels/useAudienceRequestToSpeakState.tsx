// app/modules/stage_channels/useAudienceRequestToSpeakState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    michal = function(argFoo) { // Original name: getAudienceRequestToSpeakState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00002_ip = 129; continue _fun00001 }
 9:
            entity = michal.suppress;
            if(!entity) { _fun00002_ip = 28; continue _fun00001 }
 18:
            entity = michal.requestToSpeakTimestamp;
            if(!(zuuluu == entity)) { _fun00002_ip = 114; continue _fun00001 }
 28:
            entity = michal.suppress;
            if(entity) { _fun00002_ip = 62; continue _fun00001 }
 37:
            entity = michal.requestToSpeakTimestamp;
            if(!(zuuluu != entity)) { _fun00002_ip = 62; continue _fun00001 }
 47:
            entity = _closure1_slot3;
            entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            _fun00002_ip = 112; continue _fun00001;
 62:
            tangon = michal.suppress;
            if(tangon) { _fun00002_ip = 96; continue _fun00001 }
 71:
            michal = michal.requestToSpeakTimestamp;
            if(!(zuuluu == michal)) { _fun00002_ip = 96; continue _fun00001 }
 81:
            michal = _closure1_slot3;
            michal = michal.ON_STAGE;
            _fun00002_ip = 109; continue _fun00001;
 96:
            zuuluu = _closure1_slot3;
            michal = zuuluu.NONE;
 109:
            entity = michal;
 112:
            _fun00002_ip = 127; continue _fun00001;
 114:
            michal = _closure1_slot3;
            entity = michal.REQUESTED_TO_SPEAK;
 127:
            _fun00002_ip = 142; continue _fun00001;
 129:
            michal = _closure1_slot3;
            entity = michal.NONE;
 142:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    verify = 0;
    oscard = option[verify];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot2 = tangon;
    tangon = {};
    tangon['NONE'] = verify;
    oscard = 'NONE';
    tangon[verify] = oscard;
    verify = 1;
    tangon['REQUESTED_TO_SPEAK'] = verify;
    oscard = 'REQUESTED_TO_SPEAK';
    tangon[verify] = oscard;
    oscard = 2;
    tangon['REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'] = oscard;
    verify = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK';
    tangon[oscard] = verify;
    offset = 3;
    tangon['ON_STAGE'] = offset;
    verify = 'ON_STAGE';
    tangon[offset] = verify;
    var _closure1_slot3 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/stage_channels/useAudienceRequestToSpeakState.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo, argBar) { // Original name: useAudienceRequestToSpeakState
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00004_ip = 61; continue _fun00003 }
 13:
                michal = _closure2_slot1;
                if(!(zuuluu != michal)) { _fun00004_ip = 61; continue _fun00003 }
 21:
                zuuluu = _closure1_slot4;
                report = _closure1_slot2;
                tangon = report.getVoiceStateForChannel;
                michal = _closure2_slot1;
                entity = _closure2_slot0;
                michal = tangon.bind(report)(michal, entity);
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                _fun00004_ip = 74; continue _fun00003;
 61:
                michal = _closure1_slot3;
                entity = michal.NONE;
 74:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['RequestToSpeakStates'] = tangon;
    zuuluu['getAudienceRequestToSpeakState'] = michal;
    return entity;
})();