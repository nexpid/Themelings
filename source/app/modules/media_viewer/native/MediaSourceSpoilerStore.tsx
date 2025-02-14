// app/modules/media_viewer/native/MediaSourceSpoilerStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {};
        mike = global;
        mike = mike.Set;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        entity['spoilerIndexes'] = mike;
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot2 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/media_viewer/native/MediaSourceSpoilerStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['useMediaSourceSpoilerStore'] = tango;
    tango = function(argFoo) { // Original name: removeSpoiler
        _fun85395: for(var _fun85395_ip = 0; ; ) switch(_fun85395_ip) {
 0:
            mike = global;
            report = mike.Set;
            tango = _closure1_slot2;
            zulu = tango.getState;
            zulu = zulu.bind(tango)();
            oscar = zulu.spoilerIndexes;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            zulu = new golf[report](oscar, report);
            report = zulu instanceof Object ? zulu : tango;
            var _closure2_slot0 = report;
            tango = report.delete;
            zulu = argFoo;
            zulu = tango.bind(report)(zulu);
            if(!zulu) { _fun85395_ip = 113; continue _fun85395 }
 73:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.batchUpdates;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.setState;
                entity = {};
                tango = _closure2_slot0;
                entity['spoilerIndexes'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 113:
            entity = undefined;
            return entity;
        }
    };
    zulu['removeSpoiler'] = tango;
    tango = function(argFoo) { // Original name: addSpoiler
        entity = global;
        report = entity.Set;
        tango = _closure1_slot2;
        zulu = tango.getState;
        zulu = zulu.bind(tango)();
        oscar = zulu.spoilerIndexes;
        tango = report.prototype;
        tango = Object.create(tango, {constructor: {value: report}});
        golf = tango;
        zulu = new golf[report](oscar, report);
        report = zulu instanceof Object ? zulu : tango;
        var _closure2_slot0 = report;
        tango = report.add;
        zulu = argFoo;
        zulu = tango.bind(report)(zulu);
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['spoilerIndexes'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['addSpoiler'] = tango;
    tango = function(argFoo) { // Original name: toggleSpoiler
        _fun85399: for(var _fun85399_ip = 0; ; ) switch(_fun85399_ip) {
 0:
            report = argFoo;
            entity = global;
            oscar = entity.Set;
            tango = _closure1_slot2;
            zulu = tango.getState;
            zulu = zulu.bind(tango)();
            golf = zulu.spoilerIndexes;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            options = tango;
            zulu = new options[oscar](golf, oscar);
            tango = zulu instanceof Object ? zulu : tango;
            var _closure2_slot0 = tango;
            zulu = tango.has;
            zulu = zulu.bind(tango)(report);
            if(zulu) { _fun85399_ip = 85; continue _fun85399 }
 73:
            zulu = tango.add;
            zulu = zulu.bind(tango)(report);
            _fun85399_ip = 95; continue _fun85399;
 85:
            zulu = tango.delete;
            zulu = zulu.bind(tango)(report);
 95:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot2;
                mike = zulu.setState;
                entity = {};
                tango = _closure2_slot0;
                entity['spoilerIndexes'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['toggleSpoiler'] = tango;
    mike = function() { // Original name: resetSpoilers
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.setState;
            entity = {};
            tango = global;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            golf = report;
            tango = new golf[tango](oscar);
            tango = tango instanceof Object ? tango : report;
            entity['spoilerIndexes'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetSpoilers'] = mike;
    return entity;
})();