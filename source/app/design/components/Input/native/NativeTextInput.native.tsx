// app/design/components/Input/native/NativeTextInput.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.Pressable;
    var _closure1_slot4 = verify;
    verify = tangon.TextInput;
    var _closure1_slot5 = verify;
    verify = tangon.StyleSheet;
    var _closure1_slot6 = verify;
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardThemes;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot10 = option;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot3;
            zuuluu = tangon.useRef;
            report = null;
            offset = zuuluu.bind(tangon)(report);
            zuuluu = function(argFoo) { // Original name: useKeyboardBlurring
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 5;
                tangon = golfie[entity];
                entity = undefined;
                verify = report.bind(entity)(tangon);
                option = verify.useStateFromStores;
                tangon = _closure1_slot8;
                report = new Array(1);
                report[0] = tangon;
                tangon = function() {
                    entity = _closure1_slot8;
                    entity = entity.keyboardOpen;
                    return entity;
                };
                option = option.bind(verify)(report, tangon);
                var _closure3_slot1 = option;
                report = _closure1_slot1;
                tangon = 6;
                tangon = golfie[tangon];
                tangon = report.bind(entity)(tangon);
                golfie = tangon.bind(entity)(option);
                var _closure3_slot2 = golfie;
                report = _closure1_slot3;
                tangon = report.useEffect;
                zuuluu = new Array(3);
                zuuluu[0] = option;
                zuuluu[1] = golfie;
                zuuluu[2] = oscard;
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure3_slot1;
                        entity = _closure3_slot2;
                        michal = michal === entity;
                        if(michal) { _fun00004_ip = 22; continue _fun00003 }
 18:
                        michal = _closure3_slot1;
 22:
                        entity = undefined;
                        zuuluu = undefined;
                        if(michal) { _fun00004_ip = 47; continue _fun00003 }
 29:
                        tangon = _closure3_slot0;
                        tangon = tangon.current;
                        report = null;
                        michal = report == tangon;
                        zuuluu = tangon;
 47:
                        if(michal) { _fun00004_ip = 60; continue _fun00003 }
 50:
                        michal = zuuluu.blur;
                        michal = michal.bind(zuuluu)();
 60:
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(offset);
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 9;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            backup = zuuluu.bind(tangon)(entity);
            zuuluu = function(argFoo, argBar) { // Original name: useControlledValueProps
                michal = argFoo;
                option = argBar;
                var _closure3_slot0 = option;
                golfie = michal.value;
                var _closure3_slot1 = golfie;
                zuuluu = michal.defaultValue;
                var _closure3_slot2 = zuuluu;
                oscard = _closure1_slot3;
                report = oscard.useEffect;
                tangon = new Array(3);
                tangon[0] = option;
                tangon[1] = golfie;
                tangon[2] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure3_slot0;
                        zuuluu = entity.current;
                        oscard = null;
                        if(!(oscard != zuuluu)) { _fun00006_ip = 53; continue _fun00005 }
 18:
                        michal = zuuluu.setNativeProps;
                        entity = {};
                        tangon = _closure3_slot1;
                        if(!(oscard == tangon)) { _fun00006_ip = 40; continue _fun00005 }
 34:
                        tangon = _closure3_slot2;
                        _fun00006_ip = 44; continue _fun00005;
 40:
                        tangon = _closure3_slot1;
 44:
                        entity['text'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 53:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.useMountLayoutEffect;
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = _closure3_slot0;
                        zuuluu = entity.current;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00008_ip = 39; continue _fun00007 }
 18:
                        michal = zuuluu.setNativeProps;
                        entity = {};
                        tangon = _closure3_slot1;
                        entity['text'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 39:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = {};
                entity['value'] = michal;
                entity['defaultValue'] = michal;
                return entity;
            };
            foxtra = zuuluu.bind(tangon)(entity, offset);
            michal = function(argFoo) { // Original name: usePanGestureWrapper
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 8;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                entity = report.useIsScreenReaderEnabled;
                entity = entity.bind(report)();
                var _closure3_slot1 = entity;
                report = _closure1_slot3;
                oscard = report.useCallback;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = _closure3_slot0;
                        zuuluu = entity.current;
                        entity = null;
                        michal = entity == zuuluu;
                        entity = undefined;
                        if(michal) { _fun00010_ip = 33; continue _fun00009 }
 23:
                        michal = zuuluu.focus;
                        entity = michal.bind(zuuluu)();
 33:
                        return entity;
                    }
                };
                zuuluu = oscard.bind(report)(zuuluu, tangon);
                var _closure3_slot2 = zuuluu;
                tangon = report.useMemo;
                zuuluu = new Array(1);
                zuuluu[0] = entity;
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = {};
                        michal = _closure1_slot6;
                        tangon = michal.absoluteFillObject;
                        report = entity;
                        michal = copyDataProperties(report, tangon);
                        michal = _closure3_slot1;
                        zuuluu = 'flex';
                        if(!michal) { _fun00012_ip = 40; continue _fun00011 }
 36:
                        zuuluu = 'none';
 40:
                        michal = 'display';
                        entity[michal] = zuuluu;
                        return entity;
                    }
                };
                entity = tangon.bind(report)(entity, zuuluu);
                var _closure3_slot3 = entity;
                entity = {};
                michal = function(argFoo) { // Original name: panGestureWrapper
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        tangon = _closure1_slot11;
                        zuuluu = _closure1_slot7;
                        michal = {};
                        report = {'flexBasis': 0, 'flexGrow': 1};
                        michal['style'] = report;
                        report = new Array(2);
                        oscard = argFoo;
                        report[0] = oscard;
                        option = _closure1_slot10;
                        golfie = _closure1_slot4;
                        oscard = {};
                        verify = _closure3_slot0;
                        romeon = verify.current;
                        verify = null;
                        offset = verify != romeon;
                        yankee = 'auto';
                        verify = yankee;
                        if(!offset) { _fun00014_ip = 100; continue _fun00013 }
 80:
                        offset = romeon.isFocused;
                        offset = offset.bind(romeon)();
                        verify = yankee;
                        if(!offset) { _fun00014_ip = 100; continue _fun00013 }
 96:
                        verify = 'none';
 100:
                        oscard['pointerEvents'] = verify;
                        verify = _closure3_slot2;
                        oscard['onPress'] = verify;
                        entity = _closure3_slot3;
                        oscard['style'] = entity;
                        entity = undefined;
                        oscard = option.bind(entity)(golfie, oscard);
                        report[1] = oscard;
                        michal['children'] = report;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    }
                };
                entity['panGestureWrapper'] = michal;
                return entity;
            };
            michal = michal.bind(tangon)(offset);
            zuuluu = michal.panGestureWrapper;
            oscard = _closure1_slot0;
            michal = 10;
            michal = option[michal];
            oscard = oscard.bind(tangon)(michal);
            michal = oscard.useThemeContext;
            michal = michal.bind(oscard)();
            oscard = michal.theme;
            michal = entity.keyboardAppearance;
            if(!(report == michal)) { _fun00002_ip = 188; continue _fun00001 }
 130:
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 11;
            michal = option[michal];
            report = report.bind(tangon)(michal);
            michal = report.isThemeDark;
            michal = michal.bind(report)(oscard);
            report = _closure1_slot9;
            if(michal) { _fun00002_ip = 176; continue _fun00001 }
 168:
            michal = report.LIGHT;
            _fun00002_ip = 182; continue _fun00001;
 176:
            michal = report.DARK;
 182:
            entity['keyboardAppearance'] = michal;
 188:
            oscard = _closure1_slot10;
            report = _closure1_slot5;
            michal = {};
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 11;
            yankee = verify[golfie];
            romeon = option.bind(tangon)(yankee);
            yankee = romeon.mergeProps;
            sizing = yankee.bind(romeon)(entity, backup, foxtra);
            output = michal;
            yankee = copyDataProperties(output, sizing);
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.mergeRefs;
            golfie = argBar;
            option = option.bind(verify)(offset, golfie);
            golfie = 'ref';
            michal[golfie] = option;
            michal = oscard.bind(tangon)(report, michal);
            report = entity.multiline;
            entity = michal;
            if(report) { _fun00002_ip = 294; continue _fun00001 }
 289:
            entity = zuuluu.bind(tangon)(michal);
 294:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Input/native/NativeTextInput.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['NativeTextInput'] = michal;
    return entity;
})();