// app/modules/messages/MessageUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/MessageUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: canViewPotentiallyNSFWChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot2;
            entity = mike.getCurrentUser;
            report = entity.bind(mike)();
            zulu = _closure1_slot0;
            mike = zulu.getChannel;
            entity = argFoo;
            golf = mike.bind(zulu)(entity);
            oscar = null;
            entity = oscar != report;
            if(!entity) { _fun00002_ip = 46; continue _fun00001 }
 42:
            entity = oscar != golf;
 46:
            if(!entity) { _fun00002_ip = 118; continue _fun00001 }
 49:
            mike = golf.isNSFW;
            mike = mike.bind(golf)();
            mike = !mike;
            if(mike) { _fun00002_ip = 115; continue _fun00001 }
 65:
            zulu = report.nsfwAllowed;
            zulu = oscar != zulu;
            if(!zulu) { _fun00002_ip = 84; continue _fun00001 }
 78:
            zulu = report.nsfwAllowed;
 84:
            if(!zulu) { _fun00002_ip = 112; continue _fun00001 }
 87:
            oscar = _closure1_slot1;
            report = oscar.didAgree;
            tango = golf.getGuildId;
            tango = tango.bind(golf)();
            zulu = report.bind(oscar)(tango);
 112:
            mike = zulu;
 115:
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['canViewPotentiallyNSFWChannel'] = mike;
    return entity;
})();