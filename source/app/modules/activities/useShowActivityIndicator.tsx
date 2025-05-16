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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useEffect;
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useShowActivityIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.surface;
            golfie = entity.skipFetchingShelf;
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            golfie = true;
 25:
            var _closure2_slot0 = golfie;
            var _closure2_slot1 = oscard;
            report = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            entity = option[entity];
            verify = report.bind(oscard)(entity);
            option = verify.useStateFromStores;
            entity = _closure1_slot3;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = option.bind(verify)(report, entity);
            _closure2_slot1 = entity;
            report = _closure1_slot2;
            option = entity.lastCheckedForBadgeableActivities;
            tangon = new Array(2);
            tangon[0] = option;
            tangon[1] = golfie;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
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
                    michal = _closure2_slot0;
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
            michal = report.bind(oscard)(michal, tangon);
            michal = entity.surfacesToShowNewActivityIndicator;
            entity = michal.has;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['useShowActivityIndicator'] = michal;
    return entity;
})();