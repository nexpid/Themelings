// app/modules/premium/useTrialOffer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: hasUserTrialOfferExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            if(!entity) { _fun00002_ip = 22; continue _fun00001 }
 12:
            zuuluu = michal.expires_at;
            entity = tangon != zuuluu;
 22:
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 25:
            tangon = global;
            report = tangon.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            report = tangon.Date;
            tangon = report.parse;
            michal = michal.expires_at;
            michal = tangon.bind(report)(michal);
            entity = zuuluu > michal;
 69:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/useTrialOffer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['hasUserTrialOfferExpired'] = tangon;
    michal = function(argFoo) { // Original name: useTrialOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getCurrentUser;
            offset = michal.bind(zuuluu)();
            option = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 5;
            michal = yankee[oscard];
            verify = undefined;
            romeon = option.bind(verify)(michal);
            golfie = romeon.useStateFromStores;
            michal = _closure1_slot5;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getUserTrialOffer;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = golfie.bind(romeon)(report, michal);
            var _closure2_slot1 = michal;
            romeon = _closure1_slot3;
            golfie = romeon.useState;
            report = _closure1_slot7;
            report = report.bind(verify)(michal);
            romeon = golfie.bind(romeon)(report);
            golfie = _closure1_slot2;
            report = 2;
            foxtra = golfie.bind(verify)(romeon, report);
            golfie = 0;
            report = foxtra[golfie];
            var _closure2_slot2 = report;
            romeon = 1;
            romeon = foxtra[romeon];
            var _closure2_slot3 = romeon;
            romeon = yankee[oscard];
            backup = option.bind(verify)(romeon);
            foxtra = backup.useStateFromStores;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isPremium;
                tangon = _closure1_slot4;
                entity = tangon.getCurrentUser;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = foxtra.bind(backup)(romeon, zuuluu);
            oscard = yankee[oscard];
            romeon = option.bind(verify)(oscard);
            yankee = romeon.useStateFromStoresArray;
            oscard = _closure1_slot6;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getFractionalPremium;
                entity = false;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = yankee.bind(romeon)(option, oscard);
            oscard = oscard.length;
            oscard = oscard > golfie;
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00004_ip = 266; continue _fun00003 }
 222:
            if(!oscard) { _fun00004_ip = 263; continue _fun00003 }
 225:
            option = _closure1_slot0;
            yankee = _closure1_slot1;
            golfie = 7;
            golfie = yankee[golfie];
            verify = option.bind(verify)(golfie);
            option = verify.isSubscriptionPurchaseDuringFractionalPremiumEnabled;
            golfie = 'use-trial-offer';
            oscard = option.bind(verify)(golfie, offset);
 263:
            zuuluu = oscard;
 266:
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            tangon = new Array(2);
            tangon[0] = report;
            tangon[1] = michal;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00006_ip = 29; continue _fun00005 }
 15:
                    michal = _closure2_slot1;
                    michal = michal.expires_at;
                    if(!(zuuluu == michal)) { _fun00006_ip = 33; continue _fun00005 }
 29:
                    michal = undefined;
                    return michal;
 33:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 8;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = michal.Timeout;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    oscard = tangon;
                    michal = new oscard[michal](report);
                    michal = michal instanceof Object ? michal : tangon;
                    var _closure3_slot0 = michal;
                    michal = function() { // Original name: startTimer
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = _closure2_slot1;
                            entity = entity.expires_at;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            tangon = 0;
                            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 24:
                            entity = global;
                            oscard = entity.Date;
                            report = oscard.parse;
                            michal = _closure2_slot1;
                            michal = michal.expires_at;
                            michal = report.bind(oscard)(michal);
                            report = entity.Date;
                            entity = report.now;
                            entity = entity.bind(report)();
                            tangon = michal - entity;
 72:
                            michal = _closure3_slot0;
                            if(!(zuuluu != michal)) { _fun00008_ip = 105; continue _fun00007 }
 83:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.start;
                            entity = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    michal = _closure2_slot2;
                                    if(michal) { _fun00010_ip = 44; continue _fun00009 }
 10:
                                    tangon = _closure1_slot7;
                                    michal = _closure2_slot1;
                                    zuuluu = undefined;
                                    michal = tangon.bind(zuuluu)(michal);
                                    if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 31:
                                    michal = _closure2_slot3;
                                    entity = true;
                                    entity = michal.bind(zuuluu)(entity);
                                    _fun00010_ip = 57; continue _fun00009;
 44:
                                    michal = _closure3_slot1;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
 57:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = michal.bind(zuuluu)(tangon, entity);
 105:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = michal;
                    michal = michal.bind(zuuluu)();
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = michal.stop;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, tangon);
            entity = null;
            if(report) { _fun00004_ip = 311; continue _fun00003 }
 303:
            entity = null;
            if(!zuuluu) { _fun00004_ip = 311; continue _fun00003 }
 308:
            entity = michal;
 311:
            return entity;
        }
    };
    zuuluu['useTrialOffer'] = michal;
    return entity;
})();