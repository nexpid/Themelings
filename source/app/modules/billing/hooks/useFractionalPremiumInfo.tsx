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
    tangon = function(argFoo) { // Original name: calculateFractionalPremiumInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            foxtra = michal.isFetching;
            oscard = undefined;
            if(!(foxtra === oscard)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            foxtra = false;
 19:
            offset = michal.entitlements;
            option = michal.unactivatedFractionalPremiumUnits;
            yankee = michal.currentUser;
            entity = michal.premiumSubscription;
            golfie = michal.fetchedAllEntitlements;
            michal = {};
            zuuluu = false;
            michal['isFractionalPremiumActive'] = zuuluu;
            verify = _closure1_slot10;
            verify = verify.NONE;
            michal['fractionalState'] = verify;
            kiloes = _closure1_slot1;
            verify = _closure1_slot2;
            backup = 7;
            romeon = verify[backup];
            sizing = kiloes.bind(oscard)(romeon);
            romeon = 0;
            sizing = sizing.bind(oscard)(romeon);
            michal['startsAt'] = sizing;
            verify = verify[backup];
            verify = kiloes.bind(oscard)(verify);
            verify = verify.bind(oscard)(romeon);
            michal['endsAt'] = verify;
            verify = '';
            michal['currentEntitlementId'] = verify;
            kiloes = new Array(0);
            michal['unactivatedUnits'] = kiloes;
            michal['fetched'] = golfie;
            if(foxtra) { _fun00002_ip = 658; continue _fun00001 }
 156:
            sizing = null;
            if(!(sizing != yankee)) { _fun00002_ip = 656; continue _fun00001 }
 165:
            yankee = offset.length;
            if(!(romeon === yankee)) { _fun00002_ip = 186; continue _fun00001 }
 174:
            yankee = option.length;
            if(!(romeon !== yankee)) { _fun00002_ip = 656; continue _fun00001 }
 186:
            foxtra = offset.filter;
            yankee = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = michal.endsAt;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00004_ip = 28; continue _fun00003 }
 18:
                    michal = michal.startsAt;
                    entity = zuuluu != michal;
 28:
                    return entity;
                }
            };
            kiloes = foxtra.bind(offset)(yankee);
            foxtra = kiloes.sort;
            yankee = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 8;
                    entity = report[entity];
                    oscard = undefined;
                    report = tangon.bind(oscard)(entity);
                    entity = zuuluu.endsAt;
                    golfie = null;
                    tangon = golfie != entity;
                    if(!tangon) { _fun00006_ip = 56; continue _fun00005 }
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
                    if(tangon) { _fun00006_ip = 120; continue _fun00005 }
 93:
                    zuuluu = zuuluu.endsAt;
                    michal = michal.endsAt;
                    zuuluu = zuuluu > michal;
                    michal = 0;
                    if(!zuuluu) { _fun00006_ip = 117; continue _fun00005 }
 114:
                    michal = 1;
 117:
                    entity = michal;
 120:
                    return entity;
                }
            };
            yankee = foxtra.bind(kiloes)(yankee);
            foxtra = yankee.reverse;
            foxtra = foxtra.bind(yankee)();
            foxtra = yankee.length;
            if(!(foxtra > romeon)) { _fun00002_ip = 287; continue _fun00001 }
 236:
            kiloes = yankee.length;
            foxtra = offset.length;
            if(!(kiloes === foxtra)) { _fun00002_ip = 529; continue _fun00001 }
 253:
            foxtra = yankee[romeon];
            foxtra = foxtra.startsAt;
            if(!(sizing != foxtra)) { _fun00002_ip = 529; continue _fun00001 }
 270:
            foxtra = yankee[romeon];
            foxtra = foxtra.endsAt;
            if(!(sizing != foxtra)) { _fun00002_ip = 529; continue _fun00001 }
 287:
            foxtra = yankee.length;
            foxtra = foxtra > romeon;
            kiloes = _closure1_slot10;
            kiloes = kiloes.NONE;
            if(!foxtra) { _fun00002_ip = 357; continue _fun00001 }
 309:
            if(!(sizing != entity)) { _fun00002_ip = 332; continue _fun00001 }
 313:
            sizing = entity.status;
            entity = _closure1_slot9;
            entity = entity.PAUSED;
            if(!(sizing !== entity)) { _fun00002_ip = 344; continue _fun00001 }
 332:
            entity = _closure1_slot10;
            entity = entity.FP_ONLY;
            _fun00002_ip = 354; continue _fun00001;
 344:
            sizing = _closure1_slot10;
            entity = sizing.FP_SUB_PAUSED;
 354:
            kiloes = entity;
 357:
            entity = {};
            entity['isFractionalPremiumActive'] = foxtra;
            entity['fractionalState'] = kiloes;
            sizing = _closure1_slot1;
            kiloes = _closure1_slot2;
            kiloes = kiloes[backup];
            output = sizing.bind(oscard)(kiloes);
            if(foxtra) { _fun00002_ip = 396; continue _fun00001 }
 389:
            kiloes = output.bind(oscard)(romeon);
            _fun00002_ip = 411; continue _fun00001;
 396:
            sizing = yankee[romeon];
            sizing = sizing.startsAt;
            kiloes = output.bind(oscard)(sizing);
 411:
            entity['startsAt'] = kiloes;
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            backup = output[backup];
            kiloes = kiloes.bind(oscard)(backup);
            if(foxtra) { _fun00002_ip = 443; continue _fun00001 }
 436:
            foxtra = kiloes.bind(oscard)(romeon);
            _fun00002_ip = 486; continue _fun00001;
 443:
            sizing = _closure1_slot0;
            backup = 10;
            backup = output[backup];
            output = sizing.bind(oscard)(backup);
            sizing = output.extendDateWithUnconsumedFractionalPremium;
            backup = yankee[romeon];
            backup = backup.endsAt;
            backup = sizing.bind(output)(backup, option);
            foxtra = kiloes.bind(oscard)(backup);
 486:
            entity['endsAt'] = foxtra;
            foxtra = yankee.length;
            foxtra = foxtra > romeon;
            if(!foxtra) { _fun00002_ip = 512; continue _fun00001 }
 503:
            yankee = yankee[romeon];
            verify = yankee.id;
 512:
            entity['currentEntitlementId'] = verify;
            entity['unactivatedUnits'] = option;
            entity['fetched'] = golfie;
            return entity;
 529:
            entity = global;
            verify = entity.Array;
            option = verify.from;
            golfie = offset.values;
            golfie = golfie.bind(offset)();
            option = option.bind(verify)(golfie);
            golfie = option.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            option = golfie.bind(option)(report);
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 9;
            tangon = golfie[tangon];
            golfie = report.bind(oscard)(tangon);
            oscard = golfie.captureBillingMessage;
            tangon = {};
            report = {};
            report['entitlementIds'] = option;
            tangon['extra'] = report;
            report = 'fractional redemption entitlements should have startsAt/endsAt';
            tangon = oscard.bind(golfie)(report, tangon);
            entity = entity.Error;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            update = tangon;
            echoed = report;
            entity = new update[entity](echoed, result);
            entity = entity instanceof Object ? entity : tangon;
            throw entity;
 656:
            return michal;
 658:
            entity = {};
            echoed = entity;
            result = michal;
            michal = copyDataProperties(echoed, result);
            michal = 'fetched';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/billing/hooks/useFractionalPremiumInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useFractionalPremiumInfo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = arguments[0];
            yankee = undefined;
            if(!(entity === yankee)) { _fun00008_ip = 25; continue _fun00007 }
 11:
            entity = {'forceFetch': false, 'excludeReverseTrial': false};
 25:
            tangon = entity.forceFetch;
            entity = entity.excludeReverseTrial;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = yankee;
            var _closure2_slot2 = yankee;
            var _closure2_slot3 = yankee;
            var _closure2_slot4 = yankee;
            var _closure2_slot5 = yankee;
            var _closure2_slot6 = yankee;
            var _closure2_slot7 = yankee;
            report = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            oscard = option[entity];
            offset = report.bind(yankee)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = verify.bind(offset)(golfie, oscard);
            _closure2_slot1 = offset;
            oscard = option[entity];
            foxtra = report.bind(yankee)(oscard);
            romeon = foxtra.useStateFromStoresArray;
            golfie = _closure1_slot7;
            verify = new Array(1);
            verify[0] = golfie;
            oscard = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getFractionalPremium;
                entity = {};
                tangon = _closure2_slot0;
                entity['excludeReverseTrial'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = romeon.bind(foxtra)(verify, oscard);
            _closure2_slot2 = verify;
            oscard = option[entity];
            backup = report.bind(yankee)(oscard);
            foxtra = backup.useStateFromStores;
            romeon = new Array(1);
            romeon[0] = golfie;
            oscard = function() {
                entity = _closure1_slot7;
                entity = entity.fetchedAllEntitlements;
                return entity;
            };
            oscard = foxtra.bind(backup)(romeon, oscard);
            _closure2_slot3 = oscard;
            romeon = option[entity];
            backup = report.bind(yankee)(romeon);
            foxtra = backup.useStateFromStoresArray;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                michal = _closure1_slot7;
                entity = michal.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = foxtra.bind(backup)(romeon, golfie);
            _closure2_slot4 = golfie;
            entity = option[entity];
            romeon = report.bind(yankee)(entity);
            option = romeon.useStateFromStores;
            entity = _closure1_slot6;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            option = option.bind(romeon)(report, entity);
            _closure2_slot5 = option;
            entity = null;
            foxtra = entity !== offset;
            if(!foxtra) { _fun00008_ip = 304; continue _fun00007 }
 291:
            entity = _closure1_slot7;
            entity = entity.fetchingAllEntitlements;
            foxtra = !entity;
 304:
            if(!foxtra) { _fun00008_ip = 329; continue _fun00007 }
 307:
            entity = _closure1_slot7;
            entity = entity.fetchedAllEntitlements;
            entity = !entity;
            if(entity) { _fun00008_ip = 326; continue _fun00007 }
 323:
            entity = tangon;
 326:
            foxtra = entity;
 329:
            _closure2_slot6 = foxtra;
            report = _closure1_slot4;
            tangon = report.useState;
            romeon = _closure1_slot11;
            entity = {};
            if(foxtra) { _fun00008_ip = 361; continue _fun00007 }
 351:
            backup = _closure1_slot7;
            foxtra = backup.fetchingAllEntitlements;
 361:
            entity['isFetching'] = foxtra;
            entity['entitlements'] = verify;
            entity['unactivatedFractionalPremiumUnits'] = golfie;
            entity['currentUser'] = offset;
            entity['premiumSubscription'] = option;
            entity['fetchedAllEntitlements'] = oscard;
            entity = romeon.bind(yankee)(entity);
            report = tangon.bind(report)(entity);
            tangon = _closure1_slot3;
            entity = 2;
            report = tangon.bind(yankee)(report, entity);
            entity = 0;
            entity = report[entity];
            tangon = 1;
            tangon = report[tangon];
            _closure2_slot7 = tangon;
            report = _closure1_slot1;
            romeon = _closure1_slot2;
            tangon = 12;
            tangon = romeon[tangon];
            report = report.bind(yankee)(tangon);
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot6;
                    if(!entity) { _fun00010_ip = 63; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchUserEntitlements;
                    entity = {};
                    tangon = _closure1_slot8;
                    tangon = tangon.FRACTIONAL_REDEMPTION;
                    entity['entitlementType'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(yankee)(tangon);
            report = _closure1_slot4;
            tangon = report.useEffect;
            zuuluu = new Array(5);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            zuuluu[2] = option;
            zuuluu[3] = golfie;
            zuuluu[4] = oscard;
            michal = function() {
                report = _closure1_slot11;
                tangon = {};
                entity = _closure2_slot2;
                tangon['entitlements'] = entity;
                entity = _closure2_slot4;
                tangon['unactivatedFractionalPremiumUnits'] = entity;
                entity = _closure2_slot1;
                tangon['currentUser'] = entity;
                entity = _closure2_slot5;
                tangon['premiumSubscription'] = entity;
                entity = _closure2_slot3;
                tangon['fetchedAllEntitlements'] = entity;
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                var _closure3_slot0 = tangon;
                zuuluu = _closure2_slot7;
                michal = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 14;
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
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();