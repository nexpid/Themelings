// discord_common/js/packages/media-engine/webrtc/ui/Video.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    mike = function(argFoo) { // Original name: Video
        report = argFoo;
        golf = report.streamId;
        var _closure2_slot0 = golf;
        verify = report.paused;
        var _closure2_slot1 = verify;
        tango = report.onReady;
        var _closure2_slot2 = tango;
        oscar = report.onResize;
        var _closure2_slot3 = oscar;
        offset = report.className;
        mike = {'streamId': 0, 'paused': 0, 'onReady': 0, 'onResize': 0, 'className': 0};
        yankee = null;
        kilo = mike;
        backup = null;
        entity = silentSetPrototypeOf(kilo, backup);
        kilo = {};
        backup = report;
        foxtrot = mike;
        entity = copyDataProperties(kilo, backup, foxtrot);
        options = _closure1_slot3;
        report = options.useRef;
        report = report.bind(options)(yankee);
        var _closure2_slot4 = report;
        romeo = _closure1_slot3;
        yankee = romeo.useRef;
        options = {'width': 0, 'height': 0};
        options = yankee.bind(romeo)(options);
        var _closure2_slot5 = options;
        romeo = _closure1_slot3;
        yankee = romeo.useLayoutEffect;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            _fun50917: for(var _fun50917_ip = 0; ; ) switch(_fun50917_ip) {
 0:
                mike = _closure2_slot4;
                zulu = mike.current;
                var _closure3_slot0 = zulu;
                mike = null;
                if(!(mike == zulu)) { _fun50917_ip = 28; continue _fun50917 }
 24:
                mike = undefined;
                return mike;
 28:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 2;
                mike = golf[mike];
                tango = undefined;
                options = oscar.bind(tango)(mike);
                mike = options.registerActiveSink;
                report = _closure2_slot0;
                mike = mike.bind(options)(report);
                mike = 3;
                mike = golf[mike];
                tango = oscar.bind(tango)(mike);
                mike = tango.getVideoStream;
                mike = mike.bind(tango)(report);
                zulu['srcObject'] = mike;
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.unregisterActiveSink;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure3_slot0;
                    mike = null;
                    zulu['srcObject'] = mike;
                    mike = zulu.load;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                return entity;
            }
        };
        golf = yankee.bind(romeo)(golf, options);
        romeo = _closure1_slot3;
        yankee = romeo.useEffect;
        options = new Array(1);
        options[0] = verify;
        golf = function() {
            _fun50919: for(var _fun50919_ip = 0; ; ) switch(_fun50919_ip) {
 0:
                report = _closure2_slot1;
                zulu = _closure2_slot4;
                tango = zulu.current;
                zulu = null;
                if(report) { _fun50919_ip = 55; continue _fun50919 }
 23:
                if(!(zulu != tango)) { _fun50919_ip = 109; continue _fun50919 }
 27:
                report = tango.play;
                golf = report.bind(tango)();
                oscar = golf.catch;
                report = function() {
                    entity = undefined;
                    return entity;
                };
                report = oscar.bind(golf)(report);
                _fun50919_ip = 109; continue _fun50919;
 55:
                if(!(zulu != tango)) { _fun50919_ip = 69; continue _fun50919 }
 59:
                zulu = tango.pause;
                zulu = zulu.bind(tango)();
 69:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 2;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.unregisterActiveSink;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
 109:
                entity = function() {
                    _fun50921: for(var _fun50921_ip = 0; ; ) switch(_fun50921_ip) {
 0:
                        mike = _closure2_slot1;
                        if(!mike) { _fun50921_ip = 50; continue _fun50921 }
 10:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 2;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.registerActiveSink;
                        entity = _closure2_slot0;
                        entity = mike.bind(zulu)(entity);
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            }
        };
        golf = yankee.bind(romeo)(golf, options);
        yankee = _closure1_slot3;
        options = yankee.useCallback;
        golf = new Array(1);
        golf[0] = oscar;
        oscar = function() {
            _fun50922: for(var _fun50922_ip = 0; ; ) switch(_fun50922_ip) {
 0:
                entity = _closure2_slot5;
                entity = entity.current;
                golf = entity.width;
                zulu = entity.height;
                entity = _closure2_slot4;
                tango = entity.current;
                report = null;
                oscar = report == tango;
                entity = undefined;
                options = undefined;
                if(oscar) { _fun50922_ip = 50; continue _fun50922 }
 44:
                options = tango.videoWidth;
 50:
                verify = report != options;
                oscar = 0;
                if(!verify) { _fun50922_ip = 62; continue _fun50922 }
 59:
                oscar = options;
 62:
                options = _closure2_slot4;
                verify = options.current;
                offset = report == verify;
                options = undefined;
                if(offset) { _fun50922_ip = 86; continue _fun50922 }
 80:
                options = verify.videoHeight;
 86:
                verify = report != options;
                tango = 0;
                if(!verify) { _fun50922_ip = 98; continue _fun50922 }
 95:
                tango = options;
 98:
                if(!(golf === oscar)) { _fun50922_ip = 106; continue _fun50922 }
 102:
                if(!(zulu !== tango)) { _fun50922_ip = 143; continue _fun50922 }
 106:
                zulu = {};
                zulu['width'] = oscar;
                zulu['height'] = tango;
                tango = _closure2_slot3;
                if(!(report != tango)) { _fun50922_ip = 133; continue _fun50922 }
 124:
                tango = _closure2_slot3;
                tango = tango.bind(entity)(zulu);
 133:
                mike = _closure2_slot5;
                mike['current'] = zulu;
 143:
                return entity;
            }
        };
        oscar = options.bind(yankee)(oscar, golf);
        var _closure2_slot6 = oscar;
        yankee = _closure1_slot3;
        options = yankee.useLayoutEffect;
        golf = new Array(1);
        golf[0] = oscar;
        oscar = function() {
            _fun50923: for(var _fun50923_ip = 0; ; ) switch(_fun50923_ip) {
 0:
                zulu = _closure2_slot4;
                report = zulu.current;
                var _closure3_slot0 = report;
                zulu = null;
                if(!(zulu == report)) { _fun50923_ip = 28; continue _fun50923 }
 24:
                zulu = undefined;
                return zulu;
 28:
                tango = report.addEventListener;
                zulu = _closure2_slot6;
                mike = 'resize';
                mike = tango.bind(report)(mike, zulu);
                entity = function() {
                    tango = _closure3_slot0;
                    zulu = tango.removeEventListener;
                    mike = _closure2_slot6;
                    entity = 'resize';
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            }
        };
        oscar = options.bind(yankee)(oscar, golf);
        options = _closure1_slot3;
        golf = options.useCallback;
        oscar = new Array(1);
        oscar[0] = tango;
        tango = function() {
            _fun50925: for(var _fun50925_ip = 0; ; ) switch(_fun50925_ip) {
 0:
                zulu = _closure2_slot2;
                mike = null;
                if(!(mike != zulu)) { _fun50925_ip = 23; continue _fun50925 }
 13:
                mike = _closure2_slot2;
                entity = undefined;
                entity = mike.bind(entity)();
 23:
                entity = undefined;
                return entity;
            }
        };
        oscar = golf.bind(options)(tango, oscar);
        options = _closure1_slot3;
        golf = options.useCallback;
        tango = new Array(1);
        tango[0] = verify;
        zulu = function(argFoo) {
            _fun50926: for(var _fun50926_ip = 0; ; ) switch(_fun50926_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun50926_ip = 29; continue _fun50926 }
 10:
                entity = argFoo;
                mike = entity.currentTarget;
                entity = mike.play;
                entity = entity.bind(mike)();
 29:
                entity = undefined;
                return entity;
            }
        };
        golf = golf.bind(options)(zulu, tango);
        tango = _closure1_slot4;
        zulu = {};
        verify = _closure1_slot1;
        options = _closure1_slot2;
        mike = 4;
        options = options[mike];
        mike = undefined;
        verify = verify.bind(mike)(options);
        options = 'media-engine-video';
        options = verify.bind(mike)(options, offset);
        zulu['className'] = options;
        zulu['ref'] = report;
        report = true;
        zulu['autoPlay'] = report;
        zulu['onPause'] = golf;
        zulu['onCanPlayThrough'] = oscar;
        zulu['muted'] = report;
        kilo = zulu;
        backup = entity;
        entity = copyDataProperties(kilo, backup);
        entity = 'video';
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = {};
    golf = false;
    tango['paused'] = golf;
    mike['defaultProps'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/ui/Video.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();