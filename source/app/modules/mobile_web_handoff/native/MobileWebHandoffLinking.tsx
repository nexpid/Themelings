// app/modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: createHandoffTokenWithLoadingModal
        michal = argFoo;
        zuuluu = michal.nonce;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.fingerprint;
        var _closure2_slot1 = zuuluu;
        michal = michal.handoffSource;
        var _closure2_slot2 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golfie = argFoo;
                var _closure3_slot0 = golfie;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 3;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.popWithKey;
                zuuluu = _closure1_slot8;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot4;
                zuuluu = tangon.isAuthenticated;
                zuuluu = zuuluu.bind(tangon)();
                if(zuuluu) { _fun00002_ip = 187; continue _fun00001 }
 66:
                tangon = _closure1_slot1;
                yankee = _closure1_slot2;
                zuuluu = 6;
                zuuluu = yankee[zuuluu];
                verify = tangon.bind(entity)(zuuluu);
                option = verify.track;
                zuuluu = _closure1_slot5;
                report = zuuluu.MOBILE_WEB_HANDOFF_FAILURE;
                tangon = {};
                zuuluu = 'user_not_authenticated_in_app';
                tangon['reason'] = zuuluu;
                offset = _closure1_slot0;
                zuuluu = 7;
                zuuluu = yankee[zuuluu];
                romeon = offset.bind(entity)(zuuluu);
                yankee = romeon.maybeExtractId;
                offset = _closure2_slot1;
                yankee = yankee.bind(romeon)(offset);
                tangon['fingerprint'] = yankee;
                zuuluu = _closure2_slot2;
                tangon['handoff_source'] = zuuluu;
                zuuluu = {};
                zuuluu['fingerprint'] = offset;
                zuuluu = option.bind(verify)(report, tangon, zuuluu);
                zuuluu = 'null';
                zuuluu = golfie.bind(entity)(zuuluu);
                _fun00002_ip = 250; continue _fun00001;
 187:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 4;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.showSimpleLoadingModal;
                zuuluu = _closure1_slot8;
                michal = {};
                option = function() { // Original name: operation
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.createHandoffToken;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['operation'] = option;
                michal['onResolved'] = golfie;
                oscard = function() { // Original name: onRejected
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    entity = 6;
                    zuuluu = option[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.track;
                    zuuluu = _closure1_slot5;
                    tangon = zuuluu.MOBILE_WEB_HANDOFF_FAILURE;
                    zuuluu = {};
                    golfie = 'handoff_token_fetch_failure';
                    zuuluu['reason'] = golfie;
                    golfie = _closure1_slot0;
                    michal = 7;
                    michal = option[michal];
                    verify = golfie.bind(entity)(michal);
                    option = verify.maybeExtractId;
                    golfie = _closure2_slot1;
                    option = option.bind(verify)(golfie);
                    zuuluu['fingerprint'] = option;
                    michal = _closure2_slot2;
                    zuuluu['handoff_source'] = michal;
                    michal = {};
                    michal['fingerprint'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    zuuluu = _closure3_slot0;
                    michal = 'null';
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onRejected'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
 250:
                return entity;
            }
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _redirectWithHandoffToken
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    option = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 447; continue _fun00003 }
 16:
                    tangon = undefined;
                    if(!(option === tangon)) { _fun00004_ip = 24; continue _fun00003 }
 22:
                    option = {};
 24:
                    oscard = option.forceExternalBrowser;
                    if(!(oscard === tangon)) { _fun00004_ip = 36; continue _fun00003 }
 34:
                    oscard = false;
 36:
                    zuuluu = null;
                    golfie = Object.create(zuuluu);
                    michal = 0;
                    golfie['forceExternalBrowser'] = michal;
                    result = {};
                    output = option;
                    sizing = golfie;
                    verify = copyDataProperties(result, output, sizing);
                    SaveGenerator(address=64);
 62:
                    return tangon;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 444; continue _fun00003 }
 73:
                    option = {};
                    result = option;
                    output = verify;
                    report = copyDataProperties(result, output);
                    report = verify.nonce;
                    if(!(zuuluu == report)) { _fun00004_ip = 128; continue _fun00003 }
 95:
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = offset[zuuluu];
                    golfie = golfie.bind(tangon)(zuuluu);
                    zuuluu = golfie.generateNonce;
                    report = zuuluu.bind(golfie)();
 128:
                    zuuluu = 'nonce';
                    option[zuuluu] = report;
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = offset[zuuluu];
                    report = report.bind(tangon)(zuuluu);
                    zuuluu = report.getLoginHandoffSourceFromRedirectTo;
                    report = zuuluu.bind(report)(yankee);
                    zuuluu = 'handoffSource';
                    option[zuuluu] = report;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.bind(tangon)(option);
                    SaveGenerator(address=195);
 193:
                    return zuuluu;
 195:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 441; continue _fun00003 }
 204:
                    report = global;
                    foxtra = report.URL;
                    romeon = verify.skipLoginRedirect;
                    offset = true;
                    report = yankee;
                    if(!(offset !== romeon)) { _fun00004_ip = 268; continue _fun00003 }
 227:
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    romeon = 9;
                    romeon = kiloes[romeon];
                    kiloes = backup.bind(tangon)(romeon);
                    backup = kiloes.makeUrl;
                    romeon = _closure1_slot7;
                    romeon = romeon.LOGIN_HANDOFF;
                    report = backup.bind(kiloes)(romeon);
 268:
                    romeon = foxtra.prototype;
                    romeon = Object.create(romeon, {constructor: {value: foxtra}});
                    echoed = romeon;
                    result = report;
                    report = new echoed[foxtra](result, output);
                    report = report instanceof Object ? report : romeon;
                    backup = report.searchParams;
                    foxtra = backup.append;
                    romeon = 'handoff_token';
                    romeon = foxtra.bind(backup)(romeon, zuuluu);
                    verify = verify.skipLoginRedirect;
                    if(!(offset !== verify)) { _fun00004_ip = 379; continue _fun00003 }
 325:
                    romeon = report.searchParams;
                    offset = romeon.append;
                    verify = option.nonce;
                    option = 'handoff_key';
                    option = offset.bind(romeon)(option, verify);
                    offset = report.searchParams;
                    verify = offset.append;
                    option = 'redirect_to';
                    option = verify.bind(offset)(option, yankee);
 379:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 10;
                    golfie = verify[golfie];
                    golfie = option.bind(tangon)(golfie);
                    if(oscard) { _fun00004_ip = 421; continue _fun00003 }
 402:
                    option = golfie.performURLNavigation;
                    oscard = report.href;
                    oscard = option.bind(golfie)(oscard);
                    _fun00004_ip = 438; continue _fun00003;
 421:
                    oscard = golfie.openURLExternally;
                    report = report.href;
                    report = oscard.bind(golfie)(report);
 438:
                    return tangon;
 441:
                    return zuuluu;
 444:
                    return michal;
 447:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _redirectDeveloperPortalWithHandoffToken
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    zuuluu = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 301; continue _fun00005 }
 13:
                    tangon = undefined;
                    if(!(zuuluu === tangon)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    zuuluu = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 298; continue _fun00005 }
 34:
                    golfie = {};
                    kiloes = golfie;
                    backup = zuuluu;
                    report = copyDataProperties(kiloes, backup);
                    report = zuuluu.nonce;
                    zuuluu = null;
                    if(!(zuuluu == report)) { _fun00006_ip = 91; continue _fun00005 }
 58:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = option[zuuluu];
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.generateNonce;
                    report = zuuluu.bind(oscard)();
 91:
                    zuuluu = 'nonce';
                    golfie[zuuluu] = report;
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.LoginHandoffSource;
                    report = zuuluu.ROLE_SUBSCRIPTION_SETTING;
                    zuuluu = 'handoffSource';
                    golfie[zuuluu] = report;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.bind(tangon)(golfie);
                    SaveGenerator(address=159);
 157:
                    return zuuluu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 295; continue _fun00005 }
 168:
                    report = global;
                    option = report.URL;
                    verify = report.location;
                    offset = verify.protocol;
                    romeon = _closure1_slot6;
                    yankee = romeon.DEVELOPER_PORTAL_LOGIN_HANDOFF;
                    verify = golfie.nonce;
                    golfie = argFoo;
                    verify = yankee.bind(romeon)(verify, zuuluu, golfie);
                    report = report.HermesInternal;
                    golfie = report.concat;
                    report = '';
                    kiloes = golfie.bind(report)(offset, verify);
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    sizing = golfie;
                    report = new sizing[option](kiloes, backup);
                    report = report instanceof Object ? report : golfie;
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 10;
                    oscard = option[oscard];
                    golfie = golfie.bind(tangon)(oscard);
                    oscard = golfie.performURLNavigation;
                    report = report.href;
                    report = oscard.bind(golfie)(report);
                    return tangon;
 295:
                    return zuuluu;
 298:
                    return michal;
 301:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.AnalyticEvents;
    var _closure1_slot5 = golfie;
    golfie = michal.MarketingURLs;
    var _closure1_slot6 = golfie;
    michal = michal.Routes;
    var _closure1_slot7 = michal;
    michal = 'mweb-handoff';
    var _closure1_slot8 = michal;
    michal = {};
    golfie = function() { // Original name: redirectWithHandoffToken
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['redirectWithHandoffToken'] = golfie;
    tangon = function() { // Original name: redirectDeveloperPortalWithHandoffToken
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['redirectDeveloperPortalWithHandoffToken'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();