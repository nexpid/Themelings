// app/modules/go_live/utils/StreamKeyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StreamTypes;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/go_live/utils/StreamKeyUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isStreamKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 12:
            tango = report.startsWith;
            mike = _closure1_slot1;
            mike = mike.GUILD;
            mike = tango.bind(report)(mike);
            if(mike) { _fun00002_ip = 60; continue _fun00001 }
 39:
            tango = report.startsWith;
            zulu = _closure1_slot1;
            zulu = zulu.CALL;
            mike = tango.bind(report)(zulu);
 60:
            entity = mike;
 63:
            return entity;
        }
    };
    zulu['isStreamKey'] = tango;
    tango = function(argFoo) { // Original name: decodeStreamKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = zulu.split;
            entity = ':';
            report = mike.bind(zulu)(entity);
            mike = 0;
            golf = report[mike];
            zulu = _closure1_slot1;
            zulu = zulu.GUILD;
            if(!(zulu !== golf)) { _fun00004_ip = 157; continue _fun00003 }
 40:
            zulu = _closure1_slot1;
            zulu = zulu.CALL;
            if(!(zulu !== golf)) { _fun00004_ip = 106; continue _fun00003 }
 54:
            zulu = global;
            oscar = zulu.Error;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'Unknown stream type ';
            verify = tango.bind(zulu)(golf);
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            offset = tango;
            zulu = new offset[oscar](verify, options);
            zulu = zulu instanceof Object ? zulu : tango;
            throw zulu;
 106:
            oscar = _closure1_slot0;
            tango = undefined;
            zulu = 3;
            oscar = oscar.bind(tango)(report, zulu);
            zulu = {};
            tango = oscar[mike];
            zulu['streamType'] = tango;
            tango = 1;
            tango = oscar[tango];
            zulu['channelId'] = tango;
            tango = 2;
            tango = oscar[tango];
            zulu['ownerId'] = tango;
            return zulu;
 157:
            tango = _closure1_slot0;
            zulu = undefined;
            entity = 4;
            zulu = tango.bind(zulu)(report, entity);
            entity = {};
            mike = zulu[mike];
            entity['streamType'] = mike;
            mike = 1;
            mike = zulu[mike];
            entity['guildId'] = mike;
            mike = 2;
            mike = zulu[mike];
            entity['channelId'] = mike;
            mike = 3;
            mike = zulu[mike];
            entity['ownerId'] = mike;
            return entity;
        }
    };
    zulu['decodeStreamKey'] = tango;
    mike = function(argFoo) { // Original name: encodeStreamKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.streamType;
            tango = entity.guildId;
            mike = entity.channelId;
            entity = entity.ownerId;
            oscar = _closure1_slot1;
            oscar = oscar.GUILD;
            if(!(oscar !== report)) { _fun00006_ip = 140; continue _fun00005 }
 42:
            zulu = _closure1_slot1;
            zulu = zulu.CALL;
            if(!(zulu !== report)) { _fun00006_ip = 108; continue _fun00005 }
 56:
            zulu = global;
            golf = zulu.Error;
            zulu = zulu.HermesInternal;
            oscar = zulu.concat;
            zulu = 'Unknown stream type ';
            options = oscar.bind(zulu)(report);
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            verify = oscar;
            zulu = new verify[golf](options, golf);
            zulu = zulu instanceof Object ? zulu : oscar;
            throw zulu;
 108:
            golf = new Array(3);
            golf[0] = report;
            golf[1] = mike;
            golf[2] = entity;
            oscar = golf.join;
            zulu = ':';
            zulu = oscar.bind(golf)(zulu);
            return zulu;
 140:
            zulu = new Array(4);
            zulu[0] = report;
            zulu[1] = tango;
            zulu[2] = mike;
            zulu[3] = entity;
            mike = zulu.join;
            entity = ':';
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['encodeStreamKey'] = mike;
    return entity;
})();