// app/utils/NicknameUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function(argFoo, argBar, argBaz) { // Original name: getNickname
        _fun54442: for(var _fun54442_ip = 0; ; ) switch(_fun54442_ip) {
 0:
            report = argFoo;
            golf = argBar;
            mike = argBaz;
            entity = null;
            if(!(entity != mike)) { _fun54442_ip = 107; continue _fun54442 }
 15:
            if(!(entity == report)) { _fun54442_ip = 81; continue _fun54442 }
 19:
            if(!(entity != golf)) { _fun54442_ip = 57; continue _fun54442 }
 23:
            oscar = _closure1_slot3;
            tango = oscar.getChannel;
            oscar = tango.bind(oscar)(golf);
            if(!(entity != oscar)) { _fun54442_ip = 57; continue _fun54442 }
 44:
            tango = oscar.isPrivate;
            tango = tango.bind(oscar)();
            if(tango) { _fun54442_ip = 59; continue _fun54442 }
 57:
            return entity;
 59:
            oscar = _closure1_slot5;
            tango = oscar.getNickname;
            zulu = mike.id;
            zulu = tango.bind(oscar)(zulu);
            return zulu;
 81:
            tango = _closure1_slot4;
            zulu = tango.getNick;
            mike = mike.id;
            mike = zulu.bind(tango)(report, mike);
            return mike;
 107:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getName
        _fun54443: for(var _fun54443_ip = 0; ; ) switch(_fun54443_ip) {
 0:
            tango = argBaz;
            zulu = null;
            if(!(zulu != tango)) { _fun54443_ip = 68; continue _fun54443 }
 9:
            golf = _closure1_slot6;
            report = undefined;
            oscar = argFoo;
            entity = argBar;
            entity = golf.bind(report)(oscar, entity, tango);
            if(!(zulu == entity)) { _fun54443_ip = 66; continue _fun54443 }
 35:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getName;
            entity = mike.bind(zulu)(tango);
 66:
            _fun54443_ip = 128; continue _fun54443;
 68:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.sKdZ6e;
            entity = zulu.bind(tango)(mike);
 128:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: useName
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(3);
        mike[0] = oscar;
        oscar = _closure1_slot3;
        mike[1] = oscar;
        report = _closure1_slot5;
        mike[2] = report;
        entity = function() {
            report = _closure1_slot7;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            mike = _closure2_slot2;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = {};
    oscar['getNickname'] = report;
    oscar['getName'] = tango;
    oscar['useName'] = mike;
    golf = 6;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/NicknameUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['getNickname'] = report;
    zulu['getName'] = tango;
    zulu['useName'] = mike;
    return entity;
})();