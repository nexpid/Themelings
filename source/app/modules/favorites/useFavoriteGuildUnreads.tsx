// app/modules/favorites/useFavoriteGuildUnreads.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/favorites/useFavoriteGuildUnreads.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFavoriteGuildUnreads
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        oscard = _closure1_slot3;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = _closure1_slot5;
        michal[1] = oscard;
        oscard = _closure1_slot6;
        michal[2] = oscard;
        report = _closure1_slot4;
        michal[3] = report;
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.keys;
            entity = _closure2_slot0;
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    golfie = argBar;
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.getChannel;
                    verify = michal.bind(zuuluu)(golfie);
                    option = null;
                    michal = option == verify;
                    zuuluu = undefined;
                    if(michal) { _fun00002_ip = 44; continue _fun00001 }
 34:
                    michal = verify.isGuildVocal;
                    zuuluu = michal.bind(verify)();
 44:
                    report = entity.badge;
                    offset = _closure1_slot5;
                    michal = offset.getMentionCount;
                    michal = michal.bind(offset)(golfie);
                    michal = report + michal;
                    entity['badge'] = michal;
                    michal = entity.unread;
                    if(michal) { _fun00002_ip = 178; continue _fun00001 }
 84:
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00002_ip = 116; continue _fun00001 }
 90:
                    yankee = _closure1_slot4;
                    offset = yankee.can;
                    report = _closure1_slot7;
                    report = report.VIEW_CHANNEL;
                    zuuluu = offset.bind(yankee)(report, verify);
 116:
                    if(!zuuluu) { _fun00002_ip = 134; continue _fun00001 }
 119:
                    offset = _closure1_slot5;
                    report = offset.hasUnread;
                    zuuluu = report.bind(offset)(golfie);
 134:
                    if(!zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 137:
                    report = _closure1_slot6;
                    tangon = report.isChannelMuted;
                    option = option == verify;
                    oscard = undefined;
                    if(option) { _fun00002_ip = 166; continue _fun00001 }
 156:
                    option = verify.getGuildId;
                    oscard = option.bind(verify)();
 166:
                    tangon = tangon.bind(report)(oscard, golfie);
                    zuuluu = !tangon;
 175:
                    michal = zuuluu;
 178:
                    entity['unread'] = michal;
                    return entity;
                }
            };
            entity = {'badge': 0, 'unread': false};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();