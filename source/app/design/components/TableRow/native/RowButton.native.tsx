// app/design/components/TableRow/native/RowButton.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    michal = function(argFoo) { // Original name: RowButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            offset = report.arrow;
            tangon = undefined;
            if(!(offset === tangon)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            offset = true;
 17:
            verify = report.disabled;
            if(!(verify === tangon)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            verify = false;
 28:
            foxtra = report.variant;
            if(!(foxtra === tangon)) { _fun00002_ip = 41; continue _fun00001 }
 37:
            foxtra = 'secondary';
 41:
            romeon = report.icon;
            oscard = report.onPress;
            golfie = report.experimental_withBlurBackground;
            zuuluu = {'arrow': 0, 'disabled': 0, 'variant': 0, 'icon': 0, 'onPress': 0, 'experimental_withBlurBackground': 0};
            entity = null;
            sizing = zuuluu;
            kiloes = null;
            michal = silentSetPrototypeOf(sizing, kiloes);
            sizing = {};
            kiloes = report;
            backup = zuuluu;
            option = copyDataProperties(sizing, kiloes, backup);
            yankee = romeon;
            if(!(entity != romeon)) { _fun00002_ip = 197; continue _fun00001 }
 101:
            zuuluu = _closure1_slot2;
            michal = zuuluu.isValidElement;
            michal = michal.bind(zuuluu)(romeon);
            yankee = romeon;
            if(michal) { _fun00002_ip = 197; continue _fun00001 }
 125:
            report = 'translucent';
            if(golfie) { _fun00002_ip = 151; continue _fun00001 }
 132:
            michal = 'secondary';
            zuuluu = 'primary';
            if(!(zuuluu === foxtra)) { _fun00002_ip = 148; continue _fun00001 }
 144:
            michal = 'blurple';
 148:
            report = michal;
 151:
            zuuluu = _closure1_slot3;
            michal = _closure1_slot0;
            foxtra = _closure1_slot1;
            entity = 3;
            entity = foxtra[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRowIcon;
            entity = {};
            entity['source'] = romeon;
            entity['variant'] = report;
            yankee = zuuluu.bind(tangon)(michal, entity);
 197:
            zuuluu = _closure1_slot3;
            michal = _closure1_slot5;
            entity = {};
            entity['experimental_withBlurBackground'] = golfie;
            entity['onPress'] = oscard;
            entity['disabled'] = verify;
            sizing = entity;
            kiloes = option;
            oscard = copyDataProperties(sizing, kiloes);
            golfie = _closure1_slot3;
            oscard = _closure1_slot0;
            romeon = _closure1_slot1;
            report = 4;
            report = romeon[report];
            report = oscard.bind(tangon)(report);
            oscard = report.TableRowInner;
            report = {};
            report['icon'] = yankee;
            report['arrow'] = offset;
            report['disabled'] = verify;
            sizing = report;
            kiloes = option;
            option = copyDataProperties(sizing, kiloes);
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'children';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: RowButtonWrapper
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = tangon.experimental_withBlurBackground;
            foxtra = tangon.onPress;
            option = tangon.disabled;
            verify = tangon.children;
            zuuluu = {'experimental_withBlurBackground': 0, 'onPress': 0, 'disabled': 0, 'children': 0};
            result = null;
            echoed = zuuluu;
            michal = silentSetPrototypeOf(echoed, result);
            offset = 0;
            echoed = {};
            result = tangon;
            output = zuuluu;
            golfie = copyDataProperties(echoed, result, output);
            var _closure2_slot0 = golfie;
            michal = _closure1_slot4;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            report = _closure1_slot0;
            backup = _closure1_slot1;
            michal = 5;
            michal = backup[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useSharedValue;
            offset = michal.bind(zuuluu)(offset);
            var _closure2_slot1 = offset;
            sizing = _closure1_slot2;
            kiloes = sizing.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.set;
                entity = 1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = kiloes.bind(sizing)(michal, zuuluu);
            var _closure2_slot2 = michal;
            sizing = _closure1_slot2;
            kiloes = sizing.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.set;
                entity = 0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = kiloes.bind(sizing)(michal, zuuluu);
            var _closure2_slot3 = michal;
            zuuluu = _closure1_slot3;
            michal = 6;
            michal = backup[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.InternalCard;
            if(entity) { _fun00004_ip = 259; continue _fun00003 }
 203:
            entity = {'shadow': 'low', 'border': 'subtle', 'start': true, 'end': true};
            entity['onPress'] = foxtra;
            report = romeon.card;
            entity['style'] = report;
            entity['disabled'] = option;
            echoed = entity;
            result = golfie;
            report = copyDataProperties(echoed, result);
            report = 'children';
            entity[report] = verify;
            _fun00004_ip = 411; continue _fun00003;
 259:
            report = {'shadow': 'none', 'border': 'none', 'start': true, 'end': true};
            report['onPress'] = foxtra;
            foxtra = function(argFoo) { // Original name: onPressIn
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.onPressIn;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 37; continue _fun00005 }
 19:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.onPressIn;
                    michal = argFoo;
                    michal = zuuluu.bind(tangon)(michal);
 37:
                    michal = _closure2_slot2;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            report['onPressIn'] = foxtra;
            yankee = function(argFoo) { // Original name: onPressOut
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.onPressOut;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 37; continue _fun00007 }
 19:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.onPressOut;
                    michal = argFoo;
                    michal = zuuluu.bind(tangon)(michal);
 37:
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            report['onPressOut'] = yankee;
            foxtra = romeon.card;
            yankee = new Array(2);
            yankee[0] = foxtra;
            romeon = romeon.cardWithBlur;
            yankee[1] = romeon;
            report['style'] = yankee;
            report['disabled'] = option;
            echoed = report;
            result = golfie;
            golfie = copyDataProperties(echoed, result);
            option = 'transparent';
            golfie = 'variant';
            report[golfie] = option;
            option = _closure1_slot3;
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 7;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.BackgroundBlurView;
            oscard = {};
            oscard['pressed'] = offset;
            oscard['children'] = verify;
            golfie = option.bind(tangon)(golfie, oscard);
            oscard = 'children';
            report[oscard] = golfie;
            entity = report;
 411:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function() {
        entity = {};
        michal = {};
        zuuluu = 0;
        michal['padding'] = zuuluu;
        entity['card'] = michal;
        michal = {};
        zuuluu = 'hidden';
        michal['overflow'] = zuuluu;
        entity['cardWithBlur'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.TableRowIcon;
    michal['Icon'] = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'design/components/TableRow/native/RowButton.native.tsx';
    golfie = option.bind(verify)(golfie);
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TableRowIconProps;
    zuuluu['RowButtonIconProps'] = tangon;
    zuuluu['RowButton'] = michal;
    return entity;
})();