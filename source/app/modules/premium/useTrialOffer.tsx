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
    var _closure1_slot6 = tangon;
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
    report = 7;
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
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 4;
            michal = verify[tangon];
            oscard = undefined;
            offset = option.bind(oscard)(michal);
            golfie = offset.useStateFromStores;
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
            michal = golfie.bind(offset)(report, michal);
            var _closure2_slot1 = michal;
            golfie = _closure1_slot3;
            offset = golfie.useState;
            report = _closure1_slot6;
            report = report.bind(oscard)(michal);
            yankee = offset.bind(golfie)(report);
            offset = _closure1_slot2;
            report = 2;
            yankee = offset.bind(oscard)(yankee, report);
            report = 0;
            report = yankee[report];
            var _closure2_slot2 = report;
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot3 = offset;
            tangon = verify[tangon];
            option = option.bind(oscard)(tangon);
            oscard = option.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 5;
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
            zuuluu = oscard.bind(option)(tangon, zuuluu);
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
                    michal = 6;
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
                                    tangon = _closure1_slot6;
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
            if(report) { _fun00004_ip = 201; continue _fun00003 }
 193:
            entity = null;
            if(zuuluu) { _fun00004_ip = 201; continue _fun00003 }
 198:
            entity = michal;
 201:
            return entity;
        }
    };
    zuuluu['useTrialOffer'] = michal;
    return entity;
})();