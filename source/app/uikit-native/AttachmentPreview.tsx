// app/uikit-native/AttachmentPreview.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    offset = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: AttachmentIcon
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
    var _closure1_slot11 = michal;
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
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    verify = report.bind(entity)(option);
    var _closure1_slot3 = verify;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Image;
    var _closure1_slot4 = option;
    report = report.View;
    var _closure1_slot5 = report;
    report = 2;
    option = golfie[report];
    option = oscard.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot6 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot7 = report;
    report = 3;
    report = golfie[report];
    foxtra = oscard.bind(entity)(report);
    romeon = foxtra.createStyles;
    report = {};
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'hidden', 'borderRadius': null, 'height': 75, 'padding': 12, 'flex': 1};
    option = 4;
    option = golfie[option];
    option = offset.bind(entity)(option);
    option = option.radii;
    option = option.sm;
    yankee['borderRadius'] = option;
    option = 12;
    report['fileInfoAttachmentPreviewFile'] = yankee;
    yankee = 8;
    backup = {'height': 32, 'width': 24, 'marginRight': 8};
    report['attachmentFileIcon'] = backup;
    backup = {'paddingRight': 4, 'paddingLeft': 4, 'maxWidth': 136};
    report['attachmentFileName'] = backup;
    backup = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    report['videoIcon'] = backup;
    report = romeon.bind(foxtra)(report);
    var _closure1_slot8 = report;
    report = {};
    romeon = 5;
    romeon = golfie[romeon];
    romeon = offset.bind(entity)(romeon);
    report['archive'] = romeon;
    romeon = 6;
    romeon = golfie[romeon];
    romeon = offset.bind(entity)(romeon);
    report['acrobat'] = romeon;
    romeon = 7;
    romeon = golfie[romeon];
    romeon = offset.bind(entity)(romeon);
    report['ae'] = romeon;
    yankee = golfie[yankee];
    yankee = offset.bind(entity)(yankee);
    report['ai'] = yankee;
    yankee = 9;
    yankee = golfie[yankee];
    yankee = offset.bind(entity)(yankee);
    report['audio'] = yankee;
    yankee = 10;
    yankee = golfie[yankee];
    yankee = offset.bind(entity)(yankee);
    report['code'] = yankee;
    yankee = 11;
    yankee = golfie[yankee];
    yankee = offset.bind(entity)(yankee);
    report['document'] = yankee;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['image'] = option;
    option = 13;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['photoshop'] = option;
    option = 14;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['sketch'] = option;
    option = 15;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['spreadsheet'] = option;
    option = 16;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['unknown'] = option;
    option = 17;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['video'] = option;
    option = 18;
    option = golfie[option];
    option = offset.bind(entity)(option);
    report['webcode'] = option;
    var _closure1_slot9 = report;
    option = verify.memo;
    report = function(argFoo) {
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
    report = option.bind(verify)(report);
    var _closure1_slot10 = report;
    report = 25;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'uikit-native/AttachmentPreview.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AttachmentPreview
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
    zuuluu['default'] = tangon;
    zuuluu['AttachmentIcon'] = michal;
    return entity;
})();