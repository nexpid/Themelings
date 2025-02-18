// app/uikit-native/refresh/form/FormCTAButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    sizing = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: getCTAButtonColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            tangon = _closure1_slot10;
            tangon = tangon.BRAND;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 71; continue _fun00001 }
 23:
            tangon = _closure1_slot10;
            tangon = tangon.DANGER;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 63; continue _fun00001 }
 37:
            michal = _closure1_slot10;
            michal = michal.WARNING;
            if(!(michal !== zuuluu)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            michal = undefined;
            return michal;
 55:
            michal = entity.textWarning;
            return michal;
 63:
            michal = entity.textDanger;
            return michal;
 71:
            entity = entity.textBrand;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tangon = function(argFoo) { // Original name: FormCTAButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.color;
            tangon = undefined;
            if(!(tangon === report)) { _fun00004_ip = 27; continue _fun00003 }
 14:
            michal = _closure1_slot10;
            report = michal.BRAND;
 27:
            foxtra = entity.label;
            michal = entity.fontSize;
            output = 16;
            if(!(tangon !== michal)) { _fun00004_ip = 48; continue _fun00003 }
 45:
            output = michal;
 48:
            michal = entity.alignLeft;
            kiloes = tangon !== michal;
            if(!kiloes) { _fun00004_ip = 64; continue _fun00003 }
 61:
            kiloes = michal;
 64:
            michal = entity.disabled;
            offset = tangon !== michal;
            if(!offset) { _fun00004_ip = 79; continue _fun00003 }
 76:
            offset = michal;
 79:
            michal = entity.loading;
            yankee = tangon !== michal;
            if(!yankee) { _fun00004_ip = 95; continue _fun00003 }
 92:
            yankee = michal;
 95:
            verify = entity.testID;
            option = entity.style;
            romeon = entity.onPress;
            entity = _closure1_slot9;
            golfie = entity.bind(tangon)();
            zuuluu = _closure1_slot8;
            michal = _closure1_slot0;
            backup = _closure1_slot1;
            entity = 8;
            entity = backup[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.LegacyText;
            entity = {};
            sizing = golfie.text;
            backup = new Array(4);
            backup[0] = sizing;
            sizing = _closure1_slot11;
            sizing = sizing.bind(tangon)(report, golfie);
            backup[1] = sizing;
            sizing = {};
            sizing['fontSize'] = output;
            backup[2] = sizing;
            if(!kiloes) { _fun00004_ip = 201; continue _fun00003 }
 195:
            kiloes = golfie.alignLeft;
 201:
            backup[3] = kiloes;
            entity['style'] = backup;
            entity['children'] = foxtra;
            foxtra = zuuluu.bind(tangon)(michal, entity);
            if(!yankee) { _fun00004_ip = 242; continue _fun00003 }
 222:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot3;
            entity = {};
            entity['color'] = report;
            foxtra = zuuluu.bind(tangon)(michal, entity);
 242:
            zuuluu = _closure1_slot2;
            michal = zuuluu.useContext;
            report = _closure1_slot0;
            backup = _closure1_slot1;
            entity = 9;
            entity = backup[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.RedesignCompatContext;
            entity = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            report = {};
            if(entity) { _fun00004_ip = 423; continue _fun00003 }
 299:
            backup = golfie.sectionBody;
            entity = new Array(3);
            entity[0] = backup;
            backup = offset;
            if(!offset) { _fun00004_ip = 324; continue _fun00003 }
 319:
            backup = golfie.disabled;
 324:
            entity[1] = backup;
            entity[2] = option;
            report['style'] = entity;
            backup = _closure1_slot8;
            option = _closure1_slot4;
            entity = {};
            entity['testID'] = verify;
            kiloes = 'button';
            entity['accessibilityRole'] = kiloes;
            entity['onPress'] = romeon;
            kiloes = golfie.button;
            entity['style'] = kiloes;
            kiloes = offset;
            if(offset) { _fun00004_ip = 382; continue _fun00003 }
 379:
            kiloes = yankee;
 382:
            entity['disabled'] = kiloes;
            sizing = _closure1_slot7;
            kiloes = _closure1_slot6;
            kiloes = sizing.bind(tangon)(kiloes);
            entity['android_ripple'] = kiloes;
            entity['children'] = foxtra;
            entity = backup.bind(tangon)(option, entity);
            report['children'] = entity;
            entity = report;
            _fun00004_ip = 508; continue _fun00003;
 423:
            golfie = golfie.rowButton;
            report['style'] = golfie;
            option = _closure1_slot8;
            golfie = _closure1_slot0;
            backup = _closure1_slot1;
            oscard = 10;
            oscard = backup[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.RowButton;
            oscard = {};
            oscard['label'] = foxtra;
            oscard['onPress'] = romeon;
            romeon = false;
            oscard['arrow'] = romeon;
            if(offset) { _fun00004_ip = 486; continue _fun00003 }
 483:
            offset = yankee;
 486:
            oscard['disabled'] = offset;
            oscard['testID'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report['children'] = oscard;
            entity = report;
 508:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.ActivityIndicator;
    var _closure1_slot3 = option;
    option = michal.Pressable;
    var _closure1_slot4 = option;
    option = michal.Platform;
    option = michal.StyleSheet;
    michal = michal.View;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = option;
    michal = michal.getThemedRippleConfig;
    var _closure1_slot7 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    foxtra = michal.Fonts;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot8 = michal;
    michal = 5;
    michal = golfie[michal];
    verify = oscard.bind(entity)(michal);
    option = verify.createStyles;
    michal = {};
    offset = {};
    kiloes = 16;
    offset['paddingHorizontal'] = kiloes;
    michal['rowButton'] = offset;
    offset = {};
    michal['sectionBody'] = offset;
    offset = {'minHeight': 44, 'justifyContent': 'center'};
    michal['button'] = offset;
    yankee = 'left';
    offset = {'lineHeight': 44, 'paddingHorizontal': 17, 'textAlign': 'left'};
    michal['text'] = offset;
    offset = {};
    backup = 6;
    romeon = golfie[backup];
    echoed = sizing.bind(entity)(romeon);
    result = foxtra.PRIMARY_SEMIBOLD;
    romeon = 7;
    output = golfie[romeon];
    output = sizing.bind(entity)(output);
    output = output.colors;
    output = output.CONTROL_BRAND_FOREGROUND;
    source = echoed.bind(entity)(result, output, kiloes);
    ctrled = offset;
    output = copyDataProperties(ctrled, source);
    michal['textBrand'] = offset;
    offset = {};
    output = golfie[backup];
    echoed = sizing.bind(entity)(output);
    result = foxtra.PRIMARY_SEMIBOLD;
    output = golfie[romeon];
    output = sizing.bind(entity)(output);
    output = output.colors;
    output = output.TEXT_DANGER;
    source = echoed.bind(entity)(result, output, kiloes);
    ctrled = offset;
    output = copyDataProperties(ctrled, source);
    michal['textDanger'] = offset;
    offset = {};
    backup = golfie[backup];
    backup = sizing.bind(entity)(backup);
    foxtra = foxtra.PRIMARY_SEMIBOLD;
    romeon = golfie[romeon];
    romeon = sizing.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.STATUS_WARNING;
    source = backup.bind(entity)(foxtra, romeon, kiloes);
    ctrled = offset;
    romeon = copyDataProperties(ctrled, source);
    michal['textWarning'] = offset;
    offset = {};
    offset['textAlign'] = yankee;
    michal['alignLeft'] = offset;
    offset = {};
    yankee = 0.5;
    offset['opacity'] = yankee;
    michal['disabled'] = offset;
    michal = option.bind(verify)(michal);
    var _closure1_slot9 = michal;
    michal = {};
    option = 'brand';
    michal['BRAND'] = option;
    option = 'danger';
    michal['DANGER'] = option;
    option = 'warning';
    michal['WARNING'] = option;
    var _closure1_slot10 = michal;
    tangon['Colors'] = michal;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'uikit-native/refresh/form/FormCTAButton.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['FormCTAButtonColors'] = michal;
    return entity;
})();