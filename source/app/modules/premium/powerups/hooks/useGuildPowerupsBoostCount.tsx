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
            option = golfie.bind(option)(verify, oscard);
            var _closure2_slot1 = option;
            oscard = 4;
            zuuluu = zuuluu[oscard];
            verify = tangon.bind(report)(zuuluu);
            golfie = verify.useStateFromStores;
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
            zuuluu = golfie.bind(verify)(tangon, zuuluu);
            tangon = null;
            tangon = tangon != zuuluu;
            golfie = 0;
            if(!tangon) { _fun00002_ip = 112; continue _fun00001 }
 109:
            golfie = zuuluu;
 112:
            var _closure2_slot2 = golfie;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            oscard = tangon.bind(report)(zuuluu);
            report = oscard.useStateFromStoresObject;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    oscard = _closure1_slot4;
                    report = oscard.getStateForGuild;
                    tangon = _closure2_slot0;
                    report = report.bind(oscard)(tangon);
                    tangon = null;
                    oscard = tangon == report;
                    tangon = undefined;
                    if(oscard) { _fun00006_ip = 44; continue _fun00005 }
 38:
                    tangon = report.appliedBoosts;
 44:
                    entity['spent'] = tangon;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.hasFetchedUnlockedPowerups;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = !michal;
                    entity['loading'] = michal;
                    return entity;
                }
            };
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            report = zuuluu.spent;
            var _closure2_slot3 = report;
            oscard = zuuluu.loading;
            var _closure2_slot4 = oscard;
            tangon = _closure1_slot2;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
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
                    _fun00008_ip = 145; continue _fun00007;
 39:
                    michal = _closure2_slot4;
                    if(michal) { _fun00008_ip = 116; continue _fun00007 }
 46:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 116; continue _fun00007 }
 56:
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
                    _fun00008_ip = 142; continue _fun00007;
 116:
                    zuuluu = {'available': 0, 'spent': 0};
                    tangon = _closure2_slot2;
                    zuuluu['total'] = tangon;
                    michal = zuuluu;
 142:
                    entity = michal;
 145:
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
            verify = _closure1_slot4;
            oscard = verify.getStateForGuild;
            oscard = oscard.bind(verify)(golfie);
            verify = michal == oscard;
            zuuluu = undefined;
            if(verify) { _fun00010_ip = 119; continue _fun00009 }
 113:
            zuuluu = oscard.appliedBoosts;
 119:
            oscard = _closure1_slot4;
            report = oscard.hasFetchedUnlockedPowerups;
            report = report.bind(oscard)(golfie);
            report = !report;
            if(entity) { _fun00010_ip = 159; continue _fun00009 }
 140:
            entity = {};
            entity['available'] = tangon;
            entity['spend'] = option;
            entity['total'] = tangon;
            _fun00010_ip = 233; continue _fun00009;
 159:
            if(report) { _fun00010_ip = 208; continue _fun00009 }
 162:
            if(!(michal != zuuluu)) { _fun00010_ip = 208; continue _fun00009 }
 166:
            michal = {};
            report = global;
            golfie = report.Math;
            oscard = golfie.max;
            report = tangon - zuuluu;
            report = oscard.bind(golfie)(option, report);
            michal['available'] = report;
            michal['spent'] = zuuluu;
            michal['total'] = tangon;
            _fun00010_ip = 230; continue _fun00009;
 208:
            zuuluu = {'available': 0, 'spend': 0};
            zuuluu['total'] = tangon;
            michal = zuuluu;
 230:
            entity = michal;
 233:
            return entity;
        }
    };
    zuuluu['getGuildPowerupsBoostCount'] = michal;
    return entity;
})();