// app/design/components/experimental/Button/native/InputButton.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = ['size', 'isRound', 'text', 'value', 'icon', 'iconPosition', 'accessibilityLabel', 'accessibilityValue', 'maxFontSizeMultiplier'];
    var _closure1_slot2 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Text;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flexGrow': 1, 'flexShrink': 1, 'width': '100%'};
    tango['buttonText'] = offset;
    offset = {};
    yankee = 5;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.INPUT_PLACEHOLDER_TEXT;
    offset['color'] = foxtrot;
    tango['buttonTextPlaceholder'] = offset;
    offset = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.REDESIGN_BUTTON_TERTIARY_TEXT;
    offset['color'] = yankee;
    tango['buttonTextValue'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot6 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun76251: for(var _fun76251_ip = 0; ; ) switch(_fun76251_ip) {
 0:
            oscar = argFoo;
            entity = oscar.size;
            result = 'lg';
            tango = undefined;
            if(!(tango !== entity)) { _fun76251_ip = 21; continue _fun76251 }
 18:
            result = entity;
 21:
            entity = oscar.isRound;
            romeo = tango !== entity;
            if(!romeo) { _fun76251_ip = 37; continue _fun76251 }
 34:
            romeo = entity;
 37:
            options = oscar.text;
            verify = oscar.value;
            output = oscar.icon;
            mike = oscar.iconPosition;
            entity = 'start';
            sizing = entity;
            if(!(tango !== mike)) { _fun76251_ip = 72; continue _fun76251 }
 69:
            sizing = mike;
 72:
            backup = oscar.accessibilityLabel;
            golf = oscar.accessibilityValue;
            yankee = oscar.maxFontSizeMultiplier;
            if(!(tango === yankee)) { _fun76251_ip = 122; continue _fun76251 }
 93:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 6;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            yankee = mike.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
 122:
            zulu = _closure1_slot3;
            mike = _closure1_slot2;
            oscar = zulu.bind(tango)(oscar, mike);
            zulu = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 7;
            mike = offset[mike];
            offset = zulu.bind(tango)(mike);
            zulu = offset.useInputStyles;
            mike = {};
            mike['size'] = result;
            mike['isRound'] = romeo;
            entity = entity === sizing;
            mike['hasLeadingIcon'] = entity;
            romeo = zulu.bind(offset)(mike);
            mike = _closure1_slot6;
            kilo = mike.bind(tango)();
            offset = null;
            if(!(offset == output)) { _fun76251_ip = 208; continue _fun76251 }
 204:
            foxtrot = {};
            _fun76251_ip = 258; continue _fun76251;
 208:
            mike = {};
            if(entity) { _fun76251_ip = 235; continue _fun76251 }
 213:
            entity = romeo.trailingIcon;
            entity = entity.paddingStart;
            mike['paddingEnd'] = entity;
            entity = mike;
            _fun76251_ip = 255; continue _fun76251;
 235:
            zulu = romeo.leadingIcon;
            zulu = zulu.paddingEnd;
            mike['paddingStart'] = zulu;
            entity = mike;
 255:
            foxtrot = entity;
 258:
            zulu = _closure1_slot5;
            mike = _closure1_slot0;
            echo = _closure1_slot1;
            entity = 8;
            entity = echo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.BaseTextButton;
            entity = {};
            source = entity;
            update = oscar;
            oscar = copyDataProperties(source, update);
            echo = argBar;
            oscar = 'ref';
            entity[oscar] = echo;
            oscar = 'size';
            entity[oscar] = result;
            result = 'tertiary';
            oscar = 'variant';
            entity[oscar] = result;
            oscar = 'icon';
            entity[oscar] = output;
            oscar = 'iconPosition';
            entity[oscar] = sizing;
            oscar = romeo.padding;
            sizing = new Array(2);
            sizing[0] = oscar;
            oscar = romeo.radius;
            sizing[1] = oscar;
            oscar = 'pillStyle';
            entity[oscar] = sizing;
            if(!(offset == backup)) { _fun76251_ip = 411; continue _fun76251 }
 390:
            sizing = offset == options;
            oscar = undefined;
            if(sizing) { _fun76251_ip = 408; continue _fun76251 }
 399:
            sizing = options.toString;
            oscar = sizing.bind(options)();
 408:
            backup = oscar;
 411:
            oscar = 'accessibilityLabel';
            entity[oscar] = backup;
            if(!(offset == golf)) { _fun76251_ip = 433; continue _fun76251 }
 424:
            oscar = {};
            oscar['text'] = verify;
            golf = oscar;
 433:
            oscar = 'accessibilityValue';
            entity[oscar] = golf;
            golf = _closure1_slot5;
            oscar = _closure1_slot4;
            report = {};
            backup = romeo.text;
            romeo = new Array(4);
            romeo[0] = backup;
            backup = kilo.buttonText;
            romeo[1] = backup;
            if(!(offset == verify)) { _fun76251_ip = 487; continue _fun76251 }
 479:
            backup = kilo.buttonTextPlaceholder;
            _fun76251_ip = 493; continue _fun76251;
 487:
            backup = kilo.buttonTextValue;
 493:
            romeo[2] = backup;
            romeo[3] = foxtrot;
            report['style'] = romeo;
            romeo = 1;
            report['numberOfLines'] = romeo;
            report['maxFontSizeMultiplier'] = yankee;
            if(!(offset != verify)) { _fun76251_ip = 525; continue _fun76251 }
 522:
            options = verify;
 525:
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = 'textElement';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/experimental/Button/native/InputButton.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['InputButton'] = mike;
    return entity;
})();