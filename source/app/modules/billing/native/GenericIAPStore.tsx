// app/modules/billing/native/GenericIAPStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun65874: for(var _fun65874_ip = 0; ; ) switch(_fun65874_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun65874_ip = 51; continue _fun65874 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun65874_ip = 92; continue _fun65874;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun65874_ip = 71; continue _fun65874 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun65875: for(var _fun65875_ip = 0; ; ) switch(_fun65875_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun65875_ip = 76; continue _fun65875;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = null;
    var _closure1_slot7 = mike;
    options = false;
    var _closure1_slot8 = options;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GenericIAPStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'isGenericIapConnected';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'hasGenericSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun65881: for(var _fun65881_ip = 0; ; ) switch(_fun65881_ip) {
 0:
                zulu = _closure1_slot7;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun65881_ip = 40; continue _fun65881 }
 16:
                tango = _closure1_slot7;
                zulu = tango.some;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.identifier;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 5;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = tango.bind(entity)(zulu);
                    entity = entity.ProductIds;
                    entity = entity.GENERIC_SUBSCRIPTION;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getProducts';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getStoreFront';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GenericIAPStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: initGenericProducts
        _fun65885: for(var _fun65885_ip = 0; ; ) switch(_fun65885_ip) {
 0:
            mike = argFoo;
            mike = mike.products;
            zulu = global;
            tango = zulu.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            offset = report;
            tango = new offset[tango](verify);
            oscar = tango instanceof Object ? tango : report;
            var _closure2_slot0 = oscar;
            zulu = zulu.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            offset = tango;
            zulu = new offset[zulu](verify);
            report = zulu instanceof Object ? zulu : tango;
            var _closure2_slot1 = report;
            zulu = mike.forEach;
            entity = function(argFoo) {
                entity = argFoo;
                report = _closure2_slot1;
                tango = report.add;
                zulu = entity.countryCode;
                zulu = tango.bind(report)(zulu);
                zulu = _closure2_slot0;
                mike = zulu.add;
                entity = entity.currencyCode;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = oscar.size;
            tango = 1;
            entity = tango === entity;
            if(!entity) { _fun65885_ip = 114; continue _fun65885 }
 105:
            zulu = report.size;
            entity = tango === zulu;
 114:
            if(!entity) { _fun65885_ip = 180; continue _fun65885 }
 117:
            zulu = {};
            entity = new Array(0);
            tango = 0;
            verify = entity;
            options = oscar;
            golf = 0;
            oscar = arraySpread(verify, options, golf);
            entity = entity[tango];
            zulu['currency'] = entity;
            entity = new Array(0);
            verify = entity;
            options = report;
            report = arraySpread(verify, options, golf);
            entity = entity[tango];
            zulu['country'] = entity;
            _closure1_slot9 = zulu;
            _closure1_slot7 = mike;
 180:
            entity = undefined;
            return entity;
        }
    };
    mike['IAP_LOAD_GENERIC_PRODUCTS'] = verify;
    verify = function(argFoo) { // Original name: genericIapInitConnection
        entity = argFoo;
        mike = entity.connected;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    mike['GENERIC_IAP_INIT_CONNECTION'] = verify;
    verify = function() { // Original name: genericIapInitConnectionFailed
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['GENERIC_IAP_INIT_CONNECTION_FAILED'] = verify;
    tango = function() { // Original name: genericIapEndConnection
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['GENERIC_IAP_END_CONNECTION'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/billing/native/GenericIAPStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();