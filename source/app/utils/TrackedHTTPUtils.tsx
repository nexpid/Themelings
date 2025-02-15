// app/utils/TrackedHTTPUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeRequest
        report = argBar;
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = report.trackedActionData;
        var _closure2_slot1 = mike;
        tango = _closure1_slot3;
        zulu = _closure1_slot2;
        mike = undefined;
        zulu = tango.bind(mike)(report, zulu);
        var _closure2_slot2 = zulu;
        mike = {};
        zulu = zulu.url;
        mike['url'] = zulu;
        zulu = argBaz;
        mike['request_method'] = zulu;
        var _closure2_slot3 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        golf = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure2_slot0;
            zulu = _closure2_slot2;
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot1;
                    golf = entity.properties;
                    entity = entity.properties;
                    mike = 'function';
                    entity = typeof entity;
                    if(!(mike === entity)) { _fun00002_ip = 48; continue _fun00001 }
 33:
                    mike = _closure2_slot1;
                    entity = mike.properties;
                    golf = entity.bind(mike)(zulu);
 48:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 1;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(mike);
                    report = oscar.trackNetworkAction;
                    mike = _closure2_slot1;
                    tango = mike.event;
                    mike = {};
                    verify = zulu.status;
                    mike['status_code'] = verify;
                    offset = _closure2_slot3;
                    yankee = mike;
                    options = copyDataProperties(yankee, offset);
                    yankee = mike;
                    offset = golf;
                    golf = copyDataProperties(yankee, offset);
                    mike = report.bind(oscar)(tango, mike);
                    mike = _closure3_slot0;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.catch;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot1;
                    golf = entity.properties;
                    entity = entity.properties;
                    mike = 'function';
                    entity = typeof entity;
                    if(!(mike === entity)) { _fun00004_ip = 48; continue _fun00003 }
 33:
                    mike = _closure2_slot1;
                    entity = mike.properties;
                    golf = entity.bind(mike)(zulu);
 48:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 1;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(mike);
                    report = oscar.trackNetworkAction;
                    mike = _closure2_slot1;
                    tango = mike.event;
                    mike = {};
                    verify = zulu.status;
                    mike['status_code'] = verify;
                    yankee = zulu.body;
                    verify = null;
                    romeo = verify == yankee;
                    offset = undefined;
                    if(romeo) { _fun00004_ip = 122; continue _fun00003 }
 117:
                    offset = yankee.code;
 122:
                    mike['error_code'] = offset;
                    offset = zulu.body;
                    yankee = verify == offset;
                    verify = undefined;
                    if(yankee) { _fun00004_ip = 146; continue _fun00003 }
 141:
                    verify = offset.message;
 146:
                    mike['error_message'] = verify;
                    foxtrot = _closure2_slot3;
                    backup = mike;
                    options = copyDataProperties(backup, foxtrot);
                    backup = mike;
                    foxtrot = golf;
                    golf = copyDataProperties(backup, foxtrot);
                    mike = report.bind(oscar)(tango, mike);
                    mike = _closure3_slot1;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        options = mike;
        entity = new options[zulu](golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = ['trackedActionData'];
    var _closure1_slot2 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot3 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: get
        report = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HTTP;
        zulu = entity.get;
        mike = argFoo;
        entity = 'get';
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    mike['get'] = golf;
    golf = function(argFoo) { // Original name: post
        report = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HTTP;
        zulu = entity.post;
        mike = argFoo;
        entity = 'post';
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    mike['post'] = golf;
    golf = function(argFoo) { // Original name: put
        report = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HTTP;
        zulu = entity.put;
        mike = argFoo;
        entity = 'put';
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    mike['put'] = golf;
    golf = function(argFoo) { // Original name: patch
        report = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HTTP;
        zulu = entity.patch;
        mike = argFoo;
        entity = 'patch';
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    mike['patch'] = golf;
    tango = function(argFoo) { // Original name: del
        report = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HTTP;
        zulu = entity.del;
        mike = argFoo;
        entity = 'del';
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    mike['delete'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/TrackedHTTPUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();