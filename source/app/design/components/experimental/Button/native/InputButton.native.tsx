// app/design/components/experimental/Button/native/InputButton.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = ['size', 'isRound', 'text', 'value', 'icon', 'iconPosition', 'accessibilityLabel', 'accessibilityValue', 'maxFontSizeMultiplier'];
    var _closure1_slot2 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Text;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flexGrow': 1, 'flexShrink': 1, 'width': '100%'};
    tangon['buttonText'] = offset;
    offset = {};
    yankee = 5;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.INPUT_PLACEHOLDER_TEXT;
    offset['color'] = foxtra;
    tangon['buttonTextPlaceholder'] = offset;
    offset = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.REDESIGN_BUTTON_TERTIARY_TEXT;
    offset['color'] = yankee;
    tangon['buttonTextValue'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot6 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = oscard.size;
            result = 'lg';
            tangon = undefined;
            if(!(tangon !== entity)) { _fun00002_ip = 21; continue _fun00001 }
 18:
            result = entity;
 21:
            entity = oscard.isRound;
            romeon = tangon !== entity;
            if(!romeon) { _fun00002_ip = 37; continue _fun00001 }
 34:
            romeon = entity;
 37:
            option = oscard.text;
            verify = oscard.value;
            output = oscard.icon;
            michal = oscard.iconPosition;
            entity = 'start';
            sizing = entity;
            if(!(tangon !== michal)) { _fun00002_ip = 72; continue _fun00001 }
 69:
            sizing = michal;
 72:
            backup = oscard.accessibilityLabel;
            golfie = oscard.accessibilityValue;
            yankee = oscard.maxFontSizeMultiplier;
            if(!(tangon === yankee)) { _fun00002_ip = 122; continue _fun00001 }
 93:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 6;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            yankee = michal.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
 122:
            zuuluu = _closure1_slot3;
            michal = _closure1_slot2;
            oscard = zuuluu.bind(tangon)(oscard, michal);
            zuuluu = _closure1_slot0;
            offset = _closure1_slot1;
            michal = 7;
            michal = offset[michal];
            offset = zuuluu.bind(tangon)(michal);
            zuuluu = offset.useInputStyles;
            michal = {};
            michal['size'] = result;
            michal['isRound'] = romeon;
            entity = entity === sizing;
            michal['hasLeadingIcon'] = entity;
            romeon = zuuluu.bind(offset)(michal);
            michal = _closure1_slot6;
            kiloes = michal.bind(tangon)();
            offset = null;
            if(!(offset == output)) { _fun00002_ip = 208; continue _fun00001 }
 204:
            foxtra = {};
            _fun00002_ip = 258; continue _fun00001;
 208:
            michal = {};
            if(entity) { _fun00002_ip = 235; continue _fun00001 }
 213:
            entity = romeon.trailingIcon;
            entity = entity.paddingStart;
            michal['paddingEnd'] = entity;
            entity = michal;
            _fun00002_ip = 255; continue _fun00001;
 235:
            zuuluu = romeon.leadingIcon;
            zuuluu = zuuluu.paddingEnd;
            michal['paddingStart'] = zuuluu;
            entity = michal;
 255:
            foxtra = entity;
 258:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot0;
            echoed = _closure1_slot1;
            entity = 8;
            entity = echoed[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BaseTextButton;
            entity = {};
            source = entity;
            update = oscard;
            oscard = copyDataProperties(source, update);
            echoed = argBar;
            oscard = 'ref';
            entity[oscard] = echoed;
            oscard = 'size';
            entity[oscard] = result;
            result = 'tertiary';
            oscard = 'variant';
            entity[oscard] = result;
            oscard = 'icon';
            entity[oscard] = output;
            oscard = 'iconPosition';
            entity[oscard] = sizing;
            oscard = romeon.padding;
            sizing = new Array(2);
            sizing[0] = oscard;
            oscard = romeon.radius;
            sizing[1] = oscard;
            oscard = 'pillStyle';
            entity[oscard] = sizing;
            if(!(offset == backup)) { _fun00002_ip = 411; continue _fun00001 }
 390:
            sizing = offset == option;
            oscard = undefined;
            if(sizing) { _fun00002_ip = 408; continue _fun00001 }
 399:
            sizing = option.toString;
            oscard = sizing.bind(option)();
 408:
            backup = oscard;
 411:
            oscard = 'accessibilityLabel';
            entity[oscard] = backup;
            if(!(offset == golfie)) { _fun00002_ip = 433; continue _fun00001 }
 424:
            oscard = {};
            oscard['text'] = verify;
            golfie = oscard;
 433:
            oscard = 'accessibilityValue';
            entity[oscard] = golfie;
            golfie = _closure1_slot5;
            oscard = _closure1_slot4;
            report = {};
            backup = romeon.text;
            romeon = new Array(4);
            romeon[0] = backup;
            backup = kiloes.buttonText;
            romeon[1] = backup;
            if(!(offset == verify)) { _fun00002_ip = 487; continue _fun00001 }
 479:
            backup = kiloes.buttonTextPlaceholder;
            _fun00002_ip = 493; continue _fun00001;
 487:
            backup = kiloes.buttonTextValue;
 493:
            romeon[2] = backup;
            romeon[3] = foxtra;
            report['style'] = romeon;
            romeon = 1;
            report['numberOfLines'] = romeon;
            report['maxFontSizeMultiplier'] = yankee;
            if(!(offset != verify)) { _fun00002_ip = 525; continue _fun00001 }
 522:
            option = verify;
 525:
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'textElement';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/experimental/Button/native/InputButton.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['InputButton'] = michal;
    return entity;
})();