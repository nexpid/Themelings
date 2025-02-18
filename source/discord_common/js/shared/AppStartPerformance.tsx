// discord_common/js/shared/AppStartPerformance.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argFoo;
        option = argBaz;
        zuuluu = argFre;
        report = argPlu;
        var _closure1_slot0 = oscard;
        tangon = global;
        offset = tangon.Object;
        verify = offset.defineProperty;
        golfie = {};
        entity = true;
        golfie['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zuuluu, entity, golfie);
        entity = 0;
        golfie = report[entity];
        entity = undefined;
        golfie = option.bind(entity)(golfie);
        var _closure1_slot1 = golfie;
        golfie = 1;
        golfie = report[golfie];
        golfie = option.bind(entity)(golfie);
        var _closure1_slot2 = golfie;
        golfie = 2;
        golfie = report[golfie];
        golfie = option.bind(entity)(golfie);
        var _closure1_slot3 = golfie;
        golfie = oscard.__getTotalRequireTime;
        oscard = null;
        if(!(oscard != golfie)) { _fun00002_ip = 118; continue _fun00001 }
 111:
        oscard = function() {
            michal = _closure1_slot0;
            entity = michal.__getTotalRequireTime;
            entity = entity.bind(michal)();
            return entity;
        };
        _fun00002_ip = 123; continue _fun00001;
 118:
        oscard = function() {
            entity = 0;
            return entity;
        };
 123:
        var _closure1_slot4 = oscard;
        tangon = tangon.performance;
        oscard = 'undefined';
        tangon = typeof tangon;
        tangon = oscard !== tangon;
        var _closure1_slot5 = tangon;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = function() { // Original name: AppStartPerformance
                zuuluu = this;
                tangon = _closure1_slot2;
                michal = _closure2_slot1;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                michal = true;
                zuuluu['isTracing_'] = michal;
                michal = global;
                report = michal.Date;
                tangon = report.now;
                report = tangon.bind(report)();
                tangon = 15000;
                tangon = report + tangon;
                zuuluu['endTime_'] = tangon;
                tangon = 0;
                zuuluu['lastImportDuration'] = tangon;
                report = {};
                report['index'] = tangon;
                oscard = michal.Date;
                michal = oscard.now;
                michal = michal.bind(oscard)();
                report['timestamp'] = michal;
                michal = new Array(0);
                report['logs'] = michal;
                michal = new Array(0);
                report['nativeLogs'] = michal;
                michal = new Array(1);
                michal[0] = report;
                zuuluu['logGroups'] = michal;
                michal = zuuluu.logGroups;
                michal = michal[tangon];
                michal = michal.logs;
                zuuluu['logs'] = michal;
                michal = '';
                zuuluu['prefix'] = michal;
                return entity;
            };
            var _closure2_slot1 = zuuluu;
            report = {};
            michal = 'isTracing';
            report['key'] = michal;
            michal = function() { // Original name: get
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = this;
                    entity = _closure1_slot5;
                    michal = !entity;
                    if(!entity) { _fun00004_ip = 25; continue _fun00003 }
 16:
                    entity = tangon.isTracing_;
                    michal = !entity;
 25:
                    entity = !michal;
                    if(michal) { _fun00004_ip = 77; continue _fun00003 }
 31:
                    michal = global;
                    zuuluu = michal.Date;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    michal = tangon.endTime_;
                    zuuluu = zuuluu > michal;
                    michal = !zuuluu;
                    if(!zuuluu) { _fun00004_ip = 74; continue _fun00003 }
 64:
                    zuuluu = false;
                    tangon['isTracing_'] = zuuluu;
                    michal = false;
 74:
                    entity = michal;
 77:
                    return entity;
                }
            };
            report['get'] = michal;
            michal = new Array(12);
            michal[0] = report;
            report = {};
            golfie = 'endTime';
            report['key'] = golfie;
            golfie = function() { // Original name: get
                entity = this;
                entity = entity.endTime_;
                return entity;
            };
            report['get'] = golfie;
            golfie = function(argFoo) { // Original name: set
                michal = this;
                entity = argFoo;
                michal['endTime_'] = entity;
                entity = true;
                michal['isTracing_'] = entity;
                entity = undefined;
                return entity;
            };
            report['set'] = golfie;
            michal[1] = report;
            report = {};
            golfie = 'resumeTracing';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = this;
                    entity = michal.isTracing;
                    if(entity) { _fun00006_ip = 110; continue _fun00005 }
 12:
                    tangon = michal.logGroups;
                    zuuluu = tangon.unshift;
                    entity = {};
                    report = michal.logGroups;
                    report = report.length;
                    entity['index'] = report;
                    report = global;
                    oscard = report.Date;
                    report = oscard.now;
                    report = report.bind(oscard)();
                    entity['timestamp'] = report;
                    report = new Array(0);
                    entity['logs'] = report;
                    report = new Array(0);
                    entity['nativeLogs'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = michal.logGroups;
                    entity = 0;
                    entity = zuuluu[entity];
                    entity = entity.logs;
                    michal['logs'] = entity;
 110:
                    entity = global;
                    zuuluu = entity.Date;
                    entity = zuuluu.now;
                    zuuluu = entity.bind(zuuluu)();
                    entity = 10000;
                    entity = zuuluu + entity;
                    michal['endTime'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[2] = report;
            report = {};
            golfie = 'mark';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = this;
                    entity = michal.isTracing;
                    if(!entity) { _fun00008_ip = 117; continue _fun00007 }
 12:
                    tangon = michal.logs;
                    zuuluu = tangon.push;
                    entity = {};
                    report = argFoo;
                    entity['emoji'] = report;
                    option = michal.prefix;
                    report = global;
                    oscard = report.HermesInternal;
                    golfie = oscard.concat;
                    oscard = '';
                    oscard = golfie.bind(oscard)(option);
                    entity['prefix'] = oscard;
                    oscard = argBar;
                    entity['log'] = oscard;
                    oscard = argBaz;
                    entity['delta'] = oscard;
                    oscard = report.Date;
                    report = oscard.now;
                    report = report.bind(oscard)();
                    entity['timestamp'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = michal.addImportLogDetail;
                    entity = entity.bind(michal)();
 117:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[3] = report;
            report = {};
            golfie = 'markAndLog';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    report = argBaz;
                    michal = this;
                    entity = zuuluu.log;
                    entity = entity.bind(zuuluu)(report);
                    entity = michal.isTracing;
                    if(!entity) { _fun00010_ip = 111; continue _fun00009 }
 29:
                    tangon = michal.logs;
                    zuuluu = tangon.push;
                    entity = {};
                    oscard = argBar;
                    entity['emoji'] = oscard;
                    oscard = michal.prefix;
                    entity['prefix'] = oscard;
                    entity['log'] = report;
                    report = argCor;
                    entity['delta'] = report;
                    report = global;
                    oscard = report.Date;
                    report = oscard.now;
                    report = report.bind(oscard)();
                    entity['timestamp'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = michal.addImportLogDetail;
                    entity = entity.bind(michal)();
 111:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[4] = report;
            report = {};
            golfie = 'addImportLogDetail';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = this;
                    michal = _closure1_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    tangon = zuuluu.lastImportDuration;
                    report = michal - tangon;
                    tangon = 25;
                    if(!(report > tangon)) { _fun00012_ip = 84; continue _fun00011 }
 33:
                    oscard = zuuluu.addDetail;
                    tangon = global;
                    report = tangon.Math;
                    tangon = report.ceil;
                    report = tangon.bind(report)(michal);
                    tangon = 'ms';
                    report = report + tangon;
                    tangon = 'JS Imports';
                    tangon = oscard.bind(zuuluu)(tangon, report);
                    zuuluu['lastImportDuration'] = michal;
 84:
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[5] = report;
            report = {};
            golfie = 'markWithDelta';
            report['key'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    oscard = this;
                    michal = oscard.logs;
                    entity = oscard.logs;
                    zuuluu = entity.length;
                    entity = 1;
                    entity = zuuluu - entity;
                    michal = michal[entity];
                    report = oscard.mark;
                    golfie = null;
                    zuuluu = golfie != michal;
                    entity = undefined;
                    tangon = undefined;
                    if(!zuuluu) { _fun00014_ip = 92; continue _fun00013 }
 50:
                    zuuluu = michal.timestamp;
                    zuuluu = golfie != zuuluu;
                    tangon = undefined;
                    if(!zuuluu) { _fun00014_ip = 92; continue _fun00013 }
 65:
                    zuuluu = global;
                    golfie = zuuluu.Date;
                    zuuluu = golfie.now;
                    zuuluu = zuuluu.bind(golfie)();
                    michal = michal.timestamp;
                    tangon = zuuluu - michal;
 92:
                    zuuluu = argFoo;
                    michal = argBar;
                    michal = report.bind(oscard)(zuuluu, michal, tangon);
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[6] = report;
            report = {};
            golfie = 'markAt';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    option = argBaz;
                    golfie = this;
                    entity = golfie.isTracing;
                    if(!entity) { _fun00016_ip = 178; continue _fun00015 }
 18:
                    entity = golfie.logs;
                    entity = entity.length;
                    report = 0;
                    entity = report < entity;
                    oscard = null;
                    michal = 0;
                    tangon = 0;
                    if(!entity) { _fun00016_ip = 92; continue _fun00015 }
 44:
                    entity = golfie.logs;
                    entity = entity[michal];
                    entity = entity.timestamp;
                    if(!(oscard != entity)) { _fun00016_ip = 71; continue _fun00015 }
 64:
                    tangon = michal;
                    if(!(!(entity > option))) { _fun00016_ip = 92; continue _fun00015 }
 71:
                    michal = michal + 1;
                    entity = golfie.logs;
                    entity = entity.length;
                    tangon = michal;
                    if(tangon < entity) { _fun00016_ip = 44; continue _fun00015 }
 92:
                    zuuluu = golfie.logs;
                    michal = zuuluu.splice;
                    entity = {};
                    verify = argFoo;
                    entity['emoji'] = verify;
                    verify = argBar;
                    entity['log'] = verify;
                    entity['timestamp'] = option;
                    golfie = golfie.logs;
                    option = golfie[tangon];
                    verify = oscard == option;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 152; continue _fun00015 }
 146:
                    golfie = option.prefix;
 152:
                    option = oscard != golfie;
                    oscard = '';
                    if(!option) { _fun00016_ip = 166; continue _fun00015 }
 163:
                    oscard = golfie;
 166:
                    entity['prefix'] = oscard;
                    entity = michal.bind(zuuluu)(tangon, report, entity);
 178:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[7] = report;
            report = {};
            golfie = 'addDetail';
            report['key'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = this;
                    entity = tangon.isTracing;
                    if(!entity) { _fun00018_ip = 121; continue _fun00017 }
 12:
                    zuuluu = tangon.logs;
                    michal = zuuluu.push;
                    entity = {};
                    oscard = tangon.logs;
                    report = tangon.logs;
                    golfie = report.length;
                    report = 1;
                    report = golfie - report;
                    report = oscard[report];
                    report = report.emoji;
                    entity['emoji'] = report;
                    tangon = tangon.prefix;
                    entity['prefix'] = tangon;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    option = tangon.concat;
                    golfie = '  ↪ ';
                    oscard = argFoo;
                    report = ' ';
                    tangon = argBar;
                    tangon = option.bind(golfie)(oscard, report, tangon);
                    entity['log'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[8] = report;
            report = {};
            golfie = 'time';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscard = argFoo;
                    option = argBar;
                    tangon = argBaz;
                    report = this;
                    entity = report.isTracing;
                    if(entity) { _fun00020_ip = 29; continue _fun00019 }
 21:
                    entity = undefined;
                    entity = tangon.bind(entity)();
                    return entity;
 29:
                    zuuluu = report.prefix;
                    golfie = report.mark;
                    michal = global;
                    entity = michal.HermesInternal;
                    verify = entity.concat;
                    entity = 'Start ';
                    entity = verify.bind(entity)(option);
                    entity = golfie.bind(report)(oscard, entity);
                    golfie = report.prefix;
                    entity = '| ';
                    entity = golfie + entity;
                    report['prefix'] = entity;
                    golfie = michal.Date;
                    entity = golfie.now;
                    golfie = entity.bind(golfie)();
                    entity = undefined;
                    entity = tangon.bind(entity)();
                    verify = michal.Date;
                    tangon = verify.now;
                    tangon = tangon.bind(verify)();
                    tangon = tangon - golfie;
                    report['prefix'] = zuuluu;
                    zuuluu = report.mark;
                    michal = michal.HermesInternal;
                    golfie = michal.concat;
                    michal = 'Finish ';
                    michal = golfie.bind(michal)(option);
                    michal = zuuluu.bind(report)(oscard, michal, tangon);
                    return entity;
                }
            };
            report['value'] = golfie;
            michal[9] = report;
            report = {};
            golfie = 'timeAsync';
            report['key'] = golfie;
            option = _closure1_slot1;
            entity = undefined;
            golfie = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        StartGenerator();
                        golfie = argFoo;
                        verify = argBar;
                        tangon = argBaz;
                        oscard = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00022_ip = 167; continue _fun00021 }
 22:
                        michal = oscard.isTracing;
                        if(michal) { _fun00022_ip = 40; continue _fun00021 }
 31:
                        michal = undefined;
                        michal = tangon.bind(michal)();
                        return michal;
 40:
                        report = oscard.mark;
                        zuuluu = global;
                        michal = zuuluu.HermesInternal;
                        option = michal.concat;
                        michal = 'Start ';
                        michal = option.bind(michal)(verify);
                        michal = report.bind(oscard)(golfie, michal);
                        report = zuuluu.Date;
                        michal = report.now;
                        report = michal.bind(report)();
                        michal = undefined;
                        michal = tangon.bind(michal)();
                        SaveGenerator(address=101);
 99:
                        return michal;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00022_ip = 164; continue _fun00021 }
 107:
                        option = zuuluu.Date;
                        tangon = option.now;
                        tangon = tangon.bind(option)();
                        report = tangon - report;
                        tangon = oscard.mark;
                        zuuluu = zuuluu.HermesInternal;
                        option = zuuluu.concat;
                        zuuluu = 'Finish ';
                        zuuluu = option.bind(zuuluu)(verify);
                        zuuluu = tangon.bind(oscard)(golfie, zuuluu, report);
                        return michal;
 164:
                        return michal;
 167:
                        return entity;
                    }
                };
                return entity;
            };
            golfie = option.bind(entity)(golfie);
            var _closure2_slot0 = golfie;
            golfie = function() { // Original name: timeAsync
                entity = undefined;
                tangon = _closure2_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report['value'] = golfie;
            michal[10] = report;
            report = {};
            golfie = 'setServerTrace';
            report['key'] = golfie;
            oscard = function(argFoo) { // Original name: value
                entity = this;
                michal = entity.logGroups;
                entity = 0;
                michal = michal[entity];
                entity = argFoo;
                michal['serverTrace'] = entity;
                entity = undefined;
                return entity;
            };
            report['value'] = oscard;
            michal[11] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        michal = michal.bind(entity)();
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        backup = tangon;
        michal = new backup[michal](foxtra);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 3;
        report = report[tangon];
        tangon = argBar;
        oscard = tangon.bind(entity)(report);
        report = oscard.fileFinishedImporting;
        tangon = '../discord_common/js/shared/AppStartPerformance.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();