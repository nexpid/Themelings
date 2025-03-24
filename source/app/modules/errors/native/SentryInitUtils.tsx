// app/modules/errors/native/SentryInitUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
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
            if(zuuluu) { _fun00002_ip = 708; continue _fun00001 }
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
            if(zuuluu) { _fun00002_ip = 708; continue _fun00001 }
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
            if(!(oscard === golfie)) { _fun00002_ip = 651; continue _fun00001 }
 257:
            golfie = _closure1_slot11;
            option = michal.level;
            oscard = 'error';
            if(!(oscard === option)) { _fun00002_ip = 279; continue _fun00001 }
 275:
            golfie = _closure1_slot12;
 279:
            oscard = _closure1_slot15;
            if(oscard) { _fun00002_ip = 303; continue _fun00001 }
 286:
            oscard = _closure1_slot18;
            oscard = oscard.bind(report)(golfie);
            tangon = undefined;
            if(!oscard) { _fun00002_ip = 651; continue _fun00001 }
 303:
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
            offset = michal.message;
            oscard['error_message'] = offset;
            offset = michal.level;
            oscard['error_level'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            oscard = michal.tags;
            option = entity == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 437; continue _fun00001 }
 431:
            golfie = oscard.event.origin;
 437:
            oscard = 'javascript';
            if(!(oscard !== golfie)) { _fun00002_ip = 479; continue _fun00001 }
 445:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            oscard = 7;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.AppCrashedReasons;
            romeon = oscard.UNHANDLED_NATIVE_ERROR;
            _fun00002_ip = 511; continue _fun00001;
 479:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            oscard = 7;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.AppCrashedReasons;
            romeon = oscard.UNHANDLED_JS_ERROR;
 511:
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
 651:
            tangon = !tangon;
            tangon = _closure1_slot13;
            golfie = michal.level;
            oscard = 'error';
            if(!(oscard === golfie)) { _fun00002_ip = 676; continue _fun00001 }
 672:
            tangon = _closure1_slot14;
 676:
            oscard = _closure1_slot15;
            if(oscard) { _fun00002_ip = 706; continue _fun00001 }
 683:
            oscard = _closure1_slot16;
            oscard = oscard.bind(report)();
            if(!oscard) { _fun00002_ip = 708; continue _fun00001 }
 694:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.bind(report)(tangon);
            if(!zuuluu) { _fun00002_ip = 708; continue _fun00001 }
 706:
            return michal;
 708:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: sample
        entity = global;
        michal = entity.Math;
        entity = michal.random;
        michal = entity.bind(michal)();
        entity = argFoo;
        entity = michal <= entity;
        return entity;
    };
    var _closure1_slot18 = entity;
    offset = global;
    option = offset.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    report = 1;
    tangon = golfie[report];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot5 = option;
    yankee = tangon.Endpoints;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PRIMARY_DOMAIN;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ReactNavigationInstrumentation;
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    source = option;
    tangon = new source[tangon](update);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot7 = tangon;
    backup = offset.RegExp;
    option = offset.window;
    option = option.GLOBAL_ENV;
    foxtra = option.API_VERSION;
    romeon = yankee.METRICS;
    option = offset.HermesInternal;
    option = option.concat;
    kiloes = '/v';
    update = option.bind(kiloes)(foxtra, romeon);
    romeon = backup.prototype;
    romeon = Object.create(romeon, {constructor: {value: backup}});
    foxtra = 'g';
    source = romeon;
    echoed = foxtra;
    option = new source[backup](update, echoed, result);
    romeon = option instanceof Object ? option : romeon;
    option = new Array(3);
    option[0] = romeon;
    sizing = offset.RegExp;
    romeon = offset.window;
    romeon = romeon.GLOBAL_ENV;
    output = romeon.API_VERSION;
    backup = yankee.METRICS_V2;
    romeon = offset.HermesInternal;
    romeon = romeon.concat;
    update = romeon.bind(kiloes)(output, backup);
    backup = sizing.prototype;
    backup = Object.create(backup, {constructor: {value: sizing}});
    source = backup;
    echoed = foxtra;
    romeon = new source[sizing](update, echoed, result);
    romeon = romeon instanceof Object ? romeon : backup;
    option[1] = romeon;
    romeon = offset.RegExp;
    backup = offset.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.API_VERSION;
    yankee = yankee.TRACK;
    offset = offset.HermesInternal;
    offset = offset.concat;
    update = offset.bind(kiloes)(backup, yankee);
    yankee = romeon.prototype;
    yankee = Object.create(yankee, {constructor: {value: romeon}});
    source = yankee;
    echoed = foxtra;
    offset = new source[romeon](update, echoed, result);
    offset = offset instanceof Object ? offset : yankee;
    option[2] = offset;
    var _closure1_slot8 = option;
    option = 4;
    option = golfie[option];
    offset = verify.bind(entity)(option);
    option = offset.prototype;
    verify = Object.create(option, {constructor: {value: offset}});
    update = 'Sentry';
    source = verify;
    option = new source[offset](update, echoed);
    option = option instanceof Object ? option : verify;
    var _closure1_slot9 = option;
    option = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot10 = option;
    var _closure1_slot11 = report;
    report = 0.01;
    var _closure1_slot12 = report;
    report = 0.05;
    var _closure1_slot13 = report;
    report = 0.005;
    var _closure1_slot14 = report;
    report = false;
    var _closure1_slot15 = report;
    report = 10;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.filterThrottle;
    report = {'maxBudgetMinute': 1, 'maxBudgetHour': 15};
    report = option.bind(verify)(report);
    var _closure1_slot16 = report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/errors/native/SentryInitUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['routingInstrumentation'] = tangon;
    michal = function() { // Original name: initSentry
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot4;
            zuuluu = entity.CrashReportingManager;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 39; continue _fun00003 }
 19:
            michal = zuuluu.getIsUserStaffForCrashReporting;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    _closure1_slot15 = michal;
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
                    if(!(golfie === report)) { _fun00006_ip = 673; continue _fun00005 }
 75:
                    oscard = zuuluu.indexOf;
                    report = 'developer';
                    report = oscard.bind(zuuluu)(report);
                    if(!(golfie === report)) { _fun00006_ip = 673; continue _fun00005 }
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
                    if(!oscard) { _fun00006_ip = 240; continue _fun00005 }
 184:
                    if(!report) { _fun00006_ip = 240; continue _fun00005 }
 187:
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
                    if(!(golfie === oscard)) { _fun00006_ip = 673; continue _fun00005 }
 240:
                    oscard = 0.05;
                    _closure1_slot13 = oscard;
                    oscard = tangon.SentryDsn;
                    if(report) { _fun00006_ip = 280; continue _fun00005 }
 265:
                    report = 1;
                    _closure1_slot13 = report;
                    oscard = tangon.SentryAlphaBetaDsn;
 280:
                    if(!michal) { _fun00006_ip = 298; continue _fun00005 }
 283:
                    oscard = tangon.SentryStaffDsn;
                    report = 1;
                    _closure1_slot13 = report;
 298:
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
                    if(!verify) { _fun00006_ip = 355; continue _fun00005 }
 351:
                    offset = 'android';
 355:
                    verify = '/error-reporting-proxy/';
                    verify = verify + offset;
                    report['tunnel'] = verify;
                    verify = false;
                    report['autoInitializeNativeSdk'] = verify;
                    verify = _closure1_slot17;
                    report['beforeSend'] = verify;
                    verify = '3843';
                    report['dist'] = verify;
                    report['dsn'] = oscard;
                    report['environment'] = zuuluu;
                    zuuluu = 0;
                    report['tracesSampleRate'] = zuuluu;
                    zuuluu = 1;
                    report['sampleRate'] = zuuluu;
                    zuuluu = _closure1_slot10;
                    report['ignoreErrors'] = zuuluu;
                    zuuluu = 'discord_android@274.1.0-2+274201';
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
 673:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 39:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['initSentry'] = michal;
    return entity;
})();