// app/actions/SKUActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchSKU
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 326; continue _fun00001 }
 13:
                    report = tangon;
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00002_ip = 214; continue _fun00001 }
 42:
                    golfie = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    tangon = undefined;
                    option = golfie.bind(tangon)(zuuluu);
                    golfie = option.dispatch;
                    zuuluu = {};
                    verify = 'SKU_FETCH_START';
                    zuuluu['type'] = verify;
                    verify = report;
                    zuuluu['skuId'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
 94: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = option[zuuluu];
                    option = golfie.bind(tangon)(zuuluu);
                    golfie = option.httpGetWithCountryCodeQuery;
                    zuuluu = {};
                    yankee = _closure1_slot8;
                    offset = yankee.STORE_SKU;
                    verify = report;
                    verify = offset.bind(yankee)(verify);
                    zuuluu['url'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=159);
 157:
                    return zuuluu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 219; continue _fun00001 }
 165:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[michal];
                    verify = option.bind(tangon)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'SKU_FETCH_SUCCESS';
                    golfie['type'] = offset;
                    offset = zuuluu.body;
                    golfie['sku'] = offset;
                    golfie = option.bind(verify)(golfie);
 214: // try_end0
                    golfie = undefined;
                    return golfie;
 219:
                    return zuuluu;
 222: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = oscard[michal];
                    option = zuuluu.bind(tangon)(michal);
                    golfie = option.dispatch;
                    michal = {};
                    verify = 'SKU_FETCH_FAIL';
                    michal['type'] = verify;
                    michal['skuId'] = report;
                    michal = golfie.bind(option)(michal);
                    michal = 7;
                    michal = oscard[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = 'Failed to fetch SKU ';
                    romeon = zuuluu.bind(michal)(report);
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    foxtra = zuuluu;
                    michal = new foxtra[tangon](romeon, yankee);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchPublishedSKU
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    romeon = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 534; continue _fun00003 }
 13:
                    verify = argFoo;
                    report = romeon;
                    yankee = argBaz;
                    tangon = undefined;
                    golfie = undefined;
                    zuuluu = undefined;
                    offset = undefined;
                    option = _closure1_slot5;
                    michal = option.get;
                    option = michal.bind(option)(romeon);
                    michal = null;
                    if(!(michal == option)) { _fun00004_ip = 424; continue _fun00003 }
 56:
                    romeon = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 5;
                    option = option[michal];
                    foxtra = romeon.bind(tangon)(option);
                    romeon = foxtra.dispatch;
                    option = {};
                    backup = 'SKU_FETCH_START';
                    option['type'] = backup;
                    backup = report;
                    option['skuId'] = backup;
                    option = romeon.bind(foxtra)(option);
 106: // try_start_0
                    backup = _closure1_slot6;
                    foxtra = backup.inTestModeForApplication;
                    romeon = verify;
                    romeon = foxtra.bind(backup)(romeon);
                    option = romeon;
                    if(romeon) { _fun00004_ip = 145; continue _fun00003 }
 130:
                    foxtra = _closure1_slot4;
                    romeon = foxtra.inDevModeForApplication;
                    option = romeon.bind(foxtra)(verify);
 145:
                    verify = option;
                    golfie = verify;
                    option = {};
                    backup = _closure1_slot8;
                    if(verify) { _fun00004_ip = 176; continue _fun00003 }
 160:
                    romeon = backup.STORE_PUBLISHED_LISTINGS_SKU;
                    verify = report;
                    verify = romeon.bind(backup)(verify);
                    _fun00004_ip = 190; continue _fun00003;
 176:
                    foxtra = backup.STORE_SKU;
                    romeon = report;
                    verify = foxtra.bind(backup)(romeon);
 190:
                    option['url'] = verify;
                    verify = false;
                    option['rejectWithError'] = verify;
                    zuuluu = option;
                    verify = yankee;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    option = 8;
                    option = foxtra[option];
                    option = romeon.bind(tangon)(option);
                    option = option.ShopVariantsReturnStyle;
                    option = option.VARIANTS_GROUP;
                    if(!(verify === option)) { _fun00004_ip = 258; continue _fun00003 }
 242:
                    verify = zuuluu;
                    option = {};
                    option['variants_return_style'] = yankee;
                    verify['query'] = option;
 258:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 6;
                    option = yankee[option];
                    verify = verify.bind(tangon)(option);
                    option = verify.httpGetWithCountryCodeQuery;
                    zuuluu = option.bind(verify)(zuuluu);
                    SaveGenerator(address=293);
 291:
                    return zuuluu;
 293:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00004_ip = 427; continue _fun00003 }
 302:
                    offset = zuuluu;
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[michal];
                    yankee = verify.bind(tangon)(option);
                    verify = yankee.dispatch;
                    option = {};
                    romeon = 'SKU_FETCH_SUCCESS';
                    option['type'] = romeon;
                    romeon = golfie;
                    foxtra = offset;
                    foxtra = foxtra.body;
                    if(romeon) { _fun00004_ip = 361; continue _fun00003 }
 353:
                    romeon = foxtra.sku;
                    _fun00004_ip = 364; continue _fun00003;
 361:
                    romeon = foxtra;
 364:
                    option['sku'] = romeon;
                    option = verify.bind(yankee)(option);
                    if(golfie) { _fun00004_ip = 424; continue _fun00003 }
 377:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[michal];
                    verify = option.bind(tangon)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'STORE_LISTING_FETCH_SUCCESS';
                    golfie['type'] = yankee;
                    offset = offset.body;
                    golfie['storeListing'] = offset;
                    golfie = option.bind(verify)(golfie);
 424: // try_end0
                    return tangon;
 427:
                    return zuuluu;
 430: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = oscard[michal];
                    option = zuuluu.bind(tangon)(michal);
                    golfie = option.dispatch;
                    michal = {};
                    verify = 'SKU_FETCH_FAIL';
                    michal['type'] = verify;
                    michal['skuId'] = report;
                    michal = golfie.bind(option)(michal);
                    michal = 7;
                    michal = oscard[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = 'Failed to fetch SKU ';
                    kiloes = zuuluu.bind(michal)(report);
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    sizing = zuuluu;
                    michal = new sizing[tangon](kiloes, backup);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 534:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchTestSKUsForApplication
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    zuuluu = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 244; continue _fun00005 }
 16:
                    golfie = undefined;
                    if(!(zuuluu === golfie)) { _fun00006_ip = 24; continue _fun00005 }
 22:
                    zuuluu = true;
 24:
                    SaveGenerator(address=28);
 26:
                    return golfie;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 241; continue _fun00005 }
 37:
                    oscard = _closure1_slot6;
                    tangon = oscard.inTestModeForApplication;
                    tangon = tangon.bind(oscard)(offset);
                    if(tangon) { _fun00006_ip = 115; continue _fun00005 }
 58:
                    oscard = _closure1_slot4;
                    tangon = oscard.inDevModeForApplication;
                    tangon = tangon.bind(oscard)(offset);
                    if(tangon) { _fun00006_ip = 115; continue _fun00005 }
 76:
                    if(!zuuluu) { _fun00006_ip = 115; continue _fun00005 }
 79:
                    zuuluu = global;
                    oscard = zuuluu.Error;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    yankee = 'this should only be used in test mode';
                    romeon = tangon;
                    zuuluu = new romeon[oscard](yankee, offset);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 115:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(golfie)(zuuluu);
                    tangon = oscard.httpGetWithCountryCodeQuery;
                    zuuluu = {};
                    verify = _closure1_slot8;
                    option = verify.APPLICATION_SKUS;
                    option = option.bind(verify)(offset);
                    zuuluu['url'] = option;
                    option = false;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=177);
 175:
                    return zuuluu;
 177:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 238; continue _fun00005 }
 183:
                    tangon = zuuluu.body;
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 5;
                    report = option[report];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'SKUS_FETCH_SUCCESS';
                    report['type'] = option;
                    report['skus'] = tangon;
                    report = oscard.bind(golfie)(report);
                    return tangon;
 238:
                    return zuuluu;
 241:
                    return michal;
 244:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _fetchPurchasePreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    report = argBaz;
                    option = argCor;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 580; continue _fun00007 }
 19:
                    romeon = argBar;
                    foxtra = report;
                    golfie = undefined;
                    zuuluu = undefined;
                    yankee = undefined;
                    michal = undefined;
                    tangon = {};
                    tangon['payment_source_id'] = report;
                    report = null;
                    verify = report == option;
                    report = undefined;
                    if(verify) { _fun00008_ip = 57; continue _fun00007 }
 51:
                    report = option.isGift;
 57:
                    tangon['gift'] = report;
                    yankee = tangon;
                    option = _closure1_slot6;
                    report = option.inTestModeForApplication;
                    report = report.bind(option)(offset);
                    if(report) { _fun00008_ip = 101; continue _fun00007 }
 86:
                    verify = _closure1_slot4;
                    option = verify.inDevModeForApplication;
                    report = option.bind(verify)(offset);
 101:
                    if(!report) { _fun00008_ip = 115; continue _fun00007 }
 104:
                    option = yankee;
                    report = true;
                    option['test_mode'] = report;
 115:
                    option = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = 5;
                    report = report[verify];
                    offset = option.bind(golfie)(report);
                    option = offset.dispatch;
                    report = {};
                    backup = 'SKU_PURCHASE_PREVIEW_FETCH';
                    report['type'] = backup;
                    backup = romeon;
                    report['skuId'] = backup;
                    report = option.bind(offset)(report);
 165: // try_start_0
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 6;
                    report = offset[report];
                    offset = option.bind(golfie)(report);
                    option = offset.httpGetWithCountryCodeQuery;
                    report = {};
                    sizing = _closure1_slot8;
                    kiloes = sizing.STORE_SKU_PURCHASE;
                    backup = romeon;
                    backup = kiloes.bind(sizing)(backup);
                    report['url'] = backup;
                    report['query'] = yankee;
                    yankee = true;
                    report['oldFormErrors'] = yankee;
                    yankee = false;
                    report['rejectWithError'] = yankee;
                    report = option.bind(offset)(report);
                    SaveGenerator(address=241);
 239:
                    return report;
 241:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(option) { _fun00008_ip = 317; continue _fun00007 }
 247:
                    zuuluu = report;
                    offset = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[verify];
                    yankee = offset.bind(golfie)(option);
                    offset = yankee.dispatch;
                    option = {};
                    backup = 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS';
                    option['type'] = backup;
                    backup = romeon;
                    option['skuId'] = backup;
                    option['paymentSourceId'] = foxtra;
                    foxtra = report.body;
                    option['price'] = foxtra;
                    option = offset.bind(yankee)(option);
 312: // try_end0
                    _fun00008_ip = 575; continue _fun00007;
 317:
                    return report;
 320: // catch_target0
                    CatchBlockStart(arg_register=7);
                    oscard = option;
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = report[verify];
                    yankee = offset.bind(golfie)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    foxtra = 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE';
                    verify['type'] = foxtra;
                    verify['skuId'] = romeon;
                    verify = offset.bind(yankee)(verify);
                    offset = _closure1_slot0;
                    verify = 9;
                    report = report[verify];
                    report = offset.bind(golfie)(report);
                    report = report.BillingError;
                    report = option instanceof report;
                    if(report) { _fun00008_ip = 446; continue _fun00007 }
 398:
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = option.bind(golfie)(report);
                    verify = report.BillingError;
                    output = oscard;
                    option = verify.prototype;
                    option = Object.create(option, {constructor: {value: verify}});
                    result = option;
                    report = new result[verify](output, sizing);
                    report = report instanceof Object ? report : option;
                    _fun00008_ip = 449; continue _fun00007;
 446:
                    report = oscard;
 449:
                    michal = report;
                    oscard = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    option = 10;
                    report = report[option];
                    report = verify.bind(golfie)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if(!(oscard !== report)) { _fun00008_ip = 578; continue _fun00007 }
 493:
                    report = michal;
                    oscard = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[option];
                    report = verify.bind(golfie)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if(!(oscard !== report)) { _fun00008_ip = 578; continue _fun00007 }
 534:
                    report = michal;
                    report = report.code;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = tangon.ErrorCodes;
                    tangon = tangon.INVALID_BILLING_ADDRESS;
                    if(!(report !== tangon)) { _fun00008_ip = 578; continue _fun00007 }
 575:
                    return zuuluu;
 578:
                    throw michal;
 580:
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
    entity = function() { // Original name: _grantChannelBranchEntitlement
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    romeon = argFoo;
                    yankee = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 334; continue _fun00009 }
 16:
                    golfie = romeon;
                    offset = argBar;
                    oscard = yankee;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    option = 5;
                    michal = michal[option];
                    report = undefined;
                    verify = zuuluu.bind(report)(michal);
                    zuuluu = verify.dispatch;
                    michal = {};
                    foxtra = 'SKU_PURCHASE_START';
                    michal['type'] = foxtra;
                    michal['applicationId'] = romeon;
                    michal['skuId'] = yankee;
                    michal = zuuluu.bind(verify)(michal);
 81: // try_start_0
                    zuuluu = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 11;
                    michal = verify[michal];
                    michal = zuuluu.bind(report)(michal);
                    verify = michal.HTTP;
                    zuuluu = verify.post;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeon = _closure1_slot8;
                    yankee = romeon.CHANNEL_ENTITLEMENT_GRANT;
                    offset = yankee.bind(romeon)(offset);
                    michal['url'] = offset;
                    michal = zuuluu.bind(verify)(michal);
                    SaveGenerator(address=152);
 150:
                    return michal;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 230; continue _fun00009 }
 158:
                    verify = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[option];
                    offset = verify.bind(report)(zuuluu);
                    verify = offset.dispatch;
                    zuuluu = {};
                    yankee = 'SKU_PURCHASE_SUCCESS';
                    zuuluu['type'] = yankee;
                    yankee = oscard;
                    zuuluu['skuId'] = yankee;
                    yankee = michal.body;
                    zuuluu['entitlements'] = yankee;
                    yankee = new Array(0);
                    zuuluu['libraryApplications'] = yankee;
                    zuuluu = verify.bind(offset)(zuuluu);
                    zuuluu = michal.body;
 227: // try_end0
                    return zuuluu;
 230:
                    return michal;
 233: // catch_target0
                    CatchBlockStart(arg_register=9);
                    verify = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    michal = zuuluu[michal];
                    michal = verify.bind(report)(michal);
                    michal = michal.BillingError;
                    verify = michal.prototype;
                    verify = Object.create(verify, {constructor: {value: michal}});
                    kiloes = verify;
                    backup = offset;
                    michal = new kiloes[michal](backup, foxtra);
                    michal = michal instanceof Object ? michal : verify;
                    tangon = _closure1_slot1;
                    zuuluu = zuuluu[option];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'SKU_PURCHASE_FAIL';
                    zuuluu['type'] = option;
                    zuuluu['applicationId'] = golfie;
                    zuuluu['skuId'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 334:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _purchaseSKU
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    record = argFoo;
                    oscard = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(option) { _fun00012_ip = 1381; continue _fun00011 }
 18:
                    foxtra = record;
                    var _closure4_slot0 = record;
                    golfie = oscard;
                    var _closure4_slot1 = oscard;
                    option = undefined;
                    zuuluu = undefined;
                    sizing = undefined;
                    yankee = undefined;
                    output = undefined;
                    backup = undefined;
                    source = undefined;
                    report = undefined;
                    ctrled = undefined;
                    update = undefined;
                    offset = undefined;
                    result = undefined;
                    kiloes = undefined;
                    vacuum = undefined;
                    romeon = undefined;
                    michal = undefined;
                    verify = {};
                    limora = _closure1_slot9;
                    whisks = verify;
                    sequen = copyDataProperties(whisks, limora);
                    limora = argBaz;
                    whisks = verify;
                    sequen = copyDataProperties(whisks, limora);
                    zuuluu = verify.paymentSource;
                    sizing = verify.expectedAmount;
                    yankee = verify.expectedCurrency;
                    output = verify.analyticsLoadId;
                    backup = verify.isGift;
                    source = verify.giftInfoOptions;
                    report = verify.subscriptionPlanId;
                    ctrled = verify.loadId;
                    update = verify.countryCode;
                    offset = verify.orderId;
                    config = _closure1_slot1;
                    sequen = _closure1_slot2;
                    verify = 5;
                    sequen = sequen[verify];
                    config = config.bind(option)(sequen);
                    sequen = config.wait;
                    echoed = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'SKU_PURCHASE_START';
                        michal['type'] = report;
                        oscard = _closure4_slot0;
                        michal['applicationId'] = oscard;
                        report = _closure4_slot1;
                        michal['skuId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    echoed = sequen.bind(config)(echoed);
                    config = _closure1_slot6;
                    sequen = config.inTestModeForApplication;
                    sequen = sequen.bind(config)(record);
                    echoed = sequen;
                    if(sequen) { _fun00012_ip = 225; continue _fun00011 }
 207:
                    record = _closure1_slot4;
                    config = record.inDevModeForApplication;
                    sequen = foxtra;
                    echoed = config.bind(record)(sequen);
 225:
                    result = echoed;
 228: // try_start_0
                    echoed = {};
                    sequen = backup;
                    echoed['gift'] = sequen;
                    echoed['sku_subscription_plan_id'] = report;
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    report = 12;
                    report = config[report];
                    config = sequen.bind(option)(report);
                    sequen = config.createGatewayCheckoutContext;
                    report = zuuluu;
                    report = sequen.bind(config)(report);
                    SaveGenerator(address=281);
 279:
                    return report;
 281:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=23);
                    if(sequen) { _fun00012_ip = 976; continue _fun00011 }
 290:
                    echoed['gateway_checkout_context'] = report;
                    echoed['load_id'] = ctrled;
                    kiloes = echoed;
                    if(result) { _fun00012_ip = 584; continue _fun00011 }
 309:
                    result = zuuluu;
                    ctrled = null;
                    if(!(ctrled != result)) { _fun00012_ip = 551; continue _fun00011 }
 321:
                    echoed = kiloes;
                    record = zuuluu;
                    result = record.id;
                    echoed['payment_source_id'] = result;
                    sequen = _closure1_slot0;
                    result = _closure1_slot2;
                    config = 13;
                    result = result[config];
                    sequen = sequen.bind(option)(result);
                    result = sequen.createPaymentSourceToken;
                    result = result.bind(sequen)(record);
                    SaveGenerator(address=373);
 371:
                    return result;
 373:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=23);
                    if(sequen) { _fun00012_ip = 581; continue _fun00011 }
 382:
                    echoed['payment_source_token'] = result;
                    record = _closure1_slot7;
                    sequen = record.has;
                    echoed = zuuluu;
                    echoed = echoed.type;
                    echoed = sequen.bind(record)(echoed);
                    if(!echoed) { _fun00012_ip = 551; continue _fun00011 }
 416:
                    sequen = _closure1_slot0;
                    echoed = _closure1_slot2;
                    echoed = echoed[config];
                    config = sequen.bind(option)(echoed);
                    sequen = config.popupBridgeState;
                    echoed = zuuluu;
                    echoed = echoed.type;
                    echoed = sequen.bind(config)(echoed);
                    SaveGenerator(address=456);
 454:
                    return echoed;
 456:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=23);
                    if(sequen) { _fun00012_ip = 578; continue _fun00011 }
 462:
                    vacuum = echoed;
                    sequen = kiloes;
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    config = 11;
                    config = cntext[config];
                    record = record.bind(option)(config);
                    config = record.getAPIBaseURL;
                    config = config.bind(record)();
                    target = _closure1_slot8;
                    papara = target.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    record = zuuluu;
                    cntext = record.type;
                    status = ctrled != echoed;
                    record = '';
                    if(!status) { _fun00012_ip = 530; continue _fun00011 }
 527:
                    record = vacuum;
 530:
                    vacuum = 'success';
                    vacuum = papara.bind(target)(cntext, record, vacuum);
                    vacuum = config + vacuum;
                    sequen['return_url'] = vacuum;
 551:
                    vacuum = kiloes;
                    vacuum['gift_info_options'] = source;
                    source = update;
                    if(!(ctrled != source)) { _fun00012_ip = 595; continue _fun00011 }
 567:
                    source = kiloes;
                    source['country_code'] = update;
                    _fun00012_ip = 595; continue _fun00011;
 578: // try_end0
                    return echoed;
 581:
                    return result;
 584: // try_start_1
                    echoed = kiloes;
                    result = true;
                    echoed['test_mode'] = result;
 595:
                    result = sizing;
                    echoed = null;
                    if(!(echoed != result)) { _fun00012_ip = 615; continue _fun00011 }
 604:
                    result = kiloes;
                    result['expected_amount'] = sizing;
 615:
                    sizing = yankee;
                    if(!(echoed != sizing)) { _fun00012_ip = 633; continue _fun00011 }
 622:
                    sizing = kiloes;
                    sizing['expected_currency'] = yankee;
 633:
                    sizing = kiloes;
                    result = _closure1_slot0;
                    update = _closure1_slot2;
                    yankee = 14;
                    yankee = update[yankee];
                    result = result.bind(option)(yankee);
                    yankee = result.getPurchaseToken;
                    yankee = yankee.bind(result)();
                    sizing['purchase_token'] = yankee;
                    yankee = offset;
                    if(!(echoed != yankee)) { _fun00012_ip = 690; continue _fun00011 }
 679:
                    yankee = kiloes;
                    yankee['order_id'] = offset;
 690:
                    yankee = _closure1_slot0;
                    sizing = _closure1_slot2;
                    offset = 11;
                    offset = sizing[offset];
                    offset = yankee.bind(option)(offset);
                    sizing = offset.HTTP;
                    yankee = sizing.post;
                    offset = {};
                    source = _closure1_slot8;
                    update = source.STORE_SKU_PURCHASE;
                    result = golfie;
                    result = update.bind(source)(result);
                    offset['url'] = result;
                    offset['body'] = kiloes;
                    kiloes = {};
                    kiloes['load_id'] = output;
                    offset['context'] = kiloes;
                    kiloes = true;
                    offset['oldFormErrors'] = kiloes;
                    kiloes = false;
                    offset['rejectWithError'] = kiloes;
                    offset = yankee.bind(sizing)(offset);
                    SaveGenerator(address=782);
 780:
                    return offset;
 782:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00012_ip = 973; continue _fun00011 }
 791:
                    romeon = offset;
                    sizing = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[verify];
                    output = sizing.bind(option)(yankee);
                    sizing = output.dispatch;
                    yankee = {};
                    result = 'SKU_PURCHASE_SUCCESS';
                    yankee['type'] = result;
                    result = golfie;
                    yankee['skuId'] = result;
                    result = offset.body;
                    result = result.library_applications;
                    if(!(echoed == result)) { _fun00012_ip = 855; continue _fun00011 }
 849:
                    result = new Array(0);
                    _fun00012_ip = 905; continue _fun00011;
 855:
                    echoed = romeon;
                    echoed = echoed.body;
                    source = echoed.library_applications;
                    update = source.filter;
                    ctrled = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    echoed = 15;
                    echoed = vacuum[echoed];
                    echoed = ctrled.bind(option)(echoed);
                    echoed = echoed.isNotNullish;
                    result = update.bind(source)(echoed);
 905:
                    yankee['libraryApplications'] = result;
                    result = romeon.body;
                    result = result.entitlements;
                    yankee['entitlements'] = result;
                    result = romeon.body;
                    result = result.gift_code;
                    yankee['giftCode'] = result;
                    yankee = sizing.bind(output)(yankee);
                    yankee = {};
                    limora = romeon.body;
                    whisks = yankee;
                    romeon = copyDataProperties(whisks, limora);
                    romeon = 'redirectConfirmation';
                    yankee[romeon] = kiloes;
 970: // try_end1
                    return yankee;
 973:
                    return offset;
 976:
                    return report;
 979: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    tangon = offset;
                    romeon = _closure1_slot0;
                    report = _closure1_slot2;
                    yankee = 9;
                    report = report[yankee];
                    report = romeon.bind(option)(report);
                    report = report.BillingError;
                    report = offset instanceof report;
                    if(report) { _fun00012_ip = 1065; continue _fun00011 }
 1017:
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    report = offset.bind(option)(report);
                    yankee = report.BillingError;
                    whisks = tangon;
                    offset = yankee.prototype;
                    offset = Object.create(offset, {constructor: {value: yankee}});
                    equals = offset;
                    report = new equals[yankee](whisks, limora);
                    offset = report instanceof Object ? report : offset;
                    _fun00012_ip = 1068; continue _fun00011;
 1065:
                    offset = tangon;
 1068:
                    michal = offset;
                    romeon = offset.code;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    offset = 10;
                    yankee = yankee[offset];
                    yankee = kiloes.bind(option)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.CONFIRMATION_REQUIRED;
                    yankee = romeon !== yankee;
                    report = yankee;
                    if(!yankee) { _fun00012_ip = 1159; continue _fun00011 }
 1118:
                    yankee = michal;
                    romeon = yankee.code;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[offset];
                    yankee = kiloes.bind(option)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.AUTHENTICATION_REQUIRED;
                    report = romeon !== yankee;
 1159:
                    if(report) { _fun00012_ip = 1214; continue _fun00011 }
 1162:
                    yankee = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[verify];
                    romeon = yankee.bind(option)(report);
                    yankee = romeon.dispatch;
                    report = {};
                    kiloes = 'SKU_PURCHASE_AWAIT_CONFIRMATION';
                    report['type'] = kiloes;
                    kiloes = golfie;
                    report['skuId'] = kiloes;
                    report['isGift'] = backup;
                    report = yankee.bind(romeon)(report);
 1214:
                    yankee = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = report[verify];
                    romeon = yankee.bind(option)(verify);
                    yankee = romeon.dispatch;
                    verify = {};
                    backup = 'SKU_PURCHASE_FAIL';
                    verify['type'] = backup;
                    verify['applicationId'] = foxtra;
                    verify['skuId'] = golfie;
                    golfie = michal;
                    verify['error'] = golfie;
                    verify = yankee.bind(romeon)(verify);
                    golfie = golfie.code;
                    verify = _closure1_slot0;
                    report = report[offset];
                    report = verify.bind(option)(report);
                    report = report.ErrorCodes;
                    report = report.CONFIRMATION_REQUIRED;
                    if(!(golfie === report)) { _fun00012_ip = 1379; continue _fun00011 }
 1303:
                    report = tangon;
                    report = report.body;
                    report = report.payment_id;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 13;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    if(report) { _fun00012_ip = 1359; continue _fun00011 }
 1340:
                    golfie = oscard.dispatchConfirmationError;
                    report = 'payment id cannot be null on redirected confirmations.';
                    report = golfie.bind(oscard)(report);
                    throw report;
 1359:
                    report = oscard.handleConfirmation;
                    tangon = tangon.body;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    return zuuluu;
 1379:
                    throw michal;
 1381:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _resendPaymentVerificationEmail
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 239; continue _fun00013 }
 10: // try_start_0
                    golfie = {};
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 14;
                    michal = verify[michal];
                    report = undefined;
                    tangon = oscard.bind(report)(michal);
                    michal = tangon.getPurchaseToken;
                    michal = michal.bind(tangon)();
                    golfie['purchase_token'] = michal;
                    tangon = {};
                    michal = 11;
                    michal = verify[michal];
                    michal = oscard.bind(report)(michal);
                    oscard = michal.HTTP;
                    report = oscard.post;
                    michal = {};
                    option = _closure1_slot8;
                    option = option.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
                    michal['url'] = option;
                    michal['body'] = golfie;
                    golfie = true;
                    michal['oldFormErrors'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=119);
 117:
                    return michal;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 140; continue _fun00013 }
 125:
                    offset = michal.body;
                    yankee = tangon;
                    report = copyDataProperties(yankee, offset);
 137: // try_end0
                    return tangon;
 140:
                    return michal;
 143: // catch_target0
                    CatchBlockStart(arg_register=6);
                    zuuluu = golfie;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    oscard = 9;
                    tangon = tangon[oscard];
                    report = undefined;
                    tangon = option.bind(report)(tangon);
                    tangon = tangon.BillingError;
                    tangon = golfie instanceof tangon;
                    if(tangon) { _fun00014_ip = 234; continue _fun00013 }
 186:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = tangon.bind(report)(michal);
                    report = michal.BillingError;
                    yankee = zuuluu;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    romeon = tangon;
                    michal = new romeon[report](yankee, offset);
                    michal = michal instanceof Object ? michal : tangon;
                    _fun00014_ip = 237; continue _fun00013;
 234:
                    michal = zuuluu;
 237:
                    throw michal;
 239:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot7 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = false;
    tangon['isGift'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/SKUActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchSKU
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchSKU'] = tangon;
    tangon = function() { // Original name: fetchPublishedSKU
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchPublishedSKU'] = tangon;
    tangon = function() { // Original name: fetchTestSKUsForApplication
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchTestSKUsForApplication'] = tangon;
    tangon = function() { // Original name: fetchPurchasePreview
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchPurchasePreview'] = tangon;
    tangon = function() { // Original name: grantChannelBranchEntitlement
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['grantChannelBranchEntitlement'] = tangon;
    tangon = function() { // Original name: purchaseSKU
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['purchaseSKU'] = tangon;
    tangon = function() { // Original name: resendPaymentVerificationEmail
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['resendPaymentVerificationEmail'] = tangon;
    tangon = function() { // Original name: clearPurchaseError
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SKU_PURCHASE_CLEAR_ERROR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearPurchaseError'] = tangon;
    tangon = function() { // Original name: showPurchaseConfirmationStep
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['showPurchaseConfirmationStep'] = tangon;
    michal = function(argFoo) { // Original name: updateSKUPaymentIsGift
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SKU_PURCHASE_UPDATE_IS_GIFT';
        michal['type'] = report;
        report = argFoo;
        michal['isGift'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateSKUPaymentIsGift'] = michal;
    return entity;
})();