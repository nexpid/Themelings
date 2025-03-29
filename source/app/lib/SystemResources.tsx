// app/lib/SystemResources.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: SystemResources
            zuuluu = this;
            report = _closure1_slot4;
            tangon = _closure2_slot3;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 3;
            golfie = report[tangon];
            golfie = oscard.bind(entity)(golfie);
            golfie = golfie.Histogram;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            yankee = option;
            golfie = new yankee[golfie](offset);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['cpuHistogram'] = golfie;
            tangon = report[tangon];
            tangon = oscard.bind(entity)(tangon);
            tangon = tangon.Histogram;
            oscard = tangon.prototype;
            oscard = Object.create(oscard, {constructor: {value: tangon}});
            yankee = oscard;
            tangon = new yankee[tangon](offset);
            tangon = tangon instanceof Object ? tangon : oscard;
            zuuluu['memoryHistogram'] = tangon;
            tangon = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.getCumulativeCPUUsage;
            michal = michal.bind(tangon)();
            zuuluu['startCPU'] = michal;
            michal = zuuluu.startCPU;
            zuuluu['lastCPU'] = michal;
            michal = null;
            zuuluu['lastBattery'] = michal;
            return entity;
        };
        var _closure2_slot3 = zuuluu;
        report = {};
        michal = 'getStats';
        report['key'] = michal;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                zuuluu = entity.cpuHistogram;
                michal = zuuluu.getReport;
                verify = michal.bind(zuuluu)();
                zuuluu = entity.memoryHistogram;
                michal = zuuluu.getReport;
                michal = michal.bind(zuuluu)();
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 4;
                zuuluu = report[zuuluu];
                oscard = undefined;
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.getCumulativeCPUUsage;
                report = zuuluu.bind(tangon)();
                zuuluu = entity.startCPU;
                offset = null;
                tangon = offset == zuuluu;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 161; continue _fun00001 }
 87:
                tangon = offset == report;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 161; continue _fun00001 }
 96:
                oscard = report.usage;
                tangon = entity.startCPU;
                tangon = tangon.usage;
                oscard = oscard - tangon;
                tangon = 100;
                tangon = tangon * oscard;
                report = report.sampleTime;
                entity = entity.startCPU;
                entity = entity.sampleTime;
                report = report - entity;
                entity = 1000;
                entity = report / entity;
                zuuluu = tangon / entity;
 161:
                entity = {};
                tangon = verify.percentiles;
                option = 25;
                tangon = tangon[option];
                entity['client_performance_cpu_percentile25'] = tangon;
                tangon = verify.percentiles;
                golfie = 50;
                tangon = tangon[golfie];
                entity['client_performance_cpu_percentile50'] = tangon;
                tangon = verify.percentiles;
                oscard = 75;
                tangon = tangon[oscard];
                entity['client_performance_cpu_percentile75'] = tangon;
                tangon = verify.percentiles;
                report = 90;
                tangon = tangon[report];
                entity['client_performance_cpu_percentile90'] = tangon;
                yankee = verify.percentiles;
                tangon = 95;
                yankee = yankee[tangon];
                entity['client_performance_cpu_percentile95'] = yankee;
                if(!(offset == zuuluu)) { _fun00002_ip = 273; continue _fun00001 }
 267:
                zuuluu = verify.mean;
 273:
                entity['client_performance_cpu_mean'] = zuuluu;
                zuuluu = michal.percentiles;
                zuuluu = zuuluu[option];
                entity['client_performance_memory_percentile25'] = zuuluu;
                zuuluu = michal.percentiles;
                zuuluu = zuuluu[golfie];
                entity['client_performance_memory_percentile50'] = zuuluu;
                zuuluu = michal.percentiles;
                zuuluu = zuuluu[oscard];
                entity['client_performance_memory_percentile75'] = zuuluu;
                zuuluu = michal.percentiles;
                zuuluu = zuuluu[report];
                entity['client_performance_memory_percentile90'] = zuuluu;
                zuuluu = michal.percentiles;
                zuuluu = zuuluu[tangon];
                entity['client_performance_memory_percentile95'] = zuuluu;
                zuuluu = michal.min;
                entity['client_performance_memory_min'] = zuuluu;
                zuuluu = michal.max;
                entity['client_performance_memory_max'] = zuuluu;
                michal = michal.mean;
                entity['client_performance_memory_mean'] = michal;
                return entity;
            }
        };
        report['value'] = michal;
        michal = new Array(5);
        michal[0] = report;
        report = {};
        golfie = 'takeSample';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                option = 4;
                report = zuuluu[option];
                entity = undefined;
                golfie = tangon.bind(entity)(report);
                report = golfie.getCumulativeCPUUsage;
                report = report.bind(golfie)();
                zuuluu = zuuluu[option];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getCurrentMemoryUsageKB;
                tangon = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu == report)) { _fun00004_ip = 116; continue _fun00003 }
 63:
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                oscard = oscard[option];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.getCurrentCPUUsagePercent;
                option = oscard.bind(golfie)();
                if(!(zuuluu != option)) { _fun00004_ip = 234; continue _fun00003 }
 97:
                golfie = michal.cpuHistogram;
                oscard = golfie.addSample;
                oscard = oscard.bind(golfie)(option);
                _fun00004_ip = 234; continue _fun00003;
 116:
                oscard = michal.lastCPU;
                option = zuuluu != oscard;
                oscard = true;
                if(!option) { _fun00004_ip = 225; continue _fun00003 }
 131:
                verify = report.sampleTime;
                option = michal.lastCPU;
                option = option.sampleTime;
                yankee = verify - option;
                oscard = false;
                option = 1;
                if(!(yankee >= option)) { _fun00004_ip = 225; continue _fun00003 }
 162:
                verify = report.usage;
                option = michal.lastCPU;
                option = option.usage;
                romeon = verify - option;
                offset = michal.cpuHistogram;
                verify = offset.addSample;
                option = 1000;
                option = yankee / option;
                romeon = romeon / option;
                option = 100;
                option = romeon * option;
                option = verify.bind(offset)(option, yankee);
                oscard = true;
 225:
                if(!oscard) { _fun00004_ip = 234; continue _fun00003 }
 228:
                michal['lastCPU'] = report;
 234:
                if(!(zuuluu != tangon)) { _fun00004_ip = 255; continue _fun00003 }
 238:
                zuuluu = michal.memoryHistogram;
                michal = zuuluu.addSample;
                michal = michal.bind(zuuluu)(tangon);
 255:
                return entity;
            }
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'getCurrentBattery';
        report['key'] = golfie;
        option = _closure1_slot3;
        entity = undefined;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 81; continue _fun00005 }
 7: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.getDeviceState;
                    michal = {};
                    report = false;
                    michal['fallback'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=56);
 54:
                    return michal;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 71; continue _fun00005 }
 62:
                    zuuluu = michal.batteryLevel;
 68: // try_end0
                    return zuuluu;
 71:
                    return michal;
 74: // catch_target0
                    CatchBlockStart(arg_register=1);
                    michal = null;
                    return michal;
 81:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot2 = golfie;
        golfie = function() { // Original name: getCurrentBattery
            entity = undefined;
            tangon = _closure2_slot2;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[2] = report;
        report = {};
        golfie = 'setLastBattery';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    zuuluu = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 44; continue _fun00007 }
 10:
                    michal = zuuluu.getCurrentBattery;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=24);
 22:
                    return michal;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 41; continue _fun00007 }
 30:
                    zuuluu['lastBattery'] = michal;
                    zuuluu = undefined;
                    return zuuluu;
 41:
                    return michal;
 44:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: setLastBattery
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[3] = report;
        report = {};
        golfie = 'getBatteryLevelStats';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    oscard = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 148; continue _fun00009 }
 13:
                    michal = oscard.getCurrentBattery;
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=27);
 25:
                    return michal;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 145; continue _fun00009 }
 33:
                    zuuluu = oscard.lastBattery;
                    report = null;
                    if(!(report != zuuluu)) { _fun00010_ip = 116; continue _fun00009 }
 45:
                    if(!(report != michal)) { _fun00010_ip = 116; continue _fun00009 }
 49:
                    zuuluu = {};
                    tangon = oscard.lastBattery;
                    zuuluu['startBattery'] = tangon;
                    zuuluu['currentBattery'] = michal;
                    tangon = global;
                    verify = tangon.Math;
                    option = verify.round;
                    tangon = oscard.lastBattery;
                    tangon = michal - tangon;
                    golfie = 1000;
                    tangon = golfie * tangon;
                    tangon = option.bind(verify)(tangon);
                    tangon = tangon / golfie;
                    zuuluu['batteryUsageRounded'] = tangon;
                    _fun00010_ip = 142; continue _fun00009;
 116:
                    tangon = {};
                    oscard = oscard.lastBattery;
                    tangon['startBattery'] = oscard;
                    tangon['currentBattery'] = michal;
                    tangon['batteryUsageRounded'] = report;
                    zuuluu = tangon;
 142:
                    return zuuluu;
 145:
                    return michal;
 148:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: getBatteryLevelStats
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        michal[4] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/SystemResources.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();