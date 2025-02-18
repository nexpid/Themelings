// app/lib/StateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: StateManager
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = arguments[0];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
                michal = true;
 14:
                report = _closure1_slot2;
                tangon = _closure2_slot0;
                tangon = report.bind(entity)(zuuluu, tangon);
                zuuluu['alwaysUpdateState'] = michal;
                michal = false;
                zuuluu['dirty'] = michal;
                michal = zuuluu.getInitialState;
                michal = michal.bind(zuuluu)();
                zuuluu['state'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'shouldCommit';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = true;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'setState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            entity = {};
            tangon = michal.state;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            tangon = argFoo;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            michal['state'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getState';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.state;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'reset';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = false;
            michal['dirty'] = entity;
            entity = michal.getInitialState;
            entity = entity.bind(michal)();
            michal['state'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'update';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = arguments[0];
                entity = arguments[1];
                tangon = this;
                report = undefined;
                if(!(oscard === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
                oscard = {};
 17:
                if(!(entity === report)) { _fun00004_ip = 23; continue _fun00003 }
 21:
                entity = false;
 23:
                zuuluu = tangon.getNextState;
                michal = {};
                romeon = tangon.state;
                foxtra = michal;
                golfie = copyDataProperties(foxtra, romeon);
                foxtra = michal;
                romeon = oscard;
                oscard = copyDataProperties(foxtra, romeon);
                michal = zuuluu.bind(tangon)(michal);
                if(entity) { _fun00004_ip = 173; continue _fun00003 }
 63:
                entity = global;
                zuuluu = entity.Object;
                entity = zuuluu.keys;
                option = entity.bind(zuuluu)(michal);
                entity = option.length;
                golfie = 0;
                entity = golfie < entity;
                zuuluu = 2;
                if(!entity) { _fun00004_ip = 221; continue _fun00003 }
 101:
                verify = option[golfie];
                entity = tangon.dirty;
                if(entity) { _fun00004_ip = 153; continue _fun00003 }
 114:
                yankee = _closure1_slot0;
                offset = _closure1_slot1;
                offset = offset[zuuluu];
                yankee = yankee.bind(report)(offset);
                offset = tangon.state;
                offset = offset[verify];
                verify = michal[verify];
                verify = yankee.bind(report)(offset, verify);
                entity = !verify;
 153:
                tangon['dirty'] = entity;
                golfie = golfie + 1;
                entity = option.length;
                if(golfie < entity) { _fun00004_ip = 101; continue _fun00003 }
 171:
                _fun00004_ip = 221; continue _fun00003;
 173:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 2;
                entity = oscard[entity];
                zuuluu = zuuluu.bind(report)(entity);
                entity = tangon.getInitialState;
                entity = entity.bind(tangon)();
                entity = zuuluu.bind(report)(michal, entity);
                entity = !entity;
                tangon['dirty'] = entity;
 221:
                entity = tangon.dirty;
                if(!entity) { _fun00004_ip = 242; continue _fun00003 }
 230:
                zuuluu = tangon.shouldCommit;
                entity = zuuluu.bind(tangon)();
 242:
                zuuluu = entity;
                if(zuuluu) { _fun00004_ip = 254; continue _fun00003 }
 248:
                zuuluu = tangon.alwaysUpdateState;
 254:
                if(!zuuluu) { _fun00004_ip = 263; continue _fun00003 }
 257:
                tangon['state'] = michal;
 263:
                michal = !entity;
                entity = !michal;
                if(michal) { _fun00004_ip = 298; continue _fun00003 }
 272:
                michal = false;
                tangon['dirty'] = michal;
                zuuluu = tangon.didCommit;
                michal = tangon.state;
                michal = zuuluu.bind(tangon)(michal);
                entity = true;
 298:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'forceUpdate';
        entity['key'] = oscard;
        report = function() { // Original name: value
            zuuluu = this;
            entity = false;
            zuuluu['dirty'] = entity;
            michal = zuuluu.didCommit;
            entity = zuuluu.state;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/StateManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();