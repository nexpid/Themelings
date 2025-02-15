// app/modules/device/native/DeviceMedia.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    mike = mike.NativeModules;
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.Logger;
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    yankee = 'DeviceMedia.tsx';
    romeo = tango;
    mike = new romeo[options](yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    options = oscar.bind(entity)(mike);
    tango = options.create;
    mike = function() {
        entity = {'assets': null, 'page': 0, 'hasReachedEnd': false, 'lastAssetIndex': 0};
        zulu = function(argFoo) { // Original name: refreshAssets
            zulu = function() { // Original name: refreshAssets
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    oscar = arguments[0];
                    entity = undefined;
                    if(!(oscar === entity)) { _fun00002_ip = 18; continue _fun00001 }
 11:
                    oscar = _closure1_slot6;
 18:
                    var _closure4_slot0 = oscar;
                    zulu = function(argFoo) { // Original name: applyStateUpdate
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.batchUpdates;
                        mike = function() {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                tango = _closure1_slot5;
                                zulu = tango.setState;
                                mike = {};
                                entity = _closure5_slot0;
                                mike['assets'] = entity;
                                report = 0;
                                mike['page'] = report;
                                report = _closure4_slot0;
                                mike['lastAssetIndex'] = report;
                                report = null;
                                options = report == entity;
                                entity = undefined;
                                oscar = undefined;
                                if(options) { _fun00004_ip = 84; continue _fun00003 }
 59:
                                options = _closure5_slot0;
                                options = options.page_info;
                                verify = report == options;
                                oscar = undefined;
                                if(verify) { _fun00004_ip = 84; continue _fun00003 }
 78:
                                oscar = options.end_cursor;
 84:
                                mike['endCursor'] = oscar;
                                oscar = _closure5_slot0;
                                options = report == oscar;
                                oscar = undefined;
                                if(options) { _fun00004_ip = 127; continue _fun00003 }
 102:
                                golf = _closure5_slot0;
                                golf = golf.page_info;
                                options = report == golf;
                                oscar = undefined;
                                if(options) { _fun00004_ip = 127; continue _fun00003 }
 121:
                                oscar = golf.has_next_page;
 127:
                                report = report == oscar;
                                if(report) { _fun00004_ip = 137; continue _fun00003 }
 134:
                                report = oscar;
 137:
                                report = !report;
                                mike['hasReachedEnd'] = report;
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    var _closure4_slot1 = zulu;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 4;
                    tango = golf[tango];
                    report = report.bind(entity)(tango);
                    tango = report.isIOS;
                    tango = tango.bind(report)();
                    if(tango) { _fun00002_ip = 145; continue _fun00001 }
 69:
                    tango = _closure1_slot3;
                    golf = tango.CameraRollUtils;
                    report = golf.getPhotos;
                    tango = {};
                    tango['first'] = oscar;
                    options = 'All';
                    tango['assetType'] = options;
                    golf = report.bind(golf)(tango);
                    report = golf.then;
                    tango = function(argFoo) {
                        zulu = _closure4_slot1;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    golf = report.bind(golf)(tango);
                    report = golf.catch;
                    tango = function(argFoo) {
                        report = argFoo;
                        tango = _closure1_slot4;
                        zulu = tango.log;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        mike = 'CameraRollUtils -- Failed to get photos with error ';
                        mike = oscar.bind(mike)(report);
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.captureException;
                        mike = {};
                        oscar = {};
                        golf = 'DEVICE_MEDIA';
                        oscar['source'] = golf;
                        mike['tags'] = oscar;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    tango = report.bind(golf)(tango);
                    _fun00002_ip = 254; continue _fun00001;
 145:
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    report = 5;
                    tango = tango[report];
                    golf = golf.bind(entity)(tango);
                    tango = null;
                    if(!(tango != golf)) { _fun00002_ip = 254; continue _fun00001 }
 171:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(entity)(zulu);
                    tango = report.getPhotos;
                    zulu = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    zulu['first'] = oscar;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot1;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function(argFoo) {
                        report = argFoo;
                        tango = _closure1_slot4;
                        zulu = tango.log;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        mike = 'DCDPhotos -- Failed to get photos with error ';
                        mike = oscar.bind(mike)(report);
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.captureException;
                        mike = {};
                        oscar = {};
                        golf = 'DEVICE_MEDIA';
                        oscar['source'] = golf;
                        mike['tags'] = oscar;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 254:
                    return entity;
                }
            };
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity['refreshAssets'] = zulu;
        mike = function() { // Original name: fetchNextPage
            mike = function() { // Original name: getNextAssetPage
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = function(argFoo) { // Original name: applyStateUpdate
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            oscar = argFoo;
                            var _closure5_slot0 = oscar;
                            report = _closure4_slot2;
                            golf = null;
                            tango = golf == oscar;
                            entity = undefined;
                            options = undefined;
                            if(tango) { _fun00008_ip = 49; continue _fun00007 }
 29:
                            tango = oscar.edges;
                            verify = golf == tango;
                            options = undefined;
                            if(verify) { _fun00008_ip = 49; continue _fun00007 }
 44:
                            options = tango.length;
 49:
                            offset = golf != options;
                            verify = 0;
                            tango = 0;
                            if(!offset) { _fun00008_ip = 63; continue _fun00007 }
 60:
                            tango = options;
 63:
                            tango = report + tango;
                            var _closure5_slot1 = tango;
                            tango = _closure4_slot0;
                            if(!(golf != tango)) { _fun00008_ip = 146; continue _fun00007 }
 79:
                            tango = golf == oscar;
                            report = undefined;
                            if(tango) { _fun00008_ip = 101; continue _fun00007 }
 88:
                            options = oscar.edges;
                            tango = golf == options;
                            report = options;
 101:
                            if(tango) { _fun00008_ip = 146; continue _fun00007 }
 104:
                            tango = report.unshift;
                            zulu = _closure4_slot0;
                            romeo = zulu.edges;
                            zulu = new Array(0);
                            foxtrot = zulu;
                            yankee = 0;
                            options = arraySpread(foxtrot, romeo, yankee);
                            foxtrot = tango;
                            romeo = zulu;
                            yankee = report;
                            zulu = apply(foxtrot, romeo, yankee);
 146:
                            options = _closure1_slot0;
                            tango = _closure1_slot2;
                            report = 3;
                            tango = tango[report];
                            offset = options.bind(entity)(tango);
                            options = offset.batchUpdates;
                            tango = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    tango = _closure1_slot5;
                                    zulu = tango.setState;
                                    mike = {};
                                    entity = _closure5_slot0;
                                    mike['assets'] = entity;
                                    golf = _closure4_slot1;
                                    report = 1;
                                    report = golf + report;
                                    mike['page'] = report;
                                    report = _closure5_slot1;
                                    mike['lastAssetIndex'] = report;
                                    golf = null;
                                    options = golf == entity;
                                    entity = undefined;
                                    report = undefined;
                                    if(options) { _fun00010_ip = 93; continue _fun00009 }
 68:
                                    oscar = _closure5_slot0;
                                    oscar = oscar.page_info;
                                    golf = golf == oscar;
                                    report = undefined;
                                    if(golf) { _fun00010_ip = 93; continue _fun00009 }
 87:
                                    report = oscar.end_cursor;
 93:
                                    mike['endCursor'] = report;
                                    mike = zulu.bind(tango)(mike);
                                    return entity;
                                }
                            };
                            tango = options.bind(offset)(tango);
                            tango = golf != oscar;
                            if(!tango) { _fun00008_ip = 209; continue _fun00007 }
 194:
                            options = oscar.edges;
                            options = options.length;
                            tango = verify !== options;
 209:
                            if(!tango) { _fun00008_ip = 239; continue _fun00007 }
 212:
                            oscar = oscar.page_info;
                            options = golf == oscar;
                            golf = undefined;
                            if(options) { _fun00008_ip = 233; continue _fun00007 }
 227:
                            golf = oscar.has_next_page;
 233:
                            oscar = false;
                            tango = oscar !== golf;
 239:
                            if(tango) { _fun00008_ip = 277; continue _fun00007 }
 242:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            zulu = zulu[report];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.batchUpdates;
                            mike = function() {
                                zulu = _closure1_slot5;
                                mike = zulu.setState;
                                entity = {};
                                tango = true;
                                entity['hasReachedEnd'] = tango;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
 277:
                            return entity;
                        }
                    };
                    var _closure4_slot3 = entity;
                    zulu = _closure1_slot5;
                    entity = zulu.getState;
                    tango = entity.bind(zulu)();
                    entity = tango.assets;
                    var _closure4_slot0 = entity;
                    zulu = tango.page;
                    var _closure4_slot1 = zulu;
                    offset = tango.lastAssetIndex;
                    var _closure4_slot2 = offset;
                    zulu = tango.hasReachedEnd;
                    oscar = tango.endCursor;
                    tango = null;
                    if(!(tango != entity)) { _fun00006_ip = 446; continue _fun00005 }
 81:
                    if(zulu) { _fun00006_ip = 446; continue _fun00005 }
 87:
                    zulu = entity.edges;
                    entity = entity.edges;
                    report = entity.length;
                    entity = 1;
                    entity = report - entity;
                    zulu = zulu[entity];
                    report = tango == zulu;
                    entity = undefined;
                    verify = undefined;
                    if(report) { _fun00006_ip = 147; continue _fun00005 }
 126:
                    zulu = zulu.node;
                    report = tango == zulu;
                    verify = undefined;
                    if(report) { _fun00006_ip = 147; continue _fun00005 }
 141:
                    verify = zulu.image;
 147:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    options = 4;
                    zulu = zulu[options];
                    report = report.bind(entity)(zulu);
                    zulu = report.isIOS;
                    zulu = zulu.bind(report)();
                    if(!zulu) { _fun00006_ip = 200; continue _fun00005 }
 180:
                    if(!(tango != verify)) { _fun00006_ip = 444; continue _fun00005 }
 187:
                    zulu = verify.uri;
                    if(!(tango != zulu)) { _fun00006_ip = 444; continue _fun00005 }
 200:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    report = report.bind(entity)(zulu);
                    zulu = report.isIOS;
                    zulu = zulu.bind(report)();
                    if(zulu) { _fun00006_ip = 326; continue _fun00005 }
 230:
                    zulu = _closure1_slot3;
                    options = zulu.CameraRollUtils;
                    report = options.getPhotos;
                    zulu = {};
                    yankee = _closure1_slot6;
                    zulu['first'] = yankee;
                    yankee = 'All';
                    zulu['assetType'] = yankee;
                    zulu['offset'] = offset;
                    verify = verify.uri;
                    zulu['after'] = verify;
                    options = report.bind(options)(zulu);
                    report = options.then;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot3;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    options = report.bind(options)(zulu);
                    report = options.catch;
                    zulu = function(argFoo) {
                        report = argFoo;
                        tango = _closure1_slot4;
                        zulu = tango.log;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        mike = 'CameraRollUtils -- Failed to get photos with error ';
                        mike = oscar.bind(mike)(report);
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.captureException;
                        mike = {};
                        oscar = {};
                        golf = 'DEVICE_MEDIA';
                        oscar['source'] = golf;
                        mike['tags'] = oscar;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    zulu = report.bind(options)(zulu);
                    _fun00006_ip = 442; continue _fun00005;
 326:
                    options = _closure1_slot1;
                    zulu = _closure1_slot2;
                    report = 5;
                    zulu = zulu[report];
                    zulu = options.bind(entity)(zulu);
                    if(!(tango != zulu)) { _fun00006_ip = 442; continue _fun00005 }
 350:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(entity)(zulu);
                    tango = report.getPhotos;
                    zulu = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    golf = _closure1_slot6;
                    zulu['first'] = golf;
                    zulu['after'] = oscar;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot3;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function(argFoo) {
                        report = argFoo;
                        tango = _closure1_slot4;
                        zulu = tango.log;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        mike = 'DCDPhotos -- Failed to get photos with error ';
                        mike = oscar.bind(mike)(report);
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.captureException;
                        mike = {};
                        oscar = {};
                        golf = 'DEVICE_MEDIA';
                        oscar['source'] = golf;
                        mike['tags'] = oscar;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 442:
                    return entity;
 444:
                    return entity;
 446:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        entity['fetchNextPage'] = mike;
        return entity;
    };
    mike = tango.bind(options)(mike);
    var _closure1_slot5 = mike;
    tango = 51;
    var _closure1_slot6 = tango;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/device/native/DeviceMedia.tsx';
    report = oscar.bind(golf)(report);
    zulu['BATCH_SIZE'] = tango;
    zulu['useDeviceMedia'] = mike;
    return entity;
})();