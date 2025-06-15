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
        tangon = _closure1_slot3;
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
                    michal = 8;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    oscard = _closure1_slot10;
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
                    michal = 9;
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
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.setGPlayAnalytics;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot9 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGateways;
    var _closure1_slot11 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/handlePremiumPurchase.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useHandlePremiumPurchase
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 10;
            tangon = option[michal];
            michal = undefined;
            verify = report.bind(michal)(tangon);
            golfie = verify.useStateFromStores;
            tangon = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                michal = _closure1_slot7;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = golfie.bind(verify)(oscard, tangon);
            var _closure2_slot0 = oscard;
            tangon = 11;
            tangon = option[tangon];
            golfie = report.bind(michal)(tangon);
            tangon = golfie.usePremiumTrialOffer;
            golfie = tangon.bind(golfie)();
            var _closure2_slot1 = golfie;
            tangon = 12;
            tangon = option[tangon];
            report = report.bind(michal)(tangon);
            tangon = report.useIsEligibleForBogoPromotion;
            report = tangon.bind(report)();
            var _closure2_slot2 = report;
            tangon = null;
            yankee = tangon != oscard;
            var _closure2_slot3 = yankee;
            verify = tangon == oscard;
            option = undefined;
            if(verify) { _fun00004_ip = 135; continue _fun00003 }
 130:
            option = oscard.id;
 135:
            var _closure2_slot4 = option;
            verify = tangon == oscard;
            offset = undefined;
            if(verify) { _fun00004_ip = 154; continue _fun00003 }
 148:
            offset = oscard.paymentGatewayPlanId;
 154:
            var _closure2_slot5 = offset;
            tangon = tangon == oscard;
            verify = undefined;
            if(tangon) { _fun00004_ip = 173; continue _fun00003 }
 167:
            verify = oscard.paymentGatewaySubscriptionId;
 173:
            var _closure2_slot6 = verify;
            tangon = _closure1_slot4;
            zuuluu = tangon.useCallback;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            michal = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(tangon) { _fun00006_ip = 1244; continue _fun00005 }
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
                            offset = option;
                            option = michal.allowPlanChange;
                            if(!(option === tangon)) { _fun00006_ip = 87; continue _fun00005 }
 85:
                            option = true;
 87:
                            vacuum = option;
                            backup = michal.applicationId;
                            foxtra = michal.giftInfoOptions;
                            verify = michal.onPurchaseComplete;
                            oscard = michal.onPurchaseError;
                            golfie = undefined;
                            source = undefined;
                            romeon = undefined;
                            SaveGenerator(address=123);
 121:
                            return tangon;
 123:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00006_ip = 1241; continue _fun00005 }
 132:
                            kiloes = _closure1_slot6;
                            option = kiloes.getId;
                            golfie = option.bind(kiloes)();
                            kiloes = _closure1_slot8;
                            option = kiloes.getProduct;
                            config = echoed;
                            sequen = option.bind(kiloes)(config);
                            kiloes = _closure1_slot0;
                            output = _closure1_slot2;
                            option = 13;
                            option = output[option];
                            output = kiloes.bind(tangon)(option);
                            kiloes = output.getBasePurchaseFlowAnalyticsFields;
                            option = {};
                            record = yankee;
                            option['isGift'] = record;
                            option['analyticsLoadId'] = ctrled;
                            option['analyticsLocation'] = update;
                            option['analyticsLocations'] = result;
                            option = kiloes.bind(output)(option);
                            source = option;
                            ctrled = _closure1_slot5;
                            output = {};
                            limora = output;
                            sierra = option;
                            option = copyDataProperties(limora, sierra);
                            update = 'subscription_plan_gateway_plan_id';
                            output[update] = config;
                            option = sizing;
                            result = 'sku_id';
                            output[result] = option;
                            option = null;
                            kiloes = option == sequen;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 280; continue _fun00005 }
 274:
                            record = sequen.price;
 280:
                            kiloes = 'price';
                            output[kiloes] = record;
                            kiloes = option == sequen;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 304; continue _fun00005 }
 298:
                            record = sequen.price;
 304:
                            kiloes = 'regular_price';
                            output[kiloes] = record;
                            kiloes = option == sequen;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 338; continue _fun00005 }
 322:
                            cntext = sequen.currencyCode;
                            kiloes = cntext.toLowerCase;
                            record = kiloes.bind(cntext)();
 338:
                            kiloes = 'currency';
                            output[kiloes] = record;
                            record = backup;
                            kiloes = 'application_id';
                            output[kiloes] = record;
                            output = ctrled.bind(tangon)(config, output);
                            output = _closure2_slot1;
                            if(!(option != output)) { _fun00006_ip = 395; continue _fun00005 }
 376:
                            config = option == sequen;
                            output = undefined;
                            if(config) { _fun00006_ip = 391; continue _fun00005 }
 385:
                            output = sequen.offerIds;
 391:
                            if(!(option == output)) { _fun00006_ip = 470; continue _fun00005 }
 395:
                            sequen = _closure2_slot2;
                            output = null;
                            if(!sequen) { _fun00006_ip = 468; continue _fun00005 }
 404:
                            config = echoed;
                            cntext = _closure1_slot0;
                            sequen = _closure1_slot2;
                            record = 14;
                            sequen = sequen[record];
                            sequen = cntext.bind(tangon)(sequen);
                            sequen = sequen.ProductIds;
                            sequen = sequen.PREMIUM_TIER_2_MONTHLY;
                            output = null;
                            if(!(config === sequen)) { _fun00006_ip = 468; continue _fun00005 }
 445:
                            config = _closure1_slot0;
                            sequen = _closure1_slot2;
                            sequen = sequen[record];
                            sequen = config.bind(tangon)(sequen);
                            output = sequen.BOGO_OFFER_ID;
 468:
                            _fun00006_ip = 529; continue _fun00005;
 470:
                            config = _closure1_slot0;
                            record = _closure1_slot2;
                            sequen = 14;
                            sequen = record[sequen];
                            sequen = config.bind(tangon)(sequen);
                            config = sequen.TrialIdToProductOfferId;
                            sequen = _closure2_slot1;
                            sequen = sequen.trial_id;
                            record = config[sequen];
                            config = option == record;
                            sequen = undefined;
                            if(config) { _fun00006_ip = 526; continue _fun00005 }
 519:
                            config = echoed;
                            sequen = record[config];
 526:
                            output = sequen;
 529:
                            romeon = output;
                            sequen = _closure1_slot0;
                            config = _closure1_slot2;
                            output = 15;
                            output = config[output];
                            record = sequen.bind(tangon)(output);
                            config = record.trackPaymentFlowStartedAnalyticsAndCTP;
                            sequen = {};
                            sierra = source;
                            limora = sequen;
                            output = copyDataProperties(limora, sierra);
                            output = echoed;
                            sequen[update] = output;
                            output = sizing;
                            sequen[result] = output;
                            output = _closure1_slot11;
                            cntext = output.GOOGLE;
                            output = 'payment_gateway';
                            sequen[output] = cntext;
                            cntext = backup;
                            sequen[kiloes] = cntext;
                            sequen = config.bind(record)(sequen);
 618: // try_start_0
                            sequen = yankee;
                            if(sequen) { _fun00006_ip = 838; continue _fun00005 }
 627:
                            if(offset) { _fun00006_ip = 838; continue _fun00005 }
 633:
                            sequen = _closure2_slot3;
                            offset = sequen;
                            if(!sequen) { _fun00006_ip = 646; continue _fun00005 }
 643:
                            offset = !vacuum;
 646:
                            if(offset) { _fun00006_ip = 1047; continue _fun00005 }
 652:
                            sequen = _closure2_slot5;
                            sequen = option != sequen;
                            vacuum = sequen;
                            if(!sequen) { _fun00006_ip = 674; continue _fun00005 }
 666:
                            sequen = _closure2_slot6;
                            vacuum = option != sequen;
 674:
                            offset = vacuum;
                            if(!vacuum) { _fun00006_ip = 688; continue _fun00005 }
 680:
                            vacuum = _closure2_slot4;
                            offset = option != vacuum;
 688:
                            if(!offset) { _fun00006_ip = 739; continue _fun00005 }
 691:
                            vacuum = _closure1_slot0;
                            sequen = _closure1_slot2;
                            offset = 17;
                            offset = sequen[offset];
                            cntext = vacuum.bind(tangon)(offset);
                            record = cntext.updatePendingDowngrade;
                            limora = echoed;
                            sierra = _closure2_slot5;
                            status = _closure2_slot6;
                            target = _closure2_slot4;
                            whisks = cntext;
                            offset = whisks[record](limora, sierra, status, target, papara);
 739:
                            sequen = echoed;
                            vacuum = _closure2_slot0;
                            offset = function() { // Original name: validatePurchase
                                entity = undefined;
                                tangon = _closure1_slot12;
                                zuuluu = tangon.apply;
                                entity = arguments;
                                michal = entity;
                                entity = this;
                                entity = zuuluu.bind(tangon)(entity, michal);
                                return entity;
                            };
                            offset = offset.bind(tangon)(sequen, vacuum);
                            SaveGenerator(address=763);
 761:
                            return offset;
 763:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                            if(vacuum) { _fun00006_ip = 835; continue _fun00005 }
 769:
                            sequen = _closure1_slot0;
                            config = _closure1_slot2;
                            vacuum = 17;
                            vacuum = config[vacuum];
                            cntext = sequen.bind(tangon)(vacuum);
                            record = cntext.subscribe;
                            limora = echoed;
                            sierra = golfie;
                            status = _closure2_slot5;
                            target = _closure2_slot6;
                            papara = romeon;
                            whisks = cntext;
                            romeon = whisks[record](limora, sierra, status, target, papara, cntext);
                            SaveGenerator(address=823);
 821:
                            return romeon;
 823:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=21);
                            if(!ctrled) { _fun00006_ip = 1047; continue _fun00005 }
 832: // try_end0
                            return romeon;
 835:
                            return offset;
 838: // try_start_1
                            offset = yankee;
                            if(!yankee) { _fun00006_ip = 851; continue _fun00005 }
 844:
                            yankee = foxtra;
                            offset = option != yankee;
 851:
                            if(!offset) { _fun00006_ip = 1002; continue _fun00005 }
 857:
                            ctrled = _closure1_slot1;
                            yankee = _closure1_slot2;
                            romeon = 16;
                            yankee = yankee[romeon];
                            yankee = ctrled.bind(tangon)(yankee);
                            yankee = yankee.giftInfoOptionsCache;
                            yankee = option != yankee;
                            offset = yankee;
                            if(!yankee) { _fun00006_ip = 927; continue _fun00005 }
 893:
                            ctrled = _closure1_slot1;
                            yankee = _closure1_slot2;
                            yankee = yankee[romeon];
                            yankee = ctrled.bind(tangon)(yankee);
                            ctrled = yankee.giftInfoOptionsCache;
                            yankee = echoed;
                            yankee = ctrled[yankee];
                            offset = option != yankee;
 927:
                            if(!offset) { _fun00006_ip = 960; continue _fun00005 }
 930:
                            yankee = _closure1_slot1;
                            offset = _closure1_slot2;
                            offset = offset[romeon];
                            offset = yankee.bind(tangon)(offset);
                            yankee = offset.giftInfoOptionsCache;
                            offset = echoed;
                            offset = delete yankee[offset];
 960:
                            yankee = _closure1_slot1;
                            offset = _closure1_slot2;
                            offset = offset[romeon];
                            offset = yankee.bind(tangon)(offset);
                            romeon = offset.giftInfoOptionsCache;
                            yankee = echoed;
                            offset = {};
                            sierra = foxtra;
                            limora = offset;
                            foxtra = copyDataProperties(limora, sierra);
                            romeon[yankee] = offset;
 1002:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            offset = 17;
                            offset = romeon[offset];
                            romeon = yankee.bind(tangon)(offset);
                            yankee = romeon.purchase;
                            offset = echoed;
                            golfie = yankee.bind(romeon)(offset, golfie);
                            SaveGenerator(address=1041);
 1039:
                            return golfie;
 1041:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00006_ip = 1063; continue _fun00005 }
 1047:
                            offset = verify;
                            if(!(option != offset)) { _fun00006_ip = 1058; continue _fun00005 }
 1054:
                            verify = verify.bind(tangon)();
 1058: // try_end1
                            _fun00006_ip = 1236; continue _fun00005;
 1063:
                            return golfie;
 1066: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=9);
                            zuuluu = offset;
                            verify = _closure1_slot1;
                            yankee = _closure1_slot2;
                            golfie = 18;
                            golfie = yankee[golfie];
                            foxtra = verify.bind(tangon)(golfie);
                            romeon = foxtra.track;
                            golfie = _closure1_slot9;
                            verify = golfie.PAYMENT_FLOW_FAILED;
                            golfie = {};
                            sierra = source;
                            limora = golfie;
                            source = copyDataProperties(limora, sierra);
                            golfie[update] = echoed;
                            golfie[result] = sizing;
                            sizing = _closure1_slot11;
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
                            if(!(option != golfie)) { _fun00006_ip = 1206; continue _fun00005 }
 1202:
                            oscard = oscard.bind(tangon)();
 1206:
                            oscard = zuuluu;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            report = 9;
                            report = option[report];
                            report = golfie.bind(tangon)(report);
                            report = oscard instanceof report;
                            if(report) { _fun00006_ip = 1239; continue _fun00005 }
 1236:
                            return tangon;
 1239:
                            throw zuuluu;
 1241:
                            return michal;
 1244:
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
            entity = new Array(7);
            entity[0] = yankee;
            entity[1] = offset;
            entity[2] = verify;
            entity[3] = option;
            entity[4] = golfie;
            entity[5] = oscard;
            entity[6] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useHandlePremiumPurchase'] = michal;
    return entity;
})();