// app/intl/util.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function() { // Original name: getLanguages
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 3;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'intl/util.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: getAvailableLocales
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 0;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        tango = tango.default;
        var _closure2_slot0 = tango;
        mike = _closure1_slot2;
        tango = mike.bind(zulu)();
        zulu = tango.filter;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.enabled;
            return entity;
        };
        tango = zulu.bind(tango)(mike);
        zulu = tango.map;
        mike = function(argFoo) {
            entity = argFoo;
            report = entity.code;
            mike = entity.name;
            entity = {};
            entity['value'] = report;
            entity['name'] = mike;
            zulu = _closure2_slot0;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.runtimeHashMessageKey;
            mike = mike.bind(tango)(report);
            mike = zulu[mike];
            entity['localizedName'] = mike;
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zulu = entity.name;
                entity = argBar;
                mike = entity.name;
                entity = zulu.toLowerCase;
                zulu = entity.bind(zulu)();
                entity = mike.toLowerCase;
                mike = entity.bind(mike)();
                tango = zulu < mike;
                entity = -1;
                if(tango) { _fun00002_ip = 64; continue _fun00001 }
 49:
                zulu = zulu > mike;
                mike = 0;
                if(!zulu) { _fun00002_ip = 61; continue _fun00001 }
 58:
                mike = 1;
 61:
                entity = mike;
 64:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getAvailableLocales'] = report;
    zulu['getLanguages'] = tango;
    mike = function(argFoo, argBar) { // Original name: getNormalizedLocale
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            zulu = _closure1_slot2;
            mike = undefined;
            oscar = zulu.bind(mike)();
            zulu = oscar.filter;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
            oscar = zulu.bind(oscar)(mike);
            zulu = oscar.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.code;
                return entity;
            };
            golf = zulu.bind(oscar)(mike);
            mike = golf.includes;
            mike = mike.bind(golf)(entity);
            if(mike) { _fun00004_ip = 205; continue _fun00003 }
 67:
            zulu = entity.split;
            mike = '-';
            oscar = zulu.bind(entity)(mike);
            var _closure2_slot0 = oscar;
            options = golf.includes;
            zulu = 0;
            mike = oscar[zulu];
            mike = options.bind(golf)(mike);
            zulu = oscar[zulu];
            if(mike) { _fun00004_ip = 200; continue _fun00003 }
 108:
            mike = 'zh';
            if(!(mike === zulu)) { _fun00004_ip = 142; continue _fun00003 }
 116:
            options = oscar.length;
            mike = 1;
            if(!(options > mike)) { _fun00004_ip = 142; continue _fun00003 }
 128:
            oscar = oscar[mike];
            mike = 'Hant';
            if(!(mike !== oscar)) { _fun00004_ip = 171; continue _fun00003 }
 142:
            oscar = golf.find;
            mike = function(argFoo) {
                zulu = argFoo;
                mike = zulu.split;
                entity = '-';
                entity = mike.bind(zulu)(entity);
                zulu = 0;
                mike = entity[zulu];
                entity = _closure2_slot0;
                entity = entity[zulu];
                entity = mike === entity;
                return entity;
            };
            oscar = oscar.bind(golf)(mike);
            options = null;
            mike = tango;
            if(!(options != oscar)) { _fun00004_ip = 169; continue _fun00003 }
 166:
            mike = oscar;
 169:
            _fun00004_ip = 198; continue _fun00003;
 171:
            oscar = golf.find;
            report = function(argFoo) {
                mike = 'zh-TW';
                entity = argFoo;
                entity = mike === entity;
                return entity;
            };
            report = oscar.bind(golf)(report);
            oscar = null;
            if(!(oscar != report)) { _fun00004_ip = 195; continue _fun00003 }
 192:
            tango = report;
 195:
            mike = tango;
 198:
            _fun00004_ip = 203; continue _fun00003;
 200:
            mike = zulu;
 203:
            return mike;
 205:
            return entity;
        }
    };
    zulu['getNormalizedLocale'] = mike;
    return entity;
})();