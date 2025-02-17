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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot2;
            mike = mike.UNKNOWN_CHANNEL;
            if(!(mike !== zulu)) { _fun00002_ip = 471; continue _fun00001 }
 23:
            mike = _closure1_slot2;
            mike = mike.INVALID_PERMISSIONS;
            if(!(mike !== zulu)) { _fun00002_ip = 410; continue _fun00001 }
 40:
            mike = _closure1_slot2;
            mike = mike.INVALID_ACCESS;
            if(!(mike !== zulu)) { _fun00002_ip = 349; continue _fun00001 }
 57:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS;
            if(!(mike !== zulu)) { _fun00002_ip = 288; continue _fun00001 }
 74:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED;
            if(!(mike !== zulu)) { _fun00002_ip = 227; continue _fun00001 }
 91:
            mike = _closure1_slot2;
            mike = mike.VANITY_URL_REQUIREMENTS_NOT_MET;
            if(!(mike !== zulu)) { _fun00002_ip = 166; continue _fun00001 }
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
 166:
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
 227:
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
 288:
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
 349:
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
 410:
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
 471:
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            tango = zulu.hasFeature;
            entity = _closure1_slot3;
            entity = entity.VANITY_URL;
            entity = tango.bind(zulu)(entity);
            if(entity) { _fun00004_ip = 69; continue _fun00003 }
 30:
            tango = zulu.hasFeature;
            mike = _closure1_slot3;
            mike = mike.GUILD_WEB_PAGE_VANITY_URL;
            mike = tango.bind(zulu)(mike);
            if(!mike) { _fun00004_ip = 66; continue _fun00003 }
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