// app/modules/premium/ReferralTrialActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun66605: for(var _fun66605_ip = 0; ; ) switch(_fun66605_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun66605_ip = 46; continue _fun66605 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun66605_ip = 55; continue _fun66605 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun66605_ip = 345; continue _fun66605 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun66605_ip = 323; continue _fun66605 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun66605_ip = 283; continue _fun66605 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun66605_ip = 270; continue _fun66605 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun66605_ip = 163; continue _fun66605 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun66605_ip = 179; continue _fun66605 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun66605_ip = 249; continue _fun66605 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun66605_ip = 249; continue _fun66605 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun66605_ip = 234; continue _fun66605 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun66605_ip = 247; continue _fun66605 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun66605_ip = 265; continue _fun66605;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun66605_ip = 283; continue _fun66605;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun66605_ip = 323; continue _fun66605 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun66605_ip = 330; continue _fun66605 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun66606: for(var _fun66606_ip = 0; ; ) switch(_fun66606_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun66606_ip = 56; continue _fun66606 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun66606_ip = 67; continue _fun66606;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun66607: for(var _fun66607_ip = 0; ; ) switch(_fun66607_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun66607_ip = 23; continue _fun66607 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun66607_ip = 33; continue _fun66607 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun66607_ip = 70; continue _fun66607 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun66607_ip = 55; continue _fun66607 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _fetchReferralEligibleUsers
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun66610: for(var _fun66610_ip = 0; ; ) switch(_fun66610_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    options = argBar;
                    verify = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66610_ip = 269; continue _fun66610 }
 19:
                    mike = global;
                    tango = mike.JSON;
                    zulu = tango.stringify;
                    mike = {};
                    mike['index'] = offset;
                    mike['searchQuery'] = options;
                    tango = zulu.bind(tango)(mike);
                    report = _closure1_slot12;
                    zulu = report.has;
                    zulu = zulu.bind(report)(tango);
                    if(zulu) { _fun66610_ip = 252; continue _fun66610 }
 72:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 7;
                    report = report[zulu];
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report);
                    oscar = zulu.HTTP;
                    report = oscar.post;
                    zulu = {};
                    golf = _closure1_slot9;
                    golf = golf.GET_REFERRAL_ELIGIBLE_USERS;
                    zulu['url'] = golf;
                    golf = {};
                    golf['index'] = offset;
                    offset = null;
                    if(!(offset == verify)) { _fun66610_ip = 137; continue _fun66610 }
 133:
                    verify = _closure1_slot10;
 137:
                    golf['limit'] = verify;
                    golf['search_query'] = options;
                    zulu['body'] = golf;
                    golf = true;
                    zulu['oldFormErrors'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    SaveGenerator(address=175);
 173:
                    return zulu;
 175:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun66610_ip = 249; continue _fun66610 }
 181:
                    report = zulu.body;
                    verify = report.users;
                    oscar = report.next_index;
                    report = {};
                    options = verify.map;
                    golf = function(argFoo) {
                        zulu = _closure1_slot6;
                        entity = zulu.prototype;
                        mike = Object.create(entity, {constructor: {value: zulu}});
                        tango = argFoo;
                        report = mike;
                        entity = new report[zulu](tango, zulu);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    golf = options.bind(verify)(golf);
                    report['users'] = golf;
                    report['nextIndex'] = oscar;
                    golf = _closure1_slot12;
                    oscar = golf.set;
                    oscar = oscar.bind(golf)(tango, report);
                    return report;
 249:
                    return zulu;
 252:
                    zulu = _closure1_slot12;
                    mike = zulu.get;
                    mike = mike.bind(zulu)(tango);
                    return mike;
 269:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _createReferralTrials
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun66614: for(var _fun66614_ip = 0; ; ) switch(_fun66614_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun66614_ip = 388; continue _fun66614 }
 10:
                    report = undefined;
                    offset = undefined;
                    mike = undefined;
                    yankee = undefined;
                    romeo = undefined;
                    foxtrot = undefined;
                    backup = undefined;
                    oscar = new Array(0);
                    zulu = global;
                    zulu = zulu.Map;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    control = tango;
                    zulu = new control[zulu](source);
                    mike = zulu instanceof Object ? zulu : tango;
                    golf = _closure1_slot13;
                    tango = argFoo;
                    tango = golf.bind(report)(tango);
                    yankee = tango;
                    tango = tango.bind(report)();
                    offset = tango;
                    tango = tango.done;
                    verify = 8;
                    options = null;
                    golf = 7;
                    if(tango) { _fun66614_ip = 338; continue _fun66614 }
 100:
                    tango = offset;
                    romeo = tango.value;
 108: // try_start_0
                    kilo = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    tango = kilo.bind(report)(tango);
                    sizing = tango.HTTP;
                    kilo = sizing.post;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    echo = _closure1_slot9;
                    result = echo.CREATE_REFERRAL;
                    output = romeo;
                    output = result.bind(echo)(output);
                    tango['url'] = output;
                    tango = kilo.bind(sizing)(tango);
                    SaveGenerator(address=179);
 177:
                    return tango;
 179:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(kilo) { _fun66614_ip = 257; continue _fun66614 }
 185:
                    kilo = tango.body;
                    foxtrot = kilo;
                    sizing = options != kilo;
                    kilo = null;
                    if(!sizing) { _fun66614_ip = 205; continue _fun66614 }
 202:
                    kilo = foxtrot;
 205:
                    backup = kilo;
                    if(!(options != kilo)) { _fun66614_ip = 228; continue _fun66614 }
 212:
                    output = oscar;
                    sizing = output.push;
                    kilo = backup;
                    kilo = sizing.bind(output)(kilo);
 228:
                    result = mike;
                    output = result.set;
                    sizing = romeo;
                    kilo = _closure1_slot11;
                    kilo = kilo.SUCCESS;
                    kilo = output.bind(result)(sizing, kilo);
 255: // try_end0
                    _fun66614_ip = 317; continue _fun66614;
 257:
                    return tango;
 260: // catch_target0
                    CatchBlockStart(arg_register=15);
                    kilo = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[verify];
                    kilo = kilo.bind(report)(tango);
                    tango = kilo.captureException;
                    tango = tango.bind(kilo)(sizing);
                    output = mike;
                    sizing = output.set;
                    kilo = romeo;
                    tango = _closure1_slot11;
                    tango = tango.FAIL;
                    tango = sizing.bind(output)(kilo, tango);
 317:
                    tango = yankee;
                    tango = tango.bind(report)();
                    offset = tango;
                    tango = tango.done;
                    if(!tango) { _fun66614_ip = 100; continue _fun66614 }
 338:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 6;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'CREATE_REFERRALS_SUCCESS';
                    zulu['type'] = golf;
                    zulu['userTrialOffers'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 388:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _createReferralTrial
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun66617: for(var _fun66617_ip = 0; ; ) switch(_fun66617_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66617_ip = 321; continue _fun66617 }
 10:
                    offset = argFoo;
                    mike = undefined;
                    options = undefined;
                    tango = undefined;
 19: // try_start_0
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 7;
                    report = verify[report];
                    report = golf.bind(mike)(report);
                    verify = report.HTTP;
                    golf = verify.post;
                    report = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeo = _closure1_slot9;
                    yankee = romeo.CREATE_REFERRAL;
                    offset = yankee.bind(romeo)(offset);
                    report['url'] = offset;
                    report = golf.bind(verify)(report);
                    SaveGenerator(address=93);
 91:
                    return report;
 93:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun66617_ip = 176; continue _fun66617 }
 99:
                    verify = report.body;
                    options = verify;
                    golf = null;
                    verify = golf != verify;
                    if(!verify) { _fun66617_ip = 119; continue _fun66617 }
 116:
                    golf = options;
 119:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 6;
                    oscar = verify[oscar];
                    verify = options.bind(mike)(oscar);
                    options = verify.dispatch;
                    oscar = {};
                    offset = 'BILLING_CREATE_REFERRAL_SUCCESS';
                    oscar['type'] = offset;
                    oscar['userTrialOffer'] = golf;
                    oscar = options.bind(verify)(oscar);
                    oscar = {};
                    oscar['userTrialOffer'] = golf;
 173: // try_end0
                    return oscar;
 176:
                    return report;
 179: // catch_target0
                    CatchBlockStart(arg_register=5);
                    zulu = oscar;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 6;
                    golf = verify[golf];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'BILLING_CREATE_REFERRAL_FAIL';
                    golf['type'] = offset;
                    golf = options.bind(verify)(golf);
                    oscar = oscar.body;
                    golf = oscar.code;
                    oscar = _closure1_slot8;
                    oscar = oscar.INVALID_MESSAGE_SEND_USER;
                    if(!(golf === oscar)) { _fun66617_ip = 318; continue _fun66617 }
 253:
                    golf = _closure1_slot7;
                    oscar = golf.getCurrentlySelectedChannelId;
                    golf = oscar.bind(golf)();
                    tango = golf;
                    oscar = null;
                    if(!(oscar != golf)) { _fun66617_ip = 318; continue _fun66617 }
 276:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 9;
                    report = golf[report];
                    oscar = oscar.bind(mike)(report);
                    report = oscar.sendClydeError;
                    zulu = zulu.body;
                    zulu = zulu.code;
                    zulu = report.bind(oscar)(tango, zulu);
 318:
                    return mike;
 321:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _resolveReferralTrialOffer
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun66620: for(var _fun66620_ip = 0; ; ) switch(_fun66620_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun66620_ip = 234; continue _fun66620 }
 10:
                    oscar = argFoo;
                    mike = undefined;
                    golf = undefined;
 17: // try_start_0
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    zulu = report.bind(mike)(zulu);
                    options = zulu.HTTP;
                    report = options.get;
                    zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    yankee = _closure1_slot9;
                    offset = yankee.REFERRAL_OFFER_ID_RESOLVE;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    zulu['url'] = verify;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=93);
 91:
                    return zulu;
 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun66620_ip = 176; continue _fun66620 }
 99:
                    options = zulu.body;
                    golf = options;
                    report = null;
                    options = report != options;
                    if(!options) { _fun66620_ip = 119; continue _fun66620 }
 116:
                    report = golf;
 119:
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 6;
                    tango = options[tango];
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    verify = 'BILLING_REFERRAL_RESOLVE_SUCCESS';
                    tango['type'] = verify;
                    tango['userTrialOffer'] = report;
                    tango = golf.bind(options)(tango);
                    tango = {};
                    tango['userTrialOffer'] = report;
 173: // try_end0
                    return tango;
 176:
                    return zulu;
 179: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 6;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'BILLING_REFERRAL_RESOLVE_FAIL';
                    zulu['type'] = golf;
                    zulu['userTrialOfferId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 234:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = options[yankee];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    offset = 2;
    tango = options[offset];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    verify = 3;
    tango = options[verify];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    report = tango.AbortCodes;
    var _closure1_slot8 = report;
    tango = tango.Endpoints;
    var _closure1_slot9 = tango;
    oscar = 10;
    var _closure1_slot10 = oscar;
    report = {};
    report['REDEEMED'] = yankee;
    tango = 'REDEEMED';
    report[yankee] = tango;
    report['PENDING'] = offset;
    tango = 'PENDING';
    report[offset] = tango;
    report['CONVERTED'] = verify;
    tango = 'CONVERTED';
    report[verify] = tango;
    tango = {};
    tango['SUCCESS'] = yankee;
    verify = 'SUCCESS';
    tango[yankee] = verify;
    tango['FAIL'] = offset;
    verify = 'FAIL';
    tango[offset] = verify;
    var _closure1_slot11 = tango;
    verify = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: EligibleUserCache
            zulu = this;
            tango = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = global;
            tango = mike.Map;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['cache'] = tango;
            tango = mike.Date;
            mike = tango.now;
            tango = mike.bind(tango)();
            mike = 600000;
            mike = tango + mike;
            zulu['expiration'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'set';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.cache;
            zulu = tango.set;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._checkExpiration;
            mike = mike.bind(entity)();
            zulu = entity.cache;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'has';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._checkExpiration;
            mike = mike.bind(entity)();
            zulu = entity.cache;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_checkExpiration';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun66626: for(var _fun66626_ip = 0; ; ) switch(_fun66626_ip) {
 0:
                entity = this;
                zulu = entity.expiration;
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                if(!(zulu < mike)) { _fun66626_ip = 46; continue _fun66626 }
 30:
                mike = entity.cache;
                entity = mike.clear;
                entity = entity.bind(mike)();
 46:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    verify = verify.bind(entity)();
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    kilo = offset;
    verify = new kilo[verify](backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot12 = verify;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/premium/ReferralTrialActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ReferralOfferStatus'] = report;
    zulu['CreateReferralStatus'] = tango;
    tango = function() {
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 6;
        mike = oscar[mike];
        tango = undefined;
        golf = zulu.bind(tango)(mike);
        zulu = golf.dispatch;
        mike = {};
        options = 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_START';
        mike['type'] = options;
        mike = zulu.bind(golf)(mike);
        zulu = _closure1_slot0;
        mike = 7;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot9;
        report = report.GET_REFERRAL_INCENTIVE_ELIGIBILITY;
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun66628: for(var _fun66628_ip = 0; ; ) switch(_fun66628_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS';
                mike['type'] = report;
                golf = oscar.body;
                report = null;
                golf = report != golf;
                if(!golf) { _fun66628_ip = 70; continue _fun66628 }
 59:
                oscar = oscar.body;
                report = oscar.is_eligible_for_incentive;
 70:
                mike['isUserEligibleForIncentive'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['fetchReferralIncentiveEligibility'] = tango;
    tango = function() { // Original name: fetchReferralEligibleUsers
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchReferralEligibleUsers'] = tango;
    tango = function() {
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 6;
        mike = oscar[mike];
        tango = undefined;
        golf = zulu.bind(tango)(mike);
        zulu = golf.dispatch;
        mike = {};
        options = 'BILLING_REFERRALS_REMAINING_FETCH_START';
        mike['type'] = options;
        mike = zulu.bind(golf)(mike);
        zulu = _closure1_slot0;
        mike = 7;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot9;
        report = report.GET_REFERRALS_REMAINING;
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun66632: for(var _fun66632_ip = 0; ; ) switch(_fun66632_ip) {
 0:
                oscar = argFoo;
                entity = global;
                entity = entity.Map;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                backup = mike;
                entity = new backup[entity](foxtrot);
                golf = entity instanceof Object ? entity : mike;
                entity = oscar.body;
                report = null;
                if(!(report != entity)) { _fun66632_ip = 116; continue _fun66632 }
 42:
                entity = oscar.body;
                entity = entity.recipient_status;
                if(!(report != entity)) { _fun66632_ip = 116; continue _fun66632 }
 57:
                entity = oscar.body;
                tango = entity.recipient_status;
                for(entity in tango)
 76:
                {
 85:
                    yankee = entity;
                    verify = oscar.body;
                    verify = verify.recipient_status;
                    offset = verify[yankee];
                    verify = golf.set;
                    verify = verify.bind(golf)(yankee, offset);
                    _fun66632_ip = 76; continue _fun66632;
                }
 116:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                options = 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS';
                mike['type'] = options;
                options = oscar.body;
                verify = report != options;
                options = 0;
                if(!verify) { _fun66632_ip = 203; continue _fun66632 }
 172:
                verify = oscar.body;
                verify = verify.referrals_remaining;
                verify = report != verify;
                options = 0;
                if(!verify) { _fun66632_ip = 203; continue _fun66632 }
 192:
                verify = oscar.body;
                options = verify.referrals_remaining;
 203:
                mike['referrals_remaining'] = options;
                options = oscar.body;
                if(!(report != options)) { _fun66632_ip = 232; continue _fun66632 }
 217:
                options = oscar.body;
                options = options.sent_user_ids;
                if(!(report == options)) { _fun66632_ip = 238; continue _fun66632 }
 232:
                options = new Array(0);
                _fun66632_ip = 249; continue _fun66632;
 238:
                verify = oscar.body;
                options = verify.sent_user_ids;
 249:
                mike['sent_user_ids'] = options;
                options = oscar.body;
                offset = report == options;
                verify = undefined;
                if(offset) { _fun66632_ip = 274; continue _fun66632 }
 268:
                verify = options.refresh_at;
 274:
                offset = report != verify;
                options = null;
                if(!offset) { _fun66632_ip = 286; continue _fun66632 }
 283:
                options = verify;
 286:
                mike['refresh_at'] = options;
                mike['recipient_status'] = golf;
                golf = oscar.body;
                golf = golf.has_eligible_friends;
                mike['has_eligible_friends'] = golf;
                golf = oscar.body;
                golf = golf.is_eligible_for_incentive;
                mike['isUserEligibleForIncentive'] = golf;
                golf = oscar.body;
                golf = golf.is_qualified_for_incentive;
                mike['isUserQualifiedForIncentive'] = golf;
                oscar = oscar.body;
                golf = report == oscar;
                report = undefined;
                if(golf) { _fun66632_ip = 368; continue _fun66632 }
 360:
                report = oscar.referral_incentive_status;
 368:
                mike['userReferralIncentiveState'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'BILLING_REFERRALS_REMAINING_FETCH_FAIL';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['fetchReferralsRemaining'] = tango;
    tango = function(argFoo) {
        golf = argFoo;
        var _closure2_slot0 = golf;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 6;
        mike = oscar[mike];
        tango = undefined;
        options = zulu.bind(tango)(mike);
        zulu = options.dispatch;
        mike = {};
        verify = 'BILLING_CREATE_REFERRAL_PREVIEW_START';
        mike['type'] = verify;
        mike['recipientId'] = golf;
        mike = zulu.bind(options)(mike);
        zulu = _closure1_slot0;
        mike = 7;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        oscar = _closure1_slot9;
        report = oscar.CREATE_REFERRAL_PREVIEW;
        report = report.bind(oscar)(golf);
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun66635: for(var _fun66635_ip = 0; ; ) switch(_fun66635_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['recipientId'] = report;
                golf = oscar.body;
                report = null;
                report = report != golf;
                if(!report) { _fun66635_ip = 82; continue _fun66635 }
 71:
                oscar = oscar.body;
                report = oscar.is_eligible;
 82:
                mike['is_eligible'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'BILLING_CREATE_REFERRAL_PREVIEW_FAIL';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['recipientId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['checkRecipientEligibility'] = tango;
    tango = function() { // Original name: createReferralTrials
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createReferralTrials'] = tango;
    tango = function() { // Original name: createReferralTrial
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createReferralTrial'] = tango;
    mike = function() { // Original name: resolveReferralTrialOffer
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['resolveReferralTrialOffer'] = mike;
    return entity;
})();