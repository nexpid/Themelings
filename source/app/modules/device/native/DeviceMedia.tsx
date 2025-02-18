// app/modules/device/native/DeviceMedia.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    michal = michal.NativeModules;
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.Logger;
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    yankee = 'DeviceMedia.tsx';
    romeon = tangon;
    michal = new romeon[option](yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    option = oscard.bind(entity)(michal);
    tangon = option.create;
    michal = function() {
        entity = {'assets': null, 'page': 0, 'hasReachedEnd': false, 'lastAssetIndex': 0};
        zuuluu = function(argFoo) { // Original name: refreshAssets
            zuuluu = function() { // Original name: refreshAssets
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    oscard = arguments[0];
                    entity = undefined;
                    if(!(oscard === entity)) { _fun00002_ip = 18; continue _fun00001 }
 11:
                    oscard = _closure1_slot6;
 18:
                    var _closure4_slot0 = oscard;
                    zuuluu = function(argFoo) { // Original name: applyStateUpdate
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.batchUpdates;
                        michal = function() {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                tangon = _closure1_slot5;
                                zuuluu = tangon.setState;
                                michal = {};
                                entity = _closure5_slot0;
                                michal['assets'] = entity;
                                report = 0;
                                michal['page'] = report;
                                report = _closure4_slot0;
                                michal['lastAssetIndex'] = report;
                                report = null;
                                option = report == entity;
                                entity = undefined;
                                oscard = undefined;
                                if(option) { _fun00004_ip = 84; continue _fun00003 }
 59:
                                option = _closure5_slot0;
                                option = option.page_info;
                                verify = report == option;
                                oscard = undefined;
                                if(verify) { _fun00004_ip = 84; continue _fun00003 }
 78:
                                oscard = option.end_cursor;
 84:
                                michal['endCursor'] = oscard;
                                oscard = _closure5_slot0;
                                option = report == oscard;
                                oscard = undefined;
                                if(option) { _fun00004_ip = 127; continue _fun00003 }
 102:
                                golfie = _closure5_slot0;
                                golfie = golfie.page_info;
                                option = report == golfie;
                                oscard = undefined;
                                if(option) { _fun00004_ip = 127; continue _fun00003 }
 121:
                                oscard = golfie.has_next_page;
 127:
                                report = report == oscard;
                                if(report) { _fun00004_ip = 137; continue _fun00003 }
 134:
                                report = oscard;
 137:
                                report = !report;
                                michal['hasReachedEnd'] = report;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    var _closure4_slot1 = zuuluu;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 4;
                    tangon = golfie[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.isIOS;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00002_ip = 143; continue _fun00001 }
 69:
                    tangon = _closure1_slot3;
                    golfie = tangon.CameraRollUtils;
                    report = golfie.getPhotos;
                    tangon = {};
                    tangon['first'] = oscard;
                    option = 'All';
                    tangon['assetType'] = option;
                    golfie = report.bind(golfie)(tangon);
                    report = golfie.then;
                    tangon = function(argFoo) {
                        zuuluu = _closure4_slot1;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    golfie = report.bind(golfie)(tangon);
                    report = golfie.catch;
                    tangon = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot4;
                        zuuluu = tangon.log;
                        michal = global;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        michal = 'CameraRollUtils -- Failed to get photos with error ';
                        michal = oscard.bind(michal)(report);
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.captureException;
                        michal = {};
                        oscard = {};
                        golfie = 'DEVICE_MEDIA';
                        oscard['source'] = golfie;
                        michal['tags'] = oscard;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    };
                    tangon = report.bind(golfie)(tangon);
                    _fun00002_ip = 252; continue _fun00001;
 143:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    report = 5;
                    tangon = tangon[report];
                    golfie = golfie.bind(entity)(tangon);
                    tangon = null;
                    if(!(tangon != golfie)) { _fun00002_ip = 252; continue _fun00001 }
 169:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.getPhotos;
                    zuuluu = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    zuuluu['first'] = oscard;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure4_slot1;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot4;
                        zuuluu = tangon.log;
                        michal = global;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        michal = 'DCDPhotos -- Failed to get photos with error ';
                        michal = oscard.bind(michal)(report);
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.captureException;
                        michal = {};
                        oscard = {};
                        golfie = 'DEVICE_MEDIA';
                        oscard['source'] = golfie;
                        michal['tags'] = oscard;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 252:
                    return entity;
                }
            };
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['refreshAssets'] = zuuluu;
        michal = function() { // Original name: fetchNextPage
            michal = function() { // Original name: getNextAssetPage
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = function(argFoo) { // Original name: applyStateUpdate
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            oscard = argFoo;
                            var _closure5_slot0 = oscard;
                            report = _closure4_slot2;
                            golfie = null;
                            tangon = golfie == oscard;
                            entity = undefined;
                            option = undefined;
                            if(tangon) { _fun00008_ip = 49; continue _fun00007 }
 29:
                            tangon = oscard.edges;
                            verify = golfie == tangon;
                            option = undefined;
                            if(verify) { _fun00008_ip = 49; continue _fun00007 }
 44:
                            option = tangon.length;
 49:
                            offset = golfie != option;
                            verify = 0;
                            tangon = 0;
                            if(!offset) { _fun00008_ip = 63; continue _fun00007 }
 60:
                            tangon = option;
 63:
                            tangon = report + tangon;
                            var _closure5_slot1 = tangon;
                            tangon = _closure4_slot0;
                            if(!(golfie != tangon)) { _fun00008_ip = 146; continue _fun00007 }
 79:
                            tangon = golfie == oscard;
                            report = undefined;
                            if(tangon) { _fun00008_ip = 101; continue _fun00007 }
 88:
                            option = oscard.edges;
                            tangon = golfie == option;
                            report = option;
 101:
                            if(tangon) { _fun00008_ip = 146; continue _fun00007 }
 104:
                            tangon = report.unshift;
                            zuuluu = _closure4_slot0;
                            romeon = zuuluu.edges;
                            zuuluu = new Array(0);
                            foxtra = zuuluu;
                            yankee = 0;
                            option = arraySpread(foxtra, romeon, yankee);
                            foxtra = tangon;
                            romeon = zuuluu;
                            yankee = report;
                            zuuluu = apply(foxtra, romeon, yankee);
 146:
                            option = _closure1_slot0;
                            tangon = _closure1_slot2;
                            report = 3;
                            tangon = tangon[report];
                            offset = option.bind(entity)(tangon);
                            option = offset.batchUpdates;
                            tangon = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    tangon = _closure1_slot5;
                                    zuuluu = tangon.setState;
                                    michal = {};
                                    entity = _closure5_slot0;
                                    michal['assets'] = entity;
                                    golfie = _closure4_slot1;
                                    report = 1;
                                    report = golfie + report;
                                    michal['page'] = report;
                                    report = _closure5_slot1;
                                    michal['lastAssetIndex'] = report;
                                    golfie = null;
                                    option = golfie == entity;
                                    entity = undefined;
                                    report = undefined;
                                    if(option) { _fun00010_ip = 93; continue _fun00009 }
 68:
                                    oscard = _closure5_slot0;
                                    oscard = oscard.page_info;
                                    golfie = golfie == oscard;
                                    report = undefined;
                                    if(golfie) { _fun00010_ip = 93; continue _fun00009 }
 87:
                                    report = oscard.end_cursor;
 93:
                                    michal['endCursor'] = report;
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                }
                            };
                            tangon = option.bind(offset)(tangon);
                            tangon = golfie != oscard;
                            if(!tangon) { _fun00008_ip = 209; continue _fun00007 }
 194:
                            option = oscard.edges;
                            option = option.length;
                            tangon = verify !== option;
 209:
                            if(!tangon) { _fun00008_ip = 239; continue _fun00007 }
 212:
                            oscard = oscard.page_info;
                            option = golfie == oscard;
                            golfie = undefined;
                            if(option) { _fun00008_ip = 233; continue _fun00007 }
 227:
                            golfie = oscard.has_next_page;
 233:
                            oscard = false;
                            tangon = oscard !== golfie;
 239:
                            if(tangon) { _fun00008_ip = 277; continue _fun00007 }
 242:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu[report];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.batchUpdates;
                            michal = function() {
                                zuuluu = _closure1_slot5;
                                michal = zuuluu.setState;
                                entity = {};
                                tangon = true;
                                entity['hasReachedEnd'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
 277:
                            return entity;
                        }
                    };
                    var _closure4_slot3 = entity;
                    zuuluu = _closure1_slot5;
                    entity = zuuluu.getState;
                    tangon = entity.bind(zuuluu)();
                    entity = tangon.assets;
                    var _closure4_slot0 = entity;
                    zuuluu = tangon.page;
                    var _closure4_slot1 = zuuluu;
                    offset = tangon.lastAssetIndex;
                    var _closure4_slot2 = offset;
                    zuuluu = tangon.hasReachedEnd;
                    oscard = tangon.endCursor;
                    tangon = null;
                    if(!(tangon != entity)) { _fun00006_ip = 444; continue _fun00005 }
 81:
                    if(zuuluu) { _fun00006_ip = 444; continue _fun00005 }
 87:
                    zuuluu = entity.edges;
                    entity = entity.edges;
                    report = entity.length;
                    entity = 1;
                    entity = report - entity;
                    zuuluu = zuuluu[entity];
                    report = tangon == zuuluu;
                    entity = undefined;
                    verify = undefined;
                    if(report) { _fun00006_ip = 147; continue _fun00005 }
 126:
                    zuuluu = zuuluu.node;
                    report = tangon == zuuluu;
                    verify = undefined;
                    if(report) { _fun00006_ip = 147; continue _fun00005 }
 141:
                    verify = zuuluu.image;
 147:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    option = 4;
                    zuuluu = zuuluu[option];
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.isIOS;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00006_ip = 200; continue _fun00005 }
 180:
                    if(!(tangon != verify)) { _fun00006_ip = 442; continue _fun00005 }
 187:
                    zuuluu = verify.uri;
                    if(!(tangon != zuuluu)) { _fun00006_ip = 442; continue _fun00005 }
 200:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[option];
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.isIOS;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00006_ip = 324; continue _fun00005 }
 230:
                    zuuluu = _closure1_slot3;
                    option = zuuluu.CameraRollUtils;
                    report = option.getPhotos;
                    zuuluu = {};
                    yankee = _closure1_slot6;
                    zuuluu['first'] = yankee;
                    yankee = 'All';
                    zuuluu['assetType'] = yankee;
                    zuuluu['offset'] = offset;
                    verify = verify.uri;
                    zuuluu['after'] = verify;
                    option = report.bind(option)(zuuluu);
                    report = option.then;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure4_slot3;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    option = report.bind(option)(zuuluu);
                    report = option.catch;
                    zuuluu = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot4;
                        zuuluu = tangon.log;
                        michal = global;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        michal = 'CameraRollUtils -- Failed to get photos with error ';
                        michal = oscard.bind(michal)(report);
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.captureException;
                        michal = {};
                        oscard = {};
                        golfie = 'DEVICE_MEDIA';
                        oscard['source'] = golfie;
                        michal['tags'] = oscard;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    };
                    zuuluu = report.bind(option)(zuuluu);
                    _fun00006_ip = 440; continue _fun00005;
 324:
                    option = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    report = 5;
                    zuuluu = zuuluu[report];
                    zuuluu = option.bind(entity)(zuuluu);
                    if(!(tangon != zuuluu)) { _fun00006_ip = 440; continue _fun00005 }
 348:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.getPhotos;
                    zuuluu = {'first': null, 'groupTypes': 'Recents', 'assetType': 'All'};
                    golfie = _closure1_slot6;
                    zuuluu['first'] = golfie;
                    zuuluu['after'] = oscard;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure4_slot3;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot4;
                        zuuluu = tangon.log;
                        michal = global;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        michal = 'DCDPhotos -- Failed to get photos with error ';
                        michal = oscard.bind(michal)(report);
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.captureException;
                        michal = {};
                        oscard = {};
                        golfie = 'DEVICE_MEDIA';
                        oscard['source'] = golfie;
                        michal['tags'] = oscard;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 440:
                    return entity;
 442:
                    return entity;
 444:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        entity['fetchNextPage'] = michal;
        return entity;
    };
    michal = tangon.bind(option)(michal);
    var _closure1_slot5 = michal;
    tangon = 51;
    var _closure1_slot6 = tangon;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/device/native/DeviceMedia.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['BATCH_SIZE'] = tangon;
    zuuluu['useDeviceMedia'] = michal;
    return entity;
})();