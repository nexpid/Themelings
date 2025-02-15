// app/modules/image_upload/ImageLoaderUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    oscar = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo) { // Original name: loadImageAsset
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = global;
        entity = entity.Image;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        options = zulu;
        entity = new options[entity](golf);
        zulu = entity instanceof Object ? entity : zulu;
        var _closure2_slot1 = zulu;
        report = function(argFoo, argBar) { // Original name: getOnError
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                var _closure3_slot0 = mike;
                zulu = argBar;
                var _closure3_slot1 = zulu;
                tango = mike.backoff;
                zulu = null;
                if(!(zulu == tango)) { _fun00002_ip = 79; continue _fun00001 }
 28:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 4;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                golf = tango;
                zulu = new golf[zulu](oscar);
                zulu = zulu instanceof Object ? zulu : tango;
                mike['backoff'] = zulu;
 79:
                mike = mike.backoff;
                var _closure3_slot2 = mike;
                zulu = _closure1_slot3;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00004_ip = 124; continue _fun00003 }
 7:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot1;
                            mike = 5;
                            mike = zulu[mike];
                            zulu = undefined;
                            tango = tango.bind(zulu)(mike);
                            mike = tango.isOnline;
                            mike = mike.bind(tango)();
                            SaveGenerator(address=46);
 44:
                            return mike;
 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun00004_ip = 121; continue _fun00003 }
 52:
                            oscar = _closure3_slot2;
                            golf = oscar.fails;
                            oscar = _closure1_slot5;
                            if(!(!(golf < oscar))) { _fun00004_ip = 96; continue _fun00003 }
 73:
                            options = _closure1_slot11;
                            golf = _closure3_slot0;
                            oscar = _closure3_slot1;
                            report = true;
                            report = options.bind(zulu)(report, golf, oscar);
                            _fun00004_ip = 118; continue _fun00003;
 96:
                            oscar = _closure3_slot2;
                            report = oscar.fail;
                            tango = function() {
                                zulu = _closure1_slot10;
                                mike = _closure3_slot0;
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            };
                            tango = report.bind(oscar)(tango);
 118:
                            return zulu;
 121:
                            return mike;
 124:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                return entity;
            }
        };
        entity = undefined;
        report = report.bind(entity)(mike, zulu);
        zulu['onerror'] = report;
        tango = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = _closure2_slot0;
                zulu = mike.backoff;
                mike = null;
                if(!(mike != zulu)) { _fun00006_ip = 29; continue _fun00005 }
 19:
                mike = zulu.succeed;
                mike = mike.bind(zulu)();
 29:
                report = _closure1_slot11;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                entity = undefined;
                mike = false;
                mike = report.bind(entity)(mike, tango, zulu);
                return entity;
            }
        };
        zulu['onload'] = tango;
        mike = mike.url;
        zulu['src'] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: handleImageLoad
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            report = argBar;
            mike = argBaz;
            var _closure2_slot0 = tango;
            var _closure2_slot1 = report;
            zulu = report.callbacks;
            report = report.url;
            if(tango) { _fun00008_ip = 88; continue _fun00007 }
 33:
            tango = mike.width;
            mike = mike.height;
            oscar = {};
            oscar['url'] = report;
            golf = true;
            oscar['loaded'] = golf;
            oscar['width'] = tango;
            oscar['height'] = mike;
            _closure2_slot1 = oscar;
            tango = _closure1_slot9;
            mike = tango.set;
            mike = mike.bind(tango)(report, oscar);
            _fun00008_ip = 106; continue _fun00007;
 88:
            tango = _closure1_slot9;
            mike = tango.del;
            mike = mike.bind(tango)(report);
 106:
            mike = null;
            if(!(mike != zulu)) { _fun00008_ip = 127; continue _fun00007 }
 112:
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = argFoo;
                entity = undefined;
                entity = mike.bind(entity)(tango, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 127:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: splitURL
        zulu = argFoo;
        mike = zulu.split;
        entity = '?';
        tango = mike.bind(zulu)(entity);
        zulu = _closure1_slot2;
        report = undefined;
        entity = 2;
        tango = zulu.bind(report)(tango, entity);
        entity = 0;
        zulu = tango[entity];
        entity = 1;
        tango = tango[entity];
        entity = new Array(2);
        entity[0] = zulu;
        zulu = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 6;
        mike = oscar[mike];
        zulu = zulu.bind(report)(mike);
        mike = zulu.parse;
        mike = mike.bind(zulu)(tango);
        entity[1] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo) { // Original name: getSrcWithWidthAndHeight
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            entity = zulu.src;
            options = zulu.sourceWidth;
            verify = zulu.sourceHeight;
            report = zulu.targetWidth;
            mike = zulu.targetHeight;
            backup = zulu.format;
            golf = undefined;
            if(!(backup === golf)) { _fun00010_ip = 46; continue _fun00009 }
 44:
            backup = null;
 46:
            romeo = zulu.quality;
            if(!(romeo === golf)) { _fun00010_ip = 58; continue _fun00009 }
 56:
            romeo = null;
 58:
            offset = zulu.animated;
            if(!(offset === golf)) { _fun00010_ip = 70; continue _fun00009 }
 68:
            offset = false;
 70:
            yankee = zulu.srcIsAnimated;
            if(!(yankee === golf)) { _fun00010_ip = 82; continue _fun00009 }
 80:
            yankee = false;
 82:
            tango = entity.startsWith;
            zulu = 'data:image';
            zulu = tango.bind(entity)(zulu);
            if(zulu) { _fun00010_ip = 362; continue _fun00009 }
 105:
            tango = _closure1_slot12;
            foxtrot = tango.bind(golf)(entity);
            oscar = _closure1_slot2;
            tango = 2;
            foxtrot = oscar.bind(golf)(foxtrot, tango);
            tango = 0;
            tango = foxtrot[tango];
            oscar = 1;
            oscar = foxtrot[oscar];
            foxtrot = null;
            if(!(foxtrot != backup)) { _fun00010_ip = 155; continue _fun00009 }
 149:
            oscar['format'] = backup;
 155:
            if(!(foxtrot != romeo)) { _fun00010_ip = 165; continue _fun00009 }
 159:
            oscar['quality'] = romeo;
 165:
            if(!offset) { _fun00010_ip = 171; continue _fun00009 }
 168:
            offset = yankee;
 171:
            if(!offset) { _fun00010_ip = 208; continue _fun00009 }
 174:
            romeo = _closure1_slot6;
            yankee = romeo.test;
            yankee = yankee.bind(romeo)(entity);
            if(yankee) { _fun00010_ip = 205; continue _fun00009 }
 191:
            foxtrot = _closure1_slot7;
            romeo = foxtrot.test;
            yankee = romeo.bind(foxtrot)(entity);
 205:
            offset = yankee;
 208:
            if(!offset) { _fun00010_ip = 219; continue _fun00009 }
 211:
            offset = true;
            oscar['animated'] = offset;
 219:
            yankee = _closure1_slot7;
            offset = yankee.test;
            offset = offset.bind(yankee)(entity);
            if(!offset) { _fun00010_ip = 248; continue _fun00009 }
 236:
            offset = 'webp';
            oscar['format'] = offset;
 248:
            options = report === options;
            if(!options) { _fun00010_ip = 259; continue _fun00009 }
 255:
            options = mike === verify;
 259:
            if(options) { _fun00010_ip = 280; continue _fun00009 }
 262:
            report = report | 0;
            oscar['width'] = report;
            mike = mike | 0;
            oscar['height'] = mike;
 280:
            report = _closure1_slot0;
            options = _closure1_slot1;
            mike = 7;
            mike = options[mike];
            report = report.bind(golf)(mike);
            mike = report.isEmpty;
            report = mike.bind(report)(oscar);
            mike = tango;
            if(report) { _fun00010_ip = 360; continue _fun00009 }
 317:
            report = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 6;
            zulu = options[zulu];
            report = report.bind(golf)(zulu);
            zulu = report.stringify;
            report = zulu.bind(report)(oscar);
            zulu = '?';
            zulu = zulu + report;
            mike = tango + zulu;
 360:
            return mike;
 362:
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.NOOP;
    var _closure1_slot4 = report;
    report = 5;
    var _closure1_slot5 = report;
    report = /\.webp($|\?|#)/i;
    var _closure1_slot6 = report;
    report = /\.avif($|\?|#)/i;
    var _closure1_slot7 = report;
    report = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
    var _closure1_slot8 = report;
    report = 3;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    report = {};
    verify = 1000;
    report['max'] = verify;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    backup = verify;
    foxtrot = report;
    report = new backup[offset](foxtrot, romeo);
    report = report instanceof Object ? report : verify;
    var _closure1_slot9 = report;
    report = 9;
    report = golf[report];
    verify = options.bind(entity)(report);
    options = verify.fileFinishedImporting;
    report = 'modules/image_upload/ImageLoaderUtils.tsx';
    report = options.bind(verify)(report);
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    zulu['getDevicePixelRatio'] = report;
    report = function(argFoo) { // Original name: isImageLoaded
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot9;
            mike = zulu.get;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun00012_ip = 35; continue _fun00011 }
 29:
            entity = mike.loaded;
 35:
            return entity;
        }
    };
    zulu['isImageLoaded'] = report;
    report = function(argFoo, argBar) { // Original name: loadImage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            verify = argFoo;
            report = argBar;
            var _closure2_slot0 = verify;
            tango = _closure1_slot9;
            entity = tango.get;
            entity = entity.bind(tango)(verify);
            var _closure2_slot2 = entity;
            tango = null;
            if(!(tango != entity)) { _fun00014_ip = 51; continue _fun00013 }
 39:
            oscar = entity.loaded;
            if(oscar) { _fun00014_ip = 186; continue _fun00013 }
 51:
            if(!(tango == entity)) { _fun00014_ip = 101; continue _fun00013 }
 55:
            oscar = {};
            oscar['url'] = verify;
            golf = false;
            oscar['loaded'] = golf;
            _closure2_slot2 = oscar;
            options = _closure1_slot9;
            golf = options.set;
            golf = golf.bind(options)(verify, oscar);
            options = _closure1_slot10;
            golf = undefined;
            golf = options.bind(golf)(oscar);
            entity = oscar;
 101:
            if(!(tango != report)) { _fun00014_ip = 179; continue _fun00013 }
 105:
            oscar = report.bind;
            golf = oscar.bind(report)(tango);
            var _closure2_slot1 = golf;
            oscar = entity.callbacks;
            if(!(tango == oscar)) { _fun00014_ip = 163; continue _fun00013 }
 129:
            oscar = global;
            oscar = oscar.Set;
            options = oscar.prototype;
            options = Object.create(options, {constructor: {value: oscar}});
            romeo = options;
            oscar = new romeo[oscar](yankee);
            oscar = oscar instanceof Object ? oscar : options;
            entity['callbacks'] = oscar;
 163:
            oscar = entity.callbacks;
            entity = oscar.add;
            entity = entity.bind(oscar)(golf);
 179:
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure2_slot1;
                    zulu = null;
                    mike = zulu != mike;
                    if(!mike) { _fun00016_ip = 24; continue _fun00015 }
 16:
                    tango = _closure2_slot2;
                    mike = zulu != tango;
 24:
                    if(!mike) { _fun00016_ip = 99; continue _fun00015 }
 27:
                    mike = _closure2_slot2;
                    mike = mike.callbacks;
                    if(!(zulu != mike)) { _fun00016_ip = 65; continue _fun00015 }
 41:
                    mike = _closure2_slot2;
                    report = mike.callbacks;
                    tango = report.delete;
                    mike = _closure2_slot1;
                    mike = tango.bind(report)(mike);
 65:
                    mike = _closure2_slot2;
                    mike = mike.backoff;
                    if(!(zulu != mike)) { _fun00016_ip = 99; continue _fun00015 }
 79:
                    entity = _closure2_slot2;
                    mike = entity.backoff;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
 99:
                    entity = undefined;
                    return entity;
                }
            };
            _fun00014_ip = 241; continue _fun00013;
 186:
            if(!(tango != report)) { _fun00014_ip = 237; continue _fun00013 }
 190:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 5;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.awaitOnline;
            report = tango.bind(report)();
            tango = report.then;
            zulu = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure2_slot2;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00018_ip = 30; continue _fun00017 }
 16:
                    zulu = _closure2_slot2;
                    zulu = zulu.callbacks;
                    mike = tango != zulu;
 30:
                    if(!mike) { _fun00018_ip = 60; continue _fun00017 }
 33:
                    entity = _closure2_slot2;
                    zulu = entity.callbacks;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure2_slot2;
                            mike = null;
                            if(!(mike == zulu)) { _fun00020_ip = 43; continue _fun00019 }
 16:
                            report = {};
                            mike = _closure2_slot0;
                            report['url'] = mike;
                            zulu = true;
                            report['loaded'] = zulu;
                            mike = undefined;
                            mike = tango.bind(mike)(zulu, report);
                            _fun00020_ip = 57; continue _fun00019;
 43:
                            zulu = _closure2_slot2;
                            mike = undefined;
                            entity = false;
                            entity = tango.bind(mike)(entity, zulu);
 57:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 60:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
 237:
            entity = _closure1_slot4;
 241:
            return entity;
        }
    };
    zulu['loadImage'] = report;
    report = function(argFoo) { // Original name: getBestMediaProxySize
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = argFoo;
            entity = arguments[1];
            var _closure2_slot0 = zulu;
            tango = undefined;
            if(!(entity === tango)) { _fun00022_ip = 20; continue _fun00021 }
 18:
            entity = false;
 20:
            if(!entity) { _fun00022_ip = 79; continue _fun00021 }
 23:
            report = _closure1_slot8;
            tango = report.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity <= mike;
                return entity;
            };
            tango = tango.bind(report)(entity);
            entity = tango.pop;
            entity = entity.bind(tango)();
            tango = null;
            if(!(tango != entity)) { _fun00022_ip = 79; continue _fun00021 }
 61:
            tango = zulu / entity;
            zulu = 1.25;
            if(!(!(tango <= zulu))) { _fun00022_ip = 129; continue _fun00021 }
 79:
            report = _closure1_slot8;
            tango = report.find;
            mike = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = mike <= entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            tango = null;
            if(!(tango == mike)) { _fun00022_ip = 127; continue _fun00021 }
 107:
            tango = _closure1_slot8;
            report = tango.length;
            zulu = 1;
            zulu = report - zulu;
            mike = tango[zulu];
 127:
            return mike;
 129:
            return entity;
        }
    };
    zulu['getBestMediaProxySize'] = report;
    zulu['getSrcWithWidthAndHeight'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getSizedImageSrc
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            golf = arguments[3];
            tango = undefined;
            if(!(golf === tango)) { _fun00024_ip = 15; continue _fun00023 }
 9:
            golf = 'webp';
 15:
            zulu = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 8;
            entity = offset[entity];
            entity = zulu.bind(tango)(entity);
            yankee = entity.bind(tango)();
            entity = global;
            options = entity.Math;
            oscar = options.ceil;
            report = argBar;
            report = report * yankee;
            options = oscar.bind(options)(report);
            verify = entity.Math;
            oscar = verify.ceil;
            report = argBaz;
            report = report * yankee;
            oscar = oscar.bind(verify)(report);
            verify = _closure1_slot12;
            report = argFoo;
            verify = verify.bind(tango)(report);
            report = _closure1_slot2;
            mike = 2;
            verify = report.bind(tango)(verify, mike);
            mike = 0;
            report = verify[mike];
            mike = 1;
            foxtrot = verify[mike];
            mike = 6;
            mike = offset[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.stringify;
            mike = {};
            backup = mike;
            verify = copyDataProperties(backup, foxtrot);
            verify = options | 0;
            options = 'width';
            mike[options] = verify;
            options = oscar | 0;
            oscar = 'height';
            mike[oscar] = options;
            oscar = 'format';
            mike[oscar] = golf;
            tango = zulu.bind(tango)(mike);
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = '?';
            entity = zulu.bind(mike)(report, entity, tango);
            return entity;
        }
    };
    zulu['getSizedImageSrc'] = tango;
    mike = function(argFoo) { // Original name: getImageSrc
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.src;
            romeo = mike.width;
            yankee = mike.height;
            sizing = mike.maxWidth;
            backup = mike.maxHeight;
            entity = mike.ratio;
            zulu = undefined;
            if(!(entity === zulu)) { _fun00026_ip = 46; continue _fun00025 }
 43:
            entity = 1;
 46:
            golf = mike.format;
            if(!(golf === zulu)) { _fun00026_ip = 57; continue _fun00025 }
 55:
            golf = null;
 57:
            oscar = mike.quality;
            if(!(oscar === zulu)) { _fun00026_ip = 69; continue _fun00025 }
 67:
            oscar = null;
 69:
            report = mike.animated;
            if(!(report === zulu)) { _fun00026_ip = 81; continue _fun00025 }
 79:
            report = false;
 81:
            tango = mike.srcIsAnimated;
            if(!(tango === zulu)) { _fun00026_ip = 93; continue _fun00025 }
 91:
            tango = false;
 93:
            mike = 1;
            kilo = romeo;
            options = yankee;
            if(!(entity < mike)) { _fun00026_ip = 148; continue _fun00025 }
 106:
            verify = global;
            output = verify.Math;
            offset = output.round;
            mike = romeo * entity;
            kilo = offset.bind(output)(mike);
            offset = verify.Math;
            verify = offset.round;
            entity = yankee * entity;
            options = verify.bind(offset)(entity);
 148:
            entity = null;
            offset = kilo;
            if(!(entity != sizing)) { _fun00026_ip = 176; continue _fun00025 }
 157:
            mike = global;
            verify = mike.Math;
            mike = verify.min;
            offset = mike.bind(verify)(kilo, sizing);
 176:
            verify = options;
            if(!(entity != backup)) { _fun00026_ip = 202; continue _fun00025 }
 183:
            entity = global;
            mike = entity.Math;
            entity = mike.min;
            verify = entity.bind(mike)(options, backup);
 202:
            options = _closure1_slot0;
            backup = _closure1_slot1;
            mike = 8;
            mike = backup[mike];
            mike = options.bind(zulu)(mike);
            options = mike.bind(zulu)();
            mike = _closure1_slot13;
            entity = {};
            entity['src'] = foxtrot;
            entity['sourceWidth'] = romeo;
            entity['sourceHeight'] = yankee;
            offset = offset * options;
            entity['targetWidth'] = offset;
            options = verify * options;
            entity['targetHeight'] = options;
            entity['format'] = golf;
            entity['quality'] = oscar;
            entity['animated'] = report;
            entity['srcIsAnimated'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getImageSrc'] = mike;
    return entity;
})();