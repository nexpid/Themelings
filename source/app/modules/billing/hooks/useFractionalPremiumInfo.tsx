// app/modules/billing/hooks/useFractionalPremiumInfo.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EntitlementTypes;
    var _closure1_slot8 = golfie;
    tangon = tangon.SubscriptionStatusTypes;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FractionalPremiumStates;
    var _closure1_slot10 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/billing/hooks/useFractionalPremiumInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useFractionalPremiumInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            yankee = undefined;
            if(!(entity === yankee)) { _fun00002_ip = 23; continue _fun00001 }
 11:
            zuuluu = {};
            tangon = false;
            zuuluu['forceFetch'] = tangon;
            entity = zuuluu;
 23:
            entity = entity.forceFetch;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = yankee;
            var _closure2_slot2 = yankee;
            var _closure2_slot3 = yankee;
            var _closure2_slot4 = yankee;
            var _closure2_slot5 = yankee;
            var _closure2_slot6 = yankee;
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 7;
            report = romeon[entity];
            option = tangon.bind(yankee)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = golfie.bind(option)(oscard, report);
            _closure2_slot1 = offset;
            report = romeon[entity];
            verify = tangon.bind(yankee)(report);
            option = verify.useStateFromStoresArray;
            report = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = report;
            oscard = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getFractionalPremium;
                entity = false;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = option.bind(verify)(golfie, oscard);
            _closure2_slot2 = verify;
            oscard = romeon[entity];
            foxtra = tangon.bind(yankee)(oscard);
            option = foxtra.useStateFromStores;
            golfie = new Array(1);
            golfie[0] = report;
            oscard = function() {
                entity = _closure1_slot7;
                entity = entity.fetchedAllEntitlements;
                return entity;
            };
            oscard = option.bind(foxtra)(golfie, oscard);
            _closure2_slot3 = oscard;
            golfie = romeon[entity];
            foxtra = tangon.bind(yankee)(golfie);
            option = foxtra.useStateFromStoresArray;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                michal = _closure1_slot7;
                entity = michal.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = option.bind(foxtra)(golfie, report);
            _closure2_slot4 = golfie;
            entity = romeon[entity];
            option = tangon.bind(yankee)(entity);
            report = option.useStateFromStores;
            entity = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            option = report.bind(option)(tangon, entity);
            _closure2_slot5 = option;
            report = _closure1_slot4;
            backup = report.useState;
            foxtra = {};
            entity = _closure1_slot10;
            entity = entity.NONE;
            foxtra['fractionalState'] = entity;
            tangon = _closure1_slot1;
            kiloes = 8;
            entity = romeon[kiloes];
            sizing = tangon.bind(yankee)(entity);
            entity = 0;
            sizing = sizing.bind(yankee)(entity);
            foxtra['startsAt'] = sizing;
            kiloes = romeon[kiloes];
            kiloes = tangon.bind(yankee)(kiloes);
            kiloes = kiloes.bind(yankee)(entity);
            foxtra['endsAt'] = kiloes;
            kiloes = '';
            foxtra['currentEntitlementId'] = kiloes;
            kiloes = new Array(0);
            foxtra['unactivatedUnits'] = kiloes;
            foxtra['fetched'] = oscard;
            backup = backup.bind(report)(foxtra);
            foxtra = _closure1_slot3;
            zuuluu = 2;
            foxtra = foxtra.bind(yankee)(backup, zuuluu);
            entity = foxtra[entity];
            zuuluu = 1;
            zuuluu = foxtra[zuuluu];
            _closure2_slot6 = zuuluu;
            zuuluu = 9;
            zuuluu = romeon[zuuluu];
            tangon = tangon.bind(yankee)(zuuluu);
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    entity = entity != zuuluu;
                    if(entity) { _fun00004_ip = 20; continue _fun00003 }
 16:
                    entity = _closure2_slot0;
 20:
                    if(!entity) { _fun00004_ip = 89; continue _fun00003 }
 23:
                    entity = _closure1_slot7;
                    entity = entity.fetchingAllEntitlements;
                    if(entity) { _fun00004_ip = 89; continue _fun00003 }
 39:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchUserEntitlements;
                    entity = {};
                    tangon = _closure1_slot8;
                    tangon = tangon.FRACTIONAL_REDEMPTION;
                    entity['entitlementType'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(yankee)(zuuluu);
            tangon = report.useEffect;
            zuuluu = new Array(5);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            zuuluu[2] = option;
            zuuluu[3] = golfie;
            zuuluu[4] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    report = null;
                    if(!(report != zuuluu)) { _fun00006_ip = 574; continue _fun00005 }
 18:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.length;
                    option = 0;
                    if(!(option === zuuluu)) { _fun00006_ip = 49; continue _fun00005 }
 33:
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu.length;
                    if(!(option !== zuuluu)) { _fun00006_ip = 574; continue _fun00005 }
 49:
                    oscard = _closure2_slot2;
                    tangon = oscard.filter;
                    zuuluu = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = argFoo;
                            entity = michal.endsAt;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            if(!entity) { _fun00008_ip = 28; continue _fun00007 }
 18:
                            michal = michal.startsAt;
                            entity = zuuluu != michal;
 28:
                            return entity;
                        }
                    };
                    oscard = tangon.bind(oscard)(zuuluu);
                    tangon = oscard.sort;
                    zuuluu = function(argFoo, argBar) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = argFoo;
                            michal = argBar;
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            entity = 12;
                            entity = report[entity];
                            oscard = undefined;
                            report = tangon.bind(oscard)(entity);
                            entity = zuuluu.endsAt;
                            golfie = null;
                            tangon = golfie != entity;
                            if(!tangon) { _fun00010_ip = 56; continue _fun00009 }
 46:
                            entity = michal.endsAt;
                            tangon = golfie != entity;
 56:
                            entity = 'endsAt should not be null';
                            entity = report.bind(oscard)(tangon, entity);
                            tangon = zuuluu.endsAt;
                            entity = michal.endsAt;
                            tangon = tangon < entity;
                            entity = -1;
                            if(tangon) { _fun00010_ip = 120; continue _fun00009 }
 93:
                            zuuluu = zuuluu.endsAt;
                            michal = michal.endsAt;
                            zuuluu = zuuluu > michal;
                            michal = 0;
                            if(!zuuluu) { _fun00010_ip = 117; continue _fun00009 }
 114:
                            michal = 1;
 117:
                            entity = michal;
 120:
                            return entity;
                        }
                    };
                    golfie = tangon.bind(oscard)(zuuluu);
                    zuuluu = golfie.reverse;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = golfie.length;
                    if(!(zuuluu > option)) { _fun00006_ip = 158; continue _fun00005 }
 103:
                    tangon = golfie.length;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.length;
                    if(!(tangon === zuuluu)) { _fun00006_ip = 438; continue _fun00005 }
 124:
                    zuuluu = golfie[option];
                    zuuluu = zuuluu.startsAt;
                    if(!(report != zuuluu)) { _fun00006_ip = 438; continue _fun00005 }
 141:
                    zuuluu = golfie[option];
                    zuuluu = zuuluu.endsAt;
                    if(!(report != zuuluu)) { _fun00006_ip = 438; continue _fun00005 }
 158:
                    zuuluu = golfie.length;
                    oscard = zuuluu > option;
                    tangon = _closure1_slot10;
                    if(oscard) { _fun00006_ip = 185; continue _fun00005 }
 177:
                    zuuluu = tangon.NONE;
                    _fun00006_ip = 191; continue _fun00005;
 185:
                    zuuluu = tangon.FP_ONLY;
 191:
                    tangon = _closure2_slot5;
                    tangon = report != tangon;
                    if(!tangon) { _fun00006_ip = 225; continue _fun00005 }
 202:
                    report = _closure2_slot5;
                    offset = report.status;
                    report = _closure1_slot9;
                    report = report.PAUSED;
                    tangon = offset === report;
 225:
                    if(!tangon) { _fun00006_ip = 238; continue _fun00005 }
 228:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.FP_SUB_PAUSED;
 238:
                    report = _closure2_slot6;
                    tangon = {};
                    tangon['fractionalState'] = zuuluu;
                    romeon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    offset = 8;
                    yankee = zuuluu[offset];
                    zuuluu = undefined;
                    foxtra = romeon.bind(zuuluu)(yankee);
                    if(oscard) { _fun00006_ip = 281; continue _fun00005 }
 274:
                    yankee = foxtra.bind(zuuluu)(option);
                    _fun00006_ip = 296; continue _fun00005;
 281:
                    romeon = golfie[option];
                    romeon = romeon.startsAt;
                    yankee = foxtra.bind(zuuluu)(romeon);
 296:
                    tangon['startsAt'] = yankee;
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    offset = romeon[offset];
                    offset = yankee.bind(zuuluu)(offset);
                    if(oscard) { _fun00006_ip = 328; continue _fun00005 }
 321:
                    oscard = offset.bind(zuuluu)(option);
                    _fun00006_ip = 375; continue _fun00005;
 328:
                    yankee = _closure1_slot0;
                    verify = 14;
                    verify = romeon[verify];
                    foxtra = yankee.bind(zuuluu)(verify);
                    romeon = foxtra.extendDateWithUnconsumedFractionalPremium;
                    verify = golfie[option];
                    yankee = verify.endsAt;
                    verify = _closure2_slot4;
                    verify = romeon.bind(foxtra)(yankee, verify);
                    oscard = offset.bind(zuuluu)(verify);
 375:
                    tangon['endsAt'] = oscard;
                    oscard = golfie.length;
                    verify = oscard > option;
                    oscard = '';
                    if(!verify) { _fun00006_ip = 405; continue _fun00005 }
 396:
                    golfie = golfie[option];
                    oscard = golfie.id;
 405:
                    tangon['currentEntitlementId'] = oscard;
                    oscard = _closure2_slot4;
                    tangon['unactivatedUnits'] = oscard;
                    oscard = _closure2_slot3;
                    tangon['fetched'] = oscard;
                    zuuluu = report.bind(zuuluu)(tangon);
                    _fun00006_ip = 692; continue _fun00005;
 438:
                    zuuluu = global;
                    oscard = zuuluu.Array;
                    report = oscard.from;
                    golfie = _closure2_slot2;
                    tangon = golfie.values;
                    tangon = tangon.bind(golfie)();
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.map;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    option = report.bind(oscard)(tangon);
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 13;
                    report = report[tangon];
                    tangon = undefined;
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.captureBillingMessage;
                    tangon = {};
                    report = {};
                    report['entitlementIds'] = option;
                    tangon['extra'] = report;
                    report = 'fractional redemption entitlements should have startsAt/endsAt';
                    tangon = oscard.bind(golfie)(report, tangon);
                    zuuluu = zuuluu.Error;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    sizing = tangon;
                    kiloes = report;
                    zuuluu = new sizing[zuuluu](kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 574:
                    tangon = {};
                    report = _closure1_slot10;
                    report = report.NONE;
                    tangon['fractionalState'] = report;
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 8;
                    oscard = option[report];
                    zuuluu = undefined;
                    verify = golfie.bind(zuuluu)(oscard);
                    oscard = 0;
                    verify = verify.bind(zuuluu)(oscard);
                    tangon['startsAt'] = verify;
                    report = option[report];
                    report = golfie.bind(zuuluu)(report);
                    report = report.bind(zuuluu)(oscard);
                    tangon['endsAt'] = report;
                    report = '';
                    tangon['currentEntitlementId'] = report;
                    report = new Array(0);
                    tangon['unactivatedUnits'] = report;
                    report = _closure2_slot3;
                    tangon['fetched'] = report;
                    var _closure3_slot0 = tangon;
                    michal = _closure2_slot6;
                    entity = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 11;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.isEqual;
                            zuuluu = _closure3_slot0;
                            zuuluu = tangon.bind(report)(entity, zuuluu);
                            if(zuuluu) { _fun00012_ip = 54; continue _fun00011 }
 50:
                            entity = _closure3_slot0;
 54:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 692:
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