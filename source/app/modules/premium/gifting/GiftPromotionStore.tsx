// app/modules/premium/gifting/GiftPromotionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    golf = {};
    mike['giftOptionsReceiptMap'] = golf;
    var _closure1_slot5 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: GiftPromotionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot6;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun00006_ip = 37; continue _fun00005 }
 9:
                mike = _closure1_slot5;
                entity = {};
                tango = zulu.giftOptionsReceiptMap;
                report = entity;
                zulu = copyDataProperties(report, tango);
                mike['giftOptionsReceiptMap'] = entity;
 37:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGiftOptionsForKey';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = _closure1_slot5;
            mike = entity.giftOptionsReceiptMap;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GiftPromotionStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = new Array(1);
    options = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            zulu = null;
            entity = tango;
            if(!(zulu != entity)) { _fun00008_ip = 40; continue _fun00007 }
 12:
            mike = {};
            tango = tango.giftOptionsReceiptMap;
            report = zulu != tango;
            zulu = null;
            if(!report) { _fun00008_ip = 32; continue _fun00007 }
 29:
            zulu = tango;
 32:
            mike['giftOptionsReceiptMap'] = zulu;
            entity = mike;
 40:
            return entity;
        }
    };
    mike[0] = options;
    golf['migrations'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleLogout
        mike = {};
        entity = {};
        mike['giftOptionsReceiptMap'] = entity;
        _closure1_slot5 = mike;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = options;
    options = function(argFoo) { // Original name: handleCacheGiftOptions
        entity = argFoo;
        zulu = entity.key;
        mike = entity.giftOptions;
        entity = _closure1_slot5;
        entity = entity.giftOptionsReceiptMap;
        entity[zulu] = mike;
        entity = undefined;
        return entity;
    };
    mike['GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION'] = options;
    tango = function(argFoo) { // Original name: handleClearCachedGiftOptions
        entity = argFoo;
        mike = entity.key;
        entity = _closure1_slot5;
        entity = entity.giftOptionsReceiptMap;
        entity = delete entity[mike];
        entity = undefined;
        return entity;
    };
    mike['GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/gifting/GiftPromotionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();