// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: isCreatorMonetizationEnabledGuild
        _fun72324: for(var _fun72324_ip = 0; ; ) switch(_fun72324_ip) {
 0:
            report = argFoo;
            mike = report.hasFeature;
            entity = _closure1_slot3;
            entity = entity.CREATOR_MONETIZABLE_DISABLED;
            entity = mike.bind(report)(entity);
            entity = !entity;
            if(!entity) { _fun72324_ip = 81; continue _fun72324 }
 33:
            tango = report.hasFeature;
            mike = _closure1_slot3;
            mike = mike.CREATOR_MONETIZABLE;
            mike = tango.bind(report)(mike);
            if(mike) { _fun72324_ip = 78; continue _fun72324 }
 57:
            tango = report.hasFeature;
            zulu = _closure1_slot3;
            zulu = zulu.CREATOR_MONETIZABLE_PROVISIONAL;
            mike = tango.bind(report)(zulu);
 78:
            entity = mike;
 81:
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useIsCreatorMonetizationEnabledGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun72326: for(var _fun72326_ip = 0; ; ) switch(_fun72326_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getGuild;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun72326_ip = 44; continue _fun72326 }
 33:
                zulu = _closure1_slot4;
                mike = undefined;
                entity = zulu.bind(mike)(tango);
 44:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['isCreatorMonetizationEnabledGuild'] = mike;
    return entity;
})();