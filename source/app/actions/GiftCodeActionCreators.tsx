// app/actions/GiftCodeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function() { // Original name: resolveGiftCode
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    entity = function() { // Original name: _resolveGiftCode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun69650: for(var _fun69650_ip = 0; ; ) switch(_fun69650_ip) {
 0:
                    StartGenerator();
                    options = arguments[1];
                    mike = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun69650_ip = 449; continue _fun69650 }
 16:
                    golf = argFoo;
                    oscar = undefined;
                    if(!(options === oscar)) { _fun69650_ip = 27; continue _fun69650 }
 25:
                    options = false;
 27:
                    report = options;
                    if(!(mike === oscar)) { _fun69650_ip = 36; continue _fun69650 }
 34:
                    mike = false;
 36:
                    zulu = mike;
                    offset = undefined;
                    SaveGenerator(address=45);
 43:
                    return oscar;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun69650_ip = 446; continue _fun69650 }
 54:
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    options = 4;
                    verify = verify[options];
                    romeo = yankee.bind(oscar)(verify);
                    yankee = romeo.dispatch;
                    verify = {};
                    foxtrot = 'GIFT_CODE_RESOLVE';
                    verify['type'] = foxtrot;
                    foxtrot = golf;
                    verify['code'] = foxtrot;
                    verify = yankee.bind(romeo)(verify);
 104: // try_start_1
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    verify = 5;
                    verify = romeo[verify];
                    romeo = yankee.bind(oscar)(verify);
                    yankee = romeo.resolveGiftCode;
                    verify = golf;
                    zulu = yankee.bind(romeo)(verify, report, zulu);
                    SaveGenerator(address=144);
 142:
                    return zulu;
 144:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun69650_ip = 392; continue _fun69650 }
 153:
                    offset = zulu;
                    report = zulu.application_id;
                    verify = null;
                    if(!(verify != report)) { _fun69650_ip = 270; continue _fun69650 }
 168:
                    report = offset;
                    yankee = report.application_id;
                    report = _closure1_slot8;
                    if(!(yankee !== report)) { _fun69650_ip = 270; continue _fun69650 }
 185:
                    romeo = _closure1_slot4;
                    yankee = romeo.getApplication;
                    report = offset;
                    report = report.application_id;
                    report = yankee.bind(romeo)(report);
                    if(!(verify == report)) { _fun69650_ip = 270; continue _fun69650 }
 213: // try_start_0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 6;
                    report = yankee[report];
                    yankee = verify.bind(oscar)(report);
                    verify = yankee.fetchApplication;
                    report = offset;
                    report = report.application_id;
                    report = verify.bind(yankee)(report);
                    SaveGenerator(address=257);
 255:
                    return report;
 257:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun69650_ip = 265; continue _fun69650 }
 263: // try_end0
                    _fun69650_ip = 270; continue _fun69650;
 265: // try_end1
                    return report;
 268: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=4);
 270:
                    report = offset;
                    verify = report.application_id;
                    report = _closure1_slot5;
                    if(!(verify === report)) { _fun69650_ip = 337; continue _fun69650 }
 287:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 7;
                    report = yankee[report];
                    yankee = verify.bind(oscar)(report);
                    verify = yankee.fetchCollectiblesProduct;
                    report = offset;
                    report = report.sku_id;
                    report = verify.bind(yankee)(report);
                    SaveGenerator(address=331);
 329:
                    return report;
 331:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun69650_ip = 389; continue _fun69650 }
 337:
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[options];
                    romeo = yankee.bind(oscar)(verify);
                    yankee = romeo.dispatch;
                    verify = {};
                    foxtrot = 'GIFT_CODE_RESOLVE_SUCCESS';
                    verify['type'] = foxtrot;
                    verify['giftCode'] = offset;
                    verify = yankee.bind(romeo)(verify);
                    verify = {};
                    verify['giftCode'] = offset;
 386: // try_end2
                    return verify;
 389:
                    return report;
 392:
                    return zulu;
 395: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GIFT_CODE_RESOLVE_FAILURE';
                    tango['type'] = options;
                    tango['code'] = golf;
                    tango['error'] = zulu;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 446:
                    return mike;
 449:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot5 = options;
    options = tango.Endpoints;
    var _closure1_slot6 = options;
    tango = tango.RPCCommands;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = tango;
    tango = {};
    tango['resolveGiftCode'] = mike;
    options = function(argFoo) { // Original name: fetchUserGiftCodesForSKU
        _fun69651: for(var _fun69651_ip = 0; ; ) switch(_fun69651_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun69651_ip = 20; continue _fun69651 }
 18:
            zulu = null;
 20:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun69653: for(var _fun69653_ip = 0; ; ) switch(_fun69653_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun69653_ip = 308; continue _fun69653 }
 10:
                        oscar = _closure1_slot1;
                        mike = _closure1_slot2;
                        report = 4;
                        tango = mike[report];
                        mike = undefined;
                        options = oscar.bind(mike)(tango);
                        golf = options.dispatch;
                        tango = {};
                        oscar = 'GIFT_CODES_FETCH';
                        tango['type'] = oscar;
                        verify = _closure2_slot0;
                        tango['skuId'] = verify;
                        verify = _closure2_slot1;
                        tango['subscriptionPlanId'] = verify;
                        tango = golf.bind(options)(tango);
 78: // try_start_0
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        tango = 8;
                        tango = options[tango];
                        tango = golf.bind(mike)(tango);
                        options = tango.HTTP;
                        golf = options.get;
                        tango = {};
                        verify = _closure1_slot6;
                        verify = verify.USER_GIFT_CODES;
                        tango['url'] = verify;
                        verify = {};
                        offset = _closure2_slot0;
                        verify['sku_id'] = offset;
                        offset = _closure2_slot1;
                        verify['subscription_plan_id'] = offset;
                        tango['query'] = verify;
                        verify = true;
                        tango['oldFormErrors'] = verify;
                        tango['rejectWithError'] = verify;
                        tango = golf.bind(options)(tango);
                        SaveGenerator(address=168);
 166:
                        return tango;
 168:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golf) { _fun69653_ip = 243; continue _fun69653 }
 174:
                        options = _closure1_slot1;
                        golf = _closure1_slot2;
                        golf = golf[report];
                        verify = options.bind(mike)(golf);
                        options = verify.dispatch;
                        golf = {};
                        offset = 'GIFT_CODES_FETCH_SUCCESS';
                        golf['type'] = offset;
                        offset = tango.body;
                        golf['giftCodes'] = offset;
                        offset = _closure2_slot0;
                        golf['skuId'] = offset;
                        offset = _closure2_slot1;
                        golf['subscriptionPlanId'] = offset;
                        golf = options.bind(verify)(golf);
 241: // try_end0
                        _fun69653_ip = 305; continue _fun69653;
 243:
                        return tango;
 246: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[report];
                        report = tango.bind(mike)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'GIFT_CODES_FETCH_FAILURE';
                        zulu['type'] = golf;
                        golf = _closure2_slot0;
                        zulu['skuId'] = golf;
                        oscar = _closure2_slot1;
                        zulu['subscriptionPlanId'] = oscar;
                        zulu = tango.bind(report)(zulu);
 305:
                        return mike;
 308:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['fetchUserGiftCodesForSKU'] = options;
    options = function(argFoo) { // Original name: createGiftCode
        _fun69654: for(var _fun69654_ip = 0; ; ) switch(_fun69654_ip) {
 0:
            tango = arguments[1];
            zulu = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(tango === mike)) { _fun69654_ip = 23; continue _fun69654 }
 21:
            tango = null;
 23:
            var _closure2_slot1 = tango;
            if(!(zulu === mike)) { _fun69654_ip = 33; continue _fun69654 }
 31:
            zulu = null;
 33:
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun69656: for(var _fun69656_ip = 0; ; ) switch(_fun69656_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun69656_ip = 306; continue _fun69656 }
 10:
                        oscar = _closure1_slot1;
                        mike = _closure1_slot2;
                        report = 4;
                        tango = mike[report];
                        mike = undefined;
                        options = oscar.bind(mike)(tango);
                        golf = options.dispatch;
                        tango = {};
                        oscar = 'GIFT_CODE_CREATE_START';
                        tango['type'] = oscar;
                        verify = _closure2_slot0;
                        tango['skuId'] = verify;
                        verify = _closure2_slot1;
                        tango['subscriptionPlanId'] = verify;
                        tango = golf.bind(options)(tango);
 78: // try_start_0
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        tango = 8;
                        tango = options[tango];
                        tango = golf.bind(mike)(tango);
                        options = tango.HTTP;
                        golf = options.post;
                        tango = {};
                        verify = _closure1_slot6;
                        verify = verify.USER_GIFT_CODE_CREATE;
                        tango['url'] = verify;
                        verify = {};
                        offset = _closure2_slot0;
                        verify['sku_id'] = offset;
                        offset = _closure2_slot1;
                        verify['subscription_plan_id'] = offset;
                        offset = _closure2_slot2;
                        verify['gift_style'] = offset;
                        tango['body'] = verify;
                        verify = true;
                        tango['oldFormErrors'] = verify;
                        tango['rejectWithError'] = verify;
                        tango = golf.bind(options)(tango);
                        SaveGenerator(address=178);
 176:
                        return tango;
 178:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golf) { _fun69656_ip = 241; continue _fun69656 }
 184:
                        options = _closure1_slot1;
                        golf = _closure1_slot2;
                        golf = golf[report];
                        verify = options.bind(mike)(golf);
                        options = verify.dispatch;
                        golf = {};
                        offset = 'GIFT_CODE_CREATE_SUCCESS';
                        golf['type'] = offset;
                        offset = tango.body;
                        golf['giftCode'] = offset;
                        golf = options.bind(verify)(golf);
                        golf = tango.body;
 238: // try_end0
                        return golf;
 241:
                        return tango;
 244: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[report];
                        report = tango.bind(mike)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'GIFT_CODE_CREATE_FAILURE';
                        zulu['type'] = golf;
                        golf = _closure2_slot0;
                        zulu['skuId'] = golf;
                        oscar = _closure2_slot1;
                        zulu['subscriptionPlanId'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        return mike;
 306:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['createGiftCode'] = options;
    options = function(argFoo) { // Original name: revokeGiftCode
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun69659: for(var _fun69659_ip = 0; ; ) switch(_fun69659_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun69659_ip = 253; continue _fun69659 }
 10:
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 4;
                    tango = mike[report];
                    mike = undefined;
                    options = oscar.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    oscar = 'GIFT_CODE_REVOKE';
                    tango['type'] = oscar;
                    verify = _closure2_slot0;
                    tango['code'] = verify;
                    tango = golf.bind(options)(tango);
 68: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 8;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.del;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot6;
                    offset = yankee.USER_GIFT_CODE_REVOKE;
                    verify = _closure2_slot0;
                    verify = offset.bind(yankee)(verify);
                    tango['url'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=143);
 141:
                    return tango;
 143:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun69659_ip = 198; continue _fun69659 }
 149:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'GIFT_CODE_REVOKE_SUCCESS';
                    golf['type'] = offset;
                    offset = _closure2_slot0;
                    golf['code'] = offset;
                    golf = options.bind(verify)(golf);
 196: // try_end0
                    _fun69659_ip = 250; continue _fun69659;
 198:
                    return tango;
 201: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GIFT_CODE_REVOKE_FAILURE';
                    zulu['type'] = golf;
                    oscar = _closure2_slot0;
                    zulu['code'] = oscar;
                    zulu = tango.bind(report)(zulu);
 250:
                    return mike;
 253:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['revokeGiftCode'] = options;
    report = function(argFoo) { // Original name: openNativeGiftCodeModal
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.openNativeAppModal;
        mike = _closure1_slot7;
        zulu = mike.GIFT_CODE_BROWSER;
        mike = argFoo;
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    tango['openNativeGiftCodeModal'] = report;
    report = 10;
    report = golf[report];
    report = oscar.bind(entity)(report);
    romeo = report.default;
    foxtrot = tango;
    report = copyDataProperties(foxtrot, romeo);
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/GiftCodeActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['resolveGiftCode'] = mike;
    return entity;
})();