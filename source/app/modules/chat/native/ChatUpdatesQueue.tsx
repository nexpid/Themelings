// app/modules/chat/native/ChatUpdatesQueue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.NativeEventEmitter;
    var _closure1_slot2 = golf;
    tango = tango.NativeModules;
    tango = tango.DCDChatBlockerManager;
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar) { // Original name: ChatUpdatesQueue
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot0;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = global;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            offset = oscar;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscar;
            zulu['blockers'] = report;
            report = new Array(0);
            zulu['queue'] = report;
            report = null;
            zulu['queueStartTimestamp'] = report;
            report = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                mike['onFlushItem'] = entity;
                entity = undefined;
                return entity;
            };
            zulu['setOnFlushItem'] = report;
            report = argFoo;
            zulu['getReactTag'] = report;
            report = argBar;
            zulu['onFlushItem'] = report;
            oscar = _closure1_slot2;
            verify = _closure1_slot3;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            offset = report;
            tango = new offset[oscar](verify, options);
            tango = tango instanceof Object ? tango : report;
            zulu['eventEmitter'] = tango;
            golf = zulu.eventEmitter;
            oscar = golf.addListener;
            report = 'AddBlocker';
            tango = function(argFoo) {
                _fun89926: for(var _fun89926_ip = 0; ; ) switch(_fun89926_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.blockerId;
                    report = entity.reactTag;
                    tango = _closure3_slot0;
                    mike = tango.getReactTag;
                    tango = mike.bind(tango)();
                    mike = null;
                    mike = mike != report;
                    if(!mike) { _fun89926_ip = 45; continue _fun89926 }
 41:
                    mike = report === tango;
 45:
                    if(!mike) { _fun89926_ip = 65; continue _fun89926 }
 48:
                    mike = _closure3_slot0;
                    entity = mike.addBlocker;
                    entity = entity.bind(mike)(zulu);
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tango = oscar.bind(golf)(report, tango);
            zulu['addBlockerSubscription'] = tango;
            oscar = zulu.eventEmitter;
            report = oscar.addListener;
            tango = 'RemoveBlocker';
            mike = function(argFoo) {
                _fun89927: for(var _fun89927_ip = 0; ; ) switch(_fun89927_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.blockerId;
                    report = entity.reactTag;
                    tango = _closure3_slot0;
                    mike = tango.getReactTag;
                    tango = mike.bind(tango)();
                    mike = null;
                    mike = mike != report;
                    if(!mike) { _fun89927_ip = 45; continue _fun89927 }
 41:
                    mike = report === tango;
 45:
                    if(!mike) { _fun89927_ip = 65; continue _fun89927 }
 48:
                    mike = _closure3_slot0;
                    entity = mike.removeBlocker;
                    entity = entity.bind(mike)(zulu);
 65:
                    entity = undefined;
                    return entity;
                }
            };
            mike = report.bind(oscar)(tango, mike);
            zulu['removeBlockerSubscription'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'hasUpdates';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.queue;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'isBlocking';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun89929: for(var _fun89929_ip = 0; ; ) switch(_fun89929_ip) {
 0:
                mike = this;
                entity = mike.hasUpdates;
                entity = entity.bind(mike)();
                if(entity) { _fun89929_ip = 33; continue _fun89929 }
 16:
                mike = mike.blockers;
                zulu = mike.size;
                mike = 0;
                entity = zulu > mike;
 33:
                return entity;
            }
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'addBlocker';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun89930: for(var _fun89930_ip = 0; ; ) switch(_fun89930_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun89930_ip = 28; continue _fun89930 }
 9:
                entity = this;
                mike = entity.blockers;
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
 28:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'removeBlocker';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun89931: for(var _fun89931_ip = 0; ; ) switch(_fun89931_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = null;
                if(!(entity != tango)) { _fun89931_ip = 55; continue _fun89931 }
 12:
                zulu = mike.blockers;
                entity = zulu.delete;
                entity = entity.bind(zulu)(tango);
                entity = mike.blockers;
                zulu = entity.size;
                entity = 0;
                if(!(entity === zulu)) { _fun89931_ip = 55; continue _fun89931 }
 45:
                entity = mike.flush;
                entity = entity.bind(mike)();
 55:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'add';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun89932: for(var _fun89932_ip = 0; ; ) switch(_fun89932_ip) {
 0:
                mike = this;
                entity = mike.queueStartTimestamp;
                tango = null;
                if(!(tango == entity)) { _fun89932_ip = 38; continue _fun89932 }
 15:
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                mike['queueStartTimestamp'] = entity;
 38:
                report = mike.queue;
                zulu = report.push;
                entity = argFoo;
                entity = zulu.bind(report)(entity);
                entity = mike.queue;
                zulu = entity.length;
                entity = 100;
                entity = zulu > entity;
                zulu = mike.queueStartTimestamp;
                zulu = tango != zulu;
                if(!zulu) { _fun89932_ip = 125; continue _fun89932 }
 88:
                tango = global;
                report = tango.Date;
                tango = report.now;
                report = tango.bind(report)();
                tango = mike.queueStartTimestamp;
                report = report - tango;
                tango = 30000;
                zulu = report > tango;
 125:
                if(entity) { _fun89932_ip = 131; continue _fun89932 }
 128:
                entity = zulu;
 131:
                if(!entity) { _fun89932_ip = 160; continue _fun89932 }
 134:
                zulu = mike.blockers;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                entity = mike.flush;
                entity = entity.bind(mike)();
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'tryFlush';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun89933: for(var _fun89933_ip = 0; ; ) switch(_fun89933_ip) {
 0:
                mike = this;
                entity = mike.blockers;
                zulu = entity.size;
                entity = 0;
                if(!(entity === zulu)) { _fun89933_ip = 30; continue _fun89933 }
 20:
                entity = mike.flush;
                entity = entity.bind(mike)();
 30:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'flush';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = null;
            mike['queueStartTimestamp'] = zulu;
            tango = mike.queue;
            zulu = tango.forEach;
            entity = function(argFoo) {
                _fun89935: for(var _fun89935_ip = 0; ; ) switch(_fun89935_ip) {
 0:
                    tango = argFoo;
                    mike = null;
                    if(!(mike != tango)) { _fun89935_ip = 41; continue _fun89935 }
 9:
                    zulu = _closure3_slot0;
                    zulu = zulu.onFlushItem;
                    if(!(mike != zulu)) { _fun89935_ip = 41; continue _fun89935 }
 26:
                    mike = zulu.call;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity, tango);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            entity = new Array(0);
            mike['queue'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'cleanup';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            zulu = entity.addBlockerSubscription;
            mike = zulu.remove;
            mike = mike.bind(zulu)();
            mike = entity.removeBlockerSubscription;
            entity = mike.remove;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat/native/ChatUpdatesQueue.tsx';
    tango = report.bind(oscar)(tango);
    zulu['ChatUpdatesQueue'] = mike;
    return entity;
})();