// app/modules/canvas/DiscordCanvasExporter.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: DiscordCanvasExporter
            tango = _closure1_slot4;
            zulu = _closure2_slot1;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'toDataUrl';
        report['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tango = arguments[2];
                golf = arguments[3];
                oscar = undefined;
                if(!(tango === oscar)) { _fun00002_ip = 18; continue _fun00001 }
 15:
                tango = 100;
 18:
                entity = null;
                if(!(entity == golf)) { _fun00002_ip = 36; continue _fun00001 }
 24:
                entity = report.makeImageSnapshot;
                zulu = entity.bind(report)();
                _fun00002_ip = 75; continue _fun00001;
 36:
                mike = report.makeImageSnapshot;
                entity = {'x': 0, 'y': 0};
                options = golf.w;
                entity['width'] = options;
                golf = golf.h;
                entity['height'] = golf;
                zulu = mike.bind(report)(entity);
 75:
                mike = zulu.encodeToBase64;
                report = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 4;
                entity = golf[entity];
                entity = report.bind(oscar)(entity);
                entity = entity.ImageFormat;
                entity = entity.PNG;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        report['value'] = mike;
        mike = new Array(2);
        mike[0] = report;
        report = {};
        golf = 'exportCanvas';
        report['key'] = golf;
        options = _closure1_slot3;
        entity = undefined;
        golf = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscar = argBar;
                    golf = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=9);
                    if(offset) { _fun00004_ip = 795; continue _fun00003 }
 16:
                    report = argFoo;
                    options = oscar;
                    offset = undefined;
                    tango = undefined;
                    zulu = undefined;
                    backup = undefined;
                    mike = undefined;
                    yankee = undefined;
                    verify = undefined;
                    foxtrot = undefined;
                    result = oscar.format;
                    romeo = oscar.fileType;
                    oscar = 'png';
                    if(!(offset !== romeo)) { _fun00004_ip = 62; continue _fun00003 }
 59:
                    oscar = romeo;
 62:
                    tango = oscar;
                    oscar = options;
                    romeo = oscar.quality;
                    oscar = 1;
                    if(!(offset !== romeo)) { _fun00004_ip = 84; continue _fun00003 }
 81:
                    oscar = romeo;
 84:
                    zulu = oscar;
                    oscar = options;
                    backup = oscar.fileName;
                    mike = oscar.size;
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    sizing = 5;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(offset)(romeo);
                    romeo = romeo.DiscordCanvasExporterOutputFormats;
                    romeo = romeo.Base64;
                    if(!(result !== romeo)) { _fun00004_ip = 767; continue _fun00003 }
 143:
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(offset)(romeo);
                    romeo = romeo.DiscordCanvasExporterOutputFormats;
                    romeo = romeo.Blob;
                    if(!(result !== romeo)) { _fun00004_ip = 708; continue _fun00003 }
 179:
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(offset)(romeo);
                    romeo = romeo.DiscordCanvasExporterOutputFormats;
                    romeo = romeo.File;
                    if(!(result !== romeo)) { _fun00004_ip = 672; continue _fun00003 }
 215:
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(offset)(romeo);
                    romeo = romeo.DiscordCanvasExporterOutputFormats;
                    romeo = romeo.CloudUpload;
                    if(!(result !== romeo)) { _fun00004_ip = 307; continue _fun00003 }
 248:
                    romeo = global;
                    sizing = romeo.Error;
                    romeo = romeo.HermesInternal;
                    output = romeo.concat;
                    kilo = 'DiscordCanvas: ';
                    romeo = ' is not a valid export format.';
                    control = output.bind(kilo)(result, romeo);
                    kilo = sizing.prototype;
                    kilo = Object.create(kilo, {constructor: {value: sizing}});
                    vacuum = kilo;
                    romeo = new vacuum[sizing](control, source);
                    romeo = romeo instanceof Object ? romeo : kilo;
                    throw romeo;
 307:
                    verify = options.channelId;
                    output = golf.toDataUrl;
                    control = report;
                    source = tango;
                    update = zulu;
                    echo = mike;
                    vacuum = golf;
                    foxtrot = vacuum[output](control, source, update, echo, result);
 337: // try_start_0
                    romeo = _closure1_slot0;
                    kilo = _closure1_slot2;
                    options = 7;
                    options = kilo[options];
                    romeo = romeo.bind(offset)(options);
                    options = romeo.isAndroid;
                    options = options.bind(romeo)();
                    if(options) { _fun00004_ip = 425; continue _fun00003 }
 369:
                    options = _closure1_slot6;
                    result = options.DCDFileManager;
                    output = result.writeFile;
                    source = backup;
                    update = foxtrot;
                    control = 'cache';
                    echo = 'base64';
                    vacuum = result;
                    options = vacuum[output](control, source, update, echo, result);
                    SaveGenerator(address=410);
 408:
                    return options;
 410:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    kilo = romeo;
                    romeo = options;
                    if(!kilo) { _fun00004_ip = 516; continue _fun00003 }
 422: // try_end0
                    return options;
 425: // try_start_1
                    kilo = _closure1_slot1;
                    options = _closure1_slot2;
                    output = 8;
                    options = options[output];
                    kilo = kilo.bind(offset)(options);
                    options = null;
                    kilo = options == kilo;
                    options = undefined;
                    if(kilo) { _fun00004_ip = 500; continue _fun00003 }
 456:
                    sizing = _closure1_slot1;
                    kilo = _closure1_slot2;
                    kilo = kilo[output];
                    result = sizing.bind(offset)(kilo);
                    output = result.writeFile;
                    source = backup;
                    update = foxtrot;
                    control = 'cache';
                    echo = 'base64';
                    vacuum = result;
                    options = vacuum[output](control, source, update, echo, result);
 500:
                    SaveGenerator(address=504);
 502:
                    return options;
 504:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=12);
                    romeo = options;
                    if(foxtrot) { _fun00004_ip = 665; continue _fun00003 }
 516:
                    yankee = romeo;
 519: // try_end1
                    romeo = yankee;
                    yankee = 'file://';
                    romeo = yankee + romeo;
                    foxtrot = _closure1_slot0;
                    kilo = _closure1_slot2;
                    yankee = 9;
                    yankee = kilo[yankee];
                    yankee = foxtrot.bind(offset)(yankee);
                    yankee = yankee.UploadPlatform;
                    backup = yankee.REACT_NATIVE;
                    yankee = {};
                    yankee['uri'] = romeo;
                    romeo = 'image/png';
                    yankee['fileType'] = romeo;
                    romeo = 10;
                    romeo = kilo[romeo];
                    romeo = foxtrot.bind(offset)(romeo);
                    foxtrot = romeo.CloudUpload;
                    romeo = {};
                    romeo['platform'] = backup;
                    backup = false;
                    romeo['isThumbnail'] = backup;
                    backup = yankee.uri;
                    romeo['uri'] = backup;
                    yankee = yankee.uri;
                    romeo['originalUri'] = yankee;
                    source = verify;
                    yankee = foxtrot.prototype;
                    yankee = Object.create(yankee, {constructor: {value: foxtrot}});
                    vacuum = yankee;
                    control = romeo;
                    verify = new vacuum[foxtrot](control, source, update);
                    verify = verify instanceof Object ? verify : yankee;
                    return verify;
 665:
                    return options;
 668: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    throw options;
 672:
                    options = global;
                    yankee = options.Error;
                    options = yankee.prototype;
                    verify = Object.create(options, {constructor: {value: yankee}});
                    control = "Files can't be exported on native. Do you want an Upload instead?";
                    vacuum = verify;
                    options = new vacuum[yankee](control, source);
                    options = options instanceof Object ? options : verify;
                    throw options;
 708:
                    foxtrot = golf.toDataUrl;
                    control = report;
                    source = tango;
                    update = zulu;
                    echo = mike;
                    vacuum = golf;
                    verify = vacuum[foxtrot](control, source, update, echo, result);
                    options = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 6;
                    oscar = yankee[oscar];
                    options = options.bind(offset)(oscar);
                    oscar = options.dataUrlToBlob;
                    oscar = oscar.bind(options)(verify);
                    return oscar;
 767:
                    oscar = golf.toDataUrl;
                    control = report;
                    source = tango;
                    update = zulu;
                    echo = mike;
                    vacuum = golf;
                    mike = vacuum[oscar](control, source, update, echo, result);
                    return mike;
 795:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: exportCanvas
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        mike[1] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/canvas/DiscordCanvasExporter.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();