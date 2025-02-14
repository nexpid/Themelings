// app/lib/SystemResources.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
        zulu = function() { // Original name: SystemResources
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 2;
            golf = report[tango];
            golf = oscar.bind(entity)(golf);
            golf = golf.Histogram;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            yankee = options;
            golf = new yankee[golf](offset);
            golf = golf instanceof Object ? golf : options;
            zulu['cpuHistogram'] = golf;
            tango = report[tango];
            tango = oscar.bind(entity)(tango);
            tango = tango.Histogram;
            oscar = tango.prototype;
            oscar = Object.create(oscar, {constructor: {value: tango}});
            yankee = oscar;
            tango = new yankee[tango](offset);
            tango = tango instanceof Object ? tango : oscar;
            zulu['memoryHistogram'] = tango;
            tango = _closure1_slot1;
            mike = 3;
            mike = report[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.getCumulativeCPUUsage;
            mike = mike.bind(tango)();
            zulu['startCPU'] = mike;
            mike = zulu.startCPU;
            zulu['lastCPU'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getStats';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun52951: for(var _fun52951_ip = 0; ; ) switch(_fun52951_ip) {
 0:
                entity = this;
                zulu = entity.cpuHistogram;
                mike = zulu.getReport;
                verify = mike.bind(zulu)();
                zulu = entity.memoryHistogram;
                mike = zulu.getReport;
                mike = mike.bind(zulu)();
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 3;
                zulu = report[zulu];
                oscar = undefined;
                tango = tango.bind(oscar)(zulu);
                zulu = tango.getCumulativeCPUUsage;
                report = zulu.bind(tango)();
                zulu = entity.startCPU;
                offset = null;
                tango = offset == zulu;
                zulu = undefined;
                if(tango) { _fun52951_ip = 161; continue _fun52951 }
 87:
                tango = offset == report;
                zulu = undefined;
                if(tango) { _fun52951_ip = 161; continue _fun52951 }
 96:
                oscar = report.usage;
                tango = entity.startCPU;
                tango = tango.usage;
                oscar = oscar - tango;
                tango = 100;
                tango = tango * oscar;
                report = report.sampleTime;
                entity = entity.startCPU;
                entity = entity.sampleTime;
                report = report - entity;
                entity = 1000;
                entity = report / entity;
                zulu = tango / entity;
 161:
                entity = {};
                tango = verify.percentiles;
                options = 25;
                tango = tango[options];
                entity['client_performance_cpu_percentile25'] = tango;
                tango = verify.percentiles;
                golf = 50;
                tango = tango[golf];
                entity['client_performance_cpu_percentile50'] = tango;
                tango = verify.percentiles;
                oscar = 75;
                tango = tango[oscar];
                entity['client_performance_cpu_percentile75'] = tango;
                tango = verify.percentiles;
                report = 90;
                tango = tango[report];
                entity['client_performance_cpu_percentile90'] = tango;
                yankee = verify.percentiles;
                tango = 95;
                yankee = yankee[tango];
                entity['client_performance_cpu_percentile95'] = yankee;
                if(!(offset == zulu)) { _fun52951_ip = 273; continue _fun52951 }
 267:
                zulu = verify.mean;
 273:
                entity['client_performance_cpu_mean'] = zulu;
                zulu = mike.percentiles;
                zulu = zulu[options];
                entity['client_performance_memory_percentile25'] = zulu;
                zulu = mike.percentiles;
                zulu = zulu[golf];
                entity['client_performance_memory_percentile50'] = zulu;
                zulu = mike.percentiles;
                zulu = zulu[oscar];
                entity['client_performance_memory_percentile75'] = zulu;
                zulu = mike.percentiles;
                zulu = zulu[report];
                entity['client_performance_memory_percentile90'] = zulu;
                zulu = mike.percentiles;
                zulu = zulu[tango];
                entity['client_performance_memory_percentile95'] = zulu;
                zulu = mike.min;
                entity['client_performance_memory_min'] = zulu;
                zulu = mike.max;
                entity['client_performance_memory_max'] = zulu;
                mike = mike.mean;
                entity['client_performance_memory_mean'] = mike;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'takeSample';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun52952: for(var _fun52952_ip = 0; ; ) switch(_fun52952_ip) {
 0:
                mike = this;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                options = 3;
                report = zulu[options];
                entity = undefined;
                golf = tango.bind(entity)(report);
                report = golf.getCumulativeCPUUsage;
                report = report.bind(golf)();
                zulu = zulu[options];
                tango = tango.bind(entity)(zulu);
                zulu = tango.getCurrentMemoryUsageKB;
                tango = zulu.bind(tango)();
                zulu = null;
                if(!(zulu == report)) { _fun52952_ip = 116; continue _fun52952 }
 63:
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                oscar = oscar[options];
                golf = golf.bind(entity)(oscar);
                oscar = golf.getCurrentCPUUsagePercent;
                options = oscar.bind(golf)();
                if(!(zulu != options)) { _fun52952_ip = 234; continue _fun52952 }
 97:
                golf = mike.cpuHistogram;
                oscar = golf.addSample;
                oscar = oscar.bind(golf)(options);
                _fun52952_ip = 234; continue _fun52952;
 116:
                oscar = mike.lastCPU;
                options = zulu != oscar;
                oscar = true;
                if(!options) { _fun52952_ip = 225; continue _fun52952 }
 131:
                verify = report.sampleTime;
                options = mike.lastCPU;
                options = options.sampleTime;
                yankee = verify - options;
                oscar = false;
                options = 1;
                if(!(yankee >= options)) { _fun52952_ip = 225; continue _fun52952 }
 162:
                verify = report.usage;
                options = mike.lastCPU;
                options = options.usage;
                romeo = verify - options;
                offset = mike.cpuHistogram;
                verify = offset.addSample;
                options = 1000;
                options = yankee / options;
                romeo = romeo / options;
                options = 100;
                options = romeo * options;
                options = verify.bind(offset)(options, yankee);
                oscar = true;
 225:
                if(!oscar) { _fun52952_ip = 234; continue _fun52952 }
 228:
                mike['lastCPU'] = report;
 234:
                if(!(zulu != tango)) { _fun52952_ip = 255; continue _fun52952 }
 238:
                zulu = mike.memoryHistogram;
                mike = zulu.addSample;
                mike = mike.bind(zulu)(tango);
 255:
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/SystemResources.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();