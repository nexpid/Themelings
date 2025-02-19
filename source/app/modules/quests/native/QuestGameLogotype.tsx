// app/modules/quests/native/QuestGameLogotype.tsx
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
    verify = true;
    tangon['value'] = verify;
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
    tangon = tangon.Image;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = {};
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    backup = option.springSlow;
    kiloes = tangon;
    option = copyDataProperties(kiloes, backup);
    option = 'overshootClamping';
    tangon[option] = verify;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 6;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['marginBottom'] = yankee;
    tangon['logo'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    option = "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}";
    tangon['code'] = option;
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.assetUrl;
            var _closure2_slot0 = yankee;
            foxtra = zuuluu.width;
            tangon = undefined;
            if(!(foxtra === tangon)) { _fun00002_ip = 29; continue _fun00001 }
 26:
            foxtra = 120;
 29:
            var _closure2_slot1 = foxtra;
            option = zuuluu.height;
            var _closure2_slot2 = option;
            oscard = zuuluu.maxWidth;
            var _closure2_slot3 = oscard;
            entity = zuuluu.maxHeight;
            var _closure2_slot4 = entity;
            golfie = zuuluu.style;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            zuuluu = _closure1_slot9;
            romeon = zuuluu.bind(tangon)();
            offset = _closure1_slot4;
            report = offset.useState;
            zuuluu = null;
            backup = report.bind(offset)(zuuluu);
            report = _closure1_slot3;
            zuuluu = 2;
            report = report.bind(tangon)(backup, zuuluu);
            zuuluu = 0;
            backup = report[zuuluu];
            _closure2_slot5 = backup;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            _closure2_slot6 = zuuluu;
            report = offset.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = backup;
            zuuluu[1] = foxtra;
            zuuluu[2] = option;
            zuuluu[3] = oscard;
            zuuluu[4] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot5;
                    report = null;
                    if(!(report == entity)) { _fun00004_ip = 17; continue _fun00003 }
 13:
                    entity = undefined;
                    return entity;
 17:
                    entity = _closure2_slot5;
                    zuuluu = entity.width;
                    entity = _closure2_slot5;
                    entity = entity.height;
                    zuuluu = zuuluu / entity;
                    entity = _closure2_slot2;
                    if(!(report == entity)) { _fun00004_ip = 67; continue _fun00003 }
 47:
                    entity = {};
                    tangon = _closure2_slot1;
                    oscard = tangon / zuuluu;
                    entity['height'] = oscard;
                    entity['width'] = tangon;
                    _fun00004_ip = 88; continue _fun00003;
 67:
                    tangon = {};
                    oscard = _closure2_slot2;
                    tangon['height'] = oscard;
                    oscard = oscard * zuuluu;
                    tangon['width'] = oscard;
                    entity = tangon;
 88:
                    tangon = _closure2_slot3;
                    if(!(report != tangon)) { _fun00004_ip = 145; continue _fun00003 }
 96:
                    tangon = global;
                    option = tangon.Math;
                    golfie = option.min;
                    oscard = _closure2_slot3;
                    tangon = entity.width;
                    tangon = golfie.bind(option)(oscard, tangon);
                    entity['width'] = tangon;
                    tangon = entity.width;
                    tangon = tangon / zuuluu;
                    entity['height'] = tangon;
 145:
                    tangon = _closure2_slot4;
                    if(!(report != tangon)) { _fun00004_ip = 202; continue _fun00003 }
 153:
                    tangon = global;
                    oscard = tangon.Math;
                    report = oscard.min;
                    tangon = _closure2_slot4;
                    michal = entity.height;
                    michal = report.bind(oscard)(tangon, michal);
                    entity['height'] = michal;
                    michal = entity.height;
                    michal = michal * zuuluu;
                    entity['width'] = michal;
 202:
                    return entity;
                }
            };
            foxtra = report.bind(offset)(entity, zuuluu);
            _closure2_slot7 = foxtra;
            report = offset.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            entity = function() {
                tangon = _closure1_slot6;
                zuuluu = tangon.getSize;
                michal = _closure2_slot0;
                entity = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argFoo;
                        entity = argBar;
                        zuuluu = 0;
                        michal = tangon > zuuluu;
                        if(!michal) { _fun00006_ip = 19; continue _fun00005 }
 15:
                        michal = entity > zuuluu;
 19:
                        if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 22:
                        zuuluu = _closure2_slot6;
                        michal = {};
                        michal['width'] = tangon;
                        michal['height'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 46:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity = report.bind(offset)(entity, zuuluu);
            sizing = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 7;
            zuuluu = oscard[entity];
            option = sizing.bind(tangon)(zuuluu);
            report = option.useAnimatedStyle;
            zuuluu = function() { // Original name: P
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 8;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.withSpring;
                    tangon = _closure2_slot7;
                    zuuluu = null;
                    zuuluu = zuuluu == tangon;
                    tangon = 1;
                    if(!zuuluu) { _fun00008_ip = 53; continue _fun00007 }
 51:
                    tangon = 0;
 53:
                    zuuluu = _closure1_slot8;
                    michal = 'animate-always';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            backup = {};
            kiloes = 8;
            kiloes = oscard[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.withSpring;
            backup['withSpring'] = kiloes;
            backup['logoDimensionStyles'] = foxtra;
            kiloes = _closure1_slot8;
            backup['SPRING_CONFIG'] = kiloes;
            zuuluu['__closure'] = backup;
            backup = 11242802634598.0;
            zuuluu['__workletHash'] = backup;
            backup = _closure1_slot10;
            zuuluu['__initData'] = backup;
            option = report.bind(option)(zuuluu);
            report = offset.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.endsWith;
                entity = '.svg';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(offset)(michal, zuuluu);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            option = _closure1_slot7;
            if(report) { _fun00002_ip = 456; continue _fun00001 }
 394:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 10;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            golfie = {};
            golfie['uri'] = yankee;
            report['source'] = golfie;
            golfie = new Array(2);
            golfie[0] = foxtra;
            offset = romeon.logo;
            golfie[1] = offset;
            report['style'] = golfie;
            report = option.bind(tangon)(oscard, report);
            _fun00002_ip = 540; continue _fun00001;
 456:
            golfie = _closure1_slot5;
            oscard = {};
            offset = new Array(2);
            offset[0] = foxtra;
            romeon = romeon.logo;
            offset[1] = romeon;
            oscard['style'] = offset;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 9;
            verify = romeon[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.SvgUri;
            verify = {'height': '100%', 'width': '100%'};
            verify['uri'] = yankee;
            verify = option.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 540:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestGameLogotype.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();