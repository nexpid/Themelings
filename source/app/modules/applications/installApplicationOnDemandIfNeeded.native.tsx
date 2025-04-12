// app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _installApplicationOnDemandIfNeeded
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 472; continue _fun00001 }
 15:
                    offset = michal.applicationId;
                    var _closure4_slot0 = offset;
                    romeon = michal.channel;
                    yankee = michal.commandIntegrationTypes;
                    verify = michal.appLauncherContext;
                    var _closure4_slot1 = verify;
                    option = undefined;
                    var _closure4_slot2 = option;
                    var _closure4_slot3 = option;
                    var _closure4_slot4 = option;
                    SaveGenerator(address=63);
 61:
                    return option;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 469; continue _fun00001 }
 72:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    golfie = oscard.bind(option)(zuuluu);
                    oscard = golfie.shouldInstallApplicationOnDemand;
                    zuuluu = {};
                    zuuluu['applicationId'] = offset;
                    zuuluu['channel'] = romeon;
                    zuuluu['commandIntegrationTypes'] = yankee;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    if(zuuluu) { _fun00002_ip = 155; continue _fun00001 }
 124:
                    zuuluu = global;
                    golfie = zuuluu.Promise;
                    oscard = golfie.resolve;
                    zuuluu = {};
                    yankee = true;
                    zuuluu['isAuthorized'] = yankee;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    return zuuluu;
 155:
                    oscard = _closure1_slot4;
                    zuuluu = oscard.getApplication;
                    zuuluu = zuuluu.bind(oscard)(offset);
                    _closure4_slot2 = zuuluu;
                    oscard = null;
                    yankee = zuuluu;
                    if(!(oscard == yankee)) { _fun00002_ip = 249; continue _fun00001 }
 183:
                    golfie = _closure1_slot0;
                    romeon = _closure1_slot1;
                    zuuluu = 5;
                    zuuluu = romeon[zuuluu];
                    golfie = golfie.bind(option)(zuuluu);
                    zuuluu = golfie.fetchApplication;
                    zuuluu = zuuluu.bind(golfie)(offset);
                    SaveGenerator(address=218);
 216:
                    return zuuluu;
 218:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 466; continue _fun00001 }
 227:
                    romeon = _closure1_slot3;
                    golfie = romeon.createFromServer;
                    golfie = golfie.bind(romeon)(zuuluu);
                    _closure4_slot2 = golfie;
                    yankee = golfie;
 249:
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot1;
                    golfie = 6;
                    golfie = foxtra[golfie];
                    golfie = romeon.bind(option)(golfie);
                    golfie = golfie.ApplicationIntegrationType;
                    romeon = golfie.USER_INSTALL;
                    _closure4_slot3 = romeon;
                    foxtra = oscard == yankee;
                    golfie = undefined;
                    if(foxtra) { _fun00002_ip = 343; continue _fun00001 }
 294:
                    yankee = yankee.integrationTypesConfig;
                    foxtra = oscard == yankee;
                    golfie = undefined;
                    if(foxtra) { _fun00002_ip = 343; continue _fun00001 }
 309:
                    yankee = yankee[romeon];
                    romeon = oscard == yankee;
                    golfie = undefined;
                    if(romeon) { _fun00002_ip = 343; continue _fun00001 }
 322:
                    yankee = yankee.oauth2InstallParams;
                    romeon = oscard == yankee;
                    golfie = undefined;
                    if(romeon) { _fun00002_ip = 343; continue _fun00001 }
 337:
                    golfie = yankee.scopes;
 343:
                    _closure4_slot4 = golfie;
                    if(!(oscard != verify)) { _fun00002_ip = 430; continue _fun00001 }
 351:
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot1;
                    oscard = 7;
                    oscard = yankee[oscard];
                    option = golfie.bind(option)(oscard);
                    golfie = option.trackWithMetadata;
                    report = _closure1_slot5;
                    oscard = report.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    report = {};
                    report['application_id'] = offset;
                    offset = verify.location;
                    report['location'] = offset;
                    offset = verify.sectionName;
                    report['section_name'] = offset;
                    verify = verify.entrypoint;
                    report['source'] = verify;
                    report = golfie.bind(option)(oscard, report);
 430:
                    report = global;
                    oscard = report.Promise;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    kiloes = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot1;
                        entity = 8;
                        michal = tangon[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        michal = oscard.dismissKeyboard;
                        michal = michal.bind(oscard)();
                        michal = 9;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.openOAuth2Modal;
                        michal = {};
                        golfie = _closure4_slot0;
                        michal['clientId'] = golfie;
                        golfie = _closure4_slot3;
                        michal['integrationType'] = golfie;
                        oscard = _closure4_slot4;
                        michal['scopes'] = oscard;
                        report = function(argFoo) { // Original name: callback
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                entity = argFoo;
                                entity = entity.location;
                                zuuluu = null;
                                if(!(zuuluu == entity)) { _fun00004_ip = 42; continue _fun00003 }
 14:
                                tangon = _closure5_slot0;
                                michal = {};
                                entity = false;
                                michal['isAuthorized'] = entity;
                                entity = undefined;
                                entity = tangon.bind(entity)(michal);
                                _fun00004_ip = 283; continue _fun00003;
 42:
                                entity = _closure4_slot1;
                                if(!(zuuluu != entity)) { _fun00004_ip = 260; continue _fun00003 }
 56:
                                oscard = _closure1_slot0;
                                tangon = _closure1_slot1;
                                michal = 7;
                                michal = tangon[michal];
                                tangon = undefined;
                                option = oscard.bind(tangon)(michal);
                                golfie = option.trackWithMetadata;
                                michal = _closure1_slot5;
                                oscard = michal.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                                michal = {};
                                verify = _closure4_slot0;
                                michal['application_id'] = verify;
                                verify = _closure4_slot1;
                                offset = verify.location;
                                michal['location'] = offset;
                                offset = verify.sectionName;
                                michal['section_name'] = offset;
                                verify = verify.entrypoint;
                                michal['source'] = verify;
                                michal = golfie.bind(option)(oscard, michal);
                                michal = _closure4_slot2;
                                michal = zuuluu != michal;
                                if(!michal) { _fun00004_ip = 199; continue _fun00003 }
 159:
                                oscard = _closure4_slot3;
                                golfie = _closure1_slot0;
                                option = _closure1_slot1;
                                zuuluu = 6;
                                zuuluu = option[zuuluu];
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                zuuluu = zuuluu.ApplicationIntegrationType;
                                zuuluu = zuuluu.USER_INSTALL;
                                michal = oscard === zuuluu;
 199:
                                if(!michal) { _fun00004_ip = 260; continue _fun00003 }
 202:
                                zuuluu = _closure1_slot0;
                                oscard = _closure1_slot1;
                                michal = 10;
                                michal = oscard[michal];
                                michal = zuuluu.bind(tangon)(michal);
                                tangon = michal.ComponentDispatch;
                                zuuluu = tangon.safeDispatch;
                                entity = _closure1_slot6;
                                michal = entity.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION;
                                entity = {};
                                report = _closure4_slot2;
                                entity['application'] = report;
                                entity = zuuluu.bind(tangon)(michal, entity);
 260:
                                zuuluu = _closure5_slot0;
                                michal = {};
                                entity = true;
                                michal['isAuthorized'] = entity;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
 283:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal['callback'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    sizing = report;
                    tangon = new sizing[oscard](kiloes, backup);
                    tangon = tangon instanceof Object ? tangon : report;
                    return tangon;
 466:
                    return zuuluu;
 469:
                    return michal;
 472:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    tangon = tangon.ComponentActions;
    var _closure1_slot6 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/installApplicationOnDemandIfNeeded.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: installApplicationOnDemandIfNeeded
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['installApplicationOnDemandIfNeeded'] = michal;
    return entity;
})();