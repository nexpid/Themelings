// app/modules/rpc/server/commands/store.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: getSubscriptionSkusViaListings
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _getSubscriptionSkusViaListings
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 127; continue _fun00001 }
 12:
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    var _closure4_slot1 = report;
                    option = undefined;
                    var _closure4_slot2 = option;
                    zuuluu = report.filter;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure1_slot9;
                        entity = entity.SUBSCRIPTION_GROUP;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = zuuluu.bind(report)(michal);
                    michal = global;
                    report = michal.Promise;
                    zuuluu = report.all;
                    oscard = golfie.map;
                    michal = function() {
                        tangon = _closure1_slot4;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00004_ip = 75; continue _fun00003 }
 7:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    michal = 5;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    report = tangon.bind(michal)(zuuluu);
                                    tangon = report.fetchAllSubscriptionListingsDataForApplication;
                                    zuuluu = _closure4_slot0;
                                    michal = argFoo;
                                    michal = michal.id;
                                    michal = tangon.bind(report)(zuuluu, michal);
                                    SaveGenerator(address=63);
 61:
                                    return michal;
 63:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(zuuluu) { _fun00004_ip = 72; continue _fun00003 }
 69:
                                    return michal;
 72:
                                    return michal;
 75:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure5_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure5_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    michal = michal.bind(option)();
                    michal = oscard.bind(golfie)(michal);
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 124; continue _fun00001 }
 96:
                    zuuluu = new Array(0);
                    _closure4_slot2 = zuuluu;
                    report = michal.forEach;
                    tangon = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = argFoo;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00006_ip = 86; continue _fun00005 }
 11:
                            oscard = zuuluu.subscription_listings;
                            if(!(entity != oscard)) { _fun00006_ip = 84; continue _fun00005 }
 21:
                            report = new Array(0);
                            var _closure5_slot0 = report;
                            tangon = oscard.forEach;
                            zuuluu = function(argFoo) {
                                michal = argFoo;
                                var _closure6_slot0 = michal;
                                zuuluu = michal.subscription_plans;
                                michal = zuuluu.forEach;
                                entity = function(argFoo) {
                                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                        report = argFoo;
                                        var _closure7_slot0 = report;
                                        michal = null;
                                        tangon = michal == report;
                                        entity = undefined;
                                        oscard = undefined;
                                        if(tangon) { _fun00008_ip = 28; continue _fun00007 }
 22:
                                        oscard = report.price;
 28:
                                        golfie = _closure4_slot1;
                                        tangon = golfie.find;
                                        zuuluu = function(argFoo) {
                                            entity = argFoo;
                                            michal = entity.id;
                                            entity = _closure7_slot0;
                                            entity = entity.sku_id;
                                            entity = michal === entity;
                                            return entity;
                                        };
                                        zuuluu = tangon.bind(golfie)(zuuluu);
                                        if(!(michal != zuuluu)) { _fun00008_ip = 187; continue _fun00007 }
 59:
                                        tangon = {};
                                        report = report.sku_id;
                                        tangon['id'] = report;
                                        report = zuuluu.name;
                                        tangon['name'] = report;
                                        report = zuuluu.type;
                                        tangon['type'] = report;
                                        report = {};
                                        report['amount'] = oscard;
                                        oscard = _closure1_slot7;
                                        oscard = oscard.USD;
                                        report['currency'] = oscard;
                                        tangon['price'] = report;
                                        report = _closure6_slot0;
                                        oscard = report.application_id;
                                        tangon['application_id'] = oscard;
                                        report = report.sku_flags;
                                        tangon['flags'] = report;
                                        zuuluu = zuuluu.release_date;
                                        report = michal != zuuluu;
                                        michal = null;
                                        if(!report) { _fun00008_ip = 165; continue _fun00007 }
 162:
                                        michal = zuuluu;
 165:
                                        tangon['release_date'] = michal;
                                        zuuluu = _closure5_slot0;
                                        michal = zuuluu.push;
                                        michal = michal.bind(zuuluu)(tangon);
 187:
                                        return entity;
                                    }
                                };
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            zuuluu = tangon.bind(oscard)(zuuluu);
                            tangon = report.filter;
                            zuuluu = function(argFoo) {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    zuuluu = argFoo;
                                    michal = null;
                                    tangon = michal == zuuluu;
                                    entity = undefined;
                                    if(tangon) { _fun00010_ip = 20; continue _fun00009 }
 14:
                                    entity = zuuluu.price;
 20:
                                    entity = michal != entity;
                                    return entity;
                                }
                            };
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = tangon.forEach;
                            michal = function(argFoo) {
                                zuuluu = _closure4_slot2;
                                michal = zuuluu.push;
                                entity = argFoo;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            michal = undefined;
                            return michal;
 84:
                            return entity;
 86:
                            return entity;
                        }
                    };
                    tangon = report.bind(michal)(tangon);
                    return zuuluu;
 124:
                    return michal;
 127:
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
    kiloes = function() { // Original name: getSkusHandler
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = kiloes;
    entity = function() { // Original name: _getSkusHandler
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 485; continue _fun00011 }
 12:
                    michal = argFoo;
                    tangon = michal.socket;
                    oscard = undefined;
                    SaveGenerator(address=27);
 25:
                    return oscard;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 482; continue _fun00011 }
 36:
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    report = 6;
                    report = verify[report];
                    verify = option.bind(oscard)(report);
                    option = verify.validateTransportType;
                    report = tangon.transport;
                    report = option.bind(verify)(report);
                    tangon = tangon.application;
                    option = tangon.id;
                    tangon = null;
                    if(!(tangon != option)) { _fun00012_ip = 414; continue _fun00011 }
 95:
                    report = _closure1_slot6;
                    tangon = report.inTestModeForApplication;
                    tangon = tangon.bind(report)(option);
                    if(tangon) { _fun00012_ip = 301; continue _fun00011 }
 116:
                    report = _closure1_slot5;
                    tangon = report.inDevModeForApplication;
                    tangon = tangon.bind(report)(option);
                    if(tangon) { _fun00012_ip = 301; continue _fun00011 }
 137:
                    report = _closure1_slot2;
                    verify = _closure1_slot3;
                    tangon = 9;
                    tangon = verify[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = report.fetchAllStoreListingsForApplication;
                    tangon = tangon.bind(report)(option);
                    SaveGenerator(address=172);
 170:
                    return tangon;
 172:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 298; continue _fun00011 }
 178:
                    verify = tangon.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.sku;
                        michal = entity.type;
                        entity = _closure1_slot9;
                        entity = entity.SUBSCRIPTION_GROUP;
                        entity = michal !== entity;
                        return entity;
                    };
                    offset = verify.bind(tangon)(report);
                    verify = offset.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.sku;
                        return entity;
                    };
                    offset = verify.bind(offset)(report);
                    verify = offset.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.price;
                        entity = null;
                        entity = entity != michal;
                        return entity;
                    };
                    backup = verify.bind(offset)(report);
                    verify = new Array(0);
                    foxtra = 0;
                    kiloes = verify;
                    offset = arraySpread(kiloes, backup, foxtra);
                    yankee = _closure1_slot10;
                    romeon = tangon.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.sku;
                        return entity;
                    };
                    report = romeon.bind(tangon)(report);
                    report = yankee.bind(oscard)(option, report);
                    SaveGenerator(address=273);
 271:
                    return report;
 273:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(yankee) { _fun00012_ip = 295; continue _fun00011 }
 279:
                    kiloes = verify;
                    backup = report;
                    foxtra = offset;
                    offset = arraySpread(kiloes, backup, foxtra);
                    return verify;
 295:
                    return report;
 298:
                    return tangon;
 301:
                    report = _closure1_slot2;
                    verify = _closure1_slot3;
                    tangon = 8;
                    tangon = verify[tangon];
                    verify = report.bind(oscard)(tangon);
                    report = verify.fetchTestSKUsForApplication;
                    tangon = false;
                    tangon = report.bind(verify)(option, tangon);
                    SaveGenerator(address=339);
 337:
                    return tangon;
 339:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 411; continue _fun00011 }
 345:
                    report = _closure1_slot10;
                    report = report.bind(oscard)(option, tangon);
                    SaveGenerator(address=359);
 357:
                    return report;
 359:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(option) { _fun00012_ip = 408; continue _fun00011 }
 365:
                    option = tangon.filter;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        michal = entity.price;
                        entity = null;
                        entity = entity != michal;
                        return entity;
                    };
                    backup = option.bind(tangon)(golfie);
                    golfie = new Array(0);
                    foxtra = 0;
                    kiloes = golfie;
                    foxtra = arraySpread(kiloes, backup, foxtra);
                    kiloes = golfie;
                    backup = report;
                    option = arraySpread(kiloes, backup, foxtra);
                    return golfie;
 408:
                    return report;
 411:
                    return tangon;
 414:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 7;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.INVALID_COMMAND;
                    report['errorCode'] = zuuluu;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    backup = 'No application.';
                    sizing = tangon;
                    kiloes = report;
                    zuuluu = new sizing[oscard](kiloes, backup, foxtra);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 482:
                    return michal;
 485:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    backup = function(argFoo) { // Original name: getEntitlementsHandler
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.socket;
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 6;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.validateTransportType;
            zuuluu = michal.transport;
            zuuluu = report.bind(oscard)(zuuluu);
            michal = michal.application;
            report = michal.id;
            michal = null;
            if(!(michal != report)) { _fun00014_ip = 100; continue _fun00013 }
 67:
            zuuluu = _closure1_slot2;
            oscard = _closure1_slot3;
            michal = 10;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.fetchUserEntitlementsForApplication;
            michal = michal.bind(zuuluu)(report);
            return michal;
 100:
            zuuluu = _closure1_slot1;
            report = _closure1_slot3;
            michal = 7;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            golfie = 'No application.';
            verify = michal;
            option = zuuluu;
            entity = new verify[tangon](option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot14 = backup;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    foxtra = michal.RPC_AUTHENTICATED_SCOPE;
    romeon = michal.RPC_LOCAL_SCOPE;
    offset = michal.RPC_SCOPE_CONFIG;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.CurrencyCodes;
    var _closure1_slot7 = tangon;
    tangon = michal.RPCCommands;
    golfie = michal.RPCErrors;
    var _closure1_slot8 = golfie;
    michal = michal.SKUTypes;
    var _closure1_slot9 = michal;
    michal = {};
    yankee = tangon.GET_SKUS;
    golfie = {};
    sizing = offset.ANY;
    verify = new Array(2);
    verify[0] = foxtra;
    verify[1] = romeon;
    golfie[sizing] = verify;
    verify = 'handler';
    golfie[verify] = kiloes;
    michal[yankee] = golfie;
    yankee = tangon.GET_ENTITLEMENTS;
    golfie = {};
    sizing = offset.ANY;
    kiloes = new Array(2);
    kiloes[0] = foxtra;
    kiloes[1] = romeon;
    golfie[sizing] = kiloes;
    golfie[verify] = backup;
    michal[yankee] = golfie;
    yankee = tangon.GET_SKUS_EMBEDDED;
    golfie = {};
    kiloes = offset.ANY;
    backup = new Array(2);
    backup[0] = foxtra;
    backup[1] = romeon;
    golfie[kiloes] = backup;
    backup = function(argFoo) { // Original name: handler
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 51; continue _fun00015 }
 7:
                    zuuluu = {};
                    report = _closure1_slot12;
                    tangon = _closure2_slot0;
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    SaveGenerator(address=34);
 32:
                    return michal;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 48; continue _fun00015 }
 40:
                    zuuluu['skus'] = michal;
                    return zuuluu;
 48:
                    return michal;
 51:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie[verify] = backup;
    michal[yankee] = golfie;
    golfie = tangon.GET_ENTITLEMENTS_EMBEDDED;
    tangon = {};
    yankee = offset.ANY;
    offset = new Array(2);
    offset[0] = foxtra;
    offset[1] = romeon;
    tangon[yankee] = offset;
    option = function(argFoo) { // Original name: handler
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 51; continue _fun00017 }
 7:
                    zuuluu = {};
                    report = _closure1_slot14;
                    tangon = _closure2_slot0;
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    SaveGenerator(address=34);
 32:
                    return michal;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00018_ip = 48; continue _fun00017 }
 40:
                    zuuluu['entitlements'] = michal;
                    return zuuluu;
 48:
                    return michal;
 51:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon[verify] = option;
    michal[golfie] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/store.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();