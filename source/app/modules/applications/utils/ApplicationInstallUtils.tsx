// app/modules/applications/utils/ApplicationInstallUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: canInstallApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.customInstallUrl;
            zuuluu = michal.installParams;
            report = michal.integrationTypesConfig;
            michal = null;
            entity = michal != entity;
            if(entity) { _fun00002_ip = 34; continue _fun00001 }
 30:
            entity = michal != zuuluu;
 34:
            if(entity) { _fun00002_ip = 83; continue _fun00001 }
 37:
            michal = michal != report;
            if(!michal) { _fun00002_ip = 80; continue _fun00001 }
 44:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            report = zuuluu.bind(tangon)(report);
            tangon = report.some;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = null;
                    report = zuuluu == tangon;
                    entity = undefined;
                    if(report) { _fun00004_ip = 20; continue _fun00003 }
 14:
                    entity = tangon.oauth2_install_params;
 20:
                    entity = zuuluu != entity;
                    if(entity) { _fun00004_ip = 46; continue _fun00003 }
 27:
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00004_ip = 42; continue _fun00003 }
 36:
                    michal = tangon.oauth2InstallParams;
 42:
                    entity = zuuluu != michal;
 46:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu);
 80:
            entity = michal;
 83:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.BuiltInSectionId;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/applications/utils/ApplicationInstallUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['canInstallApplication'] = tangon;
    tangon = function(argFoo) { // Original name: isAppUserInstallable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.customInstallUrl;
            report = entity.installParams;
            zuuluu = entity.integrationTypesConfig;
            tangon = _closure1_slot4;
            entity = {};
            entity['customInstallUrl'] = oscard;
            entity['installParams'] = report;
            entity['integrationTypesConfig'] = zuuluu;
            report = undefined;
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00006_ip = 61; continue _fun00005 }
 55:
            tangon = null;
            entity = tangon != zuuluu;
 61:
            if(!entity) { _fun00006_ip = 100; continue _fun00005 }
 64:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.ApplicationIntegrationType;
            michal = michal.USER_INSTALL;
            entity = michal in zuuluu;
 100:
            return entity;
        }
    };
    zuuluu['isAppUserInstallable'] = tangon;
    michal = function(argFoo) { // Original name: shouldInstallApplicationOnDemand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.applicationId;
            option = entity.channel;
            report = entity.commandIntegrationTypes;
            tangon = null;
            michal = tangon != report;
            if(!michal) { _fun00008_ip = 78; continue _fun00007 }
 28:
            zuuluu = report.includes;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            oscard = oscard[entity];
            entity = undefined;
            entity = golfie.bind(entity)(oscard);
            entity = entity.ApplicationIntegrationType;
            entity = entity.USER_INSTALL;
            entity = zuuluu.bind(report)(entity);
            michal = !entity;
 78:
            entity = !michal;
            if(michal) { _fun00008_ip = 186; continue _fun00007 }
 84:
            michal = _closure1_slot3;
            michal = michal.BUILT_IN;
            zuuluu = verify === michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00008_ip = 183; continue _fun00007 }
 107:
            oscard = _closure1_slot2;
            zuuluu = oscard.hasUserStateApplication;
            zuuluu = zuuluu.bind(oscard)(verify);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00008_ip = 180; continue _fun00007 }
 128:
            tangon = tangon == option;
            if(tangon) { _fun00008_ip = 177; continue _fun00007 }
 135:
            golfie = _closure1_slot2;
            oscard = golfie.hasContextStateApplication;
            report = {};
            report['applicationId'] = verify;
            verify = option.id;
            report['channelId'] = verify;
            option = option.guild_id;
            report['guildId'] = option;
            report = oscard.bind(golfie)(report);
            tangon = !report;
 177:
            zuuluu = tangon;
 180:
            michal = zuuluu;
 183:
            entity = michal;
 186:
            return entity;
        }
    };
    zuuluu['shouldInstallApplicationOnDemand'] = michal;
    return entity;
})();