// app/modules/premium/hooks/usePremiumTrialOffer.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: useGetTrialOffer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            entity = verify[entity];
            golf = undefined;
            mike = options.bind(golf)(entity);
            entity = mike.useTrialOffer;
            mike = entity.bind(mike)(oscar);
            entity = global;
            report = entity.Object;
            tango = report.values;
            entity = 3;
            entity = verify[entity];
            entity = options.bind(golf)(entity);
            entity = entity.TrialIdToProductOfferId;
            entity = entity[oscar];
            oscar = tango.bind(report)(entity);
            report = argBaz;
            entity = null;
            if(!report) { _fun00002_ip = 120; continue _fun00001 }
 96:
            report = oscar.every;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            entity = null;
            if(!zulu) { _fun00002_ip = 120; continue _fun00001 }
 117:
            entity = mike;
 120:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot3 = golf;
    golf = tango.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot4 = golf;
    golf = tango.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = golf;
    golf = tango.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID;
    var _closure1_slot6 = golf;
    golf = tango.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot7 = golf;
    tango = tango.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: usePremiumTrialOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 4;
            mike = verify[mike];
            yankee = undefined;
            mike = options.bind(yankee)(mike);
            oscar = mike.GooglePlayPremiumTrialsExperiment;
            report = oscar.useExperiment;
            tango = {};
            mike = '1c1161_1';
            tango['location'] = mike;
            mike = {};
            romeo = false;
            mike['autoTrackExposure'] = romeo;
            golf = 5;
            offset = verify[golf];
            foxtrot = options.bind(yankee)(offset);
            offset = foxtrot.isIOS;
            offset = offset.bind(foxtrot)();
            mike['disable'] = offset;
            mike = report.bind(oscar)(tango, mike);
            offset = mike.enabled;
            mike = 6;
            mike = verify[mike];
            mike = options.bind(yankee)(mike);
            oscar = mike.IOSPremiumTrialsExperiment;
            report = oscar.useExperiment;
            tango = {};
            mike = '1c1161_2';
            tango['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = romeo;
            golf = verify[golf];
            options = options.bind(yankee)(golf);
            golf = options.isAndroid;
            golf = golf.bind(options)();
            mike['disable'] = golf;
            mike = report.bind(oscar)(tango, mike);
            mike = mike.enabled;
            if(offset) { _fun00004_ip = 181; continue _fun00003 }
 178:
            offset = mike;
 181:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 7;
            mike = report[mike];
            oscar = tango.bind(yankee)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot2;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                mike = _closure1_slot2;
                entity = mike.getOfferIds;
                entity = entity.bind(mike)();
                return entity;
            };
            verify = report.bind(oscar)(tango, mike);
            options = _closure1_slot9;
            mike = _closure1_slot7;
            golf = options.bind(yankee)(mike, verify, offset);
            mike = _closure1_slot3;
            oscar = options.bind(yankee)(mike, verify, offset);
            mike = _closure1_slot4;
            report = options.bind(yankee)(mike, verify, offset);
            mike = _closure1_slot5;
            tango = options.bind(yankee)(mike, verify, offset);
            mike = _closure1_slot6;
            mike = options.bind(yankee)(mike, verify, offset);
            zulu = _closure1_slot8;
            options = options.bind(yankee)(zulu, verify, offset);
            zulu = new Array(6);
            zulu[0] = options;
            zulu[1] = golf;
            zulu[2] = oscar;
            zulu[3] = report;
            zulu[4] = tango;
            zulu[5] = mike;
            mike = zulu.find;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['usePremiumTrialOffer'] = mike;
    return entity;
})();