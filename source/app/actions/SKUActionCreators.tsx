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
                    if(tangon) { _fun00008_ip = 581; continue _fun00007 }
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
                    SaveGenerator(address=242);
 240:
                    return report;
 242:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(option) { _fun00008_ip = 318; continue _fun00007 }
 248:
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
 313: // try_end0
                    _fun00008_ip = 576; continue _fun00007;
 318:
                    return report;
 321: // catch_target0
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
                    if(report) { _fun00008_ip = 447; continue _fun00007 }
 399:
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
                    _fun00008_ip = 450; continue _fun00007;
 447:
                    report = oscard;
 450:
                    michal = report;
                    oscard = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    option = 10;
                    report = report[option];
                    report = verify.bind(golfie)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if(!(oscard !== report)) { _fun00008_ip = 579; continue _fun00007 }
 494:
                    report = michal;
                    oscard = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[option];
                    report = verify.bind(golfie)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if(!(oscard !== report)) { _fun00008_ip = 579; continue _fun00007 }
 535:
                    report = michal;
                    report = report.code;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = tangon.ErrorCodes;
                    tangon = tangon.INVALID_BILLING_ADDRESS;
                    if(!(report !== tangon)) { _fun00008_ip = 579; continue _fun00007 }
 576:
                    return zuuluu;
 579:
                    throw michal;
 581:
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
                    config = argFoo;
                    oscard = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(option) { _fun00012_ip = 1360; continue _fun00011 }
 18:
                    foxtra = config;
                    var _closure4_slot0 = config;
                    golfie = oscard;
                    var _closure4_slot1 = oscard;
                    option = undefined;
                    zuuluu = undefined;
                    source = undefined;
                    update = undefined;
                    output = undefined;
                    backup = undefined;
                    result = undefined;
                    report = undefined;
                    echoed = undefined;
                    sizing = undefined;
                    offset = undefined;
                    kiloes = undefined;
                    ctrled = undefined;
                    romeon = undefined;
                    michal = undefined;
                    verify = {};
                    sierra = _closure1_slot9;
                    limora = verify;
                    vacuum = copyDataProperties(limora, sierra);
                    sierra = argBaz;
                    limora = verify;
                    vacuum = copyDataProperties(limora, sierra);
                    zuuluu = verify.paymentSource;
                    source = verify.expectedAmount;
                    update = verify.expectedCurrency;
                    output = verify.analyticsLoadId;
                    backup = verify.isGift;
                    result = verify.giftInfoOptions;
                    report = verify.subscriptionPlanId;
                    echoed = verify.loadId;
                    sizing = verify.countryCode;
                    sequen = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    verify = 5;
                    vacuum = vacuum[verify];
                    sequen = sequen.bind(option)(vacuum);
                    vacuum = sequen.wait;
                    yankee = function() {
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
                    yankee = vacuum.bind(sequen)(yankee);
                    sequen = _closure1_slot6;
                    vacuum = sequen.inTestModeForApplication;
                    vacuum = vacuum.bind(sequen)(config);
                    yankee = vacuum;
                    if(vacuum) { _fun00012_ip = 219; continue _fun00011 }
 201:
                    config = _closure1_slot4;
                    sequen = config.inDevModeForApplication;
                    vacuum = foxtra;
                    yankee = sequen.bind(config)(vacuum);
 219:
                    offset = yankee;
 222: // try_start_0
                    yankee = {};
                    vacuum = backup;
                    yankee['gift'] = vacuum;
                    yankee['sku_subscription_plan_id'] = report;
                    vacuum = _closure1_slot0;
                    sequen = _closure1_slot2;
                    report = 12;
                    report = sequen[report];
                    sequen = vacuum.bind(option)(report);
                    vacuum = sequen.createGatewayCheckoutContext;
                    report = zuuluu;
                    report = vacuum.bind(sequen)(report);
                    SaveGenerator(address=275);
 273:
                    return report;
 275:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 955; continue _fun00011 }
 284:
                    yankee['gateway_checkout_context'] = report;
                    yankee['load_id'] = echoed;
                    kiloes = yankee;
                    if(offset) { _fun00012_ip = 656; continue _fun00011 }
 303:
                    offset = zuuluu;
                    echoed = null;
                    if(!(echoed != offset)) { _fun00012_ip = 548; continue _fun00011 }
 315:
                    yankee = kiloes;
                    config = zuuluu;
                    offset = config.id;
                    yankee['payment_source_id'] = offset;
                    vacuum = _closure1_slot0;
                    offset = _closure1_slot2;
                    sequen = 13;
                    offset = offset[sequen];
                    vacuum = vacuum.bind(option)(offset);
                    offset = vacuum.createPaymentSourceToken;
                    offset = offset.bind(vacuum)(config);
                    SaveGenerator(address=367);
 365:
                    return offset;
 367:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 653; continue _fun00011 }
 376:
                    yankee['payment_source_token'] = offset;
                    config = _closure1_slot7;
                    vacuum = config.has;
                    yankee = zuuluu;
                    yankee = yankee.type;
                    yankee = vacuum.bind(config)(yankee);
                    if(!yankee) { _fun00012_ip = 548; continue _fun00011 }
 410:
                    vacuum = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[sequen];
                    sequen = vacuum.bind(option)(yankee);
                    vacuum = sequen.popupBridgeState;
                    yankee = zuuluu;
                    yankee = yankee.type;
                    yankee = vacuum.bind(sequen)(yankee);
                    SaveGenerator(address=450);
 448:
                    return yankee;
 450:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 650; continue _fun00011 }
 459:
                    ctrled = yankee;
                    vacuum = kiloes;
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequen = 11;
                    sequen = record[sequen];
                    config = config.bind(option)(sequen);
                    sequen = config.getAPIBaseURL;
                    sequen = sequen.bind(config)();
                    papara = _closure1_slot8;
                    cntext = papara.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    config = zuuluu;
                    record = config.type;
                    target = echoed != yankee;
                    config = '';
                    if(!target) { _fun00012_ip = 527; continue _fun00011 }
 524:
                    config = ctrled;
 527:
                    ctrled = 'success';
                    ctrled = cntext.bind(papara)(record, config, ctrled);
                    ctrled = sequen + ctrled;
                    vacuum['return_url'] = ctrled;
 548:
                    ctrled = source;
                    if(!(echoed != ctrled)) { _fun00012_ip = 566; continue _fun00011 }
 555:
                    ctrled = kiloes;
                    ctrled['expected_amount'] = source;
 566:
                    source = update;
                    if(!(echoed != source)) { _fun00012_ip = 584; continue _fun00011 }
 573:
                    source = kiloes;
                    source['expected_currency'] = update;
 584:
                    update = kiloes;
                    update['gift_info_options'] = result;
                    result = sizing;
                    if(!(echoed != result)) { _fun00012_ip = 609; continue _fun00011 }
 600:
                    result = kiloes;
                    result['country_code'] = sizing;
 609:
                    result = kiloes;
                    echoed = _closure1_slot0;
                    update = _closure1_slot2;
                    sizing = 14;
                    sizing = update[sizing];
                    echoed = echoed.bind(option)(sizing);
                    sizing = echoed.getPurchaseToken;
                    sizing = sizing.bind(echoed)();
                    result['purchase_token'] = sizing;
                    _fun00012_ip = 667; continue _fun00011;
 650: // try_end0
                    return yankee;
 653:
                    return offset;
 656: // try_start_1
                    yankee = kiloes;
                    offset = true;
                    yankee['test_mode'] = offset;
 667:
                    yankee = _closure1_slot0;
                    sizing = _closure1_slot2;
                    offset = 11;
                    offset = sizing[offset];
                    offset = yankee.bind(option)(offset);
                    sizing = offset.HTTP;
                    yankee = sizing.post;
                    offset = {};
                    update = _closure1_slot8;
                    echoed = update.STORE_SKU_PURCHASE;
                    result = golfie;
                    result = echoed.bind(update)(result);
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
                    SaveGenerator(address=759);
 757:
                    return offset;
 759:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00012_ip = 952; continue _fun00011 }
 768:
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
                    echoed = result.library_applications;
                    result = null;
                    if(!(result == echoed)) { _fun00012_ip = 834; continue _fun00011 }
 828:
                    result = new Array(0);
                    _fun00012_ip = 884; continue _fun00011;
 834:
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
 884:
                    yankee['libraryApplications'] = result;
                    result = romeon.body;
                    result = result.entitlements;
                    yankee['entitlements'] = result;
                    result = romeon.body;
                    result = result.gift_code;
                    yankee['giftCode'] = result;
                    yankee = sizing.bind(output)(yankee);
                    yankee = {};
                    sierra = romeon.body;
                    limora = yankee;
                    romeon = copyDataProperties(limora, sierra);
                    romeon = 'redirectConfirmation';
                    yankee[romeon] = kiloes;
 949: // try_end1
                    return yankee;
 952:
                    return offset;
 955:
                    return report;
 958: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    tangon = offset;
                    romeon = _closure1_slot0;
                    report = _closure1_slot2;
                    yankee = 9;
                    report = report[yankee];
                    report = romeon.bind(option)(report);
                    report = report.BillingError;
                    report = offset instanceof report;
                    if(report) { _fun00012_ip = 1044; continue _fun00011 }
 996:
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    report = offset.bind(option)(report);
                    yankee = report.BillingError;
                    limora = tangon;
                    offset = yankee.prototype;
                    offset = Object.create(offset, {constructor: {value: yankee}});
                    whisks = offset;
                    report = new whisks[yankee](limora, sierra);
                    offset = report instanceof Object ? report : offset;
                    _fun00012_ip = 1047; continue _fun00011;
 1044:
                    offset = tangon;
 1047:
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
                    if(!yankee) { _fun00012_ip = 1138; continue _fun00011 }
 1097:
                    yankee = michal;
                    romeon = yankee.code;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[offset];
                    yankee = kiloes.bind(option)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.AUTHENTICATION_REQUIRED;
                    report = romeon !== yankee;
 1138:
                    if(report) { _fun00012_ip = 1193; continue _fun00011 }
 1141:
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
 1193:
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
                    if(!(golfie === report)) { _fun00012_ip = 1358; continue _fun00011 }
 1282:
                    report = tangon;
                    report = report.body;
                    report = report.payment_id;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 13;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    if(report) { _fun00012_ip = 1338; continue _fun00011 }
 1319:
                    golfie = oscard.dispatchConfirmationError;
                    report = 'payment id cannot be null on redirected confirmations.';
                    report = golfie.bind(oscard)(report);
                    throw report;
 1338:
                    report = oscard.handleConfirmation;
                    tangon = tangon.body;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    return zuuluu;
 1358:
                    throw michal;
 1360:
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