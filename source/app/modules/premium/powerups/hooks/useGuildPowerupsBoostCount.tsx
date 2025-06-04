// app/modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildPowerupsBoostCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            report = 3;
            oscard = zuuluu[report];
            report = undefined;
            option = tangon.bind(report)(oscard);
            golfie = option.useGuildPowerupsExperimentEnabled;
            oscard = 'useGuildPowerupsBoostCount';
            golfie = golfie.bind(option)(verify, oscard);
            var _closure2_slot1 = golfie;
            option = 4;
            zuuluu = zuuluu[option];
            verify = tangon.bind(report)(zuuluu);
            oscard = verify.useStateFromStores;
            zuuluu = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 41; continue _fun00003 }
 35:
                    entity = michal.premiumSubscriberCount;
 41:
                    return entity;
                }
            };
            zuuluu = oscard.bind(verify)(tangon, zuuluu);
            tangon = null;
            tangon = tangon != zuuluu;
            oscard = 0;
            if(!tangon) { _fun00002_ip = 110; continue _fun00001 }
 107:
            oscard = zuuluu;
 110:
            var _closure2_slot2 = oscard;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[option];
            option = tangon.bind(report)(zuuluu);
            report = option.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getStateForGuild;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 42; continue _fun00005 }
 36:
                    entity = michal.appliedBoosts;
 42:
                    return entity;
                }
            };
            report = report.bind(option)(tangon, zuuluu);
            var _closure2_slot3 = report;
            tangon = _closure1_slot2;
            zuuluu = tangon.useMemo;
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = oscard;
            michal[2] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot1;
                    if(entity) { _fun00008_ip = 39; continue _fun00007 }
 10:
                    entity = {};
                    michal = _closure2_slot2;
                    entity['available'] = michal;
                    michal = 0;
                    entity['spent'] = michal;
                    michal = _closure2_slot2;
                    entity['total'] = michal;
                    _fun00008_ip = 138; continue _fun00007;
 39:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 109; continue _fun00007 }
 49:
                    michal = {};
                    zuuluu = global;
                    golfie = zuuluu.Math;
                    oscard = golfie.max;
                    report = _closure2_slot2;
                    zuuluu = _closure2_slot3;
                    report = report - zuuluu;
                    zuuluu = 0;
                    zuuluu = oscard.bind(golfie)(zuuluu, report);
                    michal['available'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    michal['spent'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    michal['total'] = zuuluu;
                    _fun00008_ip = 135; continue _fun00007;
 109:
                    zuuluu = {'available': 0, 'spent': 0};
                    tangon = _closure2_slot2;
                    zuuluu['total'] = tangon;
                    michal = zuuluu;
 135:
                    entity = michal;
 138:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildPowerupsBoostCount
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            entity = zuuluu[entity];
            zuuluu = undefined;
            tangon = michal.bind(zuuluu)(entity);
            michal = tangon.getGuildPowerupsExperimentEnabled;
            entity = 'getGuildPowerupsBoostCount';
            entity = michal.bind(tangon)(golfie, entity);
            tangon = _closure1_slot3;
            michal = tangon.getGuild;
            tangon = michal.bind(tangon)(golfie);
            michal = null;
            option = michal == tangon;
            oscard = undefined;
            if(option) { _fun00010_ip = 75; continue _fun00009 }
 69:
            oscard = tangon.premiumSubscriberCount;
 75:
            verify = michal != oscard;
            option = 0;
            tangon = 0;
            if(!verify) { _fun00010_ip = 89; continue _fun00009 }
 86:
            tangon = oscard;
 89:
            oscard = _closure1_slot4;
            report = oscard.getStateForGuild;
            report = report.bind(oscard)(golfie);
            oscard = michal == report;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 119; continue _fun00009 }
 113:
            zuuluu = report.appliedBoosts;
 119:
            if(entity) { _fun00010_ip = 141; continue _fun00009 }
 122:
            entity = {};
            entity['available'] = tangon;
            entity['spend'] = option;
            entity['total'] = tangon;
            _fun00010_ip = 208; continue _fun00009;
 141:
            if(!(michal != zuuluu)) { _fun00010_ip = 187; continue _fun00009 }
 145:
            michal = {};
            report = global;
            golfie = report.Math;
            oscard = golfie.max;
            report = tangon - zuuluu;
            report = oscard.bind(golfie)(option, report);
            michal['available'] = report;
            michal['spent'] = zuuluu;
            michal['total'] = tangon;
            _fun00010_ip = 205; continue _fun00009;
 187:
            zuuluu = {'available': 0, 'spend': 0};
            zuuluu['total'] = tangon;
            michal = zuuluu;
 205:
            entity = michal;
 208:
            return entity;
        }
    };
    zuuluu['getGuildPowerupsBoostCount'] = michal;
    return entity;
})();