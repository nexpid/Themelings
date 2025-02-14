// app/modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    report = function(argFoo) { // Original name: isRestrictedFromShowingGuildPurchaseEntryPoints
        _fun43999: for(var _fun43999_ip = 0; ; ) switch(_fun43999_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun43999_ip = 35; continue _fun43999 }
 12:
            zulu = tango.includes;
            mike = _closure1_slot3;
            mike = mike.NEW_PURCHASES_DISABLED;
            entity = zulu.bind(tango)(mike);
 35:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tango = function(argFoo) { // Original name: isRestrictedFromUpdatingCreatorMonetizationSettings
        _fun44000: for(var _fun44000_ip = 0; ; ) switch(_fun44000_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun44000_ip = 35; continue _fun44000 }
 12:
            zulu = tango.includes;
            mike = _closure1_slot3;
            mike = mike.SETTINGS_READ_ONLY;
            entity = zulu.bind(tango)(mike);
 35:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    oscar = 0;
    offset = options[oscar];
    entity = undefined;
    offset = verify.bind(entity)(offset);
    var _closure1_slot0 = offset;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.FetchState;
    var _closure1_slot1 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.CreatorMonetizationRestrictions;
    var _closure1_slot3 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildFeatures;
    var _closure1_slot4 = oscar;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['isRestrictedFromShowingGuildPurchaseEntryPoints'] = report;
    report = function(argFoo) { // Original name: shouldHideGuildPurchaseEntryPoints
        _fun44001: for(var _fun44001_ip = 0; ; ) switch(_fun44001_ip) {
 0:
            golf = argFoo;
            entity = null;
            if(!(entity != golf)) { _fun44001_ip = 121; continue _fun44001 }
 9:
            tango = _closure1_slot0;
            zulu = tango.getMonetizationRestrictionsFetchState;
            report = zulu.bind(tango)(golf);
            zulu = tango.getMonetizationRestrictions;
            tango = zulu.bind(tango)(golf);
            oscar = _closure1_slot2;
            zulu = oscar.getGuild;
            golf = zulu.bind(oscar)(golf);
            zulu = _closure1_slot1;
            zulu = zulu.FETCHED;
            if(!(report !== zulu)) { _fun44001_ip = 108; continue _fun44001 }
 66:
            report = entity == golf;
            zulu = undefined;
            if(report) { _fun44001_ip = 96; continue _fun44001 }
 75:
            oscar = golf.hasFeature;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE_RESTRICTED;
            zulu = oscar.bind(golf)(report);
 96:
            entity = entity == zulu;
            if(entity) { _fun44001_ip = 106; continue _fun44001 }
 103:
            entity = zulu;
 106:
            _fun44001_ip = 119; continue _fun44001;
 108:
            zulu = _closure1_slot5;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 119:
            return entity;
 121:
            entity = false;
            return entity;
        }
    };
    zulu['shouldHideGuildPurchaseEntryPoints'] = report;
    zulu['isRestrictedFromUpdatingCreatorMonetizationSettings'] = tango;
    tango = function(argFoo) { // Original name: shouldRestrictUpdatingCreatorMonetizationSettings
        _fun44002: for(var _fun44002_ip = 0; ; ) switch(_fun44002_ip) {
 0:
            golf = argFoo;
            entity = null;
            if(!(entity != golf)) { _fun44002_ip = 121; continue _fun44002 }
 9:
            tango = _closure1_slot0;
            zulu = tango.getMonetizationRestrictionsFetchState;
            report = zulu.bind(tango)(golf);
            zulu = tango.getMonetizationRestrictions;
            tango = zulu.bind(tango)(golf);
            oscar = _closure1_slot2;
            zulu = oscar.getGuild;
            golf = zulu.bind(oscar)(golf);
            zulu = _closure1_slot1;
            zulu = zulu.FETCHED;
            if(!(report !== zulu)) { _fun44002_ip = 108; continue _fun44002 }
 66:
            report = entity == golf;
            zulu = undefined;
            if(report) { _fun44002_ip = 96; continue _fun44002 }
 75:
            oscar = golf.hasFeature;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE_RESTRICTED;
            zulu = oscar.bind(golf)(report);
 96:
            entity = entity == zulu;
            if(entity) { _fun44002_ip = 106; continue _fun44002 }
 103:
            entity = zulu;
 106:
            _fun44002_ip = 119; continue _fun44002;
 108:
            zulu = _closure1_slot6;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 119:
            return entity;
 121:
            entity = false;
            return entity;
        }
    };
    zulu['shouldRestrictUpdatingCreatorMonetizationSettings'] = tango;
    mike = function(argFoo) { // Original name: isRestrictedFromMonetizationReapplication
        _fun44003: for(var _fun44003_ip = 0; ; ) switch(_fun44003_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun44003_ip = 35; continue _fun44003 }
 12:
            zulu = tango.includes;
            mike = _closure1_slot3;
            mike = mike.REAPPLICATION_DISABLED;
            entity = zulu.bind(tango)(mike);
 35:
            return entity;
        }
    };
    zulu['isRestrictedFromMonetizationReapplication'] = mike;
    return entity;
})();