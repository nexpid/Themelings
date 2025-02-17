// app/modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: createHandoffTokenWithLoadingModal
        mike = argFoo;
        zulu = mike.nonce;
        var _closure2_slot0 = zulu;
        zulu = mike.fingerprint;
        var _closure2_slot1 = zulu;
        mike = mike.handoffSource;
        var _closure2_slot2 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golf = argFoo;
                var _closure3_slot0 = golf;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 3;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.popWithKey;
                zulu = _closure1_slot8;
                zulu = tango.bind(report)(zulu);
                tango = _closure1_slot4;
                zulu = tango.isAuthenticated;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00002_ip = 187; continue _fun00001 }
 66:
                tango = _closure1_slot1;
                yankee = _closure1_slot2;
                zulu = 6;
                zulu = yankee[zulu];
                verify = tango.bind(entity)(zulu);
                options = verify.track;
                zulu = _closure1_slot5;
                report = zulu.MOBILE_WEB_HANDOFF_FAILURE;
                tango = {};
                zulu = 'user_not_authenticated_in_app';
                tango['reason'] = zulu;
                offset = _closure1_slot0;
                zulu = 7;
                zulu = yankee[zulu];
                romeo = offset.bind(entity)(zulu);
                yankee = romeo.maybeExtractId;
                offset = _closure2_slot1;
                yankee = yankee.bind(romeo)(offset);
                tango['fingerprint'] = yankee;
                zulu = _closure2_slot2;
                tango['handoff_source'] = zulu;
                zulu = {};
                zulu['fingerprint'] = offset;
                zulu = options.bind(verify)(report, tango, zulu);
                zulu = 'null';
                zulu = golf.bind(entity)(zulu);
                _fun00002_ip = 250; continue _fun00001;
 187:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 4;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.showSimpleLoadingModal;
                zulu = _closure1_slot8;
                mike = {};
                options = function() { // Original name: operation
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.createHandoffToken;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike['operation'] = options;
                mike['onResolved'] = golf;
                oscar = function() { // Original name: onRejected
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    entity = 6;
                    zulu = options[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.track;
                    zulu = _closure1_slot5;
                    tango = zulu.MOBILE_WEB_HANDOFF_FAILURE;
                    zulu = {};
                    golf = 'handoff_token_fetch_failure';
                    zulu['reason'] = golf;
                    golf = _closure1_slot0;
                    mike = 7;
                    mike = options[mike];
                    verify = golf.bind(entity)(mike);
                    options = verify.maybeExtractId;
                    golf = _closure2_slot1;
                    options = options.bind(verify)(golf);
                    zulu['fingerprint'] = options;
                    mike = _closure2_slot2;
                    zulu['handoff_source'] = mike;
                    mike = {};
                    mike['fingerprint'] = golf;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    zulu = _closure3_slot0;
                    mike = 'null';
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onRejected'] = oscar;
                mike = tango.bind(report)(zulu, mike);
 250:
                return entity;
            }
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _redirectWithHandoffToken
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    options = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 447; continue _fun00003 }
 16:
                    tango = undefined;
                    if(!(options === tango)) { _fun00004_ip = 24; continue _fun00003 }
 22:
                    options = {};
 24:
                    oscar = options.forceExternalBrowser;
                    if(!(oscar === tango)) { _fun00004_ip = 36; continue _fun00003 }
 34:
                    oscar = false;
 36:
                    zulu = null;
                    golf = Object.create(zulu);
                    mike = 0;
                    golf['forceExternalBrowser'] = mike;
                    result = {};
                    output = options;
                    sizing = golf;
                    verify = copyDataProperties(result, output, sizing);
                    SaveGenerator(address=64);
 62:
                    return tango;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 444; continue _fun00003 }
 73:
                    options = {};
                    result = options;
                    output = verify;
                    report = copyDataProperties(result, output);
                    report = verify.nonce;
                    if(!(zulu == report)) { _fun00004_ip = 128; continue _fun00003 }
 95:
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 5;
                    zulu = offset[zulu];
                    golf = golf.bind(tango)(zulu);
                    zulu = golf.generateNonce;
                    report = zulu.bind(golf)();
 128:
                    zulu = 'nonce';
                    options[zulu] = report;
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 8;
                    zulu = offset[zulu];
                    report = report.bind(tango)(zulu);
                    zulu = report.getLoginHandoffSourceFromRedirectTo;
                    report = zulu.bind(report)(yankee);
                    zulu = 'handoffSource';
                    options[zulu] = report;
                    zulu = _closure1_slot9;
                    zulu = zulu.bind(tango)(options);
                    SaveGenerator(address=195);
 193:
                    return zulu;
 195:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 441; continue _fun00003 }
 204:
                    report = global;
                    foxtrot = report.URL;
                    romeo = verify.skipLoginRedirect;
                    offset = true;
                    report = yankee;
                    if(!(offset !== romeo)) { _fun00004_ip = 268; continue _fun00003 }
 227:
                    backup = _closure1_slot1;
                    kilo = _closure1_slot2;
                    romeo = 9;
                    romeo = kilo[romeo];
                    kilo = backup.bind(tango)(romeo);
                    backup = kilo.makeUrl;
                    romeo = _closure1_slot7;
                    romeo = romeo.LOGIN_HANDOFF;
                    report = backup.bind(kilo)(romeo);
 268:
                    romeo = foxtrot.prototype;
                    romeo = Object.create(romeo, {constructor: {value: foxtrot}});
                    echo = romeo;
                    result = report;
                    report = new echo[foxtrot](result, output);
                    report = report instanceof Object ? report : romeo;
                    backup = report.searchParams;
                    foxtrot = backup.append;
                    romeo = 'handoff_token';
                    romeo = foxtrot.bind(backup)(romeo, zulu);
                    verify = verify.skipLoginRedirect;
                    if(!(offset !== verify)) { _fun00004_ip = 379; continue _fun00003 }
 325:
                    romeo = report.searchParams;
                    offset = romeo.append;
                    verify = options.nonce;
                    options = 'handoff_key';
                    options = offset.bind(romeo)(options, verify);
                    offset = report.searchParams;
                    verify = offset.append;
                    options = 'redirect_to';
                    options = verify.bind(offset)(options, yankee);
 379:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 10;
                    golf = verify[golf];
                    golf = options.bind(tango)(golf);
                    if(oscar) { _fun00004_ip = 421; continue _fun00003 }
 402:
                    options = golf.performURLNavigation;
                    oscar = report.href;
                    oscar = options.bind(golf)(oscar);
                    _fun00004_ip = 438; continue _fun00003;
 421:
                    oscar = golf.openURLExternally;
                    report = report.href;
                    report = oscar.bind(golf)(report);
 438:
                    return tango;
 441:
                    return zulu;
 444:
                    return mike;
 447:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _redirectDeveloperPortalWithHandoffToken
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    zulu = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 301; continue _fun00005 }
 13:
                    tango = undefined;
                    if(!(zulu === tango)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    zulu = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tango;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 298; continue _fun00005 }
 34:
                    golf = {};
                    kilo = golf;
                    backup = zulu;
                    report = copyDataProperties(kilo, backup);
                    report = zulu.nonce;
                    zulu = null;
                    if(!(zulu == report)) { _fun00006_ip = 91; continue _fun00005 }
 58:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 5;
                    zulu = options[zulu];
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.generateNonce;
                    report = zulu.bind(oscar)();
 91:
                    zulu = 'nonce';
                    golf[zulu] = report;
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 8;
                    zulu = options[zulu];
                    zulu = report.bind(tango)(zulu);
                    zulu = zulu.LoginHandoffSource;
                    report = zulu.ROLE_SUBSCRIPTION_SETTING;
                    zulu = 'handoffSource';
                    golf[zulu] = report;
                    zulu = _closure1_slot9;
                    zulu = zulu.bind(tango)(golf);
                    SaveGenerator(address=159);
 157:
                    return zulu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 295; continue _fun00005 }
 168:
                    report = global;
                    options = report.URL;
                    verify = report.location;
                    offset = verify.protocol;
                    romeo = _closure1_slot6;
                    yankee = romeo.DEVELOPER_PORTAL_LOGIN_HANDOFF;
                    verify = golf.nonce;
                    golf = argFoo;
                    verify = yankee.bind(romeo)(verify, zulu, golf);
                    report = report.HermesInternal;
                    golf = report.concat;
                    report = '';
                    kilo = golf.bind(report)(offset, verify);
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    sizing = golf;
                    report = new sizing[options](kilo, backup);
                    report = report instanceof Object ? report : golf;
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 10;
                    oscar = options[oscar];
                    golf = golf.bind(tango)(oscar);
                    oscar = golf.performURLNavigation;
                    report = report.href;
                    report = oscar.bind(golf)(report);
                    return tango;
 295:
                    return zulu;
 298:
                    return mike;
 301:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.AnalyticEvents;
    var _closure1_slot5 = golf;
    golf = mike.MarketingURLs;
    var _closure1_slot6 = golf;
    mike = mike.Routes;
    var _closure1_slot7 = mike;
    mike = 'mweb-handoff';
    var _closure1_slot8 = mike;
    mike = {};
    golf = function() { // Original name: redirectWithHandoffToken
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['redirectWithHandoffToken'] = golf;
    tango = function() { // Original name: redirectDeveloperPortalWithHandoffToken
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['redirectDeveloperPortalWithHandoffToken'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();