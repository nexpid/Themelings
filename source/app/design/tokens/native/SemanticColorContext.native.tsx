// app/design/tokens/native/SemanticColorContext.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 5;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/tokens/native/SemanticColorContext.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getSemanticColorContextFromThemeContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            backup = undefined;
            tangon = zuuluu.bind(backup)(michal);
            michal = tangon.getGradientThemeFromFlags;
            verify = michal.bind(tangon)(entity);
            option = entity.contrast;
            tangon = entity.saturation;
            oscard = entity.primaryColor;
            michal = 4;
            michal = report[michal];
            report = zuuluu.bind(backup)(michal);
            zuuluu = report.getGradientThemeMetadata;
            michal = entity.gradient;
            michal = zuuluu.bind(report)(verify, michal);
            report = null;
            if(!(report != oscard)) { _fun00002_ip = 319; continue _fun00001 }
 96:
            foxtra = entity.theme;
            zuuluu = entity.primaryColor;
            romeon = entity.secondaryColor;
            verify = report == zuuluu;
            entity = null;
            if(verify) { _fun00002_ip = 316; continue _fun00001 }
 125:
            yankee = _closure1_slot0;
            kiloes = _closure1_slot2;
            verify = 0;
            offset = kiloes[verify];
            sizing = yankee.bind(backup)(offset);
            offset = sizing.int2hex;
            offset = offset.bind(sizing)(zuuluu);
            verify = kiloes[verify];
            yankee = yankee.bind(backup)(verify);
            verify = yankee.int2hex;
            if(!(report != romeon)) { _fun00002_ip = 177; continue _fun00001 }
 174:
            zuuluu = romeon;
 177:
            verify = verify.bind(yankee)(zuuluu);
            yankee = _closure1_slot1;
            kiloes = _closure1_slot2;
            zuuluu = 1;
            zuuluu = kiloes[zuuluu];
            zuuluu = yankee.bind(backup)(zuuluu);
            romeon = zuuluu.bind(backup)(offset);
            yankee = romeon.mix;
            zuuluu = 0.5;
            yankee = yankee.bind(romeon)(verify, zuuluu);
            zuuluu = yankee.hex;
            yankee = zuuluu.bind(yankee)();
            zuuluu = {};
            romeon = _closure1_slot0;
            golfie = 2;
            golfie = kiloes[golfie];
            romeon = romeon.bind(backup)(golfie);
            golfie = romeon.isThemeLight;
            romeon = golfie.bind(romeon)(foxtra);
            golfie = 'dark';
            if(!romeon) { _fun00002_ip = 278; continue _fun00001 }
 274:
            golfie = 'light';
 278:
            zuuluu['theme'] = golfie;
            golfie = {};
            golfie['gradient.start'] = offset;
            golfie['gradient.mid'] = yankee;
            golfie['gradient.end'] = verify;
            golfie['gradient.primary'] = offset;
            golfie['gradient.secondary'] = verify;
            zuuluu['colors'] = golfie;
            entity = zuuluu;
 316:
            michal = entity;
 319:
            entity = {};
            verify = report != oscard;
            zuuluu = 1;
            golfie = zuuluu;
            if(verify) { _fun00002_ip = 337; continue _fun00001 }
 334:
            golfie = option;
 337:
            entity['contrast'] = golfie;
            report = report != oscard;
            if(report) { _fun00002_ip = 352; continue _fun00001 }
 349:
            zuuluu = tangon;
 352:
            entity['saturation'] = zuuluu;
            entity['gradient'] = michal;
            return entity;
        }
    };
    zuuluu['getSemanticColorContextFromThemeContext'] = michal;
    return entity;
})();