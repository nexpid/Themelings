// app/uikit-native/AttachmentPreview.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: AttachmentIcon
        entity = argFoo;
        option = entity.fileName;
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot8;
        tangon = undefined;
        oscard = zuuluu.bind(tangon)();
        golfie = _closure1_slot3;
        report = golfie.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = option;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 19;
                entity = tangon[entity];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(entity);
                report = oscard.classifyFileName;
                entity = _closure2_slot0;
                zuuluu = null;
                option = zuuluu != entity;
                entity = '';
                if(!option) { _fun00002_ip = 55; continue _fun00001 }
 51:
                entity = _closure2_slot0;
 55:
                report = report.bind(oscard)(entity);
                entity = _closure1_slot9;
                entity = entity[report];
                if(!(zuuluu == entity)) { _fun00002_ip = 92; continue _fun00001 }
 72:
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 16;
                michal = report[michal];
                entity = zuuluu.bind(tangon)(michal);
 92:
                return entity;
            }
        };
        report = report.bind(golfie)(michal, zuuluu);
        zuuluu = _closure1_slot6;
        michal = _closure1_slot4;
        entity = {};
        oscard = oscard.attachmentFileIcon;
        entity['style'] = oscard;
        entity['source'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: FilenameText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = entity.fileName;
            entity = _closure1_slot8;
            tangon = undefined;
            verify = entity.bind(tangon)();
            zuuluu = /(?:\.([^.]+))?$/;
            michal = zuuluu.exec;
            backup = null;
            golfie = backup != romeon;
            report = '';
            entity = report;
            if(!golfie) { _fun00004_ip = 61; continue _fun00003 }
 58:
            entity = romeon;
 61:
            yankee = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            golfie = backup != romeon;
            if(!golfie) { _fun00004_ip = 87; continue _fun00003 }
 83:
            golfie = report !== romeon;
 87:
            if(!golfie) { _fun00004_ip = 155; continue _fun00003 }
 90:
            offset = _closure1_slot6;
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 20;
            report = foxtra[report];
            report = option.bind(tangon)(report);
            option = report.Text;
            report = {'style': null, 'ellipsizeMode': 'middle', 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'header-primary'};
            foxtra = verify.attachmentFileName;
            report['style'] = foxtra;
            report['children'] = romeon;
            golfie = offset.bind(tangon)(option, report);
 155:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 20;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            verify = verify.attachmentFileName;
            oscard['style'] = verify;
            offset = 1;
            romeon = backup != yankee;
            foxtra = 'UNKNOWN';
            verify = foxtra;
            if(!romeon) { _fun00004_ip = 263; continue _fun00003 }
 235:
            romeon = yankee[offset];
            romeon = backup != romeon;
            verify = foxtra;
            if(!romeon) { _fun00004_ip = 263; continue _fun00003 }
 249:
            yankee = yankee[offset];
            offset = yankee.toUpperCase;
            verify = offset.bind(yankee)();
 263:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: DefaultAttachmentPreview
        entity = argFoo;
        verify = entity.fileName;
        offset = entity.maxFileWidth;
        option = entity.borderRadius;
        entity = _closure1_slot8;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot7;
        michal = _closure1_slot5;
        entity = {};
        golfie = report.fileInfoAttachmentPreviewFile;
        report = new Array(2);
        report[0] = golfie;
        golfie = {};
        golfie['maxWidth'] = offset;
        golfie['borderRadius'] = option;
        report[1] = golfie;
        entity['style'] = report;
        option = _closure1_slot6;
        golfie = _closure1_slot11;
        report = {};
        report['fileName'] = verify;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot6;
        golfie = _closure1_slot12;
        oscard = {};
        oscard['fileName'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Image;
    var _closure1_slot4 = golfie;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    romeon = report.bind(entity)(tangon);
    yankee = romeon.createStyles;
    tangon = {};
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'hidden', 'borderRadius': null, 'height': 75, 'padding': 12, 'flex': 1};
    golfie = 4;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.radii;
    golfie = golfie.sm;
    offset['borderRadius'] = golfie;
    golfie = 12;
    tangon['fileInfoAttachmentPreviewFile'] = offset;
    offset = 8;
    foxtra = {'height': 32, 'width': 24, 'marginRight': 8};
    tangon['attachmentFileIcon'] = foxtra;
    foxtra = {'paddingRight': 4, 'paddingLeft': 4, 'maxWidth': 136};
    tangon['attachmentFileName'] = foxtra;
    foxtra = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['videoIcon'] = foxtra;
    tangon = yankee.bind(romeon)(tangon);
    var _closure1_slot8 = tangon;
    tangon = {};
    yankee = 5;
    yankee = oscard[yankee];
    yankee = verify.bind(entity)(yankee);
    tangon['archive'] = yankee;
    yankee = 6;
    yankee = oscard[yankee];
    yankee = verify.bind(entity)(yankee);
    tangon['acrobat'] = yankee;
    yankee = 7;
    yankee = oscard[yankee];
    yankee = verify.bind(entity)(yankee);
    tangon['ae'] = yankee;
    offset = oscard[offset];
    offset = verify.bind(entity)(offset);
    tangon['ai'] = offset;
    offset = 9;
    offset = oscard[offset];
    offset = verify.bind(entity)(offset);
    tangon['audio'] = offset;
    offset = 10;
    offset = oscard[offset];
    offset = verify.bind(entity)(offset);
    tangon['code'] = offset;
    offset = 11;
    offset = oscard[offset];
    offset = verify.bind(entity)(offset);
    tangon['document'] = offset;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['image'] = golfie;
    golfie = 13;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['photoshop'] = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['sketch'] = golfie;
    golfie = 15;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['spreadsheet'] = golfie;
    golfie = 16;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['unknown'] = golfie;
    golfie = 17;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['video'] = golfie;
    golfie = 18;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon['webcode'] = golfie;
    var _closure1_slot9 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        report = argFoo;
        tangon = report.uri;
        zuuluu = report.width;
        michal = report.height;
        entity = report.borderRadius;
        offset = report.style;
        option = {};
        option['uri'] = tangon;
        option['width'] = zuuluu;
        option['height'] = michal;
        yankee = {};
        yankee['width'] = zuuluu;
        yankee['height'] = michal;
        yankee['borderRadius'] = entity;
        tangon = _closure1_slot6;
        zuuluu = _closure1_slot5;
        michal = {};
        report = new Array(3);
        report[0] = yankee;
        report[1] = offset;
        oscard = {};
        golfie = 'hidden';
        oscard['overflow'] = golfie;
        report[2] = oscard;
        michal['style'] = report;
        golfie = _closure1_slot6;
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        entity = 21;
        report = report[entity];
        entity = undefined;
        oscard = oscard.bind(entity)(report);
        report = {};
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        report['style'] = verify;
        report['source'] = option;
        report['localImageSource'] = option;
        report = golfie.bind(entity)(oscard, report);
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/AttachmentPreview.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AttachmentPreview
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            offset = michal.uri;
            entity = michal.isImage;
            tangon = michal.isVideo;
            verify = michal.width;
            report = undefined;
            if(!(verify === report)) { _fun00006_ip = 35; continue _fun00005 }
 32:
            verify = 75;
 35:
            option = michal.height;
            if(!(option === report)) { _fun00006_ip = 47; continue _fun00005 }
 44:
            option = 75;
 47:
            backup = michal.maxFileWidth;
            kiloes = michal.fileName;
            golfie = michal.borderRadius;
            if(!(golfie === report)) { _fun00006_ip = 102; continue _fun00005 }
 68:
            oscard = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            golfie = zuuluu.sm;
 102:
            zuuluu = michal.showPlayOnVideoPreview;
            if(!(zuuluu === report)) { _fun00006_ip = 114; continue _fun00005 }
 112:
            zuuluu = false;
 114:
            yankee = michal.defaultPreview;
            if(!(yankee === report)) { _fun00006_ip = 157; continue _fun00005 }
 124:
            foxtra = _closure1_slot6;
            romeon = _closure1_slot13;
            oscard = {};
            oscard['fileName'] = kiloes;
            oscard['maxFileWidth'] = backup;
            oscard['borderRadius'] = golfie;
            yankee = foxtra.bind(report)(romeon, oscard);
 157:
            oscard = michal.style;
            romeon = _closure1_slot8;
            output = romeon.bind(report)();
            if(entity) { _fun00006_ip = 626; continue _fun00005 }
 179:
            if(!tangon) { _fun00006_ip = 217; continue _fun00005 }
 182:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 22;
            entity = foxtra[entity];
            romeon = romeon.bind(report)(entity);
            entity = romeon.isAndroid;
            entity = entity.bind(romeon)();
            if(entity) { _fun00006_ip = 423; continue _fun00005 }
 217:
            romeon = _closure1_slot0;
            entity = _closure1_slot2;
            foxtra = 22;
            entity = entity[foxtra];
            romeon = romeon.bind(report)(entity);
            entity = romeon.isIOS;
            entity = entity.bind(romeon)();
            if(!entity) { _fun00006_ip = 273; continue _fun00005 }
 250:
            romeon = offset.startsWith;
            entity = 'ph://';
            entity = romeon.bind(offset)(entity);
            if(entity) { _fun00006_ip = 423; continue _fun00005 }
 273:
            entity = yankee;
            if(!tangon) { _fun00006_ip = 418; continue _fun00005 }
 282:
            romeon = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[foxtra];
            romeon = romeon.bind(report)(tangon);
            tangon = romeon.isIOS;
            tangon = tangon.bind(romeon)();
            entity = yankee;
            if(!tangon) { _fun00006_ip = 418; continue _fun00005 }
 315:
            romeon = _closure1_slot6;
            yankee = _closure1_slot5;
            tangon = {};
            tangon['style'] = oscard;
            kiloes = _closure1_slot6;
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            foxtra = 24;
            foxtra = sizing[foxtra];
            foxtra = backup.bind(report)(foxtra);
            backup = foxtra.VideoComponent;
            foxtra = {'style': null, 'source': null, 'muted': true, 'paused': true, 'resizeMode': 'cover'};
            sizing = {};
            sizing['height'] = option;
            sizing['width'] = verify;
            foxtra['style'] = sizing;
            sizing = {};
            sizing['uri'] = offset;
            foxtra['source'] = sizing;
            foxtra = kiloes.bind(report)(backup, foxtra);
            tangon['children'] = foxtra;
            entity = romeon.bind(report)(yankee, tangon);
 418:
            _fun00006_ip = 624; continue _fun00005;
 423:
            if(zuuluu) { _fun00006_ip = 468; continue _fun00005 }
 426:
            yankee = _closure1_slot6;
            tangon = _closure1_slot10;
            zuuluu = {};
            zuuluu['uri'] = offset;
            zuuluu['width'] = verify;
            zuuluu['height'] = option;
            zuuluu['borderRadius'] = golfie;
            zuuluu['style'] = oscard;
            zuuluu = yankee.bind(report)(tangon, zuuluu);
            _fun00006_ip = 621; continue _fun00005;
 468:
            romeon = _closure1_slot7;
            yankee = _closure1_slot5;
            tangon = {};
            tangon['style'] = oscard;
            kiloes = _closure1_slot6;
            backup = _closure1_slot10;
            foxtra = {};
            foxtra['uri'] = offset;
            foxtra['width'] = verify;
            foxtra['height'] = option;
            foxtra['borderRadius'] = golfie;
            foxtra['style'] = oscard;
            backup = kiloes.bind(report)(backup, foxtra);
            foxtra = new Array(2);
            foxtra[0] = backup;
            sizing = _closure1_slot6;
            kiloes = _closure1_slot5;
            backup = {};
            output = output.videoIcon;
            backup['style'] = output;
            echoed = _closure1_slot6;
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 23;
            output = update[output];
            output = result.bind(report)(output);
            result = output.CirclePlayIcon;
            output = {'size': 'md', 'color': 'white', 'secondaryColor': 'black'};
            output = echoed.bind(report)(result, output);
            backup['children'] = output;
            backup = sizing.bind(report)(kiloes, backup);
            foxtra[1] = backup;
            tangon['children'] = foxtra;
            zuuluu = romeon.bind(report)(yankee, tangon);
 621:
            entity = zuuluu;
 624:
            _fun00006_ip = 663; continue _fun00005;
 626:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['uri'] = offset;
            michal['width'] = verify;
            michal['height'] = option;
            michal['borderRadius'] = golfie;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 663:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();