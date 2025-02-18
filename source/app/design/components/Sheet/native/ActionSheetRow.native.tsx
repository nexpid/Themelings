// app/design/components/Sheet/native/ActionSheetRow.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: ActionSheetRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.label;
            romeon = zuuluu.variant;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00002_ip = 23; continue _fun00001 }
 19:
            romeon = 'default';
 23:
            offset = zuuluu.arrow;
            verify = zuuluu.icon;
            michal = {'label': 0, 'variant': 0, 'arrow': 0, 'icon': 0};
            kiloes = null;
            sizing = michal;
            entity = silentSetPrototypeOf(sizing, kiloes);
            sizing = {};
            kiloes = zuuluu;
            backup = michal;
            kiloes = copyDataProperties(sizing, kiloes, backup);
            zuuluu = _closure1_slot4;
            entity = _closure1_slot5;
            michal = entity.Provider;
            entity = {};
            entity['value'] = romeon;
            golfie = _closure1_slot4;
            oscard = _closure1_slot0;
            foxtra = _closure1_slot1;
            report = 3;
            report = foxtra[report];
            report = oscard.bind(tangon)(report);
            oscard = report.TableRow;
            report = {};
            report['variant'] = romeon;
            report['label'] = yankee;
            report['arrow'] = offset;
            report['icon'] = verify;
            sizing = report;
            option = copyDataProperties(sizing, kiloes);
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
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
    verify = report.bind(entity)(option);
    var _closure1_slot2 = verify;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot4 = report;
    option = verify.createContext;
    report = 'default';
    report = option.bind(verify)(report);
    var _closure1_slot5 = report;
    report = function(argFoo) { // Original name: ActionSheetRowIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.source;
            golfie = entity.IconComponent;
            tangon = _closure1_slot2;
            zuuluu = tangon.useContext;
            michal = _closure1_slot5;
            report = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot4;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 4;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.TableRowIcon;
            entity = {};
            entity['source'] = oscard;
            oscard = null;
            option = oscard != golfie;
            oscard = undefined;
            if(!option) { _fun00004_ip = 88; continue _fun00003 }
 85:
            oscard = golfie;
 88:
            entity['IconComponent'] = oscard;
            entity['variant'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    tangon['Icon'] = report;
    report = function(argFoo) { // Original name: ActionSheetRowGroup
        entity = argFoo;
        golfie = entity.children;
        option = entity.title;
        verify = entity.hasIcons;
        tangon = _closure1_slot4;
        zuuluu = _closure1_slot3;
        michal = {};
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        report = report[entity];
        entity = undefined;
        report = oscard.bind(entity)(report);
        oscard = report.TableRowGroup;
        report = {};
        report['hasIcons'] = verify;
        report['title'] = option;
        report['children'] = golfie;
        report = tangon.bind(entity)(oscard, report);
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon['Group'] = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Sheet/native/ActionSheetRow.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ActionSheetRow'] = tangon;
    michal = function(argFoo) { // Original name: ActionSheetSwitchRow
        tangon = _closure1_slot4;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 6;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.TableSwitchRow;
        entity = {};
        oscard = argFoo;
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['ActionSheetSwitchRow'] = michal;
    return entity;
})();