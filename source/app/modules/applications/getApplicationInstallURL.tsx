// app/modules/applications/getApplicationInstallURL.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/getApplicationInstallURL.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getActivityLaunchURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.applicationId;
            report = entity.customId;
            golfie = entity.referrerId;
            option = entity.linkId;
            entity = global;
            tangon = entity.URL;
            zuuluu = _closure1_slot0;
            michal = zuuluu.ACTIVITY_DETAILS;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = entity.location;
            offset = michal.protocol;
            michal = entity.location;
            verify = michal.host;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            michal = '';
            entity = '//';
            romeon = oscard.bind(michal)(offset, entity, verify);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            backup = michal;
            foxtra = zuuluu;
            entity = new backup[tangon](foxtra, romeon, yankee);
            michal = entity instanceof Object ? entity : michal;
            tangon = michal.searchParams;
            entity = null;
            if(!(entity != option)) { _fun00002_ip = 154; continue _fun00001 }
 139:
            oscard = tangon.set;
            zuuluu = 'link_id';
            zuuluu = oscard.bind(tangon)(zuuluu, option);
 154:
            if(!(entity != golfie)) { _fun00002_ip = 173; continue _fun00001 }
 158:
            oscard = tangon.set;
            zuuluu = 'referrer_id';
            zuuluu = oscard.bind(tangon)(zuuluu, golfie);
 173:
            if(!(entity != report)) { _fun00002_ip = 192; continue _fun00001 }
 177:
            zuuluu = tangon.set;
            entity = 'custom_id';
            entity = zuuluu.bind(tangon)(entity, report);
 192:
            entity = michal.toString;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['getActivityLaunchURL'] = tangon;
    michal = function(argFoo) { // Original name: getApplicationInstallURL
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            option = michal.id;
            entity = michal.customInstallUrl;
            report = michal.installParams;
            verify = michal.integrationTypesConfig;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 267; continue _fun00003 }
 35:
            michal = global;
            tangon = michal.URLSearchParams;
            oscard = tangon.prototype;
            oscard = Object.create(oscard, {constructor: {value: tangon}});
            sizing = oscard;
            tangon = new sizing[tangon](kiloes);
            tangon = tangon instanceof Object ? tangon : oscard;
            golfie = tangon.set;
            oscard = 'client_id';
            oscard = golfie.bind(tangon)(oscard, option);
            oscard = zuuluu != verify;
            if(!oscard) { _fun00004_ip = 119; continue _fun00003 }
 85:
            option = michal.Object;
            golfie = option.values;
            verify = golfie.bind(option)(verify);
            option = verify.some;
            golfie = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = null;
                    report = zuuluu == tangon;
                    entity = undefined;
                    if(report) { _fun00006_ip = 20; continue _fun00005 }
 14:
                    entity = tangon.oauth2_install_params;
 20:
                    entity = zuuluu != entity;
                    if(entity) { _fun00006_ip = 46; continue _fun00005 }
 27:
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00006_ip = 42; continue _fun00005 }
 36:
                    michal = tangon.oauth2InstallParams;
 42:
                    entity = zuuluu != michal;
 46:
                    return entity;
                }
            };
            oscard = option.bind(verify)(golfie);
 119:
            if(!(zuuluu != report)) { _fun00004_ip = 190; continue _fun00003 }
 123:
            if(oscard) { _fun00004_ip = 190; continue _fun00003 }
 126:
            option = report.permissions;
            golfie = report.scopes;
            if(!(zuuluu != option)) { _fun00004_ip = 157; continue _fun00003 }
 142:
            oscard = tangon.set;
            report = 'permissions';
            report = oscard.bind(tangon)(report, option);
 157:
            if(!(zuuluu != golfie)) { _fun00004_ip = 190; continue _fun00003 }
 161:
            oscard = tangon.set;
            report = golfie.join;
            zuuluu = ' ';
            report = report.bind(golfie)(zuuluu);
            zuuluu = 'scope';
            zuuluu = oscard.bind(tangon)(zuuluu, report);
 190:
            zuuluu = michal.location;
            kiloes = zuuluu.protocol;
            zuuluu = michal.location;
            foxtra = zuuluu.host;
            zuuluu = _closure1_slot0;
            romeon = zuuluu.OAUTH2_AUTHORIZE;
            zuuluu = tangon.toString;
            offset = zuuluu.bind(tangon)();
            michal = michal.HermesInternal;
            report = michal.concat;
            sizing = '';
            backup = '//';
            yankee = '?';
            michal = sizing[report](kiloes, backup, foxtra, romeon, yankee, offset, verify);
            return michal;
 267:
            return entity;
        }
    };
    zuuluu['getApplicationInstallURL'] = michal;
    return entity;
})();