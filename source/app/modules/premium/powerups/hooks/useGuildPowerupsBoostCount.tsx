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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildPowerupsBoostCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = 3;
            zuuluu = zuuluu[golfie];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            oscard = option.useStateFromStores;
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
            zuuluu = oscard.bind(option)(tangon, zuuluu);
            tangon = null;
            tangon = tangon != zuuluu;
            oscard = 0;
            if(!tangon) { _fun00002_ip = 76; continue _fun00001 }
 73:
            oscard = zuuluu;
 76:
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            golfie = tangon.bind(report)(zuuluu);
            report = golfie.useStateFromStores;
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
            report = report.bind(golfie)(tangon, zuuluu);
            var _closure2_slot2 = report;
            tangon = _closure1_slot2;
            zuuluu = tangon.useMemo;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 73; continue _fun00007 }
 13:
                    entity = {};
                    michal = global;
                    oscard = michal.Math;
                    report = oscard.max;
                    tangon = _closure2_slot1;
                    michal = _closure2_slot2;
                    tangon = tangon - michal;
                    michal = 0;
                    michal = report.bind(oscard)(michal, tangon);
                    entity['available'] = michal;
                    michal = _closure2_slot2;
                    entity['spent'] = michal;
                    michal = _closure2_slot1;
                    entity['total'] = michal;
                    _fun00008_ip = 99; continue _fun00007;
 73:
                    michal = {'available': 0, 'spent': 0};
                    zuuluu = _closure2_slot1;
                    michal['total'] = zuuluu;
                    entity = michal;
 99:
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
            oscard = argFoo;
            michal = _closure1_slot3;
            entity = michal.getGuild;
            zuuluu = entity.bind(michal)(oscard);
            entity = null;
            golfie = entity == zuuluu;
            report = undefined;
            if(golfie) { _fun00010_ip = 37; continue _fun00009 }
 31:
            report = zuuluu.premiumSubscriberCount;
 37:
            option = entity != report;
            golfie = 0;
            zuuluu = 0;
            if(!option) { _fun00010_ip = 51; continue _fun00009 }
 48:
            zuuluu = report;
 51:
            report = _closure1_slot4;
            tangon = report.getStateForGuild;
            tangon = tangon.bind(report)(oscard);
            report = entity == tangon;
            michal = undefined;
            if(report) { _fun00010_ip = 81; continue _fun00009 }
 75:
            michal = tangon.appliedBoosts;
 81:
            if(!(entity != michal)) { _fun00010_ip = 127; continue _fun00009 }
 85:
            entity = {};
            tangon = global;
            oscard = tangon.Math;
            report = oscard.max;
            tangon = zuuluu - michal;
            tangon = report.bind(oscard)(golfie, tangon);
            entity['available'] = tangon;
            entity['spent'] = michal;
            entity['total'] = zuuluu;
            _fun00010_ip = 149; continue _fun00009;
 127:
            michal = {'available': 0, 'spend': 0};
            michal['total'] = zuuluu;
            entity = michal;
 149:
            return entity;
        }
    };
    zuuluu['getGuildPowerupsBoostCount'] = michal;
    return entity;
})();