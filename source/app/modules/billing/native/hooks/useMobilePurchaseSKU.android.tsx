// app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CurrencyCodes;
    var _closure1_slot6 = golfie;
    tangon = tangon.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GPlayBillingResult;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot9 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = michal.product;
            var _closure2_slot0 = golfie;
            offset = michal.analyticsLocations;
            var _closure2_slot1 = offset;
            yankee = michal.analyticsLoadId;
            var _closure2_slot2 = yankee;
            oscard = michal.onPurchaseComplete;
            var _closure2_slot3 = oscard;
            report = michal.onPurchaseError;
            var _closure2_slot4 = report;
            verify = michal.freePurchaseCallback;
            var _closure2_slot5 = verify;
            sizing = michal.onPurchasePending;
            var _closure2_slot6 = sizing;
            kiloes = undefined;
            var _closure2_slot9 = kiloes;
            var _closure2_slot10 = kiloes;
            var _closure2_slot11 = kiloes;
            var _closure2_slot12 = kiloes;
            var _closure2_slot13 = kiloes;
            var _closure2_slot14 = kiloes;
            tangon = _closure1_slot5;
            zuuluu = tangon.getCurrentUser;
            output = zuuluu.bind(tangon)();
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 6;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(kiloes)(zuuluu);
            zuuluu = tangon.useHandlePremiumPurchase;
            romeon = zuuluu.bind(tangon)();
            var _closure2_slot7 = romeon;
            option = _closure1_slot4;
            tangon = option.useRef;
            zuuluu = false;
            zuuluu = tangon.bind(option)(zuuluu);
            var _closure2_slot8 = zuuluu;
            option = kiloes !== output;
            if(!option) { _fun00002_ip = 190; continue _fun00001 }
 180:
            zuuluu = output.isStaff;
            option = zuuluu.bind(output)();
 190:
            _closure2_slot9 = option;
            tangon = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 7;
            zuuluu = foxtra[zuuluu];
            tangon = tangon.bind(kiloes)(zuuluu);
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.getNewAnalyticsLoadId;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(kiloes)(zuuluu);
            tangon = null;
            if(!(tangon == yankee)) { _fun00002_ip = 239; continue _fun00001 }
 232:
            _closure2_slot2 = zuuluu;
            yankee = zuuluu;
 239:
            foxtra = golfie.skuId;
            _closure2_slot10 = foxtra;
            tangon = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 9;
            zuuluu = backup[zuuluu];
            backup = tangon.bind(kiloes)(zuuluu);
            tangon = backup.isPremium;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.TIER_2;
            backup = tangon.bind(backup)(output, zuuluu);
            tangon = golfie.googleSkuIds;
            zuuluu = _closure1_slot7;
            if(backup) { _fun00002_ip = 316; continue _fun00001 }
 304:
            backup = zuuluu.MOBILE;
            backup = tangon[backup];
            _fun00002_ip = 326; continue _fun00001;
 316:
            zuuluu = zuuluu.MOBILE_PREMIUM_TIER_2;
            backup = tangon[zuuluu];
 326:
            _closure2_slot11 = backup;
            tangon = _closure1_slot4;
            result = tangon.useCallback;
            output = new Array(1);
            output[0] = oscard;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.unsubscribe;
                tangon = _closure2_slot12;
                zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = _closure2_slot8;
                zuuluu = false;
                tangon['current'] = zuuluu;
                michal = _closure2_slot3;
                michal = michal.bind(entity)();
                return entity;
            };
            result = result.bind(tangon)(zuuluu, output);
            _closure2_slot12 = result;
            echoed = tangon.useCallback;
            output = new Array(2);
            output[0] = report;
            output[1] = result;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.unsubscribe;
                tangon = _closure2_slot12;
                zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = _closure2_slot8;
                zuuluu = false;
                tangon['current'] = zuuluu;
                michal = _closure2_slot4;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = echoed.bind(tangon)(zuuluu, output);
            _closure2_slot13 = zuuluu;
            echoed = tangon.useCallback;
            output = new Array(3);
            output[0] = result;
            output[1] = report;
            output[2] = sizing;
            sizing = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.billingResult;
                    michal = _closure1_slot8;
                    michal = michal.OK;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 93; continue _fun00003 }
 26:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 10;
                    entity = michal[entity];
                    michal = undefined;
                    oscard = zuuluu.bind(michal)(entity);
                    report = oscard.unsubscribe;
                    tangon = _closure2_slot12;
                    zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    tangon = _closure2_slot8;
                    zuuluu = false;
                    tangon['current'] = zuuluu;
                    entity = _closure2_slot4;
                    entity = entity.bind(michal)();
 93:
                    michal = _closure2_slot6;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            echoed = echoed.bind(tangon)(sizing, output);
            _closure2_slot14 = echoed;
            output = tangon.useEffect;
            sizing = new Array(3);
            sizing[0] = echoed;
            sizing[1] = result;
            sizing[2] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 10;
                entity = report[michal];
                zuuluu = undefined;
                verify = tangon.bind(zuuluu)(entity);
                option = verify.subscribe;
                golfie = _closure2_slot14;
                oscard = 'GPLAY_UPDATE_PURCHASE_STATE';
                oscard = option.bind(verify)(oscard, golfie);
                oscard = report[michal];
                verify = tangon.bind(zuuluu)(oscard);
                option = verify.subscribe;
                golfie = _closure2_slot12;
                oscard = 'GPLAY_PURCHASE_VERIFIED';
                oscard = option.bind(verify)(oscard, golfie);
                michal = report[michal];
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = tangon.subscribe;
                michal = _closure2_slot13;
                entity = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = function() {
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 10;
                    michal = report[zuuluu];
                    entity = undefined;
                    verify = tangon.bind(entity)(michal);
                    option = verify.unsubscribe;
                    golfie = _closure2_slot14;
                    oscard = 'GPLAY_UPDATE_PURCHASE_STATE';
                    oscard = option.bind(verify)(oscard, golfie);
                    oscard = report[zuuluu];
                    verify = tangon.bind(entity)(oscard);
                    option = verify.unsubscribe;
                    golfie = _closure2_slot12;
                    oscard = 'GPLAY_PURCHASE_VERIFIED';
                    oscard = option.bind(verify)(oscard, golfie);
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.unsubscribe;
                    zuuluu = _closure2_slot13;
                    michal = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                };
                return entity;
            };
            zuuluu = output.bind(tangon)(zuuluu, sizing);
            zuuluu = tangon.useCallback;
            michal = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00006_ip = 370; continue _fun00005 }
 10:
                        report = undefined;
                        michal = undefined;
                        tangon = _closure2_slot8;
                        tangon = tangon.current;
                        if(tangon) { _fun00006_ip = 334; continue _fun00005 }
 32: // try_start_3
                        tangon = _closure2_slot8;
                        golfie = true;
                        tangon['current'] = golfie;
                        tangon = _closure2_slot9;
                        if(tangon) { _fun00006_ip = 108; continue _fun00005 }
 51:
                        oscard = _closure2_slot7;
                        tangon = {};
                        option = _closure2_slot11;
                        tangon['productId'] = option;
                        option = _closure2_slot10;
                        tangon['skuId'] = option;
                        tangon['isOneTimePurchase'] = golfie;
                        golfie = _closure2_slot2;
                        tangon['analyticsLoadId'] = golfie;
                        golfie = _closure2_slot1;
                        tangon['analyticsLocations'] = golfie;
                        tangon = oscard.bind(report)(tangon);
                        _fun00006_ip = 272; continue _fun00005;
 108:
                        oscard = _closure2_slot5;
                        tangon = null;
                        if(!(tangon == oscard)) { _fun00006_ip = 149; continue _fun00005 }
 118:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        tangon = 11;
                        tangon = golfie[tangon];
                        tangon = oscard.bind(report)(tangon);
                        tangon = tangon.purchaseSKU;
                        _fun00006_ip = 153; continue _fun00005;
 149:
                        tangon = _closure2_slot5;
 153:
                        michal = tangon;
 156: // try_start_0 // try_start_1
                        golfie = michal;
                        michal = _closure2_slot0;
                        oscard = michal.skuId;
                        tangon = {};
                        michal = 0;
                        tangon['expectedAmount'] = michal;
                        option = _closure1_slot6;
                        option = option.USD;
                        tangon['expectedCurrency'] = option;
                        option = _closure1_slot0;
                        verify = _closure1_slot2;
                        michal = 12;
                        michal = verify[michal];
                        option = option.bind(report)(michal);
                        michal = option.v4;
                        michal = michal.bind(option)();
                        tangon['loadId'] = michal;
                        michal = 'collectibles';
                        michal = golfie.bind(report)(michal, oscard, tangon);
                        SaveGenerator(address=246);
 244:
                        return michal;
 246:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 275; continue _fun00005 }
 252:
                        tangon = _closure2_slot3;
                        tangon = tangon.bind(report)();
 260: // try_end0 // try_end1
                        oscard = _closure2_slot8;
                        tangon = false;
                        oscard['current'] = tangon;
 272: // try_end3
                        return report;
 275: // try_start_4
                        oscard = _closure2_slot8;
                        tangon = false;
                        oscard['current'] = tangon;
 287: // try_end4
                        return michal;
 290: // try_start_2 // try_start_5 // catch_target0
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot4;
                        tangon = tangon.bind(report)();
                        throw michal;
 302: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        report = _closure2_slot8;
                        tangon = false;
                        report['current'] = tangon;
                        throw michal;
 318: // try_end5 // catch_target3 // catch_target4 // catch_target5
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot8;
                        zuuluu = false;
                        tangon['current'] = zuuluu;
                        throw michal;
 334:
                        michal = global;
                        tangon = michal.Error;
                        michal = tangon.prototype;
                        zuuluu = Object.create(michal, {constructor: {value: tangon}});
                        romeon = 'Purchase already in progress';
                        foxtra = zuuluu;
                        michal = new foxtra[tangon](romeon, yankee);
                        michal = michal instanceof Object ? michal : zuuluu;
                        throw michal;
 370:
                        return entity;
                    }
                };
                return entity;
            };
            michal = michal.bind(kiloes)(entity);
            entity = new Array(10);
            entity[0] = backup;
            entity[1] = foxtra;
            entity[2] = romeon;
            entity[3] = yankee;
            entity[4] = offset;
            entity[5] = verify;
            entity[6] = option;
            golfie = golfie.skuId;
            entity[7] = golfie;
            entity[8] = oscard;
            entity[9] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();