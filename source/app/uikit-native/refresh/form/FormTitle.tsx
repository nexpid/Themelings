// app/uikit-native/refresh/form/FormTitle.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        foxtra = argBaz;
        zuuluu = argFre;
        option = argPlu;
        var _closure1_slot0 = golfie;
        var _closure1_slot1 = option;
        entity = global;
        oscard = entity.Object;
        tangon = oscard.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = tangon.bind(oscard)(zuuluu, entity, michal);
        entity = 0;
        tangon = option[entity];
        michal = argCor;
        entity = undefined;
        michal = michal.bind(entity)(tangon);
        michal = 1;
        michal = option[michal];
        michal = golfie.bind(entity)(michal);
        tangon = michal.View;
        var _closure1_slot2 = tangon;
        michal = michal.Platform;
        michal = 2;
        michal = option[michal];
        michal = golfie.bind(entity)(michal);
        romeon = michal.Fonts;
        michal = 3;
        michal = option[michal];
        michal = golfie.bind(entity)(michal);
        tangon = michal.jsx;
        var _closure1_slot3 = tangon;
        michal = michal.jsxs;
        var _closure1_slot4 = michal;
        michal = 4;
        tangon = option[michal];
        oscard = golfie.bind(entity)(tangon);
        tangon = oscard.isAndroid;
        oscard = tangon.bind(oscard)();
        tangon = 58;
        if(!oscard) { _fun00002_ip = 175; continue _fun00001 }
 172:
        tangon = 48;
 175:
        michal = option[michal];
        oscard = golfie.bind(entity)(michal);
        michal = oscard.isAndroid;
        oscard = michal.bind(oscard)();
        michal = 48;
        if(!oscard) { _fun00002_ip = 202; continue _fun00001 }
 199:
        michal = 56;
 202:
        oscard = 5;
        oscard = option[oscard];
        offset = golfie.bind(entity)(oscard);
        verify = offset.createStyles;
        oscard = {};
        backup = 16;
        yankee = {'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingTop': 16, 'paddingBottom': 16};
        oscard['titleWrapper'] = yankee;
        yankee = {};
        yankee['paddingHorizontal'] = backup;
        oscard['horizontalPadding'] = yankee;
        yankee = {};
        backup = 26;
        yankee['paddingTop'] = backup;
        oscard['thinTitle'] = yankee;
        yankee = {};
        romeon = romeon.PRIMARY_SEMIBOLD;
        yankee['fontFamily'] = romeon;
        romeon = 13;
        yankee['fontSize'] = romeon;
        romeon = 6;
        backup = option[romeon];
        backup = foxtra.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.HEADER_SECONDARY;
        yankee['color'] = backup;
        oscard['titleText'] = yankee;
        yankee = {};
        romeon = option[romeon];
        romeon = foxtra.bind(entity)(romeon);
        romeon = romeon.unsafe_rawColors;
        romeon = romeon.RED_400;
        yankee['color'] = romeon;
        oscard['error'] = yankee;
        oscard = verify.bind(offset)(oscard);
        var _closure1_slot5 = oscard;
        oscard = 8;
        oscard = option[oscard];
        option = golfie.bind(entity)(oscard);
        golfie = option.fileFinishedImporting;
        oscard = 'uikit-native/refresh/form/FormTitle.tsx';
        oscard = golfie.bind(option)(oscard);
        report = function(argFoo) { // Original name: FormTitle
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                yankee = entity.title;
                oscard = entity.icon;
                verify = entity.numberOfLines;
                offset = entity.uppercaseTitle;
                tangon = undefined;
                if(!(offset === tangon)) { _fun00004_ip = 33; continue _fun00003 }
 31:
                offset = true;
 33:
                sizing = entity.thinTitle;
                if(!(sizing === tangon)) { _fun00004_ip = 45; continue _fun00003 }
 43:
                sizing = false;
 45:
                foxtra = entity.error;
                if(!(foxtra === tangon)) { _fun00004_ip = 56; continue _fun00003 }
 54:
                foxtra = false;
 56:
                romeon = entity.inset;
                if(!(romeon === tangon)) { _fun00004_ip = 68; continue _fun00003 }
 66:
                romeon = false;
 68:
                option = entity.viewStyle;
                kiloes = entity.textStyle;
                entity = _closure1_slot5;
                backup = entity.bind(tangon)();
                zuuluu = _closure1_slot4;
                michal = _closure1_slot2;
                entity = {};
                output = backup.titleWrapper;
                golfie = new Array(4);
                golfie[0] = output;
                if(!sizing) { _fun00004_ip = 124; continue _fun00003 }
 118:
                sizing = backup.thinTitle;
 124:
                golfie[1] = sizing;
                romeon = !romeon;
                if(!romeon) { _fun00004_ip = 140; continue _fun00003 }
 134:
                romeon = backup.horizontalPadding;
 140:
                golfie[2] = romeon;
                golfie[3] = option;
                entity['style'] = golfie;
                option = _closure1_slot3;
                golfie = _closure1_slot0;
                romeon = _closure1_slot1;
                report = 7;
                report = romeon[report];
                report = golfie.bind(tangon)(report);
                golfie = report.LegacyText;
                report = {};
                sizing = backup.titleText;
                romeon = new Array(3);
                romeon[0] = sizing;
                romeon[1] = kiloes;
                if(!foxtra) { _fun00004_ip = 210; continue _fun00003 }
 205:
                foxtra = backup.error;
 210:
                romeon[2] = foxtra;
                report['style'] = romeon;
                report['numberOfLines'] = verify;
                verify = 'header';
                report['accessibilityRole'] = verify;
                verify = yankee;
                if(!offset) { _fun00004_ip = 247; continue _fun00003 }
 237:
                offset = yankee.toUpperCase;
                verify = offset.bind(yankee)();
 247:
                report['children'] = verify;
                golfie = option.bind(tangon)(golfie, report);
                report = new Array(2);
                report[0] = golfie;
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        zuuluu['default'] = report;
        zuuluu['FORM_TITLE_HEIGHT'] = tangon;
        zuuluu['THIN_FORM_TITLE_HEIGHT'] = michal;
        return entity;
    }
})();