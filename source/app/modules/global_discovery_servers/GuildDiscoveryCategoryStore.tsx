// app/modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot17;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot8 = options;
    options = tango.OTHER_DISCOVERY_CATEGORY_ID;
    var _closure1_slot9 = options;
    options = tango.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot10 = options;
    tango = tango.DISCOVERY_SIDEBAR_CATEGORIES;
    var _closure1_slot11 = tango;
    tango = null;
    var _closure1_slot12 = tango;
    tango = new Array(0);
    var _closure1_slot13 = tango;
    tango = new Array(0);
    var _closure1_slot14 = tango;
    tango = {};
    var _closure1_slot15 = tango;
    tango = 9;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: GuildDiscoveryCategoryStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'getPrimaryCategories';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getDiscoveryCategories';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot11;
            zulu = tango.map;
            mike = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot14;
                mike = zulu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.categoryId;
                    entity = _closure4_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            mike = options[mike];
            oscar = undefined;
            mike = golf.bind(oscar)(mike);
            mike = mike.isNotNullish;
            offset = zulu.bind(tango)(mike);
            mike = {};
            entity = _closure1_slot10;
            mike['categoryId'] = entity;
            entity = 8;
            tango = options[entity];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            entity = options[entity];
            entity = golf.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.Ym2Ri4;
            entity = tango.bind(report)(entity);
            mike['name'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            verify = 1;
            yankee = entity;
            mike = arraySpread(yankee, offset, verify);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getClanDiscoveryCategories';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot11;
            zulu = tango.map;
            mike = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot14;
                mike = zulu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.categoryId;
                    entity = _closure4_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            mike = options[mike];
            oscar = undefined;
            mike = golf.bind(oscar)(mike);
            mike = mike.isNotNullish;
            offset = zulu.bind(tango)(mike);
            mike = {};
            entity = _closure1_slot10;
            mike['categoryId'] = entity;
            entity = 8;
            tango = options[entity];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            entity = options[entity];
            entity = golf.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.QToH29;
            entity = tango.bind(report)(entity);
            mike['name'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            verify = 1;
            yankee = entity;
            mike = arraySpread(yankee, offset, verify);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getAllCategories';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getFetchedLocale';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getCategoryName';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot10;
                if(!(zulu !== entity)) { _fun00006_ip = 24; continue _fun00005 }
 14:
                entity = _closure1_slot15;
                entity = entity[zulu];
                _fun00006_ip = 81; continue _fun00005;
 24:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 8;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.Ym2Ri4;
                entity = zulu.bind(tango)(mike);
 81:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(options);
    tango = 'GuildDiscoveryCategoryStore';
    verify['displayName'] = tango;
    tango = 10;
    tango = golf[tango];
    romeo = report.bind(entity)(tango);
    tango = {};
    report = function(argFoo) { // Original name: handleCategoryFetchSuccess
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            options = entity.categories;
            report = entity.locale;
            entity = undefined;
            var _closure2_slot0 = entity;
            tango = new Array(0);
            var _closure2_slot1 = tango;
            zulu = new Array(0);
            var _closure2_slot2 = zulu;
            golf = options.sort;
            oscar = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    mike = entity.name;
                    entity = argBar;
                    entity = entity.name;
                    mike = mike < entity;
                    entity = 1;
                    if(!mike) { _fun00010_ip = 32; continue _fun00009 }
 26:
                    entity = -1;
 32:
                    return entity;
                }
            };
            options = golf.bind(options)(oscar);
            golf = options.forEach;
            oscar = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.id;
                    mike = entity.name;
                    report = entity.is_primary;
                    tango = _closure1_slot8;
                    if(!(zulu !== tango)) { _fun00012_ip = 130; continue _fun00011 }
 32:
                    tango = _closure1_slot9;
                    if(!(zulu === tango)) { _fun00012_ip = 60; continue _fun00011 }
 40:
                    oscar = {};
                    oscar['categoryId'] = zulu;
                    oscar['name'] = mike;
                    _closure2_slot0 = oscar;
                    _fun00012_ip = 130; continue _fun00011;
 60:
                    tango = true;
                    if(!(tango === report)) { _fun00012_ip = 94; continue _fun00011 }
 66:
                    oscar = _closure2_slot1;
                    report = oscar.push;
                    tango = {};
                    tango['categoryId'] = zulu;
                    tango['name'] = mike;
                    tango = report.bind(oscar)(tango);
 94:
                    oscar = _closure2_slot2;
                    report = oscar.push;
                    tango = {};
                    tango['categoryId'] = zulu;
                    tango['name'] = mike;
                    tango = report.bind(oscar)(tango);
                    entity = _closure1_slot15;
                    entity[zulu] = mike;
 130:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
            golf = _closure2_slot0;
            oscar = null;
            if(!(oscar != golf)) { _fun00008_ip = 130; continue _fun00007 }
 83:
            mike = _closure2_slot0;
            golf = mike.categoryId;
            oscar = mike.name;
            options = tango.push;
            mike = {};
            mike['categoryId'] = golf;
            mike['name'] = oscar;
            mike = options.bind(tango)(mike);
            mike = _closure1_slot15;
            mike[golf] = oscar;
 130:
            _closure1_slot12 = report;
            _closure1_slot13 = tango;
            _closure1_slot14 = zulu;
            return entity;
        }
    };
    tango['GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[verify](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: areDiscoveryCategoriesEqual
        golf = argFoo;
        oscar = argBar;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 6;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.isEqual;
        report = golf.map;
        mike = function(argFoo) {
            mike = argFoo;
            zulu = mike.categoryId;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.name;
            entity[1] = mike;
            return entity;
        };
        mike = report.bind(golf)(mike);
        report = oscar.map;
        entity = function(argFoo) {
            mike = argFoo;
            zulu = mike.categoryId;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.name;
            entity[1] = mike;
            return entity;
        };
        entity = report.bind(oscar)(entity);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['areDiscoveryCategoriesEqual'] = mike;
    return entity;
})();