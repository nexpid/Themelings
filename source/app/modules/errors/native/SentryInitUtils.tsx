// app/modules/errors/native/SentryInitUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar) { // Original name: filterError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            entity = null;
            zuuluu = entity == tangon;
            report = undefined;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 25; continue _fun00001 }
 19:
            golfie = tangon.originalException;
 25:
            zuuluu = entity == golfie;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 39; continue _fun00001 }
 34:
            oscard = golfie.status;
 39:
            if(!oscard) { _fun00002_ip = 57; continue _fun00001 }
 42:
            zuuluu = 400;
            oscard = oscard >= zuuluu;
            zuuluu = true;
            if(oscard) { _fun00002_ip = 116; continue _fun00001 }
 57:
            option = entity == golfie;
            oscard = undefined;
            if(option) { _fun00002_ip = 72; continue _fun00001 }
 66:
            oscard = golfie.captchaFields;
 72:
            oscard = entity != oscard;
            option = null;
            if(!oscard) { _fun00002_ip = 98; continue _fun00001 }
 81:
            verify = entity == golfie;
            oscard = undefined;
            if(verify) { _fun00002_ip = 95; continue _fun00001 }
 90:
            oscard = golfie.code;
 95:
            option = oscard;
 98:
            zuuluu = false;
            if(!option) { _fun00002_ip = 116; continue _fun00001 }
 103:
            oscard = 0;
            oscard = option < oscard;
            zuuluu = false;
            if(!oscard) { _fun00002_ip = 116; continue _fun00001 }
 114:
            zuuluu = true;
 116:
            if(zuuluu) { _fun00002_ip = 735; continue _fun00001 }
 122:
            oscard = entity == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 137; continue _fun00001 }
 131:
            zuuluu = tangon.originalException;
 137:
            tangon = entity == zuuluu;
            oscard = undefined;
            if(tangon) { _fun00002_ip = 166; continue _fun00001 }
 146:
            zuuluu = zuuluu.err;
            tangon = entity == zuuluu;
            oscard = undefined;
            if(tangon) { _fun00002_ip = 166; continue _fun00001 }
 161:
            oscard = zuuluu.code;
 166:
            tangon = 'ABORTED';
            zuuluu = false;
            if(!(tangon === oscard)) { _fun00002_ip = 180; continue _fun00001 }
 178:
            zuuluu = true;
 180:
            if(zuuluu) { _fun00002_ip = 735; continue _fun00001 }
 186:
            option = _closure1_slot9;
            golfie = option.info;
            oscard = {};
            oscard['event'] = michal;
            oscard['hint'] = report;
            tangon = 'Crash';
            tangon = golfie.bind(option)(tangon, oscard);
            oscard = michal.level;
            tangon = 'fatal';
            if(!(tangon !== oscard)) { _fun00002_ip = 257; continue _fun00001 }
 237:
            golfie = michal.level;
            oscard = 'error';
            tangon = michal;
            if(!(oscard === golfie)) { _fun00002_ip = 672; continue _fun00001 }
 257:
            option = michal.level;
            golfie = 1;
            oscard = 'error';
            if(!(oscard === option)) { _fun00002_ip = 284; continue _fun00001 }
 274:
            golfie = 0.01;
 284:
            oscard = _closure1_slot12;
            if(oscard) { _fun00002_ip = 308; continue _fun00001 }
 291:
            oscard = _closure1_slot17;
            oscard = oscard.bind(report)(golfie);
            tangon = undefined;
            if(!oscard) { _fun00002_ip = 672; continue _fun00001 }
 308:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            oscard = 5;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.getHistory;
            oscard = oscard.bind(golfie)();
            offset = oscard.location;
            golfie = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            verify = golfie.bind(report)(oscard);
            option = verify.track;
            oscard = _closure1_slot5;
            golfie = oscard.APP_CRASHED;
            oscard = {};
            offset = offset.pathname;
            oscard['path'] = offset;
            oscard['extra'] = report;
            offset = _closure1_slot15;
            offset = offset.bind(report)(michal);
            oscard['error_message'] = offset;
            offset = michal.level;
            oscard['error_level'] = offset;
            offset = _closure1_slot16;
            offset = offset.bind(report)(michal);
            oscard['error_stack'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            oscard = michal.tags;
            option = entity == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 458; continue _fun00001 }
 452:
            golfie = oscard.event.origin;
 458:
            oscard = 'javascript';
            if(!(oscard !== golfie)) { _fun00002_ip = 500; continue _fun00001 }
 466:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            oscard = 7;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.AppCrashedReasons;
            romeon = oscard.UNHANDLED_NATIVE_ERROR;
            _fun00002_ip = 532; continue _fun00001;
 500:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            oscard = 7;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.AppCrashedReasons;
            romeon = oscard.UNHANDLED_JS_ERROR;
 532:
            golfie = _closure1_slot1;
            yankee = _closure1_slot3;
            oscard = 8;
            oscard = yankee[oscard];
            verify = golfie.bind(report)(oscard);
            option = verify.increment;
            golfie = {};
            offset = _closure1_slot0;
            oscard = 9;
            oscard = yankee[oscard];
            oscard = offset.bind(report)(oscard);
            oscard = oscard.MetricEvents;
            oscard = oscard.APP_CRASHED;
            golfie['name'] = oscard;
            offset = global;
            oscard = offset.HermesInternal;
            yankee = oscard.concat;
            oscard = 'reason:';
            yankee = yankee.bind(oscard)(romeon);
            oscard = new Array(2);
            oscard[0] = yankee;
            romeon = michal.level;
            offset = offset.HermesInternal;
            yankee = offset.concat;
            offset = 'level:';
            offset = yankee.bind(offset)(romeon);
            oscard[1] = offset;
            golfie['tags'] = oscard;
            oscard = true;
            oscard = option.bind(verify)(golfie, oscard);
            tangon = michal;
 672:
            tangon = !tangon;
            tangon = _closure1_slot11;
            golfie = michal.level;
            oscard = 'error';
            if(!(oscard === golfie)) { _fun00002_ip = 703; continue _fun00001 }
 693:
            tangon = 0.005;
 703:
            oscard = _closure1_slot12;
            if(oscard) { _fun00002_ip = 733; continue _fun00001 }
 710:
            oscard = _closure1_slot13;
            oscard = oscard.bind(report)();
            if(!oscard) { _fun00002_ip = 735; continue _fun00001 }
 721:
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.bind(report)(tangon);
            if(!zuuluu) { _fun00002_ip = 735; continue _fun00001 }
 733:
            return michal;
 735:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getCrashErrorMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = michal.exception;
            zuuluu = null;
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00004_ip = 40; continue _fun00003 }
 20:
            report = tangon.values;
            tangon = zuuluu == report;
            entity = undefined;
            if(tangon) { _fun00004_ip = 40; continue _fun00003 }
 34:
            tangon = 0;
            entity = report[tangon];
 40:
            if(!(zuuluu != entity)) { _fun00004_ip = 86; continue _fun00003 }
 44:
            oscard = entity.type;
            report = entity.value;
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            zuuluu = '';
            entity = ': ';
            entity = tangon.bind(zuuluu)(oscard, entity, report);
            _fun00004_ip = 91; continue _fun00003;
 86:
            entity = michal.message;
 91:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getErrorStackTrace
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.exception;
            michal = null;
            report = michal == tangon;
            zuuluu = undefined;
            entity = undefined;
            if(report) { _fun00006_ip = 42; continue _fun00005 }
 22:
            report = tangon.values;
            tangon = michal == report;
            entity = undefined;
            if(tangon) { _fun00006_ip = 42; continue _fun00005 }
 36:
            tangon = 0;
            entity = report[tangon];
 42:
            if(!(michal == entity)) { _fun00006_ip = 48; continue _fun00005 }
 46:
            return zuuluu;
 48:
            tangon = entity.stacktrace;
            report = michal == tangon;
            entity = undefined;
            if(report) { _fun00006_ip = 109; continue _fun00005 }
 63:
            tangon = tangon.frames;
            michal = michal == tangon;
            entity = undefined;
            if(michal) { _fun00006_ip = 109; continue _fun00005 }
 78:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                yankee = entity.filename;
                verify = entity.lineno;
                golfie = entity.colno;
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                romeon = '';
                entity = ':';
                offset = entity;
                option = entity;
                entity = romeon[zuuluu](yankee, offset, verify, option, golfie, oscard);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.join;
            michal = '\n';
            entity = zuuluu.bind(tangon)(michal);
 109:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: sample
        entity = global;
        michal = entity.Math;
        entity = michal.random;
        michal = entity.bind(michal)();
        entity = argFoo;
        entity = michal <= entity;
        return entity;
    };
    var _closure1_slot17 = entity;
    verify = global;
    offset = verify.Object;
    report = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.AnalyticEvents;
    var _closure1_slot5 = report;
    offset = tangon.Endpoints;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PRIMARY_DOMAIN;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ReactNavigationInstrumentation;
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    update = report;
    tangon = new update[tangon](echoed);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot7 = tangon;
    foxtra = verify.RegExp;
    report = verify.window;
    report = report.GLOBAL_ENV;
    romeon = report.API_VERSION;
    yankee = offset.METRICS;
    report = verify.HermesInternal;
    report = report.concat;
    backup = '/v';
    echoed = report.bind(backup)(romeon, yankee);
    yankee = foxtra.prototype;
    yankee = Object.create(yankee, {constructor: {value: foxtra}});
    romeon = 'g';
    update = yankee;
    result = romeon;
    report = new update[foxtra](echoed, result, output);
    yankee = report instanceof Object ? report : yankee;
    report = new Array(3);
    report[0] = yankee;
    kiloes = verify.RegExp;
    yankee = verify.window;
    yankee = yankee.GLOBAL_ENV;
    sizing = yankee.API_VERSION;
    foxtra = offset.METRICS_V2;
    yankee = verify.HermesInternal;
    yankee = yankee.concat;
    echoed = yankee.bind(backup)(sizing, foxtra);
    foxtra = kiloes.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: kiloes}});
    update = foxtra;
    result = romeon;
    yankee = new update[kiloes](echoed, result, output);
    yankee = yankee instanceof Object ? yankee : foxtra;
    report[1] = yankee;
    yankee = verify.RegExp;
    foxtra = verify.window;
    foxtra = foxtra.GLOBAL_ENV;
    foxtra = foxtra.API_VERSION;
    offset = offset.TRACK;
    verify = verify.HermesInternal;
    verify = verify.concat;
    echoed = verify.bind(backup)(foxtra, offset);
    offset = yankee.prototype;
    offset = Object.create(offset, {constructor: {value: yankee}});
    update = offset;
    result = romeon;
    verify = new update[yankee](echoed, result, output);
    verify = verify instanceof Object ? verify : offset;
    report[2] = verify;
    var _closure1_slot8 = report;
    report = 4;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    echoed = 'Sentry';
    update = option;
    report = new update[verify](echoed, result);
    report = report instanceof Object ? report : option;
    var _closure1_slot9 = report;
    report = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot10 = report;
    report = 0.05;
    var _closure1_slot11 = report;
    report = false;
    var _closure1_slot12 = report;
    report = 10;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.filterThrottle;
    report = {'maxBudgetMinute': 1, 'maxBudgetHour': 15};
    report = option.bind(verify)(report);
    var _closure1_slot13 = report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/errors/native/SentryInitUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['routingInstrumentation'] = tangon;
    michal = function() { // Original name: initSentry
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot4;
            zuuluu = entity.CrashReportingManager;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 37; continue _fun00007 }
 19:
            michal = zuuluu.getIsUserStaffForCrashReporting;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    _closure1_slot12 = michal;
                    tangon = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getConstants;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.ReleaseChannel;
                    oscard = zuuluu.indexOf;
                    report = 'debug';
                    report = oscard.bind(zuuluu)(report);
                    golfie = -1;
                    if(!(golfie === report)) { _fun00010_ip = 665; continue _fun00009 }
 75:
                    oscard = zuuluu.indexOf;
                    report = 'developer';
                    report = oscard.bind(zuuluu)(report);
                    if(!(golfie === report)) { _fun00010_ip = 665; continue _fun00009 }
 98:
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    report = 12;
                    report = oscard[report];
                    report = option.bind(entity)(report);
                    report = report.isStable;
                    foxtra = _closure1_slot9;
                    romeon = foxtra.verbose;
                    offset = {};
                    offset['releaseChannel'] = zuuluu;
                    offset['isProductionChannel'] = report;
                    verify = 'Initialize';
                    verify = romeon.bind(foxtra)(verify, offset);
                    romeon = 13;
                    oscard = oscard[romeon];
                    option = option.bind(entity)(oscard);
                    oscard = option.isAndroid;
                    oscard = oscard.bind(option)();
                    if(!oscard) { _fun00010_ip = 238; continue _fun00009 }
 182:
                    if(!report) { _fun00010_ip = 238; continue _fun00009 }
 185:
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscard = 14;
                    oscard = verify[oscard];
                    option = option.bind(entity)(oscard);
                    oscard = option.getDevice;
                    verify = oscard.bind(option)();
                    option = verify.indexOf;
                    oscard = 'vivo';
                    oscard = option.bind(verify)(oscard);
                    if(!(golfie === oscard)) { _fun00010_ip = 665; continue _fun00009 }
 238:
                    oscard = 0.05;
                    _closure1_slot11 = oscard;
                    oscard = tangon.SentryDsn;
                    if(report) { _fun00010_ip = 274; continue _fun00009 }
 261:
                    report = 1;
                    _closure1_slot11 = report;
                    oscard = tangon.SentryAlphaBetaDsn;
 274:
                    if(!michal) { _fun00010_ip = 290; continue _fun00009 }
 277:
                    oscard = tangon.SentryStaffDsn;
                    report = 1;
                    _closure1_slot11 = report;
 290:
                    offset = _closure1_slot0;
                    verify = _closure1_slot3;
                    michal = 3;
                    report = verify[michal];
                    option = offset.bind(entity)(report);
                    golfie = option.init;
                    report = {};
                    verify = verify[romeon];
                    offset = offset.bind(entity)(verify);
                    verify = offset.isAndroid;
                    verify = verify.bind(offset)();
                    offset = 'ios';
                    if(!verify) { _fun00010_ip = 347; continue _fun00009 }
 343:
                    offset = 'android';
 347:
                    verify = '/error-reporting-proxy/';
                    verify = verify + offset;
                    report['tunnel'] = verify;
                    verify = false;
                    report['autoInitializeNativeSdk'] = verify;
                    verify = _closure1_slot14;
                    report['beforeSend'] = verify;
                    verify = '4326';
                    report['dist'] = verify;
                    report['dsn'] = oscard;
                    report['environment'] = zuuluu;
                    zuuluu = 0;
                    report['tracesSampleRate'] = zuuluu;
                    zuuluu = 1;
                    report['sampleRate'] = zuuluu;
                    zuuluu = _closure1_slot10;
                    report['ignoreErrors'] = zuuluu;
                    zuuluu = 'discord_android@289.8.0-2+289208';
                    report['release'] = zuuluu;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    offset = oscard[michal];
                    offset = zuuluu.bind(entity)(offset);
                    romeon = offset.ReactNativeTracing;
                    offset = {};
                    foxtra = _closure1_slot7;
                    offset['routingInstrumentation'] = foxtra;
                    foxtra = _closure1_slot6;
                    yankee = new Array(1);
                    yankee[0] = foxtra;
                    offset['tracePropagationTargets'] = yankee;
                    yankee = function(argFoo) { // Original name: shouldCreateSpanForRequest
                        zuuluu = _closure1_slot8;
                        michal = zuuluu.some;
                        entity = argFoo;
                        entity = entity.match;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    offset['shouldCreateSpanForRequest'] = yankee;
                    yankee = romeon.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeon}});
                    sizing = yankee;
                    kiloes = offset;
                    offset = new sizing[romeon](kiloes, backup);
                    yankee = offset instanceof Object ? offset : yankee;
                    offset = new Array(1);
                    offset[0] = yankee;
                    report['integrations'] = offset;
                    report = golfie.bind(option)(report);
                    report = oscard[michal];
                    option = zuuluu.bind(entity)(report);
                    golfie = option.setTag;
                    report = 'buildNumber';
                    report = golfie.bind(option)(report, verify);
                    report = oscard[michal];
                    option = zuuluu.bind(entity)(report);
                    golfie = option.setTag;
                    report = tangon.Version;
                    tangon = 'appVersion';
                    tangon = golfie.bind(option)(tangon, report);
                    michal = oscard[michal];
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.setTag;
                    michal = 15;
                    michal = oscard[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.DesignIds;
                    oscard = michal.DESIGN_TABS_IA;
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = '';
                    zuuluu = zuuluu.bind(michal)(oscard);
                    michal = 'design_id';
                    michal = tangon.bind(report)(michal, zuuluu);
 665:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 37:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['initSentry'] = michal;
    return entity;
})();