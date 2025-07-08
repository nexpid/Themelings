// app/modules/premium/promotions/PromotionsManager.tsx
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tangon = tangon.PremiumTypes;
    var _closure1_slot10 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: PromotionsManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot4;
                zuuluu = _closure2_slot1;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot7;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot6;
                entity = _closure1_slot11;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = {};
                oscard = entity.onPostConnectionOpen;
                report = oscard.bind;
                report = report.bind(oscard)(entity);
                zuuluu['POST_CONNECTION_OPEN'] = report;
                oscard = entity.onPostConnectionOpen;
                report = oscard.bind;
                report = report.bind(oscard)(entity);
                zuuluu['EXPERIMENTS_FETCH_SUCCESS'] = report;
                entity['actions'] = zuuluu;
                zuuluu = _closure1_slot3;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 116; continue _fun00005 }
 7:
                            tangon = _closure1_slot9;
                            michal = tangon.getCurrentUser;
                            golfie = michal.bind(tangon)();
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 8;
                            tangon = tangon[michal];
                            michal = undefined;
                            oscard = report.bind(michal)(tangon);
                            report = oscard.isPremiumExactly;
                            tangon = _closure1_slot10;
                            tangon = tangon.TIER_2;
                            tangon = report.bind(oscard)(golfie, tangon);
                            if(tangon) { _fun00006_ip = 113; continue _fun00005 }
 70:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            zuuluu = 9;
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.maybeFetchActiveBogoPromotion;
                            zuuluu = zuuluu.bind(tangon)();
                            SaveGenerator(address=104);
 102:
                            return zuuluu;
 104:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!tangon) { _fun00006_ip = 113; continue _fun00005 }
 110:
                            return zuuluu;
 113:
                            return michal;
 116:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                entity['maybeFetchBogoPromotion'] = michal;
                return entity;
            }
        };
        var _closure2_slot1 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        golfie = 'onPostConnectionOpen';
        report['key'] = golfie;
        golfie = _closure1_slot3;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    zuuluu = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 50; continue _fun00007 }
 10:
                    michal = zuuluu.maybeFetchActiveOutboundPromotions;
                    michal = michal.bind(zuuluu)();
                    michal = zuuluu.maybeFetchBogoPromotion;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=36);
 34:
                    return michal;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 47; continue _fun00007 }
 42:
                    zuuluu = undefined;
                    return zuuluu;
 47:
                    return michal;
 50:
                    return entity;
                }
            };
            return entity;
        };
        entity = golfie.bind(zuuluu)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: onPostConnectionOpen
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'maybeFetchActiveOutboundPromotions';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot9;
                entity = zuuluu.getCurrentUser;
                golfie = entity.bind(zuuluu)();
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.isPremiumExactly;
                zuuluu = _closure1_slot10;
                zuuluu = zuuluu.TIER_2;
                zuuluu = tangon.bind(report)(golfie, zuuluu);
                report = _closure1_slot0;
                tangon = 10;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                golfie = tangon.OutboundPromoDesktopUpsellExperiment;
                oscard = golfie.getCurrentConfig;
                report = {};
                tangon = 'maybeFetchActiveOutboundPromotions';
                report['location'] = tangon;
                tangon = {};
                option = false;
                tangon['autoTrackExposure'] = option;
                tangon['disable'] = zuuluu;
                tangon = oscard.bind(golfie)(report, tangon);
                tangon = tangon.enabled;
                if(zuuluu) { _fun00010_ip = 131; continue _fun00009 }
 128:
                zuuluu = tangon;
 131:
                if(!zuuluu) { _fun00010_ip = 164; continue _fun00009 }
 134:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 11;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchActiveOutboundPromotions;
                michal = michal.bind(zuuluu)();
 164:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/promotions/PromotionsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();