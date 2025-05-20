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
            output = entity.theme;
            tangon = undefined;
            if(!(output === tangon)) { _fun00002_ip = 35; continue _fun00001 }
 22:
            zuuluu = _closure1_slot3;
            output = zuuluu.DARK;
 35:
            var _closure2_slot0 = output;
            sizing = entity.primaryColor;
            if(!(sizing === tangon)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            sizing = null;
 51:
            var _closure2_slot1 = sizing;
            kiloes = entity.secondaryColor;
            if(!(kiloes === tangon)) { _fun00002_ip = 67; continue _fun00001 }
 65:
            kiloes = null;
 67:
            var _closure2_slot2 = kiloes;
            backup = entity.gradient;
            if(!(backup === tangon)) { _fun00002_ip = 83; continue _fun00001 }
 81:
            backup = null;
 83:
            var _closure2_slot3 = backup;
            foxtra = entity.flags;
            if(!(foxtra === tangon)) { _fun00002_ip = 98; continue _fun00001 }
 96:
            foxtra = 0;
 98:
            var _closure2_slot4 = foxtra;
            romeon = entity.contrast;
            if(!(romeon === tangon)) { _fun00002_ip = 115; continue _fun00001 }
 112:
            romeon = 1;
 115:
            var _closure2_slot5 = romeon;
            yankee = entity.saturation;
            if(!(yankee === tangon)) { _fun00002_ip = 132; continue _fun00001 }
 129:
            yankee = 1;
 132:
            var _closure2_slot6 = yankee;
            offset = entity.density;
            if(!(offset === tangon)) { _fun00002_ip = 150; continue _fun00001 }
 146:
            offset = 'compact';
 150:
            var _closure2_slot7 = offset;
            verify = entity.disableAdaptiveTheme;
            if(!(verify === tangon)) { _fun00002_ip = 166; continue _fun00001 }
 164:
            verify = false;
 166:
            var _closure2_slot8 = verify;
            option = entity.reduceAdaptiveTheme;
            if(!(option === tangon)) { _fun00002_ip = 182; continue _fun00001 }
 180:
            option = false;
 182:
            var _closure2_slot9 = option;
            golfie = _closure1_slot2;
            oscard = golfie.useMemo;
            zuuluu = new Array(10);
            zuuluu[0] = output;
            zuuluu[1] = sizing;
            zuuluu[2] = kiloes;
            zuuluu[3] = backup;
            zuuluu[4] = foxtra;
            zuuluu[5] = romeon;
            zuuluu[6] = yankee;
            zuuluu[7] = offset;
            zuuluu[8] = verify;
            zuuluu[9] = option;
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
                report = _closure2_slot8;
                entity['disableAdaptiveTheme'] = report;
                tangon = _closure2_slot9;
                entity['reduceAdaptiveTheme'] = tangon;
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