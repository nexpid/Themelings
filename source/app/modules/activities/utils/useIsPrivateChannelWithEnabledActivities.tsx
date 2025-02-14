// app/modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsPrivateChannelWithEnabledActivities
        _fun73529: for(var _fun73529_ip = 0; ; ) switch(_fun73529_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = report.useStateFromStores;
            oscar = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(report)(zulu, entity);
            entity = null;
            zulu = entity == tango;
            if(zulu) { _fun73529_ip = 83; continue _fun73529 }
 73:
            zulu = tango.isPrivate;
            mike = zulu.bind(tango)();
 83:
            entity = entity != mike;
            if(!entity) { _fun73529_ip = 93; continue _fun73529 }
 90:
            entity = mike;
 93:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: isPrivateChannelWithEnabledActivities
        _fun73531: for(var _fun73531_ip = 0; ; ) switch(_fun73531_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun73531_ip = 57; continue _fun73531 }
 9:
            zulu = _closure1_slot2;
            mike = zulu.getChannel;
            tango = mike.bind(zulu)(tango);
            zulu = entity == tango;
            mike = undefined;
            if(zulu) { _fun73531_ip = 45; continue _fun73531 }
 35:
            zulu = tango.isPrivate;
            mike = zulu.bind(tango)();
 45:
            entity = entity != mike;
            if(!entity) { _fun73531_ip = 55; continue _fun73531 }
 52:
            entity = mike;
 55:
            return entity;
 57:
            entity = false;
            return entity;
        }
    };
    zulu['isPrivateChannelWithEnabledActivities'] = mike;
    return entity;
})();