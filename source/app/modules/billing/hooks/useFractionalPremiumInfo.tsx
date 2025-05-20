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
    golfie = tangon.EntitlementSourceTypes;
    var _closure1_slot8 = golfie;
    golfie = tangon.EntitlementTypes;
    var _closure1_slot9 = golfie;
    tangon = tangon.SubscriptionStatusTypes;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FractionalPremiumStates;
    var _closure1_slot11 = tangon;
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
            result = michal.excludeReverseTrialFromCountdown;
            michal = {};
            zuuluu = false;
            michal['isFractionalPremiumActive'] = zuuluu;
            verify = _closure1_slot11;
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
            if(foxtra) { _fun00002_ip = 712; continue _fun00001 }
 162:
            sizing = null;
            if(!(sizing != yankee)) { _fun00002_ip = 710; continue _fun00001 }
 171:
            yankee = offset.length;
            if(!(romeon === yankee)) { _fun00002_ip = 192; continue _fun00001 }
 180:
            yankee = option.length;
            if(!(romeon !== yankee)) { _fun00002_ip = 710; continue _fun00001 }
 192:
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
            if(!(foxtra > romeon)) { _fun00002_ip = 293; continue _fun00001 }
 242:
            kiloes = yankee.length;
            foxtra = offset.length;
            if(!(kiloes === foxtra)) { _fun00002_ip = 583; continue _fun00001 }
 259:
            foxtra = yankee[romeon];
            foxtra = foxtra.startsAt;
            if(!(sizing != foxtra)) { _fun00002_ip = 583; continue _fun00001 }
 276:
            foxtra = yankee[romeon];
            foxtra = foxtra.endsAt;
            if(!(sizing != foxtra)) { _fun00002_ip = 583; continue _fun00001 }
 293:
            foxtra = yankee.length;
            foxtra = foxtra > romeon;
            kiloes = _closure1_slot11;
            kiloes = kiloes.NONE;
            if(!foxtra) { _fun00002_ip = 363; continue _fun00001 }
 315:
            if(!(sizing != entity)) { _fun00002_ip = 338; continue _fun00001 }
 319:
            sizing = entity.status;
            entity = _closure1_slot10;
            entity = entity.PAUSED;
            if(!(sizing !== entity)) { _fun00002_ip = 350; continue _fun00001 }
 338:
            entity = _closure1_slot11;
            entity = entity.FP_ONLY;
            _fun00002_ip = 360; continue _fun00001;
 350:
            sizing = _closure1_slot11;
            entity = sizing.FP_SUB_PAUSED;
 360:
            kiloes = entity;
 363:
            if(!result) { _fun00002_ip = 375; continue _fun00001 }
 366:
            entity = yankee.length;
            result = entity > romeon;
 375:
            if(!result) { _fun00002_ip = 402; continue _fun00001 }
 378:
            entity = yankee[romeon];
            sizing = entity.sourceType;
            entity = _closure1_slot8;
            entity = entity.REVERSE_TRIAL;
            result = sizing === entity;
 402:
            entity = {};
            entity['isFractionalPremiumActive'] = foxtra;
            entity['fractionalState'] = kiloes;
            sizing = _closure1_slot1;
            kiloes = _closure1_slot2;
            kiloes = kiloes[backup];
            output = sizing.bind(oscard)(kiloes);
            if(foxtra) { _fun00002_ip = 441; continue _fun00001 }
 434:
            kiloes = output.bind(oscard)(romeon);
            _fun00002_ip = 456; continue _fun00001;
 441:
            sizing = yankee[romeon];
            sizing = sizing.startsAt;
            kiloes = output.bind(oscard)(sizing);
 456:
            entity['startsAt'] = kiloes;
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            backup = output[backup];
            kiloes = kiloes.bind(oscard)(backup);
            if(foxtra) { _fun00002_ip = 488; continue _fun00001 }
 481:
            foxtra = kiloes.bind(oscard)(romeon);
            _fun00002_ip = 540; continue _fun00001;
 488:
            sizing = _closure1_slot0;
            backup = 10;
            backup = output[backup];
            output = sizing.bind(oscard)(backup);
            sizing = output.extendDateWithUnconsumedFractionalPremium;
            backup = yankee[romeon];
            ctrled = backup.endsAt;
            vacuum = output;
            source = option;
            update = undefined;
            echoed = result;
            backup = vacuum[sizing](ctrled, source, update, echoed, result);
            foxtra = kiloes.bind(oscard)(backup);
 540:
            entity['endsAt'] = foxtra;
            foxtra = yankee.length;
            foxtra = foxtra > romeon;
            if(!foxtra) { _fun00002_ip = 566; continue _fun00001 }
 557:
            yankee = yankee[romeon];
            verify = yankee.id;
 566:
            entity['currentEntitlementId'] = verify;
            entity['unactivatedUnits'] = option;
            entity['fetched'] = golfie;
            return entity;
 583:
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
            vacuum = tangon;
            ctrled = report;
            entity = new vacuum[entity](ctrled, source);
            entity = entity instanceof Object ? entity : tangon;
            throw entity;
 710:
            return michal;
 712:
            entity = {};
            ctrled = entity;
            source = michal;
            michal = copyDataProperties(ctrled, source);
            michal = 'fetched';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
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
            romeon = undefined;
            if(!(entity === romeon)) { _fun00008_ip = 21; continue _fun00007 }
 11:
            entity = {'forceFetch': false, 'excludeReverseTrial': false, 'excludeReverseTrialFromCountdown': false};
 21:
            tangon = entity.forceFetch;
            zuuluu = entity.excludeReverseTrial;
            var _closure2_slot0 = zuuluu;
            oscard = entity.excludeReverseTrialFromCountdown;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = romeon;
            var _closure2_slot3 = romeon;
            var _closure2_slot4 = romeon;
            var _closure2_slot5 = romeon;
            var _closure2_slot6 = romeon;
            var _closure2_slot7 = romeon;
            var _closure2_slot8 = romeon;
            report = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 11;
            golfie = verify[entity];
            yankee = report.bind(romeon)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot5;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = offset.bind(yankee)(option, golfie);
            _closure2_slot2 = yankee;
            golfie = verify[entity];
            backup = report.bind(romeon)(golfie);
            foxtra = backup.useStateFromStoresArray;
            option = _closure1_slot7;
            offset = new Array(1);
            offset[0] = option;
            golfie = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getFractionalPremium;
                entity = {};
                tangon = _closure2_slot0;
                entity['excludeReverseTrial'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = foxtra.bind(backup)(offset, golfie);
            _closure2_slot3 = offset;
            golfie = verify[entity];
            kiloes = report.bind(romeon)(golfie);
            backup = kiloes.useStateFromStores;
            foxtra = new Array(1);
            foxtra[0] = option;
            golfie = function() {
                entity = _closure1_slot7;
                entity = entity.fetchedAllEntitlements;
                return entity;
            };
            golfie = backup.bind(kiloes)(foxtra, golfie);
            _closure2_slot4 = golfie;
            foxtra = verify[entity];
            kiloes = report.bind(romeon)(foxtra);
            backup = kiloes.useStateFromStoresArray;
            foxtra = new Array(1);
            foxtra[0] = option;
            option = function() {
                michal = _closure1_slot7;
                entity = michal.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(michal)();
                return entity;
            };
            option = backup.bind(kiloes)(foxtra, option);
            _closure2_slot5 = option;
            entity = verify[entity];
            foxtra = report.bind(romeon)(entity);
            verify = foxtra.useStateFromStores;
            entity = _closure1_slot6;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = verify.bind(foxtra)(report, entity);
            _closure2_slot6 = verify;
            entity = null;
            backup = entity !== yankee;
            if(!backup) { _fun00008_ip = 310; continue _fun00007 }
 297:
            entity = _closure1_slot7;
            entity = entity.fetchingAllEntitlements;
            backup = !entity;
 310:
            if(!backup) { _fun00008_ip = 335; continue _fun00007 }
 313:
            entity = _closure1_slot7;
            entity = entity.fetchedAllEntitlements;
            entity = !entity;
            if(entity) { _fun00008_ip = 332; continue _fun00007 }
 329:
            entity = tangon;
 332:
            backup = entity;
 335:
            _closure2_slot7 = backup;
            report = _closure1_slot4;
            tangon = report.useState;
            foxtra = _closure1_slot12;
            entity = {};
            if(backup) { _fun00008_ip = 367; continue _fun00007 }
 357:
            kiloes = _closure1_slot7;
            backup = kiloes.fetchingAllEntitlements;
 367:
            entity['isFetching'] = backup;
            entity['entitlements'] = offset;
            entity['unactivatedFractionalPremiumUnits'] = option;
            entity['currentUser'] = yankee;
            entity['premiumSubscription'] = verify;
            entity['fetchedAllEntitlements'] = golfie;
            entity['excludeReverseTrialFromCountdown'] = oscard;
            entity = foxtra.bind(romeon)(entity);
            report = tangon.bind(report)(entity);
            tangon = _closure1_slot3;
            entity = 2;
            report = tangon.bind(romeon)(report, entity);
            entity = 0;
            entity = report[entity];
            tangon = 1;
            tangon = report[tangon];
            _closure2_slot8 = tangon;
            report = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = 12;
            tangon = foxtra[tangon];
            report = report.bind(romeon)(tangon);
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot7;
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
                    tangon = _closure1_slot9;
                    tangon = tangon.FRACTIONAL_REDEMPTION;
                    entity['entitlementType'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(romeon)(tangon);
            report = _closure1_slot4;
            tangon = report.useEffect;
            zuuluu = new Array(6);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = golfie;
            zuuluu[5] = oscard;
            michal = function() {
                report = _closure1_slot12;
                tangon = {};
                entity = _closure2_slot3;
                tangon['entitlements'] = entity;
                entity = _closure2_slot5;
                tangon['unactivatedFractionalPremiumUnits'] = entity;
                entity = _closure2_slot2;
                tangon['currentUser'] = entity;
                entity = _closure2_slot6;
                tangon['premiumSubscription'] = entity;
                entity = _closure2_slot4;
                tangon['fetchedAllEntitlements'] = entity;
                entity = _closure2_slot1;
                tangon['excludeReverseTrialFromCountdown'] = entity;
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                var _closure3_slot0 = tangon;
                zuuluu = _closure2_slot8;
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