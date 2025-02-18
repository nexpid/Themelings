// app/modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RPC_SCOPE_CONFIG;
    var _closure1_slot3 = golfie;
    tangon = tangon.RPC_LOCAL_SCOPE;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPCEvents;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/events/VoiceSettingsEventsFactory.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: createVoiceSettingsEventHandlers
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        michal = _closure1_slot5;
        oscard = michal.VOICE_SETTINGS_UPDATE;
        zuuluu = {};
        golfie = {};
        option = _closure1_slot3;
        verify = option.ANY;
        romeon = _closure1_slot0;
        foxtra = _closure1_slot2;
        offset = 2;
        option = foxtra[offset];
        yankee = undefined;
        option = romeon.bind(yankee)(option);
        option = option.OAuth2Scopes;
        backup = option.RPC;
        option = new Array(2);
        option[0] = backup;
        offset = foxtra[offset];
        offset = romeon.bind(yankee)(offset);
        offset = offset.OAuth2Scopes;
        offset = offset.RPC_VOICE_READ;
        option[1] = offset;
        golfie[verify] = option;
        zuuluu['scope'] = golfie;
        golfie = function() { // Original name: handler
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.prevState;
                    zuuluu = entity.dispatch;
                    entity = _closure2_slot0;
                    michal = undefined;
                    entity = entity.bind(michal)();
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    report = report.bind(michal)(tangon);
                    tangon = report.isEqual;
                    tangon = tangon.bind(report)(entity, oscard);
                    if(tangon) { _fun00002_ip = 70; continue _fun00001 }
 65:
                    michal = zuuluu.bind(michal)(entity);
 70:
                    return entity;
                }
            };
            return entity;
        };
        zuuluu['handler'] = golfie;
        entity[oscard] = zuuluu;
        zuuluu = michal.VOICE_SETTINGS_UPDATE_2;
        michal = {};
        report = _closure1_slot4;
        michal['scope'] = report;
        tangon = function(argFoo) { // Original name: handler
            michal = argFoo;
            michal = michal.socket;
            var _closure3_slot0 = michal;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = michal.prevState;
                    tangon = michal.dispatch;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.application;
                    report = zuuluu.id;
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00004_ip = 110; continue _fun00003 }
 37:
                    report = _closure2_slot1;
                    michal = _closure3_slot0;
                    michal = michal.application;
                    michal = michal.id;
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 3;
                    report = golfie[report];
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.isEqual;
                    report = report.bind(oscard)(michal, entity);
                    if(report) { _fun00004_ip = 108; continue _fun00003 }
 103:
                    zuuluu = tangon.bind(zuuluu)(michal);
 108:
                    return michal;
 110:
                    return entity;
                }
            };
            return entity;
        };
        michal['handler'] = tangon;
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();