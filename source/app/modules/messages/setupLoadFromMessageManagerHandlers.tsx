// app/modules/messages/setupLoadFromMessageManagerHandlers.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    mike = argPlugh;
    entity = 0;
    tango = mike[entity];
    mike = argBar;
    entity = undefined;
    report = mike.bind(entity)(tango);
    tango = report.fileFinishedImporting;
    mike = 'modules/messages/setupLoadFromMessageManagerHandlers.tsx';
    mike = tango.bind(report)(mike);
    mike = function(argFoo, argBar) { // Original name: setupLoadFromMessageManagerHandlers
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = arguments[2];
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(mike === entity)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            mike = {};
 23:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            tango = function(argFoo) { // Original name: handleCallbackIfLoaded
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.channel_id;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00004_ip = 39; continue _fun00003 }
 17:
                    report = _closure2_slot2;
                    tango = report.has;
                    mike = zulu.channel_id;
                    entity = tango.bind(report)(mike);
 39:
                    if(!entity) { _fun00004_ip = 56; continue _fun00003 }
 42:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 56:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot3 = tango;
            verify = function(argFoo) { // Original name: handleMessage
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.message;
                    entity = zulu.channel_id;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00006_ip = 44; continue _fun00005 }
 22:
                    oscar = _closure2_slot2;
                    report = oscar.has;
                    mike = zulu.channel_id;
                    entity = report.bind(oscar)(mike);
 44:
                    if(!entity) { _fun00006_ip = 79; continue _fun00005 }
 47:
                    mike = _closure2_slot1;
                    if(!(tango != mike)) { _fun00006_ip = 68; continue _fun00005 }
 58:
                    tango = _closure2_slot1;
                    mike = undefined;
                    mike = tango.bind(mike)();
 68:
                    mike = _closure2_slot3;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            options = function(argFoo) { // Original name: handleLoadMessages
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    report = entity.channelId;
                    zulu = entity.messages;
                    tango = _closure2_slot2;
                    mike = tango.add;
                    mike = mike.bind(tango)(report);
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike != tango)) { _fun00008_ip = 51; continue _fun00007 }
 41:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 51:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure2_slot3;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            golf = function(argFoo) { // Original name: handleSearchFinish
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = argFoo;
                    zulu = entity.messages;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            zulu = _closure2_slot0;
                            mike = undefined;
                            entity = argFoo;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            mike = mike.onBeforeBatch;
            _closure2_slot1 = mike;
            mike = global;
            mike = mike.Set;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            foxtrot = tango;
            mike = new foxtrot[mike](romeo);
            mike = mike instanceof Object ? mike : tango;
            _closure2_slot2 = mike;
            mike = {};
            yankee = zulu.actions;
            romeo = mike;
            tango = copyDataProperties(romeo, yankee);
            report = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure2_slot2;
                entity = mike.clear;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            tango = 'POST_CONNECTION_OPEN';
            mike[tango] = report;
            offset = {};
            offset['callback'] = verify;
            tango = false;
            offset['autoSubscribe'] = tango;
            report = 'MESSAGE_CREATE';
            mike[report] = offset;
            report = 'MESSAGE_UPDATE';
            mike[report] = verify;
            report = 'LOAD_MESSAGES_SUCCESS';
            mike[report] = options;
            report = 'LOAD_MESSAGES_AROUND_SUCCESS';
            mike[report] = options;
            options = function(argFoo) { // Original name: LOAD_RECENT_MENTIONS_SUCCESS
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.messages;
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike != tango)) { _fun00012_ip = 32; continue _fun00011 }
 22:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 32:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure2_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report = 'LOAD_RECENT_MENTIONS_SUCCESS';
            mike[report] = options;
            options = function(argFoo) { // Original name: LOAD_PINNED_MESSAGES_SUCCESS
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.messages;
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike != tango)) { _fun00014_ip = 32; continue _fun00013 }
 22:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 32:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure2_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report = 'LOAD_PINNED_MESSAGES_SUCCESS';
            mike[report] = options;
            report = 'SEARCH_FINISH';
            mike[report] = golf;
            report = 'MOD_VIEW_SEARCH_FINISH';
            mike[report] = golf;
            report = {};
            oscar = function(argFoo) { // Original name: callback
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channelId;
                    entity = null;
                    if(!(entity != zulu)) { _fun00016_ip = 31; continue _fun00015 }
 14:
                    mike = _closure2_slot2;
                    entity = mike.add;
                    entity = entity.bind(mike)(zulu);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            report['callback'] = oscar;
            report['autoSubscribe'] = tango;
            tango = 'CHANNEL_SELECT';
            mike[tango] = report;
            zulu['actions'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();