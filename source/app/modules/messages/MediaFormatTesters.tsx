// app/modules/messages/MediaFormatTesters.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun54423: for(var _fun54423_ip = 0; ; ) switch(_fun54423_ip) {
 0:
        oscar = argBar;
        zulu = argFred;
        golf = argPlugh;
        entity = global;
        options = entity.Object;
        report = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = report.bind(options)(zulu, entity, tango);
        entity = 0;
        report = golf[entity];
        tango = argBaz;
        entity = undefined;
        tango = tango.bind(entity)(report);
        var _closure1_slot0 = tango;
        tango = function(argFoo, argBar) { // Original name: urlMatchesFileExtension
            _fun54424: for(var _fun54424_ip = 0; ; ) switch(_fun54424_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                entity = null;
                if(!(entity != report)) { _fun54424_ip = 80; continue _fun54424 }
 12:
                mike = report.split;
                entity = /\?/;
                tango = 1;
                oscar = mike.bind(report)(entity, tango);
                report = _closure1_slot0;
                mike = undefined;
                entity = 2;
                entity = report.bind(mike)(oscar, entity);
                mike = 0;
                mike = entity[mike];
                entity = entity[tango];
                entity = zulu.test;
                entity = entity.bind(zulu)(mike);
                return entity;
 80:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot1 = tango;
        report = function(argFoo, argBar) { // Original name: contentTypeMatches
            _fun54425: for(var _fun54425_ip = 0; ; ) switch(_fun54425_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun54425_ip = 63; continue _fun54425 }
 9:
                mike = zulu.split;
                entity = '/';
                tango = mike.bind(zulu)(entity);
                zulu = _closure1_slot0;
                mike = undefined;
                entity = 2;
                zulu = zulu.bind(mike)(tango, entity);
                entity = 0;
                mike = zulu[entity];
                entity = 1;
                entity = zulu[entity];
                entity = argBar;
                entity = mike === entity;
                return entity;
 63:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot2 = report;
        report = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i;
        var _closure1_slot3 = report;
        report = /\.(webp|gif|avif)$/i;
        var _closure1_slot4 = report;
        report = 1;
        options = golf[report];
        verify = oscar.bind(entity)(options);
        options = verify.isIOS;
        options = options.bind(verify)();
        if(options) { _fun54423_ip = 195; continue _fun54423 }
 142:
        options = golf[report];
        verify = oscar.bind(entity)(options);
        options = verify.isAndroid;
        options = options.bind(verify)();
        if(options) { _fun54423_ip = 179; continue _fun54423 }
 163:
        options = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
        _fun54423_ip = 193; continue _fun54423;
 179:
        options = /\.(mp3|m4a|wav|ogg|opus|flac)$/i;
 193:
        _fun54423_ip = 209; continue _fun54423;
 195:
        options = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
 209:
        var _closure1_slot5 = options;
        options = golf[report];
        verify = oscar.bind(entity)(options);
        options = verify.isIOS;
        options = options.bind(verify)();
        if(options) { _fun54423_ip = 269; continue _fun54423 }
 235:
        report = golf[report];
        options = oscar.bind(entity)(report);
        report = options.isAndroid;
        report = report.bind(options)();
        report = /\.(mp4|webm|mov)$/i;
        _fun54423_ip = 283; continue _fun54423;
 269:
        report = /\.(mp4|mov)$/i;
 283:
        var _closure1_slot6 = report;
        report = 2;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'modules/messages/MediaFormatTesters.tsx';
        report = oscar.bind(golf)(report);
        zulu['urlMatchesFileExtension'] = tango;
        tango = function(argFoo) {
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        };
        zulu['isImageUrl'] = tango;
        tango = function(argFoo) {
            _fun54427: for(var _fun54427_ip = 0; ; ) switch(_fun54427_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun54427_ip = 29; continue _fun54427 }
 12:
                zulu = _closure1_slot3;
                mike = zulu.test;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        zulu['isImageFile'] = tango;
        tango = function(argFoo) {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = argFoo;
            entity = 'image';
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        zulu['isImageContentType'] = tango;
        tango = function(argFoo) {
            tango = _closure1_slot1;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        };
        zulu['isAnimatedImageUrl'] = tango;
        tango = function(argFoo) {
            _fun54430: for(var _fun54430_ip = 0; ; ) switch(_fun54430_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun54430_ip = 29; continue _fun54430 }
 12:
                zulu = _closure1_slot5;
                mike = zulu.test;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        zulu['isAudioFile'] = tango;
        tango = function(argFoo) {
            tango = _closure1_slot1;
            zulu = _closure1_slot6;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        };
        zulu['isVideoUrl'] = tango;
        tango = function(argFoo) {
            _fun54432: for(var _fun54432_ip = 0; ; ) switch(_fun54432_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun54432_ip = 29; continue _fun54432 }
 12:
                zulu = _closure1_slot6;
                mike = zulu.test;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        zulu['isVideoFile'] = tango;
        mike = function(argFoo) {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = argFoo;
            entity = 'video';
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        zulu['isVideoContentType'] = mike;
        return entity;
    }
})();