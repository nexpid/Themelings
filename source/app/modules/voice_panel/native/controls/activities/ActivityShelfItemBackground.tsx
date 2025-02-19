// app/modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Image;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        entity = {};
        michal = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
        entity['previewImage'] = michal;
        michal = {};
        zuuluu = '100%';
        michal['width'] = zuuluu;
        zuuluu = argFoo;
        michal['aspectRatio'] = zuuluu;
        entity['activityImage'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot6 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ActivityShelfItemBackground
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.imageBackground;
            zuuluu = entity.aspectRatio;
            offset = entity.accessibilityLabel;
            entity = _closure1_slot6;
            report = undefined;
            oscard = entity.bind(report)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = tangon.useState;
            entity = false;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot2;
            entity = 2;
            tangon = zuuluu.bind(report)(tangon, entity);
            entity = 0;
            entity = tangon[entity];
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            var _closure2_slot0 = zuuluu;
            tangon = romeon.state;
            zuuluu = 'not-found';
            if(!(zuuluu !== tangon)) { _fun00002_ip = 303; continue _fun00001 }
 100:
            if(entity) { _fun00002_ip = 303; continue _fun00001 }
 106:
            zuuluu = romeon.state;
            entity = 'loading';
            if(!(entity !== zuuluu)) { _fun00002_ip = 259; continue _fun00001 }
 122:
            entity = romeon.url;
            verify = null;
            if(!(verify != entity)) { _fun00002_ip = 259; continue _fun00001 }
 136:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 5;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            golfie = oscard.previewImage;
            entity['style'] = golfie;
            option = _closure1_slot4;
            golfie = {};
            yankee = function() { // Original name: onError
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            golfie['onError'] = yankee;
            yankee = {};
            romeon = romeon.url;
            yankee['uri'] = romeon;
            golfie['source'] = yankee;
            yankee = oscard.activityImage;
            golfie['style'] = yankee;
            yankee = 'image';
            golfie['accessibilityRole'] = yankee;
            yankee = verify != offset;
            verify = '';
            if(!yankee) { _fun00002_ip = 237; continue _fun00001 }
 234:
            verify = offset;
 237:
            golfie['accessibilityLabel'] = verify;
            golfie = tangon.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 301; continue _fun00001;
 259:
            golfie = _closure1_slot5;
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            option = oscard.previewImage;
            zuuluu['style'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 301:
            _fun00002_ip = 369; continue _fun00001;
 303:
            tangon = _closure1_slot5;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 5;
            michal = option[michal];
            zuuluu = golfie.bind(report)(michal);
            michal = {};
            oscard = oscard.previewImage;
            michal['style'] = oscard;
            oscard = 6;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 369:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();