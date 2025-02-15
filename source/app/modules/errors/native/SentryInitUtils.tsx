// app/modules/errors/native/SentryInitUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar) { // Original name: filterError
        _fun35992: for(var _fun35992_ip = 0; ; ) switch(_fun35992_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            entity = null;
            zulu = entity == tango;
            report = undefined;
            golf = undefined;
            if(zulu) { _fun35992_ip = 25; continue _fun35992 }
 19:
            golf = tango.originalException;
 25:
            zulu = entity == golf;
            oscar = undefined;
            if(zulu) { _fun35992_ip = 39; continue _fun35992 }
 34:
            oscar = golf.status;
 39:
            if(!oscar) { _fun35992_ip = 57; continue _fun35992 }
 42:
            zulu = 400;
            oscar = oscar >= zulu;
            zulu = true;
            if(oscar) { _fun35992_ip = 116; continue _fun35992 }
 57:
            options = entity == golf;
            oscar = undefined;
            if(options) { _fun35992_ip = 72; continue _fun35992 }
 66:
            oscar = golf.captchaFields;
 72:
            oscar = entity != oscar;
            options = null;
            if(!oscar) { _fun35992_ip = 98; continue _fun35992 }
 81:
            verify = entity == golf;
            oscar = undefined;
            if(verify) { _fun35992_ip = 95; continue _fun35992 }
 90:
            oscar = golf.code;
 95:
            options = oscar;
 98:
            zulu = false;
            if(!options) { _fun35992_ip = 116; continue _fun35992 }
 103:
            oscar = 0;
            oscar = options < oscar;
            zulu = false;
            if(!oscar) { _fun35992_ip = 116; continue _fun35992 }
 114:
            zulu = true;
 116:
            if(zulu) { _fun35992_ip = 708; continue _fun35992 }
 122:
            oscar = entity == tango;
            zulu = undefined;
            if(oscar) { _fun35992_ip = 137; continue _fun35992 }
 131:
            zulu = tango.originalException;
 137:
            tango = entity == zulu;
            oscar = undefined;
            if(tango) { _fun35992_ip = 166; continue _fun35992 }
 146:
            zulu = zulu.err;
            tango = entity == zulu;
            oscar = undefined;
            if(tango) { _fun35992_ip = 166; continue _fun35992 }
 161:
            oscar = zulu.code;
 166:
            tango = 'ABORTED';
            zulu = false;
            if(!(tango === oscar)) { _fun35992_ip = 180; continue _fun35992 }
 178:
            zulu = true;
 180:
            if(zulu) { _fun35992_ip = 708; continue _fun35992 }
 186:
            options = _closure1_slot9;
            golf = options.info;
            oscar = {};
            oscar['event'] = mike;
            oscar['hint'] = report;
            tango = 'Crash';
            tango = golf.bind(options)(tango, oscar);
            oscar = mike.level;
            tango = 'fatal';
            if(!(tango !== oscar)) { _fun35992_ip = 257; continue _fun35992 }
 237:
            golf = mike.level;
            oscar = 'error';
            tango = mike;
            if(!(oscar === golf)) { _fun35992_ip = 651; continue _fun35992 }
 257:
            golf = _closure1_slot11;
            options = mike.level;
            oscar = 'error';
            if(!(oscar === options)) { _fun35992_ip = 279; continue _fun35992 }
 275:
            golf = _closure1_slot12;
 279:
            oscar = _closure1_slot15;
            if(oscar) { _fun35992_ip = 303; continue _fun35992 }
 286:
            oscar = _closure1_slot18;
            oscar = oscar.bind(report)(golf);
            tango = undefined;
            if(!oscar) { _fun35992_ip = 651; continue _fun35992 }
 303:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            oscar = 5;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.getHistory;
            oscar = oscar.bind(golf)();
            offset = oscar.location;
            golf = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            verify = golf.bind(report)(oscar);
            options = verify.track;
            oscar = _closure1_slot5;
            golf = oscar.APP_CRASHED;
            oscar = {};
            offset = offset.pathname;
            oscar['path'] = offset;
            oscar['extra'] = report;
            offset = mike.message;
            oscar['error_message'] = offset;
            offset = mike.level;
            oscar['error_level'] = offset;
            oscar = options.bind(verify)(golf, oscar);
            oscar = mike.tags;
            options = entity == oscar;
            golf = undefined;
            if(options) { _fun35992_ip = 437; continue _fun35992 }
 431:
            golf = oscar.event.origin;
 437:
            oscar = 'javascript';
            if(!(oscar !== golf)) { _fun35992_ip = 479; continue _fun35992 }
 445:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            oscar = 7;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.AppCrashedReasons;
            romeo = oscar.UNHANDLED_NATIVE_ERROR;
            _fun35992_ip = 511; continue _fun35992;
 479:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            oscar = 7;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.AppCrashedReasons;
            romeo = oscar.UNHANDLED_JS_ERROR;
 511:
            golf = _closure1_slot1;
            yankee = _closure1_slot3;
            oscar = 8;
            oscar = yankee[oscar];
            verify = golf.bind(report)(oscar);
            options = verify.increment;
            golf = {};
            offset = _closure1_slot0;
            oscar = 9;
            oscar = yankee[oscar];
            oscar = offset.bind(report)(oscar);
            oscar = oscar.MetricEvents;
            oscar = oscar.APP_CRASHED;
            golf['name'] = oscar;
            offset = global;
            oscar = offset.HermesInternal;
            yankee = oscar.concat;
            oscar = 'reason:';
            yankee = yankee.bind(oscar)(romeo);
            oscar = new Array(2);
            oscar[0] = yankee;
            romeo = mike.level;
            offset = offset.HermesInternal;
            yankee = offset.concat;
            offset = 'level:';
            offset = yankee.bind(offset)(romeo);
            oscar[1] = offset;
            golf['tags'] = oscar;
            oscar = true;
            oscar = options.bind(verify)(golf, oscar);
            tango = mike;
 651:
            tango = !tango;
            tango = _closure1_slot13;
            golf = mike.level;
            oscar = 'error';
            if(!(oscar === golf)) { _fun35992_ip = 676; continue _fun35992 }
 672:
            tango = _closure1_slot14;
 676:
            oscar = _closure1_slot15;
            if(oscar) { _fun35992_ip = 706; continue _fun35992 }
 683:
            oscar = _closure1_slot16;
            oscar = oscar.bind(report)();
            if(!oscar) { _fun35992_ip = 708; continue _fun35992 }
 694:
            zulu = _closure1_slot18;
            zulu = zulu.bind(report)(tango);
            if(!zulu) { _fun35992_ip = 708; continue _fun35992 }
 706:
            return mike;
 708:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: sample
        entity = global;
        mike = entity.Math;
        entity = mike.random;
        mike = entity.bind(mike)();
        entity = argFoo;
        entity = mike <= entity;
        return entity;
    };
    var _closure1_slot18 = entity;
    offset = global;
    options = offset.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    report = 1;
    tango = golf[report];
    tango = oscar.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot5 = options;
    yankee = tango.Endpoints;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.PRIMARY_DOMAIN;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ReactNavigationInstrumentation;
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    source = options;
    tango = new source[tango](update);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot7 = tango;
    backup = offset.RegExp;
    options = offset.window;
    options = options.GLOBAL_ENV;
    foxtrot = options.API_VERSION;
    romeo = yankee.METRICS;
    options = offset.HermesInternal;
    options = options.concat;
    kilo = '/v';
    update = options.bind(kilo)(foxtrot, romeo);
    romeo = backup.prototype;
    romeo = Object.create(romeo, {constructor: {value: backup}});
    foxtrot = 'g';
    source = romeo;
    echo = foxtrot;
    options = new source[backup](update, echo, result);
    romeo = options instanceof Object ? options : romeo;
    options = new Array(3);
    options[0] = romeo;
    sizing = offset.RegExp;
    romeo = offset.window;
    romeo = romeo.GLOBAL_ENV;
    output = romeo.API_VERSION;
    backup = yankee.METRICS_V2;
    romeo = offset.HermesInternal;
    romeo = romeo.concat;
    update = romeo.bind(kilo)(output, backup);
    backup = sizing.prototype;
    backup = Object.create(backup, {constructor: {value: sizing}});
    source = backup;
    echo = foxtrot;
    romeo = new source[sizing](update, echo, result);
    romeo = romeo instanceof Object ? romeo : backup;
    options[1] = romeo;
    romeo = offset.RegExp;
    backup = offset.window;
    backup = backup.GLOBAL_ENV;
    backup = backup.API_VERSION;
    yankee = yankee.TRACK;
    offset = offset.HermesInternal;
    offset = offset.concat;
    update = offset.bind(kilo)(backup, yankee);
    yankee = romeo.prototype;
    yankee = Object.create(yankee, {constructor: {value: romeo}});
    source = yankee;
    echo = foxtrot;
    offset = new source[romeo](update, echo, result);
    offset = offset instanceof Object ? offset : yankee;
    options[2] = offset;
    var _closure1_slot8 = options;
    options = 4;
    options = golf[options];
    offset = verify.bind(entity)(options);
    options = offset.prototype;
    verify = Object.create(options, {constructor: {value: offset}});
    update = 'Sentry';
    source = verify;
    options = new source[offset](update, echo);
    options = options instanceof Object ? options : verify;
    var _closure1_slot9 = options;
    options = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot10 = options;
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
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.filterThrottle;
    report = {'maxBudgetMinute': 1, 'maxBudgetHour': 15};
    report = options.bind(verify)(report);
    var _closure1_slot16 = report;
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/errors/native/SentryInitUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['routingInstrumentation'] = tango;
    mike = function() { // Original name: initSentry
        _fun35994: for(var _fun35994_ip = 0; ; ) switch(_fun35994_ip) {
 0:
            entity = _closure1_slot4;
            zulu = entity.CrashReportingManager;
            entity = null;
            if(!(entity != zulu)) { _fun35994_ip = 39; continue _fun35994 }
 19:
            mike = zulu.getIsUserStaffForCrashReporting;
            entity = function(argFoo) {
                _fun35995: for(var _fun35995_ip = 0; ; ) switch(_fun35995_ip) {
 0:
                    mike = argFoo;
                    _closure1_slot15 = mike;
                    tango = _closure1_slot2;
                    zulu = _closure1_slot3;
                    entity = 11;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getConstants;
                    tango = zulu.bind(tango)();
                    zulu = tango.ReleaseChannel;
                    oscar = zulu.indexOf;
                    report = 'debug';
                    report = oscar.bind(zulu)(report);
                    golf = -1;
                    if(!(golf === report)) { _fun35995_ip = 673; continue _fun35995 }
 75:
                    oscar = zulu.indexOf;
                    report = 'developer';
                    report = oscar.bind(zulu)(report);
                    if(!(golf === report)) { _fun35995_ip = 673; continue _fun35995 }
 98:
                    options = _closure1_slot0;
                    oscar = _closure1_slot3;
                    report = 12;
                    report = oscar[report];
                    report = options.bind(entity)(report);
                    report = report.isStable;
                    foxtrot = _closure1_slot9;
                    romeo = foxtrot.verbose;
                    offset = {};
                    offset['releaseChannel'] = zulu;
                    offset['isProductionChannel'] = report;
                    verify = 'Initialize';
                    verify = romeo.bind(foxtrot)(verify, offset);
                    romeo = 13;
                    oscar = oscar[romeo];
                    options = options.bind(entity)(oscar);
                    oscar = options.isAndroid;
                    oscar = oscar.bind(options)();
                    if(!oscar) { _fun35995_ip = 240; continue _fun35995 }
 184:
                    if(!report) { _fun35995_ip = 240; continue _fun35995 }
 187:
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscar = 14;
                    oscar = verify[oscar];
                    options = options.bind(entity)(oscar);
                    oscar = options.getDevice;
                    verify = oscar.bind(options)();
                    options = verify.indexOf;
                    oscar = 'vivo';
                    oscar = options.bind(verify)(oscar);
                    if(!(golf === oscar)) { _fun35995_ip = 673; continue _fun35995 }
 240:
                    oscar = 0.05;
                    _closure1_slot13 = oscar;
                    oscar = tango.SentryDsn;
                    if(report) { _fun35995_ip = 280; continue _fun35995 }
 265:
                    report = 1;
                    _closure1_slot13 = report;
                    oscar = tango.SentryAlphaBetaDsn;
 280:
                    if(!mike) { _fun35995_ip = 298; continue _fun35995 }
 283:
                    oscar = tango.SentryStaffDsn;
                    report = 1;
                    _closure1_slot13 = report;
 298:
                    offset = _closure1_slot0;
                    verify = _closure1_slot3;
                    mike = 3;
                    report = verify[mike];
                    options = offset.bind(entity)(report);
                    golf = options.init;
                    report = {};
                    verify = verify[romeo];
                    offset = offset.bind(entity)(verify);
                    verify = offset.isAndroid;
                    verify = verify.bind(offset)();
                    offset = 'ios';
                    if(!verify) { _fun35995_ip = 355; continue _fun35995 }
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
                    verify = '3673';
                    report['dist'] = verify;
                    report['dsn'] = oscar;
                    report['environment'] = zulu;
                    zulu = 0;
                    report['tracesSampleRate'] = zulu;
                    zulu = 1;
                    report['sampleRate'] = zulu;
                    zulu = _closure1_slot10;
                    report['ignoreErrors'] = zulu;
                    zulu = 'discord_android@268.6.0-2+268206';
                    report['release'] = zulu;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot3;
                    offset = oscar[mike];
                    offset = zulu.bind(entity)(offset);
                    romeo = offset.ReactNativeTracing;
                    offset = {};
                    foxtrot = _closure1_slot7;
                    offset['routingInstrumentation'] = foxtrot;
                    foxtrot = _closure1_slot6;
                    yankee = new Array(1);
                    yankee[0] = foxtrot;
                    offset['tracePropagationTargets'] = yankee;
                    yankee = function(argFoo) { // Original name: shouldCreateSpanForRequest
                        zulu = _closure1_slot8;
                        mike = zulu.some;
                        entity = argFoo;
                        entity = entity.match;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    offset['shouldCreateSpanForRequest'] = yankee;
                    yankee = romeo.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeo}});
                    sizing = yankee;
                    kilo = offset;
                    offset = new sizing[romeo](kilo, backup);
                    yankee = offset instanceof Object ? offset : yankee;
                    offset = new Array(1);
                    offset[0] = yankee;
                    report['integrations'] = offset;
                    report = golf.bind(options)(report);
                    report = oscar[mike];
                    options = zulu.bind(entity)(report);
                    golf = options.setTag;
                    report = 'buildNumber';
                    report = golf.bind(options)(report, verify);
                    report = oscar[mike];
                    options = zulu.bind(entity)(report);
                    golf = options.setTag;
                    report = tango.Version;
                    tango = 'appVersion';
                    tango = golf.bind(options)(tango, report);
                    mike = oscar[mike];
                    report = zulu.bind(entity)(mike);
                    tango = report.setTag;
                    mike = 15;
                    mike = oscar[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.DesignIds;
                    oscar = mike.DESIGN_TABS_IA;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = '';
                    zulu = zulu.bind(mike)(oscar);
                    mike = 'design_id';
                    mike = tango.bind(report)(mike, zulu);
 673:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 39:
            entity = undefined;
            return entity;
        }
    };
    zulu['initSentry'] = mike;
    return entity;
})();