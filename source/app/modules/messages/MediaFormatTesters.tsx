// app/modules/messages/MediaFormatTesters.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        zuuluu = argFre;
        golfie = argPlu;
        entity = global;
        option = entity.Object;
        report = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        report = golfie[entity];
        tangon = argBaz;
        entity = undefined;
        tangon = tangon.bind(entity)(report);
        var _closure1_slot0 = tangon;
        tangon = function(argFoo, argBar) { // Original name: urlMatchesFileExtension
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                entity = null;
                if(!(entity != report)) { _fun00004_ip = 80; continue _fun00003 }
 12:
                michal = report.split;
                entity = /\?/;
                tangon = 1;
                oscard = michal.bind(report)(entity, tangon);
                report = _closure1_slot0;
                michal = undefined;
                entity = 2;
                entity = report.bind(michal)(oscard, entity);
                michal = 0;
                michal = entity[michal];
                entity = entity[tangon];
                entity = zuuluu.test;
                entity = entity.bind(zuuluu)(michal);
                return entity;
 80:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot1 = tangon;
        report = function(argFoo, argBar) { // Original name: contentTypeMatches
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00006_ip = 63; continue _fun00005 }
 9:
                michal = zuuluu.split;
                entity = '/';
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = _closure1_slot0;
                michal = undefined;
                entity = 2;
                zuuluu = zuuluu.bind(michal)(tangon, entity);
                entity = 0;
                michal = zuuluu[entity];
                entity = 1;
                entity = zuuluu[entity];
                entity = argBar;
                entity = michal === entity;
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
        option = golfie[report];
        verify = oscard.bind(entity)(option);
        option = verify.isIOS;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 195; continue _fun00001 }
 142:
        option = golfie[report];
        verify = oscard.bind(entity)(option);
        option = verify.isAndroid;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 179; continue _fun00001 }
 163:
        option = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
        _fun00002_ip = 193; continue _fun00001;
 179:
        option = /\.(mp3|m4a|wav|ogg|opus|flac)$/i;
 193:
        _fun00002_ip = 209; continue _fun00001;
 195:
        option = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
 209:
        var _closure1_slot5 = option;
        option = golfie[report];
        verify = oscard.bind(entity)(option);
        option = verify.isIOS;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 269; continue _fun00001 }
 235:
        report = golfie[report];
        option = oscard.bind(entity)(report);
        report = option.isAndroid;
        report = report.bind(option)();
        report = /\.(mp4|webm|mov)$/i;
        _fun00002_ip = 283; continue _fun00001;
 269:
        report = /\.(mp4|mov)$/i;
 283:
        var _closure1_slot6 = report;
        report = 2;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'modules/messages/MediaFormatTesters.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['urlMatchesFileExtension'] = tangon;
        tangon = function(argFoo) {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        zuuluu['isImageUrl'] = tangon;
        tangon = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00008_ip = 29; continue _fun00007 }
 12:
                zuuluu = _closure1_slot3;
                michal = zuuluu.test;
                entity = michal.bind(zuuluu)(tangon);
 29:
                return entity;
            }
        };
        zuuluu['isImageFile'] = tangon;
        tangon = function(argFoo) {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = argFoo;
            entity = 'image';
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        zuuluu['isImageContentType'] = tangon;
        tangon = function(argFoo) {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        zuuluu['isAnimatedImageUrl'] = tangon;
        tangon = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 12:
                zuuluu = _closure1_slot5;
                michal = zuuluu.test;
                entity = michal.bind(zuuluu)(tangon);
 29:
                return entity;
            }
        };
        zuuluu['isAudioFile'] = tangon;
        tangon = function(argFoo) {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        zuuluu['isVideoUrl'] = tangon;
        tangon = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00012_ip = 29; continue _fun00011 }
 12:
                zuuluu = _closure1_slot6;
                michal = zuuluu.test;
                entity = michal.bind(zuuluu)(tangon);
 29:
                return entity;
            }
        };
        zuuluu['isVideoFile'] = tangon;
        michal = function(argFoo) {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = argFoo;
            entity = 'video';
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        zuuluu['isVideoContentType'] = michal;
        return entity;
    }
})();