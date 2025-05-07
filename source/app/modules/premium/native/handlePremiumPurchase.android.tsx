// app/modules/premium/native/handlePremiumPurchase.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _validatePurchase
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 182; continue _fun00001 }
 10:
                    golfie = argFoo;
                    option = argBar;
 16: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    oscard = _closure1_slot11;
                    oscard = oscard.GOOGLE_PLAY_VALIDATE_PURCHASE;
                    michal['url'] = oscard;
                    oscard = {};
                    oscard['product_id'] = golfie;
                    verify = option;
                    golfie = null;
                    verify = golfie == verify;
                    golfie = undefined;
                    if(verify) { _fun00002_ip = 94; continue _fun00001 }
 89:
                    golfie = option.id;
 94:
                    oscard['subscription_id'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=118);
 116:
                    return michal;
 118:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 127; continue _fun00001 }
 124: // try_end0
                    return zuuluu;
 127:
                    return michal;
 130: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    yankee = zuuluu;
                    offset = tangon;
                    michal = new yankee[michal](offset, verify);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 182:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.setGPlayAnalytics;
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
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGateways;
    var _closure1_slot12 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/handlePremiumPurchase.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useHandlePremiumPurchase
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 11;
            tangon = golfie[michal];
            michal = undefined;
            verify = oscard.bind(michal)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot8;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot8;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            report = option.bind(verify)(report, tangon);
            var _closure2_slot0 = report;
            tangon = 12;
            tangon = golfie[tangon];
            oscard = oscard.bind(michal)(tangon);
            tangon = oscard.usePremiumTrialOffer;
            oscard = tangon.bind(oscard)();
            var _closure2_slot1 = oscard;
            tangon = null;
            offset = tangon != report;
            var _closure2_slot2 = offset;
            option = tangon == report;
            golfie = undefined;
            if(option) { _fun00004_ip = 109; continue _fun00003 }
 104:
            golfie = report.id;
 109:
            var _closure2_slot3 = golfie;
            option = tangon == report;
            verify = undefined;
            if(option) { _fun00004_ip = 128; continue _fun00003 }
 122:
            verify = report.paymentGatewayPlanId;
 128:
            var _closure2_slot4 = verify;
            tangon = tangon == report;
            option = undefined;
            if(tangon) { _fun00004_ip = 147; continue _fun00003 }
 141:
            option = report.paymentGatewaySubscriptionId;
 147:
            var _closure2_slot5 = option;
            tangon = _closure1_slot5;
            zuuluu = tangon.useCallback;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            michal = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(tangon) { _fun00006_ip = 1221; continue _fun00005 }
 13:
                            echoed = michal.productId;
                            sizing = michal.skuId;
                            ctrled = michal.analyticsLoadId;
                            update = michal.analyticsLocation;
                            result = michal.analyticsLocations;
                            option = michal.isGift;
                            tangon = undefined;
                            if(!(option === tangon)) { _fun00006_ip = 57; continue _fun00005 }
 55:
                            option = false;
 57:
                            yankee = option;
                            option = michal.isOneTimePurchase;
                            if(!(option === tangon)) { _fun00006_ip = 72; continue _fun00005 }
 70:
                            option = false;
 72:
                            romeon = option;
                            option = michal.allowPlanChange;
                            if(!(option === tangon)) { _fun00006_ip = 87; continue _fun00005 }
 85:
                            option = true;
 87:
                            vacuum = option;
                            backup = michal.applicationId;
                            offset = michal.giftInfoOptions;
                            verify = michal.onPurchaseComplete;
                            oscard = michal.onPurchaseError;
                            golfie = undefined;
                            source = undefined;
                            foxtra = undefined;
                            sequen = undefined;
                            config = undefined;
                            SaveGenerator(address=127);
 125:
                            return tangon;
 127:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00006_ip = 1218; continue _fun00005 }
 136:
                            kiloes = _closure1_slot7;
                            option = kiloes.getId;
                            golfie = option.bind(kiloes)();
                            kiloes = _closure1_slot9;
                            option = kiloes.getProduct;
                            record = echoed;
                            cntext = option.bind(kiloes)(record);
                            kiloes = _closure1_slot0;
                            output = _closure1_slot2;
                            option = 13;
                            option = output[option];
                            output = kiloes.bind(tangon)(option);
                            kiloes = output.getBasePurchaseFlowAnalyticsFields;
                            option = {};
                            papara = yankee;
                            option['isGift'] = papara;
                            option['analyticsLoadId'] = ctrled;
                            option['analyticsLocation'] = update;
                            option['analyticsLocations'] = result;
                            option = kiloes.bind(output)(option);
                            source = option;
                            ctrled = _closure1_slot6;
                            output = {};
                            equals = output;
                            whisks = option;
                            option = copyDataProperties(equals, whisks);
                            update = 'subscription_plan_gateway_plan_id';
                            output[update] = record;
                            option = sizing;
                            result = 'sku_id';
                            output[result] = option;
                            option = null;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 284; continue _fun00005 }
 278:
                            papara = cntext.price;
 284:
                            kiloes = 'price';
                            output[kiloes] = papara;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 308; continue _fun00005 }
 302:
                            papara = cntext.price;
 308:
                            kiloes = 'regular_price';
                            output[kiloes] = papara;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 342; continue _fun00005 }
 326:
                            target = cntext.currencyCode;
                            kiloes = target.toLowerCase;
                            papara = kiloes.bind(target)();
 342:
                            kiloes = 'currency';
                            output[kiloes] = papara;
                            papara = backup;
                            kiloes = 'application_id';
                            output[kiloes] = papara;
                            output = ctrled.bind(tangon)(record, output);
                            output = _closure2_slot1;
                            record = option != output;
                            output = null;
                            if(!record) { _fun00006_ip = 468; continue _fun00005 }
 385:
                            papara = option == cntext;
                            record = undefined;
                            if(papara) { _fun00006_ip = 400; continue _fun00005 }
 394:
                            record = cntext.offerIds;
 400:
                            record = option != record;
                            output = null;
                            if(!record) { _fun00006_ip = 468; continue _fun00005 }
 409:
                            cntext = _closure1_slot0;
                            papara = _closure1_slot2;
                            record = 14;
                            record = papara[record];
                            record = cntext.bind(tangon)(record);
                            cntext = record.TrialIdToProductOfferId;
                            record = _closure2_slot1;
                            record = record.trial_id;
                            papara = cntext[record];
                            cntext = option == papara;
                            record = undefined;
                            if(cntext) { _fun00006_ip = 465; continue _fun00005 }
 458:
                            cntext = echoed;
                            record = papara[cntext];
 465:
                            output = record;
 468:
                            foxtra = output;
                            record = _closure1_slot0;
                            cntext = _closure1_slot2;
                            output = 15;
                            output = cntext[output];
                            papara = record.bind(tangon)(output);
                            cntext = papara.trackPaymentFlowStartedAnalyticsAndCTP;
                            record = {};
                            whisks = source;
                            equals = record;
                            output = copyDataProperties(equals, whisks);
                            output = echoed;
                            record[update] = output;
                            output = sizing;
                            record[result] = output;
                            output = _closure1_slot12;
                            target = output.GOOGLE;
                            output = 'payment_gateway';
                            record[output] = target;
                            target = backup;
                            record[kiloes] = target;
                            record = cntext.bind(papara)(record);
 557: // try_start_0
                            record = yankee;
                            if(record) { _fun00006_ip = 777; continue _fun00005 }
 566:
                            if(romeon) { _fun00006_ip = 777; continue _fun00005 }
 572:
                            record = _closure2_slot2;
                            romeon = record;
                            if(!record) { _fun00006_ip = 585; continue _fun00005 }
 582:
                            romeon = !vacuum;
 585:
                            if(romeon) { _fun00006_ip = 1024; continue _fun00005 }
 591:
                            record = _closure2_slot4;
                            record = option != record;
                            vacuum = record;
                            if(!record) { _fun00006_ip = 613; continue _fun00005 }
 605:
                            record = _closure2_slot5;
                            vacuum = option != record;
 613:
                            romeon = vacuum;
                            if(!vacuum) { _fun00006_ip = 627; continue _fun00005 }
 619:
                            vacuum = _closure2_slot3;
                            romeon = option != vacuum;
 627:
                            if(!romeon) { _fun00006_ip = 678; continue _fun00005 }
 630:
                            vacuum = _closure1_slot0;
                            record = _closure1_slot2;
                            romeon = 17;
                            romeon = record[romeon];
                            target = vacuum.bind(tangon)(romeon);
                            papara = target.updatePendingDowngrade;
                            equals = echoed;
                            whisks = _closure2_slot4;
                            limora = _closure2_slot5;
                            sierra = _closure2_slot3;
                            quebec = target;
                            romeon = quebec[papara](equals, whisks, limora, sierra, status);
 678:
                            record = echoed;
                            vacuum = _closure2_slot0;
                            romeon = function() { // Original name: validatePurchase
                                entity = undefined;
                                tangon = _closure1_slot13;
                                zuuluu = tangon.apply;
                                entity = arguments;
                                michal = entity;
                                entity = this;
                                entity = zuuluu.bind(tangon)(entity, michal);
                                return entity;
                            };
                            romeon = romeon.bind(tangon)(record, vacuum);
                            SaveGenerator(address=702);
 700:
                            return romeon;
 702:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=22);
                            if(vacuum) { _fun00006_ip = 774; continue _fun00005 }
 708:
                            record = _closure1_slot0;
                            cntext = _closure1_slot2;
                            vacuum = 17;
                            vacuum = cntext[vacuum];
                            target = record.bind(tangon)(vacuum);
                            papara = target.subscribe;
                            equals = echoed;
                            whisks = golfie;
                            limora = _closure2_slot4;
                            sierra = _closure2_slot5;
                            status = foxtra;
                            quebec = target;
                            foxtra = quebec[papara](equals, whisks, limora, sierra, status, target);
                            SaveGenerator(address=762);
 760:
                            return foxtra;
 762:
                            ResumeGenerator(result_out_reg=12, return_bool_out_reg=21);
                            if(!ctrled) { _fun00006_ip = 1024; continue _fun00005 }
 771: // try_end0
                            return foxtra;
 774:
                            return romeon;
 777: // try_start_1
                            if(!yankee) { _fun00006_ip = 979; continue _fun00005 }
 783:
                            yankee = offset;
                            if(!(option != yankee)) { _fun00006_ip = 979; continue _fun00005 }
 793:
                            cntext = _closure1_slot1;
                            yankee = _closure1_slot2;
                            vacuum = 16;
                            yankee = yankee[vacuum];
                            yankee = cntext.bind(tangon)(yankee);
                            ctrled = yankee.giftInfoOptionsCache;
                            for(yankee in ctrled)
 827:
                            {
 836:
                                papara = yankee;
                                target = _closure1_slot1;
                                cntext = _closure1_slot2;
                                cntext = cntext[vacuum];
                                cntext = target.bind(tangon)(cntext);
                                cntext = cntext.giftInfoOptionsCache;
                                cntext[papara] = tangon;
                                _fun00006_ip = 827; continue _fun00005;
                            }
 868:
                            ctrled = 0;
                            sequen = 0;
                            yankee = global;
                            romeon = yankee.Object;
                            yankee = romeon.entries;
                            offset = yankee.bind(romeon)(offset);
                            config = offset;
                            offset = offset.length;
                            foxtra = 2;
                            romeon = 1;
                            if(!(ctrled < offset)) { _fun00006_ip = 979; continue _fun00005 }
 909:
                            offset = config;
                            yankee = sequen;
                            cntext = offset[yankee];
                            record = _closure1_slot3;
                            record = record.bind(tangon)(cntext, foxtra);
                            papara = record[ctrled];
                            cntext = record[romeon];
                            target = _closure1_slot1;
                            record = _closure1_slot2;
                            record = record[vacuum];
                            record = target.bind(tangon)(record);
                            record = record.giftInfoOptionsCache;
                            record[papara] = cntext;
                            yankee = yankee + 1;
                            sequen = yankee;
                            offset = offset.length;
                            if(yankee < offset) { _fun00006_ip = 909; continue _fun00005 }
 979:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            offset = 17;
                            offset = romeon[offset];
                            romeon = yankee.bind(tangon)(offset);
                            yankee = romeon.purchase;
                            offset = echoed;
                            golfie = yankee.bind(romeon)(offset, golfie);
                            SaveGenerator(address=1018);
 1016:
                            return golfie;
 1018:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00006_ip = 1040; continue _fun00005 }
 1024:
                            offset = verify;
                            if(!(option != offset)) { _fun00006_ip = 1035; continue _fun00005 }
 1031:
                            verify = verify.bind(tangon)();
 1035: // try_end1
                            _fun00006_ip = 1213; continue _fun00005;
 1040:
                            return golfie;
 1043: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=9);
                            zuuluu = offset;
                            verify = _closure1_slot1;
                            yankee = _closure1_slot2;
                            golfie = 18;
                            golfie = yankee[golfie];
                            foxtra = verify.bind(tangon)(golfie);
                            romeon = foxtra.track;
                            golfie = _closure1_slot10;
                            verify = golfie.PAYMENT_FLOW_FAILED;
                            golfie = {};
                            whisks = source;
                            equals = golfie;
                            source = copyDataProperties(equals, whisks);
                            golfie[update] = echoed;
                            golfie[result] = sizing;
                            sizing = _closure1_slot12;
                            sizing = sizing.GOOGLE;
                            golfie[output] = sizing;
                            golfie[kiloes] = backup;
                            kiloes = offset.message;
                            backup = 'error_message';
                            golfie[backup] = kiloes;
                            golfie = romeon.bind(foxtra)(verify, golfie);
                            verify = _closure1_slot0;
                            golfie = 19;
                            golfie = yankee[golfie];
                            verify = verify.bind(tangon)(golfie);
                            golfie = verify.captureBillingException;
                            golfie = golfie.bind(verify)(offset);
                            golfie = oscard;
                            if(!(option != golfie)) { _fun00006_ip = 1183; continue _fun00005 }
 1179:
                            oscard = oscard.bind(tangon)();
 1183:
                            oscard = zuuluu;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            report = 10;
                            report = option[report];
                            report = golfie.bind(tangon)(report);
                            report = oscard instanceof report;
                            if(report) { _fun00006_ip = 1216; continue _fun00005 }
 1213:
                            return tangon;
 1216:
                            throw zuuluu;
 1218:
                            return michal;
 1221:
                            return entity;
                        }
                    };
                    michal = entity.next;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            michal = entity.bind(michal)();
            entity = new Array(6);
            entity[0] = offset;
            entity[1] = verify;
            entity[2] = option;
            entity[3] = golfie;
            entity[4] = oscard;
            entity[5] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useHandlePremiumPurchase'] = michal;
    return entity;
})();