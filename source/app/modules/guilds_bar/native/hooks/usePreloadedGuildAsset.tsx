// app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tango;
    tango = 1;
    oscar = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot3 = tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: usePreloadedGuildAsset
        _fun114543: for(var _fun114543_ip = 0; ; ) switch(_fun114543_ip) {
 0:
            oscar = argFoo;
            options = argBar;
            entity = argBaz;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = options;
            var _closure2_slot2 = entity;
            yankee = _closure1_slot3;
            report = yankee.useState;
            tango = {};
            report = report.bind(yankee)(tango);
            tango = _closure1_slot2;
            golf = undefined;
            verify = 2;
            report = tango.bind(golf)(report, verify);
            tango = 1;
            tango = report[tango];
            var _closure2_slot3 = tango;
            report = yankee.useRef;
            tango = {};
            tango['guildId'] = oscar;
            tango['asset'] = entity;
            tango['icon'] = options;
            tango['preloading'] = options;
            report = report.bind(yankee)(tango);
            var _closure2_slot4 = report;
            offset = yankee.useEffect;
            options = function() {
                entity = function() {
                    entity = _closure2_slot4;
                    mike = entity.current;
                    entity = undefined;
                    mike['guildId'] = entity;
                    return entity;
                };
                return entity;
            };
            tango = new Array(0);
            tango = offset.bind(yankee)(options, tango);
            options = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[verify];
            tango = options.bind(golf)(tango);
            tango = tango.bind(golf)(report);
            report = tango.guildId;
            if(!(oscar === report)) { _fun114543_ip = 161; continue _fun114543 }
 155:
            entity = tango.asset;
 161:
            tango = _closure1_slot3;
            zulu = tango.useEffect;
            mike = function() {
                _fun114546: for(var _fun114546_ip = 0; ; ) switch(_fun114546_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.guildId;
                    if(!(zulu === mike)) { _fun114546_ip = 171; continue _fun114546 }
 28:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun114546_ip = 171; continue _fun114546 }
 41:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.icon;
                    mike = zulu !== mike;
                    if(!mike) { _fun114546_ip = 89; continue _fun114546 }
 66:
                    tango = _closure2_slot1;
                    zulu = _closure2_slot4;
                    zulu = zulu.current;
                    zulu = zulu.preloading;
                    mike = tango !== zulu;
 89:
                    if(!mike) { _fun114546_ip = 231; continue _fun114546 }
 95:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    tango = _closure2_slot1;
                    mike['preloading'] = tango;
                    report = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.preload;
                    tango = mike.bind(zulu)(tango);
                    zulu = tango.then;
                    mike = function() {
                        _fun114547: for(var _fun114547_ip = 0; ; ) switch(_fun114547_ip) {
 0:
                            mike = _closure2_slot4;
                            mike = mike.current;
                            zulu = mike.guildId;
                            mike = _closure2_slot0;
                            mike = zulu === mike;
                            if(!mike) { _fun114547_ip = 51; continue _fun114547 }
 28:
                            zulu = _closure2_slot4;
                            zulu = zulu.current;
                            tango = zulu.preloading;
                            zulu = _closure2_slot1;
                            mike = tango === zulu;
 51:
                            if(!mike) { _fun114547_ip = 101; continue _fun114547 }
 54:
                            mike = _closure2_slot4;
                            tango = mike.current;
                            zulu = _closure2_slot1;
                            tango['icon'] = zulu;
                            zulu = mike.current;
                            mike = _closure2_slot2;
                            zulu['asset'] = mike;
                            zulu = _closure2_slot3;
                            mike = undefined;
                            entity = {};
                            entity = zulu.bind(mike)(entity);
 101:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    _fun114546_ip = 231; continue _fun114546;
 171:
                    mike = _closure2_slot4;
                    tango = mike.current;
                    zulu = _closure2_slot0;
                    tango['guildId'] = zulu;
                    zulu = mike.current;
                    tango = _closure2_slot1;
                    zulu['icon'] = tango;
                    zulu = mike.current;
                    zulu['preloading'] = tango;
                    mike = mike.current;
                    entity = _closure2_slot2;
                    mike['asset'] = entity;
 231:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();