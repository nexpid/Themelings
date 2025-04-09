// app/modules/errors/hooks/useVideoStreamError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/hooks/useVideoStreamError.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useVideoStreamError
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot2;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot2;
                michal = zuuluu.getId;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure2_slot1;
                if(!(zuuluu !== michal)) { _fun00002_ip = 134; continue _fun00001 }
 28:
                golfie = _closure1_slot3;
                tangon = golfie.getActiveErrorsOfType;
                verify = _closure1_slot0;
                offset = _closure1_slot1;
                zuuluu = 3;
                michal = offset[zuuluu];
                option = undefined;
                michal = verify.bind(option)(michal);
                michal = michal.AVError;
                michal = michal.VIDEO_STREAM_RECEIVER_READY_TIMEOUT;
                romeon = tangon.bind(golfie)(michal);
                michal = new Array(0);
                yankee = 0;
                foxtra = michal;
                yankee = arraySpread(foxtra, romeon, yankee);
                oscard = golfie.getActiveErrorsOfType;
                zuuluu = offset[zuuluu];
                zuuluu = verify.bind(option)(zuuluu);
                zuuluu = zuuluu.AVError;
                zuuluu = zuuluu.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
                romeon = oscard.bind(golfie)(zuuluu);
                foxtra = michal;
                zuuluu = arraySpread(foxtra, romeon, yankee);
                tangon = michal;
                _fun00002_ip = 238; continue _fun00001;
 134:
                golfie = _closure1_slot3;
                zuuluu = golfie.getActiveErrorsOfType;
                verify = _closure1_slot0;
                offset = _closure1_slot1;
                michal = 3;
                entity = offset[michal];
                option = undefined;
                entity = verify.bind(option)(entity);
                entity = entity.AVError;
                entity = entity.VIDEO_STREAM_SENDER_READY_TIMEOUT;
                romeon = zuuluu.bind(golfie)(entity);
                entity = new Array(0);
                yankee = 0;
                foxtra = entity;
                yankee = arraySpread(foxtra, romeon, yankee);
                oscard = golfie.getActiveErrorsOfType;
                michal = offset[michal];
                michal = verify.bind(option)(michal);
                michal = michal.AVError;
                michal = michal.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
                romeon = oscard.bind(golfie)(michal);
                foxtra = entity;
                michal = arraySpread(foxtra, romeon, yankee);
                tangon = entity;
 238:
                entity = tangon.length;
                zuuluu = 0;
                entity = zuuluu < entity;
                if(!entity) { _fun00002_ip = 295; continue _fun00001 }
 252:
                entity = tangon[zuuluu];
                oscard = entity.mediaContext;
                michal = _closure2_slot0;
                if(!(oscard === michal)) { _fun00002_ip = 283; continue _fun00001 }
 270:
                oscard = entity.userId;
                michal = _closure2_slot1;
                if(!(oscard !== michal)) { _fun00002_ip = 299; continue _fun00001 }
 283:
                zuuluu = zuuluu + 1;
                michal = tangon.length;
                if(zuuluu < michal) { _fun00002_ip = 252; continue _fun00001 }
 295:
                michal = undefined;
                return michal;
 299:
                entity = entity.type;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();