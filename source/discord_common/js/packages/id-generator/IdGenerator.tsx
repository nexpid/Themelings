// discord_common/js/packages/id-generator/IdGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getLowBits
        zulu = argFoo;
        mike = zulu.mod;
        entity = 4294967296.0;
        mike = mike.bind(zulu)(entity);
        entity = mike.toJSNumber;
        entity = entity.bind(mike)();
        entity = entity | 0;
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: getHighBits
        zulu = argFoo;
        mike = zulu.shiftRight;
        entity = 32;
        mike = mike.bind(zulu)(entity);
        entity = mike.toJSNumber;
        entity = entity.bind(mike)();
        entity = entity | 0;
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: IdGenerator
            zulu = this;
            report = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = global;
            golf = mike.Math;
            oscar = golf.floor;
            options = mike.Math;
            report = options.random;
            options = report.bind(options)();
            report = 4294967296.0;
            report = report * options;
            report = oscar.bind(golf)(report);
            report = report | 0;
            zulu['_randomPrefix'] = report;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            report = mike.Date;
            mike = report.now;
            mike = mike.bind(report)();
            mike = tango.bind(entity)(mike);
            zulu['_creationTime'] = mike;
            mike = 0;
            zulu['_sequenceNumber'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'generate';
        entity['key'] = report;
        mike = function(argFoo) { // Original name: value
            entity = this;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 2;
            zulu = options[zulu];
            golf = undefined;
            tango = tango.bind(golf)(zulu);
            zulu = argFoo;
            oscar = tango.bind(golf)(zulu);
            zulu = entity._sequenceNumber;
            zulu = parseFloat(zulu);
            tango = zulu + 1;
            entity['_sequenceNumber'] = tango;
            report = zulu | 0;
            tango = _closure1_slot0;
            zulu = 3;
            zulu = options[zulu];
            zulu = tango.bind(golf)(zulu);
            options = zulu.Buffer;
            zulu = options.prototype;
            tango = Object.create(zulu, {constructor: {value: options}});
            backup = 24;
            kilo = tango;
            zulu = new kilo[options](backup, foxtrot);
            zulu = zulu instanceof Object ? zulu : tango;
            yankee = zulu.writeInt32LE;
            options = _closure1_slot5;
            offset = options.bind(golf)(oscar);
            verify = 0;
            tango = true;
            verify = yankee.bind(zulu)(offset, verify, tango);
            offset = zulu.writeInt32LE;
            mike = _closure1_slot6;
            verify = mike.bind(golf)(oscar);
            oscar = 4;
            oscar = offset.bind(zulu)(verify, oscar, tango);
            offset = zulu.writeInt32LE;
            verify = entity._randomPrefix;
            oscar = 8;
            oscar = offset.bind(zulu)(verify, oscar, tango);
            verify = zulu.writeInt32LE;
            oscar = entity._creationTime;
            options = options.bind(golf)(oscar);
            oscar = 12;
            oscar = verify.bind(zulu)(options, oscar, tango);
            oscar = zulu.writeInt32LE;
            entity = entity._creationTime;
            mike = mike.bind(golf)(entity);
            entity = 16;
            entity = oscar.bind(zulu)(mike, entity, tango);
            mike = zulu.writeInt32LE;
            entity = 20;
            entity = mike.bind(zulu)(report, entity, tango);
            mike = zulu.toString;
            entity = 'base64';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/id-generator/IdGenerator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['IdGenerator'] = mike;
    return entity;
})();