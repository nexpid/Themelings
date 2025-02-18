// app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = oscard;
        entity = global;
        verify = entity.Object;
        option = verify.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = option.bind(verify)(zuuluu, entity, michal);
        entity = 0;
        option = oscard[entity];
        michal = argCor;
        entity = undefined;
        michal = michal.bind(entity)(option);
        var _closure1_slot3 = michal;
        michal = 1;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.Pressable;
        var _closure1_slot4 = michal;
        michal = 2;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.jsx;
        var _closure1_slot5 = michal;
        michal = 3;
        michal = oscard[michal];
        option = golfie.bind(entity)(michal);
        golfie = option.createAnimatedComponent;
        michal = 4;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.PressableHighlight;
        michal = golfie.bind(option)(michal);
        var _closure1_slot6 = michal;
        michal = 8;
        michal = oscard[michal];
        golfie = report.bind(entity)(michal);
        michal = golfie.isAndroid;
        michal = michal.bind(golfie)();
        if(michal) { _fun00002_ip = 197; continue _fun00001 }
 190:
        michal = function(argFoo) { // Original name: AnimatedPressableHighlightiOS
            zuuluu = argFoo;
            oscard = zuuluu.children;
            entity = null;
            michal = Object.create(entity);
            entity = 0;
            michal['children'] = entity;
            foxtra = {};
            romeon = zuuluu;
            yankee = michal;
            report = copyDataProperties(foxtra, romeon, yankee);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            tangon = undefined;
            golfie = zuuluu.bind(tangon)(michal);
            zuuluu = golfie.useIOSPressEffects;
            michal = 4;
            michal = zuuluu.bind(golfie)(michal);
            verify = michal.onPressIn;
            golfie = michal.onPressOut;
            option = michal.pressableStyles;
            zuuluu = _closure1_slot5;
            michal = _closure1_slot6;
            entity = {};
            offset = 'button';
            entity['accessibilityRole'] = offset;
            entity['onPressIn'] = verify;
            entity['onPressOut'] = golfie;
            foxtra = entity;
            romeon = report;
            golfie = copyDataProperties(foxtra, romeon);
            golfie = new Array(2);
            golfie[0] = option;
            report = report.style;
            golfie[1] = report;
            report = 'style';
            entity[report] = golfie;
            report = 'children';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        _fun00002_ip = 202; continue _fun00001;
 197:
        michal = function(argFoo) { // Original name: AnimatedPressableHighlightAndroid
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                oscard = tangon.children;
                verify = null;
                zuuluu = Object.create(verify);
                entity = 0;
                zuuluu['children'] = entity;
                backup = {};
                foxtra = tangon;
                romeon = zuuluu;
                report = copyDataProperties(backup, foxtra, romeon);
                var _closure2_slot0 = report;
                golfie = _closure1_slot0;
                yankee = _closure1_slot2;
                zuuluu = 6;
                zuuluu = yankee[zuuluu];
                tangon = undefined;
                option = golfie.bind(tangon)(zuuluu);
                golfie = option.useToken;
                offset = _closure1_slot1;
                zuuluu = 7;
                zuuluu = yankee[zuuluu];
                zuuluu = offset.bind(tangon)(zuuluu);
                zuuluu = zuuluu.colors;
                zuuluu = zuuluu.ANDROID_RIPPLE;
                offset = golfie.bind(option)(zuuluu);
                var _closure2_slot1 = offset;
                option = _closure1_slot3;
                golfie = option.useMemo;
                zuuluu = new Array(2);
                zuuluu[0] = offset;
                offset = report.androidRippleConfig;
                yankee = verify == offset;
                verify = undefined;
                if(yankee) { _fun00004_ip = 142; continue _fun00003 }
 136:
                verify = offset.cornerRadius;
 142:
                zuuluu[1] = verify;
                michal = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = {};
                        zuuluu = _closure2_slot1;
                        entity['color'] = zuuluu;
                        michal = _closure2_slot0;
                        tangon = michal.androidRippleConfig;
                        michal = null;
                        report = michal == tangon;
                        zuuluu = undefined;
                        if(report) { _fun00006_ip = 40; continue _fun00005 }
 34:
                        zuuluu = tangon.cornerRadius;
 40:
                        tangon = michal != zuuluu;
                        michal = 12;
                        if(!tangon) { _fun00006_ip = 53; continue _fun00005 }
 50:
                        michal = zuuluu;
 53:
                        entity['cornerRadius'] = michal;
                        return entity;
                    }
                };
                golfie = golfie.bind(option)(michal, zuuluu);
                zuuluu = _closure1_slot5;
                michal = _closure1_slot4;
                entity = {};
                entity['android_ripple'] = golfie;
                backup = entity;
                foxtra = report;
                report = copyDataProperties(backup, foxtra);
                report = 'children';
                entity[report] = oscard;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
 202:
        tangon = 9;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['AnimatedPressableHighlight'] = michal;
        return entity;
    }
})();