// app/modules/monitoring/MonitoringAgent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot4 = report;
    option = michal.Set;
    michal = option.prototype;
    report = Object.create(michal, {constructor: {value: option}});
    foxtra = ['darwin', 'linux', 'win32', 'ios', 'android'];
    backup = report;
    michal = new backup[option](foxtra, romeon);
    michal = michal instanceof Object ? michal : report;
    var _closure1_slot5 = michal;
    michal = {};
    report = 'count';
    michal['COUNT'] = report;
    report = 'distribution';
    michal['DISTRIBUTION'] = report;
    var _closure1_slot6 = michal;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: MonitoringAgent
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = this;
                var _closure3_slot0 = report;
                oscard = _closure1_slot2;
                zuuluu = _closure2_slot0;
                entity = undefined;
                zuuluu = oscard.bind(entity)(report, zuuluu);
                zuuluu = new Array(0);
                report['_metrics'] = zuuluu;
                zuuluu = global;
                golfie = zuuluu.setInterval;
                oscard = function() {
                    michal = _closure3_slot0;
                    entity = michal._flush;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                zuuluu = 120000;
                zuuluu = golfie.bind(entity)(oscard, zuuluu);
                report['_intervalId'] = zuuluu;
                golfie = _closure1_slot0;
                option = _closure1_slot1;
                zuuluu = 6;
                zuuluu = option[zuuluu];
                report = golfie.bind(entity)(zuuluu);
                zuuluu = report.NativeModules;
                report = report.NativeEventEmitter;
                oscard = 3;
                oscard = option[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.isAndroid;
                oscard = oscard.bind(golfie)();
                if(oscard) { _fun00002_ip = 138; continue _fun00001 }
 128:
                zuuluu = zuuluu.MetricMonitor;
                _fun00002_ip = 163; continue _fun00001;
 138:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                tangon = 7;
                tangon = golfie[tangon];
                tangon = oscard.bind(entity)(tangon);
                zuuluu = tangon.default;
 163:
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                yankee = tangon;
                offset = zuuluu;
                zuuluu = new yankee[report](offset, verify);
                report = zuuluu instanceof Object ? zuuluu : tangon;
                tangon = report.addListener;
                zuuluu = 'logMetric';
                michal = function(argFoo) {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.increment;
                    michal = argFoo;
                    entity = false;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_getMetricWithDefaults';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                michal = entity.name;
                oscard = entity.tags;
                entity = {};
                entity['name'] = michal;
                michal = argBar;
                entity['type'] = michal;
                report = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 8;
                michal = golfie[michal];
                golfie = undefined;
                report = report.bind(golfie)(michal);
                michal = report.getGlobalTagsArray;
                michal = michal.bind(report)();
                entity['tags'] = michal;
                var _closure3_slot0 = entity;
                michal = null;
                if(!(michal != oscard)) { _fun00004_ip = 94; continue _fun00003 }
 79:
                report = oscard.forEach;
                zuuluu = function(argFoo) {
                    entity = _closure3_slot0;
                    zuuluu = entity.tags;
                    michal = zuuluu.push;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu = report.bind(oscard)(zuuluu);
 94:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                oscard = 3;
                zuuluu = zuuluu[oscard];
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.isWeb;
                zuuluu = zuuluu.bind(report)();
                verify = 'web';
                if(zuuluu) { _fun00004_ip = 183; continue _fun00003 }
 131:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[oscard];
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.getPlatformName;
                report = zuuluu.bind(report)();
                oscard = _closure1_slot5;
                zuuluu = oscard.has;
                oscard = zuuluu.bind(oscard)(report);
                zuuluu = null;
                if(!oscard) { _fun00004_ip = 180; continue _fun00003 }
 177:
                zuuluu = report;
 180:
                verify = zuuluu;
 183:
                if(!(michal != verify)) { _fun00004_ip = 227; continue _fun00003 }
 187:
                oscard = entity.tags;
                report = oscard.push;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                option = zuuluu.concat;
                zuuluu = 'platform:';
                zuuluu = option.bind(zuuluu)(verify);
                zuuluu = report.bind(oscard)(zuuluu);
 227:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 4;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(golfie)(zuuluu);
                zuuluu = zuuluu.CurrentReleaseChannel;
                report = michal != zuuluu;
                oscard = null;
                if(!report) { _fun00004_ip = 312; continue _fun00003 }
 262:
                report = _closure1_slot0;
                option = _closure1_slot1;
                tangon = 5;
                tangon = option[tangon];
                tangon = report.bind(golfie)(tangon);
                tangon = tangon.ReleaseChannelsSets;
                report = tangon.ALL;
                tangon = report.has;
                tangon = tangon.bind(report)(zuuluu);
                oscard = null;
                if(!tangon) { _fun00004_ip = 312; continue _fun00003 }
 309:
                oscard = zuuluu;
 312:
                if(!(michal != oscard)) { _fun00004_ip = 356; continue _fun00003 }
 316:
                tangon = entity.tags;
                zuuluu = tangon.push;
                michal = global;
                michal = michal.HermesInternal;
                report = michal.concat;
                michal = 'release_channel:';
                michal = report.bind(michal)(oscard);
                michal = zuuluu.bind(tangon)(michal);
 356:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'increment';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00006_ip = 14; continue _fun00005 }
 12:
                michal = false;
 14:
                oscard = zuuluu._getMetricWithDefaults;
                tangon = _closure1_slot6;
                report = tangon.COUNT;
                tangon = argFoo;
                oscard = oscard.bind(zuuluu)(tangon, report);
                report = zuuluu._metrics;
                tangon = report.push;
                tangon = tangon.bind(report)(oscard);
                if(michal) { _fun00006_ip = 79; continue _fun00005 }
 61:
                tangon = zuuluu._metrics;
                report = tangon.length;
                tangon = 100;
                michal = report >= tangon;
 79:
                if(!michal) { _fun00006_ip = 92; continue _fun00005 }
 82:
                michal = zuuluu._flush;
                michal = michal.bind(zuuluu)();
 92:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'distribution';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = arguments[2];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
                michal = false;
 14:
                oscard = {};
                golfie = zuuluu._getMetricWithDefaults;
                tangon = _closure1_slot6;
                report = tangon.DISTRIBUTION;
                tangon = argFoo;
                option = golfie.bind(zuuluu)(tangon, report);
                verify = oscard;
                tangon = copyDataProperties(verify, option);
                report = argBar;
                tangon = 'value';
                oscard[tangon] = report;
                report = zuuluu._metrics;
                tangon = report.push;
                tangon = tangon.bind(report)(oscard);
                if(michal) { _fun00008_ip = 100; continue _fun00007 }
 82:
                tangon = zuuluu._metrics;
                report = tangon.length;
                tangon = 100;
                michal = report >= tangon;
 100:
                if(!michal) { _fun00008_ip = 113; continue _fun00007 }
 103:
                michal = zuuluu._flush;
                michal = michal.bind(zuuluu)();
 113:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_flush';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal._metrics;
                zuuluu = zuuluu.length;
                tangon = 0;
                if(!(zuuluu > tangon)) { _fun00010_ip = 169; continue _fun00009 }
 29:
                verify = michal._metrics;
                golfie = new Array(0);
                offset = golfie;
                option = 0;
                zuuluu = arraySpread(offset, verify, option);
                var _closure3_slot1 = golfie;
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 9;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                report = zuuluu.HTTP;
                tangon = report.post;
                zuuluu = {};
                oscard = _closure1_slot4;
                oscard = oscard.METRICS_V2;
                zuuluu['url'] = oscard;
                oscard = {};
                oscard['metrics'] = golfie;
                golfie = {'built_at': '1746681505144', 'build_number': '4034'};
                oscard['client_info'] = golfie;
                zuuluu['body'] = oscard;
                oscard = 1;
                zuuluu['retries'] = oscard;
                oscard = true;
                zuuluu['rejectWithError'] = oscard;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.catch;
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity._metrics;
                        michal = entity.length;
                        entity = _closure3_slot1;
                        entity = entity.length;
                        michal = michal + entity;
                        entity = 100;
                        if(!(michal < entity)) { _fun00012_ip = 78; continue _fun00011 }
 38:
                        michal = _closure3_slot0;
                        golfie = michal._metrics;
                        entity = new Array(0);
                        oscard = 0;
                        option = entity;
                        oscard = arraySpread(option, golfie, oscard);
                        golfie = _closure3_slot1;
                        option = entity;
                        zuuluu = arraySpread(option, golfie, oscard);
                        michal['_metrics'] = entity;
 78:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
 169:
                entity = new Array(0);
                michal['_metrics'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    backup = report;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/monitoring/MonitoringAgent.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['MetricType'] = michal;
    return entity;
})();