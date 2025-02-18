// app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot6 = tangon;
    tangon = new Array(0);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useActiveGuildSubscriptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            entity = {};
 13:
            option = entity.ensureFresh;
            if(!(option === report)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            option = false;
 25:
            var _closure2_slot0 = option;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 3;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            tangon = entity.bind(report)();
            entity = _closure1_slot6;
            entity = entity.SUBSCRIBED;
            golfie = tangon === entity;
            _closure2_slot1 = golfie;
            tangon = _closure1_slot0;
            entity = 4;
            entity = oscard[entity];
            oscard = tangon.bind(report)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot5;
                entity = michal.getActiveGuildSubscriptions;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = report.bind(oscard)(tangon, entity);
            oscard = _closure1_slot4;
            report = oscard.useRef;
            tangon = false;
            tangon = report.bind(oscard)(tangon);
            _closure2_slot2 = tangon;
            report = oscard.useEffect;
            tangon = new Array(2);
            tangon[0] = option;
            tangon[1] = golfie;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot0;
                    entity['ensureFresh'] = michal;
                    michal = _closure2_slot1;
                    entity['hasRoleSubscriptions'] = michal;
                    michal = _closure2_slot2;
                    michal = michal.current;
                    entity['hasFetched'] = michal;
                    oscard = entity.ensureFresh;
                    report = entity.hasFetched;
                    tangon = entity.hasRoleSubscriptions;
                    golfie = _closure1_slot5;
                    entity = golfie.getActiveGuildSubscriptions;
                    option = entity.bind(golfie)();
                    golfie = null;
                    offset = golfie == option;
                    entity = undefined;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 90; continue _fun00003 }
 85:
                    verify = option.length;
 90:
                    offset = golfie != verify;
                    option = 0;
                    golfie = 0;
                    if(!offset) { _fun00004_ip = 104; continue _fun00003 }
 101:
                    golfie = verify;
 104:
                    golfie = option !== golfie;
                    if(golfie) { _fun00004_ip = 114; continue _fun00003 }
 111:
                    golfie = !tangon;
 114:
                    tangon = !golfie;
                    if(!golfie) { _fun00004_ip = 132; continue _fun00003 }
 120:
                    oscard = !oscard;
                    if(oscard) { _fun00004_ip = 129; continue _fun00003 }
 126:
                    oscard = report;
 129:
                    tangon = !oscard;
 132:
                    if(tangon) { _fun00004_ip = 161; continue _fun00003 }
 135:
                    report = !report;
                    if(!report) { _fun00004_ip = 158; continue _fun00003 }
 141:
                    golfie = _closure1_slot5;
                    oscard = golfie.hasFetchedSubscriptions;
                    oscard = oscard.bind(golfie)();
                    report = !oscard;
 158:
                    tangon = report;
 161:
                    if(!tangon) { _fun00004_ip = 206; continue _fun00003 }
 164:
                    tangon = _closure2_slot2;
                    zuuluu = true;
                    tangon['current'] = zuuluu;
                    zuuluu = _closure1_slot2;
                    tangon = _closure1_slot3;
                    michal = 5;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchSubscriptions;
                    michal = michal.bind(zuuluu)();
 206:
                    return entity;
                }
            };
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 188; continue _fun00001 }
 184:
            entity = _closure1_slot7;
 188:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();