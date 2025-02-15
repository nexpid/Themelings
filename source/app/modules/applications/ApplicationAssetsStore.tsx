// app/modules/applications/ApplicationAssetsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun68293: for(var _fun68293_ip = 0; ; ) switch(_fun68293_ip) {
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
            if(entity) { _fun68293_ip = 51; continue _fun68293 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun68293_ip = 92; continue _fun68293;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun68293_ip = 71; continue _fun68293 }
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
        _fun68294: for(var _fun68294_ip = 0; ; ) switch(_fun68294_ip) {
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
            _fun68294_ip = 76; continue _fun68294;
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
    report = function(argFoo) { // Original name: handleFetchEmbeddedActivityShelfSuccess
        _fun68297: for(var _fun68297_ip = 0; ; ) switch(_fun68297_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.assets;
            zulu = {};
            update = _closure1_slot8;
            source = zulu;
            entity = copyDataProperties(source, update);
            yankee = foxtrot;
            golf = global;
            oscar = 5;
            entity = undefined;
            report = 'name';
            tango = null;
            for(options in yankee)
 49:
            {
 58:
                sizing = options;
                echo = foxtrot[sizing];
                backup = _closure1_slot7;
                backup = backup.FETCH_SUCCESS;
                zulu[sizing] = backup;
                kilo = _closure1_slot9;
                backup = {};
                result = _closure1_slot0;
                output = _closure1_slot1;
                output = output[oscar];
                result = result.bind(entity)(output);
                output = result.keyBy;
                output = output.bind(result)(echo, report);
                if(!(tango == output)) { _fun68297_ip = 120; continue _fun68297 }
 118:
                output = {};
 120:
                backup['assets'] = output;
                result = golf.Date;
                output = result.now;
                output = output.bind(result)();
                backup['lastUpdated'] = output;
                kilo[sizing] = backup;
                _fun68297_ip = 49; continue _fun68297;
            }
 151:
            _closure1_slot8 = zulu;
            return entity;
        }
    };
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    yankee = 0;
    mike = oscar[yankee];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    offset = 1;
    mike = oscar[offset];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    options = 2;
    mike = oscar[options];
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
    mike = {};
    mike['NOT_FETCHED'] = yankee;
    tango = 'NOT_FETCHED';
    mike[yankee] = tango;
    mike['FETCHING'] = offset;
    tango = 'FETCHING';
    mike[offset] = tango;
    mike['FETCH_SUCCESS'] = options;
    tango = 'FETCH_SUCCESS';
    mike[options] = tango;
    var _closure1_slot7 = mike;
    tango = {};
    var _closure1_slot8 = tango;
    tango = {};
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: ApplicationAssetsStore
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
        entity = 'getApplicationAssetFetchState';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun68300: for(var _fun68300_ip = 0; ; ) switch(_fun68300_ip) {
 0:
                zulu = _closure1_slot8;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun68300_ip = 30; continue _fun68300 }
 20:
                mike = _closure1_slot7;
                entity = mike.NOT_FETCHED;
 30:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getFetchingIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = global;
            tango = mike.Object;
            zulu = tango.entries;
            mike = _closure1_slot8;
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun68302: for(var _fun68302_ip = 0; ; ) switch(_fun68302_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    report = undefined;
                    golf = oscar().value;
                    verify = mike;
                    verify = verify === options;
                    zulu = verify;
                    if(verify) { _fun68302_ip = 32; continue _fun68302 }
 29:
                    report = golf;
 32:
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun68302_ip = 60; continue _fun68302 }
 40:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun68302_ip = 60; continue _fun68302 }
 57:
                    report = oscar;
 60:
                    tango = report;
                    report = zulu;
                    if(report) { _fun68302_ip = 72; continue _fun68302 }
 69:
                    mike.return();
 72:
                    report = tango;
                    tango = _closure1_slot7;
                    tango = tango.FETCHING;
                    tango = report === tango;
                    return tango;
 94:
                    CatchBlockStart(arg_register=0);
                    if(zulu) { _fun68302_ip = 102; continue _fun68302 }
 99:
                    mike.return();
 102:
                    throw entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun68303: for(var _fun68303_ip = 0; ; ) switch(_fun68303_ip) {
 0:
                    entity = argFoo;
                    mike = entity[Symbol.iterator];
                    entity = mike().next;
                    tango = entity().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    if(zulu) { _fun68303_ip = 25; continue _fun68303 }
 22:
                    entity = tango;
 25:
                    if(zulu) { _fun68303_ip = 31; continue _fun68303 }
 28:
                    mike.return();
 31:
                    return entity;
                }
            };
            oscar = mike.bind(zulu)(entity);
            entity = new Array(0);
            report = 0;
            golf = entity;
            mike = arraySpread(golf, oscar, report);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getApplicationAssets';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot9;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'ApplicationAssetsStore';
    options['displayName'] = tango;
    tango = 7;
    tango = oscar[tango];
    backup = golf.bind(entity)(tango);
    tango = {};
    offset = function(argFoo) { // Original name: handleFetchApplicationAssets
        entity = argFoo;
        tango = entity.applicationId;
        mike = {};
        report = _closure1_slot8;
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        zulu = _closure1_slot7;
        zulu = zulu.FETCHING;
        mike[tango] = zulu;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    tango['APPLICATION_ASSETS_FETCH'] = offset;
    offset = function(argFoo) { // Original name: handleFetchApplicationAssetsSuccess
        entity = argFoo;
        tango = entity.applicationId;
        mike = {};
        report = _closure1_slot8;
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        zulu = _closure1_slot7;
        zulu = zulu.FETCH_SUCCESS;
        mike[tango] = zulu;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    tango['APPLICATION_ASSETS_FETCH_SUCCESS'] = offset;
    verify = function(argFoo) { // Original name: handleUpdateApplicationAssets
        _fun68307: for(var _fun68307_ip = 0; ; ) switch(_fun68307_ip) {
 0:
            entity = argFoo;
            zulu = entity.applicationId;
            options = entity.assets;
            report = null;
            if(!(report == options)) { _fun68307_ip = 33; continue _fun68307 }
 20:
            entity = _closure1_slot9;
            entity = delete entity[zulu];
            _fun68307_ip = 117; continue _fun68307;
 33:
            mike = _closure1_slot9;
            entity = {};
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 5;
            oscar = oscar[tango];
            tango = undefined;
            golf = golf.bind(tango)(oscar);
            oscar = golf.keyBy;
            tango = 'name';
            tango = oscar.bind(golf)(options, tango);
            if(!(report == tango)) { _fun68307_ip = 86; continue _fun68307 }
 84:
            tango = {};
 86:
            entity['assets'] = tango;
            tango = global;
            report = tango.Date;
            tango = report.now;
            tango = tango.bind(report)();
            entity['lastUpdated'] = tango;
            mike[zulu] = entity;
 117:
            entity = undefined;
            return entity;
        }
    };
    tango['APPLICATION_ASSETS_UPDATE'] = verify;
    tango['EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS'] = report;
    tango['DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    kilo = report;
    foxtrot = tango;
    tango = new kilo[options](backup, foxtrot, romeo);
    tango = tango instanceof Object ? tango : report;
    report = 8;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/applications/ApplicationAssetsStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FetchState'] = mike;
    return entity;
})();