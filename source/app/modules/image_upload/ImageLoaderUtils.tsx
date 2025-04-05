// app/modules/image_upload/ImageLoaderUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: loadImageAsset
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = global;
        entity = entity.Image;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        option = zuuluu;
        entity = new option[entity](golfie);
        zuuluu = entity instanceof Object ? entity : zuuluu;
        var _closure2_slot1 = zuuluu;
        report = function(argFoo, argBar) { // Original name: getOnError
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                var _closure3_slot0 = michal;
                zuuluu = argBar;
                var _closure3_slot1 = zuuluu;
                tangon = michal.backoff;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00002_ip = 79; continue _fun00001 }
 28:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 4;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                golfie = tangon;
                zuuluu = new golfie[zuuluu](oscard);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                michal['backoff'] = zuuluu;
 79:
                michal = michal.backoff;
                var _closure3_slot2 = michal;
                zuuluu = _closure1_slot4;
                michal = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00004_ip = 120; continue _fun00003 }
 7:
                            tangon = _closure1_slot1;
                            michal = _closure1_slot2;
                            golfie = 5;
                            michal = michal[golfie];
                            zuuluu = undefined;
                            tangon = tangon.bind(zuuluu)(michal);
                            michal = tangon.isOnline;
                            michal = michal.bind(tangon)();
                            SaveGenerator(address=46);
 44:
                            return michal;
 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00004_ip = 117; continue _fun00003 }
 52:
                            oscard = _closure3_slot2;
                            oscard = oscard.fails;
                            if(!(!(oscard < golfie))) { _fun00004_ip = 92; continue _fun00003 }
 69:
                            option = _closure1_slot11;
                            golfie = _closure3_slot0;
                            oscard = _closure3_slot1;
                            report = true;
                            report = option.bind(zuuluu)(report, golfie, oscard);
                            _fun00004_ip = 114; continue _fun00003;
 92:
                            oscard = _closure3_slot2;
                            report = oscard.fail;
                            tangon = function() {
                                zuuluu = _closure1_slot10;
                                michal = _closure3_slot0;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            tangon = report.bind(oscard)(tangon);
 114:
                            return zuuluu;
 117:
                            return michal;
 120:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zuuluu.bind(michal)(entity);
                return entity;
            }
        };
        entity = undefined;
        report = report.bind(entity)(michal, zuuluu);
        zuuluu['onerror'] = report;
        tangon = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = michal.backoff;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 29; continue _fun00005 }
 19:
                michal = zuuluu.succeed;
                michal = michal.bind(zuuluu)();
 29:
                report = _closure1_slot11;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                entity = undefined;
                michal = false;
                michal = report.bind(entity)(michal, tangon, zuuluu);
                return entity;
            }
        };
        zuuluu['onload'] = tangon;
        michal = michal.url;
        zuuluu['src'] = michal;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: handleImageLoad
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            michal = argBaz;
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = report;
            zuuluu = report.callbacks;
            report = report.url;
            if(tangon) { _fun00008_ip = 88; continue _fun00007 }
 33:
            tangon = michal.width;
            michal = michal.height;
            oscard = {};
            oscard['url'] = report;
            golfie = true;
            oscard['loaded'] = golfie;
            oscard['width'] = tangon;
            oscard['height'] = michal;
            _closure2_slot1 = oscard;
            tangon = _closure1_slot9;
            michal = tangon.set;
            michal = michal.bind(tangon)(report, oscard);
            _fun00008_ip = 106; continue _fun00007;
 88:
            tangon = _closure1_slot9;
            michal = tangon.del;
            michal = michal.bind(tangon)(report);
 106:
            michal = null;
            if(!(michal != zuuluu)) { _fun00008_ip = 127; continue _fun00007 }
 112:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = argFoo;
                entity = undefined;
                entity = michal.bind(entity)(tangon, zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 127:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: splitURL
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = '?';
        tangon = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot3;
        report = undefined;
        entity = 2;
        tangon = zuuluu.bind(report)(tangon, entity);
        entity = 0;
        zuuluu = tangon[entity];
        entity = 1;
        tangon = tangon[entity];
        entity = new Array(2);
        entity[0] = zuuluu;
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 6;
        michal = oscard[michal];
        zuuluu = zuuluu.bind(report)(michal);
        michal = zuuluu.parse;
        michal = michal.bind(zuuluu)(tangon);
        entity[1] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    tangon = function(argFoo) { // Original name: getSrcWithWidthAndHeight
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.src;
            option = zuuluu.sourceWidth;
            verify = zuuluu.sourceHeight;
            romeon = zuuluu.targetWidth;
            yankee = zuuluu.targetHeight;
            backup = zuuluu.format;
            golfie = undefined;
            if(!(backup === golfie)) { _fun00010_ip = 46; continue _fun00009 }
 44:
            backup = null;
 46:
            offset = zuuluu.quality;
            if(!(offset === golfie)) { _fun00010_ip = 58; continue _fun00009 }
 56:
            offset = null;
 58:
            michal = zuuluu.animated;
            if(!(michal === golfie)) { _fun00010_ip = 70; continue _fun00009 }
 68:
            michal = false;
 70:
            report = zuuluu.srcIsAnimated;
            if(!(report === golfie)) { _fun00010_ip = 82; continue _fun00009 }
 80:
            report = false;
 82:
            tangon = entity.startsWith;
            zuuluu = 'data:image';
            zuuluu = tangon.bind(entity)(zuuluu);
            if(zuuluu) { _fun00010_ip = 429; continue _fun00009 }
 105:
            tangon = _closure1_slot12;
            foxtra = tangon.bind(golfie)(entity);
            oscard = _closure1_slot3;
            tangon = 2;
            foxtra = oscard.bind(golfie)(foxtra, tangon);
            tangon = 0;
            tangon = foxtra[tangon];
            oscard = 1;
            oscard = foxtra[oscard];
            foxtra = null;
            if(!(foxtra != backup)) { _fun00010_ip = 155; continue _fun00009 }
 149:
            oscard['format'] = backup;
 155:
            if(!(foxtra != offset)) { _fun00010_ip = 165; continue _fun00009 }
 159:
            oscard['quality'] = offset;
 165:
            if(!michal) { _fun00010_ip = 171; continue _fun00009 }
 168:
            michal = report;
 171:
            if(!michal) { _fun00010_ip = 208; continue _fun00009 }
 174:
            offset = _closure1_slot6;
            report = offset.test;
            report = report.bind(offset)(entity);
            if(report) { _fun00010_ip = 205; continue _fun00009 }
 191:
            foxtra = _closure1_slot7;
            offset = foxtra.test;
            report = offset.bind(foxtra)(entity);
 205:
            michal = report;
 208:
            if(!michal) { _fun00010_ip = 219; continue _fun00009 }
 211:
            michal = true;
            oscard['animated'] = michal;
 219:
            report = _closure1_slot7;
            michal = report.test;
            michal = michal.bind(report)(entity);
            if(!michal) { _fun00010_ip = 248; continue _fun00009 }
 236:
            michal = 'webp';
            oscard['format'] = michal;
 248:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 7;
            michal = offset[michal];
            offset = report.bind(golfie)(michal);
            report = offset.fit;
            michal = {};
            michal['width'] = romeon;
            michal['height'] = yankee;
            yankee = 4096;
            michal['maxWidth'] = yankee;
            michal['maxHeight'] = yankee;
            michal = report.bind(offset)(michal);
            report = michal.width;
            michal = michal.height;
            option = report === option;
            if(!option) { _fun00010_ip = 326; continue _fun00009 }
 322:
            option = michal === verify;
 326:
            if(option) { _fun00010_ip = 347; continue _fun00009 }
 329:
            report = report | 0;
            oscard['width'] = report;
            michal = michal | 0;
            oscard['height'] = michal;
 347:
            report = _closure1_slot1;
            option = _closure1_slot2;
            michal = 8;
            michal = option[michal];
            report = report.bind(golfie)(michal);
            michal = report.isEmpty;
            report = michal.bind(report)(oscard);
            michal = tangon;
            if(report) { _fun00010_ip = 427; continue _fun00009 }
 384:
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 6;
            zuuluu = option[zuuluu];
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.stringify;
            report = zuuluu.bind(report)(oscard);
            zuuluu = '?';
            zuuluu = zuuluu + report;
            michal = tangon + zuuluu;
 427:
            return michal;
 429:
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.NOOP;
    var _closure1_slot5 = report;
    report = /\.webp($|\?|#)/i;
    var _closure1_slot6 = report;
    report = /\.avif($|\?|#)/i;
    var _closure1_slot7 = report;
    report = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
    var _closure1_slot8 = report;
    report = 3;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    report = {};
    verify = 1000;
    report['max'] = verify;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    backup = verify;
    foxtra = report;
    report = new backup[offset](foxtra, romeon);
    report = report instanceof Object ? report : verify;
    var _closure1_slot9 = report;
    report = 10;
    report = golfie[report];
    verify = option.bind(entity)(report);
    option = verify.fileFinishedImporting;
    report = 'modules/image_upload/ImageLoaderUtils.tsx';
    report = option.bind(verify)(report);
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    zuuluu['getDevicePixelRatio'] = report;
    report = function(argFoo) { // Original name: isImageLoaded
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot9;
            michal = zuuluu.get;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00012_ip = 35; continue _fun00011 }
 29:
            entity = michal.loaded;
 35:
            return entity;
        }
    };
    zuuluu['isImageLoaded'] = report;
    report = function(argFoo, argBar) { // Original name: loadImage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            verify = argFoo;
            report = argBar;
            var _closure2_slot0 = verify;
            tangon = _closure1_slot9;
            entity = tangon.get;
            entity = entity.bind(tangon)(verify);
            var _closure2_slot2 = entity;
            tangon = null;
            if(!(tangon != entity)) { _fun00014_ip = 51; continue _fun00013 }
 39:
            oscard = entity.loaded;
            if(oscard) { _fun00014_ip = 186; continue _fun00013 }
 51:
            if(!(tangon == entity)) { _fun00014_ip = 101; continue _fun00013 }
 55:
            oscard = {};
            oscard['url'] = verify;
            golfie = false;
            oscard['loaded'] = golfie;
            _closure2_slot2 = oscard;
            option = _closure1_slot9;
            golfie = option.set;
            golfie = golfie.bind(option)(verify, oscard);
            option = _closure1_slot10;
            golfie = undefined;
            golfie = option.bind(golfie)(oscard);
            entity = oscard;
 101:
            if(!(tangon != report)) { _fun00014_ip = 179; continue _fun00013 }
 105:
            oscard = report.bind;
            golfie = oscard.bind(report)(tangon);
            var _closure2_slot1 = golfie;
            oscard = entity.callbacks;
            if(!(tangon == oscard)) { _fun00014_ip = 163; continue _fun00013 }
 129:
            oscard = global;
            oscard = oscard.Set;
            option = oscard.prototype;
            option = Object.create(option, {constructor: {value: oscard}});
            romeon = option;
            oscard = new romeon[oscard](yankee);
            oscard = oscard instanceof Object ? oscard : option;
            entity['callbacks'] = oscard;
 163:
            oscard = entity.callbacks;
            entity = oscard.add;
            entity = entity.bind(oscard)(golfie);
 179:
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00016_ip = 24; continue _fun00015 }
 16:
                    tangon = _closure2_slot2;
                    michal = zuuluu != tangon;
 24:
                    if(!michal) { _fun00016_ip = 99; continue _fun00015 }
 27:
                    michal = _closure2_slot2;
                    michal = michal.callbacks;
                    if(!(zuuluu != michal)) { _fun00016_ip = 65; continue _fun00015 }
 41:
                    michal = _closure2_slot2;
                    report = michal.callbacks;
                    tangon = report.delete;
                    michal = _closure2_slot1;
                    michal = tangon.bind(report)(michal);
 65:
                    michal = _closure2_slot2;
                    michal = michal.backoff;
                    if(!(zuuluu != michal)) { _fun00016_ip = 99; continue _fun00015 }
 79:
                    entity = _closure2_slot2;
                    michal = entity.backoff;
                    entity = michal.cancel;
                    entity = entity.bind(michal)();
 99:
                    entity = undefined;
                    return entity;
                }
            };
            _fun00014_ip = 241; continue _fun00013;
 186:
            if(!(tangon != report)) { _fun00014_ip = 237; continue _fun00013 }
 190:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.awaitOnline;
            report = tangon.bind(report)();
            tangon = report.then;
            zuuluu = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot2;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00018_ip = 30; continue _fun00017 }
 16:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.callbacks;
                    michal = tangon != zuuluu;
 30:
                    if(!michal) { _fun00018_ip = 60; continue _fun00017 }
 33:
                    entity = _closure2_slot2;
                    zuuluu = entity.callbacks;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = _closure2_slot2;
                            michal = null;
                            if(!(michal == zuuluu)) { _fun00020_ip = 43; continue _fun00019 }
 16:
                            report = {};
                            michal = _closure2_slot0;
                            report['url'] = michal;
                            zuuluu = true;
                            report['loaded'] = zuuluu;
                            michal = undefined;
                            michal = tangon.bind(michal)(zuuluu, report);
                            _fun00020_ip = 57; continue _fun00019;
 43:
                            zuuluu = _closure2_slot2;
                            michal = undefined;
                            entity = false;
                            entity = tangon.bind(michal)(entity, zuuluu);
 57:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 60:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
 237:
            entity = _closure1_slot5;
 241:
            return entity;
        }
    };
    zuuluu['loadImage'] = report;
    report = function(argFoo) { // Original name: getBestMediaProxySize
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            entity = arguments[1];
            var _closure2_slot0 = zuuluu;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00022_ip = 20; continue _fun00021 }
 18:
            entity = false;
 20:
            if(!entity) { _fun00022_ip = 79; continue _fun00021 }
 23:
            report = _closure1_slot8;
            tangon = report.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity <= michal;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            entity = tangon.pop;
            entity = entity.bind(tangon)();
            tangon = null;
            if(!(tangon != entity)) { _fun00022_ip = 79; continue _fun00021 }
 61:
            tangon = zuuluu / entity;
            zuuluu = 1.25;
            if(!(!(tangon <= zuuluu))) { _fun00022_ip = 129; continue _fun00021 }
 79:
            report = _closure1_slot8;
            tangon = report.find;
            michal = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = michal <= entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            tangon = null;
            if(!(tangon == michal)) { _fun00022_ip = 127; continue _fun00021 }
 107:
            tangon = _closure1_slot8;
            report = tangon.length;
            zuuluu = 1;
            zuuluu = report - zuuluu;
            michal = tangon[zuuluu];
 127:
            return michal;
 129:
            return entity;
        }
    };
    zuuluu['getBestMediaProxySize'] = report;
    zuuluu['getSrcWithWidthAndHeight'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getSizedImageSrc
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            golfie = arguments[3];
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00024_ip = 15; continue _fun00023 }
 9:
            golfie = 'webp';
 15:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            entity = zuuluu.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            entity = global;
            option = entity.Math;
            oscard = option.ceil;
            report = argBar;
            report = report * yankee;
            option = oscard.bind(option)(report);
            verify = entity.Math;
            oscard = verify.ceil;
            report = argBaz;
            report = report * yankee;
            oscard = oscard.bind(verify)(report);
            verify = _closure1_slot12;
            report = argFoo;
            verify = verify.bind(tangon)(report);
            report = _closure1_slot3;
            michal = 2;
            verify = report.bind(tangon)(verify, michal);
            michal = 0;
            report = verify[michal];
            michal = 1;
            foxtra = verify[michal];
            michal = 6;
            michal = offset[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.stringify;
            michal = {};
            backup = michal;
            verify = copyDataProperties(backup, foxtra);
            verify = option | 0;
            option = 'width';
            michal[option] = verify;
            option = oscard | 0;
            oscard = 'height';
            michal[oscard] = option;
            oscard = 'format';
            michal[oscard] = golfie;
            tangon = zuuluu.bind(tangon)(michal);
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = '?';
            entity = zuuluu.bind(michal)(report, entity, tangon);
            return entity;
        }
    };
    zuuluu['getSizedImageSrc'] = tangon;
    michal = function(argFoo) { // Original name: getImageSrc
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            foxtra = michal.src;
            romeon = michal.width;
            yankee = michal.height;
            sizing = michal.maxWidth;
            backup = michal.maxHeight;
            entity = michal.ratio;
            zuuluu = undefined;
            if(!(entity === zuuluu)) { _fun00026_ip = 46; continue _fun00025 }
 43:
            entity = 1;
 46:
            golfie = michal.format;
            if(!(golfie === zuuluu)) { _fun00026_ip = 57; continue _fun00025 }
 55:
            golfie = null;
 57:
            oscard = michal.quality;
            if(!(oscard === zuuluu)) { _fun00026_ip = 69; continue _fun00025 }
 67:
            oscard = null;
 69:
            report = michal.animated;
            if(!(report === zuuluu)) { _fun00026_ip = 81; continue _fun00025 }
 79:
            report = false;
 81:
            tangon = michal.srcIsAnimated;
            if(!(tangon === zuuluu)) { _fun00026_ip = 93; continue _fun00025 }
 91:
            tangon = false;
 93:
            michal = 1;
            kiloes = romeon;
            option = yankee;
            if(!(entity < michal)) { _fun00026_ip = 148; continue _fun00025 }
 106:
            verify = global;
            output = verify.Math;
            offset = output.round;
            michal = romeon * entity;
            kiloes = offset.bind(output)(michal);
            offset = verify.Math;
            verify = offset.round;
            entity = yankee * entity;
            option = verify.bind(offset)(entity);
 148:
            entity = null;
            offset = kiloes;
            if(!(entity != sizing)) { _fun00026_ip = 176; continue _fun00025 }
 157:
            michal = global;
            verify = michal.Math;
            michal = verify.min;
            offset = michal.bind(verify)(kiloes, sizing);
 176:
            verify = option;
            if(!(entity != backup)) { _fun00026_ip = 202; continue _fun00025 }
 183:
            entity = global;
            michal = entity.Math;
            entity = michal.min;
            verify = entity.bind(michal)(option, backup);
 202:
            option = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 9;
            michal = backup[michal];
            michal = option.bind(zuuluu)(michal);
            option = michal.bind(zuuluu)();
            michal = _closure1_slot13;
            entity = {};
            entity['src'] = foxtra;
            entity['sourceWidth'] = romeon;
            entity['sourceHeight'] = yankee;
            offset = offset * option;
            entity['targetWidth'] = offset;
            option = verify * option;
            entity['targetHeight'] = option;
            entity['format'] = golfie;
            entity['quality'] = oscard;
            entity['animated'] = report;
            entity['srcIsAnimated'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getImageSrc'] = michal;
    return entity;
})();