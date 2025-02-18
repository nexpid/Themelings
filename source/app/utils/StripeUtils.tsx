// app/utils/StripeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getStripe
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 81; continue _fun00001 }
 13:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.loadStripe;
            entity = _closure1_slot6;
            entity = entity.STRIPE;
            entity = entity.KEY;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.then;
            entity = function(argFoo) {
                entity = argFoo;
                var _closure1_slot2 = entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 104; continue _fun00001;
 81:
            zuuluu = global;
            tangon = zuuluu.Promise;
            zuuluu = tangon.resolve;
            michal = _closure1_slot2;
            entity = zuuluu.bind(tangon)(michal);
 104:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = function() { // Original name: _authenticatePaymentIntentForPaymentId
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 575; continue _fun00003 }
 10:
                    foxtra = argFoo;
                    tangon = undefined;
                    golfie = undefined;
                    offset = undefined;
                    oscard = undefined;
                    romeon = undefined;
                    report = undefined;
                    verify = undefined;
 27: // try_start_0
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot1;
                    michal = 4;
                    michal = option[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    option = michal.HTTP;
                    zuuluu = option.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    kiloes = _closure1_slot5;
                    backup = kiloes.BILLING_STRIPE_PAYMENT_INTENTS;
                    foxtra = backup.bind(kiloes)(foxtra);
                    michal['url'] = foxtra;
                    michal = zuuluu.bind(option)(michal);
                    SaveGenerator(address=100);
 98:
                    return michal;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 556; continue _fun00003 }
 109:
                    zuuluu = michal.body;
                    golfie = zuuluu.stripe_payment_intent_client_secret;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=132);
 130:
                    return zuuluu;
 132:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 553; continue _fun00003 }
 141:
                    offset = zuuluu;
                    option = null;
                    if(!(option != zuuluu)) { _fun00004_ip = 538; continue _fun00003 }
 153:
                    backup = offset;
                    foxtra = backup.retrievePaymentIntent;
                    tangon = golfie;
                    tangon = foxtra.bind(backup)(tangon);
                    SaveGenerator(address=174);
 172:
                    return tangon;
 174:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                    if(foxtra) { _fun00004_ip = 535; continue _fun00003 }
 183:
                    foxtra = tangon.error;
                    oscard = foxtra;
                    romeon = tangon.paymentIntent;
                    if(!(option == foxtra)) { _fun00004_ip = 521; continue _fun00003 }
 204:
                    foxtra = romeon;
                    if(!(option != foxtra)) { _fun00004_ip = 506; continue _fun00003 }
 214:
                    report = {};
                    kiloes = romeon;
                    sizing = kiloes.status;
                    kiloes = _closure1_slot7;
                    kiloes = kiloes.REQUIRES_PAYMENT_METHOD;
                    kiloes = sizing === kiloes;
                    backup = kiloes;
                    if(!kiloes) { _fun00004_ip = 257; continue _fun00003 }
 244:
                    kiloes = romeon;
                    kiloes = kiloes.last_payment_error;
                    backup = option != kiloes;
 257:
                    foxtra = backup;
                    if(!backup) { _fun00004_ip = 282; continue _fun00003 }
 263:
                    backup = romeon;
                    backup = backup.last_payment_error;
                    backup = backup.payment_method;
                    foxtra = option != backup;
 282:
                    if(!foxtra) { _fun00004_ip = 314; continue _fun00003 }
 285:
                    backup = report;
                    foxtra = romeon;
                    foxtra = foxtra.last_payment_error;
                    foxtra = foxtra.payment_method;
                    foxtra = foxtra.id;
                    backup['payment_method'] = foxtra;
 314:
                    foxtra = romeon;
                    backup = foxtra.status;
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.REQUIRES_PAYMENT_METHOD;
                    if(!(foxtra !== backup)) { _fun00004_ip = 445; continue _fun00003 }
 336:
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.REQUIRES_CONFIRMATION;
                    if(!(foxtra !== backup)) { _fun00004_ip = 445; continue _fun00003 }
 350:
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.REQUIRES_ACTION;
                    if(!(foxtra !== backup)) { _fun00004_ip = 445; continue _fun00003 }
 364:
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.SUCCEEDED;
                    if(!(foxtra !== backup)) { _fun00004_ip = 440; continue _fun00003 }
 378:
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.PROCESSING;
                    if(!(foxtra !== backup)) { _fun00004_ip = 440; continue _fun00003 }
 392:
                    yankee = _closure1_slot7;
                    yankee = yankee.CANCELED;
                    yankee = {};
                    backup = romeon.status;
                    romeon = global;
                    romeon = romeon.HermesInternal;
                    foxtra = romeon.concat;
                    romeon = 'Invalid Payment Intent status: ';
                    romeon = foxtra.bind(romeon)(backup);
                    yankee['error'] = romeon;
 437: // try_end0
                    return yankee;
 440:
                    yankee = {};
                    return yankee;
 445: // try_start_1
                    yankee = offset;
                    offset = yankee.confirmCardPayment;
                    report = offset.bind(yankee)(golfie, report);
                    SaveGenerator(address=464);
 462:
                    return report;
 464:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 503; continue _fun00003 }
 470:
                    golfie = report.error;
                    verify = golfie;
                    if(!(option == golfie)) { _fun00004_ip = 486; continue _fun00003 }
 482:
                    golfie = {};
                    _fun00004_ip = 500; continue _fun00003;
 486:
                    option = {};
                    verify = verify.message;
                    option['error'] = verify;
                    golfie = option;
 500: // try_end1
                    return golfie;
 503:
                    return report;
 506: // try_start_2
                    report = {};
                    golfie = 'payment intent does not exist';
                    report['error'] = golfie;
 518: // try_end2
                    return report;
 521: // try_start_3
                    report = {};
                    oscard = oscard.message;
                    report['error'] = oscard;
 532: // try_end3
                    return report;
 535:
                    return tangon;
 538: // try_start_4
                    tangon = {};
                    report = 'unable to load stripe';
                    tangon['error'] = report;
 550: // try_end4
                    return tangon;
 553:
                    return zuuluu;
 556:
                    return michal;
 559: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    michal = {};
                    zuuluu = zuuluu.message;
                    michal['error'] = zuuluu;
                    return michal;
 575:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Endpoints;
    var _closure1_slot5 = option;
    report = report.PaymentSettings;
    var _closure1_slot6 = report;
    report = {};
    option = 'requires_payment_method';
    report['REQUIRES_PAYMENT_METHOD'] = option;
    option = 'requires_confirmation';
    report['REQUIRES_CONFIRMATION'] = option;
    option = 'requires_action';
    report['REQUIRES_ACTION'] = option;
    option = 'processing';
    report['PROCESSING'] = option;
    option = 'canceled';
    report['CANCELED'] = option;
    option = 'succeeded';
    report['SUCCEEDED'] = option;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/StripeUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = undefined;
            michal = undefined;
            zuuluu = undefined;
 9: // try_start_0
            tangon = entity;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    report = function(argFoo) { // Original name: throwErr
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            report = _closure3_slot0;
                            michal = null;
                            michal = michal != entity;
                            tangon = '';
                            if(!michal) { _fun00010_ip = 26; continue _fun00009 }
 23:
                            tangon = entity;
 26:
                            entity = global;
                            entity = entity.HermesInternal;
                            zuuluu = entity.concat;
                            michal = 'You passed an invalid expiration date ';
                            entity = 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`';
                            entity = zuuluu.bind(michal)(report, tangon, entity);
                            return entity;
                        }
                    };
                    var _closure3_slot1 = report;
                    zuuluu = tangon.split;
                    michal = /[.\-\/\s]+/g;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    var _closure3_slot2 = zuuluu;
                    michal = zuuluu.length;
                    golfie = 2;
                    if(!(golfie !== michal)) { _fun00008_ip = 64; continue _fun00007 }
 58:
                    michal = undefined;
                    michal = report.bind(michal)();
 64:
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = global;
                            zuuluu = michal.parseInt;
                            tangon = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(tangon)(entity);
                            zuuluu = michal.isNaN;
                            zuuluu = zuuluu.bind(tangon)(entity);
                            if(!zuuluu) { _fun00012_ip = 75; continue _fun00011 }
 32:
                            report = _closure3_slot1;
                            option = _closure3_slot2;
                            zuuluu = michal.HermesInternal;
                            golfie = zuuluu.concat;
                            oscard = '';
                            zuuluu = ' is not a number.';
                            zuuluu = golfie.bind(oscard)(option, zuuluu);
                            zuuluu = report.bind(tangon)(zuuluu);
 75:
                            zuuluu = 1;
                            if(!(entity < zuuluu)) { _fun00012_ip = 121; continue _fun00011 }
 82:
                            zuuluu = _closure3_slot1;
                            michal = michal.HermesInternal;
                            oscard = michal.concat;
                            report = '';
                            michal = ' is less than one.';
                            michal = oscard.bind(report)(entity, michal);
                            michal = zuuluu.bind(tangon)(michal);
 121:
                            return entity;
                        }
                    };
                    tangon = michal.bind(zuuluu)(entity);
                    zuuluu = 0;
                    michal = tangon[zuuluu];
                    entity = 12;
                    if(!(!(michal > entity))) { _fun00008_ip = 117; continue _fun00007 }
 92:
                    michal = tangon[zuuluu];
                    oscard = new Array(2);
                    oscard[0] = michal;
                    michal = 1;
                    michal = tangon[michal];
                    oscard[1] = michal;
                    _fun00008_ip = 143; continue _fun00007;
 117:
                    michal = 1;
                    option = tangon[michal];
                    michal = new Array(2);
                    michal[0] = option;
                    tangon = tangon[zuuluu];
                    michal[1] = tangon;
                    oscard = michal;
 143:
                    tangon = _closure1_slot4;
                    michal = undefined;
                    oscard = tangon.bind(michal)(oscard, golfie);
                    zuuluu = oscard[zuuluu];
                    tangon = 1;
                    tangon = oscard[tangon];
                    if(!(zuuluu > entity)) { _fun00008_ip = 207; continue _fun00007 }
 173:
                    entity = global;
                    entity = entity.HermesInternal;
                    golfie = entity.concat;
                    oscard = 'Month must be a number 1-12, not ';
                    entity = '.';
                    entity = golfie.bind(oscard)(zuuluu, entity);
                    entity = report.bind(michal)(entity);
 207:
                    entity = 100;
                    michal = tangon;
                    if(!(michal < entity)) { _fun00008_ip = 227; continue _fun00007 }
 217:
                    entity = 2000;
                    michal = tangon + entity;
 227:
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            report = entity.bind(oscard)(tangon);
            tangon = _closure1_slot4;
            entity = 2;
            entity = tangon.bind(oscard)(report, entity);
            tangon = 0;
            michal = entity[tangon];
            report = 1;
            zuuluu = entity[report];
 53: // try_end0
            entity = global;
            oscard = entity.Date;
            option = zuuluu;
            golfie = michal;
            zuuluu = oscard.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
            verify = zuuluu;
            michal = new verify[oscard](option, golfie, oscard);
            michal = michal instanceof Object ? michal : zuuluu;
            entity = entity.Date;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            verify = zuuluu;
            entity = new verify[entity](option);
            entity = entity instanceof Object ? entity : zuuluu;
            tangon = michal.setMonth;
            zuuluu = michal.getMonth;
            zuuluu = zuuluu.bind(michal)();
            zuuluu = zuuluu - report;
            zuuluu = tangon.bind(michal)(zuuluu);
            tangon = michal.setMonth;
            zuuluu = michal.getMonth;
            zuuluu = zuuluu.bind(michal)();
            zuuluu = zuuluu + report;
            zuuluu = tangon.bind(michal)(zuuluu, report);
            entity = michal > entity;
            return entity;
 170: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = false;
            return entity;
        }
    };
    zuuluu['validateExpiry'] = report;
    zuuluu['getStripe'] = tangon;
    tangon = function(argFoo) { // Original name: parseStripePaymentMethod
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.billing_details;
            tangon = entity.address;
            report = null;
            if(!(report == tangon)) { _fun00014_ip = 23; continue _fun00013 }
 21:
            tangon = {};
 23:
            michal = {};
            golfie = entity.name;
            option = report != golfie;
            entity = '';
            oscard = entity;
            if(!option) { _fun00014_ip = 47; continue _fun00013 }
 44:
            oscard = golfie;
 47:
            michal['name'] = oscard;
            golfie = tangon.line1;
            option = report != golfie;
            oscard = entity;
            if(!option) { _fun00014_ip = 70; continue _fun00013 }
 67:
            oscard = golfie;
 70:
            michal['line1'] = oscard;
            golfie = tangon.line2;
            option = report != golfie;
            oscard = entity;
            if(!option) { _fun00014_ip = 94; continue _fun00013 }
 91:
            oscard = golfie;
 94:
            michal['line2'] = oscard;
            golfie = tangon.city;
            option = report != golfie;
            oscard = entity;
            if(!option) { _fun00014_ip = 118; continue _fun00013 }
 115:
            oscard = golfie;
 118:
            michal['city'] = oscard;
            golfie = tangon.state;
            option = report != golfie;
            oscard = entity;
            if(!option) { _fun00014_ip = 141; continue _fun00013 }
 138:
            oscard = golfie;
 141:
            michal['state'] = oscard;
            golfie = tangon.country;
            option = report != golfie;
            oscard = entity;
            if(!option) { _fun00014_ip = 164; continue _fun00013 }
 161:
            oscard = golfie;
 164:
            michal['country'] = oscard;
            tangon = tangon.postal_code;
            report = report != tangon;
            if(!report) { _fun00014_ip = 185; continue _fun00013 }
 182:
            entity = tangon;
 185:
            michal['postalCode'] = entity;
            entity = {};
            zuuluu = zuuluu.id;
            entity['token'] = zuuluu;
            entity['billingAddressInfo'] = michal;
            return entity;
        }
    };
    zuuluu['parseStripePaymentMethod'] = tangon;
    michal = function() { // Original name: authenticatePaymentIntentForPaymentId
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['authenticatePaymentIntentForPaymentId'] = michal;
    return entity;
})();