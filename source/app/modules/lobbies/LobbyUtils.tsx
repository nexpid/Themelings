// app/modules/lobbies/LobbyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: canUnlinkLobbyChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            report = _closure1_slot2;
 19:
            zuuluu = null;
            entity = zuuluu != oscard;
            if(!entity) { _fun00002_ip = 125; continue _fun00001 }
 28:
            michal = oscard.linkedLobby;
            michal = zuuluu != michal;
            if(!michal) { _fun00002_ip = 66; continue _fun00001 }
 41:
            tangon = report.can;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.MANAGE_CHANNELS;
            michal = tangon.bind(report)(zuuluu, oscard);
 66:
            if(!michal) { _fun00002_ip = 94; continue _fun00001 }
 69:
            tangon = report.can;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.VIEW_CHANNEL;
            michal = tangon.bind(report)(zuuluu, oscard);
 94:
            if(!michal) { _fun00002_ip = 122; continue _fun00001 }
 97:
            tangon = report.can;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.SEND_MESSAGES;
            michal = tangon.bind(report)(zuuluu, oscard);
 122:
            entity = michal;
 125:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/lobbies/LobbyUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['canUnlinkLobbyChannel'] = tangon;
    michal = function(argFoo) { // Original name: useCanUnlinkLobbyChannel
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot0;
            michal = _closure1_slot2;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCanUnlinkLobbyChannel'] = michal;
    return entity;
})();