// app/design/components/experimental/Button/native/TwinButtons.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = {};
            tangon = 'row';
            if(!zuuluu) { _fun00002_ip = 18; continue _fun00001 }
 14:
            tangon = 'column';
 18:
            michal['flexDirection'] = tangon;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 4;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            tangon = tangon.spacing;
            if(zuuluu) { _fun00002_ip = 63; continue _fun00001 }
 55:
            zuuluu = tangon.PX_12;
            _fun00002_ip = 69; continue _fun00001;
 63:
            zuuluu = tangon.PX_8;
 69:
            michal['gap'] = zuuluu;
            entity['container'] = michal;
            michal = {};
            zuuluu = 1;
            michal['flex'] = zuuluu;
            entity['button'] = michal;
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/experimental/Button/native/TwinButtons.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TwinButtons
        entity = argFoo;
        option = entity.children;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 5;
        entity = zuuluu[entity];
        tangon = undefined;
        michal = michal.bind(tangon)(entity);
        entity = michal.useFontScale;
        zuuluu = entity.bind(michal)();
        michal = _closure1_slot6;
        entity = 1.2;
        entity = zuuluu > entity;
        golfie = michal.bind(tangon)(entity);
        var _closure2_slot0 = golfie;
        zuuluu = _closure1_slot5;
        michal = _closure1_slot4;
        entity = {};
        golfie = golfie.container;
        entity['style'] = golfie;
        oscard = _closure1_slot3;
        golfie = oscard.Children;
        oscard = golfie.map;
        report = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = argFoo;
                zuuluu = _closure1_slot3;
                entity = zuuluu.isValidElement;
                zuuluu = entity.bind(zuuluu)(oscard);
                entity = null;
                if(!zuuluu) { _fun00004_ip = 102; continue _fun00003 }
 26:
                tangon = oscard.type;
                option = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                report = undefined;
                zuuluu = option.bind(report)(zuuluu);
                zuuluu = zuuluu.Button;
                entity = null;
                if(!(tangon === zuuluu)) { _fun00004_ip = 102; continue _fun00003 }
 65:
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot4;
                michal = {};
                golfie = _closure2_slot0;
                golfie = golfie.button;
                michal['style'] = golfie;
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 102:
                return entity;
            }
        };
        report = oscard.bind(golfie)(option, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['TwinButtons'] = michal;
    return entity;
})();