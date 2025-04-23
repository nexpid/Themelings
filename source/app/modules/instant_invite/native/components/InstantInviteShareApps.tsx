// app/modules/instant_invite/native/components/InstantInviteShareApps.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot5 = option;
    tangon = tangon.ScrollView;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SHARE_ITEMS;
    var _closure1_slot7 = option;
    tangon = tangon.SHARE_ITEMS_DEFAULT;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 6;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['padding'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['gap'] = yankee;
    yankee = 'center';
    offset['alignItems'] = yankee;
    tangon['contentContainer'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: InstantInviteShareApps
        entity = argFoo;
        michal = entity.onItemPressed;
        var _closure2_slot0 = michal;
        yankee = entity.contentContainerStyle;
        michal = _closure1_slot10;
        tangon = undefined;
        verify = michal.bind(tangon)();
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        zuuluu = 7;
        zuuluu = golfie[zuuluu];
        report = michal.bind(tangon)(zuuluu);
        zuuluu = report.useFontScale;
        zuuluu = zuuluu.bind(report)();
        var _closure2_slot1 = zuuluu;
        foxtra = _closure1_slot4;
        report = foxtra.useState;
        zuuluu = _closure1_slot8;
        oscard = report.bind(foxtra)(zuuluu);
        report = _closure1_slot3;
        zuuluu = 2;
        report = report.bind(tangon)(oscard, zuuluu);
        zuuluu = 0;
        offset = report[zuuluu];
        zuuluu = 1;
        zuuluu = report[zuuluu];
        var _closure2_slot2 = zuuluu;
        oscard = foxtra.useMemo;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.Gesture;
            entity = michal.Native;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.disallowInterruption;
            entity = true;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = new Array(0);
        oscard = oscard.bind(foxtra)(report, zuuluu);
        romeon = foxtra.useEffect;
        report = function() {
            michal = global;
            tangon = michal.Promise;
            zuuluu = tangon.all;
            oscard = _closure1_slot7;
            report = oscard.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.isAvailable;
                return entity;
            };
            michal = report.bind(oscard)(michal);
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = new Array(0);
                var _closure4_slot0 = zuuluu;
                michal = tangon.forEach;
                entity = function(argFoo, argBar) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 6:
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.push;
                        tangon = _closure1_slot7;
                        entity = argBar;
                        entity = tangon[entity];
                        entity = michal.bind(zuuluu)(entity);
 37:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(tangon)(entity);
                michal = _closure2_slot2;
                entity = undefined;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu = new Array(0);
        zuuluu = romeon.bind(foxtra)(report, zuuluu);
        zuuluu = _closure1_slot9;
        report = _closure1_slot6;
        entity = {'contentContainerStyle': null, 'showsHorizontalScrollIndicator': false, 'horizontal': true};
        romeon = verify.contentContainer;
        verify = new Array(2);
        verify[0] = romeon;
        verify[1] = yankee;
        entity['contentContainerStyle'] = verify;
        verify = offset.map;
        option = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                romeon = entity.fullIcon;
                yankee = entity.getLabel;
                backup = entity.icon;
                foxtra = entity.IconComponent;
                michal = entity.onPress;
                var _closure3_slot0 = michal;
                report = entity.type;
                tangon = _closure1_slot9;
                zuuluu = _closure1_slot5;
                michal = {};
                entity = {};
                option = _closure2_slot1;
                golfie = 76;
                golfie = golfie * option;
                entity['maxWidth'] = golfie;
                michal['style'] = entity;
                kiloes = null;
                if(!(kiloes == romeon)) { _fun00004_ip = 196; continue _fun00003 }
 86:
                verify = _closure1_slot9;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 10;
                entity = option[entity];
                option = undefined;
                entity = golfie.bind(option)(entity);
                golfie = entity.IconButton;
                entity = {};
                sizing = 'secondary';
                entity['variant'] = sizing;
                if(!(kiloes == foxtra)) { _fun00004_ip = 159; continue _fun00003 }
 132:
                if(!(kiloes == backup)) { _fun00004_ip = 156; continue _fun00003 }
 136:
                sizing = _closure1_slot1;
                output = _closure1_slot2;
                kiloes = 11;
                kiloes = output[kiloes];
                backup = sizing.bind(option)(kiloes);
 156:
                foxtra = backup;
 159:
                entity['icon'] = foxtra;
                foxtra = yankee.bind(option)();
                entity['label'] = foxtra;
                foxtra = function() { // Original name: onPress
                    zuuluu = _closure2_slot0;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['onPress'] = foxtra;
                foxtra = 2;
                entity['maxFontSizeMultiplier'] = foxtra;
                entity = verify.bind(option)(golfie, entity);
                _fun00004_ip = 266; continue _fun00003;
 196:
                verify = _closure1_slot9;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                oscard = 9;
                oscard = option[oscard];
                option = undefined;
                oscard = golfie.bind(option)(oscard);
                golfie = oscard.ImageButton;
                oscard = {};
                oscard['image'] = romeon;
                yankee = yankee.bind(option)();
                oscard['label'] = yankee;
                offset = function() { // Original name: onPress
                    zuuluu = _closure2_slot0;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                oscard['onPress'] = offset;
                offset = 2;
                oscard['maxFontSizeMultiplier'] = offset;
                entity = verify.bind(option)(golfie, oscard);
 266:
                michal['children'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            }
        };
        option = verify.bind(offset)(option);
        entity['children'] = option;
        report = zuuluu.bind(tangon)(report, entity);
        entity = 8;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/native/components/InstantInviteShareApps.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();