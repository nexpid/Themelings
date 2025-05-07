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
            offset = michal.product;
            var _closure2_slot0 = offset;
            option = michal.analyticsLocations;
            var _closure2_slot1 = option;
            verify = michal.analyticsLoadId;
            var _closure2_slot2 = verify;
            foxtra = michal.onPurchaseComplete;
            var _closure2_slot3 = foxtra;
            romeon = michal.onPurchaseError;
            var _closure2_slot4 = romeon;
            yankee = michal.freePurchaseCallback;
            var _closure2_slot5 = yankee;
            echoed = michal.onPurchasePending;
            var _closure2_slot6 = echoed;
            golfie = michal.isGift;
            var _closure2_slot7 = golfie;
            oscard = michal.giftRecipientId;
            var _closure2_slot8 = oscard;
            report = michal.giftMessage;
            var _closure2_slot9 = report;
            result = undefined;
            var _closure2_slot12 = result;
            var _closure2_slot13 = result;
            var _closure2_slot14 = result;
            var _closure2_slot15 = result;
            var _closure2_slot16 = result;
            var _closure2_slot17 = result;
            tangon = _closure1_slot5;
            zuuluu = tangon.getCurrentUser;
            update = zuuluu.bind(tangon)();
            tangon = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 6;
            zuuluu = backup[zuuluu];
            tangon = tangon.bind(result)(zuuluu);
            zuuluu = tangon.useHandlePremiumPurchase;
            backup = zuuluu.bind(tangon)();
            var _closure2_slot10 = backup;
            kiloes = _closure1_slot4;
            tangon = kiloes.useRef;
            zuuluu = false;
            zuuluu = tangon.bind(kiloes)(zuuluu);
            var _closure2_slot11 = zuuluu;
            kiloes = result !== update;
            if(!kiloes) { _fun00002_ip = 220; continue _fun00001 }
 210:
            zuuluu = update.isStaff;
            kiloes = zuuluu.bind(update)();
 220:
            _closure2_slot12 = kiloes;
            tangon = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 7;
            zuuluu = sizing[zuuluu];
            tangon = tangon.bind(result)(zuuluu);
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
            zuuluu = tangon.bind(result)(zuuluu);
            tangon = null;
            if(!(tangon == verify)) { _fun00002_ip = 269; continue _fun00001 }
 262:
            _closure2_slot2 = zuuluu;
            verify = zuuluu;
 269:
            sizing = offset.skuId;
            _closure2_slot13 = sizing;
            tangon = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 9;
            zuuluu = output[zuuluu];
            output = tangon.bind(result)(zuuluu);
            tangon = output.isPremium;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.TIER_2;
            output = tangon.bind(output)(update, zuuluu);
            tangon = offset.googleSkuIds;
            zuuluu = _closure1_slot7;
            if(output) { _fun00002_ip = 346; continue _fun00001 }
 334:
            output = zuuluu.MOBILE;
            output = tangon[output];
            _fun00002_ip = 356; continue _fun00001;
 346:
            zuuluu = zuuluu.MOBILE_PREMIUM_TIER_2;
            output = tangon[zuuluu];
 356:
            _closure2_slot14 = output;
            tangon = _closure1_slot4;
            source = tangon.useCallback;
            update = new Array(1);
            update[0] = foxtra;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.unsubscribe;
                tangon = _closure2_slot15;
                zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = _closure2_slot11;
                zuuluu = false;
                tangon['current'] = zuuluu;
                michal = _closure2_slot3;
                michal = michal.bind(entity)();
                return entity;
            };
            source = source.bind(tangon)(zuuluu, update);
            _closure2_slot15 = source;
            ctrled = tangon.useCallback;
            update = new Array(2);
            update[0] = romeon;
            update[1] = source;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.unsubscribe;
                tangon = _closure2_slot15;
                zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = _closure2_slot11;
                zuuluu = false;
                tangon['current'] = zuuluu;
                michal = _closure2_slot4;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = ctrled.bind(tangon)(zuuluu, update);
            _closure2_slot16 = zuuluu;
            ctrled = tangon.useCallback;
            update = new Array(3);
            update[0] = source;
            update[1] = romeon;
            update[2] = echoed;
            echoed = function(argFoo) {
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
                    tangon = _closure2_slot15;
                    zuuluu = 'GPLAY_PURCHASE_VERIFIED';
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    tangon = _closure2_slot11;
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
            ctrled = ctrled.bind(tangon)(echoed, update);
            _closure2_slot17 = ctrled;
            update = tangon.useEffect;
            echoed = new Array(3);
            echoed[0] = ctrled;
            echoed[1] = source;
            echoed[2] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 10;
                entity = report[michal];
                zuuluu = undefined;
                verify = tangon.bind(zuuluu)(entity);
                option = verify.subscribe;
                golfie = _closure2_slot17;
                oscard = 'GPLAY_UPDATE_PURCHASE_STATE';
                oscard = option.bind(verify)(oscard, golfie);
                oscard = report[michal];
                verify = tangon.bind(zuuluu)(oscard);
                option = verify.subscribe;
                golfie = _closure2_slot15;
                oscard = 'GPLAY_PURCHASE_VERIFIED';
                oscard = option.bind(verify)(oscard, golfie);
                michal = report[michal];
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = tangon.subscribe;
                michal = _closure2_slot16;
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
                    golfie = _closure2_slot17;
                    oscard = 'GPLAY_UPDATE_PURCHASE_STATE';
                    oscard = option.bind(verify)(oscard, golfie);
                    oscard = report[zuuluu];
                    verify = tangon.bind(entity)(oscard);
                    option = verify.unsubscribe;
                    golfie = _closure2_slot15;
                    oscard = 'GPLAY_PURCHASE_VERIFIED';
                    oscard = option.bind(verify)(oscard, golfie);
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.unsubscribe;
                    zuuluu = _closure2_slot16;
                    michal = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                };
                return entity;
            };
            zuuluu = update.bind(tangon)(zuuluu, echoed);
            zuuluu = tangon.useCallback;
            michal = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00006_ip = 404; continue _fun00005 }
 10:
                        report = undefined;
                        michal = undefined;
                        tangon = _closure2_slot11;
                        tangon = tangon.current;
                        if(tangon) { _fun00006_ip = 368; continue _fun00005 }
 32: // try_start_3
                        tangon = _closure2_slot11;
                        golfie = true;
                        tangon['current'] = golfie;
                        tangon = _closure2_slot12;
                        if(tangon) { _fun00006_ip = 142; continue _fun00005 }
 51:
                        oscard = _closure2_slot10;
                        tangon = {};
                        option = _closure2_slot14;
                        tangon['productId'] = option;
                        option = _closure2_slot13;
                        tangon['skuId'] = option;
                        tangon['isOneTimePurchase'] = golfie;
                        golfie = _closure2_slot2;
                        tangon['analyticsLoadId'] = golfie;
                        golfie = _closure2_slot1;
                        tangon['analyticsLocations'] = golfie;
                        golfie = _closure2_slot7;
                        tangon['isGift'] = golfie;
                        golfie = {};
                        option = _closure2_slot8;
                        golfie['recipient_id'] = option;
                        option = _closure2_slot9;
                        golfie['custom_message'] = option;
                        tangon['giftInfoOptions'] = golfie;
                        tangon = oscard.bind(report)(tangon);
                        _fun00006_ip = 306; continue _fun00005;
 142:
                        oscard = _closure2_slot5;
                        tangon = null;
                        if(!(tangon == oscard)) { _fun00006_ip = 183; continue _fun00005 }
 152:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        tangon = 11;
                        tangon = golfie[tangon];
                        tangon = oscard.bind(report)(tangon);
                        tangon = tangon.purchaseSKU;
                        _fun00006_ip = 187; continue _fun00005;
 183:
                        tangon = _closure2_slot5;
 187:
                        michal = tangon;
 190: // try_start_0 // try_start_1
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
                        SaveGenerator(address=280);
 278:
                        return michal;
 280:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 309; continue _fun00005 }
 286:
                        tangon = _closure2_slot3;
                        tangon = tangon.bind(report)();
 294: // try_end0 // try_end1
                        oscard = _closure2_slot11;
                        tangon = false;
                        oscard['current'] = tangon;
 306: // try_end3
                        return report;
 309: // try_start_4
                        oscard = _closure2_slot11;
                        tangon = false;
                        oscard['current'] = tangon;
 321: // try_end4
                        return michal;
 324: // try_start_2 // try_start_5 // catch_target0
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot4;
                        tangon = tangon.bind(report)();
                        throw michal;
 336: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        report = _closure2_slot11;
                        tangon = false;
                        report['current'] = tangon;
                        throw michal;
 352: // try_end5 // catch_target3 // catch_target4 // catch_target5
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot11;
                        zuuluu = false;
                        tangon['current'] = zuuluu;
                        throw michal;
 368:
                        michal = global;
                        tangon = michal.Error;
                        michal = tangon.prototype;
                        zuuluu = Object.create(michal, {constructor: {value: tangon}});
                        romeon = 'Purchase already in progress';
                        foxtra = zuuluu;
                        michal = new foxtra[tangon](romeon, yankee);
                        michal = michal instanceof Object ? michal : zuuluu;
                        throw michal;
 404:
                        return entity;
                    }
                };
                return entity;
            };
            michal = michal.bind(result)(entity);
            entity = new Array(13);
            entity[0] = output;
            entity[1] = sizing;
            entity[2] = kiloes;
            entity[3] = backup;
            entity[4] = foxtra;
            entity[5] = romeon;
            entity[6] = yankee;
            offset = offset.skuId;
            entity[7] = offset;
            entity[8] = verify;
            entity[9] = option;
            entity[10] = golfie;
            entity[11] = oscard;
            entity[12] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();