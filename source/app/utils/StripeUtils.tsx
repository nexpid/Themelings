// app/utils/StripeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function() { // Original name: getStripe
        _fun56006: for(var _fun56006_ip = 0; ; ) switch(_fun56006_ip) {
 0:
            zulu = _closure1_slot2;
            entity = null;
            if(!(entity == zulu)) { _fun56006_ip = 81; continue _fun56006 }
 13:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.loadStripe;
            entity = _closure1_slot6;
            entity = entity.STRIPE;
            entity = entity.KEY;
            tango = zulu.bind(tango)(entity);
            zulu = tango.then;
            entity = function(argFoo) {
                entity = argFoo;
                var _closure1_slot2 = entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            _fun56006_ip = 104; continue _fun56006;
 81:
            zulu = global;
            tango = zulu.Promise;
            zulu = tango.resolve;
            mike = _closure1_slot2;
            entity = zulu.bind(tango)(mike);
 104:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = function() { // Original name: _authenticatePaymentIntentForPaymentId
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun56010: for(var _fun56010_ip = 0; ; ) switch(_fun56010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun56010_ip = 575; continue _fun56010 }
 10:
                    foxtrot = argFoo;
                    tango = undefined;
                    golf = undefined;
                    offset = undefined;
                    oscar = undefined;
                    romeo = undefined;
                    report = undefined;
                    verify = undefined;
 27: // try_start_0
                    zulu = _closure1_slot0;
                    options = _closure1_slot1;
                    mike = 4;
                    mike = options[mike];
                    mike = zulu.bind(tango)(mike);
                    options = mike.HTTP;
                    zulu = options.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    kilo = _closure1_slot5;
                    backup = kilo.BILLING_STRIPE_PAYMENT_INTENTS;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    mike['url'] = foxtrot;
                    mike = zulu.bind(options)(mike);
                    SaveGenerator(address=100);
 98:
                    return mike;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun56010_ip = 556; continue _fun56010 }
 109:
                    zulu = mike.body;
                    golf = zulu.stripe_payment_intent_client_secret;
                    zulu = _closure1_slot8;
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=132);
 130:
                    return zulu;
 132:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun56010_ip = 553; continue _fun56010 }
 141:
                    offset = zulu;
                    options = null;
                    if(!(options != zulu)) { _fun56010_ip = 538; continue _fun56010 }
 153:
                    backup = offset;
                    foxtrot = backup.retrievePaymentIntent;
                    tango = golf;
                    tango = foxtrot.bind(backup)(tango);
                    SaveGenerator(address=174);
 172:
                    return tango;
 174:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                    if(foxtrot) { _fun56010_ip = 535; continue _fun56010 }
 183:
                    foxtrot = tango.error;
                    oscar = foxtrot;
                    romeo = tango.paymentIntent;
                    if(!(options == foxtrot)) { _fun56010_ip = 521; continue _fun56010 }
 204:
                    foxtrot = romeo;
                    if(!(options != foxtrot)) { _fun56010_ip = 506; continue _fun56010 }
 214:
                    report = {};
                    kilo = romeo;
                    sizing = kilo.status;
                    kilo = _closure1_slot7;
                    kilo = kilo.REQUIRES_PAYMENT_METHOD;
                    kilo = sizing === kilo;
                    backup = kilo;
                    if(!kilo) { _fun56010_ip = 257; continue _fun56010 }
 244:
                    kilo = romeo;
                    kilo = kilo.last_payment_error;
                    backup = options != kilo;
 257:
                    foxtrot = backup;
                    if(!backup) { _fun56010_ip = 282; continue _fun56010 }
 263:
                    backup = romeo;
                    backup = backup.last_payment_error;
                    backup = backup.payment_method;
                    foxtrot = options != backup;
 282:
                    if(!foxtrot) { _fun56010_ip = 314; continue _fun56010 }
 285:
                    backup = report;
                    foxtrot = romeo;
                    foxtrot = foxtrot.last_payment_error;
                    foxtrot = foxtrot.payment_method;
                    foxtrot = foxtrot.id;
                    backup['payment_method'] = foxtrot;
 314:
                    foxtrot = romeo;
                    backup = foxtrot.status;
                    foxtrot = _closure1_slot7;
                    foxtrot = foxtrot.REQUIRES_PAYMENT_METHOD;
                    if(!(foxtrot !== backup)) { _fun56010_ip = 445; continue _fun56010 }
 336:
                    foxtrot = _closure1_slot7;
                    foxtrot = foxtrot.REQUIRES_CONFIRMATION;
                    if(!(foxtrot !== backup)) { _fun56010_ip = 445; continue _fun56010 }
 350:
                    foxtrot = _closure1_slot7;
                    foxtrot = foxtrot.REQUIRES_ACTION;
                    if(!(foxtrot !== backup)) { _fun56010_ip = 445; continue _fun56010 }
 364:
                    foxtrot = _closure1_slot7;
                    foxtrot = foxtrot.SUCCEEDED;
                    if(!(foxtrot !== backup)) { _fun56010_ip = 440; continue _fun56010 }
 378:
                    foxtrot = _closure1_slot7;
                    foxtrot = foxtrot.PROCESSING;
                    if(!(foxtrot !== backup)) { _fun56010_ip = 440; continue _fun56010 }
 392:
                    yankee = _closure1_slot7;
                    yankee = yankee.CANCELED;
                    yankee = {};
                    backup = romeo.status;
                    romeo = global;
                    romeo = romeo.HermesInternal;
                    foxtrot = romeo.concat;
                    romeo = 'Invalid Payment Intent status: ';
                    romeo = foxtrot.bind(romeo)(backup);
                    yankee['error'] = romeo;
 437: // try_end0
                    return yankee;
 440:
                    yankee = {};
                    return yankee;
 445: // try_start_1
                    yankee = offset;
                    offset = yankee.confirmCardPayment;
                    report = offset.bind(yankee)(golf, report);
                    SaveGenerator(address=464);
 462:
                    return report;
 464:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun56010_ip = 503; continue _fun56010 }
 470:
                    golf = report.error;
                    verify = golf;
                    if(!(options == golf)) { _fun56010_ip = 486; continue _fun56010 }
 482:
                    golf = {};
                    _fun56010_ip = 500; continue _fun56010;
 486:
                    options = {};
                    verify = verify.message;
                    options['error'] = verify;
                    golf = options;
 500: // try_end1
                    return golf;
 503:
                    return report;
 506: // try_start_2
                    report = {};
                    golf = 'payment intent does not exist';
                    report['error'] = golf;
 518: // try_end2
                    return report;
 521: // try_start_3
                    report = {};
                    oscar = oscar.message;
                    report['error'] = oscar;
 532: // try_end3
                    return report;
 535:
                    return tango;
 538: // try_start_4
                    tango = {};
                    report = 'unable to load stripe';
                    tango['error'] = report;
 550: // try_end4
                    return tango;
 553:
                    return zulu;
 556:
                    return mike;
 559: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    mike = {};
                    zulu = zulu.message;
                    mike['error'] = zulu;
                    return mike;
 575:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Endpoints;
    var _closure1_slot5 = options;
    report = report.PaymentSettings;
    var _closure1_slot6 = report;
    report = {};
    options = 'requires_payment_method';
    report['REQUIRES_PAYMENT_METHOD'] = options;
    options = 'requires_confirmation';
    report['REQUIRES_CONFIRMATION'] = options;
    options = 'requires_action';
    report['REQUIRES_ACTION'] = options;
    options = 'processing';
    report['PROCESSING'] = options;
    options = 'canceled';
    report['CANCELED'] = options;
    options = 'succeeded';
    report['SUCCEEDED'] = options;
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/StripeUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) {
        _fun56011: for(var _fun56011_ip = 0; ; ) switch(_fun56011_ip) {
 0:
            entity = argFoo;
            oscar = undefined;
            mike = undefined;
            zulu = undefined;
 9: // try_start_0
            tango = entity;
            entity = function(argFoo) {
                _fun56012: for(var _fun56012_ip = 0; ; ) switch(_fun56012_ip) {
 0:
                    tango = argFoo;
                    var _closure3_slot0 = tango;
                    report = function(argFoo) { // Original name: throwErr
                        _fun56013: for(var _fun56013_ip = 0; ; ) switch(_fun56013_ip) {
 0:
                            entity = argFoo;
                            report = _closure3_slot0;
                            mike = null;
                            mike = mike != entity;
                            tango = '';
                            if(!mike) { _fun56013_ip = 26; continue _fun56013 }
 23:
                            tango = entity;
 26:
                            entity = global;
                            entity = entity.HermesInternal;
                            zulu = entity.concat;
                            mike = 'You passed an invalid expiration date ';
                            entity = 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`';
                            entity = zulu.bind(mike)(report, tango, entity);
                            return entity;
                        }
                    };
                    var _closure3_slot1 = report;
                    zulu = tango.split;
                    mike = /[.\-\/\s]+/g;
                    zulu = zulu.bind(tango)(mike);
                    var _closure3_slot2 = zulu;
                    mike = zulu.length;
                    golf = 2;
                    if(!(golf !== mike)) { _fun56012_ip = 64; continue _fun56012 }
 58:
                    mike = undefined;
                    mike = report.bind(mike)();
 64:
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun56014: for(var _fun56014_ip = 0; ; ) switch(_fun56014_ip) {
 0:
                            mike = global;
                            zulu = mike.parseInt;
                            tango = undefined;
                            entity = argFoo;
                            entity = zulu.bind(tango)(entity);
                            zulu = mike.isNaN;
                            zulu = zulu.bind(tango)(entity);
                            if(!zulu) { _fun56014_ip = 75; continue _fun56014 }
 32:
                            report = _closure3_slot1;
                            options = _closure3_slot2;
                            zulu = mike.HermesInternal;
                            golf = zulu.concat;
                            oscar = '';
                            zulu = ' is not a number.';
                            zulu = golf.bind(oscar)(options, zulu);
                            zulu = report.bind(tango)(zulu);
 75:
                            zulu = 1;
                            if(!(entity < zulu)) { _fun56014_ip = 121; continue _fun56014 }
 82:
                            zulu = _closure3_slot1;
                            mike = mike.HermesInternal;
                            oscar = mike.concat;
                            report = '';
                            mike = ' is less than one.';
                            mike = oscar.bind(report)(entity, mike);
                            mike = zulu.bind(tango)(mike);
 121:
                            return entity;
                        }
                    };
                    tango = mike.bind(zulu)(entity);
                    zulu = 0;
                    mike = tango[zulu];
                    entity = 12;
                    if(!(!(mike > entity))) { _fun56012_ip = 117; continue _fun56012 }
 92:
                    mike = tango[zulu];
                    oscar = new Array(2);
                    oscar[0] = mike;
                    mike = 1;
                    mike = tango[mike];
                    oscar[1] = mike;
                    _fun56012_ip = 143; continue _fun56012;
 117:
                    mike = 1;
                    options = tango[mike];
                    mike = new Array(2);
                    mike[0] = options;
                    tango = tango[zulu];
                    mike[1] = tango;
                    oscar = mike;
 143:
                    tango = _closure1_slot4;
                    mike = undefined;
                    oscar = tango.bind(mike)(oscar, golf);
                    zulu = oscar[zulu];
                    tango = 1;
                    tango = oscar[tango];
                    if(!(zulu > entity)) { _fun56012_ip = 207; continue _fun56012 }
 173:
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    oscar = 'Month must be a number 1-12, not ';
                    entity = '.';
                    entity = golf.bind(oscar)(zulu, entity);
                    entity = report.bind(mike)(entity);
 207:
                    entity = 100;
                    mike = tango;
                    if(!(mike < entity)) { _fun56012_ip = 227; continue _fun56012 }
 217:
                    entity = 2000;
                    mike = tango + entity;
 227:
                    entity = new Array(2);
                    entity[0] = zulu;
                    entity[1] = mike;
                    return entity;
                }
            };
            report = entity.bind(oscar)(tango);
            tango = _closure1_slot4;
            entity = 2;
            entity = tango.bind(oscar)(report, entity);
            tango = 0;
            mike = entity[tango];
            report = 1;
            zulu = entity[report];
 53: // try_end0
            entity = global;
            oscar = entity.Date;
            options = zulu;
            golf = mike;
            zulu = oscar.prototype;
            zulu = Object.create(zulu, {constructor: {value: oscar}});
            verify = zulu;
            mike = new verify[oscar](options, golf, oscar);
            mike = mike instanceof Object ? mike : zulu;
            entity = entity.Date;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            verify = zulu;
            entity = new verify[entity](options);
            entity = entity instanceof Object ? entity : zulu;
            tango = mike.setMonth;
            zulu = mike.getMonth;
            zulu = zulu.bind(mike)();
            zulu = zulu - report;
            zulu = tango.bind(mike)(zulu);
            tango = mike.setMonth;
            zulu = mike.getMonth;
            zulu = zulu.bind(mike)();
            zulu = zulu + report;
            zulu = tango.bind(mike)(zulu, report);
            entity = mike > entity;
            return entity;
 170: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = false;
            return entity;
        }
    };
    zulu['validateExpiry'] = report;
    zulu['getStripe'] = tango;
    tango = function(argFoo) { // Original name: parseStripePaymentMethod
        _fun56015: for(var _fun56015_ip = 0; ; ) switch(_fun56015_ip) {
 0:
            zulu = argFoo;
            entity = zulu.billing_details;
            tango = entity.address;
            report = null;
            if(!(report == tango)) { _fun56015_ip = 23; continue _fun56015 }
 21:
            tango = {};
 23:
            mike = {};
            golf = entity.name;
            options = report != golf;
            entity = '';
            oscar = entity;
            if(!options) { _fun56015_ip = 47; continue _fun56015 }
 44:
            oscar = golf;
 47:
            mike['name'] = oscar;
            golf = tango.line1;
            options = report != golf;
            oscar = entity;
            if(!options) { _fun56015_ip = 70; continue _fun56015 }
 67:
            oscar = golf;
 70:
            mike['line1'] = oscar;
            golf = tango.line2;
            options = report != golf;
            oscar = entity;
            if(!options) { _fun56015_ip = 94; continue _fun56015 }
 91:
            oscar = golf;
 94:
            mike['line2'] = oscar;
            golf = tango.city;
            options = report != golf;
            oscar = entity;
            if(!options) { _fun56015_ip = 118; continue _fun56015 }
 115:
            oscar = golf;
 118:
            mike['city'] = oscar;
            golf = tango.state;
            options = report != golf;
            oscar = entity;
            if(!options) { _fun56015_ip = 141; continue _fun56015 }
 138:
            oscar = golf;
 141:
            mike['state'] = oscar;
            golf = tango.country;
            options = report != golf;
            oscar = entity;
            if(!options) { _fun56015_ip = 164; continue _fun56015 }
 161:
            oscar = golf;
 164:
            mike['country'] = oscar;
            tango = tango.postal_code;
            report = report != tango;
            if(!report) { _fun56015_ip = 185; continue _fun56015 }
 182:
            entity = tango;
 185:
            mike['postalCode'] = entity;
            entity = {};
            zulu = zulu.id;
            entity['token'] = zulu;
            entity['billingAddressInfo'] = mike;
            return entity;
        }
    };
    zulu['parseStripePaymentMethod'] = tango;
    mike = function() { // Original name: authenticatePaymentIntentForPaymentId
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['authenticatePaymentIntentForPaymentId'] = mike;
    return entity;
})();