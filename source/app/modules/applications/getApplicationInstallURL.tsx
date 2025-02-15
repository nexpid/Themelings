// app/modules/applications/getApplicationInstallURL.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/getApplicationInstallURL.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getActivityLaunchURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.applicationId;
            report = entity.customId;
            golf = entity.referrerId;
            entity = global;
            tango = entity.URL;
            zulu = _closure1_slot0;
            mike = zulu.ACTIVITY_DETAILS;
            zulu = mike.bind(zulu)(oscar);
            mike = entity.location;
            verify = mike.protocol;
            mike = entity.location;
            options = mike.host;
            entity = entity.HermesInternal;
            oscar = entity.concat;
            mike = '';
            entity = '//';
            yankee = oscar.bind(mike)(verify, entity, options);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            foxtrot = mike;
            romeo = zulu;
            entity = new foxtrot[tango](romeo, yankee, offset);
            mike = entity instanceof Object ? entity : mike;
            tango = mike.searchParams;
            entity = null;
            if(!(entity != golf)) { _fun00002_ip = 148; continue _fun00001 }
 133:
            oscar = tango.set;
            zulu = 'referrer_id';
            zulu = oscar.bind(tango)(zulu, golf);
 148:
            if(!(entity != report)) { _fun00002_ip = 167; continue _fun00001 }
 152:
            zulu = tango.set;
            entity = 'custom_id';
            entity = zulu.bind(tango)(entity, report);
 167:
            entity = mike.toString;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['getActivityLaunchURL'] = tango;
    mike = function(argFoo) { // Original name: getApplicationInstallURL
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            options = mike.id;
            entity = mike.customInstallUrl;
            report = mike.installParams;
            verify = mike.integrationTypesConfig;
            zulu = null;
            if(!(zulu == entity)) { _fun00004_ip = 269; continue _fun00003 }
 35:
            mike = global;
            tango = mike.URLSearchParams;
            oscar = tango.prototype;
            oscar = Object.create(oscar, {constructor: {value: tango}});
            sizing = oscar;
            tango = new sizing[tango](kilo);
            tango = tango instanceof Object ? tango : oscar;
            golf = tango.set;
            oscar = 'client_id';
            oscar = golf.bind(tango)(oscar, options);
            oscar = zulu != verify;
            if(!oscar) { _fun00004_ip = 121; continue _fun00003 }
 85:
            options = mike.Object;
            golf = options.values;
            verify = golf.bind(options)(verify);
            options = verify.some;
            golf = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    zulu = null;
                    report = zulu == tango;
                    entity = undefined;
                    if(report) { _fun00006_ip = 20; continue _fun00005 }
 14:
                    entity = tango.oauth2_install_params;
 20:
                    entity = zulu != entity;
                    if(entity) { _fun00006_ip = 46; continue _fun00005 }
 27:
                    report = zulu == tango;
                    mike = undefined;
                    if(report) { _fun00006_ip = 42; continue _fun00005 }
 36:
                    mike = tango.oauth2InstallParams;
 42:
                    entity = zulu != mike;
 46:
                    return entity;
                }
            };
            oscar = options.bind(verify)(golf);
 121:
            if(!(zulu != report)) { _fun00004_ip = 192; continue _fun00003 }
 125:
            if(oscar) { _fun00004_ip = 192; continue _fun00003 }
 128:
            options = report.permissions;
            golf = report.scopes;
            if(!(zulu != options)) { _fun00004_ip = 159; continue _fun00003 }
 144:
            oscar = tango.set;
            report = 'permissions';
            report = oscar.bind(tango)(report, options);
 159:
            if(!(zulu != golf)) { _fun00004_ip = 192; continue _fun00003 }
 163:
            oscar = tango.set;
            report = golf.join;
            zulu = ' ';
            report = report.bind(golf)(zulu);
            zulu = 'scope';
            zulu = oscar.bind(tango)(zulu, report);
 192:
            zulu = mike.location;
            kilo = zulu.protocol;
            zulu = mike.location;
            foxtrot = zulu.host;
            zulu = _closure1_slot0;
            romeo = zulu.OAUTH2_AUTHORIZE;
            zulu = tango.toString;
            offset = zulu.bind(tango)();
            mike = mike.HermesInternal;
            report = mike.concat;
            sizing = '';
            backup = '//';
            yankee = '?';
            mike = sizing[report](kilo, backup, foxtrot, romeo, yankee, offset, verify);
            return mike;
 269:
            return entity;
        }
    };
    zulu['getApplicationInstallURL'] = mike;
    return entity;
})();