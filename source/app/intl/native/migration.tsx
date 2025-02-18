// app/intl/native/migration.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    michal = function(argFoo) { // Original name: IntlLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.target;
            var _closure2_slot0 = zuuluu;
            report = entity.children;
            option = _closure1_slot3;
            golfie = option.useContext;
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            oscard = oscard[tangon];
            tangon = undefined;
            oscard = verify.bind(tangon)(oscard);
            oscard = oscard.AccessibilityPreferencesContext;
            oscard = golfie.bind(option)(oscard);
            golfie = oscard.alwaysShowLinkDecorations;
            oscard = _closure1_slot5;
            oscard = oscard.bind(tangon)(golfie);
            verify = typeof zuuluu;
            golfie = 'string';
            if(!(golfie !== verify)) { _fun00002_ip = 126; continue _fun00001 }
 92:
            option = 'object';
            golfie = zuuluu;
            if(!(option === verify)) { _fun00002_ip = 124; continue _fun00001 }
 103:
            verify = zuuluu.onClick;
            option = null;
            golfie = zuuluu;
            if(!(option != verify)) { _fun00002_ip = 124; continue _fun00001 }
 118:
            golfie = zuuluu.onClick;
 124:
            _fun00002_ip = 131; continue _fun00001;
 126:
            golfie = function() {
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 5;
                entity = oscard[entity];
                tangon = undefined;
                zuuluu = report.bind(tangon)(entity);
                michal = zuuluu.openURL;
                entity = 6;
                entity = oscard[entity];
                report = report.bind(tangon)(entity);
                tangon = report.sanitizeUrl;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
 131:
            zuuluu = _closure1_slot4;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 7;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {'accessible': true, 'accessibilityRole': 'link'};
            entity['onPress'] = golfie;
            oscard = oscard.link;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = {};
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.TEXT_LINK;
            michal['color'] = zuuluu;
            zuuluu = 'none';
            tangon = argFoo;
            if(!tangon) { _fun00004_ip = 58; continue _fun00003 }
 54:
            zuuluu = 'underline';
 58:
            michal['textDecorationLine'] = zuuluu;
            entity['link'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'intl/native/migration.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['IntlLink'] = michal;
    zuuluu['I18nLinkComponent'] = michal;
    return entity;
})();