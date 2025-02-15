// app/modules/premium/PremiumSubscriptionTrialUtil.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = golf;
    golf = tango.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot6 = golf;
    golf = tango.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID;
    var _closure1_slot7 = golf;
    golf = tango.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = golf;
    tango = tango.PREMIUM_TRIAL_IDS_ALL;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/PremiumSubscriptionTrialUtil.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        _fun96254: for(var _fun96254_ip = 0; ; ) switch(_fun96254_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.useStateFromStores;
            mike = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot3;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = tango.bind(report)(zulu, mike);
            mike = null;
            tango = mike == zulu;
            if(tango) { _fun96254_ip = 72; continue _fun96254 }
 66:
            entity = zulu.trialId;
 72:
            entity = mike != entity;
            return entity;
        }
    };
    zulu['useHasActiveTrial'] = tango;
    tango = function() {
        _fun96256: for(var _fun96256_ip = 0; ; ) switch(_fun96256_ip) {
 0:
            mike = _closure1_slot3;
            entity = mike.getPremiumTypeSubscription;
            zulu = entity.bind(mike)();
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            if(tango) { _fun96256_ip = 34; continue _fun96256 }
 28:
            entity = zulu.trialId;
 34:
            entity = mike != entity;
            return entity;
        }
    };
    zulu['hasActiveTrial'] = tango;
    tango = function(argFoo) {
        _fun96257: for(var _fun96257_ip = 0; ; ) switch(_fun96257_ip) {
 0:
            tango = argFoo;
            mike = null;
            zulu = mike == tango;
            entity = undefined;
            if(zulu) { _fun96257_ip = 20; continue _fun96257 }
 14:
            entity = tango.trialId;
 20:
            entity = mike != entity;
            if(!entity) { _fun96257_ip = 98; continue _fun96257 }
 27:
            report = tango.trialId;
            mike = _closure1_slot5;
            mike = report === mike;
            if(mike) { _fun96257_ip = 61; continue _fun96257 }
 47:
            oscar = tango.trialId;
            report = _closure1_slot6;
            mike = oscar === report;
 61:
            if(mike) { _fun96257_ip = 78; continue _fun96257 }
 64:
            oscar = tango.trialId;
            report = _closure1_slot7;
            mike = oscar === report;
 78:
            if(mike) { _fun96257_ip = 95; continue _fun96257 }
 81:
            tango = tango.trialId;
            zulu = _closure1_slot8;
            mike = tango === zulu;
 95:
            entity = mike;
 98:
            return entity;
        }
    };
    zulu['isEligibleTrialSub'] = tango;
    tango = function() { // Original name: useCurrentPremiumTrialTier
        _fun96258: for(var _fun96258_ip = 0; ; ) switch(_fun96258_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 4;
            report = golf[tango];
            mike = undefined;
            offset = oscar.bind(mike)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot3;
            options = new Array(1);
            options[0] = report;
            report = function() {
                mike = _closure1_slot3;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            report = verify.bind(offset)(options, report);
            tango = golf[tango];
            oscar = oscar.bind(mike)(tango);
            tango = oscar.useStateFromStores;
            golf = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = tango.bind(oscar)(zulu, entity);
            tango = null;
            oscar = tango == report;
            entity = undefined;
            if(oscar) { _fun96258_ip = 113; continue _fun96258 }
 107:
            entity = report.trialId;
 113:
            report = tango != entity;
            entity = null;
            if(!report) { _fun96258_ip = 140; continue _fun96258 }
 122:
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun96258_ip = 137; continue _fun96258 }
 131:
            mike = zulu.premiumType;
 137:
            entity = mike;
 140:
            return entity;
        }
    };
    zulu['useCurrentPremiumTrialTier'] = tango;
    mike = function() { // Original name: getPremiumTrialOffer
        tango = _closure1_slot9;
        zulu = tango.map;
        mike = function(argFoo) {
            zulu = _closure1_slot4;
            mike = zulu.getUserTrialOffer;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun96263: for(var _fun96263_ip = 0; ; ) switch(_fun96263_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun96263_ip = 51; continue _fun96263 }
 12:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.hasUserTrialOfferExpired;
                mike = mike.bind(zulu)(tango);
                entity = !mike;
 51:
                return entity;
            }
        };
        mike = mike.bind(zulu)(entity);
        entity = mike.shift;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['getPremiumTrialOffer'] = mike;
    return entity;
})();