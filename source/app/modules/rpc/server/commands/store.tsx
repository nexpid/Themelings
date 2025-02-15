// app/modules/rpc/server/commands/store.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: getSubscriptionSkusViaListings
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _getSubscriptionSkusViaListings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun109684: for(var _fun109684_ip = 0; ; ) switch(_fun109684_ip) {
 0:
                    StartGenerator();
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109684_ip = 127; continue _fun109684 }
 12:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    var _closure4_slot1 = report;
                    options = undefined;
                    var _closure4_slot2 = options;
                    zulu = report.filter;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = _closure1_slot9;
                        entity = entity.SUBSCRIPTION_GROUP;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = zulu.bind(report)(mike);
                    mike = global;
                    report = mike.Promise;
                    zulu = report.all;
                    oscar = golf.map;
                    mike = function() {
                        tango = _closure1_slot4;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun109688: for(var _fun109688_ip = 0; ; ) switch(_fun109688_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun109688_ip = 75; continue _fun109688 }
 7:
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    mike = 5;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    report = tango.bind(mike)(zulu);
                                    tango = report.fetchAllSubscriptionListingsDataForApplication;
                                    zulu = _closure4_slot0;
                                    mike = argFoo;
                                    mike = mike.id;
                                    mike = tango.bind(report)(zulu, mike);
                                    SaveGenerator(address=63);
 61:
                                    return mike;
 63:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(zulu) { _fun109688_ip = 72; continue _fun109688 }
 69:
                                    return mike;
 72:
                                    return mike;
 75:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure5_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure5_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    mike = mike.bind(options)();
                    mike = oscar.bind(golf)(mike);
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun109684_ip = 124; continue _fun109684 }
 96:
                    zulu = new Array(0);
                    _closure4_slot2 = zulu;
                    report = mike.forEach;
                    tango = function(argFoo) {
                        _fun109690: for(var _fun109690_ip = 0; ; ) switch(_fun109690_ip) {
 0:
                            zulu = argFoo;
                            entity = null;
                            if(!(entity != zulu)) { _fun109690_ip = 86; continue _fun109690 }
 11:
                            oscar = zulu.subscription_listings;
                            if(!(entity != oscar)) { _fun109690_ip = 84; continue _fun109690 }
 21:
                            report = new Array(0);
                            var _closure5_slot0 = report;
                            tango = oscar.forEach;
                            zulu = function(argFoo) {
                                mike = argFoo;
                                var _closure6_slot0 = mike;
                                zulu = mike.subscription_plans;
                                mike = zulu.forEach;
                                entity = function(argFoo) {
                                    _fun109692: for(var _fun109692_ip = 0; ; ) switch(_fun109692_ip) {
 0:
                                        report = argFoo;
                                        var _closure7_slot0 = report;
                                        mike = null;
                                        tango = mike == report;
                                        entity = undefined;
                                        oscar = undefined;
                                        if(tango) { _fun109692_ip = 28; continue _fun109692 }
 22:
                                        oscar = report.price;
 28:
                                        golf = _closure4_slot1;
                                        tango = golf.find;
                                        zulu = function(argFoo) {
                                            entity = argFoo;
                                            mike = entity.id;
                                            entity = _closure7_slot0;
                                            entity = entity.sku_id;
                                            entity = mike === entity;
                                            return entity;
                                        };
                                        zulu = tango.bind(golf)(zulu);
                                        if(!(mike != zulu)) { _fun109692_ip = 187; continue _fun109692 }
 59:
                                        tango = {};
                                        report = report.sku_id;
                                        tango['id'] = report;
                                        report = zulu.name;
                                        tango['name'] = report;
                                        report = zulu.type;
                                        tango['type'] = report;
                                        report = {};
                                        report['amount'] = oscar;
                                        oscar = _closure1_slot7;
                                        oscar = oscar.USD;
                                        report['currency'] = oscar;
                                        tango['price'] = report;
                                        report = _closure6_slot0;
                                        oscar = report.application_id;
                                        tango['application_id'] = oscar;
                                        report = report.sku_flags;
                                        tango['flags'] = report;
                                        zulu = zulu.release_date;
                                        report = mike != zulu;
                                        mike = null;
                                        if(!report) { _fun109692_ip = 165; continue _fun109692 }
 162:
                                        mike = zulu;
 165:
                                        tango['release_date'] = mike;
                                        zulu = _closure5_slot0;
                                        mike = zulu.push;
                                        mike = mike.bind(zulu)(tango);
 187:
                                        return entity;
                                    }
                                };
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            zulu = tango.bind(oscar)(zulu);
                            tango = report.filter;
                            zulu = function(argFoo) {
                                _fun109694: for(var _fun109694_ip = 0; ; ) switch(_fun109694_ip) {
 0:
                                    zulu = argFoo;
                                    mike = null;
                                    tango = mike == zulu;
                                    entity = undefined;
                                    if(tango) { _fun109694_ip = 20; continue _fun109694 }
 14:
                                    entity = zulu.price;
 20:
                                    entity = mike != entity;
                                    return entity;
                                }
                            };
                            tango = tango.bind(report)(zulu);
                            zulu = tango.forEach;
                            mike = function(argFoo) {
                                zulu = _closure4_slot2;
                                mike = zulu.push;
                                entity = argFoo;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            mike = undefined;
                            return mike;
 84:
                            return entity;
 86:
                            return entity;
                        }
                    };
                    tango = report.bind(mike)(tango);
                    return zulu;
 124:
                    return mike;
 127:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    kilo = function() { // Original name: getSkusHandler
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = kilo;
    entity = function() { // Original name: _getSkusHandler
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun109699: for(var _fun109699_ip = 0; ; ) switch(_fun109699_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109699_ip = 485; continue _fun109699 }
 12:
                    mike = argFoo;
                    tango = mike.socket;
                    oscar = undefined;
                    SaveGenerator(address=27);
 25:
                    return oscar;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun109699_ip = 482; continue _fun109699 }
 36:
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    report = 6;
                    report = verify[report];
                    verify = options.bind(oscar)(report);
                    options = verify.validateTransportType;
                    report = tango.transport;
                    report = options.bind(verify)(report);
                    tango = tango.application;
                    options = tango.id;
                    tango = null;
                    if(!(tango != options)) { _fun109699_ip = 414; continue _fun109699 }
 95:
                    report = _closure1_slot6;
                    tango = report.inTestModeForApplication;
                    tango = tango.bind(report)(options);
                    if(tango) { _fun109699_ip = 301; continue _fun109699 }
 116:
                    report = _closure1_slot5;
                    tango = report.inDevModeForApplication;
                    tango = tango.bind(report)(options);
                    if(tango) { _fun109699_ip = 301; continue _fun109699 }
 137:
                    report = _closure1_slot2;
                    verify = _closure1_slot3;
                    tango = 9;
                    tango = verify[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.fetchAllStoreListingsForApplication;
                    tango = tango.bind(report)(options);
                    SaveGenerator(address=172);
 170:
                    return tango;
 172:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun109699_ip = 298; continue _fun109699 }
 178:
                    verify = tango.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.sku;
                        mike = entity.type;
                        entity = _closure1_slot9;
                        entity = entity.SUBSCRIPTION_GROUP;
                        entity = mike !== entity;
                        return entity;
                    };
                    offset = verify.bind(tango)(report);
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
                        mike = entity.price;
                        entity = null;
                        entity = entity != mike;
                        return entity;
                    };
                    backup = verify.bind(offset)(report);
                    verify = new Array(0);
                    foxtrot = 0;
                    kilo = verify;
                    offset = arraySpread(kilo, backup, foxtrot);
                    yankee = _closure1_slot10;
                    romeo = tango.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.sku;
                        return entity;
                    };
                    report = romeo.bind(tango)(report);
                    report = yankee.bind(oscar)(options, report);
                    SaveGenerator(address=273);
 271:
                    return report;
 273:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(yankee) { _fun109699_ip = 295; continue _fun109699 }
 279:
                    kilo = verify;
                    backup = report;
                    foxtrot = offset;
                    offset = arraySpread(kilo, backup, foxtrot);
                    return verify;
 295:
                    return report;
 298:
                    return tango;
 301:
                    report = _closure1_slot2;
                    verify = _closure1_slot3;
                    tango = 8;
                    tango = verify[tango];
                    verify = report.bind(oscar)(tango);
                    report = verify.fetchTestSKUsForApplication;
                    tango = false;
                    tango = report.bind(verify)(options, tango);
                    SaveGenerator(address=339);
 337:
                    return tango;
 339:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun109699_ip = 411; continue _fun109699 }
 345:
                    report = _closure1_slot10;
                    report = report.bind(oscar)(options, tango);
                    SaveGenerator(address=359);
 357:
                    return report;
 359:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun109699_ip = 408; continue _fun109699 }
 365:
                    options = tango.filter;
                    golf = function(argFoo) {
                        entity = argFoo;
                        mike = entity.price;
                        entity = null;
                        entity = entity != mike;
                        return entity;
                    };
                    backup = options.bind(tango)(golf);
                    golf = new Array(0);
                    foxtrot = 0;
                    kilo = golf;
                    foxtrot = arraySpread(kilo, backup, foxtrot);
                    kilo = golf;
                    backup = report;
                    options = arraySpread(kilo, backup, foxtrot);
                    return golf;
 408:
                    return report;
 411:
                    return tango;
 414:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 7;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot8;
                    zulu = zulu.INVALID_COMMAND;
                    report['errorCode'] = zulu;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    backup = 'No application.';
                    sizing = tango;
                    kilo = report;
                    zulu = new sizing[oscar](kilo, backup, foxtrot);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 482:
                    return mike;
 485:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    backup = function(argFoo) { // Original name: getEntitlementsHandler
        _fun109705: for(var _fun109705_ip = 0; ; ) switch(_fun109705_ip) {
 0:
            entity = argFoo;
            mike = entity.socket;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 6;
            zulu = tango[zulu];
            tango = undefined;
            oscar = report.bind(tango)(zulu);
            report = oscar.validateTransportType;
            zulu = mike.transport;
            zulu = report.bind(oscar)(zulu);
            mike = mike.application;
            report = mike.id;
            mike = null;
            if(!(mike != report)) { _fun109705_ip = 100; continue _fun109705 }
 67:
            zulu = _closure1_slot2;
            oscar = _closure1_slot3;
            mike = 10;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.fetchUserEntitlementsForApplication;
            mike = mike.bind(zulu)(report);
            return mike;
 100:
            zulu = _closure1_slot1;
            report = _closure1_slot3;
            mike = 7;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            golf = 'No application.';
            verify = mike;
            options = zulu;
            entity = new verify[tango](options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot14 = backup;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    foxtrot = mike.RPC_AUTHENTICATED_SCOPE;
    romeo = mike.RPC_LOCAL_SCOPE;
    offset = mike.RPC_SCOPE_CONFIG;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.CurrencyCodes;
    var _closure1_slot7 = tango;
    tango = mike.RPCCommands;
    golf = mike.RPCErrors;
    var _closure1_slot8 = golf;
    mike = mike.SKUTypes;
    var _closure1_slot9 = mike;
    mike = {};
    yankee = tango.GET_SKUS;
    golf = {};
    sizing = offset.ANY;
    verify = new Array(2);
    verify[0] = foxtrot;
    verify[1] = romeo;
    golf[sizing] = verify;
    verify = 'handler';
    golf[verify] = kilo;
    mike[yankee] = golf;
    yankee = tango.GET_ENTITLEMENTS;
    golf = {};
    sizing = offset.ANY;
    kilo = new Array(2);
    kilo[0] = foxtrot;
    kilo[1] = romeo;
    golf[sizing] = kilo;
    golf[verify] = backup;
    mike[yankee] = golf;
    yankee = tango.GET_SKUS_EMBEDDED;
    golf = {};
    kilo = offset.ANY;
    backup = new Array(2);
    backup[0] = foxtrot;
    backup[1] = romeo;
    golf[kilo] = backup;
    backup = function(argFoo) { // Original name: handler
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun109708: for(var _fun109708_ip = 0; ; ) switch(_fun109708_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109708_ip = 51; continue _fun109708 }
 7:
                    zulu = {};
                    report = _closure1_slot12;
                    tango = _closure2_slot0;
                    mike = undefined;
                    mike = report.bind(mike)(tango);
                    SaveGenerator(address=34);
 32:
                    return mike;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun109708_ip = 48; continue _fun109708 }
 40:
                    zulu['skus'] = mike;
                    return zulu;
 48:
                    return mike;
 51:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf[verify] = backup;
    mike[yankee] = golf;
    golf = tango.GET_ENTITLEMENTS_EMBEDDED;
    tango = {};
    yankee = offset.ANY;
    offset = new Array(2);
    offset[0] = foxtrot;
    offset[1] = romeo;
    tango[yankee] = offset;
    options = function(argFoo) { // Original name: handler
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun109711: for(var _fun109711_ip = 0; ; ) switch(_fun109711_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109711_ip = 51; continue _fun109711 }
 7:
                    zulu = {};
                    report = _closure1_slot14;
                    tango = _closure2_slot0;
                    mike = undefined;
                    mike = report.bind(mike)(tango);
                    SaveGenerator(address=34);
 32:
                    return mike;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun109711_ip = 48; continue _fun109711 }
 40:
                    zulu['entitlements'] = mike;
                    return zulu;
 48:
                    return mike;
 51:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango[verify] = options;
    mike[golf] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/store.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();