// app/utils/ChatRestrictions.tsx
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
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.TOKEN_REGEX;
    var _closure1_slot3 = mike;
    tango = {};
    mike = function(argFoo, argBar, argBaz) { // Original name: check
        _fun87476: for(var _fun87476_ip = 0; ; ) switch(_fun87476_ip) {
 0:
            zulu = argBar;
            entity = argBaz;
            if(entity) { _fun87476_ip = 13; continue _fun87476 }
 9:
            entity = false;
            return entity;
 13:
            entity = zulu.getGuildId;
            mike = entity.bind(zulu)();
            entity = null;
            if(!(entity != mike)) { _fun87476_ip = 452; continue _fun87476 }
 32:
            golf = _closure1_slot1;
            report = _closure1_slot2;
            tango = 1;
            report = report[tango];
            oscar = undefined;
            options = golf.bind(oscar)(report);
            golf = options.extractEveryoneRole;
            report = argFoo;
            foxtrot = golf.bind(options)(report, zulu);
            if(!(entity != foxtrot)) { _fun87476_ip = 448; continue _fun87476 }
 79:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[tango];
            report = report.bind(oscar)(entity);
            entity = report.shouldShowEveryoneGuard;
            entity = entity.bind(report)(foxtrot, zulu);
            if(entity) { _fun87476_ip = 115; continue _fun87476 }
 111:
            entity = false;
            return entity;
 115:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            tango = entity[tango];
            report = report.bind(oscar)(tango);
            tango = report.everyoneMemberCount;
            offset = tango.bind(report)(foxtrot, zulu);
            romeo = global;
            options = romeo.Math;
            golf = options.pow;
            verify = romeo.Math;
            report = verify.floor;
            yankee = romeo.Math;
            tango = yankee.log10;
            tango = tango.bind(yankee)(offset);
            report = report.bind(verify)(tango);
            tango = 10;
            yankee = golf.bind(options)(tango, report);
            tango = _closure1_slot0;
            golf = 2;
            entity = entity[golf];
            entity = tango.bind(oscar)(entity);
            entity = entity.t;
            verify = entity.47E5R0;
            entity = zulu.isForumPost;
            entity = entity.bind(zulu)();
            if(entity) { _fun87476_ip = 284; continue _fun87476 }
 241:
            entity = zulu.isThread;
            entity = entity.bind(zulu)();
            if(!entity) { _fun87476_ip = 312; continue _fun87476 }
 254:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.t;
            verify = entity.2YaiQ0;
            _fun87476_ip = 312; continue _fun87476;
 284:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golf];
            entity = zulu.bind(oscar)(entity);
            entity = entity.t;
            verify = entity.sYW2c3;
 312:
            entity = {};
            report = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            options = zulu.intl;
            tango = options.formatToPlainString;
            zulu = {};
            zulu['role'] = foxtrot;
            foxtrot = romeo.Math;
            romeo = foxtrot.trunc;
            offset = offset / yankee;
            offset = romeo.bind(foxtrot)(offset);
            yankee = offset * yankee;
            offset = yankee.toLocaleString;
            offset = offset.bind(yankee)();
            zulu['count'] = offset;
            zulu = tango.bind(options)(verify, zulu);
            entity['body'] = zulu;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = mike[golf];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.mVyrtr;
            mike = zulu.bind(tango)(mike);
            entity['footer'] = mike;
            return entity;
 448:
            entity = false;
            return entity;
 452:
            entity = false;
            return entity;
        }
    };
    tango['check'] = mike;
    mike = '@Everyone Warning';
    tango['analyticsType'] = mike;
    tango['animation'] = entity;
    mike = new Array(2);
    mike[0] = tango;
    tango = {};
    golf = function(argFoo) { // Original name: check
        _fun87477: for(var _fun87477_ip = 0; ; ) switch(_fun87477_ip) {
 0:
            tango = _closure1_slot3;
            mike = tango.test;
            entity = argFoo;
            entity = mike.bind(tango)(entity);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun87477_ip = 95; continue _fun87477 }
 29:
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 2;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.sTwS1d;
            zulu = tango.bind(report)(zulu);
            mike['body'] = zulu;
            entity = mike;
 95:
            return entity;
        }
    };
    tango['check'] = golf;
    golf = 'API Token Warning';
    tango['analyticsType'] = golf;
    mike[1] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/ChatRestrictions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['RESTRICTIONS'] = mike;
    return entity;
})();