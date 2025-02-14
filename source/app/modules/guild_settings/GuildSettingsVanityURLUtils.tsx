// app/modules/guild_settings/GuildSettingsVanityURLUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    golf = tango.AbortCodes;
    var _closure1_slot2 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsVanityURLUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getErrorMessageFromErrorCode
        _fun124946: for(var _fun124946_ip = 0; ; ) switch(_fun124946_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot2;
            mike = mike.UNKNOWN_CHANNEL;
            if(!(mike !== zulu)) { _fun124946_ip = 459; continue _fun124946 }
 23:
            mike = _closure1_slot2;
            mike = mike.INVALID_PERMISSIONS;
            if(!(mike !== zulu)) { _fun124946_ip = 400; continue _fun124946 }
 40:
            mike = _closure1_slot2;
            mike = mike.INVALID_ACCESS;
            if(!(mike !== zulu)) { _fun124946_ip = 341; continue _fun124946 }
 57:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS;
            if(!(mike !== zulu)) { _fun124946_ip = 282; continue _fun124946 }
 74:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED;
            if(!(mike !== zulu)) { _fun124946_ip = 223; continue _fun124946 }
 91:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_REQUIREMENTS_NOT_MET;
            if(!(mike !== zulu)) { _fun124946_ip = 164; continue _fun124946 }
 105:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.ckQidX;
            mike = zulu.bind(tango)(mike);
            return mike;
 164:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.w+yGQU;
            mike = zulu.bind(tango)(mike);
            return mike;
 223:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.tSBmIi;
            mike = zulu.bind(tango)(mike);
            return mike;
 282:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.ZpuxVl;
            mike = zulu.bind(tango)(mike);
            return mike;
 341:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.TAXOKy;
            mike = zulu.bind(tango)(mike);
            return mike;
 400:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.lXtut7;
            mike = zulu.bind(tango)(mike);
            return mike;
 459:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 1;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.ETCmRU;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getErrorMessageFromErrorCode'] = tango;
    mike = function(argFoo) { // Original name: canSeeVanityUrlSettings
        _fun124947: for(var _fun124947_ip = 0; ; ) switch(_fun124947_ip) {
 0:
            zulu = argFoo;
            tango = zulu.hasFeature;
            entity = _closure1_slot3;
            entity = entity.VANITY_URL;
            entity = tango.bind(zulu)(entity);
            if(entity) { _fun124947_ip = 69; continue _fun124947 }
 30:
            tango = zulu.hasFeature;
            mike = _closure1_slot3;
            mike = mike.GUILD_WEB_PAGE_VANITY_URL;
            mike = tango.bind(zulu)(mike);
            if(!mike) { _fun124947_ip = 66; continue _fun124947 }
 54:
            tango = zulu.vanityURLCode;
            zulu = null;
            mike = zulu != tango;
 66:
            entity = mike;
 69:
            return entity;
        }
    };
    zulu['canSeeVanityUrlSettings'] = mike;
    return entity;
})();