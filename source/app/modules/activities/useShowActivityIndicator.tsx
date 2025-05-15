// app/modules/activities/useShowActivityIndicator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useShowActivityIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.surface;
            var _closure2_slot0 = zuuluu;
            michal = michal.skipFetchingShelf;
            report = undefined;
            if(!(michal === report)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            michal = true;
 29:
            var _closure2_slot1 = michal;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            report = _closure1_slot2;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.getState;
                    michal = michal.bind(zuuluu)();
                    golfie = michal.lastCheckedForBadgeableActivities;
                    report = null;
                    michal = report == golfie;
                    if(michal) { _fun00004_ip = 102; continue _fun00003 }
 32:
                    zuuluu = global;
                    tangon = zuuluu.Date;
                    oscard = tangon.prototype;
                    oscard = Object.create(oscard, {constructor: {value: tangon}});
                    verify = oscard;
                    option = golfie;
                    tangon = new verify[tangon](option, golfie);
                    oscard = tangon instanceof Object ? tangon : oscard;
                    tangon = oscard.getTime;
                    tangon = tangon.bind(oscard)();
                    oscard = zuuluu.Date;
                    zuuluu = oscard.now;
                    oscard = zuuluu.bind(oscard)();
                    zuuluu = 43200000;
                    zuuluu = oscard - zuuluu;
                    michal = tangon < zuuluu;
 102:
                    if(!michal) { _fun00004_ip = 115; continue _fun00003 }
 105:
                    zuuluu = _closure2_slot1;
                    michal = !zuuluu;
 115:
                    if(!michal) { _fun00004_ip = 157; continue _fun00003 }
 118:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.fetchShelf;
                    michal = {};
                    michal['guildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 157:
                    michal = _closure1_slot2;
                    entity = michal.getState;
                    entity = entity.bind(michal)();
                    zuuluu = entity.surfacesToShowNewActivityIndicator;
                    michal = zuuluu.has;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useShowActivityIndicator'] = michal;
    return entity;
})();