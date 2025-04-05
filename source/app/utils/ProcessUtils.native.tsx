// app/utils/ProcessUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot6 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = this;
                entity = _closure1_slot0;
                tangon = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(oscard, tangon);
                entity = _closure1_slot3;
                yankee = entity.bind(report)(tangon);
                tangon = _closure1_slot2;
                entity = _closure1_slot6;
                entity = entity.bind(report)();
                if(entity) { _fun00004_ip = 64; continue _fun00003 }
 51:
                entity = yankee.apply;
                entity = entity.bind(yankee)(oscard, report);
                _fun00004_ip = 102; continue _fun00003;
 64:
                golfie = global;
                offset = golfie.Reflect;
                verify = offset.construct;
                golfie = _closure1_slot3;
                golfie = golfie.bind(report)(oscard);
                option = golfie.constructor;
                golfie = new Array(0);
                entity = verify.bind(offset)(yankee, golfie, option);
 102:
                entity = tangon.bind(report)(oscard, entity);
                var _closure3_slot0 = entity;
                tangon = _closure1_slot5;
                golfie = null;
                tangon = golfie == tangon;
                oscard = undefined;
                if(tangon) { _fun00004_ip = 137; continue _fun00003 }
 127:
                zuuluu = _closure1_slot5;
                oscard = zuuluu.SystemResourceManager;
 137:
                var _closure3_slot1 = oscard;
                zuuluu = golfie == oscard;
                if(zuuluu) { _fun00004_ip = 158; continue _fun00003 }
 148:
                tangon = oscard.getCpuCoreCount;
                zuuluu = golfie == tangon;
 158:
                if(zuuluu) { _fun00004_ip = 177; continue _fun00003 }
 161:
                tangon = oscard.getCpuCoreCount;
                zuuluu = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    michal['cpuCoreCount'] = entity;
                    entity = undefined;
                    return entity;
                };
                zuuluu = tangon.bind(oscard)(zuuluu);
 177:
                zuuluu = global;
                tangon = zuuluu.setInterval;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        report = null;
                        zuuluu = report == zuuluu;
                        if(zuuluu) { _fun00006_ip = 32; continue _fun00005 }
 18:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCurrentCpuUsagePercent;
                        zuuluu = report == tangon;
 32:
                        if(zuuluu) { _fun00006_ip = 55; continue _fun00005 }
 35:
                        oscard = _closure3_slot1;
                        tangon = oscard.getCurrentCpuUsagePercent;
                        zuuluu = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = _closure3_slot0;
                                entity = 0;
                                report = tangon >= entity;
                                entity = undefined;
                                michal = undefined;
                                if(!report) { _fun00008_ip = 26; continue _fun00007 }
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
                        if(zuuluu) { _fun00006_ip = 80; continue _fun00005 }
 66:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCumulativeCpuUsage;
                        zuuluu = report == tangon;
 80:
                        if(zuuluu) { _fun00006_ip = 103; continue _fun00005 }
 83:
                        oscard = _closure3_slot1;
                        tangon = oscard.getCumulativeCpuUsage;
                        zuuluu = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                zuuluu = argFoo;
                                entity = 0;
                                if(!(zuuluu >= entity)) { _fun00010_ip = 51; continue _fun00009 }
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
                        if(zuuluu) { _fun00006_ip = 128; continue _fun00005 }
 114:
                        tangon = _closure3_slot1;
                        tangon = tangon.getCurrentMemoryUsageKb;
                        zuuluu = report == tangon;
 128:
                        if(zuuluu) { _fun00006_ip = 151; continue _fun00005 }
 131:
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.getCurrentMemoryUsageKb;
                        entity = function(argFoo) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = _closure3_slot0;
                                entity = 0;
                                report = tangon >= entity;
                                entity = undefined;
                                michal = undefined;
                                if(!report) { _fun00012_ip = 26; continue _fun00011 }
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
        entity = new Array(8);
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
        golfie = 'getMemoryUsageElectronProcessTypeDetails';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
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
        entity[5] = report;
        report = {};
        golfie = 'getMemoryUsageElectronRenderer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getMemoryUsageElectronRendererUsedHeapSize';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
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