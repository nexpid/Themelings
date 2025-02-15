// app/modules/applications/AppDMsExperimentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: _isChannelEligibleForAppDMs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            mike = entity == report;
            zulu = undefined;
            if(mike) { _fun00002_ip = 24; continue _fun00001 }
 14:
            mike = report.isDM;
            zulu = mike.bind(report)();
 24:
            mike = true;
            if(!(mike === zulu)) { _fun00002_ip = 73; continue _fun00001 }
 30:
            tango = _closure1_slot4;
            zulu = tango.getUser;
            mike = report.getRecipientId;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            entity = entity != mike;
            if(!entity) { _fun00002_ip = 71; continue _fun00001 }
 65:
            entity = mike.bot;
 71:
            return entity;
 73:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/AppDMsExperimentUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useShowAppDMsUI
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot5;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        mike = 2;
        report = report[mike];
        mike = undefined;
        oscar = oscar.bind(mike)(report);
        report = oscar.useStateFromStores;
        golf = _closure1_slot3;
        tango = new Array(1);
        tango[0] = golf;
        entity = function() {
            zulu = _closure1_slot3;
            mike = zulu.getChannel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = report.bind(oscar)(tango, entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useShowAppDMsUI'] = tango;
    tango = function(argFoo) { // Original name: canShowAppDMsUI
        zulu = _closure1_slot5;
        tango = _closure1_slot3;
        mike = tango.getChannel;
        entity = argFoo;
        mike = mike.bind(tango)(entity);
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['canShowAppDMsUI'] = tango;
    mike = function(argFoo) { // Original name: canUseActivityPopoutInAppDM
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.activityPopoutWindowInAppDMEnabled;
        return entity;
    };
    zulu['canUseActivityPopoutInAppDM'] = mike;
    return entity;
})();