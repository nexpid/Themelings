// app/lib/StateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: StateManager
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = arguments[0];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
                mike = true;
 14:
                report = _closure1_slot2;
                tango = _closure2_slot0;
                tango = report.bind(entity)(zulu, tango);
                zulu['alwaysUpdateState'] = mike;
                mike = false;
                zulu['dirty'] = mike;
                mike = zulu.getInitialState;
                mike = mike.bind(zulu)();
                zulu['state'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'shouldCommit';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = true;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'setState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            entity = {};
            tango = mike.state;
            report = entity;
            zulu = copyDataProperties(report, tango);
            tango = argFoo;
            report = entity;
            zulu = copyDataProperties(report, tango);
            mike['state'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.state;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = false;
            mike['dirty'] = entity;
            entity = mike.getInitialState;
            entity = entity.bind(mike)();
            mike['state'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscar = arguments[0];
                entity = arguments[1];
                tango = this;
                report = undefined;
                if(!(oscar === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
                oscar = {};
 17:
                if(!(entity === report)) { _fun00004_ip = 23; continue _fun00003 }
 21:
                entity = false;
 23:
                zulu = tango.getNextState;
                mike = {};
                romeo = tango.state;
                foxtrot = mike;
                golf = copyDataProperties(foxtrot, romeo);
                foxtrot = mike;
                romeo = oscar;
                oscar = copyDataProperties(foxtrot, romeo);
                mike = zulu.bind(tango)(mike);
                if(entity) { _fun00004_ip = 173; continue _fun00003 }
 63:
                entity = global;
                zulu = entity.Object;
                entity = zulu.keys;
                options = entity.bind(zulu)(mike);
                entity = options.length;
                golf = 0;
                entity = golf < entity;
                zulu = 2;
                if(!entity) { _fun00004_ip = 221; continue _fun00003 }
 101:
                verify = options[golf];
                entity = tango.dirty;
                if(entity) { _fun00004_ip = 153; continue _fun00003 }
 114:
                yankee = _closure1_slot0;
                offset = _closure1_slot1;
                offset = offset[zulu];
                yankee = yankee.bind(report)(offset);
                offset = tango.state;
                offset = offset[verify];
                verify = mike[verify];
                verify = yankee.bind(report)(offset, verify);
                entity = !verify;
 153:
                tango['dirty'] = entity;
                golf = golf + 1;
                entity = options.length;
                if(golf < entity) { _fun00004_ip = 101; continue _fun00003 }
 171:
                _fun00004_ip = 221; continue _fun00003;
 173:
                zulu = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 2;
                entity = oscar[entity];
                zulu = zulu.bind(report)(entity);
                entity = tango.getInitialState;
                entity = entity.bind(tango)();
                entity = zulu.bind(report)(mike, entity);
                entity = !entity;
                tango['dirty'] = entity;
 221:
                entity = tango.dirty;
                if(!entity) { _fun00004_ip = 242; continue _fun00003 }
 230:
                zulu = tango.shouldCommit;
                entity = zulu.bind(tango)();
 242:
                zulu = entity;
                if(zulu) { _fun00004_ip = 254; continue _fun00003 }
 248:
                zulu = tango.alwaysUpdateState;
 254:
                if(!zulu) { _fun00004_ip = 263; continue _fun00003 }
 257:
                tango['state'] = mike;
 263:
                mike = !entity;
                entity = !mike;
                if(mike) { _fun00004_ip = 298; continue _fun00003 }
 272:
                mike = false;
                tango['dirty'] = mike;
                zulu = tango.didCommit;
                mike = tango.state;
                mike = zulu.bind(tango)(mike);
                entity = true;
 298:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'forceUpdate';
        entity['key'] = oscar;
        report = function() { // Original name: value
            zulu = this;
            entity = false;
            zulu['dirty'] = entity;
            mike = zulu.didCommit;
            entity = zulu.state;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/StateManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();