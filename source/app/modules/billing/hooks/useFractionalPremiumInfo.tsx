// app/modules/billing/hooks/useFractionalPremiumInfo.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: shouldFetchEntitlements
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            entity = argBar;
            entity = michal != entity;
            if(!entity) { _fun00002_ip = 31; continue _fun00001 }
 15:
            michal = _closure1_slot7;
            michal = michal.fetchingAllEntitlements;
            entity = !michal;
 31:
            if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 34:
            michal = _closure1_slot7;
            michal = michal.fetchedAllEntitlements;
            michal = !michal;
            if(michal) { _fun00002_ip = 56; continue _fun00001 }
 53:
            michal = zuuluu;
 56:
            entity = michal;
 59:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            romeon = michal.isFetching;
            oscard = undefined;
            if(!(romeon === oscard)) { _fun00004_ip = 19; continue _fun00003 }
 17:
            romeon = false;
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
            foxtra = _closure1_slot1;
            verify = _closure1_slot2;
            backup = 7;
            kiloes = verify[backup];
            sizing = foxtra.bind(oscard)(kiloes);
            kiloes = 0;
            sizing = sizing.bind(oscard)(kiloes);
            michal['startsAt'] = sizing;
            verify = verify[backup];
            verify = foxtra.bind(oscard)(verify);
            verify = verify.bind(oscard)(kiloes);
            michal['endsAt'] = verify;
            verify = '';
            michal['currentEntitlementId'] = verify;
            foxtra = new Array(0);
            michal['unactivatedUnits'] = foxtra;
            michal['fetched'] = golfie;
            if(romeon) { _fun00004_ip = 736; continue _fun00003 }
 162:
            romeon = null;
            if(!(romeon != yankee)) { _fun00004_ip = 734; continue _fun00003 }
 171:
            yankee = offset.length;
            if(!(kiloes === yankee)) { _fun00004_ip = 192; continue _fun00003 }
 180:
            yankee = option.length;
            if(!(kiloes !== yankee)) { _fun00004_ip = 734; continue _fun00003 }
 192:
            foxtra = offset.filter;
            yankee = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = michal.endsAt;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00006_ip = 28; continue _fun00005 }
 18:
                    michal = michal.startsAt;
                    entity = zuuluu != michal;
 28:
                    return entity;
                }
            };
            sizing = foxtra.bind(offset)(yankee);
            foxtra = sizing.sort;
            yankee = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
                    if(!tangon) { _fun00008_ip = 56; continue _fun00007 }
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
                    if(tangon) { _fun00008_ip = 120; continue _fun00007 }
 93:
                    zuuluu = zuuluu.endsAt;
                    michal = michal.endsAt;
                    zuuluu = zuuluu > michal;
                    michal = 0;
                    if(!zuuluu) { _fun00008_ip = 117; continue _fun00007 }
 114:
                    michal = 1;
 117:
                    entity = michal;
 120:
                    return entity;
                }
            };
            yankee = foxtra.bind(sizing)(yankee);
            foxtra = yankee.reverse;
            foxtra = foxtra.bind(yankee)();
            foxtra = yankee.length;
            if(!(foxtra > kiloes)) { _fun00004_ip = 293; continue _fun00003 }
 242:
            sizing = yankee.length;
            foxtra = offset.length;
            if(!(sizing === foxtra)) { _fun00004_ip = 607; continue _fun00003 }
 259:
            foxtra = yankee[kiloes];
            foxtra = foxtra.startsAt;
            if(!(romeon != foxtra)) { _fun00004_ip = 607; continue _fun00003 }
 276:
            foxtra = yankee[kiloes];
            foxtra = foxtra.endsAt;
            if(!(romeon != foxtra)) { _fun00004_ip = 607; continue _fun00003 }
 293:
            foxtra = yankee[kiloes];
            sizing = romeon != foxtra;
            yankee = null;
            if(!sizing) { _fun00004_ip = 309; continue _fun00003 }
 306:
            yankee = foxtra;
 309:
            foxtra = _closure1_slot11;
            foxtra = foxtra.NONE;
            if(!(romeon != yankee)) { _fun00004_ip = 371; continue _fun00003 }
 323:
            if(!(romeon != entity)) { _fun00004_ip = 346; continue _fun00003 }
 327:
            sizing = entity.status;
            entity = _closure1_slot10;
            entity = entity.PAUSED;
            if(!(sizing !== entity)) { _fun00004_ip = 358; continue _fun00003 }
 346:
            entity = _closure1_slot11;
            entity = entity.FP_ONLY;
            _fun00004_ip = 368; continue _fun00003;
 358:
            sizing = _closure1_slot11;
            entity = sizing.FP_SUB_PAUSED;
 368:
            foxtra = entity;
 371:
            if(!result) { _fun00004_ip = 403; continue _fun00003 }
 374:
            entity = romeon == yankee;
            sizing = undefined;
            if(entity) { _fun00004_ip = 389; continue _fun00003 }
 383:
            sizing = yankee.sourceType;
 389:
            entity = _closure1_slot8;
            entity = entity.REVERSE_TRIAL;
            result = sizing === entity;
 403:
            entity = {};
            sizing = romeon != yankee;
            entity['isFractionalPremiumActive'] = sizing;
            entity['fractionalState'] = foxtra;
            if(!(romeon == yankee)) { _fun00004_ip = 447; continue _fun00003 }
 423:
            sizing = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[backup];
            foxtra = sizing.bind(oscard)(foxtra);
            foxtra = foxtra.bind(oscard)(kiloes);
            _fun00004_ip = 475; continue _fun00003;
 447:
            output = _closure1_slot1;
            sizing = _closure1_slot2;
            sizing = sizing[backup];
            output = output.bind(oscard)(sizing);
            sizing = yankee.startsAt;
            foxtra = output.bind(oscard)(sizing);
 475:
            entity['startsAt'] = foxtra;
            if(!(romeon == yankee)) { _fun00004_ip = 508; continue _fun00003 }
 484:
            sizing = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[backup];
            foxtra = sizing.bind(oscard)(foxtra);
            foxtra = foxtra.bind(oscard)(kiloes);
            _fun00004_ip = 573; continue _fun00003;
 508:
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            backup = output[backup];
            kiloes = kiloes.bind(oscard)(backup);
            sizing = _closure1_slot0;
            backup = 10;
            backup = output[backup];
            output = sizing.bind(oscard)(backup);
            sizing = output.extendDateWithUnconsumedFractionalPremium;
            ctrled = yankee.endsAt;
            vacuum = output;
            source = option;
            update = undefined;
            echoed = result;
            backup = vacuum[sizing](ctrled, source, update, echoed, result);
            foxtra = kiloes.bind(oscard)(backup);
 573:
            entity['endsAt'] = foxtra;
            romeon = romeon != yankee;
            if(!romeon) { _fun00004_ip = 590; continue _fun00003 }
 585:
            verify = yankee.id;
 590:
            entity['currentEntitlementId'] = verify;
            entity['unactivatedUnits'] = option;
            entity['fetched'] = golfie;
            return entity;
 607:
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
 734:
            return michal;
 736:
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
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = arguments[0];
            romeon = undefined;
            if(!(entity === romeon)) { _fun00010_ip = 25; continue _fun00009 }
 11:
            entity = {'forceFetch': false, 'excludeReverseTrial': false, 'excludeReverseTrialFromCountdown': false};
 25:
            kiloes = entity.forceFetch;
            var _closure2_slot0 = kiloes;
            zuuluu = entity.excludeReverseTrial;
            var _closure2_slot1 = zuuluu;
            oscard = entity.excludeReverseTrialFromCountdown;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = romeon;
            var _closure2_slot4 = romeon;
            var _closure2_slot5 = romeon;
            var _closure2_slot6 = romeon;
            var _closure2_slot7 = romeon;
            var _closure2_slot8 = romeon;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 11;
            golfie = report[entity];
            offset = tangon.bind(romeon)(golfie);
            verify = offset.useStateFromStores;
            golfie = _closure1_slot5;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = verify.bind(offset)(option, golfie);
            _closure2_slot3 = yankee;
            golfie = report[entity];
            offset = tangon.bind(romeon)(golfie);
            verify = offset.useStateFromStoresArray;
            golfie = _closure1_slot7;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getFractionalPremium;
                entity = {};
                tangon = _closure2_slot1;
                entity['excludeReverseTrial'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = verify.bind(offset)(option, golfie);
            _closure2_slot4 = offset;
            golfie = report[entity];
            foxtra = tangon.bind(romeon)(golfie);
            verify = foxtra.useStateFromStores;
            golfie = _closure1_slot7;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                entity = _closure1_slot7;
                entity = entity.fetchedAllEntitlements;
                return entity;
            };
            golfie = verify.bind(foxtra)(option, golfie);
            _closure2_slot5 = golfie;
            option = report[entity];
            backup = tangon.bind(romeon)(option);
            foxtra = backup.useStateFromStoresArray;
            option = _closure1_slot7;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                michal = _closure1_slot7;
                entity = michal.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(michal)();
                return entity;
            };
            option = foxtra.bind(backup)(verify, option);
            _closure2_slot6 = option;
            entity = report[entity];
            verify = tangon.bind(romeon)(entity);
            report = verify.useStateFromStores;
            entity = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = report.bind(verify)(tangon, entity);
            _closure2_slot7 = verify;
            report = _closure1_slot4;
            tangon = report.useState;
            foxtra = _closure1_slot12;
            entity = {};
            backup = _closure1_slot13;
            backup = backup.bind(romeon)(kiloes, yankee);
            if(backup) { _fun00010_ip = 338; continue _fun00009 }
 328:
            kiloes = _closure1_slot7;
            backup = kiloes.fetchingAllEntitlements;
 338:
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
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot13;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    if(!michal) { _fun00012_ip = 77; continue _fun00011 }
 29:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 13;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.fetchUserEntitlements;
                    michal = {};
                    report = _closure1_slot9;
                    report = report.FRACTIONAL_REDEMPTION;
                    michal['entitlementType'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 77:
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
                entity = _closure2_slot4;
                tangon['entitlements'] = entity;
                entity = _closure2_slot6;
                tangon['unactivatedFractionalPremiumUnits'] = entity;
                entity = _closure2_slot3;
                tangon['currentUser'] = entity;
                entity = _closure2_slot7;
                tangon['premiumSubscription'] = entity;
                entity = _closure2_slot5;
                tangon['fetchedAllEntitlements'] = entity;
                entity = _closure2_slot2;
                tangon['excludeReverseTrialFromCountdown'] = entity;
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                var _closure3_slot0 = tangon;
                zuuluu = _closure2_slot8;
                michal = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
                        if(zuuluu) { _fun00014_ip = 54; continue _fun00013 }
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