// app/modules/profiling/ComponentProfiler.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    entity = function(argFoo, argBar) { // Original name: formatString
        _fun87139: for(var _fun87139_ip = 0; ; ) switch(_fun87139_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = report.length;
            zulu = tango;
            if(!(!(entity > zulu))) { _fun87139_ip = 23; continue _fun87139 }
 18:
            zulu = report.length;
 23:
            mike = report.substring;
            entity = 0;
            zulu = mike.bind(report)(entity, zulu);
            mike = zulu.padEnd;
            entity = ' ';
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    report = true;
    tango['value'] = report;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    options = golf[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: StatCollector
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 0;
            zulu['totalMicroseconds'] = mike;
            zulu['count'] = mike;
            mike = null;
            zulu['minMicroseconds'] = mike;
            zulu['maxMicroseconds'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addValue';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun87142: for(var _fun87142_ip = 0; ; ) switch(_fun87142_ip) {
 0:
                mike = this;
                entity = mike.count;
                entity = entity + 1;
                mike['count'] = entity;
                oscar = global;
                tango = oscar.Math;
                zulu = tango.round;
                report = 1000;
                entity = argFoo;
                entity = report * entity;
                report = zulu.bind(tango)(entity);
                entity = mike.totalMicroseconds;
                entity = entity + report;
                mike['totalMicroseconds'] = entity;
                tango = oscar.Math;
                zulu = tango.min;
                entity = mike.minMicroseconds;
                golf = null;
                if(!(golf == entity)) { _fun87142_ip = 99; continue _fun87142 }
 87:
                options = oscar.Number;
                entity = options.MAX_SAFE_INTEGER;
 99:
                entity = zulu.bind(tango)(entity, report);
                mike['minMicroseconds'] = entity;
                tango = oscar.Math;
                zulu = tango.max;
                entity = mike.maxMicroseconds;
                if(!(golf == entity)) { _fun87142_ip = 144; continue _fun87142 }
 132:
                oscar = oscar.Number;
                entity = oscar.MIN_SAFE_INTEGER;
 144:
                entity = zulu.bind(tango)(entity, report);
                mike['maxMicroseconds'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'mean';
        entity['key'] = oscar;
        report = function() { // Original name: get
            entity = this;
            mike = entity.totalMicroseconds;
            entity = entity.count;
            entity = mike / entity;
            return entity;
        };
        entity['get'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot4 = tango;
    options = {};
    var _closure1_slot5 = options;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/profiling/ComponentProfiler.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: ComponentProfiler
        entity = argFoo;
        oscar = entity.id;
        entity = entity.children;
        mike = _closure1_slot2;
        golf = mike.useCallback;
        report = function(argFoo, argBar, argBaz) {
            _fun87145: for(var _fun87145_ip = 0; ; ) switch(_fun87145_ip) {
 0:
                mike = argFoo;
                report = argBar;
                zulu = argBaz;
                tango = _closure1_slot6;
                if(!tango) { _fun87145_ip = 227; continue _fun87145 }
 22:
                tango = _closure1_slot5;
                tango = mike in tango;
                if(tango) { _fun87145_ip = 122; continue _fun87145 }
 33:
                oscar = _closure1_slot5;
                tango = {};
                golf = _closure1_slot4;
                options = golf.prototype;
                verify = Object.create(options, {constructor: {value: golf}});
                yankee = verify;
                options = new yankee[golf](offset);
                options = options instanceof Object ? options : verify;
                tango['mount'] = options;
                options = golf.prototype;
                verify = Object.create(options, {constructor: {value: golf}});
                yankee = verify;
                options = new yankee[golf](offset);
                options = options instanceof Object ? options : verify;
                tango['update'] = options;
                options = golf.prototype;
                options = Object.create(options, {constructor: {value: golf}});
                yankee = options;
                golf = new yankee[golf](offset);
                golf = golf instanceof Object ? golf : options;
                tango['nestedUpdate'] = golf;
                oscar[mike] = tango;
 122:
                tango = 'mount';
                if(!(tango !== report)) { _fun87145_ip = 202; continue _fun87145 }
 130:
                tango = 'update';
                if(!(tango !== report)) { _fun87145_ip = 175; continue _fun87145 }
 138:
                tango = 'nested-update';
                if(!(tango === report)) { _fun87145_ip = 227; continue _fun87145 }
 148:
                tango = _closure1_slot5;
                tango = tango[mike];
                report = tango.nestedUpdate;
                tango = report.addValue;
                tango = tango.bind(report)(zulu);
                _fun87145_ip = 227; continue _fun87145;
 175:
                tango = _closure1_slot5;
                tango = tango[mike];
                report = tango.update;
                tango = report.addValue;
                tango = tango.bind(report)(zulu);
                _fun87145_ip = 227; continue _fun87145;
 202:
                entity = _closure1_slot5;
                entity = entity[mike];
                mike = entity.mount;
                entity = mike.addValue;
                entity = entity.bind(mike)(zulu);
 227:
                entity = undefined;
                return entity;
            }
        };
        tango = new Array(0);
        report = golf.bind(mike)(report, tango);
        tango = _closure1_slot3;
        zulu = mike.Profiler;
        mike = {};
        mike['id'] = oscar;
        mike['onRender'] = report;
        mike['children'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['default'] = report;
    zulu['StatCollector'] = tango;
    tango = function() { // Original name: clearComponentRenderStats
        entity = {};
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    zulu['clearComponentRenderStats'] = tango;
    tango = function() { // Original name: getComponentRenderStats
        entity = _closure1_slot5;
        return entity;
    };
    zulu['getComponentRenderStats'] = tango;
    tango = function() { // Original name: serializeComponentRenderAverages
        _fun87148: for(var _fun87148_ip = 0; ; ) switch(_fun87148_ip) {
 0:
            tango = global;
            report = tango.Object;
            zulu = report.keys;
            entity = _closure1_slot5;
            entity = zulu.bind(report)(entity);
            report = entity.length;
            entity = '';
            zulu = 0;
            if(!(zulu !== report)) { _fun87148_ip = 240; continue _fun87148 }
 43:
            golf = _closure1_slot7;
            oscar = undefined;
            zulu = 'id';
            report = 20;
            foxtrot = golf.bind(oscar)(zulu, report);
            zulu = 'Mounts';
            options = 8;
            config = golf.bind(oscar)(zulu, options);
            zulu = 'Mount Mean';
            vacuum = golf.bind(oscar)(zulu, report);
            zulu = 'Updates';
            source = golf.bind(oscar)(zulu, options);
            zulu = 'Update Mean';
            echo = golf.bind(oscar)(zulu, report);
            zulu = 'Nested';
            output = golf.bind(oscar)(zulu, options);
            zulu = 'Nested Mean';
            kilo = golf.bind(oscar)(zulu, report);
            zulu = tango.HermesInternal;
            oscar = zulu.concat;
            report = '|';
            backup = '|\n';
            papa = report;
            context = foxtrot;
            record = report;
            sequence = report;
            control = report;
            update = report;
            result = report;
            sizing = report;
            report = papa[oscar](context, record, config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo, backup, foxtrot);
            zulu = 'Component Render Stats (microseconds):\n';
            zulu = zulu + report;
            report = tango.Object;
            tango = report.entries;
            mike = _closure1_slot5;
            report = tango.bind(report)(mike);
            tango = report.map;
            mike = function(argFoo) {
                _fun87149: for(var _fun87149_ip = 0; ; ) switch(_fun87149_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    entity = oscar().value;
                    zulu = mike;
                    tango = undefined;
                    zulu = zulu === tango;
                    report = undefined;
                    if(zulu) { _fun87149_ip = 27; continue _fun87149 }
 24:
                    report = entity;
 27:
                    entity = undefined;
                    if(zulu) { _fun87149_ip = 57; continue _fun87149 }
 32:
                    golf = oscar().value;
                    oscar = mike;
                    oscar = oscar === tango;
                    entity = undefined;
                    zulu = oscar;
                    if(oscar) { _fun87149_ip = 57; continue _fun87149 }
 51:
                    entity = golf;
                    zulu = oscar;
 57:
                    if(zulu) { _fun87149_ip = 63; continue _fun87149 }
 60:
                    mike.return();
 63:
                    zulu = _closure1_slot7;
                    mike = 20;
                    offset = zulu.bind(tango)(report, mike);
                    report = entity.mount;
                    oscar = report.count;
                    report = oscar.toString;
                    report = report.bind(oscar)();
                    yankee = 8;
                    sequence = zulu.bind(tango)(report, yankee);
                    report = entity.mount;
                    oscar = report.mean;
                    report = oscar.toString;
                    report = report.bind(oscar)();
                    control = zulu.bind(tango)(report, mike);
                    report = entity.update;
                    oscar = report.count;
                    report = oscar.toString;
                    report = report.bind(oscar)();
                    update = zulu.bind(tango)(report, yankee);
                    report = entity.update;
                    oscar = report.mean;
                    report = oscar.toString;
                    report = report.bind(oscar)();
                    result = zulu.bind(tango)(report, mike);
                    report = entity.nestedUpdate;
                    romeo = report.count;
                    report = romeo.toString;
                    report = report.bind(romeo)();
                    sizing = zulu.bind(tango)(report, yankee);
                    entity = entity.nestedUpdate;
                    yankee = entity.mean;
                    entity = yankee.toString;
                    entity = entity.bind(yankee)();
                    backup = zulu.bind(tango)(entity, mike);
                    entity = global;
                    entity = entity.HermesInternal;
                    zulu = entity.concat;
                    mike = '|';
                    foxtrot = '|\n';
                    context = mike;
                    record = offset;
                    config = mike;
                    vacuum = mike;
                    source = mike;
                    echo = mike;
                    output = mike;
                    kilo = mike;
                    entity = context[zulu](record, config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo, backup, foxtrot, romeo);
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            entity = zulu + mike;
 240:
            return entity;
        }
    };
    zulu['serializeComponentRenderAverages'] = tango;
    tango = function() { // Original name: resetComponentProfiler
        entity = {};
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    zulu['resetComponentProfiler'] = tango;
    tango = function() { // Original name: pauseComponentProfiler
        entity = false;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    zulu['pauseComponentProfiler'] = tango;
    tango = function() { // Original name: resumeComponentProfiler
        entity = true;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    zulu['resumeComponentProfiler'] = tango;
    mike = function() { // Original name: dumpStats
        entity = _closure1_slot5;
        return entity;
    };
    zulu['dumpStats'] = mike;
    return entity;
})();