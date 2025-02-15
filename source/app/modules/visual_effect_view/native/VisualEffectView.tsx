// app/modules/visual_effect_view/native/VisualEffectView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: getIOSBlurEffect
        _fun47665: for(var _fun47665_ip = 0; ; ) switch(_fun47665_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.MODERN_IOS_BLURS_EFFECTS_AVAILABLE;
            if(!entity) { _fun47665_ip = 48; continue _fun47665 }
 37:
            mike = 'default';
            entity = argBar;
            if(!(mike === entity)) { _fun47665_ip = 70; continue _fun47665 }
 48:
            entity = 'UIBlurEffectStyleDark';
            mike = 'light';
            if(!(mike === tango)) { _fun47665_ip = 68; continue _fun47665 }
 62:
            entity = 'UIBlurEffectStyleLight';
 68:
            _fun47665_ip = 93; continue _fun47665;
 70:
            mike = 'UIBlurEffectStyleSystemUltraThinMaterialDark';
            zulu = 'light';
            if(!(zulu === tango)) { _fun47665_ip = 90; continue _fun47665 }
 84:
            mike = 'UIBlurEffectStyleSystemUltraThinMaterialLight';
 90:
            entity = mike;
 93:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: getAndroidBlurAmount
        _fun47666: for(var _fun47666_ip = 0; ; ) switch(_fun47666_ip) {
 0:
            entity = argBar;
            mike = null;
            if(!(mike == entity)) { _fun47666_ip = 36; continue _fun47666 }
 9:
            mike = 1;
            tango = 'light';
            zulu = argFoo;
            if(!(tango === zulu)) { _fun47666_ip = 33; continue _fun47666 }
 23:
            mike = 0.85;
 33:
            entity = mike;
 36:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    mike = function(argFoo) { // Original name: isBlurDisabled
        _fun47667: for(var _fun47667_ip = 0; ; ) switch(_fun47667_ip) {
 0:
            entity = argFoo;
            tango = entity.android_softwareBlurDisabled;
            report = entity.android_blurTargetViewNativeId;
            entity = _closure1_slot6;
            if(!entity) { _fun47667_ip = 77; continue _fun47667 }
 25:
            mike = null;
            mike = mike == report;
            if(mike) { _fun47667_ip = 74; continue _fun47667 }
 34:
            if(!tango) { _fun47667_ip = 68; continue _fun47667 }
 37:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 8;
            report = report[zulu];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.MODERN_ANDROID_BLURRING_AVAILABLE;
            tango = !zulu;
 68:
            zulu = true;
            mike = zulu === tango;
 74:
            entity = mike;
 77:
            return entity;
        }
    };
    var _closure1_slot9 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    options = report.bind(entity)(options);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.useVisualEffectViewOverrides;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    report = verify.isAndroid;
    report = report.bind(verify)();
    var _closure1_slot6 = report;
    report = options.forwardRef;
    tango = function(argFoo, argBar) { // Original name: VisualEffectView
        _fun47668: for(var _fun47668_ip = 0; ; ) switch(_fun47668_ip) {
 0:
            oscar = argFoo;
            options = argBar;
            result = oscar.blurTheme;
            source = oscar.blurStyle;
            report = undefined;
            if(!(source === report)) { _fun47668_ip = 28; continue _fun47668 }
 24:
            source = 'default';
 28:
            output = oscar.blurAmount;
            if(!(output === report)) { _fun47668_ip = 41; continue _fun47668 }
 38:
            output = 1;
 41:
            yankee = oscar.blurTintRgba;
            entity = oscar.android_fallbackColor;
            offset = oscar.android_blurTargetViewNativeId;
            tango = oscar.android_softwareBlurDisabled;
            if(!(tango === report)) { _fun47668_ip = 71; continue _fun47668 }
 69:
            tango = false;
 71:
            zulu = {'blurTheme': 0, 'blurStyle': 0, 'blurAmount': 0, 'blurTintRgba': 0, 'android_fallbackColor': 0, 'android_blurTargetViewNativeId': 0, 'android_softwareBlurDisabled': 0};
            foxtrot = null;
            target = zulu;
            papa = null;
            mike = silentSetPrototypeOf(target, papa);
            target = {};
            papa = oscar;
            context = zulu;
            oscar = copyDataProperties(target, papa, context);
            golf = oscar.style;
            zulu = _closure1_slot4;
            zulu = zulu.bind(report)();
            backup = zulu.blurAmountOverride;
            romeo = zulu.blurTintRgbaOverride;
            echo = zulu.blurEffectNameOverride;
            zulu = {};
            zulu['blurTheme'] = result;
            zulu['blurStyle'] = source;
            zulu['style'] = golf;
            zulu['android_fallbackColor'] = entity;
            entity = zulu.style;
            sequence = zulu.blurTheme;
            vacuum = zulu.blurStyle;
            sizing = zulu.android_fallbackColor;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            kilo = 6;
            golf = zulu[kilo];
            record = verify.bind(report)(golf);
            update = record.useToken;
            config = _closure1_slot1;
            control = 7;
            golf = zulu[control];
            golf = config.bind(report)(golf);
            golf = golf.colors;
            golf = golf.LEGACY_BLUR_FALLBACK_DEFAULT;
            update = update.bind(record)(golf, sequence);
            golf = zulu[kilo];
            verify = verify.bind(report)(golf);
            golf = verify.useToken;
            zulu = zulu[control];
            zulu = config.bind(report)(zulu);
            zulu = zulu.colors;
            zulu = zulu.LEGACY_BLUR_FALLBACK_ULTRA_THIN;
            golf = golf.bind(verify)(zulu, sequence);
            verify = {};
            zulu = 'default';
            if(!(zulu === vacuum)) { _fun47668_ip = 301; continue _fun47668 }
 298:
            golf = update;
 301:
            verify['backgroundColor'] = golf;
            golf = new Array(3);
            golf[0] = verify;
            golf[1] = entity;
            verify = foxtrot != sizing;
            entity = undefined;
            if(!verify) { _fun47668_ip = 335; continue _fun47668 }
 326:
            verify = {};
            verify['backgroundColor'] = sizing;
            entity = verify;
 335:
            golf[2] = entity;
            sizing = _closure1_slot0;
            verify = _closure1_slot2;
            entity = verify[kilo];
            sequence = sizing.bind(report)(entity);
            vacuum = sequence.useToken;
            update = _closure1_slot1;
            entity = verify[control];
            entity = update.bind(report)(entity);
            entity = entity.colors;
            entity = entity.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT;
            entity = vacuum.bind(sequence)(entity, result);
            kilo = verify[kilo];
            sizing = sizing.bind(report)(kilo);
            kilo = sizing.useToken;
            verify = verify[control];
            verify = update.bind(report)(verify);
            verify = verify.colors;
            verify = verify.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN;
            verify = kilo.bind(sizing)(verify, result);
            if(!(zulu !== source)) { _fun47668_ip = 454; continue _fun47668 }
 437:
            zulu = 'ultra-thin';
            sizing = verify;
            if(!(zulu !== source)) { _fun47668_ip = 457; continue _fun47668 }
 450:
            sizing = undefined;
            _fun47668_ip = 457; continue _fun47668;
 454:
            sizing = entity;
 457:
            zulu = _closure1_slot9;
            entity = {};
            entity['android_softwareBlurDisabled'] = tango;
            entity['android_blurTargetViewNativeId'] = offset;
            entity = zulu.bind(report)(entity);
            if(entity) { _fun47668_ip = 698; continue _fun47668 }
 484:
            entity = _closure1_slot6;
            verify = _closure1_slot5;
            tango = _closure1_slot1;
            kilo = _closure1_slot2;
            if(entity) { _fun47668_ip = 590; continue _fun47668 }
 503:
            entity = 5;
            entity = kilo[entity];
            zulu = tango.bind(report)(entity);
            entity = {};
            entity['ref'] = options;
            if(!(foxtrot == echo)) { _fun47668_ip = 535; continue _fun47668 }
 525:
            update = _closure1_slot7;
            echo = update.bind(report)(result, source);
 535:
            entity['blurEffectName'] = echo;
            echo = output;
            if(!(foxtrot != backup)) { _fun47668_ip = 552; continue _fun47668 }
 549:
            echo = backup;
 552:
            entity['blurAmount'] = echo;
            echo = yankee;
            if(!(foxtrot != romeo)) { _fun47668_ip = 567; continue _fun47668 }
 564:
            echo = romeo;
 567:
            entity['blurTintRgba'] = echo;
            target = entity;
            papa = oscar;
            echo = copyDataProperties(target, papa);
            entity = verify.bind(report)(zulu, entity);
            _fun47668_ip = 696; continue _fun47668;
 590:
            zulu = 8;
            zulu = kilo[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            zulu['ref'] = options;
            if(!(foxtrot == backup)) { _fun47668_ip = 622; continue _fun47668 }
 612:
            kilo = _closure1_slot8;
            backup = kilo.bind(report)(result, output);
 622:
            zulu['blurAmount'] = backup;
            kilo = _closure1_slot0;
            output = _closure1_slot2;
            backup = 9;
            backup = output[backup];
            kilo = kilo.bind(report)(backup);
            backup = kilo.hexToRgbaString;
            backup = backup.bind(kilo)(sizing);
            zulu['blurTintIOSParityCompensationRgba'] = backup;
            if(!(foxtrot != romeo)) { _fun47668_ip = 670; continue _fun47668 }
 667:
            yankee = romeo;
 670:
            zulu['blurTintRgba'] = yankee;
            zulu['blurTargetViewNativeId'] = offset;
            target = zulu;
            papa = oscar;
            offset = copyDataProperties(target, papa);
            entity = verify.bind(report)(tango, zulu);
 696:
            _fun47668_ip = 737; continue _fun47668;
 698:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            mike['ref'] = options;
            target = mike;
            papa = oscar;
            oscar = copyDataProperties(target, papa);
            oscar = 'style';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 737:
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/visual_effect_view/native/VisualEffectView.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['isBlurDisabled'] = mike;
    return entity;
})();