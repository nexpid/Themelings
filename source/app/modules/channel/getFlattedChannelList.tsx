// app/modules/channel/getFlattedChannelList.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/getFlattedChannelList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getFlattenedChannelList
        _fun60113: for(var _fun60113_ip = 0; ; ) switch(_fun60113_ip) {
 0:
            zulu = arguments[2];
            mike = argBar;
            var _closure2_slot0 = mike;
            report = undefined;
            if(!(zulu === report)) { _fun60113_ip = 23; continue _fun60113 }
 18:
            zulu = function() { // Original name: l
                entity = true;
                return entity;
            };
 23:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 0;
            mike = oscar[mike];
            tango = tango.bind(report)(mike);
            mike = argFoo;
            tango = tango.bind(report)(mike);
            mike = tango.map;
            entity = function(argFoo) {
                _fun60115: for(var _fun60115_ip = 0; ; ) switch(_fun60115_ip) {
 0:
                    mike = argFoo;
                    entity = mike.channel;
                    zulu = entity.id;
                    entity = 'null';
                    if(!(entity !== zulu)) { _fun60115_ip = 56; continue _fun60115 }
 21:
                    entity = new Array(2);
                    entity[0] = mike;
                    tango = _closure2_slot0;
                    zulu = mike.channel;
                    zulu = zulu.id;
                    zulu = tango[zulu];
                    entity[1] = zulu;
                    _fun60115_ip = 77; continue _fun60115;
 56:
                    zulu = _closure2_slot0;
                    mike = mike.channel;
                    mike = mike.id;
                    entity = zulu[mike];
 77:
                    return entity;
                }
            };
            mike = mike.bind(tango)(entity);
            entity = mike.flattenDeep;
            mike = entity.bind(mike)();
            entity = mike.filter;
            mike = entity.bind(mike)(zulu);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();