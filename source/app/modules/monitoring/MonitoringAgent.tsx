// app/modules/monitoring/MonitoringAgent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot4 = report;
    options = mike.Set;
    mike = options.prototype;
    report = Object.create(mike, {constructor: {value: options}});
    foxtrot = ['darwin', 'linux', 'win32', 'ios', 'android'];
    backup = report;
    mike = new backup[options](foxtrot, romeo);
    mike = mike instanceof Object ? mike : report;
    var _closure1_slot5 = mike;
    mike = {};
    report = 'count';
    mike['COUNT'] = report;
    report = 'distribution';
    mike['DISTRIBUTION'] = report;
    var _closure1_slot6 = mike;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: MonitoringAgent
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                oscar = _closure1_slot2;
                zulu = _closure2_slot0;
                entity = undefined;
                zulu = oscar.bind(entity)(report, zulu);
                zulu = new Array(0);
                report['_metrics'] = zulu;
                zulu = global;
                golf = zulu.setInterval;
                oscar = function() {
                    mike = _closure3_slot0;
                    entity = mike._flush;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                zulu = 120000;
                zulu = golf.bind(entity)(oscar, zulu);
                report['_intervalId'] = zulu;
                golf = _closure1_slot0;
                options = _closure1_slot1;
                zulu = 6;
                zulu = options[zulu];
                report = golf.bind(entity)(zulu);
                zulu = report.NativeModules;
                report = report.NativeEventEmitter;
                oscar = 3;
                oscar = options[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.isAndroid;
                oscar = oscar.bind(golf)();
                if(oscar) { _fun00002_ip = 136; continue _fun00001 }
 128:
                zulu = zulu.MetricMonitor;
                _fun00002_ip = 161; continue _fun00001;
 136:
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                tango = 7;
                tango = golf[tango];
                tango = oscar.bind(entity)(tango);
                zulu = tango.default;
 161:
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                yankee = tango;
                offset = zulu;
                zulu = new yankee[report](offset, verify);
                report = zulu instanceof Object ? zulu : tango;
                tango = report.addListener;
                zulu = 'logMetric';
                mike = function(argFoo) {
                    tango = _closure3_slot0;
                    zulu = tango.increment;
                    mike = argFoo;
                    entity = false;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_getMetricWithDefaults';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                mike = entity.name;
                oscar = entity.tags;
                entity = {};
                entity['name'] = mike;
                mike = argBar;
                entity['type'] = mike;
                report = _closure1_slot0;
                golf = _closure1_slot1;
                mike = 8;
                mike = golf[mike];
                golf = undefined;
                report = report.bind(golf)(mike);
                mike = report.getGlobalTagsArray;
                mike = mike.bind(report)();
                entity['tags'] = mike;
                var _closure3_slot0 = entity;
                mike = null;
                if(!(mike != oscar)) { _fun00004_ip = 94; continue _fun00003 }
 79:
                report = oscar.forEach;
                zulu = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.tags;
                    mike = zulu.push;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                zulu = report.bind(oscar)(zulu);
 94:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                oscar = 3;
                zulu = zulu[oscar];
                report = report.bind(golf)(zulu);
                zulu = report.isWeb;
                zulu = zulu.bind(report)();
                verify = 'web';
                if(zulu) { _fun00004_ip = 183; continue _fun00003 }
 131:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[oscar];
                report = report.bind(golf)(zulu);
                zulu = report.getPlatformName;
                report = zulu.bind(report)();
                oscar = _closure1_slot5;
                zulu = oscar.has;
                oscar = zulu.bind(oscar)(report);
                zulu = null;
                if(!oscar) { _fun00004_ip = 180; continue _fun00003 }
 177:
                zulu = report;
 180:
                verify = zulu;
 183:
                if(!(mike != verify)) { _fun00004_ip = 227; continue _fun00003 }
 187:
                oscar = entity.tags;
                report = oscar.push;
                zulu = global;
                zulu = zulu.HermesInternal;
                options = zulu.concat;
                zulu = 'platform:';
                zulu = options.bind(zulu)(verify);
                zulu = report.bind(oscar)(zulu);
 227:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 4;
                zulu = oscar[zulu];
                zulu = report.bind(golf)(zulu);
                zulu = zulu.CurrentReleaseChannel;
                report = mike != zulu;
                oscar = null;
                if(!report) { _fun00004_ip = 312; continue _fun00003 }
 262:
                report = _closure1_slot0;
                options = _closure1_slot1;
                tango = 5;
                tango = options[tango];
                tango = report.bind(golf)(tango);
                tango = tango.ReleaseChannelsSets;
                report = tango.ALL;
                tango = report.has;
                tango = tango.bind(report)(zulu);
                oscar = null;
                if(!tango) { _fun00004_ip = 312; continue _fun00003 }
 309:
                oscar = zulu;
 312:
                if(!(mike != oscar)) { _fun00004_ip = 356; continue _fun00003 }
 316:
                tango = entity.tags;
                zulu = tango.push;
                mike = global;
                mike = mike.HermesInternal;
                report = mike.concat;
                mike = 'release_channel:';
                mike = report.bind(mike)(oscar);
                mike = zulu.bind(tango)(mike);
 356:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'increment';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = arguments[1];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00006_ip = 14; continue _fun00005 }
 12:
                mike = false;
 14:
                oscar = zulu._getMetricWithDefaults;
                tango = _closure1_slot6;
                report = tango.COUNT;
                tango = argFoo;
                oscar = oscar.bind(zulu)(tango, report);
                report = zulu._metrics;
                tango = report.push;
                tango = tango.bind(report)(oscar);
                if(mike) { _fun00006_ip = 79; continue _fun00005 }
 61:
                tango = zulu._metrics;
                report = tango.length;
                tango = 100;
                mike = report >= tango;
 79:
                if(!mike) { _fun00006_ip = 92; continue _fun00005 }
 82:
                mike = zulu._flush;
                mike = mike.bind(zulu)();
 92:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'distribution';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = arguments[2];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
                mike = false;
 14:
                oscar = {};
                golf = zulu._getMetricWithDefaults;
                tango = _closure1_slot6;
                report = tango.DISTRIBUTION;
                tango = argFoo;
                options = golf.bind(zulu)(tango, report);
                verify = oscar;
                tango = copyDataProperties(verify, options);
                report = argBar;
                tango = 'value';
                oscar[tango] = report;
                report = zulu._metrics;
                tango = report.push;
                tango = tango.bind(report)(oscar);
                if(mike) { _fun00008_ip = 100; continue _fun00007 }
 82:
                tango = zulu._metrics;
                report = tango.length;
                tango = 100;
                mike = report >= tango;
 100:
                if(!mike) { _fun00008_ip = 113; continue _fun00007 }
 103:
                mike = zulu._flush;
                mike = mike.bind(zulu)();
 113:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_flush';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike._metrics;
                zulu = zulu.length;
                tango = 0;
                if(!(zulu > tango)) { _fun00010_ip = 193; continue _fun00009 }
 29:
                offset = mike._metrics;
                golf = new Array(0);
                yankee = golf;
                verify = 0;
                zulu = arraySpread(yankee, offset, verify);
                var _closure3_slot1 = golf;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 9;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                report = zulu.HTTP;
                tango = report.post;
                zulu = {};
                oscar = _closure1_slot4;
                oscar = oscar.METRICS_V2;
                zulu['url'] = oscar;
                oscar = {};
                oscar['metrics'] = golf;
                golf = {};
                options = global;
                options = options.process;
                options = options.env;
                options = options.BUILT_AT;
                golf['built_at'] = options;
                options = '3677';
                golf['build_number'] = options;
                oscar['client_info'] = golf;
                zulu['body'] = oscar;
                oscar = 1;
                zulu['retries'] = oscar;
                oscar = true;
                zulu['rejectWithError'] = oscar;
                tango = tango.bind(report)(zulu);
                zulu = tango.catch;
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity._metrics;
                        mike = entity.length;
                        entity = _closure3_slot1;
                        entity = entity.length;
                        mike = mike + entity;
                        entity = 100;
                        if(!(mike < entity)) { _fun00012_ip = 78; continue _fun00011 }
 38:
                        mike = _closure3_slot0;
                        golf = mike._metrics;
                        entity = new Array(0);
                        oscar = 0;
                        options = entity;
                        oscar = arraySpread(options, golf, oscar);
                        golf = _closure3_slot1;
                        options = entity;
                        zulu = arraySpread(options, golf, oscar);
                        mike['_metrics'] = entity;
 78:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
 193:
                entity = new Array(0);
                mike['_metrics'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    backup = report;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/monitoring/MonitoringAgent.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MetricType'] = mike;
    return entity;
})();