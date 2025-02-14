// app/modules/game_detection/DetectableGameSupplementalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun80252: for(var _fun80252_ip = 0; ; ) switch(_fun80252_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun80252_ip = 51; continue _fun80252 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun80252_ip = 92; continue _fun80252;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun80252_ip = 71; continue _fun80252 }
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
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun80253: for(var _fun80253_ip = 0; ; ) switch(_fun80253_ip) {
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
            _fun80253_ip = 76; continue _fun80253;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    mike = global;
    verify = mike.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot0 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot1 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = mike.Map;
    options = golf.prototype;
    options = Object.create(options, {constructor: {value: golf}});
    foxtrot = options;
    golf = new foxtrot[golf](romeo);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot5 = golf;
    golf = mike.Set;
    options = golf.prototype;
    options = Object.create(options, {constructor: {value: golf}});
    foxtrot = options;
    golf = new foxtrot[golf](romeo);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot6 = golf;
    mike = mike.Set;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot7 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: DetectableGameSupplementalStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
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
        entity = 'canFetch';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun80258: for(var _fun80258_ip = 0; ; ) switch(_fun80258_ip) {
 0:
                tango = argFoo;
                zulu = _closure1_slot6;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                entity = !entity;
                if(!entity) { _fun80258_ip = 43; continue _fun80258 }
 26:
                report = _closure1_slot7;
                zulu = report.has;
                zulu = zulu.bind(report)(tango);
                entity = !zulu;
 43:
                if(!entity) { _fun80258_ip = 63; continue _fun80258 }
 46:
                zulu = _closure1_slot5;
                mike = zulu.has;
                mike = mike.bind(zulu)(tango);
                entity = !mike;
 63:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'isFetching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot6;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGame';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot5;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getGames';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot5;
                mike = zulu.get;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getLocalizedName';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun80263: for(var _fun80263_ip = 0; ; ) switch(_fun80263_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun80263_ip = 36; continue _fun80263 }
 31:
                entity = mike.name;
 36:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getThemes';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun80264: for(var _fun80264_ip = 0; ; ) switch(_fun80264_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun80264_ip = 37; continue _fun80264 }
 31:
                entity = mike.themes;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getCoverImageUrl';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun80265: for(var _fun80265_ip = 0; ; ) switch(_fun80265_ip) {
 0:
                zulu = argBar;
                tango = _closure1_slot5;
                mike = tango.get;
                entity = argFoo;
                entity = mike.bind(tango)(entity);
                tango = null;
                mike = tango == entity;
                verify = undefined;
                if(mike) { _fun80265_ip = 40; continue _fun80265 }
 34:
                verify = entity.coverImageUrl;
 40:
                mike = tango == verify;
                entity = null;
                if(mike) { _fun80265_ip = 105; continue _fun80265 }
 49:
                mike = verify;
                if(!(tango != zulu)) { _fun80265_ip = 102; continue _fun80265 }
 56:
                romeo = zulu.width;
                offset = zulu.height;
                zulu = global;
                zulu = zulu.HermesInternal;
                oscar = zulu.concat;
                kilo = '';
                foxtrot = '?width=';
                yankee = '&height=';
                backup = verify;
                mike = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify);
 102:
                entity = mike;
 105:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'DetectableGameSupplementalStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleLogout
        entity = global;
        mike = entity.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        report = zulu;
        mike = new report[mike](tango);
        zulu = mike instanceof Object ? mike : zulu;
        _closure1_slot5 = zulu;
        zulu = entity.Set;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        _closure1_slot6 = zulu;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        report = zulu;
        entity = new report[entity](tango);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = options;
    options = function(argFoo) { // Original name: handleFetch
        entity = argFoo;
        zulu = entity.applicationIds;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            tango = _closure1_slot6;
            mike = tango.add;
            mike = mike.bind(tango)(zulu);
            mike = _closure1_slot7;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['DETECTABLE_GAME_SUPPLEMENTAL_FETCH'] = options;
    options = function(argFoo) { // Original name: handleFetchSuccess
        mike = argFoo;
        report = mike.applicationIds;
        zulu = mike.supplementalGameData;
        tango = report.forEach;
        mike = function(argFoo) {
            zulu = argFoo;
            tango = _closure1_slot6;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = _closure1_slot7;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        mike = tango.bind(report)(mike);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun80271: for(var _fun80271_ip = 0; ; ) switch(_fun80271_ip) {
 0:
                entity = argFoo;
                tango = entity.application_id;
                output = entity.name;
                sizing = entity.summary;
                backup = entity.websites;
                foxtrot = entity.themes;
                romeo = entity.genres;
                yankee = entity.platforms;
                offset = entity.artwork_urls;
                verify = entity.screenshot_urls;
                options = entity.cover_image_url;
                oscar = entity.first_release_date;
                kilo = entity.summary_localized;
                golf = entity.publisher_names;
                report = entity.developer_names;
                zulu = _closure1_slot5;
                mike = zulu.set;
                entity = {};
                entity['applicationId'] = tango;
                entity['name'] = output;
                entity['summary'] = sizing;
                entity['summaryLocalized'] = kilo;
                entity['websites'] = backup;
                entity['themes'] = foxtrot;
                entity['genres'] = romeo;
                entity['platforms'] = yankee;
                entity['artwork'] = offset;
                entity['screenshots'] = verify;
                entity['coverImageUrl'] = options;
                entity['firstReleaseDate'] = oscar;
                oscar = null;
                if(!(oscar == golf)) { _fun80271_ip = 190; continue _fun80271 }
 186:
                golf = new Array(0);
 190:
                entity['publishers'] = golf;
                if(!(oscar == report)) { _fun80271_ip = 203; continue _fun80271 }
 199:
                report = new Array(0);
 203:
                entity['developers'] = report;
                entity = mike.bind(zulu)(tango, entity);
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS'] = options;
    tango = function(argFoo) { // Original name: handleFetchFailure
        entity = argFoo;
        zulu = entity.applicationIds;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            tango = _closure1_slot6;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = _closure1_slot7;
            entity = mike.add;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_detection/DetectableGameSupplementalStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();