// app/modules/a11y/native/TextWithIOSLinkWorkaround.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: findLinks
        michal = _closure1_slot2;
        tangon = michal.Children;
        zuuluu = tangon.toArray;
        michal = argFoo;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.filter;
        entity = _closure1_slot2;
        entity = entity.isValidElement;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.flatMap;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.type;
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                entity = 4;
                entity = report[entity];
                report = undefined;
                entity = oscard.bind(report)(entity);
                entity = entity.I18nLinkComponent;
                if(!(tangon !== entity)) { _fun00002_ip = 86; continue _fun00001 }
 43:
                entity = zuuluu.props;
                tangon = entity.children;
                entity = null;
                if(!(entity == tangon)) { _fun00002_ip = 65; continue _fun00001 }
 59:
                entity = new Array(0);
                _fun00002_ip = 84; continue _fun00001;
 65:
                tangon = _closure1_slot7;
                michal = zuuluu.props;
                michal = michal.children;
                entity = tangon.bind(report)(michal);
 84:
                _fun00002_ip = 97; continue _fun00001;
 86:
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 97:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot4 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'column', 'flexShrink': 1};
    tangon['column'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/a11y/native/TextWithIOSLinkWorkaround.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TextWithIOSLinkWorkaround
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.children;
            entity = null;
            michal = Object.create(entity);
            entity = 0;
            michal['children'] = entity;
            backup = {};
            foxtra = tangon;
            romeon = michal;
            foxtra = copyDataProperties(backup, foxtra, romeon);
            michal = _closure1_slot6;
            tangon = undefined;
            report = michal.bind(tangon)();
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 5;
            michal = verify[michal];
            oscard = option.bind(tangon)(michal);
            michal = oscard.useIsScreenReaderEnabled;
            michal = michal.bind(oscard)();
            offset = _closure1_slot4;
            oscard = 6;
            oscard = verify[oscard];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {};
            backup = oscard;
            yankee = copyDataProperties(backup, foxtra);
            yankee = 'children';
            oscard[yankee] = zuuluu;
            golfie = offset.bind(tangon)(golfie, oscard);
            oscard = 7;
            oscard = verify[oscard];
            option = option.bind(tangon)(oscard);
            oscard = option.isIOS;
            oscard = oscard.bind(option)();
            if(!oscard) { _fun00004_ip = 147; continue _fun00003 }
 144:
            if(michal) { _fun00004_ip = 149; continue _fun00003 }
 147:
            return golfie;
 149:
            michal = _closure1_slot7;
            oscard = michal.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            report = report.column;
            entity['style'] = report;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TextWithIOSLinkWorkaround'] = michal;
    return entity;
})();