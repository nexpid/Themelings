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
                            if(tangon) { _fun00006_ip = 1266; continue _fun00005 }
 13:
                            echoed = michal.productId;
                            sizing = michal.skuId;
                            update = michal.analyticsLoadId;
                            result = michal.analyticsLocation;
                            output = michal.analyticsLocations;
                            option = michal.isGift;
                            tangon = undefined;
                            if(!(option === tangon)) { _fun00006_ip = 57; continue _fun00005 }
 55:
                            option = false;
 57:
                            vacuum = option;
                            option = michal.isOneTimePurchase;
                            if(!(option === tangon)) { _fun00006_ip = 72; continue _fun00005 }
 70:
                            option = false;
 72:
                            yankee = option;
                            option = michal.allowPlanChange;
                            if(!(option === tangon)) { _fun00006_ip = 87; continue _fun00005 }
 85:
                            option = true;
 87:
                            ctrled = option;
                            backup = michal.applicationId;
                            offset = michal.giftInfoOptions;
                            verify = michal.onPurchaseComplete;
                            oscard = michal.onPurchaseError;
                            golfie = undefined;
                            source = undefined;
                            romeon = undefined;
                            sequen = undefined;
                            config = undefined;
                            SaveGenerator(address=127);
 125:
                            return tangon;
 127:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00006_ip = 1263; continue _fun00005 }
 136:
                            foxtra = _closure1_slot7;
                            option = foxtra.getId;
                            golfie = option.bind(foxtra)();
                            foxtra = _closure1_slot9;
                            option = foxtra.getProduct;
                            record = echoed;
                            cntext = option.bind(foxtra)(record);
                            foxtra = _closure1_slot0;
                            kiloes = _closure1_slot2;
                            option = 13;
                            option = kiloes[option];
                            kiloes = foxtra.bind(tangon)(option);
                            foxtra = kiloes.getBasePurchaseFlowAnalyticsFields;
                            option = {};
                            papara = vacuum;
                            option['isGift'] = papara;
                            option['analyticsLoadId'] = update;
                            option['analyticsLocation'] = result;
                            option['analyticsLocations'] = output;
                            option = foxtra.bind(kiloes)(option);
                            source = option;
                            output = _closure1_slot6;
                            foxtra = {};
                            equals = foxtra;
                            whisks = option;
                            option = copyDataProperties(equals, whisks);
                            update = 'subscription_plan_gateway_plan_id';
                            foxtra[update] = record;
                            option = sizing;
                            result = 'sku_id';
                            foxtra[result] = option;
                            option = null;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 284; continue _fun00005 }
 278:
                            papara = cntext.price;
 284:
                            kiloes = 'price';
                            foxtra[kiloes] = papara;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 308; continue _fun00005 }
 302:
                            papara = cntext.price;
 308:
                            kiloes = 'regular_price';
                            foxtra[kiloes] = papara;
                            kiloes = option == cntext;
                            papara = undefined;
                            if(kiloes) { _fun00006_ip = 342; continue _fun00005 }
 326:
                            target = cntext.currencyCode;
                            kiloes = target.toLowerCase;
                            papara = kiloes.bind(target)();
 342:
                            kiloes = 'currency';
                            foxtra[kiloes] = papara;
                            papara = backup;
                            kiloes = 'application_id';
                            foxtra[kiloes] = papara;
                            foxtra = output.bind(tangon)(record, foxtra);
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
                            romeon = output;
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
                            if(vacuum) { _fun00006_ip = 828; continue _fun00005 }
 563:
                            if(yankee) { _fun00006_ip = 774; continue _fun00005 }
 569:
                            vacuum = _closure2_slot2;
                            yankee = vacuum;
                            if(!vacuum) { _fun00006_ip = 582; continue _fun00005 }
 579:
                            yankee = !ctrled;
 582:
                            if(yankee) { _fun00006_ip = 1069; continue _fun00005 }
 588:
                            vacuum = _closure2_slot4;
                            vacuum = option != vacuum;
                            ctrled = vacuum;
                            if(!vacuum) { _fun00006_ip = 610; continue _fun00005 }
 602:
                            vacuum = _closure2_slot5;
                            ctrled = option != vacuum;
 610:
                            yankee = ctrled;
                            if(!ctrled) { _fun00006_ip = 624; continue _fun00005 }
 616:
                            ctrled = _closure2_slot3;
                            yankee = option != ctrled;
 624:
                            if(!yankee) { _fun00006_ip = 675; continue _fun00005 }
 627:
                            ctrled = _closure1_slot0;
                            vacuum = _closure1_slot2;
                            yankee = 17;
                            yankee = vacuum[yankee];
                            papara = ctrled.bind(tangon)(yankee);
                            cntext = papara.updatePendingDowngrade;
                            equals = echoed;
                            whisks = _closure2_slot4;
                            limora = _closure2_slot5;
                            sierra = _closure2_slot3;
                            quebec = papara;
                            yankee = quebec[cntext](equals, whisks, limora, sierra, status);
 675:
                            vacuum = echoed;
                            ctrled = _closure2_slot0;
                            yankee = function() { // Original name: validatePurchase
                                entity = undefined;
                                tangon = _closure1_slot13;
                                zuuluu = tangon.apply;
                                entity = arguments;
                                michal = entity;
                                entity = this;
                                entity = zuuluu.bind(tangon)(entity, michal);
                                return entity;
                            };
                            yankee = yankee.bind(tangon)(vacuum, ctrled);
                            SaveGenerator(address=699);
 697:
                            return yankee;
 699:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=21);
                            if(ctrled) { _fun00006_ip = 771; continue _fun00005 }
 705:
                            vacuum = _closure1_slot0;
                            record = _closure1_slot2;
                            ctrled = 17;
                            ctrled = record[ctrled];
                            papara = vacuum.bind(tangon)(ctrled);
                            cntext = papara.subscribe;
                            equals = echoed;
                            whisks = golfie;
                            limora = _closure2_slot4;
                            sierra = _closure2_slot5;
                            status = romeon;
                            quebec = papara;
                            romeon = quebec[cntext](equals, whisks, limora, sierra, status, target);
                            SaveGenerator(address=759);
 757:
                            return romeon;
 759:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                            if(!foxtra) { _fun00006_ip = 1069; continue _fun00005 }
 768: // try_end0
                            return romeon;
 771:
                            return yankee;
 774: // try_start_1
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            yankee = 17;
                            yankee = foxtra[yankee];
                            ctrled = romeon.bind(tangon)(yankee);
                            foxtra = ctrled.purchase;
                            romeon = echoed;
                            yankee = golfie;
                            yankee = foxtra.bind(ctrled)(romeon, yankee);
                            SaveGenerator(address=816);
 814:
                            return yankee;
 816:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                            if(!romeon) { _fun00006_ip = 1069; continue _fun00005 }
 825: // try_end1
                            return yankee;
 828: // try_start_2
                            yankee = offset;
                            if(!(option != yankee)) { _fun00006_ip = 1024; continue _fun00005 }
 838:
                            cntext = _closure1_slot1;
                            yankee = _closure1_slot2;
                            vacuum = 16;
                            yankee = yankee[vacuum];
                            yankee = cntext.bind(tangon)(yankee);
                            ctrled = yankee.giftInfoOptionsCache;
                            for(yankee in ctrled)
 872:
                            {
 881:
                                papara = yankee;
                                target = _closure1_slot1;
                                cntext = _closure1_slot2;
                                cntext = cntext[vacuum];
                                cntext = target.bind(tangon)(cntext);
                                cntext = cntext.giftInfoOptionsCache;
                                cntext[papara] = tangon;
                                _fun00006_ip = 872; continue _fun00005;
                            }
 913:
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
                            if(!(ctrled < offset)) { _fun00006_ip = 1024; continue _fun00005 }
 954:
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
                            if(yankee < offset) { _fun00006_ip = 954; continue _fun00005 }
 1024:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            offset = 17;
                            offset = romeon[offset];
                            romeon = yankee.bind(tangon)(offset);
                            yankee = romeon.purchase;
                            offset = echoed;
                            golfie = yankee.bind(romeon)(offset, golfie);
                            SaveGenerator(address=1063);
 1061:
                            return golfie;
 1063:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00006_ip = 1085; continue _fun00005 }
 1069:
                            offset = verify;
                            if(!(option != offset)) { _fun00006_ip = 1080; continue _fun00005 }
 1076:
                            verify = verify.bind(tangon)();
 1080: // try_end2
                            _fun00006_ip = 1258; continue _fun00005;
 1085:
                            return golfie;
 1088: // catch_target0 // catch_target1 // catch_target2
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
                            if(!(option != golfie)) { _fun00006_ip = 1228; continue _fun00005 }
 1224:
                            oscard = oscard.bind(tangon)();
 1228:
                            oscard = zuuluu;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            report = 10;
                            report = option[report];
                            report = golfie.bind(tangon)(report);
                            report = oscard instanceof report;
                            if(report) { _fun00006_ip = 1261; continue _fun00005 }
 1258:
                            return tangon;
 1261:
                            throw zuuluu;
 1263:
                            return michal;
 1266:
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