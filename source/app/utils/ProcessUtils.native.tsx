// app/utils/ProcessUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun36044: for(var _fun36044_ip = 0; ; ) switch(_fun36044_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun36044_ip = 48; continue _fun36044 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun36044_ip = 86; continue _fun36044;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun36045: for(var _fun36045_ip = 0; ; ) switch(_fun36045_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun36045_ip = 74; continue _fun36045;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ProcessUtils;
    mike = function(argFoo) {
        tango = function() { // Original name: ProcessUtilsIOS
            _fun36049: for(var _fun36049_ip = 0; ; ) switch(_fun36049_ip) {
 0:
                oscar = this;
                entity = _closure1_slot0;
                tango = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(oscar, tango);
                entity = _closure1_slot6;
                entity = entity.bind(report)(oscar, tango);
                var _closure3_slot0 = entity;
                tango = _closure1_slot5;
                golf = null;
                tango = golf == tango;
                oscar = undefined;
                if(tango) { _fun36049_ip = 66; continue _fun36049 }
 56:
                zulu = _closure1_slot5;
                oscar = zulu.SystemResourceManager;
 66:
                var _closure3_slot1 = oscar;
                zulu = golf == oscar;
                if(zulu) { _fun36049_ip = 87; continue _fun36049 }
 77:
                tango = oscar.getCpuCoreCount;
                zulu = golf == tango;
 87:
                if(zulu) { _fun36049_ip = 106; continue _fun36049 }
 90:
                tango = oscar.getCpuCoreCount;
                zulu = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = argFoo;
                    mike['cpuCoreCount'] = entity;
                    entity = undefined;
                    return entity;
                };
                zulu = tango.bind(oscar)(zulu);
 106:
                zulu = global;
                tango = zulu.setInterval;
                zulu = function() {
                    _fun36051: for(var _fun36051_ip = 0; ; ) switch(_fun36051_ip) {
 0:
                        zulu = _closure3_slot1;
                        report = null;
                        zulu = report == zulu;
                        if(zulu) { _fun36051_ip = 32; continue _fun36051 }
 18:
                        tango = _closure3_slot1;
                        tango = tango.getCurrentCpuUsagePercent;
                        zulu = report == tango;
 32:
                        if(zulu) { _fun36051_ip = 55; continue _fun36051 }
 35:
                        oscar = _closure3_slot1;
                        tango = oscar.getCurrentCpuUsagePercent;
                        zulu = function(argFoo) {
                            _fun36052: for(var _fun36052_ip = 0; ; ) switch(_fun36052_ip) {
 0:
                                tango = argFoo;
                                zulu = _closure3_slot0;
                                entity = 0;
                                report = tango >= entity;
                                entity = undefined;
                                mike = undefined;
                                if(!report) { _fun36052_ip = 26; continue _fun36052 }
 23:
                                mike = tango;
 26:
                                zulu['cpuPercentage'] = mike;
                                return entity;
                            }
                        };
                        zulu = tango.bind(oscar)(zulu);
 55:
                        zulu = _closure3_slot1;
                        zulu = report == zulu;
                        if(zulu) { _fun36051_ip = 80; continue _fun36051 }
 66:
                        tango = _closure3_slot1;
                        tango = tango.getCumulativeCpuUsage;
                        zulu = report == tango;
 80:
                        if(zulu) { _fun36051_ip = 103; continue _fun36051 }
 83:
                        oscar = _closure3_slot1;
                        tango = oscar.getCumulativeCpuUsage;
                        zulu = function(argFoo) {
                            _fun36053: for(var _fun36053_ip = 0; ; ) switch(_fun36053_ip) {
 0:
                                zulu = argFoo;
                                entity = 0;
                                if(!(zulu >= entity)) { _fun36053_ip = 51; continue _fun36053 }
 9:
                                mike = _closure3_slot0;
                                entity = {};
                                entity['usage'] = zulu;
                                zulu = global;
                                tango = zulu.performance;
                                zulu = tango.now;
                                zulu = zulu.bind(tango)();
                                entity['sampleTime'] = zulu;
                                mike['cumulativeCpuUsage'] = entity;
 51:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zulu = tango.bind(oscar)(zulu);
 103:
                        zulu = _closure3_slot1;
                        zulu = report == zulu;
                        if(zulu) { _fun36051_ip = 128; continue _fun36051 }
 114:
                        tango = _closure3_slot1;
                        tango = tango.getCurrentMemoryUsageKb;
                        zulu = report == tango;
 128:
                        if(zulu) { _fun36051_ip = 151; continue _fun36051 }
 131:
                        zulu = _closure3_slot1;
                        mike = zulu.getCurrentMemoryUsageKb;
                        entity = function(argFoo) {
                            _fun36054: for(var _fun36054_ip = 0; ; ) switch(_fun36054_ip) {
 0:
                                tango = argFoo;
                                zulu = _closure3_slot0;
                                entity = 0;
                                report = tango >= entity;
                                entity = undefined;
                                mike = undefined;
                                if(!report) { _fun36054_ip = 26; continue _fun36054 }
 23:
                                mike = tango;
 26:
                                zulu['memory'] = mike;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
 151:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = 1000;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getProcessUptime';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getCumulativeCPUUsage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.cumulativeCpuUsage;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getCurrentCPUUsagePercent';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.cpuPercentage;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getCurrentMemoryUsageKB';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.memory;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getMemoryUsageDetails';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = this;
            mike = mike.memory;
            entity[0] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getMemoryUsageElectronRenderer';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getMemoryUsageElectronRendererUsedHeapSize';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/ProcessUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();