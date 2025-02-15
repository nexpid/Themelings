// discord_common/js/packages/transition-group/TransitionChildMapping.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/transition-group/TransitionChildMapping.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getChildMapping
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            entity = {};
            var _closure2_slot0 = entity;
            if(!oscar) { _fun00002_ip = 68; continue _fun00001 }
 14:
            zulu = _closure1_slot0;
            report = zulu.Children;
            tango = report.map;
            zulu = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            tango = tango.bind(report)(oscar, zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun00002_ip = 68; continue _fun00001 }
 51:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.key;
                    entity = null;
                    if(!(entity != mike)) { _fun00004_ip = 25; continue _fun00003 }
 14:
                    entity = _closure2_slot0;
                    entity[mike] = zulu;
 25:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 68:
            return entity;
        }
    };
    zulu['getChildMapping'] = tango;
    mike = function() { // Original name: mergeChildMappings
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            mike = arguments[1];
            oscar = undefined;
            if(!(entity === oscar)) { _fun00006_ip = 16; continue _fun00005 }
 14:
            entity = {};
 16:
            var _closure2_slot0 = entity;
            if(!(mike === oscar)) { _fun00006_ip = 26; continue _fun00005 }
 24:
            mike = {};
 26:
            var _closure2_slot1 = mike;
            report = function(argFoo) { // Original name: getValueForKey
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot1;
                    entity = tango.hasOwnProperty;
                    entity = entity.bind(tango)(zulu);
                    if(entity) { _fun00008_ip = 34; continue _fun00007 }
 24:
                    entity = _closure2_slot0;
                    entity = entity[zulu];
                    _fun00008_ip = 42; continue _fun00007;
 34:
                    mike = _closure2_slot1;
                    entity = mike[zulu];
 42:
                    return entity;
                }
            };
            romeo = {};
            tango = new Array(0);
            verify = entity;
            entity = tango;
            tango = entity;
            for(zulu in verify)
 60:
            {
                foxtrot = entity;
                tango = foxtrot;
 75:
                yankee = zulu;
                backup = mike.hasOwnProperty;
                backup = backup.bind(mike)(yankee);
                if(backup) { _fun00006_ip = 107; continue _fun00005 }
 92:
                backup = foxtrot.push;
                backup = backup.bind(foxtrot)(yankee);
                entity = foxtrot;
                _fun00006_ip = 60; continue _fun00005;
 107:
                backup = foxtrot.length;
                entity = foxtrot;
                if(!backup) { _fun00006_ip = 60; continue _fun00005 }
 118:
                romeo[yankee] = foxtrot;
                entity = new Array(0);
                _fun00006_ip = 60; continue _fun00005;
            }
 128:
            entity = {};
            offset = mike;
            zulu = 0;
            mike = undefined;
            for(golf in offset)
 145:
            {
 154:
                backup = golf;
                foxtrot = romeo.hasOwnProperty;
                foxtrot = foxtrot.bind(romeo)(backup);
                if(!foxtrot) { _fun00006_ip = 235; continue _fun00005 }
 171:
                foxtrot = romeo[backup];
                foxtrot = foxtrot.length;
                foxtrot = zulu < foxtrot;
                kilo = 0;
                mike = 0;
                if(!foxtrot) { _fun00006_ip = 235; continue _fun00005 }
 191:
                foxtrot = romeo[backup];
                foxtrot = foxtrot[kilo];
                sizing = romeo[backup];
                sizing = sizing[kilo];
                foxtrot = report.bind(oscar)(foxtrot);
                entity[sizing] = foxtrot;
                kilo = kilo + 1;
                foxtrot = romeo[backup];
                foxtrot = foxtrot.length;
                mike = kilo;
                if(mike < foxtrot) { _fun00006_ip = 191; continue _fun00005 }
 235:
                foxtrot = report.bind(oscar)(backup);
                entity[backup] = foxtrot;
                _fun00006_ip = 145; continue _fun00005;
            }
 246:
            mike = tango.length;
            mike = zulu < mike;
            zulu = 0;
            if(!mike) { _fun00006_ip = 289; continue _fun00005 }
 260:
            golf = tango[zulu];
            mike = tango[zulu];
            mike = report.bind(oscar)(mike);
            entity[golf] = mike;
            zulu = zulu + 1;
            mike = tango.length;
            if(zulu < mike) { _fun00006_ip = 260; continue _fun00005 }
 289:
            return entity;
        }
    };
    zulu['mergeChildMappings'] = mike;
    return entity;
})();