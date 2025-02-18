// app/design/components/TextInput/native/TextArea.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: getLengthRemainingTextColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = null;
            tangon = michal == oscard;
            zuuluu = 'text-muted';
            entity = zuuluu;
            if(tangon) { _fun00002_ip = 75; continue _fun00001 }
 24:
            michal = michal == report;
            entity = zuuluu;
            if(michal) { _fun00002_ip = 75; continue _fun00001 }
 34:
            michal = 0;
            tangon = report <= michal;
            michal = 'text-danger';
            if(tangon) { _fun00002_ip = 72; continue _fun00001 }
 49:
            tangon = 9;
            tangon = oscard / tangon;
            tangon = report < tangon;
            if(!tangon) { _fun00002_ip = 69; continue _fun00001 }
 63:
            zuuluu = 'text-warning';
 69:
            michal = zuuluu;
 72:
            entity = michal;
 75:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot2 = tangon;
    tangon = 2;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot3 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'height': 128, 'textAlignVertical': 'top'};
    tangon['area'] = offset;
    offset = {};
    yankee = 'absolute';
    offset['position'] = yankee;
    yankee = 4;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_4;
    offset['bottom'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['right'] = yankee;
    tangon['maxLengthIndicator'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            verify = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            report = 5;
            entity = michal[report];
            tangon = undefined;
            golfie = zuuluu.bind(tangon)(entity);
            oscard = golfie.useInputStyles;
            entity = {'size': 'lg', 'isRound': false};
            option = verify.isDisabled;
            entity['isDisabled'] = option;
            yankee = oscard.bind(golfie)(entity);
            entity = _closure1_slot5;
            foxtra = entity.bind(tangon)();
            output = verify.maxLength;
            entity = 6;
            entity = michal[entity];
            golfie = zuuluu.bind(tangon)(entity);
            oscard = golfie.useTextField;
            entity = argBar;
            entity = oscard.bind(golfie)(verify, entity);
            update = entity.inputProps;
            backup = entity.innerRef;
            entity = entity.state;
            source = 7;
            michal = michal[source];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useFocus;
            michal = michal.bind(zuuluu)();
            echoed = michal.focusProps;
            offset = michal.isFocused;
            oscard = null;
            michal = oscard != output;
            kiloes = undefined;
            if(!michal) { _fun00004_ip = 181; continue _fun00003 }
 167:
            entity = entity.value;
            entity = entity.length;
            kiloes = output - entity;
 181:
            zuuluu = _closure1_slot3;
            result = _closure1_slot0;
            romeon = _closure1_slot1;
            entity = 8;
            entity = romeon[entity];
            entity = result.bind(tangon)(entity);
            michal = entity.Input;
            entity = {};
            vacuum = entity;
            ctrled = verify;
            golfie = copyDataProperties(vacuum, ctrled);
            option = _closure1_slot4;
            report = romeon[report];
            report = result.bind(tangon)(report);
            golfie = report.InputFieldContainer;
            report = {};
            vacuum = report;
            ctrled = verify;
            verify = copyDataProperties(vacuum, ctrled);
            verify = 'isFocused';
            report[verify] = offset;
            verify = 9;
            verify = romeon[verify];
            verify = result.bind(tangon)(verify);
            offset = verify.NativeTextInput;
            verify = {};
            romeon = romeon[source];
            result = result.bind(tangon)(romeon);
            romeon = result.mergeProps;
            ctrled = romeon.bind(result)(update, echoed);
            vacuum = verify;
            romeon = copyDataProperties(vacuum, ctrled);
            romeon = 'ref';
            verify[romeon] = backup;
            romeon = yankee.padding;
            backup = new Array(3);
            backup[0] = romeon;
            romeon = yankee.text;
            backup[1] = romeon;
            romeon = foxtra.area;
            backup[2] = romeon;
            romeon = 'style';
            verify[romeon] = backup;
            yankee = yankee.placeholderText;
            romeon = yankee.color;
            yankee = 'placeholderTextColor';
            verify[yankee] = romeon;
            romeon = true;
            yankee = 'multiline';
            verify[yankee] = romeon;
            offset = zuuluu.bind(tangon)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            oscard = null;
            if(!(oscard != kiloes)) { _fun00004_ip = 503; continue _fun00003 }
 412:
            romeon = _closure1_slot3;
            yankee = _closure1_slot2;
            offset = {};
            foxtra = foxtra.maxLengthIndicator;
            offset['style'] = foxtra;
            backup = _closure1_slot0;
            result = _closure1_slot1;
            foxtra = 10;
            foxtra = result[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            backup = foxtra.Text;
            foxtra = {};
            result = 'text-xs/semibold';
            foxtra['variant'] = result;
            sizing = _closure1_slot6;
            sizing = sizing.bind(tangon)(output, kiloes);
            foxtra['color'] = sizing;
            foxtra['children'] = kiloes;
            foxtra = romeon.bind(tangon)(backup, foxtra);
            offset['children'] = foxtra;
            oscard = romeon.bind(tangon)(yankee, offset);
 503:
            verify[1] = oscard;
            oscard = 'children';
            report[oscard] = verify;
            report = option.bind(tangon)(golfie, report);
            entity[oscard] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/TextInput/native/TextArea.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['TextArea'] = michal;
    return entity;
})();