// app/modules/guild/usePostableChannelCount.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild/usePostableChannelCount.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSendMessageChannelCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 3;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.useStateFromStores;
            zuuluu = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getChannels;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = _closure1_slot4;
                    entity = michal[entity];
                    michal = null;
                    if(!(michal == entity)) { _fun00004_ip = 43; continue _fun00003 }
 39:
                    entity = new Array(0);
 43:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon, entity, zuuluu);
            zuuluu = tangon.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00002_ip = 106; continue _fun00001 }
 84:
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.channel;
                zuuluu = _closure1_slot5;
                michal = zuuluu.can;
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                report = 4;
                oscard = oscard[report];
                report = undefined;
                golfie = golfie.bind(report)(oscard);
                oscard = golfie.combine;
                entity = _closure1_slot6;
                report = entity.SEND_MESSAGES;
                entity = entity.VIEW_CHANNEL;
                entity = oscard.bind(golfie)(report, entity);
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.length;
 106:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();