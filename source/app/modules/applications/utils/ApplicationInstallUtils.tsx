// app/modules/applications/utils/ApplicationInstallUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/applications/utils/ApplicationInstallUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['canInstallApplication'] = tangon;
    michal = function(argFoo) { // Original name: isAppUserInstallable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.customInstallUrl;
            report = entity.installParams;
            zuuluu = entity.integrationTypesConfig;
            tangon = _closure1_slot2;
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
            if(!entity) { _fun00006_ip = 99; continue _fun00005 }
 64:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 0;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.ApplicationIntegrationType;
            michal = michal.USER_INSTALL;
            entity = michal in zuuluu;
 99:
            return entity;
        }
    };
    zuuluu['isAppUserInstallable'] = michal;
    return entity;
})();