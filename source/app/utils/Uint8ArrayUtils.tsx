// app/utils/Uint8ArrayUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    tango = function(argFoo, argBar) { // Original name: hasBit
        _fun35509: for(var _fun35509_ip = 0; ; ) switch(_fun35509_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = oscar.length;
            zulu = 0;
            entity = zulu !== entity;
            if(!entity) { _fun35509_ip = 77; continue _fun35509 }
 20:
            mike = global;
            options = mike.Math;
            golf = options.floor;
            tango = _closure1_slot0;
            tango = report / tango;
            tango = golf.bind(options)(tango);
            tango = oscar[tango];
            mike = _closure1_slot0;
            report = report % mike;
            mike = 1;
            mike = mike << report;
            mike = tango & mike;
            entity = zulu !== mike;
 77:
            return entity;
        }
    };
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 8;
    var _closure1_slot0 = entity;
    report = argPlugh;
    entity = 0;
    oscar = report[entity];
    report = argBar;
    entity = undefined;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'utils/Uint8ArrayUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['hasBit'] = tango;
    tango = function(argFoo, argBar) { // Original name: addBit
        _fun35510: for(var _fun35510_ip = 0; ; ) switch(_fun35510_ip) {
 0:
            options = argFoo;
            report = argBar;
            tango = global;
            oscar = tango.Math;
            zulu = oscar.floor;
            entity = _closure1_slot0;
            entity = report / entity;
            zulu = zulu.bind(oscar)(entity);
            oscar = options.length;
            entity = options;
            if(!(oscar <= zulu)) { _fun35510_ip = 97; continue _fun35510 }
 48:
            golf = tango.Uint8Array;
            tango = 1;
            offset = zulu + tango;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            yankee = oscar;
            tango = new yankee[golf](offset, verify);
            tango = tango instanceof Object ? tango : oscar;
            golf = tango.set;
            oscar = 0;
            oscar = golf.bind(tango)(options, oscar);
            entity = tango;
 97:
            tango = entity[zulu];
            mike = _closure1_slot0;
            report = report % mike;
            mike = 1;
            mike = mike << report;
            mike = tango | mike;
            entity[zulu] = mike;
            return entity;
        }
    };
    zulu['addBit'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeBit
        _fun35511: for(var _fun35511_ip = 0; ; ) switch(_fun35511_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tango = _closure1_slot1;
            zulu = undefined;
            zulu = tango.bind(zulu)(entity, report);
            if(!zulu) { _fun35511_ip = 81; continue _fun35511 }
 24:
            zulu = global;
            oscar = zulu.Math;
            tango = oscar.floor;
            zulu = _closure1_slot0;
            zulu = report / zulu;
            zulu = tango.bind(oscar)(zulu);
            tango = entity[zulu];
            mike = _closure1_slot0;
            report = report % mike;
            mike = 1;
            mike = mike << report;
            mike = ~mike;
            mike = tango & mike;
            entity[zulu] = mike;
 81:
            return entity;
        }
    };
    zulu['removeBit'] = tango;
    tango = function(argFoo) { // Original name: isUint8Array
        entity = global;
        mike = entity.Uint8Array;
        entity = argFoo;
        entity = entity instanceof mike;
        return entity;
    };
    zulu['isUint8Array'] = tango;
    mike = function(argFoo) { // Original name: isSerializedUint8Array
        _fun35513: for(var _fun35513_ip = 0; ; ) switch(_fun35513_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun35513_ip = 23; continue _fun35513 }
 12:
            tango = 'object';
            zulu = typeof mike;
            entity = tango === zulu;
 23:
            if(!entity) { _fun35513_ip = 44; continue _fun35513 }
 26:
            zulu = mike.__tag__;
            mike = 'uint8array';
            entity = mike === zulu;
 44:
            return entity;
        }
    };
    zulu['isSerializedUint8Array'] = mike;
    return entity;
})();