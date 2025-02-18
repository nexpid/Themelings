// app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/hooks/useVoiceStateForRemoteSession.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useVoiceStateForRemoteSession
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        report = tangon.bind(michal)(zuuluu);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(3);
        zuuluu[0] = michal;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        entity = _closure1_slot4;
        zuuluu[2] = entity;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot2;
                michal = zuuluu.getId;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure1_slot4;
                michal = zuuluu.getRemoteSessionId;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure1_slot3;
                entity = michal.getVoiceStateForSession;
                michal = entity.bind(michal)(tangon, zuuluu);
                entity = null;
                zuuluu = entity != michal;
                entity = undefined;
                if(!zuuluu) { _fun00002_ip = 61; continue _fun00001 }
 58:
                entity = michal;
 61:
                return entity;
            }
        };
        entity = new Array(0);
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();