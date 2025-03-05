// app/design/components/Button/native/FloatingActionButton.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    offset = 0;
    report = golfie[offset];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'right': 16, 'bottom': 16};
    yankee = 3;
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.shadows;
    backup = yankee.SHADOW_HIGH;
    kiloes = verify;
    yankee = copyDataProperties(kiloes, backup);
    tangon['button'] = verify;
    verify = {};
    yankee = 4;
    romeon = golfie[yankee];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.FAB_BUTTON_SIZE;
    verify['minWidth'] = romeon;
    yankee = golfie[yankee];
    yankee = oscard.bind(entity)(yankee);
    yankee = yankee.FAB_BUTTON_SIZE;
    verify['minHeight'] = yankee;
    verify['padding'] = offset;
    tangon['iconButtonPill'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Button/native/FloatingActionButton.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useStyles'] = tangon;
    michal = function(argFoo) { // Original name: FloatingActionButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            yankee = tangon.icon;
            golfie = tangon.positionBottom;
            var _closure2_slot0 = golfie;
            verify = tangon.accessibilityLabel;
            zuuluu = {'icon': 0, 'positionBottom': 0, 'accessibilityLabel': 0};
            sizing = null;
            output = zuuluu;
            michal = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = tangon;
            kiloes = zuuluu;
            oscard = copyDataProperties(output, sizing, kiloes);
            michal = _closure1_slot5;
            tangon = undefined;
            report = michal.bind(tangon)();
            var _closure2_slot1 = report;
            option = _closure1_slot3;
            zuuluu = option.useMemo;
            michal = new Array(2);
            michal[0] = report;
            michal[1] = golfie;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    michal = entity.button;
                    entity = new Array(2);
                    entity[0] = michal;
                    zuuluu = _closure2_slot0;
                    michal = null;
                    zuuluu = michal != zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 36:
                    zuuluu = {};
                    tangon = _closure2_slot0;
                    zuuluu['bottom'] = tangon;
                    michal = zuuluu;
 49:
                    entity[1] = michal;
                    return entity;
                }
            };
            golfie = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot4;
            michal = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 5;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BaseIconButton;
            entity = {};
            output = entity;
            sizing = oscard;
            oscard = copyDataProperties(output, sizing);
            oscard = 'accessibilityLabel';
            entity[oscard] = verify;
            verify = 'lg';
            oscard = 'size';
            entity[oscard] = verify;
            verify = 'primary';
            oscard = 'variant';
            entity[oscard] = verify;
            oscard = option.isValidElement;
            oscard = oscard.bind(option)(yankee);
            option = yankee;
            if(!oscard) { _fun00002_ip = 252; continue _fun00001 }
 199:
            offset = _closure1_slot3;
            verify = offset.cloneElement;
            oscard = {};
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 3;
            romeon = backup[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.colors;
            romeon = romeon.WHITE;
            oscard['color'] = romeon;
            option = verify.bind(offset)(yankee, oscard);
 252:
            oscard = 'icon';
            entity[oscard] = option;
            oscard = 'style';
            entity[oscard] = golfie;
            oscard = report.iconButtonPill;
            report = 'pillStyle';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['FloatingActionButton'] = michal;
    return entity;
})();