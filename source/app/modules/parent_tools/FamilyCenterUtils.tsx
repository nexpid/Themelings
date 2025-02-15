// app/modules/parent_tools/FamilyCenterUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    golf = tango.FAMILY_CENTER_ERROR_CODE_TO_FAILURE;
    var _closure1_slot3 = golf;
    golf = tango.FamilyCenterFailureCode;
    var _closure1_slot4 = golf;
    tango = tango.TeenActionDisplayType;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/parent_tools/FamilyCenterUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        entity = {};
        tango = _closure1_slot0;
        report = _closure1_slot2;
        mike = 1;
        oscar = report[mike];
        zulu = undefined;
        oscar = tango.bind(zulu)(oscar);
        options = oscar.intl;
        golf = options.string;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.VjIAQU;
        oscar = golf.bind(options)(oscar);
        entity['today'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        options = oscar.intl;
        golf = options.string;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.2a8xHR;
        oscar = golf.bind(options)(oscar);
        entity['yesterday'] = oscar;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.t;
        mike = mike.Xt6oND;
        entity['days'] = mike;
        return entity;
    };
    zulu['getEmptyActivityFormatter'] = tango;
    tango = function(argFoo) {
        _fun60420: for(var _fun60420_ip = 0; ; ) switch(_fun60420_ip) {
 0:
            mike = {};
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 1;
            entity = oscar[zulu];
            tango = undefined;
            entity = report.bind(tango)(entity);
            verify = entity.intl;
            options = verify.string;
            entity = oscar[zulu];
            entity = report.bind(tango)(entity);
            golf = entity.t;
            entity = argFoo;
            if(entity) { _fun60420_ip = 152; continue _fun60420 }
 57:
            entity = golf.g1ZX6u;
            entity = options.bind(verify)(entity);
            mike['today'] = entity;
            entity = oscar[zulu];
            entity = report.bind(tango)(entity);
            yankee = entity.intl;
            offset = yankee.string;
            entity = oscar[zulu];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.s3qSVl;
            entity = offset.bind(yankee)(entity);
            mike['yesterday'] = entity;
            entity = oscar[zulu];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.f1UJiI;
            mike['days'] = entity;
            entity = mike;
            _fun60420_ip = 245; continue _fun60420;
 152:
            golf = golf.2AtcIi;
            golf = options.bind(verify)(golf);
            mike['today'] = golf;
            golf = oscar[zulu];
            golf = report.bind(tango)(golf);
            verify = golf.intl;
            options = verify.string;
            golf = oscar[zulu];
            golf = report.bind(tango)(golf);
            golf = golf.t;
            golf = golf.stOECg;
            golf = options.bind(verify)(golf);
            mike['yesterday'] = golf;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.n8n5BQ;
            mike['days'] = zulu;
            entity = mike;
 245:
            return entity;
        }
    };
    zulu['getActivityWindowTimestampFormatter'] = tango;
    tango = function(argFoo, argBar, argBaz) {
        _fun60421: for(var _fun60421_ip = 0; ; ) switch(_fun60421_ip) {
 0:
            report = argFoo;
            offset = argBaz;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 2;
            mike = golf[zulu];
            tango = undefined;
            mike = oscar.bind(tango)(mike);
            yankee = mike.bind(tango)();
            verify = yankee.diff;
            mike = golf[zulu];
            mike = oscar.bind(tango)(mike);
            options = mike.bind(tango)(report);
            mike = 's';
            romeo = verify.bind(yankee)(options, mike);
            mike = argBar;
            mike = mike.bind(tango)();
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            oscar = zulu.bind(tango)(report);
            report = oscar.format;
            zulu = 'LL';
            zulu = report.bind(oscar)(zulu);
            oscar = 86400;
            if(!(!(romeo < oscar))) { _fun60421_ip = 240; continue _fun60421 }
 113:
            zulu = 172800;
            if(!(!(romeo < zulu))) { _fun60421_ip = 232; continue _fun60421 }
 123:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            report = entity.intl;
            tango = report.formatToPlainString;
            zulu = mike.days;
            entity = {};
            golf = global;
            verify = golf.Math;
            options = verify.min;
            yankee = golf.Math;
            golf = yankee.floor;
            oscar = romeo / oscar;
            golf = golf.bind(yankee)(oscar);
            oscar = null;
            yankee = oscar != offset;
            oscar = 999;
            if(!yankee) { _fun60421_ip = 213; continue _fun60421 }
 210:
            oscar = offset;
 213:
            oscar = options.bind(verify)(golf, oscar);
            entity['days'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun60421_ip = 238; continue _fun60421;
 232:
            entity = mike.yesterday;
 238:
            _fun60421_ip = 246; continue _fun60421;
 240:
            entity = mike.today;
 246:
            return entity;
        }
    };
    zulu['formatUserActivityTimestamp'] = tango;
    tango = function(argFoo, argBar) {
        _fun60422: for(var _fun60422_ip = 0; ; ) switch(_fun60422_ip) {
 0:
            tango = argFoo;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 2;
            mike = golf[entity];
            report = undefined;
            mike = oscar.bind(report)(mike);
            offset = mike.bind(report)();
            verify = offset.diff;
            mike = golf[entity];
            mike = oscar.bind(report)(mike);
            options = mike.bind(report)(tango);
            mike = 's';
            offset = verify.bind(offset)(options, mike);
            mike = argBar;
            mike = mike.bind(report)();
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            oscar = entity.bind(report)(tango);
            tango = oscar.format;
            entity = 'LL';
            verify = tango.bind(oscar)(entity);
            golf = 60;
            if(!(!(offset < golf))) { _fun60422_ip = 434; continue _fun60422 }
 107:
            yankee = 3600;
            if(!(!(offset < yankee))) { _fun60422_ip = 361; continue _fun60422 }
 120:
            romeo = 86400;
            if(!(!(offset < romeo))) { _fun60422_ip = 288; continue _fun60422 }
 133:
            entity = 172800;
            if(!(!(offset < entity))) { _fun60422_ip = 280; continue _fun60422 }
 146:
            entity = 604800;
            if(!(!(offset < entity))) { _fun60422_ip = 207; continue _fun60422 }
 156:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 1;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            options = entity.intl;
            oscar = options.formatToPlainString;
            tango = mike.date;
            entity = {};
            entity['date'] = verify;
            entity = oscar.bind(options)(tango, entity);
            _fun60422_ip = 278; continue _fun60422;
 207:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 1;
            tango = options[tango];
            tango = oscar.bind(report)(tango);
            verify = tango.intl;
            options = verify.formatToPlainString;
            oscar = mike.days;
            tango = {};
            foxtrot = global;
            backup = foxtrot.Math;
            foxtrot = backup.floor;
            romeo = offset / romeo;
            romeo = foxtrot.bind(backup)(romeo);
            tango['count'] = romeo;
            entity = options.bind(verify)(oscar, tango);
 278:
            _fun60422_ip = 286; continue _fun60422;
 280:
            entity = mike.yesterday;
 286:
            _fun60422_ip = 359; continue _fun60422;
 288:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 1;
            tango = options[tango];
            tango = oscar.bind(report)(tango);
            verify = tango.intl;
            options = verify.formatToPlainString;
            oscar = mike.hours;
            tango = {};
            romeo = global;
            foxtrot = romeo.Math;
            romeo = foxtrot.floor;
            yankee = offset / yankee;
            yankee = romeo.bind(foxtrot)(yankee);
            tango['count'] = yankee;
            entity = options.bind(verify)(oscar, tango);
 359:
            _fun60422_ip = 432; continue _fun60422;
 361:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 1;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            oscar = zulu.intl;
            report = oscar.formatToPlainString;
            tango = mike.minutes;
            zulu = {};
            options = global;
            verify = options.Math;
            options = verify.floor;
            golf = offset / golf;
            golf = options.bind(verify)(golf);
            zulu['count'] = golf;
            entity = report.bind(oscar)(tango, zulu);
 432:
            _fun60422_ip = 440; continue _fun60422;
 434:
            entity = mike.seconds;
 440:
            return entity;
        }
    };
    zulu['formatLinkTimestamp'] = tango;
    tango = function(argFoo) {
        _fun60423: for(var _fun60423_ip = 0; ; ) switch(_fun60423_ip) {
 0:
            zulu = argFoo;
            tango = zulu.display_type;
            entity = _closure1_slot5;
            entity = entity.USER_ADD;
            entity = tango === entity;
            if(entity) { _fun60423_ip = 49; continue _fun60423 }
 29:
            report = zulu.display_type;
            tango = _closure1_slot5;
            tango = tango.USER_INTERACTION;
            entity = report === tango;
 49:
            if(entity) { _fun60423_ip = 72; continue _fun60423 }
 52:
            zulu = zulu.display_type;
            mike = _closure1_slot5;
            mike = mike.USER_CALLED;
            entity = zulu === mike;
 72:
            return entity;
        }
    };
    zulu['isUserAction'] = tango;
    tango = function(argFoo) {
        _fun60424: for(var _fun60424_ip = 0; ; ) switch(_fun60424_ip) {
 0:
            zulu = argFoo;
            tango = zulu.display_type;
            entity = _closure1_slot5;
            entity = entity.GUILD_ADD;
            entity = tango === entity;
            if(entity) { _fun60424_ip = 49; continue _fun60424 }
 29:
            zulu = zulu.display_type;
            mike = _closure1_slot5;
            mike = mike.GUILD_INTERACTION;
            entity = zulu === mike;
 49:
            return entity;
        }
    };
    zulu['isGuildAction'] = tango;
    tango = function(argFoo) {
        _fun60425: for(var _fun60425_ip = 0; ; ) switch(_fun60425_ip) {
 0:
            report = argFoo;
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = _closure1_slot5;
            tango = mike.bind(zulu)(entity);
            entity = tango.length;
            zulu = 0;
            entity = zulu < entity;
            if(!entity) { _fun60425_ip = 71; continue _fun60425 }
 42:
            entity = tango[zulu];
            mike = entity.toString;
            mike = mike.bind(entity)();
            if(!(mike !== report)) { _fun60425_ip = 75; continue _fun60425 }
 59:
            zulu = zulu + 1;
            mike = tango.length;
            if(zulu < mike) { _fun60425_ip = 42; continue _fun60425 }
 71:
            mike = undefined;
            return mike;
 75:
            return entity;
        }
    };
    zulu['displayTypeFromString'] = tango;
    mike = function(argFoo) {
        _fun60426: for(var _fun60426_ip = 0; ; ) switch(_fun60426_ip) {
 0:
            zulu = _closure1_slot3;
            entity = argFoo;
            entity = entity.code;
            entity = zulu[entity];
            zulu = null;
            if(!(zulu == entity)) { _fun60426_ip = 35; continue _fun60426 }
 25:
            mike = _closure1_slot4;
            entity = mike.GENERIC_ERROR;
 35:
            return entity;
        }
    };
    zulu['getFailureCodeForAPIError'] = mike;
    return entity;
})();