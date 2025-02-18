// app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RTCConnectionStates;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsConnectedToVoiceChannel
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(3);
        michal[0] = oscard;
        oscard = _closure1_slot4;
        michal[1] = oscard;
        report = _closure1_slot2;
        michal[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannelId;
                michal = michal.bind(zuuluu)();
                oscard = _closure2_slot0;
                tangon = null;
                report = michal;
                if(!(tangon != oscard)) { _fun00002_ip = 37; continue _fun00001 }
 33:
                report = _closure2_slot0;
 37:
                if(!(report === michal)) { _fun00002_ip = 128; continue _fun00001 }
 41:
                tangon = _closure1_slot4;
                zuuluu = tangon.isInChannel;
                oscard = _closure1_slot2;
                michal = oscard.getId;
                michal = michal.bind(oscard)();
                michal = zuuluu.bind(tangon)(report, michal);
                if(michal) { _fun00002_ip = 124; continue _fun00001 }
 74:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getState;
                michal = michal.bind(zuuluu)();
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.DISCONNECTED;
                if(!(zuuluu !== michal)) { _fun00002_ip = 120; continue _fun00001 }
 102:
                entity = _closure1_slot5;
                entity = entity.NO_ROUTE;
                if(!(entity !== michal)) { _fun00002_ip = 120; continue _fun00001 }
 116:
                entity = true;
                return entity;
 120:
                entity = false;
                return entity;
 124:
                entity = true;
                return entity;
 128:
                entity = false;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();