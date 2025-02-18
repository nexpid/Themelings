// app/modules/chat/native/ChatUpdatesQueue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.NativeEventEmitter;
    var _closure1_slot2 = golfie;
    tangon = tangon.NativeModules;
    tangon = tangon.DCDChatBlockerManager;
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar) { // Original name: ChatUpdatesQueue
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot0;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = global;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            offset = oscard;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscard;
            zuuluu['blockers'] = report;
            report = new Array(0);
            zuuluu['queue'] = report;
            report = null;
            zuuluu['queueStartTimestamp'] = report;
            report = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                michal['onFlushItem'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu['setOnFlushItem'] = report;
            report = argFoo;
            zuuluu['getReactTag'] = report;
            report = argBar;
            zuuluu['onFlushItem'] = report;
            oscard = _closure1_slot2;
            verify = _closure1_slot3;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            offset = report;
            tangon = new offset[oscard](verify, option);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['eventEmitter'] = tangon;
            golfie = zuuluu.eventEmitter;
            oscard = golfie.addListener;
            report = 'AddBlocker';
            tangon = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.blockerId;
                    report = entity.reactTag;
                    tangon = _closure3_slot0;
                    michal = tangon.getReactTag;
                    tangon = michal.bind(tangon)();
                    michal = null;
                    michal = michal != report;
                    if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 41:
                    michal = report === tangon;
 45:
                    if(!michal) { _fun00002_ip = 65; continue _fun00001 }
 48:
                    michal = _closure3_slot0;
                    entity = michal.addBlocker;
                    entity = entity.bind(michal)(zuuluu);
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon);
            zuuluu['addBlockerSubscription'] = tangon;
            oscard = zuuluu.eventEmitter;
            report = oscard.addListener;
            tangon = 'RemoveBlocker';
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.blockerId;
                    report = entity.reactTag;
                    tangon = _closure3_slot0;
                    michal = tangon.getReactTag;
                    tangon = michal.bind(tangon)();
                    michal = null;
                    michal = michal != report;
                    if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 41:
                    michal = report === tangon;
 45:
                    if(!michal) { _fun00004_ip = 65; continue _fun00003 }
 48:
                    michal = _closure3_slot0;
                    entity = michal.removeBlocker;
                    entity = entity.bind(michal)(zuuluu);
 65:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(oscard)(tangon, michal);
            zuuluu['removeBlockerSubscription'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'hasUpdates';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            entity = entity.queue;
            michal = entity.length;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(8);
        michal[0] = entity;
        entity = {};
        oscard = 'isBlocking';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = michal.hasUpdates;
                entity = entity.bind(michal)();
                if(entity) { _fun00006_ip = 33; continue _fun00005 }
 16:
                michal = michal.blockers;
                zuuluu = michal.size;
                michal = 0;
                entity = zuuluu > michal;
 33:
                return entity;
            }
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'addBlocker';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 28; continue _fun00007 }
 9:
                entity = this;
                michal = entity.blockers;
                entity = michal.add;
                entity = entity.bind(michal)(zuuluu);
 28:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'removeBlocker';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = null;
                if(!(entity != tangon)) { _fun00010_ip = 55; continue _fun00009 }
 12:
                zuuluu = michal.blockers;
                entity = zuuluu.delete;
                entity = entity.bind(zuuluu)(tangon);
                entity = michal.blockers;
                zuuluu = entity.size;
                entity = 0;
                if(!(entity === zuuluu)) { _fun00010_ip = 55; continue _fun00009 }
 45:
                entity = michal.flush;
                entity = entity.bind(michal)();
 55:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'add';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.queueStartTimestamp;
                tangon = null;
                if(!(tangon == entity)) { _fun00012_ip = 38; continue _fun00011 }
 15:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['queueStartTimestamp'] = entity;
 38:
                report = michal.queue;
                zuuluu = report.push;
                entity = argFoo;
                entity = zuuluu.bind(report)(entity);
                entity = michal.queue;
                zuuluu = entity.length;
                entity = 100;
                entity = zuuluu > entity;
                zuuluu = michal.queueStartTimestamp;
                zuuluu = tangon != zuuluu;
                if(!zuuluu) { _fun00012_ip = 125; continue _fun00011 }
 88:
                tangon = global;
                report = tangon.Date;
                tangon = report.now;
                report = tangon.bind(report)();
                tangon = michal.queueStartTimestamp;
                report = report - tangon;
                tangon = 30000;
                zuuluu = report > tangon;
 125:
                if(entity) { _fun00012_ip = 131; continue _fun00011 }
 128:
                entity = zuuluu;
 131:
                if(!entity) { _fun00012_ip = 160; continue _fun00011 }
 134:
                zuuluu = michal.blockers;
                entity = zuuluu.clear;
                entity = entity.bind(zuuluu)();
                entity = michal.flush;
                entity = entity.bind(michal)();
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'tryFlush';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                entity = michal.blockers;
                zuuluu = entity.size;
                entity = 0;
                if(!(entity === zuuluu)) { _fun00014_ip = 30; continue _fun00013 }
 20:
                entity = michal.flush;
                entity = entity.bind(michal)();
 30:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'flush';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = null;
            michal['queueStartTimestamp'] = zuuluu;
            tangon = michal.queue;
            zuuluu = tangon.forEach;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    michal = null;
                    if(!(michal != tangon)) { _fun00016_ip = 41; continue _fun00015 }
 9:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.onFlushItem;
                    if(!(michal != zuuluu)) { _fun00016_ip = 41; continue _fun00015 }
 26:
                    michal = zuuluu.call;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity, tangon);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = new Array(0);
            michal['queue'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'cleanup';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            zuuluu = entity.addBlockerSubscription;
            michal = zuuluu.remove;
            michal = michal.bind(zuuluu)();
            michal = entity.removeBlockerSubscription;
            entity = michal.remove;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[7] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/native/ChatUpdatesQueue.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['ChatUpdatesQueue'] = michal;
    return entity;
})();