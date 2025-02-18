// app/utils/ProcessUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ProcessUtils;
    michal = function(argFoo) {
        tangon = function() { // Original name: ProcessUtilsIOS
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = this;
                entity = _closure1_slot0;
                tangon = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(oscard, tangon);
                entity = _closure1_slot6;
                entity = entity.bind(report)(oscard, tangon);
                var _closure3_slot0 = entity;
                tangon = _closure1_slot5;
                golfie = null;
                tangon = golfie == tangon;
                oscard = undefined;
                if(tangon) { _fun00006_ip = 66; continue _fun00005 }
 56:
                zuuluu = _closure1_slot5;
                oscard = zuuluu.SystemResourceManager;
 66:
                var _closure3_slot1 = oscard;
                zuuluu = golfie == oscard;
                if(zuuluu) { _fun00006_ip = 87; continue _fun00005 }
 77:
                tangon = oscard.getCpuCoreCount;
                zuuluu = golfie == tangon;
 87:
                if(zuuluu) { _fun00006_ip = 106; continue _fun00005 }
 90:
                tangon = oscard.getCpuCoreCount;
                zuuluu = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    michal['cpuCoreCount'] = entity;
                    entity = undefined;
                    return entity;
                };
                zuuluu = tangon.bind(oscard)(zuuluu);
 106:
                zuuluu = global;
                tangon = zuuluu.setInterval;
                zuuluu = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        report = null;
                        zuuluu = report == zuuluu;
                        if(zuuluu) { _fun00008_ip = 32; continue _fun00007 }
 18:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCurrentCpuUsagePercent;
                        zuuluu = report == tangon;
 32:
                        if(zuuluu) { _fun00008_ip = 55; continue _fun00007 }
 35:
                        oscard = _closure3_slot1;
                        tangon = oscard.getCurrentCpuUsagePercent;
                        zuuluu = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = _closure3_slot0;
                                entity = 0;
                                report = tangon >= entity;
                                entity = undefined;
                                michal = undefined;
                                if(!report) { _fun00010_ip = 26; continue _fun00009 }
 23:
                                michal = tangon;
 26:
                                zuuluu['cpuPercentage'] = michal;
                                return entity;
                            }
                        };
                        zuuluu = tangon.bind(oscard)(zuuluu);
 55:
                        zuuluu = _closure3_slot1;
                        zuuluu = report == zuuluu;
                        if(zuuluu) { _fun00008_ip = 80; continue _fun00007 }
 66:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCumulativeCpuUsage;
                        zuuluu = report == tangon;
 80:
                        if(zuuluu) { _fun00008_ip = 103; continue _fun00007 }
 83:
                        oscard = _closure3_slot1;
                        tangon = oscard.getCumulativeCpuUsage;
                        zuuluu = function(argFoo) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                zuuluu = argFoo;
                                entity = 0;
                                if(!(zuuluu >= entity)) { _fun00012_ip = 51; continue _fun00011 }
 9:
                                michal = _closure3_slot0;
                                entity = {};
                                entity['usage'] = zuuluu;
                                zuuluu = global;
                                tangon = zuuluu.performance;
                                zuuluu = tangon.now;
                                zuuluu = zuuluu.bind(tangon)();
                                entity['sampleTime'] = zuuluu;
                                michal['cumulativeCpuUsage'] = entity;
 51:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zuuluu = tangon.bind(oscard)(zuuluu);
 103:
                        zuuluu = _closure3_slot1;
                        zuuluu = report == zuuluu;
                        if(zuuluu) { _fun00008_ip = 128; continue _fun00007 }
 114:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCurrentMemoryUsageKb;
                        zuuluu = report == tangon;
 128:
                        if(zuuluu) { _fun00008_ip = 151; continue _fun00007 }
 131:
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.getCurrentMemoryUsageKb;
                        entity = function(argFoo) {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = _closure3_slot0;
                                entity = 0;
                                report = tangon >= entity;
                                entity = undefined;
                                michal = undefined;
                                if(!report) { _fun00014_ip = 26; continue _fun00013 }
 23:
                                michal = tangon;
 26:
                                zuuluu['memory'] = michal;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
 151:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = 1000;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
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
        golfie = 'getCumulativeCPUUsage';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.cumulativeCpuUsage;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getCurrentCPUUsagePercent';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.cpuPercentage;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getCurrentMemoryUsageKB';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.memory;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getMemoryUsageDetails';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = this;
            michal = michal.memory;
            entity[0] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getMemoryUsageElectronRenderer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getMemoryUsageElectronRendererUsedHeapSize';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/ProcessUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();