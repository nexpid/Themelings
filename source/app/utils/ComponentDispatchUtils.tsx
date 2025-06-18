// app/utils/ComponentDispatchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ComponentActionsKeyed;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: ComponentDispatcher
            michal = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(michal, tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.EventEmitter;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            option = tangon;
            zuuluu = new option[zuuluu](golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            michal['emitter'] = zuuluu;
            zuuluu = {};
            michal['_savedDispatches'] = zuuluu;
            tangon = michal.emitter;
            zuuluu = tangon.setMaxListeners;
            michal = 100;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'safeDispatch';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                zuuluu = this;
                report = 1;
                yankee = report;
                tangon = copyRestArgs(yankee);
                entity = zuuluu.hasSubscribers;
                entity = entity.bind(zuuluu)(oscard);
                if(entity) { _fun00002_ip = 78; continue _fun00001 }
 30:
                entity = 0;
                golfie = tangon[entity];
                entity = zuuluu._savedDispatches;
                michal = zuuluu._savedDispatches;
                michal = michal[oscard];
                option = null;
                if(!(option == michal)) { _fun00002_ip = 62; continue _fun00001 }
 58:
                michal = new Array(0);
 62:
                entity[oscard] = michal;
                entity = michal.push;
                entity = entity.bind(michal)(golfie);
                return zuuluu;
 78:
                michal = zuuluu.dispatch;
                entity = new Array(1);
                entity[0] = oscard;
                yankee = entity;
                offset = tangon;
                verify = report;
                tangon = arraySpread(yankee, offset, verify);
                yankee = michal;
                offset = entity;
                verify = zuuluu;
                entity = apply(yankee, offset, verify);
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(13);
        michal[0] = entity;
        entity = {};
        oscard = 'dispatch';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                zuuluu = argFoo;
                michal = argBar;
                tangon = global;
                report = tangon.Date;
                tangon = report.now;
                tangon = tangon.bind(report)();
 26: // try_start_0
                report = entity.emitter;
                tangon = report.emit;
                michal = tangon.bind(report)(zuuluu, michal);
 44: // try_end0
                return entity;
 46: // catch_target0
                CatchBlockStart(arg_register=0);
                throw entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'dispatchToLastSubscribed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                tangon = argFoo;
                michal = argBar;
                zuuluu = undefined;
                report = global;
                oscard = report.Date;
                report = oscard.now;
                report = report.bind(oscard)();
 28: // try_start_0
                oscard = entity.emitter;
                report = oscard.listeners;
                tangon = report.bind(oscard)(tangon);
                zuuluu = tangon;
                report = tangon.length;
                tangon = 0;
                if(!(report > tangon)) { _fun00006_ip = 83; continue _fun00005 }
 59:
                tangon = zuuluu;
                report = tangon.length;
                zuuluu = 1;
                zuuluu = report - zuuluu;
                zuuluu = tangon[zuuluu];
                michal = zuuluu.bind(tangon)(michal);
 83: // try_end0
                return entity;
 85: // catch_target0
                CatchBlockStart(arg_register=0);
                throw entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'hasSubscribers';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.emitter;
            michal = zuuluu.listenerCount;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_checkSavedDispatches';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = zuuluu;
                tangon = entity._savedDispatches;
                report = tangon[zuuluu];
                tangon = null;
                if(!(tangon != report)) { _fun00008_ip = 59; continue _fun00007 }
 32:
                tangon = report.forEach;
                michal = function(argFoo) {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.dispatch;
                    michal = _closure3_slot1;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                michal = entity._savedDispatches;
                entity = undefined;
                michal[zuuluu] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'subscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                entity = this;
                zuuluu = entity.emitter;
                michal = zuuluu.listeners;
                zuuluu = michal.bind(zuuluu)(report);
                michal = zuuluu.indexOf;
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = 0;
                if(!(!(zuuluu >= michal))) { _fun00010_ip = 74; continue _fun00009 }
 43:
                zuuluu = entity.emitter;
                michal = zuuluu.on;
                michal = michal.bind(zuuluu)(report, tangon);
                michal = entity._checkSavedDispatches;
                michal = michal.bind(entity)(report);
                _fun00010_ip = 142; continue _fun00009;
 74:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                golfie = 'ComponentDispatchUtils';
                option = zuuluu;
                michal = new option[tangon](golfie, oscard);
                tangon = michal instanceof Object ? michal : zuuluu;
                zuuluu = tangon.warn;
                michal = 'ComponentDispatch.subscribe: Attempting to add a duplicate listener';
                michal = zuuluu.bind(tangon)(michal, report);
 142:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'subscribeOnce';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            zuuluu = argFoo;
            entity = this;
            report = entity.emitter;
            tangon = report.once;
            michal = argBar;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = entity._checkSavedDispatches;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'resubscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                entity = this;
                report = entity.emitter;
                michal = report.listeners;
                report = michal.bind(report)(tangon);
                michal = report.includes;
                michal = michal.bind(report)(zuuluu);
                if(michal) { _fun00012_ip = 109; continue _fun00011 }
 39:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                michal = 4;
                report = report[michal];
                michal = undefined;
                oscard = oscard.bind(michal)(report);
                michal = oscard.prototype;
                report = Object.create(michal, {constructor: {value: oscard}});
                option = 'ComponentDispatchUtils';
                verify = report;
                michal = new verify[oscard](option, golfie);
                oscard = michal instanceof Object ? michal : report;
                report = oscard.warn;
                michal = 'ComponentDispatch.resubscribe: Resubscribe without existing subscription';
                michal = report.bind(oscard)(michal, tangon);
                return entity;
 109:
                report = entity.emitter;
                michal = report.off;
                michal = michal.bind(report)(tangon, zuuluu);
                michal = entity.emitter;
                entity = michal.on;
                entity = entity.bind(michal)(tangon, zuuluu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'unsubscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.emitter;
            tangon = report.removeListener;
            zuuluu = argFoo;
            michal = argBar;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'reset';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.emitter;
            michal = zuuluu.removeAllListeners;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'dispatchKeyed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            zuuluu = this;
            yankee = 2;
            report = copyRestArgs(yankee);
            michal = zuuluu.dispatch;
            entity = global;
            entity = entity.HermesInternal;
            option = entity.concat;
            golfie = '';
            oscard = argFoo;
            tangon = '_';
            entity = argBar;
            tangon = option.bind(golfie)(oscard, tangon, entity);
            entity = new Array(1);
            entity[0] = tangon;
            verify = 1;
            yankee = entity;
            offset = report;
            tangon = arraySpread(yankee, offset, verify);
            yankee = michal;
            offset = entity;
            verify = zuuluu;
            entity = apply(yankee, offset, verify);
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'subscribeKeyed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            tangon = this;
            zuuluu = tangon.subscribe;
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            oscard = '';
            report = argFoo;
            michal = '_';
            entity = argBar;
            michal = golfie.bind(oscard)(report, michal, entity);
            entity = argBaz;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'unsubscribeKeyed';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            tangon = this;
            zuuluu = tangon.unsubscribe;
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            oscard = '';
            report = argFoo;
            michal = '_';
            entity = argBar;
            michal = golfie.bind(oscard)(report, michal, entity);
            entity = argBaz;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = report;
        michal[12] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = tangon.prototype;
    report = Object.create(michal, {constructor: {value: tangon}});
    foxtra = report;
    michal = new foxtra[tangon](romeon);
    michal = michal instanceof Object ? michal : report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/ComponentDispatchUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ComponentDispatcher'] = tangon;
    zuuluu['ComponentDispatch'] = michal;
    return entity;
})();