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
                    if(zuuluu) { _fun00002_ip = 454; continue _fun00001 }
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
                    SaveGenerator(address=59);
 57:
                    return option;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 451; continue _fun00001 }
 68:
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
                    if(zuuluu) { _fun00002_ip = 151; continue _fun00001 }
 120:
                    zuuluu = global;
                    golfie = zuuluu.Promise;
                    oscard = golfie.resolve;
                    zuuluu = {};
                    yankee = true;
                    zuuluu['isAuthorized'] = yankee;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    return zuuluu;
 151:
                    oscard = _closure1_slot4;
                    zuuluu = oscard.getApplication;
                    yankee = zuuluu.bind(oscard)(offset);
                    oscard = null;
                    if(!(oscard == yankee)) { _fun00002_ip = 231; continue _fun00001 }
 172:
                    golfie = _closure1_slot0;
                    romeon = _closure1_slot1;
                    zuuluu = 5;
                    zuuluu = romeon[zuuluu];
                    golfie = golfie.bind(option)(zuuluu);
                    zuuluu = golfie.fetchApplication;
                    zuuluu = zuuluu.bind(golfie)(offset);
                    SaveGenerator(address=207);
 205:
                    return zuuluu;
 207:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 448; continue _fun00001 }
 216:
                    romeon = _closure1_slot3;
                    golfie = romeon.createFromServer;
                    yankee = golfie.bind(romeon)(zuuluu);
 231:
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot1;
                    golfie = 6;
                    golfie = foxtra[golfie];
                    golfie = romeon.bind(option)(golfie);
                    golfie = golfie.ApplicationIntegrationType;
                    romeon = golfie.USER_INSTALL;
                    _closure4_slot2 = romeon;
                    foxtra = oscard == yankee;
                    golfie = undefined;
                    if(foxtra) { _fun00002_ip = 325; continue _fun00001 }
 276:
                    yankee = yankee.integrationTypesConfig;
                    foxtra = oscard == yankee;
                    golfie = undefined;
                    if(foxtra) { _fun00002_ip = 325; continue _fun00001 }
 291:
                    yankee = yankee[romeon];
                    romeon = oscard == yankee;
                    golfie = undefined;
                    if(romeon) { _fun00002_ip = 325; continue _fun00001 }
 304:
                    yankee = yankee.oauth2InstallParams;
                    romeon = oscard == yankee;
                    golfie = undefined;
                    if(romeon) { _fun00002_ip = 325; continue _fun00001 }
 319:
                    golfie = yankee.scopes;
 325:
                    _closure4_slot3 = golfie;
                    if(!(oscard != verify)) { _fun00002_ip = 412; continue _fun00001 }
 333:
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
 412:
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
                        golfie = _closure4_slot2;
                        michal['integrationType'] = golfie;
                        oscard = _closure4_slot3;
                        michal['scopes'] = oscard;
                        report = function(argFoo) { // Original name: callback
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                entity = argFoo;
                                entity = entity.location;
                                michal = null;
                                if(!(michal == entity)) { _fun00004_ip = 42; continue _fun00003 }
 14:
                                tangon = _closure5_slot0;
                                zuuluu = {};
                                entity = false;
                                zuuluu['isAuthorized'] = entity;
                                entity = undefined;
                                entity = tangon.bind(entity)(zuuluu);
                                _fun00004_ip = 168; continue _fun00003;
 42:
                                entity = _closure4_slot1;
                                if(!(michal != entity)) { _fun00004_ip = 145; continue _fun00003 }
 53:
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot1;
                                michal = 7;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                tangon = tangon.bind(michal)(zuuluu);
                                zuuluu = tangon.trackWithMetadata;
                                entity = _closure1_slot5;
                                michal = entity.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                                entity = {};
                                oscard = _closure4_slot0;
                                entity['application_id'] = oscard;
                                report = _closure4_slot1;
                                oscard = report.location;
                                entity['location'] = oscard;
                                oscard = report.sectionName;
                                entity['section_name'] = oscard;
                                report = report.entrypoint;
                                entity['source'] = report;
                                entity = zuuluu.bind(tangon)(michal, entity);
 145:
                                zuuluu = _closure5_slot0;
                                michal = {};
                                entity = true;
                                michal['isAuthorized'] = entity;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
 168:
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
 448:
                    return zuuluu;
 451:
                    return michal;
 454:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/installApplicationOnDemandIfNeeded.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: installApplicationOnDemandIfNeeded
        entity = undefined;
        tangon = _closure1_slot6;
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