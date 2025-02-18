// discord_common/js/packages/flux/Emitter.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'Flux';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: batchEmitChanges
        michal = argFoo;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: Emitter
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = global;
            tangon = michal.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['changedStores'] = tangon;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['reactChangedStores'] = michal;
            michal = 0;
            zuuluu['changeSentinel'] = michal;
            michal = false;
            zuuluu['isBatchEmitting'] = michal;
            zuuluu['isDispatching'] = michal;
            zuuluu['isPaused'] = michal;
            michal = null;
            zuuluu['pauseTimer'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'destroy';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            zuuluu = entity.changedStores;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            michal = entity.reactChangedStores;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = function(argFoo) { // Original name: batchEmitChanges
                michal = argFoo;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(11);
        michal[0] = entity;
        entity = {};
        oscard = 'injectBatchEmitChanges';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            _closure1_slot5 = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'pause';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = arguments[0];
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                entity = undefined;
                if(!(report === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
                report = null;
 20:
                tangon = true;
                zuuluu['isPaused'] = tangon;
                oscard = zuuluu.pauseTimer;
                tangon = null;
                if(!(tangon !== oscard)) { _fun00002_ip = 59; continue _fun00001 }
 40:
                oscard = global;
                golfie = oscard.clearTimeout;
                oscard = zuuluu.pauseTimer;
                oscard = golfie.bind(entity)(oscard);
 59:
                if(!(tangon !== report)) { _fun00002_ip = 88; continue _fun00001 }
 63:
                tangon = global;
                tangon = tangon.setTimeout;
                michal = function() {
                    michal = _closure3_slot0;
                    entity = null;
                    michal['pauseTimer'] = entity;
                    entity = michal.resume;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(entity)(michal, report);
                zuuluu['pauseTimer'] = michal;
 88:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'resume';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = arguments[0];
                report = this;
                var _closure3_slot0 = report;
                entity = undefined;
                if(!(tangon === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
                tangon = true;
 20:
                zuuluu = global;
                golfie = zuuluu.clearTimeout;
                oscard = report.pauseTimer;
                oscard = golfie.bind(entity)(oscard);
                oscard = null;
                report['pauseTimer'] = oscard;
                oscard = report.isPaused;
                if(!oscard) { _fun00004_ip = 103; continue _fun00003 }
 56:
                oscard = false;
                report['isPaused'] = oscard;
                if(!tangon) { _fun00004_ip = 84; continue _fun00003 }
 67:
                report = report.changedStores;
                oscard = report.size;
                report = 0;
                tangon = oscard > report;
 84:
                if(!tangon) { _fun00004_ip = 103; continue _fun00003 }
 87:
                zuuluu = zuuluu.setImmediate;
                michal = function() {
                    michal = _closure3_slot0;
                    entity = michal.emit;
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
 103:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'batched';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                entity = argFoo;
                michal = tangon.isPaused;
                if(michal) { _fun00006_ip = 84; continue _fun00005 }
 15: // try_start_0
                michal = true;
                tangon['isPaused'] = michal;
                zuuluu = entity;
                michal = undefined;
                michal = zuuluu.bind(michal)();
 32: // try_end0
                report = tangon.resume;
                zuuluu = false;
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = tangon.emit;
                zuuluu = zuuluu.bind(tangon)();
                return michal;
 57: // catch_target0
                CatchBlockStart(arg_register=1);
                report = tangon.resume;
                zuuluu = false;
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = tangon.emit;
                zuuluu = zuuluu.bind(tangon)();
                throw michal;
 84:
                michal = entity;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'emit';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                michal = zuuluu.isBatchEmitting;
                if(michal) { _fun00008_ip = 24; continue _fun00007 }
 18:
                michal = zuuluu.isPaused;
 24:
                if(michal) { _fun00008_ip = 46; continue _fun00007 }
 27:
                zuuluu = _closure1_slot5;
                michal = undefined;
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = undefined;
                        golfie = undefined;
                        option = undefined;
                        verify = undefined;
 8: // try_start_0
                        tangon = _closure3_slot0;
                        entity = true;
                        tangon['isBatchEmitting'] = entity;
                        entity = tangon.changeSentinel;
                        entity = entity + 1;
                        tangon['changeSentinel'] = entity;
                        oscard = 0;
                        golfie = 0;
                        entity = global;
                        report = entity.Set;
                        offset = report.prototype;
                        offset = Object.create(offset, {constructor: {value: report}});
                        kiloes = offset;
                        report = new kiloes[report](backup);
                        option = report instanceof Object ? report : offset;
                        report = entity.Set;
                        offset = report.prototype;
                        offset = Object.create(offset, {constructor: {value: report}});
                        kiloes = offset;
                        report = new kiloes[report](backup);
                        verify = report instanceof Object ? report : offset;
                        tangon = tangon.changedStores;
                        tangon = tangon.size;
                        report = 100;
                        if(!(tangon > oscard)) { _fun00010_ip = 167; continue _fun00009 }
 114:
                        tangon = golfie;
                        tangon = tangon + 1;
                        golfie = tangon;
                        if(!(!(tangon > report))) { _fun00010_ip = 315; continue _fun00009 }
 130:
                        tangon = _closure3_slot0;
                        romeon = tangon.emitNonReactOnce;
                        yankee = option;
                        offset = verify;
                        offset = romeon.bind(tangon)(yankee, offset);
                        tangon = tangon.changedStores;
                        tangon = tangon.size;
                        if(tangon > oscard) { _fun00010_ip = 114; continue _fun00009 }
 167:
                        tangon = _closure3_slot0;
                        tangon = tangon.reactChangedStores;
                        tangon = tangon.size;
                        if(!(tangon > oscard)) { _fun00010_ip = 228; continue _fun00009 }
 186:
                        tangon = golfie;
                        tangon = tangon + 1;
                        golfie = tangon;
                        if(!(!(tangon > report))) { _fun00010_ip = 242; continue _fun00009 }
 199:
                        tangon = _closure3_slot0;
                        option = tangon.emitReactOnce;
                        option = option.bind(tangon)();
                        tangon = tangon.reactChangedStores;
                        tangon = tangon.size;
                        if(tangon > oscard) { _fun00010_ip = 186; continue _fun00009 }
 228: // try_end0
                        tangon = _closure3_slot0;
                        michal = false;
                        tangon['isBatchEmitting'] = michal;
                        return zuuluu;
 242: // try_start_1
                        oscard = _closure1_slot4;
                        report = oscard.error;
                        tangon = _closure1_slot0;
                        golfie = _closure1_slot1;
                        michal = 3;
                        michal = golfie[michal];
                        tangon = tangon.bind(zuuluu)(michal);
                        michal = tangon.serialize;
                        tangon = michal.bind(tangon)();
                        michal = 'LastFewActions';
                        michal = report.bind(oscard)(michal, tangon);
                        tangon = entity.Error;
                        michal = 'react change emit loop detected, aborting';
                        michal = tangon.bind(zuuluu)(michal);
                        throw michal;
 315:
                        oscard = _closure1_slot4;
                        report = oscard.error;
                        tangon = _closure1_slot0;
                        golfie = _closure1_slot1;
                        michal = 3;
                        michal = golfie[michal];
                        tangon = tangon.bind(zuuluu)(michal);
                        michal = tangon.serialize;
                        tangon = michal.bind(tangon)();
                        michal = 'LastFewActions';
                        michal = report.bind(oscard)(michal, tangon);
                        michal = entity.Error;
                        entity = 'change emit loop detected, aborting';
                        entity = michal.bind(zuuluu)(entity);
                        throw entity;
 388: // try_end1 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=0);
                        zuuluu = _closure3_slot0;
                        michal = false;
                        zuuluu['isBatchEmitting'] = michal;
                        throw entity;
                    }
                };
                entity = zuuluu.bind(michal)(entity);
 46:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getChangeSentinel';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.changeSentinel;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getIsPaused';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.isPaused;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'markChanged';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                michal = this;
                zuuluu = tangon._changeCallbacks;
                entity = zuuluu.hasAny;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 42; continue _fun00011 }
 25:
                zuuluu = tangon._syncWiths;
                report = zuuluu.length;
                zuuluu = 0;
                entity = report > zuuluu;
 42:
                if(!entity) { _fun00012_ip = 61; continue _fun00011 }
 45:
                zuuluu = michal.changedStores;
                entity = zuuluu.add;
                entity = entity.bind(zuuluu)(tangon);
 61:
                zuuluu = tangon._reactChangeCallbacks;
                entity = zuuluu.hasAny;
                entity = entity.bind(zuuluu)();
                if(!entity) { _fun00012_ip = 96; continue _fun00011 }
 80:
                zuuluu = michal.reactChangedStores;
                entity = zuuluu.add;
                entity = entity.bind(zuuluu)(tangon);
 96:
                entity = michal.isBatchEmitting;
                if(entity) { _fun00012_ip = 111; continue _fun00011 }
 105:
                entity = michal.isDispatching;
 111:
                if(entity) { _fun00012_ip = 120; continue _fun00011 }
 114:
                entity = michal.isPaused;
 120:
                if(entity) { _fun00012_ip = 133; continue _fun00011 }
 123:
                entity = michal.emit;
                entity = entity.bind(michal)();
 133:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'emitNonReactOnce';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                michal = argFoo;
                var _closure3_slot1 = michal;
                michal = argBar;
                var _closure3_slot2 = michal;
                michal = global;
                tangon = michal.Date;
                zuuluu = tangon.now;
                oscard = zuuluu.bind(tangon)();
                tangon = report.changedStores;
                zuuluu = michal.Set;
                golfie = zuuluu.prototype;
                golfie = Object.create(golfie, {constructor: {value: zuuluu}});
                offset = golfie;
                zuuluu = new offset[zuuluu](verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : golfie;
                report['changedStores'] = zuuluu;
                report = tangon.forEach;
                zuuluu = function(argFoo) {
                    zuuluu = argFoo;
                    tangon = _closure3_slot2;
                    michal = tangon.add;
                    michal = michal.bind(tangon)(zuuluu);
                    tangon = zuuluu._changeCallbacks;
                    michal = tangon.invokeAll;
                    michal = michal.bind(tangon)();
                    entity = _closure3_slot0;
                    michal = entity.changedStores;
                    entity = michal.delete;
                    entity = entity.bind(michal)(zuuluu);
                    entity = undefined;
                    return entity;
                };
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity._syncWiths;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = argFoo;
                            tangon = entity.func;
                            zuuluu = entity.store;
                            report = _closure3_slot1;
                            michal = report.has;
                            michal = michal.bind(report)(tangon);
                            if(michal) { _fun00016_ip = 107; continue _fun00015 }
 35:
                            report = _closure3_slot1;
                            michal = report.add;
                            michal = michal.bind(report)(tangon);
                            michal = undefined;
                            tangon = tangon.bind(michal)();
                            michal = false;
                            if(!(michal !== tangon)) { _fun00016_ip = 107; continue _fun00015 }
 61:
                            tangon = _closure3_slot2;
                            michal = tangon.has;
                            michal = michal.bind(tangon)(zuuluu);
                            if(michal) { _fun00016_ip = 107; continue _fun00015 }
 78:
                            tangon = _closure3_slot2;
                            michal = tangon.add;
                            michal = michal.bind(tangon)(zuuluu);
                            michal = _closure3_slot0;
                            entity = michal.markChanged;
                            entity = entity.bind(michal)(zuuluu);
 107:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = michal.Date;
                entity = zuuluu.now;
                report = entity.bind(zuuluu)();
                zuuluu = report - oscard;
                entity = 100;
                if(!(zuuluu > entity)) { _fun00014_ip = 218; continue _fun00013 }
 134:
                tangon = _closure1_slot4;
                zuuluu = tangon.verbose;
                golfie = report - oscard;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = 'Slow batch emitChanges took ';
                michal = 'ms recentActions:';
                michal = oscard.bind(report)(golfie, michal);
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                entity = report.serialize;
                entity = entity.bind(report)();
                entity = zuuluu.bind(tangon)(michal, entity);
 218:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'emitReactOnce';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                michal = global;
                tangon = michal.Date;
                zuuluu = tangon.now;
                oscard = zuuluu.bind(tangon)();
                tangon = report.reactChangedStores;
                zuuluu = michal.Set;
                golfie = zuuluu.prototype;
                golfie = Object.create(golfie, {constructor: {value: zuuluu}});
                offset = golfie;
                zuuluu = new offset[zuuluu](verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : golfie;
                report['reactChangedStores'] = zuuluu;
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu._reactChangeCallbacks;
                    entity = michal.invokeAll;
                    entity = entity.bind(michal)();
                    entity = _closure3_slot0;
                    michal = entity.reactChangedStores;
                    entity = michal.delete;
                    entity = entity.bind(michal)(zuuluu);
                    entity = undefined;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = michal.Date;
                entity = zuuluu.now;
                report = entity.bind(zuuluu)();
                zuuluu = report - oscard;
                entity = 100;
                if(!(zuuluu > entity)) { _fun00018_ip = 189; continue _fun00017 }
 105:
                tangon = _closure1_slot4;
                zuuluu = tangon.verbose;
                golfie = report - oscard;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = 'Slow batch emitReactChanges took ';
                michal = 'ms recentActions:';
                michal = oscard.bind(report)(golfie, michal);
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                entity = report.serialize;
                entity = entity.bind(report)();
                entity = zuuluu.bind(tangon)(michal, entity);
 189:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[10] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/flux/Emitter.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();