// app/modules/premium/native/UserTrialOfferManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot10 = option;
    option = tangon.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot11 = option;
    option = tangon.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot12 = option;
    tangon = tangon.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot13 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: UserTrialOfferManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot4;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot14;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                tangon = function() { // Original name: POST_CONNECTION_OPEN
                    michal = _closure3_slot0;
                    entity = michal.handlePostConnectionOpen;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['POST_CONNECTION_OPEN'] = tangon;
                tangon = function(argFoo) { // Original name: BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTrialOfferFetchSuccess;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS'] = tangon;
                entity['actions'] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure1_slot8;
                        michal = zuuluu.getCurrentUser;
                        report = michal.bind(zuuluu)();
                        michal = null;
                        michal = michal != report;
                        if(!michal) { _fun00006_ip = 31; continue _fun00005 }
 25:
                        michal = report.verified;
 31:
                        if(!michal) { _fun00006_ip = 70; continue _fun00005 }
 34:
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 8;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        tangon = oscard.bind(zuuluu)(tangon);
                        zuuluu = tangon.isPremium;
                        zuuluu = zuuluu.bind(tangon)(report);
                        michal = !zuuluu;
 70:
                        if(!michal) { _fun00006_ip = 87; continue _fun00005 }
 73:
                        tangon = _closure1_slot9;
                        zuuluu = tangon.shouldFetchOffer;
                        michal = zuuluu.bind(tangon)();
 87:
                        if(!michal) { _fun00006_ip = 122; continue _fun00005 }
 90:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.fetchUserTrialOffer;
                        entity = entity.bind(michal)();
 122:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handlePostConnectionOpen'] = zuuluu;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        report = entity.userTrialOffer;
                        golfie = null;
                        if(!(golfie != report)) { _fun00008_ip = 237; continue _fun00007 }
 18:
                        entity = _closure1_slot10;
                        tangon = new Array(4);
                        tangon[0] = entity;
                        entity = _closure1_slot11;
                        tangon[1] = entity;
                        entity = _closure1_slot12;
                        tangon[2] = entity;
                        entity = _closure1_slot13;
                        tangon[3] = entity;
                        zuuluu = tangon.includes;
                        entity = report.trial_id;
                        entity = zuuluu.bind(tangon)(entity);
                        if(!entity) { _fun00008_ip = 237; continue _fun00007 }
 79:
                        tangon = report.trial_id;
                        zuuluu = _closure1_slot13;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        entity = 10;
                        entity = yankee[entity];
                        oscard = undefined;
                        verify = offset.bind(oscard)(entity);
                        option = verify.UNSAFE_isDismissibleContentDismissed;
                        entity = 11;
                        entity = yankee[entity];
                        entity = offset.bind(oscard)(entity);
                        entity = entity.DismissibleContent;
                        entity = entity.TRIAL_FOR_ALL_INITIAL_UPSELL;
                        entity = option.bind(verify)(entity);
                        report = report.expires_at;
                        if(!(golfie != report)) { _fun00008_ip = 165; continue _fun00007 }
 156:
                        if(!(tangon === zuuluu)) { _fun00008_ip = 163; continue _fun00007 }
 160:
                        if(!entity) { _fun00008_ip = 165; continue _fun00007 }
 163:
                        return oscard;
 165:
                        tangon = _closure1_slot1;
                        entity = _closure1_slot2;
                        zuuluu = 12;
                        zuuluu = entity[zuuluu];
                        tangon = tangon.bind(oscard)(zuuluu);
                        zuuluu = tangon.openLazy;
                        report = _closure1_slot0;
                        michal = 14;
                        michal = entity[michal];
                        report = report.bind(oscard)(michal);
                        michal = 13;
                        michal = entity[michal];
                        entity = entity.paths;
                        michal = report.bind(oscard)(michal, entity);
                        entity = 'PremiumTrialOfferActionSheet';
                        entity = zuuluu.bind(tangon)(michal, entity);
 237:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleTrialOfferFetchSuccess'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/UserTrialOfferManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();