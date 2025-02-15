// discord_common/js/shared/AppStartPerformance.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscar = argFoo;
        options = argBaz;
        zulu = argFred;
        report = argPlugh;
        var _closure1_slot0 = oscar;
        tango = global;
        offset = tango.Object;
        verify = offset.defineProperty;
        golf = {};
        entity = true;
        golf['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zulu, entity, golf);
        entity = 0;
        golf = report[entity];
        entity = undefined;
        golf = options.bind(entity)(golf);
        var _closure1_slot1 = golf;
        golf = 1;
        golf = report[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot2 = golf;
        golf = 2;
        golf = report[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot3 = golf;
        golf = oscar.__getTotalRequireTime;
        oscar = null;
        if(!(oscar != golf)) { _fun00002_ip = 118; continue _fun00001 }
 111:
        oscar = function() {
            mike = _closure1_slot0;
            entity = mike.__getTotalRequireTime;
            entity = entity.bind(mike)();
            return entity;
        };
        _fun00002_ip = 123; continue _fun00001;
 118:
        oscar = function() {
            entity = 0;
            return entity;
        };
 123:
        var _closure1_slot4 = oscar;
        tango = tango.performance;
        oscar = 'undefined';
        tango = typeof tango;
        tango = oscar !== tango;
        var _closure1_slot5 = tango;
        mike = function() {
            tango = _closure1_slot3;
            zulu = function() { // Original name: AppStartPerformance
                zulu = this;
                tango = _closure1_slot2;
                mike = _closure2_slot1;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                mike = true;
                zulu['isTracing_'] = mike;
                mike = global;
                report = mike.Date;
                tango = report.now;
                report = tango.bind(report)();
                tango = 15000;
                tango = report + tango;
                zulu['endTime_'] = tango;
                tango = 0;
                zulu['lastImportDuration'] = tango;
                report = {};
                report['index'] = tango;
                oscar = mike.Date;
                mike = oscar.now;
                mike = mike.bind(oscar)();
                report['timestamp'] = mike;
                mike = new Array(0);
                report['logs'] = mike;
                mike = new Array(0);
                report['nativeLogs'] = mike;
                mike = new Array(1);
                mike[0] = report;
                zulu['logGroups'] = mike;
                mike = zulu.logGroups;
                mike = mike[tango];
                mike = mike.logs;
                zulu['logs'] = mike;
                mike = '';
                zulu['prefix'] = mike;
                return entity;
            };
            var _closure2_slot1 = zulu;
            report = {};
            mike = 'isTracing';
            report['key'] = mike;
            mike = function() { // Original name: get
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = this;
                    entity = _closure1_slot5;
                    mike = !entity;
                    if(!entity) { _fun00004_ip = 25; continue _fun00003 }
 16:
                    entity = tango.isTracing_;
                    mike = !entity;
 25:
                    entity = !mike;
                    if(mike) { _fun00004_ip = 77; continue _fun00003 }
 31:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    mike = tango.endTime_;
                    zulu = zulu > mike;
                    mike = !zulu;
                    if(!zulu) { _fun00004_ip = 74; continue _fun00003 }
 64:
                    zulu = false;
                    tango['isTracing_'] = zulu;
                    mike = false;
 74:
                    entity = mike;
 77:
                    return entity;
                }
            };
            report['get'] = mike;
            mike = new Array(12);
            mike[0] = report;
            report = {};
            golf = 'endTime';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = this;
                entity = entity.endTime_;
                return entity;
            };
            report['get'] = golf;
            golf = function(argFoo) { // Original name: set
                mike = this;
                entity = argFoo;
                mike['endTime_'] = entity;
                entity = true;
                mike['isTracing_'] = entity;
                entity = undefined;
                return entity;
            };
            report['set'] = golf;
            mike[1] = report;
            report = {};
            golf = 'resumeTracing';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = this;
                    entity = mike.isTracing;
                    if(entity) { _fun00006_ip = 110; continue _fun00005 }
 12:
                    tango = mike.logGroups;
                    zulu = tango.unshift;
                    entity = {};
                    report = mike.logGroups;
                    report = report.length;
                    entity['index'] = report;
                    report = global;
                    oscar = report.Date;
                    report = oscar.now;
                    report = report.bind(oscar)();
                    entity['timestamp'] = report;
                    report = new Array(0);
                    entity['logs'] = report;
                    report = new Array(0);
                    entity['nativeLogs'] = report;
                    entity = zulu.bind(tango)(entity);
                    zulu = mike.logGroups;
                    entity = 0;
                    entity = zulu[entity];
                    entity = entity.logs;
                    mike['logs'] = entity;
 110:
                    entity = global;
                    zulu = entity.Date;
                    entity = zulu.now;
                    zulu = entity.bind(zulu)();
                    entity = 10000;
                    entity = zulu + entity;
                    mike['endTime'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            mike[2] = report;
            report = {};
            golf = 'mark';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = this;
                    entity = mike.isTracing;
                    if(!entity) { _fun00008_ip = 117; continue _fun00007 }
 12:
                    tango = mike.logs;
                    zulu = tango.push;
                    entity = {};
                    report = argFoo;
                    entity['emoji'] = report;
                    options = mike.prefix;
                    report = global;
                    oscar = report.HermesInternal;
                    golf = oscar.concat;
                    oscar = '';
                    oscar = golf.bind(oscar)(options);
                    entity['prefix'] = oscar;
                    oscar = argBar;
                    entity['log'] = oscar;
                    oscar = argBaz;
                    entity['delta'] = oscar;
                    oscar = report.Date;
                    report = oscar.now;
                    report = report.bind(oscar)();
                    entity['timestamp'] = report;
                    entity = zulu.bind(tango)(entity);
                    entity = mike.addImportLogDetail;
                    entity = entity.bind(mike)();
 117:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            mike[3] = report;
            report = {};
            golf = 'markAndLog';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = argFoo;
                    report = argBaz;
                    mike = this;
                    entity = zulu.log;
                    entity = entity.bind(zulu)(report);
                    entity = mike.isTracing;
                    if(!entity) { _fun00010_ip = 111; continue _fun00009 }
 29:
                    tango = mike.logs;
                    zulu = tango.push;
                    entity = {};
                    oscar = argBar;
                    entity['emoji'] = oscar;
                    oscar = mike.prefix;
                    entity['prefix'] = oscar;
                    entity['log'] = report;
                    report = argCorge;
                    entity['delta'] = report;
                    report = global;
                    oscar = report.Date;
                    report = oscar.now;
                    report = report.bind(oscar)();
                    entity['timestamp'] = report;
                    entity = zulu.bind(tango)(entity);
                    entity = mike.addImportLogDetail;
                    entity = entity.bind(mike)();
 111:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            mike[4] = report;
            report = {};
            golf = 'addImportLogDetail';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = this;
                    mike = _closure1_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    tango = zulu.lastImportDuration;
                    report = mike - tango;
                    tango = 25;
                    if(!(report > tango)) { _fun00012_ip = 84; continue _fun00011 }
 33:
                    oscar = zulu.addDetail;
                    tango = global;
                    report = tango.Math;
                    tango = report.ceil;
                    report = tango.bind(report)(mike);
                    tango = 'ms';
                    report = report + tango;
                    tango = 'JS Imports';
                    tango = oscar.bind(zulu)(tango, report);
                    zulu['lastImportDuration'] = mike;
 84:
                    return entity;
                }
            };
            report['value'] = golf;
            mike[5] = report;
            report = {};
            golf = 'markWithDelta';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    oscar = this;
                    mike = oscar.logs;
                    entity = oscar.logs;
                    zulu = entity.length;
                    entity = 1;
                    entity = zulu - entity;
                    mike = mike[entity];
                    report = oscar.mark;
                    golf = null;
                    zulu = golf != mike;
                    entity = undefined;
                    tango = undefined;
                    if(!zulu) { _fun00014_ip = 92; continue _fun00013 }
 50:
                    zulu = mike.timestamp;
                    zulu = golf != zulu;
                    tango = undefined;
                    if(!zulu) { _fun00014_ip = 92; continue _fun00013 }
 65:
                    zulu = global;
                    golf = zulu.Date;
                    zulu = golf.now;
                    zulu = zulu.bind(golf)();
                    mike = mike.timestamp;
                    tango = zulu - mike;
 92:
                    zulu = argFoo;
                    mike = argBar;
                    mike = report.bind(oscar)(zulu, mike, tango);
                    return entity;
                }
            };
            report['value'] = golf;
            mike[6] = report;
            report = {};
            golf = 'markAt';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    options = argBaz;
                    golf = this;
                    entity = golf.isTracing;
                    if(!entity) { _fun00016_ip = 178; continue _fun00015 }
 18:
                    entity = golf.logs;
                    entity = entity.length;
                    report = 0;
                    entity = report < entity;
                    oscar = null;
                    mike = 0;
                    tango = 0;
                    if(!entity) { _fun00016_ip = 92; continue _fun00015 }
 44:
                    entity = golf.logs;
                    entity = entity[mike];
                    entity = entity.timestamp;
                    if(!(oscar != entity)) { _fun00016_ip = 71; continue _fun00015 }
 64:
                    tango = mike;
                    if(!(!(entity > options))) { _fun00016_ip = 92; continue _fun00015 }
 71:
                    mike = mike + 1;
                    entity = golf.logs;
                    entity = entity.length;
                    tango = mike;
                    if(tango < entity) { _fun00016_ip = 44; continue _fun00015 }
 92:
                    zulu = golf.logs;
                    mike = zulu.splice;
                    entity = {};
                    verify = argFoo;
                    entity['emoji'] = verify;
                    verify = argBar;
                    entity['log'] = verify;
                    entity['timestamp'] = options;
                    golf = golf.logs;
                    options = golf[tango];
                    verify = oscar == options;
                    golf = undefined;
                    if(verify) { _fun00016_ip = 152; continue _fun00015 }
 146:
                    golf = options.prefix;
 152:
                    options = oscar != golf;
                    oscar = '';
                    if(!options) { _fun00016_ip = 166; continue _fun00015 }
 163:
                    oscar = golf;
 166:
                    entity['prefix'] = oscar;
                    entity = mike.bind(zulu)(tango, report, entity);
 178:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            mike[7] = report;
            report = {};
            golf = 'addDetail';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tango = this;
                    entity = tango.isTracing;
                    if(!entity) { _fun00018_ip = 121; continue _fun00017 }
 12:
                    zulu = tango.logs;
                    mike = zulu.push;
                    entity = {};
                    oscar = tango.logs;
                    report = tango.logs;
                    golf = report.length;
                    report = 1;
                    report = golf - report;
                    report = oscar[report];
                    report = report.emoji;
                    entity['emoji'] = report;
                    tango = tango.prefix;
                    entity['prefix'] = tango;
                    tango = global;
                    tango = tango.HermesInternal;
                    options = tango.concat;
                    golf = '  ↪ ';
                    oscar = argFoo;
                    report = ' ';
                    tango = argBar;
                    tango = options.bind(golf)(oscar, report, tango);
                    entity['log'] = tango;
                    entity = mike.bind(zulu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            mike[8] = report;
            report = {};
            golf = 'time';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscar = argFoo;
                    options = argBar;
                    tango = argBaz;
                    report = this;
                    entity = report.isTracing;
                    if(entity) { _fun00020_ip = 29; continue _fun00019 }
 21:
                    entity = undefined;
                    entity = tango.bind(entity)();
                    return entity;
 29:
                    zulu = report.prefix;
                    golf = report.mark;
                    mike = global;
                    entity = mike.HermesInternal;
                    verify = entity.concat;
                    entity = 'Start ';
                    entity = verify.bind(entity)(options);
                    entity = golf.bind(report)(oscar, entity);
                    golf = report.prefix;
                    entity = '| ';
                    entity = golf + entity;
                    report['prefix'] = entity;
                    golf = mike.Date;
                    entity = golf.now;
                    golf = entity.bind(golf)();
                    entity = undefined;
                    entity = tango.bind(entity)();
                    verify = mike.Date;
                    tango = verify.now;
                    tango = tango.bind(verify)();
                    tango = tango - golf;
                    report['prefix'] = zulu;
                    zulu = report.mark;
                    mike = mike.HermesInternal;
                    golf = mike.concat;
                    mike = 'Finish ';
                    mike = golf.bind(mike)(options);
                    mike = zulu.bind(report)(oscar, mike, tango);
                    return entity;
                }
            };
            report['value'] = golf;
            mike[9] = report;
            report = {};
            golf = 'timeAsync';
            report['key'] = golf;
            options = _closure1_slot1;
            entity = undefined;
            golf = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        StartGenerator();
                        golf = argFoo;
                        verify = argBar;
                        tango = argBaz;
                        oscar = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00022_ip = 167; continue _fun00021 }
 22:
                        mike = oscar.isTracing;
                        if(mike) { _fun00022_ip = 40; continue _fun00021 }
 31:
                        mike = undefined;
                        mike = tango.bind(mike)();
                        return mike;
 40:
                        report = oscar.mark;
                        zulu = global;
                        mike = zulu.HermesInternal;
                        options = mike.concat;
                        mike = 'Start ';
                        mike = options.bind(mike)(verify);
                        mike = report.bind(oscar)(golf, mike);
                        report = zulu.Date;
                        mike = report.now;
                        report = mike.bind(report)();
                        mike = undefined;
                        mike = tango.bind(mike)();
                        SaveGenerator(address=101);
 99:
                        return mike;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00022_ip = 164; continue _fun00021 }
 107:
                        options = zulu.Date;
                        tango = options.now;
                        tango = tango.bind(options)();
                        report = tango - report;
                        tango = oscar.mark;
                        zulu = zulu.HermesInternal;
                        options = zulu.concat;
                        zulu = 'Finish ';
                        zulu = options.bind(zulu)(verify);
                        zulu = tango.bind(oscar)(golf, zulu, report);
                        return mike;
 164:
                        return mike;
 167:
                        return entity;
                    }
                };
                return entity;
            };
            golf = options.bind(entity)(golf);
            var _closure2_slot0 = golf;
            golf = function() { // Original name: timeAsync
                entity = undefined;
                tango = _closure2_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = golf;
            mike[10] = report;
            report = {};
            golf = 'setServerTrace';
            report['key'] = golf;
            oscar = function(argFoo) { // Original name: value
                entity = this;
                mike = entity.logGroups;
                entity = 0;
                mike = mike[entity];
                entity = argFoo;
                mike['serverTrace'] = entity;
                entity = undefined;
                return entity;
            };
            report['value'] = oscar;
            mike[11] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        mike = mike.bind(entity)();
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        backup = tango;
        mike = new backup[mike](foxtrot);
        mike = mike instanceof Object ? mike : tango;
        tango = 3;
        report = report[tango];
        tango = argBar;
        oscar = tango.bind(entity)(report);
        report = oscar.fileFinishedImporting;
        tango = '../discord_common/js/shared/AppStartPerformance.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();