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
    tangon = 19;
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
            michal = 10;
            tangon = golfie[michal];
            michal = undefined;
            verify = oscard.bind(michal)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot7;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot7;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            report = option.bind(verify)(report, tangon);
            var _closure2_slot0 = report;
            tangon = 11;
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
                            if(tangon) { _fun00006_ip = 1179; continue _fun00005 }
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
                            if(report) { _fun00006_ip = 1176; continue _fun00005 }
 132:
                            kiloes = _closure1_slot6;
                            option = kiloes.getId;
                            golfie = option.bind(kiloes)();
                            kiloes = _closure1_slot8;
                            option = kiloes.getProduct;
                            sequen = echoed;
                            config = option.bind(kiloes)(sequen);
                            kiloes = _closure1_slot0;
                            output = _closure1_slot2;
                            option = 12;
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
                            output[update] = sequen;
                            option = sizing;
                            result = 'sku_id';
                            output[result] = option;
                            option = null;
                            kiloes = option == config;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 280; continue _fun00005 }
 274:
                            record = config.price;
 280:
                            kiloes = 'price';
                            output[kiloes] = record;
                            kiloes = option == config;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 304; continue _fun00005 }
 298:
                            record = config.price;
 304:
                            kiloes = 'regular_price';
                            output[kiloes] = record;
                            kiloes = option == config;
                            record = undefined;
                            if(kiloes) { _fun00006_ip = 338; continue _fun00005 }
 322:
                            cntext = config.currencyCode;
                            kiloes = cntext.toLowerCase;
                            record = kiloes.bind(cntext)();
 338:
                            kiloes = 'currency';
                            output[kiloes] = record;
                            record = backup;
                            kiloes = 'application_id';
                            output[kiloes] = record;
                            output = ctrled.bind(tangon)(sequen, output);
                            output = _closure2_slot1;
                            sequen = option != output;
                            output = null;
                            if(!sequen) { _fun00006_ip = 464; continue _fun00005 }
 381:
                            record = option == config;
                            sequen = undefined;
                            if(record) { _fun00006_ip = 396; continue _fun00005 }
 390:
                            sequen = config.offerIds;
 396:
                            sequen = option != sequen;
                            output = null;
                            if(!sequen) { _fun00006_ip = 464; continue _fun00005 }
 405:
                            config = _closure1_slot0;
                            record = _closure1_slot2;
                            sequen = 13;
                            sequen = record[sequen];
                            sequen = config.bind(tangon)(sequen);
                            config = sequen.TrialIdToProductOfferId;
                            sequen = _closure2_slot1;
                            sequen = sequen.trial_id;
                            record = config[sequen];
                            config = option == record;
                            sequen = undefined;
                            if(config) { _fun00006_ip = 461; continue _fun00005 }
 454:
                            config = echoed;
                            sequen = record[config];
 461:
                            output = sequen;
 464:
                            romeon = output;
                            sequen = _closure1_slot0;
                            config = _closure1_slot2;
                            output = 14;
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
 553: // try_start_0
                            sequen = yankee;
                            if(sequen) { _fun00006_ip = 773; continue _fun00005 }
 562:
                            if(offset) { _fun00006_ip = 773; continue _fun00005 }
 568:
                            sequen = _closure2_slot2;
                            offset = sequen;
                            if(!sequen) { _fun00006_ip = 581; continue _fun00005 }
 578:
                            offset = !vacuum;
 581:
                            if(offset) { _fun00006_ip = 982; continue _fun00005 }
 587:
                            sequen = _closure2_slot4;
                            sequen = option != sequen;
                            vacuum = sequen;
                            if(!sequen) { _fun00006_ip = 609; continue _fun00005 }
 601:
                            sequen = _closure2_slot5;
                            vacuum = option != sequen;
 609:
                            offset = vacuum;
                            if(!vacuum) { _fun00006_ip = 623; continue _fun00005 }
 615:
                            vacuum = _closure2_slot3;
                            offset = option != vacuum;
 623:
                            if(!offset) { _fun00006_ip = 674; continue _fun00005 }
 626:
                            vacuum = _closure1_slot0;
                            sequen = _closure1_slot2;
                            offset = 16;
                            offset = sequen[offset];
                            cntext = vacuum.bind(tangon)(offset);
                            record = cntext.updatePendingDowngrade;
                            limora = echoed;
                            sierra = _closure2_slot4;
                            status = _closure2_slot5;
                            target = _closure2_slot3;
                            whisks = cntext;
                            offset = whisks[record](limora, sierra, status, target, papara);
 674:
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
                            SaveGenerator(address=698);
 696:
                            return offset;
 698:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                            if(vacuum) { _fun00006_ip = 770; continue _fun00005 }
 704:
                            sequen = _closure1_slot0;
                            config = _closure1_slot2;
                            vacuum = 16;
                            vacuum = config[vacuum];
                            cntext = sequen.bind(tangon)(vacuum);
                            record = cntext.subscribe;
                            limora = echoed;
                            sierra = golfie;
                            status = _closure2_slot4;
                            target = _closure2_slot5;
                            papara = romeon;
                            whisks = cntext;
                            romeon = whisks[record](limora, sierra, status, target, papara, cntext);
                            SaveGenerator(address=758);
 756:
                            return romeon;
 758:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=21);
                            if(!ctrled) { _fun00006_ip = 982; continue _fun00005 }
 767: // try_end0
                            return romeon;
 770:
                            return offset;
 773: // try_start_1
                            offset = yankee;
                            if(!yankee) { _fun00006_ip = 786; continue _fun00005 }
 779:
                            yankee = foxtra;
                            offset = option != yankee;
 786:
                            if(!offset) { _fun00006_ip = 937; continue _fun00005 }
 792:
                            ctrled = _closure1_slot1;
                            yankee = _closure1_slot2;
                            romeon = 15;
                            yankee = yankee[romeon];
                            yankee = ctrled.bind(tangon)(yankee);
                            yankee = yankee.giftInfoOptionsCache;
                            yankee = option != yankee;
                            offset = yankee;
                            if(!yankee) { _fun00006_ip = 862; continue _fun00005 }
 828:
                            ctrled = _closure1_slot1;
                            yankee = _closure1_slot2;
                            yankee = yankee[romeon];
                            yankee = ctrled.bind(tangon)(yankee);
                            ctrled = yankee.giftInfoOptionsCache;
                            yankee = echoed;
                            yankee = ctrled[yankee];
                            offset = option != yankee;
 862:
                            if(!offset) { _fun00006_ip = 895; continue _fun00005 }
 865:
                            yankee = _closure1_slot1;
                            offset = _closure1_slot2;
                            offset = offset[romeon];
                            offset = yankee.bind(tangon)(offset);
                            yankee = offset.giftInfoOptionsCache;
                            offset = echoed;
                            offset = delete yankee[offset];
 895:
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
 937:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            offset = 16;
                            offset = romeon[offset];
                            romeon = yankee.bind(tangon)(offset);
                            yankee = romeon.purchase;
                            offset = echoed;
                            golfie = yankee.bind(romeon)(offset, golfie);
                            SaveGenerator(address=976);
 974:
                            return golfie;
 976:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00006_ip = 998; continue _fun00005 }
 982:
                            offset = verify;
                            if(!(option != offset)) { _fun00006_ip = 993; continue _fun00005 }
 989:
                            verify = verify.bind(tangon)();
 993: // try_end1
                            _fun00006_ip = 1171; continue _fun00005;
 998:
                            return golfie;
 1001: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=9);
                            zuuluu = offset;
                            verify = _closure1_slot1;
                            yankee = _closure1_slot2;
                            golfie = 17;
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
                            golfie = 18;
                            golfie = yankee[golfie];
                            verify = verify.bind(tangon)(golfie);
                            golfie = verify.captureBillingException;
                            golfie = golfie.bind(verify)(offset);
                            golfie = oscard;
                            if(!(option != golfie)) { _fun00006_ip = 1141; continue _fun00005 }
 1137:
                            oscard = oscard.bind(tangon)();
 1141:
                            oscard = zuuluu;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            report = 9;
                            report = option[report];
                            report = golfie.bind(tangon)(report);
                            report = oscard instanceof report;
                            if(report) { _fun00006_ip = 1174; continue _fun00005 }
 1171:
                            return tangon;
 1174:
                            throw zuuluu;
 1176:
                            return michal;
 1179:
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