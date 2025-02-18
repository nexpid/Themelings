// app/modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: getChannelsAllowedToUnlink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = arguments[1];
            michal = arguments[2];
            report = undefined;
            if(!(zuuluu === report)) { _fun00002_ip = 24; continue _fun00001 }
 17:
            zuuluu = _closure1_slot2;
 24:
            if(!(michal === report)) { _fun00002_ip = 35; continue _fun00001 }
 28:
            michal = _closure1_slot4;
 35:
            var _closure2_slot0 = michal;
            michal = null;
            if(!(michal != tangon)) { _fun00002_ip = 103; continue _fun00001 }
 45:
            michal = zuuluu.getChannels;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = _closure1_slot3;
            tangon = zuuluu[michal];
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.canUnlinkLobbyChannel;
                entity = argFoo;
                michal = entity.channel;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 107; continue _fun00001;
 103:
            entity = new Array(0);
 107:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    report = 0;
    verify = golfie[report];
    entity = undefined;
    verify = option.bind(entity)(verify);
    var _closure1_slot2 = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getChannelsAllowedToUnlink'] = tangon;
    michal = function(argFoo) { // Original name: useChannelsAllowedToUnlink
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresArray;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot2;
        michal[1] = report;
        entity = function() {
            report = _closure1_slot5;
            tangon = _closure2_slot0;
            zuuluu = _closure1_slot2;
            michal = _closure1_slot4;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useChannelsAllowedToUnlink'] = michal;
    return entity;
})();