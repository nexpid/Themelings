// app/modules/visual_effect_view/native/VisualEffectView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: getIOSBlurEffect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.MODERN_IOS_BLURS_EFFECTS_AVAILABLE;
            if(!entity) { _fun00002_ip = 48; continue _fun00001 }
 37:
            michal = 'default';
            entity = argBar;
            if(!(michal === entity)) { _fun00002_ip = 70; continue _fun00001 }
 48:
            entity = 'UIBlurEffectStyleDark';
            michal = 'light';
            if(!(michal === tangon)) { _fun00002_ip = 68; continue _fun00001 }
 62:
            entity = 'UIBlurEffectStyleLight';
 68:
            _fun00002_ip = 93; continue _fun00001;
 70:
            michal = 'UIBlurEffectStyleSystemUltraThinMaterialDark';
            zuuluu = 'light';
            if(!(zuuluu === tangon)) { _fun00002_ip = 90; continue _fun00001 }
 84:
            michal = 'UIBlurEffectStyleSystemUltraThinMaterialLight';
 90:
            entity = michal;
 93:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: getAndroidBlurAmount
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBar;
            michal = null;
            if(!(michal == entity)) { _fun00004_ip = 36; continue _fun00003 }
 9:
            michal = 1;
            tangon = 'light';
            zuuluu = argFoo;
            if(!(tangon === zuuluu)) { _fun00004_ip = 33; continue _fun00003 }
 23:
            michal = 0.85;
 33:
            entity = michal;
 36:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    michal = function(argFoo) { // Original name: isBlurDisabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.android_softwareBlurDisabled;
            report = entity.android_blurTargetViewNativeId;
            entity = _closure1_slot6;
            if(!entity) { _fun00006_ip = 77; continue _fun00005 }
 25:
            michal = null;
            michal = michal == report;
            if(michal) { _fun00006_ip = 74; continue _fun00005 }
 34:
            if(!tangon) { _fun00006_ip = 68; continue _fun00005 }
 37:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 8;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.MODERN_ANDROID_BLURRING_AVAILABLE;
            tangon = !zuuluu;
 68:
            zuuluu = true;
            michal = zuuluu === tangon;
 74:
            entity = michal;
 77:
            return entity;
        }
    };
    var _closure1_slot9 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    option = report.bind(entity)(option);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useVisualEffectViewOverrides;
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    report = verify.isAndroid;
    report = report.bind(verify)();
    var _closure1_slot6 = report;
    report = option.forwardRef;
    tangon = function(argFoo, argBar) { // Original name: VisualEffectView
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            option = argBar;
            result = oscard.blurTheme;
            source = oscard.blurStyle;
            report = undefined;
            if(!(source === report)) { _fun00008_ip = 28; continue _fun00007 }
 24:
            source = 'default';
 28:
            output = oscard.blurAmount;
            if(!(output === report)) { _fun00008_ip = 41; continue _fun00007 }
 38:
            output = 1;
 41:
            yankee = oscard.blurTintRgba;
            entity = oscard.android_fallbackColor;
            offset = oscard.android_blurTargetViewNativeId;
            tangon = oscard.android_softwareBlurDisabled;
            if(!(tangon === report)) { _fun00008_ip = 71; continue _fun00007 }
 69:
            tangon = false;
 71:
            zuuluu = {'blurTheme': 0, 'blurStyle': 0, 'blurAmount': 0, 'blurTintRgba': 0, 'android_fallbackColor': 0, 'android_blurTargetViewNativeId': 0, 'android_softwareBlurDisabled': 0};
            foxtra = null;
            target = zuuluu;
            papara = null;
            michal = silentSetPrototypeOf(target, papara);
            target = {};
            papara = oscard;
            cntext = zuuluu;
            oscard = copyDataProperties(target, papara, cntext);
            golfie = oscard.style;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)();
            backup = zuuluu.blurAmountOverride;
            romeon = zuuluu.blurTintRgbaOverride;
            echoed = zuuluu.blurEffectNameOverride;
            zuuluu = {};
            zuuluu['blurTheme'] = result;
            zuuluu['blurStyle'] = source;
            zuuluu['style'] = golfie;
            zuuluu['android_fallbackColor'] = entity;
            entity = zuuluu.style;
            sequen = zuuluu.blurTheme;
            vacuum = zuuluu.blurStyle;
            sizing = zuuluu.android_fallbackColor;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            kiloes = 6;
            golfie = zuuluu[kiloes];
            record = verify.bind(report)(golfie);
            update = record.useToken;
            config = _closure1_slot1;
            ctrled = 7;
            golfie = zuuluu[ctrled];
            golfie = config.bind(report)(golfie);
            golfie = golfie.colors;
            golfie = golfie.LEGACY_BLUR_FALLBACK_DEFAULT;
            update = update.bind(record)(golfie, sequen);
            golfie = zuuluu[kiloes];
            verify = verify.bind(report)(golfie);
            golfie = verify.useToken;
            zuuluu = zuuluu[ctrled];
            zuuluu = config.bind(report)(zuuluu);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.LEGACY_BLUR_FALLBACK_ULTRA_THIN;
            golfie = golfie.bind(verify)(zuuluu, sequen);
            verify = {};
            zuuluu = 'default';
            if(!(zuuluu === vacuum)) { _fun00008_ip = 301; continue _fun00007 }
 298:
            golfie = update;
 301:
            verify['backgroundColor'] = golfie;
            golfie = new Array(3);
            golfie[0] = verify;
            golfie[1] = entity;
            verify = foxtra != sizing;
            entity = undefined;
            if(!verify) { _fun00008_ip = 335; continue _fun00007 }
 326:
            verify = {};
            verify['backgroundColor'] = sizing;
            entity = verify;
 335:
            golfie[2] = entity;
            sizing = _closure1_slot0;
            verify = _closure1_slot2;
            entity = verify[kiloes];
            sequen = sizing.bind(report)(entity);
            vacuum = sequen.useToken;
            update = _closure1_slot1;
            entity = verify[ctrled];
            entity = update.bind(report)(entity);
            entity = entity.colors;
            entity = entity.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT;
            entity = vacuum.bind(sequen)(entity, result);
            kiloes = verify[kiloes];
            sizing = sizing.bind(report)(kiloes);
            kiloes = sizing.useToken;
            verify = verify[ctrled];
            verify = update.bind(report)(verify);
            verify = verify.colors;
            verify = verify.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN;
            verify = kiloes.bind(sizing)(verify, result);
            if(!(zuuluu !== source)) { _fun00008_ip = 454; continue _fun00007 }
 437:
            zuuluu = 'ultra-thin';
            sizing = verify;
            if(!(zuuluu !== source)) { _fun00008_ip = 457; continue _fun00007 }
 450:
            sizing = undefined;
            _fun00008_ip = 457; continue _fun00007;
 454:
            sizing = entity;
 457:
            zuuluu = _closure1_slot9;
            entity = {};
            entity['android_softwareBlurDisabled'] = tangon;
            entity['android_blurTargetViewNativeId'] = offset;
            entity = zuuluu.bind(report)(entity);
            if(entity) { _fun00008_ip = 698; continue _fun00007 }
 484:
            entity = _closure1_slot6;
            verify = _closure1_slot5;
            tangon = _closure1_slot1;
            kiloes = _closure1_slot2;
            if(entity) { _fun00008_ip = 590; continue _fun00007 }
 503:
            entity = 5;
            entity = kiloes[entity];
            zuuluu = tangon.bind(report)(entity);
            entity = {};
            entity['ref'] = option;
            if(!(foxtra == echoed)) { _fun00008_ip = 535; continue _fun00007 }
 525:
            update = _closure1_slot7;
            echoed = update.bind(report)(result, source);
 535:
            entity['blurEffectName'] = echoed;
            echoed = output;
            if(!(foxtra != backup)) { _fun00008_ip = 552; continue _fun00007 }
 549:
            echoed = backup;
 552:
            entity['blurAmount'] = echoed;
            echoed = yankee;
            if(!(foxtra != romeon)) { _fun00008_ip = 567; continue _fun00007 }
 564:
            echoed = romeon;
 567:
            entity['blurTintRgba'] = echoed;
            target = entity;
            papara = oscard;
            echoed = copyDataProperties(target, papara);
            entity = verify.bind(report)(zuuluu, entity);
            _fun00008_ip = 696; continue _fun00007;
 590:
            zuuluu = 8;
            zuuluu = kiloes[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['ref'] = option;
            if(!(foxtra == backup)) { _fun00008_ip = 622; continue _fun00007 }
 612:
            kiloes = _closure1_slot8;
            backup = kiloes.bind(report)(result, output);
 622:
            zuuluu['blurAmount'] = backup;
            kiloes = _closure1_slot0;
            output = _closure1_slot2;
            backup = 9;
            backup = output[backup];
            kiloes = kiloes.bind(report)(backup);
            backup = kiloes.hexToRgbaString;
            backup = backup.bind(kiloes)(sizing);
            zuuluu['blurTintIOSParityCompensationRgba'] = backup;
            if(!(foxtra != romeon)) { _fun00008_ip = 670; continue _fun00007 }
 667:
            yankee = romeon;
 670:
            zuuluu['blurTintRgba'] = yankee;
            zuuluu['blurTargetViewNativeId'] = offset;
            target = zuuluu;
            papara = oscard;
            offset = copyDataProperties(target, papara);
            entity = verify.bind(report)(tangon, zuuluu);
 696:
            _fun00008_ip = 737; continue _fun00007;
 698:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            michal['ref'] = option;
            target = michal;
            papara = oscard;
            oscard = copyDataProperties(target, papara);
            oscard = 'style';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 737:
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/visual_effect_view/native/VisualEffectView.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['isBlurDisabled'] = michal;
    return entity;
})();