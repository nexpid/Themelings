// app/modules/app_launcher/utils/InstallApplicationOnDemandIfNeeded/installApplicationOnDemandIfNeeded.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot4 = golfie;
    tangon = tangon.ComponentActions;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/utils/InstallApplicationOnDemandIfNeeded/installApplicationOnDemandIfNeeded.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: installApplicationOnDemandIfNeeded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.applicationId;
            var _closure2_slot0 = yankee;
            backup = michal.channel;
            zuuluu = michal.onSuccess;
            var _closure2_slot1 = zuuluu;
            offset = michal.sectionName;
            var _closure2_slot2 = offset;
            romeon = michal.location;
            verify = michal.entrypoint;
            var _closure2_slot3 = verify;
            foxtra = michal.commandIntegrationTypes;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            oscard = _closure1_slot2;
            report = oscard.hasUserStateApplication;
            report = report.bind(oscard)(yankee);
            oscard = true;
            golfie = true;
            if(!report) { _fun00002_ip = 112; continue _fun00001 }
 95:
            report = null;
            option = report == zuuluu;
            golfie = false;
            if(option) { _fun00002_ip = 112; continue _fun00001 }
 106:
            option = zuuluu.bind(tangon)();
            golfie = false;
 112:
            report = null;
            option = report != backup;
            if(!option) { _fun00002_ip = 148; continue _fun00001 }
 121:
            output = _closure1_slot2;
            sizing = output.hasContextStateApplication;
            kiloes = backup.id;
            backup = backup.guild_id;
            option = sizing.bind(output)(yankee, kiloes, backup);
 148:
            if(!option) { _fun00002_ip = 153; continue _fun00001 }
 151:
            golfie = false;
 153:
            backup = _closure1_slot3;
            option = backup.getApplication;
            option = option.bind(backup)(yankee);
            _closure2_slot4 = option;
            if(!golfie) { _fun00002_ip = 224; continue _fun00001 }
 175:
            if(!(report != foxtra)) { _fun00002_ip = 253; continue _fun00001 }
 179:
            option = foxtra.includes;
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            golfie = 3;
            golfie = kiloes[golfie];
            golfie = backup.bind(tangon)(golfie);
            golfie = golfie.ApplicationIntegrationType;
            golfie = golfie.USER_INSTALL;
            golfie = option.bind(foxtra)(golfie);
            if(golfie) { _fun00002_ip = 253; continue _fun00001 }
 224:
            if(!(report != zuuluu)) { _fun00002_ip = 232; continue _fun00001 }
 228:
            zuuluu = zuuluu.bind(tangon)();
 232:
            zuuluu = global;
            report = zuuluu.Promise;
            zuuluu = report.resolve;
            zuuluu = zuuluu.bind(report)(oscard);
            return zuuluu;
 253:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            oscard = 4;
            oscard = report[oscard];
            option = zuuluu.bind(tangon)(oscard);
            golfie = option.trackWithMetadata;
            michal = _closure1_slot4;
            oscard = michal.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
            michal = {};
            michal['location'] = romeon;
            michal['application_id'] = yankee;
            michal['section_name'] = offset;
            michal['source'] = verify;
            michal = golfie.bind(option)(oscard, michal);
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ApplicationIntegrationType;
            michal = michal.USER_INSTALL;
            _closure2_slot5 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            update = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 5;
                    michal = tangon[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    michal = oscard.dismissKeyboard;
                    michal = michal.bind(oscard)();
                    michal = 6;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openOAuth2Modal;
                    michal = {};
                    oscard = _closure2_slot0;
                    michal['clientId'] = oscard;
                    oscard = _closure2_slot5;
                    michal['integrationType'] = oscard;
                    oscard = _closure2_slot4;
                    option = null;
                    offset = option == oscard;
                    oscard = undefined;
                    if(offset) { _fun00004_ip = 185; continue _fun00003 }
 100:
                    verify = _closure2_slot4;
                    verify = verify.integrationTypesConfig;
                    offset = option == verify;
                    oscard = undefined;
                    if(offset) { _fun00004_ip = 185; continue _fun00003 }
 119:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot1;
                    golfie = 3;
                    golfie = yankee[golfie];
                    golfie = offset.bind(entity)(golfie);
                    golfie = golfie.ApplicationIntegrationType;
                    golfie = golfie.USER_INSTALL;
                    golfie = verify[golfie];
                    verify = option == golfie;
                    oscard = undefined;
                    if(verify) { _fun00004_ip = 185; continue _fun00003 }
 164:
                    golfie = golfie.oauth2InstallParams;
                    option = option == golfie;
                    oscard = undefined;
                    if(option) { _fun00004_ip = 185; continue _fun00003 }
 179:
                    oscard = golfie.scopes;
 185:
                    michal['scopes'] = oscard;
                    report = function(argFoo) { // Original name: callback
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            oscard = entity.location;
                            tangon = null;
                            if(!(tangon == oscard)) { _fun00006_ip = 35; continue _fun00005 }
 14:
                            zuuluu = _closure3_slot0;
                            michal = undefined;
                            entity = false;
                            entity = zuuluu.bind(michal)(entity);
                            _fun00006_ip = 259; continue _fun00005;
 35:
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot1;
                            michal = 4;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            option = report.bind(zuuluu)(michal);
                            golfie = option.trackWithMetadata;
                            michal = _closure1_slot4;
                            report = michal.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                            michal = {};
                            michal['location'] = oscard;
                            verify = _closure2_slot0;
                            michal['application_id'] = verify;
                            verify = _closure2_slot2;
                            michal['section_name'] = verify;
                            verify = _closure2_slot3;
                            michal['source'] = verify;
                            michal = golfie.bind(option)(report, michal);
                            michal = _closure2_slot1;
                            if(!(tangon != michal)) { _fun00006_ip = 133; continue _fun00005 }
 125:
                            michal = _closure2_slot1;
                            michal = michal.bind(zuuluu)();
 133:
                            michal = _closure2_slot4;
                            michal = tangon != michal;
                            if(!michal) { _fun00006_ip = 184; continue _fun00005 }
 144:
                            report = _closure2_slot5;
                            golfie = _closure1_slot0;
                            option = _closure1_slot1;
                            tangon = 3;
                            tangon = option[tangon];
                            tangon = golfie.bind(zuuluu)(tangon);
                            tangon = tangon.ApplicationIntegrationType;
                            tangon = tangon.USER_INSTALL;
                            michal = report === tangon;
 184:
                            if(!michal) { _fun00006_ip = 245; continue _fun00005 }
 187:
                            tangon = _closure1_slot0;
                            report = _closure1_slot1;
                            michal = 7;
                            michal = report[michal];
                            michal = tangon.bind(zuuluu)(michal);
                            report = michal.ComponentDispatch;
                            tangon = report.safeDispatch;
                            entity = _closure1_slot5;
                            michal = entity.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION;
                            entity = {};
                            oscard = _closure2_slot4;
                            entity['application'] = oscard;
                            entity = tangon.bind(report)(michal, entity);
 245:
                            michal = _closure3_slot0;
                            entity = true;
                            entity = michal.bind(zuuluu)(entity);
 259:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal['callback'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            source = michal;
            entity = new source[zuuluu](update, echoed);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['installApplicationOnDemandIfNeeded'] = michal;
    return entity;
})();