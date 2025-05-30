// app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot4 = golfie;
    tangon = tangon.PremiumTypes;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.fallbackPremiumType;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00002_ip = 30; continue _fun00001 }
 17:
            entity = _closure1_slot5;
            golfie = entity.TIER_2;
 30:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = tangon;
            option = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            entity = zuuluu[entity];
            michal = option.bind(tangon)(entity);
            entity = 5;
            entity = zuuluu[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
            entity = michal.bind(tangon)(entity);
            entity = entity.analyticsLocations;
            _closure2_slot0 = entity;
            michal = _closure1_slot0;
            option = 6;
            option = zuuluu[option];
            verify = michal.bind(tangon)(option);
            option = verify.usePremiumTrialOffer;
            offset = option.bind(verify)();
            _closure2_slot1 = offset;
            romeon = _closure1_slot3;
            yankee = romeon.useEffect;
            verify = new Array(2);
            verify[0] = offset;
            verify[1] = entity;
            option = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    verify = null;
                    michal = verify != michal;
                    if(!michal) { _fun00004_ip = 30; continue _fun00003 }
 16:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.expires_at;
                    michal = verify == zuuluu;
 30:
                    if(!michal) { _fun00004_ip = 152; continue _fun00003 }
 33:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    golfie = report.bind(tangon)(zuuluu);
                    oscard = golfie.track;
                    zuuluu = _closure1_slot6;
                    report = zuuluu.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED;
                    zuuluu = {};
                    option = _closure2_slot0;
                    zuuluu['location'] = option;
                    option = _closure2_slot1;
                    verify = verify == option;
                    option = undefined;
                    if(verify) { _fun00004_ip = 106; continue _fun00003 }
 96:
                    verify = _closure2_slot1;
                    option = verify.trial_id;
 106:
                    zuuluu['trial_id'] = option;
                    zuuluu = oscard.bind(golfie)(report, zuuluu);
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 8;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.acknowledgeUserTrialOffer;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity);
 152:
                    entity = undefined;
                    return entity;
                }
            };
            option = yankee.bind(romeon)(option, verify);
            yankee = romeon.useCallback;
            verify = new Array(2);
            verify[0] = entity;
            verify[1] = offset;
            option = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(michal);
                    golfie = option.track;
                    michal = _closure1_slot6;
                    report = michal.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                    michal = {};
                    tangon = _closure2_slot0;
                    michal['location'] = tangon;
                    verify = _closure2_slot1;
                    tangon = null;
                    offset = tangon == verify;
                    verify = undefined;
                    if(offset) { _fun00006_ip = 78; continue _fun00005 }
 68:
                    offset = _closure2_slot1;
                    verify = offset.trial_id;
 78:
                    michal['trial_id'] = verify;
                    michal = golfie.bind(option)(report, michal);
                    michal = _closure2_slot1;
                    michal = tangon == michal;
                    tangon = undefined;
                    if(michal) { _fun00006_ip = 112; continue _fun00005 }
 102:
                    michal = _closure2_slot1;
                    tangon = michal.trial_id;
 112:
                    michal = _closure1_slot4;
                    if(!(tangon === michal)) { _fun00006_ip = 175; continue _fun00005 }
 120:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    report = golfie.bind(entity)(michal);
                    tangon = report.markDismissibleContentAsDismissed;
                    michal = 10;
                    michal = option[michal];
                    michal = golfie.bind(entity)(michal);
                    michal = michal.DismissibleContent;
                    michal = michal.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    michal = tangon.bind(report)(michal);
 175:
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    tangon = 11;
                    tangon = michal[tangon];
                    golfie = report.bind(entity)(tangon);
                    tangon = golfie.hideActionSheet;
                    tangon = tangon.bind(golfie)();
                    tangon = 12;
                    tangon = michal[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.pushLazy;
                    golfie = _closure1_slot0;
                    zuuluu = 14;
                    zuuluu = michal[zuuluu];
                    golfie = golfie.bind(entity)(zuuluu);
                    zuuluu = 13;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    zuuluu = golfie.bind(entity)(zuuluu, michal);
                    michal = {};
                    oscard = _closure2_slot0;
                    michal['analyticsLocations'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            verify = yankee.bind(romeon)(option, verify);
            yankee = romeon.useCallback;
            option = new Array(2);
            option[0] = entity;
            option[1] = offset;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(zuuluu);
                    golfie = option.track;
                    zuuluu = _closure1_slot6;
                    oscard = zuuluu.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    tangon = {};
                    report = _closure2_slot0;
                    tangon['location'] = report;
                    verify = _closure2_slot1;
                    report = null;
                    offset = report == verify;
                    verify = undefined;
                    if(offset) { _fun00008_ip = 78; continue _fun00007 }
 68:
                    offset = _closure2_slot1;
                    verify = offset.trial_id;
 78:
                    tangon['trial_id'] = verify;
                    tangon = golfie.bind(option)(oscard, tangon);
                    tangon = _closure2_slot1;
                    report = report == tangon;
                    tangon = undefined;
                    if(report) { _fun00008_ip = 112; continue _fun00007 }
 102:
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.trial_id;
 112:
                    zuuluu = _closure1_slot4;
                    if(!(tangon === zuuluu)) { _fun00008_ip = 175; continue _fun00007 }
 120:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = golfie[zuuluu];
                    report = oscard.bind(entity)(zuuluu);
                    tangon = report.markDismissibleContentAsDismissed;
                    zuuluu = 10;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.DismissibleContent;
                    zuuluu = zuuluu.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    zuuluu = tangon.bind(report)(zuuluu);
 175:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 11;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            option = yankee.bind(romeon)(entity, option);
            entity = 15;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.formatIntervalDuration;
            entity = {};
            foxtra = null;
            romeon = foxtra == offset;
            yankee = undefined;
            if(romeon) { _fun00002_ip = 270; continue _fun00001 }
 249:
            romeon = offset.subscription_trial;
            backup = foxtra == romeon;
            yankee = undefined;
            if(backup) { _fun00002_ip = 270; continue _fun00001 }
 264:
            yankee = romeon.interval;
 270:
            entity['intervalType'] = yankee;
            romeon = foxtra == offset;
            yankee = undefined;
            if(romeon) { _fun00002_ip = 305; continue _fun00001 }
 284:
            romeon = offset.subscription_trial;
            foxtra = foxtra == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 305; continue _fun00001 }
 299:
            yankee = romeon.interval_count;
 305:
            entity['intervalCount'] = yankee;
            yankee = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 16;
            entity = romeon[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            foxtra = true;
            entity['startExpanded'] = foxtra;
            oscard = function() { // Original name: onDismiss
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(zuuluu);
                    golfie = option.track;
                    zuuluu = _closure1_slot6;
                    oscard = zuuluu.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    tangon = {};
                    report = _closure2_slot0;
                    tangon['location'] = report;
                    verify = _closure2_slot1;
                    report = null;
                    offset = report == verify;
                    verify = undefined;
                    if(offset) { _fun00010_ip = 78; continue _fun00009 }
 68:
                    offset = _closure2_slot1;
                    verify = offset.trial_id;
 78:
                    tangon['trial_id'] = verify;
                    tangon = golfie.bind(option)(oscard, tangon);
                    tangon = _closure2_slot1;
                    report = report == tangon;
                    tangon = undefined;
                    if(report) { _fun00010_ip = 112; continue _fun00009 }
 102:
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.trial_id;
 112:
                    zuuluu = _closure1_slot4;
                    if(!(tangon === zuuluu)) { _fun00010_ip = 175; continue _fun00009 }
 120:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    tangon = report.bind(entity)(michal);
                    zuuluu = tangon.markDismissibleContentAsDismissed;
                    michal = 10;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.DismissibleContent;
                    michal = michal.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    michal = zuuluu.bind(tangon)(michal);
 175:
                    return entity;
                }
            };
            entity['onDismiss'] = oscard;
            oscard = _closure1_slot1;
            report = 17;
            report = romeon[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['intervalDuration'] = yankee;
            report['trialOffer'] = offset;
            report['onConfirm'] = verify;
            report['onDismiss'] = option;
            report['fallbackPremiumType'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();