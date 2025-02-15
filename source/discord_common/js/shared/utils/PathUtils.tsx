// discord_common/js/shared/utils/PathUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo) { // Original name: UnescapedPathParam
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['value'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'toString';
        entity['key'] = report;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.value;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot2 = tango;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/shared/utils/PathUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: getLoginPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            golf = arguments[1];
            offset = arguments[2];
            tango = undefined;
            if(!(golf === tango)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            golf = true;
 17:
            if(!(offset === tango)) { _fun00002_ip = 25; continue _fun00001 }
 21:
            offset = '';
 25:
            entity = global;
            mike = entity.window;
            mike = mike.GLOBAL_ENV;
            mike = mike.WEBAPP_ENDPOINT;
            zulu = null;
            report = zulu != mike;
            oscar = '';
            mike = oscar;
            if(!report) { _fun00002_ip = 79; continue _fun00001 }
 61:
            report = entity.window;
            report = report.GLOBAL_ENV;
            mike = report.WEBAPP_ENDPOINT;
 79:
            zulu = zulu != options;
            report = oscar;
            if(!zulu) { _fun00002_ip = 122; continue _fun00001 }
 89:
            zulu = entity.encodeURIComponent;
            options = zulu.bind(tango)(options);
            zulu = entity.HermesInternal;
            tango = zulu.concat;
            zulu = '?redirect_to=';
            report = tango.bind(zulu)(options);
 122:
            zulu = offset.length;
            options = 0;
            tango = offset;
            if(!(options !== zulu)) { _fun00002_ip = 190; continue _fun00001 }
 136:
            zulu = report.length;
            if(!(options !== zulu)) { _fun00002_ip = 167; continue _fun00001 }
 145:
            zulu = entity.HermesInternal;
            options = zulu.concat;
            zulu = '&';
            zulu = options.bind(zulu)(offset);
            _fun00002_ip = 187; continue _fun00001;
 167:
            options = entity.HermesInternal;
            verify = options.concat;
            options = '?';
            zulu = verify.bind(options)(offset);
 187:
            tango = zulu;
 190:
            zulu = oscar;
            if(!golf) { _fun00002_ip = 199; continue _fun00001 }
 196:
            zulu = mike;
 199:
            entity = entity.HermesInternal;
            mike = entity.concat;
            foxtrot = '/login';
            kilo = oscar;
            backup = zulu;
            romeo = report;
            yankee = tango;
            entity = kilo[mike](backup, foxtrot, romeo, yankee, offset);
            return entity;
        }
    };
    zulu['getLoginPath'] = report;
    zulu['UnescapedPathParam'] = tango;
    mike = function(argFoo, argBar) { // Original name: wrapPaths
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = {};
            var _closure2_slot2 = entity;
            oscar = function() { // Original name: _loop
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure2_slot3;
                    zulu = tango[zulu];
                    var _closure3_slot0 = zulu;
                    report = 'function';
                    tango = typeof zulu;
                    if(!(report === tango)) { _fun00006_ip = 53; continue _fun00005 }
 32:
                    report = _closure2_slot2;
                    tango = _closure2_slot3;
                    mike = function(argFoo) {
                        verify = 0;
                        oscar = copyRestArgs(verify);
                        zulu = _closure3_slot0;
                        tango = _closure2_slot1;
                        entity = function(argFoo, argBar) { // Original name: encodePathArguments
                            zulu = argFoo;
                            mike = argBar;
                            var _closure5_slot0 = mike;
                            mike = zulu.map;
                            entity = function(argFoo) {
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    tango = argFoo;
                                    zulu = null;
                                    entity = tango;
                                    if(!(zulu != entity)) { _fun00008_ip = 124; continue _fun00007 }
 12:
                                    mike = _closure1_slot2;
                                    mike = tango instanceof mike;
                                    if(mike) { _fun00008_ip = 112; continue _fun00007 }
 26:
                                    mike = _closure5_slot0;
                                    if(!(zulu != mike)) { _fun00008_ip = 95; continue _fun00007 }
 37:
                                    mike = global;
                                    zulu = mike.String;
                                    mike = undefined;
                                    zulu = zulu.bind(mike)(tango);
                                    mike = zulu.split;
                                    report = '';
                                    oscar = mike.bind(zulu)(report);
                                    zulu = oscar.map;
                                    mike = function(argFoo) {
                                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                            tango = argFoo;
                                            zulu = _closure5_slot0;
                                            mike = null;
                                            if(!(mike != zulu)) { _fun00010_ip = 36; continue _fun00009 }
 16:
                                            mike = _closure5_slot0;
                                            entity = mike.includes;
                                            mike = entity.bind(mike)(tango);
                                            entity = tango;
                                            if(mike) { _fun00010_ip = 51; continue _fun00009 }
 36:
                                            mike = global;
                                            zulu = mike.encodeURIComponent;
                                            mike = undefined;
                                            entity = zulu.bind(mike)(tango);
 51:
                                            return entity;
                                        }
                                    };
                                    zulu = zulu.bind(oscar)(mike);
                                    mike = zulu.join;
                                    mike = mike.bind(zulu)(report);
                                    _fun00008_ip = 110; continue _fun00007;
 95:
                                    zulu = global;
                                    report = zulu.encodeURIComponent;
                                    zulu = undefined;
                                    mike = report.bind(zulu)(tango);
 110:
                                    _fun00008_ip = 121; continue _fun00007;
 112:
                                    zulu = tango.toString;
                                    mike = zulu.bind(tango)();
 121:
                                    entity = mike;
 124:
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = undefined;
                        options = entity.bind(mike)(oscar, tango);
                        entity = new Array(0);
                        verify = entity;
                        golf = 0;
                        tango = arraySpread(verify, options, golf);
                        verify = zulu;
                        options = entity;
                        golf = undefined;
                        entity = apply(verify, options, golf);
                        return entity;
                    };
                    report[tango] = mike;
                    mike = undefined;
                    return mike;
 53:
                    mike = _closure2_slot2;
                    entity = _closure2_slot3;
                    mike[entity] = zulu;
                    entity = 1;
                    return entity;
                }
            };
            mike = global;
            zulu = mike.Object;
            mike = zulu.keys;
            report = mike.bind(zulu)(tango);
            mike = report.length;
            tango = 0;
            mike = tango < mike;
            zulu = undefined;
            if(!mike) { _fun00004_ip = 85; continue _fun00003 }
 61:
            mike = report[tango];
            var _closure2_slot3 = mike;
            mike = oscar.bind(zulu)();
            tango = tango + 1;
            mike = report.length;
            if(tango < mike) { _fun00004_ip = 61; continue _fun00003 }
 85:
            return entity;
        }
    };
    zulu['wrapPaths'] = mike;
    return entity;
})();