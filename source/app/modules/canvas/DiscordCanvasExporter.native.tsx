// app/modules/canvas/DiscordCanvasExporter.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: DiscordCanvasExporter
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot1;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'toDataUrl';
        report['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tangon = arguments[2];
                golfie = arguments[3];
                oscard = undefined;
                if(!(tangon === oscard)) { _fun00002_ip = 18; continue _fun00001 }
 15:
                tangon = 100;
 18:
                entity = null;
                if(!(entity == golfie)) { _fun00002_ip = 36; continue _fun00001 }
 24:
                entity = report.makeImageSnapshot;
                zuuluu = entity.bind(report)();
                _fun00002_ip = 75; continue _fun00001;
 36:
                michal = report.makeImageSnapshot;
                entity = {'x': 0, 'y': 0};
                option = golfie.w;
                entity['width'] = option;
                golfie = golfie.h;
                entity['height'] = golfie;
                zuuluu = michal.bind(report)(entity);
 75:
                michal = zuuluu.encodeToBase64;
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 4;
                entity = golfie[entity];
                entity = report.bind(oscard)(entity);
                entity = entity.ImageFormat;
                entity = entity.PNG;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        report['value'] = michal;
        michal = new Array(2);
        michal[0] = report;
        report = {};
        golfie = 'exportCanvas';
        report['key'] = golfie;
        option = _closure1_slot3;
        entity = undefined;
        golfie = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscard = argBar;
                    golfie = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=9);
                    if(offset) { _fun00004_ip = 791; continue _fun00003 }
 16:
                    report = argFoo;
                    option = oscard;
                    offset = undefined;
                    tangon = undefined;
                    zuuluu = undefined;
                    backup = undefined;
                    michal = undefined;
                    yankee = undefined;
                    verify = undefined;
                    foxtra = undefined;
                    result = oscard.format;
                    romeon = oscard.fileType;
                    oscard = 'png';
                    if(!(offset !== romeon)) { _fun00004_ip = 62; continue _fun00003 }
 59:
                    oscard = romeon;
 62:
                    tangon = oscard;
                    oscard = option;
                    romeon = oscard.quality;
                    oscard = 1;
                    if(!(offset !== romeon)) { _fun00004_ip = 84; continue _fun00003 }
 81:
                    oscard = romeon;
 84:
                    zuuluu = oscard;
                    oscard = option;
                    backup = oscard.fileName;
                    michal = oscard.size;
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    sizing = 5;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(offset)(romeon);
                    romeon = romeon.DiscordCanvasExporterOutputFormats;
                    romeon = romeon.Base64;
                    if(!(result !== romeon)) { _fun00004_ip = 763; continue _fun00003 }
 143:
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(offset)(romeon);
                    romeon = romeon.DiscordCanvasExporterOutputFormats;
                    romeon = romeon.Blob;
                    if(!(result !== romeon)) { _fun00004_ip = 704; continue _fun00003 }
 179:
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(offset)(romeon);
                    romeon = romeon.DiscordCanvasExporterOutputFormats;
                    romeon = romeon.File;
                    if(!(result !== romeon)) { _fun00004_ip = 668; continue _fun00003 }
 215:
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(offset)(romeon);
                    romeon = romeon.DiscordCanvasExporterOutputFormats;
                    romeon = romeon.CloudUpload;
                    if(!(result !== romeon)) { _fun00004_ip = 307; continue _fun00003 }
 248:
                    romeon = global;
                    sizing = romeon.Error;
                    romeon = romeon.HermesInternal;
                    output = romeon.concat;
                    kiloes = 'DiscordCanvas: ';
                    romeon = ' is not a valid export format.';
                    ctrled = output.bind(kiloes)(result, romeon);
                    kiloes = sizing.prototype;
                    kiloes = Object.create(kiloes, {constructor: {value: sizing}});
                    vacuum = kiloes;
                    romeon = new vacuum[sizing](ctrled, source);
                    romeon = romeon instanceof Object ? romeon : kiloes;
                    throw romeon;
 307:
                    verify = option.channelId;
                    output = golfie.toDataUrl;
                    ctrled = report;
                    source = tangon;
                    update = zuuluu;
                    echoed = michal;
                    vacuum = golfie;
                    foxtra = vacuum[output](ctrled, source, update, echoed, result);
 337: // try_start_0
                    romeon = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    option = 7;
                    option = kiloes[option];
                    romeon = romeon.bind(offset)(option);
                    option = romeon.isAndroid;
                    option = option.bind(romeon)();
                    if(option) { _fun00004_ip = 425; continue _fun00003 }
 369:
                    option = _closure1_slot6;
                    result = option.DCDFileManager;
                    output = result.writeFile;
                    source = backup;
                    update = foxtra;
                    ctrled = 'cache';
                    echoed = 'base64';
                    vacuum = result;
                    option = vacuum[output](ctrled, source, update, echoed, result);
                    SaveGenerator(address=410);
 408:
                    return option;
 410:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    kiloes = romeon;
                    romeon = option;
                    if(!kiloes) { _fun00004_ip = 516; continue _fun00003 }
 422: // try_end0
                    return option;
 425: // try_start_1
                    kiloes = _closure1_slot1;
                    option = _closure1_slot2;
                    output = 8;
                    option = option[output];
                    kiloes = kiloes.bind(offset)(option);
                    option = null;
                    kiloes = option == kiloes;
                    option = undefined;
                    if(kiloes) { _fun00004_ip = 500; continue _fun00003 }
 456:
                    sizing = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    kiloes = kiloes[output];
                    result = sizing.bind(offset)(kiloes);
                    output = result.writeFile;
                    source = backup;
                    update = foxtra;
                    ctrled = 'cache';
                    echoed = 'base64';
                    vacuum = result;
                    option = vacuum[output](ctrled, source, update, echoed, result);
 500:
                    SaveGenerator(address=504);
 502:
                    return option;
 504:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=12);
                    romeon = option;
                    if(foxtra) { _fun00004_ip = 661; continue _fun00003 }
 516:
                    yankee = romeon;
 519: // try_end1
                    romeon = yankee;
                    yankee = 'file://';
                    romeon = yankee + romeon;
                    foxtra = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    yankee = 9;
                    yankee = kiloes[yankee];
                    yankee = foxtra.bind(offset)(yankee);
                    yankee = yankee.UploadPlatform;
                    backup = yankee.REACT_NATIVE;
                    yankee = {};
                    yankee['uri'] = romeon;
                    romeon = 'image/png';
                    yankee['fileType'] = romeon;
                    romeon = 10;
                    romeon = kiloes[romeon];
                    romeon = foxtra.bind(offset)(romeon);
                    foxtra = romeon.CloudUpload;
                    romeon = {};
                    romeon['platform'] = backup;
                    backup = false;
                    romeon['isThumbnail'] = backup;
                    backup = yankee.uri;
                    romeon['uri'] = backup;
                    yankee = yankee.uri;
                    romeon['originalUri'] = yankee;
                    source = verify;
                    yankee = foxtra.prototype;
                    yankee = Object.create(yankee, {constructor: {value: foxtra}});
                    vacuum = yankee;
                    ctrled = romeon;
                    verify = new vacuum[foxtra](ctrled, source, update);
                    verify = verify instanceof Object ? verify : yankee;
                    return verify;
 661:
                    return option;
 664: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    throw option;
 668:
                    option = global;
                    yankee = option.Error;
                    option = yankee.prototype;
                    verify = Object.create(option, {constructor: {value: yankee}});
                    ctrled = "Files can't be exported on native. Do you want an Upload instead?";
                    vacuum = verify;
                    option = new vacuum[yankee](ctrled, source);
                    option = option instanceof Object ? option : verify;
                    throw option;
 704:
                    foxtra = golfie.toDataUrl;
                    ctrled = report;
                    source = tangon;
                    update = zuuluu;
                    echoed = michal;
                    vacuum = golfie;
                    verify = vacuum[foxtra](ctrled, source, update, echoed, result);
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 6;
                    oscard = yankee[oscard];
                    option = option.bind(offset)(oscard);
                    oscard = option.dataUrlToBlob;
                    oscard = oscard.bind(option)(verify);
                    return oscard;
 763:
                    oscard = golfie.toDataUrl;
                    ctrled = report;
                    source = tangon;
                    update = zuuluu;
                    echoed = michal;
                    vacuum = golfie;
                    michal = vacuum[oscard](ctrled, source, update, echoed, result);
                    return michal;
 791:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: exportCanvas
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        michal[1] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/canvas/DiscordCanvasExporter.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();