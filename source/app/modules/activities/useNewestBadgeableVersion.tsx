// app/modules/activities/useNewestBadgeableVersion.tsx
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.useEffect;
    var _closure1_slot2 = golfie;
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useNewestBadgeableVersion.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = michal.surface;
            var _closure2_slot0 = report;
            zuuluu = michal.skipFetchingShelf;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00002_ip = 31; continue _fun00001 }
 29:
            zuuluu = true;
 31:
            var _closure2_slot1 = zuuluu;
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            oscard = 2;
            oscard = option[oscard];
            verify = golfie.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot4;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = option.bind(verify)(golfie, oscard);
            _closure2_slot2 = oscard;
            option = _closure1_slot2;
            verify = oscard.lastCheckedForBadgeableActivities;
            golfie = new Array(2);
            golfie[0] = verify;
            golfie[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    golfie = entity.lastCheckedForBadgeableActivities;
                    tangon = null;
                    entity = tangon == golfie;
                    if(entity) { _fun00004_ip = 92; continue _fun00003 }
 22:
                    zuuluu = global;
                    report = zuuluu.Date;
                    oscard = report.prototype;
                    oscard = Object.create(oscard, {constructor: {value: report}});
                    verify = oscard;
                    option = golfie;
                    report = new verify[report](option, golfie);
                    oscard = report instanceof Object ? report : oscard;
                    report = oscard.getTime;
                    report = report.bind(oscard)();
                    oscard = zuuluu.Date;
                    zuuluu = oscard.now;
                    oscard = zuuluu.bind(oscard)();
                    zuuluu = 43200000;
                    zuuluu = oscard - zuuluu;
                    entity = report < zuuluu;
 92:
                    if(!entity) { _fun00004_ip = 102; continue _fun00003 }
 95:
                    michal = _closure2_slot1;
                    entity = !michal;
 102:
                    if(!entity) { _fun00004_ip = 147; continue _fun00003 }
 105:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchShelf;
                    entity = {};
                    entity['guildId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = option.bind(tangon)(zuuluu, golfie);
            zuuluu = _closure1_slot3;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getNewestBadgeableVersion;
                entity = {};
                report = _closure2_slot2;
                entity['storeState'] = report;
                tangon = _closure2_slot0;
                entity['surface'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useNewestBadgeableVersion'] = michal;
    return entity;
})();