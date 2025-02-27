// app/design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: RootThemeContextProvider
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            sizing = entity.theme;
            tangon = undefined;
            if(!(sizing === tangon)) { _fun00002_ip = 35; continue _fun00001 }
 22:
            zuuluu = _closure1_slot3;
            sizing = zuuluu.DARK;
 35:
            var _closure2_slot0 = sizing;
            kiloes = entity.primaryColor;
            if(!(kiloes === tangon)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            kiloes = null;
 51:
            var _closure2_slot1 = kiloes;
            backup = entity.secondaryColor;
            if(!(backup === tangon)) { _fun00002_ip = 67; continue _fun00001 }
 65:
            backup = null;
 67:
            var _closure2_slot2 = backup;
            foxtra = entity.gradient;
            if(!(foxtra === tangon)) { _fun00002_ip = 83; continue _fun00001 }
 81:
            foxtra = null;
 83:
            var _closure2_slot3 = foxtra;
            romeon = entity.flags;
            if(!(romeon === tangon)) { _fun00002_ip = 98; continue _fun00001 }
 96:
            romeon = 0;
 98:
            var _closure2_slot4 = romeon;
            yankee = entity.contrast;
            if(!(yankee === tangon)) { _fun00002_ip = 115; continue _fun00001 }
 112:
            yankee = 1;
 115:
            var _closure2_slot5 = yankee;
            offset = entity.saturation;
            if(!(offset === tangon)) { _fun00002_ip = 132; continue _fun00001 }
 129:
            offset = 1;
 132:
            var _closure2_slot6 = offset;
            verify = entity.density;
            if(!(verify === tangon)) { _fun00002_ip = 150; continue _fun00001 }
 146:
            verify = 'compact';
 150:
            var _closure2_slot7 = verify;
            option = entity.disableAdaptiveTheme;
            if(!(option === tangon)) { _fun00002_ip = 166; continue _fun00001 }
 164:
            option = false;
 166:
            var _closure2_slot8 = option;
            golfie = _closure1_slot2;
            oscard = golfie.useMemo;
            zuuluu = new Array(9);
            zuuluu[0] = sizing;
            zuuluu[1] = kiloes;
            zuuluu[2] = backup;
            zuuluu[3] = foxtra;
            zuuluu[4] = romeon;
            zuuluu[5] = yankee;
            zuuluu[6] = offset;
            zuuluu[7] = verify;
            zuuluu[8] = option;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.createThemedContext;
                entity = {};
                report = _closure2_slot0;
                entity['theme'] = report;
                report = _closure2_slot1;
                entity['primaryColor'] = report;
                report = _closure2_slot2;
                entity['secondaryColor'] = report;
                report = _closure2_slot3;
                entity['gradient'] = report;
                report = _closure2_slot4;
                entity['flags'] = report;
                report = _closure2_slot5;
                entity['contrast'] = report;
                report = _closure2_slot6;
                entity['saturation'] = report;
                report = _closure2_slot7;
                entity['density'] = report;
                tangon = _closure2_slot8;
                entity['disableAdaptiveTheme'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot4;
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.ThemeContext;
            michal = entity.Provider;
            entity = {};
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['RootThemeContextProvider'] = tangon;
    michal = function(argFoo) { // Original name: DisableCustomTheme
        michal = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        golfie = oscard[entity];
        tangon = undefined;
        option = michal.bind(tangon)(golfie);
        golfie = option.useThemeContext;
        offset = golfie.bind(option)();
        var _closure2_slot0 = offset;
        verify = _closure1_slot2;
        option = verify.useMemo;
        golfie = new Array(1);
        golfie[0] = offset;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.createThemedContext;
            entity = {};
            oscard = _closure2_slot0;
            golfie = entity;
            tangon = copyDataProperties(golfie, oscard);
            report = null;
            tangon = 'primaryColor';
            entity[tangon] = report;
            tangon = 'secondaryColor';
            entity[tangon] = report;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = option.bind(verify)(report, golfie);
        zuuluu = _closure1_slot4;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.ThemeContext;
        michal = entity.Provider;
        entity = {};
        entity['value'] = report;
        report = argFoo;
        report = report.children;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['DisableCustomTheme'] = michal;
    return entity;
})();