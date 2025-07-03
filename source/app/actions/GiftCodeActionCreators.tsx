// app/actions/GiftCodeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function() { // Original name: resolveGiftCode
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = function() { // Original name: _resolveGiftCode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    option = arguments[1];
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 449; continue _fun00001 }
 16:
                    golfie = argFoo;
                    oscard = undefined;
                    if(!(option === oscard)) { _fun00002_ip = 27; continue _fun00001 }
 25:
                    option = false;
 27:
                    report = option;
                    if(!(michal === oscard)) { _fun00002_ip = 36; continue _fun00001 }
 34:
                    michal = false;
 36:
                    zuuluu = michal;
                    offset = undefined;
                    SaveGenerator(address=45);
 43:
                    return oscard;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 446; continue _fun00001 }
 54:
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    option = 4;
                    verify = verify[option];
                    romeon = yankee.bind(oscard)(verify);
                    yankee = romeon.dispatch;
                    verify = {};
                    foxtra = 'GIFT_CODE_RESOLVE';
                    verify['type'] = foxtra;
                    foxtra = golfie;
                    verify['code'] = foxtra;
                    verify = yankee.bind(romeon)(verify);
 104: // try_start_1
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    verify = 5;
                    verify = romeon[verify];
                    romeon = yankee.bind(oscard)(verify);
                    yankee = romeon.resolveGiftCode;
                    verify = golfie;
                    zuuluu = yankee.bind(romeon)(verify, report, zuuluu);
                    SaveGenerator(address=144);
 142:
                    return zuuluu;
 144:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 392; continue _fun00001 }
 153:
                    offset = zuuluu;
                    report = zuuluu.application_id;
                    verify = null;
                    if(!(verify != report)) { _fun00002_ip = 270; continue _fun00001 }
 168:
                    report = offset;
                    yankee = report.application_id;
                    report = _closure1_slot8;
                    if(!(yankee !== report)) { _fun00002_ip = 270; continue _fun00001 }
 185:
                    romeon = _closure1_slot4;
                    yankee = romeon.getApplication;
                    report = offset;
                    report = report.application_id;
                    report = yankee.bind(romeon)(report);
                    if(!(verify == report)) { _fun00002_ip = 270; continue _fun00001 }
 213: // try_start_0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 6;
                    report = yankee[report];
                    yankee = verify.bind(oscard)(report);
                    verify = yankee.fetchApplication;
                    report = offset;
                    report = report.application_id;
                    report = verify.bind(yankee)(report);
                    SaveGenerator(address=257);
 255:
                    return report;
 257:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 265; continue _fun00001 }
 263: // try_end0
                    _fun00002_ip = 270; continue _fun00001;
 265: // try_end1
                    return report;
 268: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=4);
 270:
                    report = offset;
                    verify = report.application_id;
                    report = _closure1_slot5;
                    if(!(verify === report)) { _fun00002_ip = 337; continue _fun00001 }
 287:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 7;
                    report = yankee[report];
                    yankee = verify.bind(oscard)(report);
                    verify = yankee.fetchCollectiblesProduct;
                    report = offset;
                    report = report.sku_id;
                    report = verify.bind(yankee)(report);
                    SaveGenerator(address=331);
 329:
                    return report;
 331:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 389; continue _fun00001 }
 337:
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[option];
                    romeon = yankee.bind(oscard)(verify);
                    yankee = romeon.dispatch;
                    verify = {};
                    foxtra = 'GIFT_CODE_RESOLVE_SUCCESS';
                    verify['type'] = foxtra;
                    verify['giftCode'] = offset;
                    verify = yankee.bind(romeon)(verify);
                    verify = {};
                    verify['giftCode'] = offset;
 386: // try_end2
                    return verify;
 389:
                    return report;
 392:
                    return zuuluu;
 395: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GIFT_CODE_RESOLVE_FAILURE';
                    tangon['type'] = option;
                    tangon['code'] = golfie;
                    tangon['error'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 446:
                    return michal;
 449:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot5 = option;
    option = tangon.Endpoints;
    var _closure1_slot6 = option;
    tangon = tangon.RPCCommands;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = tangon;
    tangon = {};
    tangon['resolveGiftCode'] = michal;
    option = function(argFoo) { // Original name: fetchUserGiftCodesForSKU
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            zuuluu = null;
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 308; continue _fun00005 }
 10:
                        oscard = _closure1_slot1;
                        michal = _closure1_slot2;
                        report = 4;
                        tangon = michal[report];
                        michal = undefined;
                        option = oscard.bind(michal)(tangon);
                        golfie = option.dispatch;
                        tangon = {};
                        oscard = 'GIFT_CODES_FETCH';
                        tangon['type'] = oscard;
                        verify = _closure2_slot0;
                        tangon['skuId'] = verify;
                        verify = _closure2_slot1;
                        tangon['subscriptionPlanId'] = verify;
                        tangon = golfie.bind(option)(tangon);
 78: // try_start_0
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        tangon = 8;
                        tangon = option[tangon];
                        tangon = golfie.bind(michal)(tangon);
                        option = tangon.HTTP;
                        golfie = option.get;
                        tangon = {};
                        verify = _closure1_slot6;
                        verify = verify.USER_GIFT_CODES;
                        tangon['url'] = verify;
                        verify = {};
                        offset = _closure2_slot0;
                        verify['sku_id'] = offset;
                        offset = _closure2_slot1;
                        verify['subscription_plan_id'] = offset;
                        tangon['query'] = verify;
                        verify = true;
                        tangon['oldFormErrors'] = verify;
                        tangon['rejectWithError'] = verify;
                        tangon = golfie.bind(option)(tangon);
                        SaveGenerator(address=168);
 166:
                        return tangon;
 168:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golfie) { _fun00006_ip = 243; continue _fun00005 }
 174:
                        option = _closure1_slot1;
                        golfie = _closure1_slot2;
                        golfie = golfie[report];
                        verify = option.bind(michal)(golfie);
                        option = verify.dispatch;
                        golfie = {};
                        offset = 'GIFT_CODES_FETCH_SUCCESS';
                        golfie['type'] = offset;
                        offset = tangon.body;
                        golfie['giftCodes'] = offset;
                        offset = _closure2_slot0;
                        golfie['skuId'] = offset;
                        offset = _closure2_slot1;
                        golfie['subscriptionPlanId'] = offset;
                        golfie = option.bind(verify)(golfie);
 241: // try_end0
                        _fun00006_ip = 305; continue _fun00005;
 243:
                        return tangon;
 246: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[report];
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        golfie = 'GIFT_CODES_FETCH_FAILURE';
                        zuuluu['type'] = golfie;
                        golfie = _closure2_slot0;
                        zuuluu['skuId'] = golfie;
                        oscard = _closure2_slot1;
                        zuuluu['subscriptionPlanId'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 305:
                        return michal;
 308:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    tangon['fetchUserGiftCodesForSKU'] = option;
    option = function(argFoo) { // Original name: createGiftCode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = arguments[1];
            zuuluu = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(tangon === michal)) { _fun00008_ip = 23; continue _fun00007 }
 21:
            tangon = null;
 23:
            var _closure2_slot1 = tangon;
            if(!(zuuluu === michal)) { _fun00008_ip = 33; continue _fun00007 }
 31:
            zuuluu = null;
 33:
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 306; continue _fun00009 }
 10:
                        oscard = _closure1_slot1;
                        michal = _closure1_slot2;
                        report = 4;
                        tangon = michal[report];
                        michal = undefined;
                        option = oscard.bind(michal)(tangon);
                        golfie = option.dispatch;
                        tangon = {};
                        oscard = 'GIFT_CODE_CREATE_START';
                        tangon['type'] = oscard;
                        verify = _closure2_slot0;
                        tangon['skuId'] = verify;
                        verify = _closure2_slot1;
                        tangon['subscriptionPlanId'] = verify;
                        tangon = golfie.bind(option)(tangon);
 78: // try_start_0
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        tangon = 8;
                        tangon = option[tangon];
                        tangon = golfie.bind(michal)(tangon);
                        option = tangon.HTTP;
                        golfie = option.post;
                        tangon = {};
                        verify = _closure1_slot6;
                        verify = verify.USER_GIFT_CODE_CREATE;
                        tangon['url'] = verify;
                        verify = {};
                        offset = _closure2_slot0;
                        verify['sku_id'] = offset;
                        offset = _closure2_slot1;
                        verify['subscription_plan_id'] = offset;
                        offset = _closure2_slot2;
                        verify['gift_style'] = offset;
                        tangon['body'] = verify;
                        verify = true;
                        tangon['oldFormErrors'] = verify;
                        tangon['rejectWithError'] = verify;
                        tangon = golfie.bind(option)(tangon);
                        SaveGenerator(address=178);
 176:
                        return tangon;
 178:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golfie) { _fun00010_ip = 241; continue _fun00009 }
 184:
                        option = _closure1_slot1;
                        golfie = _closure1_slot2;
                        golfie = golfie[report];
                        verify = option.bind(michal)(golfie);
                        option = verify.dispatch;
                        golfie = {};
                        offset = 'GIFT_CODE_CREATE_SUCCESS';
                        golfie['type'] = offset;
                        offset = tangon.body;
                        golfie['giftCode'] = offset;
                        golfie = option.bind(verify)(golfie);
                        golfie = tangon.body;
 238: // try_end0
                        return golfie;
 241:
                        return tangon;
 244: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[report];
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        golfie = 'GIFT_CODE_CREATE_FAILURE';
                        zuuluu['type'] = golfie;
                        golfie = _closure2_slot0;
                        zuuluu['skuId'] = golfie;
                        oscard = _closure2_slot1;
                        zuuluu['subscriptionPlanId'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        return michal;
 306:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    tangon['createGiftCode'] = option;
    option = function(argFoo) { // Original name: revokeGiftCode
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 253; continue _fun00011 }
 10:
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 4;
                    tangon = michal[report];
                    michal = undefined;
                    option = oscard.bind(michal)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    oscard = 'GIFT_CODE_REVOKE';
                    tangon['type'] = oscard;
                    verify = _closure2_slot0;
                    tangon['code'] = verify;
                    tangon = golfie.bind(option)(tangon);
 68: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 8;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    option = tangon.HTTP;
                    golfie = option.del;
                    tangon = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    yankee = _closure1_slot6;
                    offset = yankee.USER_GIFT_CODE_REVOKE;
                    verify = _closure2_slot0;
                    verify = offset.bind(yankee)(verify);
                    tangon['url'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=143);
 141:
                    return tangon;
 143:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00012_ip = 198; continue _fun00011 }
 149:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[report];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'GIFT_CODE_REVOKE_SUCCESS';
                    golfie['type'] = offset;
                    offset = _closure2_slot0;
                    golfie['code'] = offset;
                    golfie = option.bind(verify)(golfie);
 196: // try_end0
                    _fun00012_ip = 250; continue _fun00011;
 198:
                    return tangon;
 201: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GIFT_CODE_REVOKE_FAILURE';
                    zuuluu['type'] = golfie;
                    oscard = _closure2_slot0;
                    zuuluu['code'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 250:
                    return michal;
 253:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['revokeGiftCode'] = option;
    report = function(argFoo) { // Original name: openNativeGiftCodeModal
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.openNativeAppModal;
        michal = _closure1_slot7;
        zuuluu = michal.GIFT_CODE_BROWSER;
        michal = argFoo;
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    tangon['openNativeGiftCodeModal'] = report;
    report = 10;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    romeon = report.default;
    foxtra = tangon;
    report = copyDataProperties(foxtra, romeon);
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/GiftCodeActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['resolveGiftCode'] = michal;
    return entity;
})();