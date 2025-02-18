// app/modules/guild_onboarding/DefaultChannelUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getDefaultPermissionsForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 40; continue _fun00001 }
 9:
            zuuluu = _closure1_slot5;
            tangon = zuuluu.GUILD_VOCAL;
            zuuluu = tangon.has;
            entity = entity.type;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00002_ip = 55; continue _fun00001 }
 40:
            entity = _closure1_slot6;
            entity = entity.VIEW_CHANNEL;
            _fun00002_ip = 109; continue _fun00001;
 55:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.combine;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.VIEW_CHANNEL;
            michal = _closure1_slot6;
            michal = michal.CONNECT;
            entity = tangon.bind(report)(zuuluu, michal);
 109:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypesSets;
    var _closure1_slot5 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/DefaultChannelUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useCanChannelBeDefault
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot4;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot4;
                zuuluu = tangon.getChannel;
                option = _closure2_slot1;
                report = zuuluu.bind(tangon)(option);
                zuuluu = _closure1_slot7;
                oscard = undefined;
                tangon = zuuluu.bind(oscard)(report);
                golfie = _closure1_slot3;
                zuuluu = golfie.isChannelGated;
                entity = _closure2_slot0;
                entity = zuuluu.bind(golfie)(entity, option);
                if(entity) { _fun00004_ip = 90; continue _fun00003 }
 58:
                zuuluu = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 5;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.canEveryoneRole;
                entity = michal.bind(zuuluu)(tangon, report);
 90:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCanChannelBeDefault'] = tangon;
    michal = function(argFoo, argBar) { // Original name: canChannelBeDefault
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argBar;
            zuuluu = _closure1_slot7;
            tangon = _closure1_slot4;
            entity = tangon.getChannel;
            entity = entity.bind(tangon)(golfie);
            oscard = undefined;
            report = zuuluu.bind(oscard)(entity);
            tangon = _closure1_slot3;
            zuuluu = tangon.isChannelGated;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, golfie);
            if(entity) { _fun00006_ip = 99; continue _fun00005 }
 53:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.canEveryoneRole;
            oscard = _closure1_slot4;
            michal = oscard.getChannel;
            michal = michal.bind(oscard)(golfie);
            entity = zuuluu.bind(tangon)(report, michal);
 99:
            return entity;
        }
    };
    zuuluu['canChannelBeDefault'] = michal;
    return entity;
})();