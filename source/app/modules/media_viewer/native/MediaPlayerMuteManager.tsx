// app/modules/media_viewer/native/MediaPlayerMuteManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    verify = mike.NativeEventEmitter;
    report = mike.NativeModules;
    mike = 3;
    mike = golf[mike];
    offset = oscar.bind(entity)(mike);
    options = offset.create;
    mike = function() {
        entity = {};
        mike = false;
        entity['isMuted'] = mike;
        return entity;
    };
    mike = options.bind(offset)(mike);
    var _closure1_slot4 = mike;
    foxtrot = report.MediaPlayerManager;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    backup = options;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : options;
    var _closure1_slot5 = report;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: MediaPlayerMuteManager
            mike = this;
            tango = _closure1_slot2;
            zulu = _closure2_slot0;
            entity = undefined;
            zulu = tango.bind(entity)(mike, zulu);
            mike['muteSubscription'] = entity;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            tango = _closure1_slot5;
            zulu = tango.addListener;
            mike = 'MediaPlayerMuteStateChanged';
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isMuted;
                var _closure4_slot0 = entity;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.batchUpdates;
                mike = function() {
                    zulu = _closure1_slot4;
                    mike = zulu.setState;
                    entity = {};
                    tango = _closure4_slot0;
                    entity['isMuted'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike, entity);
            entity = this;
            entity['muteSubscription'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun85574: for(var _fun85574_ip = 0; ; ) switch(_fun85574_ip) {
 0:
                entity = this;
                mike = entity.muteSubscription;
                entity = null;
                if(!(entity != mike)) { _fun85574_ip = 25; continue _fun85574 }
 15:
                entity = mike.remove;
                entity = entity.bind(mike)();
 25:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    backup = report;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/media_viewer/native/MediaPlayerMuteManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['useMediaPlayerMutedStore'] = mike;
    return entity;
})();