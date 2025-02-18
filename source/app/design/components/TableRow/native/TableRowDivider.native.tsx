// app/design/components/TableRow/native/TableRowDivider.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.StyleSheet;
    var _closure1_slot2 = golfie;
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.TABLE_DIVIDER_WIDTH;
    var _closure1_slot4 = golfie;
    tangon = tangon.TABLE_ROW_DIVIDER_PADDING;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 5;
            tangon = report[tangon];
            report = undefined;
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.CARD_PRIMARY_BG;
            michal['backgroundColor'] = tangon;
            tangon = _closure1_slot4;
            michal['height'] = tangon;
            tangon = 12;
            oscard = argFoo;
            if(!oscard) { _fun00002_ip = 60; continue _fun00001 }
 56:
            tangon = _closure1_slot5;
 60:
            michal['paddingStart'] = tangon;
            oscard = _closure1_slot4;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 6;
            tangon = option[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.isAndroid;
            golfie = tangon.bind(golfie)();
            tangon = 0;
            if(!golfie) { _fun00002_ip = 113; continue _fun00001 }
 103:
            golfie = _closure1_slot2;
            tangon = golfie.hairlineWidth;
 113:
            tangon = oscard + tangon;
            tangon = -tangon;
            michal['marginTop'] = tangon;
            entity['container'] = michal;
            michal = {};
            tangon = _closure1_slot4;
            michal['height'] = tangon;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 7;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.DIVIDER_BACKGROUND;
            michal['backgroundColor'] = zuuluu;
            entity['divider'] = michal;
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/TableRow/native/TableRowDivider.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TableRowDivider
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.adjustSpacingForIcon;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            zuuluu = false;
 17:
            michal = _closure1_slot7;
            oscard = michal.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = oscard.container;
            entity['style'] = report;
            report = {};
            oscard = oscard.divider;
            report['style'] = oscard;
            report = zuuluu.bind(tangon)(michal, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TableRowDivider'] = michal;
    return entity;
})();