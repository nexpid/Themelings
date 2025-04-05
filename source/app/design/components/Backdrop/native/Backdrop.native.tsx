// app/design/components/Backdrop/native/Backdrop.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getBlurAmount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'none';
            if(!(entity !== michal)) { _fun00002_ip = 57; continue _fun00001 }
 11:
            entity = 'subtle';
            if(!(entity !== michal)) { _fun00002_ip = 45; continue _fun00001 }
 21:
            entity = 'strong';
            if(!(entity !== michal)) { _fun00002_ip = 33; continue _fun00001 }
 29:
            entity = undefined;
            return entity;
 33:
            entity = 0.25;
            return entity;
 45:
            entity = 0.05;
            return entity;
 57:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.StyleSheet;
    tangon = tangon.Pressable;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot5 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = {};
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = verify.absoluteFillObject;
    tangon['fill'] = verify;
    verify = {};
    offset = 4;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BACKDROP;
    verify['backgroundColor'] = romeon;
    tangon['backdrop'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BACKDROP_NO_OPACITY;
    verify['backgroundColor'] = offset;
    tangon['backdropOpaque'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'height': 16};
    tangon['accessibilityDismiss'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Backdrop/native/Backdrop.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: Backdrop
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            golfie = michal.style;
            update = michal.accessibleDismissStyle;
            report = michal.animatedProps;
            tangon = undefined;
            if(!(report === tangon)) { _fun00004_ip = 35; continue _fun00003 }
 28:
            report = _closure1_slot7;
 35:
            verify = michal.opaque;
            if(!(verify === tangon)) { _fun00004_ip = 47; continue _fun00003 }
 45:
            verify = false;
 47:
            output = michal.blur;
            if(!(output === tangon)) { _fun00004_ip = 61; continue _fun00003 }
 57:
            output = 'none';
 61:
            result = michal.onDismiss;
            romeon = michal.accessibilityLabel;
            if(!(romeon === tangon)) { _fun00004_ip = 134; continue _fun00003 }
 76:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 5;
            oscard = yankee[zuuluu];
            oscard = offset.bind(tangon)(oscard);
            option = oscard.intl;
            oscard = option.string;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.WAI6xs;
            romeon = oscard.bind(option)(zuuluu);
 134:
            yankee = michal.aria-hidden;
            var _closure2_slot0 = tangon;
            michal = _closure1_slot8;
            foxtra = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useThemeContext;
            michal = michal.bind(zuuluu)();
            kiloes = michal.theme;
            michal = _closure1_slot1;
            zuuluu = 7;
            zuuluu = oscard[zuuluu];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            ctrled = zuuluu.top;
            zuuluu = foxtra.backdrop;
            backup = zuuluu.backgroundColor;
            _closure2_slot0 = backup;
            offset = _closure1_slot3;
            option = offset.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = backup;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hexToRgbaString;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = option.bind(offset)(entity, zuuluu);
            offset = {};
            offset['onPress'] = result;
            entity = true;
            offset['aria-hidden'] = entity;
            zuuluu = _closure1_slot6;
            entity = 9;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            option = foxtra.fill;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            oscard = 'box-none';
            entity['pointerEvents'] = oscard;
            entity['animatedProps'] = report;
            report = null;
            oscard = report != result;
            if(!oscard) { _fun00004_ip = 411; continue _fun00003 }
 342:
            option = _closure1_slot5;
            golfie = _closure1_slot4;
            report = {};
            source = foxtra.accessibilityDismiss;
            echoed = new Array(3);
            echoed[0] = source;
            source = {};
            source['top'] = ctrled;
            echoed[1] = source;
            echoed[2] = update;
            report['style'] = echoed;
            report['onPress'] = result;
            result = 'button';
            report['accessibilityRole'] = result;
            report['accessibilityLabel'] = romeon;
            report['aria-hidden'] = yankee;
            oscard = option.bind(tangon)(golfie, report);
 411:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot5;
            golfie = _closure1_slot4;
            oscard = 'none';
            if(!(oscard === output)) { _fun00004_ip = 493; continue _fun00003 }
 435:
            oscard = {};
            sequen = oscard;
            vacuum = offset;
            yankee = copyDataProperties(sequen, vacuum);
            romeon = foxtra.fill;
            yankee = new Array(2);
            yankee[0] = romeon;
            if(verify) { _fun00004_ip = 472; continue _fun00003 }
 464:
            verify = foxtra.backdrop;
            _fun00004_ip = 478; continue _fun00003;
 472:
            verify = foxtra.backdropOpaque;
 478:
            yankee[1] = verify;
            verify = 'style';
            oscard[verify] = yankee;
            _fun00004_ip = 614; continue _fun00003;
 493:
            verify = {};
            sequen = verify;
            vacuum = offset;
            offset = copyDataProperties(sequen, vacuum);
            yankee = foxtra.fill;
            offset = 'style';
            verify[offset] = yankee;
            romeon = _closure1_slot5;
            yankee = _closure1_slot1;
            result = _closure1_slot2;
            offset = 10;
            offset = result[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            sizing = _closure1_slot9;
            sizing = sizing.bind(tangon)(output);
            offset['blurAmount'] = sizing;
            sizing = foxtra.fill;
            offset['style'] = sizing;
            offset['blurTheme'] = kiloes;
            offset['blurTintRgba'] = backup;
            foxtra = foxtra.backdrop;
            foxtra = foxtra.backgroundColor;
            offset['android_fallbackColor'] = foxtra;
            yankee = romeon.bind(tangon)(yankee, offset);
            offset = 'children';
            verify[offset] = yankee;
            oscard = verify;
 614:
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['Backdrop'] = michal;
    return entity;
})();