// app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MFALevels;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useIsMFAEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 3;
            tango = golf[zulu];
            report = undefined;
            offset = oscar.bind(report)(tango);
            verify = offset.useStateFromStores;
            tango = _closure1_slot3;
            options = new Array(1);
            options[0] = tango;
            tango = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = verify.bind(offset)(options, tango);
            zulu = golf[zulu];
            golf = oscar.bind(report)(zulu);
            oscar = golf.useStateFromStores;
            options = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getProps;
                entity = entity.bind(mike)();
                entity = entity.mfaLevel;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu, entity);
            entity = {};
            oscar = null;
            oscar = oscar == tango;
            if(oscar) { _fun00002_ip = 113; continue _fun00001 }
 107:
            report = tango.mfaEnabled;
 113:
            tango = true;
            tango = tango === report;
            entity['isUserMFAEnabled'] = tango;
            mike = _closure1_slot4;
            mike = mike.ELEVATED;
            mike = zulu === mike;
            entity['isModerationMFAEnabled'] = mike;
            return entity;
        }
    };
    zulu['useIsMFAEnabled'] = mike;
    return entity;
})();