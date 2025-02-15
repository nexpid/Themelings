// app/modules/media_viewer/native/components/MediaModalLoader.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    output = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    romeo = 0;
    tango = oscar[romeo];
    entity = undefined;
    tango = output.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    offset = 2;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    foxtrot = tango.StyleSheet;
    options = tango.View;
    var _closure1_slot5 = options;
    tango = tango.ActivityIndicator;
    var _closure1_slot6 = tango;
    verify = 3;
    tango = oscar[verify];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = oscar[verify];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    options = foxtrot.create;
    tango = {};
    backup = {};
    update = foxtrot.absoluteFillObject;
    source = backup;
    kilo = copyDataProperties(source, update);
    kilo = 'flex';
    backup[kilo] = yankee;
    kilo = 'center';
    sizing = 'alignItems';
    backup[sizing] = kilo;
    sizing = 'justifyContent';
    backup[sizing] = kilo;
    result = 'rgba(0, 0, 0, 0.7)';
    sizing = 'backgroundColor';
    backup[sizing] = result;
    tango['loader'] = backup;
    backup = {};
    sizing = 4;
    sizing = oscar[sizing];
    sizing = output.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_12;
    backup['marginTop'] = sizing;
    tango['loaderIndicator'] = backup;
    backup = {};
    backup['textAlign'] = kilo;
    tango['loaderText'] = backup;
    tango = options.bind(foxtrot)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    tango['None'] = romeo;
    options = 'None';
    tango[romeo] = options;
    tango['Loading'] = yankee;
    options = 'Loading';
    tango[yankee] = options;
    tango['Loaded'] = offset;
    options = 'Loaded';
    tango[offset] = options;
    tango['Error'] = verify;
    options = 'Error';
    tango[verify] = options;
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: MediaModalLoader
        _fun102418: for(var _fun102418_ip = 0; ; ) switch(_fun102418_ip) {
 0:
            oscar = argFoo;
            options = oscar.Component;
            verify = oscar.style;
            control = oscar.onLoadStart;
            var _closure2_slot0 = control;
            zulu = oscar.onLoad;
            var _closure2_slot1 = zulu;
            source = oscar.onError;
            var _closure2_slot2 = source;
            romeo = oscar.index;
            report = undefined;
            if(!(romeo === report)) { _fun102418_ip = 59; continue _fun102418 }
 57:
            romeo = 0;
 59:
            yankee = oscar.source;
            tango = {'Component': 0, 'style': 0, 'onLoadStart': 0, 'onLoad': 0, 'onError': 0, 'index': 0, 'source': 0};
            kilo = null;
            record = tango;
            config = null;
            entity = silentSetPrototypeOf(record, config);
            sizing = 0;
            record = {};
            config = oscar;
            sequence = tango;
            foxtrot = copyDataProperties(record, config, sequence);
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            tango = _closure1_slot4;
            offset = tango.useState;
            entity = _closure1_slot10;
            golf = entity.None;
            golf = offset.bind(tango)(golf);
            result = _closure1_slot3;
            output = 2;
            golf = result.bind(report)(golf, output);
            offset = golf[sizing];
            _closure2_slot3 = offset;
            backup = 1;
            golf = golf[backup];
            _closure2_slot4 = golf;
            golf = tango.useState;
            golf = golf.bind(tango)(sizing);
            golf = result.bind(report)(golf, output);
            update = golf[sizing];
            golf = golf[backup];
            _closure2_slot5 = golf;
            golf = tango.useRef;
            golf = golf.bind(tango)(kilo);
            _closure2_slot6 = golf;
            sizing = tango.useCallback;
            backup = function() {
                mike = _closure2_slot6;
                entity = global;
                report = entity.setTimeout;
                tango = undefined;
                zulu = function() {
                    zulu = _closure2_slot4;
                    entity = undefined;
                    mike = function(argFoo) {
                        _fun102421: for(var _fun102421_ip = 0; ; ) switch(_fun102421_ip) {
 0:
                            entity = _closure1_slot10;
                            zulu = entity.None;
                            entity = argFoo;
                            if(!(entity !== zulu)) { _fun102421_ip = 32; continue _fun102421 }
 20:
                            entity = _closure1_slot10;
                            entity = entity.None;
                            _fun102421_ip = 42; continue _fun102421;
 32:
                            mike = _closure1_slot10;
                            entity = mike.Loading;
 42:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = 1000;
                entity = report.bind(tango)(zulu, entity);
                mike['current'] = entity;
                return entity;
            };
            golf = new Array(0);
            result = sizing.bind(tango)(backup, golf);
            sizing = tango.useCallback;
            backup = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                tango = entity.loaded;
                mike = entity.total;
                zulu = _closure2_slot5;
                entity = 100;
                entity = entity * tango;
                mike = entity / mike;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            golf = new Array(0);
            output = sizing.bind(tango)(backup, golf);
            sizing = tango.useCallback;
            backup = function() {
                zulu = _closure2_slot4;
                entity = _closure1_slot10;
                mike = entity.Loaded;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            golf = new Array(0);
            sizing = sizing.bind(tango)(backup, golf);
            echo = tango.useCallback;
            backup = function() {
                zulu = _closure2_slot4;
                entity = _closure1_slot10;
                mike = entity.Error;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            golf = new Array(0);
            backup = echo.bind(tango)(backup, golf);
            echo = tango.useEffect;
            golf = new Array(4);
            golf[0] = offset;
            golf[1] = control;
            golf[2] = source;
            golf[3] = zulu;
            zulu = function() {
                _fun102425: for(var _fun102425_ip = 0; ; ) switch(_fun102425_ip) {
 0:
                    zulu = _closure2_slot3;
                    tango = _closure1_slot10;
                    tango = tango.Loading;
                    if(!(tango !== zulu)) { _fun102425_ip = 95; continue _fun102425 }
 24:
                    tango = _closure1_slot10;
                    tango = tango.Error;
                    if(!(tango !== zulu)) { _fun102425_ip = 73; continue _fun102425 }
 37:
                    mike = _closure1_slot10;
                    mike = mike.Loaded;
                    if(!(mike === zulu)) { _fun102425_ip = 115; continue _fun102425 }
 51:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun102425_ip = 115; continue _fun102425 }
 61:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _fun102425_ip = 115; continue _fun102425;
 73:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun102425_ip = 115; continue _fun102425 }
 83:
                    zulu = _closure2_slot2;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _fun102425_ip = 115; continue _fun102425;
 95:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun102425_ip = 115; continue _fun102425 }
 105:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 115:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = echo.bind(tango)(zulu, golf);
            zulu = tango.useEffect;
            mike = function() {
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure2_slot6;
                    mike = entity.current;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity = entity.Error;
            if(!(offset !== entity)) { _fun102418_ip = 830; continue _fun102418 }
 375:
            zulu = _closure1_slot8;
            entity = _closure1_slot4;
            mike = entity.Fragment;
            entity = {};
            golf = _closure1_slot7;
            tango = {};
            record = tango;
            config = foxtrot;
            foxtrot = copyDataProperties(record, config);
            foxtrot = 'style';
            tango[foxtrot] = verify;
            foxtrot = 'source';
            tango[foxtrot] = yankee;
            foxtrot = 'onLoadStart';
            tango[foxtrot] = result;
            foxtrot = 'onProgress';
            tango[foxtrot] = output;
            foxtrot = 'onLoad';
            tango[foxtrot] = sizing;
            foxtrot = 'onError';
            tango[foxtrot] = backup;
            backup = 'image';
            foxtrot = 'accessibilityRole';
            tango[foxtrot] = backup;
            foxtrot = yankee.description;
            sizing = kilo != foxtrot;
            backup = undefined;
            if(!sizing) { _fun102418_ip = 490; continue _fun102418 }
 487:
            backup = foxtrot;
 490:
            foxtrot = 'accessibilityLabel';
            tango[foxtrot] = backup;
            backup = true;
            foxtrot = 'loop';
            tango[foxtrot] = backup;
            golf = golf.bind(report)(options, tango);
            tango = new Array(3);
            tango[0] = golf;
            golf = _closure1_slot10;
            options = golf.Loading;
            golf = null;
            if(!(offset === options)) { _fun102418_ip = 763; continue _fun102418 }
 543:
            foxtrot = _closure1_slot8;
            offset = _closure1_slot5;
            options = {};
            backup = _closure1_slot9;
            sizing = backup.loader;
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = verify;
            options['style'] = backup;
            backup = yankee.videoURI;
            backup = kilo == backup;
            kilo = null;
            if(!backup) { _fun102418_ip = 697; continue _fun102418 }
 594:
            output = _closure1_slot8;
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            backup = 5;
            backup = result[backup];
            backup = sizing.bind(report)(backup);
            sizing = backup.Text;
            backup = {'style': null, 'variant': 'heading-md/semibold', 'color': 'always-white'};
            result = _closure1_slot9;
            result = result.loaderText;
            backup['style'] = result;
            result = global;
            echo = result.Math;
            result = echo.round;
            echo = result.bind(echo)(update);
            result = new Array(2);
            result[0] = echo;
            echo = '%';
            result[1] = echo;
            backup['children'] = result;
            kilo = output.bind(report)(sizing, backup);
 697:
            backup = new Array(2);
            backup[0] = kilo;
            output = _closure1_slot7;
            sizing = _closure1_slot6;
            kilo = {'color': 'white', 'style': null, 'size': 'large'};
            result = _closure1_slot9;
            result = result.loaderIndicator;
            kilo['style'] = result;
            kilo = output.bind(report)(sizing, kilo);
            backup[1] = kilo;
            options['children'] = backup;
            golf = foxtrot.bind(report)(offset, options);
 763:
            tango[1] = golf;
            offset = _closure1_slot7;
            options = _closure1_slot1;
            foxtrot = _closure1_slot2;
            golf = 7;
            golf = foxtrot[golf];
            options = options.bind(report)(golf);
            golf = {};
            golf['style'] = verify;
            golf['index'] = romeo;
            golf['source'] = yankee;
            golf = offset.bind(report)(options, golf);
            tango[2] = golf;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun102418_ip = 984; continue _fun102418;
 830:
            tango = _closure1_slot7;
            zulu = _closure1_slot5;
            mike = {};
            options = _closure1_slot9;
            offset = options.loader;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = verify;
            mike['style'] = golf;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 5;
            oscar = romeo[oscar];
            oscar = yankee.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'variant': 'heading-md/semibold', 'color': 'always-white'};
            options = options.loaderText;
            oscar['style'] = options;
            options = 6;
            verify = romeo[options];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(report)(options);
            options = options.t;
            options = options.+ITMYW;
            options = verify.bind(offset)(options);
            oscar['children'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 984:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_viewer/native/components/MediaModalLoader.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();