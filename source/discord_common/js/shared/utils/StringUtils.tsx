// discord_common/js/shared/utils/StringUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golf = argBar;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = golf;
        var _closure1_slot1 = options;
        entity = global;
        verify = entity.Object;
        oscar = verify.defineProperty;
        tango = {};
        mike = true;
        tango['value'] = mike;
        mike = '__esModule';
        mike = oscar.bind(verify)(zulu, mike, tango);
        mike = /[\u0300-\u036f]/g;
        var _closure1_slot2 = mike;
        mike = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        var _closure1_slot3 = mike;
        mike = entity.String;
        mike = mike.prototype;
        tango = mike.normalize;
        mike = null;
        if(!(mike != tango)) { _fun00002_ip = 117; continue _fun00001 }
 110:
        tango = function(argFoo) {
            zulu = argFoo;
            mike = zulu.normalize;
            entity = 'NFD';
            tango = mike.bind(zulu)(entity);
            zulu = tango.replace;
            mike = _closure1_slot2;
            entity = '';
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.normalize;
            entity = 'NFC';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        _fun00002_ip = 122; continue _fun00001;
 117:
        tango = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 122:
        entity = entity.String;
        entity = entity.prototype;
        entity = entity.normalize;
        if(!(mike != entity)) { _fun00002_ip = 150; continue _fun00001 }
 143:
        mike = function(argFoo) { // Original name: fullNormalize
            report = argFoo;
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            tango = 0;
            zulu = mike[tango];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            var _closure2_slot0 = mike;
            mike = '';
            var _closure2_slot1 = mike;
            mike = report.normalize;
            zulu = 'NFD';
            options = mike.bind(report)(zulu);
            report = new Array(0);
            verify = report;
            golf = 0;
            mike = arraySpread(verify, options, golf);
            tango = report.forEach;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot1;
                    tango = _closure2_slot0;
                    tango = tango[zulu];
                    report = null;
                    if(!(report != tango)) { _fun00004_ip = 27; continue _fun00003 }
 24:
                    zulu = tango;
 27:
                    entity = entity + zulu;
                    _closure2_slot1 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            mike = _closure2_slot1;
            entity = mike.normalize;
            mike = entity.bind(mike)(zulu);
            entity = mike.toLocaleLowerCase;
            entity = entity.bind(mike)();
            return entity;
        };
        _fun00002_ip = 155; continue _fun00001;
 150:
        mike = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 155:
        entity = 1;
        oscar = options[entity];
        entity = undefined;
        offset = golf.bind(entity)(oscar);
        verify = offset.fileFinishedImporting;
        oscar = '../discord_common/js/shared/utils/StringUtils.tsx';
        oscar = verify.bind(offset)(oscar);
        oscar = 2;
        oscar = options[oscar];
        oscar = golf.bind(entity)(oscar);
        oscar = oscar.cssValueToNumber;
        zulu['cssValueToNumber'] = oscar;
        oscar = function(argFoo) { // Original name: upperCaseFirstChar
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscar = argFoo;
                entity = null;
                mike = entity == oscar;
                report = '';
                entity = report;
                if(mike) { _fun00006_ip = 74; continue _fun00005 }
 19:
                zulu = oscar.charAt;
                mike = 0;
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.toUpperCase;
                tango = mike.bind(zulu)();
                zulu = oscar.slice;
                mike = 1;
                zulu = zulu.bind(oscar)(mike);
                mike = global;
                mike = mike.HermesInternal;
                mike = mike.concat;
                entity = mike.bind(report)(tango, zulu);
 74:
                return entity;
            }
        };
        zulu['upperCaseFirstChar'] = oscar;
        oscar = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                offset = argBar;
                oscar = arguments[2];
                entity = undefined;
                if(!(oscar === entity)) { _fun00008_ip = 19; continue _fun00007 }
 15:
                oscar = '…';
 19:
                mike = null;
                tango = mike == zulu;
                report = '';
                entity = report;
                if(tango) { _fun00008_ip = 206; continue _fun00007 }
 38:
                mike = mike == offset;
                entity = report;
                if(mike) { _fun00008_ip = 206; continue _fun00007 }
 51:
                tango = zulu.length;
                mike = zulu;
                if(!(tango > offset)) { _fun00008_ip = 203; continue _fun00007 }
 66:
                golf = _closure1_slot3;
                tango = golf.test;
                tango = tango.bind(golf)(zulu);
                if(tango) { _fun00008_ip = 111; continue _fun00007 }
 86:
                options = zulu.substring;
                tango = oscar.length;
                golf = offset - tango;
                tango = 0;
                golf = options.bind(zulu)(tango, golf);
                _fun00008_ip = 159; continue _fun00007;
 111:
                verify = new Array(0);
                options = 0;
                foxtrot = verify;
                romeo = zulu;
                yankee = 0;
                zulu = arraySpread(foxtrot, romeo, yankee);
                tango = verify.slice;
                zulu = oscar.length;
                zulu = offset - zulu;
                tango = tango.bind(verify)(options, zulu);
                zulu = tango.join;
                golf = zulu.bind(tango)(report);
 159:
                tango = golf.replace;
                zulu = /[\s.]+$/;
                tango = tango.bind(golf)(zulu, report);
                zulu = global;
                zulu = zulu.HermesInternal;
                zulu = zulu.concat;
                mike = zulu.bind(report)(tango, oscar);
 203:
                entity = mike;
 206:
                return entity;
            }
        };
        zulu['truncateText'] = oscar;
        report = function(argFoo) { // Original name: getAcronym
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscar = argFoo;
                entity = null;
                mike = entity != oscar;
                report = '';
                entity = report;
                if(!mike) { _fun00010_ip = 105; continue _fun00009 }
 19:
                tango = oscar.replace;
                zulu = /'s /g;
                mike = ' ';
                oscar = tango.bind(oscar)(zulu, mike);
                tango = oscar.replace;
                zulu = /\w+/g;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = 0;
                    entity = mike[entity];
                    return entity;
                };
                tango = tango.bind(oscar)(zulu, mike);
                zulu = tango.replace;
                mike = /\s/g;
                entity = zulu.bind(tango)(mike, report);
 105:
                return entity;
            }
        };
        zulu['getAcronym'] = report;
        zulu['stripDiacritics'] = tango;
        zulu['normalize'] = mike;
        return entity;
    }
})();