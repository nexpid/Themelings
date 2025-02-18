// app/modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argCor;
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
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = {};
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGuildRoleMemberCounts
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = golfie;
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            oscard = 0;
 20:
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            entity = 2;
            entity = option[entity];
            option = tangon.bind(report)(entity);
            report = option.useStateFromStores;
            entity = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getRoleMemberCount;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = report.bind(option)(tangon, entity);
            report = _closure1_slot3;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00004_ip = 145; continue _fun00003 }
 16:
                    report = _closure1_slot5;
                    tangon = _closure2_slot0;
                    report = report[tangon];
                    zuuluu = zuuluu != report;
                    if(!zuuluu) { _fun00004_ip = 48; continue _fun00003 }
 38:
                    oscard = _closure2_slot1;
                    tangon = 0;
                    zuuluu = oscard > tangon;
 48:
                    if(!zuuluu) { _fun00004_ip = 80; continue _fun00003 }
 51:
                    tangon = global;
                    oscard = tangon.Date;
                    tangon = oscard.now;
                    tangon = tangon.bind(oscard)();
                    report = tangon - report;
                    tangon = _closure2_slot1;
                    zuuluu = report < tangon;
 80:
                    if(zuuluu) { _fun00004_ip = 145; continue _fun00003 }
 83:
                    tangon = _closure1_slot5;
                    zuuluu = _closure2_slot0;
                    michal = global;
                    report = michal.Date;
                    michal = report.now;
                    michal = michal.bind(report)();
                    tangon[zuuluu] = michal;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.fetchMemberCounts;
                    entity = entity.bind(michal)(zuuluu);
 145:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();