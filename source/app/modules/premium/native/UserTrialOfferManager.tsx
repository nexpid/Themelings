// app/modules/premium/native/UserTrialOfferManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot10 = options;
    options = tango.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot11 = options;
    options = tango.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot12 = options;
    options = tango.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID;
    var _closure1_slot13 = options;
    tango = tango.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot14 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: UserTrialOfferManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot15;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handlePostConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            tango = function(argFoo) { // Original name: BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS
                zulu = _closure3_slot0;
                mike = zulu.handleTrialOfferFetchSuccess;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS'] = tango;
            entity['actions'] = zulu;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot8;
                    mike = zulu.getCurrentUser;
                    report = mike.bind(zulu)();
                    mike = null;
                    mike = mike != report;
                    if(!mike) { _fun00006_ip = 31; continue _fun00005 }
 25:
                    mike = report.verified;
 31:
                    if(!mike) { _fun00006_ip = 70; continue _fun00005 }
 34:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 8;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.isPremium;
                    zulu = zulu.bind(tango)(report);
                    mike = !zulu;
 70:
                    if(!mike) { _fun00006_ip = 87; continue _fun00005 }
 73:
                    tango = _closure1_slot9;
                    zulu = tango.shouldFetchOffer;
                    mike = zulu.bind(tango)();
 87:
                    if(!mike) { _fun00006_ip = 122; continue _fun00005 }
 90:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchUserTrialOffer;
                    entity = entity.bind(mike)();
 122:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handlePostConnectionOpen'] = zulu;
            mike = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    report = entity.userTrialOffer;
                    golf = null;
                    if(!(golf != report)) { _fun00008_ip = 426; continue _fun00007 }
 18:
                    entity = _closure1_slot10;
                    tango = new Array(5);
                    tango[0] = entity;
                    entity = _closure1_slot11;
                    tango[1] = entity;
                    entity = _closure1_slot12;
                    tango[2] = entity;
                    entity = _closure1_slot13;
                    tango[3] = entity;
                    entity = _closure1_slot14;
                    tango[4] = entity;
                    zulu = tango.includes;
                    entity = report.trial_id;
                    entity = zulu.bind(tango)(entity);
                    if(!entity) { _fun00008_ip = 426; continue _fun00007 }
 87:
                    options = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 10;
                    entity = tango[entity];
                    oscar = undefined;
                    entity = options.bind(oscar)(entity);
                    yankee = entity.GooglePlayPremiumTrialsExperiment;
                    offset = yankee.getCurrentConfig;
                    verify = {};
                    entity = 'UserTrialOfferManager';
                    verify['location'] = entity;
                    zulu = {};
                    romeo = false;
                    zulu['autoTrackExposure'] = romeo;
                    zulu = offset.bind(yankee)(verify, zulu);
                    zulu = zulu.enabled;
                    verify = 11;
                    verify = tango[verify];
                    verify = options.bind(oscar)(verify);
                    yankee = verify.IOSPremiumTrialsExperiment;
                    offset = yankee.getCurrentConfig;
                    verify = {};
                    verify['location'] = entity;
                    entity = {};
                    entity['autoTrackExposure'] = romeo;
                    entity = offset.bind(yankee)(verify, entity);
                    entity = entity.enabled;
                    verify = 12;
                    tango = tango[verify];
                    options = options.bind(oscar)(tango);
                    tango = options.isIOS;
                    options = tango.bind(options)();
                    if(!options) { _fun00008_ip = 229; continue _fun00007 }
 226:
                    options = entity;
 229:
                    if(options) { _fun00008_ip = 267; continue _fun00007 }
 232:
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[verify];
                    tango = tango.bind(oscar)(entity);
                    entity = tango.isAndroid;
                    entity = entity.bind(tango)();
                    if(!entity) { _fun00008_ip = 264; continue _fun00007 }
 261:
                    entity = zulu;
 264:
                    options = entity;
 267:
                    tango = report.trial_id;
                    zulu = _closure1_slot14;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    entity = 13;
                    entity = romeo[entity];
                    offset = yankee.bind(oscar)(entity);
                    verify = offset.isDismissibleContentDismissed;
                    entity = 14;
                    entity = romeo[entity];
                    entity = yankee.bind(oscar)(entity);
                    entity = entity.DismissibleContent;
                    entity = entity.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    entity = verify.bind(offset)(entity);
                    if(!options) { _fun00008_ip = 352; continue _fun00007 }
 335:
                    report = report.expires_at;
                    if(!(golf != report)) { _fun00008_ip = 354; continue _fun00007 }
 345:
                    if(!(tango === zulu)) { _fun00008_ip = 352; continue _fun00007 }
 349:
                    if(!entity) { _fun00008_ip = 354; continue _fun00007 }
 352:
                    return oscar;
 354:
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 15;
                    zulu = entity[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.openLazy;
                    report = _closure1_slot0;
                    mike = 17;
                    mike = entity[mike];
                    report = report.bind(oscar)(mike);
                    mike = 16;
                    mike = entity[mike];
                    entity = entity.paths;
                    mike = report.bind(oscar)(mike, entity);
                    entity = 'PremiumTrialOfferActionSheet';
                    entity = zulu.bind(tango)(mike, entity);
 426:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleTrialOfferFetchSuccess'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/UserTrialOfferManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();